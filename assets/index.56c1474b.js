import{bT as d}from"./index.954a2cbc.js";var A=function(t,n){if(n=n.split(":")[0],t=+t,!t)return!1;switch(n){case"http":case"ws":return t!==80;case"https":case"wss":return t!==443;case"ftp":return t!==21;case"gopher":return t!==70;case"file":return!1}return t!==0},y={},L=Object.prototype.hasOwnProperty,O;function q(o){try{return decodeURIComponent(o.replace(/\+/g," "))}catch{return null}}function I(o){try{return encodeURIComponent(o)}catch{return null}}function j(o){for(var t=/([^=?#&]+)=?([^&]*)/g,n={},e;e=t.exec(o);){var s=q(e[1]),i=q(e[2]);s===null||i===null||s in n||(n[s]=i)}return n}function z(o,t){t=t||"";var n=[],e,s;typeof t!="string"&&(t="?");for(s in o)if(L.call(o,s)){if(e=o[s],!e&&(e===null||e===O||isNaN(e))&&(e=""),s=I(s),e=I(e),s===null||e===null)continue;n.push(s+"="+e)}return n.length?t+n.join("&"):""}y.stringify=z;y.parse=j;var U=A,h=y,N=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,b=/[\n\r\t]/g,P=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,x=/:\d+$/,$=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,Z=/^[a-zA-Z]:/;function g(o){return(o||"").toString().replace(N,"")}var w=[["#","hash"],["?","query"],function(t,n){return c(n.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],R={hash:1,query:1};function S(o){var t;typeof window<"u"?t=window:typeof d<"u"?t=d:typeof self<"u"?t=self:t={};var n=t.location||{};o=o||n;var e={},s=typeof o,i;if(o.protocol==="blob:")e=new p(unescape(o.pathname),{});else if(s==="string"){e=new p(o,{});for(i in R)delete e[i]}else if(s==="object"){for(i in o)i in R||(e[i]=o[i]);e.slashes===void 0&&(e.slashes=P.test(o.href))}return e}function c(o){return o==="file:"||o==="ftp:"||o==="http:"||o==="https:"||o==="ws:"||o==="wss:"}function k(o,t){o=g(o),o=o.replace(b,""),t=t||{};var n=$.exec(o),e=n[1]?n[1].toLowerCase():"",s=!!n[2],i=!!n[3],a=0,f;return s?i?(f=n[2]+n[3]+n[4],a=n[2].length+n[3].length):(f=n[2]+n[4],a=n[2].length):i?(f=n[3]+n[4],a=n[3].length):f=n[4],e==="file:"?a>=2&&(f=f.slice(2)):c(e)?f=n[4]:e?s&&(f=f.slice(2)):a>=2&&c(t.protocol)&&(f=n[4]),{protocol:e,slashes:s||c(e),slashesCount:a,rest:f}}function T(o,t){if(o==="")return t;for(var n=(t||"/").split("/").slice(0,-1).concat(o.split("/")),e=n.length,s=n[e-1],i=!1,a=0;e--;)n[e]==="."?n.splice(e,1):n[e]===".."?(n.splice(e,1),a++):a&&(e===0&&(i=!0),n.splice(e,1),a--);return i&&n.unshift(""),(s==="."||s==="..")&&n.push(""),n.join("/")}function p(o,t,n){if(o=g(o),o=o.replace(b,""),!(this instanceof p))return new p(o,t,n);var e,s,i,a,f,l,u=w.slice(),C=typeof t,r=this,m=0;for(C!=="object"&&C!=="string"&&(n=t,t=null),n&&typeof n!="function"&&(n=h.parse),t=S(t),s=k(o||"",t),e=!s.protocol&&!s.slashes,r.slashes=s.slashes||e&&t.slashes,r.protocol=s.protocol||t.protocol||"",o=s.rest,(s.protocol==="file:"&&(s.slashesCount!==2||Z.test(o))||!s.slashes&&(s.protocol||s.slashesCount<2||!c(r.protocol)))&&(u[3]=[/(.*)/,"pathname"]);m<u.length;m++){if(a=u[m],typeof a=="function"){o=a(o,r);continue}i=a[0],l=a[1],i!==i?r[l]=o:typeof i=="string"?(f=i==="@"?o.lastIndexOf(i):o.indexOf(i),~f&&(typeof a[2]=="number"?(r[l]=o.slice(0,f),o=o.slice(f+a[2])):(r[l]=o.slice(f),o=o.slice(0,f)))):(f=i.exec(o))&&(r[l]=f[1],o=o.slice(0,f.index)),r[l]=r[l]||e&&a[3]&&t[l]||"",a[4]&&(r[l]=r[l].toLowerCase())}n&&(r.query=n(r.query)),e&&t.slashes&&r.pathname.charAt(0)!=="/"&&(r.pathname!==""||t.pathname!=="")&&(r.pathname=T(r.pathname,t.pathname)),r.pathname.charAt(0)!=="/"&&c(r.protocol)&&(r.pathname="/"+r.pathname),U(r.port,r.protocol)||(r.host=r.hostname,r.port=""),r.username=r.password="",r.auth&&(f=r.auth.indexOf(":"),~f?(r.username=r.auth.slice(0,f),r.username=encodeURIComponent(decodeURIComponent(r.username)),r.password=r.auth.slice(f+1),r.password=encodeURIComponent(decodeURIComponent(r.password))):r.username=encodeURIComponent(decodeURIComponent(r.auth)),r.auth=r.password?r.username+":"+r.password:r.username),r.origin=r.protocol!=="file:"&&c(r.protocol)&&r.host?r.protocol+"//"+r.host:"null",r.href=r.toString()}function v(o,t,n){var e=this;switch(o){case"query":typeof t=="string"&&t.length&&(t=(n||h.parse)(t)),e[o]=t;break;case"port":e[o]=t,U(t,e.protocol)?t&&(e.host=e.hostname+":"+t):(e.host=e.hostname,e[o]="");break;case"hostname":e[o]=t,e.port&&(t+=":"+e.port),e.host=t;break;case"host":e[o]=t,x.test(t)?(t=t.split(":"),e.port=t.pop(),e.hostname=t.join(":")):(e.hostname=t,e.port="");break;case"protocol":e.protocol=t.toLowerCase(),e.slashes=!n;break;case"pathname":case"hash":if(t){var s=o==="pathname"?"/":"#";e[o]=t.charAt(0)!==s?s+t:t}else e[o]=t;break;case"username":case"password":e[o]=encodeURIComponent(t);break;case"auth":var i=t.indexOf(":");~i?(e.username=t.slice(0,i),e.username=encodeURIComponent(decodeURIComponent(e.username)),e.password=t.slice(i+1),e.password=encodeURIComponent(decodeURIComponent(e.password))):e.username=encodeURIComponent(decodeURIComponent(t))}for(var a=0;a<w.length;a++){var f=w[a];f[4]&&(e[f[1]]=e[f[1]].toLowerCase())}return e.auth=e.password?e.username+":"+e.password:e.username,e.origin=e.protocol!=="file:"&&c(e.protocol)&&e.host?e.protocol+"//"+e.host:"null",e.href=e.toString(),e}function D(o){(!o||typeof o!="function")&&(o=h.stringify);var t,n=this,e=n.host,s=n.protocol;s&&s.charAt(s.length-1)!==":"&&(s+=":");var i=s+(n.protocol&&n.slashes||c(n.protocol)?"//":"");return n.username?(i+=n.username,n.password&&(i+=":"+n.password),i+="@"):n.password?(i+=":"+n.password,i+="@"):n.protocol!=="file:"&&c(n.protocol)&&!e&&n.pathname!=="/"&&(i+="@"),(e[e.length-1]===":"||x.test(n.hostname)&&!n.port)&&(e+=":"),i+=e+n.pathname,t=typeof n.query=="object"?o(n.query):n.query,t&&(i+=t.charAt(0)!=="?"?"?"+t:t),n.hash&&(i+=n.hash),i}p.prototype={set:v,toString:D};p.extractProtocol=k;p.location=S;p.trimLeft=g;p.qs=h;var F=p;const H=F;export{H as u};
