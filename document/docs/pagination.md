<script>
  export default {
    data () {
      return {
        currentPage: 1,
        pageRange: 4,
        edgePages: 1,
        pageCount: 100,
        rangePlus: true,
        edgePlus: true
      }
    },
    methods: {
      handlePageChange (page) {
        this.currentPage = page
      },
      handleCurrentPage (orientation) {
        if (orientation === 'plus') this.currentPage++
        if (orientation === 'minus') this.currentPage--
        if (this.currentPage > this.pageCount) this.currentPage = 100
        if (this.currentPage < 1) this.currentPage = 1
      },
      handlePageRange () {
        this.rangePlus ? this.pageRange++ : this.pageRange--
        if (this.pageRange >= 5) this.rangePlus = false
        if (this.pageRange <= 3) this.rangePlus = true
      },
      handleEdgePage () {
        this.edgePlus ? this.edgePages++ : this.edgePages--
        if (this.edgePages > 2) this.edgePlus = false
        if (this.edgePages < 2) this.edgePlus = true
      }
    }
  }
</script>
## Pagination 分页

添加分页链接，以帮助您将长内容分割成更短，更容易理解的块。

### 基本

:::demo 通过 `currentPage` 属性设置当前页，`pageCount` 设置总页数，`pageRange` 设置中间页码个数，`edgePages` 设置边缘页码个数。
```html
<mv-button @click="handleCurrentPage('plus')">页码+1</mv-button>
<mv-button @click="handleCurrentPage('minus')">页码-1</mv-button>
<mv-button @click="handlePageRange">范围{{rangePlus ? '+' : '-'}}1</mv-button>
<mv-button @click="handleEdgePage">边缘{{edgePlus ? '+' : '-'}}1</mv-button>
<p>当前页：{{currentPage}}，范围：{{pageRange}}，边缘：{{edgePages}}</p>
<mv-pagination :current-page="currentPage"
               :page-count="pageCount"
               :page-range="pageRange"
               :edge-pages="edgePages"
               @change="handlePageChange"></mv-pagination>

<script>
  export default {
    data () {
      return {
        currentPage: 1,
        pageRange: 4,
        edgePages: 1,
        pageCount: 100,
        rangePlus: true,
        edgePlus: true
      }
    },
    methods: {
      handlePageChange (page) {
        this.currentPage = page
      },
      handleCurrentPage (orientation) {
        if (orientation === 'plus') this.currentPage++
        if (orientation === 'minus') this.currentPage--
        if (this.currentPage > this.pageCount) this.currentPage = 100
        if (this.currentPage < 1) this.currentPage = 1
      },
      handlePageRange () {
        this.rangePlus ? this.pageRange++ : this.pageRange--
        if (this.pageRange >= 5) this.rangePlus = false
        if (this.pageRange <= 3) this.rangePlus = true
      },
      handleEdgePage () {
        this.edgePlus ? this.edgePages++ : this.edgePages--
        if (this.edgePages > 2) this.edgePlus = false
        if (this.edgePages < 2) this.edgePlus = true
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| current-page | 当前页 | number | — | — |
| page-count | 总页数 | number | — | — |
| page-range | 中间页码个数 | number | — | 5 |
| edge-pages | 边缘页码个数 | number | — | 1 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 页码改变时触发 | (value: number)  当前页码|
