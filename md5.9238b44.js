webpackJsonp([4],{201:function(t,s,a){t.exports=a(220)},209:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{hobby:""}}}},220:function(t,s,a){var v=a(1)(a(209),a(229),null,null,null);t.exports=v.exports},229:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0),t._v(" "),a("p",[t._v("文本框允许用户输入，简单明了，能让用户一眼看出输入位置。可以自己设置label标签的文本。在输入中会有动画效果。")]),t._v(" "),t._m(1),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input v-model="hobby">爱好</mv-input>\n\n\n',script:"\n  export default {\n    data () {\n      return {\n        hobby: ''\n      }\n    }\n  }\n",style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{model:{value:t.hobby,callback:function(s){t.hobby=s},expression:"hobby"}},[t._v("爱好")])],1),t._v(" "),a("p",[t._v("默认展示输入框样式，可添加 label 标签文本，输入框获得焦点和失去焦点会有动画效果。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"hobby"')]),t._v(">")]),t._v("爱好"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("hobby")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v("\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(2),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input placeholder="占位提示" active>姓名</mv-input>\n<mv-input placeholder="占位提示" value="无名">姓名（绑定值）</mv-input>\n',script:null,style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{attrs:{placeholder:"占位提示",active:""}},[t._v("姓名")]),t._v(" "),a("mv-input",{attrs:{placeholder:"占位提示",value:"无名"}},[t._v("姓名（绑定值）")])],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("placeholder")]),t._v(" 属性可以为输入框设置默认提示，通过 "),a("code",[t._v("value")]),t._v(" 属性可以为输入框设置绑定值，同时利用 "),a("code",[t._v("active")]),t._v(" 属性将 label 标签展示在输入框上方。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"占位提示"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("active")]),t._v(">")]),t._v("姓名"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"占位提示"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"无名"')]),t._v(">")]),t._v("姓名（绑定值）"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(3),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input disabled>禁用</mv-input>\n<mv-input placeholder="我不能输入" active disabled>禁用</mv-input>\n',script:null,style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{attrs:{disabled:""}},[t._v("禁用")]),t._v(" "),a("mv-input",{attrs:{placeholder:"我不能输入",active:"",disabled:""}},[t._v("禁用")])],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("disabled")]),t._v(" 属性设置输入框禁用状态。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("禁用"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"我不能输入"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("active")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("禁用"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(4),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input type="password">密码</mv-input>\n',script:null,style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{attrs:{type:"password"}},[t._v("密码")])],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("type")]),t._v(" 属性设置输入框类型。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"password"')]),t._v(">")]),t._v("密码"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(5),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input type="email">邮件-无格式验证</mv-input>\n<mv-input type="email" validate>邮件-无提示验证</mv-input>\n<mv-input type="email" validate error-message="邮箱格式错误" correct-message="邮箱格式正确">邮件-添加格式验证</mv-input>\n<mv-input type="text" validate :regexp="/\\w{6,18}/" error-message="格式错误" correct-message="格式正确">文本-添加格式验证</mv-input>\n',script:null,style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{attrs:{type:"email"}},[t._v("邮件-无格式验证")]),t._v(" "),a("mv-input",{attrs:{type:"email",validate:""}},[t._v("邮件-无提示验证")]),t._v(" "),a("mv-input",{attrs:{type:"email",validate:"","error-message":"邮箱格式错误","correct-message":"邮箱格式正确"}},[t._v("邮件-添加格式验证")]),t._v(" "),a("mv-input",{attrs:{type:"text",validate:"",regexp:/\w{6,18}/,"error-message":"格式错误","correct-message":"格式正确"}},[t._v("文本-添加格式验证")])],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("validate")]),t._v(" 属性设置是否添加验证，同时利用 "),a("code",[t._v("error-message")]),t._v(" 属性和 "),a("code",[t._v("correct-message")]),t._v(" 属性设置提示信息，还可以通过 "),a("code",[t._v("regexp")]),t._v(" 自定义验证规则。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"email"')]),t._v(">")]),t._v("邮件-无格式验证"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"email"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("validate")]),t._v(">")]),t._v("邮件-无提示验证"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"email"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("validate")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("error-message")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"邮箱格式错误"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("correct-message")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"邮箱格式正确"')]),t._v(">")]),t._v("邮件-添加格式验证"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("validate")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":regexp")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/\\w{6,18}/"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("error-message")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"格式错误"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("correct-message")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"格式正确"')]),t._v(">")]),t._v("文本-添加格式验证"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(6),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-input type="text" :icon="{ name: \'share\'}">分享</mv-input>\n',script:null,style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-input",{attrs:{type:"text",icon:{name:"share"}}},[t._v("分享")])],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("icon")]),t._v(" 属性设置输入框图标前缀。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":icon")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"{ name: 'share'}\"")]),t._v(">")]),t._v("分享"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-input")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"input-shu-ru-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-shu-ru-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" Input 输入框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"mo-ren-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mo-ren-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v(" 默认用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"zhan-wei-ti-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhan-wei-ti-shi","aria-hidden":"true"}},[t._v("¶")]),t._v(" 占位提示")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai","aria-hidden":"true"}},[t._v("¶")]),t._v(" 禁用状态")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"mi-ma-shu-ru-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mi-ma-shu-ru-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" 密码输入框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"yan-zheng-shu-ru-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yan-zheng-shu-ru-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" 验证输入框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"tu-biao-qian-zhui-shu-ru-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-qian-zhui-shu-ru-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" 图标前缀输入框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("输入框类型")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("[text,password,email,textarea]")]),t._v(" "),a("td",[t._v("text")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("输入框添加默认提示")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("输入框添加绑定值")]),t._v(" "),a("td",[t._v("string, number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("label是否展示在输入框上方")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用输入框")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("validate")]),t._v(" "),a("td",[t._v("是否添加验证")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("error-message")]),t._v(" "),a("td",[t._v("格式错误时提示信息 (只对 "),a("code",{pre:!0},[t._v('validate="true"')]),t._v(" 有效)")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("correct-message")]),t._v(" "),a("td",[t._v("格式正确时提示信息 (只对 "),a("code",{pre:!0},[t._v('validate="true"')]),t._v(" 有效)")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("regexp")]),t._v(" "),a("td",[t._v("验证正则表达式 (只对 "),a("code",{pre:!0},[t._v('validate="true"')]),t._v(" 有效)")]),t._v(" "),a("td",[t._v("regexp")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("/\\w{6, 18}/")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("带图标，Icon 组件中的图标名")]),t._v(" "),a("td",[t._v("string/object")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("在输入框值改变时触发")]),t._v(" "),a("td",[t._v("(value: string 、 number)")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("在输入框值改变时触发")]),t._v(" "),a("td",[t._v("(event: Event)")])]),t._v(" "),a("tr",[a("td",[t._v("focus")]),t._v(" "),a("td",[t._v("在输入框获得焦点时触发")]),t._v(" "),a("td",[t._v("(event: Event)")])]),t._v(" "),a("tr",[a("td",[t._v("blur")]),t._v(" "),a("td",[t._v("在输入框失去焦点时触发")]),t._v(" "),a("td",[t._v("(event: Event)")])]),t._v(" "),a("tr",[a("td",[t._v("enter")]),t._v(" "),a("td",[t._v("当输入框获得焦点时，按enter键时触发 ( "),a("code",{pre:!0},[t._v('type="textarea"')]),t._v(" 无效)")]),t._v(" "),a("td",[t._v("(event: Event)")])])])])}]}}});