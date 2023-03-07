import{d as J,r as s,as as R,D as V,a as K,b as u,g as x,o as k,c as e,l as G,bZ as W,b_ as N,e as T,U as L,c9 as M,j as b,p as O,m as Q,_ as X}from"./index.954a2cbc.js";import{L as Y}from"./layout3.feba5a7a.js";import{C as D}from"./index.462c81ea.js";import{C as h}from"./CodeResult.e83fa9f7.js";import"./utils.95bb502f.js";const ee=B=>(O("data-v-5698d70c"),B=B(),Q(),B),le=L("px"),ae=L("percent"),ue={class:"size"},te={key:0},oe={key:1},se={style:{display:"flex"}},ne=ee(()=>G("div",{class:"screen"},[G("div",{class:"target"})],-1)),re=J({__name:"index",setup(B){M(t=>({"368638ce":x(S),"544bd162":C.value,"353831b0":x(j),"353831ce":x(E),"6483ccef":x(H),"05c5cfc2":w.value,"9c00004a":z.value}));const r=s(200),d=s(200),i=s(0),p=s(0),m=s(0),f=s(0),_=s(0),w=s("solid"),U=s(1),z=s("rgb(0,0,0)"),g=s("px"),C=s("rgb(234,227,153)"),y=s(!0),P=s([{value:"none",label:"none"},{value:"dotted",label:"dotted"},{value:"solid",label:"solid"},{value:"double",label:"double"},{value:"dashed",label:"dashed"}]),j=R(()=>r.value+"px"),E=R(()=>d.value+"px"),S=R(()=>g.value==="percent"?`${p.value}% ${100-p.value}% ${f.value}% ${100-f.value}% / ${100-i.value}% ${m.value}% ${100-m.value}% ${i.value}%`:`${p.value}px ${m.value}px ${f.value}px ${i.value}px`),H=R(()=>U.value+"px");return V(_,()=>{i.value=m.value=p.value=f.value=_.value}),V(g,()=>{g.value==="percent"&&(_.value=50)}),(t,l)=>{const I=b("a-radio-button"),Z=b("a-radio-group"),o=b("a-form-item"),q=b("a-switch"),$=b("a-input-number"),v=b("a-slider"),n=b("a-col"),c=b("a-row"),A=b("a-select"),F=b("a-form");return k(),K(x(Y),{"left-width":350},{one:u(()=>[e(F,{name:"basic","label-align":"left"},{default:u(()=>[e(o,{label:t.$t("cssBorderRadiusGenerator.unit")},{default:u(()=>[e(Z,{value:g.value,"onUpdate:value":l[0]||(l[0]=a=>g.value=a),"button-style":"solid",size:"small"},{default:u(()=>[e(I,{value:"px"},{default:u(()=>[le]),_:1}),e(I,{value:"percent"},{default:u(()=>[ae]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),G("div",ue,[e(o,{label:t.$t("cssBorderRadiusGenerator.size")},{default:u(()=>[e(q,{checked:y.value,"onUpdate:checked":l[1]||(l[1]=a=>y.value=a),size:"small"},null,8,["checked"])]),_:1},8,["label"]),W(e(o,{label:t.$t("cssBorderRadiusGenerator.width"),name:"width",style:{"margin-left":"20px"}},{default:u(()=>[e($,{value:r.value,"onUpdate:value":l[2]||(l[2]=a=>r.value=a),min:1,max:750,size:"small"},null,8,["value"])]),_:1},8,["label"]),[[N,y.value]]),W(e(o,{label:t.$t("cssBorderRadiusGenerator.height"),name:"height",style:{"margin-left":"20px"}},{default:u(()=>[e($,{value:d.value,"onUpdate:value":l[3]||(l[3]=a=>d.value=a),min:1,max:400,size:"small"},null,8,["value"])]),_:1},8,["label"]),[[N,y.value]])]),g.value==="percent"?(k(),T("div",te,[e(o,{label:t.$t("cssBorderRadiusGenerator.all")},{default:u(()=>[e(v,{value:_.value,"onUpdate:value":l[4]||(l[4]=a=>_.value=a),size:"small"},null,8,["value"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.left")},{default:u(()=>[e(v,{value:i.value,"onUpdate:value":l[5]||(l[5]=a=>i.value=a)},null,8,["value"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.top")},{default:u(()=>[e(v,{value:p.value,"onUpdate:value":l[6]||(l[6]=a=>p.value=a)},null,8,["value"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.right")},{default:u(()=>[e(v,{value:m.value,"onUpdate:value":l[7]||(l[7]=a=>m.value=a)},null,8,["value"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.bottom")},{default:u(()=>[e(v,{value:f.value,"onUpdate:value":l[8]||(l[8]=a=>f.value=a)},null,8,["value"])]),_:1},8,["label"])])):(k(),T("div",oe,[e(o,{label:t.$t("cssBorderRadiusGenerator.all")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:_.value,"onUpdate:value":l[9]||(l[9]=a=>_.value=a),min:0,max:r.value>d.value?d.value:r.value,size:"small"},null,8,["value","max"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:_.value,"onUpdate:value":l[10]||(l[10]=a=>_.value=a),min:0,max:r.value>d.value?d.value:r.value,style:{"margin-left":"16px"},size:"small"},null,8,["value","max"])]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.left")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:i.value,"onUpdate:value":l[11]||(l[11]=a=>i.value=a),min:0,max:d.value},null,8,["value","max"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:i.value,"onUpdate:value":l[12]||(l[12]=a=>i.value=a),min:0,max:d.value,style:{"margin-left":"16px"},size:"small"},null,8,["value","max"])]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.top")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:p.value,"onUpdate:value":l[13]||(l[13]=a=>p.value=a),min:0,max:r.value},null,8,["value","max"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:p.value,"onUpdate:value":l[14]||(l[14]=a=>p.value=a),min:0,max:r.value,style:{"margin-left":"16px"},size:"small"},null,8,["value","max"])]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.right")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:m.value,"onUpdate:value":l[15]||(l[15]=a=>m.value=a),min:0,max:d.value},null,8,["value","max"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:m.value,"onUpdate:value":l[16]||(l[16]=a=>m.value=a),min:0,max:d.value,style:{"margin-left":"16px"},size:"small"},null,8,["value","max"])]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.bottom")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:f.value,"onUpdate:value":l[17]||(l[17]=a=>f.value=a),min:0,max:r.value},null,8,["value","max"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:f.value,"onUpdate:value":l[18]||(l[18]=a=>f.value=a),min:0,max:r.value,style:{"margin-left":"16px"},size:"small"},null,8,["value","max"])]),_:1})]),_:1})]),_:1},8,["label"])])),e(o,{label:t.$t("cssBorderRadiusGenerator.borderStyle")},{default:u(()=>[e(A,{value:w.value,"onUpdate:value":l[19]||(l[19]=a=>w.value=a),style:{width:"120px"},options:P.value,size:"small"},null,8,["value","options"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.borderWidth")},{default:u(()=>[e(c,null,{default:u(()=>[e(n,{span:12},{default:u(()=>[e(v,{value:U.value,"onUpdate:value":l[20]||(l[20]=a=>U.value=a),min:1,max:20},null,8,["value"])]),_:1}),e(n,{span:4},{default:u(()=>[e($,{value:U.value,"onUpdate:value":l[21]||(l[21]=a=>U.value=a),min:1,max:20,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["label"]),G("div",se,[e(o,{label:t.$t("cssBorderRadiusGenerator.borderColor")},{default:u(()=>[e(x(D),{"pure-color":z.value,"onUpdate:pure-color":l[22]||(l[22]=a=>z.value=a),position:{top:"-250px",left:"15px"},class:"color-picker"},null,8,["pure-color"])]),_:1},8,["label"]),e(o,{label:t.$t("cssBorderRadiusGenerator.bgColor"),style:{"margin-left":"20px"}},{default:u(()=>[e(x(D),{"pure-color":C.value,"onUpdate:pure-color":l[23]||(l[23]=a=>C.value=a),position:{top:"-250px",left:"15px"},class:"color-picker"},null,8,["pure-color"])]),_:1},8,["label"])]),e(x(h),{code:"border-radius:"+x(S),lang:"CSS"},null,8,["code"])]),_:1})]),two:u(()=>[ne]),_:1})}}});const fe=X(re,[["__scopeId","data-v-5698d70c"]]);export{fe as default};
