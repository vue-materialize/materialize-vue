<template>
  <icon fill-rule="evenodd" class="mv-icon" v-bind="$props"><slot></slot></icon>
</template>

<script>
  import Icon from 'vue-md-icons/src/components/Icon'
  import 'vue-md-icons/src/icons/keyboard_arrow_down' // 下箭头
  import 'vue-md-icons/src/icons/keyboard_arrow_left' // 左箭头
  import 'vue-md-icons/src/icons/keyboard_arrow_right' // 右箭头
  import 'vue-md-icons/src/icons/keyboard_arrow_up' // 上箭头
  import 'vue-md-icons/src/icons/arrow_drop_down' // 向上箭头
  import 'vue-md-icons/src/icons/arrow_drop_up' // 向下箭头
  import 'vue-md-icons/src/icons/check' // 选中
  import 'vue-md-icons/src/icons/check_circle' // 圆形选中
  import 'vue-md-icons/src/icons/close' // 关闭
  import 'vue-md-icons/src/icons/cloud_upload' // 云上传
  import 'vue-md-icons/src/icons/file_upload' // 文件上传
  import 'vue-md-icons/src/icons/date_range' // 日期
  import 'vue-md-icons/src/icons/edit' // 编辑
  import 'vue-md-icons/src/icons/info' // 信息
  import 'vue-md-icons/src/icons/menu' // 菜单
  import 'vue-md-icons/src/icons/message' // 消息
  import 'vue-md-icons/src/icons/more_horiz' // 更多 (水平)
  import 'vue-md-icons/src/icons/more_vert' // 更多 (垂直)
  import 'vue-md-icons/src/icons/add' // 加号
  import 'vue-md-icons/src/icons/remove' // 减号
  import 'vue-md-icons/src/icons/photo' // 图片
  import 'vue-md-icons/src/icons/search' // 搜索
  import 'vue-md-icons/src/icons/delete' // 删除
  import 'vue-md-icons/src/icons/settings' // 删除
  import 'vue-md-icons/src/icons/share' // 删除
  import 'vue-md-icons/src/icons/star' // 星星
  import 'vue-md-icons/src/icons/star_half' // 半星
  import 'vue-md-icons/src/icons/star_border' // 空星
  import 'vue-md-icons/src/icons/access_time' // 时间
  import 'vue-md-icons/src/icons/zoom_in' // 放大
  import 'vue-md-icons/src/icons/zoom_out' // 缩小
  import 'vue-md-icons/src/icons/3d_rotation' // 旋转

  export default {
    name: 'MvIcon',

    componentName: 'MvIcon',

    components: {
      Icon
    },

    props: Icon.props,

    data: Icon.data,

    computed: Icon.computed,

    register: Icon.register
  }
</script>
