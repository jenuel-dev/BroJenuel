(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["codechallenge"],{"0157":function(e,t,s){},"3b41":function(e,t,s){"use strict";s("0157")},f25d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"code-challenge"},[s("SlideXRightTransition",{attrs:{delay:200}},[s("h2",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.codeChallengeShow,expression:"$store.state.codeChallengeShow"}],staticClass:"numbered-header",staticStyle:{margin:"10px 0px -10px"}},[s("v-icon",{staticClass:"front-icon"},[e._v(e._s(e.headIcon))]),e._v(" Code Chellenge ")],1)]),s("SlideXLeftTransition",{attrs:{delay:300}},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.codeChallengeShow,expression:"$store.state.codeChallengeShow"}]},[e._v(" "+e._s(e.CODE_CHALLENGE.des)+" ")])]),s("div",{staticClass:"code-grid"},[e._l(e.CODE_CHALLENGE.challenges,(function(t,a){return[s("SlideYUpTransition",{key:t.title,attrs:{delay:150*a}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.codeChallengeShow,expression:"$store.state.codeChallengeShow"}],staticClass:"code-item"},[s("div",{staticClass:"code-item-inner"},[s("header",[s("div",{staticClass:"item-top"},[s("div",{staticClass:"item-folder"},[s("svg",{attrs:{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"}},[s("path",{attrs:{d:"M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z",stroke:"currentColor"}})])]),s("div",{staticClass:"item-links"},e._l(t.links,(function(t){return s("a",{key:t.link,attrs:{href:t.link,target:"_blank"}},[s("v-btn",{staticClass:"icon",attrs:{icon:"","aria-label":"Link Icons"}},[s("v-icon",[e._v(e._s(t.icon))])],1)],1)})),0)]),s("h3",{staticClass:"item-title"},[e._v(e._s(t.title))]),s("div",{staticClass:"item-des",domProps:{innerHTML:e._s(t.des)}})]),s("footer",[s("ul",e._l(t.techs,(function(t){return s("li",{key:t.name},[s("v-icon",{staticClass:"icon",attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),0)])])])])]}))],2)],1)},n=[],i=s("94ed"),o=s("7c76"),l={components:{SlideYUpTransition:o["d"],SlideXLeftTransition:o["a"],SlideXRightTransition:o["b"]},data:function(){return{headIcon:i["b"],folderIcon:i["j"]}},mounted:function(){this.$store.state.codeChallengeShow=!0},computed:{CODE_CHALLENGE:function(){return this.$store.state.codeChallengePage}}},c=l,r=(s("3b41"),s("2877")),d=s("6544"),h=s.n(d),v=s("8336"),u=s("132d"),C=Object(r["a"])(c,a,n,!1,null,null,null);t["default"]=C.exports;h()(C,{VBtn:v["a"],VIcon:u["a"]})}}]);
//# sourceMappingURL=codechallenge.99e247e5.js.map