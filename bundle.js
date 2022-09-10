(()=>{"use strict";var t={46:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(81),r=o.n(n),i=o(645),c=o.n(i),a=o(538),u=c()(r());u.i(a.Z),u.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),u.push([t.id,'body{font-family:"Roboto",sans-serif;background-color:#f5f5f5;color:#404040;width:100vw;height:100vh;overflow-x:hidden;text-transform:capitalize}#layout{width:100%;height:100%;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr auto;grid-template-areas:"header header" "aside main" "footer footer"}#layout>header{grid-area:header;display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"left right"}#layout>header>div{margin:auto 0 auto 0}#layout>header>div:first-child{font-weight:700;font-size:1.4em;grid-area:left}#layout>header>div:last-child{grid-area:right;margin-left:auto}#layout>aside{grid-area:aside;background-color:#d4d4d4;padding:1em;color:#171717;font-size:1em;font-weight:500}#layout>aside>nav{display:flex;flex-direction:column;gap:1em}#layout>aside>nav ul{display:flex;flex-direction:column;gap:1em}#layout>aside>nav ul li{border-radius:10px;background-color:#e5e5e5;height:fit-content;display:flex}#layout>aside>nav ul li a{width:100%;padding:.5em;text-decoration:none;color:inherit}#layout>aside>nav ul li:has(a.active),#layout>aside>nav ul li:hover{background-color:#f5f5f5}#layout>aside>p{font-size:1.4em;font-weight:550}#layout>aside>button{cursor:pointer;background-color:inherit;border:none;font-size:1.3em;padding:.5em;border-radius:10px}#layout>aside>button:hover{background-color:#e5e5e5}#layout>main{grid-area:main;padding:2em}#layout>footer{grid-area:footer;text-align:center}#layout>header,#layout>footer{background-color:#404040;color:#f5f5f5;padding:2em}@media only screen and (min-width: 0px)and (max-width: 640px){#layout>aside:not(.active){display:none}}#todo-view{display:flex;flex-direction:column;gap:1em}#todo-view>h1{font-size:1.8em}#todo-view>#todo-form{margin:0 auto 0 auto;width:50%;display:flex;flex-direction:column;gap:.5em}#todo-view>#todo-form>.form-field{display:flex;flex-direction:column;gap:.5em}',""]);const s=u},538:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(81),r=o.n(n),i=o(645),c=o.n(i)()(r());c.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const a=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],s=n.base?u[0]+n.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=o(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var h=r(d,n);n.byIndex=a,e.splice(a,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var i=n(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=o(i[c]);e[a].references--}for(var u=n(t,r),s=0;s<i.length;s++){var l=o(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nc=void 0,(()=>{var t=o(379),e=o.n(t),n=o(795),r=o.n(n),i=o(569),c=o.n(i),a=o(565),u=o.n(a),s=o(216),l=o.n(s),p=o(589),f=o.n(p),d=o(46),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;var y=function(){function t(t,e,o,n,r,i){this.checked=!1,this.setChecked(t),this.setName(e),this.setDescription(o),this.setDueDate(n),this.setPriority(r),this.setProject(i)}return t.prototype.setChecked=function(t){this.checked=t},t.prototype.getChecked=function(){return this.checked},t.prototype.setName=function(t){this.name=t},t.prototype.getName=function(){return this.name},t.prototype.setDescription=function(t){this.description=t},t.prototype.getDescription=function(){return this.description},t.prototype.setDueDate=function(t){this.dueDate=t},t.prototype.getDueDate=function(){return this.dueDate},t.prototype.setPriority=function(t){this.priority=t},t.prototype.getPriority=function(){return this.priority},t.prototype.setProject=function(t){this.project=t},t.prototype.getProject=function(){return this.project},t}();function v(t){return new Blob([t]).size}var m,g=function(){function t(t,e,o){this.factory=t,this.key=e,this.sortingRule=o,this.values=this.read()}return t.prototype.getValues=function(){return this.values},t.prototype.find=function(t){return this.values.findIndex((function(e){return e===t}))},t.prototype.read=function(){var t=this,e=window.localStorage.getItem(this.key),o=[];return e?(JSON.parse(e).forEach((function(e){o.push(t.factory(e))})),o):[]},t.prototype.insert=function(t){return!!this.canBeStored(t)&&(this.values.push(t),this.sort(),this.save(),!0)},t.prototype.update=function(t,e){var o=this.find(t);return!(o<0||(this.values[o]=e,this.save(),0))},t.prototype.delete=function(t){var e=this.find(t);return!(e<0||(this.values.splice(e,1),this.save(),0))},t.prototype.save=function(){window.localStorage.setItem(this.key,JSON.stringify(this.values))},t.prototype.sort=function(){this.values.sort(this.sortingRule)},t.prototype.canBeStored=function(t){return this.getRemainingSpace()-v(JSON.stringify(t))>0},t.prototype.getRemainingSpace=function(){return 5e6-v(JSON.stringify(window.localStorage))},t}(),w=(m=function(t,e){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},m(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});const b=function(t){function e(){return t.call(this,(function(t){return new y(t.checked,t.name,t.description,new Date(t.dueDate),t.priority,t.project)}),"todo",(function(t,e){return t.getDueDate().getTime()-e.getDueDate().getTime()}))||this}return w(e,t),e}(g);var _=function(){function t(t,e){this.projectsMenu=t,this.router=e,this.todoLocalStorage=new b}return t.prototype.fetchAll=function(){return this.todoLocalStorage.getValues()},t.prototype.fetchByProject=function(t){return this.fetchAll().filter((function(e){return e.getProject()===t}))},t.prototype.fetchByDate=function(t){return this.fetchAll().filter((function(e){var o=e.getDueDate();return o.getDate()===t.getDate()&&o.getMonth()===t.getMonth()&&o.getFullYear()===t.getFullYear()}))},t.prototype.fetchByDateRange=function(t,e){return this.fetchAll().filter((function(o){var n=o.getDueDate().getTime();return n>=t.getTime()&&n<=e.getTime()}))},t.prototype.create=function(t){return!!this.validate(t)&&(this.todoLocalStorage.insert(t),!0)},t.prototype.update=function(t,e){return!!this.validate(e)&&(this.todoLocalStorage.update(t,e),!0)},t.prototype.delete=function(t){return this.todoLocalStorage.delete(t)},t.prototype.validate=function(t){return this.validateName(t.getName())||this.validateDescription(t.getDescription())||this.validateDueDate(t.getDueDate())||this.validatePriority(t.getPriority())||this.validateProject(t.getProject())},t.prototype.validateName=function(t){return!0},t.prototype.validateDescription=function(t){return!0},t.prototype.validateDueDate=function(t){return!isNaN(t.getTime())},t.prototype.validatePriority=function(t){return!0},t.prototype.validateProject=function(t){return!0},t.prototype.saveLocally=function(){},t}();const O=function(){function t(t){this.root=t}return t.prototype.getRoot=function(){return this.root},t}();var j=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const C=function(t){function e(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var n=t.call(this,document.createElement("div"))||this;return n.ul=document.createElement("ul"),n.root.appendChild(n.ul),n.insert.apply(n,e),n}return j(e,t),e.prototype.insert=function(){for(var t=this,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];e.forEach((function(e){var o=document.createElement("li");o.appendChild(e.getRoot()),t.ul.appendChild(o)}))},e.prototype.clear=function(){this.ul.replaceChildren()},e}(O);var P=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const x=function(t){function e(){var e=t.call(this)||this,o=document.createElement("p");return o.textContent="Projects",e.root.prepend(o),e}return P(e,t),e}(C);var E=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const D=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;e.header=document.createElement("header"),e.aside=document.createElement("aside"),e.main=document.createElement("main"),e.footer=document.createElement("footer"),e.root.setAttribute("id","layout"),e.root.append(e.header,e.aside,e.main,e.footer);var o=document.createElement("div"),n=document.createElement("div"),r=document.createElement("p");r.textContent="Odin - Todo List";var i=document.createElement("button");i.textContent="burger",i.addEventListener("click",(function(){e.aside.classList.toggle("active")})),o.append(r),n.append(i),e.header.append(o,n);var c=document.createElement("nav");e.aside.append(c),e.menu=new C,e.menuProjects=new x,c.append(e.menu.getRoot(),e.menuProjects.getRoot());var a=document.createElement("p");return a.textContent="Created by Julien Pinson for The Odin Project, 2022 ",e.footer.append(a),e}return E(e,t),e.prototype.getMain=function(){return this.main},e.prototype.getMenu=function(){return this.menu},e.prototype.getMenuProjects=function(){return this.menuProjects},e}(O);var S=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const k=function(t){function e(e,o,n){var r=t.call(this,document.createElement("input"))||this;return r.type=e,r.id=o,r.name=n,r.root.setAttribute("type",e),r.root.setAttribute("id",o),r.root.setAttribute("name",n),r}return S(e,t),e.prototype.getValue=function(){return this.root.value},e.prototype.setValue=function(t){this.root.value=t},e}(O);var A=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const T=function(t){function e(e,o){return t.call(this,"date",e,o)||this}return A(e,t),e}(k);var R=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const L=function(t){function e(e,o,n,r,i){var c=t.call(this,"range",e,o)||this;return c.min=n,c.max=r,c.step=i,c.root.setAttribute("min",n.toString()),c.root.setAttribute("max",r.toString()),c.root.setAttribute("step",i.toString()),c}return R(e,t),e}(k);var F=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const N=function(t){function e(e,o){return t.call(this,"text",e,o)||this}return F(e,t),e}(k);var M=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),V=function(t){function e(e,o){var n=t.call(this,document.createElement("div"))||this;return n.root.classList.add("form-field"),n.label=e,n.control=o,n.root.append(n.label.getRoot(),n.control.getRoot()),n}return M(e,t),e.prototype.getLabel=function(){return this.label},e.prototype.getControl=function(){return this.control},e.prototype.getValue=function(){return this.control.getValue()},e.prototype.setValue=function(t){this.control.setValue(t)},e.prototype.setValid=function(t){},e}(O);const B=V;var q=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const I=function(t){function e(e,o){var n=t.call(this,document.createElement("label"))||this;return n.text=e,n.forTarget=o,n.root.textContent=e,n.root.setAttribute("for",o),n}return q(e,t),e}(O);var z=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const H=function(t){function e(e,o,n){var r=t.call(this,e)||this;return r.currentSide=!1,r.frontComponent=o,r.backComponent=n,r.changeSide(!1),r}return z(e,t),e.prototype.changeSide=function(t){this.currentSide=t,this.root.replaceChildren(this.currentSide?this.backComponent.getRoot():this.frontComponent.getRoot())},e}(O);var Z=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const J=function(t){function e(){return t.call(this,document.createElement("div"))||this}return Z(e,t),e}(O);var U=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),Y=function(t){function e(e,o){var n=t.call(this)||this;return n.todoController=o,n.root.setAttribute("id","todo-view"),n.title=document.createElement("h1"),n.title.textContent=e,n.ulist=document.createElement("ul"),n.newTodo=new G(n.todoController,n),n.root.append(n.title,n.ulist),n}return U(e,t),e.prototype.refresh=function(){var t=this,e=this.fetch();this.ulist.replaceChildren(this.newTodo.getRoot()),e.forEach((function(e){t.ulist.appendChild(new K(e,t.todoController).getRoot())}))},e}(J),G=function(t){function e(e,o){var n=t.call(this,document.createElement("li"),new O(document.createElement("div")),new Q(e,(function(t){n.changeSide(!1),e.create(t)&&o.refresh()}),(function(){n.changeSide(!1)})))||this,r=document.createElement("button");return r.textContent="Add new",r.addEventListener("click",(function(t){n.changeSide(!0)})),n.frontComponent.getRoot().append(r),n}return U(e,t),e}(H),K=function(t){function e(e,o){var n=t.call(this,document.createElement("li"),new O(document.createElement("div")),new Q(o,(function(t){n.update(t)}),(function(){n.changeSide(!1)})))||this;n.todoController=o,n.checked=document.createElement("input"),n.checked.type="checkbox",n.name=document.createElement("p"),n.description=document.createElement("p"),n.dueDate=document.createElement("p"),n.priority=document.createElement("p"),n.project=document.createElement("p"),n.checked.addEventListener("click",(function(t){n.todo.setChecked(n.todo.getChecked()),n.update(n.todo)}));var r=document.createElement("button");r.textContent="Update",r.addEventListener("click",(function(t){n.changeSide(!0)}));var i=document.createElement("button");return i.textContent="Delete",i.addEventListener("click",(function(t){n.todoController.delete(n.todo),n.root.remove()})),n.frontComponent.getRoot().append(n.checked,n.name,n.description,n.dueDate,n.priority,n.project,r,i),n.setTodo(e),n}return U(e,t),e.prototype.setTodo=function(t){this.todo=t,this.checked.value=this.todo.getChecked().toString(),this.name.textContent=this.todo.getName(),this.description.textContent=this.todo.getDescription(),this.dueDate.textContent=this.todo.getDueDate().toDateString(),this.priority.textContent=this.todo.getPriority().toString(),this.project.textContent=this.todo.getProject(),this.backComponent.setFields(t)},e.prototype.update=function(t){this.changeSide(!1),this.todoController.update(this.todo,t)&&this.setTodo(t)},e}(H),Q=function(t){function e(e,o,n){var r=t.call(this,document.createElement("form"))||this;r.todoController=e,r.submit=o,r.cancel=n,r.root.setAttribute("id","todo-form"),r.root.setAttribute("method","post"),r.nameField=new B(new I("Name:","name"),new N("name","name")),r.descriptionField=new B(new I("Description:","description"),new N("description","description")),r.dueDateField=new B(new I("Due date:","dueDate"),new T("dueDate","dueDate")),r.priorityField=new B(new I("Priority:","priority"),new L("priority","priority",0,5,1)),r.projectField=new B(new I("Project:","project"),new N("project","project"));var i=document.createElement("button");i.textContent="Submit";var c=document.createElement("button");return c.textContent="Cancel",c.type="button",c.addEventListener("click",(function(t){t.preventDefault(),r.cancel()})),r.root.append(r.nameField.getRoot(),r.descriptionField.getRoot(),r.dueDateField.getRoot(),r.priorityField.getRoot(),r.projectField.getRoot(),i,c),r.root.addEventListener("submit",(function(t){t.preventDefault(),r.validation()})),r}return U(e,t),e.prototype.setFields=function(t){this.nameField.setValue(t.getName()),this.descriptionField.setValue(t.getDescription()),this.dueDateField.getControl().getRoot().valueAsDate=t.getDueDate(),this.priorityField.setValue(t.getPriority().toString()),this.projectField.setValue(t.getProject())},e.prototype.validation=function(){var t=!1,e=this.nameField.getValue(),o=this.descriptionField.getValue(),n=new Date(this.dueDateField.getValue()),r=Number(this.priorityField.getValue()),i=this.projectField.getValue();if(this.todoController.validateName(e)||(t=!0),this.todoController.validateDescription(o)||(t=!0),this.todoController.validateDueDate(n)||(t=!0),this.todoController.validatePriority(r)||(t=!0),this.todoController.validateProject(i)||(t=!0),!t){var c=new y(!1,e,o,n,r,i);this.submit(c)}},e}(O),W=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),X=function(t){function e(e){return t.call(this,"All tasks",e)||this}return W(e,t),e.prototype.fetch=function(){return this.todoController.fetchAll()},e}(Y),$=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),tt=function(t){function e(e){return t.call(this,"Today",e)||this}return $(e,t),e.prototype.fetch=function(){return this.todoController.fetchByDate(new Date)},e}(Y),et=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),ot=function(t){function e(e){return t.call(this,"This week",e)||this}return et(e,t),e.prototype.fetch=function(){var t=new Date,e=new Date;return e.setDate(t.getDate()+7),this.todoController.fetchByDateRange(t,e)},e}(Y),nt=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const rt=function(t){function e(){var e=t.call(this)||this;e.root.setAttribute("id","error-404");var o=document.createElement("h1");o.textContent="404 error.";var n=document.createElement("p");return n.textContent="Not found.",e.root.append(o,n),e}return nt(e,t),e.prototype.refresh=function(){},e}(J);var it=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),ct=function(t){function e(e,o){var n=t.call(this,document.createElement("a"))||this;return n.route=e,n.router=o,n.root.textContent=n.route.name,n.root.setAttribute("href",e.path),n.root.addEventListener("click",(function(t){n.router.switchRouteByPath(e.path),t.preventDefault()})),n}return it(e,t),e.prototype.getRoute=function(){return this.route},e.prototype.setActive=function(t){var e="active",o=this.root.classList;t?o.add(e):o.remove(e)},e}(O);const at=ct;var ut=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),st=function(t){function e(){var e=t.call(this,document.createElement("div"))||this;return e.routerLinks=[],e.error404=new rt,e.root.setAttribute("id","router"),e}return ut(e,t),e.prototype.insert=function(){for(var t,e=this,o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var r=[];return o.forEach((function(t){r.push(new at(t,e))})),(t=this.routerLinks).push.apply(t,r),r},e.prototype.getByPath=function(t){return this.routerLinks.find((function(e){return e.getRoute().path===t}))},e.prototype.deleteByPath=function(t){var e=this.getByPath(t);return e&&this.routerLinks.splice(this.routerLinks.indexOf(e),1),e},e.prototype.setRoutes=function(t){var e=this,o=[];t.forEach((function(t){o.push(new at(t,e))})),this.routerLinks=o},e.prototype.switchRouteByPath=function(t){var e=this.getByPath(t);if(this.routerLinks.forEach((function(t){t.setActive(!1)})),e){e.setActive(!0);var o=e.getRoute().page;this.root.replaceChildren(o.getRoot()),o.refresh(),this.changeHashPath(t)}else this.root.replaceChildren(this.error404.getRoot())},e.prototype.changeHashPath=function(t){window.location.hash=t},e.prototype.getHashPath=function(){return window.location.hash.replace("#","")},e.prototype.getRouterLinks=function(){return this.routerLinks},e}(O);const lt=st;var pt=new D;document.body.appendChild(pt.getRoot());var ft=new lt;pt.getMain().appendChild(ft.getRoot());var dt=new _(pt.getMenuProjects(),ft);ft.insert({name:"inbox",path:"/",page:new X(dt)},{name:"today",path:"/today",page:new tt(dt)},{name:"this week",path:"/week",page:new ot(dt)}).forEach((function(t){pt.getMenu().insert(t)}));var ht=ft.getHashPath();ht?ft.switchRouteByPath(ht):ft.switchRouteByPath("/")})()})();