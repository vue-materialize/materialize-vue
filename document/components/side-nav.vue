<template>
  <div class="sidenav">
    <ul>
      <li class="nav-item" v-for="item in data">
        <a v-if="!item.path && !item.href">{{item.name}}</a>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title">{{group.groupName}}</div>
            <ul
                class="pure-menu-list">
              <li
                  class="nav-item"
                  v-for="navItem in group.list"
                  v-if="!navItem.disabled">
                <router-link
                    active-class="active"
                    :to="base + navItem.path"
                    v-text="navItem.title">
                </router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .sidenav {
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    .nav-item {
      a {
        display: block;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #5e6d82;
        transition: all .3s;
      }
      .nav-item {
        a {
          font-size: 13px;
          padding-left: 24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover, &.active {
            color: #ee6e73;
          }
        }
      }
    }
    .nav-group__title {
      margin-top: 10px;
      padding-left: 8px;
      line-height: 26px;
      font-size: 12px;
      color: #99a9bf;
    }
  }
</style>