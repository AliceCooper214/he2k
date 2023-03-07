import{d as c,cm as u,a as o,g as f,o as p,cW as l}from"./index.954a2cbc.js";const m=c({__name:"index",setup(i){u();const r=`function copyHandler() {
  if (!output.value) {
    return
  }
  copy(fileType.TEXT, output.value)
  message.success('Copy Success')
}`;function a(e){return e.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g,function(n){switch(n){case"\0":return"\\0";case"\b":return"\\b";case"	":return"\\t";case"":return"\\z";case`
`:return"\\n";case"\r":return"\\r";case"\v":return"\\v";case"\f":return"\\f";case'"':case"'":case"\\":case"%":return"\\"+n}})}function s(e){return e.value?a(e.value):""}function t(e){e.value=r}return(e,n)=>(p(),o(f(l),{onChange:s,onMounted:t}))}});export{m as default};
