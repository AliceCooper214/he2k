import{d as p,y as x,r as o,J as b,a as g,b as C,g as d,o as i,e as _,l as e,x as t,F as I,f as L,bN as w,p as B,m as E,_ as A}from"./index.954a2cbc.js";const j=y=>(B("data-v-6eb68b87"),y=y(),E(),y),F={key:0,class:"js-key-tips"},M={key:1},S={class:"js-key-num"},D={class:"js-key-cards"},J={class:"js-key-card"},T=j(()=>e("div",{class:"js-key-card-header"},"event.key",-1)),V={class:"js-key-card-main"},q={class:"js-key-card"},z=j(()=>e("div",{class:"js-key-card-header"},"event.location",-1)),G={class:"js-key-card-main"},H={class:"js-key-card"},O={class:"js-key-card-header"},P={class:"js-key-card-main"},Q={class:"js-key-card"},U={class:"js-key-card-header"},W={class:"js-key-card-main"},X={class:"js-key-card"},Y={class:"js-key-card-header"},Z={class:"js-key-card-main"},$={class:"js-key-card"},N={class:"js-key-card-header"},R={class:"js-key-card-main"},ee=p({__name:"index",setup(y){const{t:l}=x(),v=o(!0),a=o({key:"a",location:0,code:"KeyA",metaKey:!1,shiftKey:!1,altKey:!1,ctrlKey:!1,which:65,history:[]}),u=o(null),k=o(null),f=o(null),K=o(null);function m(s,c){n(u.value,s==="Meta","metaKey",c),n(k.value,s==="Shift","shiftKey",c),n(f.value,s==="Alt","altKey",c),n(K.value,s==="Control","ctrlKey",c)}function n(s,c,h,r){if(s){if(s.classList.remove(r),c)return;a.value[h]&&s.classList.toggle(r)}}return b(()=>{window.addEventListener("keydown",(s,c)=>{v.value=!1,a.value.which=s.which,a.value.key=s.key,a.value.location=s.location,a.value.code=s.code,a.value.metaKey=s.metaKey,a.value.shiftKey=s.shiftKey,a.value.altKey=s.altKey,a.value.ctrlKey=s.ctrlKey,m(s.key,"pressed"),a.value.history.unshift(s.key),a.value.history.length>4&&a.value.history.pop()})}),(s,c)=>(i(),g(d(w),{"max-width":1280,class:"js-key"},{one:C(()=>[v.value?(i(),_("div",F,[e("a",null,t(d(l)("jsKeyCode.prompt")),1)])):(i(),_("div",M,[e("div",S,t(a.value.which),1),e("div",D,[e("div",J,[T,e("div",V,t(a.value.key),1)]),e("div",q,[z,e("div",G,t(a.value.location),1)]),e("div",H,[e("div",O,t(d(l)("jsKeyCode.code")),1),e("div",P,t(a.value.code),1)]),e("div",Q,[e("div",U,t(d(l)("jsKeyCode.mks")),1),e("div",W,[e("div",{ref_key:"metaKey",ref:u,class:"js-key-card-meta-keys-meta"},"\u2318",512),e("div",{ref_key:"shiftKey",ref:k,class:"js-key-card-meta-keys-shift"},"\u21E7",512),e("div",{ref_key:"altKey",ref:f,class:"js-key-card-meta-keys-alt"},"\u2325",512),e("div",{ref_key:"ctrlKey",ref:K,class:"js-key-card-meta-keys-ctrl"},"^",512)])]),e("div",X,[e("div",Y,t(d(l)("jsKeyCode.which")),1),e("div",Z,t(a.value.which),1)]),e("div",$,[e("div",N,t(d(l)("jsKeyCode.history")),1),e("div",R,[(i(!0),_(I,null,L(a.value.history,(h,r)=>(i(),_("div",{key:r},t(h),1))),128))])])])]))]),_:1}))}});const ae=A(ee,[["__scopeId","data-v-6eb68b87"]]);export{ae as default};
