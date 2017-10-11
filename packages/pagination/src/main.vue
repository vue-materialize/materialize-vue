<template>
  <ul class="mv-pagination pagination">
    <li :class="{'disabled': 1 === currentPage}"
        @click="setCurrentPage('prev')">
      <a href="javascript:;">
        <slot name="prev">
          <mv-icon name="chevron_left" :scale="1.3"></mv-icon>
        </slot>
      </a>
    </li>
    <li v-for="pager in leftPagers"
        :class="{'active': pager === currentPage}"
        @click="setCurrentPage(pager)">
      <a href="javascript:;">{{pager}}</a>
    </li>
    <li v-if="showPrevMore"
        @mouseenter="quickprevIconName = 'fast_rewind'"
        @mouseleave="quickprevIconName = 'more_horiz'"
        @click="setCurrentPage('prevMore')">
      <a href="javascript:;">
        <mv-icon :name="quickprevIconName" :scale="1.3"></mv-icon>
      </a>
    </li>
    <li v-for="pager in pagers"
        :class="{'active': pager === currentPage}"
        @click="setCurrentPage(pager)">
      <a href="javascript:;">{{pager}}</a>
    </li>
    <li v-if="showNextMore"
        @mouseenter="quicknextIconName = 'fast_forward'"
        @mouseleave="quicknextIconName = 'more_horiz'"
        @click="setCurrentPage('nextMore')">
      <a href="javascript:;">
        <mv-icon :name="quicknextIconName" :scale="1.3"></mv-icon>
      </a>
    </li>
    <li v-for="pager in rightPagers"
        :class="{'active': pager === currentPage}"
        @click="setCurrentPage(pager)">
      <a href="javascript:;">{{pager}}</a>
    </li>
    <li :class="{'disabled': pageCount === currentPage}"
        @click="setCurrentPage('next')">
      <a href="javascript:;">
        <slot name="next">
          <mv-icon name="chevron_right" :scale="1.3"></mv-icon>
        </slot>
      </a>
    </li>
  </ul>
</template>

<script>
  import Icon from 'packages/icon/src/main.vue'

  export default {
    name: 'MvPagination',

    componentName: 'MvPagination',

    component: {
      'mv-icon': Icon
    },

    props: {
      currentPage: Number,
      pageCount: Number,
      pageRange: {
        type: Number,
        default: 5
      },
      edgePages: {
        type: Number,
        default: 1
      }
    },

    data () {
      return {
        quickprevIconName: 'more_horiz',
        quicknextIconName: 'more_horiz',
        showPrevMore: false,
        showNextMore: false
      }
    },

    watch: {
      showPrevMore (val) {
        if (!val) this.quickprevIconName = 'more_horiz'
      },
      showNextMore (val) {
        if (!val) this.quicknextIconName = 'more_horiz'
      }
    },

    computed: {
      pagers () {
        const pageRange = Number(this.pageRange)
        const edgePages = Number(this.edgePages)
        const currentPage = Number(this.currentPage)
        const pageCount = Number(this.pageCount)

        const pagerCount = pageRange + edgePages * 2

        let showPrevMore = false
        let showNextMore = false

        if (pageCount > pagerCount) {
          let half = Math.ceil(pagerCount / 2) - 1
          if (currentPage > pagerCount - half) {
            showPrevMore = true
          }

          if (currentPage < pageCount - half) {
            showNextMore = true
          }
        }

        const array = []

        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2)
          for (let i = startPage + 1; i <= pageCount - edgePages; i++) {
            array.push(i)
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = edgePages + 1; i <= pagerCount - edgePages; i++) {
            array.push(i)
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.ceil(pagerCount / 2) - 1 - edgePages
          const endPage = pagerCount % 2 === 1
            ? currentPage + offset
            : currentPage + offset + 1
          for (let i = currentPage - offset; i <= endPage; i++) {
            array.push(i)
          }
        } else {
          for (let i = edgePages + 1; i <= pageCount - edgePages; i++) {
            array.push(i)
          }
        }

        this.showPrevMore = showPrevMore
        this.showNextMore = showNextMore

        return array
      },
      leftPagers () {
        let edgePages = this.edgePages
        let pageCount = this.pageCount
        let array = []

        if (pageCount < edgePages) {
          for (let i = 1; i <= pageCount; i++) {
            array.push(i)
          }
        } else {
          for (let i = 1; i <= edgePages; i++) {
            array.push(i)
          }
        }

        return array
      },
      rightPagers () {
        let edgePages = this.edgePages
        let pageCount = this.pageCount
        let array = []

        if (pageCount < edgePages * 2) {
          for (let i = edgePages + 1; i <= pageCount; i++) {
            array.push(i)
          }
        } else {
          for (let i = pageCount - edgePages + 1; i <= pageCount; i++) {
            array.push(i)
          }
        }

        return array
      }
    },

    methods: {
      setCurrentPage (pager) {
        let newPage = this.currentPage
        let pageRange = this.pageRange
        if (typeof pager === 'string' && isNaN(Number(pager))) { // 如果是 < 或 > 或 ...
          switch (pager) {
            case 'prev':
              newPage--
              break
            case 'next':
              newPage++
              break
            case 'prevMore':
              newPage -= pageRange
              break
            case 'nextMore':
              newPage += pageRange
              break
            default:
              break
          }
        } else {
          newPage = Number(pager)
        }

        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1
          }

          if (newPage > this.pageCount) {
            newPage = this.pageCount
          }
        }

        if (newPage !== this.currentPage) {
          this.$emit('change', newPage)
        }
      }
    }
  }
</script>
