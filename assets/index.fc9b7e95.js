import{d as C,r as i,J as p,a as V,b as d,g as o,o as b,l as n,x as c,c as v,c1 as g,cU as S,_ as x}from"./index.954a2cbc.js";import{K as I}from"./KVResult.b6a01b09.js";import{v as U}from"./validate.5eb70dfd.js";import{p as w,v as D}from"./version.38ae582b.js";import"./CodeResult.e83fa9f7.js";const h={class:"top"},k=C({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(f,{emit:_}){const u=f,a=i("10923e02-1161-465e-ad0b-0661d8b540af");p(()=>{var t;(t=u.clipboardValue)!=null&&t.isUUID()&&(a.value=u.clipboardValue.getOriginData(),_("acceptClipboardCb"),l())});const r=i({Content:null,"Standard String Format":null,Version:null,Variant:null});function l(){if(!U(a.value)){r.value={Content:null,"Standard String Format":null,Version:null,Variant:null};return}const t=w(a.value);r.value={"Standard String Format":`${a.value}`,Content:[...t].map(e=>e.toString(16).padStart(2,"0")).join(":").toUpperCase(),Version:D(a.value),Variant:m(a.value)}}function m(t){let e=parseInt(t.split("-")[3][0],16);return e<=7?"reserved (NCS backward compatible)":e<=11?"DCE 1.1, ISO/IEC 11578:1996":e<=13?"reserved (Microsoft GUID)":e===14?"reserved (future use)":'unknown / invalid. Must end with "0"'}return p(()=>{l()}),(t,e)=>(b(),V(o(S),null,{one:d(()=>[n("div",h,[n("p",null,c(t.$t("hexLang.input_tip")),1),v(o(g),{value:a.value,"onUpdate:value":e[0]||(e[0]=s=>a.value=s),autofocus:"",class:"input",spellcheck:"false",onChange:e[1]||(e[1]=s=>l())},null,8,["value"])])]),two:d(()=>[n("div",null,[n("p",null,c(t.$t("hexLang.result_tip")),1),v(o(I),{result:r.value,width:600},null,8,["result"])])]),_:1}))}});const L=x(k,[["__scopeId","data-v-700d0d39"]]);export{L as default};