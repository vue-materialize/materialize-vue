/**
 * 构建 playground App.vue
 */
var render = require('json-templater/string')
var uppercamelcase = require('uppercamelcase') // Pascal Case
var endOfLine = require('os').EOL // 换行

// playground 入口模板内容填充
module.exports = function (componentsFile, componentName) {
  var IMPORT_TEMPLATE = `  import {{name}} from './components/{{package}}.vue'`
  var REGISTER_TEMPLATE = `      {{name}}Play: {{name}}`
  // playground 入口模板
  var MAIN_TEMPLATE = `<template>
  <div style="margin: 20px;">
    <${componentName}-play></${componentName}-play>
  </div>
</template>
<script>
{{include}}
  export default {
    components: {
{{register}}
    }
  }
</script>`

  var includeTemplate = []
  var registerTemplate = []
  Object.keys(componentsFile).forEach(function (name) {
    var Name = uppercamelcase(name)

    includeTemplate.push(render(IMPORT_TEMPLATE, {
      name: Name,
      package: name
    }))

    registerTemplate.push(render(REGISTER_TEMPLATE, {
      name: Name
    }))
  })

  return render(MAIN_TEMPLATE, {
    include: includeTemplate.join(endOfLine),
    register: registerTemplate.join(',' + endOfLine)
  })
}
