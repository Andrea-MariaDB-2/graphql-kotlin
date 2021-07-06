(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2037],{3905:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=i,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||a;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7980:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>g});var t=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},p=void 0,l={unversionedId:"spring-server/spring-overview",id:"version-3.x.x/spring-server/spring-overview",isDocsHomePage:!1,title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-overview.md",sourceDirName:"spring-server",slug:"/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-overview.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},sidebar:"version-3.x.x/docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution"},next:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans"}},u=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Writing Schema Code",id:"writing-schema-code",children:[]},{value:"Default Routes",id:"default-routes",children:[]}],c={toc:u};function g(e){var r=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},c,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),(0,a.kt)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),(0,a.kt)("p",null,"This library is built on a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince both frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"},"asynchronous execution models"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",(0,a.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of https://start.spring.io/",src:n(3322).Z})),(0,a.kt)("p",null,"Once you get the sample application setup locally, you will need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),(0,a.kt)("p",null,"With Maven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")),(0,a.kt)("p",null,"With Gradle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"At a minimum, in order for ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),(0,a.kt)("p",null,"You can do this through the spring application config or by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'graphql:\n  packages:\n    - "com.your.package"\n')),(0,a.kt)("h2",{id:"writing-schema-code"},"Writing Schema Code"),(0,a.kt)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to implement\ncorresponding marker interface and they will be automatically picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n")),(0,a.kt)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n")),(0,a.kt)("h2",{id:"default-routes"},"Default Routes"),(0,a.kt)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}g.isMDXComponent=!0},3322:(e,r,n)=>{"use strict";n.d(r,{Z:()=>t});const t=n.p+"assets/images/spring-initializer-194b68b7c5cb948d85ee32581fbff955.png"}}]);