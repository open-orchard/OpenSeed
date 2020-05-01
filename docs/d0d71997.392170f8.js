(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(1),c=(a(0),a(154));const r={id:"account",title:"Accounts",sidebar_label:"Accounts"},o={id:"core/account",title:"Accounts",description:"Current existing functions dealing with OpenSeed Accounts. Please read the About section to understand how to use the below in a fully formated command. Not all these functions are finalized and there will be changes while we work toward our first release. However, these should represent most of the major features. ",source:"@site/docs/core/account.md",permalink:"/OpenSeed/docs/core/account",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/core/account.md",sidebar_label:"Accounts",sidebar:"someSidebar",previous:{title:"About OpenSeed Core",permalink:"/OpenSeed/docs/core/about"},next:{title:"Chat",permalink:"/OpenSeed/docs/core/chat"}},b=[{value:"General Account Functions",id:"general-account-functions",children:[{value:"Account Check:",id:"account-check",children:[]},{value:"Create a User:",id:"create-a-user",children:[]},{value:"Create a Creator Account:",id:"create-a-creator-account",children:[]},{value:"Create App or Game:",id:"create-app-or-game",children:[]},{value:"Create Profile:",id:"create-profile",children:[]}]},{value:"History",id:"history",children:[{value:"Add to History:",id:"add-to-history",children:[]},{value:"Get History:",id:"get-history",children:[]}]},{value:"Hive Account Functions",id:"hive-account-functions",children:[{value:"Hive Login:",id:"hive-login",children:[]},{value:"Hive Connect:",id:"hive-connect",children:[]},{value:"Hive Delegation:",id:"hive-delegation",children:[]},{value:"Flush Keys (Hive):",id:"flush-keys-hive",children:[]},{value:"Send Payment (Hive):",id:"send-payment-hive",children:[]},{value:"Get Account (Hive):",id:"get-account-hive",children:[]},{value:"Get Full Account (Hive):",id:"get-full-account-hive",children:[]}]}],i={rightToc:b};function l({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Current existing functions dealing with OpenSeed Accounts. Please read the About section to understand how to use the below in a fully formated command. Not all these functions are finalized and there will be changes while we work toward our first release. However, these should represent most of the major features. "),Object(c.b)("h2",{id:"general-account-functions"},"General Account Functions"),Object(c.b)("h3",{id:"account-check"},"Account Check:"),Object(c.b)("p",null,"Checks user accounts returns true if correct."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"account_check",\n    "devid":"",\n    "appid":"",\n    "accout":"",\n    "passphrase":""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Success:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"account":{"token":"user token","username":"username"}}'))),Object(c.b)("li",{parentName:"ul"},"Invalid username/password",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"account":{"token":"denied"}}'))),Object(c.b)("li",{parentName:"ul"},"No user found",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"account":{"token":"none"}}')))),Object(c.b)("h3",{id:"create-a-user"},"Create a User:"),Object(c.b)("p",null,"Creates Account based on the included criteria. Along with creating the tokens it creates a mostly empty profile that is returned on creation to help developers with the next steps."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The profile creation is mandatory but an option might be added to create_account to supress the profile information. "))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'    msg=\n    {\n    "act"="create_account"\n    "devid"="",\n    "appid"="",\n    "account"="",\n    "passphrase"="",\n    "email"=""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Success:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"account":{"token":"\'+uid+\'","username":"\'+username+\'","profile":\'+pfile+\'}}'))),Object(c.b)("li",{parentName:"ul"},"User exists:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"account":{"username":"exists"}}')))),Object(c.b)("h3",{id:"create-a-creator-account"},"Create a Creator Account:"),Object(c.b)("p",null,"Creates Developer / Creator account. In OpenSeed we seperate normal users and creator accounts to allow for multiple creator instances. "),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'We call all producers "creators" as OpenSeed wants to avoid multiple user accounts whenever possible. (e.g. jondoe has a creator account name "Doe Ray ME" where he preforms one man musicals. He also has a creator account called "Software made by Doe" where he publishes his software. Both are connected to the account jondoe which is inturn connected to a wallet account that allows all his rewards and income to go to one place.)'))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act"="create_creator_account"\n    "devid"="",\n    "appid"="",\n    "devName"="",\n    "contactName"="",\n    "contactEmail"="",\n    "openseed"=""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Success:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"creator_account":{"devID":"privateID","pubID":"publicID"}}'))),Object(c.b)("li",{parentName:"ul"},"No OpenSeed User:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"creator_account":{"server":"no openseed user found"}}'))),Object(c.b)("li",{parentName:"ul"},"Account exists:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"creator_account":{"devID":"exists","pubID":"exists"}}')))),Object(c.b)("h3",{id:"create-app-or-game"},"Create App or Game:"),Object(c.b)("p",null,"Creates Application and associates it with the creator account."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Name spacing is required but not yet automatic. So the developer will need to use the now standard reverse DNS style name space."),Object(c.b)("p",{parentName:"div"},"example: com.developer.applicaiton"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act"="create_app"\n    "devid"="",\n    "appid"="",\n    "appName"=""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'Success"',Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"appID":"privateID","pubID":"publicID"}'))),Object(c.b)("li",{parentName:"ul"},"Exists:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"appID":"exists","pubID":"exists"}')))),Object(c.b)("h3",{id:"create-profile"},"Create Profile:"),Object(c.b)("p",null,"Creates the long form profile for users,developers, and applications. Called after the ids have been created."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This will change to match the datasets within OpenSeed."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"set_profile",\n    "devid":"",\n    "appid":"",\n    "token":"",\n    "data1":"",\n    "data2":"",\n    "data3":"",\n    "data4":"",\n    "data5":"",\n    "type":""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sucess:",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"profile":"updated"}')))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"history"},"History"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Recording history is completely volentary, and will be important for developers to inform their users on what historical data they are sending to OpenSeed.  "))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Standard Types:")),Object(c.b)("p",null,"OpenSeed has various built-in types for historical data which streamlines input and standardizes output. We currently represent these as numeric values but that may change in the future."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Category"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required data"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Program Start"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"program_start":"program"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Program Stop"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"program_stop":"program"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Playing Music"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"playing":{"song":"title","artist":"artist"}')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Purchase"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"purchase":"item"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Download"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"download":"item"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Linked"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"linked":"username"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"High Score"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"highscore":"score"')))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Non standard types can be manually specified by the developer. "))),Object(c.b)("h3",{id:"add-to-history"},"Add to History:"),Object(c.b)("p",null,"Adds to the history record for the user."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"update_history",\n    "token":"",\n    "type":"",\n    "appPub":"",\n    "data":""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Success",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"history":"updated"}')))),Object(c.b)("h3",{id:"get-history"},"Get History:"),Object(c.b)("p",null,"Returns the history for a specific account. Optionally you may define a specific application(apprange) and a total count(count)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"get_history",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    "apprange":"",\n    "count":""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},'{"history":','[{"history":"type","item":"data"}]',"}")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"hive-account-functions"},"Hive Account Functions"),Object(c.b)("h3",{id:"hive-login"},"Hive Login:"),Object(c.b)("p",null,"This creates an openseed user based on the hive profile retrieved on verification of there hive account, gives openseed posting rights, and gives the user the option to have their keys stored. This is the basis for logins and other hive/openseed functions.\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"hive_login",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    "postkey":"",\n    "store":boolean,\n    "import\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"OpenSeed user exists",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"interconnect":"connected","account_auth":"openseed","keystored":"true or false"}'))),Object(c.b)("li",{parentName:"ul"},"New User",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"{}")))),Object(c.b)("h3",{id:"hive-connect"},"Hive Connect:"),Object(c.b)("p",null,"This creates an openseed user based on the hive profile retrieved on verification of there hive account, gives openseed posting rights, and gives the user the option to have their keys stored. This is the basis for logins and other hive/openseed functions.\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"hive_connect",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    "postkey":"",\n    "store":boolean,\n    "import\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"OpenSeed user exists",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},'{"interconnect":"connected","account_auth":"openseed","keystored":"true or false"}'))),Object(c.b)("li",{parentName:"ul"},"New User",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"{}")))),Object(c.b)("h3",{id:"hive-delegation"},"Hive Delegation:"),Object(c.b)("p",null,"If the user has allowed OpenSeed to store their keys we can quickly add or remove posting rights through the hive_delegation function. If they don't have their keys saved by OpenSeed we will need to ask them for their posting key to finish the process. We derive the application we are allowing/disallowing via appid."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This function will attempt to streamline login prompts similar to steemconnect or hivesigner, but steps will need to be taken to create openseed accounts using hive_openseed_interconnect if the developer is hoping to get the login to a point where it behaves like other login managers. (i.e. facebook,google,etc.)"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"hive_delegation",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    "postkey":"" -or- "passphrase":"",\n    "option":"allow"/"disallow"\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null),Object(c.b)("h3",{id:"flush-keys-hive"},"Flush Keys (Hive):"),Object(c.b)("p",null,"Not needed for most operations as the deletion of keys is a part of every request that requires one (unless stored is set true). However, when OpenSeed creates an account for a user the keys are stored for fast access. This function can be used to remove the keys from our server.\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"hive_flush_keys",\n    "devid":"",\n    "appid":"",\n    "hiveaccount":"",\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null),Object(c.b)("h3",{id:"send-payment-hive"},"Send Payment (Hive):"),Object(c.b)("p",null,"Returns the history for a specific account. Optionally you may define a specific application and a total count.\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"hive_send_payment",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    "apprange":"",\n    "count":""\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null),Object(c.b)("h3",{id:"get-account-hive"},"Get Account (Hive):"),Object(c.b)("p",null,"retrieves the users profile from hive node\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"get_hive_account",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null),Object(c.b)("h3",{id:"get-full-account-hive"},"Get Full Account (Hive):"),Object(c.b)("p",null,"retrieves all user info from hive node\n",Object(c.b)("strong",{parentName:"p"},"Call"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'msg=\n    {\n    "act":"get_hive_account",\n    "devid":"",\n    "appid":"",\n    "account":"",\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":"),Object(c.b)("blockquote",null))}l.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,O=s["".concat(o,".").concat(u)]||s[u]||d[u]||r;return a?c.a.createElement(O,b({ref:t},l,{components:a})):c.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<r;l++)o[l]=a[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);