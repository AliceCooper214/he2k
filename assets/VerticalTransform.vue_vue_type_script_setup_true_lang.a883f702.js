import{d as f,D as c,J as m,r as i,v,ao as h,a as V,b,g as l,o as w,l as F,c as d,bQ as M,i as T,bN as _}from"./index.954a2cbc.js";import{M as g}from"./MultiLineResult.0bab4ef4.js";const y={class:"VerticalTransform"},D=f({__name:"VerticalTransform",props:{transformFunc:{type:Function,default:s=>s},sampleData:{default:`A Free, Modern Toolbox
Built for Developers.
`},input:{default:""}},setup(s){const a=s;c(()=>a.transformFunc,()=>{o()}),c(()=>a.input,()=>{t.value=a.input,o()}),m(()=>{o()});const t=i(a.sampleData),n=i(""),u=v.exports.debounce(()=>{h.error("failed to convert data")},1e3);async function o(){let e=!0;try{n.value=await a.transformFunc(t.value)}catch(r){e=!1,u(),n.value="",console.warn(r)}e&&u.cancel()}return(e,r)=>(w(),V(l(_),{"max-width":1280},{one:b(()=>[F("div",y,[d(l(M),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),title:e.$t("verticalTransform.input"),onChange:o},null,8,["modelValue","title"]),T(e.$slots,"default"),d(l(g),{"result-desc":e.$t("verticalTransform.output"),result:n.value},null,8,["result-desc","result"])])]),_:3}))}});export{D as _};
