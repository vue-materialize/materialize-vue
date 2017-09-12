<template>
  <div class="mv-switch">
    <div class="switch" :class="disabled ? 'is-disabled' : ''">
      <label>
        {{offText}}
        <input type="checkbox"
               ref="input"
               :true-value="onValue"
               :false-value="offValue"
               :name="name"
               @change="handleChange"
               :disabled="disabled">
        <span class="lever" ref="lever"></span>
        {{onText}}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MvSwitch',
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onText: {
        type: String,
        default: 'ON'
      },
      offText: {
        type: String,
        default: 'OFF'
      },
      onColor: {
        type: String,
        default: ''
      },
      offColor: {
        type: String,
        default: ''
      },
      onValue: {
        type: [Boolean, String, Number],
        default: true
      },
      offValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    created () {
      if (!~[this.onValue, this.offValue].indexOf(this.value)) {
        this.$emit('input', this.offValue)
      }
    },
    computed: {
      checked () {
        return this.value === this.onValue
      },
      hasText () {
        /* istanbul ignore next */
        return this.onText || this.offText
      }
    },
    watch: {
      checked () {
        this.$refs.input.checked = this.checked
        if (this.onColor || this.offColor) {
          this.setBackgroundColor()
        }
      }
    },
    methods: {
      handleChange (event) {
        this.$emit('input', !this.checked ? this.onValue : this.offValue)
        this.$emit('change', !this.checked ? this.onValue : this.offValue)
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked
        })
      },
      setBackgroundColor () {
        let newColor = this.checked ? this.onColor : this.offColor
        this.$refs.lever.style.borderColor = newColor
        this.$refs.lever.style.backgroundColor = newColor
      }
    },
    mounted () {
      this.$refs.input.checked = this.checked
      if (this.onColor || this.offColor) {
        if (this.disabled) {
          return false
        }
        this.setBackgroundColor()
      }
    }
  }
</script>


