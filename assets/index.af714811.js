import{d as c,y as m,r as i,a as f,b as x,g as l,o as C,l as _,c as p,bQ as v,bN as V}from"./index.954a2cbc.js";import{M as g}from"./MultiLineResult.0bab4ef4.js";const h={class:"input"},b=c({__name:"index",setup(F){const{t:n}=m(),a=i("4120467265652C204D6F6465726E20546F6F6C626F780A4275696C7420666F7220446576656C6F706572732E"),s=i("");function d(o){let e=o.replaceAll(" ","").replaceAll("-","").replaceAll(":","").replaceAll(",",""),t="";for(let u=0;u<e.length;u+=2)t+=String.fromCharCode(parseInt(e.substr(u,2),16));return t}const r=()=>{s.value=d(a.value)};return setTimeout(()=>{r()}),(o,e)=>(C(),f(l(V),{"max-width":1280},{one:x(()=>[_("div",h,[p(l(v),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),title:l(n)("hexLang.input_tip"),onChange:r},null,8,["modelValue","title"])]),p(l(g),{result:s.value,"onUpdate:result":e[1]||(e[1]=t=>s.value=t),"result-desc":l(n)("hexLang.result_tip")},null,8,["result","result-desc"])]),_:1}))}});export{b as default};
