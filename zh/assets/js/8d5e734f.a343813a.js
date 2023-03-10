"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7852],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2852:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},s="Canary Release",u={unversionedId:"user-manuals/strategy-canary-update",id:"user-manuals/strategy-canary-update",title:"Canary Release",description:"Canary Release Process",source:"@site/rollouts/user-manuals/strategy-canary-update.md",sourceDirName:"user-manuals",slug:"/user-manuals/strategy-canary-update",permalink:"/zh/rollouts/user-manuals/strategy-canary-update",draft:!1,tags:[],version:"current",lastUpdatedBy:"Wei-Xiang Sun",lastUpdatedAt:1678432762,formattedLastUpdatedAt:"2023/3/10",frontMatter:{},sidebar:"rollouts",previous:{title:"Basic Usage Guide",permalink:"/zh/rollouts/user-manuals/basic-usage"},next:{title:"Multi-Batch Release",permalink:"/zh/rollouts/user-manuals/strategy-multi-batch-update"}},c={},p=[{value:"Canary Release Process",id:"canary-release-process",level:2},{value:"Recommended Configuration",id:"recommended-configuration",level:2},{value:"Behavior Explanation",id:"behavior-explanation",level:3}],d={toc:p};function m(e){var n=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"canary-release"},"Canary Release"),(0,o.kt)("h2",{id:"canary-release-process"},"Canary Release Process"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ab",src:t(5460).Z,width:"4643",height:"1583"})),(0,o.kt)("h2",{id:"recommended-configuration"},"Recommended Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Canary Strategy only works on Deployment.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  annotations:\n    rollouts.kruise.io/rolling-style: canary\nspec:\n  objectRef:\n    workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: workload-demo\n  strategy:\n    canary:\n      steps:\n      - weight: 20\n  trafficRoutings:\n  - service: service-demo\n    ingress:\n      classType: nginx\n      name: ingress-demo\n")),(0,o.kt)("h3",{id:"behavior-explanation"},"Behavior Explanation"),(0,o.kt)("p",null,"When you apply a new revision for ",(0,o.kt)("inlineCode",{parentName:"p"},"workload-demo"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The workload ",(0,o.kt)("inlineCode",{parentName:"li"},"workload-demo")," will be paused, and no Pod is updated;"),(0,o.kt)("li",{parentName:"ul"},'A new canary Deployment will be created, and its replicas is "20%" of ',(0,o.kt)("inlineCode",{parentName:"li"},"workload-demo")," (There will be ",(0,o.kt)("inlineCode",{parentName:"li"},"120%")," Pods totally);"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"20%")," traffic will be guided to the new canary Deployment Pods.")),(0,o.kt)("p",null,"When you thought the verification of canary is ok, and confirmed to next step:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The workload ",(0,o.kt)("inlineCode",{parentName:"li"},"workload-demo")," will be upgraded using native rolling update strategy;"),(0,o.kt)("li",{parentName:"ul"},"The traffic will be restored to native load balance strategy."),(0,o.kt)("li",{parentName:"ul"},"The canary Deployment and Pods will be deleted.")))}m.isMDXComponent=!0},5460:function(e,n,t){n.Z=t.p+"assets/images/canary-cd02349ab581eac50c75ad0a3a1edc35.jpg"}}]);