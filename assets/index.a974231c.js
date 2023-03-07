import{d as S,r as o,as as G,a as J,b as t,g as T,o as i,l as I,c as l,e as v,f as p,U as d,x as u,F as f,$ as N,T as O,bN as P,j as s,_ as R}from"./index.954a2cbc.js";import{M as Y}from"./MultiLineResult.0bab4ef4.js";const q={class:"flexTool"},K=S({__name:"index",setup(Q){const y=o(50),g=o(50),b=o(5),c=o(["","","","","","","","",""]),j=["wrap","nowrap","wrap-reverse"],$=o(j[0]),D=["flex-start","flex-end","center","space-evenly","space-around","space-between"],w=o(D[0]),F=["flex-start","flex-end","center","stretch","base-line"],z=o(F[0]),h=["flex-start","flex-end","center","stretch","base-line"],C=o(h[0]),A=["row","column","row-reverse","column-reverse"],k=o(A[0]),L=G(()=>{const a=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
<body>${`
<style>
.container{
  display:flex;
  overflow:auto;
  justify-content:${w.value};
  align-items:${z.value};
  align-content:${C.value};
  flex-wrap:${$.value};
  flex-direction:${k.value};
}
.container .item{
  height:${y.value}px;
  width:${g.value}px;
  margin:${b.value}px;
  border:1px solid #000;
}
</style>
`}<div class="container">
`,_=`</div>
</body>
</html>`;let n="";for(let r=0;r<c.value.length;r++)n+=`	<div class="item"></div>
`;return a+n+_});return(m,a)=>{const _=s("a-input-number"),n=s("a-form-item"),r=s("a-select-option"),x=s("a-select"),U=s("a-button"),M=s("a-space"),V=s("a-form"),B=s("a-col"),W=s("a-row"),E=s("a-divider");return i(),J(T(P),{"max-width":1280},{one:t(()=>[I("div",q,[l(W,{type:"flex"},{default:t(()=>[l(B,{flex:"300px"},{default:t(()=>[l(V,{"label-col":{span:12},"wrapper-col":{span:16},size:"small"},{default:t(()=>[l(n,{label:"Height:"},{default:t(()=>[l(_,{value:y.value,"onUpdate:value":a[0]||(a[0]=e=>y.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"Width:"},{default:t(()=>[l(_,{value:g.value,"onUpdate:value":a[1]||(a[1]=e=>g.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"Margin:"},{default:t(()=>[l(_,{value:b.value,"onUpdate:value":a[2]||(a[2]=e=>b.value=e),size:"small"},null,8,["value"])]),_:1}),l(n,{label:"flex-wrap:"},{default:t(()=>[l(x,{value:$.value,"onUpdate:value":a[3]||(a[3]=e=>$.value=e),size:"small"},{default:t(()=>[(i(),v(f,null,p(j,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"justify-content:"},{default:t(()=>[l(x,{value:w.value,"onUpdate:value":a[4]||(a[4]=e=>w.value=e),size:"small"},{default:t(()=>[(i(),v(f,null,p(D,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"align-items:"},{default:t(()=>[l(x,{value:z.value,"onUpdate:value":a[5]||(a[5]=e=>z.value=e),size:"small"},{default:t(()=>[(i(),v(f,null,p(F,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"align-content:"},{default:t(()=>[l(x,{value:C.value,"onUpdate:value":a[6]||(a[6]=e=>C.value=e),size:"small"},{default:t(()=>[(i(),v(f,null,p(h,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,{label:"flex-direction:"},{default:t(()=>[l(x,{value:k.value,"onUpdate:value":a[7]||(a[7]=e=>k.value=e),size:"small"},{default:t(()=>[(i(),v(f,null,p(A,e=>l(r,{key:e},{default:t(()=>[d(u(e),1)]),_:2},1024)),64))]),_:1},8,["value"])]),_:1}),l(n,null,{default:t(()=>[l(M,null,{default:t(()=>[l(U,{type:"primary",size:"small",onClick:a[8]||(a[8]=e=>c.value.push(""))},{default:t(()=>[d(u(m.$t("css.add")),1)]),_:1}),l(U,{danger:"",size:"small",onClick:a[9]||(a[9]=e=>c.value.pop())},{default:t(()=>[d(u(m.$t("css.delete")),1)]),_:1}),l(U,{danger:"",size:"small",onClick:a[10]||(a[10]=e=>c.value=[])},{default:t(()=>[d(u(m.$t("css.deleteAll")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(B,{flex:"auto",class:"right-col"},{default:t(()=>[l(T(Y),{"result-desc":m.$t("css.getCodeHere"),result:T(L)},null,8,["result-desc","result"])]),_:1})]),_:1}),l(E),I("div",{class:"preview",style:N(`
        flex-wrap:${$.value};
        justify-content:${w.value};
        align-items:${z.value};
        align-content:${C.value};
        flex-direction:${k.value}`)},[l(O,{name:"list"},{default:t(()=>[(i(!0),v(f,null,p(c.value,(e,H)=>(i(),v("div",{key:H,style:N(`
            height:${y.value}px;
            width:${g.value}px;
            margin:${b.value}px;`),class:"divItem"},u(H),5))),128))]),_:1})],4)])]),_:1})}}});const ee=R(K,[["__scopeId","data-v-b335629b"]]);export{ee as default};
