import{d as x,z as L,r as v,J as V,D as k,as as B,a as S,b as s,g as _,o as h,l as f,c as r,e as N,f as $,F as A,c5 as D,bN as F,j as i}from"./index.954a2cbc.js";import{u as d}from"./index.56c1474b.js";const O=f("p",null,"Original URL",-1),z={style:{"margin-top":"20px"}},J=x({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(y,{emit:C}){const g=y,m=["id","source","medium","name","term","content"],t=L({source:"",medium:"",id:"",name:"",term:"",content:""}),o=v("https://he3.app");let p=d(o.value,!0),e=v(p.query);V(()=>{var n;(n=g.clipboardValue)!=null&&n.isUrl()&&(o.value=g.clipboardValue.getOriginData(),C("acceptClipboardCb"))}),k(o,(n,u)=>{p=d(o.value,!0),e=p.query,"utm_source"in e&&e.utm_source!==""&&(t.source=e.utm_source||"",e.utm_source=t.source),"utm_medium"in e&&e.utm_medium!==""&&(t.medium=e.utm_medium||"",e.utm_medium=t.medium),"utm_campaign"in e&&e.utm_campaign!==""&&(t.name=e.utm_campaign||"",e.utm_campaign=t.name),"utm_id"in e&&e.utm_id!==""&&(t.id=e.utm_id||"",e.utm_id=t.id),"utm_term"in e&&e.utm_term!==""&&(t.term=e.utm_term||"",e.utm_term=t.term),"utm_content"in e&&e.utm_content!==""&&(t.content=e.utm_content||"",e.utm_content=t.content)},{immediate:!0});const b=n=>{if(n){let u="";for(let c in n){let l=n[c];Array.isArray(l)&&(l=l.join(",")),u+=`&${c}=${l}`}return u=u.replace("&","?"),u}return""},U=B(()=>{t.source!==""?e.utm_source=encodeURIComponent(t.source):delete e.utm_source,t.medium!==""?e.utm_medium=encodeURIComponent(t.medium):delete e.utm_medium,t.name!==""?e.utm_campaign=encodeURIComponent(t.name):delete e.utm_campaign,t.id!==""?e.utm_id=encodeURIComponent(t.id):delete e.utm_id,t.term!==""?e.utm_term=encodeURIComponent(t.term):delete e.utm_term,t.content!==""?e.utm_content=encodeURIComponent(t.content):delete e.utm_content;const n=b(e);return d(o.value).protocol+"//"+d(o.value).host+d(o.value).pathname+n});return(n,u)=>{const c=i("a-input"),l=i("a-form-item"),w=i("a-col"),R=i("a-row"),I=i("a-form");return h(),S(_(F),{"max-width":1280},{one:s(()=>[f("div",null,[O,r(c,{value:o.value,"onUpdate:value":u[0]||(u[0]=a=>o.value=a),"allow-clear":"",placeholder:"URL"},null,8,["value"]),r(I,{style:{"margin-top":"30px"},name:"campaign-source",class:"ant-advanced-search-form","label-col":{span:7},"wrapper-col":{span:16,offset:1},model:t},{default:s(()=>[r(R,{gutter:24},{default:s(()=>[(h(),N(A,null,$(6,a=>r(w,{key:a,span:8,style:{padding:"5px"}},{default:s(()=>[r(l,{label:m[a-1],"label-align":"right",rules:[{required:m[a-1]==="source"||m[a-1]==="name"||m[a-1]==="medium"}]},{default:s(()=>[r(c,{value:t[m[a-1]],"onUpdate:value":q=>t[m[a-1]]=q,style:{width:"100%"},placeholder:m[a-1],"allow-clear":""},null,8,["value","onUpdate:value","placeholder"])]),_:2},1032,["label","rules"])]),_:2},1024)),64))]),_:1})]),_:1},8,["model"])]),f("div",z,[r(_(D),{"result-desc":n.$t("utmGenerator.utm"),result:_(U)},null,8,["result-desc","result"])])]),_:1})}}});export{J as default};
