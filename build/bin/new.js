/**
 * 创建组件
 * 命令： npm run new compnentName 中文名称
 * 作用：
 *   1、 添加组件到 components.json
 *   2、 创建组件目录及 index.js 和 src/main.vue 文件（./packages/componentName）
 * npm 包：
 *   https://www.npmjs.com/package/file-save
 *   https://www.npmjs.com/package/uppercamelcase
 * @ElemeFE：
 *   https://github.com/ElemeFE/element/blob/dev/build/bin/new.js
 */
console.log()
process.on('exit', function () {
  console.log()
})

// 没有输入组件名称
if (!process.argv[2]) {
  console.log('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

var path = require('path')
var fileSave = require('file-save')
var uppercamelcase = require('uppercamelcase') // Pascal Case
var componentName = process.argv[2] // 组件名称
var chineseName = process.argv[3] || componentName // 组件中文名称
var ComponentName = uppercamelcase(componentName)
var PackagePath = path.resolve(__dirname, '../../packages', componentName) // 组件所在路径
/* var IMPORT_TEMPLATE = `  import {{name}} from './components/{{package}}.vue'`
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
</script>` */
var Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main'

${ComponentName}.install = function (Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="mv-${componentName}"></div>
</template>

<script>
  export default {
    name: 'Mv${ComponentName}'
  }
</script>`
  },
  {
    filename: path.join('../../document/docs/', `${componentName}.md`),
    content: `## ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../test/unit/specs', `${ComponentName}.spec.js`),
    content: ``
  },
  {
    filename: path.join('../../playground/components/', `${componentName}.vue`),
    content: `<template>
  <div>
    <mv-${componentName}>${ComponentName}</mv-${componentName}>
  </div>
</template>
<script>
  export default {
  }
</script>`
  },
  {
    filename: path.join('../../playground/', `App.vue`),
    content: ``
  }
]

// 添加到 components.json，并校验名称
var componentsFile = require('../../components.json')
if (componentsFile[componentName]) {
  console.error(`${componentName} 已存在`)
  process.exit(1)
}

// 重新写入到 components.json
componentsFile[componentName] = `./packages/${componentName}/index.js`
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, 2), 'utf8')
  .end('\n')

// playground 入口模板内容填充
/* var includeTemplate = []
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

Files[Files.length - 1].content = render(MAIN_TEMPLATE, {
  include: includeTemplate.join(endOfLine),
  register: registerTemplate.join(',' + endOfLine)
}) */
var buildPlay = require('./build-play.js')
Files[Files.length - 1].content = buildPlay(componentsFile, componentName)

// 创建组件
Files.forEach(function (file) {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

// 添加到 nav.config.json
var navConfigFile = require('../../document/nav.config.json')
var groups = navConfigFile[0].groups
groups[groups.length - 1].list.push({
  path: `/${componentName}`,
  title: `${ComponentName} ${chineseName}`
})
fileSave(path.join(__dirname, '../../document/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n')

console.log('New DONE!')
