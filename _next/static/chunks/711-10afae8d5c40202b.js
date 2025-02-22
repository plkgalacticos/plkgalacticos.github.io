"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{629:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155),r=l(2115);let a=e=>{let{targetValue:s=0,startValue:l=0,duration:a=1400}=e,[n,i]=(0,r.useState)(l),c=(0,r.useRef)(null),d=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=new IntersectionObserver(l=>{l.forEach(l=>{l.isIntersecting&&(o(s,a),e.unobserve(l.target))})},{threshold:.2});return c.current&&e.observe(c.current),()=>{d.current&&clearInterval(d.current)}},[s,a]);let o=(e,s)=>{let t=Math.abs(e-l);if(0===t)return;let r=Math.max(s/t,10),a=l;d.current=setInterval(()=>{i(a+=e>l?1:-1),(e>l&&a>=e||e<l&&a<=e)&&(clearInterval(d.current),i(e))},r)};return(0,t.jsx)("span",{ref:c,children:n})}},6745:(e,s,l)=>{l.d(s,{A:()=>r});var t=l(2115);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{threshold:.2},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"slide-top",[l,r]=(0,t.useState)(!1),a=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let s=new IntersectionObserver(e=>{let[s]=e;s.isIntersecting&&!l&&r(!0)},e);return a.current&&s.observe(a.current),()=>{a.current&&s.unobserve(a.current)}},[a,e,l]),[a,"animate-div ".concat(l?s:"".concat(s,"-pre"))]}},2516:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155);l(2115);var r=l(6745);let a=e=>{let{t:s}=e;s=s.comp;let[l,a]=(0,r.A)({threshold:.1},"slide-top"),[n,i]=(0,r.A)({threshold:.1},"slide-right"),[c,d]=(0,r.A)({threshold:.1},"slide-left"),[o,m]=(0,r.A)({threshold:.1},"slide-top"),[x,h]=(0,r.A)({threshold:.1},"slide-top"),[p,g]=(0,r.A)({threshold:.1},"slide-top"),[f,u]=(0,r.A)({threshold:.1},"slide-right"),[j,b]=(0,r.A)({threshold:.1},"scale-in-center");return(0,t.jsxs)("section",{className:"relative flex flex-col justify-center items-center w-full",children:[(0,t.jsxs)("h1",{ref:l,className:"slide-top-pre ".concat(a," heading-text mb-16"),children:[(0,t.jsx)("span",{className:"text-logo-yellow",children:"Cibalae "}),"Open ",(0,t.jsx)("span",{className:"text-logo-yellow",children:"Kup"})," 2025"]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start gap-4 mt-24 max-container z-[1]",children:[(0,t.jsxs)("div",{className:"flex-1 mx-auto",children:[(0,t.jsx)("h3",{ref:n,className:"slide-right-pre ".concat(i," text-2xl lg:text-3xl font-semibold font-palanquin leading-3"),children:s.h1}),(0,t.jsx)("p",{ref:o,className:"slide-top-pre ".concat(m," info-text font-montserrat leading-normal max-w-md mt-4 lg:mt-8"),children:s.p}),(0,t.jsxs)("div",{ref:x,className:"slide-top-pre ".concat(h," flex flex-row justify-start items-center gap-4 flex-wrap mt-4"),children:[(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/germany.svg",alt:"GERMANY"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/france.svg",alt:"FRANCE"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/hungary.svg",alt:"HUNGARY"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/slovenia.svg",alt:"SLOVENIA"})]}),(0,t.jsxs)("div",{ref:p,className:"slide-top-pre ".concat(g," flex flex-row justify-start items-center gap-4 flex-wrap mt-4"),children:[(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/serbia.svg",alt:"SERBIA"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/bulgaria.svg",alt:"BULGARIA"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/greece.svg",alt:"GREECE"}),(0,t.jsx)("img",{className:"w-14 h-auto",src:"/icons/croatia.svg",alt:"CROATIA"})]}),(0,t.jsx)("a",{href:"https://www.instagram.com/plk.galacticos/",target:"_blank",className:"",children:(0,t.jsxs)("button",{ref:f,className:"slide-right-pre ".concat(u," btn-primary py-3 mt-8 flex flex-row justify-center items-center gap-4 min-md:my-2"),children:[(0,t.jsx)("img",{className:"w-6 lg:w-8 h-auto",src:"/icons/ig-white.svg",alt:"INSTAGRAM"}),(0,t.jsx)("p",{className:"text-base lg:text-lg font-semibold",children:s.btn})]})})]}),(0,t.jsxs)("div",{className:"flex-1  max-lg:w-full",children:[(0,t.jsx)("h3",{ref:c,className:"slide-left-pre ".concat(d," text-2xl lg:text-3xl font-semibold font-palanquin leading-3 mb-8 mt-24 lg:mt-0"),children:s.h2}),(0,t.jsx)("iframe",{ref:j,className:"scale-in-center-pre ".concat(b," rounded-md min-w-full h-72 md:h-96 lg:h-[450px]"),src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.698479927844!2d18.790913875918918!3d45.294314344758305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8ae094d7cb09%3A0x2df59e6296b69211!2sElementary%20school%20Antun%20Gustav%20Matos!5e0!3m2!1sen!2shr!4v1730482835010!5m2!1sen!2shr",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Cibalae Open Kup Google Maps Location"})]})]}),(0,t.jsxs)("div",{className:"flex flex-row justify-center items-center gap-24 flex-wrap mt-24 z-10",children:[(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/nutrition shop.png",alt:"NUTRITION SHOP"}),(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/smells like pr.png",alt:"SMELLS LIKE PR"}),(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/4za.png",alt:"4ZA"}),(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/a7.png",alt:"A7"}),(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/ttigroup.png",alt:"TTI-group"}),(0,t.jsx)("img",{className:"w-28 h-auto",src:"/images/sponsors/tz.png",alt:"TZ"})]}),(0,t.jsx)("div",{className:" border-4 border-gold rounded-md p-4 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[35rem] lg:translate-y-72",children:(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4 min-w-48 min-h-48"})})})})})}),(0,t.jsx)("div",{className:"absolute bottom-0 -left-4 -right-4 min-h-8 translate-y-[9rem] shadow-inset-black-bottom"})]})}},6621:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155),r=l(2115);let a=e=>{let{t:s}=e;s=s.faq;let[l,a]=(0,r.useState)(Array(14).fill(!1)),[n,i]=(0,r.useState)(Array(14).fill(!1)),[c,d]=(0,r.useState)(Array(14).fill(!1)),o=(0,r.useRef)([]),m=e=>{a(s=>{let l=[...s];return l[e]=!l[e],l})};return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{let s=parseInt(e.target.getAttribute("data-index"),10);!c[s]&&e.isIntersecting&&(i(e=>{let l=[...e];return l[s]=!0,l}),d(e=>{let l=[...e];return l[s]=!0,l}))})},{threshold:.5});return o.current.forEach((s,l)=>{s&&(s.setAttribute("data-index",l),e.observe(s))}),()=>e.disconnect()},[c]),(0,t.jsxs)("section",{className:"max-container padding max-w-6xl flex flex-col justify-start items-start gap-12",children:[(0,t.jsxs)("h2",{ref:e=>o.current[0]=e,className:"heading-text text-left md:text-center w-full ".concat(n[0]?"slide-top":"slide-top-pre"),children:[s.h1,(0,t.jsx)("span",{className:"text-logo-yellow",children:s.h2}),s.h3]}),(0,t.jsx)("div",{className:"w-full max-w-4xl m-auto",children:Array.from({length:13},(e,r)=>(0,t.jsxs)("div",{ref:e=>o.current[r+1]=e,className:"mt-6 pt-4 w-full border-t-2 border-logo-white ".concat(n[r+1]?"slide-top":"slide-top-pre"),children:[(0,t.jsxs)("div",{className:"flex flex-row justify-start items-center gap-4 cursor-pointer",onClick:()=>m(r+1),children:[(0,t.jsx)("img",{className:"w-4 lg:w-6 h-auto transition-all duration-300 ".concat(l[r+1]?"rotate-90":""),src:"/icons/arrow-right.svg",alt:"ARROW"}),(0,t.jsx)("h2",{className:"font-semibold text-xl",children:s["q".concat(r+1)]})]}),(0,t.jsxs)("div",{className:"pt-4 pl-8 lg:pl-10 ".concat(l[r+1]?"active":"hidden"),children:[(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:s["a".concat(r+1)]}}),12==r?(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:s["join-link"],className:"text-logo-yellow cursor-pointer",children:s.a132})," ",s.a133]}):""]})]},r+1))})]})}},5431:(e,s,l)=>{l.d(s,{default:()=>n});var t=l(5155);l(2115);var r=l(8897),a=l.n(r);let n=e=>{let{t:s}=e,l=s.swal;return s=s.hero,(0,t.jsxs)("section",{className:"min-w-full min-h-[100vh] bg-blend-darken bg-black/70",children:[(0,t.jsx)("img",{className:"fixed top-0 right-0 left-0 min-w-full min-h-[100vh] -z-10 object-cover",src:"/images/Walter1.jpg",alt:"Cucanj"}),(0,t.jsxs)("div",{className:"max-container flex flex-col justify-end items-start min-h-[100vh] gap-4 px-4 pb-20 lg:pb-28",children:[(0,t.jsx)("h1",{className:"slide-top text-3xl lg:text-4xl font-extrabold uppercase leading-none",children:s.h1}),(0,t.jsx)("h1",{className:"slide-top text-3xl lg:text-4xl font-extrabold uppercase leading-3",children:s.h12}),(0,t.jsxs)("h2",{className:"slide-top text-xl lg:text-3xl italic max-md:pb-2 max-md:pt-4",children:["„",s.h2,"’’"]}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8",children:[(0,t.jsx)("button",{onClick:()=>{a().fire({title:l.h,html:'<p class="text-left">'.concat(l.p,'</p>\n              <div class="mt-4 mb-4">\n                <ul class="list-disc ml-5">\n                  <li class="text-left">').concat(l.l11,'\n                    <a href="').concat(l.a,'" target="_blank" class="text-blue-500 hover:underline">\n                      ').concat(l.l12,'.\n                    </a>\n                  </li>\n                  <li class="text-left">').concat(l.l21,'\n                    <a href="https://www.instagram.com/plk.galacticos/" target="_blank" class="text-blue-500 hover:underline">\n                      Instagram.\n                    </a>\n                    ').concat(l.l22,"\n                  </li>\n                </ul>\n              </div>"),icon:"info",confirmButtonText:"Ide gas"})},className:"btn-primary max-md:w-full",children:s.btn}),(0,t.jsx)("a",{href:"https://www.instagram.com/plk.galacticos/",children:(0,t.jsxs)("button",{className:"btn-secondary flex flex-row justify-center items-center gap-2",children:[(0,t.jsx)("img",{className:"w-6 h-auto",src:"/icons/ig-white.svg",alt:"Instagram ikona"}),s.btn2]})})]})]})]})}},8403:(e,s,l)=>{l.d(s,{default:()=>i});var t=l(5155);l(2115);var r=l(6745),a=l(8897),n=l.n(a);let i=e=>{let{t:s}=e,l=s.swal;s=s.join;let[a,i]=(0,r.A)({threshold:.1},"slide-top"),[c,d]=(0,r.A)({threshold:.1},"slide-bottom"),[o,m]=(0,r.A)({threshold:.1},"slide-in-elliptic-top-fwd");return(0,t.jsxs)("section",{className:"relative bg-join bg-no-repeat bg-cover bg-fixed bg-center-safari bg-blend-darken bg-black/70 flex flex-col justify-center items-center gap-12 text-center min-h-[100vh]",children:[(0,t.jsxs)("h1",{ref:a,className:"slide-top-pre ".concat(i," text-4xl lg:text-6xl font-semibold"),children:[s.h1," ",(0,t.jsx)("span",{className:"text-logo-yellow",children:s.h2})," ",s.h3]}),(0,t.jsx)("h2",{ref:c,className:"slide-botom-pre ".concat(d," text-2xl lg:text-3xl font-semibold max-w-lg text-center leading-normal"),children:s.p}),(0,t.jsx)("button",{ref:o,onClick:()=>{n().fire({title:l.h,html:'<p class="text-left">'.concat(l.p,'</p>\n            <div class="mt-4 mb-4">\n              <ul class="list-disc ml-5">\n                <li class="text-left">').concat(l.l11,'\n                  <a href="').concat(l.a,'" target="_blank" class="text-blue-500 hover:underline">\n                    ').concat(l.l12,'.\n                  </a>\n                </li>\n                <li class="text-left">').concat(l.l21,'\n                  <a href="https://www.instagram.com/plk.galacticos/" target="_blank" class="text-blue-500 hover:underline">\n                    Instagram.\n                  </a>\n                  ').concat(l.l22,"\n                </li>\n              </ul>\n            </div>"),icon:"info",confirmButtonText:"Ide gas"})},className:"slide-in-elliptic-top-fwd-pre ".concat(m," bg-logo-yellow md:text-lg btn-diagonal-swipe max-md:px-4 max-md:py-2 text-white"),children:s.btn})]})}},4675:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155);l(2115);var r=l(6745);let a=e=>{let{t:s}=e;s=s.mission;let[l,a]=(0,r.A)({threshold:.1},"slide-top"),[n,i]=(0,r.A)({threshold:.1},"slide-top");return(0,t.jsxs)("section",{className:"relative flex flex-col lg:flex-row justify-center items-center z-[1] ",children:[(0,t.jsx)("div",{className:"flex-1 flex flex-col justify-center items-center",children:(0,t.jsxs)("div",{className:"px-4 py-24",children:[(0,t.jsxs)("h1",{ref:l,className:"slide-top-pre ".concat(a," heading-text"),children:[s.our," ",(0,t.jsx)("span",{className:"text-logo-purple",children:s.h})]}),(0,t.jsx)("p",{ref:n,className:"slide-top-pre ".concat(i," text-lg max-w-md mt-6"),children:s.p})]})}),(0,t.jsx)("div",{className:"flex-1 relative",children:(0,t.jsx)("img",{className:"object-cover min-w-full",src:"/images/Jakov_Mrso.jpg",alt:"Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju"})}),(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-2 rotate-45 absolute max-lg:-right-16 lg:-left-16 -top-4 lg:top-24 -z-10",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-2",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-2",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16"})})})})]})}},8126:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155);l(2115);var r=l(6745);let a=e=>{let{t:s}=e,l=s.nav;s=s.story;let[a,n]=(0,r.A)({threshold:.1},"slide-right"),[i,c]=(0,r.A)({threshold:.1},"slide-top"),[d,o]=(0,r.A)({threshold:.1},"slide-top"),[m,x]=(0,r.A)({threshold:.1},"slide-top"),[h,p]=(0,r.A)({threshold:.1},"scale-in-center");return(0,t.jsxs)("section",{className:"relative flex flex-col lg:flex-col ",children:[(0,t.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row justify-center items-start",children:[(0,t.jsx)("div",{className:"flex-1 relative z-[2]",children:(0,t.jsx)("img",{className:"object-cover lg:min-h-[100vh] min-w-full",src:"/images/Marko_Kuzmic.jpg",alt:"Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju"})}),(0,t.jsxs)("div",{className:"flex-1 w-full min-h-full flex flex-col justify-center items-start gap-8 py-24 text-lg px-4",children:[(0,t.jsx)("h1",{ref:a,className:"heading-text slide-right-pre ".concat(n," max-w-xl mx-auto"),children:s.h2}),(0,t.jsx)("p",{ref:i,className:"slide-top-pre ".concat(c," max-w-xl mx-auto"),children:s.p1}),(0,t.jsx)("p",{ref:d,className:"slide-top-pre ".concat(o," max-w-xl mx-auto"),children:s.p2}),(0,t.jsx)("p",{ref:m,className:"slide-top-pre ".concat(x," max-w-xl mx-auto"),children:s.p3}),(0,t.jsx)("div",{className:"w-full  max-w-xl mx-auto",children:(0,t.jsx)("a",{href:"/"+l["members-link"],children:(0,t.jsx)("button",{ref:h,className:" scale-in-center-pre ".concat(p," btn-primary"),children:s.btn})})})]})]}),(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-2 rotate-45 absolute -right-16 bottom-24 ",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-2",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-2",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4 min-w-16 min-h-16"})})})})]})}},9797:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155);l(2115);var r=l(6745);let a=e=>{let{t:s}=e;s=s.values;let[l,a]=(0,r.A)({threshold:.1},"slide-top"),[n,i]=(0,r.A)({threshold:.1},"slide-right"),[c,d]=(0,r.A)({threshold:.1},"slide-left"),[o,m]=(0,r.A)({threshold:.1},"slide-right"),[x,h]=(0,r.A)({threshold:.1},"slide-left");return(0,t.jsxs)("section",{className:"relative flex flex-col justify-center items-center z-[1]",children:[(0,t.jsxs)("h1",{ref:l,className:"slide-top-pre ".concat(a," heading-text mb-16"),children:[s.our,(0,t.jsxs)("span",{className:"text-logo-purple",children:[" ",s.h]})]}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row flex-wrap justify-center items-center gap-12",children:[(0,t.jsx)("div",{className:"transition-transform duration-500 hover:scale-105",children:(0,t.jsxs)("div",{ref:n,className:"slide-right-pre ".concat(i," value-card bg-resilience"),children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:s.h1}),(0,t.jsx)("p",{className:"",children:s.p1})]})}),(0,t.jsx)("div",{className:"transition-transform duration-500 hover:scale-105",children:(0,t.jsxs)("div",{ref:c,className:"slide-left-pre ".concat(d," lg:delay-200 bg-support value-card bg-top"),children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:s.h2}),(0,t.jsx)("p",{children:s.p2})]})}),(0,t.jsx)("div",{className:"transition-transform duration-500 hover:scale-105",children:(0,t.jsxs)("div",{ref:o,className:"slide-right-pre ".concat(m," lg:delay-400 bg-integrity value-card"),children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:s.h3}),(0,t.jsx)("p",{children:s.p3})]})}),(0,t.jsx)("div",{className:"transition-transform duration-500 hover:scale-105",children:(0,t.jsxs)("div",{ref:x,className:"slide-left-pre ".concat(h," lg:delay-600 bg-health value-card"),children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:s.h4}),(0,t.jsx)("p",{children:s.p4})]})})]}),(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 -top-0 lg:-top-64 -z-10",children:(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4 min-w-32 min-h-32"})})})})})}),(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 -bottom-36 -z-10",children:(0,t.jsx)("div",{className:"border-4 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-2 border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4",children:(0,t.jsx)("div",{className:"border-[1px] border-gold rounded-md p-4 min-w-32 min-h-32"})})})})})})]})}},6751:(e,s,l)=>{l.d(s,{default:()=>a});var t=l(5155);l(2115);var r=l(6745);let a=e=>{let{t:s}=e;s=s.vision;let[l,a]=(0,r.A)({threshold:.1},"slide-top"),[n,i]=(0,r.A)({threshold:.1},"slide-top");return(0,t.jsxs)("section",{className:"relative flex flex-col-reverse lg:flex-row justify-center items-center",children:[(0,t.jsx)("div",{className:"flex-1 relative",children:(0,t.jsx)("img",{className:"object-cover min-w-full",src:"/images/tara_deadlift.png",alt:"Clan powerlifting kluba Galacticos radi mrtvo dizanje na natjecanju"})}),(0,t.jsx)("div",{className:"flex-1 flex flex-col justify-center items-center",children:(0,t.jsxs)("div",{className:"px-4 py-24",children:[(0,t.jsxs)("h1",{ref:l,className:"slide-top-pre ".concat(a," heading-text"),children:[s.our," ",(0,t.jsx)("span",{className:"text-logo-yellow",children:s.h})]}),(0,t.jsx)("p",{ref:n,className:"slide-top-pre ".concat(i," text-lg max-w-md mt-6"),children:s.p})]})})]})}}}]);