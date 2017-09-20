<script>
  export default {
    data () {
      return {
        radio: true,
        disabled: 'chooseDisabled',
        withGap: 'chooseGap',
        gaps: ['gap', 'chooseGap', 'disabledGap', 'chooseDisabledGap'],
        direction: 'horizontal',
        radioGroup: 'banana',
        rgTimer: null,
        rgDisabled: false,
        rgWithGap: false,
        rgDirection: 'horizontal',
        radioGroups: ['banana', 'apple', 'orange']
      }
    },
    methods: {
       chooseNext () {
         let next = this.gaps.indexOf(this.withGap) + 1
         next = next === this.gaps.length ? 0 : next
         this.withGap = this.gaps[next]
       },
       loopSwitch () {
         this.rgTimer = setInterval(_ => {
            let next = this.radioGroups.indexOf(this.radioGroup) + 1
            next = next === this.radioGroups.length ? 0 : next
            this.radioGroup = this.radioGroups[next]
         }, 500)
       },
       shutdownSwitch () {
         clearInterval(this.rgTimer)
         this.rgTimer = null
       }
    },
    mounted () {
      this.loopSwitch()
    }
  }
</script>

<style>
    .demo-radio .block {
        padding: 30px 24px;
        overflow: hidden;
        border-bottom: 1px solid #eff2f6;
        &:last-child {
            border-bottom: none;
        }
    }
    .demo-radio .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
     }
</style>

## Radio 单选框

当用户只能从一组项目中只进行一个选择时，使用“单选按钮”。

### 基础用法

:::demo 通过设置 `v-model` 绑定变量，选中时对应变量的值为 `value` 属性的值，`value` 可以是 `String` 或者 `Number`。在组件DOM 结构中，`label` 标签 的`for` 属性对于绑定自定义单选按钮与输入是必要的，最好为组件提供 `id` 属性并保证其唯一，默认 `id` 和 `for` 属性值为 `mv-radio` 组件的内容。
```html
当前选中值：{{radio}}
<p><mv-button @click="radio=!radio">切换</mv-button></p>
<mv-radio v-model="radio" :value="true">真</mv-radio>
<mv-radio v-model="radio" :value="false">假</mv-radio>

<script>
  export default {
    data () {
      radio: true
    }
  }
</script>
```
:::

### 禁用状态

:::demo 通过为 `mv-radio`组件 设置 `disabled` 属性，把单选按钮标记为禁用，它接受一个 `boolean`，`true` 为禁用。
```html
当前选中值：{{disabled}}
<p><mv-button @click="disabled = disabled==='disabled'?'chooseDisabled':'disabled'">切换</mv-button></p>
<mv-radio v-model="disabled" value="disabled" disabled>{{disabled==='disabled' ? '选中且禁用':'禁用'}}</mv-radio>
<mv-radio v-model="disabled" value="chooseDisabled" disabled>{{disabled==='chooseDisabled' ? '选中且禁用':'禁用'}}</mv-radio>

<script>
  export default {
    data () {
      disabled: 'chooseDisabled'
    }
  }
</script>
```
:::

### 选中单选框样式带间隙

:::demo 通过为 `mv-radio`组件 设置 `withGap` 属性，改变选中的单选按钮样式，它接受一个 `boolean`，`true` 为改变。
```html
当前选中值：{{withGap}}
<p><mv-button @click="chooseNext">切换</mv-button></p>
<mv-radio v-model="withGap" value="gap" with-gap>{{withGap==='gap' ? '选中且间隙' : '间隙'}}</mv-radio>
<mv-radio v-model="withGap" value="chooseGap" with-gap>{{withGap==='chooseGap' ? '选中且间隙' : '间隙'}}</mv-radio>
<mv-radio v-model="withGap" value="disabledGap" disabled with-gap>{{withGap==='disabledGap' ? '选中且禁用且间隙' : '禁用且间隙'}}</mv-radio>
<mv-radio v-model="withGap" value="chooseDisabledGap" disabled with-gap>{{withGap==='chooseDisabledGap' ? '选中且禁用且间隙' : '禁用且间隙'}}</mv-radio>

<script>
  export default {
    data () {
      withGap: 'chooseGap',
      gaps: ['gap', 'chooseGap', 'disabledGap', 'chooseDisabledGap']
    },
    methods: {
       chooseNext () {
         let next = this.gaps.indexOf(this.withGap) + 1
         next = next === this.gaps.length ? 0 : next
         this.withGap = this.gaps[next]
       }
    }
  }
</script>
```
:::

