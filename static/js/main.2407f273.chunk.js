(this["webpackJsonptrivia-time"]=this["webpackJsonptrivia-time"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),i=c.n(s),a=(c(22),c(4)),o=c(2),l=c(0),j=function(){return Object(l.jsxs)("div",{id:"home",children:[Object(l.jsx)("h1",{children:"Trivia Time"}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)(a.b,{id:"gkBtn",className:"btn",to:"/game/general",children:"General"}),Object(l.jsx)(a.b,{id:"historyBtn",className:"btn",to:"/game/history",children:"History"}),Object(l.jsx)(a.b,{id:"geographyBtn",className:"btn",to:"/game/geography",children:"Geography"}),Object(l.jsx)(a.b,{id:"sportsBtn",className:"btn",to:"/game/sports",children:"Sports"}),Object(l.jsx)(a.b,{id:"mythologyBtn",className:"btn",to:"/game/mythology",children:"Mythology"}),Object(l.jsx)(a.b,{id:"musicBtn",className:"btn",to:"/game/music",children:"Music"}),Object(l.jsx)(a.b,{id:"scienceBtn",className:"btn",to:"/game/science",children:"Science!"}),Object(l.jsx)(a.b,{id:"politicsBtn",className:"btn",to:"/game/politics",children:"Politics"}),Object(l.jsx)(a.b,{id:"animalsBtn",className:"btn",to:"/game/animals",children:"Animals"}),Object(l.jsx)(a.b,{id:"randomBtn",className:"btn",to:"/game/random",children:"Random"})]})]})},u=function(e){var t,c=localStorage.getItem("finalScore");return t="50"===c?"NERD!":"40"===c?"GOOD STUFF":"30"===c?"NOT BAD..":c<"30"&&c>"0"?"OOF..":"YOU SUCK!",Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{id:"final",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("h1",{className:"the-scores",id:"totalScore",children:["Final Score: ",c]}),Object(l.jsx)(a.b,{className:"btn",id:"restart",to:"/",children:"Restart"})]})})},b=c(8),d=function(e){return Object(l.jsxs)("div",{className:"choice-box",children:[Object(l.jsx)("p",{className:"choice-option",children:e.letter}),Object(l.jsx)("p",{className:"choice-text",onMouseDown:e.picked,children:e.answer})]})},h=function(e){return Object(l.jsxs)("div",{className:"game",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{id:"item",children:[Object(l.jsx)("p",{className:"item-prefix",children:"Question"}),Object(l.jsxs)("h1",{className:"main-text",id:"questionCounter",children:[e.currentQuestion," / ",e.totalQuestion]})]}),Object(l.jsxs)("div",{id:"item",children:[Object(l.jsx)("p",{className:"item-prefix",children:"Score"}),Object(l.jsx)("h1",{className:"main-text",id:"score",children:e.score})]})]}),Object(l.jsx)("h2",{id:"question",children:e.question}),Object(l.jsxs)("div",{id:"choicesContainer",children:[Object(l.jsx)(d,{picked:e.function,letter:"A",answer:e.A}),Object(l.jsx)(d,{picked:e.function,letter:"B",answer:e.B}),Object(l.jsx)(d,{picked:e.function,letter:"C",answer:e.C}),Object(l.jsx)(d,{picked:e.function,letter:"D",answer:e.D})]}),Object(l.jsx)("div",{id:"footer",children:Object(l.jsx)(a.b,{id:"homeBtn",className:"btn",to:"/",children:"Home"})})]})},m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"loader loader--style3",title:"2",children:Object(l.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"48px",height:"48px",viewBox:"0 0 50 50",xmlSpace:"preserve",children:Object(l.jsx)("path",{fill:"#F08080",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:Object(l.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})})},O=function(){var e=Object(o.f)(),t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useRef)(),a=Object(n.useRef)(),j=Object(n.useRef)(),u=Object(n.useRef)(),d=Object(n.useRef)(),O=Object(n.useState)(null),x=Object(b.a)(O,2),g=x[0],p=x[1],f=Object(n.useState)(null),v=Object(b.a)(f,2),N=v[0],S=v[1],w=Object(n.useState)(null),y=Object(b.a)(w,2),B=y[0],C=y[1],k=Object(n.useState)(null),T=Object(b.a)(k,2),F=T[0],R=T[1],D=Object(n.useState)(!0),A=Object(b.a)(D,2),M=A[0],q=A[1],I=Object(n.useState)(null),Q=Object(b.a)(I,2),E=Q[0],U=Q[1],G=Object(n.useState)(0),H=Object(b.a)(G,2),L=H[0],P=H[1],J=Object(n.useState)(null),_=Object(b.a)(J,2),z=_[0],K=_[1],X=Object(n.useState)(0),Y=Object(b.a)(X,2),V=Y[0],W=Y[1],Z=Object(n.useState)(!1),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ce=window.location.pathname,ne=function(e){return"https://opentdb.com/api.php?amount=5&category=".concat(e,"&type=multiple&encode=base64")},re=function(e){return console.log(e),"/game/general"===e?ne(9):"/game/geography"===e?ne(22):"/game/history"===e?ne(23):"/game/sports"===e?ne(21):"/game/mythology"===e?ne(20):"/game/music"===e?ne(12):"/game/science"===e?ne(17):"/game/politics"===e?ne(24):"/game/animals"===e?ne(27):"/game/random"===e?ne(0):void 0};Object(n.useEffect)((function(){fetch(re(ce)).then((function(e){if(!e.ok)throw new Error("Something went wrong. Try a different category.");return e.json()})).then((function(e){function t(e){return decodeURIComponent(atob(e).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}var c=[],n=[],r=[],s=[];e.results.map((function(e){return c.push(t(e.question)),n.push(e.incorrect_answers.map((function(e){return t(e)}))),r.push(t(e.correct_answer)),[]})),i.current=[].concat(r),a.current=[].concat(n),j.current=[].concat(c),u.current=c.length;for(var o=0;o<=j.current.length-1;o++)s.push(a.current[o].concat(i.current[o])),d.current=[].concat(s);q(!1),U(null),se()})).catch((function(e){console.error(e),q(!1),U(e.message)}))}),[re(ce)]);var se=function(){P(0),W(0),ie()},ie=function(){if(0===j.current.length||1>j.current.length)return localStorage.setItem("finalScore",V),e.push("/end");P(L+1),K(u.current),s(j.current[0]);var t=function(e,t){var c=Math.floor(Math.random()*t);return e(d.current[0][c]),d.current[0].splice([c],1),e};t(p,4),t(S,3),t(C,2),t(R,1),d.current.shift(),j.current.shift(),te(!0)};return Object(l.jsxs)("div",{className:"game",children:[E&&Object(l.jsx)("h2",{children:E}),M&&Object(l.jsx)(m,{}),r&&Object(l.jsx)(h,{currentQuestion:L,totalQuestion:z,question:r,A:g,B:N,C:B,D:F,function:function(e){return function(e){var t=e.target.textContent,c=e.target.classList;ee&&(te(!1),i.current[0]===t?(c.add("correct"),W(V+=10)):c.add("incorrect"),i.current.shift(),setTimeout((function(){c.remove("correct"),c.remove("incorrect"),ie()}),1100))}(e)},score:V})]})},x=function(){return Object(l.jsx)(a.a,{basename:"/trivia-time",children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/game/:id",children:Object(l.jsx)(O,{})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(u,{})})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.2407f273.chunk.js.map