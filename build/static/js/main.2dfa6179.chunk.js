(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),l=n.n(o),c=n(11),i=n(6),u=n(9),s=n(10),d=n(12),m=n(13),h=n(7),p=n.n(h),v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgUrl:"",author:"",isLoaded:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.book,n=t.featured_media,a=t.author,r=p.a.get("/wp-json/wp/v2/media/".concat(n)),o=p.a.get("/wp-json/wp/v2/users/".concat(a));Promise.all([r,o]).then((function(t){e.setState({imgUrl:t[0].data.media_details.sizes.full.source_url,author:t[1].data.name,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.props.book,t=e.id,n=e.title,a=e.excerpt,o=this.state,l=o.author,i=o.imgUrl;return o.isLoaded?r.a.createElement("div",null,r.a.createElement("h2",{style:{marginBottom:"0"}},n.rendered),r.a.createElement("small",null,"Review by ",r.a.createElement("strong",null,l)),r.a.createElement("img",{style:{width:"100%"},src:i,alt:n.rendered}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.rendered}}),r.a.createElement(c.b,{to:"/libro/".concat(t)},"Ver revisi\xf3n del Libro"),r.a.createElement("hr",null)):null}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={books:[],isLoaded:!1},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/wp-json/wp/v2/libros/").then((function(t){return e.setState({books:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.books;return e.isLoaded?r.a.createElement("div",null,r.a.createElement("h1",null,"Qu\xe9 pasa Guille?"),t.map((function(e){return r.a.createElement(v,{key:e.id,book:e})}))):r.a.createElement("h3",null,"Loading...")}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={book:{},isLoaded:!1},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/wp-json/wp/v2/libros/".concat(this.props.match.params.id)).then((function(t){return e.setState({book:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.book;return e.isLoaded?r.a.createElement(a.Fragment,null,r.a.createElement(c.b,{to:"/"},"Regresar a la p\xe1gina principal"),r.a.createElement("hr",null),r.a.createElement("h1",null,t.title.rendered),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}),r.a.createElement("h4",null,"Editor: ",t.acf.publicador)):r.a.createElement("h3",null,"Cargando estoyyyyy...")}}]),n}(a.Component);n(58);var E=function(){return r.a.createElement(c.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/",component:b}),r.a.createElement(i.a,{exact:!0,path:"/libro/:id",component:f})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2dfa6179.chunk.js.map