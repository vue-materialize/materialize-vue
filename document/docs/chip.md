<script>
export default {
    data () {
        return {
            chipGroup0: {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')},
            chipGroup1: [{tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}],
            chipGroup2: [{tag:'标签一'},{tag:'标签二'},{tag:'标签三'}, {tag:'标签四'}],
            chipGroup3: [{tag:'信息一'},{tag:'信息二'}, {tag:'信息三'},{tag:'信息四'}],
            chipGroup4: [{tag:'标签一'},{tag:'标签二'},{tag:'标签三'}, {tag:'标签四'}]
        }
    },
    mounted () {
      this.$nextTick(_ => {
        let demos = document.querySelectorAll('.source')
        demos[1].style.padding = '0'
        demos[2].style.padding = '0'
      })
    }
}
</script>

<style>
    .demo-chip .block {
        padding: 30px 24px;
        overflow: hidden;
        border-bottom: 1px solid #eff2f6;
    }
    .demo-chip .block:last-child {
        border-bottom: none;
    }
    .demo-chip .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
     }
</style>

## Chip 消息块

Chips可以用来表示小的信息块。它们是最常用的用于联系人或标签，信息块选中后添加样式。

### 联系人信息块

创建一个带图片的联系人信息块。

:::demo 通过设置 `chips`属性，该属性为一个数组对象，结构为`[{tag:'', image: ''}]`。通过 `tag` 属性为信息块设置内容，通过 `image` 属性为信息块设置图片。

```html
<template>
  <mv-chip :chips="chipGroup0"></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup0: {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}
      }
    }
  }
</script>
```
:::

### 可移除信息块

:::demo 通过属性 `closable` 设置是否允许删除消息快，通过`icon` 属性，展示右侧移除图标，默认是图标 `close`， ，也可设置 `@close` 事件进行删除后的后续操作。

```html
<template>
  <div class="block">
    <mv-chip :chips="chipGroup1" closable></mv-chip>
  </div>
  <div class="block">
    <mv-chip :chips="chipGroup2" closable></mv-chip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup1: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}
        ],
        chipGroup2: [
          {tag:'标签一'},
          {tag:'标签二'},
          {tag:'标签三'},
          {tag:'标签四'}
        ]
      }
    }
  }
</script>
```
:::

### 可添加信息块

:::demo 通过`editable` 属性，可以增加标签，只要输入你的标签文本并按回车键就可以了，点击关闭按钮进行删除。同时`placeholder`属性可设置添加信息块的提示文字。还可以通过 `repeatable` 设置消息块的内容是否可以重复。

```html
<template>
  <div class="block">
    <span class="demonstration">可添加，可删除</span>
    <mv-chip closable editable></mv-chip>
  </div>
  <div class="block">
    <span class="demonstration">不可重复</span>
    <mv-chip :chips="chipGroup3" closable editable placeholder="+新增"></mv-chip>
  </div>
  <div class="block">
    <span class="demonstration">可重复</span>
    <mv-chip :chips="chipGroup3" closable editable repeatable placeholder="+新增"></mv-chip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup3: [
          {tag:'信息一'},
          {tag:'信息二'},
          {tag:'信息三'},
          {tag:'信息四'}
        ]
      }
    }
  }
</script>
```
:::

### 可选中信息块

:::demo 通过设置`selected`属性，给组件当前选中的信息块添加样式。

```html
<template>
  <mv-chip :chips="chipGroup4" selected></mv-chip>
  <mv-chip :chips="chipGroup4" selected closable></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup4: [
          {tag:'标签一'},
          {tag:'标签二'},
          {tag:'标签三'},
          {tag:'标签四'}
        ]
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| chips | 设置信息块数据 | array | — | [{ tag: '', image: ''}] |
| editable | 是否添加新的信息块 | boolean | — | false |
| selected | 是否添加选中的信息块样式 | boolean | — | false |
| placeholder | 设置信息块添加的提示文字 | string | — | — |
| icon | 设置信息块关闭图标 | string/object | — | close |
| closable | 是否可关闭 | boolean | — | false |
| repeatable | 是否可重复 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close | 点击移除按钮时触发 | chip |
| change | 新增消息块时触发 | chips, chip |



