import { createVueApp } from './create-vue'
import { App } from './components/app'
import { pinia, router } from './vue-plugins'
import 'virtual:uno.css'

const app = createVueApp(App, {
  plugins: [pinia, router],
})

app.mount('#app')
