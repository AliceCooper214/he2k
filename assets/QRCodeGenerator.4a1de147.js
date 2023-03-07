import{d as M,r as p,D as j,J as E,ao as $,e as U,c as e,b as a,g as b,o as w,i as H,U as s,x as d,bS as R,a as O,H as T,bZ as A,b_ as I,l as Q,j as n,_ as J}from"./index.954a2cbc.js";import{L as Z}from"./layout3.feba5a7a.js";import{t as z,a as F,b as K}from"./browser.b44e01a3.js";const P={class:"QRCodeGenerator"},W=["href","download"],X={class:"output"},Y=M({__name:"QRCodeGenerator",props:{text:null},setup(D){const _=D,h=p(null),t=p({errorCorrectionLevel:"M",margin:4,scale:4,color:{dark:"#000000",light:"#ffffff"}}),f=p("png"),C=p(!1),m=p(!1),c=p({url:"",filename:"",disabled:!0});j(()=>_.text,()=>{i()}),E(()=>{i()});async function i(){if(_.text===""){C.value=!1,c.value.disabled=!1;return}z(h.value,_.text,t.value).catch(l=>{$.error(l.message)}),C.value=!0;let o=await F(_.text,t.value);c.value={url:o,disabled:!1,filename:"qrcode"}}const S=async()=>{m.value=!0,K(_.text).then(o=>{const l=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),v=window.URL.createObjectURL(l),r=document.createElement("a");r.href=v,r.setAttribute("download","qrcode"),document.body.appendChild(r),r.click(),document.body.removeChild(r),m.value=!1}).catch(o=>{$.error(o.message),m.value=!1})};return(o,l)=>{const v=n("a-radio"),r=n("a-row"),x=n("a-radio-group"),g=n("a-form-item"),y=n("a-input-number"),G=n("a-input"),q=n("a-col"),B=n("a-input-group"),N=n("a-form"),L=n("a-select-option"),V=n("a-select"),k=n("a-button");return w(),U("div",P,[e(b(Z),{"left-width":500},{one:a(()=>[H(o.$slots,"default",{},void 0,!0),e(N,{"label-col":{span:8},"wrapper-col":{span:16}},{default:a(()=>[e(g,{label:o.$t("qrCodeGenerator.errorCorrectionLevel.title")},{default:a(()=>[e(x,{value:t.value.errorCorrectionLevel,"onUpdate:value":l[0]||(l[0]=u=>t.value.errorCorrectionLevel=u),onChange:i},{default:a(()=>[e(r,null,{default:a(()=>[e(v,{value:"L"},{default:a(()=>[s(d(o.$t("qrCodeGenerator.errorCorrectionLevel.low")+" ~7%"),1)]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(v,{value:"M"},{default:a(()=>[s(d(o.$t("qrCodeGenerator.errorCorrectionLevel.medium")+" ~15%"),1)]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(v,{value:"Q"},{default:a(()=>[s(d(o.$t("qrCodeGenerator.errorCorrectionLevel.quartile")+" ~25%"),1)]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(v,{value:"H"},{default:a(()=>[s(d(o.$t("qrCodeGenerator.errorCorrectionLevel.high")+" ~30%"),1)]),_:1})]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),e(g,{label:o.$t("qrCodeGenerator.margin")},{default:a(()=>[e(y,{value:t.value.margin,"onUpdate:value":l[1]||(l[1]=u=>t.value.margin=u),min:1,max:100,onChange:i},null,8,["value"])]),_:1},8,["label"]),e(g,{label:o.$t("qrCodeGenerator.scale")},{default:a(()=>[e(y,{value:t.value.scale,"onUpdate:value":l[2]||(l[2]=u=>t.value.scale=u),min:1,max:100,onChange:i},null,8,["value"])]),_:1},8,["label"]),e(g,{label:o.$t("qrCodeGenerator.color"),"wrapper-col":{span:24}},{default:a(()=>[e(B,null,{default:a(()=>[e(r,{gutter:10},{default:a(()=>[e(q,{span:6},{default:a(()=>[e(G,{value:t.value.color.dark,"onUpdate:value":l[3]||(l[3]=u=>t.value.color.dark=u),type:"color",onChange:i},null,8,["value"])]),_:1}),e(q,{span:6},{default:a(()=>[e(G,{value:t.value.color.light,"onUpdate:value":l[4]||(l[4]=u=>t.value.color.light=u),type:"color",onChange:i},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["label"])]),_:1})]),two:a(()=>[s(d(o.$t("qrCodeGenerator.label"))+" ",1),e(V,{class:"qr-type",value:f.value,"onUpdate:value":l[5]||(l[5]=u=>f.value=u),style:{width:"80px"}},{default:a(()=>[e(L,{value:"png"},{default:a(()=>[s(d(".png"),1)]),_:1},8,["value"]),e(L,{value:"svg"},{default:a(()=>[s(d(".svg"),1)]),_:1},8,["value"])]),_:1},8,["value"]),f.value==="png"?(w(),U("a",{key:0,href:c.value.url,download:c.value.filename},[e(k,{type:"primary",disabled:c.value.disabled},{icon:a(()=>[e(b(R))]),default:a(()=>[s(" "+d(o.$t("qrCodeGenerator.save")),1)]),_:1},8,["disabled"])],8,W)):f.value==="svg"?(w(),O(k,{key:1,type:"primary",onClick:S,disabled:c.value.disabled,loading:m.value},{icon:a(()=>[e(b(R))]),default:a(()=>[s(" "+d(o.$t("qrCodeGenerator.save")),1)]),_:1},8,["disabled","loading"])):T("",!0),A(Q("div",X,[Q("canvas",{ref_key:"container",ref:h,class:"output-image"},null,512)],512),[[I,C.value]])]),_:3})])}}});const le=J(Y,[["__scopeId","data-v-e477c718"]]);export{le as Q};