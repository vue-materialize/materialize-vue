<template>
  <div class="mv-select" v-clickoutside="handleClose">
    <div class="select-wrapper">
      <span class="caret">▼</span>
      <input type="text"
             class="select-dropdown"
             readonly="true"
             :value="selectedLabel"
             @focus="handleFocus"
             @click="handleClick">
      <transition
        name="mv-top"
        @before-enter="handleMenuEnter">
        <ul id="select-options"
            class="dropdown-content select-dropdown"
            :class="{'mv-select__multiple': multiple}"
            v-show="visible"
            ref="options">
          <mv-option
            v-if="placeholder"
            :value="placeholder"
            disabled>
          </mv-option>
          <slot></slot>
        </ul>
      </transition>
    </div>
    <label v-if="label">{{label}}</label>
  </div>
</template>

<script>
  import MvOption from './option.vue'
  import Clickoutside from 'main/utils/clickoutside'
  import {getValueByPath} from 'main/utils/util'

  export default {
    name: 'MvSelect',

    componentName: 'MvSelect',

    directives: {Clickoutside},

    components: {
      MvOption
    },

    props: {
      value: {
        required: true
      },
      valueKey: {
        type: String,
        default: 'value'
      },
      placeholder: {
        type: [String, Number, Object],
        default: ''
      },
      multiple: {
        type: Boolean
      },
      label: String
    },

    data () {
      return {
        options: [],
        cachedOptions: [],
        visible: false,
        isSelect: true,
        selectedLabel: ''
      }
    },

    watch: {
      value (val) {
        this.setSelected()
        this.$emit('change', val)
      }
    },

    methods: {
      handleOptionSelect (option) {
        if (this.multiple) {
          const value = this.value.slice()
          const optionIndex = this.getValueIndex(value, option.value)
          if (optionIndex > -1) {
            value.splice(optionIndex, 1)
          } else {
            value.push(option.value)
          }
          this.$emit('input', value)
        } else {
          this.$emit('input', option.value)
          this.visible = false
        }
      },
      getValueIndex (arr = [], value) {
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
        if (!isObject) {
          return arr.indexOf(value)
        } else {
          const valueKey = this.valueKey
          let index = -1
          arr.some((item, i) => {
            if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
              index = i
              return true
            }
            return false
          })
          return index
        }
      },
      handleFocus () {
        this.visible = true
      },
      handleClose () {
        this.visible = false
      },
      setSelected () {
        if (!this.multiple) {
          let option = this.getOption(this.value)
          this.selectedLabel = option.currentLabel
          if (!option.currentLabel && this.placeholder) {
            this.selectedLabel = this.placeholder
          }
          return
        }
        let result = []
        if (Array.isArray(this.value)) {
          this.value.forEach(value => {
            result.push(this.getOption(value).currentLabel)
          })
        }
        this.selectedLabel = result
      },
      getOption (value) {
        let option
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
        for (let i = 0; i <= this.cachedOptions.length - 1; i++) {
          const cachedOption = this.cachedOptions[i]
          const isEqual = isObject
            ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
            : cachedOption.value === value
          if (isEqual) {
            option = cachedOption
            break
          }
        }
        if (option) return option
        const label = !isObject
          ? value : ''
        let newOption = {
          value: value,
          currentLabel: label
        }
        if (this.multiple) {
          newOption.hitState = false
        }
        return newOption
      },
      handleClick () {
        this.visible !== this.visible
      },
      handleMenuEnter (el) {
        el.style.top = 0
      }
    },
    mounted () {
      this.setSelected()
    },

    created () {
      this.$on('handleOptionClick', this.handleOptionSelect)
    }
  }
</script>
