(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2090],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=d(r),u=a,m=f["".concat(p,".").concat(u)]||f[u]||s[u]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5048:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>d,toc:()=>l,default:()=>f});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={id:"federation-tracing",title:"Federation Tracing"},p=void 0,d={unversionedId:"schema-generator/federation/federation-tracing",id:"version-4.x.x/schema-generator/federation/federation-tracing",isDocsHomePage:!1,title:"Federation Tracing",description:"Support for Apollo Federation tracing is added to the graphql-kotlin-federation package by using the apollographql/federation-jvm library.",source:"@site/versioned_docs/version-4.x.x/schema-generator/federation/federation-tracing.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federation-tracing",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federation-tracing",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/federation/federation-tracing.md",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"federation-tracing",title:"Federation Tracing"},sidebar:"version-4.x.x/defaultSidebar",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/type-resolution"}},l=[{value:"<code>FederatedGraphQLContext</code>",id:"federatedgraphqlcontext",children:[]}],s={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Support for Apollo Federation tracing is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," package by using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/federation-jvm"},"apollographql/federation-jvm")," library."),(0,o.kt)("h3",{id:"federatedgraphqlcontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"FederatedGraphQLContext")),(0,o.kt)("p",null,"To best support tracing, the context must implement a specific method to get the HTTP headers from the request.\nThis is done by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface instead of just the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."))}f.isMDXComponent=!0}}]);