(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=8TfTvddTOFGysB2GoqdibDv8MYOwtahR&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsx)("p",{children:n})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["One Punch Man"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dc40083b.chunk.js.map