"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2703],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,N=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2022:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={title:"\u5b89\u88c5"},o=void 0,p={unversionedId:"installation",id:"version-v1.4/installation",title:"\u5b89\u88c5",description:"\u4ece v1.0.0 (alpha/beta) \u5f00\u59cb\uff0cOpenKruise \u8981\u6c42\u5728 Kubernetes >= 1.16 \u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/docs/installation",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/installation.md",tags:[],version:"v1.4",lastUpdatedBy:"berg",lastUpdatedAt:1681091629,formattedLastUpdatedAt:"2023/4/10",frontMatter:{title:"\u5b89\u88c5"},sidebar:"docs",previous:{title:"OpenKruise \u7b80\u4ecb",permalink:"/zh/docs/"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/core-concepts/architecture"}},m={},k=[{value:"\u901a\u8fc7 helm \u5b89\u88c5",id:"\u901a\u8fc7-helm-\u5b89\u88c5",level:2},{value:"\u901a\u8fc7 helm \u5347\u7ea7",id:"\u901a\u8fc7-helm-\u5347\u7ea7",level:2},{value:"\u53ef\u9009\u7684\uff1a\u624b\u5de5\u4e0b\u8f7d charts \u5305",id:"\u53ef\u9009\u7684\u624b\u5de5\u4e0b\u8f7d-charts-\u5305",level:2},{value:"\u53ef\u9009\u9879",id:"\u53ef\u9009\u9879",level:2},{value:"\u53ef\u9009: chart \u5b89\u88c5\u53c2\u6570",id:"\u53ef\u9009-chart-\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u53ef\u9009: feature-gate",id:"\u53ef\u9009-feature-gate",level:3},{value:"\u53ef\u9009: \u4e2d\u56fd\u672c\u5730\u955c\u50cf",id:"\u53ef\u9009-\u4e2d\u56fd\u672c\u5730\u955c\u50cf",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"K3s \u5b89\u88c5\u53c2\u6570",id:"k3s-\u5b89\u88c5\u53c2\u6570",level:3},{value:"AWS EKS \u5b89\u88c5\u53c2\u6570",id:"aws-eks-\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2},{value:"Kruise State Metrics",id:"kruise-state-metrics",level:2}],u={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ece v1.0.0 (alpha/beta) \u5f00\u59cb\uff0cOpenKruise \u8981\u6c42\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes >= 1.16")," \u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u901a\u8fc7-helm-\u5b89\u88c5"},"\u901a\u8fc7 helm \u5b89\u88c5"),(0,l.kt)("p",null,"\u5efa\u8bae\u91c7\u7528 helm v3.5+ \u6765\u5b89\u88c5 Kruise\uff0chelm \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u884c\u5de5\u5177\u53ef\u4ee5\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"\u8fd9\u91cc")," \u83b7\u53d6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --version 1.4.0\n")),(0,l.kt)("h2",{id:"\u901a\u8fc7-helm-\u5347\u7ea7"},"\u901a\u8fc7 helm \u5347\u7ea7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade to the latest version.\n$ helm upgrade kruise openkruise/kruise --version 1.4.0 [--force]\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5347\u7ea7\u4e4b\u524d\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u5fc5\u987b")," \u5148\u9605\u8bfb ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"Change Log")," \uff0c\u786e\u4fdd\u4f60\u5df2\u7ecf\u4e86\u89e3\u65b0\u7248\u672c\u7684\u4e0d\u517c\u5bb9\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u8981\u91cd\u7f6e\u4e4b\u524d\u65e7\u7248\u672c\u4e0a\u7528\u7684\u53c2\u6570\u6216\u8005\u914d\u7f6e\u4e00\u4e9b\u65b0\u53c2\u6570\uff0c\u5efa\u8bae\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")," \u547d\u4ee4\u91cc\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset-values"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5728\u5c06 Kruise \u4ece 0.x \u5347\u7ea7\u5230 1.x \u7248\u672c\uff0c\u4f60\u9700\u8981\u4e3a upgrade \u547d\u4ee4\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"--force")," \u53c2\u6570\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u8fd9\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("h2",{id:"\u53ef\u9009\u7684\u624b\u5de5\u4e0b\u8f7d-charts-\u5305"},"\u53ef\u9009\u7684\uff1a\u624b\u5de5\u4e0b\u8f7d charts \u5305"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u65e0\u6cd5\u8fde\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://openkruise.github.io/charts/"),"\uff0c\u53ef\u4ee5\u5148\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/charts/releases"},"\u8fd9\u91cc"),"\u624b\u5de5\u4e0b\u8f7d chart \u5305\uff0c\u518d\u7528\u5b83\u5b89\u88c5\u6216\u66f4\u65b0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade kruise /PATH/TO/CHART\n")),(0,l.kt)("h2",{id:"\u53ef\u9009\u9879"},"\u53ef\u9009\u9879"),(0,l.kt)("p",null,"\u6ce8\u610f\u76f4\u63a5\u5b89\u88c5 chart \u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 template values\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u96c6\u7fa4\u60c5\u51b5\u6307\u5b9a\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\uff0c\u6bd4\u5982\u4fee\u6539 resources \u9650\u5236\u6216\u8005\u914d\u7f6e feature-gates\u3002"),(0,l.kt)("h3",{id:"\u53ef\u9009-chart-\u5b89\u88c5\u53c2\u6570"},"\u53ef\u9009: chart \u5b89\u88c5\u53c2\u6570"),(0,l.kt)("p",null,"\u4e0b\u8868\u5c55\u793a\u4e86 chart \u6240\u6709\u53ef\u914d\u7f6e\u7684\u53c2\u6570\u548c\u5b83\u4eec\u7684\u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u914d\u7f6e\u7684 feature gates \u53c2\u6570\uff0c\u7a7a\u8868\u793a\u6309\u9ed8\u8ba4\u5f00\u5173\u5904\u7406"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise \u5b89\u88c5\u5230\u7684 namespace\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u4fee\u6539"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u521b\u5efa\u4e0a\u8ff0 namespace\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u4fee\u6539\uff0c\u9664\u975e\u6307\u5b9a\u5b89\u88c5\u5230\u5df2\u6709\u7684 ns \u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u7684\u671f\u671b\u526f\u672c\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager/kruise-daemon \u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager/kruise-daemon \u955c\u50cf\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.2.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u7684 limit CPU \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u7684 limit memory \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"512Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u7684 request CPU \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u7684 request memory \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,l.kt)("td",{parentName:"tr",align:null},"metrics \u670d\u52a1\u7684\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"webhook \u670d\u52a1\u7684\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u90e8\u7f72\u7684 node affinity \u4eb2\u548c\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u90e8\u7f72\u7684 node selector \u4eb2\u548c\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u90e8\u7f72\u7684 tolerations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.port")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u7684 metrics/healthz \u670d\u52a1\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10221"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u7684 limit CPU \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u7684 limit memory \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"128Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u7684 request CPU \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u7684 request memory \u8d44\u6e90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.affinity")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-daemon \u90e8\u7f72\u7684 affinity \u4eb2\u548c\u6027 (\u53ef\u4ee5\u6392\u9664\u4e00\u4e9b node \u4e0d\u90e8\u7f72 daemon)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.socketLocation")),(0,l.kt)("td",{parentName:"tr",align:null},"Node \u8282\u70b9\u4e0a CRI socket \u6587\u4ef6\u6240\u5728\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/run"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.socketFile")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"td"},"socketLocation")," \u76ee\u5f55\u4e0b\u7684 socket \u6587\u4ef6\u540d (\u5982\u679c\u4f60\u4f7f\u7528\u7684 CRI \u7c7b\u578b\u4e0d\u662f containerd/docker/pouch/cri-o)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,l.kt)("td",{parentName:"tr",align:null},"Pod webhook \u7684\u5931\u8d25\u7b56\u7565"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709 Kruise webhook \u7684\u8c03\u7528\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5b89\u88c5 Kruise CRD (\u5982\u4f55\u5173\u95ed\u5219 chart \u4e0d\u4f1a\u5b89\u88c5\u4efb\u4f55 CRD)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager \u4e2d informer \u7684 resync \u5468\u671f\uff0c\u9ed8\u8ba4\u4e0d\u505a resync"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-manager pod \u662f\u5426\u91c7\u7528 hostnetwork \u7f51\u7edc"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise \u955c\u50cf\u7528\u7684 imagePullSecrets \u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableKubeCacheMutationDetector")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f KUBE_CACHE_MUTATION_DETECTOR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," \u53c2\u6570\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u547d\u4ee4\u4e2d\u751f\u6548\u3002"),(0,l.kt)("h3",{id:"\u53ef\u9009-feature-gate"},"\u53ef\u9009: feature-gate"),(0,l.kt)("p",null,"Feature-gate \u63a7\u5236\u4e86 Kruise \u4e2d\u4e00\u4e9b\u6709\u5f71\u54cd\u6027\u7684\u529f\u80fd\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Side effect (if closed)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u5bf9\u4e8e Pod ",(0,l.kt)("strong",{parentName:"td"},"\u521b\u5efa")," \u7684 webhook (\u4e0d\u5efa\u8bae\u5173\u95ed)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarSet/KruisePodReadinessGate \u4e0d\u53ef\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruiseDaemon")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," DaemonSet (\u4e0d\u5efa\u8bae\u5173\u95ed)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u9884\u70ed/\u5bb9\u5668\u91cd\u542f \u4e0d\u53ef\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DaemonWatchingPod")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," \u4f1a watch \u4e0e\u81ea\u5df1\u540c\u8282\u70b9\u7684 pod \uff08\u4e0d\u5efa\u8bae\u5173\u95ed\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c imageID \u7684\u539f\u5730\u5347\u7ea7\uff0c\u4ee5\u53ca\u652f\u6301 env from labels/annotation \u539f\u5730\u5347\u7ea7 \u4e0d\u53ef\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetShortHash")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 CloneSet controller \u53ea\u5728 pod label \u4e2d\u8bbe\u7f6e\u77ed hash \u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet \u540d\u5b57\u4e0d\u80fd\u8d85\u8fc7 54 \u4e2a\u5b57\u7b26\uff08\u9ed8\u8ba4\u884c\u4e3a\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruisePodReadinessGate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Kruise webhook \u5c06 'KruisePodReady' readiness-gate \u5728\u6240\u6709 Pod \u521b\u5efa\u65f6\u6ce8\u5165"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u4f1a\u6ce8\u5165\u5230 Kruise workloads \u521b\u5efa\u7684 Pod \u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PreDownloadImageForInPlaceUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 CloneSet \u81ea\u52a8\u4e3a\u539f\u5730\u5347\u7ea7\u7684\u8fc7\u7a0b\u521b\u5efa ImagePullJob \u6765\u9884\u70ed\u955c\u50cf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u5730\u5347\u7ea7\u65e0\u955c\u50cf\u63d0\u524d\u9884\u70ed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetPartitionRollback")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u5982\u679c partition \u88ab\u8c03\u5927\uff0c CloneSet controller \u4f1a\u56de\u6eda Pod \u5230 currentRevision \u8001\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet \u53ea\u4f1a\u6b63\u5411\u53d1\u5e03 Pod \u5230 updateRevision")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResourcesDeletionProtection")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u5220\u9664\u9632\u62a4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u5220\u9664\u65e0\u4fdd\u62a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TemplateNoDefaults")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53d6\u6d88\u5bf9 workload \u4e2d pod/pvc template \u7684\u9ed8\u8ba4\u503c\u6ce8\u5165"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Should not close this feature if it has open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetDeleteGate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 PodUnavailableBudget \u4fdd\u62a4 pod \u5220\u9664\u3001\u9a71\u9010"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u9632\u62a4 pod \u5220\u9664\u3001\u9a71\u9010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetUpdateGate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 PodUnavailableBudget \u4fdd\u62a4 pod \u539f\u5730\u5347\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u9632\u62a4 pod \u539f\u5730\u5347\u7ea7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WorkloadSpread")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 WorkloadSpread \u7ba1\u7406\u5e94\u7528\u591a\u5206\u533a\u5f39\u6027\u4e0e\u62d3\u6251\u90e8\u7f72"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301 WorkloadSpread")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InPlaceUpdateEnvFromMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Kruise \u539f\u5730\u5347\u7ea7\u5bb9\u5668\u5f53\u5b83\u5b58\u5728 env from \u7684 labels/annotations \u53d1\u751f\u4e86\u53d8\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u4e2d\u53ea\u6709 image \u80fd\u591f\u539f\u5730\u5347\u7ea7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StatefulSetAutoDeletePVC")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 StatefulSet \u81ea\u52a8\u5220\u9664\u5b83\u6240\u521b\u5efa\u7684 PVC"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"StatefulSet \u4e0d\u4f1a\u6e05\u7406 PVC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PreDownloadImageForDaemonSetUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 DaemonSet \u81ea\u52a8\u4e3a\u539f\u5730\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u521b\u5efa ImagePullJob \u6765\u955c\u50cf\u9884\u70ed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u5730\u5347\u7ea7\u65e0\u955c\u50cf\u63d0\u524d\u9884\u70ed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodProbeMarkerGate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 PodProbeMarker \u80fd\u529b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"PodProbeMarker \u5173\u95ed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SidecarSetPatchPodMetadataDefaultsAllowed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 SidecarSet Patch \u4efb\u610f Annotations \u5230 Pob Object\uff0c\u4e0d\u518d\u8fdb\u884c\u767d\u540d\u5355\u6821\u9a8c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Annotations\u4e0d\u5141\u8bb8\u968f\u610fPatch\uff0c\u9700\u8981\u901a\u8fc7 SidecarSet_PatchPodMetadata_WhiteList \u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SidecarTerminator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 SidecarTerminator \u80fd\u529b\uff0c\u5728 Job \u573a\u666f\u4e2d\u5f53\u4e3b\u5bb9\u5668\u9000\u51fa\u540e\uff0c\u80fd\u591f\u505c\u6b62 Sidecar \u5bb9\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarTerminator \u4e0d\u53ef\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetEventHandlerOptimization")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6027\u80fd\u4f18\u5316\uff0c\u51cf\u5c11 Pod Update \u89e6\u53d1\u7684\u65e0\u6548 Reconcile \u903b\u8f91"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSetEventHandlerOptimization \u4e0d\u542f\u7528")))),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8981\u914d\u7f6e feature-gate\uff0c\u53ea\u8981\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u914d\u7f6e\u53c2\u6570\u5373\u53ef\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="ResourcesDeletionProtection=true\\,PreDownloadImageForInPlaceUpdate=true"\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u6253\u5f00\u6240\u6709 feature-gate \u529f\u80fd\uff0c\u914d\u7f6e\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"\u3002"),(0,l.kt)("h3",{id:"\u53ef\u9009-\u4e2d\u56fd\u672c\u5730\u955c\u50cf"},"\u53ef\u9009: \u4e2d\u56fd\u672c\u5730\u955c\u50cf"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e2d\u56fd\u3001\u5e76\u4e14\u5f88\u96be\u4ece\u5b98\u65b9 DockerHub \u4e0a\u62c9\u955c\u50cf\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u6258\u7ba1\u5728\u963f\u91cc\u4e91\u4e0a\u7684\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise https://... --set  manager.image.repository=openkruise-registry.cn-shanghai.cr.aliyuncs.com/openkruise/kruise-manager\n")),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("h3",{id:"k3s-\u5b89\u88c5\u53c2\u6570"},"K3s \u5b89\u88c5\u53c2\u6570"),(0,l.kt)("p",null,"\u901a\u5e38\u6765\u8bf4 K3s \u6709\u7740\u4e0e\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/run")," \u4e0d\u540c\u7684 runtime socket \u8def\u5f84\u3002\u6240\u4ee5\u4f60\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"daemon.socketLocation")," \u53c2\u6570\u8bbe\u7f6e\u4e3a\u4f60\u7684 K3s \u8282\u70b9\u4e0a\u771f\u5b9e\u7684\u8def\u5f84\uff08\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"/run/k3s")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/run/k3s/"),"\uff09\u3002"),(0,l.kt)("h3",{id:"aws-eks-\u5b89\u88c5\u53c2\u6570"},"AWS EKS \u5b89\u88c5\u53c2\u6570"),(0,l.kt)("p",null,"\u5f53\u5728 EKS \u4e0a\u4f7f\u7528\u81ea\u5b9a\u4e49 CNI \u63d2\u4ef6\uff08\u5982 Weave \u6216 Calico\uff09\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b webhook \u65e0\u6cd5\u88ab\u8fde\u63a5\u5230\u3002\u8fd9\u662f\u56e0\u4e3a\u5728 EKS \u4e0a control plane \u4e0d\u80fd\u88ab\u914d\u7f6e\u4e3a\u8fd0\u884c\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 CNI \u4e0a\uff0c\u6240\u4ee5 control plane \u548c worker \u8282\u70b9\u7684 CNI \u662f\u4e0d\u540c\u7684\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u7ed9 webhook \u914d\u7f6e host network \u7f51\u7edc\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728 helm install/upgrade \u7684\u65f6\u5019\u52a0\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true")," \u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5378\u8f7d\u4f1a\u5bfc\u81f4\u6240\u6709 Kruise \u4e0b\u7684\u8d44\u6e90\u90fd\u4f1a\u5220\u9664\u6389\uff0c\u5305\u62ec webhook configurations, services, namespace, CRDs, CR instances \u4ee5\u53ca\u6240\u6709 Kruise workload \u4e0b\u7684 Pod\u3002 \u8bf7\u52a1\u5fc5\u8c28\u614e\u64cd\u4f5c\uff01"),(0,l.kt)("p",null,"\u5378\u8f7d\u4f7f\u7528 helm chart \u5b89\u88c5\u7684 Kruise\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise\nrelease "kruise" uninstalled\n')),(0,l.kt)("h2",{id:"kruise-state-metrics"},"Kruise State Metrics"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-state-metrics"},"kruise-state-metrics")," \u76d1\u542c Kubernetes API \u5e76\u751f\u6210 OpenKruise \u6709\u5173\u5bf9\u8c61\u72b6\u6001\u7684\u5ea6\u91cf\u6307\u6807\u3002\u5b83\u4e0d\u5173\u6ce8\u5355\u4e2a OpenKruise \u7ec4\u4ef6\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u800c\u662f\u5173\u6ce8\u5185\u90e8\u5404\u79cd\u5bf9\u8c61\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u4f8b\u5982\uff1aclonesets\uff0cadvanced statefulsets and sidecarsets\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise-state-metrics --version 0.1.0\n")))}s.isMDXComponent=!0}}]);