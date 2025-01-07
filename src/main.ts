import 'virtual:uno.css'
import { App } from './modules/app'
import { createApp } from 'vue'
import { router } from './modules/app/router'

const app = createApp(App)

const plugins = [router]

plugins.forEach((p) => {
  app.use(p)
})

app.mount('#app')
