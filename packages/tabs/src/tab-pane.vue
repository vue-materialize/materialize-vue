<template>
  <div v-if="!swipeable" class="mv-tab-pane" v-show="active">
    <slot></slot>
  </div>
  <div v-else :ref="`pane`" class="mv-tab-pane carousel-item" :style="paneStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MvTabPane',

    componentName: 'MvTabPane',

    props: {
      label: String,
      name: String,
      disabled: Boolean
    },

    computed: {
      index () {
        return this.$parent.tabs.map(tab => tab.label).indexOf(this.label)
      },
      active () {
        return this.$parent.currentName === (this.name || this.index)
      },
      swipeable () {
        return this.$parent.swipeable
      },
      paneStyle () {
        let paneWidth = this.$parent.$refs.tabs.offsetWidth
        let selected = this.$parent.tabs.map(tab => tab.name).indexOf(this.$parent.currentName)
        return {
          display: 'block',
          width: '100%',
          transform: `translateX(${(this.index - selected) * paneWidth}px)`,
          opacity: this.active ? 1 : 0,
          zIndex: this.active ? 0 : -1,
          transition: 'transform .3s ease-in-out'
        }
      }
    },

    mounted () {
      if (this.swipeable) {
        this.$parent.setCarouselHeight(this)
      }
    },

    created () {
      this.$parent.setTabs(this)
    }
  }
</script>
