(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["experience"],{"1d9e":function(t,i,n){},2873:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("section",{staticClass:"my-work"},[n("div",[n("slide-y-up-transition",{attrs:{delay:100}},[n("h2",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"numbered-header"},[n("v-icon",{staticClass:"front-icon"},[t._v(t._s(t.workIcon))]),t._v(" Where I've Worked")],1)]),n("slide-x-left-transition",{attrs:{delay:300}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t.showTab?n("v-tabs",{attrs:{vertical:t.vertical}},[t._l(t.works,(function(i){return[n("v-tab",{key:i.company},[t._v(" "+t._s(i.tab)+" ")]),n("v-tab-item",{key:i.company,staticClass:"tab-items"},[n("div",{staticStyle:{"min-height":"200px"}},[n("h3",[t._v(t._s(i.position)+" "),n("span",{staticClass:"highlight"},[t._v("@ "+t._s(i.company))])]),n("p",{staticClass:"date"},[t._v(t._s(i.workStart)+" - "),n("span",{class:i.present?"highlight":""},[t._v(t._s(i.workUntil))])]),n("div",{staticClass:"list"},[n("ul",t._l(i.des,(function(i){return n("li",{key:i,domProps:{innerHTML:t._s(i)}})})),0)])])])]}))],2):n("div",t._l(t.works,(function(i){return n("div",{key:i.company,staticClass:"small-size"},[n("div",[n("h3",[t._v(t._s(i.position)+" "),n("span",{staticClass:"highlight"},[t._v("@ "+t._s(i.company))])]),n("p",{staticClass:"date"},[t._v(t._s(i.workStart)+" - "),n("span",[t._v(t._s(i.workUntil))])]),n("div",{staticClass:"list"},[n("ul",t._l(i.des,(function(i){return n("li",{key:i,domProps:{innerHTML:t._s(i)}})})),0)])])])})),0)],1)])],1)])},s=[],o=n("94ed"),a=[{icon:"",present:!0,position:"Software/Web Dev.",tab:"Utalk Phil.",company:"Utalk Philippines",link:"",workStart:"Sept. 2019",workUntil:"Present",des:["Full-time software developer","Worked with a variety of tech's. such as Vue, Angular, CodeIgniter, Lumen, Ruby on Rails, MySQL, MongoDB","Maintaining the system of the company"]},{icon:"",position:"Software/Web Dev.",tab:"Dap-ayan",company:"Dapayan Eatery La Trinidad",link:"",workStart:"Aug. 2019",workUntil:"May 2019",des:["Participated as an author and a project developer of their own private Ordering Management System","Technologies used are MySQL, CodeIgniter"]},{icon:"",position:"Designer and Web Programmer",tab:"iLearn",company:"iLearn Skills Development Academy",link:"http://www.ilearnsda.com/",workStart:"Aug. 2018",workUntil:"Dec. 2018",des:["Created web designs for wonderful clients","Maintaining their system as well as their website"]}],r=n("7c76"),d={components:{SlideYUpTransition:r["d"],SlideXLeftTransition:r["a"]},data:function(){return{workIcon:o["n"],works:a,vertical:!0,showTab:!0,show:!1}},mounted:function(){var t=this;this.show=!0,this.setTabs(),window.onresize=function(){t.setTabs()}},methods:{setTabs:function(){window.innerWidth<375?this.showTab=!1:window.innerWidth<502?(this.vertical=!1,this.showTab=!0):(this.vertical=!0,this.showTab=!0)}}},l=d,c=(n("2983"),n("2877")),h=n("6544"),u=n.n(h),w=n("132d"),p=n("71a3"),v=n("9d65"),f=n("4e82"),m=n("c3f0"),T=n("80d2"),b=n("58df"),g=Object(b["a"])(v["a"],Object(f["a"])("windowGroup","v-window-item","v-window")),y=g.extend().extend().extend({name:"v-window-item",directives:{Touch:m["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(T["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var i=this;this.inTransition&&this.$nextTick((function(){i.computedTransition&&i.inTransition&&(i.windowGroup.transitionHeight=Object(T["f"])(t.clientHeight))}))}},render:function(t){var i=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[i.genWindowItem()]})))}}),k=y.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=y.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),_=n("fe57"),C=Object(c["a"])(l,e,s,!1,null,null,null);i["default"]=C.exports;u()(C,{VIcon:w["a"],VTab:p["a"],VTabItem:k,VTabs:_["a"]})},2983:function(t,i,n){"use strict";var e=n("1d9e"),s=n.n(e);s.a}}]);
//# sourceMappingURL=experience.8ab10bda.js.map