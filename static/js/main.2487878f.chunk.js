(this.webpackJsonpmoviesapp=this.webpackJsonpmoviesapp||[]).push([[0],{15:function(e,c,t){},16:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(9),i=t.n(a),l=(t(15),t(4)),r=(t(16),t(10)),j=t.n(r),o=(t(20),t(3)),d=t(0);function m(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)(o.RectShape,{color:"#E0E0E0",style:{width:300,height:350}})}),Object(d.jsx)(o.TextRow,{color:"#E0E0E0"}),Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)(o.TextRow,{color:"#E0E0E0"})})]})}function b(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("hr",{}),"\xa9 2021"]})}var h=Object(d.jsx)("div",{className:"my-awesome-placeholder container m-4 text-center",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3  my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})})]})});function x(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:e.movie.Poster,alt:"moviename",className:"card-img-top img-fluid"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{children:[" ",Object(d.jsx)("b",{children:"Name:- "})," ",e.movie.Title]}),console.log(e.movie),Object(d.jsxs)("p",{className:"mt-3",children:[" ",Object(d.jsx)("b",{children:"Release Date:- "})," ",e.movie.Year]})]})]})}function O(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"pt-5",children:Object(d.jsxs)("h4",{className:"display-4",children:["Results for",Object(d.jsx)("span",{className:"text-capitalize",children:e.searchedFor})]})}),Object(d.jsx)("button",{className:"btn btn-link",onClick:e.selectAnother(),children:"Search Another"}),Object(d.jsx)(j.a,{type:"media",showLoadingAnimation:!0,rows:7,ready:e.movies.length>0,customPlaceholder:h,children:Object(d.jsx)("div",{className:"row mt-3",children:e.movies.map((function(e,c){return Object(d.jsx)("div",{className:"col-md-3 my-2",children:Object(d.jsx)(x,{movie:e},c)})}))})})]})}var v=function(){var e=Object(s.useState)(!1),c=Object(l.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(""),i=Object(l.a)(a,2),r=i[0],j=i[1],o=Object(s.useState)(!1),m=Object(l.a)(o,2),h=m[0],x=m[1],v=Object(s.useState)([]),u=Object(l.a)(v,2),p=u[0],f=u[1];function N(){console.log("I called"),n(!1),f([])}return t?Object(d.jsx)("div",{className:"my-bg-div",children:Object(d.jsx)(O,{movies:p,searchedFor:r,selectAnother:function(){return N}})}):Object(d.jsxs)("div",{className:"my-bg-div p-5",children:[Object(d.jsxs)("div",{className:" container mt-4 main-div",children:[Object(d.jsx)("header",{class:"pb-3 mb-4 border-bottom",children:Object(d.jsx)("a",{href:"/",class:"d-flex align-items-center text-dark text-decoration-none",children:Object(d.jsx)("span",{class:"fs-4",children:"Search Movies for Free"})})}),Object(d.jsx)("div",{class:"p-md-5 mb-4 bg-light rounded-3",children:Object(d.jsx)("div",{class:"container-fluid py-5",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(!0),fetch("https://www.omdbapi.com/?apikey=2c6e7a77&s=".concat(r)).then((function(e){return e.json()})).then((function(e){console.log(e.Response),"True"===e.Response?f(e.Search):(n(!1),x(!0))}))},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"d-inline float-left",children:Object(d.jsx)("h6",{className:"display-4 d-inline",children:"Movie Name:- "})}),Object(d.jsx)("input",{type:"search",className:"form-control my-3",placeholder:"Enter Movie name",value:r,onChange:function(e){x(!1),console.log(e.target.value),j(e.target.value)}}),h?Object(d.jsx)("p",{className:"alert alert-danger my-3",children:"No Movie available with this name"}):"",Object(d.jsx)("button",{className:"btn btn-primary w-md-50",children:"Search Movie"})]})})})})]}),Object(d.jsx)(b,{})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),u()}},[[22,1,2]]]);
//# sourceMappingURL=main.2487878f.chunk.js.map