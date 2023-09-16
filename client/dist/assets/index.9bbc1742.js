var pe=Object.defineProperty,me=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var F=(a,t,d)=>t in a?pe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[t]=d,c=(a,t)=>{for(var d in t||(t={}))he.call(t,d)&&F(a,d,t[d]);if(j)for(var d of j(t))fe.call(t,d)&&F(a,d,t[d]);return a},u=(a,t)=>me(a,Te(t));import{j as e,R as _,r as p,W as ge,C as x,f as z,B as be,p as W,a as m,L as f,b as Ce,c as v,d as ve,e as Ne}from"./vendor.7f4d1569.js";const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))s(y);new MutationObserver(y=>{for(const T of y)if(T.type==="childList")for(const g of T.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function d(y){const T={};return y.integrity&&(T.integrity=y.integrity),y.referrerpolicy&&(T.referrerPolicy=y.referrerpolicy),y.crossorigin==="use-credentials"?T.credentials="include":y.crossorigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function s(y){if(y.ep)return;y.ep=!0;const T=d(y);fetch(y.href,T)}};Ee();const we="modulepreload",U={},_e="/",R=function(t,d){return!d||d.length===0?t():Promise.all(d.map(s=>{if(s=`${_e}${s}`,s in U)return;U[s]=!0;const y=s.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${T}`))return;const g=document.createElement("link");if(g.rel=y?"stylesheet":we,y||(g.as="script",g.crossOrigin=""),g.href=s,document.head.appendChild(g),y)return new Promise((O,o)=>{g.addEventListener("load",O),g.addEventListener("error",o)})})).then(()=>t())},N=({full:a})=>a?e("div",{className:"bg-slate-900 flex-1 items-center py-4 flex justify-center",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})}):e("div",{className:"flex justify-center items-center py-3",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})}),i=Object.freeze({TRANSACTION_CONTRACT_INIT:"TRANSACTION_CONTRACT_INIT",TRANSACTIONS:"TRANSACTIONS",TRANSACTION_COUNT:"TRANSACTION_COUNT",TOKEN_CONTRACT_INIT:"TOKEN_CONTRACT_INIT",TOKEN_PRICE:"TOKEN_PRICE",SALE_CONTRACT_INIT:"SALE_CONTRACT_INIT",LOTTERY_INIT:"LOTTERY_INIT",LOTTERY_POOL_CONTRACT_INIT:"LOTTERY_POOL_CONTRACT_INIT",LOTTERY_TIME_REMAINING:"LOTTERY_TIME_REMAINING",LOTTERY_MANAGER:"LOTTERY_MANAGER",LOTTERY_ENTRY_FEE:"LOTTERY_ENTRY_FEE",LOTTERY_PLAYERS:"LOTTERY_PLAYERS",LOTTERY_WINNER:"LOTTERY_WINNER",LOTTERY_PRICE:"LOTTERY_PRICE",LOTTERIES_DETAILS:"LOTTERIES_DETAILS"}),G=Object.freeze({PROVIDER:"PROVIDER"}),L=Object.freeze({PRICE:"PRICE",BALANCE:"BALANCE",SOLD:"SOLD"}),A=Object.freeze({BALANCE:"BALANCE",CURR_ACCOUNT:"CURR_ACCOUNT"}),Re=(a,t)=>{switch(t.type){case i.TRANSACTION_CONTRACT_INIT:return console.log("transaction contract made"),u(c({},a),{transactionContract:t.value});case i.TRANSACTIONS:return console.log("transactions updated"),u(c({},a),{transactions:t.value});case i.TRANSACTION_COUNT:return console.log("transactions count updated"),u(c({},a),{transactionCount:t.value});case i.TOKEN_CONTRACT_INIT:return console.log("aiboost token contract made"),u(c({},a),{aiboostTokenContract:t.value});case i.TOKEN_PRICE:return console.log("token price updated"),u(c({},a),{tokenPrice:t.value});case i.SALE_CONTRACT_INIT:return console.log("sale contract made"),u(c({},a),{aiboostTokenSaleContract:t.value});case i.LOTTERY_POOL_CONTRACT_INIT:return console.log("lottery pool init"),u(c({},a),{lotteryPoolContract:t.value});case i.LOTTERY_INIT:return console.log("lottery contract init"),u(c({},a),{lotteryContract:t.value});case i.LOTTERIES_DETAILS:return console.log("lottery details init"),u(c({},a),{lotteriesDetails:t.value});case i.LOTTERY_MANAGER:return console.log("LOTTERY_MANAGER updated"),u(c({},a),{lotteryManager:t.value});case i.LOTTERY_ENTRY_FEE:return console.log("LOTTERY_ENTRY_FEE updated"),u(c({},a),{lotteryEntryFee:t.value});case i.LOTTERY_PLAYERS:return console.log("LOTTERY_PLAYERS updated"),u(c({},a),{lotteryPlayers:t.value});case i.LOTTERY_WINNER:return console.log("LOTTERY_WINNER updated"),u(c({},a),{lotteryWinner:t.value});case i.LOTTERY_TIME_REMAINING:return console.log("LOTTERY_TIME_REMAINING updated"),u(c({},a),{lotteryTimeRemaining:t.value});case i.LOTTERY_STATUS:return console.log("LOTTERY_STATUS updated"),u(c({},a),{lotteryStatus:t.value});case i.LOTTERY_PRICE:return console.log("LOTTERY_PRICE updated"),u(c({},a),{lotteryPrice:t.value});case i.LOTTERY_START:return console.log("LOTTERY game started"),u(c({},a),{lotteryStart:t.value});case i.LOTTERY_ENTER:return console.log("You have entered the lottery"),u(c({},a),{lotteryEnter:t.value});case i.LOTTERY_END:return console.log("LOTTERY has ended"),u(c({},a),{lotteryEnd:t.value});default:console.log("Invalid value at Transaction Provider",t.type,t.value)}},Le=(a,t)=>{switch(t.type){case G.PROVIDER:return console.log("provider init"),u(c({},a),{provider:t.value});default:console.log("Invalid value at web3Reducer Provider",t.type,t.value)}},xe=(a,t)=>{switch(t.type){case A.BALANCE:return console.log("Balance updated"),u(c({},a),{balance:t.value});case A.CURR_ACCOUNT:return console.log("Curr account updated"),u(c({},a),{currentAccount:t.value});default:console.log("Invalid value at web3Reducer Provider",t.type,t.value)}},Ae=(a,t)=>{switch(t.type){case L.BALANCE:return console.log("token balance updated"),u(c({},a),{balance:t.value});case L.PRICE:return console.log("token price updated"),u(c({},a),{price:t.value});case L.SOLD:return console.log("token sold updated"),u(c({},a),{sold:t.value});default:console.log("invalid value at token reducer Provider",t.type,t.value)}},Oe=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"}],name:"addTransaction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"transactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"transactions",outputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],ke=[{inputs:[{internalType:"contract AiboostToken",name:"_contract",type:"address"},{internalType:"uint256",name:"_tokenPrice",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"}],name:"Sell",type:"event"},{inputs:[{internalType:"uint256",name:"_numberOfTokens",type:"uint256"}],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"endSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"tokenContract",outputs:[{internalType:"contract AiboostToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenSold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],Ie=[{inputs:[{internalType:"uint256",name:"_initialSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_spender",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!0,internalType:"address",name:"_to",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"standard",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"}],Se=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"lotteryAddress",type:"address"}],name:"LotteryCreated",type:"event"},{inputs:[{internalType:"uint256",name:"_timeInMinutes",type:"uint256"}],name:"createLottery",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getLotteries",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLotteryContractDetails",outputs:[{components:[{internalType:"contract Lottery",name:"lotteryContract",type:"address"},{internalType:"address",name:"manager",type:"address"},{internalType:"uint256",name:"endedTimeStamp",type:"uint256"}],internalType:"struct LotteryPool.lotteryStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lotteriesContractsAddresses",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lotteriesMapping",outputs:[{internalType:"contract Lottery",name:"lotteryContract",type:"address"},{internalType:"address",name:"manager",type:"address"},{internalType:"uint256",name:"endedTimeStamp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalLotteries",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],Pe=[{inputs:[{internalType:"address",name:"_manager",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"winningPrice",type:"uint256"}],name:"WinnerDeclared",type:"event"},{inputs:[],name:"_end",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"end",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"enter",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"entryFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlayers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRemainingTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getWinner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"players",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_timeInMinutes",type:"uint256"}],name:"start",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"status",outputs:[{internalType:"enum Lottery.LotteryStatus",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"time",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"winningPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],Me="0x8219163cd9f695718c9dbcd7d4725a85484bcde6",Ye=Oe,Be="0x1680Cff3e126680CF4962DF2f116031a8d4830e7",De=Ie,$e="0x1f9e433adf5B5564DC50b5Dab6B73E24178076cF",je=ke,Fe="0xf796d5902F7609a4BC20A6c9522fDc2eA2C29949",ze=Se,We=Pe,H=_.createContext(),Ue=({children:a})=>{const{ethereum:t}=window,[d,s]=p.exports.useState(!1),[y,T]=p.exports.useState(!1),[g,O]=p.exports.useState(!1),[o,h]=p.exports.useReducer(Re,{transactionContract:null,aiboostTokenContract:null,aiboostTokenSaleContract:null,transactions:[],transactionCount:+localStorage.getItem("transactionCount"),tokenPrice:0,lotteryContract:null,lotteryPoolContract:null,lotteryManager:"\u2024\u2024\u2024\u2024\u2025",lotteryEntryFee:0,lotteriesDetails:[],lotteryTimeRemaining:0,lotteryStart:null,lotteryEnter:null,lotteryEnd:null,lotteryPlayers:[],lotteryWinner:null,lotteryPrice:0}),[k,J]=p.exports.useReducer(Le,{provider:null}),[b,I]=p.exports.useReducer(xe,{balance:0,currentAccount:null}),[P,S]=p.exports.useReducer(Ae,{balance:0,price:0,sold:0}),[M,Q]=p.exports.useState({addressTo:"",amount:"",message:""}),X=(n,r)=>{Q(l=>u(c({},l),{[r]:n.target.value}))},Y=async()=>{const n=new ge(t);J({type:G.PROVIDER,value:n});const r=n.getSigner(),l=new x(Me,Ye,r),E=new x($e,je,r),C=new x(Be,De,r),w=new x(Fe,ze,r);return h({type:i.TRANSACTION_CONTRACT_INIT,value:l}),h({type:i.TOKEN_CONTRACT_INIT,value:C}),h({type:i.SALE_CONTRACT_INIT,value:E}),h({type:i.LOTTERY_POOL_CONTRACT_INIT,value:w}),{aiboostTokenContract:C,tokenSaleContract:E,transactionsContract:l,lotteryPoolContract:w}},B=async(n=b.currentAccount)=>{let r=await k.provider.getBalance(n),l=z(r);return I({type:A.BALANCE,value:l.substring(0,7)}),l.substring(0,7)},Z=async()=>{try{if(t&&o.aiboostTokenSaleContract&&o.aiboostTokenContract){s(!0);let n=await o.aiboostTokenSaleContract.tokenPrice(),r=await o.aiboostTokenSaleContract.tokenSold(),l=await o.aiboostTokenContract.balanceOf(b.currentAccount);n=z(n),S({type:L.BALANCE,value:l.toNumber()}),S({type:L.PRICE,value:n}),S({type:L.SOLD,value:r.toNumber()}),s(!1)}else console.log("contract is not initialized @initToken")}catch(n){console.error(n)}},ee=async n=>{if(console.log("buying tokens for",n),n<=0)console.log("can not buy tokens");else{const r=be.from(W(P.price).toString()).mul(n),l=await o.aiboostTokenSaleContract.buyTokens(n,{from:b.currentAccount,value:r,gasLimit:5e5});T(!0),console.log(`Loading - ${l.hash}`),await l.wait(),console.log(`Success - ${l.hash}`),alert(`Transaction Confirmed ${l.hash} 
 from: ${b.currentAccount}`)||location.reload(),T(!1)}},D=async()=>{try{if(t&&o.transactionContract){const r=(await o.transactionContract.getTransactions()).map(l=>({addressTo:l.receiver,addressFrom:l.sender,timestamp:new Date(+l.timestamp*1e3).toLocaleString(),message:l.message,amount:+l.amount/10**18}));h({type:i.TRANSACTIONS,value:r})}else console.log("Ethereum is not present")}catch(n){console.log(n)}},te=async()=>{try{t?O(!0):console.log("\u2693No ether found\u2693");const n=await t.request({method:"eth_accounts"});n.length?(I({type:A.CURR_ACCOUNT,value:n[0]}),D()):console.log("No accounts found")}catch(n){console.log(n)}},ne=async()=>{try{if(t&&o.transactionContract){const n=await o.transactionContract.transactionCount();window.localStorage.setItem("transactionCount",n)}}catch(n){throw console.log(n),new Error("No ethereum object")}},ae=async()=>{try{if(!t)return alert("Please install MetaMask and then connect to your wallet.");const n=await t.request({method:"eth_requestAccounts"});I({type:A.CURR_ACCOUNT,value:n[0]})}catch(n){throw console.log(n),new Error("No ethereum object")}},oe=async()=>{try{if(console.log(o),t&&o.transactionContract){const{addressTo:n,amount:r,message:l}=M,E=W(r);await t.request({method:"eth_sendTransaction",params:[{from:b.currentAccount,to:n,gas:"0x5208",value:E._hex}]});const C=await o.transactionContract.addTransaction(n,E,l);s(!0),console.log(`Loading - ${C.hash}`),await C.wait(),console.log(`Success - ${C.hash}`),alert(`Transaction Confirmed ${C.hash} 
 from: ${b.currentAccount} 	 to: ${n}`)||location.reload(),s(!1),B();const w=await o.transactionContract.transactionCount();console.log(`transaction count => ${w}`),h({type:i.TRANSACTION_COUNT,value:+w})}else console.log("No ethereum object")}catch(n){throw console.log(n),new Error("No ethereum object")}},$=async()=>{try{if(t&&o.lotteryPoolContract){s(!0);const r=(await o.lotteryPoolContract.getLotteryContractDetails()).map(l=>({endedTimeStamp:+l.endedTimeStamp,lotteryContract:l.lotteryContract,manager:l.manager}));h({type:i.LOTTERIES_DETAILS,value:r}),s(!1)}else console.log("contract is not initialized @lottery")}catch(n){console.error(n)}},re=async n=>{try{if(t&&o.lotteryPoolContract){s(!0);const r=new x(n,We,k.provider.getSigner()),l=await r.winningPrice(),E=await r.status();console.log(E);const C=await r.manager(),w=await r.getWinner(),de=await r.getPlayers(),ye=await r.entryFee();h({type:i.LOTTERY_INIT,value:r}),h({type:i.LOTTERY_MANAGER,value:C}),h({type:i.LOTTERY_ENTRY_FEE,value:+ye}),h({type:i.LOTTERY_PLAYERS,value:de}),h({type:i.LOTTERY_WINNER,value:w}),h({type:i.LOTTERY_PRICE,value:+l}),s(!1)}else console.log("ethereum || contracts.lotteryPoolContract not init")}catch(r){console.error(r)}},se=async n=>{try{if(t&&o.lotteryPoolContract){const r=await o.lotteryPoolContract.getLotteryContract(n);return{lotteryAddress:r.lotteryContract,endedTimeStamp:+r.endedTimeStamp,manager:r.manager}}else console.log("contract is not initialized @lottery")}catch{console.error(error)}},ie=async n=>{try{if(n<=0)console.error(`Cannot Start Lottery with ${n} time`);else if(t&&o.lotteryPoolContract){s(!0);const r=await o.lotteryPoolContract.createLottery(n);console.log(`Loading - ${r.hash}`),await r.wait(),console.log(`Success - ${r.hash}`),alert(`Transaction Confirmed ${r.hash} 
 from: ${b.currentAccount}`)||location.reload(),s(!1)}else console.log("The lottery has not started yet")}catch(r){console.error(r)}},le=async()=>{try{if(t&&o.lotteryContract){s(!0);const n=await o.lotteryContract.enter({from:b.currentAccount,value:o.lotteryEntryFee,gasLimit:5e5});console.log(`Entering Lottery Plz Wait - ${n.hash}`),await n.wait(),console.log(`Entered Lottery Successfully - ${n.hash}`),alert(`Transaction Confirmed ${n.hash} 
 from: ${b.currentAccount}`)||location.reload(),h({type:i.LOTTERY_ENTER,value:n}),s(!1)}else console.log("You have not entered the lottery yet")}catch(n){console.error(n)}},ce=async()=>{try{if(t&&o.lotteryContract){s(!0);const n=await o.lotteryContract.end();console.log(`Ending Lottery Plz Wait - ${n.hash}`),await n.wait(),console.log(`Lottery Ended Successfully - ${n.hash}`),alert(`Transaction Confirmed ${n.hash} 
 from: ${b.currentAccount}`)||location.reload(),h({type:i.LOTTERY_END,value:n}),s(!1)}else console.log("Lottery is not initiated or no ether found")}catch(n){console.error(n)}},ue=async()=>{try{if(s(!0),t&&o.lotteryPoolContract){const n=await o.lotteryPoolContract.getRemainingTime();console.log("Contract \u231A Remaining",n),h({type:i.LOTTERY_TIME_REMAINING,value:n}),s(!1)}else console.log("Lottery is not initiated or no ether will be found")}catch(n){console.error(n)}};return p.exports.useEffect(()=>{async function n(){await te(),await Y(),await ne(),await $(),window.ethereum.on("chainChanged",async()=>{console.log("network changed!!"),window.location.reload()}),window.ethereum.on("accountsChanged",async()=>{console.log("accounts changed"),window.location.reload()})}n()},[]),e(H.Provider,{value:{transactionCount:o.transactionCount,transactions:o.transactions,currentAccount:b.currentAccount,balance:b.balance,lotteryManager:o.lotteryManager,lotteryStatus:o.lotteryStatus,lotteryEntryFee:o.lotteryEntryFee,lotteryPlayers:o.lotteryPlayers,winner:o.lotteryWinner,lotteryPrice:o.lotteryPrice,lotteryWinningPrice:o.ethPrice,lotteriesDetails:o.lotteriesDetails,provider:k.provider,connectWallet:ae,sendTransaction:oe,isEther:g,isLoading:d,handleChange:X,formData:M,getBalanceOf:B,getAllTransactions:D,createEthereumContract:Y,token:P,initToken:Z,buyTokens:ee,initLotteryPool:$,initLotteryContract:re,startLottery:ie,enterLottery:le,endLottery:ce,lotteryTimeRemaining:ue,getLotteryDetails:se,inTransaction:y},children:a})},V=a=>`${a.slice(0,5)}...${a.slice(a.length-4)}`,Ge=({showMenu:a,active:t,currentAccount:d,connectWallet:s})=>m("menu",{className:t?"flex-col flex items-center z-30 fixed right-0 left-0 bottom-0 top-0  uppercase bg-black/50 backdrop-blur-xl gap-8 justify-center pb-8 mf:hidden":"hidden",children:[e("button",{className:t?"menu opened":"menu",onClick:a,"aria-label":"Main Menu",children:m("svg",{width:"30",height:"30",viewBox:"0 0 100 100",children:[e("path",{className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),e("path",{className:"line line2",d:"M 20,50 H 80"}),e("path",{className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})}),e("li",{children:e(f,{to:"/buy-token",onClick:a,"aria-label":"Buy Token",title:"Buy Token",className:"font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400",children:"Buy Tokens"})}),e("li",{children:e(f,{to:"/stake",onClick:a,"aria-label":"Farm Crypto",title:"Stake Crypto",className:"font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400",children:"Stake"})}),e("li",{children:e(f,{to:"/lottery",onClick:a,"aria-label":"Lottery",title:"Lottery",className:"font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400",children:"Lottery"})}),e("li",{children:e(f,{to:"/send-ether",onClick:a,"aria-label":"send ether",title:"send ether",className:"font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400",children:"Send Ether"})}),e("ul",{className:t?"items-center space-x-8":"hidden",children:m("li",{children:[!d&&e("button",{type:"button",onClick:s,className:"inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none",children:e("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),d&&e("p",{className:"font-sans text-slate-200",children:V(d)})]})})]});var K="/assets/logo_white.afe401a8.svg";const He=()=>{const[a,t]=p.exports.useState(!1),d=()=>{t(!a)},{currentAccount:s,connectWallet:y}=p.exports.useContext(H);return m("div",{className:"bg-slate-900 border-b border-slate-600 z-10 shadow-lg",children:[e("div",{className:"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",children:m("div",{className:"relative flex items-center justify-between",children:[e(f,{to:"/","aria-label":"Company",title:"Company",className:"inline-flex items-center",children:e("img",{className:"text-white w-44",src:K,alt:"logo"})}),m("ul",{className:"hidden mf:flex items-center space-x-8",children:[e("li",{children:e(f,{to:"/buy-token","aria-label":"Buy Token",title:"Buy Token",className:"font-bold tracking-wide smoothLinear",children:"Buy Tokens"})}),e("li",{children:e(f,{to:"/stake","aria-label":"Farm Crypto",title:"Stake Crypto",className:"font-bold tracking-wide smoothLinear",children:"Stake"})}),e("li",{children:e(f,{to:"/lottery","aria-label":"Lottery",title:"Lottery",className:"font-bold tracking-wide smoothLinear",children:"Lottery"})}),e("li",{children:e(f,{to:"/send-ether","aria-label":"send ether",title:"send ether",className:"font-bold tracking-wide smoothLinear",children:"Send Ether"})})]}),e("ul",{className:"hidden mf:flex items-center space-x-8",children:m("li",{children:[!s&&e("button",{type:"button",onClick:y,className:"inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none",children:e("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),s&&e("p",{className:"font-semibold smoothLinear",children:e("a",{href:`https://ropsten.etherscan.io/address/${s}`,target:"_blank",rel:"noreferrer",className:"tracking-wide uppercase text-teal-400 hover:cursor-pointer",children:V(s)})})]})}),e("div",{className:"absolute right-6 mf:hidden top-[5px] scale-150",children:e("button",{className:a?"menu opened":"menu",onClick:d,"aria-label":"Main Menu",children:m("svg",{width:"30",height:"30",viewBox:"0 0 100 100",children:[e("path",{className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),e("path",{className:"line line2",d:"M 20,50 H 80"}),e("path",{className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})})]})}),e(Ge,{showMenu:d,active:a,currentAccount:s,connectWallet:y})]})},Ve=()=>m("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 border-t border-slate-600 bg-slate-900",children:[m("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[e("div",{className:"flex flex-[0.5] justify-center items-center",children:e(f,{to:"/","aria-label":"Company",title:"Company",className:"inline-flex items-center",children:e("img",{className:"text-white w-44",src:K,alt:"logo"})})}),m("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[e("div",{className:"flex",children:e(f,{to:"/buy-token","aria-label":"Buy Token",title:"Buy Token",className:"font-bold tracking-wide smoothLinear",children:"Buy Token"})}),e("div",{className:"flex",children:e(f,{to:"/stake","aria-label":"Farm Crypto",title:"Stake Crypto",className:"font-bold tracking-wide smoothLinear",children:"Stake"})}),e("div",{className:"flex",children:e(f,{to:"/lottery","aria-label":"Lottery",title:"Lottery",className:"font-bold tracking-wide smoothLinear",children:"Lottery"})}),e("div",{className:"flex",children:e(f,{to:"/send-ether","aria-label":"Send Ether",title:"Send Ether",className:"font-bold tracking-wide smoothLinear",children:"Send Ether"})})]})]}),e("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-slate-400 mt-5 "}),e("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:m("div",{className:"w-full grid grid-cols-1 py-5 px-10 text-xl lg:grid-cols-3 md:grid-cols-3",children:[m("p",{className:"text-sm text-white text-center py-2 lg:text-left md:text-left",children:["\xA9 Copyright 2022"," ",e("a",{target:"_blank",rel:"noreferrer",className:"font-bold tracking-wide smoothLinear",href:"https://www.aiboost.in/",children:"aiboost.in"})]}),m("div",{className:"flex items-center mt-1 py-2 space-x-5 justify-center",children:[e("a",{target:"_blank",href:"https://twitter.com/ankit5577_dev",className:"transition ease-in-out delay-120 text-slate-100 hover:-translate-y-1 hover:scale-125 hover:text-teal-400 duration-300",children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"h-5",children:e("path",{d:"M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"})})}),e("a",{target:"_blank",href:"https://www.linkedin.com/in/ankit5577/",className:"transition ease-in-out delay-120 text-slate-100 hover:-translate-y-1 hover:scale-125 hover:text-teal-400 duration-300",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),e("a",{target:"_blank",href:"https://github.com/ankit5577",className:"transition ease-in-out delay-120 text-slate-100 hover:-translate-y-1 hover:scale-125 hover:text-teal-400 duration-300",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),e("div",{className:"text-center py-2 lg:text-right md:text-right",children:m("p",{className:"text-sm text-white",children:["Made with \u2764\uFE0F by ","",e("a",{target:"_blank",href:"https://github.com/ankit5577",className:"font-bold tracking-wide smoothLinear",children:"Ankit Kaushal"})]})})]})})]});function Ke(){return e("div",{className:"flex-1 bg-slate-900 text-white",children:e("div",{className:"container mx-auto text-center",children:e("h1",{className:"text-4xl tracking-wider my-12",children:"Page Not found"})})})}const qe=_.lazy(()=>R(()=>import("./SendEther.434a582c.js"),["assets/SendEther.434a582c.js","assets/vendor.7f4d1569.js","assets/index.esm.ed09e472.js","assets/Notification.e141e5ff.js"])),Je=_.lazy(()=>R(()=>import("./Lottery.d7605da7.js"),["assets/Lottery.d7605da7.js","assets/vendor.7f4d1569.js","assets/Notification.e141e5ff.js","assets/index.esm.ed09e472.js"])),Qe=_.lazy(()=>R(()=>import("./LotteryPool.10165e88.js"),["assets/LotteryPool.10165e88.js","assets/vendor.7f4d1569.js"])),q=_.lazy(()=>R(()=>import("./Home.97509d12.js"),["assets/Home.97509d12.js","assets/vendor.7f4d1569.js","assets/Notification.e141e5ff.js"])),Xe=_.lazy(()=>R(()=>import("./Stake.a2e8bcdb.js"),["assets/Stake.a2e8bcdb.js","assets/vendor.7f4d1569.js"])),Ze=_.lazy(()=>R(()=>import("./BuyToken.dc9f3843.js"),["assets/BuyToken.dc9f3843.js","assets/vendor.7f4d1569.js","assets/Notification.e141e5ff.js","assets/index.esm.ed09e472.js"])),et=()=>m("div",{className:"min-h-screen flex flex-col overflow-hidden",children:[e(He,{}),m(Ce,{children:[e(v,{path:"/",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(q,{})})}),e(v,{index:!0,element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(q,{})})}),e(v,{path:"/buy-token",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(Ze,{})})}),e(v,{path:"/stake",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(Xe,{})})}),e(v,{path:"/lottery",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(Qe,{})})}),e(v,{path:"/lottery/:lotteryAddress",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(Je,{})})}),e(v,{path:"/send-ether",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(qe,{})})}),e(v,{path:"*",element:e(p.exports.Suspense,{fallback:e(N,{full:!0}),children:e(Ke,{})})})]}),e(Ve,{})]});ve.render(e(Ne,{children:e(Ue,{children:e(et,{})})}),document.getElementById("root"));export{H as C,N as L,V as s};