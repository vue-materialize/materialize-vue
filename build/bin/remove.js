/**
 * 移除组件 [warning]
 * 命令：npm run remove componentName
 * 作用：创建组件的逆过程
 */
console.log()
process.on('exit', function () {
  console.log()
})

// 没有输入组件名称
if (!process.argv[2]) {
  console.log('[组件名]必填 - Please enter remove component name')
  process.exit(1)
}

var path = require('path')
var rimraf = require('rimraf')
var fileSave = require('file-save')
var componentName = process.argv[2]

var Files = [
  {
    filename: '',
    path: `../../packages/${componentName}`
  },
  {
    filename: `${componentName}.md`,
    path: '../../document/docs'
  },
  {
    filename: `${componentName}.spec.js`,
    path: '../../test/unit/specs'
  },
  {
    filename: `${componentName}.vue`,
    path: '../../playground/components'
  }
]

Files.forEach(function (file) {
  console.log(path.join(__dirname, file.path, file.filename))
  rimraf(path.join(__dirname, file.path, file.filename), {}, function (err) {
    if (err) throw new Error(err)
  })
})

// 移除 components.json 中对应组件
var componentsFile = require('../../components.json')
if (componentsFile[componentName]) {
  delete componentsFile[componentName]
  fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, 2), 'utf8')
    .end('\n')
}

// 移除 playground 中对应组件
var buildPlay = require('./build-play.js')
fileSave(path.join(__dirname, '../../playground/App.vue'))
  .write(buildPlay(componentsFile, Object.keys(componentsFile).pop()), 'utf8')
  .end('\n')

// 移除 nav.config.json 对应路由
var navConfigFile = require('../../document/nav.config.json')
var groups = navConfigFile[0].groups
for (let i = 0, len = groups.length; i < len; i++) {
  groups[i].list = groups[i].list.filter(item => {
    return item.path != `/${componentName}`
  })
}
fileSave(path.join(__dirname, '../../document/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n')

console.log('Remove DONE!')
