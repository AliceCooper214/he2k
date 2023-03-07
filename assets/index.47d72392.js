import{d as O,y as E,r as o,v as N,N as k,a as i,b as t,g as e,o as d,l as F,c as a,cp as r,eR as L,H as C,eS as U,eT as I,c$ as S,c1 as K,bY as M,U as R,x as w,cr as B,bN as T,_ as V}from"./index.954a2cbc.js";import{M as G}from"./MultiLineResult.0bab4ef4.js";const z={class:"generator"},A=O({__name:"index",setup(D){const{t:u}=E(),g=o(""),P=o(""),b=o(2048),h=o([{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096}]),s=o("OpenSSH"),x=o([{label:"OpenSSH",value:"OpenSSH"},{label:"Putty",value:"Putty"},{label:"PEM",value:"Pem"}]),c=o(""),m=o(""),v=o("OpenSSH"),H=o([{label:"OpenSSH",value:"OpenSSH"},{label:"PEM",value:"Pem"}]),y=o(""),_=N.exports.debounce(()=>{p()},500);function p(){k.generateRSAKeyPair({keySize:b.value,privateKeyFormat:s.value,publicKeyFormat:v.value,passphrase:c.value,privateKeyComment:m.value,publicKeyComment:y.value,pemCharPerLine:72}).then(f=>{g.value=f.privateKey,P.value=f.publicKey})}return p(),(f,l)=>(d(),i(e(T),{"max-width":1280},{one:t(()=>[F("div",z,[a(e(B),{"label-col":{span:8},"wrapper-col":{span:12},size:"small"},{default:t(()=>[s.value==="OpenSSH"||s.value==="Putty"||s.value==="Pem"?(d(),i(e(r),{key:0,label:e(u)("rsaGenerator.private.passphrase")},{default:t(()=>[a(e(L),{value:c.value,"onUpdate:value":l[0]||(l[0]=n=>c.value=n),onChange:e(_)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0),a(e(U),{ghost:"",class:"collapse"},{default:t(()=>[a(e(I),{header:e(u)("rsaGenerator.advance")},{default:t(()=>[a(e(r),{label:e(u)("rsaGenerator.keyLength")},{default:t(()=>[a(e(S),{value:b.value,"onUpdate:value":l[1]||(l[1]=n=>b.value=n),options:h.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),a(e(r),{label:e(u)("rsaGenerator.private.format")},{default:t(()=>[a(e(S),{value:s.value,"onUpdate:value":l[2]||(l[2]=n=>s.value=n),options:x.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),s.value==="Putty"?(d(),i(e(r),{key:0,label:e(u)("rsaGenerator.private.comment")},{default:t(()=>[a(e(K),{value:m.value,"onUpdate:value":l[3]||(l[3]=n=>m.value=n),onChange:e(_)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0),a(e(r),{label:e(u)("rsaGenerator.public.format")},{default:t(()=>[a(e(S),{value:v.value,"onUpdate:value":l[4]||(l[4]=n=>v.value=n),options:H.value,onChange:p},null,8,["value","options"])]),_:1},8,["label"]),v.value==="OpenSSH"?(d(),i(e(r),{key:1,label:e(u)("rsaGenerator.public.comment")},{default:t(()=>[a(e(K),{value:y.value,"onUpdate:value":l[5]||(l[5]=n=>y.value=n),onChange:e(_)},null,8,["value","onChange"])]),_:1},8,["label"])):C("",!0)]),_:1},8,["header"])]),_:1}),a(e(r),{"wrapper-col":{offset:8,span:12}},{default:t(()=>[a(e(M),{type:"primary",onClick:p},{default:t(()=>[R(w(e(u)("common.generate")),1)]),_:1})]),_:1})]),_:1}),a(e(G),{result:P.value,"result-desc":e(u)("rsaGenerator.public.result")},null,8,["result","result-desc"]),a(e(G),{result:g.value,"result-desc":e(u)("rsaGenerator.private.result")},null,8,["result","result-desc"])])]),_:1}))}});const q=V(A,[["__scopeId","data-v-4b916b09"]]);export{q as default};
