<template>
  <div>
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
  </div>
</template>
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
