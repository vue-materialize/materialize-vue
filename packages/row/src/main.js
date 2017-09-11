export default {
  name: 'MvRow',

  componentName: 'MvRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },

  render (h) {
    return h(this.tag, {
      class: [
        'mv-row',
        'row'
      ]
    }, this.$slots.default)
  }
}