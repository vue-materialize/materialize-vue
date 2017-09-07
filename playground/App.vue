<template>
  <div style="margin: 20px;">
    <button-play></button-play>
  </div>
</template>
<script>
  import Button from './components/button.vue'
  import Icon from './components/icon.vue'
  export default {
    components: {
      ButtonPlay: Button,
      IconPlay: Icon
    }
  }
</script>
