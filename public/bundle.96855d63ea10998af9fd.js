!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,e),references:1}),o.push(l)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=m||(m=u(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=u(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,"/**\n * Body CSS\n */\n\n html,\n body {\n   height: 100%;\n }\n \n html,\n body,\n input,\n textarea,\n button {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n }\n \n \n /**\n  * Sidebar CSS\n  */\n \n #sidebar {\n   background-color: #2196F3;\n   padding: 15px;\n\n }\n\n .author {\n\t font-size: 0.8rem;\n }\n\n .floating-btn {\n   position: fixed;\n   bottom: 50px;\n   right: 50px;\n }\n\n .modal {\n   max-width: 600px;\n   max-height: 300px;\n   margin: 100px auto;\n   overflow-y: auto;\n   background: #fff;\n }\n\n .modal > h1 {\n  text-align: center;\n }\n\n .modal .modal-content {\n   padding: 1rem;\n }\n\n .error {\n   color: red;\n }\n \n @media (min-width: 768px) {\n   #sidebar {\n\t position: fixed;\n\t top: 0;\n\t bottom: 0;\n\t width: 180px;\n\t height: 100%;\n\t padding-top: 30px;\n   }\n }\n \n \n /**\n  * Content CSS\n  */\n @media (min-width: 768px) {\n   #content {\n\t margin-left: 180px;\n   }\n }",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);class o{static create(t){return fetch("https://appquestion-41d24.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(e=>(t.id=e.name,t)).then(r).then(o.renderList)}static fetch(t){return t?fetch(`https://appquestion-41d24.firebaseio.com/questions.json?auth=${t}`).then(t=>t.json()).then(t=>t&&t.error?`<p class="error">${t.error}</p>`:t?Object.keys(t).map(e=>({...t[e],id:e})):[]):Promise.resolve('<p class="error">You dont have a token</p>')}static renderList(){const t=i(),e=t.length?t.map(a).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивалиs</div>';document.getElementById("list").innerHTML=e}static listToHTML(t){return t.length?`<ol>${t.map(t=>`<li>${t.text}</li>`).join("")}</ol>`:"<p>Вопросов нет</p>"}}function r(t){const e=i();e.push(t),localStorage.setItem("questions",JSON.stringify(e))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(t){return`\n\t<div class="mui--text-black-54">\n\t\t${new Date(t.date).toLocaleDateString()}\n\t\t${new Date(t.date).toLocaleTimeString()}\n\t</div>\n    <div>${t.text}</div>\n\t<br>\n\t`}function s(t){return t.length>=10}function c(t,e){var n=document.createElement("div");n.classList.add("modal");const o=`\n\t<h1>${t}</h1>\n\t<div class="modal-content">${e}</div>\n\t`;n.innerHTML=o,mui.overlay("on",n)}n(0);const u=document.getElementById("form"),l=document.getElementById("modal-btn"),d=u.querySelector("#question-input"),f=u.querySelector("#submit");function p(t){t.preventDefault();const e=t.target.querySelector("button"),n=t.target.querySelector("#email").value,r=t.target.querySelector("#password").value;e.disabled=!0,function(t,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAezqCoH-8S5rTxOPGqe9qY3zhL0RWuoO8",{method:"POST",body:JSON.stringify({email:t,password:e,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then(t=>t.json()).then(t=>t.idToken)}(n,r).then(o.fetch).then(m).then(()=>e.disabled=!1)}function m(t){"string"==typeof t?c("Ошибка",t):c("Список вопросов",o.listToHTML(t))}window.addEventListener("load",o.renderList),u.addEventListener("submit",(function(t){if(t.preventDefault(),s(d.value)){const t={text:d.value.trim(),date:(new Date).toJSON()};f.disabled=!0,o.create(t).then(()=>{console.log("Question",t),d.value="",d.className="",f.disabled=!1})}})),l.addEventListener("click",(function(){c("Авторизация",'\n\t<form class="mui-form" id="auth-form">\n\t\t\t\n\t<div class="mui-textfield mui-textfield--float-label">\n\t  <input type="email" id="email" required>\n\t  <label for="email">Email</label>\n\t</div>\n\t<div class="mui-textfield mui-textfield--float-label">\n\t\t<input type="password" id="password" required>\n\t\t<label for="password">Password</label>\n  \t</div>\n\t\n\t<button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>\n  </form>\n\t'),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),d.addEventListener("input",()=>{f.disabled=!s(d.value)})}]);