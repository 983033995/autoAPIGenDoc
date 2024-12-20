import{d as u,u as p,a as h,c as _,b as f,t as g,e as v,r as x,_ as y,f as n,g as e,h as a,F as b,i as N,n as k,o as l,j as P,k as V,l as D}from"./index-ojVgXyur.js";import{N as S}from"./NoteDisplay-D6wpQbEs.js";const w=u({__name:"PresenterPrint",setup(d,{expose:r}){r(),p(`
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
`),h({title:`Notes - ${_.title}`});const t={slidesWithNote:f(()=>x.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return _},get themeVars(){return g},get total(){return v},NoteDisplay:S};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),E={class:"m-4"},j={class:"mb-10"},F={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},W={class:"font-bold flex gap-2"},B={class:"opacity-50"},H={key:0,class:"border-gray-400/50 mb-8"};function z(d,r,m,t,s,i){return l(),n("div",{id:"page-root",style:k(t.themeVars)},[e("div",E,[e("div",j,[e("h1",F,a(t.configs.title),1),e("div",L,a(new Date().toLocaleString()),1)]),(l(!0),n(b,null,N(t.slidesWithNote,(o,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",T,[e("div",W,[e("div",B,a(o==null?void 0:o.no)+"/"+a(t.total),1),P(" "+a(o==null?void 0:o.title)+" ",1),r[0]||(r[0]=e("div",{class:"flex-auto"},null,-1))])]),V(t.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<t.slidesWithNote.length-1?(l(),n("hr",H)):D("v-if",!0)]))),128))])],4)}const M=y(w,[["render",z],["__file","/Volumes/项目文件/project/vscode插件/autoAPIGenDoc/node_modules/.pnpm/@slidev+client@0.47.5_@nuxt+kit@3.14.1592_rollup@4.28.1__postcss@8.4.49_rollup@4.28.1_typescript@5.7.2_vite@5.4.11/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
