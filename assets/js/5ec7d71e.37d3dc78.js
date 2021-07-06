(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6140],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8654:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>f});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),s=["components"],a={id:"server-subscriptions",title:"Subscriptions"},l=void 0,p={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you.",source:"@site/docs/server/server-subscriptions.md",sourceDirName:"server",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"server-subscriptions",title:"Subscriptions"},sidebar:"defaultSidebar",previous:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"},next:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/server/spring-server/spring-beans"}},c=[],u={toc:c};function f(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",(0,o.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"subscriptions"))),(0,o.kt)("p",null,"Subscriptions require a more indepth knoweldge of how the specific server library handles protocols and streaming.\nSince we can only support ",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," in this common library, we can not provide any common logic for subscriptions.\nTherefore you will still need to implement the route and request handling for subscriptions separately if you are not using a provided server implementation."))}f.isMDXComponent=!0}}]);