## Button 按钮

主要提供了 3 种主要按钮，Raised 按钮是一个标准按钮，意味着行动，并有一定深度，Floating 圆形按钮用于非常重要的功能。Flat 按钮通常用在cards 或 modals中。


### Raised 浮动按钮

:::demo 通过 `icon` 属性可以为按钮添加图标，同时利用 `position` 属性更改图标在按钮中的位置。可以通过 `type` 属性为按钮设置颜色。
```html
<mv-button>Button</mv-button>
<mv-button type="red">Button</mv-button>
<mv-button icon="cloud_upload" position="left">Button</mv-button>
<mv-button icon="cloud_upload" position="right">Button</mv-button>

```
:::

### Floating action 悬浮响应按钮

:::demo 通过设置 `floating` 属性为 `true`变换到悬浮响应按钮。
```html
<mv-button icon="add" floating></mv-button>
<mv-button icon="add" floating type="red"></mv-button>
```
:::

### Flat 扁平按钮

:::demo 通过设置 `flat` 属性为 `true`变换到扁平按钮。
```html
<mv-button icon="add" flat></mv-button>
<mv-button icon="add" flat type="red"></mv-button>
```
:::

### Submit 按钮

:::demo 通过设置 `nativeType` 属性为按钮指定类型。
```html
<mv-button icon="add" native-type="submit"></mv-button>
```
:::

### 大

此按钮有更大的高度，可以用于引人注意。

:::demo 通过设置 `size` 属性为按钮大小。
```html
<mv-button size="large">Button</mv-button>
<mv-button size="large" icon="cloud_upload" position="left">Button</mv-button>
<mv-button size="large" icon="cloud_upload" position="right">Button</mv-button>
```
:::

### 禁用

此样式可应用于所有按钮类型。

:::demo 通过设置 `disabled` 属性禁用按钮。
```html
<mv-button size="large" disabled>Button</mv-button>
<mv-button disabled>Button</mv-button>
<mv-button flat disabled>Button</mv-button>
<mv-button floating disabled icon="add"></mv-button>
```
:::

### 加载中

:::demo `icon`属性的值可以是一个对象，属性可以 `Icon` 组件的所有 `props`。
```html
<mv-button :icon="{name: '3d_rotation', spin: true}" position="left">加载中</mv-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| floating | 响应悬浮类型按钮 | boolean | — | false |
| flat | 扁平按钮 | boolean | — | false |
| nativeType | 按钮类型 | string | button, submit, reset | button |
| disabled | 是否禁用按钮 | boolean | — | false |
| type | 按钮颜色, 需要是 class | string | — | — |
| size | 按钮大小 | string | large | — |
| icon | 带图标，Icon 组件中的图标名 | string/object | — | — |
| position | 图标位置 | string | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击按钮时触发 | event |
