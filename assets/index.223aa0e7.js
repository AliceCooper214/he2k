import{_}from"./VerticalTransform.vue_vue_type_script_setup_true_lang.a883f702.js";import{d as p,r as f,J as C,e as v,c as d,b,o as R,j as m,_ as w}from"./index.954a2cbc.js";import"./MultiLineResult.0bab4ef4.js";function y(e){if(e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray)return new DataView(e.buffer,e.byteOffset,e.byteLength);if(e instanceof ArrayBuffer)return new DataView(e);throw new TypeError("Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray")}const F="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",E="0123456789ABCDEFGHIJKLMNOPQRSTUV",g="0123456789ABCDEFGHJKMNPQRSTVWXYZ";function h(e,r,s){s=s||{};let t,o;switch(r){case"RFC3548":case"RFC4648":t=F,o=!0;break;case"RFC4648-HEX":t=E,o=!0;break;case"Crockford":t=g,o=!1;break;default:throw new Error("Unknown base32 variant: "+r)}const l=s.padding!==void 0?s.padding:o,i=y(e);let n=0,c=0,a="";for(let u=0;u<i.byteLength;u++)for(c=c<<8|i.getUint8(u),n+=8;n>=5;)a+=t[c>>>n-5&31],n-=5;if(n>0&&(a+=t[c<<5-n&31]),l)for(;a.length%8!==0;)a+="=";return a}const x={class:"Encode"},A=p({__name:"index",setup(e){const r=f("RFC3548"),s=[{label:"RFC3548",value:"RFC3548"},{label:"RFC4648",value:"RFC4648"},{label:"RFC4648-HEX",value:"RFC4648-HEX"},{label:"Crockford",value:"Crockford"}],t=new TextEncoder,o=f();C(()=>{l()});function l(){o.value=i=>{const n=t.encode(i);return h(n,r.value)}}return(i,n)=>{const c=m("a-radio-group");return R(),v("div",x,[d(_,{"transform-func":o.value},{default:b(()=>[d(c,{value:r.value,"onUpdate:value":n[0]||(n[0]=a=>r.value=a),class:"options","option-type":"button",options:s,onChange:l},null,8,["value"])]),_:1},8,["transform-func"])])}}});const D=w(A,[["__scopeId","data-v-1d2261d7"]]);export{D as default};
