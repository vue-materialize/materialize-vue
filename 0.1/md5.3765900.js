webpackJsonp([3],{291:function(s,a,t){s.exports=t(329)},300:function(s,a){function t(s,a){var t=s[1]||"",l=s[3];if(!l)return t;if(a&&"function"==typeof btoa){var r=n(l);return[t].concat(l.sources.map(function(s){return"/*# sourceURL="+l.sourceRoot+s+" */"})).concat([r]).join("\n")}return[t].join("\n")}function n(s){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"}s.exports=function(s){var a=[];return a.toString=function(){return this.map(function(a){var n=t(a,s);return a[2]?"@media "+a[2]+"{"+n+"}":n}).join("")},a.i=function(s,t){"string"==typeof s&&(s=[[null,s,""]]);for(var n={},l=0;l<this.length;l++){var r=this[l][0];"number"==typeof r&&(n[r]=!0)}for(l=0;l<s.length;l++){var v=s[l];"number"==typeof v[0]&&n[v[0]]||(t&&!v[2]?v[2]=t:t&&(v[2]="("+v[2]+") and ("+t+")"),a.push(v))}},a}},301:function(s,a,t){function n(s){for(var a=0;a<s.length;a++){var t=s[a],n=p[t.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](t.parts[l]);for(;l<t.parts.length;l++)n.parts.push(r(t.parts[l]));n.parts.length>t.parts.length&&(n.parts.length=t.parts.length)}else{for(var v=[],l=0;l<t.parts.length;l++)v.push(r(t.parts[l]));p[t.id]={id:t.id,refs:1,parts:v}}}}function l(){var s=document.createElement("style");return s.type="text/css",i.appendChild(s),s}function r(s){var a,t,n=document.querySelector('style[data-vue-ssr-id~="'+s.id+'"]');if(n){if(d)return u;n.parentNode.removeChild(n)}if(j){var r=o++;n=h||(h=l()),a=v.bind(null,n,r,!1),t=v.bind(null,n,r,!0)}else n=l(),a=e.bind(null,n),t=function(){n.parentNode.removeChild(n)};return a(s),function(n){if(n){if(n.css===s.css&&n.media===s.media&&n.sourceMap===s.sourceMap)return;a(s=n)}else t()}}function v(s,a,t,n){var l=t?"":n.css;if(s.styleSheet)s.styleSheet.cssText=g(a,l);else{var r=document.createTextNode(l),v=s.childNodes;v[a]&&s.removeChild(v[a]),v.length?s.insertBefore(r,v[a]):s.appendChild(r)}}function e(s,a){var t=a.css,n=a.media,l=a.sourceMap;if(n&&s.setAttribute("media",n),l&&(t+="\n/*# sourceURL="+l.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),s.styleSheet)s.styleSheet.cssText=t;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(t))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var _=t(302),p={},i=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,o=0,d=!1,u=function(){},j="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());s.exports=function(s,a,t){d=t;var l=_(s,a);return n(l),function(a){for(var t=[],r=0;r<l.length;r++){var v=l[r],e=p[v.id];e.refs--,t.push(e)}a?(l=_(s,a),n(l)):l=[];for(var r=0;r<t.length;r++){var e=t[r];if(0===e.refs){for(var c=0;c<e.parts.length;c++)e.parts[c]();delete p[e.id]}}}};var g=function(){var s=[];return function(a,t){return s[a]=t,s.filter(Boolean).join("\n")}}()},302:function(s,a){s.exports=function(s,a){for(var t=[],n={},l=0;l<a.length;l++){var r=a[l],v=r[0],e=r[1],c=r[2],_=r[3],p={id:s+":"+l,css:e,media:c,sourceMap:_};n[v]?n[v].parts.push(p):t.push(n[v]={id:v,parts:[p]})}return t}},308:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{chipGroup0:{tag:"联系人Chip标签",image:t(34)},chipGroup1:[{tag:"联系人Chip标签",image:t(34)}],chipGroup2:[{tag:"标签一"},{tag:"标签二"},{tag:"标签三"},{tag:"标签四"}],chipGroup3:[{tag:"信息一"},{tag:"信息二"},{tag:"信息三"},{tag:"信息四"}],chipGroup4:[{tag:"标签一"},{tag:"标签二"},{tag:"标签三"},{tag:"标签四"}]}},mounted:function(){this.$nextTick(function(s){var a=document.querySelectorAll(".source");a[1].style.padding="0",a[2].style.padding="0"})}}},321:function(s,a,t){a=s.exports=t(300)(void 0),a.push([s.i,".demo-chip .block{padding:30px 24px;overflow:hidden;border-bottom:1px solid #eff2f6}.demo-chip .block:last-child{border-bottom:none}.demo-chip .demonstration{display:block;color:#8492a6;font-size:14px;text-align:center;margin-bottom:20px}",""])},329:function(s,a,t){function n(s){t(358)}var l=t(0)(t(308),t(349),n,null,null);s.exports=l.exports},349:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[s._m(0),s._v(" "),t("p",[s._v("Chips可以用来表示小的信息块。它们是最常用的用于联系人或标签，信息块选中后添加样式。")]),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("创建一个带图片的联系人信息块。")]),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<template>\n  <mv-chip :chips="chipGroup0"></mv-chip>\n</template>\n\n',script:"\n  export default {\n    data () {\n      return {\n        chipGroup0: {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}\n      }\n    }\n  }\n",style:null}}},[t("div",{staticClass:"source",slot:"source"},[[t("mv-chip",{attrs:{chips:s.chipGroup0}})]],2),s._v(" "),t("p",[s._v("通过设置 "),t("code",[s._v("chips")]),s._v("属性，该属性为一个数组对象，结构为"),t("code",[s._v("[{tag:'', image: ''}]")]),s._v("。通过 "),t("code",[s._v("tag")]),s._v(" 属性为信息块设置内容，通过 "),t("code",[s._v("image")]),s._v(" 属性为信息块设置图片。")]),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup0"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("chipGroup0")]),s._v(": {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'联系人Chip标签'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'../../document/assets/user.jpg'")]),s._v(")}\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<template>\n  <div class="block">\n    <mv-chip :chips="chipGroup1" closable></mv-chip>\n  </div>\n  <div class="block">\n    <mv-chip :chips="chipGroup2" closable></mv-chip>\n  </div>\n</template>\n\n',script:"\n  export default {\n    data () {\n      return {\n        chipGroup1: [\n          {tag:'联系人Chip标签', image: require('../../document/assets/user.jpg')}\n        ],\n        chipGroup2: [\n          {tag:'标签一'},\n          {tag:'标签二'},\n          {tag:'标签三'},\n          {tag:'标签四'}\n        ]\n      }\n    }\n  }\n",style:null}}},[t("div",{staticClass:"source",slot:"source"},[[t("div",{staticClass:"block"},[t("mv-chip",{attrs:{chips:s.chipGroup1,closable:""}})],1),s._v(" "),t("div",{staticClass:"block"},[t("mv-chip",{attrs:{chips:s.chipGroup2,closable:""}})],1)]],2),s._v(" "),t("p",[s._v("通过属性 "),t("code",[s._v("closable")]),s._v(" 设置是否允许删除消息快，通过"),t("code",[s._v("icon")]),s._v(" 属性，展示右侧移除图标，默认是图标 "),t("code",[s._v("close")]),s._v("， ，也可设置 "),t("code",[s._v("@close")]),s._v(" 事件进行删除后的后续操作。")]),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("chipGroup1")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'联系人Chip标签'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'../../document/assets/user.jpg'")]),s._v(")}\n        ],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("chipGroup2")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签一'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签二'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签三'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签四'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<template>\n  <div class="block">\n    <span class="demonstration">可添加，可删除</span>\n    <mv-chip closable="" editable></mv-chip>\n  </div>\n  <div class="block">\n    <span class="demonstration">不可重复</span>\n    <mv-chip :chips="chipGroup3" closable="" editable placeholder="+新增"></mv-chip>\n  </div>\n  <div class="block">\n    <span class="demonstration">可重复</span>\n    <mv-chip :chips="chipGroup3" closable="" editable="" repeatable placeholder="+新增"></mv-chip>\n  </div>\n</template>\n\n',script:"\n  export default {\n    data () {\n      return {\n        chipGroup3: [\n          {tag:'信息一'},\n          {tag:'信息二'},\n          {tag:'信息三'},\n          {tag:'信息四'}\n        ]\n      }\n    }\n  }\n",style:null}}},[t("div",{staticClass:"source",slot:"source"},[[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("可添加，可删除")]),s._v(" "),t("mv-chip",{attrs:{closable:"",editable:""}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("不可重复")]),s._v(" "),t("mv-chip",{attrs:{chips:s.chipGroup3,closable:"",editable:"",placeholder:"+新增"}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("可重复")]),s._v(" "),t("mv-chip",{attrs:{chips:s.chipGroup3,closable:"",editable:"",repeatable:"",placeholder:"+新增"}})],1)]],2),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("editable")]),s._v(" 属性，可以增加标签，只要输入你的标签文本并按回车键就可以了，点击关闭按钮进行删除。同时"),t("code",[s._v("placeholder")]),s._v("属性可设置添加信息块的提示文字。还可以通过 "),t("code",[s._v("repeatable")]),s._v(" 设置消息块的内容是否可以重复。")]),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("可添加，可删除"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("editable")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("不可重复"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("editable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"+新增"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("可重复"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("editable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("repeatable")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"+新增"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("chipGroup3")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'信息一'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'信息二'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'信息三'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'信息四'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<template>\n  <mv-chip :chips="chipGroup4" selected></mv-chip>\n  <mv-chip :chips="chipGroup4" selected closable></mv-chip>\n</template>\n\n',script:"\n  export default {\n    data () {\n      return {\n        chipGroup4: [\n          {tag:'标签一'},\n          {tag:'标签二'},\n          {tag:'标签三'},\n          {tag:'标签四'}\n        ]\n      }\n    }\n  }\n",style:null}}},[t("div",{staticClass:"source",slot:"source"},[[t("mv-chip",{attrs:{chips:s.chipGroup4,selected:""}}),s._v(" "),t("mv-chip",{attrs:{chips:s.chipGroup4,selected:"",closable:""}})]],2),s._v(" "),t("p",[s._v("通过设置"),t("code",[s._v("selected")]),s._v("属性，给组件当前选中的信息块添加样式。")]),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":chips")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"chipGroup4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-chip")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("chipGroup4")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签一'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签二'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签三'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'标签四'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"chip-xiao-xi-kuai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chip-xiao-xi-kuai","aria-hidden":"true"}},[s._v("¶")]),s._v(" Chip 消息块")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"lian-xi-ren-xin-xi-kuai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lian-xi-ren-xin-xi-kuai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 联系人信息块")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"ke-yi-chu-xin-xi-kuai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-yi-chu-xin-xi-kuai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可移除信息块")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"ke-tian-jia-xin-xi-kuai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-tian-jia-xin-xi-kuai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可添加信息块")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"ke-xuan-zhong-xin-xi-kuai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-xuan-zhong-xin-xi-kuai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可选中信息块")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[s._v("¶")]),s._v(" Attributes")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("chips")]),s._v(" "),t("td",[s._v("设置信息块数据")]),s._v(" "),t("td",[s._v("array")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("[{ tag: '', image: ''}]")])]),s._v(" "),t("tr",[t("td",[s._v("editable")]),s._v(" "),t("td",[s._v("是否添加新的信息块")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("selected")]),s._v(" "),t("td",[s._v("是否添加选中的信息块样式")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("placeholder")]),s._v(" "),t("td",[s._v("设置信息块添加的提示文字")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("icon")]),s._v(" "),t("td",[s._v("设置信息块关闭图标")]),s._v(" "),t("td",[s._v("string/object")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("close")])]),s._v(" "),t("tr",[t("td",[s._v("closable")]),s._v(" "),t("td",[s._v("是否可关闭")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("repeatable")]),s._v(" "),t("td",[s._v("是否可重复")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Events")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("回调参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("close")]),s._v(" "),t("td",[s._v("点击移除按钮时触发")]),s._v(" "),t("td",[s._v("chip")])]),s._v(" "),t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("新增消息块时触发")]),s._v(" "),t("td",[s._v("chips, chip")])])])])}]}},358:function(s,a,t){var n=t(321);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t(301)("220d8870",n,!0)}});