<script>
  export default {
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        options1: [
          {
            value: {zh: '选项1', py: 'xuanxiang1'},
            label: '黄金糕'
          },
          {
            value: {zh: '选项2', py: 'xuanxiang2'},
            label: '双皮奶'
          },
          {
            value: {zh: '选项3', py: 'xuanxiang3'},
            label: '蚵仔煎'
          },
          {
            value: {zh: '选项4', py: 'xuanxiang4'},
            label: '龙须面'
          },
          {
            value: {zh: '选项5', py: 'xuanxiang5'},
            label: '北京烤鸭'
          }
        ],
        options2: [
          {
            label: '热门城市',
            disabled: true,
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              },
              {
                value: 'Beijing',
                label: '北京'
              }
            ]
          },
          {
            label: '城市名',
            options: [
              {
                value: 'Chengdu',
                label: '成都'
              },
              {
                value: 'Shenzhen',
                label: '深圳'
              },
              {
                value: 'Guangzhou',
                label: '广州'
              },
              {
                value: 'Dalian',
                label: '大连'
              }
            ]
          }
        ],
        options3: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎',
            disabled: true
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        options4: [
          {
            value: {zh: '选项1', py: 'xuanxiang1'},
            label: '黄金糕1'
          },
          {
            value: {zh: '选项2', py: 'xuanxiang2'},
            label: '双皮奶1'
          },
          {
            value: {zh: '选项3', py: 'xuanxiang3'},
            label: '蚵仔煎1'
          },
          {
            value: {zh: '选项4', py: 'xuanxiang4'},
            label: '龙须面1'
          },
          {
            value: {zh: '选项5', py: 'xuanxiang5'},
            label: '北京烤鸭1'
          }
        ],
        value1: '选项1',
        value2: {zh: '选项1', py: 'xuanxiang1'},
        value3: '',
        placeholder: '请选择',
        value4: '',
        value5: ['选项1', '选项3'],
        value6: [
          {zh: '选项1', py: 'xuanxiang1'},
          {zh: '选项2', py: 'xuanxiang2'}
        ],
        value7: ''
      }
    }
  }
</script>
<style>
  .demo-select .mv-select {
    width: 240px;
  }
</style>
## Select 下拉列表
### 基本用法

:::demo `v-model`的值为当前被选中的`mv-option`的 value 属性值

```html
<div class="block">
  <p>{{value1}}</p>
  <mv-select v-model="value1">
    <mv-option v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
    </mv-option>
  </mv-select>
</div>
<div class="block">
  <p>{{value2}}</p>
  <mv-select v-model="value2" value-key="py">
    <mv-option v-for="item in options1"
               :key="item.value.zh"
               :label="item.label"
               :value="item.value">
    </mv-option>
  </mv-select>
</div>

<script>
  export default {
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        options1: [
          {
            value: {zh: '选项1', py: 'xuanxiang1'},
            label: '黄金糕'
          },
          {
            value: {zh: '选项2', py: 'xuanxiang2'},
            label: '双皮奶'
          },
          {
            value: {zh: '选项3', py: 'xuanxiang3'},
            label: '蚵仔煎'
          },
          {
            value: {zh: '选项4', py: 'xuanxiang4'},
            label: '龙须面'
          },
          {
            value: {zh: '选项5', py: 'xuanxiang5'},
            label: '北京烤鸭'
          }
        ],
        value1: '选项1',
        value2: {zh: '选项1', py: 'xuanxiang1'}
      }
    }
  }
</script>
```
:::
### 有占位符

:::demo  占位符 `placeholder`  默认值为`请选择`

```html
<mv-select v-model="value3" :placeholder="placeholder">
  <mv-option v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value"
  ></mv-option>
</mv-select>

<script>
  export default {
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        value3: '',
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
<mv-select v-model="value4">
  <mv-option v-for="item in options3"
             :key="item.value"
             :label="item.label"
             :value="item.value"
             :disabled="item.disabled">
  </mv-option>
</mv-select>

<script>
  export default {
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎',
            disabled: true
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        value4: ''
      }
    }
  }
</script>
```
:::

### 多项选择

:::demo  为`mv-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组

```html
<p>{{value5}}</p>
<mv-select v-model="value5" multiple>
  <mv-option v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
  </mv-option>
</mv-select>

<p>{{value6}}</p>
<mv-select v-model="value6" value-key="py" multiple>
  <mv-option v-for="item in options4"
             :key="item.value.py"
             :label="item.label"
             :value="item.value">
  </mv-option>
</mv-select>

<script>
  export default {
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        options4: [
          {
            value: {zh: '选项1', py: 'xuanxiang1'},
            label: '黄金糕1'
          },
          {
            value: {zh: '选项2', py: 'xuanxiang2'},
            label: '双皮奶1'
          },
          {
            value: {zh: '选项3', py: 'xuanxiang3'},
            label: '蚵仔煎1'
          },
          {
            value: {zh: '选项4', py: 'xuanxiang4'},
            label: '龙须面1'
          },
          {
            value: {zh: '选项5', py: 'xuanxiang5'},
            label: '北京烤鸭1'
          }
        ],
        value5: ['选项1', '选项3'],
        value6: [
          {zh: '选项1', py: 'xuanxiang1'},
          {zh: '选项2', py: 'xuanxiang2'}
        ]
      }
    }
  }
</script>
```
:::

### 分组

:::demo  使用`mv-option-group`对备选项进行分组，它的`label`属性为分组名

```html
<mv-select v-model="value7">
  <mv-option-group
    v-for="group in options2"
    :key="group.label"
    :label="group.label"
    :disabled="group.disabled">
    <mv-option
      v-for="item in group.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </mv-option>
  </mv-option-group>
</mv-select>

<script>
  export default {
    data () {
      return {
        options2: [
          {
            label: '热门城市',
            disabled: true,
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              },
              {
                value: 'Beijing',
                label: '北京'
              }
            ]
          },
          {
            label: '城市名',
            options: [
              {
                value: 'Chengdu',
                label: '成都'
              },
              {
                value: 'Shenzhen',
                label: '深圳'
              },
              {
                value: 'Guangzhou',
                label: '广州'
              },
              {
                value: 'Dalian',
                label: '大连'
              }
            ]
          }
        ],
        value7: ''
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
| label | 下拉列表标题 | string | — | — |
| valueKey | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |

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
