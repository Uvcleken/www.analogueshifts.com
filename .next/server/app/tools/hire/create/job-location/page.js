(()=>{var e={};e.id=8534,e.ids=[8534],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},14277:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d});var o=r(67096),l=r(16132),a=r(37284),s=r.n(a),n=r(32564),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);r.d(t,i);let d=["",{children:["tools",{children:["hire",{children:["create",{children:["job-location",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,11533)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\tools\\hire\\create\\job-location\\page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54062)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,21499)),"C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\analogueshifts\\www\\app\\tools\\hire\\create\\job-location\\page.js"],c="/tools/hire/create/job-location/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new o.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/tools/hire/create/job-location/page",pathname:"/tools/hire/create/job-location",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},29572:(e,t,r)=>{Promise.resolve().then(r.bind(r,98721))},98721:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var o=r(53854),l=r(34218),a=r(98865),s=r(38318),n=r(51018),i=r(75548),d=r.n(i),u=r(53996),c=r(85290),m=r(30472);function x(){let e=(0,n.useRouter)(),[t,r]=(0,l.useState)(""),[i,x]=(0,l.useState)(""),[b,p]=(0,l.useState)(""),[f,h]=(0,l.useState)(""),[g,j]=(0,l.useState)(""),[w,N]=(0,l.useState)(""),[y,v]=(0,l.useState)(""),[k,E]=(0,l.useState)(c.Ef[0]),[C,S]=(0,l.useState)([]),[T,O]=(0,l.useState)([]),A=(0,l.useRef)();(0,l.useEffect)(()=>{let t=s.Z.get("jobPostData");if(t){if(JSON.parse(t).jobLocation){var r=JSON.parse(t).jobLocation;p(r.streetAddress),h(r.addressLocality),j(r.addressRegion),N(r.postalCode),v(r.addressCountry),E(r.jobLocationType),S(r.stateRequirements),O(r.countryRequirements)}}else t&&JSON.parse(t).jobInformation&&JSON.parse(t).jobDetails||e.push("/tools/hire/create/job-information")},[]);let R=e=>{S(t=>t.filter(t=>t.name!==e)),m.toast.success("Deleted Successfully",{position:"top-right",autoClose:3e3})},P=e=>{O(t=>t.filter(t=>t.name!==e)),m.toast.success("Deleted Successfully",{position:"top-right",autoClose:3e3})};return(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)("form",{onSubmit:t=>{t.preventDefault();let r=s.Z.get("jobPostData");if(r){let e=JSON.parse(r);s.Z.set("jobPostData",JSON.stringify({...e,jobLocation:{streetAddress:b,addressLocality:f,addressRegion:g,postalCode:w,addressCountry:y,jobLocationType:k,stateRequirements:C,countryRequirements:T}}))}e.push("/tools/hire/create/organization-information")},className:"w-full flex flex-col gap-6",children:[(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"STREET ADDRESS (Optional)"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The specific street or building address of the company's location."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:b,onChange:e=>p(e.target.value),placeholder:"e.g “5th Avenue”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"STATE (Optional)"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The region or state/province where the company is located."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:f,onChange:e=>h(e.target.value),placeholder:"e.g “Manhattan”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"REGION (Optional)"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The company's address Region."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:g,onChange:e=>j(e.target.value),placeholder:"e.g “Midwest”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"COUNTRY (Optional)"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The country where the company is located."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:y,onChange:e=>v(e.target.value),placeholder:"e.g “USA”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"POSTAL CODE (Optional)"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The postal code or ZIP code associated with the company's location."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:w,onChange:e=>N(e.target.value),placeholder:"e.g “000000”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"JOB LOCATION TYPE"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The type of location suitable for the job."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx(u.Z,{value:k,onChange:E,list:c.Ef})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"APPLICANT LOCATION REQUIREMENT - STATE"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900 ",children:"States where the applicants must work from."}),o.jsx("div",{className:"w-full border-t border-tremor-brand-boulder200/30 flex flex-col",children:C.map(e=>(0,o.jsxs)("div",{className:"w-full flex justify-between px-2 items-center py-2.5 border-b border-tremor-brand-boulder200/30",children:[o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:e.name}),o.jsx("button",{onClick:()=>R(e.name),type:"button",className:"px-5 h-6 rounded-md  text-red-600 flex justify-center items-center",children:o.jsx("i",{className:"fas fa-trash"})})]},crypto.randomUUID()))})]}),(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4",children:[o.jsx("input",{value:t,onChange:e=>r(e.target.value),type:"text",placeholder:"e.g “Texas”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"}),(0,o.jsxs)("button",{onClick:()=>{let e=!0;if(""===t){m.toast.error("State Field is empty!",{position:"top-right",autoClose:3e3});return}C.forEach(r=>{r.name===t&&(e=!1)}),e?(S(e=>[...e,{"@type":"State",name:t}]),r("")):(r(""),m.toast.error("State Already Exist",{position:"top-right",autoClose:3e3}))},type:"button",className:"w-full flex justify-center items-center gap-2.5 rounded-2xl border border-tremor-background-darkYellow text-tremor-background-darkYellow text-sm font-medium h-12",children:["Add Requirement ",o.jsx("i",{className:"fas fa-plus"})]})]})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"APPLICANT LOCATION REQUIREMENT - COUNTRY"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900 ",children:"Countries where the applicants must work from."}),o.jsx("div",{className:"w-full border-t border-tremor-brand-boulder200/30 flex flex-col",children:T.map(e=>(0,o.jsxs)("div",{className:"w-full flex justify-between px-2 items-center py-2.5 border-b border-tremor-brand-boulder200/30",children:[o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:e.name}),o.jsx("button",{onClick:()=>P(e.name),type:"button",className:"px-5 h-6 rounded-md  text-red-600 flex justify-center items-center",children:o.jsx("i",{className:"fas fa-trash"})})]},crypto.randomUUID()))})]}),(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4",children:[o.jsx("input",{value:i,onChange:e=>x(e.target.value),type:"text",placeholder:"e.g “USA”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"}),(0,o.jsxs)("button",{onClick:()=>{let e=!0;if(""===i){m.toast.error("Country Field is empty!",{position:"top-right",autoClose:3e3});return}T.forEach(t=>{t.name===i&&(e=!1)}),e?(O(e=>[...e,{"@type":"Country",name:i}]),x("")):(x(""),m.toast.error("Country Already Exist",{position:"top-right",autoClose:3e3}))},type:"button",className:"w-full flex justify-center items-center gap-2.5 rounded-2xl border border-tremor-background-darkYellow text-tremor-background-darkYellow text-sm font-medium h-12",children:["Add Requirement ",o.jsx("i",{className:"fas fa-plus"})]})]})]}),o.jsx("input",{ref:A,type:"submit",className:"-z-10 opacity-0"})]}),(0,o.jsxs)("div",{className:"flex w-full justify-between",children:[(0,o.jsxs)(d(),{href:"/tools/hire/create/job-details",className:"px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full",children:[o.jsx("i",{className:"fas fa-arrow-left "})," Previous"]}),(0,o.jsxs)("button",{onClick:()=>A.current.click(),type:"button",className:"px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none",children:["Next ",o.jsx("i",{className:"fas fa-arrow-right "})]})]})]})}},98865:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(53854),l=r(51018),a=r(34218),s=r(38318),n=r(19639);function i({children:e}){let t=(0,l.usePathname)(),[r,i]=(0,a.useState)(null),[d,u]=(0,a.useState)(["job-information"]);return(0,a.useEffect)(()=>{s.Z.get("analogueshifts")&&i(JSON.parse(s.Z.get("analogueshifts")))},[]),(0,a.useEffect)(()=>{"job-information"===t.slice(19,t.length)?u(["job-information"]):"job-details"===t.slice(19,t.length)?u(["job-information","job-details"]):"job-location"===t.slice(19,t.length)?u(["job-information","job-details","job-location"]):"organization-information"===t.slice(19,t.length)&&u(["job-information","job-details","job-location","organization-information"])},[t]),o.jsx(n.Z,{user:r,header:o.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:(0,o.jsxs)("section",{className:"bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl",children:[(0,o.jsxs)("div",{className:"w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center",children:[o.jsx("button",{className:`text-sm font-medium ${d.includes("job-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Information"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Details"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Location"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Organization Information"})]}),e]})})}},85290:(e,t,r)=>{"use strict";r.d(t,{Ef:()=>o,Gh:()=>a,kX:()=>s,ki:()=>l,l2:()=>i,ru:()=>n});let o=["TELECOMMUTE","Hybrid","Onsite"],l=["FULL_TIME","PART_TIME","CONTRACTOR","TEMPORARY","INTERN","VOLUNTEER","PER_DIEM","OTHER"],a=["Online","Offline"],s=["true","false"],n=["USD","EUR","GBP","NGN"],i=["HOUR","DAY","WEEK","MONTH","YEAR"]},53996:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(53854),l=r(34218);function a({value:e,onChange:t,list:r}){let[a,s]=(0,l.useState)(!1);return o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:"relative mt-2",children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{s(e=>!e)},className:"relative text-[13px] text-tremor-brand-boulder950 w-full h-14 cursor-default rounded-2xl bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-tremor-brand-boulder200 focus:outline-none focus:ring-2 focus:ring-tremor-background-darkYellow sm:text-sm sm:leading-6",children:[o.jsx("span",{className:"flex items-center",children:o.jsx("span",{className:"ml-3 block truncate",children:e})}),o.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2",children:o.jsx("i",{className:"fas fa-angle-down w-5 text-gray-400","aria-hidden":"true"})})]}),o.jsx("div",{style:{boxShadow:"0px 20px 417px 0px #00000012"},className:`absolute z-[500] duration-300 top-[60px] max-h-56 w-full overflow-auto rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3 ${a?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-2"}`,children:r.map(e=>o.jsx("div",{onClick:()=>{s(!1),t(e)},className:"text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]",children:o.jsx("div",{className:"flex items-center",children:o.jsx("span",{className:"ml-3 block truncate font-normal",children:e})})},crypto.randomUUID()))})]})})}},11533:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>d});var o=r(4656),l=r(95153);let a=(0,l.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\analogueshifts\www\app\tools\hire\components\create\job-location.js`),{__esModule:s,$$typeof:n}=a,i=a.default,d={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire/talents",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire/talents"}};function u(){return o.jsx(i,{})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[3271,7237,5548,6575,8469,2299,5037],()=>r(14277));module.exports=o})();