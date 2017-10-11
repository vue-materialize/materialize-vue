<template>
  <div class="mv-select" v-clickoutside="handleClose">
    <div class="input-field col s12">
      <div class="select-wrapper">
        <span class="caret">▼</span>
        <input type="text"
               class="select-dropdown"
               readonly="true"
               :value="selectedLabel"
               @focus="handleFocus"
               @click="handleClick"
               ref="mvSelect"
        >
        <transition
          name="mv-top"
          @before-enter="handleMenuEnter">
          <ul id="select-options"
              class="dropdown-content select-dropdown"
              :class="{'mv-select__multiple': multiple}"
              v-show="avisible"
              ref="options">
            <el-option
              :value="placeholder"
              created
              v-if="placeholder"
              disabled>
            </el-option>
            <slot></slot>
          </ul>
        </transition>
      </div>
      <label>Materialize Select</label>
    </div>
  </div>
</template>

<script>
  import ElOption from './option.vue'
  import Clickoutside from 'mvui/src/utils/clickoutside'

  export default {
    name: 'MvSelect',

    componentName: 'MvSelect',

    directives: { Clickoutside },

    props: {
      value: {
        required: true
      },
      valueKey: {
        type: String,
        default: 'value'
      },
      placeholder: {
        type: [String, Object, Number],
        default: ''
      },
      multiple: {
        type: Boolean
      }
    },
    data () {
      return {
        options: [],
        cachedOptions: [],
        avisible: false,
        isSelect: true,
        selectedLabel: '',
        createdLabel: '',
        filterable: '',
        createdSelected: '',
        checkbox: false
      }
    },
    components: {
      ElOption
    },
    created () {
      this.$on('handleOptionClick', this.handleOptionSelect)
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
          this.avisible = false
        }
      },
      getValueIndex (arr = [], value) {
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
        if (!isObject) {
          return arr.indexOf(value)
        }
      },
      handleFocus () {
        this.avisible = true
      },
      handleBlur () {
        setTimeout(() => {
          this.avisible = false
        }, 200)
      },
      handleClose () {
        this.avisible = false
      },
      setSelected () {
        if (!this.multiple) {
          let option = this.getOption(this.value)
          if (option.created) {
            this.createdLabel = option.currentLabel
            this.createdSelected = true
          } else {
            this.createdSelected = false
          }
          this.selectedLabel = option.currentLabel
          if (!option.currentLabel && this.placeholder) {
            this.selectedLabel = this.placeholder
          }
          this.selected = option
          if (this.filterable) this.query = this.selectedLabel
          return
        }
        let result = []
        if (Array.isArray(this.value)) {
          this.value.forEach(value => {
            result.push(this.getOption(value).label)
          })
        }
        this.selectedLabel = result
      },
      getOption (value) {
        let option
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
        for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
          const cachedOption = this.cachedOptions[i]
          const isEqual = isObject
            ? this.getValueByPath(cachedOption.value, this.valueKey) === this.getValueByPath(value, this.valueKey)
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
        this.avisible !== this.avisible
      },
      handleMenuEnter (el) {
        el.style.top = 0
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
    computed: {},
    mounted () {
      this.setSelected()
    },
    watch: {
      'value' (val) {
        this.setSelected()
        this.$emit('change', val)
      }
    }
  }
</script>
