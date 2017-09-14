<template>
  <div>

    <mv-input>爱好</mv-input>

    <mv-input placeholder="占位提示" :active="true">姓名</mv-input>

    <mv-input placeholder="占位提示" :active="true" value="张三">姓名(绑定值)</mv-input>

    <mv-input placeholder="我不能输入" :active="true" :disabled="true">禁用</mv-input>

    <mv-input type="password">密码</mv-input>

    <mv-input type="email">邮件-无格式验证</mv-input>

    <mv-input type="email" :validate='true'>邮件-添加格式验证</mv-input>

    <mv-input type="email" :validate='true' wrongmsg="格式错误" rightmsg="格式正确">邮件-添加格式验证-自定义验证消息</mv-input>

    <mv-input type="text" size="large" :icon="{ name: 'share'}">分享</mv-input>

  </div>
</template>
<script>
  export default {
  }
</script>
