<template>
  <div class="mv-chip"
       :class="{
          'chips': !single,
          'is-bordered': editable,
          'focus': focus && editable
       }"
       @click="focus = true; $refs.input && $refs.input.focus()">
    <div v-for="(chip, index) in dynamicChips"
         :key="index"
         class="chip"
         :class="{
           'selected': selected && currentIndex === index
         }"
         @click="currentIndex = index">
      <img v-if="chip.image" :src="chip.image" alt="Contact Person">
      <span>{{chip.tag}}</span>
      <i v-if="closable"
         class="close"
         @click="handleClose(chip)">
        <icon v-bind="iconAttr" class="material-icons"></icon>
      </i>
    </div>
    <input v-if='editable'
           type="text"
           ref="input"
           v-model="value"
           class="input"
           :placeholder="placeholder"
           @blur="handleInputConfirm"
           @keyup.enter="handleInputConfirm">
  </div>
</template>

<script>
  import Icon from 'packages/icon/src/main.vue'

  export default {
    name: 'MvChip',

    componentName: 'MvChip',

    components: {
      Icon
    },

    data () {
      return {
        focus: false,
        currentIndex: -1,
        value: '',
        single: false,
        dynamicChips: null
      }
    },

    props: {
      chips: {
        type: [Array, Object],
        default: function () {
          return []
        }
      },
      selected: Boolean,
      icon: {
        type: [String, Object],
        default: 'close'
      },
      closable: Boolean,
      editable: Boolean,
      placeholder: {
        type: String,
        default: ''
      },
      repeatable: Boolean
    },

    computed: {
      iconAttr () {
        return typeof this.icon === 'string'
          ? { name: this.icon }
          : this.icon
      }
    },

    created () {
      this.single = !Array.isArray(this.chips)
      this.dynamicChips = !Array.isArray(this.chips) ? [this.chips] : this.chips
    },

    methods: {
      handleClose (chip) {
        this.dynamicChips.splice(this.dynamicChips.indexOf(chip), 1)
        this.$emit('close', chip)
      },
      handleInputConfirm () {
        this.focus = false
        let value = this.value.trim()

        if (value) {
          let duplicate = false // 是否存在重复值
          if (!this.repeatable) { // 不可重复
            for (var chip in this.dynamicChips) {
              if (this.dynamicChips[chip].tag === value) {
                duplicate = true
              }
            }
          }
          if (!duplicate) {
            this.dynamicChips.push({
              tag: value
            })
            this.$emit('change', this.dynamicChips, value)
          }
        }
        this.value = ''
      }
    }
  }
</script>

