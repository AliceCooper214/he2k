import{d as K,y as N,r as c,a as T,b as s,g as e,o as w,l as o,c as n,x as l,bM as B,U as x,bN as D,ao as E,j as g,_ as M}from"./index.954a2cbc.js";import{j,E as d}from"./utils.2d2de85c.js";import{S as a,C as O,a as U}from"./index.8451a3a4.js";import{s as h}from"./index.1c72a6e1.js";import"./buffer-es6.d450e15c.js";import"./MultiLineResult.0bab4ef4.js";import"./base64.3bb69897.js";const I={class:"des"},L={class:"option"},R=K({__name:"index",setup(V){const{t:_}=N(),b="A Free, Modern Toolbox, Built for Developers.",u=c(a.C1C3C2),y=c(),m=()=>{y.value.handleEncrypt()},v=h.sm2.generateKeyPairHex(),r=c(v.publicKey),k=c(v.privateKey);localStorage.setItem("private",k.value);const S=C=>{j(C,r);let t={mode:d.constants.C1C3C2};switch(u.value){case a.C1C3C2:t.mode=d.constants.C1C3C2;break;case a.C1C2C3:t.mode=d.constants.C1C2C3;break}try{return h.sm2.doEncrypt(C,r.value,t.mode)}catch(p){return E.error(p.message),""}};return(C,t)=>{const p=g("a-input-password"),f=g("SelectOption");return w(),T(e(D),{"max-width":1280},{one:s(()=>[o("div",I,[n(U,{ref_key:"cryptRef",ref:y,encrypt:S,type:e(O).ENC,sample:b},{option:s(()=>[o("p",L,[o("span",null,l(e(_)("cryptWrapper.key")),1),n(p,{value:r.value,"onUpdate:value":t[0]||(t[0]=i=>r.value=i),class:"passphrase opt",onChange:m},null,8,["value"]),o("span",null,l(e(_)("des.mode")),1),o("span",null,[n(e(B),{value:u.value,"onUpdate:value":t[1]||(t[1]=i=>u.value=i),class:"opt",onChange:m},{default:s(()=>[n(f,{value:e(a).C1C2C3},{default:s(()=>[x(l(e(a).C1C2C3),1)]),_:1},8,["value"]),n(f,{value:e(a).C1C3C2},{default:s(()=>[x(l(e(a).C1C3C2),1)]),_:1},8,["value"])]),_:1},8,["value"])])])]),_:1},8,["type"])])]),_:1})}}});const G=M(R,[["__scopeId","data-v-1af0a153"]]);export{G as default};