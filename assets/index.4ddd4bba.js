import{d as l,r as p,J as u,gA as d,e as m,c as f,o as _}from"./index.954a2cbc.js";import{_ as g}from"./VerticalTransform.vue_vue_type_script_setup_true_lang.a883f702.js";import"./MultiLineResult.0bab4ef4.js";const b={class:"Decode"},k=l({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(o,{emit:r}){const e=o,c="\\u6c26\\u4e09\\u79d1\\u6280",a=p("");function i(t){const n=/\\u([0-9a-fA-F]+)/g;return t.replaceAll(n,(C,s)=>String.fromCodePoint(parseInt(s,16)))}return u(()=>{d(e.clipboardValue.getOriginData())&&(a.value=e.clipboardValue.getOriginData(),r("acceptClipboardCb"))}),(t,n)=>(_(),m("div",b,[f(g,{"transform-func":i,"sample-data":c,input:a.value},null,8,["input"])]))}});export{k as default};
