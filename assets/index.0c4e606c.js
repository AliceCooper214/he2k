import{d as v,y as h,r as d,J as y,a as _,b as n,g as a,ao as $,o as b,c as o,cp as x,d1 as S,c4 as T,bY as D,U as F,x as g,cr as B,c5 as C,bN as M}from"./index.954a2cbc.js";const V=v({__name:"index",setup(k){const{t:p}=h(),r=d(123),u=d();function f(e){if(!e)return Promise.resolve("");const t=Math.floor(e/(3600*24)),s=Math.floor(e%(3600*24)/3600),i=Math.floor((e-s*3600-t*24*3600)/60),m=e-s*3600-i*60-t*24*3600;let l="";return t>0&&(l+=`${t.toFixed(0)} ${p("secondsToDuration.Days")} `),l+=`${s.toFixed(0).padStart(2,"0")}:${i.toFixed(0).padStart(2,"0")}:${m.toFixed(0).padStart(2,"0")}`,Promise.resolve(l)}const c=()=>{f(r.value).then(e=>{u.value=e}).catch(e=>{$.error(e)})};return y(()=>{c()}),(e,t)=>(b(),_(a(M),null,{one:n(()=>[o(a(B),null,{default:n(()=>[o(a(x),{label:e.$t("secondsToDuration.Seconds")},{default:n(()=>[o(a(S),null,{default:n(()=>[o(a(T),{value:r.value,"onUpdate:value":t[0]||(t[0]=s=>r.value=s),min:0,placeholder:"eg: 123","addon-after":"s",controls:!1},null,8,["value"]),o(a(D),{type:"primary","html-type":"submit",onClick:c},{default:n(()=>[F(g(e.$t("dateTimeCommon.convertButton.name")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),o(a(C),{result:u.value,"result-desc":e.$t("secondsToDuration.ResultDesc")},null,8,["result","result-desc"])]),_:1}))}});export{V as default};