/**
 * 根据 componentName 或者 name 查找父组件 或 子组件
 */

function findChildComponent (componentName, index) {
  const children = this.$children
  let child = null

  if (children.length) {
    for (let i = 0, length = children.length; i < length; i++) {
      const childItem = this.$children[i]
      const name = childItem.$options.componentName || childItem.$options.name

      if (name === componentName && (!index || index && i === index)) {
        child = childItem
        break
      } else {
        child = findChildComponent.call(childItem, componentName, index)
        if (child) break
      }
    }
  }

  return child
}

function findChildComponents (componentName) {
  const children = this.$children
  const components = []

  if (children.length) {
    for (let i = 0, length = children.length; i < length; i++) {
      const child = children[i]
      const name = child.$options.componentName || child.$options.name
      if (name === componentName) components.push(child)

      if (child.$children.length) {
        const childrenItem = findChildComponents.call(child, componentName)
        if (childrenItem.length) components.push.apply(components, childrenItem)
      }
    }
  }

  return components
}

export default {
  methods: {
    findParentComponent (componentName) {
      let parent = this.$parent
      let name = parent.$options.componentName || parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName || parent.$options.name
        }
      }

      return parent
    },

    findChildComponent (componentName, index) {
      return findChildComponent.call(this, componentName, index)
    },

    findChildComponents (componentName) {
      return findChildComponents.call(this, componentName)
    }
  }
}
