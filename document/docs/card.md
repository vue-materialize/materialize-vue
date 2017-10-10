<script>
  export default {
    data () {
      return {
        image: require('../../document/assets/card.jpg'),
        size: 'small'
      }
    }
  }
</script>

## Card 卡片

卡片可以用于显示由不同对象组成的内容。它的大小或支持的操作都是可变的。

### 基本卡片

:::demo 通过插槽`slot=header` 为卡片设置标题，还可以通过 `header` 属性设置标题。（同时存在，插槽`slot=header`优先），通过属性 `header-classname` 设置标题样式。通过插槽`slot=action` 设置底部内容，通常是一些具有可操作性的按钮或链接。默认插槽作为卡片的内容。
```html
<mv-row>
  <mv-col :s="6">
    <mv-card class="blue-grey darken-1" header-classname="white-text">
      <template slot="header">卡片标题</template>
      <p class="white-text">我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>
  </mv-col>
  <mv-col :s="6">
    <mv-card class="blue-grey darken-1" header="卡片标题2" header-classname="white-text">
      <p class="white-text">我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>
  </mv-col>
</mv-row>
```
:::

### 卡片大小
:::demo 通过`size`指定卡片大小，可选值有 `small, medium, large`
```html
<mv-button @click="size='small'">小-高度300</mv-button>
<mv-button @click="size='medium'">中-高度400</mv-button>
<mv-button @click="size='large'">大-高度500</mv-button>
<mv-card class="blue-grey darken-1" header-classname="white-text" :size="size">
  <template slot="header">卡片标题</template>
  <p class="white-text">我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
  <template slot="action">
    <a href="#">这是一个链接</a>
    <a href="#">这是一个链接</a>
  </template>
</mv-card>

<script>
  export default {
    data () {
      return {
        size: 'small'
      }
    }
  }
</script>
```
:::

### 图像卡片

:::demo 通过`type`属性指定卡片的类型，默认为 `card`，可选值为`image`。区别就是标题的位置不同。
```html
<mv-row>
  <mv-col :s="6">
    <mv-card type="card" :image="image">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>
  </mv-col>
  <mv-col :s="6">
    <mv-card type="image" :image="image">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>
  </mv-col>
</mv-row>

<script >
  export default {
    data () {
      return {
        image: require('../../document/assets/card.jpg')
      }
    }
  }
</script>
```
:::

### 卡片中的悬浮响应按钮

:::demo 通过属性`fab` 设置是否显示悬浮响应按钮。`fab-size` 设置按钮大小，可选值为 `large`。
```html
<mv-row>
  <mv-col :s="6">
    <mv-card :image="image" :fab="true" fab-size="large">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
    </mv-card>
  </mv-col>
  <mv-col :s="6">
    <mv-card type="image" :image="image" :fab="true">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
    </mv-card>
  </mv-col>
</mv-row>

<script >
  export default {
    data () {
      return {
        image: require('../../document/assets/card.jpg')
      }
    }
  }
</script>
```
:::

### 水平卡片

:::demo 通过`horizontal` 属性设置卡片内容是否水平排列，接受一个`boolean` 值，默认为 `false`。
```html
<mv-row>
  <mv-col :s="6">
    <mv-card horizontal :image="require('../../document/assets/horizontal-card.jpg')">
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>
  </mv-col>
</mv-row>
```
:::

### 带揭示的卡片

:::demo 通过 `reveal` 属性设置是否显示揭示内容，`sticky` 指定揭示是否覆盖底部内容。
```html
<mv-row>
  <mv-col :s="6">
    <mv-card :image="image" reveal>
      <template slot="header">卡片标题</template>
      <p><a href="#">这是一个链接</a></p>
      <p slot="revealBody">Here is some more information about this product that is only revealed once clicked on.</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>
  </mv-col>
  <mv-col :s="6">
    <mv-card :image="image" reveal sticky>
      <template slot="header">卡片标题</template>
      <p><a href="#">这是一个链接</a></p>
      <p slot="revealBody">Here is some more information about this product that is only revealed once clicked on.</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>
  </mv-col>
</mv-row>

<script >
  export default {
    data () {
      return {
        image: require('../../document/assets/card.jpg')
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 卡片标题 | string | — | — |
| header-classname | 标题类名 | string | — | — |
| type | 卡片类型 | string | image | card |
| image | 图片链接地址 | string | — | — |
| fab | 是否显示响应悬浮按钮 | boolean | — | false |
| fab-size | 按钮大小 | string | large | — |
| horizontal | 是否水平排列卡片内容| boolean | — | false |
| reveal | 是否显示揭示内容 | boolean | — | false |
| reveal-header | 揭示标题 | string | — | 卡片标题header |
| reveal-header-classname | 揭示标题类名 | string | — | — |
| sticky | 是否覆盖底部按钮 | boolean | — | false |
| size | 卡片大小 | string | small, medium, large | — |

### Slots
| name      | 说明    |
|---------- |-------- |
| default | 卡片内容 |
| header | 卡片标题 |
| image | 卡片图片 |
| action | 卡片底部内容 |
| revealHeader | 揭示标题 |
| revealBody | 揭示内容 |
