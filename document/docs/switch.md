## Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`on-text`属性与`off-text`属性来设置开关的文字描述，使用`on-color`属性与`off-color`属性来设置开关的背景色。
```html
<mv-switch v-model="value1"></mv-switch>
<mv-switch v-model="value2" off-color="#ff4949" on-color="#13ce66"></mv-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。。
```html
<mv-switch v-model="value4" disabled></mv-switch>
<mv-switch v-model="value4" off-color="#ff4949" on-color="#13ce66" disabled></mv-switch>

<script>
  export default {
    data() {
      return {
        value4: true,
        value1: true,
        value2: true
      }
    },
     methods: {
       test (res) {
         console.log(res)
       }
     }
  };
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| on-text  | switch 打开时的文字    | string   | — | ON |
| off-text  | switch 关闭时的文字    | string   | — | OFF |
| on-value  | switch 打开时的值    | boolean / string / number | — | true |
| off-value  | switch 关闭时的值    | boolean / string / number | — | false |
| on-color  | switch 打开时的背景色    | string   | — | #20A0FF |
| off-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name  | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

