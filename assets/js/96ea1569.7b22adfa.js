(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6056],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,y=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5559:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>d,toc:()=>l,default:()=>u});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},p=void 0,d={unversionedId:"federated/type-resolution",id:"version-3.x.x/federated/type-resolution",isDocsHomePage:!1,title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-3.x.x/federated/type-resolution.md",sourceDirName:"federated",slug:"/federated/type-resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/type-resolution.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},sidebar:"version-3.x.x/docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"}},l=[{value:"<code>_entities</code> query",id:"_entities-query",children:[{value:"Federated Type Resolver",id:"federated-type-resolver",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),(0,a.kt)("h2",{id:"_entities-query"},(0,a.kt)("inlineCode",{parentName:"h2"},"_entities")," query"),(0,a.kt)("p",null,"Federated GraphQL server provides custom ",(0,a.kt)("inlineCode",{parentName:"p"},"_entities")," query that allow retrieving any of the federated extended types.\n",(0,a.kt)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,a.kt)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,a.kt)("inlineCode",{parentName:"p"},"@key")," directive as well as target ",(0,a.kt)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",(0,a.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@provides")," directives then those referenced fields should also be specified in\nthe target representation object."),(0,a.kt)("p",null,">"," NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the\n",">"," gateway clients."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n\n")),(0,a.kt)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),(0,a.kt)("p",null,"In order to simplify the integrations, ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides default ",(0,a.kt)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nrelies on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeRegistry.kt"},"FederatedTypeRegistry"),"\nto retrieve\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve target object. When configuring the federated schema generator hooks you have to explicitly\nprovide those resolver mappings to the configuration."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or NULL if entity cannot be resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()?.toIntOrNull()\n        // instantiate product using id\n    }\n}\n// federated type registry provides mapping between target __typename and the corresponding type resolver\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval schema = toFederatedSchema(config)\n\n')))}u.isMDXComponent=!0}}]);