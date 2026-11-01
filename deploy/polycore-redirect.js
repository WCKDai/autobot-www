// polycore.dev has no site of its own yet: send every path to the kernel's source.
export default {
  fetch() {
    return Response.redirect('https://github.com/WCKDai/polycore', 302);
  },
};
