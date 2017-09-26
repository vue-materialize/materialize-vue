<template>
  <div class="mv-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MvRadioGroup',

    componentName: 'MvRadioGroup',

    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      checked: {},
      withGap: Boolean,
      disabled: Boolean,
      vertical: Boolean
    },

    watch: {
      checked (value) {
        this.$emit('change', value)
      }
    }
  }
</script>
