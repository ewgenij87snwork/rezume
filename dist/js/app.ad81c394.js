(function(n){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],a=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),n=o(o.s=t[0]))}return n}var a={},i={app:0},r={app:0},s=[];function c(n){return o.p+"js/"+({}[n]||n)+"."+{"chunk-03ed3130":"6142eb10","chunk-057070e8":"5e9eeaba","chunk-2d0ae9bf":"9a325163","chunk-2d0b5fc8":"9342d4c1","chunk-2d0b722c":"8b510cd8","chunk-2d0c8fd5":"605a819f","chunk-2d2109f1":"360bca4f","chunk-c13d6636":"2bfee8df","chunk-2bc46a76":"67c84bbb","chunk-767d8b58":"85d66537"}[n]+".js"}function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(n){var e=[],t={"chunk-03ed3130":1,"chunk-057070e8":1,"chunk-767d8b58":1};i[n]?e.push(i[n]):0!==i[n]&&t[n]&&e.push(i[n]=new Promise(function(e,t){for(var a="css/"+({}[n]||n)+"."+{"chunk-03ed3130":"20d4f979","chunk-057070e8":"8ec3052e","chunk-2d0ae9bf":"31d6cfe0","chunk-2d0b5fc8":"31d6cfe0","chunk-2d0b722c":"31d6cfe0","chunk-2d0c8fd5":"31d6cfe0","chunk-2d2109f1":"31d6cfe0","chunk-c13d6636":"31d6cfe0","chunk-2bc46a76":"31d6cfe0","chunk-767d8b58":"e990c304"}[n]+".css",r=o.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[n],f.parentNode.removeChild(f),t(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){i[n]=0}));var a=r[n];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,t){a=r[n]=[e,t]});e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(n),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var t=r[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+n+" failed.\n("+a+": "+i+")");s.type=a,s.request=i,t[1](s)}r[n]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=n,o.c=a,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(t,a,function(e){return n[e]}.bind(null,a));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/",o.oe=function(n){throw console.error(n),n};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"02c3":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"listWrap"},[t("div",{staticClass:"already"},[t("h4",[n._v("Такое уже делал")]),t("ul",[t("li",[t("span"),n._v("подключие preloader")]),t("li",[t("span"),n._v("эффект начального появления всего материала на сайте\n        ")]),t("li",[t("span"),n._v("эффекты при наведении")]),t("li",[t("span"),n._v("flex (загуглить как расписать)")]),t("li",[t("span"),n._v("подключение шрифтов")]),t("li",[t("span"),n._v("выпадающее меню")]),t("li",[t("span"),n._v("адаптация под мобильные дисплеи")]),t("li",[t("span"),n._v("popup (всплывающие окна)")]),t("li",[t("span"),n._v("небольшая настройка javascript (--это переписать как\n          правильно)\n        ")]),t("li",[t("span"),n._v("слайдер")]),t("li",[t("span"),n._v("\n          размещение сайта на GithubPages, с которого сайт потом размещается\n          на бесплатном домене\n        ")]),t("li",[t("span"),n._v("\n          размещение сайта на Heroku\n        ")])])]),t("div",{staticClass:"line"}),t("div",{staticClass:"nochNicht"},[t("h4",[n._v("С таким хочу разбираться")]),t("ul",[t("li",[t("span"),n._v("VueJs, а через него и JavaScript осваивать")]),t("li",[t("span"),n._v("Эффекты прокрутки страницы (scrolling)")]),t("li",[t("span"),n._v("БЭМ-нейминг")]),t("li",[t("span"),n._v("Git-репозитории (выход с разных аккаунтв)")]),t("li",[t("span"),n._v("Миксины (собирательство )")]),t("li",[t("span"),n._v("Canvas")]),t("li",[t("span"),n._v("Фон в движении")]),t("li",[t("span"),n._v("Все доступные свойства transition (>animation)")]),t("li",[t("span"),n._v("Загрузка файлов на сайт")]),t("li",[t("span"),n._v("Взаимодействие с 1 000 000 базой продуктов,\n          исторических статей\n        ")])])])])])}];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i})},"142e":function(n,e,t){"use strict";var a=t("a805"),i=t.n(a);i.a},"15b8":function(n,e,t){},"1cd1":function(n,e,t){"use strict";var a=t("15b8"),i=t.n(a);i.a},"238c":function(n,e,t){n.exports=t.p+"img/familyps.a1ff9293.jpg"},2900:function(n,e,t){n.exports=t.p+"img/jelmon.720f1b4a.jpg"},"33a8":function(n,e,t){n.exports=t.p+"img/bino.8c25806a.jpg"},"38e7":function(n,e,t){},4102:function(n,e,t){n.exports=t.p+"img/fashion.efe04d5d.jpg"},4817:function(n,e,t){n.exports=t.p+"img/155_bg_450px_419px.ad22eb8d.jpg"},"56d7":function(n,e,t){"use strict";t.r(e);t("14c6"),t("08c1"),t("4842"),t("d9fc");var a=t("2b0e"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],s={data:function(){return{}}},c=s,o=(t("cf25"),t("2877")),l=Object(o["a"])(c,i,r,!1,null,null,null),u=l.exports,d=t("8c4f"),f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"out"},[t("div",{staticClass:"wrapper"},[t("display1"),t("display2",{attrs:{landings:n.landings}}),t("display3",{attrs:{landings:n.landings}}),t("display4",{staticClass:"fff"})],1)])},p=[],m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"header__wrap"},[n._m(0),n._m(1),t("particles",{staticClass:"particles"})],1),n._m(2)])},h=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h1",[n._v("Портфолио-резюме"),t("br"),t("span",[n._v("Сорокин Евгений Николаевич")]),t("br"),t("br"),t("a",{attrs:{href:"https://github.com/ewgenij87snwork/rezume",target:"_blank"}},[n._v("Ссылка на GitHub")]),t("br"),t("a",{attrs:{href:"https://github.com/ewgenij87snwork/rezume",target:"_blank"}},[n._v("Ссылка на Facebook")])])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"rightSide"},[a("img",{attrs:{src:t("4817"),alt:"Сорокин Е.Н."}})])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"sides"},[t("div",{staticClass:"leftSide"},[t("div",{staticClass:"aboutMe"},[t("p",[n._v("Мне 31 год. Ищу возможность работать и развиваться на должности html-верстальщика, Junior Front-End, в последующем развиваться в сторону VueJS. Пока в базисе знания html, css, поверхностное представление и попытки использовать js, vuejs. Git -- использовал только 3 команды: add, commit и push. ")]),t("p",[n._v('Мне нравится работать над созданием сайтов, т.к. это открывает бескрайнюю тропу -- "Путь Знания". Последние несколько лет, параллельно работе учусь создавать сайты. Проходил удаленные курсы по верстке (2,5 месяца - раз в неделю), проходил пару лет назад курсы по html/css от htmlacademy (31 курс, 541 задание, общий прогрес - 41%). Учился по видео Юрия Артюха (2 сайта - верстка, 1 сайт перевод на Vue Cli). Учился по бесплатным интенсивам WebCademy. Делал сайт по уроках FrontCoder. К сожалению, знаний и практики за длительный срок скопилось не достаточно -- то забрасывал на длительные периоды и многое забывал, то после 8-10 часовой рабочей смены учеба "откладывалась на потом", то днями зацыкливался на непонятных/непроходимых вещах. ')]),t("p",[n._v("Сейчах хочу найти работу и жилье в Киеве с наставником/ментором. Т.к. неструктурированные знания быстро забываются -- имею много пробелов в Html/Css/Front-End/верстке. Считаю нужным выполнить минимум 2 проекта вслед за старшим работником прежде чем приступать к живому проекту.")]),t("p",[n._v('Ищу учителя, наставника, товарища. Для меня мир frontend-разработки как океан, и себя я представляю как неумеющего плавать, которого закинули в воду чтобы он пока догреб до берега научился плавать, но в своей "грёбле" я не вижу берегов и даже не представляю в правильную ли сторону "учусь"...')]),t("p",[n._v("Стараюсь с каждой работой наращивать свои знания, как цепочку - в каждом коде приходится находить что-то новое, что потом использую в следующем коде. Будь то просто синтаксис или относительно сложная наработка. ")])])])])}],b=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},v=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"particles"},[t("div",{attrs:{id:"particles-js"}})])}],g=(t("572f"),{name:"particles",mounted:function(){this.initParticles()},methods:{initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:10,density:{enable:!0,value_area:363}},color:{value:"#373737"},shape:{type:"edge",stroke:{width:1,color:"#373737"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.39411878257512395,random:!0,anim:{enable:!0,speed:7.902240325865581,opacity_min:.7820773930753564,sync:!0}},size:{value:2,random:!0,anim:{enable:!1,speed:207.079689136843,size_min:61.71786813490223,sync:!1}},line_linked:{enable:!0,distance:609.2965831288986,color:"#555555",opacity:.7616207289111233,width:0},move:{enable:!0,speed:3.5,direction:"top-left",random:!1,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!0,rotateX:3e3,rotateY:3e3}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"remove"},resize:!0},modes:{grab:{distance:341.0724291665649,line_linked:{opacity:1}},bubble:{distance:219.26084732136317,size:8.120772123013452,duration:.9744926547616141,opacity:.6902656304561433,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}),_=g,k=(t("a724"),Object(o["a"])(_,b,v,!1,null,"618d5a1b",null)),y=k.exports,j={name:"display1",components:{particles:y}},w=j,C=(t("142e"),Object(o["a"])(w,m,h,!1,null,"686c7a60",null)),x=C.exports,E=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("h1",[n._v("Небольшие лендинги")]),t("div",{staticClass:"works"},[t("work",{attrs:{landings:n.landings[0]}}),t("work",{attrs:{landings:n.landings[1]}})],1)])},O=[],z=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{on:{click:n.landingsLink}},[t("router-link",{staticClass:"work",attrs:{to:n.landings.link}},[t("div",{staticClass:"work__image"},[t("img",{attrs:{src:n.imgUrl,alt:""}})]),t("div",{staticClass:"work__bottom"},[t("div",{staticClass:"work__title"},[n._v("Перейти")]),t("div",{staticClass:"work__date"},[n._v("к просмотру "),t("br"),n._v(n._s(n.landings.name))])])])],1)])},S=[],$=(t("7f7f"),{name:"work",props:{landings:Object},methods:{landingsLink:function(){Q.$emit("landingsLink",{landingsLink:this.landings.name})}},computed:{imgUrl:function(){return t("9f9b")("./".concat(this.landings.src,".jpg"))}}}),P=$,A=(t("db83"),Object(o["a"])(P,z,S,!1,null,"11b7ef6e",null)),N=A.exports,L={name:"display2",props:{landings:Array},components:{work:N},data:function(){return{nextSendLandings:this.landings}},methods:{}},T=L,F=(t("e404"),Object(o["a"])(T,E,O,!1,null,"70d24710",null)),J=F.exports,M=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("h1",[n._v('Микро-сайты (from "Code in the Dark")')]),t("div",{staticClass:"works"},n._l(n.landings,function(e,a){return a>=2?t("work",{key:e.id,attrs:{landings:e}}):n._e()}),1)])},B=[],D={name:"display3",props:{landings:Array},components:{work:N}},U=D,G=(t("1cd1"),Object(o["a"])(U,M,B,!1,null,"3db70a22",null)),H=G.exports,q=t("8f20"),V={name:"home",data:function(){return{landings:[{id:1,name:"familyps",link:"/familyps",src:"familyps"},{id:2,name:"jelmon",link:"/jelmon",src:"jelmon"},{id:3,name:"academy",link:"/academy",src:"academy"},{id:4,name:"angrybirds",link:"/angrybirds",src:"angrybirds"},{id:5,name:"bino",link:"/bino",src:"bino"},{id:6,name:"bizzy",link:"/bizzy",src:"bizzy"},{id:7,name:"chart",link:"/chart",src:"chart"},{id:8,name:"distantjob",link:"/distantjob",src:"distantjob"},{id:9,name:"fashion",link:"/fashion",src:"fashion"}]}},components:{display1:x,display2:J,display3:H,display4:q["default"]}},W=V,I=(t("dd0d"),Object(o["a"])(W,f,p,!1,null,"2ad2712a",null)),K=I.exports;a["a"].use(d["a"]);var X=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:K},{path:"/familyps",name:"familyps",component:function(){return t.e("chunk-057070e8").then(t.bind(null,"2aaa"))}},{path:"/jelmon",name:"jelmon",component:function(){return t.e("chunk-03ed3130").then(t.bind(null,"f6d75"))}},{path:"/academy",name:"academy",component:function(){return Promise.all([t.e("chunk-c13d6636"),t.e("chunk-767d8b58")]).then(t.bind(null,"59f2"))}},{path:"/angrybirds",name:"angrybirds",component:function(){return Promise.all([t.e("chunk-c13d6636"),t.e("chunk-2bc46a76")]).then(t.bind(null,"e2ec"))}},{path:"/bino",name:"bino",component:function(){return t.e("chunk-2d0b5fc8").then(t.bind(null,"1adf"))}},{path:"/bizzy",name:"bizzy",component:function(){return t.e("chunk-2d0c8fd5").then(t.bind(null,"56db"))}},{path:"/chart",name:"chart",component:function(){return t.e("chunk-2d0ae9bf").then(t.bind(null,"0b90"))}},{path:"/distantjob",name:"distantjob",component:function(){return t.e("chunk-2d0b722c").then(t.bind(null,"1fab"))}},{path:"/fashion",name:"fashion",component:function(){return t.e("chunk-2d2109f1").then(t.bind(null,"b959"))}}]}),Y=t("9483");Object(Y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});t("7997");t.d(e,"eventBus",function(){return Q}),a["a"].config.productionTip=!1;var Q=new a["a"];new a["a"]({router:X,render:function(n){return n(u)}}).$mount("#app")},"64ee":function(n,e,t){},"670e":function(n,e,t){n.exports=t.p+"img/bizzy.0630fa86.jpg"},7053:function(n,e,t){},7997:function(n,e,t){},"8e40":function(n,e,t){},"8f20":function(n,e,t){"use strict";var a=t("02c3"),i=t("d30e"),r=(t("fd04"),t("2877")),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"42897c86",null);e["default"]=s.exports},"9f9b":function(n,e,t){var a={"./academy.jpg":"a0be","./angrybirds.jpg":"da63","./bino.jpg":"33a8","./bizzy.jpg":"670e","./chart.jpg":"b8e9","./distantjob.jpg":"b141","./familyps.jpg":"238c","./fashion.jpg":"4102","./jelmon.jpg":"2900"};function i(n){var e=r(n);return t(e)}function r(n){var e=a[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}i.keys=function(){return Object.keys(a)},i.resolve=r,n.exports=i,i.id="9f9b"},a0be:function(n,e,t){n.exports=t.p+"img/academy.8bf2eccc.jpg"},a4d6:function(n,e){},a724:function(n,e,t){"use strict";var a=t("d019"),i=t.n(a);i.a},a805:function(n,e,t){},b141:function(n,e,t){n.exports=t.p+"img/distantjob.5987da81.jpg"},b8e9:function(n,e,t){n.exports=t.p+"img/chart.8ace024c.jpg"},cf25:function(n,e,t){"use strict";var a=t("fcfc"),i=t.n(a);i.a},d019:function(n,e,t){},d30e:function(n,e,t){"use strict";var a=t("a4d6"),i=t.n(a);e["default"]=i.a},da63:function(n,e,t){n.exports=t.p+"img/angrybirds.0beb0f87.jpg"},db83:function(n,e,t){"use strict";var a=t("8e40"),i=t.n(a);i.a},dd0d:function(n,e,t){"use strict";var a=t("64ee"),i=t.n(a);i.a},e404:function(n,e,t){"use strict";var a=t("38e7"),i=t.n(a);i.a},fcfc:function(n,e,t){},fd04:function(n,e,t){"use strict";var a=t("7053"),i=t.n(a);i.a}});
//# sourceMappingURL=app.ad81c394.js.map