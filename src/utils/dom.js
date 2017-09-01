/**
 * DOM 操作
 */
// 添加事件监听
export const on = function (element, event, handler) {
  document.addEventListener
    ? element.addEventListener(event, handler, false)
    : element.attachEvent('on' + event, handler)
}

// 移除事件监听
export const off = function (element, event, handler) {
  document.removeEventListener
    ? element.removeEventListener(event, handler, false)
    : element.detachEvent('on' + event, handler)
}

// 添加 class
export const addClass = function (elm, clz) {

}

// 移除 class
export const removeClass = function (elm, clz) {

}

// 是否包含 class
export const hasClass = function (elm, clz) {

}

// 设置 css
export const css = function () {

}
