<template>
  <div class="input-field mv-input">
    <i :class="['material-icons', 'prefix', isFocus ? 'active' : '']">
      <icon v-if="icon" v-bind="iconAttr" :class="['material-icons', position]"></icon>
    </i>
    <input v-if="type !== 'textarea'" :type="type" :value="currentValue" :placeholder="placeholder" :class="['validate', validateSure]"
           :disabled="disabled"
           @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup.enter="handleEnter">
    <label for="disabled" :class="{'active': focusType || disabled === true || active }" :data-error="wrongmsg"
             :data-success="rightmsg">
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
        validateSure: '', // 是否添加验证
        focusType: false, // 输入状态
        isFocus: false  // 文本框是否聚焦
      }
    },
    props: {
      value: [String, Number],
      placeholder: String,
      validate: Boolean,
      active: Boolean,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      wrongmsg: {
        type: String,
        default: 'wrong'
      },
      rightmsg: {
        type: String,
        default: 'right'
      },
      icon: [String, Object],
      position: String
    },
    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val)
      }
    },
    mounted () {
      if (this.value) {
        this.focusType = true
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
        this.isFocus = true
        this.focusType = true
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
        this.$emit('change', event)
      },
      handleFocus (event) {
        this.isFocus = true
        this.focusType = true
        this.$emit('focus', event)
      },
      handleBlur (event) {
        this.condition(event)
        this.$emit('blur', event)
      },
      handleEnter (event) {
        this.condition(event)
        this.$emit('enter', event)
      },
      condition (event) {  // 失去焦点 回车后的判定
        this.isFocus = false
        if (event.target.value.trim()) {
          this.focusType = true
          if (this.validate) { // 判定email规则匹配，匹配'valid'，不匹配'invalid'
            var reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
            var result = reg.test(event.target.value)
            if (result) {
              this.validateSure = this.type === 'email' ? 'valid' : ''
            } else {
              this.validateSure = this.type === 'email' ? 'invalid' : ''
            }
          }
        } else {
          this.focusType = false
          this.validateSure = ''
        }
      }
    }
  }
</script>
