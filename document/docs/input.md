## Input 输入框

文本框允许用户输入，简单明了，能让用户一眼看出输入位置。可以自己设置label标签的文本。在输入中会有动画效果。

### 默认用法

:::demo 默认展示输入框样式，可添加label标签文本，输入框获得焦点和失去焦点会有动画效果。
```html
<mv-input>爱好</mv-input>

```
:::

### 占位提示

:::demo 通过 `placeholder` 属性可以为输入框设置默认提示，通过 `value` 属性可以为输入框设置绑定值，同时利用 `active` 属性将label标签展示在输入框上方。
```html
<mv-input placeholder="占位提示" :active="true">姓名</mv-input>
<mv-input placeholder="占位提示" :active="true" value="张三">姓名（绑定值）</mv-input>

```
:::

### 禁用状态

:::demo 通过 `disabled` 属性设置输入框禁用状态。
```html
<mv-input placeholder="我不能输入" :active="true" :disabled="true">禁用</mv-input>

```
:::

### 密码输入框

:::demo 通过 `type` 属性设置输入框类型。
```html
<mv-input type="password">密码</mv-input>

```
:::

### 邮箱格式输入框

:::demo 通过 `validate` 属性设置是否添加邮箱验证，默认验证消息为`wrong`,`right`，同时利用 `wrongmsg` 属性和 `rightmsg` 属性设置邮箱判定提示信息。
```html
<mv-input type="email">邮件-无格式验证</mv-input>
<mv-input type="email" :validate='true'>邮件-添加格式验证</mv-input>
<mv-input type="email" :validate='true' wrongmsg="格式错误" rightmsg="格式正确">邮件-添加格式验证-自定义验证消息</mv-input>

```
:::

### 图标前缀输入框

:::demo 通过 `icon` 属性设置输入框图标前缀。
```html
<mv-input type="text" :icon="{ name: 'share'}">分享</mv-input>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 输入框类型 | string | [text,password,email] | text |
| placeholder | 输入框添加默认提示 | string | — | - |
| value | 输入框添加绑定值 | string, number | — | - |
| active | label是否展示在输入框上方 | boolean | - | false |
| disabled | 是否禁用输入框 | boolean | — | false |
| validate | 是否添加验证 | boolean | — | false |
| wrongmsg | 格式错误时提示信息 | string | - | wrong |
| rightmsg | 格式正确时提示信息 | string | — | right |
| icon | 带图标，Icon 组件中的图标名 | string/object | — | — |
| position | 图标位置 | string | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| input | 在输入框值改变时触发 | (value: string | number) |
| change | 在输入框值改变时触发 | (event: Event) |
| focus | 在输入框获得焦点时触发 | (event: Event) |
| blur | 在输入框失去焦点时触发 | (event: Event) |
| enter | 当输入框获得焦点时，按enter键时触发 | (event: Event) |
