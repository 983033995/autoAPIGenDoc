import{d as c,_ as d,o as s,f as l,B as i,g as a,h as p}from"./index-Djzd_yw5.js";const u=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(o,{expose:e}){e();const t={props:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),f=["innerHTML"],m=["textContent"],_=["textContent"];function y(o,e,n,t,k,v){return n.noteHtml?(s(),l("div",{key:0,class:i(["prose overflow-auto outline-none",t.props.class]),onClick:e[0]||(e[0]=r=>o.$emit("click")),innerHTML:n.noteHtml},null,10,f)):n.note?(s(),l("div",{key:1,class:i(["prose overflow-auto outline-none",t.props.class]),onClick:e[1]||(e[1]=r=>o.$emit("click"))},[a("p",{textContent:p(n.note)},null,8,m)],2)):(s(),l("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",t.props.class]),onClick:e[2]||(e[2]=r=>o.$emit("click"))},[a("p",{textContent:p(t.props.placeholder||"No notes.")},null,8,_)],2))}const S=d(u,[["render",y],["__file","/home/project/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{S as N};