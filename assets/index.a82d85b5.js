import{d as defineComponent,y as i18n,r as ref,J as onMounted,a as createBlock,b as withCtx,g as unref,o as openBlock,l as createBaseVNode,c as createVNode,bQ as MultiLineInput,bN as Layout}from"./index.954a2cbc.js";import{M as MultiLineResult}from"./MultiLineResult.0bab4ef4.js";import{a as utf8}from"./utf8.26cf90a6.js";const _hoisted_1={class:"input"},_sfc_main=defineComponent({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},emits:["acceptClipboardCb"],setup(__props,{emit}){const props=__props,{t}=i18n(),inputValue=ref("\\x41\\x20\\x46\\x72\\x65\\x65\\x2c\\x20\\x4d\\x6f\\x64\\x65\\x72\\x6e\\x20\\x54\\x6f\\x6f\\x6c\\x62\\x6f\\x78\\x0a\\x42\\x75\\x69\\x6c\\x74\\x20\\x66\\x6f\\x72\\x20\\x44\\x65\\x76\\x65\\x6c\\x6f\\x70\\x65\\x72\\x73\\x2e"),outputValue=ref(""),htmlRegExp=/&#(\d*);/;onMounted(()=>{var e;(e=props.clipboardValue)!=null&&e.isUtf8Encoded()&&(inputValue.value=props.clipboardValue.getOriginData(),emit("acceptClipboardCb"),decode())});const decode=()=>{let raw=inputValue.value;htmlRegExp.test(raw)&&(raw=htmlIntoHex(raw)),outputValue.value=utf8.decode(eval("'"+raw+"'"))};function htmlIntoHex(e){return e.replace(/&#(\d+);/g,(a,o)=>"\\x"+parseInt(o).toString(16))}return setTimeout(()=>{decode()}),(e,a)=>(openBlock(),createBlock(unref(Layout),{"max-width":1280},{one:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createVNode(unref(MultiLineInput),{modelValue:inputValue.value,"onUpdate:modelValue":a[0]||(a[0]=o=>inputValue.value=o),title:unref(t)("hexLang.input_tip"),onChange:decode},null,8,["modelValue","title"])]),createVNode(unref(MultiLineResult),{result:outputValue.value,"onUpdate:result":a[1]||(a[1]=o=>outputValue.value=o),"result-desc":unref(t)("hexLang.result_tip")},null,8,["result","result-desc"])]),_:1}))}});export{_sfc_main as default};