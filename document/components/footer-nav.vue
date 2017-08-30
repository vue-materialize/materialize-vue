<template>
  <div class="footer-nav">
    <span
        v-if="leftNav"
        class="footer-nav-link footer-nav-left"
        @click="handleNavClick('prev')">
      {{ leftNav.title || leftNav.name }}
    </span>
    <span
        v-if="rightNav"
        class="footer-nav-link footer-nav-right"
        @click="handleNavClick('next')">
      {{ rightNav.title || rightNav.name }}
    </span>
  </div>
</template>
<script>
  import navConfig from '../nav.config.json'

  export default {
    data () {
      return {
        nav: [],
        leftNav: null,
        rightNav: null,
        currentIndex: -1
      }
    },
    watch: {
      '$route.path' () {
        this.setNav()
        this.updateNav()
      }
    },
    methods: {
      setNav () {
        let nav = navConfig
        nav[0].groups.map(group => group.list).forEach(list => {
          this.nav = this.nav.concat(list)
        })
      },
      updateNav () {
        let currentComponent = '/' + this.$route.path.split('/')[1]
        for (let i = 0, len = this.nav.length; i < len; i++) {
          if (this.nav[i].path === currentComponent) {
            this.currentIndex = i
          }
        }
        this.leftNav = this.nav[this.currentIndex - 1]
        this.rightNav = this.nav[this.currentIndex + 1]
      },
      handleNavClick (direction) {
        console.log(this.leftNav, this.rightNav)
        this.$router.push(`${direction === 'prev' ? this.leftNav.path : this.rightNav.path}`)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .footer-nav {
    padding: 24px 0;
    color: #99a9bf;
    font-size: 14px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    & i {
      transition: .3s;
      color: #d9def1;
      vertical-align: baseline;
    }
  }
  .footer-nav-link {
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: #20a0ff;

      & i {
        color: #20a0ff;
      }
    }
  }
  .footer-nav-left {
    float: left;
    margin-left: -4px;
  }
  .footer-nav-right {
    float: right;
    margin-right: -4px;
  }
</style>