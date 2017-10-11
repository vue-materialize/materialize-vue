<style>
.grid-example {
  margin: 7px 0;
  line-height: 50px;
  font-size: 14px;
  color: white;
  text-align: center;
  background-color: tomato;
  border: 1px solid #eee;
}
</style>
## Grid 栅格系统

### 12列

我们的标准网格有12列。 无论浏览器的大小，每一列的宽度总是相等的。

:::demo
```html
<mv-row>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
    <mv-col :s="1" class-name="grid-example">s1</mv-col>
</mv-row>

<style>
.grid-example {
    margin: 7px 0;
    line-height: 50px;
    font-size: 14px;
    color: white;
    text-align: center;
    background-color: tomato;
    border: 1px solid #eee;
}
</style>
```
:::

### 偏移

要偏移，只需将 `offset-s2` 添加到 `s` 表示屏幕类前缀（s = small，m = medium，l = large）的类中，之后的数字是要偏移的列数。

:::demo
```html
<mv-row>
    <mv-col class-name="grid-example">s12</mv-col>
    <mv-col class-name="grid-example" :s="6" :offset="6">s6 offset-s6</mv-col>
    <mv-col class-name="grid-example" :s="{s:6, offset: 6}">s6 offset-s6</mv-col>
</mv-row>
```
:::

### Push and Pull

您可以通过 push 和 pull 轻松更改列的顺序。只需将 `push-s2` 或 `pull-s2` 添加到表示屏幕类前缀（s = small，m = medium，l = large）的类中，之后的数字是要 push 或 pull 的列数。

:::demo
```html
<mv-row>
    <mv-col class-name="grid-example">s12</mv-col>
    <mv-col class-name="grid-example" :s="7" :push="5">s7 push-s5</mv-col>
    <mv-col class-name="grid-example" :s="5" :pull="7">s5 pull-s7</mv-col>
</mv-row>
```
:::

### 响应式布局

:::demo
```html
<mv-row>
    <mv-col class-name="grid-example" class="blue lighten-1">s12</mv-col>
    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="2">s12 m4 l2</mv-col>
    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="8">s12 m4 l8</mv-col>
    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="2">s12 m4 l2</mv-col>
</mv-row>

<mv-row>
    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>
    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l8</mv-col>
    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>
    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>
</mv-row>

<mv-row>
  <mv-col class-name="grid-example" :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>
  <mv-col class-name="grid-example" :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>
  <mv-col class-name="grid-example" :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>
  <mv-col class-name="grid-example" :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>
</mv-row>
```
:::

### Row Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tag | 自定义元素标签 | string | * | div |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| pull | 栅格向左移动格数 | number | — | 0 |
| push | 栅格向右移动格数 | number | — | 0 |
| s | `<600px` 响应式栅格数或者栅格属性对象 | number/string(例如：{s: 4, offset: 4}) | — | 12 |
| m | `≥600px` 响应式栅格数或者栅格属性对象 | number/string(例如：{s: 4, offset: 4}) | — | — |
| l | `≥992px` 响应式栅格数或者栅格属性对象 | number/string(例如：{s: 4, offset: 4}) | — | — |
| xl | `≥1200px` 响应式栅格数或者栅格属性对象 | number/string(例如：{s: 4, offset: 4}) | — | — |
