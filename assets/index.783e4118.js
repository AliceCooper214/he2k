import{d,r as l,J as r,N as c,a as p,b as m,g as t,o as f,l as E,c as s,bQ as M,bN as _}from"./index.954a2cbc.js";import{M as v}from"./MultiLineResult.0bab4ef4.js";const b=d({__name:"index",setup(N){const e=l("\u6C26\u4E09.example"),n=l("");r(()=>{o()});function o(){n.value=c.idnEncode(e.value)}return(u,a)=>(f(),p(t(_),{"max-width":1280},{one:m(()=>[E("div",null,[s(t(M),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),title:u.$t("idnEncoding.input"),onChange:o},null,8,["modelValue","title"]),s(t(v),{result:n.value,"result-desc":u.$t("idnEncoding.output")},null,8,["result","result-desc"])])]),_:1}))}});export{b as default};
