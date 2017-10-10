<template>
  <li @click="selectOptionClick"
    :class="{
      'selected': itemSelected,
      'disabled': disabled
      }"
  >
    <slot>
      <span>
        <mv-checkbox v-if="this.parent.multiple" v-model="checkbox" vertical>{{ currentLabel }}</mv-checkbox>
        <template v-else>{{ currentLabel }}</template>
      </span>
    </slot>
  </li>
</template>
<script>
  import Emitter from 'mvui/src/mixins/emitter'
  import MvCheckbox from 'mvui/packages/checkbox'

  export default {
    name: 'MvOption',

    mixins: [Emitter],

    props: {
      label: [String, Number],
      value: {
        required: true
      },
      defatultOption: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        avisible: true,
        checkbox: false
      }
    },
    components: {
      MvCheckbox
    },
    computed: {
      isObject () {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]'
      },
      currentLabel () {
        return this.label || (this.isObject ? '' : this.value)
      },
      currentValue () {
        return this.value || this.label || ''
      },
      itemSelected () {
        if (!this.parent.multiple) {
          return this.isEqual(this.label, this.parent.selectedLabel)
        } else {
          return this.contains(this.parent.selectedLabel, this.label)
        }
      },
      parent () {
        let result = this.$parent
        while (!result.isSelect) {
          result = result.$parent
        }
        return result
      }
    },
    methods: {
      selectOptionClick (ev) {
        if (ev.target.tagName === 'INPUT') return
        if (this.disabled !== true) {
          this.dispatch('MvSelect', 'handleOptionClick', this)
        }
      },
      isEqual (a, b) {
        if (!this.isObject) {
          return a === b
        } else {
          const valueKey = this.parent.valueKey
          return this.getValueByPath(a, valueKey) === this.getValueByPath(b, valueKey)
        }
      },
      contains (arr = [], target) {
        if (!this.isObject) {
          return arr.indexOf(target) > -1
        } else {
          const valueKey = this.parent.valueKey
          return arr.some(item => {
            return this.getValueByPath(item, valueKey) === this.getValueByPath(target, valueKey)
          })
        }
      },
      getValueByPath (object, prop) {
        prop = prop || ''
        const paths = prop.split('.')
        let current = object
        let result = null
        for (let i = 0, j = paths.length; i < j; i++) {
          const path = paths[i]
          if (!current) break

          if (i === j - 1) {
            result = current[path]
            break
          }
          current = current[path]
        }
        return result
      }
    },
    created () {
      this.parent.options.push(this)
      this.parent.cachedOptions.push(this)
    }
  }
</script>
