import{d as I,cm as R,J as B,bj as S,r as s,a as E,b as c,g as u,c_ as $,o as h,l as y,c as d,cp as O,cq as P,cr as U,e as V,f as Y,x as q,F as A,H as L,ct as M,bN as T,N as H}from"./index.954a2cbc.js";import{u as W}from"./index.56c1474b.js";import{i as z}from"./regs.08fe82e6.js";const J={class:"whois-wrapper"},G=["href"],K=y("br",null,null,-1),ee=I({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(_,{emit:F}){const f=_,{t:o}=R();B(()=>{var e,a;(((e=f.clipboardValue)==null?void 0:e.isDomain())||((a=f.clipboardValue)==null?void 0:a.isUrl()))&&(r.value.domain=g(f.clipboardValue.getOriginData()),F("acceptClipboardCb"))});function g(e){return e=e.trim(),S(e)&&(e=W(e).hostname.split(".").slice(-2).join(".")),e}const v=function(e,a){return e?(a||(a="YYYY-MM-DD"),$(e).format(a)):""},p=s(!1),k=s(),r=s({domain:""}),N={domain:[{required:!0,validator:(e,a)=>a===""||!S(a)&&!z(a)?Promise.reject():Promise.resolve(),whitespace:!0,message:o("whois.validDomainError"),trigger:"change"}]},b=s({}),C=s([{title:"Name",dataIndex:"name",key:"name",align:"right",width:200},{title:"Value",dataIndex:"value",key:"value"}]),w=[{name:o("whois.domainName"),key:"Domain Name",value:""},{name:o("whois.register"),key:"Registrar",value:""},{name:o("whois.registrantName"),key:"Registrant Name",value:""},{name:o("whois.contactEmail"),key:"Registrar Abuse Contact Email",value:""},{name:o("whois.createdDate"),key:"Created Date",value:"",formatValueFunc:v},{name:o("whois.updatedDate"),key:"Updated Date",value:"",formatValueFunc:v},{name:o("whois.expiryDate"),key:"Expiry Date",value:"",formatValueFunc:v},{name:o("whois.registrarServer"),key:"Registrar WHOIS Server",value:""},{name:"DNS",key:"Name Server",value:"",formatValueFunc:e=>e.join(", ")},{name:o("whois.domainStatus"),key:"Domain Status",value:""}],m=s(w.map(e=>({...e})));function j(e){const a=m.value,t=[];for(const n of a)for(const i in e)if(n.key===i){let l=e[i];if(!l)continue;const D=n.formatValueFunc;D&&(l=D(l)),n.value=l,t.push(n)}m.value=t}const x=async()=>{var e;(e=k.value)==null||e.validateFields().then(a=>{r.value.domain=g(r.value.domain),m.value=w.map(t=>({...t})),p.value=!0,H.whoiser(r.value.domain).then(t=>{if(!t)return;const n=Object.keys(t);n.length!==0&&(b.value=t[n[0]],j(b.value))}).finally(()=>{p.value=!1})}).catch(a=>{})};return(e,a)=>(h(),E(u(T),{"max-width":1280},{one:c(()=>[y("div",J,[d(u(U),{ref_key:"formRef",ref:k,rules:N,model:r.value},{default:c(()=>[d(u(O),{name:"domain"},{default:c(()=>[d(u(P),{value:r.value.domain,"onUpdate:value":a[0]||(a[0]=t=>r.value.domain=t),"enter-button":e.$t("common.query"),"allow-clear":"",autofocus:"",onSearch:x},null,8,["value","enter-button"])]),_:1})]),_:1},8,["model"]),d(u(M),{title:()=>e.$t("whois.domainInfo"),"data-source":m.value,columns:C.value,"table-layout":"auto",size:"middle","show-header":!1,pagination:!1,loading:p.value,bordered:""},{bodyCell:c(({column:t,record:n})=>[t.key==="value"&&n.key==="Domain Status"?(h(!0),V(A,{key:0},Y(n.value,(i,l)=>(h(),V("div",{key:l},[y("a",{href:i.split(" ")[1],target:"_blank"},q(e.$t(`whois.${i.split(" ")[0]}`)+`(${i.split(" ")[0]})`),9,G),K]))),128)):L("",!0)]),_:1},8,["title","data-source","columns","loading"])])]),_:1}))}});export{ee as default};
