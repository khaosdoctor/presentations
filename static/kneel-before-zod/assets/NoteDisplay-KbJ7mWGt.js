import{d as c,o as s,e as n,s as l,f as r,t as a,_ as d}from"./index-Z2RJxy9F.js";const u=["innerHTML"],m=["textContent"],k=["textContent"],f=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const t=p;return(e,o)=>e.noteHtml?(s(),n("div",{key:0,class:l(["prose overflow-auto outline-none",t.class]),onClick:o[0]||(o[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(s(),n("div",{key:1,class:l(["prose overflow-auto outline-none",t.class]),onClick:o[1]||(o[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(s(),n("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",t.class]),onClick:o[2]||(o[2]=i=>e.$emit("click"))},[r("p",{textContent:a(t.placeholder||"No notes.")},null,8,k)],2))}}),v=d(f,[["__file","/Users/khaosdoctor/Documents/Repositories/github.com/khaosdoctor/presentations/sources/kneel-before-zod/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{v as N};
