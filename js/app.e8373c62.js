(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0673":function(t,e,a){"use strict";a("589d")},"0754":function(t,e,a){"use strict";a("f0fd")},"16aa":function(t,e,a){"use strict";a("d838")},"1a54":function(t,e,a){},"21bb":function(t,e,a){"use strict";a("7a98")},"22f2":function(t,e,a){"use strict";a("2f3f")},"2f3f":function(t,e,a){},"403b":function(t,e,a){t.exports=a.p+"img/AndrewHeadshot.4df20f2e.jpg"},"589d":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("e332")},"5f69":function(t,e,a){t.exports=a.p+"img/perfBack.cf212d39.jpg"},"695d":function(t,e,a){"use strict";a("8de5")},"6fb9":function(t,e,a){"use strict";a("1a54")},"79d8":function(t,e,a){t.exports=a.p+"img/SamHeadshot.e8cf7729.png"},"7a98":function(t,e,a){},"7f9b":function(t,e,a){t.exports=a.p+"img/logoAnimation.82496974.gif"},"8de5":function(t,e,a){},"950e":function(t,e,a){},"9bec":function(t,e,a){t.exports=a.p+"img/perfFront.5e807682.jpg"},a6df:function(t,e,a){t.exports=a.p+"img/hello.fb48d654.gif"},b2d9:function(t,e,a){t.exports=a.p+"img/imuReadings.a83fe111.png"},b383:function(t,e,a){},bc82:function(t,e,a){t.exports=a.p+"img/TinaHeadshot.a0db38cc.png"},cb9e:function(t,e,a){t.exports=a.p+"img/spaghetti.1cee0889.png"},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"mobile1 navbar-background"}),n("b-navbar",{staticClass:"fixed-top navbar",attrs:{toggleable:"lg",id:"navbar"}},[n("div",{staticClass:"logo-mobile mobile"},[n("b-navbar-brand",{staticClass:"nav-link",attrs:{to:{name:"home",hash:""}}},[n("img",{attrs:{src:a("e875")}})])],1),n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",{staticClass:"mr-auto",staticStyle:{"margin-left":"0"}},[n("b-nav-item",{staticClass:"tab desktop-router",attrs:{to:{name:"home",hash:""}}},[n("img",{staticStyle:{width:"45px",float:"left","margin-left":"5px"},attrs:{src:a("e875")}})])],1),n("b-navbar-nav",{staticClass:"mx-auto"},[n("b-nav-item",{staticClass:"tab",attrs:{to:{name:"why",hash:""}}},[t._v("Why SimuStep?")]),n("b-nav-item",{staticClass:"tab",attrs:{to:{name:"blog",hash:""}}},[t._v("Blog")]),n("b-nav-item",{staticClass:"tab",attrs:{to:{name:"aboutUs",hash:""}}},[t._v("About Us")]),n("b-nav-item",{staticClass:"tab",attrs:{to:{name:"contact",hash:""}}},[t._v("Contact")])],1),n("div",{staticClass:"desktop"},[n("b-navbar-nav",{staticClass:"ml-auto",staticStyle:{"margin-right":"0"}},[n("b-nav-item",{staticClass:"desktop-router hidden"},[n("div",{staticStyle:{width:"45px"}})])],1)],1)],1)],1),n("div",{attrs:{id:"main"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)},i=[],o=n["default"].extend({name:"home",components:{},mounted:function(){this.animateElements()},methods:{animateElements:function(){var t,e;function a(){t=document.querySelectorAll(".hidden"),e=window.innerHeight,n(),s()}function n(){window.addEventListener("scroll",s),window.addEventListener("resize",a)}function s(){for(var a=0;a<t.length;a++){var n=t[a],s=t[a].getBoundingClientRect().top;s-e<=0&&(n.classList.add("fade-in-element"),n.classList.remove("hidden"))}}window.addEventListener("scroll",s),window.addEventListener("resize",a),a(),s()}}}),r=o,l=(a("5c0b"),a("2877")),c=Object(l["a"])(r,s,i,!1,null,null,null),p=c.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home top-section margin-wrap",attrs:{id:"home",name:"home"}},[n("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[n("b-row",{staticClass:"top-space"},[n("b-col",{attrs:{lg:"5"}},[n("div",{staticClass:"headline pr-4",staticStyle:{position:"relative",top:"50%","-ms-transform":"translateY(-50%)","-webkit-transform":"translateY(-50%)",transform:"translateY(-50%)","text-align":"right",width:"100%"}},[n("h1",[t._v("SimuStep")]),n("h6",{staticStyle:{"font-weight":"400"}},[t._v("A step in the right direction.")])])]),n("b-col",{staticClass:"modelPic",attrs:{lg:"7"}},[n("img",{staticClass:"model",staticStyle:{"max-width":"80vw"},attrs:{src:a("d83e")}})])],1)],1)],1)},f=[],h=a("9ab4"),b=a("1b40"),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(h["a"])(e,t),e}(b["a"]),g=m,v=g,w=(a("21bb"),Object(l["a"])(v,u,f,!1,null,null,null)),y=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutUs section margin-wrap",attrs:{id:"aboutUs",name:"aboutUs"}},[n("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[n("b-row",[n("b-col",[n("b-row",{staticClass:"mt-5 mb-5"},[n("b-col",{staticStyle:{"text-align":"center"}},[n("h3",[t._v("About Us")])])],1)],1)],1),n("b-row",{staticClass:"pb-4 mb-4"},[n("b-col",{attrs:{lg:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("79d8")}})]),n("b-col",{staticStyle:{"align-items":"center",display:"flex"},attrs:{lg:"8"}},[n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/samantha-stephenson/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Sam Stephenson "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",[t._v("Electrical Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            Hi! I'm a 4B mechatronics engineering student at the University of\n            Waterloo. My primary role for our capstone project, SimuStep, is\n            to develop the electrical infrastructure to integrate our sensors\n            and provide electrical muscle stimulation. This includes sensor\n            selection, electrical prototyping, assembly, and testing.\n          ")]),n("p",{staticClass:"pb-0"},[t._v("\n            Outside of school, I love to stay active by running, rock\n            climbing, and boxing.\n          ")])])])],1),n("b-row",{staticClass:"pb-4 mb-4"},[n("b-col",{staticClass:"desktop content-left",staticStyle:{"align-items":"center",display:"flex"},attrs:{lg:"8",align:"left"}},[n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/andrew-drury/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Andrew Drury "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",[t._v("Software Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            I am leading the software development for SimuStep. This role\n            entails entails writing code to control the device. Additionally,\n            I am leading the design and development of\n            "),n("a",{staticStyle:{"font-family":"Prata"},attrs:{href:"https://simustep.com"}},[t._v("simustep.com")]),t._v(". This website is used to showoff SimuStep and provide updates on\n            the progress of the project.\n          ")]),n("p",{staticClass:"pb-0 mb-0"},[t._v("\n            I love photography, creating music, weightlifting, boxing, and\n            being in nature.\n          ")])])]),n("b-col",{attrs:{lg:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("403b")}})]),n("b-col",{staticClass:"mobile",attrs:{align:"left"}},[n("div",[n("a",{attrs:{align:"center",href:"https://www.linkedin.com/in/andrew-drury/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Andrew Drury "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",{attrs:{align:"center"}},[t._v("Software Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            I am leading the software development for SimuStep. As such, I am\n            responsible for writing software to control the device.\n            Additionally, I am leading the design and development of\n            "),n("a",{attrs:{href:"https://simustep.com"}},[t._v("simustep.com")]),t._v(". This website is\n            used to provide updates on the progress of the project.\n          ")]),n("p",{staticClass:"pb-0"},[t._v("\n            I love photography, creating music, weightlifting, boxing, and\n            being in nature.\n          ")])])])],1),n("b-row",{staticClass:"pb-4 mb-4"},[n("b-col",{attrs:{lg:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("d7d3")}})]),n("b-col",{staticStyle:{"align-items":"center",display:"flex"},attrs:{lg:"8"}},[n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/dominic-tung/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Dominic Tung "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",[t._v("Mechanical Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            I am primarily responsible for the mechanical aspects of SimuStep.\n            Apart from the design and development of the housing unit, my work\n            also involves researching current products to ensure SimuStep\n            meets expectations for size, comfortability, aesthetics, and ease\n            of use. In conjunction, I work with the electrical engineer to\n            identify and properly implement the electrical components within\n            the design.\n          ")]),n("p",{staticClass:"pb-0 mb-0"},[t._v("\n            In my free time, I enjoy playing table tennis, aquascaping, and\n            discovering new things.\n          ")])])])],1),n("b-row",{staticClass:"pb-4 mb-4"},[n("b-col",{staticClass:"desktop content-left",staticStyle:{"align-items":"center",display:"flex"},attrs:{lg:"8",align:"left"}},[n("div",[n("a",{attrs:{href:"https://www.linkedin.com/in/tinayuanli/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Yuan Li "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",[t._v("Software Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            I am working on developing the software to control the electrical\n            stimulation on the device.\n          ")]),n("p",{staticClass:"pb-0"},[t._v("\n            In my spare time, I enjoy watching shows, traveling and listening\n            to music.\n          ")])])]),n("b-col",{attrs:{lg:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("bc82")}})]),n("b-col",{staticClass:"mobile",attrs:{align:"left"}},[n("div",[n("a",{attrs:{align:"center",href:"https://www.linkedin.com/in/tinayuanli/",target:"_blank"}},[n("h5",{staticClass:"mb-1"},[t._v("\n              Yuan Li "),n("i",{staticClass:"fa fa-linkedin-square"})])]),n("h6",{attrs:{align:"center"}},[t._v("Software Engineer")]),n("p",{staticClass:"mb-0 pb-1"},[t._v("\n            I am working on developing the software to control the electrical\n            stimulation on the device.\n          ")]),n("p",{staticClass:"pb-0"},[t._v("\n            In my spare time, I enjoy watching shows, traveling and listening\n            to music.\n          ")])])])],1)],1)],1)},_=[],S=(a("0754"),{}),x=Object(l["a"])(S,C,_,!1,null,null,null),k=x.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog section margin-wrap",attrs:{id:"blog",name:"blog"}},[n("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[n("b-row",[n("b-col",[n("b-row",{staticClass:"my-5"},[n("b-col",{staticStyle:{"text-align":"center"}},[n("h3",[t._v("Blog")])])],1)],1)],1),n("b-row",{staticClass:"pt-4 pb-5 mb-4"},[n("b-col",{attrs:{align:"center"}},[n("a",{attrs:{href:"/#/blog/2"}},[n("b-row",{staticClass:"blogEntry"},[n("b-col",{staticClass:"blogPic",attrs:{lg:"4"}},[n("img",{staticClass:"model",attrs:{src:a("cb9e")}})]),n("b-col",{staticClass:"blogDescription",attrs:{lg:"8"}},[n("h6",{staticClass:"headline"},[t._v("Electrical Design Pt 1: Spaghetti")]),n("p",{staticClass:"description"},[t._v("\n                The electrical assembly for the prototype will be done in two\n                sections: first, the interface devices, sensors, and\n                controller...\n              ")]),n("p",{staticClass:"date"},[n("i",{staticClass:"fa fa-calendar"}),t._v(" January 20th, 2022\n              ")])])],1)],1),n("hr"),n("a",{attrs:{href:"/#/blog/1"}},[n("b-row",{staticClass:"blogEntry"},[n("b-col",{staticClass:"blogPic",attrs:{lg:"4"}},[n("img",{staticClass:"model",attrs:{src:a("7f9b")}})]),n("b-col",{staticClass:"blogDescription",attrs:{lg:"8"}},[n("h6",{staticClass:"headline"},[t._v("WELCOME!")]),n("p",{staticClass:"description"},[t._v("\n                Welcome to our blog! This will be the first in a series of\n                posts documenting the progress of SimuStep, our fourth...\n              ")]),n("p",{staticClass:"date"},[n("i",{staticClass:"fa fa-calendar"}),t._v(" January 15th, 2022\n              ")])])],1)],1)])],1)],1)],1)},j=[],O=n["default"].extend({name:"blog"}),T=O,P=(a("695d"),Object(l["a"])(T,E,j,!1,null,null,null)),I=P.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blogPost section margin-wrap",attrs:{id:"blogPost",name:"blogPost"}},[a("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[1==this.$route.params.id?a("Blog1"):t._e(),2==this.$route.params.id?a("Blog2"):t._e()],1)],1)},B=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"my-5"},[n("b-col",{staticStyle:{"text-align":"center"}},[n("a",{staticStyle:{"text-align":"left"},attrs:{href:"/#/blog"}},[n("h6",{staticStyle:{"font-weight":"300"}},[n("i",{staticClass:"fa fa-chevron-left",staticStyle:{"font-size":"16px","font-weight":"300"}}),t._v("\n        Back\n      ")])]),n("img",{staticClass:"topPic",attrs:{src:a("7f9b")}}),n("h1",{staticClass:"title"},[t._v("WELCOME!")]),n("b-row",{staticClass:"details"},[n("b-col",{staticStyle:{"text-align":"left"}},[n("p",{staticClass:"time"},[n("i",{staticClass:"fa fa-calendar"}),t._v(" January 15th, 2022")])]),n("b-col",{staticStyle:{"text-align":"right"}},[n("p",{staticClass:"date"},[n("i",{staticClass:"fa fa-clock-o"}),t._v(" 1 min")])])],1),n("p",[t._v("\n      Welcome to our blog! This will be the first in a series of posts\n      documenting the progress of SimuStep, our fourth year design project.\n      SimuStep is a neuroprosthetic assistive walking device for people\n      affected by foot drop. These posts will serve to provide updates on the\n      build and development of the project in real-time over the course of the\n      next 4 months. Stay tuned for more updates!\n    ")]),n("img",{staticClass:"blogPic",attrs:{src:a("a6df")}})],1)],1)},L=[],W={},$=Object(l["a"])(W,D,L,!1,null,null,null),M=$.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"my-5"},[n("b-col",{staticStyle:{"text-align":"center"}},[n("a",{staticStyle:{"text-align":"left"},attrs:{href:"/#/blog"}},[n("h6",{staticStyle:{"font-weight":"300"}},[n("i",{staticClass:"fa fa-chevron-left",staticStyle:{"font-size":"16px","font-weight":"300"}}),t._v("\n        Back\n      ")])]),n("img",{staticClass:"topPic",attrs:{src:a("cb9e")}}),n("h1",{staticClass:"title"},[t._v("Electrical Design Pt 1: Spaghetti")]),n("b-row",{staticClass:"details"},[n("b-col",{staticStyle:{"text-align":"left"}},[n("p",{staticClass:"time"},[n("i",{staticClass:"fa fa-calendar"}),t._v(" January 20th, 2022")])]),n("b-col",{staticStyle:{"text-align":"right"}},[n("p",{staticClass:"date"},[n("i",{staticClass:"fa fa-clock-o"}),t._v(" 2 min")])])],1),n("p",[t._v("\n      The electrical assembly for the prototype will be done in two sections:\n      first, the interface devices, sensors, and controller will be integrated\n      on a perfboard, so that initial programming can begin! The devices have\n      been mounted on the perfboard, and the connections were routed on the\n      back side using solid core wiring. The wires are colour-coded to make it\n      easier to read: Black is ground, Red is +3.3V, and blue and white are\n      used for controls.\n    ")]),n("img",{staticClass:"blogPic pr-2",attrs:{src:a("9bec")}}),n("img",{staticClass:"blogPic pl-2",attrs:{src:a("5f69")}}),n("p",[t._v("\n      For testing and programming purposes, a lot of the panel-mounted IO\n      devices, such as LEDs and the potentiometer, have been temporarily wired\n      to the perfboard (hence the spaghetti-like state of the prototype). The\n      electrical connections have been tested using the microcontroller to\n      make sure that all the peripherals can be communicated with.\n      Additionally, the battery circuit was completed, so the device can run\n      off of the battery and is controlled by a latching push button.\n    ")]),n("img",{staticClass:"blogPic",attrs:{src:a("b2d9")}}),n("p",[t._v("\n      The second part of the electrical prototyping will involve the\n      electrical stimulation. We discovered that our original plan, a VCCS,\n      will need a large external voltage source. This violates our\n      constraints, so a new plan involving reverse engineering of a home-use\n      TENS unit is underway. Stay tuned!\n    ")])],1)],1)},q=[],z={},H=Object(l["a"])(z,U,q,!1,null,null,null),J=H.exports,Y=n["default"].extend({name:"blogPost",components:{Blog1:M,Blog2:J}}),R=Y,F=(a("16aa"),Object(l["a"])(R,A,B,!1,null,null,null)),V=F.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact section margin-wrap",attrs:{id:"contact",name:"contact"}},[a("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-row",{staticClass:"mt-5"},[a("b-col",{staticStyle:{"text-align":"center"}},[a("h3",[t._v("Contact")])])],1)],1)],1),a("b-row",{staticClass:"pt-5 mt-4",staticStyle:{"text-align":"center"}},[a("b-col",[a("h5",{staticClass:"pb-5"},[t._v("We'd love to hear from you.")]),a("div",{staticStyle:{"text-align":"left",display:"inline-block"}},[a("a",{attrs:{href:"mailto:s5stephe@uwaterloo.ca"}},[a("p",{staticClass:"mb-0 pb-0"},[a("i",{staticClass:"fa fa-envelope"}),t._v("\n              s5stephe@uwaterloo.ca\n            ")])]),a("a",{attrs:{href:"https://github.com/AndrewDrury/SimuStep",target:"_blank"}},[a("p",{staticClass:"mb-0 pb-0"},[a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"24px"}}),t._v("\n              GitHub Repository\n            ")])]),a("p",{staticClass:"mb-0 pb-0"},[a("i",{staticClass:"fa fa-map-marker",staticStyle:{"font-size":"25px","padding-left":"3px","padding-right":"3px"}}),t._v("\n            University of Waterloo, Ontario\n          ")])])])],1)],1)],1)},N=[],K=(a("0673"),{}),Q=Object(l["a"])(K,G,N,!1,null,null,null),X=Q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"oops"},[t._v("\n  Oops, it looks like the page you're looking for doesn't exist.\n")])},tt=[],et=(a("6fb9"),{}),at=Object(l["a"])(et,Z,tt,!1,null,null,null),nt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why section margin-wrap",attrs:{id:"why",name:"why"}},[n("b-container",{staticClass:"wrap-mobile",attrs:{fluid:""}},[n("b-row",[n("b-col",[n("b-row",[n("b-col",{staticClass:"mt-5"},[n("p",{staticStyle:{"font-weight":"700"}},[t._v("\n              Take a step in the right direction with SimuStep: a\n              neuroprosthetic assistive walking device for people affected by\n              foot drop\n            ")]),n("h4",[t._v("What is foot drop?")]),n("p",[t._v("\n              Foot drop is a medical condition that impairs an individual's\n              ability to lift their foot. This can cause trips/falls and\n              development of gait problems. Foot drop is often a permanent\n              symptom of a more serious condition, such as ALS, Cerebral\n              Palsy, Multiple Sclerosis, Muscular Dystrophy, and many more.\n            ")]),n("h4",[t._v("Why SimuStep?")]),n("b-row",[n("b-col",{attrs:{lg:"6"}},[n("p",{staticStyle:{"margin-bottom":"0px","padding-bottom":"15px"}},[t._v("\n                  SimuStep was founded by four Mechatronics Engineering\n                  Students at the University of Waterloo to provide support\n                  for people with foot drop. Rather than designing another\n                  rigid, uncomfortable brace to prevent tripping, the goal of\n                  SimuStep is to provide active electrical muscle stimulation\n                  to help the patient walk by themselves and help rehabilitate\n                  the condition in the process. SimuStep will allow people\n                  affected by foot drop to walk on their own again and regain\n                  their independence, while prioritizing comfort,\n                  discreteness, and rehabilitation. You'll hardly even know\n                  its' there!\n                ")])]),n("b-col",{attrs:{lg:"6"}},[n("img",{staticClass:"model",staticStyle:{width:"100%"},attrs:{src:a("d83e")}})]),n("b-col",[n("p",[t._v("\n                  The team consists of Samantha Stephenscon, Andrew Drury,\n                  Dominic Tung, and Tina Li, who are all 4B Mechatronics\n                  Engineering students at the University of Waterloo. Learn\n                  more about our team in the\n                  "),n("a",{attrs:{href:"/#/aboutus"}},[t._v("About Us")]),t._v(" page, or follow along with\n                  our progress on our "),n("a",{attrs:{href:"/#/blog"}},[t._v("Blog")]),t._v("!\n                ")])])],1)],1)],1)],1)],1)],1)],1)},it=[],ot=(a("22f2"),{}),rt=Object(l["a"])(ot,st,it,!1,null,null,null),lt=rt.exports;n["default"].use(d["a"]);var ct=new d["a"]({base:"",routes:[{path:"/",name:"home",component:y},{path:"/blog",name:"blog",component:I},{path:"/blog/:id",name:"blogPost",component:V},{path:"/why",name:"why",component:lt},{path:"/aboutus",name:"aboutUs",component:k},{path:"/contact",name:"contact",component:X},{path:"/:catchAll(.*)",component:nt}],scrollBehavior:function(t){if(t.hash){var e=document.getElementById(t.hash.slice(1));if(e)return window.scrollTo({top:e.offsetTop,behavior:"smooth"})}return window.scrollTo({top:0,behavior:"smooth"})}}),pt=(a("21b6"),a("5f5b")),dt=(a("950e"),a("b383"),a("f13c")),ut=a.n(dt),ft=a("275b");n["default"].use(pt["a"]),n["default"].use(ut.a),n["default"].use(ft["a"]),n["default"].config.productionTip=!1,new n["default"]({router:ct,render:function(t){return t(p)}}).$mount("#app")},d7d3:function(t,e,a){t.exports=a.p+"img/DomHeadshot.021afb5e.jpg"},d838:function(t,e,a){},d83e:function(t,e,a){t.exports=a.p+"img/3Dmodel.f2207f01.png"},e332:function(t,e,a){},e875:function(t,e,a){t.exports=a.p+"img/logo.9171cdfe.png"},f0fd:function(t,e,a){}});
//# sourceMappingURL=app.e8373c62.js.map