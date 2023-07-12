"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2160],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,c=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="Installation",u={unversionedId:"installation",id:"installation",title:"Installation",description:"Install OpenKruiseGame\uff08OKG)",source:"@site/kruisegame/installation.md",sourceDirName:".",slug:"/installation",permalink:"/kruisegame/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1689155054,formattedLastUpdatedAt:"7/12/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Introduction",permalink:"/kruisegame/introduction"},next:{title:"Design Concept",permalink:"/kruisegame/design-concept"}},m={},d=[{value:"Install OpenKruiseGame\uff08OKG)",id:"install-openkruisegameokg",level:2},{value:"Installation Instructions",id:"installation-instructions",level:3},{value:"Install Kruise",id:"install-kruise",level:3},{value:"Install Kruise-Game",id:"install-kruise-game",level:3},{value:"Upgrade Kruise-Game",id:"upgrade-kruise-game",level:3},{value:"Options",id:"options",level:3},{value:"Optional: install/upgrade with customized configurations",id:"optional-installupgrade-with-customized-configurations",level:4},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:4},{value:"Uninstall OpenKruiseGame\uff08OKG\uff09",id:"uninstall-openkruisegameokg",level:2},{value:"FAQ",id:"faq",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],p={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"install-openkruisegameokg"},"Install OpenKruiseGame\uff08OKG)"),(0,l.kt)("h3",{id:"installation-instructions"},"Installation Instructions"),(0,l.kt)("p",null,"Installing OpenKruiseGame requires Kruise and Kruise-Game to be installed and Kubernetes version >= 1.16."),(0,l.kt)("h3",{id:"install-kruise"},"Install Kruise"),(0,l.kt)("p",null,"We recommend that you use Helm V3.5 or later to install Kruise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n# [Optional]\n$ helm repo update\n# Install the latest version.\n$ helm install kruise openkruise/kruise --version 1.4.0\n")),(0,l.kt)("h3",{id:"install-kruise-game"},"Install Kruise-Game"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install kruise-game openkruise/kruise-game --version 0.4.1\n")),(0,l.kt)("h3",{id:"upgrade-kruise-game"},"Upgrade Kruise-Game"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install kruise-game openkruise/kruise-game --version 0.4.1 [--force]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("h4",{id:"optional-installupgrade-with-customized-configurations"},"Optional: install/upgrade with customized configurations"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the kruise-game chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Namespace for kruise-game operation installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"Nick name for kruise-game deployment and other configurations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-controller-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.healthBindPort")),(0,l.kt)("td",{parentName:"tr",align:null},"Port for checking health of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8082"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served by kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.targetPort")),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectSelector for workloads in MutatingWebhookConfigurations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9876"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of kruise-game deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for kruise-game image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-game-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for kruise-game image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"ImagePullPolicy for kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Always"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serviceAccount.annotations")),(0,l.kt)("td",{parentName:"tr",align:null},"The annotations for serviceAccount of kruise-game"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheus.enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to bind metric endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheus.monitorService.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of the monitorservice bind to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scale.service.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of the external scaler server binds to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scale.service.targetPort")),(0,l.kt)("td",{parentName:"tr",align:null},"TargetPort of the external scaler server binds to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"network.totalWaitTime")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time to wait for network ready, the unit is seconds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"network.probeIntervalTime")),(0,l.kt)("td",{parentName:"tr",align:null},"Time interval for detecting network status, the unit is seconds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cloudProvider.installCRD")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to install CloudProvider CRD"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),". For example,"),(0,l.kt)("h4",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise-game https://... --set image.repository=registry.cn-hangzhou.aliyuncs.com/acs/kruise-game-manager\n")),(0,l.kt)("h2",{id:"uninstall-openkruisegameokg"},"Uninstall OpenKruiseGame\uff08OKG\uff09"),(0,l.kt)("p",null,"Note that this will lead to all resources created by kruise-game, including webhook configurations, services, namespace, CRDs and CR instances kruise-game controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall kruise-game if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise-game\nrelease "kruise-game" uninstalled\n')),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("p",null,"Q: Error ",(0,l.kt)("inlineCode",{parentName:"p"},'no matches for kind "ServiceMonitor" in version "monitoring.coreos.com/v1"'),"\nA: This is because the cluster does not have the prometheus operator installed. enabling the playsuit monitoring feature requires the prometheus operator to be installed on the Kubernetes cluster. If you do not use this feature, you can set prometheus.enabled to false during installation (the default is true)"),(0,l.kt)("p",null,"Q: Error ",(0,l.kt)("inlineCode",{parentName:"p"},'CustomResourceDefinition "poddnats.alibabacloud.com" in namespace "" exists and cannot be imported into the cureent release'),"\nA: This is because the CRD is already installed in the cluster and you can set cloudprovider.installCRD to false during installation (default is true)"),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"Here are some recommended next steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn kruise-game's ",(0,l.kt)("a",{parentName:"li",href:"/kruisegame/user-manuals/deploy-gameservers"},"Deploy GameServers"),".")))}k.isMDXComponent=!0}}]);