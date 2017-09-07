<template>
  <button
      class="mv-button"
      :class="[
        floating ? 'btn-floating' : '',
        flat ? 'btn-flat' : '',
        !floating && !flat ? 'btn' : '',
        type ? type : '',
        size ? 'btn-' + size : '',
        {
          'is-loading': icon && icon.spin
        }
      ]"
      :type="nativeType"
      :disabled="disabled"
      @click="handleClick"
  >
    <icon v-if="icon" v-bind="iconAttr" :class="['material-icons', position]"></icon>
    <slot></slot>
  </button>
</template>
<script>
  import Icon from 'packages/icon/src/main.vue'

  export default {
    name: 'MvButton',

    componentName: 'MvButton',

    components: {
      Icon
    },

    props: {
      floating: Boolean,
      flat: Boolean,
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      type: String,
      size: String,
      icon: [String, Object],
      position: String
    },

    computed: {
      iconAttr () {
        return typeof this.icon === 'string'
          ? { name: this.icon }
          : this.icon
      }
    },

    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
