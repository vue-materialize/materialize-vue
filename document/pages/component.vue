<template>
  <div class="page-component page-container">
    <div class="row">
      <div class="col s3">
        <side-nav :data="navsData" :base="``"></side-nav>
      </div>
      <div class="col s9">
        <router-view class="content"></router-view>
        <footer-nav></footer-nav>
      </div>
    </div>
  </div>
</template>
<script>
  import navsData from '../nav.config.json'
  export default {
    data () {
      return {
        navsData
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .page-component {
    padding-bottom: 95px;
    box-sizing: border-box;
    .content {
      margin-left: -1px;
      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;

          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
            white-space: nowrap;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
            max-width: 250px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>