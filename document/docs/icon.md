<script>
    export default {
        mounted () {
            this.$nextTick(_ => {
                let firstDemo = document.querySelector('.source')
                firstDemo.style.padding = '0'
                let blocks = document.querySelectorAll('.source .block')
                let maxHeight = 0
                for (let i = 0, len = blocks.length; i < len; i++) {
                    maxHeight = Math.max(maxHeight, blocks[i].clientHeight)
                }
                [].slice.call(blocks, 0).forEach(block => {
                    block.style.height = maxHeight + 'px'
                })
            })
        }
    }
</script>
<style>
    .demo-icon .block{
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px #EFF2F6;
        border-bottom: solid 1px #EFF2F6;
        float: left;
        width: 50%;
        box-sizing: border-box;
        &:nth-child(2n) {
          border-right: none;
        }
        &:nth-last-child(2), &:nth-last-child(1) {
          border-bottom: none;
        }
    }
    .demo-icon .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }
</style>
## Icon 图标

计划只提供组件库使用到的图标集合。如果想使用更多的 Goggle's [material-design-icons](https://github.com/google/material-design-icons) 中的图标，请在 [http://icons.savoygu.com](http://icons.savoygu.com) 上进行查找。

### 使用方式

:::demo 通过 `spin` 为图标添加旋转动画，`scale` 进行图标缩放，`flip` 进行水平和垂直方向翻转。
```html
<div class="block">
  <span class="demonstration">默认</span>
  <mv-icon name="share"></mv-icon>
</div>
<div class="block">
  <span class="demonstration">linear 旋转</span>
  <mv-icon name="3d_rotation" spin></mv-icon>
</div>
<div class="block">
  <span class="demonstration">step(8) 旋转</span>
   <mv-icon name="3d_rotation" pulse></mv-icon>
</div>
<div class="block">
  <span class="demonstration">缩放</span>
  <mv-icon name="3d_rotation" scale="2"></mv-icon>
</div>
<div class="block">
  <span class="demonstration">垂直翻转</span>
   <mv-icon name="share" flip="vertical"></mv-icon>
</div>
<div class="block">
  <span class="demonstration">水平翻转</span>
   <mv-icon name="share" flip="horizontal"></mv-icon>
</div>
<div class="block">
  <span class="demonstration">反转(白色)</span>
   <mv-icon name="3d_rotation" inverse></mv-icon>
</div>
```
:::

使用详情参考：[https://github.com/savoygu/vue-md-icons](https://github.com/savoygu/vue-md-icons)

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | 图标名称 | string | — | — |
| scale | 缩放比例 | number/string | 正整数 | 1 |
| spin | 是否 linear 旋转图标 | boolean | — | false |
| inverse | 是否反转图标 | boolean | — | false |
| pulse | 是否 step(8) 旋转图标 | boolean | — | false |
| flip | 翻转图标 | string | normal, horizontal, vertical | normal |
| label | 屏幕阅读器 | string | — | — |
