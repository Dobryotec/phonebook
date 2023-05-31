import{u as n,j as e,l as a}from"./index-0639fc20.js";const l=()=>{const s=n(),t=r=>{r.preventDefault();const o=r.currentTarget;s(a({email:o.elements.email.value,password:o.elements.password.value})),o.reset()};return e.jsxs("form",{onSubmit:t,className:`container mx-auto flex justify-center items-center flex-col gap-y-5\r
       dark:bg-neutral-800 py-[200px] rounded-b-lg shadow-2xl`,autoComplete:"off",children:[e.jsxs("label",{className:"dark:text-stone-300 font-bold text-2xl flex flex-col",children:["Email",e.jsx("input",{type:"email",name:"email",className:`w-full dark:text-stone-500 px-4 py-1.5 shadow-xl  border-solid border-4\r
           border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2\r
            focus:ring-sky-500 `})]}),e.jsxs("label",{className:"dark:text-stone-300 font-bold text-2xl flex flex-col",children:["Password",e.jsx("input",{type:"password",name:"password",className:`w-full dark:text-stone-500  px-4 py-1.5 shadow-xl  border-solid border-4\r
           border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2\r
            focus:ring-sky-500 `})]}),e.jsx("button",{type:"submit",className:`bg-gradient-to-r from-slate-400 to-amber-400 py-6 px-14 text-white\r
         rounded-full hover:bg-gradient-to-l hover:from-black hover:to-amber-400 \r
         animate-pulse transition ease-in-out hover:duration-500 font-bold text-2xl shadow-2xl`,children:"Log In"})]})},i=()=>e.jsx("div",{children:e.jsx(l,{})});export{i as default};
