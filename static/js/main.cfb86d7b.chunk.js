(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=(a(31),a(3)),i=a(25),m=(a(32),function(e){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"aboutMe"===e.activeMainComponent?"active":"",onClick:function(){return e.setActiveMainComponent("aboutMe")}},"About Me"),l.a.createElement("li",{className:"projects"===e.activeMainComponent?"active":"",onClick:function(){return e.setActiveMainComponent("projects")}},"Projects"),l.a.createElement("li",{className:"contactMe"===e.activeMainComponent?"active":"",onClick:function(){return e.setActiveMainComponent("contactMe")}},"Contact Me"),l.a.createElement("li",{className:"resume"===e.activeMainComponent?"active":"",onClick:function(){return e.setActiveMainComponent("resume")}},"Resume")))}),u=function(e){return l.a.createElement("header",null,l.a.createElement("section",null,l.a.createElement("div",{className:"photo"},l.a.createElement("img",{src:i,alt:"Brian Tracy looking up"})),l.a.createElement("div",{className:"status"},l.a.createElement("h1",null,l.a.createElement("span",{className:"first"},"Brian"),l.a.createElement("span",{className:"last"},"Tracy")),l.a.createElement("div",{className:"current"},l.a.createElement("div",null,l.a.createElement("p",null,"Creator, Designer, Software Development Engineer")))),l.a.createElement(m,{activeMainComponent:e.activeMainComponent,setActiveMainComponent:e.setActiveMainComponent})))},s=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("a",{href:"https:www.btgraphix.com",rel:"noopener noreferrer",target:"_blank"},"BTgraphix.com"),e,l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/bravotango",target:"_blank"},l.a.createElement("ion-icon",{name:"logo-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/btgraphix/",target:"_blank"},l.a.createElement("ion-icon",{name:"logo-linkedin"}))))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Technical skills"),l.a.createElement("div",null,l.a.createElement("h4",null,"Front-end:"),l.a.createElement("ul",null,l.a.createElement("li",null,"TypeScript"),l.a.createElement("li",null,"JavaScript, ES6"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"Angular"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"SCSS"),l.a.createElement("li",null,"Responsive design")),l.a.createElement("h4",null,"Back-end:"),l.a.createElement("ul",null,l.a.createElement("li",null,"APIs"),l.a.createElement("li",null,"Node"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"Sequelize"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Mongoose"),l.a.createElement("li",null,"GraphQL"),l.a.createElement("li",null,"Apollo"))))},E=function(){return l.a.createElement("section",{id:"aboutMe"},l.a.createElement("div",null,l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I enjoy laughing, the outdoors, camping, yoga, soccer, motorcycles, my kids, friends, and family. Our home is in Bothell, protected by Hazel, our husky-shepherd & Phish, our curious cat.")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Websites"),l.a.createElement("div",null,l.a.createElement("p",null,"I love collaborating, brainstorming, dreaming. I love transforming ideas into applications available for everyone on the web."),l.a.createElement("p",null,"My focus when creating solutions is simplicity."))),l.a.createElement("div",null,l.a.createElement(p,null))))},h=a(9),d=a.n(h),g=(a(33),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],u=i[1],s=Object(n.useState)(""),p=Object(o.a)(s,2),E=p[0],h=p[1],g=Object(n.useState)(!0),v=Object(o.a)(g,2),b=v[0],f=v[1],y=Object(n.useState)(!0),M=Object(o.a)(y,2),k=M[0],w=M[1],C=Object(n.useState)(!0),S=Object(o.a)(C,2),j=S[0],T=S[1],A=Object(n.useState)(!1),B=Object(o.a)(A,2),x=B[0],O=B[1];function N(){k&&b&&j&&m.length>0&&a.length>0&&E.length>0?O(!0):O(!1)}function L(e,t){return"input-wrapper ".concat(t?e.length>0?"valid":"":"error")}return l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",null,l.a.createElement("div",{className:L(m,k)},l.a.createElement("label",{htmlFor:"name"},"Your name:"),l.a.createElement("input",{name:"name",id:"name",value:m,type:"text",onChange:function(e){u(e.target.value),e.target.value.length>0&&w(!0),N()},onBlur:function(e){e.target.value.length<1?w(!1):w(!0),N()}}))),l.a.createElement("div",null,l.a.createElement("div",{className:L(a,b)},l.a.createElement("label",{htmlFor:"email"},"Your email: "),l.a.createElement("input",{name:"email",id:"email",value:a,type:"text",onChange:function(e){r(e.target.value),f(d.a.isEmail(e.target.value)),N()},onBlur:function(e){f(d.a.isEmail(e.target.value)),N()}}))),l.a.createElement("div",null,l.a.createElement("div",{className:L(E,j)},l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{name:"message",id:"message",value:E,onChange:function(e){h(e.target.value),e.target.value.length>0&&T(!0),N()},onBlur:function(e){e.target.value.length<1&&T(!1),N()}}))),l.a.createElement("div",{className:"footer"},l.a.createElement("button",{disabled:!x},"Submit")))}),v=function(){return l.a.createElement("section",{id:"contactMe"},l.a.createElement("div",null,l.a.createElement("h2",null,"Contact Me"),l.a.createElement("h3",null,"Address"),l.a.createElement("address",null,"Brian Tracy",l.a.createElement("br",null),"Bothell, WA 98021"),l.a.createElement("h3",null,"Email"),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:brian.tracy@btgraphix.com"},"Brian.Tracy@BTgraphix.com")),l.a.createElement("h3",null,"Mobile"),l.a.createElement("p",null,l.a.createElement("a",{href:"tel:425-773-2818"},"425.773.2818")),l.a.createElement("h3",null,"Github"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/bravotango/",rel:"noopener noreferrer",target:"_blank"},"github.com/bravotango/")),l.a.createElement("h3",null,"LinkedIn"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/btgraphix/",rel:"noopener noreferrer",target:"_blank"},"linkedin.com/in/btgraphix/")),l.a.createElement("h3",null,"Website"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.btgraphix.com/",rel:"noopener noreferrer",target:"_blank"},"BTgraphix.com/"))),l.a.createElement("div",null,l.a.createElement("h3",null,"Send me a message"),l.a.createElement("div",null,l.a.createElement(g,null))))},b=function(e){var t=e.primary?"primary":"";return l.a.createElement("article",{className:t,id:e.id},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,l.a.createElement("strong",null,"Description"),e.description,l.a.createElement("strong",null,"Repo"),l.a.createElement("a",{href:e.repo,rel:"noopener noreferrer",target:"_blank"},e.repo),e.deployedLocation&&l.a.createElement(l.a.Fragment,null,l.a.createElement("strong",null,"Deployed location"),l.a.createElement("a",{href:e.deployedLocation,rel:"noopener noreferrer",target:"_blank"},e.deployedLocation))))},f=function(){return l.a.createElement("section",{id:"projects"},l.a.createElement("div",null,l.a.createElement("h2",null,"Projects")),l.a.createElement("div",{className:"articles"},l.a.createElement(b,{id:"tech-blog",title:"Tech Blog",primary:"1",repo:"https://github.com/bravotango/Tech-Blog",deployedLocation:"https://bt-tech-blog.herokuapp.com/",description:"This application is a CMS-style blog site similar to a Wordpress site. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."}),l.a.createElement(b,{id:"project-1",title:"Movie & Cocktail",repo:"https://github.com/bravotango/Movie-and-Cocktail",deployedLocation:"https://bravotango.github.io/Movie-and-Cocktail/",description:"Search movies for synopsis & receive drink suggestions"}),l.a.createElement(b,{id:"employee-tracker",title:"Employee Tracker",repo:"https://github.com/bravotango/Employee-Tracker/",description:"This is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL."}),l.a.createElement(b,{id:"weather",title:"Weather Dashboard",repo:"https://github.com/bravotango/Weather-Dashboard",deployedLocation:"https://bravotango.github.io/Weather-Dashboard/",description:"As a traveler, search the weather outlook for multiple destinations to plan a trip accordingly."}),l.a.createElement(b,{id:"workday",title:"Work Day Scheduler",repo:"https://github.com/bravotango/Work-Day-Scheduler",deployedLocation:"https://bravotango.github.io/Work-Day-Scheduler/",description:"A simple calendar app for scheduling your work day"}),l.a.createElement(b,{id:"react",title:"React",repo:"https://github.com/bravotango/React-Redux-Walk-Sequence",deployedLocation:"https://www.btgraphix.com/walk",description:"8 slides used in conjunction with React and Redux to simulate a walk sequence"}),l.a.createElement(b,{id:"angular",title:"Angular",repo:"https://github.com/bravotango/Tour-of-Heroes-Overwatch",deployedLocation:"https://www.btgraphix.com/overwatch/",description:'Based on "Angular - Tutorial: Tour of Heroes", added MaterializeCSS, swapped out tutorial characters for characters of Overwatch'})))},y=function(){return l.a.createElement("section",{id:"resume"},l.a.createElement("div",null,l.a.createElement("h2",null,"Resume"),l.a.createElement("h3",null,"Download"),l.a.createElement("p",null,l.a.createElement("a",{href:"BRIAN_TRACY_2022_Resume.pdf",target:"_blank"},"Resume - Brian Tracy"))),l.a.createElement("div",null,l.a.createElement(p,null)))};var M=function(e){switch(e.activeMainComponent){case"aboutMe":return l.a.createElement(E,null);case"projects":return l.a.createElement(f,null);case"contactMe":return l.a.createElement(v,null);case"resume":return l.a.createElement(y,null);default:return l.a.createElement(E,null)}};var k=function(){var e=Object(n.useState)("aboutMe"),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(u,{activeMainComponent:a,setActiveMainComponent:r}),l.a.createElement("main",null,l.a.createElement(M,{activeMainComponent:a})),l.a.createElement(s,null),l.a.createElement(l.a.Fragment,null))},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),w()},25:function(e,t,a){e.exports=a.p+"static/media/face-hood.541386de.png"},26:function(e,t,a){e.exports=a(114)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.cfb86d7b.chunk.js.map