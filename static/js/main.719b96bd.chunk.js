(this.webpackJsonpmoviesapp=this.webpackJsonpmoviesapp||[]).push([[0],{15:function(e,c,t){},16:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(9),i=t.n(a),r=(t(15),t(4)),o=(t(16),t(10)),l=t.n(o),j=(t(20),t(3)),d=t(0);function m(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)(j.RectShape,{color:"#E0E0E0",style:{width:300,height:350}})}),Object(d.jsx)(j.TextRow,{color:"#E0E0E0"}),Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)(j.TextRow,{color:"#E0E0E0"})})]})}var b=Object(d.jsx)("div",{className:"my-awesome-placeholder container m-4 text-center",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3  my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-md-3 my-2 mx-2 card",children:Object(d.jsx)(m,{})})]})});function h(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:e.movie.Poster,alt:"moviename",className:"card-img-top img-fluid"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{children:[" ",Object(d.jsx)("b",{children:"Name:- "})," ",e.movie.Title]}),console.log(e.movie),Object(d.jsxs)("p",{className:"mt-3",children:[" ",Object(d.jsx)("b",{children:"Release Date:- "})," ",e.movie.Year]})]})]})}function x(e){return Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsxs)("h4",{className:"display-4",children:["Results for ",e.searchedFor]}),Object(d.jsx)("button",{className:"btn btn-link",onClick:e.selectAnother(),children:"Search Another"}),Object(d.jsx)(l.a,{type:"media",showLoadingAnimation:!0,rows:7,ready:e.movies.length>0,customPlaceholder:b,children:Object(d.jsx)("div",{className:"row mt-3",children:e.movies.map((function(e,c){return Object(d.jsx)("div",{className:"col-md-3 my-2",children:Object(d.jsx)(h,{movie:e},c)})}))})})]})}var O=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],l=i[1],j=Object(s.useState)(!1),m=Object(r.a)(j,2),b=m[0],h=m[1],O=Object(s.useState)([]),u=Object(r.a)(O,2),v=u[0],p=u[1];function g(){console.log("I called"),n(!1),p([])}return t?Object(d.jsx)(x,{movies:v,searchedFor:o,selectAnother:function(){return g}}):Object(d.jsxs)("div",{className:"text-center container mt-4",children:[Object(d.jsx)("img",{src:"https://storage.googleapis.com/incind/Wavy_Ppl-05_Single-123gkLak8.jpg",width:"500",alt:"..."}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(!0),fetch("http://www.omdbapi.com/?apikey=2c6e7a77&s=".concat(o)).then((function(e){return e.json()})).then((function(e){console.log(e.Response),"True"===e.Response?p(e.Search):(n(!1),h(!0))}))},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:"display-4",children:"Search Movies for Free"}),Object(d.jsx)("input",{type:"search",className:"form-control my-3",placeholder:"Enter Movie name",value:o,onChange:function(e){h(!1),console.log(e.target.value),l(e.target.value)}}),b?Object(d.jsx)("p",{className:"alert alert-danger my-3",children:"No Movie available with this name"}):"",Object(d.jsx)("button",{className:"btn btn-primary w-50",children:"Search Movie"})]})})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),u()}},[[22,1,2]]]);
//# sourceMappingURL=main.719b96bd.chunk.js.map