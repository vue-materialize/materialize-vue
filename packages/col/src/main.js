export default {
  name: 'MvCol',

  componentName: 'MvCol',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    push: Number,
    pull: Number,
    s: {
      type: [Number, Object],
      default: 12
    },
    m: [Number, Object],
    l: [Number, Object],
    xl: [Number, Object],
    className: String
  },

  render (h) {
    let classList = []

    ;['offset', 'push', 'pull'].forEach(prop => {
      if (this[prop]) {
        classList.push(`${prop}-s${this[prop]}`)
      }
    })

    ;['s', 'm', 'l', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`${size}${this[size]}`)
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        let keys = Object.keys(props)
        keys.forEach(prop => {
          classList.push(
            prop === 's'
              ? `${size}${props[prop]}`
              : `${prop}-${size}${props[prop]}`
          )
        })
      }
    })

    return h(this.tag, {
      class: [
        'mv-col',
        'col',
        classList,
        this.className
      ]
    }, this.$slots.default)
  }
}