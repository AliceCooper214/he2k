import{N as n,v as a,ao as i}from"./index.954a2cbc.js";import{a as c}from"./axios.ee048d55.js";let o="",u="";o="https://api.he3app.com",u="https://portal.he3app.com/auth/redirect";const m=o,h=u,r=c.create({timeout:1e4,baseURL:o});r.interceptors.request.use(async function(t){var e;const s=await((e=n)==null?void 0:e.token());return s&&(t.headers.Authorization=`Bearer ${s}`),t},function(t){return Promise.reject(t)});r.interceptors.response.use(function(t){return a.exports.get(t,"data",{})},function(t){var e;return a.exports.get(t,"response.status")===401&&((e=n)==null||e.deleteLoginToken(),i.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55")),Promise.reject(t)});const F=r;export{m as B,F as H,h as L};
