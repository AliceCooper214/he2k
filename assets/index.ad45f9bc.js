import{d as f,y as C,r as p,a as g,b as l,g as r,o as h,l as A,c as i,bQ as B,bN as k,ao as o}from"./index.954a2cbc.js";import{f as u}from"./index.b00d4ef4.js";import{C as I,a as _}from"./index.8451a3a4.js";import"./MultiLineResult.0bab4ef4.js";import"./base64.3bb69897.js";const Q={class:"RSA"},T=f({__name:"index",setup(b){const{t:c}=C(),y="A Free, Modern Toolbox, Built for Developers.",t=p(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZyxkpCOkAp9oqL78CZskZ07Nn
6D38m2D2Tr57aCG6vQHT0IO1sKa4zHz2dPohcpuOdRS0NtjCu4TZMI/knwQy+i1a
ypAspXLTp3WiT73b+ogAGnClpvLkJgdhBhwn8VjarHYXTE31149yAIpfQARhRuq/
gryZ0FwMjILUzyjJ3QIDAQAB
-----END PUBLIC KEY-----`),n=p(),m=()=>{n.value.handleEncrypt()},d=a=>{if(a.length<=0)return o.warning("Please enter the plain text"),"";if(t.value.length<=0)return o.warning("Please enter the key"),"";try{const e=u.pki.publicKeyFromPem(t.value);return u.util.encode64(e.encrypt(a))}catch(e){return o.error(e.message),""}};return(a,e)=>(h(),g(r(k),{"max-width":1280},{one:l(()=>[A("div",Q,[i(_,{ref_key:"cryptRef",ref:n,encrypt:d,type:r(I).ENC,sample:y},{option:l(()=>[i(r(B),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),autofocus:"",class:"input",title:r(c)("rsa.inputKey"),onChange:m},null,8,["modelValue","title"])]),_:1},8,["type"])])]),_:1}))}});export{T as default};
