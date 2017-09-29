<template>
  <span class="mv-badge badge"
        :class="[
          {
            'new': isNew,
            'right': right,
            'gap': gap
          },
          color
        ]">
    {{currentValue}}
    <span class="mv-badge__caption">{{caption}}</span>
  </span>
</template>

<script>
  export default {
    name: 'MvBadge',

    componentName: 'MvBadge',

    props: {
      isNew: Boolean,
      value: [String, Number],
      max: Number,
      color: String,
      caption: String,
      right: Boolean,
      gap: Boolean
    },

    computed: {
      currentValue () {
        let {
          max,
          value
        } = this

        if (max &&
          typeof max === 'number' &&
          !isNaN(parseInt(value, 10)) &&
          value > max) {
          return `${max}+`
        }
        return value
      }
    }
  }
</script>
