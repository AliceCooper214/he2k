import{c6 as V}from"./index.954a2cbc.js";const b="application/font-woff",R="image/jpeg",H={woff:b,woff2:b,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:R,jpeg:R,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function O(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function y(t){const e=O(t).toLowerCase();return H[e]||""}function W(t){return t.split(/,/)[1]}function w(t){return t.search(/^(data:)/)!==-1}function T(t,e){return`data:${e};base64,${t}`}async function L(t,e,r){const n=await fetch(t,e);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const s=await n.blob();return new Promise((i,c)=>{const a=new FileReader;a.onerror=c,a.onloadend=()=>{try{i(r({res:n,result:a.result}))}catch(o){c(o)}},a.readAsDataURL(s)})}const d={};function _(t,e,r){let n=t.replace(/\?.*/,"");return r&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),e?`[${e}]${n}`:n}async function p(t,e,r){const n=_(t,e,r.includeQueryParams);if(d[n]!=null)return d[n];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{const i=await L(t,r.fetchRequestInit,({res:c,result:a})=>(e||(e=c.headers.get("Content-Type")||""),W(a)));s=T(i,e)}catch(i){s=r.imagePlaceholder||"";let c=`Failed to fetch resource: ${t}`;i&&(c=typeof i=="string"?i:i.message),c&&console.warn(c)}return d[n]=s,s}function j(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),s=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(s),e&&(n.href=e),s.href=t,s.href}const B=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function f(t){const e=[];for(let r=0,n=t.length;r<n;r++)e.push(t[r]);return e}function g(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function z(t){const e=g(t,"border-left-width"),r=g(t,"border-right-width");return t.clientWidth+e+r}function q(t){const e=g(t,"border-top-width"),r=g(t,"border-bottom-width");return t.clientHeight+e+r}function I(t,e={}){const r=e.width||z(t),n=e.height||q(t);return{width:r,height:n}}function G(){let t,e;try{e=V}catch{}const r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const l=16384;function X(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}function S(t){return new Promise((e,r)=>{const n=new Image;n.onload=()=>e(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="sync",n.src=t})}async function J(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function K(t,e,r){const n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${r}`),s.setAttribute("viewBox",`0 0 ${e} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),s.appendChild(i),i.appendChild(t),J(s)}function Q(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function Y(t){return f(t).map(e=>{const r=t.getPropertyValue(e),n=t.getPropertyPriority(e);return`${e}: ${r}${n?" !important":""};`}).join(" ")}function Z(t,e,r){const n=`.${t}:${e}`,s=r.cssText?Q(r):Y(r);return document.createTextNode(`${n}{${s}}`)}function E(t,e,r){const n=window.getComputedStyle(t,r),s=n.getPropertyValue("content");if(s===""||s==="none")return;const i=B();try{e.className=`${e.className} ${i}`}catch{return}const c=document.createElement("style");c.appendChild(Z(i,r,n)),e.appendChild(c)}function N(t,e){E(t,e,":before"),E(t,e,":after")}async function tt(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):S(e)}async function et(t,e){const r=t.poster,n=y(r),s=await p(r,n,e);return S(s)}async function nt(t,e){return t instanceof HTMLCanvasElement?tt(t):t instanceof HTMLVideoElement&&t.poster?et(t,e):t.cloneNode(!1)}const rt=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function st(t,e,r){var n;const s=rt(t)&&t.assignedNodes?f(t.assignedNodes()):f(((n=t.shadowRoot)!==null&&n!==void 0?n:t).childNodes);return s.length===0||t instanceof HTMLVideoElement||await s.reduce((i,c)=>i.then(()=>F(c,r)).then(a=>{a&&e.appendChild(a)}),Promise.resolve()),e}function it(t,e){const r=e.style;if(!r)return;const n=window.getComputedStyle(t);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):f(n).forEach(s=>{let i=n.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),r.setProperty(s,i,n.getPropertyPriority(s))})}function ct(t,e){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}function at(t,e){if(t instanceof HTMLSelectElement){const r=e,n=Array.from(r.children).find(s=>t.value===s.getAttribute("value"));n&&n.setAttribute("selected","")}}function ot(t,e){return e instanceof Element&&(it(t,e),N(t,e),ct(t,e),at(t,e)),e}async function F(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(n=>nt(n,e)).then(n=>st(t,n,e)).then(n=>ot(t,n))}const A=/url\((['"]?)([^'"]+?)\1\)/g,lt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,ut=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ft(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function ht(t){const e=[];return t.replace(A,(r,n,s)=>(e.push(s),r)),e.filter(r=>!w(r))}async function gt(t,e,r,n,s){try{const i=r?j(e,r):e,c=y(e);let a;if(s){const o=await s(i);a=T(o,c)}else a=await p(i,c,n);return t.replace(ft(e),`$1${a}$3`)}catch{}return t}function mt(t,{preferredFontFormat:e}){return e?t.replace(ut,r=>{for(;;){const[n,,s]=lt.exec(r)||[];if(!s)return"";if(s===e)return`src: ${n};`}}):t}function v(t){return t.search(A)!==-1}async function D(t,e,r){if(!v(t))return t;const n=mt(t,r);return ht(n).reduce((i,c)=>i.then(a=>gt(a,c,e,r)),Promise.resolve(n))}async function dt(t,e){var r;const n=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue("background");if(n){const s=await D(n,null,e);t.style.setProperty("background",s,t.style.getPropertyPriority("background"))}}async function wt(t,e){if(!(t instanceof HTMLImageElement&&!w(t.src))&&!(t instanceof SVGImageElement&&!w(t.href.baseVal)))return;const r=t instanceof HTMLImageElement?t.src:t.href.baseVal,n=await p(r,y(r),e);await new Promise((s,i)=>{t.onload=s,t.onerror=i,t instanceof HTMLImageElement?(t.srcset="",t.src=n):t.href.baseVal=n})}async function yt(t,e){const n=f(t.childNodes).map(s=>k(s,e));await Promise.all(n).then(()=>t)}async function k(t,e){t instanceof Element&&(await dt(t,e),await wt(t,e),await yt(t,e))}function pt(t,e){const{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);const n=e.style;return n!=null&&Object.keys(n).forEach(s=>{r[s]=n[s]}),t}const x={};async function C(t){let e=x[t];if(e!=null)return e;const n=await(await fetch(t)).text();return e={url:t,cssText:n},x[t]=e,e}async function $(t,e){let r=t.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map(async c=>{let a=c.replace(n,"$1");return a.startsWith("https://")||(a=new URL(a,t.url).href),L(a,e.fetchRequestInit,({result:o})=>(r=r.replace(c,`url(${o})`),[c,o]))});return Promise.all(i).then(()=>r)}function P(t){if(t==null)return[];const e=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=t.replace(r,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const o=s.exec(n);if(o===null)break;e.push(o[0])}n=n.replace(s,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,c="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",a=new RegExp(c,"gi");for(;;){let o=i.exec(n);if(o===null){if(o=a.exec(n),o===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;e.push(o[0])}return e}async function St(t,e){const r=[],n=[];return t.forEach(s=>{if("cssRules"in s)try{f(s.cssRules||[]).forEach((i,c)=>{if(i.type===CSSRule.IMPORT_RULE){let a=c+1;const o=i.href,h=C(o).then(u=>$(u,e)).then(u=>P(u).forEach(m=>{try{s.insertRule(m,m.startsWith("@import")?a+=1:s.cssRules.length)}catch(M){console.error("Error inserting rule from remote css",{rule:m,error:M})}})).catch(u=>{console.error("Error loading remote css",u.toString())});n.push(h)}})}catch(i){const c=t.find(a=>a.href==null)||document.styleSheets[0];s.href!=null&&n.push(C(s.href).then(a=>$(a,e)).then(a=>P(a).forEach(o=>{c.insertRule(o,s.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a.toString())})),console.error("Error inlining remote css file",i.toString())}}),Promise.all(n).then(()=>(t.forEach(s=>{if("cssRules"in s)try{f(s.cssRules||[]).forEach(i=>{r.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${s.href}`,i.toString())}}),r))}function bt(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>v(e.style.getPropertyValue("src")))}async function Rt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=f(t.ownerDocument.styleSheets),n=await St(r,e);return bt(n)}async function Et(t,e){const r=await Rt(t,e);return(await Promise.all(r.map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return D(s.cssText,i,e)}))).join(`
`)}async function xt(t,e){const r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Et(t,e);if(r){const n=document.createElement("style"),s=document.createTextNode(r);n.appendChild(s),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function Ct(t,e={}){const{width:r,height:n}=I(t,e),s=await F(t,e,!0);return await xt(s,e),await k(s,e),pt(s,e),await K(s,r,n)}async function U(t,e={}){const{width:r,height:n}=I(t,e),s=await Ct(t,e),i=await S(s),c=document.createElement("canvas"),a=c.getContext("2d"),o=e.pixelRatio||G(),h=e.canvasWidth||r,u=e.canvasHeight||n;return c.width=h*o,c.height=u*o,e.skipAutoScale||X(c),c.style.width=`${h}`,c.style.height=`${u}`,e.backgroundColor&&(a.fillStyle=e.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(i,0,0,c.width,c.height),c}async function Pt(t,e={}){return(await U(t,e)).toDataURL()}async function Tt(t,e={}){return(await U(t,e)).toDataURL("image/jpeg",e.quality||1)}export{Tt as a,Ct as b,Pt as t};
