import './app.css'
import App from './App.svelte'

const overview = {
  id: "",
  name: "",
  cover: ""
};


const app = new App({
  target: document.getElementById('app')
})

export default app
