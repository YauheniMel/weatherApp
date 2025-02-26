(()=>{"use strict";var n={16:(n,t,e)=>{e.d(t,{A:()=>u});var a=e(601),i=e.n(a),r=e(314),o=e.n(r),s=e(417),c=e.n(s),p=new URL(e(410),e.b),d=o()(i()),l=c()(p);d.push([n.id,`*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nul[class],\nol[class] {\n  list-style: none;\n}\n\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\narticle > * + * {\n  margin-top: 1em;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    -webkit-transition-duration: 0.01ms !important;\n            transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${l}) format("truetype");\n}\n.header {\n  background-color: DarkCyan;\n  padding: 5px 0;\n}\n\n.info {\n  background: -webkit-gradient(linear, left top, right top, from(white), to(DarkCyan));\n  background: linear-gradient(to right, white, DarkCyan);\n  padding-left: 10px;\n}\n\n.temperature__value {\n  margin-top: 5px;\n  width: 150px;\n  text-align: right;\n  font-size: 18px;\n}\n.temperature__icon {\n  width: 100px;\n  margin-left: 40px;\n}\n\n.wind {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 200px;\n  padding: 0 10px;\n}\n.wind__direction {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.wind__direction img {\n  margin-left: 10px;\n}\n\n.main {\n  background: LightSeaGreen;\n}\n\n.days {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 12px;\n}\n\n.day__temperature {\n  text-align: right;\n}\n.day__icon {\n  width: 50px;\n}\n.day__value {\n  margin-top: 5px;\n}\n\n@media (max-width: 530px) {\n  .temperature {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .temperature__icon {\n    width: 80px;\n    margin-left: 0;\n    margin-top: 15px;\n  }\n  .temperature__value {\n    width: 30px;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n\n  .wind {\n    max-width: 100%;\n  }\n}\n@media (max-width: 380px) {\n  .days {\n    display: block;\n    font-size: 16px;\n    padding: 5px 0;\n  }\n\n  .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .day__temperature {\n    text-align: center;\n  }\n  .day__icon {\n    width: 30px;\n  }\n  .day__value {\n    margin-top: 0;\n  }\n}\nbody {\n  font-family: "Roboto";\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\nheader, main {\n  padding: 0 10px;\n}`,""]);const u=d},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},72:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var r={},o=[],s=0;s<n.length;s++){var c=n[s],p=a.base?c[0]+a.base:c[0],d=r[p]||0,l="".concat(p," ").concat(d);r[p]=d+1;var u=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=i(f,a);a.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}o.push(l)}return o}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var r=a(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var s=e(r[o]);t[s].references--}for(var c=a(n,i),p=0;p<r.length;p++){var d=e(r[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);a&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},410:(n,t,e)=>{n.exports=e.p+"81b96a7411d52ff40378.ttf"},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,i&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}}},t={};function e(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return n[a](r,r.exports,e),r.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=a[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var a=e(72),i=e.n(a),r=e(825),o=e.n(r),s=e(659),c=e.n(s),p=e(56),d=e.n(p),l=e(540),u=e.n(l),f=e(113),m=e.n(f),h=e(16),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals;const b=function(n,t){return new Promise(((e,a)=>{const i=new XMLHttpRequest;i.open(n,t),i.onload=()=>e(i.response),i.onerror=()=>a(new Error(`ERROR: ${i.status}`)),i.send()}))},y=e.p+"img/568c884225780e4a28a0.png",x=class{data={};constructor(n){this.data=n,this.parseData()}parseData(){const n=this.data.name,{country:t}=this.data.sys,e=this.data.dt,{temp:a}=this.data.main,{icon:i}=this.data.weather[0],r=this.data.wind.deg,o=this.data.wind.speed;this.prepareData({city:n,country:t,dateValue:e,temp:a,icon:i,windDirection:r,windSpeed:o})}prepareData(n){n.time=this.getTime(n.dateValue),n.temp=this.getTemperature(n.temp),n.windDirectionValue=this.getWindDirectionValue(n.windDirection),function({city:n,country:t,time:e,temp:a,icon:i,windDirection:r,windDirectionValue:o,windSpeed:s}){const c=`\n    <div class="info">\n      <p class="info__location">\n        ${n}, ${t}\n      </p>\n      <p class="info__date">\n        ${e}\n      </p>\n    </div>\n    <div class="temperature">\n      <p class="temperature__value">\n        ${a}\n      </p>\n      <img src="http://openweathermap.org/img/wn/${i}@2x.png" alt="icon weather" class="temperature__icon">\n    </div>\n    <div class="wind">\n      <div class="wind__direction">\n        <p style="display: inline-block;">\n          ${o}\n        </p>\n        <img src="${y}" alt="wind ${o}" style="width: 20px; transform:  rotate(${90+r}deg);">\n      </div>\n      <p class="wind__value">\n        ${s} m/s\n      </p>\n    </div>\n  `;document.querySelector(".container").innerHTML=c}(n)}getTime(n){const t=new Date(1e3*n);let e=t.getMinutes();e<10&&(e=`0${e}`);let a=t.getHours();return a<10&&(a=`0${a}`),`${a}:${e}`}getTemperature(n){return`${Math.round(n-273)}°C`}getWindDirectionValue(n){let t;return t=0===n?"North":n>0&&n<90?"North-east":90===n?"East":n>90&&n<180?"South-east":180===n?"South":n>180&&n<270?"South-west":270===n?"West":"North-west",t}};b("GET","https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=03fb54ebf904aeecf7fbb0e169f0c7ad").then((n=>{const t=JSON.parse(n);new x(t)})).catch((n=>{console.error(n)}));const w=class extends x{tempValues=[];icons=[];dateValues=[];constructor(n){super(),this.data=n.list,this.parseData()}parseData(){if(this.data){for(let n=0;n<40;n+=8)this.tempValues.push(super.getTemperature(this.data[n].main.temp)),this.icons.push(this.data[n].weather[0].icon),this.dateValues.push(this.getDate(this.data[n].dt));!function(n,t,e){const a=document.querySelector(".days");for(let i=0;i<5;i++){const r=`\n      <div class="day">\n        <p class="day__temperature">\n          ${n[i]}\n        </p>\n        <img src="http://openweathermap.org/img/wn/${t[i]}@2x.png" alt="" class="day__icon">\n        <p class="day__value">\n          ${e[i]}\n        </p>\n      </div>\n    `;a.innerHTML+=r}}(this.tempValues,this.icons,this.dateValues)}}getDate(n){const t=new Date(1e3*n);let e=t.getDate();e<10&&(e=`0${e}`);let a=t.getMonth();return a<10&&(a=`0${a}`),`${e}.${a} ${super.getTime(n)}`}};b("GET","https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=03fb54ebf904aeecf7fbb0e169f0c7ad").then((n=>{const t=JSON.parse(n);new w(t)})).catch((n=>{console.error(n)}))})();