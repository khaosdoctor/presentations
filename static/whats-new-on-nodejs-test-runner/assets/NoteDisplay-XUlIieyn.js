import{d as u,o,e as s,s as l,f as r,t as a,_ as c}from"./index-R1-OCX8y.js";const d=["innerHTML"],m=["textContent"],f=["textContent"],k=u({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return(e,t)=>e.noteHtml?(o(),s("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,d)):e.note?(o(),s("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(o(),s("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,f)],2))}}),v=c(k,[["__file","/home/runner/work/presentations/presentations/sources/whats-new-on-nodejs-test-runner/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{v as N};
