/** Navigation and footer for each site on the Lab layout. */
export const NAV = {
  autobot: {
    nav: [
      { label: 'Overview', href: '/' },
      { label: 'Install', href: '/install/' },
      { label: 'Status', href: '/#status' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Verify', href: '/verify/' },
      { label: 'Releases', href: '/releases/' },
      { label: 'Source', href: 'https://github.com/WCKDai/autobot' },
    ],
    footer: 'Autobot’s own code is free software: the apps Apache-2.0, the agent MIT. No accounts. No telemetry. Made by WCKD.',
    repo: 'https://github.com/WCKDai/autobot',
  },
  invincible: {
    nav: [
      { label: 'Overview', href: '/' },
      { label: 'Install', href: '/install/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'Cluster', href: '/#cluster' },
      { label: 'Training', href: '/#training' },
      { label: 'Status', href: '/#status' },
      { label: 'Verify', href: '/verify/' },
      { label: 'Releases', href: '/releases/' },
      { label: 'Source', href: 'https://github.com/WCKDai/invincible' },
    ],
    footer: 'Invincible is free software under MIT. It runs on hardware you own and phones home to nobody. Made by WCKD.',
    repo: 'https://github.com/WCKDai/invincible',
  },
  wckd: {
    nav: [
      { label: 'Projects', href: '/#projects' },
      { label: 'Brand', href: '/brand/' },
      { label: 'GitHub', href: 'https://github.com/WCKDai' },
    ],
    footer: 'WCKD is the independent lab behind every project here: software, robotics, experiments and open research.',
    repo: 'https://github.com/WCKDai',
  },
  sovware: {
    nav: [
      { label: 'Sovereign', href: '/#sovereign' },
      { label: 'The org', href: '/#work' },
      { label: 'Stack', href: '/#stack' },
      { label: 'Kernel', href: '/#kernel' },
      { label: 'Brand', href: '/brand/' },
      { label: 'Source', href: 'https://github.com/WCKDai' },
    ],
    footer: 'Sovware is the non-profit community that keeps WCKD\'s software sovereign: mirrored, archived, secured, checked.',
    repo: 'https://github.com/WCKDai',
  },
  omnie: {
    nav: [
      { label: 'How it fits', href: '/#how-it-works' },
      { label: 'Reports', href: '/#reports' },
      { label: 'Questions', href: '/#questions' },
      { label: 'Dansk ↗', href: 'https://omnie.dk' },
    ],
    footer: 'Omnie / connect apps and data. e-conomic reporting first. In development. Made by WCKD.',
    repo: 'https://wckd.ai',
  },
  'omnie-dk': {
    nav: [
      { label: 'Sådan hænger det sammen', href: '/#how-it-works' },
      { label: 'Rapporter', href: '/#reports' },
      { label: 'Spørgsmål', href: '/#questions' },
      { label: 'English ↗', href: 'https://omnie.sh' },
    ],
    footer: 'Omnie / forbind apps og data. Første fokus er e-conomic-rapporter. Under udvikling. Skabt af WCKD.',
    repo: 'https://wckd.ai',
  },
  nightfall: {
    nav: [
      { label: 'Overview', href: '/' },
      { label: 'Polykrom', href: 'https://polykrom.app' },
      { label: 'PolyCore', href: 'https://github.com/WCKDai/polycore' },
      { label: 'Brand', href: '/brand/' },
      { label: 'Source', href: 'https://github.com/wckdboy/nightfall' },
      { label: 'WCKD', href: 'https://wckd.ai' },
    ],
    footer: 'Nightfall is archived; it continues as Polykrom and PolyCore. Made by WCKD.',
    repo: 'https://github.com/wckdboy/nightfall',
  },
  tinyrex: {
    nav: [
      { label: 'Overview', href: '/' },
      { label: 'Source', href: 'https://github.com/WCKDai/tinyrex' },
      { label: 'WCKD', href: 'https://wckd.ai' },
    ],
    footer: 'Tinyrex / a WCKD robotics project.',
    repo: 'https://github.com/WCKDai/tinyrex',
  },
  trigon: {
    nav: [
      { label: 'Overview', href: '/' },
      { label: 'Agent', href: '/#agent' },
      { label: 'Today', href: '/#today' },
      { label: 'Kernel', href: '/#kernel' },
      { label: 'Start', href: '/#start' },
      { label: 'Source', href: 'https://github.com/WCKDai/trigon' },
      { label: 'WCKD', href: 'https://wckd.ai' },
    ],
    footer: 'Trigon / free and open-source building modelling. MIT OR Apache-2.0. Early MVP, Denmark first. Made by WCKD.',
    repo: 'https://github.com/WCKDai/trigon',
  },
} as const;
