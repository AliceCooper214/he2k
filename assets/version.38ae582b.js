import{v as n}from"./validate.5eb70dfd.js";function t(e){if(!n(e))throw TypeError("Invalid UUID");let r;const f=new Uint8Array(16);return f[0]=(r=parseInt(e.slice(0,8),16))>>>24,f[1]=r>>>16&255,f[2]=r>>>8&255,f[3]=r&255,f[4]=(r=parseInt(e.slice(9,13),16))>>>8,f[5]=r&255,f[6]=(r=parseInt(e.slice(14,18),16))>>>8,f[7]=r&255,f[8]=(r=parseInt(e.slice(19,23),16))>>>8,f[9]=r&255,f[10]=(r=parseInt(e.slice(24,36),16))/1099511627776&255,f[11]=r/4294967296&255,f[12]=r>>>24&255,f[13]=r>>>16&255,f[14]=r>>>8&255,f[15]=r&255,f}function a(e){if(!n(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}export{t as p,a as v};
