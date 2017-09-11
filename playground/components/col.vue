<template>
  <div>
    <mv-row>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
      <mv-col :s="1">s1</mv-col>
    </mv-row>

    <mv-row>
      <mv-col>12-columns</mv-col>
      <mv-col :s="6" :offset="6">6-columns(offset-by-6)</mv-col>
    </mv-row>

    <mv-row>
      <mv-col :s="7" :push="5">7-columns(push-5)</mv-col>
      <mv-col :s="5" :pull="7">5-columns(pull-7)</mv-col>
    </mv-row>

    <mv-row>
      <mv-col :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>
      <mv-col :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>
      <mv-col :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>
      <mv-col :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>
    </mv-row>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .col {
    line-height: 50px;
    font-size: 28px;
    color: white;
    text-align: center;
    margin: 7px 0;
    background-color: tomato;
    border: 1px solid #eee;
  }
</style>
