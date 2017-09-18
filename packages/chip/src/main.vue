<template>
  <div :class="['mv-chip', 'chips', { 'addBorder': show === true}, {'focus': focus && show === true}]" @click="focus = true, $refs.test.focus()">
    <div v-for="(chip, index) in chips" :key="index" @click="currentIndex = index"
         :class="['chip', {'selected': currentIndex != -1 && currentIndex === index && selected}]">
      <img v-if="chip.image" :src=chip.image alt="Contact Person">
      <span>{{chip.tag}}</span>
      <i @click="handleClose(chip)">
        <icon v-if="icon" v-bind="iconAttr" class="close"></icon>
      </i>
    </div>
    <input type="text" ref="test" v-if='show' v-model="inputValue" class="input" :placeholder="placeholder" @blur="handleInputConfirm" @keyup.enter="handleInputConfirm">
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
        inputValue: '',
        index: ''
      }
    },
    props: {
      chips: {
        type: Array,
        default: function () {
          return []
        }
      },
      selected: Boolean,
      icon: [String, Object],
      show: Boolean,
      placeholder: {
        type: String,
        default: ''
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
      handleClose (chip) {
        this.chips.splice(this.chips.indexOf(chip), 1)
        this.$emit('close', chip)
      },
      handleInputConfirm () {
        this.focus = false
        let inputValue = this.inputValue.trim()
        if (inputValue) {
          for (var chip in this.chips) {
            if (this.chips[chip].tag === inputValue) {
              inputValue = ''
            }
          }
          if (inputValue !== '') {
            this.chips.push({
              tag: inputValue
            })
          }
        }
        this.inputValue = ''
      }
    }
  }
</script>

