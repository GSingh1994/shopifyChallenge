(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{90:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(10),r=n.n(i),c=n(53),o=n.n(c),s=n(61),l=n(34),d=n(15),j=n(68),b=n(126),m=Object(j.a)({palette:{type:"dark",primary:{main:"#a35709"}}}),u=Object(b.a)((function(e){var t,n,a;return{appContainer:Object(d.a)({},e.breakpoints.up("lg"),{padding:"0 10rem"}),header:{margin:"2rem 0",diplay:"flex"},textField:{marginBottom:e.spacing(2)},movieList:{},banner:Object(d.a)({marginBottom:"2rem"},e.breakpoints.down("sm"),{height:"2rem",marginBottom:"1rem"}),cardContent:Object(d.a)({padding:4,transition:"all 0.3s ease","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},e.breakpoints.down("xs"),{display:"flex",justifyContent:"space-between"}),cardMedia:(t={},Object(d.a)(t,e.breakpoints.down("xs"),{display:"none"}),Object(d.a)(t,"paddingTop","86.25%"),t),cardTitle:(n={},Object(d.a)(n,e.breakpoints.down("xs"),{margin:0,fontSize:"0.8rem"}),Object(d.a)(n,"fontWeight","bold"),Object(d.a)(n,"padding","0 9px"),Object(d.a)(n,"marginTop",9),n),smallCard:Object(d.a)({},e.breakpoints.down("xs"),{display:"flex",alignItems:"center"}),addNomineeBtn:{margin:"0 auto"},removeBtn:{"&:hover":{color:"red"},minWidth:0,transition:"all 0.3s ease"},nomineeList:(a={},Object(d.a)(a,e.breakpoints.down("xs"),{paddingTop:"2rem",margin:0}),Object(d.a)(a,e.breakpoints.up("md"),{width:"50%"}),a),movieGrid:Object(d.a)({},e.breakpoints.up("md"),{display:"flex"})}}),{index:1}),h=n(145),O=n(5),p=function(e){var t=e.handleChange,n=u();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h.a,{className:n.textField,onSubmit:function(e){return e.preventDefault},onChange:t,fullWidth:!0,placeholder:"search for a movie",variant:"outlined",autoFocus:!0})})},x=n(69),v=n(130),f=n(131),g=n(132),y=n(49),k=n(133),C=n(134),N=function(e){var t=e.title,n=e.year,a=e.poster,i=e.handleClick,r=e.clickedMovie,c=u(),o=!1;return r&&r.title===t&&(o=!0),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(v.a,{elevation:4,children:Object(O.jsxs)(f.a,{hover:"true",className:c.cardContent,style:{paddingBottom:3},children:[Object(O.jsx)(g.a,{className:c.cardMedia,image:a}),Object(O.jsxs)("div",{className:c.smallCard,children:[Object(O.jsx)(y.a,{gutterBottom:!0,align:"center",className:c.cardTitle,variant:"subtitle1",children:t}),Object(O.jsx)(y.a,{align:"center",variant:"body2",color:"textSecondary",children:n})]}),Object(O.jsx)(k.a,{children:Object(O.jsx)(C.a,{className:c.addNomineeBtn,onClick:i,variant:"contained",color:"primary",size:"small",disabled:o,children:"Nominate"})})]})})})},w=n(135),B=n(136),S=n(129),F=n(137),T=n(138),D=n(139),L=n(140),M=n(67),W=n.n(M),I=function(e){var t=e.nomineeList,n=e.handleDelete,a=u();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(w.a,{maxWidth:"xs",className:a.nomineeList,children:[Object(O.jsx)(y.a,{variant:"h4",color:"initial",align:"center",gutterBottom:!0,children:"Nominee List"}),Object(O.jsx)(B.a,{}),Object(O.jsx)(S.a,{component:"nav",children:t.map((function(e){return Object(O.jsx)(F.a,{in:!0,children:Object(O.jsxs)(T.a,{divider:!0,button:!0,children:[Object(O.jsx)(D.a,{primary:e.title}),Object(O.jsx)(L.a,{className:a.removeBtn,children:Object(O.jsx)(W.a,{onClick:function(){return n(e.key)}})})]})},e.key)}))})]})})},Y=n(141),z=n(128),E=n(142),G=n(147),J=n(146),P=n(54),H=n.n(P),q=function(e){var t=e.movieData,n=Object(a.useState)([]),i=Object(l.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),d=s[0],j=s[1],b=function(e){return r.find((function(t){return t.title===e.Title}))},m=u(),h=Object(Y.a)("(max-width:600px)");return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:m.movieList,children:[Object(O.jsx)(z.a,{in:!0,children:Object(O.jsx)("div",{className:m.banner,children:5===r.length?Object(O.jsx)(y.a,{variant:h?"h5":"h4",align:"center",gutterBottom:!0,color:"initial",children:"You've nominated 5 movies"}):t?null:Object(O.jsx)(y.a,{variant:"h6",color:"secondary",align:"center",children:"No results found \ud83e\udd14"})})}),Object(O.jsxs)("div",{className:m.movieGrid,children:[Object(O.jsx)(E.a,{container:!0,spacing:2,children:t?t.map((function(e){return Object(O.jsx)(E.a,{item:!0,xs:12,sm:6,md:6,lg:4,children:Object(O.jsx)(N,{title:e.Title,year:e.Year,poster:e.Poster,handleClick:function(){return function(e){r.length<5&&c((function(t){return[].concat(Object(x.a)(t),[{title:e.Title,key:H()(),id:e.imdbID}])})),j(!0)}(e)},clickedMovie:b(e)})},H()())})):null}),Object(O.jsx)(I,{nomineeList:r,handleDelete:function(e){c((function(t){return t.filter((function(t){return t.key!==e}))}))}})]})]}),Object(O.jsx)(G.a,{open:d,onClose:function(){return j(!1)},autoHideDuration:1e3,children:r.length<5?Object(O.jsx)(J.a,{onClose:function(){return j(!1)},severity:"success",elevation:6,children:"Movie added for nomination"}):Object(O.jsx)(J.a,{onClose:function(){return j(!1)},severity:"error",elevation:6,children:"Your nominee list is full"})})]})},A=n(143),K=n(144),Q=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),c=Object(l.a)(r,2),d=c[0],j=c[1];Object(a.useEffect)((function(){n&&function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?s=".concat(n,"&type=movie&apikey=dd2c16f0"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,j(a.Search);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]);var b=u();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(A.a,{theme:m,children:[Object(O.jsx)(K.a,{}),Object(O.jsxs)(w.a,{className:b.appContainer,maxWidth:"xl",children:[Object(O.jsxs)("div",{className:b.header,children:[Object(O.jsx)(y.a,{gutterBottom:!0,align:"center",variant:"h2",color:"initial",children:"Shoppies"}),Object(O.jsx)(y.a,{variant:"h6",align:"center",color:"initial",children:"Please nominate 5 movies of your choice for the next Shoppies award! \ud83c\udfc6"})]}),Object(O.jsx)(p,{handleChange:function(e){return i(e.target.value)}}),Object(O.jsx)(q,{movieData:d})]})]})})};r.a.render(Object(O.jsx)(Q,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.a3e53e4d.chunk.js.map