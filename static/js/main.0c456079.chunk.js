(this.webpackJsonpanimelist=this.webpackJsonpanimelist||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(4),s=n.n(i),r=n(3),j=(n(16),n(2)),l=n(1),o=function(e){var t=e.visible,n=Object(j.c)((function(e){return e.allAnimes.animes})).slice(0,t).map((function(e){var t=e.image_url,n=e.title,c=e.mal_id;return Object(l.jsxs)("div",{className:"cardContainer",children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:t,alt:n})}),Object(l.jsx)("div",{className:"text",children:Object(l.jsx)("h1",{children:n})})]},c)}));return Object(l.jsx)(l.Fragment,{children:n})},u=function(e){var t=e.visible;return Object(l.jsx)("div",{className:"mainContainer",children:Object(l.jsx)(o,{visible:t})})},b=n(8),O=n.n(b),h=n(11),d="SET_ANIMES",m=function(e){return{type:d,payload:e}},p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),o=s[0],u=s[1],b=Object(j.c)((function(e){return e})),d=Object(j.b)(),p=function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"}&limit=20")).then((function(e){return e.json()}));case 2:n=e.sent,d(m(n.results));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("ALL THE ANIMES",b),Object(l.jsxs)("div",{className:"searchComp",children:[Object(l.jsxs)("h1",{children:["The ",Object(l.jsx)("span",{children:"Anime "}),"List"]}),Object(l.jsx)("form",{className:"search-box",onSubmit:function(e){e.preventDefault(),p(n),u("https://api.jikan.moe/v3/search/anime?q=".concat(n,"&limit=20"))},children:Object(l.jsx)("input",{type:"search",placeholder:"Search for an anime...",required:!0,value:n,onChange:function(e){return a(e.target.value)}})}),Object(l.jsxs)("h4",{children:["API Call : ",o]})]})};var v=function(){var e=Object(c.useState)(12),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{}),Object(l.jsx)(u,{visible:n}),Object(l.jsx)("button",{className:"btn",onClick:function(){a((function(e){return e+4}))},children:Object(l.jsx)("i",{class:"fas fa-plus"})})]})},f=n(5),x=n(9),_={animes:[]},N=Object(f.a)({allAnimes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===d?Object(x.a)(Object(x.a)({},e),{},{animes:c}):e}}),E=Object(f.b)(N,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j.a,{store:E,children:Object(l.jsx)(v,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0c456079.chunk.js.map