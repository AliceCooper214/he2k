import{d as b,r as s,v as m,J as v,bb as h,a as c,b as x,g as t,o as u,c as f,bQ as g,H as A,bN as C,j as y,_ as M}from"./index.954a2cbc.js";import{M as S}from"./MultiLineResult.0bab4ef4.js";const B=b({__name:"index",setup(E){const l=s("1fc05187c8f8f0ef6861ab5fbb9019ceae80f5120d8593b91f5e9d4199e02bb4fad9e9bc314b7514b9b9dadf9e5fac4e"),n=s(""),o=s(!1),d=m.exports.debounce(r,500);v(()=>{r()});async function r(){let e=l.value.toLowerCase().replaceAll(" ","").replaceAll("-","").replaceAll(":","").replaceAll(",","").replaceAll("*","");try{const a=await i(e);o.value=!1,n.value=a}catch(a){o.value=!0,console.error("Convert failed",a)}}function i(e){return h.from(e,"hex").toString("base64")}return(e,a)=>{const _=y("a-alert");return u(),c(t(C),{"max-width":1280},{one:x(()=>[f(t(g),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),title:e.$t("hexToBase64.input"),onChange:t(d)},null,8,["modelValue","title","onChange"]),o.value?(u(),c(_,{key:0,class:"alert",message:e.$t("hexToBase64.errMsg"),type:"error"},null,8,["message"])):A("",!0),f(t(S),{"result-desc":e.$t("hexToBase64.result"),result:n.value},null,8,["result-desc","result"])]),_:1})}}});const T=M(B,[["__scopeId","data-v-4cf2c39f"]]);export{T as default};
