<template>
  <span class="mv-breadcrumb-item breadcrumb" @click="handleJump">
    <slot></slot>
    <span v-if="separator" class="separator">{{separator}}</span>
    <icon v-else name="keyboard_arrow_right" class="separator"></icon>
  </span>
</template>
<script>
  import Icon from 'packages/icon/src/main'

  export default {
    name: 'MvBreadcrumbItem',

    componentName: 'MvBreadcrumbItem',

    components: {
      Icon
    },

    props: {
      to: {},
      replace: Boolean,
      go: Boolean
    },

    data () {
      return {
        separator: ''
      }
    },

    methods: {
      handleJump (event) {
        if (this.to) {
          let to = this.to
          if (this.$router) {
            this.replace
              ? this.$router.replace(to)
              : this.go ? this.$router.go(to) : this.$router.push(to)
          } else {
            location.href = to
          }
        }
      }
    },

    mounted () {
      this.separator = this.$parent.separator
    }
  }
</script>
