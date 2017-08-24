/**
 * 创建组件
 * 命令： npm run new compnentName
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
var componentName = process.argv[2]
var ComponentName = uppercamelcase(componentName)
var PackagePath = path.resolve(__dirname, '../../packages', componentName)
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
    filename: path.join('../../test/unit/specs', `${ComponentName}.spec.js`),
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

// 创建组件
Files.forEach(function (file) {
  fileSave(path.join(PackagePath, file.filename))
  .write(file.content, 'utf8')
  .end('\n')
})

console.log('DONE!')
