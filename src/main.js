import App from './App.svelte'
import './assets/manifest.json';

const target = document.createElement('div')

document.documentElement.append(target)

const app = new App({
  target
})

export default app
