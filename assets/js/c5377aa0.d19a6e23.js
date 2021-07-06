(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6812],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(r),h=o,d=g["".concat(l,".").concat(h)]||g[h]||u[h]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4589:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>g});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],p={id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},l=void 0,s={unversionedId:"spring-server/spring-graphql-context",id:"version-3.x.x/spring-server/spring-graphql-context",isDocsHomePage:!1,title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a simple mechanism to build a GraphQL context per query execution through",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",sourceDirName:"spring-server",slug:"/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},sidebar:"version-3.x.x/docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema"},next:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"}},c=[],u={toc:c};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a simple mechanism to build a ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"},"GraphQL context")," per query execution through\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt"},"GraphQLContextFactory"),".\nOnce a context factory bean is available, it will then be used in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt"},"ContextWebFilter"),"\nto populate the GraphQL context based on the incoming request and make it available during query execution."),(0,a.kt)("p",null,"For example if we define our custom context as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyGraphQLContext(val myCustomValue: String) : GraphQLContext\n")),(0,a.kt)("p",null,"We can generate the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," bean:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass MyGraphQLContextFactory: GraphQLContextFactory<MyGraphQLContext> {\n    override suspend fun generateContext(\n        request: ServerHttpRequest,\n        response: ServerHttpResponse\n    ): MyGraphQLContext = MyGraphQLContext(\n        myCustomValue = request.headers.getFirst("MyHeader") ?: "defaultValue"\n    )\n}\n')),(0,a.kt)("p",null,"Once your application is configured to build your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"MyGraphQLContext"),", we can then specify it as function argument but it will not be included in the schema.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments."),(0,a.kt)("p",null,"For more details see the ",(0,a.kt)("a",{parentName:"p",href:"../schema-generator/execution/contextual-data"},"Contextual Data documentation"),"."))}g.isMDXComponent=!0}}]);