import Pagination from './src/main'

Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
