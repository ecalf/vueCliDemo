(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("17c2"),a=n("9112");for(var i in o){var u=r[i],s=u&&u.prototype;if(s&&s.forEach!==c)try{a(s,"forEach",c)}catch(f){s.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),c=n("ae40"),a=o("forEach"),i=c("forEach");t.exports=a&&i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),c=n("2d00"),a=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"416f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page,test i18n")]),n("div",[n("span",[t._v(t._s(t.$t("common.signin")))]),t._v(" | "),n("span",[t._v(t._s(t.$t("common.signout")))]),t._v(" | "),n("span",[t._v(t._s(t.$t("common.register")))])]),n("div",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.setLang("zh-CN")}}},[t._v("ch")]),t._v(" | "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.setLang("en-US")}}},[t._v("en")])]),n("div",[n("p",[t._v("test module store action")]),n("p",[t._v("moduleName:"+t._s(t.moduleName))]),n("p",[t._v("content:"+t._s(t.content))]),n("button",{on:{click:function(e){return t.modifyName("newAboutModuleName")}}},[t._v("modifyName")])]),n("div",[n("p",[t._v("moduleName: "+t._s(t.moduleName))]),n("p",[t._v("content: "+t._s(t.content))]),n("p",[t._v("text:"+t._s(t.text))])])])},o=[],c=n("5530"),a=n("2f62"),i=n("cf45"),u=(Object(a["a"])("about"),{name:"About",computed:Object(c["a"])({},Object(a["c"])({moduleName:function(t){return t.about.moduleName},content:function(t){return t.about.content}}),{text:function(){return console.log("test subModule getters"),this.$store.getters["about/text"]}}),methods:{setLang:function(t){Object(i["b"])(this,t)},modifyName:function(t){console.log("modifyName called in views/about"),this.$store.dispatch("modifyNameOfAboutTest",t)}}}),s=u,f=n("2877"),b=Object(f["a"])(s,r,o,!1,null,null,null);e["default"]=b.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,c=n("1dde"),a=n("ae40"),i=c("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!i||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"71d8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an Modify page of account")])])}],c=n("2877"),a={},i=Object(c["a"])(a,r,o,!1,null,null,null);e["default"]=i.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,c(0,n)):t[a]=n}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),c=n("df75"),a=n("d039"),i=a((function(){c(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return c(o(t))}})},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),c=n("56ef"),a=n("fc6a"),i=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=i.f,s=c(r),f={},b=0;while(s.length>b)n=o(r,e=s[b++]),void 0!==n&&u(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),c=n("fc6a"),a=n("06cf").f,i=n("83ab"),u=o((function(){a(1)})),s=!i||u;r({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})}}]);
//# sourceMappingURL=about.d174f0c1.js.map