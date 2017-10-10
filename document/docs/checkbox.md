<script>
  export default {
    data () {
      return {
        checkbox: true,
        dynamicValue: '真的',
        disabled: true,
        filled: false,
        vertical: false,
        checkboxGroup: ['北京', '上海', '广州', '深圳', '杭州'],
        checkedGroup: ['北京', '上海'],
        cgTimer: null,
        cgDisabled: false,
        cgFilled: false,
        cgVertical: false,
        checkAll: true,
        checkboxSkill: ['Vue', 'React', 'Angular4', 'jQuery'],
        checkedSkill: ['Vue', 'jQuery'],
        indeterminate: true,
        checkboxCompanies: ['百度', '腾讯', '阿里'],
        checkedCompanies: ['阿里']
      }
    },
    methods: {
       loopSwitch () {
         let plus = this.checkedGroup.length < this.checkboxGroup.length
         let minus = !plus
         this.cgTimer = setInterval(_ => {
          if (plus) {
            this.checkedGroup.push(this.checkboxGroup.filter(c => {
              return this.checkedGroup.indexOf(c) === -1
            })[0])
          }
          if (minus) {
            this.checkedGroup.shift(this.checkedGroup[0])
          }
          if (this.checkedGroup.length === this.checkboxGroup.length) {
            plus = false
            minus = true
          }
          if (this.checkedGroup.length === 0) {
            plus = true
            minus = false
          }
         }, 500)
       },
       shutdownSwitch () {
         clearInterval(this.cgTimer)
         this.cgTimer = null
       },
       handleCheckAllChange (ev) {
         this.checkedSkill = ev.target.checked ? this.checkboxSkill : []
         this.indeterminate = false
       },
       handleCheckSkillChange (value) {
          let checkedCount = value.length
          this.checkAll = checkedCount === this.checkboxSkill.length
          this.indeterminate = checkedCount > 0 && checkedCount < this.checkboxSkill.length
       }
    },
    mounted () {
      this.loopSwitch()
    }
  }
</script>
## Checkbox 多选框

当用户只能从一组项目中只进行一个选择时，使用“多选框”。

### 基础用法

:::demo 通过设置 `v-model` 绑定变量，单一的 `checkbox` 中， 默认绑定变量的值类型回事 `Boolean`，选中为 `true`。在组件DOM 结构中，`label` 标签 的`for` 属性对于绑定自定义多选框与输入是必要的，最好为组件提供 `id` 属性并保证其唯一，默认 `id` 和 `for` 属性值为 `mv-radio` 组件的内容。
```html
当前值：{{checkbox}}（{{checkbox? '选中': '未选中'}}）、{{dynamicValue}}
<p><mv-button @click="checkbox=!checkbox;dynamicValue=dynamicValue==='真的'?'假的': '真的'">切换</mv-button></p>
<mv-checkbox v-model="checkbox">{{checkbox? '选中': '未选中'}}</mv-checkbox>
    <mv-checkbox v-model="dynamicValue" true-value="真的" false-value="假的">{{dynamicValue? '真的': '假的'}}</mv-checkbox>

<script>
  export default {
    data () {
      return {
        checkbox: true,
        dynamicValue: '真的'
      }
    }
  }
</script>
```
:::

### 禁用状态

:::demo 通过为 `mv-checkbox`组件 设置 `disabled` 属性，把多选框标记为禁用，它接受一个 `boolean`，`true` 为禁用。
```html
当前值： {{disabled}}（{{disabled?'禁用':'启用'}}）
<p><mv-button @click="disabled=!disabled">切换</mv-button></p>
<mv-checkbox :disabled="disabled">禁用</mv-checkbox>
<mv-checkbox v-model="disabled" :disabled="disabled">选中且禁用</mv-checkbox>

<script>
  export default {
    data () {
      return {
        disabled: true
      }
    }
  }
</script>
```
:::

### 选中单选框样式带填充

:::demo 通过为 `mv-checkbox`组件 设置 `filled` 属性，改变选中的单选按钮样式，它接受一个 `boolean`，`true` 为改变。
```html
当前值： {{filled}}
<p><mv-button @click="filled=!filled">切换</mv-button></p>
<mv-checkbox v-model="filled" filled>{{filled ? '选中且填充' : '填充'}}</mv-checkbox>
<mv-checkbox v-model="filled" filled disabled>{{filled ? '选中且禁用且填充' : '禁用且填充'}}</mv-checkbox>

<script>
  export default {
    data () {
      return {
        filled: false
      }
    }
  }
</script>
```
:::

### 排列方向

:::demo 通过为 `mv-checkbox`组件 设置 `vertical` 属性，改变的多选框排列方向，默认是水平排列，，它接受一个 `boolean`，`true` 为垂直排列。
```html
当前选中值：{{vertical}}
<p><mv-button @click="vertical=!vertical">切换</mv-button></p>
<mv-checkbox v-model="vertical"  :vertical="vertical" id="horizontal">{{!vertical?'水平排列':'垂直排列'}}</mv-checkbox>
<mv-checkbox v-model="vertical" :vertical="vertical" id="vertical">{{!vertical?'水平排列':'垂直排列'}}</mv-checkbox>

<script>
  export default {
    data () {
      return {
        vertical: false
      }
    }
  }
</script>
```
:::

