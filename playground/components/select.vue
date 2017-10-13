<template>
  <div>
    {{value}}
    <mv-select v-model="value" value-key="py" multiple @change="handleChange">
      <mv-option v-for="(item, index) in options"
                 :key="item.value.py"
                 :label="item.label"
                 :value="item.value"
                 :id="index">
      </mv-option>
    </mv-select>
  </div>
</template>
<script>
  import Finder from 'main/mixins/finder'

  export default {
    mixins: [Finder],

    data () {
      return {
        options: [
          {
            value: {zh: '选项1', py: 'xuanxiang1'},
            label: '黄金糕'
          },
          {
            value: {zh: '选项2', py: 'xuanxiang2'},
            label: '双皮奶'
          },
          {
            value: {zh: '选项3', py: 'xuanxiang3'},
            label: '蚵仔煎'
          },
          {
            value: {zh: '选项4', py: 'xuanxiang4'},
            label: '龙须面'
          },
          {
            value: {zh: '选项5', py: 'xuanxiang5'},
            label: '北京烤鸭'
          }
        ],
        value: [
          {zh: '选项1', py: 'xuanxiang1'},
          {zh: '选项2', py: 'xuanxiang2'}
        ]
      }
    },

    methods: {
      handleChange (val, label) {
        console.log(val, label)
      }
    },

    mounted () {
      console.log(this.findChildComponents('MvOptionGroup'))
    }
  }
</script>
