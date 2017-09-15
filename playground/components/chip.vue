<template>
  <div>
    <mv-chip :chips="chipGroup0"></mv-chip>

    <mv-chip :chips="chipGroup1" :icon="{ name: 'close' }"></mv-chip>
    <mv-chip :chips="chipGroup2" :icon="{ name: 'close' }"></mv-chip>

    <mv-chip :icon="{ name: 'close' }" show></mv-chip>
    <mv-chip :chips="chipGroup3" :icon="{ name: 'close' }" show></mv-chip>

    <mv-chip :chips="chipGroup4" :icon="{ name: 'close' }" selected></mv-chip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chipGroup0: [
          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg'), id: 1}
        ],
        chipGroup1: [
          {tag:'联系人Chip标签-不可删除', image: require('../../document/assets/user.jpg'), id: 1}
        ],
        chipGroup2: [
          {tag:'标签一', id: 1},
          {tag:'标签二', id: 2},
          {tag:'标签三', id: 3},
          {tag:'标签四', id: 4}
        ],
        chipGroup3: [
          {tag:'标签一', id: 1},
          {tag:'标签二', id: 2},
          {tag:'标签三', id: 3},
          {tag:'标签四', id: 4}
        ],
        chipGroup4: [
          {tag:'标签一', id: 1},
          {tag:'标签二', id: 2},
          {tag:'标签三', id: 3},
          {tag:'标签四', id: 4}
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
