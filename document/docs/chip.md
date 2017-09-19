## Chip 消息块

Chips可以用来表示小的信息块。它们是最常用的用于联系人或标签，信息块选中后添加样式。

### 联系人信息块

创建一个带图片的联系人信息块。

:::demo 通过设置 `chips`属性，该属性为一个数组对象，结构为`[{tag:'', image: ''}]`。通过 `tag` 属性为信息块设置内容，通过 `image` 属性为信息块设置图片。

```html
<template>
  <mv-chip :chips="[{tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}]"></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup0: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}
        ]
      }
    }
  }
</script>
```
:::

### 可移除信息块

:::demo 通过增加一个`icon` 属性，展示右侧移除图标，组件内部包含移除操作，也可设置`@close`事件进行其他操作。

```html
<template>
  <mv-chip :chips="[{tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}]" :icon="{ name: 'close' }"></mv-chip>
  <mv-chip :chips="[{tag:'标签一'},{tag:'标签二'},{tag:'标签三'}, {tag:'标签四'}]" :icon="{ name: 'close' }"></mv-chip>
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

:::demo 通过增加一个`show` 属性，可以增加标签，只要输入你的标签文本并按回车键就可以了，点击关闭按钮进行删除。同时`placeholder`属性可设置添加信息块的提示文字。

```html
<template>
  <mv-chip :icon="{ name: 'close' }" show></mv-chip>
  <mv-chip :chips="[{tag:'信息一'},{tag:'信息二'}, {tag:'信息三'},{tag:'信息四'}]" show placeholder="+NewChip"></mv-chip>
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
  <mv-chip :chips="[{tag:'标签一'},{tag:'标签二'},{tag:'标签三'}, {tag:'标签四'}]" selected></mv-chip>
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
| chips | 设置信息块数据 | Array | * | [{ tag: '', image: ''}] |
| icon | 设置信息块关闭图标 | Array | * | [String, Object] |
| show | 是否添加新的信息块 | Boolean | * | false |
| selected | 是否添加选中的信息块样式 | Boolean | * | false |
| placeholder | 设置信息块添加的提示文字 | String | * | - |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close | 点击移除按钮时触发 | event |



