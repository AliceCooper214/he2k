import{d as m,y as v,r as p,a as g,b as c,g as a,o as h,l as o,c as i,x,bN as C,ao as n,j as b,_ as k}from"./index.954a2cbc.js";import{C as w}from"./index.99d06a99.js";import{C as B,a as N}from"./index.8451a3a4.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./MultiLineResult.0bab4ef4.js";import"./base64.3bb69897.js";const S={class:"rabbit"},R={class:"option"},V=m({__name:"index",setup(D){const{t:l}=v(),_="A Free, Modern Toolbox, Built for Developers.",t=p("key"),s=p(),u=()=>{s.value.handleEncrypt()},y=r=>{if(r.length<=0)return n.warning("Please enter the plain text"),"";if(t.value.length<=0)return n.warning("Please enter the key"),"";try{return w.Rabbit.encrypt(r,t.value).toString()}catch(e){return n.error({key:"rabbit-error",content:e.message}),""}};return(r,e)=>{const d=b("a-input-password");return h(),g(a(C),{"max-width":1280},{one:c(()=>[o("div",S,[i(N,{ref_key:"cryptRef",ref:s,encrypt:y,type:a(B).ENC,sample:_},{option:c(()=>[o("p",R,[o("span",null,x(a(l)("cryptWrapper.key")),1),i(d,{value:t.value,"onUpdate:value":e[0]||(e[0]=f=>t.value=f),class:"passphrase opt",onChange:u},null,8,["value"])])]),_:1},8,["type"])])]),_:1})}}});const A=k(V,[["__scopeId","data-v-f4cc9de8"]]);export{A as default};
