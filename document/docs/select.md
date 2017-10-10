<script >
export default {
  data () {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
       }, {
          value: '选项2',
          label: '双皮奶'
       }, {
          value: '选项3',
          label: '蚵仔煎'
       }, {
          value: '选项4',
          label: '龙须面'
       }, {
          value: '选项5',
          label: '北京烤鸭'
       }],
       options1: [{
         value: '选项1',
         label: '黄金糕'
       }, {
         value: '选项2',
         label: '双皮奶'
       }, {
         value: '选项3',
         label: '蚵仔煎',
         disabled: true
       }, {
         value: '选项4',
         label: '龙须面'
       }, {
         value: '选项5',
         label: '北京烤鸭'
       }],
       options3: [{
         label: '热门城市',
         options: [{
           value: 'Shanghai',
           label: '上海'
         }, {
           value: 'Beijing',
           label: '北京'
         }]
       }, {
         label: '城市名',
         options: [{
           value: 'Chengdu',
           label: '成都'
         }, {
           value: 'Shenzhen',
           label: '深圳'
         }, {
           value: 'Guangzhou',
           label: '广州'
         }, {
           value: 'Dalian',
           label: '大连'
         }]
       }],
       value1: '',
       value2: '',
       value3: '',
       value4: [],
       value5: '',
       placeholder: '请选择'
    }
  },
  methods: {
      handleChange(res) {
        console.log(res)
        console.log('ceshisss')
      }
  }
}
</script>
<style>
.mv-select{width:240px;}
</style>
## Select 下拉列表
### 基本用法

:::demo `v-model`的值为当前被选中的`mv-option`的 value 属性值

```html
<mv-select v-model="value1">
    <mv-option v-for="item in options"
     :key="item.value"
     :label="item.label"
     :value="item.value"
     ></mv-option>
</mv-select>

<script >
export default {
  data () {
    return {
      options1: [{
         value: '选项1',
         label: '黄金糕'
      }, {
         value: '选项2',
         label: '双皮奶'
      }, {
         value: '选项3',
         label: '蚵仔煎'
      }, {
         value: '选项4',
         label: '龙须面'
      }, {
         value: '选项5',
         label: '北京烤鸭'
      }],
      value4: '',
   }
  }
}
</script>
```
:::
### 有占位符

:::demo  占位符 `placeholder`  默认值为`请选择` 

```html
<mv-select v-model="value2" :placeholder="placeholder">
    <mv-option v-for="item in options"
     :key="item.value"
     :label="item.label"
     :value="item.value"
     ></mv-option>
</mv-select>

<script >
export default {
  data () {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
       }, {
          value: '选项2',
          label: '双皮奶'
       }, {
          value: '选项3',
          label: '蚵仔煎'
       }, {
          value: '选项4',
          label: '龙须面'
       }, {
          value: '选项5',
          label: '北京烤鸭'
       }],
       value2: '',
       placeholder: '请选择'
    }
  }
}
</script>
```
:::

### 有禁用选项

:::demo  在`mv-option`中，设定`disabled`值为 `true`，即可禁用该选项

```html
<mv-select v-model="value3">
    <mv-option v-for="item in options1"
     :key="item.value"
     :label="item.label"
     :value="item.value"
     :disabled="item.disabled"
     >
</mv-option>
</mv-select>

<script >
export default {
  data () {
    return {
       options1: [{
          value: '选项1',
          label: '黄金糕'
       }, {
          value: '选项2',
          label: '双皮奶'
       }, {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true
       }, {
          value: '选项4',
          label: '龙须面'
       }, {
          value: '选项5',
          label: '北京烤鸭'
       }],
       value3: ''
    }
  }
}
</script>
```
:::

### 多项选择

:::demo  为`mv-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组

```html
<mv-select v-model="value4" multiple >
    <mv-option v-for="item in options1"
     :key="item.value"
     :label="item.label"
     :value="item.value"
     ></mv-option>
</mv-select>

<script >
export default {
  data () {
    return {
       options1: [{
          value: '选项1',
          label: '黄金糕'
       }, {
          value: '选项2',
          label: '双皮奶'
       }, {
          value: '选项3',
          label: '蚵仔煎'
       }, {
          value: '选项4',
          label: '龙须面'
       }, {
          value: '选项5',
          label: '北京烤鸭'
       }],
       value4: ''
    }
  }
}
</script>
```
:::
### 分组

:::demo  使用`mv-option-group`对备选项进行分组，它的`label`属性为分组名

```html
<mv-select v-model="value5">
    <mv-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <mv-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </mv-option>
    </mv-option-group>
</mv-select>

<script >
export default {
  data () {
    return {
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
       value5: ''
    }
  }
}
</script>
```
:::
### Select Attributes 
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| placeholder | 占位符 | string | — | 请选择 |

### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |

### Option Group Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |


### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |
