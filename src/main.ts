import { createVueApp } from './create-vue'
import { App } from './components/app'
import { router } from './vue-plugins'
import 'virtual:uno.css'

const app = createVueApp(App, {
  plugins: [router],
})

app.mount('#app')
