(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"723f":function(t,e,o){"use strict";o("d561")},a055:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"contact-me"},[o("SlideYUpTransition",{attrs:{delay:200}},[o("h2",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.contactMeShow&&!t.$store.state.modalShow,expression:"$store.state.contactMeShow && !$store.state.modalShow"}],staticClass:"numbered-header",staticStyle:{margin:"10px 0px -10px"}},[o("v-icon",{staticClass:"front-icon"},[t._v(t._s(t.contactIcon))]),t._v(" Contact Me ")],1)]),o("div",[o("div",{staticClass:"form",staticStyle:{"max-width":"800px"}},[o("SlideYUpTransition",{attrs:{delay:400}},[o("p",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.contactMeShow&&!t.$store.state.modalShow,expression:"$store.state.contactMeShow && !$store.state.modalShow"}]},[t._v(" Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or want to say hi, I'll try my best to get back to you! You can check my social profile below. ")])]),o("SlideYUpTransition",{attrs:{delay:600}},[o("Button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.contactMeShow&&!t.$store.state.modalShow,expression:"$store.state.contactMeShow && !$store.state.modalShow"}],staticStyle:{"margin-top":"30px"},attrs:{"aria-label":"Send Message"},nativeOn:{click:function(e){return t.sendMeMessage()}}},[t._v(" Send Me Message ")])],1)],1)])],1)},s=[],n=o("94ed"),i=o("7c76"),c=o("c4fa"),r=o("4e3c"),l={components:{SlideYUpTransition:i["d"],Button:r["a"]},data:function(){return{contactIcon:n["f"],socials:c["b"]}},mounted:function(){this.$store.state.contactMeShow=!0},computed:{INTRO:function(){return this.$store.state.introPage}},methods:{sendMeMessage:function(){window.location.href="mailto:"+this.INTRO.email}}},d=l,h=(o("723f"),o("2877")),u=o("6544"),w=o.n(u),m=o("132d"),p=Object(h["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports;w()(p,{VIcon:m["a"]})},d561:function(t,e,o){}}]);
//# sourceMappingURL=contact.bc40cc39.js.map