"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3217],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9184:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Installation"},d=void 0,p={unversionedId:"installation",id:"installation",title:"Installation",description:"Since v1.0.0 (alpha/beta), OpenKruise requires Kubernetes version >= 1.16.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1681091629,formattedLastUpdatedAt:"4/10/2023",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Architecture",permalink:"/docs/next/core-concepts/architecture"}},m={},u=[{value:"Install with helm",id:"install-with-helm",level:2},{value:"Upgrade with helm",id:"upgrade-with-helm",level:2},{value:"Optional: download charts manually",id:"optional-download-charts-manually",level:2},{value:"Options",id:"options",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3},{value:"Optional: feature-gate",id:"optional-feature-gate",level:3},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Installation parameters for K3s",id:"installation-parameters-for-k3s",level:3},{value:"Installation parameters for AWS EKS",id:"installation-parameters-for-aws-eks",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Kruise State Metrics",id:"kruise-state-metrics",level:2}],s={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Since v1.0.0 (alpha/beta), OpenKruise requires ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.16"),"."),(0,l.kt)("h2",{id:"install-with-helm"},"Install with helm"),(0,l.kt)("p",null,"Kruise can be simply installed by helm v3.5+, which is a simple command-line tool and you can get it from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --version 1.4.0\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"Changelog"),"."),(0,l.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade to the latest version.\n$ helm upgrade kruise openkruise/kruise --version 1.4.0 [--force]\n")),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Before upgrade, you ",(0,l.kt)("strong",{parentName:"li"},"must")," firstly read the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"Change Log"),"\nto make sure that you have understand the breaking changes in the new version."),(0,l.kt)("li",{parentName:"ol"},"If you want to drop the chart parameters you configured for the old release or set some new parameters,\nit is recommended to add ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset-values")," flag in ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command.\nOtherwise you should use ",(0,l.kt)("inlineCode",{parentName:"li"},"--reuse-values")," flag to reuse the last release's values."),(0,l.kt)("li",{parentName:"ol"},"If you are ",(0,l.kt)("strong",{parentName:"li"},"upgrading Kruise from 0.x to 1.x"),", you must add ",(0,l.kt)("inlineCode",{parentName:"li"},"--force")," for upgrade command. Otherwise it is an optional flag.")),(0,l.kt)("h2",{id:"optional-download-charts-manually"},"Optional: download charts manually"),(0,l.kt)("p",null,"If you have problem with connecting to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://openkruise.github.io/charts/")," in production, you might need to download the chart from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/charts/releases"},"here")," manually and install or upgrade with it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade kruise /PATH/TO/CHART\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Note that installing this chart directly means it will use the default template values for Kruise."),(0,l.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to configure feature-gates."),(0,l.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,l.kt)("td",{parentName:"tr",align:null},"Feature gates for Kruise, empty string means all by default"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"namespace for kruise installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that kruise-manager printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of kruise-controller-manager deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for kruise-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for kruise-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v1.2.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"512Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that kruise-daemon printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics and healthz that kruise-daemon served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10221"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"128Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.affinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Affinity policy for kruise-daemon pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.socketLocation")),(0,l.kt)("td",{parentName:"tr",align:null},"Location of the container manager control socket"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/run"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.socketFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the socket file name in ",(0,l.kt)("inlineCode",{parentName:"td"},"socketLocation")," (if you are not using containerd/docker/pouch/cri-o)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,l.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,l.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,l.kt)("td",{parentName:"tr",align:null},"Kruise will not install CRDs with chart if this is false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,l.kt)("td",{parentName:"tr",align:null},"Resync period of informer kruise-manager, defaults no resync"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether kruise-manager pod should run with hostnetwork"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,l.kt)("td",{parentName:"tr",align:null},"The list of image pull secrets for kruise image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableKubeCacheMutationDetector")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable KUBE_CACHE_MUTATION_DETECTOR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,l.kt)("h3",{id:"optional-feature-gate"},"Optional: feature-gate"),(0,l.kt)("p",null,"Feature-gate controls some influential features in Kruise:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarSet/KruisePodReadinessGate disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruiseDaemon")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to deploy ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," DaemonSet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"ImagePulling/ContainerRecreateRequest disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DaemonWatchingPod")),(0,l.kt)("td",{parentName:"tr",align:null},"Should each ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," watch pods on the same node"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"For in-place update with same imageID or env from labels/annotations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetShortHash")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller only set revision hash name to pod label"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet name can not be longer than 54 characters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruisePodReadinessGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables Kruise webhook to inject 'KruisePodReady' readiness-gate to all Pods during creation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"The readiness-gate will only be injected to Pods created by Kruise workloads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PreDownloadImageForInPlaceUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller to create ImagePullJobs to pre-download images for in-place update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No image pre-download for in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetPartitionRollback")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller to rollback Pods to currentRevision when number of updateRevision pods is bigger than (replicas - partition)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet will only update Pods to updateRevision")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResourcesDeletionProtection")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables protection for resources deletion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for resources deletion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TemplateNoDefaults")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to disable defaults injection for pod/pvc template in workloads"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Should not close this feature if it has open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetDeleteGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables PodUnavailableBudget for pod deletion, eviction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for pod deletion, eviction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetUpdateGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables PodUnavailableBudget for pod.Spec update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WorkloadSpread")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables WorkloadSpread to manage multi-domain and elastic deploy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"WorkloadSpread disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InPlaceUpdateEnvFromMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables Kruise to in-place update a container in Pod when its env from labels/annotations changed and pod is in-place updating"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Only container image can be in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StatefulSetAutoDeletePVC")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables policies controlling deletion of PVCs created by a StatefulSet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"No deletion of PVCs by StatefulSet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PreDownloadImageForDaemonSetUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables DaemonSet controller to create ImagePullJobs to pre-download images for in-place update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No image pre-download for in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodProbeMarkerGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to turn on PodProbeMarker ability"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"PodProbeMarker disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SidecarSetPatchPodMetadataDefaultsAllowed")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow SidecarSet patch any annotations to Pod Object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Annotations are not allowed to patch randomly and need to be configured via SidecarSet_PatchPodMetadata_WhiteList")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SidecarTerminator")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarTerminator enables SidecarTerminator to stop sidecar containers when all main containers exited"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarTerminator disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetEventHandlerOptimization")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSetEventHandlerOptimization enable optimization for cloneset-controller to reduce the queuing frequency cased by pod update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"optimization for cloneset-controller to reduce the queuing frequency cased by pod update disabled")))),(0,l.kt)("p",null,"If you want to configure the feature-gate, just set the parameter when install or upgrade. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="ResourcesDeletionProtection=true\\,PreDownloadImageForInPlaceUpdate=true"\n')),(0,l.kt)("p",null,"If you want to enable all feature-gates, set the parameter as ",(0,l.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"."),(0,l.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise https://... --set  manager.image.repository=openkruise-registry.cn-shanghai.cr.aliyuncs.com/openkruise/kruise-manager\n")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"installation-parameters-for-k3s"},"Installation parameters for K3s"),(0,l.kt)("p",null,"Usually K3s has the different runtime path from the default ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/run"),". So you have to set ",(0,l.kt)("inlineCode",{parentName:"p"},"daemon.socketLocation")," to the real runtime socket path on your K3s node (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"/run/k3s")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/run/k3s/"),")."),(0,l.kt)("h3",{id:"installation-parameters-for-aws-eks"},"Installation parameters for AWS EKS"),(0,l.kt)("p",null,"When using a custom CNI (such as Weave or Calico) on EKS, the webhook cannot be reached by default. This happens because the control plane cannot be configured to run on a custom CNI on EKS, so the CNIs differ between control plane and worker nodes."),(0,l.kt)("p",null,"To address this, the webhook can be run in the host network so it can be reached, by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true")," when use helm install or upgrade."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Note that this will lead to all resources created by Kruise, including webhook configurations, services, namespace, CRDs, CR instances and Pods managed by Kruise controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall kruise if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise\nrelease "kruise" uninstalled\n')),(0,l.kt)("h2",{id:"kruise-state-metrics"},"Kruise State Metrics"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-state-metrics"},"kruise-state-metrics")," is a simple service that listens to the Kubernetes API server and generates metrics about the state of the objects.\nIt is not focused on the health of the individual OpenKruise components, but rather on the health of the various objects inside, such as clonesets, advanced statefulsets and sidecarsets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise-state-metrics --version 0.1.0\n")))}k.isMDXComponent=!0}}]);