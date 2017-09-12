<template>
  <div>
    <mv-button icon="file_upload" position="left">Button</mv-button>
    <mv-button floating size="large" :icon="{ name: '3d_rotation', spin: true}">Button</mv-button>
    <mv-button flat :icon="{ name: '3d_rotation', spin: true}" @click="handleClick">Button</mv-button>
    <mv-button size="large" :icon="{ name: '3d_rotation', spin: true}">Button</mv-button>
    <mv-button icon="3d_rotation">Button</mv-button>
    <mv-button icon="file_upload">Button</mv-button>
    <mv-button icon="file_upload"></mv-button>
    <mv-button icon="file_upload" size="large" @click="handleClick"></mv-button>
    <mv-button icon="file_upload" size="large" disabled  @click="handleClick"></mv-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick () {
        console.log('yeah, click.')
      }
    }
  }
</script>