import{bT as b}from"./index.954a2cbc.js";var g={exports:{}};/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */(function(i,E){(function(x){var d=E,C=i&&i.exports==d&&i,s=typeof b=="object"&&b;(s.global===s||s.window===s)&&(x=s);var l=function(r){this.message=r};l.prototype=new Error,l.prototype.name="InvalidCharacterError";var F=function(r){throw new l(r)},o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=/[\t\n\f\r ]/g,S=function(r){r=String(r).replace(w,"");var t=r.length;t%4==0&&(r=r.replace(/==?$/,""),t=r.length),(t%4==1||/[^+a-zA-Z0-9/]/.test(r))&&F("Invalid character: the string to be decoded is not correctly encoded.");for(var c=0,a,n,h="",f=-1;++f<t;)n=o.indexOf(r.charAt(f)),a=c%4?a*64+n:n,c++%4&&(h+=String.fromCharCode(255&a>>(-2*c&6)));return h},m=function(r){r=String(r),/[^\0-\xFF]/.test(r)&&F("The string to be encoded contains characters outside of the Latin1 range.");for(var t=r.length%3,c="",a=-1,n,h,f,e,p=r.length-t;++a<p;)n=r.charCodeAt(a)<<16,h=r.charCodeAt(++a)<<8,f=r.charCodeAt(++a),e=n+h+f,c+=o.charAt(e>>18&63)+o.charAt(e>>12&63)+o.charAt(e>>6&63)+o.charAt(e&63);return t==2?(n=r.charCodeAt(a)<<8,h=r.charCodeAt(++a),e=n+h,c+=o.charAt(e>>10)+o.charAt(e>>4&63)+o.charAt(e<<2&63)+"="):t==1&&(e=r.charCodeAt(a),c+=o.charAt(e>>2)+o.charAt(e<<4&63)+"=="),c},v={encode:m,decode:S,version:"1.0.0"};if(d&&!d.nodeType)if(C)C.exports=v;else for(var A in v)v.hasOwnProperty(A)&&(d[A]=v[A]);else x.base64=v})(b)})(g,g.exports);const y=g.exports;export{y as b};
