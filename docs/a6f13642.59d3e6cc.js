(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(6),r=(n(0),n(155)),c={id:"chat",title:"Chat",sidebar_label:"Chat"},b={id:"core/chat",title:"Chat",description:'OpenSeed-chat is a "lowest common denominator" encrypted chat service for individuals and groups using the OpenSeed hierarchical security setup.  ',source:"@site/docs/core/chat.md",permalink:"/OpenSeed/docs/core/chat",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/core/chat.md",sidebar_label:"Chat",sidebar:"someSidebar",previous:{title:"App Data",permalink:"/OpenSeed/docs/core/application"},next:{title:"Music",permalink:"/OpenSeed/docs/core/music"}},i=[{value:"Setup",id:"setup",children:[{value:"Get Conversations:",id:"get-conversations",children:[]},{value:"Create Chatroom:",id:"create-chatroom",children:[]},{value:"Finding Rooms:",id:"finding-rooms",children:[]},{value:"Register in Chat:",id:"register-in-chat",children:[]},{value:"Get Key:",id:"get-key",children:[]}]},{value:"Chat room Functions",id:"chat-room-functions",children:[]}],s={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'OpenSeed-chat is a "lowest common denominator" encrypted chat service for individuals and groups using the OpenSeed hierarchical security setup.  '),Object(r.b)("h1",{id:"current-implementation"},"Current implementation:"),Object(r.b)("p",null,"The chat module was designed with applications and games in mind where in these systems would control the flow of the chat based on the needs of the application and using the applications built in timing. Thus a application dependent on chat may query the server every second where an app that is less dependent may decrease the update requests for bandwidth or other issues. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Push Based chat is in the works and will be live as soon as we can make it work on at least 80% of our targets."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"P2P chat: The standard chat model within OpenSeed. Users have consented to the connection an have shared (via OpenSeed) the encryption key. No users can be added to this chat and will continue to be valid as long as the users of the chat retain the key. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Group chat: Group chats come in two modes, an open mode where any user can join the chat as long as they are authenticated, and private groups whose list is controlled by the creator of the group. "))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Chat functions will be extended to offer general messaging for things like comments on posts,notes, or forum like features. A rename is possible at that time. "))),Object(r.b)("h1",{id:"functions"},"Functions"),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"get-conversations"},"Get Conversations:"),Object(r.b)("p",null,"Used to quickly get a list of chat-rooms the users is a part of based on their unique token. "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This can be used as the basis of most chat loops as it sends just enough information for the developer to call other functions."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"get_conversations",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>"\n    }\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'{"conversations":','[{"room":"roomId","attendees":"comma,separate,values","title":"","index":last message},...]',"}")),Object(r.b)("h3",{id:"create-chatroom"},"Create Chatroom:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("p",null,"OpenSeed automatically creates chat-rooms for 1 on 1 conversations but the user will need to manually create larger rooms. For that we use create_chatroom."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"create_chatroom",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>",\n    "title":"","attendees":""\n    }\'\n\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'{"type":"server","room":"roomId","title":"your given title","key":"encryption key"}')),Object(r.b)("h3",{id:"finding-rooms"},"Finding Rooms:"),Object(r.b)("p",null,"Given the consensual nature of OpenSeed Chat (you have to be connected to the owner of the chatroom) finding a room is done by checking the list of attendees and if you are one of them the room id is returned along with information needed to connect to it."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'In the near future we will have other room finding options such as "by title" and "by community" '))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"find_room_by_attendees",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>",\n    "attendees":"<comma,seperated,value>",\n    "create":<boolean>\n    }\'\n\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Success:",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"type":"server","room":"roomId","title":"room title","key":"encryption Key"}'))),Object(r.b)("li",{parentName:"ul"},"No room found (and create set false)",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"type":"server","room":"roomId","title":"room title","key":"error"}')))),Object(r.b)("h3",{id:"register-in-chat"},"Register in Chat:"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Needs rework and rename, currently unused and may be deleted."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'**Call**:\nmsg=\'{\n    "act":"set_key",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>"\n    }\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"code")),Object(r.b)("h3",{id:"get-key"},"Get Key:"),Object(r.b)("p",null,"Due to the nature of OpenSeed encryption keys must be stored on the server for a short time to allow users to jump from client to client. These encryption keys (which are unique to the chatroom) are likewise encrypted by the user's unique key. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"}," This functionality is extremely important to get right, and we are constantly improving the process."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"get_key",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>"\n    }\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Success",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"room":"roomId","code":"encryption key"}'))),Object(r.b)("li",{parentName:"ul"},"Failure",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"room":"denied","code":"denied"}')))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"chat-room-functions"},"Chat room Functions"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Get Chat History"),":"),Object(r.b)("p",null,"Used to get the backlog of chat messages quickly. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Count"),": The number of messages you want to pull from the history"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"last"),": The last message you have stored in cache or have displayed. Setting this to 0 will give you the latest message.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"get_chat_history",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>",\n    "room":"<roomId>",\n    "count":<number>,\n    "last":<number>\n    }\'\n\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'{"chat_history":','[{"speaker":"","room":"","message":"","index":"","date":""},...]',"}")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Get Chat"),":"),Object(r.b)("p",null,'Nearly identical to Get Chat History. Get Chat returns the NEXT message based on last. Just like the above function last represents the "last" message the client has received. '),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"get_chat",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>",\n    "room":"<roomId>",\n    "last":<number>\n    }\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Success"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"chat":{"speaker":"","room":"","message":"","index":"","appPub":"","date":""}}'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"No new Messages"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"chat":{"speaker":"server","room":"","message":"none","index":"-1"}}')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Send Chat"),":"),Object(r.b)("p",null,"The message sent to the server needs to be encrypted using the key provided to you by various functions. If the message is not encrypted then the recipient will be unable to read the message."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As stated before, the encryption is not mandatory at this stage. When it becomes so a new error message will be added to the returns and this message will be deleted."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Call"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'msg=\'{\n    "act":"send_chat",\n    "devPub":"<devPub>",\n    "appPub":"<appPub>",\n    "token":"<user token>",\n    "room":"<roomId>",\n    "message":""\n    }\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Success:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"chat_response":{"speaker":"","room":"roomId","message":"received"}}'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"No Speaker:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"chat_response":{"speaker":"server","message":"couldn\'t determine speaker"}}'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"No Room:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'{"chat_response":{"speaker":"server","message":"no room found at roomId"}}')))),Object(r.b)("hr",null))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?o.a.createElement(u,b({ref:t},s,{components:n})):o.a.createElement(u,b({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);