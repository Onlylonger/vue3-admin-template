<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { elementUILocale } from '../locale'
import { themeVars } from './theme/vars'

console.log(themeVars)
</script>

<template>
  <ElConfigProvider :locale="elementUILocale">
    <RouterView />
  </ElConfigProvider>
</template>

<style>
@import './styles/css/global.css';
</style>

<style lang="scss">
// @import url(./styles/scss/global.scss);
$radius: 6px;

.el-menu {
  border-right: none;
  &.el-menu--horizontal {
    border: none;
  }
  .el-sub-menu.is-active {
    > .el-sub-menu__title {
      color: var(--el-menu-active-color);
    }
  }
  .el-sub-menu__title:hover,
  li.el-menu-item:not(.is-disabled):hover,
  .el-menu-item.is-active {
    background-color: unset;
    &::before {
      content: '';
      position: absolute;
      z-index: auto;
      left: 8px;
      right: 8px;
      top: 0;
      bottom: 0;
      border-radius: $radius;
      pointer-events: none;
      background-color: var(--el-menu-item-hover-fill);
    }
  }
  li.el-menu-item {
    margin-top: 6px;
    &.is-active,
    &.is-active:hover {
      &::before {
        background-color: var(--el-menu-hover-bg-color);
      }
    }
  }
  li.el-sub-menu {
    margin-top: 6px;
  }
}
</style>

<style>
:root {
  --primary-color: 100 108 255;
  --primary-50-color: 240 243 255;
  --primary-100-color: 240 243 255;
  --primary-200-color: 222 227 255;
  --primary-300-color: 181 190 255;
  --primary-400-color: 140 150 255;
  --primary-500-color: 100 108 255;
  --primary-600-color: 74 76 217;
  --primary-700-color: 54 52 179;
  --primary-800-color: 39 34 140;
  --primary-900-color: 30 23 102;
  --primary-950-color: 15 9 64;
  --info-color: 100 108 255;
  --info-50-color: 240 243 255;
  --info-100-color: 240 243 255;
  --info-200-color: 222 227 255;
  --info-300-color: 181 190 255;
  --info-400-color: 140 150 255;
  --info-500-color: 100 108 255;
  --info-600-color: 74 76 217;
  --info-700-color: 54 52 179;
  --info-800-color: 39 34 140;
  --info-900-color: 30 23 102;
  --info-950-color: 15 9 64;
  --success-color: 82 196 26;
  --success-50-color: 246 255 237;
  --success-100-color: 217 247 190;
  --success-200-color: 183 235 143;
  --success-300-color: 149 222 100;
  --success-400-color: 115 209 61;
  --success-500-color: 82 196 26;
  --success-600-color: 56 158 13;
  --success-700-color: 35 120 4;
  --success-800-color: 19 82 0;
  --success-900-color: 9 43 0;
  --success-950-color: 1 5 0;
  --warning-color: 250 173 20;
  --warning-50-color: 255 251 230;
  --warning-100-color: 255 241 184;
  --warning-200-color: 255 229 143;
  --warning-300-color: 255 214 102;
  --warning-400-color: 255 197 61;
  --warning-500-color: 250 173 20;
  --warning-600-color: 212 136 6;
  --warning-700-color: 173 104 0;
  --warning-800-color: 135 77 0;
  --warning-900-color: 97 52 0;
  --warning-950-color: 59 29 0;
  --error-color: 245 34 45;
  --error-50-color: 255 241 240;
  --error-100-color: 255 204 199;
  --error-200-color: 255 163 158;
  --error-300-color: 255 120 117;
  --error-400-color: 255 77 79;
  --error-500-color: 245 34 45;
  --error-600-color: 207 19 34;
  --error-700-color: 168 7 26;
  --error-800-color: 130 0 20;
  --error-900-color: 92 0 17;
  --error-950-color: 54 0 12;
  --nprogress-color: 100 108 255;
  --container-bg-color: 255 255 255;
  --layout-bg-color: 247 250 252;
  --inverted-bg-color: 0 20 40;
  --base-text-color: 31 31 31;
  --header-box-shadow: 0 1px 2px rgb(0, 21, 41, 0.08);
  --sider-box-shadow: 2px 0 8px 0 rgb(29, 35, 41, 0.05);
  --tab-box-shadow: 0 1px 2px rgb(0, 21, 41, 0.08);

  --el-color-primary: rgb(var(--primary-color));
  --el-color-primary-light-3: rgb(var(--primary-400-color));
  --el-color-primary-light-5: rgb(var(--primary-300-color));
  --el-color-primary-light-7: rgb(var(--primary-200-color));
  --el-color-primary-light-9: rgb(var(--primary-50-color));

  --el-color-success: rgb(var(--success-color));
  --el-color-success-light-3: rgb(var(--success-400-color));
  --el-color-success-light-5: rgb(var(--success-300-color));
  --el-color-success-light-7: rgb(var(--success-200-color));
  --el-color-success-light-9: rgb(var(--success-50-color));

  --el-color-warning: rgb(var(--warning-color));
  --el-color-warning-light-3: rgb(var(--warning-400-color));
  --el-color-warning-light-5: rgb(var(--warning-300-color));
  --el-color-warning-light-7: rgb(var(--warning-200-color));
  --el-color-warning-light-9: rgb(var(--warning-50-color));

  --el-color-info: rgb(var(--info-color));
  --el-color-info-light-3: rgb(var(--info-400-color));
  --el-color-info-light-5: rgb(var(--info-300-color));
  --el-color-info-light-7: rgb(var(--info-200-color));
  --el-color-info-light-9: rgb(var(--info-50-color));

  --el-color-danger: rgb(var(--error-color));
  --el-color-danger-light-3: rgb(var(--error-400-color));
  --el-color-danger-light-5: rgb(var(--error-300-color));
  --el-color-danger-light-7: rgb(var(--error-200-color));
  --el-color-danger-light-9: rgb(var(--error-50-color));

  --el-menu-item-hover-fill: rgba(0, 0, 0, 0.05);

  --el-menu-item-height: 42px;
}
</style>
