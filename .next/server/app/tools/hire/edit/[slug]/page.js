(()=>{var e={};e.id=9330,e.ids=[9330],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58834:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>p,routeModule:()=>h,tree:()=>u});var i=r(67096),s=r(16132),a=r(37284),o=r.n(a),n=r(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let u=["",{children:["tools",{children:["hire",{children:["edit",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,91447)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\edit\\[slug]\\page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54062)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,21499)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\edit\\[slug]\\page.js"],c="/tools/hire/edit/[slug]/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/tools/hire/edit/[slug]/page",pathname:"/tools/hire/edit/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},15894:(e,t,r)=>{Promise.resolve().then(r.bind(r,43706))},43706:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(53854),s=r(34218),a=r(56294),o=r(30472),n=r(51018),l=r(80542),u=r(38318),p=r(861);function c({slug:e}){let t=(0,n.useRouter)(),[c,d]=(0,s.useState)(null),[h,g]=(0,s.useState)(!1),m=()=>{g(!0);let i=r(66575),s={method:"GET",url:"https://api.analogueshifts.com/api/hire/edit/"+e,headers:{Authorization:"Bearer "+c.token}};i.request(s).then(r=>{let i=r.data.data.hire;i?(u.Z.set("jobEditIngData",JSON.stringify({jobInformation:{title:i.title,description:i.description,identifierName:i.identifier.name?i.identifier.name:"",identifierValue:i.identifier.value?i.identifier.value:"",validThrough:i.validThrough},organizationInformation:{organizationName:i.hiringOrganization.name,organizationUrl:i.hiringOrganization.sameAs?i.hiringOrganization.sameAs:"",organizationLogo:i.hiringOrganization.logo?i.hiringOrganization.logo:""},jobLocation:{...i.jobLocation.address,jobLocationType:i.jobLocationType,stateRequirements:[...i.applicantLocationRequirements.filter(e=>"State"===e["@type"])],countryRequirements:[...i.applicantLocationRequirements.filter(e=>"Country"===e["@type"])]},jobDetails:{employmentType:i.employmentType,apply:i.apply,directApply:i.directApply,status:i.status,salaryCurrency:i.baseSalary.currency,salaryValue:i.baseSalary.value.value,salaryUnitText:i.baseSalary.value.unitText},editId:i.id})),t.push(`/tools/hire/edit/${e}/job-information`)):(o.toast.error("Error Getting Jobs",{position:"top-right",autoClose:3e3}),t.push("/404")),g(!1)}).catch(e=>{g(!1),t.push("/404"),o.toast.error("Error Getting Jobs",p.D)})};return(0,s.useEffect)(()=>{c&&m()},[c]),(0,s.useEffect)(()=>{u.Z.get("analogueshifts")&&d(JSON.parse(u.Z.get("analogueshifts")))},[]),(0,i.jsxs)(a.Z,{header:i.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:[" ",h&&i.jsx(l.Z,{})]})}},91447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>u});var i=r(4656),s=r(95153);let a=(0,s.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\analogueshifts.com\app\tools\hire\components\edit-page.js`),{__esModule:o,$$typeof:n}=a,l=a.default,u={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire"}};function p({params:e}){return i.jsx(l,{slug:e.slug})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[3271,7237,5548,6575,8469,895,2412,4874],()=>r(58834));module.exports=i})();