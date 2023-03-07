import{c6 as A,bb as j,bT as C,bU as O}from"./index.954a2cbc.js";var _={},S={},I={exports:{}};(function(r){(function(a){r.exports?r.exports=t:a.secureRandom=t;function t(o,s){if(s=s||{type:"Array"},typeof A<"u"&&typeof A.pid=="number"&&A.versions&&A.versions.node)return n(o,s);var y=window.crypto||window.msCrypto;if(!y)throw new Error("Your browser does not support window.crypto.");return c(o,s)}function n(o,s){var y=O,m=y.randomBytes(o);switch(s.type){case"Array":return[].slice.call(m);case"Buffer":return m;case"Uint8Array":for(var p=new Uint8Array(o),e=0;e<o;++e)p[e]=m.readUInt8(e);return p;default:throw new Error(s.type+" is unsupported.")}}function c(o,s){var y=new Uint8Array(o),m=window.crypto||window.msCrypto;switch(m.getRandomValues(y),s.type){case"Array":return[].slice.call(y);case"Buffer":try{var p=new j(1)}catch{throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")}return new j(y);case"Uint8Array":return y;default:throw new Error(s.type+" is unsupported.")}}t.randomArray=function(o){return t(o,{type:"Array"})},t.randomUint8Array=function(o){return t(o,{type:"Uint8Array"})},t.randomBuffer=function(o){return t(o,{type:"Buffer"})}})(C)})(I);var d={};function $(){var r=E(arguments),a=r[0],t=r.slice(1);return t.filter(function(n){return!!n}).forEach(function(n){Object.keys(n).forEach(function(c){a[c]=n[c]})}),a}d.assign=$;function q(r,a){r=E(r),a=E(a);var t={};r.forEach(function(c){t[c]=!0});var n={};return a.forEach(function(c){n[c]=!0}),Object.keys(t).filter(function(c){return Object.prototype.hasOwnProperty.call(n,c)})}d.intersection=q;function P(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r}d.isInteger=P;function B(r){return typeof r=="string"||r instanceof String}d.isString=B;function U(r){return Array.apply(null,Array(r)).map(function(a,t){return t})}d.range=U;function k(r,a){return U(a).map(function(){return r})}d.repeat=k;function E(r){return Array.prototype.slice.call(r)}d.toArray=E;var N=I.exports,z=d;function g(r){if(typeof r!="function")throw new Error("Must pass a randomSource function");this._randomSource=r}g.prototype.choose=function(r){if(!r||!r.length)throw new Error("Must pass 1 or more choices");return r[this._getInt(r.length)]};g.prototype.getInt=function(r){if(r===void 0)throw new Error("Must pass an upper bound");if(!z.isInteger(r))throw new Error("Upper bound must be a number");if(r<1)throw new Error("Upper bound must be > 0");return this._getInt(r)};g.prototype._getInt=function(r){if(r===1)return 0;var a=Math.ceil(Math.log(r)/Math.log(256)),t=Math.pow(2,8*a)-Math.pow(2,8*a)%r,n;do n=T(this._randomSource(a));while(n>=t);return n%r};g.prototype.shuffle=function(r){r=Array.prototype.slice.call(r||[]);for(var a=[];r.length;)a.push(r.splice(this._getInt(r.length),1)[0]);return a};S.Random=g;S.default=new g(N);function T(r){r=r||[];for(var a=0,t=1,n=r.length-1;n>=0;n--)a+=r[n]*t,t*=256;return a}var M={};(function(r){r.lower="abcdefghijklmnopqrstuvwxyz",r.upper=r.lower.toUpperCase(),r.consonants="bcdfghjklmnpqrstvwxyz",r.vowels="aeiou",r.digits="1234567890",r.symbols="!@#$%^&*()",r.fullSymbols="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",r.copyableSymbols="_"})(M);(function(r){var a=S.default,t=M,n=d;Object.keys(t).forEach(function(e){r[e]=t[e]});var c=["Il1|","O0"];function o(e){var f={avoidAmbiguous:!0,characters:[t.lower,{characters:t.upper,exactly:1},{characters:t.symbols,exactly:1}],length:12,predicate:function(){return!0},random:a};e=n.assign({},f,e);var i=y(e);if(!n.isInteger(e.length))throw new Error("length must be an integer");if(e.length<1)throw new Error("length must be > 0");if(e.length<i.length)throw new Error("length must be >= # of character sets passed");if(i.some(function(l){return!l.characters}))throw new Error("No character set may be empty");if(i.length===0)throw new Error("Must pass one or more character sets");if(typeof e.predicate!="function")throw new Error("predicate must be a function");var w=i.map(function(l){return l.exactly||1}).reduce(function(l,u){return l+u},0);if(e.length<w)throw new Error("length is too short for character set rules");var h=i.every(function(l){return l.exactly});if(h){var v=i.reduce(function(l,u){return l+u.exactly},0);if(v!==e.length)throw new Error("Must pass a set without exactly rule to generate the specified length")}var b;do b=s(i,e.length,e.random);while(!e.predicate(b));return b}r.randomPassword=o;function s(e,f,i){var w=e.map(function(u){return u.exactly?n.repeat(u.characters,u.exactly):[u.characters]}).reduce(function(u,R){return u.concat(R)}),h=w.map(function(u){return i.choose(u)}),v=e.filter(function(u){return!u.exactly}).map(function(u){return u.characters}).join(""),b=n.range(f-h.length).map(function(){return i.choose(v)}),l=i.shuffle(h.concat(b));return l.join("")}function y(e){if(!e.characters)return[];var f=Array.isArray(e.characters)?e.characters:[e.characters];f=f.map(function(w){return n.isString(w)?{characters:w}:w});var i=e.avoidAmbiguous===!0?c:e.avoidAmbiguous||[];return m(f,i),f}function m(e,f){var i=e.map(function(h){return h.characters}).join(""),w=f.filter(function(h){return n.intersection(h,i).length>1}).join("");e.forEach(function(h){h.characters=n.toArray(h.characters).filter(function(v){return w.indexOf(v)<0}).join("")})}function p(e){var f={characters:[t.lower,t.upper,t.digits,t.symbols],length:20};return e=n.assign({},f,e),e.avoidAmbiguous=!1,o(e)}r.randomString=p})(_);export{_ as s};