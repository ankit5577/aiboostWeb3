import{r as i,a as t,m as d,j as e,g as x}from"./vendor.7f4d1569.js";import{N as f}from"./Notification.e141e5ff.js";import{C as h}from"./index.9bbc1742.js";import{A as b}from"./index.esm.ed09e472.js";function w(){const{initToken:c,token:a,buyTokens:m,inTransaction:n,isEther:u,isLoading:l,login:p,currentAccount:s}=i.exports.useContext(h),o=i.exports.useRef(),r={hidden:{opacity:0,y:300},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:75,delay:.1}}};return i.exports.useEffect(()=>{c(),n&&alert("your transaction is in process.")},[]),t("section",{className:"flex-1 p-4 space-y-10 bg-slate-900",children:[t(d.div,{className:"container mx-auto bg-neutral-900 p-6 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-200",variants:r,initial:"hidden",animate:"visible",children:[e("h2",{className:"text-xl antialiased font-medium",children:"AiBoost Token (AiB)"}),t("h3",{className:"pt-5 pb-2 text-slate-300 antialiased text-md",children:["Current Token Price (AiB) :"," ",e("span",{className:"text-teal-500 font-medium",children:a.price})]}),t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Tokens Owned :"," ",e("span",{className:"text-teal-500 font-medium",children:a.balance})]}),t("h3",{className:"pb-2 text-slate-300 antialiased text-md",children:["Total Tokens Sold :"," ",t("span",{className:"text-teal-500 font-medium",children:[a.sold," / 1000000"]})]})]}),e(d.div,{className:"container mx-auto bg-neutral-900 p-4 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-300",variants:r,initial:"hidden",animate:"visible",children:!l&&!n?t(x,{children:[e("h2",{className:"text-xl antialiased font-medium",children:"Buy AiBoost (AiB)"}),t("form",{children:[t("span",{className:"text-xs text-teal-500 antialiased tracking-widest font-normal",children:[e(b,{className:"inline"})," Please be patient as it can take a while."]}),e("input",{ref:o,placeholder:"No. of Tokens",name:"tokens",type:"number",min:"1",pattern:"[0-9]",step:"0.0001",className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),e("button",{type:"button",disabled:!s||n||l,onClick:()=>{m(+o.current.value)},className:"w-full mt-2 bean disabled:cursor-not-allowed",children:s?"BUY AIBOOST TOKEN":"\u26A0\uFE0F No Account Found"})]})]}):e("div",{className:"bg-zinc-900 flex-1 items-center py-4 flex justify-center",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})})}),e(f,{props:{id:"Buy Token",isEther:u,account:s,login:p}})]})}export{w as default};
