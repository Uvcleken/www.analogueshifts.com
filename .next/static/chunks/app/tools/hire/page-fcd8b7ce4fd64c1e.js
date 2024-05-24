(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1171],{1291:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5380);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7158:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5380);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},9534:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5380);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a.Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},7235:function(e,t,n){Promise.resolve().then(n.bind(n,263))},263:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7437),r=n(2265),s=n(948),l=n(1396),i=n.n(l),o=n(3333),c=n(7415),u=n(1490),d=n(8353),x=n(4033),f=n(4486),m=n(2651),h=n(4011);function p(){let[e,t]=(0,r.useState)(null),l=(0,x.useSearchParams)().getAll("page"),[p,g]=(0,r.useState)({}),[b,j]=(0,r.useState)(!1),[v,y]=(0,r.useState)(null),[N,w]=(0,r.useState)([]),[k,E]=(0,r.useState)(!1),P=(0,x.useRouter)(),_="".concat("https://api.analogueshifts.com/api","/hire/dashboard").concat(l.length?"?page=".concat(l[0]):""),Z=()=>{E(!0),(0,f.y)(_,e.token,e=>{w(e.data.data.hires.data),g(e.data.data.hires),E(!1)},e=>{E(!1),c.toast.error(e.message,m.D)})},S=async()=>{E(!0),function(e,t,a,r){let s=n(1630);s.request({method:"DELETE",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}("https://api.analogueshifts.com/api/hire/"+v,e.token,()=>{Z(),c.toast.success("Job Deleted Successfully",m.D),y(null),E(!1)},e=>{c.toast.error("Error Deleting Job",m.D),E(!1)})};return(0,r.useEffect)(()=>{u.Z.get("analogueshifts")&&t(JSON.parse(u.Z.get("analogueshifts")))},[]),(0,r.useEffect)(()=>{e&&Z()},[e]),(0,a.jsxs)(s.Z,{header:(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:[k&&(0,a.jsx)(o.Z,{}),(0,a.jsx)(d.Z,{title:"Delete Post",action:()=>{S(),j(!1)},close:()=>{y(null),j(!1)},description:"Are you sure you want to delete this Post? This  Job Post will not be  visible to Talents anymore. This action cannot be undone.",open:b}),(0,a.jsxs)("button",{onClick:()=>{u.Z.remove("jobPostData"),P.push("/tools/hire/create/job-information")},type:"button",className:"h-10 bg-none mx-auto outline-none rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow",children:["Hire Talents",(0,a.jsx)("i",{className:"fas fa-plus"})]}),(0,a.jsx)("div",{className:"w-full pt-9 flex flex-wrap gap-6 ",children:N&&N.map(e=>(0,a.jsxs)("div",{className:"w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2",children:[(0,a.jsxs)("div",{className:"flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center",children:[(0,a.jsx)("img",{src:e.hiringOrganization.logo&&e.hiringOrganization.logo[0]?e.hiringOrganization.logo[0]:"/images/jobs/company_logo.JPG",alt:"LOGO",className:"md:w-max md:h-[100px] object-contain w-[156px] h-[100px]"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1.5 items-center md:items-center",children:[(0,a.jsx)("p",{className:"text-sm font-normal text-[#B0B0B0]",children:e.hiringOrganization.name}),(0,a.jsx)("p",{className:"text-xl font-semibold text-black/90",children:e.title}),(0,a.jsx)("p",{className:"text-[15px] font-normal text-[#7B7B7B] md:text-center",dangerouslySetInnerHTML:{__html:e.description.length>100?e.description.slice(0,100).concat("..."):e.description}}),(0,a.jsxs)("div",{className:"flex gap-1.5 flex-wrap",children:[(0,a.jsx)("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e.baseSalary.value.value+" "+e.baseSalary.currency+" Per "+e.baseSalary.value.unitText}),(0,a.jsx)("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e.jobLocationType})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-2 mx-auto items-center md:mt-2 md:mx-auto",children:[(0,a.jsx)(i(),{href:"/tools/hire/edit/".concat(e.uuid),className:"w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center",children:"Edit"}),(0,a.jsx)(i(),{href:e.apply,as:e.apply,className:"text-xs font-normal text-black/60",children:"View"}),(0,a.jsx)("button",{onClick:()=>{y(e.id),j(!0)},className:"text-xs font-normal text-red-500",children:"Delete"})]})]},e.id))}),(0,a.jsx)("div",{className:"w-max mx-auto overflow-x-hidden h-max rounded-full scrollbar-hidden",children:(0,a.jsx)(h.tl,{className:" w-max",children:(0,a.jsxs)(h.ng,{className:"bg-transparent h-full",children:[(0,a.jsx)(h.nt,{children:(0,a.jsx)(h.dN,{href:(null==p?void 0:p.prev_page_url)?p.prev_page_url.slice(34):""})}),(null==p?void 0:p.links)&&p.links.slice(1,p.links.length-1).map(e=>(0,a.jsx)(h.nt,{children:(0,a.jsx)(h.kN,{isActive:e.active,href:e.url?e.url.slice(34):"",children:e.label})},crypto.randomUUID())),(0,a.jsx)(h.nt,{children:(0,a.jsx)(h.Dj,{})}),(0,a.jsx)(h.nt,{children:(0,a.jsx)(h.$0,{href:(null==p?void 0:p.next_page_url)?p.next_page_url.slice(34):""})})]})})})]})}},4011:function(e,t,n){"use strict";n.d(t,{tl:function(){return f},ng:function(){return m},Dj:function(){return j},nt:function(){return h},kN:function(){return p},$0:function(){return b},dN:function(){return g}});var a=n(7437),r=n(2265),s=n(1291),l=n(7158),i=n(9534);n(1396);var o=n(3889),c=n(7256),u=n(9213);let d=(0,u.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=r.forwardRef((e,t)=>{let{className:n,variant:r,size:s,asChild:l=!1,...i}=e,u=l?c.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(d({variant:r,size:s,className:n})),ref:t,...i})});x.displayName="Button";let f=e=>{let{className:t,...n}=e;return(0,a.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",t),...n})};f.displayName="Pagination";let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("ul",{ref:t,className:(0,o.cn)("flex flex-row items-center gap-1",n),...r})});m.displayName="PaginationContent";let h=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("li",{ref:t,className:(0,o.cn)("",n),...r})});h.displayName="PaginationItem";let p=e=>{let{className:t,isActive:n,size:r="icon",...s}=e;return(0,a.jsx)("a",{"aria-current":n?"page":void 0,className:(0,o.cn)(d({variant:n?"outline":"ghost",size:r}),t),...s})};p.displayName="PaginationLink";let g=e=>{let{className:t,...n}=e;return(0,a.jsxs)(p,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("gap-1 pl-2.5",t),...n,children:[(0,a.jsx)(s.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Previous"})]})};g.displayName="PaginationPrevious";let b=e=>{let{className:t,...n}=e;return(0,a.jsxs)(p,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("gap-1 pr-2.5",t),...n,children:[(0,a.jsx)("span",{children:"Next"}),(0,a.jsx)(l.Z,{className:"h-4 w-4"})]})};b.displayName="PaginationNext";let j=e=>{let{className:t,...n}=e;return(0,a.jsxs)("span",{"aria-hidden":!0,className:(0,o.cn)("flex h-9 w-9 items-center justify-center",t),...n,children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"More pages"})]})};j.displayName="PaginationEllipsis"},4486:function(e,t,n){"use strict";function a(e,t,a,r){let s=n(1630);s.request({method:"GET",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}n.d(t,{y:function(){return a}})}},function(e){e.O(0,[1176,1630,413,2303,3203,1525,948,2971,2472,1744],function(){return e(e.s=7235)}),_N_E=e.O()}]);