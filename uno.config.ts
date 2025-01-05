import { defineConfig } from 'unocss'
import { adminPreset } from './uno-preset'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), adminPreset],
})
