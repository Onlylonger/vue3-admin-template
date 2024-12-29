# vue3-admin-template

由官网`vite-cli`初始化，参考 `SoybeanAdmin` 项目进行调整。想达到以下目的：

1. UI 简洁
2. 尽量兼容移动端
3. 主题可自定义
4. 支持国际化
5. 代码尽量简洁明了

### Records

- Re-export 写法疑问

components/app/index.ts

```ts
// export * from './App.vue' // 这种re-export 写法，会造成 外部文件 import 失败
export { default as App } from './App.vue'
```

main.ts

```ts
import { App } from '@/components/app'
```
