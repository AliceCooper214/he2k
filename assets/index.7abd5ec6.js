import{d as T,y as k,r as u,a as S,b as t,g as e,o as N,l as o,c as s,x as n,bM as x,U as i,bN as w,ao as M,j as B,_ as U}from"./index.954a2cbc.js";import{j as V,D as v}from"./utils.2d2de85c.js";import{b as p,C as j,a as D}from"./index.8451a3a4.js";import"./buffer-es6.d450e15c.js";import"./MultiLineResult.0bab4ef4.js";import"./base64.3bb69897.js";const O={class:"des"},L={class:"option"},R=T({__name:"index",setup(W){const{t:_}=k(),b=u("utf8"),y=u("base64"),h="A Free, Modern Toolbox, Built for Developers.",l=u("0123456789abcdeffedcba9876543210"),m=u(p.ECB),g=u(),C=()=>{g.value.handleEncrypt()},E=f=>{V(f,l);let a={mode:v.constants.CBC};switch(m.value){case p.ECB:a.mode=v.constants.ECB;break;case p.CBC:a.mode=v.constants.CBC;break}try{return v.encrypt(f,l.value,{iv:l.value,mode:a.mode,inputEncoding:b.value,outputEncoding:y.value})}catch(c){return M.error(c.message),""}};return(f,a)=>{const c=B("a-input-password"),d=B("SelectOption");return N(),S(e(w),{"max-width":1280},{one:t(()=>[o("div",O,[s(D,{ref_key:"cryptRef",ref:g,encrypt:E,type:e(j).ENC,sample:h},{option:t(()=>[o("p",L,[o("span",null,n(e(_)("cryptWrapper.key")),1),s(c,{value:l.value,"onUpdate:value":a[0]||(a[0]=r=>l.value=r),class:"passphrase opt",onChange:C},null,8,["value"]),o("span",null,n(e(_)("des.mode")),1),o("span",null,[s(e(x),{value:m.value,"onUpdate:value":a[1]||(a[1]=r=>m.value=r),class:"opt",onChange:C},{default:t(()=>[s(d,{value:e(p).CBC},{default:t(()=>[i(n(e(p).CBC),1)]),_:1},8,["value"]),s(d,{value:e(p).ECB},{default:t(()=>[i(n(e(p).ECB),1)]),_:1},8,["value"])]),_:1},8,["value"])]),o("span",null,n(e(_)("sm2Encryption.outputType"))+":",1),o("span",null,[s(e(x),{value:y.value,"onUpdate:value":a[2]||(a[2]=r=>y.value=r),class:"opt padding-select",onChange:C},{default:t(()=>[s(d,{value:"base64"},{default:t(()=>[i(n("base64"),1)]),_:1},8,["value"]),s(d,{value:"hex"},{default:t(()=>[i(n("hex"),1)]),_:1},8,["value"])]),_:1},8,["value"])])])]),_:1},8,["type"])])]),_:1})}}});const H=U(R,[["__scopeId","data-v-028ea7d5"]]);export{H as default};