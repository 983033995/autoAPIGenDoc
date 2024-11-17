import{d as p,u as h,a as u,c as m,b as f,r as g,t as v,e as x,_ as y,o as n,f as l,g as e,h as a,F as b,i as N,j as k,k as P,l as V,n as S}from"./index-Djzd_yw5.js";import{N as w}from"./NoteDisplay-Bc8wIbPC.js";const j=p({__name:"PresenterPrint",setup(d,{expose:r}){r(),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const t={slidesWithNote:f(()=>g.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return m},get themeVars(){return x},get total(){return v},NoteDisplay:w};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},W={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},C={key:0,class:"border-gray-400/50 mb-8"};function F(d,r,_,t,s,i){return n(),l("div",{id:"page-root",style:S(t.themeVars)},[e("div",D,[e("div",L,[e("h1",T,a(t.configs.title),1),e("div",W,a(new Date().toLocaleString()),1)]),(n(!0),l(b,null,N(t.slidesWithNote,(o,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",z,a(o==null?void 0:o.no)+"/"+a(t.total),1),k(" "+a(o==null?void 0:o.title)+" ",1),r[0]||(r[0]=e("div",{class:"flex-auto"},null,-1))])]),P(t.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<t.slidesWithNote.length-1?(n(),l("hr",C)):V("v-if",!0)]))),128))])],4)}const E=y(j,[["render",F],["__file","/home/project/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
