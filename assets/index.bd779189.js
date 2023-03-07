import{bT as U,d as ge,r as Q,J as Oe,a as ye,b as ee,g as z,o as we,l as _,x as te,c as ie,c1 as Ce,cU as Me,_ as Ee}from"./index.954a2cbc.js";import{K as Pe}from"./KVResult.b6a01b09.js";import"./CodeResult.e83fa9f7.js";var K={exports:{}};/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */(function(P,N){(function(){var k={function:!0,object:!0},v=k[typeof window]&&window||this,w=N,B=P&&!P.nodeType&&P,c=w&&B&&typeof U=="object"&&U;c&&(c.global===c||c.window===c||c.self===c)&&(v=c);var C=Math.pow(2,53)-1,y=/\bOpera/,H=Object.prototype,re=H.hasOwnProperty,D=H.toString;function q(t){return t=String(t),t.charAt(0).toUpperCase()+t.slice(1)}function ne(t,o,b){var u={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return o&&b&&/^Win/i.test(t)&&!/^Windows Phone /i.test(t)&&(u=u[/[\d.]+$/.exec(t)])&&(t="Windows "+u),t=String(t),o&&b&&(t=t.replace(RegExp(o,"i"),b)),t=A(t.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),t}function ae(t,o){var b=-1,u=t?t.length:0;if(typeof u=="number"&&u>-1&&u<=C)for(;++b<u;)o(t[b],b,t);else R(t,o)}function A(t){return t=V(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:q(t)}function R(t,o){for(var b in t)re.call(t,b)&&o(t[b],b,t)}function M(t){return t==null?q(t):D.call(t).slice(8,-1)}function oe(t,o){var b=t!=null?typeof t[o]:"number";return!/^(?:boolean|number|string|undefined)$/.test(b)&&(b=="object"?!!t[o]:!0)}function h(t){return String(t).replace(/([ -])(?!$)/g,"$1?")}function E(t,o){var b=null;return ae(t,function(u,T){b=o(b,u,T,t)}),b}function V(t){return String(t).replace(/^ +| +$/g,"")}function I(t){var o=v,b=t&&typeof t=="object"&&M(t)!="String";b&&(o=t,t=null);var u=o.navigator||{},T=u.userAgent||"";t||(t=T);var le=b?!!u.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(D.toString()),X="Object",se=b?X:"ScriptBridgingProxyObject",pe=b?X:"Environment",be=b&&o.java?"JavaPackage":M(o.java),fe=b?X:"RuntimeObject",W=/\bJava/.test(be)&&o.java,ce=W&&M(o.environment)==pe,de=W?"a":"\u03B1",ue=W?"b":"\u03B2",L=o.document||{},g=o.operamini||o.opera,F=y.test(F=b&&g?g["[[Class]]"]:M(g))?F:g=null,e,G=t,l=[],$=null,O=t==T,n=O&&g&&typeof g.version=="function"&&g.version(),j,s=Se([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),i=me(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),a=Y([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),d=xe({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),r=he(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function Se(S){return E(S,function(f,p){return f||RegExp("\\b"+(p.pattern||h(p))+"\\b","i").exec(t)&&(p.label||p)})}function xe(S){return E(S,function(f,p,m){return f||(p[a]||p[/^[a-z]+(?: +[a-z]+\b)*/i.exec(a)]||RegExp("\\b"+h(m)+"(?:\\b|\\w*\\d)","i").exec(t))&&m})}function me(S){return E(S,function(f,p){return f||RegExp("\\b"+(p.pattern||h(p))+"\\b","i").exec(t)&&(p.label||p)})}function he(S){return E(S,function(f,p){var m=p.pattern||h(p);return!f&&(f=RegExp("\\b"+m+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(f=ne(f,m,p.label||p)),f})}function Y(S){return E(S,function(f,p){var m=p.pattern||h(p);return!f&&(f=RegExp("\\b"+m+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+m+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+m+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((f=String(p.label&&!RegExp(m,"i").test(p.label)?p.label:f).split("/"))[1]&&!/[\d.]+/.test(f[0])&&(f[0]+=" "+f[1]),p=p.label||p,f=A(f[0].replace(RegExp(m,"i"),p).replace(RegExp("; *(?:"+p+"[_-])?","i")," ").replace(RegExp("("+p+")[-_.]?(\\w)","i"),"$1 $2"))),f})}function Z(S){return E(S,function(f,p){return f||(RegExp(p+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})}function ve(){return this.description||""}if(s&&(s=[s]),/\bAndroid\b/.test(r)&&!a&&(e=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(a=V(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),d&&!a?a=Y([d]):d&&a&&(a=a.replace(RegExp("^("+h(d)+")[-_.\\s]","i"),d+" ").replace(RegExp("^("+h(d)+")[-_.]?(\\w)","i"),d+" $2")),(e=/\bGoogle TV\b/.exec(a))&&(a=e[0]),/\bSimulator\b/i.test(t)&&(a=(a?a+" ":"")+"Simulator"),i=="Opera Mini"&&/\bOPiOS\b/.test(t)&&l.push("running in Turbo/Uncompressed mode"),i=="IE"&&/\blike iPhone OS\b/.test(t)?(e=I(t.replace(/like iPhone OS/,"")),d=e.manufacturer,a=e.product):/^iP/.test(a)?(i||(i="Safari"),r="iOS"+((e=/ OS ([\d_]+)/i.exec(t))?" "+e[1].replace(/_/g,"."):"")):i=="Konqueror"&&/^Linux\b/i.test(r)?r="Kubuntu":d&&d!="Google"&&(/Chrome/.test(i)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(a))||/\bAndroid\b/.test(r)&&/^Chrome/.test(i)&&/\bVersion\//i.test(t)?(i="Android Browser",r=/\bAndroid\b/.test(r)?r:"Android"):i=="Silk"?(/\bMobi/i.test(t)||(r="Android",l.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&l.unshift("accelerated")):i=="UC Browser"&&/\bUCWEB\b/.test(t)?l.push("speed mode"):i=="PaleMoon"&&(e=/\bFirefox\/([\d.]+)\b/.exec(t))?l.push("identifying as Firefox "+e[1]):i=="Firefox"&&(e=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(r||(r="Firefox OS"),a||(a=e[1])):!i||(e=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(i))?(i&&!a&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(e+"/")+8))&&(i=null),(e=a||d||r)&&(a||d||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r))&&(i=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r)?r:e)+" Browser")):i=="Electron"&&(e=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&l.push("Chromium "+e),n||(n=Z(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",h(i),"(?:Firefox|Minefield|NetFront)"])),(e=s=="iCab"&&parseFloat(n)>3&&"WebKit"||/\bOpera\b/.test(i)&&(/\bOPR\b/.test(t)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(s)&&"WebKit"||!s&&/\bMSIE\b/i.test(t)&&(r=="Mac OS"?"Tasman":"Trident")||s=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(i)&&"NetFront")&&(s=[e]),i=="IE"&&(e=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(i+=" Mobile",r="Windows Phone "+(/\+$/.test(e)?e:e+".x"),l.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(i="IE Mobile",r="Windows Phone 8.x",l.unshift("desktop mode"),n||(n=(/\brv:([\d.]+)/.exec(t)||0)[1])):i!="IE"&&s=="Trident"&&(e=/\brv:([\d.]+)/.exec(t))&&(i&&l.push("identifying as "+i+(n?" "+n:"")),i="IE",n=e[1]),O){if(oe(o,"global"))if(W&&(e=W.lang.System,G=e.getProperty("os.arch"),r=r||e.getProperty("os.name")+" "+e.getProperty("os.version")),ce){try{n=o.require("ringo/engine").version.join("."),i="RingoJS"}catch{(e=o.system)&&e.global.system==o.system&&(i="Narwhal",r||(r=e[0].os||null))}i||(i="Rhino")}else typeof o.process=="object"&&!o.process.browser&&(e=o.process)&&(typeof e.versions=="object"&&(typeof e.versions.electron=="string"?(l.push("Node "+e.versions.node),i="Electron",n=e.versions.electron):typeof e.versions.nw=="string"&&(l.push("Chromium "+n,"Node "+e.versions.node),i="NW.js",n=e.versions.nw)),i||(i="Node.js",G=e.arch,r=e.platform,n=/[\d.]+/.exec(e.version),n=n?n[0]:null));else M(e=o.runtime)==se?(i="Adobe AIR",r=e.flash.system.Capabilities.os):M(e=o.phantom)==fe?(i="PhantomJS",n=(e=e.version||null)&&e.major+"."+e.minor+"."+e.patch):typeof L.documentMode=="number"&&(e=/\bTrident\/(\d+)/i.exec(t))?(n=[n,L.documentMode],(e=+e[1]+4)!=n[1]&&(l.push("IE "+n[1]+" mode"),s&&(s[1]=""),n[1]=e),n=i=="IE"?String(n[1].toFixed(1)):n[0]):typeof L.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(i)&&(l.push("masking as "+i+" "+n),i="IE",n="11.0",s=["Trident"],r="Windows");r=r&&A(r)}if(n&&(e=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(n)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(O&&u.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&($=/b/i.test(e)?"beta":"alpha",n=n.replace(RegExp(e+"\\+?$"),"")+($=="beta"?ue:de)+(/\d+\+?/.exec(e)||"")),i=="Fennec"||i=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(r))i="Firefox Mobile";else if(i=="Maxthon"&&n)n=n.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(a))a=="Xbox 360"&&(r=null),a=="Xbox 360"&&/\bIEMobile\b/.test(t)&&l.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(i)||i&&!a&&!/Browser|Mobi/.test(i))&&(r=="Windows CE"||/Mobi/i.test(t)))i+=" Mobile";else if(i=="IE"&&O)try{o.external===null&&l.unshift("platform preview")}catch{l.unshift("embedded")}else(/\bBlackBerry\b/.test(a)||/\bBB10\b/.test(t))&&(e=(RegExp(a.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||n)?(e=[e,/BB10/.test(t)],r=(e[1]?(a=null,d="BlackBerry"):"Device Software")+" "+e[0],n=null):this!=R&&a!="Wii"&&(O&&g||/Opera/.test(i)&&/\b(?:MSIE|Firefox)\b/i.test(t)||i=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(r)||i=="IE"&&(r&&!/^Win/.test(r)&&n>5.5||/\bWindows XP\b/.test(r)&&n>8||n==8&&!/\bTrident\b/.test(t)))&&!y.test(e=I.call(R,t.replace(y,"")+";"))&&e.name&&(e="ing as "+e.name+((e=e.version)?" "+e:""),y.test(i)?(/\bIE\b/.test(e)&&r=="Mac OS"&&(r=null),e="identify"+e):(e="mask"+e,F?i=A(F.replace(/([a-z])([A-Z])/g,"$1 $2")):i="Opera",/\bIE\b/.test(e)&&(r=null),O||(n=null)),s=["Presto"],l.push(e));(e=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(e=[parseFloat(e.replace(/\.(\d)$/,".0$1")),e],i=="Safari"&&e[1].slice(-1)=="+"?(i="WebKit Nightly",$="alpha",n=e[1].slice(0,-1)):(n==e[1]||n==(e[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1]))&&(n=null),e[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],e[0]==537.36&&e[2]==537.36&&parseFloat(e[1])>=28&&s=="WebKit"&&(s=["Blink"]),!O||!le&&!e[1]?(s&&(s[1]="like Safari"),e=(e=e[0],e<400?1:e<500?2:e<526?3:e<533?4:e<534?"4+":e<535?5:e<537?6:e<538?7:e<601?8:e<602?9:e<604?10:e<606?11:e<608?12:"12")):(s&&(s[1]="like Chrome"),e=e[1]||(e=e[0],e<530?1:e<532?2:e<532.05?3:e<533?4:e<534.03?5:e<534.07?6:e<534.1?7:e<534.13?8:e<534.16?9:e<534.24?10:e<534.3?11:e<535.01?12:e<535.02?"13+":e<535.07?15:e<535.11?16:e<535.19?17:e<536.05?18:e<536.1?19:e<537.01?20:e<537.11?"21+":e<537.13?23:e<537.18?24:e<537.24?25:e<537.36?26:s!="Blink"?"27":"28")),s&&(s[1]+=" "+(e+=typeof e=="number"?".x":/[.+]/.test(e)?"":"+")),i=="Safari"&&(!n||parseInt(n)>45)?n=e:i=="Chrome"&&/\bHeadlessChrome/i.test(t)&&l.unshift("headless")),i=="Opera"&&(e=/\bzbov|zvav$/.exec(r))?(i+=" ",l.unshift("desktop mode"),e=="zvav"?(i+="Mini",n=null):i+="Mobile",r=r.replace(RegExp(" *"+e+"$"),"")):i=="Safari"&&/\bChrome\b/.exec(s&&s[1])?(l.unshift("desktop mode"),i="Chrome Mobile",n=null,/\bOS X\b/.test(r)?(d="Apple",r="iOS 4.3+"):r=null):/\bSRWare Iron\b/.test(i)&&!n&&(n=Z("Chrome")),n&&n.indexOf(e=/[\d.]+$/.exec(r))==0&&t.indexOf("/"+e+"-")>-1&&(r=V(r.replace(e,""))),r&&r.indexOf(i)!=-1&&!RegExp(i+" OS").test(r)&&(r=r.replace(RegExp(" *"+h(i)+" *"),"")),s&&!/\b(?:Avant|Nook)\b/.test(i)&&(/Browser|Lunascape|Maxthon/.test(i)||i!="Safari"&&/^iOS/.test(r)&&/\bSafari\b/.test(s[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(i)&&s[1])&&(e=s[s.length-1])&&l.push(e),l.length&&(l=["("+l.join("; ")+")"]),d&&a&&a.indexOf(d)<0&&l.push("on "+d),a&&l.push((/^on /.test(l[l.length-1])?"":"on ")+a),r&&(e=/ ([\d.+]+)$/.exec(r),j=e&&r.charAt(r.length-e[0].length-1)=="/",r={architecture:32,family:e&&!j?r.replace(e[0],""):r,version:e?e[1]:null,toString:function(){var S=this.version;return this.family+(S&&!j?" "+S:"")+(this.architecture==64?" 64-bit":"")}}),(e=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(G))&&!/\bi686\b/i.test(G)?(r&&(r.architecture=64,r.family=r.family.replace(RegExp(" *"+e),"")),i&&(/\bWOW64\b/i.test(t)||O&&/\w(?:86|32)$/.test(u.cpuClass||u.platform)&&!/\bWin64; x64\b/i.test(t))&&l.unshift("32-bit")):r&&/^OS X/.test(r.family)&&i=="Chrome"&&parseFloat(n)>=39&&(r.architecture=64),t||(t=null);var x={};return x.description=t,x.layout=s&&s[0],x.manufacturer=d,x.name=i,x.prerelease=$,x.product=a,x.ua=t,x.version=i&&n,x.os=r||{architecture:null,family:null,version:null,toString:function(){return"null"}},x.parse=I,x.toString=ve,x.version&&l.unshift(n),x.name&&l.unshift(i),r&&i&&!(r==String(r).split(" ")[0]&&(r==i.split(" ")[0]||a))&&l.push(a?"("+r+")":"on "+r),l.length&&(x.description=l.join(" ")),x}var J=I();w&&B?R(J,function(t,o){w[o]=t}):v.platform=J}).call(U)})(K,K.exports);const Be={class:"top"},We=ge({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(P,{emit:N}){const k=P,v=Q(K.exports.description),w=Q({});function B(){const c=K.exports.parse(v.value);delete c.parse,delete c.toString,w.value=c}return Oe(()=>{var c;(c=k.clipboardValue)!=null&&c.isUserAgent()&&(v.value=k.clipboardValue.getOriginData(),N("acceptClipboardCb")),B()}),(c,C)=>(we(),ye(z(Me),null,{one:ee(()=>[_("div",Be,[_("p",null,te(c.$t("hexLang.input_tip")),1),ie(z(Ce),{value:v.value,"onUpdate:value":C[0]||(C[0]=y=>v.value=y),autofocus:"",class:"input",spellcheck:"false",onChange:C[1]||(C[1]=y=>B())},null,8,["value"])])]),two:ee(()=>[_("div",null,[_("p",null,te(c.$t("hexLang.result_tip")),1),ie(z(Pe),{result:w.value,width:600},null,8,["result"])])]),_:1}))}});const Ie=Ee(We,[["__scopeId","data-v-94218248"]]);export{Ie as default};
