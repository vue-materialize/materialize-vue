<template>
  <div>
    <mv-badge :value="9999"></mv-badge>
    <mv-badge is-new value="9999"></mv-badge>
    <mv-badge is-new value="99" color="blue"></mv-badge>
    <mv-badge is-new value="9933" :max="999" color="red"></mv-badge>
  </div>
</template>
<script>
  export default {
  }
</script>
