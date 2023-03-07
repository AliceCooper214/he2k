import{c6 as ie,d as oe,y as se,J as de,r as I,a as le,b as A,g as h,o as fe,l as b,c as R,U as x,x as G,c4 as ce,bM as me,bY as ve,d1 as _e,bN as ge,j as pe,_ as he}from"./index.954a2cbc.js";import{M as Pe}from"./MultiLineResult.0bab4ef4.js";var C={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.FORMAT_PLAIN=P.FORMAT_HTML=P.FORMATS=void 0;var F="html";P.FORMAT_HTML=F;var B="plain";P.FORMAT_PLAIN=B;var Ne=[F,B];P.FORMATS=Ne;var g={};Object.defineProperty(g,"__esModule",{value:!0});g.UNIT_WORDS=g.UNIT_WORD=g.UNIT_SENTENCES=g.UNIT_SENTENCE=g.UNIT_PARAGRAPHS=g.UNIT_PARAGRAPH=g.UNITS=void 0;var $="words";g.UNIT_WORDS=$;var j="word";g.UNIT_WORD=j;var H="sentences";g.UNIT_SENTENCES=H;var q="sentence";g.UNIT_SENTENCE=q;var z="paragraphs";g.UNIT_PARAGRAPHS=z;var V="paragraph";g.UNIT_PARAGRAPH=V;var Re=[$,j,H,q,z,V];g.UNITS=Re;var S={};Object.defineProperty(S,"__esModule",{value:!0});S.WORDS=void 0;var Se=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];S.WORDS=Se;var X={},y={};Object.defineProperty(y,"__esModule",{value:!0});y.LINE_ENDINGS=void 0;var Oe={POSIX:`
`,WIN32:`\r
`};y.LINE_ENDINGS=Oe;var J={},M={},Y={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=function(d){var f=d.trim();return f.charAt(0).toUpperCase()+f.slice(1)},t=o;r.default=t})(Y);var E={exports:{}};(function(r,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=function(){return!!r.exports},v=t;o.default=v})(E,E.exports);var K={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=function(){var d=!1;try{d=navigator.product==="ReactNative"}catch{d=!1}return d},t=o;r.default=t})(K);var Q={},w={};Object.defineProperty(w,"__esModule",{value:!0});w.SUPPORTED_PLATFORMS=void 0;var Ie={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};w.SUPPORTED_PLATFORMS=Ie;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=w,t=function(){var f=!1;try{f=ie.platform===o.SUPPORTED_PLATFORMS.WIN32}catch{f=!1}return f},v=t;r.default=v})(Q);var L={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(d)).map(function(f,_){return _})},t=o;r.default=t})(L);var Z={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=t(L);function t(f){return f&&f.__esModule?f:{default:f}}var v=function(_,l){var a=(0,o.default)(_);return a.map(function(){return l()})},d=v;r.default=d})(Z);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"capitalize",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"isNode",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(r,"isReactNative",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(r,"isWindows",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"makeArrayOfLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(r,"makeArrayOfStrings",{enumerable:!0,get:function(){return _.default}});var o=l(Y),t=l(E.exports),v=l(K),d=l(Q),f=l(L),_=l(Z);function l(a){return a&&a.__esModule?a:{default:a}}})(M);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=S,t=M;function v(c,i){if(!(c instanceof i))throw new TypeError("Cannot call a class as a function")}function d(c,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function f(c,i,s){return i&&d(c.prototype,i),s&&d(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c}function _(c,i,s){return i in c?Object.defineProperty(c,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[i]=s,c}var l=function(){function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.sentencesPerParagraph,e=s===void 0?{max:7,min:3}:s,u=i.wordsPerSentence,n=u===void 0?{max:15,min:5}:u,m=i.random;i.seed;var p=i.words,N=p===void 0?o.WORDS:p;if(v(this,c),_(this,"sentencesPerParagraph",void 0),_(this,"wordsPerSentence",void 0),_(this,"random",void 0),_(this,"words",void 0),e.min>e.max)throw new Error("Minimum number of sentences per paragraph (".concat(e.min,") cannot exceed maximum (").concat(e.max,")."));if(n.min>n.max)throw new Error("Minimum number of words per sentence (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));this.sentencesPerParagraph=e,this.words=N,this.wordsPerSentence=n,this.random=m||Math.random}return f(c,[{key:"generateRandomInteger",value:function(s,e){return Math.floor(this.random()*(e-s+1)+s)}},{key:"generateRandomWords",value:function(s){var e=this,u=this.wordsPerSentence,n=u.min,m=u.max,p=s||this.generateRandomInteger(n,m);return(0,t.makeArrayOfLength)(p).reduce(function(N,O){return"".concat(e.pluckRandomWord()," ").concat(N)},"").trim()}},{key:"generateRandomSentence",value:function(s){return"".concat((0,t.capitalize)(this.generateRandomWords(s)),".")}},{key:"generateRandomParagraph",value:function(s){var e=this,u=this.sentencesPerParagraph,n=u.min,m=u.max,p=s||this.generateRandomInteger(n,m);return(0,t.makeArrayOfLength)(p).reduce(function(N,O){return"".concat(e.generateRandomSentence()," ").concat(N)},"").trim()}},{key:"pluckRandomWord",value:function(){var s=0,e=this.words.length-1,u=this.generateRandomInteger(s,e);return this.words[u]}}]),c}(),a=l;r.default=a})(J);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=P,t=y,v=f(J),d=M;function f(e){return e&&e.__esModule?e:{default:e}}function _(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}function l(e,u){for(var n=0;n<u.length;n++){var m=u[n];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}function a(e,u,n){return u&&l(e.prototype,u),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,u,n){return u in e?Object.defineProperty(e,u,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[u]=n,e}var i=function(){function e(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o.FORMAT_PLAIN,m=arguments.length>2?arguments[2]:void 0;if(_(this,e),this.format=n,this.suffix=m,c(this,"generator",void 0),o.FORMATS.indexOf(n.toLowerCase())===-1)throw new Error("".concat(n," is an invalid format. Please use ").concat(o.FORMATS.join(" or "),"."));this.generator=new v.default(u)}return a(e,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,d.isReactNative)()&&(0,d.isNode)()&&(0,d.isWindows)()?t.LINE_ENDINGS.WIN32:t.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(n){return this.format===o.FORMAT_HTML?"<p>".concat(n,"</p>"):n}},{key:"formatStrings",value:function(n){var m=this;return n.map(function(p){return m.formatString(p)})}},{key:"generateWords",value:function(n){return this.formatString(this.generator.generateRandomWords(n))}},{key:"generateSentences",value:function(n){return this.formatString(this.generator.generateRandomParagraph(n))}},{key:"generateParagraphs",value:function(n){var m=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,d.makeArrayOfStrings)(n,m)).join(this.getLineEnding())}}]),e}(),s=i;r.default=s})(X);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoremIpsum",{enumerable:!0,get:function(){return d.default}}),r.loremIpsum=void 0;var o=P,t=g,v=S,d=f(X);function f(l){return l&&l.__esModule?l:{default:l}}var _=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.count,i=c===void 0?1:c,s=a.format,e=s===void 0?o.FORMAT_PLAIN:s,u=a.paragraphLowerBound,n=u===void 0?3:u,m=a.paragraphUpperBound,p=m===void 0?7:m,N=a.random,O=a.sentenceLowerBound,ee=O===void 0?5:O,U=a.sentenceUpperBound,re=U===void 0?15:U,W=a.units,ae=W===void 0?t.UNIT_SENTENCES:W,k=a.words,ne=k===void 0?v.WORDS:k,D=a.suffix,te=D===void 0?"":D,ue={random:N,sentencesPerParagraph:{max:p,min:n},words:ne,wordsPerSentence:{max:re,min:ee}},T=new d.default(ue,e,te);switch(ae){case t.UNIT_PARAGRAPHS:case t.UNIT_PARAGRAPH:return T.generateParagraphs(i);case t.UNIT_SENTENCES:case t.UNIT_SENTENCE:return T.generateSentences(i);case t.UNIT_WORDS:case t.UNIT_WORD:return T.generateWords(i);default:return""}};r.loremIpsum=_})(C);const ye={class:"lorem-ipsum-generator"},we={class:"lorem-ipsum-generator-params"},Te={class:"lorem-ipsum-generator-output"},Ae=oe({__name:"index",setup(r){const{t:o}=se();de(()=>{t.value=5,v.value="paragraph",_()});const t=I(5),v=I("paragraph"),d=I(""),f=I([{value:"word",label:o("loremIpsumGenerator.options.word")},{value:"sentence",label:o("loremIpsumGenerator.options.sentence")},{value:"paragraph",label:o("loremIpsumGenerator.options.paragraph")}]);function _(){const l=new C.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}});let a="";switch(v.value){case"word":a=l.generateWords(t.value);break;case"sentence":a=l.generateSentences(t.value);break;case"paragraph":a=l.generateParagraphs(t.value);break;default:return}d.value=a}return(l,a)=>{const c=pe("a-space");return fe(),le(h(ge),{"max-width":1280},{one:A(()=>[b("div",ye,[b("div",we,[R(c,null,{default:A(()=>[x(G(h(o)("loremIpsumGenerator.generate"))+" ",1),R(h(ce),{value:t.value,"onUpdate:value":a[0]||(a[0]=i=>t.value=i),min:1,onChange:_},null,8,["value"]),R(h(me),{value:v.value,"onUpdate:value":a[1]||(a[1]=i=>v.value=i),class:"select",options:f.value,onChange:_},null,8,["value","options"]),R(h(ve),{type:"primary",onClick:_},{default:A(()=>[x(G(h(o)("loremIpsumGenerator.refresh")),1)]),_:1})]),_:1})]),R(h(_e)),b("div",Te,[R(h(Pe),{"result-desc":h(o)("loremIpsumGenerator.title"),result:d.value},null,8,["result-desc","result"])])])]),_:1})}}});const Me=he(Ae,[["__scopeId","data-v-3d10afc1"]]);export{Me as default};
