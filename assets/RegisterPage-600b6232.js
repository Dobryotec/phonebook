import{u as n,j as e,r as a}from"./index-0639fc20.js";const l=()=>{const t=n(),o=s=>{s.preventDefault();const r=s.currentTarget;t(a({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()};return e.jsxs("form",{className:`container mx-auto flex justify-center items-center flex-col \r
      gap-y-5 dark:bg-neutral-800 py-[148px] rounded-b-lg shadow-2xl`,onSubmit:o,autoComplete:"off",children:[e.jsxs("label",{className:"dark:text-stone-300 font-bold text-2xl flex flex-col",children:["Username",e.jsx("input",{type:"text",name:"name",required:!0,className:`w-full dark:text-stone-500 px-4 py-1.5 shadow-xl border-solid\r
           border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500 \r
           focus:ring-2 focus:ring-sky-500 `})]}),e.jsxs("label",{className:"dark:text-stone-300 font-bold text-2xl flex flex-col",children:["Email",e.jsx("input",{type:"email",name:"email",required:!0,className:`w-full dark:text-stone-500  px-4 py-1.5 shadow-xl  border-solid \r
          border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500 \r
           focus:ring-2 focus:ring-sky-500 `})]}),e.jsxs("label",{className:"dark:text-stone-300 font-bold text-2xl flex flex-col",children:["Password",e.jsx("input",{type:"password",name:"password",required:!0,minLength:8,className:`w-full dark:text-stone-500 px-4 py-1.5 shadow-xl  border-solid \r
          border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500 \r
           focus:ring-2 focus:ring-sky-500 `})]}),e.jsx("button",{type:"submit",className:`bg-gradient-to-r from-slate-400 to-amber-400 py-6 px-14 text-white\r
         rounded-full hover:bg-gradient-to-l hover:from-black hover:to-amber-400 \r
         animate-pulse transition ease-in-out hover:duration-500 font-bold text-2xl shadow-2xl`,children:"Register"})]})},u=()=>e.jsx("div",{children:e.jsx(l,{})});export{u as default};
