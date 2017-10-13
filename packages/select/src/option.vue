<template>
  <li @click="selectOptionClick"
      :class="{
        'selected': itemSelected,
        'disabled': isDisabled
      }">
    <slot>
      <span>
        <mv-checkbox v-if="parent.multiple" v-model="checked" vertical>{{ currentLabel }}</mv-checkbox>
        <template v-else>{{ currentLabel }}</template>
      </span>
    </slot>
  </li>
</template>
<script>
  import Emitter from 'mvui/src/mixins/emitter'
  import Finder from 'mvui/src/mixins/finder'
  import MvCheckbox from 'mvui/packages/checkbox'
  import {getValueByPath} from 'main/utils/util'

  export default {
    name: 'MvOption',

    componentName: 'MvOption',

    mixins: [Emitter, Finder],

    props: {
      label: [String, Number],
      value: {
        required: true
      },
      disabled: Boolean
    },

    data () {
      return {
        checked: false
      }
    },

    components: {
      MvCheckbox
    },

    computed: {
      isObject () {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]'
      },
      isDisabled () {
        let optionGroup = this.findParentComponent('MvOptionGroup')
        if (optionGroup) {
          return optionGroup.disabled
        }
        return this.disabled
      },
      currentLabel () {
        return this.label || (this.isObject ? '' : this.value)
      },
      currentValue () {
        return this.value || this.label || ''
      },
      itemSelected () {
        if (!this.parent.multiple) {
          return this.isEqual(this.value, this.parent.value)
        } else {
          return this.contains(this.parent.value, this.value)
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
        if (!this.isDisabled) {
          this.dispatch('MvSelect', 'handleOptionClick', this)
        }
      },
      isEqual (a, b) {
        if (!this.isObject) {
          return a === b
        } else {
          const valueKey = this.parent.valueKey
          return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
        }
      },
      contains (arr = [], target) {
        if (!this.isObject) {
          return arr.indexOf(target) > -1
        } else {
          const valueKey = this.parent.valueKey
          return arr.some(item => {
            return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
          })
        }
      }
    },

    created () {
      this.parent.options.push(this)
      this.parent.cachedOptions.push(this)
      if (this.parent.multiple) {
        this.checked = this.contains(this.parent.value, this.value)
      }
    }
  }
</script>
