import{d as b,y as F,r as i,a as N,b as a,g as r,o as T,l as p,c as t,x as s,bM as B,U as l,bN as P,ao as y,j as k,_ as S}from"./index.954a2cbc.js";import{C as o}from"./index.99d06a99.js";import{C as w,a as E}from"./index.8451a3a4.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./MultiLineResult.0bab4ef4.js";import"./base64.3bb69897.js";const O={class:"des"},R={class:"option"},A=b({__name:"index",setup(I){const{t:v}=F(),x="A Free, Modern Toolbox, Built for Developers.",u=i("key"),_=i("CBC"),C=i("Pkcs7"),g=i(),m=()=>{g.value.handleEncrypt()},h=f=>{if(f.length<=0)return y.warning("Please enter the plain text"),"";if(u.value.length<=0)return y.warning("Please enter the key"),"";let e={mode:o.mode.CBC,padding:o.pad.Pkcs7};switch(_.value){case"ECB":e.mode=o.mode.ECB;break;case"CFB":e.mode=o.mode.CFB;break;case"CTR":e.mode=o.mode.CTR;break;case"OFB":e.mode=o.mode.OFB;break}switch(C.value){case"Zero":e.padding=o.pad.ZeroPadding;break;case"Iso10126":e.padding=o.pad.Iso10126;break;case"None":e.padding=o.pad.NoPadding;break;case"Ansix923":e.padding=o.pad.AnsiX923;break}try{return o.DES.encrypt(f,u.value,e).toString()}catch(c){return y.error(c.message),""}};return(f,e)=>{const c=k("a-input-password"),n=k("SelectOption");return T(),N(r(P),{"max-width":1280},{one:a(()=>[p("div",O,[t(E,{ref_key:"cryptRef",ref:g,encrypt:h,type:r(w).ENC,sample:x},{option:a(()=>[p("p",R,[p("span",null,s(r(v)("cryptWrapper.key")),1),t(c,{value:u.value,"onUpdate:value":e[0]||(e[0]=d=>u.value=d),class:"passphrase opt",onChange:m},null,8,["value"]),p("span",null,s(r(v)("des.mode")),1),p("span",null,[t(r(B),{value:_.value,"onUpdate:value":e[1]||(e[1]=d=>_.value=d),class:"opt",onChange:m},{default:a(()=>[t(n,{value:"CBC"},{default:a(()=>[l(s("CBC"),1)]),_:1},8,["value"]),t(n,{value:"ECB"},{default:a(()=>[l(s("ECB"),1)]),_:1},8,["value"]),t(n,{value:"CFB"},{default:a(()=>[l(s("CFB"),1)]),_:1},8,["value"]),t(n,{value:"CTR"},{default:a(()=>[l(s("CTR"),1)]),_:1},8,["value"]),t(n,{value:"OFB"},{default:a(()=>[l(s("OFB"),1)]),_:1},8,["value"])]),_:1},8,["value"])]),p("span",null,s(r(v)("des.padding")),1),p("span",null,[t(r(B),{value:C.value,"onUpdate:value":e[2]||(e[2]=d=>C.value=d),class:"opt padding-select",onChange:m},{default:a(()=>[t(n,{value:"Pkcs7"},{default:a(()=>[l(s("Pkcs7"),1)]),_:1},8,["value"]),t(n,{value:"Zero"},{default:a(()=>[l(s("Zero"),1)]),_:1},8,["value"]),t(n,{value:"Iso10126"},{default:a(()=>[l(s("Iso10126"),1)]),_:1},8,["value"]),t(n,{value:"None"},{default:a(()=>[l(s("None"),1)]),_:1},8,["value"]),t(n,{value:"Ansix923"},{default:a(()=>[l(s("Ansix923"),1)]),_:1},8,["value"])]),_:1},8,["value"])])])]),_:1},8,["type"])])]),_:1})}}});const j=S(A,[["__scopeId","data-v-4ac74842"]]);export{j as default};
