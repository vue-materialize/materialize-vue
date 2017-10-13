<script>
  export default {
    data () {
      return {
        activeName: 'first',
        activeName2: 0,
        animated: true,
        swipeable: true,
        maxHeight: true,
        fixedWidth: true
      }
    },
    mounted () {
      this.$nextTick(_ => {
        let firstDemo = document.querySelector('.source')
        firstDemo.style.padding = '0'
      })
    }
  }
</script>
<style>
  .demo-tabs .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }

  .demo-tabs .block:last-child {
    border-bottom: none;
  }
</style>
## Tabs 标签页

### 基本

:::demo 通过 `label` 指定选项卡标题，`activeName` 与 `mv-tab-pane` 的 `name`属性相对应。通过 `disabled` 禁用选项卡，接受一个 `boolean` 值， 默认为 `false`。
```html
<div class="block">
  当前值：{{activeName}}
  <mv-tabs v-model="activeName">
    <mv-tab-pane label="TEST1" name="first">Test 1</mv-tab-pane>
    <mv-tab-pane label="TEST2" name="second">Test 2</mv-tab-pane>
    <mv-tab-pane label="TEST3" name="third">Test 3</mv-tab-pane>
    <mv-tab-pane label="TEST4" name="forth" disabled>Test 4</mv-tab-pane>
  </mv-tabs>
</div>

<div class="block">
  当前值：{{activeName2}}
  <mv-tabs v-model="activeName2">
    <mv-tab-pane label="TEST1">Test 1</mv-tab-pane>
    <mv-tab-pane label="TEST2">Test 2</mv-tab-pane>
    <mv-tab-pane label="TEST3">Test 3</mv-tab-pane>
    <mv-tab-pane label="TEST4" disabled>Test 4</mv-tab-pane>
  </mv-tabs>
</div>

<script>
  export default {
    data () {
      return {
        activeName: 'second',
        activeName2: 0
      }
    }
  }
</script>
```
:::

### 动画

:::demo 通过 `animated` 指定选项卡增加动画切换效果，接受一个 `boolean` 值，默认是 `false`。
```html
<mv-button @click="animated=!animated">{{animated ? '不带动画' : '带动画'}}</mv-button>
<p>当前切换状态：{{animated ? '带动画' : '不带动画'}}</p>
<mv-tabs v-model="activeName" :animated="animated">
  <mv-tab-pane label="TEST1" name="first">Test 1</mv-tab-pane>
  <mv-tab-pane label="TEST2" name="second">Test 2</mv-tab-pane>
  <mv-tab-pane label="TEST3" name="third">Test 3</mv-tab-pane>
  <mv-tab-pane label="TEST4" name="forth">Test 4</mv-tab-pane>
</mv-tabs>

<script>
  export default {
    data () {
      return {
        animated: true
      }
    }
  }
</script>
```
:::

### 轮播

:::demo 通过 `swipeable` 是选项面板切换方式为轮播，默认是 `false`。`max-height` 指定选项面板的高度是否是所有面板中的最大高度，默认是 `true`。
```html
<mv-button @click="maxHeight=!maxHeight">{{maxHeight ? '自身高度' : '最大高度'}}</mv-button>
<p>当前切换状态：{{maxHeight ? '最大高度' : '自身高度'}}</p>
<mv-tabs v-model="activeName" :swipeable="swipeable" :max-height="maxHeight">
  <mv-tab-pane label="TEST1" name="first">
    <p style="height: 200px;">Test 1</p>
  </mv-tab-pane>
  <mv-tab-pane label="TEST2" name="second">Test 2</mv-tab-pane>
  <mv-tab-pane label="TEST3" name="third">Test 3</mv-tab-pane>
  <mv-tab-pane label="TEST4" name="forth">Test 4</mv-tab-pane>
</mv-tabs>

<script>
  export default {
    data () {
      return {
        swipeable: true
      }
    }
  }
</script>
```
:::

### 固定宽度

:::demo 通过 `fixed-width` 属性是选项卡宽度平分总宽度，接受一个 `boolean` 值，默认是 `false`。
```html
<mv-tabs v-model="activeName" :fixed-width="fixedWidth">
  <mv-tab-pane label="TEST1" name="first">Test 1</mv-tab-pane>
  <mv-tab-pane label="TEST2" name="second">Test 2</mv-tab-pane>
  <mv-tab-pane label="TEST3" name="third">Test 3</mv-tab-pane>
  <mv-tab-pane label="TEST4" name="forth">Test 4</mv-tab-pane>
</mv-tabs>

<script>
  export default {
    data () {
      return {
        fixedWidth: true
      }
    }
  }
</script>
```
:::

### Tabs Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| animated | 是否选项卡带动画 | boolean | — | true |
| swipeable | 是否选项面板可轮播 | boolean | — | false |
| fixed-width | 是否固定宽度 | boolean | — | false |
| max-height | 是否取选项面板的最大高度(只在 `swipeable=true` 有效) | boolean | — | true |

### Tab-pane Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 选项卡标题 | string | — | — |
| name | 选项卡名称 | string | — | — |
| disabled | 是否禁用选项卡 | boolean | — | false |

### Tabs Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| tab-click | tab 被选中时触发 | (pane 选中的面板, event 事件对象) |
