(()=>{"use strict";var t={46:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(538),u=i()(r());u.i(c.Z),u.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),u.push([t.id,'body{font-family:"Roboto",sans-serif;background-color:#f5f5f5;color:#404040;width:100vw;height:100vh;overflow-x:hidden;text-transform:capitalize}#layout{width:100%;height:100%;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr auto;grid-template-areas:"header header" "aside main" "footer footer"}#layout>header{grid-area:header;display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"left right"}#layout>header>div{margin:auto 0 auto 0}#layout>header>div:first-child{font-weight:700;font-size:1.4em;grid-area:left}#layout>header>div:last-child{grid-area:right;margin-left:auto}#layout>aside{grid-area:aside;background-color:#d4d4d4;padding:1em;color:#171717;font-size:1em;font-weight:500}#layout>aside>nav{display:flex;flex-direction:column;gap:1em}#layout>aside>nav ul{display:flex;flex-direction:column;gap:1em}#layout>aside>nav ul li{border-radius:10px;background-color:#e5e5e5;height:fit-content;display:flex}#layout>aside>nav ul li a{width:100%;padding:.5em;text-decoration:none;color:inherit}#layout>aside>nav ul li:hover{background-color:#f5f5f5}#layout>aside>p{font-size:1.4em;font-weight:550}#layout>aside>button{cursor:pointer;background-color:inherit;border:none;font-size:1.3em;padding:.5em;border-radius:10px}#layout>aside>button:hover{background-color:#e5e5e5}#layout>main{grid-area:main}#layout>footer{grid-area:footer;text-align:center}#layout>header,#layout>footer{background-color:#404040;color:#f5f5f5;padding:2em}@media only screen and (min-width: 0px)and (max-width: 640px){#layout>aside:not(.active){display:none}}',""]);const s=u},538:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=o.base?u[0]+o.base:u[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var f=n(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var h=r(d,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=o(t,r),s=0;s<a.length;s++){var p=n(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),u=n.n(c),s=n(216),p=n.n(s),l=n(589),f=n.n(l),d=n(46),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;const y=function(){function t(t){this.root=t||document.createElement("div")}return t.prototype.getRoot=function(){return this.root},t}();var v,m=(v=function(t,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},v(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const g=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=t.call(this,document.createElement("div"))||this;return o.ul=document.createElement("ul"),o.root.appendChild(o.ul),o.insert.apply(o,e),o}return m(e,t),e.prototype.insert=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach((function(e){var n=document.createElement("li");n.appendChild(e.getRoot()),t.ul.appendChild(n)}))},e.prototype.clear=function(){this.ul.replaceChildren()},e}(y);var b=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const w=function(t){function e(){var e=t.call(this)||this,n=document.createElement("p");return n.textContent="Projects",e.root.prepend(n),e}return b(e,t),e}(g);var _=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const O=function(t){function e(){var e=t.call(this)||this;e.header=document.createElement("header"),e.aside=document.createElement("aside"),e.main=document.createElement("main"),e.footer=document.createElement("footer"),e.root.setAttribute("id","layout"),e.root.append(e.header,e.aside,e.main,e.footer);var n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("p");r.textContent="Odin - Todo List";var a=document.createElement("button");a.textContent="burger",a.addEventListener("click",(function(){e.aside.classList.toggle("active")})),n.append(r),o.append(a),e.header.append(n,o);var i=document.createElement("nav");e.aside.append(i),e.menu=new g,e.menuProjects=new w,i.append(e.menu.getRoot(),e.menuProjects.getRoot());var c=document.createElement("p");return c.textContent="Created by Julien Pinson for The Odin Project, 2022 ",e.footer.append(c),e}return _(e,t),e.prototype.getMain=function(){return this.main},e.prototype.getMenu=function(){return this.menu},e.prototype.getMenuProjects=function(){return this.menuProjects},e}(y);var x=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const E=function(t){function e(){var e=t.call(this)||this;e.root.setAttribute("id","error-404");var n=document.createElement("h1");n.textContent="404 error.";var o=document.createElement("p");return o.textContent="Not found.",e.root.append(n,o),e}return x(e,t),e}(y);var P=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),j=function(t){function e(e,n){var o=t.call(this,document.createElement("a"))||this;return o.route=e,o.router=n,o.root.textContent=o.route.name,o.root.setAttribute("href",e.path),o.root.addEventListener("click",(function(t){o.router.switchRouteByPath(e.path),t.preventDefault()})),o}return P(e,t),e.prototype.getRoute=function(){return this.route},e}(y);const C=j;var k=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const R=function(t){function e(){var e=t.call(this)||this;return e.routerLinks=[],e.error404=new E,e.root.setAttribute("id","router"),e}return k(e,t),e.prototype.insert=function(){for(var t,e=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var r=[];return n.forEach((function(t){r.push(new C(t,e))})),(t=this.routerLinks).push.apply(t,r),r},e.prototype.getByPath=function(t){return this.routerLinks.find((function(e){return e.getRoute().path===t}))},e.prototype.deleteByPath=function(t){var e=this.getByPath(t);return e&&this.routerLinks.splice(this.routerLinks.indexOf(e),1),e},e.prototype.setRoutes=function(t){var e=this,n=[];t.forEach((function(t){n.push(new C(t,e))})),this.routerLinks=n},e.prototype.switchRouteByPath=function(t){var e="active",n=this.getByPath(t);this.routerLinks.forEach((function(t){t.getRoot().classList.remove(e)})),n?(n.getRoot().classList.add(e),this.root.replaceChildren(n.getRoute().component.getRoot()),this.changeHashPath(t)):this.root.replaceChildren(this.error404.getRoot())},e.prototype.changeHashPath=function(t){window.location.hash="#".concat(t)},e.prototype.getHashPath=function(){return window.location.hash.replace("#","")},e.prototype.getRouterLinks=function(){return this.routerLinks},e}(y);var T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const L=function(t){function e(){return t.call(this)||this}return T(e,t),e.prototype.refresh=function(){this.fetch()},e.prototype.fetch=function(){},e}(y);var A=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const S=function(t){function e(){var e=t.call(this)||this,n=document.createElement("p");return n.textContent="test main",e.root.appendChild(n),e}return A(e,t),e.prototype.fetch=function(){},e}(L);var M=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const q=function(t){function e(){var e=t.call(this)||this,n=document.createElement("p");return n.textContent="test today",e.root.appendChild(n),e}return M(e,t),e.prototype.fetch=function(){},e}(L);var B=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const H=function(t){function e(){var e=t.call(this)||this,n=document.createElement("p");return n.textContent="test week",e.root.appendChild(n),e}return B(e,t),e.prototype.fetch=function(){},e}(L);var Z=new O;document.body.appendChild(Z.getRoot());var z=new R;Z.getMain().appendChild(z.getRoot()),z.insert({name:"inbox",path:"/",component:new S},{name:"today",path:"/today",component:new q},{name:"this week",path:"/week",component:new H}).forEach((function(t){Z.getMenu().insert(t)}));var I=z.getHashPath();I?z.switchRouteByPath(I):z.switchRouteByPath("/")})()})();