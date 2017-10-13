/**
 * 获取对象属性值
 * https://github.com/ElemeFE/element/blob/dev/src/utils/util.js
 * @param object
 * @param prop
 * @returns {*}
 */
export function getValueByPath (object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}
