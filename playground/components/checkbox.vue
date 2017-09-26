<template>
  <div>
    <p>单个：{{value}}</p>
    <p>单个-动态属性：{{dynamicValue}}</p>
    <mv-checkbox v-model="value">value</mv-checkbox>
    <mv-checkbox v-model="dynamicValue" true-value="真的" false-value="假的">dynamicValue</mv-checkbox>

    <p>填充</p>
    {{filled}}
    <mv-checkbox v-model="filled" id="filled" filled>filled</mv-checkbox>

    <p>半选</p>
    <mv-checkbox id="indeterminate" indeterminate>indeterminate</mv-checkbox>

    <p>禁用</p>
    <mv-checkbox disabled>Checkbox-disabled</mv-checkbox>
    <mv-checkbox disabled>Checkbox-disabled-checked</mv-checkbox>

    <p>多选框组：{{checkGroup}}</p>
    <mv-checkbox-group v-model="checkGroup">
      <mv-checkbox value="banana">香蕉</mv-checkbox>
      <mv-checkbox value="apple">苹果</mv-checkbox>
      <mv-checkbox value="orange">橘子</mv-checkbox>
    </mv-checkbox-group>

    <p>indeterminate 状态</p>
    <mv-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</mv-checkbox>
    <mv-checkbox-group v-model="checkedCities" @change="handleCheckCitiesChange" filled :max="2" :min="1">
      <mv-checkbox v-for="city in cities" :value="city" :key="city"></mv-checkbox>
    </mv-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        value: false,
        dynamicValue: '假的',
        filled: true,
        checkGroup: ['banana'],
        indeterminate: true,
        cities: cityOptions,
        checkedCities: ['上海', '北京'],
        checkAll: false
      }
    },
    methods: {
      handleCheckAllChange (event) {
        this.checkedCities = event.target.checked ? cityOptions : []
        this.indeterminate = false
      },
      handleCheckCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.indeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>
