import { createApp, type Component, type Plugin } from 'vue'
type Data = Record<string, unknown>

// 简单封装，方便 plugins 的归类使用
export function createVueApp(
  component: Component,
  options?: {
    rootProps?: Data | null
    plugins?: ([Plugin, ...unknown[]] | Plugin)[]
  },
) {
  const { rootProps, plugins } = options ?? {}

  const app = createApp(component, rootProps)

  plugins?.forEach((p) => {
    if (Array.isArray(p)) {
      const [plugin, ...reset] = p
      app.use(plugin, ...reset)
    } else app.use(p)
  })

  return app
}
