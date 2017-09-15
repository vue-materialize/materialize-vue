## Chip 消息块

Chips可以用来表示小的信息块。它们是最常用的用于联系人或标签，信息块选中后添加样式。

### 联系人信息块

创建一个带图片的联系人信息块。

:::demo 通过设置 `chips`属性，该属性为一个数组对象，结构为`[{tag:'', image: , id: }]`。通过 `tag` 属性为信息块设置内容，通过 `image` 属性为信息块设置图片。

```html
<template>
  <mv-chip :chips="[{tag:'联系人Chip标签', image: require('../../document/assets/user.jpg'), id: 1}]"></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup0: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg'), id: 1}
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
  <mv-chip :chips="[{tag:'联系人Chip标签', image: require('../../document/assets/user.jpg'), id: 1}]" :icon="{ name: 'close' }"></mv-chip>
  <mv-chip :chips="[{tag:'标签一', id: 1},{tag:'标签二', id: 2},{tag:'标签三', id: 3}, {tag:'标签四', id: 4}]" :icon="{ name: 'close' }"></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup1: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg'), id: 1}
        ],
        chipGroup2: [
          {tag:'标签一', id: 1},
          {tag:'标签二', id: 2},
          {tag:'标签三', id: 3},
          {tag:'标签四', id: 4}
        ]
      }
    }
  }
</script>
```
:::

### 可添加信息块

:::demo 通过增加一个`show` 属性，可以增加标签，只要输入你的标签文本并按回车键就可以了，点击关闭按钮进行删除。

```html
<template>
  <mv-chip :icon="{ name: 'close' }" show></mv-chip>
  <mv-chip :chips="[{tag:'信息一', id: 5},{tag:'信息二', id: 6}, {tag:'信息三', id: 7},{tag:'信息四', id: 8}]" show></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup3: [
          {tag:'信息一', id: 5},
          {tag:'信息二', id: 6},
          {tag:'信息三', id: 7},
          {tag:'信息四', id: 8}
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
  <mv-chip :chips="[{tag:'标签一', id: 1},{tag:'标签二', id: 2},{tag:'标签三', id: 3}, {tag:'标签四', id: 4}]" selected></mv-chip>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup4: [
          {tag:'标签一', id: 1},
          {tag:'标签二', id: 2},
          {tag:'标签三', id: 3},
          {tag:'标签四', id: 4}
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
| chips | 设置信息块数据 | Array | * | [{ tag: '', image: '', id: null }] |
| icon | 设置信息块关闭图标 | Array | * | [String, Object] |
| show | 是否添加新的信息块 | Boolean | * | false |
| selected | 是否添加选中的信息块样式 | Boolean | * | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close | 点击移除按钮时触发 | event |



