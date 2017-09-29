<script>
    export default {
        data () {
          return {
            right: false,
            gap: false
          }
        },
        mounted () {
            this.$nextTick(_ => {
                let demos = document.querySelectorAll('.source')
                demos[2].style.padding = '0'
            })
        }
    }
</script>
<style lang="scss">
    .demo-badge {
      .block {
        padding: 30px 24px;
        overflow: hidden;
        border-bottom: 1px solid #eff2f6;
        &:last-child {
           border-bottom: none;
        }
      }
      .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
</style>
## Badge 徽章

徽章可以通知您有新的或未读的消息或通知。

### 基础用法

通过设置 `is-new` 属性， 添加 `new` 类到徽章给它的背景。

:::demo 定义 `value` 属性，它接受 `Number` 或者 `String`。 通过设置`right` 为 `true` 添加 `float: right` 样式，通过设置`gap` 为 `true` 添加 `margin-left: 14px` 样式。
```html
<p>
  <mv-button @click="right=!right">右侧</mv-button>
  <mv-button @click="gap=!gap">间距</mv-button>
</p>
<mv-badge value="521" :right="right" :gap="gap"></mv-badge>
<mv-badge value="521" is-new :right="right" :gap="gap"></mv-badge>
<mv-badge value="521" is-new color="blue" :right="right" :gap="gap"></mv-badge>
<mv-badge value="521" is-new color="red" :right="right" :gap="gap"></mv-badge>

<script >
  export default {
    data () {
      return {
        right: false,
        gap: false
      }
    }
  }
</script>
```
:::

### 最大值

通过设置 `max` 属性， 定义最大值。

:::demo `max` 属性，接受一个 `Number`，生效条件是：需要是一个 `number` 类型的值，并且 `value` 可以通过 `parseInt(value, 10)` 转换为数字。
```html
<mv-badge value="999" :max="521"></mv-badge>
<mv-badge value="999" is-new :max="521"></mv-badge>
<mv-badge value="999" is-new color="blue" :max="521"></mv-badge>
<mv-badge value="999" is-new color="red" :max="521"></mv-badge>
```
:::

### 自定义内容

可以用多种方式定义文本的内容。

:::demo 通过 `caption` 定义附加内容。
```html
<div class="block">
  <span class="demonstration">通过caption 附加内容</span>
  <mv-badge value="999" :max="521" caption="未读"></mv-badge>
  <mv-badge value="999" is-new :max="521" caption="未读"></mv-badge>
  <mv-badge value="999" is-new color="blue" :max="521" caption="未读"></mv-badge>
  <mv-badge value="999" is-new color="red" :max="521" caption="未读"></mv-badge>
</div>

<div class="block">
  <span class="demonstration">通过caption 表示内容</span>
  <mv-badge caption="521"></mv-badge>
  <mv-badge is-new caption="521"></mv-badge>
  <mv-badge is-new color="blue" caption="521"></mv-badge>
  <mv-badge is-new color="red" caption="521"></mv-badge>
  
  <mv-badge caption="521 已读"></mv-badge>
  <mv-badge is-new caption="521 已读"></mv-badge>
  <mv-badge is-new color="blue" caption="521 已读"></mv-badge>
  <mv-badge is-new color="red" caption="521 已读"></mv-badge>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 显示值 | string, number | — | — |
| is-new | 是否添加背景颜色 | boolean | — | false |
| color | 覆盖 `is-new`为 true时的背景颜色 | string | — | — |
| max | 最大值，`value` 超过最大值会显示 '${max}+' | number | — | — |
| caption | 附加内容 | string | — | — |
| right | 是否右侧对齐 | boolean | — | false |
| gap | 是否添加左外边距 | boolean | — | false |
