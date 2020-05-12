(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(6),r=(n(0),n(155)),i={id:"about",title:"About OpenSeed Core",sidebar_label:"About"},c={id:"core/about",title:"About OpenSeed Core",description:"# What is OpenSeed Core?",source:"@site/docs/core/about.md",permalink:"/OpenSeed/docs/core/about",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/core/about.md",sidebar_label:"About",sidebar:"someSidebar",previous:{title:"OpenSeed Achievements",permalink:"/OpenSeed/docs/game/Godot/achievements"},next:{title:"Accounts",permalink:"/OpenSeed/docs/core/account"}},s=[{value:"Basic Needs",id:"basic-needs",children:[{value:"In Example",id:"in-example",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"what-is-openseed-core"},"What is OpenSeed Core?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: All these documents are considered rough drafts and will change often.")),Object(r.b)("p",null,"OpenSeed core is a listing of the base layer commands that can be used by any interface built on top of OpenSeed. These functions will run regardless to whether you connect to the servers via TCP,Websockets, or httpRequests. It is important to note some of these functions are designed to be filtered through another layer in order to create a better interface for the developers. However, if we don't have an interface developed for your specific language we are confident that you will still be able to use OpenSeed with minimal effort."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"basic-needs"},"Basic Needs"),Object(r.b)("p",null,"All transactions sent to OpenSeed need to be encrypted using the BLE explained in Encryption. If you are using the core functions without a provided interface please contact support@openorchard.io to request help on creating the functions needed to encrypt the data."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Note:")," Due to the continued work on OpenSeed some if not all of these functions can be used without encryption. However, once core functionality is achieved encryption will become mandatory. Please be sure to only use post commands to send to the OpenSeed servers while testing."))),Object(r.b)("p",null,"We will assume you are using an httpRequest style interface for the example below "),Object(r.b)("h3",{id:"in-example"},"In Example"),Object(r.b)("p",null,"This example uses curl to call a function using the core functions."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'curl --data \'msg={"act":"get_history","devid":"","appid":"","account":"openseed","apprange":"all","count":"10"}\' -X POST \'',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://api.openseed.solutions:8670/api"}),"http://api.openseed.solutions:8670/api"),"'\n}")),Object(r.b)("p",null,"As you can see this is not encrypted in anyway in its final form the command will look something like this."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"curl --data 'appPub=\"\"&msg=234sdfanwr8fwrnsdf0asf2nr0sdfasrtn234rasdgy89y67234nbasldfnFASFhf2rhfnasdf' -X POST '",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://api.openseed.solutions:8670/api"}),"http://api.openseed.solutions:8670/api"),"'")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The end point will change to just api.openseed.solutions when we near release."))))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);