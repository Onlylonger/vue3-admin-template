import 'virtual:uno.css'
import { App, router } from './modules/app'
import { createApp } from 'vue'

const app = createApp(App)

const plugins = [router]

plugins.forEach((p) => {
  app.use(p)
})

app.mount('#app')
