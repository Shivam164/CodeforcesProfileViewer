(this.webpackJsonpcodeforces_profile=this.webpackJsonpcodeforces_profile||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(15),r=c.n(a),i=(c(22),c(23),c(8)),o=c(2),l=c(0),d=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],a=c[1];return Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{className:"bg-light text-dark fw-bold text-center shadow w-75 mb-4 mx-auto",children:"Codeforces Profile Viewer"}),Object(l.jsxs)("form",{className:"d-inline p-3 mx-auto mt-5",children:[Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"text",value:s,required:!0,onChange:function(e){return a(e.target.value)},placeholder:"Codeforces Handle"})}),Object(l.jsx)("input",{type:"submit",value:"Submit",onClick:function(t){t.preventDefault(),console.log(s),e.push("/display/".concat(s))}})]})]})},j=c(10),b=function(e){var t=Object(n.useState)(null),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(n.useState)(null),b=Object(i.a)(j,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data from the resource");return e.json()})).then((function(e){a(e),d(!1)})).catch((function(e){"AbortError"!==e.name&&(d(!1),u(e.message))})),function(){return t.abort()}}),[]),{data:s,pending:l,error:h}},h=function(){var e=Object(o.g)().handle,t=b(" https://codeforces.com/api/user.info?handles="+e),c=t.data,n=t.pending,s=t.error;return Object(l.jsxs)("div",{className:"BlogList mt-5",children:[s&&Object(l.jsx)("div",{children:s}),n&&Object(l.jsx)("p",{children:"Loading..."}),c&&c.result.map((function(e){return Object(l.jsxs)("div",{className:"card  mt-3 text-center mx-auto p-2",children:[Object(l.jsx)("img",{src:e.avatar,className:"rounded-3 p-2 shadow border border-secondary border-3",alt:"this is an image"}),Object(l.jsx)("h4",{className:"card-title",children:e.handle}),Object(l.jsxs)("p",{className:"p-1 m-0",children:["Current Rank : ",e.rank," ",e.rating]}),Object(l.jsxs)("p",{className:"p-1 m-0",children:["Highest Rank : ",e.maxRank," ",e.maxRating]}),Object(l.jsxs)("p",{className:"p-1 m-0",children:["Contribution : ",e.contribution]}),Object(l.jsxs)("p",{className:"p-1 m-0",children:["Friend of ",e.friendOfCount," user"]}),Object(l.jsx)(j.b,{to:"/contest/".concat(e.handle),className:"btn btn-success",children:"Contests"})]},e.maxRating)}))]})},u=function(e){var t=e.contest;return Object(l.jsx)("tbody",{className:"BlogList",children:t.map((function(e){return Object(l.jsxs)("tr",{className:"contest-box",children:[Object(l.jsx)("td",{children:e.contestName}),Object(l.jsx)("td",{className:"text-end",children:e.rank}),Object(l.jsx)("td",{className:"text-end",children:e.oldRating}),Object(l.jsx)("td",{className:"text-end",children:e.newRating})]},e.contestId)}))})},x=function(){var e=Object(o.g)().handle,t=b("https://codeforces.com/api/user.rating?handle="+e),c=t.data,n=t.pending,s=t.error;return console.log(c),Object(l.jsx)("div",{className:"m-md-5",children:Object(l.jsxs)("table",{className:"table table-responsive",children:[s&&Object(l.jsx)("div",{children:s}),n&&Object(l.jsx)("p",{children:"Loading..."}),c&&Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Contest Name"}),Object(l.jsx)("th",{scope:"col",className:"text-end",children:"Rank"}),Object(l.jsx)("th",{scope:"col",className:"text-end",children:"Old Rating"}),Object(l.jsx)("th",{scope:"col",className:"text-end",children:"New Rating"})]})}),c&&Object(l.jsx)(u,{contest:c.result})]})})};var O=function(){return Object(l.jsxs)(j.a,{children:[Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/display/:handle",children:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/contest/:handle",children:Object(l.jsx)(x,{})})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.0fb2ca78.chunk.js.map