import{d as q,r as h,as as J,z as L,D as Q,a as Y,b,g as F,o as _,l as e,x as s,c as C,e as v,f as P,$ as p,F as $,cR as Z,H as N,bN as ee,c9 as te,j as k,p as le,m as oe,_ as ae}from"./index.954a2cbc.js";import{c as n,C as i}from"./utils.95bb502f.js";const c=w=>(le("data-v-e6465a7e"),w=w(),oe(),w),se={style:{display:"flex"}},ne={class:"flexCan"},ie={class:"title"},ce={class:"main"},re={class:"container"},de={style:{display:"none"}},Fe={class:"title"},ue={class:"title"},Ce={class:"flexC"},pe={class:"title"},_e=c(()=>e("div",{class:"midDiv"},[e("span",{style:{color:"#000 !important"}},"Black Text"),e("span",{style:{"text-shadow":"1px 1px 0 #444",color:"#000 !important"}},"Shadow"),e("span",{style:{color:"#fff !important"}},"White Text"),e("span",{style:{"text-shadow":"1px 1px 0 #444",color:"#fff !important"}},"Shadow")],-1)),he={style:{"font-weight":"700"}},ve={class:"flexC"},ye={class:"title"},ge={style:{width:"40px","text-align":"right"}},me={style:{width:"40px"}},xe=c(()=>e("span",{style:{opacity:"0"}},"1",-1)),be=[xe],ke=c(()=>e("span",{style:{opacity:"0"}},"1",-1)),we=[ke],fe=c(()=>e("span",{style:{opacity:"0"}},"1",-1)),Ie=[fe],He=c(()=>e("h1",null,"RGB (Red, Green, Blue)",-1)),Be={style:{display:"flex"}},Re={style:{width:"33%"}},Se=c(()=>e("span",null,"Red",-1)),Ee=c(()=>e("span",null,null,-1)),Ge=c(()=>e("div",{style:{width:"100%","background-color":"red"}},[e("span",{style:{opacity:"0"}},"1")],-1)),Le={style:{width:"33%"}},Pe=c(()=>e("span",null,"Green",-1)),$e=c(()=>e("span",null,null,-1)),Ne=c(()=>e("div",{style:{width:"100%","background-color":"green"}},[e("span",{style:{opacity:"0"}},"1")],-1)),Xe={style:{width:"33%"}},ze=c(()=>e("span",null,"Blue",-1)),Ue=c(()=>e("span",null,[e("span",{style:{opacity:"0"}},"1")],-1)),Ve=c(()=>e("div",{style:{width:"100%","background-color":"blue"}},[e("span",{style:{opacity:"0"}},"1")],-1)),De=c(()=>e("span",{style:{opacity:"0"}},"1",-1)),Te=[De],Me=c(()=>e("span",{style:{opacity:"0"}},"1",-1)),je=[Me],Ae={style:{"text-align":"center"}},Ke={style:{"text-align":"center"}},Oe=q({__name:"index",setup(w){te(l=>({"2074e438":d.value}));const I=h("#a6a6a6"),U=()=>{d.value=n(I.value,i.HEX)},d=h("#a6a6a6"),H=h(""),X=J(()=>n(d.value,i.HSL).split("%")[0]+"%,"),V=()=>{d.value=n(H.value,i.HEX)},D=[7,8,9,10,11,12,13,12,11,10,9,8,7],T=["#003366","#336699","#3366CC","#003399","#000099","#0000CC","#000066","#006666","#006699","#0099CC","#0066CC","#0033CC","#0000FF","#3333FF","#333399","#669999","#009999","#33CCCC","#00CCFF","#0099FF","#0066FF","#3366FF","#3333CC","#666699","#339966","#00CC99","#00FFCC","#00FFFF","#33CCFF","#3399FF","#6699FF","#6666FF","#6600FF","#6600CC","#339933","#00CC66","#00FF99","#66FFCC","#66FFFF","#66CCFF","#99CCFF","#9999FF","#9966FF","#9933FF","#9900FF","#006600","#00CC00","#00FF00","#66FF99","#99FFCC","#CCFFFF","#CCCCFF","#CC99FF","#CC66FF","#CC33FF","#CC00FF","#9900CC","#003300","#009933","#33CC33","#66FF66","#99FF99","#CCFFCC","#FFFFFF","#FFCCFF","#FF99FF","#FF66FF","#FF00FF","#CC00CC","#660066","#336600","#009900","#66FF33","#99FF66","#CCFF99","#FFFFCC","#FFCCCC","#FF99CC","#FF66CC","#FF33CC","#CC0099","#993399","#333300","#669900","#99FF33","#CCFF66","#FFFF99","#FFCC99","#FF9999","#FF6699","#FF3399","#CC3399","#990099","#666633","#99CC00","#CCFF33","#FFFF66","#FFCC66","#FF9966","#FF6666","#FF0066","#CC6699","#993366","#999966","#CCCC00","#FFFF00","#FFCC00","#FF9933","#FF6600","#FF5050","#CC0066","#660033","#996633","#CC9900","#FF9900","#CC6600","#FF3300","#FF0000","#CC0000","#990033","#663300","#996600","#CC3300","#993300","#990000","#800000","#993333"];let f=0;const z=h(""),M=l=>{d.value=n(l.target.style.backgroundColor,i.HEX)},j=l=>{z.value=l.target.style.backgroundColor},A=[{title:"Color",dataIndex:"color",width:100,align:"center"},{title:"Hue",dataIndex:"hue",align:"center"},{title:"Hex",dataIndex:"hex",align:"center"},{title:"Rgb",dataIndex:"rgb",align:"center"},{title:"Hsl",dataIndex:"hsl",align:"center"}],K=[{title:"Color",dataIndex:"color",width:100,align:"center"},{title:"Sat",dataIndex:"sat",align:"center"},{title:"Hex",dataIndex:"hex",align:"center"},{title:"Rgb",dataIndex:"rgb",align:"center"},{title:"Hsl",dataIndex:"hsl",align:"center"}],O=[{title:"Color",dataIndex:"color",width:100,align:"center"},{title:"Light",dataIndex:"light",align:"center"},{title:"Hex",dataIndex:"hex",align:"center"},{title:"Rgb",dataIndex:"rgb",align:"center"},{title:"Hsl",dataIndex:"hsl",align:"center"}],B=L([]),R=L([]),S=L([]),y=h(0),g=h(0),m=h(0);return Q(d,()=>{let l=n(d.value,i.RGB).match(/[1-9][0-9]*/g);l&&(y.value=Number(l[0]),g.value=Number(l[1]),m.value=Number(l[2])),B.length=0,R.length=0,S.length=0;const r=n(d.value,i.HSL);for(let a=0;a<25;a++){const u=r.replace(/\d+/i,(a*15).toString());B.push({key:a,color:u,hue:a*15,hex:n(u,i.HEX),rgb:n(u,i.RGB),hsl:u})}for(let a=0;a<=20;a++){const u=r.replace(/\,\d+/i,","+(100-a*5)),x=r.replace(/\d+\%\)/i,100-a*5+"%)");R.push({key:a,color:u,sat:100-a*5+"%",hex:n(u,i.HEX),rgb:n(u,i.RGB),hsl:u}),S.push({key:a,color:x,light:100-a*5+"%",hex:n(x,i.HEX),rgb:n(x,i.RGB),hsl:x})}},{immediate:!0}),(l,r)=>{const a=k("a-card"),u=k("a-input-search"),x=k("a-input"),E=k("a-table"),G=k("a-slider");return _(),Y(F(ee),{"max-width":900},{one:b(()=>[e("div",se,[e("div",ne,[e("span",ie,s(l.$t("colorPicker.pickColor")),1),C(a,{class:"imgCard"},{default:b(()=>[e("div",ce,[e("div",re,[(_(),v($,null,P(D,(t,o)=>e("div",{key:o,style:p({position:"relative",top:o!==0?-7*o+"px":""}),onMousemove:j},[(_(!0),v($,null,P(t,W=>(_(),v("div",{key:W,class:"colorDiv",style:p({backgroundColor:T[F(f)]}),onClick:M},[e("span",de,s(Z(f)?f.value++:f++),1)],4))),128))],36)),64))])])]),_:1}),e("span",{style:p({display:"inline-block",width:"30%",height:" 20px",backgroundColor:z.value})},null,4),e("span",Fe,s(l.$t("colorPicker.enterColor")),1),C(u,{value:H.value,"onUpdate:value":r[0]||(r[0]=t=>H.value=t),"enter-button":"OK",size:"default",style:{width:"60%"},onSearch:V},null,8,["value"]),e("span",ue,s(l.$t("colorPicker.useHTML")),1),C(x,{value:I.value,"onUpdate:value":r[1]||(r[1]=t=>I.value=t),type:"color",style:{width:"60%"},size:"small",onBlur:U},null,8,["value"])]),e("div",Ce,[e("span",pe,s(l.$t("colorPicker.selected")),1),_e,e("span",he,s(d.value.toLowerCase()),1),e("span",null,s(F(n)(d.value,F(i).RGB)),1),e("span",null,s(F(n)(d.value,F(i).HSL)),1)]),e("div",ve,[e("span",ye,s(l.$t("colorPicker.ld")),1),(_(),v($,null,P(21,(t,o)=>e("div",{key:t,style:{display:"flex",width:"100%",padding:"0px 5px"}},[e("label",ge,s(100-o*5)+"%",1),e("div",{style:p({height:"20px",flexGrow:1,margin:"2px 5px",backgroundColor:F(X)+(100-o*5)+"%)"})},null,4),e("label",me,s(F(n)(F(X)+(100-o*5)+"%)",F(i).HEX).toLowerCase()),1)])),64))])]),e("h2",null,s(l.$t("colorPicker.hue")),1),C(E,{size:"small",columns:A,"data-source":B,class:"ant-table-striped",pagination:!1,"row-class-name":(t,o)=>o%2===1?"table-striped":null},{bodyCell:b(({column:t,text:o})=>[t.dataIndex==="color"?(_(),v("div",{key:0,style:p({backgroundColor:o})},be,4)):N("",!0)]),_:1},8,["data-source","row-class-name"]),e("h2",null,s(l.$t("colorPicker.saturation")),1),C(E,{size:"small",columns:K,"data-source":R,class:"ant-table-striped",pagination:!1,"row-class-name":(t,o)=>o%2===1?"table-striped":null},{bodyCell:b(({column:t,text:o})=>[t.dataIndex==="color"?(_(),v("div",{key:0,style:p({backgroundColor:o})},we,4)):N("",!0)]),_:1},8,["data-source","row-class-name"]),e("h2",null,s(l.$t("colorPicker.lightness")),1),C(E,{size:"small",columns:O,"data-source":S,class:"ant-table-striped",pagination:!1,"row-class-name":(t,o)=>o%2===1?"table-striped":null},{bodyCell:b(({column:t,text:o})=>[t.dataIndex==="color"?(_(),v("div",{key:0,style:p({backgroundColor:o})},Ie,4)):N("",!0)]),_:1},8,["data-source","row-class-name"]),He,C(a,{style:{width:"90%",display:"flex","flex-direction":"column"}},{default:b(()=>[e("div",Be,[e("div",Re,[Se,Ee,Ge,C(G,{value:y.value,"onUpdate:value":r[2]||(r[2]=t=>y.value=t),min:0,max:255},null,8,["value"])]),e("div",Le,[Pe,$e,Ne,C(G,{value:g.value,"onUpdate:value":r[3]||(r[3]=t=>g.value=t),min:0,max:255},null,8,["value"])]),e("div",Xe,[ze,Ue,Ve,C(G,{value:m.value,"onUpdate:value":r[4]||(r[4]=t=>m.value=t),min:0,max:255},null,8,["value"])])]),e("div",{style:p({width:"100%",backgroundColor:"rgb("+y.value+","+g.value+","+m.value+")"})},Te,4),e("div",{style:p({width:"100%",backgroundColor:d.value})},je,4),e("p",Ae,s("rgb("+y.value+","+g.value+","+m.value+")"),1),e("p",Ke,s(F(n)("rgb("+y.value+","+g.value+","+m.value+")",F(i).HEX)),1)]),_:1})]),_:1})}}});const Je=ae(Oe,[["__scopeId","data-v-e6465a7e"]]);export{Je as default};
