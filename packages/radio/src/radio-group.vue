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
      direction: {
        type: String,
        default: ''
      }
    },

    watch: {
      checked (value) {
        this.$emit('change', value)
      }
    }
  }
</script>
