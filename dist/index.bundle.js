(()=>{"use strict";var n,e,t,a,o,i,r,c,s,d,A,l,p,u,m={426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(537),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n}\n\n.header-div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: lightcoral;\n    height: 10%;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n\n.visible {\n    display: block;\n}\n\n.content-div {\n    position: relative;\n    top: 0;\n    margin-top: 18%;\n    padding: 5%;\n    height: 100%;\n    background-color: royalblue;\n}\n\n#page-1 {\n    height: 100%;\n}\n\n#page-1 .content-div {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min-content, 165px));\n    grid-template-rows: repeat(auto-fill, minmax(0, 25%));\n    gap: 2%;\n    justify-content: center;\n}\n\n#page-2 {\n    height: 100%;\n}\n\n#page-2 .content-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    gap: 3rem;\n    padding: 10%;\n}\n\n#page-2 .content-div p {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    padding: 1rem;\n    background-color: rgba(255, 255, 255, .5);\n}\n\n.card-div {\n    display: grid;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    max-height: max-content;\n    align-items: start;\n    text-align: center;\n    padding: 5%;\n}\n\n.card-title {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 1px;\n    margin-bottom: 1rem;\n    min-height: min-content;\n}\n\n.card-subject {\n    min-height: min-content;\n}\n\n.card-content {\n    min-height: min-content;\n    padding: 2%;\n}\n\n.nav-bar-div {\n    height: 10%;\n    width: 100%;\n    background-color: blueviolet;\n    position: fixed;\n    top: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.page-button {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n    border: none;\n    opacity: .7;\n    background-color: black;\n}\n\n.page-button-not-clicked {\n    background-color: white;\n}\n\n.hidden {\n    display: none;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,WAAW;IACX,4CAA4C;IAC5C,eAAe;IACf,WAAW;IACX,MAAM;IACN,OAAO;IACP,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,eAAe;IACf,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oEAAoE;IACpE,qDAAqD;IACrD,OAAO;IACP,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,4CAA4C;IAC5C,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,2CAA2C;IAC3C,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,eAAe;IACf,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n}\n\n.header-div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: lightcoral;\n    height: 10%;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n\n.visible {\n    display: block;\n}\n\n.content-div {\n    position: relative;\n    top: 0;\n    margin-top: 18%;\n    padding: 5%;\n    height: 100%;\n    background-color: royalblue;\n}\n\n#page-1 {\n    height: 100%;\n}\n\n#page-1 .content-div {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min-content, 165px));\n    grid-template-rows: repeat(auto-fill, minmax(0, 25%));\n    gap: 2%;\n    justify-content: center;\n}\n\n#page-2 {\n    height: 100%;\n}\n\n#page-2 .content-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    gap: 3rem;\n    padding: 10%;\n}\n\n#page-2 .content-div p {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    padding: 1rem;\n    background-color: rgba(255, 255, 255, .5);\n}\n\n.card-div {\n    display: grid;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    max-height: max-content;\n    align-items: start;\n    text-align: center;\n    padding: 5%;\n}\n\n.card-title {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 1px;\n    margin-bottom: 1rem;\n    min-height: min-content;\n}\n\n.card-subject {\n    min-height: min-content;\n}\n\n.card-content {\n    min-height: min-content;\n    padding: 2%;\n}\n\n.nav-bar-div {\n    height: 10%;\n    width: 100%;\n    background-color: blueviolet;\n    position: fixed;\n    top: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.page-button {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n    border: none;\n    opacity: .7;\n    background-color: black;\n}\n\n.page-button-not-clicked {\n    background-color: white;\n}\n\n.hidden {\n    display: none;\n}"],sourceRoot:""}]);const c=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var A=[].concat(n[d]);a&&r[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],A=i[d]||0,l="".concat(d," ").concat(A);i[d]=A+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,a);a.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}r.push(l)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=t(i[r]);e[c].references--}for(var s=a(n,o),d=0;d<i.length;d++){var A=t(i[d]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),a=h.n(t),o=h(569),i=h.n(o),r=h(565),c=h.n(r),s=h(216),d=h.n(s),A=h(589),l=h.n(A),p=h(426),(u={}).styleTagTransform=l(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=d(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals,function(n,e,t){const{body:a}=document,o=function(){const n=document.createElement("div");n.classList.add("header-div");const e=document.createElement("h1");return e.classList.add("header-text"),e.textContent="Mobile Menu",n.appendChild(e),n}();a.appendChild(o);const i=function(n){const e=document.createElement("div");e.classList.add("visible"),e.setAttribute("id","page-1");const t=document.createElement("div");return t.classList.add("content-div"),e.appendChild(t),n.forEach((n=>{const e=document.createElement("div");e.classList.add("card-div"),t.appendChild(e);const a=document.createElement("h2");a.classList.add("card-title"),a.textContent=n.name,e.appendChild(a);const o=document.createElement("h3");o.classList.add("card-subject"),o.textContent=n.subject,e.appendChild(o);const i=document.createElement("p");i.classList.add("card-content"),i.textContent=n.content,e.appendChild(i)})),e}([{name:"Algebra",subject:"Math",content:"You're gonna use this plenty. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."},{name:"World War 2",subject:"History",content:"This one sucks big time. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."},{name:"Cell Structure",subject:"Biology",content:"Good to know. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."},{name:"The Hobbit",subject:"English",content:"Some classic fantasy literature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi orci. Cras."}]);a.appendChild(i);const r=function(n){const e=document.createElement("div");e.classList.add("visible"),e.setAttribute("id","page-2");const t=document.createElement("div");t.classList.add("content-div"),e.appendChild(t);const a=document.createElement("h1");a.textContent="About Section",t.appendChild(a);const o=document.createElement("p");return o.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",t.appendChild(o),e}();a.appendChild(r);const c=function(n){const e=document.createElement("div");return e.classList.add("nav-bar-div"),n.forEach((t=>{const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("page-button"),a.classList.add("page-button-not-clicked"),a.setAttribute("id",`${t.page}-button`),e.appendChild(a),a.addEventListener("click",(()=>{n.forEach((n=>{if(t.page===n.page)document.querySelector(`#${t.page}`).classList.remove("hidden"),document.querySelector(`#${t.page}-button`).classList.remove("page-button-not-clicked");else{const e=document.querySelector(`#${n.page}`),t=document.querySelector(`#${n.page}-button`);e.classList.contains("hidden")||e.classList.add("hidden"),t.classList.contains("page-button-not-clicked")||t.classList.add("page-button-not-clicked")}}))}))})),e}([{name:"Classes",page:"page-1"},{name:"About",page:"page-2"}]);a.appendChild(c),document.querySelector("#page-1-button").click()}()})();
//# sourceMappingURL=index.bundle.js.map