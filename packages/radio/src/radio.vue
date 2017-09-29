<template>
  <div class="mv-radio"
       :class="{
          'mv-radio--inline': !isVertical
       }">
    <input type="radio"
           :id="id || $slots.default[0].text"
           :class="{
              'with-gap': isWithGap
           }"
           :value="value"
           v-model="model"
           :name="name"
           :disabled="isDisabled">
    <label :for="id || $slots.default[0].text">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import Emitter from 'mvui/src/mixins/emitter'

  export default {
    name: 'MvRadio',

    componentName: 'MvRadio',

    mixins: [Emitter],

    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      checked: {},
      value: {},
      id: [String, Number],
      withGap: Boolean,
      name: String,
      disabled: Boolean,
      vertical: Boolean
    },

    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'MvRadioGroup') {
            parent = parent.$parent
          } else {
            this._radioGroup = parent
            return true
          }
        }
        return false
      },

      model: {
        get () {
          return this.isGroup ? this._radioGroup.checked : this.checked
        },

        set (val) {
          if (this.isGroup) {
            this.dispatch('MvRadioGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },

      isVertical () {
        return this.isGroup
            ? this._radioGroup.vertical || this.vertical
            : this.vertical
      },

      isWithGap () {
        return this.isGroup
          ? this._radioGroup.withGap || this.withGap
          : this.withGap
      },

      isDisabled () {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled
      }
    }
  }
</script>
