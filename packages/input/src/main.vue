<template>
  <div class="input-field mv-input">
    <i class="material-icons prefix"
       :class="[focus ? 'active' : '']"
       v-if="icon">
      <icon v-bind="iconAttr" class="material-icons"></icon>
    </i>
    <template v-if="type !== 'textarea'">
      <input :type="type"
             :value="currentValue"
             :placeholder="placeholder"
             :class="[validate ? 'validate' : '', verifyClass]"
             :disabled="disabled"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur"
             @keyup.enter="handleEnter">
    </template>
    <textarea v-else
              :value="currentValue"
              :placeholder="placeholder"
              class="materialize-textarea"
              :class="[validate ? 'validate' : '', verifyClass]"
              :disabled="disabled"
              @input="handleInput"
              @focus="handleFocus"
              @blur="handleBlur"></textarea>
    <label :class="{'active': currentValue || focus || active }"
           :data-error="errorMessage"
           :data-success="correctMessage">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import Icon from 'packages/icon/src/main.vue'

  export default {
    name: 'MvInput',

    componentName: 'MvInput',

    components: {
      Icon
    },

    data () {
      return {
        currentValue: this.value,
        verifyClass: '', // 验证样式
        focus: false // 文本框是否聚焦
      }
    },

    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      validate: Boolean,
      active: Boolean,
      disabled: Boolean,
      errorMessage: String,
      correctMessage: String,
      regexp: {
        type: RegExp,
        default () {
          return /\w{6,18}/
        }
      },
      icon: [String, Object]
    },

    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val)
      }
    },

    computed: {
      iconAttr () {
        return typeof this.icon === 'string'
          ? { name: this.icon }
          : this.icon
      }
    },

    methods: {
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
      },
      handleInput (event) {
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
        this.$emit('change', event)
      },
      handleFocus (event) {
        this.focus = true
        this.$emit('focus', event)
      },
      handleBlur (event) {
        this.focus = false
        if (this.validate) this.checkField(event)
        this.$emit('blur', event)
      },
      handleEnter (event) {
        if (this.validate) this.checkField(event)
        this.$emit('enter', event)
      },
      checkField (event) {
        let value = event.target.value.trim()
        if (value) {
          let regexp = this.regexp
          if (this.type === 'email') {
            regexp = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
          }
          this.verifyClass = regexp.test(value) ? 'valid' : 'invalid'
        } else {
          this.verifyClass = ''
        }
      }
    }
  }
</script>