### 排列方向

:::demo 通过为 `mv-radio`组件 设置 `direction` 属性，改变的单选按钮排列方向，默认是 `horizontal` 水平排列，可选值为 `vertical`垂直排列。
```html
当前选中值：{{direction}}
<p><mv-button @click="direction = direction === 'horizontal' ? 'vertical' : 'horizontal'">切换</mv-button></p>
<mv-radio v-model="direction" value="horizontal" :direction="direction" id="horizontal">{{direction==='horizontal'?'水平排列':'垂直排列'}}</mv-radio>
<mv-radio v-model="direction" value="vertical" :direction="direction" id="vertical">{{direction==='horizontal'?'水平排列':'垂直排列'}}</mv-radio>

<script>
  export default {
    data () {
      direction: 'horizontal'
    }
  }
</script>
```
:::

### 单选框组

适用于在多个互斥的选项中选择的场景。这种方式实现更加简洁。

:::demo 结合 `mv-radio-group` 组件和子组件 `mv-radio` 可以实现单选组，在 `mv-radio-group` 中绑定 `v-model`，在el-radio中设置好 `value` 即可，无需再给每一个 `mv-radio` 绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`，还可以为子组件 `mv-radio` 统一设置 `disabled`、`with-gap`、`direction` 属性。
```html
当前选中值：{{radioGroup}}
<p>当前状态：{{rgDisabled ? '禁用' : '启用'}}、{{rgWithGap ? '带间隙' : '实心'}}、{{rgDirection==='horizontal' ? '水平' : '垂直'}}</p>
<p>
  <mv-button v-show="!rgTimer" @click="loopSwitch">开启循环</mv-button>
  <mv-button v-show="rgTimer" @click="shutdownSwitch">暂停循环</mv-button>
  <mv-button @click="rgDisabled = !rgDisabled">{{!rgDisabled ? '禁用' : '启用'}}</mv-button>
  <mv-button @click="rgWithGap = !rgWithGap">{{!rgWithGap ? '带间隙' : '实心'}}</mv-button>
  <mv-button @click="rgDirection = rgDirection === 'horizontal' ? 'vertical' : 'horizontal'">{{rgDirection!=='horizontal' ? '水平' : '垂直'}}</mv-button>
</p>
<mv-radio-group v-model="radioGroup" :disabled="rgDisabled" :with-gap="rgWithGap" :direction="rgDirection">
  <mv-radio value="banana">香蕉</mv-radio>
  <mv-radio value="apple">苹果</mv-radio>
  <mv-radio value="orange">橘子</mv-radio>
</mv-radio-group>

<script>
  export default {
    data () {
      return {
        radioGroup: 'banana',
        rgTimer: null,
        rgDisabled: false,
        rgWithGap: false,
        rgDirection: 'horizontal',
        radioGroups: ['banana', 'apple', 'orange']
      }
    },
    methods: {
       loopSwitch () {
         this.rgTimer = setInterval(_ => {
            let next = this.radioGroups.indexOf(this.radioGroup) + 1
            next = next === this.radioGroups.length ? 0 : next
            this.radioGroup = this.radioGroups[next]
         }, 500)
       },
       shutdownSwitch () {
         clearInterval(this.rgTimer)
         this.rgTimer = null
       }
    },
    mounted () {
      this.loopSwitch()
    }
  }
</script>
```
:::
