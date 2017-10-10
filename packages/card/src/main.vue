<template>
  <div class="mv-card card"
       :class="[
         size,
         {
           'horizontal': horizontal,
           'sticky-action': sticky
         }
       ]"
       :style="{ 'overflow': 'hidden' }">
    <div v-if="image || type === 'image'"
         class="card-image">
      <slot name="image"><img v-if="image" :src="image"></slot>
      <span v-if="type === 'image' && ($slots.header || header)" class="card-title" :class="headerClassname"><slot
        name="header">{{header}}</slot></span>
      <mv-button v-if="fab"
                 class="halfway-fab"
                 icon="add"
                 floating
                 :size="fabSize"
                 type="red"></mv-button>
    </div>
    <div :class="{ 'card-stacked': horizontal }">
      <div class="card-content">
        <span v-if="type === 'card' && ($slots.header || header)"
              class="card-title"
              :class="[headerClassname, { 'activator': reveal }]"
              @click="showReveal = true">
          <slot name="header">{{header}}</slot>
          <mv-icon v-if="reveal" name="more_vert" :scale="0.8" class="right"></mv-icon>
        </span>
        <slot></slot>
      </div>
      <div class="card-action" v-if="$slots.action">
        <slot name="action"></slot>
      </div>
      <transition name="reveal">
        <div class="card-reveal" v-show="reveal && showReveal">
          <span class="card-title" :class="revealHeaderClassname" @click="showReveal = false">
            <slot name="revealHeader">
              {{revealHeader || ($slots.header ? $slots.header[0].text : '') || header }}
            </slot>
            <mv-icon name="close" :scale="0.8" class="right"></mv-icon>
          </span>
          <slot name="revealBody"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Button from 'packages/button/src/main.vue'
  import Icon from 'packages/icon/src/main.vue'

  export default {
    name: 'MvCard',

    componentName: 'MvCard',

    components: {
      'mv-button': Button,
      'mv-icon': Icon
    },

    props: {
      header: String,
      headerClassname: String,
      type: {
        type: String,
        default: 'card'
      },
      image: {},
      fab: Boolean,
      fabSize: String,
      horizontal: Boolean,
      sticky: Boolean,
      reveal: Boolean,
      revealHeader: String,
      revealHeaderClassname: String,
      size: String
    },

    data () {
      return {
        showReveal: false
      }
    }
  }
</script>
