(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},3487:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_ec52ed', '__Playfair_Display_Fallback_ec52ed'"},className:"__className_ec52ed"}},7632:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_a72228', '__Playfair_Display_Fallback_a72228'",fontStyle:"italic"},className:"__className_a72228"}},85:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_a72228', '__Playfair_Display_Fallback_a72228'",fontStyle:"italic"},className:"__className_a72228"}},1884:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_d04055', '__Playfair_Display_Fallback_d04055'",fontWeight:400,fontStyle:"italic"},className:"__className_d04055"}},4716:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_ec52ed', '__Playfair_Display_Fallback_ec52ed'"},className:"__className_ec52ed"}},9061:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_650203', '__Playfair_Display_Fallback_650203'"},className:"__className_650203"}},5:e=>{e.exports={style:{fontFamily:"'__Playfair_Display_c0d8ac', '__Playfair_Display_Fallback_c0d8ac'",fontStyle:"italic"},className:"__className_c0d8ac"}},8513:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),i(3045),i(4732),i(5866);var a=i(3191),r=i(8716),n=i(7922),o=i.n(n),s=i(5231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);i.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,3045)),"/Users/akash/Documents/vs/viruthi/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,4732)),"/Users/akash/Documents/vs/viruthi/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/akash/Documents/vs/viruthi/app/page.tsx"],p="/page",x={require:i,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5787:(e,t,i)=>{Promise.resolve().then(i.bind(i,6685)),Promise.resolve().then(i.bind(i,1235)),Promise.resolve().then(i.bind(i,5266)),Promise.resolve().then(i.bind(i,8573)),Promise.resolve().then(i.bind(i,9889)),Promise.resolve().then(i.bind(i,7150)),Promise.resolve().then(i.bind(i,3400))},6685:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var a=i(326),r=i(3487),n=i.n(r),o=i(7577),s=i(4682),l=i(9086);let c=[.16,1,.3,1];function d(){let[e,t]=(0,o.useState)(1),[i,r]=(0,o.useState)({firstName:"",lastName:"",email:"",phone:"",topic:"",subject:"",message:""});return 4===e?a.jsx("section",{id:"contact",style:{width:"100%",background:"#FFFFFF",padding:"160px 5vw",display:"flex",justifyContent:"center",borderTop:"1px solid rgba(13,13,13,0.08)"},children:(0,a.jsxs)(s.E.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:c},style:{background:"#FAFAFA",padding:"100px 40px",borderRadius:"24px",maxWidth:"640px",width:"100%",textAlign:"center",border:"1px solid rgba(13,13,13,0.05)"},children:[a.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"#FFFFFF",border:"1px solid rgba(13,13,13,0.08)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 40px",boxShadow:"0 10px 30px rgba(0,0,0,0.02)"},children:a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#D2B48C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),(0,a.jsxs)("h2",{className:n().className,style:{fontSize:"clamp(36px, 5vw, 56px)",fontWeight:400,color:"#0D0D0D",marginBottom:"24px",lineHeight:1.1,letterSpacing:"-0.02em"},children:["Message Sent",a.jsx("br",{}),"Successfully"]}),(0,a.jsxs)("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"18px",fontWeight:300,color:"rgba(13,13,13,0.6)",lineHeight:1.6,marginBottom:"48px",maxWidth:"400px",margin:"0 auto 48px"},children:["Thank you for reaching out, ",i.firstName||"there",". We have received your message and will get back to you within 24-48 hours."]}),a.jsx("button",{onClick:()=>{r({firstName:"",lastName:"",email:"",phone:"",topic:"",subject:"",message:""}),t(1)},style:{padding:"18px 40px",background:"transparent",border:"1px solid #0D0D0D",color:"#0D0D0D",borderRadius:"999px",fontFamily:"var(--font-satoshi)",fontSize:"14px",fontWeight:500,letterSpacing:"0.05em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.4s ease"},onMouseOver:e=>{e.currentTarget.style.background="#0D0D0D",e.currentTarget.style.color="#FFFFFF"},onMouseOut:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.color="#0D0D0D"},children:"Send Another Message"})]})}):(0,a.jsxs)("section",{id:"contact",style:{width:"100%",background:"#FFFFFF",borderTop:"1px solid rgba(13,13,13,0.08)",position:"relative"},children:[a.jsx("div",{style:{width:"100%",padding:"120px 5vw 80px",borderBottom:"1px solid rgba(13,13,13,0.08)"},children:(0,a.jsxs)("div",{style:{maxWidth:"1440px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"64px",alignItems:"flex-start"},children:[(0,a.jsxs)("div",{children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:600,letterSpacing:"0.2em",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"24px",display:"block"},children:"Viruthi Centre \xb7 Est. 2024"}),(0,a.jsxs)("h2",{style:{fontSize:"clamp(48px, 6vw, 80px)",fontWeight:400,color:"#0D0D0D",margin:"0 0 24px",lineHeight:1.1,letterSpacing:"-0.02em"},children:["Let's ",a.jsx("span",{className:n().className,style:{fontStyle:"italic",color:"#0D0D0D"},children:"connect"})]}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"clamp(18px, 2vw, 22px)",fontWeight:300,color:"rgba(13,13,13,0.6)",margin:0},children:"Three quick steps and we'll get back to you within 24 hours."})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[(0,a.jsxs)("div",{style:{padding:"24px 32px",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",display:"flex",alignItems:"center",gap:"24px",transition:"all 0.3s ease",cursor:"pointer"},onMouseOver:e=>e.currentTarget.style.borderColor="rgba(13,13,13,0.3)",onMouseOut:e=>e.currentTarget.style.borderColor="rgba(13,13,13,0.1)",children:[a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"1.5",children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),(0,a.jsxs)("div",{children:[a.jsx("div",{style:{fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.5)",marginBottom:"4px"},children:"Call Us"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:500,color:"#0D0D0D"},children:"+91 98400 00000"})]})]}),(0,a.jsxs)("div",{style:{padding:"24px 32px",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",display:"flex",alignItems:"center",gap:"24px",transition:"all 0.3s ease",cursor:"pointer"},onMouseOver:e=>e.currentTarget.style.borderColor="rgba(13,13,13,0.3)",onMouseOut:e=>e.currentTarget.style.borderColor="rgba(13,13,13,0.1)",children:[(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"1.5",children:[a.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.jsx("polyline",{points:"22,6 12,13 2,6"})]}),(0,a.jsxs)("div",{children:[a.jsx("div",{style:{fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.5)",marginBottom:"4px"},children:"Email Us"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:500,color:"#0D0D0D"},children:"hello@viruthi.org"})]})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[(0,a.jsxs)("a",{href:"#",style:{padding:"24px 16px",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",transition:"all 0.3s ease",cursor:"pointer",color:"#0D0D0D",textDecoration:"none",background:"#FFFFFF"},onMouseOver:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.3)",e.currentTarget.style.transform="translateY(-2px)"},onMouseOut:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.1)",e.currentTarget.style.transform="translateY(0)"},children:[(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),a.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),a.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.6)"},children:"LinkedIn"})]}),(0,a.jsxs)("a",{href:"#",style:{padding:"24px 16px",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",transition:"all 0.3s ease",cursor:"pointer",color:"#0D0D0D",textDecoration:"none",background:"#FFFFFF"},onMouseOver:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.3)",e.currentTarget.style.transform="translateY(-2px)"},onMouseOut:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.1)",e.currentTarget.style.transform="translateY(0)"},children:[(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),a.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),a.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.6)"},children:"Instagram"})]}),(0,a.jsxs)("a",{href:"#",style:{padding:"24px 16px",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",transition:"all 0.3s ease",cursor:"pointer",color:"#0D0D0D",textDecoration:"none",background:"#FFFFFF"},onMouseOver:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.3)",e.currentTarget.style.transform="translateY(-2px)"},onMouseOut:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.1)",e.currentTarget.style.transform="translateY(0)"},children:[(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"}),a.jsx("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"})]}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.6)"},children:"YouTube"})]})]})]})]})}),a.jsx("style",{children:`
        .contact-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
        }
        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
          }
        }
        
        /* Stepper Styles */
        .stepper-col {
          flex: 0 0 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 80px 0;
          background: #FFFFFF;
          border-right: 1px solid rgba(13,13,13,0.08);
        }
        @media (max-width: 900px) {
          .stepper-col {
            flex-direction: row;
            justify-content: space-between;
            flex: none;
            width: 100%;
            padding: 40px 5vw;
            border-right: none;
            border-bottom: 1px solid rgba(13,13,13,0.08);
          }
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          padding: 16px 0;
        }
        @media (max-width: 900px) {
          .step-item { padding: 0 16px; }
        }

        .step-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 500;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 16px;
        }
        .step-circle.active {
          background: #0D0D0D;
          color: #FFFFFF;
          border: 1px solid #0D0D0D;
          box-shadow: 0 8px 24px rgba(13,13,13,0.2);
        }
        .step-circle.completed {
          background: #FFFFFF;
          color: #0D0D0D;
          border: 1px solid rgba(13,13,13,0.3);
        }
        .step-circle.inactive {
          background: transparent;
          color: rgba(13,13,13,0.4);
          border: 1px solid rgba(13,13,13,0.15);
        }

        .step-label {
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-align: center;
          transition: all 0.4s ease;
          line-height: 1.4;
        }
        .step-label.active { color: #0D0D0D; }
        .step-label.completed { color: #0D0D0D; }
        .step-label.inactive { color: rgba(13,13,13,0.3); }

        /* Vertical Connector Line */
        .stepper-line {
          position: absolute;
          top: 80px;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: rgba(13,13,13,0.1);
          z-index: 1;
        }
        @media (max-width: 900px) {
          .stepper-line {
            top: 68px;
            left: 5vw;
            right: 5vw;
            bottom: auto;
            width: auto;
            height: 1px;
            transform: none;
          }
        }

        /* Form Area */
        .form-col {
          flex: 1;
          padding: 80px 10%;
          min-height: 600px;
        }
        @media (max-width: 900px) {
          .form-col { padding: 60px 5vw; }
        }
        
        .form-title {
          font-family: var(--font-satoshi);
          font-size: clamp(28px, 3vw, 36px);
          color: #0D0D0D;
          margin-bottom: 8px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .form-subtitle {
          font-family: var(--font-satoshi);
          font-size: 18px;
          fontWeight: 300;
          color: rgba(13,13,13,0.6);
          margin-bottom: 64px;
        }

        .input-group {
          margin-bottom: 32px;
        }
        .input-label {
          display: block;
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: rgba(13,13,13,0.5);
          margin-bottom: 12px;
        }
        .form-input, .form-textarea {
          width: 100%;
          padding: 20px 24px;
          background: #FFFFFF;
          border: 1px solid rgba(13,13,13,0.15);
          border-radius: 12px;
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 400;
          color: #0D0D0D;
          transition: all 0.4s ease;
          outline: none;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #0D0D0D;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(13,13,13,0.3);
          font-weight: 300;
        }
        .form-textarea {
          min-height: 200px;
          resize: vertical;
        }

        /* Topic Cards */
        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .topic-card {
          padding: 24px 32px;
          border-radius: 12px;
          border: 1px solid rgba(13,13,13,0.15);
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .topic-card:hover {
          border-color: rgba(13,13,13,0.3);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .topic-card.selected {
          border-color: #0D0D0D;
          background: #FFFFFF;
          box-shadow: 0 8px 30px rgba(13,13,13,0.06);
        }
        .topic-card.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #FFFFFF;
        }
        .topic-card.disabled:hover {
          border-color: rgba(13,13,13,0.15);
          box-shadow: none;
        }
        
        .topic-radio {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .topic-card.selected .topic-radio {
          border-color: #0D0D0D;
        }
        .topic-card.selected .topic-radio::after {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #0D0D0D;
        }

        /* Buttons */
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid rgba(13,13,13,0.08);
        }
        .btn-back {
          background: transparent;
          border: none;
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: color 0.3s ease;
        }
        .btn-back:hover { color: #0D0D0D; }
        
        .btn-next {
          background: #0D0D0D;
          color: #FFFFFF;
          border: none;
          padding: 18px 40px;
          border-radius: 999px;
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s ease;
        }
        .btn-next:hover {
          background: #222222;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          transform: translateY(-2px);
        }
      `}),(0,a.jsxs)("div",{className:"contact-container",children:[(0,a.jsxs)("div",{className:"stepper-col",children:[a.jsx("div",{className:"stepper-line"}),(0,a.jsxs)("div",{className:"step-item",style:{marginBottom:"12vh"},children:[a.jsx("div",{className:`step-circle ${1===e?"active":e>1?"completed":"inactive"}`,children:e>1?a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}):"1"}),(0,a.jsxs)("div",{className:`step-label ${1===e?"active":e>1?"completed":"inactive"}`,children:["WHO",a.jsx("br",{}),"YOU ARE"]})]}),(0,a.jsxs)("div",{className:"step-item",style:{marginBottom:"12vh"},children:[a.jsx("div",{className:`step-circle ${2===e?"active":e>2?"completed":"inactive"}`,children:e>2?a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}):"2"}),(0,a.jsxs)("div",{className:`step-label ${2===e?"active":e>2?"completed":"inactive"}`,children:["YOUR",a.jsx("br",{}),"TOPIC"]})]}),(0,a.jsxs)("div",{className:"step-item",children:[a.jsx("div",{className:`step-circle ${3===e?"active":"inactive"}`,children:"3"}),(0,a.jsxs)("div",{className:`step-label ${3===e?"active":"inactive"}`,children:["YOUR",a.jsx("br",{}),"MESSAGE"]})]})]}),(0,a.jsxs)("div",{className:"form-col",children:[(0,a.jsxs)(l.M,{mode:"wait",children:[1===e&&(0,a.jsxs)(s.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.5,ease:c},children:[a.jsx("h2",{className:"form-title",children:"Tell us who you are"}),a.jsx("p",{className:"form-subtitle",children:"We'll use this to personalise our response."}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px"},children:[(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"First Name"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Jane",value:i.firstName,onChange:e=>r({...i,firstName:e.target.value})})]}),(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"Last Name"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Doe",value:i.lastName,onChange:e=>r({...i,lastName:e.target.value})})]}),(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"Email"}),a.jsx("input",{type:"email",className:"form-input",placeholder:"you@example.com",value:i.email,onChange:e=>r({...i,email:e.target.value})})]}),(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"Phone"}),a.jsx("input",{type:"tel",className:"form-input",placeholder:"+91 98400 00000",value:i.phone,onChange:e=>r({...i,phone:e.target.value})})]})]})]},"step1"),2===e&&(0,a.jsxs)(s.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.5,ease:c},children:[a.jsx("h2",{className:"form-title",children:"Tell us your topic"}),a.jsx("p",{className:"form-subtitle",children:"What do you need help with?"}),(0,a.jsxs)("div",{className:"topic-grid",children:[(0,a.jsxs)("div",{className:`topic-card ${"Family Legal Services"===i.topic?"selected":""}`,onClick:()=>r({...i,topic:"Family Legal Services"}),children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"18px",fontWeight:500,color:"#0D0D0D"},children:"Family Legal Services"}),a.jsx("div",{className:"topic-radio"})]}),(0,a.jsxs)("div",{className:`topic-card ${"Relationship Counselling"===i.topic?"selected":""}`,onClick:()=>r({...i,topic:"Relationship Counselling"}),children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"18px",fontWeight:500,color:"#0D0D0D"},children:"Relationship Counselling"}),a.jsx("div",{className:"topic-radio"})]}),(0,a.jsxs)("div",{className:"topic-card disabled",children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"18px",fontWeight:500,color:"#0D0D0D"},children:"Coming Soon..."}),a.jsx("div",{className:"topic-radio"})]})]})]},"step2"),3===e&&(0,a.jsxs)(s.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.5,ease:c},children:[a.jsx("h2",{className:"form-title",children:"Tell us more"}),a.jsx("p",{className:"form-subtitle",children:"Share your message and we'll get back to you as soon as possible."}),(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"Subject"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"What is this regarding?",value:i.subject,onChange:e=>r({...i,subject:e.target.value})})]}),(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("label",{className:"input-label",children:"Message"}),a.jsx("textarea",{className:"form-textarea",placeholder:"Please describe your query in detail...",value:i.message,onChange:e=>r({...i,message:e.target.value})})]}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"14px",fontStyle:"italic",color:"rgba(13,13,13,0.5)",marginTop:"16px"},children:"We usually respond within 24–48 hours."})]},"step3")]}),(0,a.jsxs)("div",{className:"form-footer",children:[a.jsx("div",{style:{flex:1},children:e>1&&(0,a.jsxs)("button",{className:"btn-back",onClick:()=>{e>1&&t(e-1)},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]})}),(0,a.jsxs)("div",{style:{fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(13,13,13,0.3)",textAlign:"center",flex:1},children:["Step ",e," of 3"]}),a.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:(0,a.jsxs)("button",{className:"btn-next",onClick:()=>{e<3?t(e+1):t(4)},children:[3===e?"Send Message":"Next Step",a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})]})]})}},1235:(e,t,i)=>{"use strict";i.d(t,{default:()=>p});var a=i(326),r=i(7632),n=i.n(r),o=i(7577),s=i(8192),l=i(4682);let c=[.16,1,.3,1],d=[{num:"01",tag:"PARTNERSHIP",title:"Happy couples create happy families.",desc:"The foundation of a thriving home begins with the partnership at its core. When partners heal and connect, their emotional security radiates outward to fill the entire household."},{num:"02",tag:"ENVIRONMENT",title:"Happy families raise happy children.",desc:"Children absorb the emotional climate of their environment. A secure, loving family naturally fosters resilience, confidence, and profound joy in the next generation."},{num:"03",tag:"DEVELOPMENT",title:"Happy children become healthy adults.",desc:"Early emotional safety forms the blueprint for lifelong mental health. Nurtured children grow into adults capable of deep connection, empathy, and remarkable self-awareness."},{num:"04",tag:"SOCIETY",title:"Healthy adults build flourishing communities.",desc:"Healing is exponential. Emotionally grounded individuals carry their strength into society, creating a ripple effect that builds a culture of collective flourishing."}];function p(){let e=(0,o.useRef)(null),t=(0,s.Y)(e,{once:!0,margin:"-15%"});return a.jsx("section",{id:"mission",ref:e,style:{width:"100%",minHeight:"100vh",background:"#FFFFFF",padding:"120px 5vw",display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,a.jsxs)("div",{style:{maxWidth:"1440px",width:"100%",margin:"0 auto"},children:[(0,a.jsxs)("div",{style:{marginBottom:"80px"},children:[a.jsx(l.E.span,{initial:{opacity:0,y:15},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,ease:c},style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:400,letterSpacing:"0.3em",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",display:"block",marginBottom:"16px"},children:"OPERATING VALUES"}),a.jsx(l.E.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.1,ease:c},className:n().className,style:{fontSize:"clamp(40px, 6vw, 72px)",fontWeight:400,letterSpacing:"-0.02em",color:"#0D0D0D",margin:0,lineHeight:1.1,marginBottom:"32px"},children:"Our mission"}),a.jsx(l.E.div,{initial:{scaleX:0},animate:t?{scaleX:1}:{},transition:{duration:1.2,delay:.2,ease:c},style:{width:"80px",height:"1px",background:"rgba(13,13,13,0.15)",transformOrigin:"left",marginBottom:"40px"}}),a.jsx(l.E.p,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.3,ease:c},className:n().className,style:{fontSize:"clamp(20px, 2vw, 26px)",color:"rgba(13,13,13,0.8)",margin:0,maxWidth:"800px",lineHeight:1.6},children:"India has nearly 35 crore households. My mission is to help 10 crore families build healthier, happier relationships — because when families flourish, the entire nation flourishes."})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1px",background:"rgba(13,13,13,0.08)",border:"1px solid rgba(13,13,13,0.08)"},children:d.map((e,i)=>(0,a.jsxs)(l.E.div,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.4+.1*i,ease:c},style:{background:"#FFFFFF",padding:"48px 32px",display:"flex",flexDirection:"column",height:"100%",position:"relative",overflow:"hidden",cursor:"none",transition:"background 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.background="#F5F4F2"},onMouseLeave:e=>{e.currentTarget.style.background="#FFFFFF"},children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"48px"},children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:500,color:"rgba(13,13,13,0.5)"},children:e.num}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"9px",fontWeight:500,letterSpacing:"0.25em",color:"rgba(13,13,13,0.3)"},children:e.tag})]}),a.jsx("h3",{className:n().className,style:{fontSize:"clamp(20px, 1.8vw, 24px)",fontWeight:400,color:"#0D0D0D",lineHeight:1.3,marginBottom:"24px",letterSpacing:"0.01em"},children:e.title}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"13px",fontWeight:400,lineHeight:1.8,color:"rgba(13,13,13,0.65)",margin:0,marginTop:"auto"},children:e.desc})]},e.num))}),(0,a.jsxs)(l.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.8,ease:c},style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px",marginTop:"40px"},children:[a.jsx("span",{className:n().className,style:{fontSize:"18px",color:"rgba(13,13,13,0.7)",maxWidth:"500px",lineHeight:1.5},children:"A vision of this magnitude requires collective effort and shared purpose."}),a.jsx("button",{style:{background:"transparent",color:"#0D0D0D",border:"1px solid rgba(13,13,13,0.2)",padding:"16px 40px",fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",cursor:"none",transition:"border-color 0.2s ease, background 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.6)",e.currentTarget.style.background="rgba(13,13,13,0.05)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.2)",e.currentTarget.style.background="transparent"},children:"Be part of this mission"})]})]})})}},5266:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var a=i(326),r=i(85),n=i.n(r),o=i(7577),s=i(8192),l=i(4682);let c=[.16,1,.3,1];function d(){let e=(0,o.useRef)(null),t=(0,s.Y)(e,{once:!0,margin:"-20%"});return a.jsx("section",{id:"philosophy",ref:e,style:{width:"100%",minHeight:"80vh",background:"#FFFFFF",padding:"120px 5vw",display:"flex",alignItems:"center",borderTop:"1px solid rgba(13,13,13,0.08)"},children:(0,a.jsxs)("div",{style:{maxWidth:"1440px",width:"100%",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"8vw",position:"relative"},children:[a.jsx("style",{children:`
          .desktop-divider { display: none; }
          @media (min-width: 768px) {
            .desktop-divider { display: block; }
          }
        `}),a.jsx(l.E.div,{className:"desktop-divider",initial:{scaleY:0},animate:t?{scaleY:1}:{},transition:{duration:1.4,delay:.2,ease:c},style:{position:"absolute",left:"50%",top:"0",bottom:"0",width:"1px",background:"linear-gradient(to bottom, rgba(13,13,13,0) 0%, rgba(13,13,13,0.12) 20%, rgba(13,13,13,0.12) 80%, rgba(13,13,13,0) 100%)",transformOrigin:"top"}}),(0,a.jsxs)(l.E.div,{initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.1,ease:c},style:{display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{width:"40px",height:"1px",background:"rgba(13,13,13,0.2)",marginBottom:"32px"}}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:400,letterSpacing:"0.3em",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"16px"},children:"PHILOSOPHY"}),a.jsx("h2",{className:n().className,style:{fontSize:"clamp(32px, 4vw, 56px)",fontWeight:400,letterSpacing:"-0.02em",color:"#0D0D0D",margin:0,lineHeight:1.1,marginBottom:"40px"},children:"Philosophy"}),a.jsx("h3",{className:n().className,style:{fontSize:"clamp(20px, 2vw, 28px)",fontWeight:400,color:"#0D0D0D",margin:0,lineHeight:1.4,marginBottom:"24px",letterSpacing:"0.01em"},children:"Connection thrives where understanding begins."}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"15px",fontWeight:300,lineHeight:1.8,color:"rgba(13,13,13,0.75)",margin:0,maxWidth:"90%"},children:"I believe in creating safe spaces where vulnerability is honoured and every emotion is valid. True healing happens when we stop trying to fix each other and start trying to understand each other."}),a.jsx("button",{style:{marginTop:"40px",alignSelf:"flex-start",background:"transparent",color:"#0D0D0D",border:"1px solid rgba(13,13,13,0.2)",padding:"16px 40px",fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",cursor:"none",transition:"border-color 0.2s ease, background 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.5)",e.currentTarget.style.background="rgba(13,13,13,0.05)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.2)",e.currentTarget.style.background="transparent"},children:"See it in action"})]}),(0,a.jsxs)(l.E.div,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.3,ease:c},style:{display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{width:"40px",height:"1px",background:"rgba(13,13,13,0.2)",marginBottom:"32px"}}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:400,letterSpacing:"0.3em",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"16px"},children:"PROCESS"}),a.jsx("h2",{className:n().className,style:{fontSize:"clamp(32px, 4vw, 56px)",fontWeight:400,letterSpacing:"-0.02em",color:"#0D0D0D",margin:0,lineHeight:1.1,marginBottom:"40px"},children:"Approach"}),a.jsx("h3",{className:n().className,style:{fontSize:"clamp(20px, 2vw, 28px)",fontWeight:400,color:"#0D0D0D",margin:0,lineHeight:1.4,marginBottom:"24px",letterSpacing:"0.01em"},children:"In relationships, logic rarely heals disconnection. Emotions do."}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"15px",fontWeight:300,lineHeight:1.8,color:"rgba(13,13,13,0.75)",margin:0,maxWidth:"90%"},children:"My work uses an emotion-focused, trauma-informed approach to help couples understand each other's deeper emotional needs and rebuild secure bonds — slowly, honestly, with care."}),a.jsx("button",{style:{marginTop:"40px",alignSelf:"flex-start",background:"transparent",color:"#0D0D0D",border:"1px solid rgba(13,13,13,0.2)",padding:"16px 40px",fontFamily:"var(--font-satoshi)",fontSize:"11px",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",cursor:"none",transition:"border-color 0.2s ease, background 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.5)",e.currentTarget.style.background="rgba(13,13,13,0.05)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="rgba(13,13,13,0.2)",e.currentTarget.style.background="transparent"},children:"Explore our methods"})]})]})})}},8573:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var a=i(326),r=i(1884),n=i.n(r),o=i(7577),s=i(6026),l=i(2734),c=i(4682);function d(){let e=[.16,1,.3,1],t=(0,o.useRef)(null),[i,r]=(0,o.useState)(!1),{scrollYProgress:d}=(0,s.v)({target:t,offset:["start start","end start"]}),p=(0,l.H)(d,[0,1],[0,-60]),x=(0,l.H)(d,[0,.6],[1,0]),h=(0,l.H)(d,[0,.5],[0,1]);return(0,a.jsxs)("section",{id:"hero",ref:t,style:{position:"relative",width:"100%",height:"100vh",background:"var(--page-bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[a.jsx("style",{children:`
        @media (max-width: 768px) {
          #hero-description {
            display: none !important;
          }
          #hero-scroll {
            display: none !important;
          }
          #hero-cta-wrapper {
            bottom: 40px !important;
            right: 50% !important;
            transform: translateX(50%) !important;
            align-items: center !important;
            text-align: center !important;
          }
          #hero-tagline {
            text-align: center !important;
          }
        }
      `}),(0,a.jsxs)(c.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,delay:.35,ease:e},style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"-4vh",y:p,opacity:x},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"18px"},children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:400,letterSpacing:"0.25em",color:"rgba(13,13,13,0.50)",lineHeight:1.4,textAlign:"center",display:"block",textTransform:"uppercase"},children:"Centre for Flourishing Families"}),a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"10px",fontWeight:400,letterSpacing:"0.25em",color:"rgba(13,13,13,0.50)",lineHeight:1.4,textAlign:"center",display:"block",textTransform:"uppercase"},children:"Estd. with Intent"})]}),(0,a.jsxs)("div",{style:{position:"relative",width:"100%"},children:[a.jsx("h1",{id:"hero-headline",className:n().className,style:{fontSize:"20.5vw",fontWeight:400,fontStyle:"italic",letterSpacing:"-0.02em",lineHeight:.9,color:"#0D0D0D",width:"100%",margin:0,padding:0,textAlign:"center",whiteSpace:"nowrap",position:"relative",zIndex:1},"aria-label":"viruthi.",children:"viruthi.".split("").map((t,i)=>a.jsx(c.E.span,{initial:{opacity:0,rotateZ:-8,y:60,scale:.95},animate:{opacity:1,rotateZ:0,y:0,scale:1},transition:{duration:1.2,ease:e,delay:.25+.08*i},style:{display:"inline-block",transformOrigin:"bottom left"},children:t},i))}),a.jsx(c.E.div,{"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:2,opacity:h,background:"linear-gradient(135deg, rgba(13,13,13,0.0) 0%, rgba(13,13,13,0.05) 40%, rgba(255,255,255,0.6) 100%)",mixBlendMode:"screen",pointerEvents:"none"}})]})]}),a.jsx(c.E.p,{id:"hero-description",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.9,delay:.85,ease:e},style:{position:"absolute",bottom:"80px",left:"48px",fontFamily:"var(--font-satoshi)",fontSize:"17px",fontWeight:300,lineHeight:1.8,color:"var(--ink)",opacity:.65,maxWidth:"320px",margin:0,transition:"opacity 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.opacity="0.9",onMouseLeave:e=>e.currentTarget.style.opacity="0.65",children:"Where relationships are tended like gardens — patiently, attentively, with care."}),(0,a.jsxs)(c.E.div,{id:"hero-scroll",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:1.1,ease:e},style:{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[a.jsx("span",{style:{fontFamily:"var(--font-satoshi)",fontSize:"9px",fontWeight:400,letterSpacing:"0.3em",color:"var(--ink)",opacity:.3,textTransform:"uppercase"},children:"Scroll"}),a.jsx("div",{style:{position:"relative",width:"1px",height:"40px",background:"rgba(13,13,13,0.12)",overflow:"hidden"},children:a.jsx(c.E.div,{animate:{y:["-100%","100%"]},transition:{duration:1.4,ease:"easeInOut",repeat:1/0,repeatDelay:.2},style:{position:"absolute",top:0,left:0,width:"1px",height:"50%",background:"rgba(13,13,13,0.5)"}})})]}),(0,a.jsxs)(c.E.div,{id:"hero-cta-wrapper",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.9,delay:1,ease:e},style:{position:"absolute",bottom:"72px",right:"48px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"16px"},children:[(0,a.jsxs)("p",{id:"hero-tagline",style:{fontFamily:"var(--font-satoshi)",fontSize:"16px",fontWeight:300,lineHeight:1.6,letterSpacing:"0.01em",color:"rgba(13,13,13,0.7)",margin:0,textAlign:"right",maxWidth:"260px",transition:"opacity 0.3s ease"},children:["Begin your journey",a.jsx("br",{}),"back to each other"]}),(0,a.jsxs)("button",{id:"hero-connect-btn",onClick:()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"}),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{fontFamily:"var(--font-satoshi)",fontSize:"12px",fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase",color:i?"#ffffff":"#0D0D0D",background:i?"#0D0D0D":"transparent",border:"1px solid rgba(13,13,13,0.4)",borderColor:i?"#0D0D0D":"rgba(13,13,13,0.4)",borderRadius:"999px",padding:"10px 24px",cursor:"none",transition:"color 0.35s ease, background 0.35s ease, border-color 0.35s ease, padding 0.35s ease",lineHeight:1,display:"flex",alignItems:"center",gap:"8px"},children:["Connect",a.jsx(c.E.span,{animate:{opacity:i?1:0,x:i?0:-6},transition:{duration:.25,ease:"easeOut"},style:{display:"inline-block",fontSize:"11px",lineHeight:1},children:"→"})]})]})]})}},9889:(e,t,i)=>{"use strict";i.d(t,{default:()=>l});var a=i(326),r=i(4716),n=i.n(r),o=i(4682);let s=[.16,1,.3,1];function l(){return(0,a.jsxs)("section",{id:"services",style:{width:"100%",background:"#FFFFFF",padding:"160px 5vw",position:"relative"},children:[(0,a.jsxs)("div",{style:{maxWidth:"1440px",margin:"0 auto 80px",textAlign:"center"},children:[a.jsx(o.E.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:s},className:n().className,style:{fontSize:"clamp(48px, 6vw, 80px)",fontWeight:400,color:"#0D0D0D",marginBottom:"24px",lineHeight:1.1,letterSpacing:"-0.02em"},children:"What we offer."}),a.jsx(o.E.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:s,delay:.1},style:{fontFamily:"var(--font-satoshi)",fontSize:"clamp(18px, 2vw, 24px)",fontWeight:300,color:"rgba(13,13,13,0.6)",maxWidth:"800px",margin:"0 auto",lineHeight:1.5},children:"Two practices, one philosophy. Each begins with listening — to what is said, and what cannot yet be said."})]}),a.jsx("style",{children:`
        .services-grid {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: minmax(0, 1fr); }
        }

        .service-card {
          background: #FAFAFA;
          border: 1px solid rgba(13,13,13,0.08);
          border-radius: 24px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          background: #FFFFFF;
          border-color: rgba(13,13,13,0.15);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          transform: translateY(-4px);
        }
        .service-card.coming-soon {
          opacity: 0.6;
        }
        .service-card.coming-soon:hover {
          transform: none;
          box-shadow: none;
          background: #FAFAFA;
          border-color: rgba(13,13,13,0.08);
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .service-number {
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.4);
        }
        .arrow-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D0D0D;
          transition: all 0.3s ease;
        }
        .service-card:hover .arrow-circle {
          background: #0D0D0D;
          color: #FFFFFF;
          border-color: #0D0D0D;
        }

        .service-title {
          font-size: 32px;
          color: #0D0D0D;
          line-height: 1.2;
          margin-bottom: 24px;
          font-weight: 400;
        }
        .service-desc {
          font-family: var(--font-satoshi);
          font-size: 16px;
          color: rgba(13,13,13,0.6);
          line-height: 1.6;
          margin-bottom: 48px;
          font-weight: 300;
        }

        .practices-label {
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.4);
          margin-bottom: 24px;
        }

        .practice-list {
          list-style: none;
          padding: 0;
          margin: 0 0 48px 0;
          flex: 1;
        }
        .practice-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(13,13,13,0.06);
        }
        .practice-item:last-child {
          border-bottom: none;
        }
        .practice-num {
          font-family: var(--font-satoshi);
          font-size: 11px;
          color: rgba(13,13,13,0.3);
          font-style: italic;
        }
        .practice-text {
          font-family: var(--font-satoshi);
          font-size: 14px;
          color: #0D0D0D;
          line-height: 1.4;
          font-weight: 400;
        }

        .service-btn {
          width: 100%;
          padding: 20px;
          background: transparent;
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0D0D0D;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .service-btn:hover {
          border-color: #0D0D0D;
          background: #FAFAFA;
        }
        .service-btn.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .service-btn.disabled:hover {
          border-color: rgba(13,13,13,0.1);
          background: transparent;
        }
      `}),(0,a.jsxs)("div",{className:"services-grid",children:[(0,a.jsxs)(o.E.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:s},className:"service-card",children:[(0,a.jsxs)("div",{className:"card-top-bar",children:[a.jsx("span",{className:"service-number",children:"Service — 01"}),a.jsx("div",{className:"arrow-circle",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}),(0,a.jsxs)("h3",{className:`service-title ${n().className}`,children:["Relationship &",a.jsx("br",{}),"Couple Coaching"]}),a.jsx("p",{className:"service-desc",children:"Emotion-focused, trauma-informed work for couples and individuals — to heal disconnection, rebuild trust, and create relationships that feel safe, intimate, and alive."}),(0,a.jsxs)("div",{style:{borderTop:"1px solid rgba(13,13,13,0.08)",paddingTop:"32px"},children:[a.jsx("div",{className:"practices-label",children:"Core Practices & Alignments:"}),(0,a.jsxs)("ul",{className:"practice-list",children:[(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"01"}),a.jsx("span",{className:"practice-text",children:"Premarital preparation & alignment"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"02"}),a.jsx("span",{className:"practice-text",children:"Conflict, distance & communication"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"03"}),a.jsx("span",{className:"practice-text",children:"Affair recovery & rebuilding trust"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"04"}),a.jsx("span",{className:"practice-text",children:"Intimacy, sexuality & desire"})]})]})]}),(0,a.jsxs)("button",{className:"service-btn",onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),children:[a.jsx("span",{children:"Schedule Confidential Consultation"}),a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,a.jsxs)(o.E.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:s,delay:.1},className:"service-card",children:[(0,a.jsxs)("div",{className:"card-top-bar",children:[a.jsx("span",{className:"service-number",children:"Service — 02"}),a.jsx("div",{className:"arrow-circle",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}),(0,a.jsxs)("h3",{className:`service-title ${n().className}`,children:["Family Legal",a.jsx("br",{}),"Services"]}),a.jsx("p",{className:"service-desc",children:"Compassionate, confidential legal counsel for matters of the family — handled with discretion, rigor, and a deep respect for the lives involved."}),(0,a.jsxs)("div",{style:{borderTop:"1px solid rgba(13,13,13,0.08)",paddingTop:"32px"},children:[a.jsx("div",{className:"practices-label",children:"Core Practices & Alignments:"}),(0,a.jsxs)("ul",{className:"practice-list",children:[(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"05"}),a.jsx("span",{className:"practice-text",children:"Marriage, separation & divorce"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"06"}),a.jsx("span",{className:"practice-text",children:"Custody, guardianship & maintenance"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"07"}),a.jsx("span",{className:"practice-text",children:"Mediation & out-of-court settlement"})]}),(0,a.jsxs)("li",{className:"practice-item",children:[a.jsx("span",{className:"practice-num",children:"08"}),a.jsx("span",{className:"practice-text",children:"Estate, succession & family agreements"})]})]})]}),(0,a.jsxs)("button",{className:"service-btn",onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),children:[a.jsx("span",{children:"Inquire With Legal Counsel"}),a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,a.jsxs)(o.E.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:s,delay:.2},className:"service-card coming-soon",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",minHeight:"600px"},children:[a.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",border:"1px dashed rgba(13,13,13,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"32px"},children:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(13,13,13,0.3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),a.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),a.jsx("h3",{className:n().className,style:{fontSize:"32px",color:"#0D0D0D",marginBottom:"16px"},children:"Coming Soon"}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"16px",color:"rgba(13,13,13,0.5)",maxWidth:"240px"},children:"A new exclusive service is currently under development."})]})]})]})}},7150:(e,t,i)=>{"use strict";i.d(t,{default:()=>p});var a=i(326),r=i(9061),n=i.n(r),o=i(7577),s=i(6026),l=i(4682),c=i(9086);let d=[{word:"relationship",image:"/1.jpeg?v=2"},{word:"marriage",image:"/2.jpeg?v=2"},{word:"connection",image:"/3.jpeg?v=2"}];function p(){let e=(0,o.useRef)(null),[t,i]=(0,o.useState)(0),{scrollYProgress:r}=(0,s.v)({target:e,offset:["start start","end end"]});return(0,a.jsxs)("div",{ref:e,id:"our-story",style:{height:"300vh",position:"relative"},children:[a.jsx("style",{children:`
        .split-container {
          flex-direction: row;
        }
        .split-left {
          width: 45%;
          padding-left: 80px;
          padding-right: 48px;
        }
        .split-divider {
          width: 1px;
          height: auto;
        }
        .split-right {
          flex: 1;
        }
        @media (max-width: 768px) {
          .split-container {
            flex-direction: column-reverse !important;
          }
          .split-left {
            width: 100% !important;
            height: 50% !important;
            padding: 40px 24px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .split-left h2 {
            text-align: center !important;
            margin-bottom: 16px !important;
          }
          .split-left p {
            text-align: center !important;
          }
          .split-divider {
            width: 100% !important;
            height: 1px !important;
          }
          .split-right {
            width: 100% !important;
            height: 50% !important;
            flex: none !important;
          }
        }
      `}),(0,a.jsxs)("div",{className:"split-container",style:{position:"sticky",top:0,height:"100vh",display:"flex",background:"#FFFFFF",overflow:"hidden"},children:[(0,a.jsxs)("div",{className:"split-left",style:{flexShrink:0,display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",zIndex:2},children:[a.jsx("h2",{className:n().className,style:{fontSize:"clamp(32px, 4vw, 56px)",fontWeight:400,fontStyle:"italic",letterSpacing:"-0.02em",color:"#0D0D0D",margin:0,display:"block",marginBottom:"32px",lineHeight:1.1},children:"Our belief"}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"clamp(20px, 1.6vw, 26px)",fontWeight:300,lineHeight:1.9,color:"rgba(13,13,13,0.85)",maxWidth:"380px",margin:0},children:"Happy couples create happy families. Happy families raise happy children. And emotionally healthy adults build flourishing communities."}),a.jsx("p",{style:{fontFamily:"var(--font-satoshi)",fontSize:"clamp(20px, 1.6vw, 26px)",fontWeight:300,lineHeight:1.9,color:"rgba(13,13,13,0.45)",maxWidth:"380px",margin:0},children:"— this is the thread we follow."})]}),a.jsx("div",{className:"split-divider",style:{background:"rgba(13,13,13,0.08)",flexShrink:0,alignSelf:"stretch"}}),(0,a.jsxs)("div",{className:"split-right",style:{position:"relative",overflow:"hidden"},children:[d.map((e,i)=>a.jsx(l.E.div,{animate:{opacity:i===t?1:0},transition:{duration:.5,ease:"easeInOut"},style:{position:"absolute",inset:0,zIndex:1},children:a.jsx("img",{src:e.image,alt:e.word,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}})},e.image)),a.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.42)",zIndex:2}}),a.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsxs)("div",{style:{textAlign:"center",fontFamily:"var(--font-satoshi)",fontSize:"4vw",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.15,color:"rgba(255,255,255,0.6)",userSelect:"none"},children:[a.jsx("div",{children:"Every"}),a.jsx("div",{style:{position:"relative",height:"1.15em",overflow:"hidden",margin:"0.04em 0"},children:a.jsx(c.M,{mode:"wait",initial:!1,children:a.jsx(l.E.div,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},exit:{opacity:0,y:-22},transition:{duration:.32,ease:"easeInOut"},style:{position:"absolute",width:"100%",textAlign:"center",color:"#ffffff",textShadow:"0 0 40px rgba(255,255,255,0.45), 0 0 80px rgba(255,255,255,0.15)"},children:d[t].word},t)})}),a.jsx("div",{children:"is worth fighting for."})]})}),a.jsx("div",{style:{position:"absolute",bottom:"40px",right:"40px",zIndex:4,display:"flex",flexDirection:"column",gap:"8px"},children:d.map((e,i)=>a.jsx("div",{style:{width:i===t?"32px":"24px",height:"1px",background:i===t?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.2)",transition:"all 0.35s ease"}},i))})]})]})]})}},3400:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var a=i(326),r=i(5),n=i.n(r),o=i(7577),s=i(9086),l=i(4682);let c=[{id:1,number:"01",title:"The Long Search",subtitle:"Exploring Growth & Purpose"},{id:2,number:"02",title:"The Fracture",subtitle:"A Haunting Realisation"},{id:3,number:"03",title:"The Practicalities",subtitle:"Clinical Footsteps"},{id:4,number:"04",title:"The Realisation",subtitle:"Children & Mothers/Fathers"},{id:5,number:"05",title:"The Life's Work",subtitle:"The Flourishing Compass"}];function d(){let[e,t]=(0,o.useState)(1),[i,r]=(0,o.useState)("chaotic");return(0,a.jsxs)("section",{style:{width:"100%",background:"#FFFFFF",padding:"120px 5vw",display:"flex",justifyContent:"center"},children:[a.jsx("style",{children:`
        .ledger-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          gap: 6vw;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .ledger-container {
            flex-direction: column;
          }
        }
        
        .tab-btn {
          width: 100%;
          text-align: left;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid rgba(13,13,13,0.08);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .tab-btn:hover {
          background: rgba(13,13,13,0.02);
        }
        .tab-btn.active {
          background: #F8F3ED; /* Subtle premium beige */
          border-color: #E6D5C3;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        
        .tab-number {
          font-family: var(--font-satoshi);
          font-size: 12px;
          font-weight: 600;
          color: rgba(13,13,13,0.4);
        }
        .tab-btn.active .tab-number {
          color: #0D0D0D;
        }
        
        .tab-title {
          font-family: var(--font-satoshi);
          font-size: 16px;
          font-weight: 500;
          color: rgba(13,13,13,0.6);
          margin-bottom: 4px;
        }
        .tab-btn.active .tab-title {
          color: #0D0D0D;
        }
        
        .tab-subtitle {
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(13,13,13,0.4);
        }
        .tab-btn.active .tab-subtitle {
          color: rgba(13,13,13,0.6);
        }

        .content-panel {
          flex: 1;
          width: 100%;
          min-height: 600px;
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 16px;
          padding: 48px;
          position: relative;
          background: #FFFFFF;
        }
        @media (max-width: 600px) {
          .content-panel {
            padding: 32px 24px;
          }
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(13,13,13,0.1);
          padding-bottom: 24px;
          margin-bottom: 40px;
        }
        .panel-chapter {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: rgba(13,13,13,0.4);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .panel-title {
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 400;
          color: rgba(13,13,13,0.5);
          font-style: italic;
        }

        .corner-bracket {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(13,13,13,0.15);
          border-style: solid;
        }
        .tl { top: 16px; left: 16px; border-width: 1px 0 0 1px; }
        .tr { top: 16px; right: 16px; border-width: 1px 1px 0 0; }
        .bl { bottom: 16px; left: 16px; border-width: 0 0 1px 1px; }
        .br { bottom: 16px; right: 16px; border-width: 0 1px 1px 0; }

        .body-text {
          font-size: clamp(16px, 1.5vw, 18px);
          line-height: 1.8;
          color: rgba(13,13,13,0.8);
          font-weight: 300;
          margin-bottom: 24px;
        }

        /* Unique Elements */
        .info-box {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-top: 48px;
          background: #FAFAFA;
        }
        
        .grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
        }
        .grid-card {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 8px;
          padding: 24px;
          position: relative;
          background: #FAFAFA;
        }
        
        .stat-box {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          padding: 32px;
          margin: 40px 0;
          background: #FAFAFA;
        }

        .covenant-form {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          padding: 32px;
          margin-top: 40px;
          background: #FAFAFA;
        }
        .form-input {
          width: 100%;
          padding: 16px;
          background: transparent;
          border: 1px solid rgba(13,13,13,0.15);
          border-radius: 8px;
          font-family: var(--font-satoshi);
          font-size: 14px;
          margin-bottom: 16px;
          outline: none;
        }
        .form-btn {
          width: 100%;
          padding: 16px;
          background: #0D0D0D;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
        }
      `}),(0,a.jsxs)("div",{className:"ledger-container",children:[(0,a.jsxs)("div",{style:{flex:"0 0 340px"},children:[a.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.2em",fontWeight:600,color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"16px",display:"block"},children:"The Active Story Ledger"}),(0,a.jsxs)("h2",{style:{fontSize:"clamp(32px, 3vw, 42px)",fontWeight:400,color:"#0D0D0D",marginBottom:"16px",lineHeight:1.1,letterSpacing:"-0.02em"},children:["An Inescapable ",a.jsx("span",{className:n().className,children:"Truth"})]}),a.jsx("p",{style:{fontSize:"14px",color:"rgba(13,13,13,0.6)",lineHeight:1.6,marginBottom:"48px"},children:"An experiential chronicle detailing self-development, friends' divorce, psychiatric social practice, and the eventual parent-centered paradigm shift."}),a.jsx("div",{style:{display:"flex",flexDirection:"column"},children:c.map(i=>(0,a.jsxs)("button",{onClick:()=>t(i.id),className:`tab-btn ${e===i.id?"active":""}`,children:[a.jsx("span",{className:"tab-number",children:i.number}),(0,a.jsxs)("div",{children:[a.jsx("div",{className:"tab-title",children:i.title}),a.jsx("div",{className:"tab-subtitle",children:i.subtitle})]})]},i.id))})]}),(0,a.jsxs)("div",{className:"content-panel",children:[a.jsx("div",{className:"corner-bracket tl"}),a.jsx("div",{className:"corner-bracket tr"}),a.jsx("div",{className:"corner-bracket bl"}),a.jsx("div",{className:"corner-bracket br"}),(0,a.jsxs)("div",{className:"panel-header",children:[(0,a.jsxs)("div",{className:"panel-chapter",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),"CHRONICLE CHAPTER ",c.find(t=>t.id===e)?.number]}),a.jsx("div",{className:"panel-title",children:c.find(t=>t.id===e)?.title})]}),a.jsx(s.M,{mode:"wait",children:(0,a.jsxs)(l.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.4},style:{paddingBottom:"80px"},children:[1===e&&(0,a.jsxs)("div",{children:[a.jsx("h3",{className:n().className,style:{fontSize:"clamp(28px, 3vw, 40px)",fontWeight:400,color:"#0D0D0D",marginBottom:"40px",lineHeight:1.3},children:'"I always knew I wanted to work with people, but for a long time I didn\'t know how."'}),a.jsx("p",{className:"body-text",children:"During my college years and the years that followed, I immersed myself deeply in the world of self-help and personal development. For nearly seven years, I was reading books, blogs, and constantly exploring what makes people grow, heal, and live meaningful lives."}),(0,a.jsxs)("div",{className:"info-box",children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(13,13,13,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"2",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})}),(0,a.jsxs)("div",{children:[a.jsx("div",{style:{fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.5)",marginBottom:"4px"},children:"Continuous Horizon"}),a.jsx("div",{style:{fontSize:"14px",color:"#0D0D0D"},children:"Seven years of self-directed research & philosophical inquiry."})]})]})]}),2===e&&(0,a.jsxs)("div",{children:[a.jsx("div",{style:{borderLeft:"3px solid #8B2C2C",paddingLeft:"24px",marginBottom:"40px"},children:a.jsx("h3",{className:n().className,style:{fontSize:"clamp(24px, 2.5vw, 36px)",fontWeight:400,color:"#8B2C2C",margin:0,lineHeight:1.3},children:'"Why are people struggling so much in something that is supposed to be a source of love and joy?"'})}),a.jsx("p",{className:"body-text",children:"Around the same time, two close friends were going through a divorce. Watching people I cared about struggle made me ask a deeper question. Relationships are meant to give us belonging, safety, and companionship. Yet for many people, they become a source of pain and confusion."})]}),3===e&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"body-text",children:["That curiosity slowly became a ",a.jsx("span",{className:n().className,style:{fontStyle:"italic",color:"#0D0D0D"},children:"calling"}),". I enrolled for my Master's in Medical and Psychiatric Social Work at the ",a.jsx("strong",{style:{fontWeight:500},children:"Madras School of Social Work"}),", known for its intensive fieldwork."]}),(0,a.jsxs)("div",{className:"grid-4",children:[(0,a.jsxs)("div",{className:"grid-card",children:[a.jsx("div",{style:{position:"absolute",top:16,right:16,fontSize:"10px",color:"rgba(13,13,13,0.3)"},children:"01"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"Childline (ICCW)"}),a.jsx("div",{style:{fontSize:"12px",color:"rgba(13,13,13,0.6)",lineHeight:1.5},children:"Child protection & clinical field intervention"})]}),(0,a.jsxs)("div",{className:"grid-card",children:[a.jsx("div",{style:{position:"absolute",top:16,right:16,fontSize:"10px",color:"rgba(13,13,13,0.3)"},children:"02"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"I Love Mondays"}),a.jsx("div",{style:{fontSize:"12px",color:"rgba(13,13,13,0.6)",lineHeight:1.5},children:"Howard Gardner's multiple intelligences with preteens"})]}),(0,a.jsxs)("div",{className:"grid-card",children:[a.jsx("div",{style:{position:"absolute",top:16,right:16,fontSize:"10px",color:"rgba(13,13,13,0.3)"},children:"03"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"ICMR Research"}),a.jsx("div",{style:{fontSize:"12px",color:"rgba(13,13,13,0.6)",lineHeight:1.5},children:"PUBG gaming addiction at peak epidemic"})]}),(0,a.jsxs)("div",{className:"grid-card",children:[a.jsx("div",{style:{position:"absolute",top:16,right:16,fontSize:"10px",color:"rgba(13,13,13,0.3)"},children:"04"}),a.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"NIMHANS training"}),a.jsx("div",{style:{fontSize:"12px",color:"rgba(13,13,13,0.6)",lineHeight:1.5},children:"Premier psychiatric care residency & diagnostics"})]})]})]}),4===e&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"body-text",children:["Much of my work in those years was with children. Slowly, a realisation emerged — ",a.jsx("span",{style:{color:"#8B2C2C"},children:"children are deeply affected by the emotional health of their parents"}),". When parents are struggling, disconnected, or unhappy, children inevitably carry that emotional burden."]}),(0,a.jsxs)("div",{style:{margin:"40px 0"},children:[(0,a.jsxs)("div",{style:{display:"flex",background:"transparent",border:"1px solid rgba(13,13,13,0.1)",borderRadius:"999px",padding:"4px",marginBottom:"16px",position:"relative"},children:[a.jsx("div",{style:{position:"absolute",top:"4px",bottom:"4px",left:"chaotic"===i?"4px":"calc(50% + 2px)",width:"calc(50% - 6px)",background:"chaotic"===i?"rgba(13,13,13,0.04)":"#F8F3ED",border:"nurtured"===i?"1px solid #E6D5C3":"1px solid transparent",borderRadius:"999px",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"}}),a.jsx("button",{onClick:()=>r("chaotic"),style:{flex:1,padding:"14px 0",textAlign:"center",fontSize:"11px",fontWeight:600,letterSpacing:"0.15em",color:"chaotic"===i?"#0D0D0D":"rgba(13,13,13,0.4)",background:"none",border:"none",cursor:"pointer",zIndex:1,transition:"color 0.3s ease"},children:"CHAOTIC"}),a.jsx("button",{onClick:()=>r("nurtured"),style:{flex:1,padding:"14px 0",textAlign:"center",fontSize:"11px",fontWeight:600,letterSpacing:"0.15em",color:"nurtured"===i?"#0D0D0D":"rgba(13,13,13,0.4)",background:"none",border:"none",cursor:"pointer",zIndex:1,transition:"color 0.3s ease"},children:"NURTURED"})]}),(0,a.jsxs)("div",{style:{border:"1px solid rgba(13,13,13,0.1)",borderRadius:"16px",padding:"32px 40px",background:"#FAFAFA",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:{textAlign:"center",flex:1},children:[a.jsx("div",{style:{fontSize:"10px",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"8px",letterSpacing:"0.05em"},children:"Parent Stat"}),a.jsx(s.M,{mode:"wait",children:a.jsx(l.E.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},className:n().className,style:{fontSize:"20px",color:"#0D0D0D",fontStyle:"italic"},children:"chaotic"===i?"Dysregulation":"Equilibrium"},i)})]}),a.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center"},children:a.jsx(s.M,{mode:"wait",children:a.jsx(l.E.svg,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.2},width:"64",height:"24",viewBox:"0 0 64 24",fill:"none",stroke:"chaotic"===i?"rgba(13,13,13,0.8)":"#B8A38E",strokeWidth:"1.5",children:"chaotic"===i?a.jsx("path",{d:"M0 12h20l4-10 8 20 6-15 4 5h22",strokeLinejoin:"round"}):a.jsx("path",{d:"M0 12h24l4-4 4 8 4-4h28",strokeLinejoin:"round"})},i)})}),(0,a.jsxs)("div",{style:{textAlign:"center",flex:1},children:[a.jsx("div",{style:{fontSize:"10px",color:"rgba(13,13,13,0.4)",textTransform:"uppercase",marginBottom:"8px",letterSpacing:"0.05em"},children:"Child Stat"}),a.jsx(s.M,{mode:"wait",children:a.jsx(l.E.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},className:n().className,style:{fontSize:"20px",color:"#0D0D0D",fontStyle:"italic"},children:"chaotic"===i?"Carried Burden":"Flourishing Bloom"},i)})]})]})]}),a.jsx("h3",{className:n().className,style:{fontSize:"clamp(20px, 2vw, 28px)",fontWeight:400,fontStyle:"italic",color:"#0D0D0D",margin:0},children:'"If I truly want to help children, I must help their parents."'})]}),5===e&&(0,a.jsxs)("div",{children:[a.jsx("p",{className:"body-text",children:"Couples enter marriage with very little preparation. There is no manual, no structured education about relationships. People often enter with assumptions and expectations, and when reality feels different, they struggle silently. Many couples don't flourish in marriage. They simply endure it."}),(0,a.jsxs)("div",{className:"covenant-form",children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"24px",fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(13,13,13,0.5)"},children:[(0,a.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,a.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M12 20h9"}),a.jsx("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),"Draft the Covenant"]}),a.jsx("span",{children:"Interactive Instrument"})]}),(0,a.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[a.jsx("input",{type:"text",placeholder:"Your Name *",className:"form-input"}),a.jsx("input",{type:"text",placeholder:"Partner Name (Optional)",className:"form-input"})]}),a.jsx("input",{type:"text",placeholder:"Your Commitment Vow (e.g., 10 mins quiet dialogue)",className:"form-input"}),a.jsx("button",{className:"form-btn",children:"COMMIT & SEAL INTENTION"})]})]})]},e)}),(0,a.jsxs)("div",{style:{position:"absolute",bottom:"48px",left:"48px",right:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(13,13,13,0.05)",paddingTop:"24px"},children:[a.jsx("div",{style:{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(13,13,13,0.4)",fontWeight:600},children:"Active Parchment Encoder"}),(0,a.jsxs)("button",{onClick:()=>t(e=>e<5?e+1:1),style:{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:"#0D0D0D",fontWeight:600,background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[e<5?"Next Act":"Restart"," ",a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 18l6-6-6-6"})})]})]})]})]})]})}},3045:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var a=i(9510),r=i(8570);let n=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/Hero.tsx#default`),o=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/SplitSection.tsx#default`),s=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/StoryLedger.tsx#default`),l=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/ServicesSection.tsx#default`),c=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/ContactForm.tsx#default`),d=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/CounsellorMission.tsx#default`),p=(0,r.createProxy)(String.raw`/Users/akash/Documents/vs/viruthi/components/CounsellorPhilosophy.tsx#default`);function x(){return(0,a.jsxs)("main",{style:{background:"#000000",position:"relative"},children:[a.jsx(n,{}),a.jsx(o,{}),a.jsx(s,{}),a.jsx(d,{}),a.jsx(p,{}),a.jsx(l,{}),a.jsx(c,{})]})}},7481:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var a=i(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[948,721,411,925],()=>i(8513));module.exports=a})();