### 多选框组

用于多个多选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo `mv-checkbox-group` 组件能把多个 `mv-checkbox` 管理为一组，只需要在 `Group` 中使用 `v-model` 绑定 `Array` 类型的变量即可。 `mv-checkbox` 的 `value`属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`value`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
```html
当前值： {{checkedGroup}}
<p>当前状态：{{cgDisabled ? '禁用' : '启用'}}、{{cgFilled ? '填充' : '非填充'}}、{{cgVertical ? '垂直' : '水平'}}</p>
<p>
  <mv-button v-show="!cgTimer" @click="loopSwitch">开启循环</mv-button>
  <mv-button v-show="cgTimer" @click="shutdownSwitch">暂停循环</mv-button>
  <mv-button @click="cgDisabled = !cgDisabled">{{!cgDisabled ? '禁用' : '启用'}}</mv-button>
  <mv-button @click="cgFilled = !cgFilled">{{!cgFilled ? '填充' : '非填充'}}</mv-button>
  <mv-button @click="cgVertical = !cgVertical">{{!cgVertical ? '水平' : '垂直'}}</mv-button>
</p>
<mv-checkbox-group v-model="checkedGroup" :disabled="cgDisabled" :filled="cgFilled" :vertical="cgVertical">
  <mv-checkbox value="北京"></mv-checkbox>
  <mv-checkbox value="上海"></mv-checkbox>
  <mv-checkbox value="广州"></mv-checkbox>
  <mv-checkbox value="深圳"></mv-checkbox>
  <mv-checkbox value="杭州"></mv-checkbox>
</mv-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkboxGroup: ['北京', '上海', '广州', '深圳', '杭州'],
        checkedGroup: ['北京', '上海'],
        cgTimer: null,
        cgDisabled: false,
        cgFilled: false,
        cgVertical: false
      }
    },
    methods: {
      loopSwitch () {
        let plus = this.checkedGroup.length < this.checkboxGroup.length
        let minus = !plus
        this.cgTimer = setInterval(_ => {
          if (plus) {
            this.checkedGroup.push(this.checkboxGroup.filter(c => {
              return this.checkedGroup.indexOf(c) === -1
            })[0])
          }
          if (minus) {
            this.checkedGroup.shift(this.checkedGroup[0])
          }
          if (this.checkedGroup.length === this.checkboxGroup.length) {
            plus = false
            minus = true
          }
          if (this.checkedGroup.length === 0) {
            plus = true
            minus = false
          }
        }, 500)
      },
      shutdownSwitch () {
        clearInterval(this.cgTimer)
        this.cgTimer = null
      }
    },
    mounted () {
      this.loopSwitch()
    }
  }
</script>
```
:::

### indeterminate 状态

`indeterminate` 属性用以表示 `checkbox` 的不确定状态，一般用于实现全选的效果

::: demo
```html
<p>当前值：{{checkedSkill}}</p>
<mv-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</mv-checkbox>
<mv-checkbox-group v-model="checkedSkill" @change="handleCheckSkillChange">
  <mv-checkbox v-for="(skill, index) in checkboxSkill" :value="skill" :key="skill"></mv-checkbox>
</mv-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkAll: true,
        checkboxSkill: ['Vue', 'React', 'Angular4', 'jQuery'],
        checkedSkill: ['Vue', 'jQuery'],
        indeterminate: true
      }
    },
    methods: {
      handleCheckAllChange (ev) {
        this.checkedSkill = ev.target.checked ? this.checkboxSkill : []
        this.indeterminate = false
      },
      handleCheckSkillChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.checkboxSkill.length
        this.indeterminate = checkedCount > 0 && checkedCount < this.checkboxSkill.length
      }
    }
  }
</script>
```
:::

### 选中数量限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量

::: demo
```html
<p>当前值：{{checkedCompanies}}</p>
<mv-checkbox-group v-model="checkedCompanies" :max="1">
  <mv-checkbox v-for="(company, index) in checkboxCompanies"  :value="company" :key="company"></mv-checkbox>
</mv-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkboxCompanies: ['百度', '腾讯', '阿里'],
        checkedCompanies: ['阿里']
      }
    }
  }
</script>
```
:::

### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string | — | — |
| true-value | 动态绑定选中时的值 | string, number | — | — |
| false-value | 动态绑定未选中时的值 | string, number | — | — |
| id | 原声 id 属性 | string, number | — | — |
| disabled | 禁用多选框 | boolean | — | false |
| vertical | 是否垂直排列 | boolean | — | false |
| filled | 是否选中时填充多选框 | boolean | — | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | — | false |

### Checkbox-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled | 禁用多选框 | boolean | — | false |
| vertical | 是否垂直排列 | boolean | — | false |
| filled | 是否选中时填充多选框 | boolean | — | false |
| min | 可被勾选的 checkbox 的最小数量 | number | — | — |
| max | 可被勾选的 checkbox 的最大数量 | number | — | — |

### Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发的事件 | (event: Event) 事件对象 |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发的事件 | (value: Array) 选中的多选框 |
