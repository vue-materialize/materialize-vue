<template>
  <div class="mv-tabs">
    <ul ref="tabs"
        class="tabs z-depth-1"
        :class="{'tabs-fixed-width': fixedWidth}">
      <li class="mv-tab-pane tab"
          v-for="(tab, index) in tabs"
          @click="handleTabClick($event, tab)"
          :class="{'disabled': tab.disabled}">
        <a href="javascript:;"
           :class="{'active': tab.name === currentName || index === currentName}">{{tab.label}}</a>
      </li>
      <li ref="indicator" class="indicator" :style="indicatorStyle"></li>
    </ul>
    <div v-if="swipeable" ref="tabcontent" class="tabs-content carousel">
      <slot></slot>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import {on, off} from 'main/utils/dom'

  export default {
    name: 'MvTabs',

    componentName: 'MvTabs',

    props: {
      value: {},
      animated: {
        type: Boolean,
        default: true
      },
      fixedWidth: Boolean,
      swipeable: Boolean,
      maxHeight: {
        type: Boolean,
        default: true
      }
    },

    watch: {
      value (val) {
        this.setCurrentName(val)
      }
    },

    data () {
      return {
        tabs: [],
        heights: [],
        currentName: this.value,
        lastCurrentTab: null,
        currentTab: null
      }
    },

    computed: {
      indicatorStyle () {
        if (!this.currentTab) return {}
        let style = {}
        this.setIndicatorStyle(style)
        if (this.lastCurrentTab && this.animated) {
          if (this.lastCurrentTab.offsetLeft > this.currentTab.offsetLeft) {
            style.transition = 'right .4s ease-in-out, left .3s ease-in-out'
          } else {
            style.transition = 'left .4s ease-in-out, right .3s ease-in-out'
          }
        }
        return style
      }
    },

    methods: {
      getPanes () {
        return this.$children.filter(pane => pane.$options.componentName === 'MvTabPane')
      },
      setTabs (pane) {
        this.tabs = []
        this.getPanes().forEach((pane, index) => {
          this.tabs.push({
            label: pane.label,
            name: pane.name || index,
            pane: pane,
            disabled: pane.disabled
          })
        })
        let index = this.tabs.map(tab => tab.name).indexOf(this.currentName)
        this.$nextTick(_ => {
          this.currentTab = this.$refs.tabs.querySelectorAll('.tab')[index]
        })
      },
      setCarouselHeight (pane) {
        this.heights = []
        this.getPanes().forEach((pane, index) => {
          this.heights.push(pane.$el.offsetHeight)
        })
        if (this.maxHeight) {
          this.$refs.tabcontent.style.height = Math.max.apply(null, this.heights) + 'px'
        } else {
          let index = this.tabs.map(tab => tab.name).indexOf(this.currentName)
          this.$refs.tabcontent.style.height = this.heights[index] + 'px'
        }
      },
      setCurrentName (val) {
        this.currentName = val
        this.$emit('input', val)
      },
      handleTabClick (event, tab) {
        if (tab.disabled) return
        this.lastCurrentTab = this.currentTab // 上一个 tab
        this.currentTab = event.target
        this.setCurrentName(tab.name)
        if (this.swipeable) {
          this.setCarouselHeight(tab.pane)
        }
        this.$emit('tab-click', tab.pane, event)
      },
      setIndicatorStyle (style, animated) {
        let tabsWidth = this.$refs.tabs.offsetWidth
        let tabWidth = this.currentTab.offsetWidth
        let tabOffsetLeft = this.currentTab.offsetLeft

        let right = tabsWidth - tabWidth - tabOffsetLeft
        style.left = tabOffsetLeft + 'px'
        style.right = `${right < 0 ? 0 : right}px`
      },
      resetIndicatorStyle () {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(_ => {
          this.setIndicatorStyle(this.$refs.indicator.style)
        }, 30)
      }
    },

    created () {
      on(window, 'resize', this.resetIndicatorStyle)
    },
    destroyed () {
      off(window, 'resize', this.resetIndicatorStyle)
    }
  }
</script>
