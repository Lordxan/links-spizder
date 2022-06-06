const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: sveltePreprocess({ typescript: false, scss: false }),
  experimental: {
    useVitePreprocess: true
  }
}
