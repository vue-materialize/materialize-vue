<template>
  <div
      class="mv-button"
      :class="[
        floating ? 'btn-floating' : '',
        flat ? 'btn-flat' : '',
        !floating && !flat ? 'btn' : '',
        type ? type : '',
        size ? 'btn-' + size : ''
      ]"
      :type="nativeType"
      :disabled="disabled"
      @click="handleClick"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'MvButton',

    componentName: 'MvButton',

    props: {
      floating: Boolean,
      flat: Boolean,
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      type: String,
      size: String
    },

    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
