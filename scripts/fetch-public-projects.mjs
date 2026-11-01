#!/usr/bin/env node
/** Build-time public catalog. Private metadata is never written to the site. */
import assert from 'node:assert/strict';
import { writeFile, rename, unlink } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The lab's engineering org first, then the personal account that held everything before the move.
export const OWNERS = ['WCKDai', 'wckdboy'];
const listing = (owner) => owner === 'wckdboy'
  ? `https://api.github.com/users/${owner}/repos?type=owner&per_page=100`
  : `https://api.github.com/orgs/${owner}/repos?type=public&per_page=100`;
const output = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/public-repos.json');

export function publicRepositories(input, owner = OWNERS[0]) {
  assert(Array.isArray(input), 'Expected a GitHub repository list');
  assert(OWNERS.includes(owner), 'Unexpected owner');
  const names = new Set();
  return input.filter((r) => r?.private === false && r.visibility === 'public').map((r) => {
    assert(typeof r.name === 'string' && /^[A-Za-z0-9_.-]+$/.test(r.name), 'Invalid repository name');
    assert(r.html_url === `https://github.com/${owner}/${r.name}`, 'Unexpected repository URL');
    assert(!names.has(r.name.toLowerCase()), 'Duplicate repository');
    assert(typeof r.fork === 'boolean' && typeof r.archived === 'boolean', 'Missing repository type');
    assert(r.description === null || typeof r.description === 'string', 'Invalid description');
    names.add(r.name.toLowerCase());
    return { name: r.name, owner, url: r.html_url, description: r.description ?? '', visibility: 'public', isFork: r.fork, isArchived: r.archived };
  }).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));
}

export async function refresh({ request = fetch, destination = output, now = () => new Date(), owners = OWNERS } = {}) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'wckd-public-projects', 'X-GitHub-Api-Version': '2022-11-28' };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  const repositories = [];
  for (const owner of owners) {
    const input = [];
    let complete = false;
    for (let page = 1; page <= 10; page++) {
      const response = await request(`${listing(owner)}&page=${page}`, { headers, signal: AbortSignal.timeout(20_000), redirect: 'error' });
      assert(response.ok, `GitHub project index returned HTTP ${response.status}`);
      const rows = await response.json();
      assert(Array.isArray(rows) && rows.length <= 100, 'Invalid repository page');
      input.push(...rows);
      if (rows.length < 100) { complete = true; break; }
    }
    assert(complete, 'Catalog exceeded its page budget; previous snapshot preserved');
    const rows = publicRepositories(input, owner);
    assert(rows.length > 0, `Empty public catalog for ${owner}; previous snapshot preserved`);
    repositories.push(...rows);
  }
  const seen = new Set();
  for (const r of repositories) {
    assert(!seen.has(r.name.toLowerCase()), `Repository name in two owners: ${r.name}`);
    seen.add(r.name.toLowerCase());
  }
  repositories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));
  const value = { updated: now().toISOString().slice(0, 10), owners, repositories };
  const temporary = `${destination}.${process.pid}.tmp`;
  try {
    await writeFile(temporary, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
    await rename(temporary, destination);
  } finally {
    await unlink(temporary).catch((error) => { if (error.code !== 'ENOENT') throw error; });
  }
  return value;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { console.log(`Public project index: ${(await refresh()).repositories.length} repositories`); }
  catch (error) {
    console.error(`Project refresh failed; committed snapshot retained: ${error.message}`);
    process.exitCode = process.argv.includes('--soft') ? 0 : 1;
  }
}
