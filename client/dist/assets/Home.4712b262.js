var M=Object.defineProperty;var v=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(r,n,i)=>n in r?M(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,w=(r,n)=>{for(var i in n||(n={}))W.call(n,i)&&b(r,i,n[i]);if(v)for(var i of v(n))S.call(n,i)&&b(r,i,n[i]);return r};import{j as e,a as t,m as s,L as a,u as N,r as m,g as T,F as h}from"./vendor.71bb7add.js";import{C as y,s as L}from"./index.5cb05bba.js";import{N as V}from"./Notification.c472b7b3.js";const R=()=>{const r={hiddenImg:{opacity:0,x:"-50vw"},visibleImg:{opacity:1,x:10,transition:{type:"spring",mass:2,damping:14,stiffness:40,delay:.2}}};return e("div",{children:t("div",{className:"relative bg-slate-800 px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full",children:[e(s.div,{variants:r,initial:"hiddenImg",animate:"visibleImg",className:"z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-10 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center",children:e("img",{src:"https://kitwind.io/assets/kometa/laptop.png",className:"bg-laptop object-cover object-right w-full h-auto lg:w-auto lg:h-full",alt:""})}),e(s.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},className:"relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl",children:t("div",{className:"mb-16 lg:pr-5 lg:max-w-lg lg:mb-0",children:[t("div",{className:"max-w-xl mb-6",children:[e("div",{children:e("p",{className:"inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase rounded-full bg-teal-accent-400",children:"Fully secured"})}),t("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl sm:leading-none",children:["Send Cryto across",e("br",{className:"hidden md:block"}),"the ",e("span",{className:"inline-block text-indigo-400",children:"world."})]}),e("p",{className:"text-base text-slate-400 md:text-lg",children:"Transfer funds, buy tokens and play a game all at one place."})]}),t("div",{className:"flex flex-row",children:[e("button",{type:"submit",className:"inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded rounded-tl-3xl shadow-inner shadow-cyan-800  hover:shadow-cyan-600  focus:shadow-outline focus:outline-none",children:e(a,{to:"/buy-token","aria-label":"Buy AiBoost Token",title:"Buy Token",children:"Buy Tokens"})}),e("button",{type:"submit",className:"inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-inner shadow-cyan-800 hover:shadow-cyan-600 focus:shadow-outline focus:outline-none",children:e(a,{to:"/stake","aria-label":"Farm Crypto",title:"Stake Crypto",children:"Stake"})})]}),t("div",{className:"flex items-center mt-4",children:[e("button",{type:"submit",className:"inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-inner  shadow-cyan-800  hover:shadow-cyan-600 focus:shadow-outline focus:outline-none",children:e(a,{to:"/lottery","aria-label":"Play Lottery Game",title:"Etherium Lottery",children:"Lottery"})}),e("button",{type:"submit",className:"inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white rounded rounded-br-3xl shadow-inner shadow-cyan-800  hover:shadow-cyan-600 focus:shadow-outline focus:outline-none",children:e(a,{to:"/send-ether","aria-label":"Send ETH anywhere",title:"Send Etherium",children:"Send ETH"})})]})]})})]})})};function A(){const{ref:r,inView:n}=N(),i={hidden:{rotate:-180},visible:{rotate:0,transition:{staggerChildren:1,duration:1}}},l={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:1,staggerChildren:1.5,ease:"easeInOut"}}};return e("div",{id:"#services",className:"bg-slate-800",children:t("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-300",children:[t("div",{className:"flex flex-col mb-6 lg:flex-row md:mb-10",children:[e("div",{className:"lg:w-1/2",children:t("h2",{className:"max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg",children:["Crypto Services you may"," ",e("span",{className:"inline-block text-indigo-400",children:"like."})]})}),e("div",{className:"lg:w-1/2",children:e("p",{className:"text-base text-gray-300 md:text-lg",children:"For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective."})})]}),t("div",{ref:r,className:"grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4",children:[t("div",{children:[e("div",{className:"flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700",children:t(s.svg,{className:"w-7 h-7 text-indigo-400",strokeLinecap:"round",strokeWidth:"2",viewBox:"0 0 24 24",variants:i,initial:"hidden",animate:n?"visible":"hidden",children:[e("circle",{cx:"11",cy:"13",fill:"none",r:"9",stroke:"currentColor"}),e(s.path,{d:" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047",stroke:"currentColor",fill:"none",variants:l})]})}),e("h6",{className:"mb-2 font-semibold leading-5",children:"Send Ether"}),e("p",{className:"mb-3 text-sm text-gray-400",children:"Transfer your Ether across the world. Play by sending fake ether to friends."}),t("ul",{className:"mb-4 -ml-1 space-y-2",children:[t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Real Time"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Smart Contract"]}),t("li",{className:"flex items-start ",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Send Ethers"]})]}),e(a,{to:"/send-ether","aria-label":"",className:"inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800",children:"Transfer Ethers"})]}),t("div",{children:[e("div",{className:"flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700",children:t(s.svg,{className:"w-7 h-7 text-indigo-400",viewBox:"0 0 24 24",strokeLinecap:"round",variants:i,initial:"hidden",animate:n?"visible":"hidden",children:[e(s.path,{d:"M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z",fill:"none",strokeWidth:"2",stroke:"currentColor",variants:l}),e(s.path,{d:"M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z",fill:"none",strokeWidth:"1.5",stroke:"currentColor",variants:l}),e(s.path,{d:"M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z",fill:"none",strokeWidth:"1.5",stroke:"currentColor",variants:l})]})}),e("h6",{className:"mb-2 font-semibold leading-5",children:"Lottery"}),e("p",{className:"mb-3 text-sm text-gray-400",children:"Enter a lottery game and get a chance to win Ethers."}),t("ul",{className:"mb-4 -ml-1 space-y-2",children:[t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Win Ethers"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Transparent"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Smart Contract"]})]}),e(a,{to:"/lottery","aria-label":"",className:"inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800",children:"Enter Lottery"})]}),t("div",{children:[e("div",{className:"flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700",children:t(s.svg,{className:"w-7 h-7 text-indigo-400",strokeLinecap:"round",strokeWidth:"2",viewBox:"0 0 24 24",variants:i,initial:"hidden",animate:n?"visible":"hidden",children:[e(s.path,{d:"M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11",fill:"none",stroke:"currentColor",variants:l}),e("ellipse",{cx:"19.078",cy:"4.922",fill:"none",rx:"2.5",ry:"4.95",stroke:"currentColor",transform:"translate(2.107 14.932) rotate(-45)"}),e(s.path,{d:"M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885",fill:"none",stroke:"currentColor",variants:l}),e(s.path,{d:"M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156",fill:"none",stroke:"currentColor",variants:l})]})}),e("h6",{className:"mb-2 font-semibold leading-5",children:"Stake"}),e("p",{className:"mb-3 text-sm text-gray-400",children:"Earn interest on Ethers staked by you, get upto 13%."}),t("ul",{className:"mb-4 -ml-1 space-y-2",children:[t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Staking"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Earn Ethers"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Liquidity"]})]}),e(a,{to:"/stake","aria-label":"",className:"inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800",children:"Stake Ethers"})]}),t("div",{children:[e("div",{className:"flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-700",children:t(s.svg,{className:"w-7 h-7 text-indigo-400",strokeLinecap:"round",strokeWidth:"2",viewBox:"0 0 24 24",variants:i,initial:"hidden",animate:n?"visible":"hidden",children:[e(s.path,{d:"M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z",fill:"none",stroke:"currentColor",variants:l}),e("polyline",{fill:"none",points:"10 11 10 6 6 2 3 5 7 9",stroke:"currentColor"}),e("polyline",{fill:"none",points:"15 12 15 17 19 21 22 18 18 14",stroke:"currentColor"}),e(s.path,{d:"M8,23a7,7,0,0,1-7-7",fill:"none",stroke:"currentColor",variants:l}),e(s.path,{d:"M8,19a3,3,0,0,1-3-3",fill:"none",stroke:"currentColor",variants:l})]})}),e("h6",{className:"mb-2 font-semibold leading-5",children:"Buy Token"}),e("p",{className:"mb-3 text-sm text-gray-400",children:"For those who have want my token."}),t("ul",{className:"mb-4 -ml-1 space-y-2",children:[t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Listen"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Communicate"]}),t("li",{className:"flex items-start",children:[e("span",{className:"mr-1",children:e("svg",{className:"w-5 h-5 mt-px text-indigo-400",stroke:"currentColor",viewBox:"0 0 52 52",children:e("polygon",{strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})}),"Run"]})]}),e(a,{to:"/buy-token",href:"/","aria-label":"",className:"inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800",children:"Buy Token"})]})]})]})})}const Z=({addressTo:r,addressFrom:n,timestamp:i,message:l,keyword:c,amount:o,url:d,currentAccount:p})=>{const x=i.split(" "),C=x[2],u=x[1].split(":");u.pop();const j=u.join(":"),g=new Date(i),B=g.getDate(),E=g.toString().slice(4,7).toUpperCase();let f=!1,k="";return l.length>130&&(f=!0,k=l.split(" ").slice(0,1).join(" ")),e(h,{children:e("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-8 lg:py-26",children:e("div",{className:"grid gap-5 lg:grid-cols-1 md:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-auto",children:e("div",{className:"bg-[#1B2536] p-8 transition-shadow duration-300 border border-cyan-800 rounded-xl group hover:shadow-slate-700 hover:shadow-xl",children:e("div",{className:"grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full",children:t("div",{className:"flex",children:[t("div",{className:"pt-1 mr-6 text-center",children:[e("div",{className:"px-2 pb-1 mb-1 border-b border-gray-500",children:e("p",{className:"text-sm text-slate-300",children:E})}),e("div",{className:"px-2",children:e("p",{className:"text-lg text-slate-300 font-bold",children:B})}),t("div",{className:"pt-20 bottom w-full",children:[e("div",{className:"flex pb-1 mb-1",children:e("p",{className:"text-lg text-slate-300 font-bold pb-1 border-b border-gray-500",children:j})}),e("div",{children:e("p",{className:"text-sm text-slate-300",children:C})})]})]}),e("div",{className:"relative border-slate-700 duration-300 border-l-4 rounded-full right-3 group-hover:scale-105 group-hover:border-cyan-800"}),t("div",{children:[e("div",{className:"mb-2",children:e("a",{href:`https://ropsten.etherscan.io/address/${n}`,target:"_blank",rel:"noreferrer",className:"text-xs tracking-wide uppercase text-slate-300",children:"From"})}),e("div",{className:"mb-5",children:e("a",{href:`https://ropsten.etherscan.io/address/${n}`,target:"_blank",rel:"noreferrer",children:e("p",{className:"inline-block text-base font-semibold leading-5 text-slate-300",children:L(n)})})}),t("p",{className:" flex flex-1 gap-1 text-teal-500 font-medium",children:[o,e("svg",{width:"28",height:"25",viewBox:"0 3 68 104",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{id:"Group 1",children:e("g",{id:"Group",children:t("g",{id:"Ethereum",children:[t("g",{id:"Bottom",children:[e("g",{id:"Purple2",children:e("path",{id:"Vector",fillRule:"evenodd",clipRule:"evenodd",d:"M67.616 58.629L33.9263 103.31V78.2247L67.616 58.629Z",fill:"#7B3EC8",stroke:"#3441C0",strokeWidth:"0.01116",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})}),e("g",{id:"Yellow2",children:e("path",{id:"Vector_2",fillRule:"evenodd",clipRule:"evenodd",d:"M0.239307 58.629L33.929 103.31V78.2247L0.239307 58.629Z",fill:"#7680E3",stroke:"#3441C0",strokeWidth:"0.01116",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})})]}),t("g",{id:"Top",children:[e("g",{id:"Blue1",children:e("path",{id:"Vector_3",fillRule:"evenodd",clipRule:"evenodd",d:"M0.231445 53.451L33.9275 38.4687V72.6233L0.231445 53.451Z",fill:"#7B3EC8",stroke:"#3441C0",strokeWidth:"0.0111628",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})}),e("g",{id:"Purple1",children:e("path",{id:"Vector_4",fillRule:"evenodd",clipRule:"evenodd",d:"M67.6216 53.451L33.9256 38.4687V72.6233L67.6216 53.451Z",fill:"#354B70",stroke:"#3441C0",strokeWidth:"0.0111628",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})}),e("g",{id:"Yellow1",children:e("path",{id:"Vector_5",fillRule:"evenodd",clipRule:"evenodd",d:"M0.239332 53.45L33.929 0.579742V38.4678L0.239332 53.45Z",fill:"#7680E3",stroke:"#3441C0",strokeWidth:"0.01116",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})}),e("g",{id:"Green1",children:e("path",{id:"Vector_6",fillRule:"evenodd",clipRule:"evenodd",d:"M67.616 53.45L33.9263 0.579742V38.4678L67.616 53.45Z",fill:"#A894D0",stroke:"#3441C0",strokeWidth:"0.01116",strokeMiterlimit:"7",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})})})]}),l&&e(h,{children:e("p",{className:"mt-2 mb-2 text-justify text-slate-300 font-medium",children:f?k+" ...Read More":l})}),e("div",{className:"flex items-center",children:t("div",{className:"mb-2",children:[e("a",{href:`https://ropsten.etherscan.io/address/${n}`,target:"_blank",rel:"noreferrer",className:"text-xs tracking-wide uppercase text-slate-300",children:e("p",{className:l?"pt-2 text-xs tracking-wide uppercase text-slate-300":"pt-11 text-xs tracking-wide uppercase text-slate-300",children:"To"})}),e("a",{href:`https://ropsten.etherscan.io/address/${r}`,target:"_blank",rel:"noreferrer",className:"text-base font-semibold leading-[45px] text-slate-300",children:L(r)})]})})]})]})})})})})})},_=()=>{const{transactions:r,currentAccount:n,getAllTransactions:i}=m.exports.useContext(y);if(m.exports.useEffect(()=>{i()},[]),r.length>6)for(let d=0;d<r.length-6;d++)r.shift();const{ref:l,inView:c}=N({threshold:.1}),o=T();return m.exports.useEffect(()=>{c&&o.start({y:0,scale:1,transition:{type:"spring",duration:1.5,bounce:.1}}),c||o.start({y:"100vh",scale:0})},[c]),e("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:t("div",{ref:l,className:"flex flex-col md:p-12 py-12 px-4",children:[n?e("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):e("h3",{className:"text-white text-3xl text-center my-2",children:"Connect your account to see the latest transactions"}),e(s.div,{className:"flex flex-wrap justify-center items-center mt-10",animate:o,children:r.map((d,p)=>e(Z,w({},d),p))})]})})};function I(){return e("div",{className:"grey-gradient",children:e("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",children:t("div",{className:"flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto",children:[e("div",{className:"mb-4 mr-8",children:e("div",{className:"flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 border-t-2 border-b-2 border-slate-300",children:e(s.svg,{className:"w-12 h-12 text-rose-500",stroke:"currentColor",viewBox:"0 0 52 52",whileInView:{rotateY:360,transition:{duration:.75}},children:e("polygon",{strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"29 13 14 29 25 29 23 39 38 23 27 23"})})})}),t("div",{children:[e("p",{className:"mb-2 text-xs font-bold font-sans tracking-wide text-red-500 uppercase",children:"MAKE SURE TO"}),e("h2",{className:"mb-4 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none",children:"Use a Test Network"}),e("p",{className:"text-base text-gray-600 md:text-lg mb-2",children:"This is a personal web3 project, thus smart contracts are deployed on \u2018Ropsten Test Network\u2019"}),t("a",{target:"_blank",href:"https://ropsten.oregonctf.org/eth",rel:"no-follow",className:"text-base text-md font-semibold text-teal-600 hover:text-teal-700",children:["Get Ether for Ropsten test network ","\u21E2 "]})]})]})})})}function $(){const{isEther:r}=m.exports.useContext(y);return t(h,{children:[e(R,{}),e(I,{}),e(A,{}),e(_,{}),e(V,{props:{id:"Home",isEther:r}})]})}export{$ as default};
