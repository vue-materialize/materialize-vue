/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var cheerio = require('cheerio')

// 从字符串 str 中移除指定标签
exports.strip = function (str, tags) {
  var $ = cheerio.load(str, { decodeEntities: false, useHtmlParser2: true })

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  var len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
};

// 从字符串 str 中返回指定标签
exports.fetch = function (str, tag) {
  var $ = cheerio.load(str, { decodeEntities: false })
  if (!tag) return str

  return $(tag).html()
}
