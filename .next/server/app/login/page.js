(()=>{var e={};e.id=2626,e.ids=[2626],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},91786:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var r=s(67096),n=s(16132),a=s(37284),i=s.n(a),o=s(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,48312)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\login\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,54062)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,21499)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\login\\page.js"],d="/login/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9236:(e,t,s)=>{Promise.resolve().then(s.bind(s,45016))},32484:(e,t,s)=>{Promise.resolve().then(s.bind(s,11869))},83904:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,53579,23)),Promise.resolve().then(s.t.bind(s,30619,23)),Promise.resolve().then(s.t.bind(s,81459,23)),Promise.resolve().then(s.t.bind(s,13456,23)),Promise.resolve().then(s.t.bind(s,50847,23)),Promise.resolve().then(s.t.bind(s,57303,23))},13603:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,10233,23)),Promise.resolve().then(s.bind(s,30472))},45016:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(53854),n=s(83940),a=s(12894),i=s(30266),o=s(41956),l=s.n(o),c=s(16348),u=s(34218),d=s(75548),p=s.n(d),m=s(30472),f=s(38318),h=s(861),g=s(14452);function x(){let[e,t]=(0,u.useState)(""),[o,d]=(0,u.useState)(""),[x,A]=(0,u.useState)(""),[w,b]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let e=f.Z.get("analogueshifts");if(e)return window.location.href="/dashboard",null},[]),(0,r.jsxs)(r.Fragment,{children:[w&&r.jsx(i.Z,{}),r.jsx("main",{className:"w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10",children:(0,r.jsxs)("section",{className:"max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center",children:[r.jsx(l(),{src:n.Z,alt:"",className:"absolute"}),r.jsx(l(),{src:a.Z,alt:""})]}),(0,r.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] flex flex-col",children:[r.jsx(c.Z,{}),(0,r.jsxs)("form",{onSubmit:function(t){t.preventDefault();let r=s(66575),n={method:"POST",url:"https://api.analogueshifts.com/api/login",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:e,password:o})};b(!0),r.request(n).then(async e=>{let t=JSON.stringify({...e.data.data.user,token:e.data.data.token});f.Z.set("analogueshifts",t),m.toast.success("Login Successful",h.D);let s=f.Z.get("RedirectionLink");window.location.href=s.trim().length?s:"/dashboard",b(!1)}).catch(e=>{b(!1),m.toast.error(e.message,h.D)})},className:"pt-11 w-full flex flex-col",children:[r.jsx("p",{className:"font-medium text-lg text-tremor-content-grayText pb-4",children:"Welcome!"}),r.jsx("p",{className:"font-bold text-3xl text-[#292929] pb-5",children:"Sign Into Your Account"}),r.jsx(g.Z,{icon:"fa-solid fa-envelope",type:"email",onChange:e=>t(e.target.value),label:"Email",placeholder:"Enter Email",value:e}),r.jsx(g.Z,{icon:"fa-solid fa-lock",type:"password",onChange:e=>d(e.target.value),label:"Password",placeholder:"Enter Password",value:o}),r.jsx("button",{type:"submit",className:"w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ",children:"Login"}),r.jsx("div",{className:"w-full pt-4 flex justify-center items-center gap-1",children:r.jsx(p(),{href:"/forgot-password",className:"font-normal cursor-pointer text-sm text-black/90",children:"Forgotten Password?"})}),(0,r.jsxs)("div",{className:"w-full pt-2 flex justify-center items-center gap-1",children:[r.jsx("p",{className:"font-normal text-sm text-black/90",children:"Don't have an account?"}),r.jsx(p(),{href:"/register",className:"font-normal text-sm text-tremor-background-darkYellow",children:"Sign Up"})]})]})]})]})})]})}},11869:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(53854),n=s(51018),a=s(34218);function i(){let e=(0,n.useRouter)();return(0,a.useEffect)(()=>{e.push("/404")},[]),r.jsx(r.Fragment,{})}},16348:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(53854);let n=()=>(0,r.jsxs)("div",{className:"flex gap-3",children:[r.jsx("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,r.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[r.jsx("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),r.jsx("br",{}),r.jsx("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},14452:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(53854);let n=({label:e,icon:t,value:s,type:n,placeholder:a,onChange:i})=>(0,r.jsxs)("div",{className:"w-full pb-5 flex flex-col gap-2.5",children:[r.jsx("p",{className:"text-base font-normal text-tremor-content-grayText",children:e}),(0,r.jsxs)("div",{className:"w-full relative flex items-center h-12",children:[r.jsx("i",{className:"absolute left-5  text-base text-tremor-content-grayText w-8 "+t}),r.jsx("input",{className:" w-full rounded-2xl border border-black/10 outline-1 outline-tremor-background-darkYellow h-full pl-12 pr-4  text-base font-normal text-gray-400",placeholder:a,value:s,type:n,onChange:i,required:!0})]})]})},30266:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(53854);function n(){return r.jsx("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30",children:(0,r.jsxs)("div",{className:"lds-roller",children:[r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{})]})})}},6695:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let r=s(10143),n=s(60288),a=s(77966),i=s(88469),o=r._(s(17096)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},c=i.Image},41956:(e,t,s)=>{"use strict";e.exports=s(6695)},861:(e,t,s)=>{"use strict";s.d(t,{D:()=>r});let r={position:"top-right",autoClose:3e3}},54062:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>d});var r=s(4656),n=s(92081),a=s.n(n);s(67272),s(97151);var i=s(40554),o=s.n(i),l=s(35143),c=s(15011),u=s(92004);s(97001);let d={title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"https://www.analogueshifts.com"},verification:{google:"SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k"}};function p({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("link",{rel:"icon",href:"https://www.analogueshifts.com/logo.png",sizes:"any"})}),(0,r.jsxs)("body",{className:function(...e){return(0,c.m6)((0,l.W)(e))}("",a().className),children:[" ",r.jsx(u.Ix,{position:"top-center"}),e]}),r.jsx(o(),{src:"https://kit.fontawesome.com/39a80cd06c.js",crossorigin:"anonymous"})]})}},48312:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,metadata:()=>c});var r=s(4656),n=s(95153);let a=(0,n.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\app\login\components\Login.js`),{__esModule:i,$$typeof:o}=a,l=a.default,c={title:"Login | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/login",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/login"}};function u(){return r.jsx(l,{})}},21499:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});var r=s(95153);let n=(0,r.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\app\not-found.js`),{__esModule:a,$$typeof:i}=n,o=n.default,l=o},12894:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/avatar.9e508533.png",height:170,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEXGyv+siIa/xPcfEQ/5uTfysTfUjyb7w0DyqzHO1P9kY3qHVx6XlbXsx3o2LzFdOCSohnVUMBzTzOCpaBN1PwDJxebolRmbYy26hUjOnWyYXhh3c48KSzjWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nBXFRxLAIAwAsQVsbCC9l///MxNdBNShK0BMYwAodQ7x/03TAvv9nGo91+EiZrTVVU1oW3a3/AE34wH0Xi/XZAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},83940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/group.43634bce.png",height:538,width:478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEWViVzYqDWRjHXhcCbrMRbx2rHUuThMaXFVVVRERUT/7sT/AAZEODLu5uWw2tf///BkXEg2PDZXRTr///86NjT/AAD///+RnaD///9/sq//AAB6YEoJ8vs8AAAAG3RSTlMQLS0uEDY1AC81DzT9+P0jsVXqGHUrNa1XdBssEDwQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBhQHAMADDMBdTHvP/f06i91OkxBi3yJnnCsJa3sOrhECtXmXacM4rzzsxouVrGIPS2n5IIQIoDVqR/gAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(31323);let n=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},67272:()=>{},97151:()=>{},38318:(e,t,s)=>{"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)e[r]=s[r]}return e}s.d(t,{Z:()=>n});var n=function e(t,s){function n(e,n,a){if("undefined"!=typeof document){"number"==typeof(a=r({},s,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var o in a)a[o]&&(i+="; "+o,!0!==a[o]&&(i+="="+a[o].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+i}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],r={},n=0;n<s.length;n++){var a=s[n].split("="),i=a.slice(1).join("=");try{var o=decodeURIComponent(a[0]);if(r[o]=t.read(i,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){n(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[3271,7237,5548,6575,8469],()=>s(91786));module.exports=r})();