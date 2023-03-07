var Y=Object.defineProperty;var G=(t,e,s)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var k=(t,e,s)=>(G(t,typeof e!="symbol"?e+"":e,s),s);import{_,o,e as u,l as d,ao as W,d as f,r,D as m,dl as g,J as F,a9 as z,a as h,b as i,g as x,Y as O,$ as j,H as p,c as v,dm as B,dn as X,cS as D,U as n,x as E,dp as H,j as V}from"./index.954a2cbc.js";import{L as K}from"./layout4.ce8da1ed.js";import{t as J,a as q,b as Q}from"./index.1578a6fc.js";const Z={},ee={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},se=d("path",{fill:"currentColor",d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm1.031 6.099h-2.624c-.988 0-1.789.776-1.789 1.733v6.748l2.595-2.471h1.818c1.713 0 3.101-1.345 3.101-3.005s-1.388-3.005-3.1-3.005z"},null,-1),ae=[se];function ie(t,e){return o(),u("svg",ee,ae)}const ce=_(Z,[["render",ie]]),te={},de={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ve=d("path",{fill:"currentColor",d:"m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.48.48 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.492.492 0 0 1 0-.183c.023-.115.104-.23.31-.23c.206 0 .32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.488.488 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253"},null,-1),oe=[ve];function ne(t,e){return o(),u("svg",de,oe)}const le=_(te,[["render",ne]]);class b{constructor(e,s,c=.3,a=.1,w=.7){k(this,"canvasRef");k(this,"ctx");k(this,"img");k(this,"imgSrc");k(this,"startPos",{x:0,y:0});k(this,"movePos");k(this,"imgX",0);k(this,"imgY",0);k(this,"isMove",!1);k(this,"imgScale");k(this,"MINIMUM_SCALE");k(this,"MAX_SCALE");k(this,"showTipStatus",!0);this.imgSrc=s,this.imgScale=c,this.MINIMUM_SCALE=a,this.MAX_SCALE=w,this.canvasRef=e;const{width:$,height:R}=this.canvasRef.getBoundingClientRect();this.canvasRef.width=$,this.canvasRef.height=R,this.ctx=e.getContext("2d"),this.initCanvas()}async initCanvas(){await this.loadImage(this.imgSrc),this.imgX=(this.canvasRef.width-this.img.width*this.imgScale)/2,this.imgY=(this.canvasRef.height-this.img.height*this.imgScale)/2,this.drawImage(),this.showTip(),this.canvasRef.addEventListener("mousedown",this.startMouse.bind(this)),this.canvasRef.addEventListener("mousemove",this.moveMouse.bind(this)),this.canvasRef.addEventListener("mouseup",this.endMouse.bind(this)),this.canvasRef.addEventListener("wheel",this.mouseWheel.bind(this)),this.canvasRef.addEventListener("mouseover",this.mouseOver.bind(this)),this.canvasRef.addEventListener("mouseout",this.mouseOut.bind(this))}async changeImage(e){this.imgSrc=e;const s=this.drawImage.bind(this);this.img.src=this.imgSrc,this.img.onload=s,this.img.onerror=function(){W.error("\u4EBA\u7269\u52A0\u8F7D\u5931\u8D25, \u8BF7\u5237\u65B0")}}removeEventListener(){this.canvasRef.removeEventListener("mousedown",this.startMouse.bind(this)),this.canvasRef.removeEventListener("mousemove",this.moveMouse.bind(this)),this.canvasRef.removeEventListener("mouseup",this.endMouse.bind(this)),this.canvasRef.removeEventListener("wheel",this.mouseWheel.bind(this)),this.canvasRef.removeEventListener("mouseover",this.mouseOver.bind(this)),this.canvasRef.removeEventListener("mouseout",this.mouseOut.bind(this))}getImgScale(){return this.imgScale}getXScale(){return(this.imgX/this.canvasRef.width).toFixed(3)}getYScale(){return(this.imgY/this.canvasRef.height).toFixed(3)}loadImage(e){return new Promise((s,c)=>{this.img=new Image,this.img.crossOrigin="Anonymous",this.img.onload=function(){s("")},this.img.onerror=function(a){W.error("\u4EBA\u7269\u52A0\u8F7D\u5931\u8D25, \u8BF7\u5237\u65B0"),c(a)},this.img.src=e})}drawImage(){this.ctx.clearRect(0,0,this.canvasRef.width,this.canvasRef.height),this.showTipStatus&&this.showTip(),this.ctx.drawImage(this.img,this.imgX,this.imgY,this.img.width*this.imgScale,this.img.height*this.imgScale)}showTip(){this.ctx.font="16px Microsoft YaHei"}mouseOver(){this.showTipStatus=!1,this.drawImage()}mouseOut(){this.showTipStatus=!0,this.drawImage()}startMouse(e){const{pageX:s,pageY:c}=e;this.isMove=!0,this.startPos=this.windowToCanvas(s,c),this.canvasRef.style.cursor="pointer"}moveMouse(e){if(!this.isMove)return!1;const{pageX:s,pageY:c}=e;this.movePos=this.windowToCanvas(s,c);const a=this.movePos.x-this.startPos.x,w=this.movePos.y-this.startPos.y;this.imgX+=a,this.imgY+=w,this.startPos={...this.movePos},this.drawImage()}endMouse(){this.isMove=!1,this.canvasRef.style.cursor="default"}mouseWheel(e){const{clientX:s,clientY:c,deltaY:a}=e,w=this.windowToCanvas(s,c),$={x:Number(((w.x-this.imgX)/this.imgScale).toFixed(2)),y:Number(((w.y-this.imgY)/this.imgScale).toFixed(2))};a>0?(this.imgScale+=.02,this.imgScale>=this.MAX_SCALE&&(this.imgScale=this.MAX_SCALE)):(this.imgScale-=.02,this.imgScale<=this.MINIMUM_SCALE&&(this.imgScale=this.MINIMUM_SCALE)),this.imgX=(1-this.imgScale)*$.x+(w.x-$.x),this.imgY=(1-this.imgScale)*$.y+(w.y-$.y),this.drawImage()}windowToCanvas(e,s){const{left:c,top:a,width:w,height:$}=this.canvasRef.getBoundingClientRect();return{x:e-c-(w-this.canvasRef.width)/2,y:s-a-($-this.canvasRef.height)/2}}}const re={class:"device device-iphone-14-pro"},_e={class:"device-frame"},ue=g('<div class="device-stripe" data-v-eb0344ef></div><div class="device-header" data-v-eb0344ef></div><div class="device-sensors" data-v-eb0344ef></div><div class="device-btns" data-v-eb0344ef></div><div class="device-power" data-v-eb0344ef></div><div class="device-home" data-v-eb0344ef></div>',6),he=f({__name:"i14pro",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",re,[d("div",_e,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ue]))}});const fe=_(he,[["__scopeId","data-v-eb0344ef"]]),me={class:"device device-iphone-14"},pe={class:"device-frame"},ge=g('<div class="device-stripe" data-v-b7712533></div><div class="device-header" data-v-b7712533></div><div class="device-sensors" data-v-b7712533></div><div class="device-btns" data-v-b7712533></div><div class="device-power" data-v-b7712533></div><div class="device-home" data-v-b7712533></div>',6),be=f({__name:"i14",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",me,[d("div",pe,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ge]))}});const ye=_(be,[["__scopeId","data-v-b7712533"]]),we={class:"rework-device phones"},ke={class:"device device-iphone-x"},Pe={class:"device-frame"},$e=g('<div class="device-stripe" data-v-87652372></div><div class="device-header" data-v-87652372></div><div class="device-sensors" data-v-87652372></div><div class="device-btns" data-v-87652372></div><div class="device-power" data-v-87652372></div><div class="device-home" data-v-87652372></div>',6),xe=f({__name:"iX",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",we,[d("div",ke,[d("div",Pe,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),$e])]))}});const Se=_(xe,[["__scopeId","data-v-87652372"]]),Ue={class:"device device-iphone-8"},Re={class:"device-frame"},Me=g('<div class="device-stripe" data-v-8974b07a></div><div class="device-header" data-v-8974b07a></div><div class="device-sensors" data-v-8974b07a></div><div class="device-btns" data-v-8974b07a></div><div class="device-power" data-v-8974b07a></div><div class="device-home" data-v-8974b07a></div>',6),Ve=f({__name:"i8",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Ue,[d("div",Re,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Me]))}});const Ie=_(Ve,[["__scopeId","data-v-8974b07a"]]),Be={class:"rework-device phones"},Ee={class:"device device-the-iphone"},We={class:"device-frame"},Ce=g('<div class="device-stripe" data-v-9272cc88></div><div class="device-header" data-v-9272cc88></div><div class="device-sensors" data-v-9272cc88></div><div class="device-btns" data-v-9272cc88></div><div class="device-power" data-v-9272cc88></div><div class="device-home" data-v-9272cc88></div>',6),Le=f({__name:"i",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Be,[d("div",Ee,[d("div",We,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Ce])]))}});const Xe=_(Le,[["__scopeId","data-v-9272cc88"]]),Ae={class:"device device-google-pixel-6-pro"},Ne={class:"device-frame"},Te=g('<div class="device-stripe" data-v-ff843fcf></div><div class="device-header" data-v-ff843fcf></div><div class="device-sensors" data-v-ff843fcf></div><div class="device-btns" data-v-ff843fcf></div><div class="device-power" data-v-ff843fcf></div><div class="device-home" data-v-ff843fcf></div>',6),Ye=f({__name:"Pixel6",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Ae,[d("div",Ne,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Te]))}});const Ge=_(Ye,[["__scopeId","data-v-ff843fcf"]]),Fe={class:"rework-device phones"},ze={class:"device device-google-pixel-2-xl"},Oe={class:"device-frame"},je=g('<div class="device-stripe" data-v-9f16ed1f></div><div class="device-header" data-v-9f16ed1f></div><div class="device-sensors" data-v-9f16ed1f></div><div class="device-btns" data-v-9f16ed1f></div><div class="device-power" data-v-9f16ed1f></div><div class="device-home" data-v-9f16ed1f></div>',6),De=f({__name:"Pixel2",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Fe,[d("div",ze,[d("div",Oe,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),je])]))}});const He=_(De,[["__scopeId","data-v-9f16ed1f"]]),Ke={class:"device device-google-pixel"},Je={class:"device-frame"},qe=g('<div class="device-stripe" data-v-3fc21c88></div><div class="device-header" data-v-3fc21c88></div><div class="device-sensors" data-v-3fc21c88></div><div class="device-btns" data-v-3fc21c88></div><div class="device-power" data-v-3fc21c88></div><div class="device-home" data-v-3fc21c88></div>',6),Qe=f({__name:"Pixel",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Ke,[d("div",Je,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),qe]))}});const Ze=_(Qe,[["__scopeId","data-v-3fc21c88"]]),es={class:"device device-galaxy-s8 device-blue"},ss={class:"device-frame"},as=g('<div class="device-stripe" data-v-17e6da8d></div><div class="device-header" data-v-17e6da8d></div><div class="device-sensors" data-v-17e6da8d></div><div class="device-btns" data-v-17e6da8d></div><div class="device-power" data-v-17e6da8d></div><div class="device-home" data-v-17e6da8d></div>',6),is=f({__name:"Glaxy8",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",es,[d("div",ss,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),as]))}});const cs=_(is,[["__scopeId","data-v-17e6da8d"]]),ts={class:"device device-imac"},ds={class:"device-frame"},vs=g('<div class="device-stripe" data-v-4da7cc87></div><div class="device-header" data-v-4da7cc87></div><div class="device-sensors" data-v-4da7cc87></div><div class="device-btns" data-v-4da7cc87></div><div class="device-power" data-v-4da7cc87></div><div class="device-home" data-v-4da7cc87></div>',6),os=f({__name:"iMac",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",ts,[d("div",ds,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),vs]))}});const ns=_(os,[["__scopeId","data-v-4da7cc87"]]),ls={class:"device device-macbook-pro"},rs={class:"device-frame"},_s=g('<div class="device-stripe" data-v-db8d9a5e></div><div class="device-header" data-v-db8d9a5e></div><div class="device-sensors" data-v-db8d9a5e></div><div class="device-btns" data-v-db8d9a5e></div><div class="device-power" data-v-db8d9a5e></div><div class="device-home" data-v-db8d9a5e></div>',6),us=f({__name:"MacBookPro",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",ls,[d("div",rs,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),_s]))}});const hs=_(us,[["__scopeId","data-v-db8d9a5e"]]),fs={class:"device device-macbook-pro-2018"},ms={class:"device-frame"},ps=g('<div class="device-stripe" data-v-8721fcfa></div><div class="device-header" data-v-8721fcfa></div><div class="device-sensors" data-v-8721fcfa></div><div class="device-btns" data-v-8721fcfa></div><div class="device-power" data-v-8721fcfa></div><div class="device-home" data-v-8721fcfa></div>',6),gs=f({__name:"MacBookPro2018",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",fs,[d("div",ms,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ps]))}});const bs=_(gs,[["__scopeId","data-v-8721fcfa"]]),ys={class:"device device-macbook"},ws={class:"device-frame"},ks=g('<div class="device-stripe" data-v-e32886a0></div><div class="device-header" data-v-e32886a0></div><div class="device-sensors" data-v-e32886a0></div><div class="device-btns" data-v-e32886a0></div><div class="device-power" data-v-e32886a0></div><div class="device-home" data-v-e32886a0></div>',6),Ps=f({__name:"MacBook",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",ys,[d("div",ws,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ks]))}});const $s=_(Ps,[["__scopeId","data-v-e32886a0"]]),xs={class:"device device-surface-book"},Ss={class:"device-frame"},Us=g('<div class="device-stripe" data-v-f32f1019></div><div class="device-header" data-v-f32f1019></div><div class="device-sensors" data-v-f32f1019></div><div class="device-btns" data-v-f32f1019></div><div class="device-power" data-v-f32f1019></div><div class="device-home" data-v-f32f1019></div>',6),Rs=f({__name:"SurfaceBook",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",xs,[d("div",Ss,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Us]))}});const Ms=_(Rs,[["__scopeId","data-v-f32f1019"]]),Vs={class:"device device-surface-studio"},Is={class:"device-frame"},Bs=g('<div class="device-stripe" data-v-5fdf581b></div><div class="device-header" data-v-5fdf581b></div><div class="device-sensors" data-v-5fdf581b></div><div class="device-btns" data-v-5fdf581b></div><div class="device-power" data-v-5fdf581b></div><div class="device-home" data-v-5fdf581b></div>',6),Es=f({__name:"SurfaceStudio",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Vs,[d("div",Is,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Bs]))}});const Ws=_(Es,[["__scopeId","data-v-5fdf581b"]]),Cs={class:"device device-ipad-pro"},Ls={class:"device-frame"},Xs=g('<div class="device-stripe" data-v-004bfe66></div><div class="device-header" data-v-004bfe66></div><div class="device-sensors" data-v-004bfe66></div><div class="device-btns" data-v-004bfe66></div><div class="device-power" data-v-004bfe66></div><div class="device-home" data-v-004bfe66></div>',6),As=f({__name:"iPadPro",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Cs,[d("div",Ls,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Xs]))}});const Ns=_(As,[["__scopeId","data-v-004bfe66"]]),Ts={class:"device device-ipad-pro-2017"},Ys={class:"device-frame"},Gs=g('<div class="device-stripe" data-v-4bf1d8bb></div><div class="device-header" data-v-4bf1d8bb></div><div class="device-sensors" data-v-4bf1d8bb></div><div class="device-btns" data-v-4bf1d8bb></div><div class="device-power" data-v-4bf1d8bb></div><div class="device-home" data-v-4bf1d8bb></div>',6),Fs=f({__name:"iPadPro2017",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Ts,[d("div",Ys,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Gs]))}});const zs=_(Fs,[["__scopeId","data-v-4bf1d8bb"]]),Os={class:"rework-device tablets"},js={class:"device device-surface-pro-2017"},Ds={class:"device-frame"},Hs=g('<div class="device-stripe" data-v-dc6c438c></div><div class="device-header" data-v-dc6c438c></div><div class="device-sensors" data-v-dc6c438c></div><div class="device-btns" data-v-dc6c438c></div><div class="device-power" data-v-dc6c438c></div><div class="device-home" data-v-dc6c438c></div>',6),Ks=f({__name:"SurfacePro",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",Os,[d("div",js,[d("div",Ds,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),Hs])]))}});const Js=_(Ks,[["__scopeId","data-v-dc6c438c"]]),qs={class:"rework-device watches"},Qs={class:"device device-apple-watch-ultra"},Zs={class:"device-frame"},ea=g('<div class="device-stripe" data-v-624b17cb></div><div class="device-header" data-v-624b17cb></div><div class="device-sensors" data-v-624b17cb></div><div class="device-btns" data-v-624b17cb></div><div class="device-power" data-v-624b17cb></div><div class="device-home" data-v-624b17cb></div>',6),sa=f({__name:"Ultra",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",qs,[d("div",Qs,[d("div",Zs,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ea])]))}});const aa=_(sa,[["__scopeId","data-v-624b17cb"]]),ia={class:"device device-apple-watch-s8"},ca={class:"device-frame"},ta=g('<div class="device-stripe" data-v-aed28edb></div><div class="device-header" data-v-aed28edb></div><div class="device-sensors" data-v-aed28edb></div><div class="device-btns" data-v-aed28edb></div><div class="device-power" data-v-aed28edb></div><div class="device-home" data-v-aed28edb></div>',6),da=f({__name:"Series",props:{imgUrl:null},setup(t){const e=t,s=r();return m(()=>e.imgUrl,(c,a)=>{new b(s.value,e.imgUrl)}),(c,a)=>(o(),u("div",ia,[d("div",ca,[d("canvas",{ref_key:"canvasRef",ref:s,class:"device-screen"},null,512)]),ta]))}});const va=_(da,[["__scopeId","data-v-aed28edb"]]),oa=n("iPhone"),na=n("iPhone14Pro"),la=n("iPhone14"),ra=n("iPhoneX"),_a=n("iPhone8"),ua=n("iPhone"),ha=n("Pixel"),fa=n("Google Pixel 6 pro"),ma=n("Google Pixel 2 XL"),pa=n("Google Pixel"),ga=n("Samsung"),ba=n("Samsung Galaxy S8"),ya=n("Mac"),wa=n("iMac"),ka=n("MacBook Pro"),Pa=n("MacBook Pro(2018)"),$a=n("MacBook"),xa=n("Pixel"),Sa=n("Surface Book"),Ua=n("Surface Studio"),Ra=n("iPad"),Ma=n("iPad Pro"),Va=n("iPad Pro(2017)"),Ia=n("Surface Pro"),Ba=n("Surface Pro"),Ea=n("Watch"),Wa=n("Watch Ultra"),Ca=n("Watch Series 8"),Ta=f({__name:"index",setup(t){const e=r(["iPhone14Pro"]),s=r("");async function c(P){s.value=`file://${P.path}`}const a=r(),w={PNG:"png",WEBP:"webp",SVG:"svg"},$={[w.PNG]:J,[w.WEBP]:q,[w.SVG]:Q},R=P=>{$[P](a.value,{style:{transform:"scale(1)"}}).then(y=>{const l=document.createElement("a");l.download=`code.${P}`,l.href=y,l.click()}).catch(y=>{W.error("oops, something went wrong!"),console.error(y)})},M=r(1),S=r();m(()=>e.value,(P,y)=>{M.value=S.value.clientWidth/a.value.clientWidth,O(()=>{M.value=1,S.value.clientWidth<a.value.clientWidth&&(M.value=S.value.clientWidth/a.value.clientWidth)})});const C=()=>{S.value.clientWidth<a.value.clientWidth&&(M.value=S.value.clientWidth/a.value.clientWidth)};return F(()=>{window.addEventListener("resize",C),S.value.clientWidth<a.value.clientWidth&&(M.value=S.value.clientWidth/a.value.clientWidth)}),z(()=>{window.removeEventListener("resize",C)}),(P,y)=>{const l=V("a-menu-item"),U=V("a-sub-menu"),L=V("a-menu"),A=V("a-button"),N=V("a-dropdown"),T=V("a-space");return o(),h(x(K),{"right-width":200},{one:i(()=>[d("div",{ref_key:"wrap",ref:S,style:{display:"flex","justify-content":"center"}},[d("div",{ref_key:"device",ref:a,style:j(`transform:scale(${M.value})`)},[e.value[0]==="iPhone14Pro"?(o(),h(fe,{key:0,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPhone14"?(o(),h(ye,{key:1,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPhoneX"?(o(),h(Se,{key:2,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPhone8"?(o(),h(Ie,{key:3,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPhone"?(o(),h(Xe,{key:4,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="Pixel6Pro"?(o(),h(Ge,{key:5,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="Pixel2XL"?(o(),h(He,{key:6,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="Pixel"?(o(),h(Ze,{key:7,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="Samsung"?(o(),h(cs,{key:8,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iMac"?(o(),h(ns,{key:9,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="MacBookPro"?(o(),h(hs,{key:10,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="MacBookPro2018"?(o(),h(bs,{key:11,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="MacBook"?(o(),h($s,{key:12,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="SurfaceBook"?(o(),h(Ms,{key:13,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="SurfaceStudio"?(o(),h(Ws,{key:14,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPadPro"?(o(),h(Ns,{key:15,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="iPadPro2017"?(o(),h(zs,{key:16,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="SurfacePro"?(o(),h(Js,{key:17,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="WatchUltra"?(o(),h(aa,{key:18,"img-url":s.value},null,8,["img-url"])):p("",!0),e.value[0]==="WatchSeries"?(o(),h(va,{key:19,"img-url":s.value},null,8,["img-url"])):p("",!0)],4)],512)]),two:i(()=>[v(L,{selectedKeys:e.value,"onUpdate:selectedKeys":y[0]||(y[0]=I=>e.value=I),mode:"inline"},{default:i(()=>[v(U,{key:"sub1"},{icon:i(()=>[v(x(B))]),title:i(()=>[oa]),default:i(()=>[v(l,{key:"iPhone14Pro"},{default:i(()=>[na]),_:1}),v(l,{key:"iPhone14"},{default:i(()=>[la]),_:1}),v(l,{key:"iPhoneX"},{default:i(()=>[ra]),_:1}),v(l,{key:"iPhone8"},{default:i(()=>[_a]),_:1}),v(l,{key:"iPhone"},{default:i(()=>[ua]),_:1})]),_:1}),v(U,{key:"sub2"},{icon:i(()=>[v(ce)]),title:i(()=>[ha]),default:i(()=>[v(l,{key:"Pixel6Pro"},{default:i(()=>[fa]),_:1}),v(l,{key:"Pixel2XL"},{default:i(()=>[ma]),_:1}),v(l,{key:"Pixel"},{default:i(()=>[pa]),_:1})]),_:1}),v(U,{key:"sub3"},{icon:i(()=>[v(le)]),title:i(()=>[ga]),default:i(()=>[v(l,{key:"Samsung"},{default:i(()=>[ba]),_:1})]),_:1}),v(U,{key:"sub4"},{icon:i(()=>[v(x(B))]),title:i(()=>[ya]),default:i(()=>[v(l,{key:"iMac"},{default:i(()=>[wa]),_:1}),v(l,{key:"MacBookPro"},{default:i(()=>[ka]),_:1}),v(l,{key:"MacBookPro2018"},{default:i(()=>[Pa]),_:1}),v(l,{key:"MacBook"},{default:i(()=>[$a]),_:1})]),_:1}),v(U,{key:"sub5"},{icon:i(()=>[v(x(X))]),title:i(()=>[xa]),default:i(()=>[v(l,{key:"SurfaceBook"},{default:i(()=>[Sa]),_:1}),v(l,{key:"SurfaceStudio"},{default:i(()=>[Ua]),_:1})]),_:1}),v(U,{key:"sub6"},{icon:i(()=>[v(x(B))]),title:i(()=>[Ra]),default:i(()=>[v(l,{key:"iPadPro"},{default:i(()=>[Ma]),_:1}),v(l,{key:"iPadPro2017"},{default:i(()=>[Va]),_:1})]),_:1}),v(U,{key:"sub7"},{icon:i(()=>[v(x(X))]),title:i(()=>[Ia]),default:i(()=>[v(l,{key:"SurfacePro"},{default:i(()=>[Ba]),_:1})]),_:1}),v(U,{key:"sub8"},{icon:i(()=>[v(x(B))]),title:i(()=>[Ea]),default:i(()=>[v(l,{key:"WatchUltra"},{default:i(()=>[Wa]),_:1}),v(l,{key:"WatchSeries"},{default:i(()=>[Ca]),_:1})]),_:1})]),_:1},8,["selectedKeys"]),v(T,{direction:"vertical",align:"center",size:10,style:{width:"100%","margin-top":"20px"}},{default:i(()=>[v(x(D),{"handle-file-selected":c,title:P.$t("image.choose"),accept:"image/png,image/jpeg,image/apng,image/avif,image/svg+xml,image/webp",type:"primary"},null,8,["title"]),v(N,null,{overlay:i(()=>[v(L,{onClick:R},{default:i(()=>[v(l,{key:"1",onClick:y[1]||(y[1]=I=>R("png"))},{default:i(()=>[n(E(P.$t("deviceImage.export"))+"PNG",1)]),_:1}),v(l,{key:"2",onClick:y[2]||(y[2]=I=>R("webp"))},{default:i(()=>[n(E(P.$t("deviceImage.export"))+"WEBP",1)]),_:1}),v(l,{key:"3",onClick:y[3]||(y[3]=I=>R("svg"))},{default:i(()=>[n(E(P.$t("deviceImage.export"))+"SVG",1)]),_:1})]),_:1})]),default:i(()=>[v(A,{onClick:y[4]||(y[4]=I=>R("png"))},{default:i(()=>[n(E(P.$t("deviceImage.export"))+"PNG ",1),v(x(H))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ta as default};