(this["webpackJsonpgithub-search-app"]=this["webpackJsonpgithub-search-app"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(9),i=a.n(r),u=a(8),l=a(3),o=a(2),j=s.a.createContext();function d(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!1),d=Object(o.a)(i,2),h=d[0],b=d[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),p=f[0],g=f[1],m=Object(n.useState)([]),v=Object(o.a)(m,2),x=v[0],N=v[1],S=Object(n.useState)([]),_=Object(o.a)(S,2),y=_[0],R=_[1],I=Object(n.useState)(1),k=Object(o.a)(I,2),P=k[0],w=k[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));e&&R(e)}),[]),Object(c.jsx)(j.Provider,Object(u.a)(Object(u.a)({},e),{},{value:{searchProduced:s,setSearchProduced:r,searchResultsIsLoading:h,setSearchResultsIsLoading:b,inputValue:p,setInputValue:g,searchResults:x,setSearchResults:N,history:y,addToHistory:function(e){var t=e.trim();R((function(e){var a=[];return e.includes(t)?a=[t].concat(Object(l.a)(e.filter((function(e){return e!==t})))):(a=[t].concat(Object(l.a)(e))).length>5&&(a.length=5),localStorage.setItem("history",JSON.stringify(a)),a}))},requestPage:P,setRequestPage:w},children:e.children}))}a(19),a(20);var h=a.p+"static/media/logo.2185efa4.svg";var b=function(){return Object(c.jsx)("header",{className:"page-section page-header",children:Object(c.jsx)("div",{className:"page-wrapper",children:Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsx)("a",{href:"https://github.com/",className:"logo",children:Object(c.jsx)("img",{src:h,className:"logo__image",alt:"logo"})}),Object(c.jsx)("h1",{className:"app-name",children:"Github search app"})]})})})},O=a(10),f=a(7),p=a.n(f),g=a(11);function m(){return(m=Object(g.a)(p.a.mark((function e(t,a,c){var n,s,r,i,u,o,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(1===t.length)return t;for(var n=t[0],r=function(e){var a=new Set(n.map((function(e){return e.id})));n=[].concat(Object(l.a)(n),Object(l.a)(t[e].filter((function(e){return!a.has(e.id)}))))},i=1;i<t.length;i++)r(i);return n.length||(u=!1),s(c,n)},s=function(e,t){if(t.length){var a=new Set(e.map((function(e){return e.id})));return[].concat(Object(l.a)(e),Object(l.a)(t.filter((function(e){return!a.has(e.id)}))))}return e},n=function(e){return e.then((function(e){return{value:e,status:"fulfilled"}}),(function(e){return{error:e,status:"rejected"}}))},i=[],u=!0,o=["https://api.github.com/users/".concat(t,"/repos?page=").concat(a),"https://api.github.com/orgs/".concat(t,"/repos?page=").concat(a)],j=[],o.forEach((function(e){j.push(n(fetch(e)))})),e.next=10,Promise.all(j).then((function(e){return Promise.all(e.map((function(e){return e.value.ok?e.value.json():[]})))})).then((function(e){i=r(e[0],e[1])}));case 10:return e.abrupt("return",{resultData:i,hasMore:u});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("unhandledrejection",(function(e){return console.log(e.reason)}));var v=function(e,t,a){return m.apply(this,arguments)};var x=function(){var e=Object(n.useContext)(j),t=e.setSearchProduced,a=(e.searchResultsIsLoading,e.setSearchResultsIsLoading),s=e.inputValue,r=e.setInputValue,i=(e.searchResults,e.setSearchResults),u=(e.history,e.addToHistory);function l(){s.trim().length>=3&&(u(s),t(!0),a(!0),i([]),v(s,1,[]).then((function(e){var t=e.resultData;a(!1),i(t)})))}return Object(n.useEffect)((function(){l()}),[s]),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),l()},children:Object(c.jsx)(O.DebounceInput,{placeholder:"Search by org or username...",className:"input",minLength:3,debounceTimeout:800,value:s,onChange:function(e){var t=e.target.value;r(t)}})})};var N=function(){var e=Object(n.useContext)(j),t=(e.setSearchResults,e.setInputValue),a=Object(n.useState)(""),s=Object(o.a)(a,2),r=s[0],i=s[1],u=Object(n.useState)(null),l=Object(o.a)(u,2),d=l[0],h=l[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));i(e)}),[]),Object(n.useEffect)((function(){r&&r.length&&h(Object(c.jsxs)("div",{className:"history",children:[Object(c.jsx)("h4",{className:"title",children:"Search history:"}),Object(c.jsx)("ul",{children:r.map((function(e,a){return Object(c.jsx)("li",{children:Object(c.jsx)("span",{onClick:function(){t(e)},children:e})},a)}))})]}))}),[r]),d};var S=function(){return Object(c.jsxs)("aside",{className:"sidebar",children:[Object(c.jsx)(x,{}),Object(c.jsx)(N,{})]})},_=a(12);function y(e){var t=e.html_url,a=e.full_name,n=e.language,s=e.description;return Object(c.jsxs)("div",{className:"grid-block",children:[Object(c.jsx)("h3",{className:"grid-block__title",children:Object(c.jsx)("a",{href:t,target:"_blank",children:a})}),n&&Object(c.jsxs)("div",{className:"grid-block__info",children:["Language: ",Object(c.jsx)("span",{className:"grid-block__value",children:n})]}),s&&Object(c.jsxs)("div",{className:"grid-block__info",children:["Description: ",Object(c.jsx)("span",{className:"grid-block__value",children:s})]})]})}y.defaultProps={full_name:""};var R=y;var I=function(){var e=Object(n.useContext)(j),t=e.searchProduced,a=e.searchResultsIsLoading,s=e.inputValue,r=e.searchResults,i=e.setSearchResults,u=e.requestPage,l=e.setRequestPage,d=Object(n.useState)(!0),h=Object(o.a)(d,2),b=h[0],O=h[1],f=[];return r&&(f=r.map((function(e){return Object(c.jsx)(R,{html_url:e.html_url,full_name:e.full_name,language:e.language,description:e.description},e.id)}))),Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)("div",{className:"preloader",children:Object(c.jsxs)("div",{className:"preloader-dots",children:[Object(c.jsx)("span",{className:"preloader-dots__dot"}),Object(c.jsx)("span",{className:"preloader-dots__dot"}),Object(c.jsx)("span",{className:"preloader-dots__dot"})]})}):f.length?Object(c.jsx)("div",{className:"grid",children:Object(c.jsx)(_.a,{dataLength:f.length,next:function(){v(s,u+1,r).then((function(e){var t=e.resultData,a=e.hasMore;i(t),l((function(e){return e+1})),O(a)}))},hasMore:b,loader:Object(c.jsx)("div",{className:"loading-status",children:"Loading more..."}),endMessage:Object(c.jsx)("div",{className:"loading-status",children:Object(c.jsx)("b",{children:"That's all!"})}),children:f})}):t&&Object(c.jsx)("div",{className:"search-empty",children:"Nothing found for this query"})})};var k=function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(I,{})})};var P=function(){return Object(c.jsx)("section",{className:"page-section page-section--search",children:Object(c.jsx)("div",{className:"page-wrapper",children:Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsx)(S,{}),Object(c.jsx)(k,{})]})})})};var w=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(P,{})]})};var L=function(){return Object(c.jsx)("div",{id:"app",children:Object(c.jsx)(w,{})})};i.a.render(Object(c.jsx)(d,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.90ec8749.chunk.js.map