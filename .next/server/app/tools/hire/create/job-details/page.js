(()=>{var e={};e.id=4407,e.ids=[4407],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58549:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d});var s=r(67096),a=r(16132),l=r(37284),o=r.n(l),n=r(32564),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);r.d(t,i);let d=["",{children:["tools",{children:["hire",{children:["create",{children:["job-details",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,17320)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\tools\\hire\\create\\job-details\\page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54062)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,21499)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\tools\\hire\\create\\job-details\\page.js"],c="/tools/hire/create/job-details/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/tools/hire/create/job-details/page",pathname:"/tools/hire/create/job-details",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},57998:(e,t,r)=>{Promise.resolve().then(r.bind(r,50122))},50122:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(53854),a=r(34218),l=r(98865),o=r(38318),n=r(51018),i=r(75548),d=r.n(i),u=r(53996),c=r(85290),m=r(30472);function x(){let[e,t]=(0,a.useState)(!0),[r,i]=(0,a.useState)(c.ki[0]),[x,b]=(0,a.useState)(c.Gh[0]),[p,f]=(0,a.useState)(c.kX[0]),[h,j]=(0,a.useState)(c.ru[0]),[g,w]=(0,a.useState)(""),[N,y]=(0,a.useState)(c.l2[0]),[v,E]=(0,a.useState)(""),k=(0,n.useRouter)(),P=(0,a.useRef)();return(0,a.useEffect)(()=>{let e=o.Z.get("jobPostData");if(e){if(JSON.parse(e).jobDetails){var t=JSON.parse(e).jobDetails;E(t.apply),f(t.directApply),b("0"===t.status?"Offline":"Online"),i(t.employmentType),j(t.salaryCurrency),w(t.salaryValue),y(t.salaryUnitText)}}else e&&JSON.parse(e).jobInformation||k.push("/tools/hire/create/job-information")},[]),(0,a.useEffect)(()=>{var e=!1;[g,v].forEach(t=>{""===t&&(e=!0)}),t(e)},[g,v]),(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),isNaN(g)){m.toast.error("Error! Salary value must be a valid number",{position:"top-right",autoClose:3e3});return}let t=o.Z.get("jobPostData");if(t){let e=JSON.parse(t);o.Z.set("jobPostData",JSON.stringify({...e,jobDetails:{employmentType:r,apply:v,directApply:p,status:"Offline"===x?"0":"1",salaryCurrency:h,salaryValue:g,salaryUnitText:N}}))}k.push("/tools/hire/create/job-location")},className:"w-full flex flex-col gap-6",children:[(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"JOB STATUS"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Status of the Job Post."})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx(u.Z,{value:x,onChange:b,list:c.Gh})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"EMPLOYMENT TYPE"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Specifies the type of employment offered for the job."})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx(u.Z,{value:r,onChange:i,list:c.ki})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY CURRENCY"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The currency in which the salary is denoted, such as USD, EUR, or GBP."})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx(u.Z,{value:h,onChange:j,list:c.ru})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY VALUE"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The numerical value representing the salary amount offered for the job."})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx("input",{required:!0,type:"text",value:g,onChange:e=>w(e.target.value),placeholder:"e.g “2000”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY UNIT TEXT"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Indicates the time unit associated with the salary value."})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx(u.Z,{value:N,onChange:y,list:c.l2})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"DIRECT APPLY"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Job Application link type"})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx(u.Z,{value:p,onChange:f,list:c.kX})})]}),(0,s.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[s.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"APPLY"}),s.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Job Application URL"})]}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx("input",{required:!0,type:"url",value:v,onChange:e=>E(e.target.value),placeholder:"e.g “https://www.analogueshifts.com”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),s.jsx("input",{ref:P,type:"submit",className:"-z-10 opacity-0"})]}),(0,s.jsxs)("div",{className:"flex w-full justify-between",children:[(0,s.jsxs)(d(),{href:"/tools/hire/create/job-information",className:"px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full",children:[s.jsx("i",{className:"fas fa-arrow-left "})," Previous"]}),(0,s.jsxs)("button",{disabled:e,onClick:()=>P.current.click(),type:"button",className:`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${e?"opacity-50":"opacity-100"}`,children:["Next ",s.jsx("i",{className:"fas fa-arrow-right "})]})]})]})}},98865:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(53854),a=r(51018),l=r(34218),o=r(38318),n=r(19639);function i({children:e}){let t=(0,a.usePathname)(),[r,i]=(0,l.useState)(null),[d,u]=(0,l.useState)(["job-information"]);return(0,l.useEffect)(()=>{o.Z.get("analogueshifts")&&i(JSON.parse(o.Z.get("analogueshifts")))},[]),(0,l.useEffect)(()=>{"job-information"===t.slice(19,t.length)?u(["job-information"]):"job-details"===t.slice(19,t.length)?u(["job-information","job-details"]):"job-location"===t.slice(19,t.length)?u(["job-information","job-details","job-location"]):"organization-information"===t.slice(19,t.length)&&u(["job-information","job-details","job-location","organization-information"])},[t]),s.jsx(n.Z,{user:r,header:s.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:(0,s.jsxs)("section",{className:"bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl",children:[(0,s.jsxs)("div",{className:"w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center",children:[s.jsx("button",{className:`text-sm font-medium ${d.includes("job-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Information"}),s.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),s.jsx("button",{className:`text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Details"}),s.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),s.jsx("button",{className:`text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Location"}),s.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),s.jsx("button",{className:`text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Organization Information"})]}),e]})})}},85290:(e,t,r)=>{"use strict";r.d(t,{Ef:()=>s,Gh:()=>l,kX:()=>o,ki:()=>a,l2:()=>i,ru:()=>n});let s=["TELECOMMUTE","Hybrid","Onsite"],a=["FULL_TIME","PART_TIME","CONTRACTOR","TEMPORARY","INTERN","VOLUNTEER","PER_DIEM","OTHER"],l=["Online","Offline"],o=["true","false"],n=["USD","EUR","GBP","NGN"],i=["HOUR","DAY","WEEK","MONTH","YEAR"]},53996:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(53854),a=r(34218);function l({value:e,onChange:t,list:r}){let[l,o]=(0,a.useState)(!1);return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative mt-2",children:[(0,s.jsxs)("button",{type:"button",onClick:()=>{o(e=>!e)},className:"relative text-[13px] text-tremor-brand-boulder950 w-full h-14 cursor-default rounded-2xl bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-tremor-brand-boulder200 focus:outline-none focus:ring-2 focus:ring-tremor-background-darkYellow sm:text-sm sm:leading-6",children:[s.jsx("span",{className:"flex items-center",children:s.jsx("span",{className:"ml-3 block truncate",children:e})}),s.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2",children:s.jsx("i",{className:"fas fa-angle-down w-5 text-gray-400","aria-hidden":"true"})})]}),s.jsx("div",{style:{boxShadow:"0px 20px 417px 0px #00000012"},className:`absolute z-[500] duration-300 top-[60px] max-h-56 w-full overflow-auto rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3 ${l?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-2"}`,children:r.map(e=>s.jsx("div",{onClick:()=>{o(!1),t(e)},className:"text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]",children:s.jsx("div",{className:"flex items-center",children:s.jsx("span",{className:"ml-3 block truncate font-normal",children:e})})},crypto.randomUUID()))})]})})}},17320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>d});var s=r(4656),a=r(95153);let l=(0,a.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\app\tools\hire\components\create\job-details.js`),{__esModule:o,$$typeof:n}=l,i=l.default,d={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire/talents",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire/talents"}};function u(){return s.jsx(i,{})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[3271,7237,5548,6575,8469,2299,7679],()=>r(58549));module.exports=s})();