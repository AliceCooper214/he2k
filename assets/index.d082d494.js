import{d as g,y as x,r as d,J as C,a as h,b as i,g as e,ao as U,o as V,l as s,x as R,c as l,d0 as v,c$ as y,bV as w,c5 as I,bN as B,U as b,_ as L}from"./index.954a2cbc.js";const N={class:"url-encode"},S={class:"input"},k={class:"option"},z=b("URI"),D=b("URI Component"),T=g({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(m,{emit:f}){const c=m,{t:_}=x(),t=d('https://he3.app?name=He3 Application&platform="apple,windows"'),u=d(""),p=d("uri"),r=()=>{try{p.value==="uriComponent"?u.value=encodeURIComponent(t.value):u.value=encodeURI(t.value)}catch(o){U.warning(o.toString())}};return C(()=>{var o;(o=c.clipboardValue)!=null&&o.isUrl()&&(t.value=c.clipboardValue.getOriginData(),f("acceptClipboardCb")),r()}),(o,a)=>(V(),h(e(B),{"max-width":1280},{one:i(()=>[s("div",N,[s("div",S,[s("p",null,[s("span",null,R(e(_)("hexLang.input_tip")),1),s("span",k,[l(e(y),{value:p.value,"onUpdate:value":a[0]||(a[0]=n=>p.value=n),size:"small",onChange:r},{default:i(()=>[l(e(v),{value:"uri"},{default:i(()=>[z]),_:1}),l(e(v),{value:"uriComponent"},{default:i(()=>[D]),_:1})]),_:1},8,["value"])])]),l(e(w),{value:t.value,"onUpdate:value":a[1]||(a[1]=n=>t.value=n),autofocus:"",class:"input",onChange:r},null,8,["value"])]),l(e(I),{result:u.value,"onUpdate:result":a[2]||(a[2]=n=>u.value=n),"result-desc":e(_)("hexLang.result_tip_no_colon"),size:"large"},null,8,["result","result-desc"])])]),_:1}))}});const G=L(T,[["__scopeId","data-v-ba6b87b0"]]);export{G as default};