"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[31724],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},c=void 0,l={unversionedId:"pitch",id:"version-7.x/pitch",title:"Pitch & anti-pitch",description:'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please submit a pull request if you believe we have omitted important information!',source:"@site/versioned_docs/version-7.x/pitch.md",sourceDirName:".",slug:"/pitch",permalink:"/docs/7.x/pitch",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/pitch.md",tags:[],version:"7.x",frontMatter:{id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},sidebar:"version-7.x/docs",previous:{title:"More Resources",permalink:"/docs/7.x/more-resources"},next:{title:"Apps using React Navigation",permalink:"/docs/7.x/used-by"}},u={},h=[{value:"Pitch",id:"pitch",level:2},{value:"Anti-pitch",id:"anti-pitch",level:2}],p={toc:h},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io"},"submit a pull request")," if you believe we have omitted important information!"),(0,o.kt)("h2",{id:"pitch"},"Pitch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Navigation doesn't include any native code in the library itself, but we use many native libraries such as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-screens"},"Screens"),", ",(0,o.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-reanimated/"},"Reanimated"),", ",(0,o.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-gesture-handler/"},"Gesture Handler")," etc. to implement performant animations and gestures. Depending on the navigator, many UI components are written in JavaScript on top of React Native primitives. This has a lot of benefits:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Easy OTA updates"),(0,o.kt)("li",{parentName:"ul"},"Debuggable"),(0,o.kt)("li",{parentName:"ul"},"Customizable"))),(0,o.kt)("li",{parentName:"ul"},"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code. In React Navigation, we provide navigators written fully with JavaScript (e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/stack-navigator"},"Stack Navigator"),") and navigators implemented on top of platform navigation primitives (e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/native-stack-navigator"},"Native Stack Navigator"),"). This lets you pick the navigators suitable for your use case, depending on whether you want native platform behavior or full customizability."),(0,o.kt)("li",{parentName:"ul"},"It's possible to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app.")),(0,o.kt)("h2",{id:"anti-pitch"},"Anti-pitch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improvements may require breaking changes. We are working to make ",(0,o.kt)("a",{parentName:"li",href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible"},'"easy things easy and hard things possible"')," and this may require us to change the API at times."),(0,o.kt)("li",{parentName:"ul"},"Some navigators don't directly use the native navigation APIs on iOS and Android; rather, they use the lowest level pieces and then re-creates some subset of the APIs on top. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you need the exact platform behavior, you can choose to use the navigators that use native platform primitives (e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/native-stack-navigator"},"Native Stack Navigator"),"), or use a different navigation library which provides fully native navigation APIs (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"React Native Navigation"),")."))),(0,o.kt)("li",{parentName:"ul"},"There are other limitations which you may want to consider, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/limitations"},"Limitations")," for more details.")))}m.isMDXComponent=!0}}]);