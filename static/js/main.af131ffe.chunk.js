(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/myImg.ff818316.png"},21:function(e,a,t){e.exports=t(45)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(18),o=t.n(l),i=(t(29),t(30),t(31),t(19)),m=t.n(i);var r=function(){return c.a.createElement("section",{className:"home-page",id:"scroll-to-home"},c.a.createElement("div",{className:"text-layout"},c.a.createElement("h1",null,c.a.createElement("span",{id:"titleLine1"},"Hello"),c.a.createElement("span",null,"I'm Shubham Mane")),c.a.createElement("h4",null,"Software Engineer, Chess"),c.a.createElement("h4",null,"and Travel Enthusiast."),c.a.createElement("h4",null,"Welcome to my Portfolio!")),c.a.createElement("div",{className:"img-background"},c.a.createElement("img",{className:"img",src:m.a,alt:"myImage"})))},s=(t(32),t(2)),d=t(7),u=t(3),h=t(14),g=t(20);const p=[{id:1,name:"Home",path:"scroll-to-home",offSet:-53},{id:2,name:"Tech Stack",path:"scroll-to-techstack",offSet:-53},{id:3,name:"Projects",path:"scroll-to-projects",offSet:-155},{id:5,name:"Contact",path:"scroll-to-contact",offSet:-53}],E=[{id:1,name:"Portfolio",description:"Built an engaging and responsive personal portfolio website using React, enhanced with the functionality of `react-scroll` and aesthetic appeal of `react-icons`.",sourceCodeUrl:"https://github.com/shubhammane21/portfolio"},{id:2,name:"Shopper",description:"Complete Shppper site desgined with HTML5 ,CSS, Bootstrap",sourceCodeUrl:"https://github.com/shubhammane21/Shopper"},{id:3,name:"Navigation",description:"Responsive navbar and sidebar navigation with animations. Used react hooks, props, react-router, react-icons and CSS",sourceCodeUrl:"https://github.com/"},{id:4,name:"HotelBooking",description:"",sourceCodeUrl:"https://github.com"},{id:5,name:"Weather app",description:"Built a simple weather application using React that allows users to check the current weather conditions for a specific location.fetching weather data from an API, and displaying it in a user-friendly interface",sourceCodeUrl:"https://github.com/"},{id:6,name:"AniamationWebApp",description:"",sourceCodeUrl:"https://github.com/"}],N=[{id:1,url:"https://www.youtube.com",cName:"icon youtube-icon",logo:c.a.createElement(s.k,null)},{id:2,url:"https://github.com/shubhammane21",cName:"icon github-icon",logo:c.a.createElement(s.d,null)},{id:3,url:"https://www.linkedin.com/in/shubhammane21",cName:"icon linkedin-icon",logo:c.a.createElement(s.g,null)},{id:4,url:"https://www.instagram.com/shubham.mane.21",cName:"icon instagram-icon",logo:c.a.createElement(s.e,null)}],f=[{id:1,stackName:"Languages",logo:c.a.createElement(s.b,null),cName:"stack",technologies:[{id:2,name:"JavaScript",cName:"technology",logo:c.a.createElement(u.d,null)},{id:4,name:"CSS3",cName:"technology",logo:c.a.createElement(u.b,null)},{id:3,name:"HTML5",cName:"technology",logo:c.a.createElement(u.c,null)}]},{id:2,stackName:"Frameworks",logo:c.a.createElement(h.a,null),cName:"stack",technologies:[{id:1,name:"ReactJS",cName:"technology",logo:c.a.createElement(u.f,null)},{id:2,name:"NodeJS",cName:"technology",logo:c.a.createElement(s.h,null)},{id:3,name:"TypeScript",cName:"technology",logo:c.a.createElement(u.g,null)},{id:4,name:"Bootstrap",cName:"technology",logo:c.a.createElement(u.a,null)}]},{id:3,stackName:"Databases",logo:c.a.createElement(s.c,null),cName:"stack",technologies:[{id:1,name:"MongoDB",cName:"technology",logo:c.a.createElement(u.e,null)},{id:2,name:"SQL",cName:"technology",logo:c.a.createElement(h.b,null)}]},{id:4,stackName:"Tools",logo:c.a.createElement(s.j,null),cName:"stack",technologies:[{id:1,name:"Git",cName:"technology",logo:c.a.createElement(g.a,null)},{id:2,name:"GitHub",cName:"technology",logo:c.a.createElement(s.d,null)},{id:3,name:"VScode",cName:"technology",logo:c.a.createElement(s.b,null)}]}];var b=function(){const[e,a]=Object(n.useState)(!1),[t,l]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.innerWidth<900&&a(!0)},[]),Object(n.useEffect)(()=>{const t=()=>{window.innerWidth<900?!e&&a(!0):e&&(a(!1),l(!1))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("span",{className:"home-title-logo",onClick:()=>{d.animateScroll.scrollToTop(),l(!1)}},"PORTFOLIO ",c.a.createElement(s.f,null)),e&&c.a.createElement("div",{className:"sidebar-toggle"},t?c.a.createElement(s.i,{className:"sidebar-toggle-logo",onClick:()=>l(!t)}):c.a.createElement(s.a,{className:"sidebar-toggle-logo",onClick:()=>l(!t)})),!e&&c.a.createElement("ul",{className:e?"nav-items mobile-nav":"nav-items"},p.map(e=>c.a.createElement("li",{className:"nav-item",key:e.id},c.a.createElement(d.Link,{to:e.path,smooth:!0,duration:1e3,offset:e.offSet},e.name))))),c.a.createElement("div",{className:t?"sidebar active":"sidebar"},c.a.createElement("ul",{className:"sidebar-items"},p.map(e=>c.a.createElement("li",{className:"sidebar-item",key:e.id},c.a.createElement(d.Link,{to:e.path,smooth:!0,duration:1e3,offset:e.offSet,onClick:()=>l(!1)},e.name))))))};t(42);var k=function(){return c.a.createElement("section",{className:"techstack-page",id:"scroll-to-techstack"},c.a.createElement("h1",{className:"techstack-page-title"},"Technology Stack"),c.a.createElement("div",{className:"line-break-details"}),c.a.createElement("div",{className:"tech-stack-container"},f.map(e=>c.a.createElement("div",{className:e.cName,key:e.id},c.a.createElement("span",{className:"tech-heading"},c.a.createElement("h4",{className:"tech-heading-logo"},e.logo),c.a.createElement("h4",{className:"tech-heading-text"},e.stackName)),e.technologies.map(e=>c.a.createElement("ul",{key:e.id,className:"technology-list"},c.a.createElement("li",{className:e.cName},c.a.createElement("div",null,e.logo),e.name)))))))};t(43);var v=function(){const[e,a]=Object(n.useState)("");return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"contact-page",id:"scroll-to-contact"},c.a.createElement("div",{className:"social-media-section"},c.a.createElement("div",{className:"upper"},c.a.createElement("h2",{className:"social-media-section-heading"},"Reach me at"),c.a.createElement("h3",{onClick:()=>{window.open("mailto:shubhammane218@gmail.com")}},"shubhammane218@gmail.com")),c.a.createElement("div",{className:"lower"},c.a.createElement("h2",{className:"social-media-section-heading"},"Find me on"),c.a.createElement("div",{className:"icons"},N.map(e=>c.a.createElement("a",{key:e.id,href:e.url,target:"_blank",rel:"noreferrer",className:e.cName},e.logo))))),c.a.createElement("div",{className:"contact-form"},c.a.createElement("h1",{className:"contact-form-title"},"Contact Me"),c.a.createElement("input",{type:"text",name:"name",id:"",onChange:e=>{const t=e.target.value;a(t)},className:"input",placeholder:"Your Name"}),c.a.createElement("input",{type:"email",name:"email",id:"",className:"input",placeholder:"Your Email Address"}),c.a.createElement("input",{type:"message",name:"message",id:"",className:"input input-message",placeholder:"Your Message"}),c.a.createElement("button",{className:"btn",onClick:()=>{document.querySelector(".contact-form").style.display="none",document.querySelector("#on-submit").innerHTML="Thankyou ".concat(e," for connecting with me!")}},"Submit")),c.a.createElement("div",{id:"on-submit",className:"social-media-section-heading"})))};var y=function(e){let{title:a,description:t,codeUrl:n}=e;return c.a.createElement("div",{className:"project",id:"scroll-to-projects"},c.a.createElement("h1",{className:"project-title"},a),c.a.createElement("p",{className:"project-description"},t),c.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer",className:"project-code"},"Source Code"))};t(44);var w=function(){return c.a.createElement("section",{className:"project_section"},c.a.createElement("h1",{className:"page-title"},"Projects"),c.a.createElement("div",{className:"line-break-project"}),c.a.createElement("section",{className:"projects"},E.map(e=>c.a.createElement(y,{key:e.id,title:e.name,description:e.description,codeUrl:e.sourceCodeUrl}))))};var S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r,null),c.a.createElement(b,null),c.a.createElement(k,null),c.a.createElement(w,null),c.a.createElement(v,null))};var C=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then(a=>{let{getCLS:t,getFID:n,getFCP:c,getLCP:l,getTTFB:o}=a;t(e),n(e),c(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null))),C()}},[[21,1,2]]]);
//# sourceMappingURL=main.af131ffe.chunk.js.map