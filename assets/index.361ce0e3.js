import{d as m,y as f,r as u,a as x,b as c,g as e,o as b,l as n,c as t,bQ as h,x as o,c4 as _,bY as N,U as V,bN as B,N as C,j as U,_ as M}from"./index.954a2cbc.js";import{M as k}from"./MultiLineResult.0bab4ef4.js";const w={class:"scrypt-hash"},D={class:"input"},I={class:"rounds"},L=m({__name:"index",setup(R){const{t:l}=f(),r=u("A Free, Modern Toolbox, Built for Developers."),p=u(15),i=u(8),d=u(1),v=u();async function y(){v.value=await C.SCryptKDF(r.value,p.value,i.value,d.value)}return(A,a)=>{const g=U("a-space");return b(),x(e(B),{"max-width":1280},{one:c(()=>[n("div",w,[n("div",D,[t(e(h),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),title:e(l)("hash.input_tip")},null,8,["modelValue","title"])]),n("div",I,[t(g,null,{default:c(()=>[n("span",null,o(e(l)("scrypt.args_logN")),1),t(e(_),{value:p.value,"onUpdate:value":a[1]||(a[1]=s=>p.value=s),class:"args"},null,8,["value"]),n("span",null,o(e(l)("scrypt.args_R")),1),t(e(_),{value:i.value,"onUpdate:value":a[2]||(a[2]=s=>i.value=s),class:"args"},null,8,["value"]),n("span",null,o(e(l)("scrypt.args_P")),1),t(e(_),{value:d.value,"onUpdate:value":a[3]||(a[3]=s=>d.value=s),class:"args"},null,8,["value"]),t(e(N),{class:"hash-button",type:"primary",onClick:a[4]||(a[4]=s=>y())},{default:c(()=>[V(o(e(l)("scrypt.generate_scrypt_hash")),1)]),_:1})]),_:1})]),t(e(k),{result:v.value,"result-desc":e(l)("hash.get_hash_result_tip")},null,8,["result","result-desc"])])]),_:1})}}});const S=M(L,[["__scopeId","data-v-3f1cb047"]]);export{S as default};