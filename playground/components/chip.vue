<template>
  <div>
    <mv-chip :chips="chipGroup0"></mv-chip>

    <mv-chip :chips="chipGroup1" :icon="{ name: 'close' }"></mv-chip>
    <mv-chip :chips="chipGroup2" :icon="{ name: 'close' }"></mv-chip>

    <mv-chip :icon="{ name: 'close' }" show></mv-chip>
    <mv-chip :chips="chipGroup3" :icon="{ name: 'close' }" show placeholder="+NewChip"></mv-chip>

    <mv-chip :chips="chipGroup4" :icon="{ name: 'close' }" selected></mv-chip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup0: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}
        ],
        chipGroup1: [
          {tag:'联系人Chip标签-不可删除', image: require('../../document/assets/user.jpg')}
        ],
        chipGroup2: [
          {tag:'标签一'},
          {tag:'标签二'},
          {tag:'标签三'},
          {tag:'标签四'}
        ],
        chipGroup3: [
          {tag:'标签一'},
          {tag:'标签二'},
          {tag:'标签三'},
          {tag:'标签四'}
        ],
        chipGroup4: [
          {tag:'标签一'},
          {tag:'标签二'},
          {tag:'标签三'},
          {tag:'标签四'}
        ]
      }
    },
    methods: {
      handleClose1 () {
        console.log('close1')
      }
    }
  }
</script>
