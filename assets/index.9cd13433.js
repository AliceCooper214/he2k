var L=s,B=g,f=[],F=[],A=typeof Uint8Array<"u"?Uint8Array:Array,x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var c=0,u=x.length;c<u;++c)f[c]=x[c],F[x.charCodeAt(c)]=c;F["-".charCodeAt(0)]=62;F["_".charCodeAt(0)]=63;function p(r){var a=r.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");e===-1&&(e=a);var o=e===a?0:4-e%4;return[e,o]}function l(r,a,e){return(a+e)*3/4-e}function s(r){var a,e=p(r),o=e[0],n=e[1],t=new A(l(r,o,n)),v=0,d=n>0?o-4:o,h;for(h=0;h<d;h+=4)a=F[r.charCodeAt(h)]<<18|F[r.charCodeAt(h+1)]<<12|F[r.charCodeAt(h+2)]<<6|F[r.charCodeAt(h+3)],t[v++]=a>>16&255,t[v++]=a>>8&255,t[v++]=a&255;return n===2&&(a=F[r.charCodeAt(h)]<<2|F[r.charCodeAt(h+1)]>>4,t[v++]=a&255),n===1&&(a=F[r.charCodeAt(h)]<<10|F[r.charCodeAt(h+1)]<<4|F[r.charCodeAt(h+2)]>>2,t[v++]=a>>8&255,t[v++]=a&255),t}function y(r){return f[r>>18&63]+f[r>>12&63]+f[r>>6&63]+f[r&63]}function C(r,a,e){for(var o,n=[],t=a;t<e;t+=3)o=(r[t]<<16&16711680)+(r[t+1]<<8&65280)+(r[t+2]&255),n.push(y(o));return n.join("")}function g(r){for(var a,e=r.length,o=e%3,n=[],t=16383,v=0,d=e-o;v<d;v+=t)n.push(C(r,v,v+t>d?d:v+t));return o===1?(a=r[e-1],n.push(f[a>>2]+f[a<<4&63]+"==")):o===2&&(a=(r[e-2]<<8)+r[e-1],n.push(f[a>>10]+f[a>>4&63]+f[a<<2&63]+"=")),n.join("")}export{B as f,L as t};