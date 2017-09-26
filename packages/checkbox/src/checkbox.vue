<template>
  <div class="mv-checkbox"
       :class="{
      'mv-checkbox--inline': !isVertical,
      'mv-checkbox--single': !isGroup
    }">
    <input v-if="trueValue || falseValue"
           type="checkbox"
           :id="id || value || $slots.default[0].text"
           :class="{
             'filled-in': isFilled,
             'indeterminate': indeterminate
           }"
           :true-value="trueValue"
           :false-value="falseValue"
           v-model="model"
           @change="handleChange"
           :disabled="isDisabled">
    <input v-else
           type="checkbox"
           :id="id || value || $slots.default[0].text"
           :class="{
             'filled-in': isFilled,
             'indeterminate': indeterminate
           }"
           :value="value"
           v-model="model"
           @change="handleChange"
           :disabled="isDisabled">
    <label :for="id || value || $slots.default[0].text">
      <slot>{{value}}</slot>
    </label>
  </div>
</template>

<script>
  import Emitter from 'mvui/src/mixins/emitter'

  export default {
    name: 'MvCheckbox',

    componenntName: 'MvCheckbox',

    mixins: [Emitter],

    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      id: [String, Number],
      filled: Boolean,
      indeterminate: Boolean,
      checked: {},
      value: {},
      disabled: Boolean,
      vertical: Boolean,
      trueValue: [String, Number],
      falseValue: [String, Number]
    },

    data () {
      return {
        quantity: -1
      }
    },

    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'MvCheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checkboxGroup = parent
            return true
          }
        }
        return false
      },

      model: {
        get () {
          return this.isGroup ? this._checkboxGroup.checked : this.checked
        },
        set (val) {
          if (this.isGroup) {
            this.quantity = val.length
            if (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min ||
              this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max) return

            this.dispatch('MvCheckboxGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },

      isVertical () {
        return this.isGroup
          ? this._checkboxGroup.vertical || this.vertical
          : this.vertical
      },

      isFilled () {
        return this.isGroup
          ? this._checkboxGroup.filled || this.filled
          : this.filled
      },

      isDisabled () {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled
          : this.disabled
      }
    },

    methods: {
      handleChange (ev) {
        if (this.isGroup) {
          if (this.quantity === this._checkboxGroup.max + 1) {
            ev.target.checked = false
          }
          if (this.quantity === this._checkboxGroup.min - 1) {
            ev.target.checked = true
          }
        }
        this.$emit('change', ev)
      }
    }
  }
</script>
