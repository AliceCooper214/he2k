import{d as V,y as b,r as o,a as d,b as f,g as e,N as g,o as u,l,c as y,bQ as m,H as v,bN as x,j as A,_ as C}from"./index.954a2cbc.js";const T={class:"scrypt-hash"},B={class:"input"},w={class:"input"},N={class:"alertText"},X=V({__name:"index",setup(M){const{t:s}=b(),n=o("A Free, Modern Toolbox, Built for Developers."),r=o("c2NyeXB0AA8AAAAIAAAAAULGW83Iue/yTJX+yyXMw5H466K18TTvKpq/O+L31oBoTeVsadQ2YjChRMxx/oUBroGRzViHgD3TMZZCXfUTXSgDosDBm+3XV3KRr8E+67rg"),t=o(!1),p=o(!0);async function i(){try{t.value=await g.SCryptVerify(n.value,r.value)}catch{t.value=!1}p.value=!t.value}return setTimeout(()=>{i()}),(h,a)=>{const _=A("a-alert");return u(),d(e(x),{"max-width":1280},{one:f(()=>[l("div",T,[l("div",B,[y(e(m),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),title:e(s)("bcrypt.bcrypt_hash_plain"),onChange:i},null,8,["modelValue","title"])]),l("div",w,[y(e(m),{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),title:e(s)("bcrypt.bcrypt_hash_hashed"),onChange:i},null,8,["modelValue","title"])]),l("div",N,[t.value?(u(),d(_,{key:0,message:e(s)("bcrypt.success_message"),description:e(s)("bcrypt.success_description"),type:"success","show-icon":""},null,8,["message","description"])):v("",!0),p.value?(u(),d(_,{key:1,message:e(s)("bcrypt.error_message"),description:e(s)("bcrypt.error_description"),type:"error","show-icon":""},null,8,["message","description"])):v("",!0)])])]),_:1})}}});const k=C(X,[["__scopeId","data-v-3dddfe2d"]]);export{k as default};
