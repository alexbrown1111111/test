(function(){"use strict";var e={9264:function(e,t,a){var n=a(9963),o=a(6252);function r(e,t,a,n,r,i){const s=(0,o.up)("AppHeader"),l=(0,o.up)("router-view"),c=(0,o.up)("AppFooter"),p=(0,o.up)("AppBaseDialog"),u=(0,o.up)("notifications");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s,{onNavigate:e.navigateTo},null,8,["onNavigate"]),((0,o.wg)(),(0,o.j4)(l,{key:e.$route.fullPath})),(0,o.Wm)(c),e.commonStore.dialogParams.open?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(u,{position:"top center"})])}var i=a(2201),s=a(2477),l=a(3577);const c={class:"app-dialog__container"},p=(0,o._)("img",{src:"img/close.svg"},null,-1),u=[p],d={class:"app-dialog__heading"},f=(0,o._)("p",{class:"app-dialog__info"}," Отправьте заявку на получение консультации, заполнив все поля ниже. Наш менеджер с вами свяжется. ",-1),g={class:"app-dialog__input"},m=(0,o._)("label",{for:"name"}," Имя ",-1),v={class:"app-dialog__input"},h=(0,o._)("label",{for:"phone"},"Номер телефона / WhatsApp *",-1),_={class:"app-dialog__input"},b=(0,o._)("label",{for:"phone"},"Логин Telegram",-1),y=(0,o._)("button",{class:"app-button app-dialog__submit",type:"submit"}," Отправить ",-1);function w(e,t,a,r,i,s){return(0,o.wg)(),(0,o.iD)("div",{class:"app-dialog",onClick:t[6]||(t[6]=(...t)=>e.overlayClick&&e.overlayClick(...t))},[(0,o._)("div",c,[(0,o._)("button",{class:"app-dialog__close",onClick:t[0]||(t[0]=(...t)=>e.closeDialog&&e.closeDialog(...t))},u),(0,o._)("h3",d,(0,l.zw)("cases"==e.dialogParams.type?"Выбрать кейс":"Получить консультацию"),1),f,(0,o._)("form",{class:"app-dialog__inputs",onSubmit:t[5]||(t[5]=(0,n.iM)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"]))},[(0,o._)("div",g,[m,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.state.name=t)},null,512),[[n.nr,e.state.name]])]),(0,o._)("div",v,[h,(0,o.wy)((0,o._)("input",{type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=t=>e.state.phone=t),onKeydown:t[3]||(t[3]=(...t)=>e.isNumber&&e.isNumber(...t))},null,544),[[n.nr,e.state.phone]])]),(0,o._)("div",_,[b,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.state.telegram=t)},null,512),[[n.nr,e.state.telegram]])]),y],32)])])}var k=a(2262),D=a(9669),C=a.n(D),A=a(2570),S=a(5108);const{notify:P}=(0,A.lm)();var O=(0,o.aZ)({name:"BaseDialog",setup(){const e=(0,s.E)(),t=e.dialogParams,a=t?.data,n=(0,k.qj)({name:"",phone:"",telegram:""});function o(e){"app-dialog"===e.target.classList.value&&c()}function r(e){return"Backspace"==e.key||"ArrowLeft"==e.key||"ArrowRight"==e.key||"Enter"==e.key||"Tab"==e.key||"+"==e.key&&!n.phone?.length||(e.key==+e.key||(e.preventDefault(),!1))}function i(){const e=window.location.search,a=new URLSearchParams(e),o=a.get("id"),r={name:n.name,phone:n.phone,telegram:n.telegram,type:"cases"==t.type?`case-${t.data}`:"consultation"};o&&(r.id=o);const i={chat_id:-0xe947b0e0fe,text:JSON.stringify(r)};C().post("https://api.telegram.org/bot6106798649:AAGy_wULUpeJSfMGsvmy52b95pxaPZY9duk/sendMessage",i).then((function(){c(),P("Заявка отправлена!")})).catch((function(e){S.log("error post request: ",e)}))}function l(){e.confirmDialog()}function c(){e.closeDialog()}return{state:n,dialogData:a,dialogParams:t,overlayClick:o,closeDialog:c,confirm:l,isNumber:r,submitForm:i}}}),E=a(3744);const N=(0,E.Z)(O,[["render",w]]);var x=N;const j={class:"app-header app-wrapper"},T=(0,o.uE)('<div class="app-logo"><div class="app-logo__img"><img src="img/logo-small.png"></div><p class="app-logo__name"><span>Aristov</span> <br> Capital </p><p class="app-logo__info"> Официальный партнер <br> биржи Binance </p></div>',1),L={class:"app-header__right"},B={class:"app-header__links"},U=["onClick"],Z={class:"app-header__icons"},F=["href"],q=["src"],I={class:"app-header__buttons"},M=(0,o._)("a",{class:"app-button",href:"https://private.tradegpt.foundation/signin",target:"_blank"}," Регистрация ",-1);function $(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",j,[T,(0,o._)("div",L,[(0,o._)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.links,((t,a)=>((0,o.wg)(),(0,o.iD)("p",{class:"app-header__link",key:a,onClick:a=>e.$emit("navigate",t.to)},(0,l.zw)(t.name),9,U)))),128))]),(0,o._)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.icons,(e=>((0,o.wg)(),(0,o.iD)("a",{class:"app-header__icon",key:e.id,href:e.link,target:"_blank"},[(0,o._)("img",{src:`img/${e.id}.svg`},null,8,q)],8,F)))),128))]),(0,o._)("div",I,[(0,o._)("button",{class:"app-button",onClick:t[0]||(t[0]=(...e)=>n.openDialog&&n.openDialog(...e))}," Получить консультацию "),M])])])}var W={setup(){const e=(0,s.E)(),t=[{name:"Стратегия",to:"strategy"},{name:"Отзывы",to:"reviews"},{to:"cases",name:"Кейсы"}],a=[{id:"tw",link:"https://twitter.com/ethbrainz"},{id:"inst",link:"https://www.instagram.com/aristovcapital/"},{id:"tg",link:"https://t.me/aristovcapital"},{id:"manager",link:"https://t.me/alex_aristov"}];function n(){e.initNewDialog({type:"get-consult"})}return{links:t,icons:a,openDialog:n}}};const H=(0,E.Z)(W,[["render",$]]);var G=H;const J={class:"app-footer"},K=(0,o.uE)('<div class="app-footer__words" data-v-3fdac1aa><div class="app-footer__word" data-v-3fdac1aa><span data-v-3fdac1aa> ГОТОВ ВСТУПИТЬ </span></div><div class="app-footer__word color-active" data-v-3fdac1aa><span data-v-3fdac1aa> В ЛИГУ ТРЕЙДЕРОВ? </span></div></div><div class="app-footer__info" data-v-3fdac1aa><div class="app-footer__info-left" data-v-3fdac1aa><p class="app-footer__info-year" data-v-3fdac1aa> ©2023 Aristov Capital. Все права защищены </p><p data-v-3fdac1aa>Политика конфедициальности</p></div><div class="app-logo" data-v-3fdac1aa><div class="app-logo__img" data-v-3fdac1aa><img src="img/logo-small.png" data-v-3fdac1aa></div><p class="app-logo__name" data-v-3fdac1aa><span data-v-3fdac1aa>Aristov</span> <br data-v-3fdac1aa> Capital </p></div></div>',2),V=[K];function Y(e,t){return(0,o.wg)(),(0,o.iD)("div",J,V)}const z={},R=(0,E.Z)(z,[["render",Y],["__scopeId","data-v-3fdac1aa"]]);var Q=R,X=a(5108),ee=(0,o.aZ)({components:{AppHeader:G,AppFooter:Q,AppBaseDialog:x},setup(){const e=(0,i.tv)(),t=(0,s.E)();function a(){const e=window.location.search,t=new URLSearchParams(e),a=t.get("id");if(!a)return;const n=localStorage.getItem("id");if(n==a)return;const o={id:a},r={chat_id:-0xe947b0e0fe,text:JSON.stringify(o)};C().post("https://api.telegram.org/bot6106798649:AAGy_wULUpeJSfMGsvmy52b95pxaPZY9duk/sendMessage",r).then((function(){localStorage.setItem("id",a)})).catch((function(e){X.log("error post request: ",e)}))}function n(e){document.querySelector(`.${e}`).scrollIntoView({block:"start",behavior:"smooth"})}return(0,o.bv)((()=>{a()})),{router:e,commonStore:t,navigateTo:n}}});const te=(0,E.Z)(ee,[["render",r]]);var ae=te;const ne=(0,i.p7)({history:(0,i.PO)(),routes:[{path:"/",name:"home",component:()=>a.e(850).then(a.bind(a,3850))},{path:"/:catchAll(.*)",redirect:"home"}]});var oe=ne,re=a(6086);const ie=(0,re.WB)();var se=a(5148),le=a(9150),ce={},pe={};const ue=(0,n.ri)(ae),de=(0,le.o)({locale:localStorage.getItem("locale")?localStorage.getItem("locale"):"ru",allowComposition:!0,messages:{en:ce,ru:pe}});ue.use(ie),ue.use(de),ue.use(oe),ue.component("v-select",se.Z),ue.use(A.ZP),ue.mount("#app")},2477:function(e,t,a){a.d(t,{E:function(){return o}});var n=a(6086);const o=(0,n.Q_)({id:"Common",state:()=>({tokenId:null,userSettings:null,dialogParamsData:{open:!1,confirm:!1,type:"",data:{}},sidebarOpen:!0,sidebarOpenWidth:256,sidebarClosedWidth:64}),getters:{dialogParams:e=>e.dialogParamsData},actions:{initNewDialog(e){e.open=!0,e.confirm=!1,this.$patch({dialogParamsData:e})},confirmDialog(){this.$patch({dialogParamsData:{confirm:!0,open:!1}})},closeDialog(){this.$patch({dialogParamsData:{open:!1}})}}})}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],r=e[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".bd83d011.js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".823ae09c.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="crm:";a.l=function(n,o,r,i){if(e[n])e[n].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var d=function(t,a){s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=i,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=function(n){return new Promise((function(o,r){var i=a.miniCssF(n),s=a.p+i;if(t(i,s))return o();e(n,s,null,o,r)}))},o={143:0};a.f.miniCss=function(e,t){var a={850:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(t),s=new Error,l=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var p=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(p)},n=self["webpackChunkcrm"]=self["webpackChunkcrm"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9264)}));n=a.O(n)})();
//# sourceMappingURL=app.1dbe8b24.js.map