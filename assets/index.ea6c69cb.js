import{d as v,y as f,r as i,a as g,b as x,g as a,o as _,l as h,c as p,bQ as b,bN as C,j as V}from"./index.954a2cbc.js";import{M as L}from"./MultiLineResult.0bab4ef4.js";import{a as M}from"./utf8.26cf90a6.js";const y={class:"input"},S=v({__name:"index",setup(B){const{t:d}=f(),n=i("hex"),m=[{label:"HEX",value:"hex"},{label:"HTML",value:"html"}],u=i(`A Free, Modern Toolbox
Built for Developers.`),r=i(""),s=()=>{let t=M.encode(u.value),e="";for(let o=0;o<t.length;o++)e+=c(t[o]);r.value=e};function c(t){switch(n.value){case"hex":let e=t.charCodeAt(0).toString(16);return e.length===1&&(e="0"+e),"\\x"+e;case"html":return"&#"+t.charCodeAt(0).toString()+";"}return t}return setTimeout(()=>{s()}),(t,e)=>{const o=V("a-radio-group");return _(),g(a(C),{"max-width":1280},{one:x(()=>[h("div",y,[p(a(b),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value=l),title:a(d)("hexLang.input_tip"),onChange:s},null,8,["modelValue","title"])]),p(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=l=>n.value=l),style:{"margin-top":"10px"},"option-type":"button",options:m,onChange:s},null,8,["value"]),p(a(L),{result:r.value,"onUpdate:result":e[2]||(e[2]=l=>r.value=l),"result-desc":a(d)("hexLang.result_tip")},null,8,["result","result-desc"])]),_:1})}}});export{S as default};
