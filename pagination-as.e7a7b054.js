!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var n=a.default(e,t,"get");return s.default(e,n)};var a=u(o("1UHsN")),s=u(o("ffZzF"));function u(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){d.default(e,t),t.set(e,n)};var f,d=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var p={};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){t&&h(e.prototype,t);n&&h(e,n);return e};var v=o("hKHmD"),_=new WeakMap,y=function(){function t(){e(i)(this,t),e(c)(this,_,{writable:!0,value:"https://jsonplaceholder.typicode.com"}),e(v)(this,"limit",25),e(v)(this,"page",1)}return e(p)(t,[{key:"fetchPosts",value:function(){var t=new URLSearchParams({_limit:this.limit,_page:this.page});return console.log(t.toString()),fetch("".concat(e(l)(this,_),"/posts?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}}]),t}(),b=e(o("4bnfH")).template({1:function(e,t,n,r,o){var i=e.lambda,l=e.escapeExpression,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="posts__item">\n    <h2 class="posts__title">'+l(i(null!=t?a(t,"title"):t,t))+'</h2>\n    <p class="posts__text">'+l(i(null!=t?a(t,"body"):t,t))+'</p>\n    <p class="posts__id">id: '+l(i(null!=t?a(t,"id"):t,t))+"</p>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?i:""},useData:!0}),m=document.querySelector(".js-posts"),g=document.querySelector(".js-load-more"),w=new y;console.log(w),w.fetchPosts().then((function(e){console.log(e),m.innerHTML=b(e),g.classList.remove("is-hidden")})).catch(console.warn);g.addEventListener("click",(function(){w.page+=1,100<=w.limit*w.page&&g.classList.add("is-hidden"),w.fetchPosts().then((function(e){m.insertAdjacentHTML("beforeend",b(e))})).catch(console.warn)}))}();
//# sourceMappingURL=pagination-as.e7a7b054.js.map