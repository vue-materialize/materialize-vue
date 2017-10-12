<template>
  <div>
    {{activeName}}
    <mv-tabs v-model="activeName" fixedWith :animated="false" @tab-click="handleTabClick">
      <mv-tab-pane label="TEST1" name="first">Test 1</mv-tab-pane>
      <mv-tab-pane label="TEST2" name="second">Test 2</mv-tab-pane>
      <mv-tab-pane label="TEST3" name="third">Test 3</mv-tab-pane>
      <mv-tab-pane label="TEST4" name="forth">Test 4</mv-tab-pane>
    </mv-tabs>

    {{activeName2}}
    <mv-tabs v-model="activeName2">
      <mv-tab-pane label="TEST1">Test 1</mv-tab-pane>
      <mv-tab-pane label="TEST2">Test 2</mv-tab-pane>
      <mv-tab-pane label="TEST3">Test 3</mv-tab-pane>
      <mv-tab-pane label="TEST4">Test 4</mv-tab-pane>
    </mv-tabs>

    <mv-tabs v-model="activeName" fixedWith swipeable>
      <mv-tab-pane class="red" label="TEST1" name="first">Test 1</mv-tab-pane>
      <mv-tab-pane class="green" label="TEST2" name="second">Test 2</mv-tab-pane>
      <mv-tab-pane class="blue" label="TEST3" name="third">Test 3</mv-tab-pane>
      <mv-tab-pane class="purple" label="TEST4" name="forth">Test 4</mv-tab-pane>
    </mv-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'second',
        activeName2: 2
      }
    },
    methods: {
      handleTabClick (pane, index, event) {
        console.log(pane, index, event)
      }
    }
  }
</script>
