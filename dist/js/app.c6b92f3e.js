(function(e){function t(t){for(var o,a,c=t[0],i=t[1],s=t[2],h=0,u=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&u.push(l[a][0]),l[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==l[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},l={app:0},r=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a36e9":"12597e2a","chunk-2d0c5220":"29c5e582","chunk-2d0d72e5":"fa88fc1f","chunk-820603d8":"2abe077e"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-820603d8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0a36e9":"31d6cfe0","chunk-2d0c5220":"31d6cfe0","chunk-2d0d72e5":"31d6cfe0","chunk-820603d8":"62afef1d"}[e]+".css",l=i.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===o||h===l))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],h=s.getAttribute("data-href");if(h===o||h===l)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||l,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=l;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var o=l[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=l[e]=[t,n]}));t.push(o[2]=r);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=c(e);var u=new Error;s=function(t){h.onerror=h.onload=null,clearTimeout(d);var n=l[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}l[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=h;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00db":function(e,t,n){"use strict";n("379b")},"379b":function(e,t,n){},"3ede":function(e,t,n){},4883:function(e,t,n){"use strict";n("72a3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,l,r){var c=Object(o["w"])("Intro"),i=Object(o["w"])("Overlay"),s=Object(o["w"])("MobileNav"),h=Object(o["w"])("Header"),u=Object(o["w"])("SocialMediaLinks"),d=Object(o["w"])("router-view"),m=Object(o["w"])("Footer");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["F"])(Object(o["h"])(i,null,{default:Object(o["E"])((function(){return[Object(o["h"])(c)]})),_:1},512),[[o["C"],!e.$store.state.show]]),Object(o["h"])(s),Object(o["F"])(Object(o["h"])(h,null,null,512),[[o["C"],e.$store.state.show]]),Object(o["F"])(Object(o["h"])(u,null,null,512),[[o["C"],e.$store.state.show]]),Object(o["F"])(Object(o["h"])("main",null,[Object(o["h"])(d)],512),[[o["C"],e.$store.state.show]]),Object(o["F"])(Object(o["h"])(m,null,null,512),[[o["C"],e.$store.state.show]])],64)}var l={class:"my-footer"},r=Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-copyright",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[Object(o["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(o["h"])("circle",{cx:"12",cy:"12",r:"9"}),Object(o["h"])("path",{d:"M14.5 9a3.5 4 0 1 0 0 6"})],-1),c=Object(o["g"])(" Jenuel Ganawed ");function i(e,t,n,a,i,s){var h=Object(o["x"])("scrollanimation");return Object(o["F"])((Object(o["q"])(),Object(o["d"])("div",l,[Object(o["h"])("div",{class:"footer-toggle-link",onClick:t[1]||(t[1]=function(e){return s.openSite("https://github.com/BroJenuel/jenuel-portfolio-v2")})},[Object(o["g"])(Object(o["z"])((new Date).getFullYear())+" ",1),r,c])],512)),[[h]])}var s={name:"Footer",methods:{openSite:function(e){window.open(e,"_blank")}}};s.render=i;var h=s,u=(n("9911"),{class:"social-network"}),d={class:"social-media social-media-orientation social-media-placement"},m={class:"social-media-list"},b={class:"email-media social-media-orientation social-media-placement"},v={class:"email-media-link"};function p(e,t,n,a,l,r){var c=Object(o["w"])("Icon"),i=Object(o["x"])("scrollanimation");return Object(o["q"])(),Object(o["d"])("div",u,[Object(o["h"])("div",d,[Object(o["F"])(Object(o["h"])("ul",m,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(e.links,(function(e){return Object(o["q"])(),Object(o["d"])("li",{key:e.link},[Object(o["h"])("div",{onClick:function(t){return r.openSite(e.link)},class:"a-link"},[Object(o["h"])(c,{name:e.icon,size:25},null,8,["name"])],8,["onClick"])])})),128))],512),[[i]])]),Object(o["F"])(Object(o["h"])("div",b,[Object(o["h"])("div",v,[Object(o["h"])("div",{class:"mail-link",onClick:t[1]||(t[1]=function(t){return e.$router.push("/contact")})},Object(o["z"])(e.email),1)])],512),[[i]])])}var f=n("bf44"),j=n("b626"),O={name:"SocialMediaLinks",components:{Icon:j["a"]},data:function(){return{links:f["b"],email:f["a"],show:!0}},methods:{openSite:function(e){window.open(e,"_blank")}}};O.render=p;var g=O,w=(n("b0c0"),{class:"logo-image"}),z={class:"navs"},k=Object(o["g"])(" About Me "),y=Object(o["g"])(" Experience "),M=Object(o["g"])(" Works "),C=Object(o["g"])(" Contact Me "),S=Object(o["g"])(" Blog "),x={href:"https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed-2021.pdf",target:"_blank",class:"resume-button",rel:"noopener"},L=Object(o["g"])(" Resume "),H={style:{"transition-delay":"1000ms"}},I={class:"show-mobile-nav-but"};function A(e,t,a,l,r,c){var i=Object(o["w"])("Icon"),s=Object(o["w"])("GradientBorder"),h=Object(o["w"])("ThemeChanger"),u=Object(o["x"])("scrollanimation");return Object(o["q"])(),Object(o["d"])("div",{class:["header",{"navbar--hidden":!r.showNavbar&&r.scroll>100,"nav-min":r.scroll>50}]},[Object(o["h"])("nav",null,[Object(o["h"])("div",w,[Object(o["h"])("img",{src:n("d69b"),onClick:t[1]||(t[1]=function(t){return e.$router.push("/")}),alt:"Logo Image"},null,8,["src"])]),Object(o["h"])("div",z,[Object(o["h"])("ol",null,[Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"100ms"},onClick:t[2]||(t[2]=function(t){return e.$router.push({name:"AboutMe"})})},[Object(o["h"])("div",{class:{active:"AboutMe"==e.$route.name}},[Object(o["h"])(i,{name:"user",size:15}),k],2)],512),[[u]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"250ms"},onClick:t[3]||(t[3]=function(t){return e.$router.push({name:"Experience"})})},[Object(o["h"])("div",{class:{active:"Experience"==e.$route.name}},[Object(o["h"])(i,{name:"case",size:15}),y],2)],512),[[u]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"400ms"},onClick:t[4]||(t[4]=function(t){return e.$router.push({name:"Work"})})},[Object(o["h"])("div",{class:{active:"Work"==e.$route.name}},[Object(o["h"])(i,{name:"code",size:15}),M],2)],512),[[u]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"550ms"},onClick:t[5]||(t[5]=function(t){return e.$router.push({name:"Contact"})})},[Object(o["h"])("div",{class:{active:"Contact"==e.$route.name}},[Object(o["h"])(i,{name:"envelope",size:15}),C],2)],512),[[u]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"650ms"},onClick:t[6]||(t[6]=function(e){return c.goToLink("https://brojenuel-blog.ml")})},[Object(o["h"])("div",null,[Object(o["h"])(i,{name:"documents",size:15}),S])],512),[[u]])]),Object(o["F"])(Object(o["h"])(s,{style:{"transition-delay":"850ms","margin-left":"20px","font-weight":"900"},withBg:!1},{default:Object(o["E"])((function(){return[Object(o["h"])("a",x,[Object(o["h"])(i,{name:"file",size:15}),L])]})),_:1},512),[[u]]),Object(o["F"])(Object(o["h"])("div",H,[Object(o["h"])(h)],512),[[u]])]),Object(o["h"])("div",I,[Object(o["h"])(i,{name:"menu",size:30,onClick:t[7]||(t[7]=function(t){return e.$store.state.navShow=!0}),style:{"margin-right":"20px"}})])])],2)}var V={class:"theme-dropdown-content"},F={class:"theme-dropdown-content-wrapper"},T={class:"color-selector-pallette"};function $(e,t,n,a,l,r){var c=Object(o["x"])("click-outside");return Object(o["F"])((Object(o["q"])(),Object(o["d"])("div",{class:["theme-dropdown",{"open-dropdown":a.open}]},[Object(o["h"])("div",{class:"color-selector",onClick:t[1]||(t[1]=function(e){return a.open=!a.open})}),Object(o["h"])("div",V,[Object(o["h"])("div",F,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(a.themes,(function(e){return Object(o["q"])(),Object(o["d"])("div",{class:["color-theme-choices",{active:a.selectedTheme==e.name}],key:e.name,onClick:function(t){a.changeTheme(e)}},[Object(o["h"])("div",T,[Object(o["h"])("div",{class:"color-selections",style:"padding: 10px; background-color: ".concat(e.color1,";")},null,4),Object(o["h"])("div",{class:"color-selections",style:"padding: 10px; background-color: ".concat(e.color2,";")},null,4),Object(o["h"])("div",{class:"color-selections",style:"padding: 10px; background-color: ".concat(e.color3,";")},null,4)]),Object(o["h"])("span",null,Object(o["z"])(e.name),1)],10,["onClick"])})),128))])])],2)),[[c,a.clickOutSide()]])}var E={setup:function(){var e=localStorage.getItem("theme")?localStorage.getItem("theme"):"greenLight";document.documentElement.setAttribute("theme",e);var t=Object(o["t"])(!1),n=Object(o["t"])(e),a=function(){return function(e){t.value=!e}},l=function(){t.value=!1},r=[{name:"greenLight",color1:"#64ffda",color2:"#349780",color3:"#0a192f"},{name:"yellowOrange",color1:"#f0a500",color2:"#e45826",color3:"#222222"},{name:"underTheSea",color1:"#2aea5e",color2:"#00a941",color3:"#011116"},{name:"NightBurns",color1:"#fc595f",color2:"#d2494e",color3:"#151515"}],c=function(e){localStorage.setItem("theme",e.name),n.value=e.name,document.documentElement.setAttribute("theme",e.name)};return{clickOutSide:a,open:t,themes:r,close:l,changeTheme:c,selectedTheme:n}}};n("ac6e");E.render=$;var B=E,J=n("a1c9"),P={name:"Header",components:{Icon:j["a"],GradientBorder:J["a"],ThemeChanger:B},data:function(){return{scroll:0,width:0,showNavbar:!0,lastScrollPosition:0}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleWidth)},methods:{goToLink:function(e){window.open(e,"_blank")},handleScroll:function(){this.scroll=window.scrollY},handleWidth:function(){this.width=window.innerWidth},onScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop;e<0||(this.showNavbar=e<this.lastScrollPosition,this.lastScrollPosition=e)}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.onScroll)}};P.render=A;var q=P,N={class:"block-overlay"};function _(e,t){return Object(o["q"])(),Object(o["d"])("div",N,[Object(o["v"])(e.$slots,"default")])}n("e9f2");const W={};W.render=_;var G=W,D={class:"intro"},R={style:{"transition-delay":"100ms"}},U=Object(o["h"])("span",null,"👋",-1),Y=Object(o["g"])("Hi! my name is"),K={style:{"transition-delay":"700ms",width:"300px"}},Q={class:"padding: 20px;",style:{display:"flex","align-items":"center",gap:"20px"}},X=Object(o["h"])("span",null,"CONTINUE",-1);function Z(e,t,n,a,l,r){var c=Object(o["w"])("Icon"),i=Object(o["w"])("GradientBorder"),s=Object(o["x"])("scrollanimation");return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("section",D,[Object(o["F"])(Object(o["h"])("h1",R,[U,Y],512),[[s]]),Object(o["F"])(Object(o["h"])("h2",{style:{"transition-delay":"250ms"}},Object(o["z"])(e.name),513),[[s]]),Object(o["F"])(Object(o["h"])("h3",{style:{"transition-delay":"400ms"}},Object(o["z"])(e.IDo),513),[[s]]),Object(o["F"])(Object(o["h"])("p",{style:{"transition-delay":"550ms"}},Object(o["z"])(e.des),513),[[s]]),Object(o["F"])(Object(o["h"])("div",K,[Object(o["h"])(i,{onClick:t[1]||(t[1]=function(e){return r.closeModal()}),"aria-label":"Send Message",style:{"margin-top":"30px",width:"300px","font-size":"1.5rem !important","font-weight":"900"},class:"go-button"},{default:Object(o["E"])((function(){return[Object(o["h"])("p",Q,[X,Object(o["h"])(c,{class:"arrow-icon",name:"arrowRight",size:24})])]})),_:1})],512),[[s]])])])}var ee={name:"Intro",components:{GradientBorder:J["a"],Icon:j["a"]},data:function(){return{name:"Jenuel Ganawed.",IDo:"I Build Things for the web.",des:"I'm a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",email:"jenuelganawed936@gmail.com"}},methods:{closeModal:function(){0==this.$store.state.show&&(localStorage.setItem("showedIntro","done"),localStorage.setItem("expy",Date.now()+36e5),this.$store.state.show=!0)}}};n("9f3e");ee.render=Z;var te=ee,ne={class:"nav-mobile"},oe={class:"close-button"},ae=Object(o["g"])(" About Me "),le=Object(o["g"])(" Experience "),re=Object(o["g"])(" Work "),ce=Object(o["g"])(" Contact Me "),ie=Object(o["g"])(" Blog "),se={style:{"transition-delay":"700ms"}},he={href:"https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed-2021.pdf",target:"_blank",class:"resume-button",rel:"noopener"},ue=Object(o["g"])(" Resume "),de={class:"social-medias-in-nav"};function me(e,t,n,a,l,r){var c=Object(o["w"])("Icon"),i=Object(o["w"])("ThemeChanger"),s=Object(o["w"])("GradientBorder"),h=Object(o["x"])("scrollanimation");return Object(o["q"])(),Object(o["d"])("div",ne,[Object(o["h"])("div",{class:["nav-front",{"show-nav":e.$store.state.navShow}]},[Object(o["h"])("div",oe,[Object(o["h"])(c,{name:"x",size:30,onClick:t[1]||(t[1]=function(t){return e.$store.state.navShow=!1})})]),Object(o["h"])("ul",null,[Object(o["h"])("li",null,[Object(o["h"])("div",null,[Object(o["h"])(i)])]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"100ms"},onClick:t[2]||(t[2]=function(t){e.$router.push({name:"AboutMe"}),e.$store.state.navShow=!1})},[Object(o["h"])("div",{class:{active:"AboutMe"==e.$route.name}},[Object(o["h"])(c,{name:"user",size:15}),ae],2)],512),[[h]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"250ms"},onClick:t[3]||(t[3]=function(t){e.$router.push({name:"Experience"}),e.$store.state.navShow=!1})},[Object(o["h"])("div",{class:{active:"Experience"==e.$route.name}},[Object(o["h"])(c,{name:"case",size:15}),le],2)],512),[[h]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"400ms"},onClick:t[4]||(t[4]=function(t){e.$router.push({name:"Work"}),e.$store.state.navShow=!1})},[Object(o["h"])("div",{class:{active:"Work"==e.$route.name}},[Object(o["h"])(c,{name:"code",size:15}),re],2)],512),[[h]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"550ms"},onClick:t[5]||(t[5]=function(t){e.$router.push({name:"Contact"}),e.$store.state.navShow=!1})},[Object(o["h"])("div",{class:{active:"Contact"==e.$route.name}},[Object(o["h"])(c,{name:"envelope",size:15}),ce],2)],512),[[h]]),Object(o["F"])(Object(o["h"])("li",{style:{"transition-delay":"650ms"},onClick:t[6]||(t[6]=function(t){r.goToLink("https://bro-jenuel-blog.netlify.app/"),e.$store.state.navShow=!1})},[Object(o["h"])("div",{class:{active:"Contact"==e.$route.name}},[Object(o["h"])(c,{name:"documents",size:15}),ie],2)],512),[[h]]),Object(o["F"])(Object(o["h"])("li",se,[Object(o["F"])(Object(o["h"])(s,{style:{width:"150px"},withBg:!1},{default:Object(o["E"])((function(){return[Object(o["h"])("a",he,[Object(o["h"])(c,{name:"file",size:15}),ue])]})),_:1},512),[[h]])],512),[[h]]),Object(o["h"])("li",null,[Object(o["h"])("ul",de,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.SocialNetwork,(function(e){return Object(o["q"])(),Object(o["d"])("li",{key:e.link},[Object(o["h"])(c,{name:e.icon,size:30},null,8,["name"])])})),128))])])])],2),Object(o["h"])("div",{class:["nav-back",{"show-nav":e.$store.state.navShow}],onClick:t[7]||(t[7]=function(t){return e.$store.state.navShow=!1})},null,2)])}var be={components:{Icon:j["a"],GradientBorder:J["a"],ThemeChanger:B},computed:{SocialNetwork:function(){return f["b"]}},methods:{goToLink:function(e){window.open(e,"_blank")}}};n("4883");be.render=me;var ve=be,pe={components:{SocialMediaLinks:g,Header:q,Overlay:G,Intro:te,MobileNav:ve,Footer:h},created:function(){if("done"==localStorage.getItem("showedIntro")){var e=localStorage.getItem("expy")?localStorage.getItem("expy"):"";if(""!=e){var t=parseInt(e),n=Date.now();this.$store.state.show=t>n}}console.log("%cHey! Whats Up! \n%cLike to dig into the meaty bits of the website?\nThanks for looking! Hit me up on Twitter @BroJenuel!","padding:10px;border-radius: 10px;color:#64ffda;font-family:'Ubuntu';display: block;font-weight:bold;font-size:48px;background:#0a192f;","padding: 10px; border-radius:10px; color:#ccd6f6; font-family:'Ubuntu'; font-weight:100; font-size:24px; background:#0a192f;")}};n("00db");pe.render=a;var fe=pe,je=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Oe={class:"modal-window"},ge={class:"box"},we={class:"about-me"},ze={class:"numbered-header"},ke=Object(o["g"])(" About Me "),ye={class:"about-me-inner"},Me={class:"about-me-text"},Ce={class:"skill-list"},Se=Object(o["f"])('<div class="about-me-photo"><div class="wrapper"><div class="photo" style="position:relative;overflow:hidden;"><div class="photo-front"></div><img src="https://i.ibb.co/6FNxFDB/Untitled-1.png" alt="Jenuel Ganawed - Profile Picture" width="300px"></div></div></div>',1);function xe(e,t,n,a,l,r){var c=Object(o["w"])("Icon"),i=Object(o["x"])("scrollanimation");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("div",Oe,[Object(o["h"])("div",{class:["modal-window-content",{show:e.dialog}],onClick:t[1]||(t[1]=function(t){return e.dialog=!e.dialog})},[Object(o["h"])("div",ge,[Object(o["h"])("h1",null,[Object(o["h"])(c,{class:"skill-icon",name:e.dialogConent.icon,size:20},null,8,["name"]),Object(o["g"])(Object(o["z"])(e.dialogConent.title),1)]),Object(o["h"])("div",null,Object(o["z"])(e.dialogConent.des),1)])],2),Object(o["h"])("div",{class:["modal-window-bg",{show:e.dialog}]},null,2)]),Object(o["F"])(Object(o["h"])("section",we,[Object(o["h"])("h2",ze,[Object(o["h"])(c,{class:"front-icon",name:"user",size:30}),ke]),Object(o["h"])("div",ye,[Object(o["h"])("div",Me,[Object(o["h"])("div",{class:"about-me-text-info",innerHTML:e.AboutMe.info},null,8,["innerHTML"]),Object(o["h"])("ul",Ce,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(e.AboutMe.skills,(function(t,n){return Object(o["F"])((Object(o["q"])(),Object(o["d"])("li",{key:t.text,onClick:function(n){return e.openDialog(t)},style:"transition-delay: "+100*n+"ms"},[Object(o["h"])(c,{class:"skill-icon",name:t.icon,size:20},null,8,["name"]),Object(o["g"])(" "+Object(o["z"])(t.text),1)],12,["onClick"])),[[i]])})),128))])]),Se])],512),[[i]])],64)}var Le="<p>Hi! I'm Jenuel Ganawed, and I am a Web Developer.</p><p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to Join or Work in any opportunity that will help me grow and enhance my skills and knowledge. I welcome challenging projects and enjoy working with all sorts of personalities.</p><p>Shortly after graduating from <a href='http://kcp.edu.ph/' rel='noreferrer' target='_blank' rel='noopener'>Kings College of The Philippines</a>, I joined the team of software developers at a company where I work on a wide variety of fascinating technologies and helpful projects..</p><p>Here are a few technologies I've been working with recently:</p>",He=[{icon:"javascript",text:"JavaScript (ES6+)",des:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."},{icon:"html",text:"HTML & (S)CSS",des:"HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices."},{icon:"vue",text:"Vue",des:"Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."},{icon:"laravel",text:"laravel/Lumen",des:"Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax."},{icon:"angular",text:"AngularS",des:"AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."},{icon:"ruby",text:"Ruby on Rails",des:"Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages."},{icon:"fire",text:"CodeIgniter",des:"CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications."},{icon:"tablet",text:"Progressive Web Apps (PWA)",des:"A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices."}],Ie={info:Le,skills:He},Ae={components:{Icon:j["a"]},data:function(){return{AboutMe:Ie,dialog:!1,dialogConent:{title:"",des:""}}},methods:{openDialog:function(e){this.dialogConent={title:e.text,des:e.des,icon:e.icon},this.dialog=!this.dialog}}};Ae.render=xe;var Ve=Ae,Fe=[{path:"/",redirect:"/aboutme"},{path:"/aboutme",name:"AboutMe",component:Ve},{path:"/experience",name:"Experience",component:function(){return n.e("chunk-2d0c5220").then(n.bind(null,"3e91"))}},{path:"/work",name:"Work",component:function(){return n.e("chunk-2d0d72e5").then(n.bind(null,"765e"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-820603d8").then(n.bind(null,"b41a"))}},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:function(){return n.e("chunk-2d0a36e9").then(n.bind(null,"01c5"))}}],Te=Object(je["a"])({history:Object(je["b"])(),routes:Fe,scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),$e=Te,Ee=(n("b383"),n("9483"));Object(Ee["a"])("".concat("/","service-worker.js"),{updated:function(){window.location.reload()}});n("159b");var Be=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("a-enter"),t.unobserve(e.target))}))})),Je=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("a-view-enter"),t.unobserve(e.target))}))}),{threshold:1}),Pe={beforeMount:function(e){e.classList.add("a-view-before-enter"),Je.observe(e)}},qe={beforeMount:function(e){e.classList.add("a-before-enter"),Be.observe(e)}},Ne=n("5502"),_e=Object(Ne["a"])({state:function(){return{show:!1,navShow:!1}}});Object(o["c"])(fe).directive("scrollanimation",qe).directive("scrollview",Pe).directive("click-outside",{beforeMount:function(e,t){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}).use(_e).use($e).mount("#app")},"72a3":function(e,t,n){},8576:function(e,t,n){},9978:function(e,t,n){},"9f3e":function(e,t,n){"use strict";n("9978")},a1c9:function(e,t,n){"use strict";var o=n("7a23");function a(e,t,n,a,l,r){return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("div",{class:["gradient-border",{bg:n.withBg}]},[Object(o["v"])(e.$slots,"default")],2)])}var l={props:{withBg:{type:Boolean,default:!0}}};l.render=a;t["a"]=l},ac6e:function(e,t,n){"use strict";n("8576")},b383:function(e,t,n){},b626:function(e,t,n){"use strict";n("b0c0");var o=n("7a23");function a(e,t,n,a,l,r){return Object(o["q"])(),Object(o["d"])("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:n.size,height:n.size,innerHTML:r.getIcon(n.name)},null,8,["width","height","innerHTML"])}n("a9e3");var l={user:'<path clip-rule="evenodd" d="M10.5 3.498a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998zm2 10.992h-10v-1.996a3 3 0 013-3h4a3 3 0 013 3v1.997z" stroke="currentColor" stroke-linecap="square"></path>',javascript:'<path d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11m-2-5v5a1.5 1.5 0 01-3 0M.5.5h14v14H.5V.5z" stroke="currentColor"></path>',html:'<path d="M12 3.5H5.5v3h6v3l-3 1-3-1V8M1.5.5h14l-1 12-6 2-6-2-1-12z" stroke="currentColor"></path>',vue:'<path d="M7.5 13.5l-.432.252a.5.5 0 00.864 0L7.5 13.5zm4-12l.434.248A.5.5 0 0011.5 1v.5zm-4 7l-.434.248a.5.5 0 00.868 0L7.5 8.5zm-4-7V1a.5.5 0 00-.434.748L3.5 1.5zm3 0l.447-.224L6.81 1H6.5v.5zm1 2l-.447.224a.5.5 0 00.894 0L7.5 3.5zm1-2V1h-.309l-.138.276.447.224zm-8.432.252l7 12 .864-.504-7-12-.864.504zm7.864 12l7-12-.864-.504-7 12 .864.504zm3.134-12.5l-4 7 .868.496 4-7-.868-.496zm-3.132 7l-4-7-.868.496 4 7 .868-.496zM3.5 2h3V1h-3v1zm2.553-.276l1 2 .894-.448-1-2-.894.448zm1.894 2l1-2-.894-.448-1 2 .894.448zM8.5 2h3V1h-3v1z" fill="currentColor"></path>',laravel:'<path d="M2 3.571l-.158-.474a.5.5 0 00-.327.596L2 3.57zm2.357-.785l.447-.224a.5.5 0 00-.605-.25l.158.474zm4.714 9.428l-.447.224a.5.5 0 00.705.205l-.258-.429zM13 9.857l.257.429a.5.5 0 00.165-.697L13 9.857zm-2.75-4.321l-.121-.485a.5.5 0 00-.3.753l.421-.268zm1.571-.393l.4-.3a.5.5 0 00-.52-.185l.12.485zM13 6.714l.158.475a.5.5 0 00.242-.775l-.4.3zM3.571 9.857l-.485.121a.5.5 0 00.644.354l-.159-.475zM2.158 4.046l2.357-.786-.316-.949-2.357.786.316.949zM3.91 3.009l2.918 5.837.895-.447-2.919-5.837-.894.447zm2.918 5.837l1.796 3.592.895-.447-1.796-3.592-.895.447zm2.5 3.797l3.93-2.357-.515-.858-3.929 2.358.515.857zm4.094-3.054l-1.65-2.593-.844.537 1.65 2.593.844-.537zm-1.65-2.593l-1.1-1.729-.844.537 1.1 1.729.844-.537zm-1.4-.975l1.57-.393-.242-.97-1.571.393.242.97zm1.05-.578L12.6 7.014l.8-.6-1.179-1.571-.8.6zm1.42.797l-1.65.55.316.949 1.65-.55-.316-.949zm-1.65.55L7.117 8.148l.317.949 4.074-1.358-.316-.949zM7.117 8.148L3.413 9.383l.317.949 3.704-1.235-.317-.949zm-3.06 1.588L2.484 3.45l-.97.243 1.571 6.285.97-.242zM2.5 1h10V0h-10v1zM14 2.5v10h1v-10h-1zM12.5 14h-10v1h10v-1zM1 12.5v-10H0v10h1zM2.5 14A1.5 1.5 0 011 12.5H0A2.5 2.5 0 002.5 15v-1zM14 12.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM12.5 1A1.5 1.5 0 0114 2.5h1A2.5 2.5 0 0012.5 0v1zm-10-1A2.5 2.5 0 000 2.5h1A1.5 1.5 0 012.5 1V0z" fill="currentColor"></path>',angular:'<path d="M5 12l3.5-8 3.5 8M6 9.5h5m-2.5-8l-7 2 1 9 6 3 6-3 1-9-7-2z" stroke="currentColor"></path>',ruby:'<path d="M14.5 14.5v.5h.5v-.5h-.5zm0-14h.5V0h-.5v.5zm-6 0V0h-.207l-.147.146L8.5.5zm-8 8l-.354-.354L0 8.293V8.5h.5zm0 6H0v.5h.5v-.5zm4-4l-.224.447.019.01.02.007.185-.464zm0-6V4a.5.5 0 00-.5.5h.5zm6 0l.464-.186-.008-.019-.009-.019-.447.224zm4.5 10V.5h-1v14h1zM14.5 0h-6v1h6V0zM8.146.146l-8 8 .708.708 8-8-.708-.708zM0 8.5v6h1v-6H0zM.5 15h14v-1H.5v1zM14.146.146l-14 14 .708.708 14-14-.708-.708zM5 10.5v-6H4v6h1zM4.5 5h6V4h-6v1zm-.186 5.964l10 4 .372-.928-10-4-.372.928zm5.722-6.278l4 10 .928-.372-4-10-.928.372zM8.053.724l2 4 .894-.448-2-4-.894.448zM.276 8.947l4 2 .448-.894-4-2-.448.894z" fill="currentColor"></path>',fire:'<path d="M2.5 11.5l9-8 1 9-5 2-5-3zm0 0l5-9 2 3m-7 6l1-11 3 3" stroke="currentColor" stroke-linejoin="round"></path>',tablet:'<path d="M6 11.5h3m-6.5 3h10a1 1 0 001-1v-12a1 1 0 00-1-1h-10a1 1 0 00-1 1v12a1 1 0 001 1z" stroke="currentColor"></path>',facebook:'<path d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5" stroke="currentColor"></path>',youtube:'<path d="M1.61 12.738l-.104.489.105-.489zm11.78 0l.104.489-.105-.489zm0-10.476l.104-.489-.105.489zm-11.78 0l.106.489-.105-.489zM6.5 5.5l.277-.416A.5.5 0 006 5.5h.5zm0 4H6a.5.5 0 00.777.416L6.5 9.5zm3-2l.277.416a.5.5 0 000-.832L9.5 7.5zM0 3.636v7.728h1V3.636H0zm15 7.728V3.636h-1v7.728h1zM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.605 27.605 0 01-11.568 0l-.21.978zM13.494 1.773a28.606 28.606 0 00-11.988 0l.21.978a27.607 27.607 0 0111.568 0l.21-.978zM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885h1zm-1 7.728a.905.905 0 01-.716.885l.21.978A1.905 1.905 0 0015 11.364h-1zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 011 11.364H0zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 000 3.636h1zM6 5.5v4h1v-4H6zm.777 4.416l3-2-.554-.832-3 2 .554.832zm3-2.832l-3-2-.554.832 3 2 .554-.832z" fill="currentColor"></path>',linkedin:'<path d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z" stroke="currentColor"></path>',github:'<path d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z" fill="currentColor"></path>',twitter:'<path d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z" fill="currentColor"></path>',case:'<path d="M5.5 3v-.5a2 2 0 114 0V3m-9 8.5h14m-13-8h12a1 1 0 011 1v9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-9a1 1 0 011-1z" stroke="currentColor"></path>',code:'<path d="M10.146 10.146l-.353.354.707.707.354-.353-.708-.708zM13.5 7.5l.354.354.353-.354-.353-.354-.354.354zm-2.646-3.354l-.354-.353-.707.707.353.354.708-.708zm-6.708 6.708l.354.353.707-.707-.353-.354-.708.708zM1.5 7.5l-.354-.354-.353.354.353.354L1.5 7.5zm3.354-2.646l.353-.354-.707-.707-.354.353.708.708zm6 6l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zm-9 3l-3-3-.708.708 3 3 .708-.708zm-3-2.292l3-3-.708-.708-3 3 .708.708zm6.153-6.436l-2 12 .986.164 2-12-.986-.164z" fill="currentColor"></path>',folders:'<path d="M3.5 8.5v-7a1 1 0 011-1h3l2 2h4a1 1 0 011 1v5a1 1 0 01-1 1h-9m-1-1a1 1 0 001 1m-1-1v-3h-2a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1v-4h-7" stroke="currentColor"></path>',envelope:'<path d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z" stroke="currentColor"></path>',link:'<path d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6" stroke="currentColor"></path>',node:'<path d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3H9A1.5 1.5 0 017.5 9m-2-5v5.264a2 2 0 01-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z" stroke="currentColor"></path>',bolt:'<path d="M4.5 5.5h6m-6 0a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1v-5a1 1 0 00-1-1m-6 0v-4a1 1 0 011-1h4a1 1 0 011 1v4M9 2.5H6M5.5 13v2m4-2v2" stroke="currentColor"></path>',vim:'<path d="M1.5 3.5h1v10h3l8-10v-2h-5v2h2l-5 6v-6h1v-2h-5v2z" stroke="currentColor"></path>',css:'<path d="M5 3.5h6.5v3M7 6.5h4.5m0 0v3l-3 1-3-1V8M1.5.5h14l-1 12-6 2-6-2-1-12z" stroke="currentColor"></path>',chat:'<path d="M11.5 13.5l.157-.475-.218-.072-.197.119.258.428zm2-2l-.421-.27-.129.202.076.226.474-.158zm1 2.99l-.157.476a.5.5 0 00.631-.634l-.474.159zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856zM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 007.5 7.496v-1zM1 7.495A6.498 6.498 0 017.5 1V0A7.498 7.498 0 000 7.495h1zM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 007.5 0v1zM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1zm-2.657 6.48l3 .99.314-.949-3-.99-.314.949zm3.631.357l-1-2.99-.948.316 1 2.991.948-.317z" fill="currentColor"></path>',download:'<path d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7" stroke="currentColor"></path>',react:'<path d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z" stroke="currentColor"></path><path d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726 1.841-3.4 2.153-6.795.696-7.584-1.457-.79-4.13 1.327-5.972 4.726-1.841 3.4-2.153 6.795-.696 7.584z" stroke="currentColor"></path><path d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726-1.841-3.4-2.153-6.795-.696-7.584 1.457-.79 4.13 1.327 5.972 4.726 1.841 3.4 2.153 6.795.696 7.584z" stroke="currentColor"></path><path d="M6.5 7.584a1 1 0 102 0 1 1 0 00-2 0z" stroke="currentColor"></path>',file:'<path d="M5 7.5l2 2 3.5-4m0-5h-8a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-10l-3-3z" stroke="currentColor"></path>',menu:'<path d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15" stroke="currentColor"></path>',x:'<path d="M4.5 4.5l6 6m-6 0l6-6m-3 10a7 7 0 110-14 7 7 0 010 14z" stroke="currentColor"></path>',arrowRight:'<path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor"></path>',documents:'<path d="M10.5.5l.277-.416L10.651 0H10.5v.5zm3 2h.5v-.268l-.223-.148-.277.416zm-1 9.5h-8v1h8v-1zM4 11.5v-10H3v10h1zM4.5 1h6V0h-6v1zM13 2.5v9h1v-9h-1zM10.223.916l3 2 .554-.832-3-2-.554.832zM4.5 12a.5.5 0 01-.5-.5H3A1.5 1.5 0 004.5 13v-1zm8 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM4 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 003 1.5h1zm-3 2v10h1v-10H1zM2.5 15h8v-1h-8v1zm0-12h1V2h-1v1zM12 13.5v-1h-1v1h1zM10.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zm1-10a.5.5 0 01.5-.5V2A1.5 1.5 0 001 3.5h1z" fill="currentColor"></path>'},r={name:"Icon",data:function(){return{icons:l}},props:{name:{type:String},size:{type:Number,default:24}},methods:{getIcon:function(e){return l[e]}}};r.render=a;t["a"]=r},bf44:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var o=[{icon:"facebook",link:"https://www.facebook.com/ganawed/"},{icon:"youtube",link:"https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA"},{icon:"linkedin",link:"https://www.linkedin.com/in/jenuelganawed/"},{icon:"github",link:"https://github.com/BroJenuel"},{icon:"twitter",link:"https://twitter.com/broJenuel"}],a="jenuelganawed936@gmail.com"},d69b:function(e,t,n){e.exports=n.p+"img/brojenuellogo.ba001777.svg"},e9f2:function(e,t,n){"use strict";n("3ede")}});
//# sourceMappingURL=app.c6b92f3e.js.map