(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(155)),c={id:"godot_account",title:"Godot Account Functions",sidebar_label:"Account Functions"},r={id:"game/Godot/godot_account",title:"Godot Account Functions",description:"Below are the Account specific functions which span user logins to setting profile information. ",source:"@site/docs/game/Godot/account.md",permalink:"/OpenSeed/docs/game/Godot/godot_account",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/game/Godot/account.md",sidebar_label:"Account Functions",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/OpenSeed/docs/game/Godot/godot_installation"},next:{title:"chat",permalink:"/OpenSeed/docs/game/Godot/chat"}},s=[{value:"UI",id:"ui",children:[]},{value:"Commands",id:"commands",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Below are the Account specific functions which span user logins to setting profile information. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"All these documents are considered rough drafts and will change often."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to follow the installation instructions for these to work use the side bar to navigate there when you are ready."))),Object(o.b)("h3",{id:"ui"},"UI"),Object(o.b)("p",null,"OpenSeed comes with various built-in dialogs to help game developers quickly integrate our service into their games.  Thanks to Godot's theming engine Developers can change the look of these dialogs to suit their needs and thanks to the general OpenSeed desgin the game developer can even create their own interfaces."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Widgets"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",{src:"http://openseed.solutions:8689/img/low/OpenSeed_Login.png",alt:"Login"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("p",null,Object(o.b)("b",null,"OpenSeed Login"))," ",Object(o.b)("p",null,"The typical login prompt allows users to sign in to their OpenSeed account or create a new account using the supplied buttons. As you can see from the dialog box we also have the ability to import Hive.io accounts. For those unfamiliar with Hive.io it is a social blogging site that is censorship resistant and rewards users for interacting on the platform.")," ",Object(o.b)("strong",{parentName:"td"},"Command"),': OpenSeed.interface("login",true,"") ',Object(o.b)("p",null)," ",Object(o.b)("strong",{parentName:"td"},"Signals"),": login (1/success,0/denied,-1/no user found)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",{src:"http://openseed.solutions:8689/img/low/Create_Account.png",alt:"Create Account"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("p",null,Object(o.b)("b",null,"Create Account"))," ",Object(o.b)("p",null,"New account creation is simple enough requiring the three usual fields. (Username,Email,Password/Passphrase) The email address is used for verifying the account and recovery if needed."),Object(o.b)("strong",{parentName:"td"},"Command"),': OpenSeed.interface("newAccount",true,"")',Object(o.b)("p",null),Object(o.b)("p",null," On successful login the interface will set the OpenSeed.username and OpenSeed.token variables which will be used in other functions.")," ",Object(o.b)("p",null)," ",Object(o.b)("strong",{parentName:"td"},"Signals"),": login (2/success)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",{src:"http://openseed.solutions:8689/img/low/Hive_Import.png",alt:"Hive Import"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("p",null,Object(o.b)("b",null,"Hive Import"))," ",Object(o.b)("p",null,"For those wanting to use their Hive Account to interface with OpenSeed we have created server and client side tools to integrate Hive into OpenSeed. Or if you prefer, OpenSeed into Hive. "),Object(o.b)("strong",{parentName:"td"},"Command"),': OpenSeed.interface("hiveImport",true,"")',Object(o.b)("p",null),Object(o.b)("p",null," On successful import the interface will set the OpenSeed.username and OpenSeed.token variables which will be used in other functions in addtion it will setup the integrations needed for hive/openseed to communicate.")," ",Object(o.b)("p",null)," ",Object(o.b)("strong",{parentName:"td"},"Signals"),": login (2/success,0/denied,-1/no user found)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",{src:"http://openseed.solutions:8689/img/low/hive_link.png",alt:"Hive Link"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("p",null,Object(o.b)("b",null,"Hive Link"))," ",Object(o.b)("p",null,"For those that create an OpenSeed without linking their hive account can, at any time, link their Hive account to their OpenSeed account. The usefulness of this dialog is largely up to the Developer, however it does unlock the ability to interact with the Hive blockchain directly which may be desireable in some cases. "),Object(o.b)("strong",{parentName:"td"},"Command"),': OpenSeed.interface("hiveLink",true,"")',Object(o.b)("p",null),Object(o.b)("p",null," On successful import the interface will set the OpenSeed.hive and will set up the rest of the hive/openseed integration.")," ",Object(o.b)("p",null)," ",Object(o.b)("strong",{parentName:"td"},"Signals"),": login (2/success,0/denied,-1/no user found)")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'The signal for each of these dialogs is "login" and all three return the same information Assuming the user goes through the login process. These signals may change to give more detailed information but for the time being they do what needs to be done with the least coding needed.'))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The Hive account import allows users to save the private key used to import their information. It is important that you use your Posting key  and not your Active or Owner keys as they can access finical information. As always never give out your keys unless absolutely necessary, and consider creating a cold wallet to secure your digital currencies even more securely.   "))),Object(o.b)("h3",{id:"commands"},"Commands"),Object(o.b)("p",null,"There are far more commands that have no dialog in the account section. Of course this is by design as most things dealing with accounts should be handled behind the scenes anyway."))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(m,r({ref:t},l,{components:n})):i.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);