<template>
  <div class="mv-chip">
    <div v-for="chip in chips" :key="chip.id" @click="currentIndex = chip.id" v-show="chip.tag !== ''"
         :class="['chips', {'selectChip': currentIndex != -1 && currentIndex === chip.id && selected}]">
      <img v-if="chip.image" :src=chip.image alt="Contact Person">
      <span>{{chip.tag}}</span>
      <i @click="handleClose(chip)">
        <icon v-if="icon" v-bind="iconAttr" class="close"></icon>
      </i>
    </div>
    <input-add v-if='show' v-model="inputValue" class="newChip" placeholder="+NewChip" @enter="handleInputConfirm" @blur="handleInputConfirm"></input-add>
  </div>
</template>

<script>
  import Icon from 'packages/icon/src/main.vue'
  import InputAdd from 'packages/input/src/main.vue'

  export default {
    name: 'MvChip',
    componentName: 'MvChip',
    components: {
      Icon,
      InputAdd
    },
    data () {
      return {
        currentIndex: -1,
        inputValue: ''
      }
    },
    props: {
      chips: {
        type: Array,
        default: function () {
          return [{tag: '', image: '', id: null}]
        }
      },
      selected: Boolean,
      icon: [String, Object],
      show: Boolean
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
        let inputValue = this.inputValue.trim()
        if (inputValue) {
          for (var chip in this.chips) {
            if (this.chips[chip].tag === inputValue) {
              inputValue = ''
            }
          }
          this.chips.push({
            tag: inputValue, id: inputValue
          })
        }
        this.inputValue = ''
      }
    }
  }
</script>

