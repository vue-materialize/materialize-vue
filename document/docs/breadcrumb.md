<script>
  export default {
    mounted () {
      this.$nextTick(_ => {
          let firstDemo = document.querySelector('.source')
          firstDemo.style.padding = '0'
      })
    }
  }
</script>
<style>
  .demo-breadcrumb .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }
  .demo-breadcrumb .block:last-child {
    border-bottom: none;
  }
</style>
## Breadcrumb 面包屑

面包屑是显示您当前位置的好方法。当您有多层内容时，通常会使用它。

### 基本

:::demo 通过在 `mv-breadcrumb` 中指定 `separator` 来分隔导航，默认是图标 `keyboard_arrow_right`，你可以指定 `separator` 替换默认分隔符。
```html
<div class="block">
  <mv-row>
    <nav>
      <div class="nav-wrapper">
        <mv-col>
          <mv-breadcrumb>
            <mv-breadcrumb-item to="/">First</mv-breadcrumb-item>
            <mv-breadcrumb-item>Second</mv-breadcrumb-item>
            <mv-breadcrumb-item>Third</mv-breadcrumb-item>
          </mv-breadcrumb>
        </mv-col>
      </div>
    </nav>
  </mv-row>
</div>
<div class="block">
  <mv-row>
    <nav>
      <div class="nav-wrapper">
        <mv-col>
          <mv-breadcrumb separator="/">
            <mv-breadcrumb-item to="/">First</mv-breadcrumb-item>
            <mv-breadcrumb-item>Second</mv-breadcrumb-item>
            <mv-breadcrumb-item>Third</mv-breadcrumb-item>
          </mv-breadcrumb>
        </mv-col>
      </div>
    </nav>
  </mv-row>
</div>
```
:::

### Breadcrumb Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| separator | 分隔符 | string | — | — |

### Breadcrumb Item Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| to | 路由跳转对象，同 `vue-router` 的 `to` | number/string/object | — | — |
| replace | 在使用 `to` 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
| go | 在 history 记录中向前或者后退 `to` (需要是number) 步 | boolean | — | false |
