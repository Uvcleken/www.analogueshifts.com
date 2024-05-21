(()=>{var e={};e.id=9109,e.ids=[9109],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},28676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>A,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(67096),a=r(16132),n=r(37284),l=r.n(n),i=r(32564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,47733)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\jobs\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54062)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,21499)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\jobs\\page.js"],u="/jobs/page",A={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/jobs/page",pathname:"/jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},44759:(e,t,r)=>{Promise.resolve().then(r.bind(r,37875)),Promise.resolve().then(r.bind(r,36518))},36518:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var s=r(53854),a=r(34218),n=r(75548),l=r.n(n),i=r(51018),o=r(91574),c=r(30266),d=r(30472),u=r(41956),A=r.n(u);let p={src:"/_next/static/media/search-glass.79c81a62.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAITQAGjgAHDkAGjgAHDkAGjgAHDgAGjUAHTgAHDkAHDkAGzgAHDn56rGFAAAADXRSTlMBO6cbsi1uDE6Yw4mBhucZggAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJwdy8cNACAMBMH1OZH6rxfBezTgW9MAj8qxDHYBFqAEkDPH9yZX0nGeSzrxHt5YXR8WANVGokEcAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var m=r(65053);function x({job:e}){return(0,s.jsxs)("div",{className:"w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between md:flex-col items-center gap-y-2",children:[(0,s.jsxs)("div",{className:"flex gap-5 flex-wrap md:flex-col items-start md:items-center",children:[s.jsx("img",{src:e?.hiringOrganization?.logo?e.hiringOrganization.logo:"/images/jobs/company_logo.JPG",alt:"LOGO",className:"md:w-max md:h-[185px] object-contain w-[206px] h-[150px]"}),(0,s.jsxs)("div",{className:"flex flex-col gap-1.5 md:items-center",children:[s.jsx("p",{className:"text-sm font-normal text-[#B0B0B0]",children:e?.hiringOrganization?.name}),s.jsx("p",{className:"text-xl font-semibold text-black/90",children:e?.title}),s.jsx("p",{className:"text-[15px] font-normal text-[#7B7B7B] md:text-center",dangerouslySetInnerHTML:{__html:e?.description.length>219?e.description.slice(0,216).concat("..."):e.description}}),(0,s.jsxs)("div",{className:"flex gap-1.5 flex-wrap",children:[e?.baseSalary&&s.jsx("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e?.baseSalary.value.value+" "+`${e?.baseSalary.currency?e.baseSalary.currency+" ":""}`+`${e?.baseSalary.value.unitText?"Per "+e.baseSalary.value.unitText:""}`}),e?.locationType&&s.jsx("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e?.jobLocationType})]})]})]}),(0,s.jsxs)("div",{className:"flex gap-2 items-center md:mt-2 md:mx-auto",children:[s.jsx(l(),{href:e?.apply,className:"w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center",children:"Apply"}),s.jsx(l(),{href:`/jobs/${e?.slug}`,as:`/jobs/${e?.slug}`,className:"text-xs font-normal text-black/60",children:"Read More"})]})]})}let h={src:"/_next/static/media/job-review-1.d7ff7412.png",height:43,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEVMaXHZ9TqSm2LQ5lR5eHvZ8U5RUVhZYDSVkaLZ5KvEz43R5lg3NzdISEhGSEbn9aLQ7D9fWnjS7DqWpkHT7j3R5lumsmS/zmza9EbN3ndsb2ONipTA1z65zUJhZkzh/yLV9x/FxcignqiuxTAFBQVhX2aqqLq4ure61CjS09eaqTupedfvAAAAH3RSTlMA8vu1/Lv77CQkNZ6r9bg32DPw+die/fnk/v7+9vn9kJHKBwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwFwQUCgCAABLADJMTulrL//0A3QLNtZTGgyTfvYVTgj3gvajqQsNwRtS1qOznfmxLcDs43JkEhTycOGQNVHmWpwg+ujwTE41z3awAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/job-review-2.6f3c4a86.png",height:43,width:43,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXHcwqeEsPiFhpF1oe5+kb9cmf2cp7SSkpWoudtNYm2DeoOevumsyvFwj9Cws7Ho4+Pc4+10pfNsi57C1vCiqKeSpr+AeGqWt+eYtt6qkX/JqZav1P/Y7v91ZlZsjsOWxv+1k4SmmZiSg4ZwqP9ieoVPRjeGtP9ScYeXKxMfAAAAGnRSTlMA/vH7sfz2Lfsts/mx9LX5LrD07vT3+f6u78SVw/UAAAAJcEhZcwAACxMAAAsTAQCanBgAAABJSURBVHicFcvFEYAwAATAixHBHWK49F8hw/4X0FywQgOSLpaIRCJblbVpwpH73W3H2aALKjr2UNShjPfgJ1TtRcZ3/pvplZH4AIqaBDEcwjAzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},f={src:"/_next/static/media/job-review-3.c4071e6f.png",height:43,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXz8/MbGxvLy8u5ublMaXH////CwsLNzc3////39/fx8fGkpKSQkJD///9tbW2Tk5P29vbb29uwsLDh4eHOzs4DAwPR0dHFxcV/XsCfAAAAEHRSTlOw+y/8AOX9LPzu+P7+s/7+bSfV6gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwQcCwCAIBLATQcAucLT//2kTMMHsUgZ5PHdzBazsXSYgXxl1LIHkOdvxCmAtsgZAbrHSFUzoHco/USoCQX3cWLwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},b={src:"/_next/static/media/job-review-4.4244c637.png",height:43,width:43,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWxsa/a3eAmKTLU2NrX2dXc3+HQ09NMaXHY2tzgyrff2M9+a2NGRUkiJS48P0Y/NDQ/P0YkHSGCgoK7o4aThHnh5ejw8/Th5ufNqZz2/P1vVVCEX1OVnKUAAg7iv6XRtalgS0YAAAQXJEvaAAAAFnRSTlMl3PezKOT7AKH+/Pzy5a7+sv4r/vnqy83y3QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQUCgDAMBLCbthMcpuj/P0kC0spapQkwyW3+ADj5p++VIbIrPWQDUV1pLRnwGe43WgaGa1q+qEEYpZxX+gFzMANfou9ruQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},w={src:"/_next/static/media/job-review-5.91d9cd4d.png",height:43,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEWeoqhvWVCeh4FCYXk6QEtaX2swQE9MaXEqMzhBRkk5Rl2UmaOLaV03NzWGiYtLT2hNWGByX2FIS1CMd3NujZ5KWXEmLTCEdWOhgXHJkHodHx8BCQ8LJTSdbl8EGyffqZMaRWCufmkxaII9NTP/1LoVJjH/6Mzm1ZPpAAAAGXRSTlMn/vzw+PzqAOC2/DP++DStov2i/bm58vn+3MVOmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUeJwFwYUBwCAAA7DizlyAuf1/4hIomBBMVIC+PcljRFvo803FQOfuTPMrobcm7fRgqBe+JnH1gBTEW+agUHE7OPUDkJsD1fKOWBkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},j={src:"/_next/static/media/ratings-star.bb3fe80a.png",height:18,width:19,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXH/zAD/qgD/6QD/swD/5QD/2wD/xwD/zwD/tgD+7gD/3wD/2wD/3QD/1wD/3QD+ygD/1wD+xgD/4AD/0QD/8ADWCRqnAAAAFHRSTlMAG3/ZXmlE/gWv4pBOmU3av93F/iuyvLgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicFcVZEoAgDAXBAQMvcdfA/a9q2T+NO63hDviy/vV9yzzOzjVzjJwP5R6S3gImSQaEIhRANbDKB0zWAfP8LKh8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};function v(){return(0,s.jsxs)("div",{className:"w-[280px] h-[43px] relative",children:[s.jsx(A(),{src:g,alt:"User Image",className:"absolute top-0 w-[43px] h-full"}),s.jsx(A(),{src:w,alt:"User Image",className:"absolute top-0 left-[27px] w-[43px] h-full"}),s.jsx(A(),{src:b,alt:"User Image",className:"absolute top-0 left-[54px] w-[43px] h-full"}),s.jsx(A(),{src:f,alt:"User Image",className:"absolute top-0 left-[81px] w-[43px] h-full"}),s.jsx(A(),{src:h,alt:"User Image",className:"absolute top-0 left-[108px] w-[43px] h-full"}),(0,s.jsxs)("div",{className:"absolute left-[165px] h-full flex flex-col justify-around",children:[(0,s.jsxs)("p",{className:"text-xs text-[#5A5A5A]",children:[s.jsx("b",{children:"+800"})," Loved Talents"]}),s.jsx("div",{className:"flex",children:[1,2,3,4,5].map(e=>s.jsx(A(),{src:j,alt:"Star",height:20,width:20},crypto.randomUUID()))})]})]})}let y=(e,t,s)=>{let a=r(66575);a.request({method:"GET",url:e}).then(e=>{200===e.status&&t(e)}).catch(e=>{s(e)})},N=(e,t,s,a)=>{let n=r(66575);n.request({method:"POST",url:e,headers:{"Content-Type":"application/json"},data:{search:t}}).then(e=>{200===e.status&&s(e)}).catch(e=>{a(e)})};var k=r(861),D=r(87747);function S({currentPageInfo:e,keywordQuery:t}){return s.jsx(D.tl,{children:(0,s.jsxs)(D.ng,{children:[s.jsx(D.nt,{children:s.jsx(D.dN,{href:e?.prev_page_url?"/jobs?page="+e.prev_page_url[e.prev_page_url.length-1]+`${t[0]?"&keywords="+t[0]:""}`:""})}),e?.links&&e.links.slice(1,e.links.length-1).map(e=>s.jsx(D.nt,{children:s.jsx(D.kN,{isActive:e.active,href:e.url?"/jobs?page="+e.url[e.url.length-1]+`${t[0]?"&keywords="+t[0]:""}`:"",children:e.label})},crypto.randomUUID())),s.jsx(D.nt,{children:s.jsx(D.Dj,{})}),s.jsx(D.nt,{children:s.jsx(D.$0,{href:e?.next_page_url?"/jobs?page="+e.next_page_url[e.next_page_url.length-1]+`${t[0]?"&keywords="+t[0]:""}`:""})})]})})}function E(){let[e,t]=(0,a.useState)([]),r=(0,i.useSearchParams)().getAll("page"),n=(0,i.useSearchParams)().getAll("keywords"),[u,h]=(0,a.useState)({}),[g,f]=(0,a.useState)(n[0]?n[0]:""),[b,w]=(0,a.useState)(!1),[j,D]=(0,o.YD)({triggerOnce:!0,rootMargin:"0px"});return(0,a.useEffect)(()=>{n[0]?(w(!0),N(`https://api.analogueshifts.com/api/job/search${r[0]?"?page="+r[0]:""}`,n[0],e=>{t(e.data.data.jobs.data),h(e.data.data.jobs),w(!1)},e=>{w(!1),d.toast.error(e.message,k.D)},"POST")):(w(!0),y(`https://api.analogueshifts.com/api/jobs${r[0]?"?page="+r[0]:""}`,e=>{t(e.data.data.jobs.data),h(e.data.data.jobs),w(!1)},e=>{w(!1),d.toast.error(e.message,k.D)}))},[]),(0,s.jsxs)(s.Fragment,{children:[b&&s.jsx(c.Z,{}),s.jsx("section",{ref:j,className:`duration-500 w-full ${D?"opacity-1 translate-y-0":"opacity-0 translate-y-2"}`,children:s.jsx("section",{className:"w-containerWidth max-w-[95%] mx-auto",children:(0,s.jsxs)("div",{className:"w-full flex flex-col items-center pt-16 md:pt-20 pb-8",children:[(0,s.jsxs)("div",{className:"w-[59px] h-[28px] rounded-full flex mb-4 md:mb-8 justify-center items-center bg-tremor-background-darkYellow/10",children:[s.jsx("p",{className:"text-[10px] font-normal text-tremor-background-darkYellow",children:"Jobs"})," "]}),s.jsx("h3",{className:"md:font-bold max-w-[95%] text-center w-max md:text-4xl leading-10 text-xl font-bold mb-4 md:mb-8 text-tremor-brand-madras",children:"Jobs of your kind are here for you"}),s.jsx("p",{className:"md:font-medium text-center md:leading-8 w-[870px] max-w-full md:text-base text-sm font-medium mb-4 md:mb-8 text-tremor-brand-boulder",children:"Clear and concise job listings, The job search page contains detailed descriptions of the available positions, including the job title, location, and required qualifications."}),s.jsx(l(),{className:"h-9 w-[221px] flex justify-center items-center rounded-full border border-[#EAB308]/20 text-[#EAB308] mb-7 md:mb-12 text-sm font-normal",href:"/contact",children:"Join Us"}),s.jsx(v,{})]})})}),(0,s.jsxs)("section",{className:"w-full",children:[(0,s.jsxs)("div",{className:"mx-auto w-containerWidth px-3 lg:px-16 max-w-[95%] mt-5 duration-500",children:[(0,s.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),g.length>=255){d.toast.error("Search keywords must not exceed 255",k.D);return}window.location.href="/jobs?page=1&keywords="+g},className:"flex w-full relative mt-6 mb-12",children:[s.jsx("button",{type:"submit",className:"absolute top-[22px] right-5 outline-none border-none bg-transparent",children:s.jsx(A(),{src:p,alt:"Search Glass",className:""})}),s.jsx("input",{placeholder:"Search...",value:g,onChange:e=>f(e.target.value),className:"w-full h-[60px] bg-transparent outline-none border placeholder:text-[#D1D1D1] border-[#D2D2D2] text-lg text-tremor-brand-boulder rounded-3xl pl-5 pr-[48px] py-2"})]}),(0,s.jsxs)("div",{className:"w-full pt-9 flex flex-wrap gap-6",children:[0===e.length&&s.jsx("h3",{className:'text-xl font-semibold text-black/90" mx-auto mb-10',children:"No Job Found"}),e.map((e,t)=>s.jsx(x,{job:e},t))]}),s.jsx(S,{currentPageInfo:u,keywordQuery:n})]}),s.jsx("aside",{className:"flex mx-auto w-containerWidth max-w-[95%] justify-center pt-9 pb-16",children:s.jsx(m.Z,{})})]})]})}},65053:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(53854);function a(){return s.jsx("div",{style:{backgroundImage:"url(/images/rectangle.png)"},className:"w-full rounded-[32px] bg-[#D3A121] flex justify-center items-center mt-10 pb-5 pt-14",children:(0,s.jsxs)("div",{className:"w-[85%] md:w-[80%] desktop:w-[820px] flex flex-col items-center",children:[s.jsx("p",{className:"text-lg md:text-3xl font-semibold md:leading-9 text-center mb-5 text-white",children:"New Products delivered to you"}),s.jsx("p",{className:"font-normal text-base md:text-xl mb-7 text-white/70",children:"Kindly, sign up to out jobsletter for the latest updates"}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:"w-[298px] mb-12 flex h-[48px] overflow-x-hidden rounded-full border border-white ",children:[s.jsx("input",{placeholder:"Enter email",className:"w-[55%] px-5 h-full rounded-full border-none outline-none text-sm placeholder:text-white/50 text-white bg-transparent "}),s.jsx("button",{type:"submit",className:"text-xs text-[#D3A121] rounded-full text-center w-[50%] bg-white",children:"Subscribe"})]}),s.jsx("p",{className:"font-normal text-sm md:text-base mb-7 text-white/50",children:"We are about privacy and we will never share your data"})]})})}},30266:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(53854);function a(){return s.jsx("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30",children:(0,s.jsxs)("div",{className:"lds-roller",children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]})})}},87747:(e,t,r)=>{"use strict";r.d(t,{tl:()=>g,ng:()=>f,Dj:()=>y,nt:()=>b,kN:()=>w,$0:()=>v,dN:()=>j});var s,a,n=r(53854),l=r(34218),i=r(81530);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,i.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var c=r(60175);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,i.Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);r(75548);var u=r(71656),A=r(15001);let p=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,m=function(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(s=e(t[r]))&&(a&&(a+=" "),a+=s);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(s&&(s+=" "),s+=t);return s},x=(s="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",a={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var t;if((null==a?void 0:a.variants)==null)return m(s,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:r,defaultVariants:n}=a,l=Object.keys(r).map(t=>{let s=null==e?void 0:e[t],a=null==n?void 0:n[t];if(null===s)return null;let l=p(s)||p(a);return r[t][l]}),i=e&&Object.entries(e).reduce((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e},{}),o=null==a?void 0:null===(t=a.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:r,className:s,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...n,...i}[t]):({...n,...i})[t]===r})?[...e,r,s]:e},[]);return m(s,l,o,null==e?void 0:e.class,null==e?void 0:e.className)}),h=l.forwardRef(({className:e,variant:t,size:r,asChild:s=!1,...a},l)=>{let i=s?A.g7:"button";return n.jsx(i,{className:(0,u.cn)(x({variant:t,size:r,className:e})),ref:l,...a})});h.displayName="Button";let g=({className:e,...t})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:(0,u.cn)("mx-auto flex w-full justify-center",e),...t});g.displayName="Pagination";let f=l.forwardRef(({className:e,...t},r)=>n.jsx("ul",{ref:r,className:(0,u.cn)("flex flex-row items-center gap-1",e),...t}));f.displayName="PaginationContent";let b=l.forwardRef(({className:e,...t},r)=>n.jsx("li",{ref:r,className:(0,u.cn)("",e),...t}));b.displayName="PaginationItem";let w=({className:e,isActive:t,size:r="icon",...s})=>n.jsx("a",{"aria-current":t?"page":void 0,className:(0,u.cn)(x({variant:t?"outline":"ghost",size:r}),e),...s});w.displayName="PaginationLink";let j=({className:e,...t})=>(0,n.jsxs)(w,{"aria-label":"Go to previous page",size:"default",className:(0,u.cn)("gap-1 pl-2.5",e),...t,children:[n.jsx(o,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});j.displayName="PaginationPrevious";let v=({className:e,...t})=>(0,n.jsxs)(w,{"aria-label":"Go to next page",size:"default",className:(0,u.cn)("gap-1 pr-2.5",e),...t,children:[n.jsx("span",{children:"Next"}),n.jsx(c.Z,{className:"h-4 w-4"})]});v.displayName="PaginationNext";let y=({className:e,...t})=>(0,n.jsxs)("span",{"aria-hidden":!0,className:(0,u.cn)("flex h-9 w-9 items-center justify-center",e),...t,children:[n.jsx(d,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});y.displayName="PaginationEllipsis"},71656:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(29395),a=r(1088);function n(...e){return(0,a.m6)((0,s.W)(e))}},81530:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(34218),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(e,t)=>{let r=(0,s.forwardRef)(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:d,...u},A)=>(0,s.createElement)("svg",{ref:A,...a,width:l,height:l,stroke:r,strokeWidth:o?24*Number(i)/Number(l):i,className:["lucide",`lucide-${n(e)}`,c].join(" "),...u},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r}},60175:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(81530);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},6695:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return o},default:function(){return c}});let s=r(10143),a=r(60288),n=r(77966),l=r(88469),i=s._(r(17096)),o=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=l.Image},41956:(e,t,r)=>{"use strict";e.exports=r(6695)},861:(e,t,r)=>{"use strict";r.d(t,{D:()=>s});let s={position:"top-right",autoClose:3e3}},47733:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>d});var s=r(4656),a=r(17172),n=r(95153);let l=(0,n.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\components\application\jobs-page\job-view.js`),{__esModule:i,$$typeof:o}=l,c=l.default,d={title:"Jobs in Tech",description:"Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.",openGraph:{title:"Jobs in Tech",description:"Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.",url:"https://www.analogueshifts.com/jobs",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/jobs"}};function u(){return s.jsx(a.ZP,{children:s.jsx(c,{})})}},17172:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});var s=r(95153);let a=(0,s.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\app\layouts\guest-layout.js`),{__esModule:n,$$typeof:l}=a,i=a.default,o=i},93836:(e,t,r)=>{"use strict";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}r.d(t,{Z:()=>s})},81951:(e,t,r)=>{"use strict";r.d(t,{F:()=>a,e:()=>n});var s=r(34218);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function n(...e){return(0,s.useCallback)(a(...e),e)}},15001:(e,t,r)=>{"use strict";r.d(t,{g7:()=>l});var s=r(93836),a=r(34218),n=r(81951);let l=(0,a.forwardRef)((e,t)=>{let{children:r,...n}=e,l=a.Children.toArray(r),o=l.find(c);if(o){let e=o.props.children,r=l.map(t=>t!==o?t:a.Children.count(e)>1?a.Children.only(null):(0,a.isValidElement)(e)?e.props.children:null);return(0,a.createElement)(i,(0,s.Z)({},n,{ref:t}),(0,a.isValidElement)(e)?(0,a.cloneElement)(e,void 0,r):null)}return(0,a.createElement)(i,(0,s.Z)({},n,{ref:t}),r)});l.displayName="Slot";let i=(0,a.forwardRef)((e,t)=>{let{children:r,...s}=e;return(0,a.isValidElement)(r)?(0,a.cloneElement)(r,{...function(e,t){let r={...t};for(let s in t){let a=e[s],n=t[s],l=/^on[A-Z]/.test(s);l?a&&n?r[s]=(...e)=>{n(...e),a(...e)}:a&&(r[s]=a):"style"===s?r[s]={...a,...n}:"className"===s&&(r[s]=[a,n].filter(Boolean).join(" "))}return{...e,...r}}(s,r.props),ref:t?(0,n.F)(t,r.ref):r.ref}):a.Children.count(r)>1?a.Children.only(null):null});i.displayName="SlotClone";let o=({children:e})=>(0,a.createElement)(a.Fragment,null,e);function c(e){return(0,a.isValidElement)(e)&&e.type===o}},91574:(e,t,r)=>{"use strict";r.d(t,{YD:()=>c});var s=r(34218),a=Object.defineProperty,n=new Map,l=new WeakMap,i=0,o=void 0;function c({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:c,triggerOnce:d,skip:u,initialInView:A,fallbackInView:p,onChange:m}={}){var x;let[h,g]=s.useState(null),f=s.useRef(),[b,w]=s.useState({inView:!!A,entry:void 0});f.current=m,s.useEffect(()=>{let s;if(!u&&h)return s=function(e,t,r={},s=o){if(void 0===window.IntersectionObserver&&void 0!==s){let a=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}let{id:a,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(l.has(r)||(i+=1,l.set(r,i.toString())),l.get(r)):"0":e[t]}`}).toString(),r=n.get(t);if(!r){let s;let a=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var r;let n=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=a.get(t.target))||r.forEach(e=>{e(n,t)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:l,elements:a},n.set(t,r)}return r}(r),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),c.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),n.delete(a))}}(h,(e,t)=>{w({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&d&&s&&(s(),s=void 0)},{root:c,rootMargin:a,threshold:e,trackVisibility:r,delay:t},p),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,h,c,a,d,u,r,p,t]);let j=null==(x=b.entry)?void 0:x.target,v=s.useRef();h||!j||d||u||v.current===j||(v.current=j,w({inView:!!A,entry:void 0}));let y=[g,b.inView,b.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}s.Component}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[3271,7237,5548,6575,8469,1830,1088,9523],()=>r(28676));module.exports=s})();