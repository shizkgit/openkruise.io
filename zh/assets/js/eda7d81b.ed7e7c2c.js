"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4530],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return c}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(r),c=a,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(g,o(o({ref:e},p),{},{components:r})):n.createElement(g,o({ref:e},p))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2914:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={},u="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is Kruise Rollouts?",source:"@site/rollouts/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh/rollouts/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Wei-Xiang Sun",lastUpdatedAt:1678432762,formattedLastUpdatedAt:"2023/3/10",frontMatter:{},sidebar:"rollouts",next:{title:"Installation",permalink:"/zh/rollouts/installation"}},p={},m=[{value:"What is Kruise Rollouts?",id:"what-is-kruise-rollouts",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Demo Show",id:"demo-show",level:2},{value:"Kruise Rollouts vs. Other Components",id:"kruise-rollouts-vs-other-components",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:m};function c(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("h2",{id:"what-is-kruise-rollouts"},"What is Kruise Rollouts?"),(0,l.kt)("p",null,"Kruise Rollouts is a ",(0,l.kt)("strong",{parentName:"p"},"Bypass")," component that offers ",(0,l.kt)("strong",{parentName:"p"},"Advanced Progressive Delivery Features"),".\nIts support for canary, multi-batch, and A/B testing delivery modes can be helpful in achieving smooth and controlled rollouts of changes to your application, while its compatibility with Gateway API and various Ingress implementations makes it easier to integrate with your existing infrastructure. Overall, Kruise Rollouts is a valuable tool for Kubernetes users looking to optimize their deployment processes!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"kruise-rollout-intro",src:r(8301).Z,width:"813",height:"532"})),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"More release strategies")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Multi-batch update strategy for Deployment, CloneSet, StatefulSet, Advanced StatefulSet."),(0,l.kt)("li",{parentName:"ul"},"Canary update strategy for Deployment."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"More traffic routing management strategies")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Traffic fine-grained, weighted traffic shifting when updating workloads."),(0,l.kt)("li",{parentName:"ul"},"Traffic A/B Testing, traffic shifting based on HTTP Header&Cookie."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"More Traffic Protocol Supports")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ingress controller integration: NGINX, ALB, Higress."),(0,l.kt)("li",{parentName:"ul"},"Service Mesh integration via GatewayAPI."),(0,l.kt)("li",{parentName:"ul"},"Pluggable Lua scripts for easily extending to other Kubernetes traffic protocols (even CRD).")))),(0,l.kt)("h2",{id:"demo-show"},"Demo Show"),(0,l.kt)("p",null,"There is a demo of multi-batch update strategy for Deployment."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://asciinema.org/a/Y2NKlhg2hfqsmzVYqiTypiULC"},(0,l.kt)("img",{parentName:"a",src:"https://asciinema.org/a/Y2NKlhg2hfqsmzVYqiTypiULC.svg",alt:"asciicast"}))),(0,l.kt)("h2",{id:"kruise-rollouts-vs-other-components"},"Kruise Rollouts vs. Other Components"),(0,l.kt)("p",null,"Kruise Rollouts vs. ",(0,l.kt)("a",{parentName:"p",href:"https://argoproj.github.io/rollouts/"},"Argo Rollout")," and ",(0,l.kt)("a",{parentName:"p",href:"https://fluxcd.io/flagger/"},"Flux Flagger"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Kruise Rollouts")),(0,l.kt)("th",{parentName:"tr",align:null},"Argo Rollouts"),(0,l.kt)("th",{parentName:"tr",align:null},"Flux Flagger"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Concept"),(0,l.kt)("td",{parentName:"tr",align:null},"Enhance your existing workloads"),(0,l.kt)("td",{parentName:"tr",align:null},"Replace your workloads"),(0,l.kt)("td",{parentName:"tr",align:null},"manage your workloads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Architecture"),(0,l.kt)("td",{parentName:"tr",align:null},"Bypass"),(0,l.kt)("td",{parentName:"tr",align:null},"A new workload type"),(0,l.kt)("td",{parentName:"tr",align:null},"Bypass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plug and Play, Hot-Swapping"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Release Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Batch, Canary, A/B Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Batch, Canary, Blue-Green, A/B Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Canary, Blue-Green, A/B Testing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Workload Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment,StatefulSet,CloneSet,Advaned StatefulSet,DaemonSet(WIP)"),(0,l.kt)("td",{parentName:"tr",align:null},"Agro-Rollout"),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment. DaemonSet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Traffic Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress, GatewayAPI, CRD (Need Lua Script)"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress, GatewayAPI, APISIX, Traefik, SMI and more"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress, GatewayAPI, APISIX, Traefik, SMI and more")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Migration Costs"),(0,l.kt)("td",{parentName:"tr",align:null},"No need migrate your workloads and pods"),(0,l.kt)("td",{parentName:"tr",align:null},"Must migrate your workloads and pods"),(0,l.kt)("td",{parentName:"tr",align:null},"Must migrate your pods")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HPA compatible"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"Here are some recommended next steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/zh/rollouts/installation"},"Install"))," Kruise Rollout.")))}c.isMDXComponent=!0},8301:function(t,e,r){e.Z=r.p+"assets/images/intro-b644231356f16367db5486c77bb99a02.png"}}]);