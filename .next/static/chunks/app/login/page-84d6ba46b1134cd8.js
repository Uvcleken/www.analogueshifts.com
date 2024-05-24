(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{3942:function(e,t,s){Promise.resolve().then(s.bind(s,149))},149:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var l=s(7437),a=s(9666),n=s(8044),r=s(8853),i=s(6691),o=s.n(i),c=s(3206),d=s(2265),u=s(1396),x=s.n(u),A=s(7415),f=s(1490),h=s(2651),m=s(403);function g(){let[e,t]=(0,d.useState)(""),[i,u]=(0,d.useState)(""),[g,p]=(0,d.useState)(""),[j,b]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=f.Z.get("analogueshifts");if(e)return window.location.href="/dashboard",null},[]),(0,l.jsxs)(l.Fragment,{children:[j&&(0,l.jsx)(r.Z,{}),(0,l.jsx)("main",{className:"w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10",children:(0,l.jsxs)("section",{className:"max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center",children:[(0,l.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center",children:[(0,l.jsx)(o(),{src:a.Z,alt:"",className:"absolute"}),(0,l.jsx)(o(),{src:n.Z,alt:""})]}),(0,l.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] flex flex-col",children:[(0,l.jsx)(c.Z,{}),(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();let l=s(1630),a={method:"POST",url:"https://api.analogueshifts.com/api/login",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:e,password:i})};b(!0),l.request(a).then(async e=>{let t=JSON.stringify({...e.data.data.user,token:e.data.data.token});f.Z.set("analogueshifts",t),A.toast.success("Login Successful",h.D);let s=f.Z.get("RedirectionLink");window.location.href=(null==s?void 0:s.trim().length)?s:"/dashboard",b(!1)}).catch(e=>{b(!1),A.toast.error(e.message,h.D)})},className:"pt-11 w-full flex flex-col",children:[(0,l.jsx)("p",{className:"font-medium text-lg text-tremor-content-grayText pb-4",children:"Welcome!"}),(0,l.jsx)("p",{className:"font-bold text-3xl text-[#292929] pb-5",children:"Sign Into Your Account"}),(0,l.jsx)(m.Z,{icon:"fa-solid fa-envelope",type:"email",onChange:e=>t(e.target.value),label:"Email",placeholder:"Enter Email",value:e}),(0,l.jsx)(m.Z,{icon:"fa-solid fa-lock",type:"password",onChange:e=>u(e.target.value),label:"Password",placeholder:"Enter Password",value:i}),(0,l.jsx)("button",{type:"submit",className:"w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ",children:"Login"}),(0,l.jsx)("div",{className:"w-full pt-4 flex justify-center items-center gap-1",children:(0,l.jsx)(x(),{href:"/forgot-password",className:"font-normal cursor-pointer text-sm text-black/90",children:"Forgotten Password?"})}),(0,l.jsxs)("div",{className:"w-full pt-2 flex justify-center items-center gap-1",children:[(0,l.jsx)("p",{className:"font-normal text-sm text-black/90",children:"Don't have an account?"}),(0,l.jsx)(x(),{href:"/register",className:"font-normal text-sm text-tremor-background-darkYellow",children:"Sign Up"})]})]})]})]})})]})}},3206:function(e,t,s){"use strict";var l=s(7437);t.Z=()=>(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsx)("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,l.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[(0,l.jsx)("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},403:function(e,t,s){"use strict";var l=s(7437);t.Z=e=>{let{label:t,icon:s,value:a,type:n,placeholder:r,onChange:i}=e;return(0,l.jsxs)("div",{className:"w-full pb-5 flex flex-col gap-2.5",children:[(0,l.jsx)("p",{className:"text-base font-normal text-tremor-content-grayText",children:t}),(0,l.jsxs)("div",{className:"w-full relative flex items-center h-12",children:[(0,l.jsx)("i",{className:"absolute left-5  text-base text-tremor-content-grayText w-8 "+s}),(0,l.jsx)("input",{className:" w-full rounded-2xl border border-black/10 outline-1 outline-tremor-background-darkYellow h-full pl-12 pr-4  text-base font-normal text-gray-400",placeholder:r,value:a,type:n,onChange:i,required:!0})]})]})}},8853:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var l=s(7437);function a(){return(0,l.jsx)("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30",children:(0,l.jsxs)("div",{className:"lds-roller",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})})}},2651:function(e,t,s){"use strict";s.d(t,{D:function(){return l}});let l={position:"top-right",autoClose:3e3}},8044:function(e,t){"use strict";t.Z={src:"/_next/static/media/avatar.9e508533.png",height:170,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEXGyv+siIa/xPcfEQ/5uTfysTfUjyb7w0DyqzHO1P9kY3qHVx6XlbXsx3o2LzFdOCSohnVUMBzTzOCpaBN1PwDJxebolRmbYy26hUjOnWyYXhh3c48KSzjWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nBXFRxLAIAwAsQVsbCC9l///MxNdBNShK0BMYwAodQ7x/03TAvv9nGo91+EiZrTVVU1oW3a3/AE34wH0Xi/XZAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},9666:function(e,t){"use strict";t.Z={src:"/_next/static/media/group.43634bce.png",height:538,width:478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEWViVzYqDWRjHXhcCbrMRbx2rHUuThMaXFVVVRERUT/7sT/AAZEODLu5uWw2tf///BkXEg2PDZXRTr///86NjT/AAD///+RnaD///9/sq//AAB6YEoJ8vs8AAAAG3RSTlMQLS0uEDY1AC81DzT9+P0jsVXqGHUrNa1XdBssEDwQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBhQHAMADDMBdTHvP/f06i91OkxBi3yJnnCsJa3sOrhECtXmXacM4rzzsxouVrGIPS2n5IIQIoDVqR/gAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[1176,1630,413,2303,2971,2472,1744],function(){return e(e.s=3942)}),_N_E=e.O()}]);