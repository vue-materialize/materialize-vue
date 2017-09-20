<template>
  <div>
    <p>默认情况</p>
    {{radio}}
    <mv-button @click="radio=!radio">Switch</mv-button>
    <mv-radio v-model="radio" value="true">Radio1</mv-radio>
    <mv-radio v-model="radio" value="false">Radio2</mv-radio>

    <p>值为数字</p>
    {{number}}
    <mv-radio v-model="number" :value="1">Radio Number1</mv-radio>
    <mv-radio v-model="number" :value="2">Radio Number2</mv-radio>

    <p>选中样式带间隙</p>
    {{gap}}
    <mv-radio v-model="gap" with-gap value="with-gap">Radio Gap1</mv-radio>
    <mv-radio v-model="gap" with-gap value="no-gap">Radio Gap2</mv-radio>

    <p>排列方向</p>
    {{direction}}
    <mv-radio v-model="direction" with-gap value="horizontal" direction="vertical">Radio Direction1</mv-radio>
    <mv-radio v-model="direction" with-gap value="vertical" direction="vertical">Radio Direction2</mv-radio>

    <p>按钮组</p>
    {{group}}
    <mv-radio-group v-model="group">
      <mv-radio value="banana">香蕉</mv-radio>
      <mv-radio value="apple">苹果</mv-radio>
      <mv-radio value="orange">橘子</mv-radio>
    </mv-radio-group>

    <mv-radio-group v-model="group">
      <mv-radio value="banana">香蕉1</mv-radio>
      <mv-radio value="apple" disabled>苹果2</mv-radio>
      <mv-radio value="orange">橘子3</mv-radio>
    </mv-radio-group>

    <mv-radio-group v-model="group">
      <mv-radio value="banana">香蕉1</mv-radio>
      <mv-radio value="apple" disabled withGap>苹果2</mv-radio>
      <mv-radio value="orange">橘子3</mv-radio>
    </mv-radio-group>

    <mv-radio-group v-model="group" direction="vertical">
      <mv-radio value="banana">香蕉1</mv-radio>
      <mv-radio value="apple" disabled withGap>苹果2</mv-radio>
      <mv-radio value="orange">橘子3</mv-radio>
    </mv-radio-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: true,
        number: 1,
        gap: 'with-gap',
        direction: 'horizontal',
        group: 'banana'
      }
    }
  }
</script>
