import{_ as i}from"./VerticalTransform.vue_vue_type_script_setup_true_lang.a883f702.js";import{t as p}from"./index.9cd13433.js";import{d,J as m,e as u,c as f,g as b,bb as _,o as B}from"./index.954a2cbc.js";import"./MultiLineResult.0bab4ef4.js";const V={class:"Decode"},G=d({__name:"index",props:{clipboardValue:null},emits:["acceptClipboardCb"],setup(s,{emit:c}){var o,t;const a=s,n=(o=a.clipboardValue)!=null&&o.isBase64()?(t=a.clipboardValue)==null?void 0:t.getOriginData():"QSBGcmVlLCBNb2Rlcm4gVG9vbGJveApCdWlsdCBmb3IgRGV2ZWxvcGVycy4K";function l(e){let r=p(e);return _.from(r).toString()}return m(()=>{var e;(e=a.clipboardValue)!=null&&e.isBase64()&&c("acceptClipboardCb")}),(e,r)=>(B(),u("div",V,[f(i,{"transform-func":l,"sample-data":b(n)},null,8,["sample-data"])]))}});export{G as default};