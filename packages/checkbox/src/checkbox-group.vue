<template>
  <div class="mv-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MvCheckboxGroup',

    componentName: 'MvCheckboxGroup',

    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      checked: {},
      filled: Boolean,
      disabled: Boolean,
      vertical: Boolean,
      min: Number,
      max: Number
    },

    watch: {
      checked (val) {
        this.$emit('change', val)
      }
    }
  }
</script>
