export const hasClass = function (obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export const addClass = function (obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls
}

export const removeClass = function (obj, cls) {
  if (hasClass(obj, cls)) obj.className = obj.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ')
}

export const toggleClass = function (obj, cls) {
  hasClass(obj, cls) ? removeClass(obj, cls) : addClass(obj, cls)
}
