import{d as L,y as M,N as P,r as v,D as _,J as U,a as H,b as c,g as t,o as d,l as q,c as s,U as p,x as m,e as f,f as T,F as y,bY as w,dk as J,d1 as k,c8 as V,bM as E,c0 as G,bN as B,_ as I}from"./index.954a2cbc.js";import{a as j}from"./copy.c1ac1c8e.js";var C=(n=>(n.GET="GET",n.POST="POST",n.Auth="Auth",n))(C||{});function D(n){switch(n){case"GET":return`curl 'http://en.wikipedia.org/' \\
      -H 'Accept-Encoding: gzip, deflate, sdch' \\
      -H 'Accept-Language: en-US,en;q=0.8' \\
      -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \\
      -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \\
      -H 'Referer: http://www.wikipedia.org/' \\
      -H 'Connection: keep-alive' --compressed`;case"POST":return`curl 'http://fiddle.jshell.net/echo/html/' \\
      -H 'Origin: http://fiddle.jshell.net' \\
      -H 'Accept-Encoding: gzip, deflate' \\
      -H 'Accept-Language: en-US,en;q=0.8' \\
      -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \\
      -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \\
      -H 'Accept: */*' \\
      -H 'Referer: http://fiddle.jshell.net/_display/' \\
      -H 'X-Requested-With: XMLHttpRequest' \\
      -H 'Connection: keep-alive' \\
      --data 'msg1=wow&msg2=such&msg3=data' --compressed`;case"Auth":return'curl "https://api.test.com/" -u "some_username:some_password"'}}const F={class:"curl-converter-wrapper"},$=L({__name:"index",props:{clipboardValue:null,searchValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(n,{emit:b}){const A=n,{t:R}=M(),a=P.getCurlConverter(),h={DART:a.toDart,JAVASCRIPT:a.toBrowser,JSON:a.toJsonString,JAVA:a.toJava,"Node-Fetch":a.toNodeFetch,"Node-Request":a.toNodeRequest,GO:a.toGo,PHP:a.toPhp,PYTHON:a.toPython,R:a.toR,RUST:a.toRust},x=Object.keys(h),i=v("JAVASCRIPT"),N=e=>{switch(e){case"Node-Fetch":return"JAVASCRIPT";case"Node-Request":return"JAVASCRIPT";default:return e}},u=v(""),r=v("");_(u,e=>{try{r.value=h[i.value](e)}catch{r.value=""}}),_(i,e=>{try{r.value=h[e](u.value)}catch{r.value=""}});const S=e=>{u.value=D(e)};return U(()=>{var e;(e=A.clipboardValue)!=null&&e.isCurlCommand()?(u.value=A.clipboardValue.getOriginData(),b("acceptClipboardCb")):S(C.GET)}),(e,o)=>(d(),H(t(B),{"max-width":1280,style:{height:"100%"},class:"layout"},{one:c(()=>[q("div",F,[s(t(k),{style:{"justify-self":"end"}},{default:c(()=>[p(m(e.$t("curlToCode.sample"))+": ",1),(d(!0),f(y,null,T(t(C),(l,g,O)=>(d(),f(y,{key:O},[s(t(w),{type:"text",size:"small",style:{color:"#448ef7"},onClick:z=>S(l)},{default:c(()=>[p(m(g),1)]),_:2},1032,["onClick"]),s(t(J),{type:"vertical"})],64))),128))]),_:1}),s(t(V),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=l=>u.value=l),lang:"SHELL",placeholder:e.$t("curlToCode.input.placeholder"),class:"editor"},null,8,["modelValue","placeholder"]),s(t(k),{style:{"justify-self":"end"}},{default:c(()=>[s(t(E),{value:i.value,"onUpdate:value":o[1]||(o[1]=l=>i.value=l),style:{"min-width":"140px"}},{default:c(()=>[(d(!0),f(y,null,T(t(x),(l,g)=>(d(),H(t(G),{key:g,value:l},{default:c(()=>[p(m(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),s(t(w),{type:"primary",onClick:o[2]||(o[2]=l=>t(j)(r.value,e.$t("common.copySuccess")))},{default:c(()=>[p(m(e.$t("common.copy")),1)]),_:1})]),_:1}),s(t(V),{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=l=>r.value=l),lang:N(i.value),placeholder:t(R)("curlToCode.output.placeholder"),class:"editor"},null,8,["modelValue","lang","placeholder"])])]),_:1}))}});const W=I($,[["__scopeId","data-v-2159cae1"]]);export{W as default};
