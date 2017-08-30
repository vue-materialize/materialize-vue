import navConfig from './nav.config.json'

// 页面
const LOAD_MAP = name => {
  // return r => require.ensure([], () => r(require(`./pages/${name}.vue`)))
  return () => import(`./pages/${name}.vue`)
}

/* eslint-disable no-unused-vars */
const load = function (path) {
  return LOAD_MAP(path)
}

// 组件文档
const LOAD_DOCS_MAP = name => { //
  // return r => require.ensure([], () => r(require(`./docs${name}.md`)), 'md')
  return () => import(/* webpackChunkName: "md" */ `./docs${name}.md`)
}

const loadDocs = function (path) {
  return LOAD_DOCS_MAP(path)
}

const registerRoute = (navConfig) => {
  let route = []

  route.push({
    path: '/',
    redirect: '/layout',
    component: load('component'),
    children: []
  })

  navConfig.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(item => {
          addRoute(item)
        })
      })
    }
  })

  function addRoute (page) {
    const component = loadDocs(page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    }

    route[0].children.push(child)
  }

  return route
}

/* eslint-disable no-unused-vars */
const generateMiscRoutes = function () {
  let indexRoute = {
    path: '/',
    meta: {},
    name: 'home',
    redirect: '/component'
    // component: load('index')
  }

  return [indexRoute]
}

let route = registerRoute(navConfig)

console.log(route)

// route = route.concat(generateMiscRoutes())

export default route
