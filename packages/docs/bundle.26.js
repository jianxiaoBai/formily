(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{136:function(e,t,a){var r={"./bash":122,"./bash.js":122,"./css":123,"./css.js":123,"./htmlbars":124,"./htmlbars.js":124,"./javascript":125,"./javascript.js":125,"./scss":126,"./scss.js":126,"./typescript":127,"./typescript.js":127};function n(e){var t=m(e);return a(t)}function m(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=m,e.exports=n,n.id=136},80:function(e,t,a){"use strict";var r=a(132),n=(a(133),a(134)),m=(a(135),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"formblock",className:"react-demo-h1"},"FormBlock"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"实现在卡片内部的区块化分割"),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(n,{code:"import { FormBlock } from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement("p",{className:"react-demo-p"},"继承 next-card / ",r.createElement("a",{href:"https://ant.design/components/card-cn/",className:"react-demo-a"},"ant-card")),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(n,{code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { SchemaForm, Field, FormCard, FormBlock } from \'@uform/next(antd)\'\n\nReactDOM.render(\n  <SchemaForm>\n    <FormCard title="基本信息">\n      ​ <Field name="aaa" type="string" title="字段1" />\n      ​ <Field name="bbb" type="number" title="字段2" />\n      ​ <Field name="ccc" type="date" title="字段3" />​\n      <FormBlock title="区块">\n        ​ <Field name="ddd2" type="string" title="字段5" />​\n        <Field name="eee2" type="string" title="字段6" />​\n      </FormBlock>\n    </FormCard>\n    <FormCard title="详细信息">\n      ​ <Field name="ddd" type="number" />\n      ​ <Field name="eee" type="date" />\n    </FormCard>\n  </SchemaForm>,\n  document.getElementById(\'root\')\n)\n',justCode:!0,lang:"javascript"}))});m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);