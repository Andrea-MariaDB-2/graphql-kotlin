(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9798],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1950:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={id:"release-proc",title:"Releasing a new version",original_id:"release-proc"},s=void 0,c={unversionedId:"contributors/release-proc",id:"version-3.x.x/contributors/release-proc",isDocsHomePage:!1,title:"Releasing a new version",description:"In order to release a new version we need to draft a new release",source:"@site/versioned_docs/version-3.x.x/contributors/release-proc.md",sourceDirName:"contributors",slug:"/contributors/release-proc",permalink:"/graphql-kotlin/docs/3.x.x/contributors/release-proc",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/contributors/release-proc.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625610831,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"release-proc",title:"Releasing a new version",original_id:"release-proc"},sidebar:"version-3.x.x/docs",previous:{title:"Maven Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"}},p=[{value:"Release requirements",id:"release-requirements",children:[]}],u={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/releases"},"release a new version")," we need to draft a new release\nand tag the commit. Releases are following ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," and specify major, minor and patch version."),(0,o.kt)("p",null,"Once release is published it will trigger corresponding ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/.github/workflows/release.yml"},"Github Action"),"\nbased on the published release event. Release workflow will then proceed to build and publish all library artifacts to ",(0,o.kt)("a",{parentName:"p",href:"https://central.sonatype.org/"},"Maven Central"),"."),(0,o.kt)("h3",{id:"release-requirements"},"Release requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tag should specify newly released library version that is following ",(0,o.kt)("a",{parentName:"li",href:"https://semver.org/"},"semantic versioning")),(0,o.kt)("li",{parentName:"ul"},"tag and release name should match"),(0,o.kt)("li",{parentName:"ul"},"release should contain the information about all the change sets that were included in the given release. We are using ",(0,o.kt)("inlineCode",{parentName:"li"},"release-drafter")," to help automatically\ncollect this information and generate automatic release notes.")))}d.isMDXComponent=!0}}]);