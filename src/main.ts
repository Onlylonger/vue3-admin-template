import { createVueApp } from './create-vue'
import { App } from './components/app'
import { vuePlugins } from './vue-plugins'

const app = createVueApp(App, {
  plugins: vuePlugins,
})

app.mount('#app')
