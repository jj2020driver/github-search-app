(this["webpackJsonpgithub-search-app"]=this["webpackJsonpgithub-search-app"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(9),i=c.n(r),u=c(8),l=c(3),o=c(2),j=s.a.createContext();function d(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),d=Object(o.a)(i,2),h=d[0],b=d[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),p=f[0],g=f[1],m=Object(n.useState)([]),v=Object(o.a)(m,2),x=v[0],N=v[1],_=Object(n.useState)([]),S=Object(o.a)(_,2),y=S[0],R=S[1],I=Object(n.useState)(1),k=Object(o.a)(I,2),P=k[0],w=k[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));e&&R(e)}),[]),Object(a.jsx)(j.Provider,Object(u.a)(Object(u.a)({},e),{},{value:{searchProduced:s,setSearchProduced:r,searchResultsIsLoading:h,setSearchResultsIsLoading:b,inputValue:p,setInputValue:g,searchResults:x,setSearchResults:N,history:y,addToHistory:function(e){var t=e.trim();R((function(e){var c=[];return e.includes(t)?c=[t].concat(Object(l.a)(e.filter((function(e){return e!==t})))):(c=[t].concat(Object(l.a)(e))).length>5&&(c.length=5),localStorage.setItem("history",JSON.stringify(c)),c}))},requestPage:P,setRequestPage:w},children:e.children}))}c(19),c(20);var h=c.p+"static/media/logo.2185efa4.svg";var b=function(){return Object(a.jsx)("header",{className:"page-header",children:Object(a.jsx)("div",{className:"pwr",children:Object(a.jsxs)("div",{className:"pct",children:[Object(a.jsx)("a",{href:"https://github.com/",className:"logo",children:Object(a.jsx)("img",{src:h,className:"logo__image",alt:"logo"})}),Object(a.jsx)("h1",{className:"app-name",children:"Github search app"})]})})})},O=c(10),f=c(7),p=c.n(f),g=c(11);function m(){return(m=Object(g.a)(p.a.mark((function e(t,c,a){var n,s,r,i,u,o,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];if(1===t.length)return t;for(var n=t[0],r=function(e){var c=new Set(n.map((function(e){return e.id})));n=[].concat(Object(l.a)(n),Object(l.a)(t[e].filter((function(e){return!c.has(e.id)}))))},i=1;i<t.length;i++)r(i);return n.length||(u=!1),s(a,n)},s=function(e,t){if(t.length){var c=new Set(e.map((function(e){return e.id})));return[].concat(Object(l.a)(e),Object(l.a)(t.filter((function(e){return!c.has(e.id)}))))}return e},n=function(e){return e.then((function(e){return{value:e,status:"fulfilled"}}),(function(e){return{error:e,status:"rejected"}}))},i=[],u=!0,o=["https://api.github.com/users/".concat(t,"/repos?page=").concat(c),"https://api.github.com/orgs/".concat(t,"/repos?page=").concat(c)],j=[],o.forEach((function(e){j.push(n(fetch(e)))})),e.next=10,Promise.all(j).then((function(e){return Promise.all(e.map((function(e){return e.value.ok?e.value.json():[]})))})).then((function(e){i=r(e[0],e[1])}));case 10:return e.abrupt("return",{resultData:i,hasMore:u});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("unhandledrejection",(function(e){return console.log(e.reason)}));var v=function(e,t,c){return m.apply(this,arguments)};var x=function(){var e=Object(n.useContext)(j),t=e.setSearchProduced,c=(e.searchResultsIsLoading,e.setSearchResultsIsLoading),s=e.inputValue,r=e.setInputValue,i=(e.searchResults,e.setSearchResults),u=(e.history,e.addToHistory);function l(){s.trim().length>=3&&(u(s),t(!0),c(!0),i([]),v(s,1,[]).then((function(e){var t=e.resultData;c(!1),i(t)})))}return Object(n.useEffect)((function(){l()}),[s]),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),l()},children:Object(a.jsx)(O.DebounceInput,{placeholder:"Search by org or username...",className:"input",minLength:3,debounceTimeout:800,value:s,onChange:function(e){var t=e.target.value;r(t)}})})};var N=function(){var e=Object(n.useContext)(j),t=(e.setSearchResults,e.setInputValue),c=Object(n.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1],u=Object(n.useState)(null),l=Object(o.a)(u,2),d=l[0],h=l[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));i(e)}),[]),Object(n.useEffect)((function(){r&&r.length&&h(Object(a.jsxs)("div",{className:"history",children:[Object(a.jsx)("h4",{className:"title",children:"Search history:"}),Object(a.jsx)("ul",{children:r.map((function(e,c){return Object(a.jsx)("li",{children:Object(a.jsx)("span",{onClick:function(){t(e)},children:e})},c)}))})]}))}),[r]),d};var _=function(){return Object(a.jsxs)("aside",{className:"sidebar",children:[Object(a.jsx)(x,{}),Object(a.jsx)(N,{})]})},S=c(12);function y(e){var t=e.html_url,c=e.full_name,n=e.language,s=e.description;return Object(a.jsxs)("div",{className:"grid-block",children:[Object(a.jsx)("h3",{className:"grid-block__title",children:Object(a.jsx)("a",{href:t,target:"_blank",children:c})}),n&&Object(a.jsxs)("div",{className:"grid-block__info",children:["Language: ",Object(a.jsx)("span",{className:"grid-block__info__value",children:n})]}),s&&Object(a.jsxs)("div",{className:"grid-block__info",children:["Description: ",Object(a.jsx)("span",{className:"grid-block__info__value",children:s})]})]})}y.defaultProps={full_name:""};var R=y;var I=function(){var e=Object(n.useContext)(j),t=e.searchProduced,c=e.searchResultsIsLoading,s=e.inputValue,r=e.searchResults,i=e.setSearchResults,u=e.requestPage,l=e.setRequestPage,d=Object(n.useState)(!0),h=Object(o.a)(d,2),b=h[0],O=h[1],f=[];return r&&(f=r.map((function(e){return Object(a.jsx)(R,{html_url:e.html_url,full_name:e.full_name,language:e.language,description:e.description},e.id)}))),Object(a.jsx)(a.Fragment,{children:c?Object(a.jsx)("div",{className:"preloader",children:Object(a.jsxs)("div",{className:"preloader-dots",children:[Object(a.jsx)("span",{className:"preloader-dots__dot"}),Object(a.jsx)("span",{className:"preloader-dots__dot"}),Object(a.jsx)("span",{className:"preloader-dots__dot"})]})}):f.length?Object(a.jsx)("div",{className:"grid",children:Object(a.jsx)(S.a,{dataLength:f.length,next:function(){v(s,u+1,r).then((function(e){var t=e.resultData,c=e.hasMore;i(t),l((function(e){return e+1})),O(c)}))},hasMore:b,loader:Object(a.jsx)("div",{className:"loading-status",children:"Loading more..."}),endMessage:Object(a.jsx)("div",{className:"loading-status",children:Object(a.jsx)("b",{children:"That's all!"})}),children:f})}):t&&Object(a.jsx)("div",{className:"search-empty",children:"Nothing found for this query"})})};var k=function(){return Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(I,{})})};var P=function(){return Object(a.jsx)("section",{className:"section-search",children:Object(a.jsx)("div",{className:"pwr",children:Object(a.jsxs)("div",{className:"pct",children:[Object(a.jsx)(_,{}),Object(a.jsx)(k,{})]})})})};var w=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(P,{})]})};var L=function(){return Object(a.jsx)("div",{id:"app",children:Object(a.jsx)(w,{})})};i.a.render(Object(a.jsx)(d,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ebf53f07.chunk.js.map