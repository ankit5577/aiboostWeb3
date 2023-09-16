import{r as c,a as t,m,j as e,F as v,g as y}from"./vendor.7f4d1569.js";import{A as w}from"./index.esm.ed09e472.js";import{N as E}from"./Notification.e141e5ff.js";import{C as j}from"./index.9bbc1742.js";const d=({placeholder:a,name:n,type:s,value:r,handleChange:l})=>e("input",{placeholder:a,type:s,step:"0.0001",value:r,onChange:o=>l(o,n),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),u={hidden:{opacity:0,y:300},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:75,delay:.1}}};function k(){const{currentAccount:a,handleChange:n,sendTransaction:s,formData:r,isLoading:l,isEther:o,getBalanceOf:x,balance:h}=c.exports.useContext(j);function p(i){const{addressTo:b,amount:g,message:N}=r;i.preventDefault(),!(!b||!g||!N)&&s()}async function f(i=a){!i||await x(i)}return c.exports.useEffect(()=>{f()},[]),t("div",{className:"flex-1 bg-slate-900 text-slate-200",children:[t("div",{className:"container mx-auto p-4",children:[t(m.div,{className:"relative group my-6",variants:u,initial:"hidden",animate:"visible",children:[e("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-pink-700  via-purple-600 to-blue-800 rounded-xl blur-lg opacity-50 max-w-md mx-auto group-hover:opacity-100 transition duration-700 group-hover:duration-300"}),t("div",{className:" relative  p-4 max-w-md rounded-lg  bg-cover mx-auto min-h-[120px] flex flex-col justify-between bg-card",children:[t("div",{className:"flex flex-row h-[11rem] justify-between",children:[t("h3",{className:"text-2xl tracking-wide",children:[e("div",{className:" px-[4px] py-[3px] bg-slate-300 rounded-full mx-2 inline-flex my-auto",children:e(v,{className:"text-slate-800"})}),"Ethereum"]}),t("h5",{className:"antialiased tracking-wider font-mono",children:[h,e("span",{className:"text-xs",children:" ETH"})]})]}),e("h5",{className:"font-mono text-xs tracking-wider",children:a||"Not connected to a wallet"})]})]}),e(m.div,{className:"max-w-md border bg-neutral-900 rounded-xl border-slate-500 mx-auto p-4 mb-4 ",variants:u,initial:"hidden",animate:"visible",children:l?e("div",{className:"bg-zinc-900 flex-1 items-center py-4 flex justify-center",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})}):t(y,{children:[e("h4",{className:"text-2xl text-slate-300 antialiased font-medium",children:"Send Ether across the world"}),t("h6",{className:"text-xs text-red-500 antialiased tracking-widest font-semibold",children:[" ",e(w,{className:"inline "})," DO NOT USE REAL ETHER"]}),t("form",{children:[e(d,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:n}),e(d,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:n}),e(d,{placeholder:"Enter Message",name:"message",type:"text",handleChange:n}),e("button",{type:"button",disabled:!a,onClick:p,className:"w-full mt-2 bean disabled:cursor-not-allowed",children:a?"SEND NOW":"\u26A0\uFE0F No Account Found"})]})]})})]}),e(E,{props:{id:"Send Ether",isEther:o,account:a}})]})}export{k as default};
