(this["webpackJsonpmovie-crud"]=this["webpackJsonpmovie-crud"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(24),o=n.n(r),c=(n(31),n(13)),s=(n(32),n(12)),u=n(2),l=n(8),d=n.n(l),h=n(14),j=n(4),m=n(5),b=n(7),v=n(6),p=(n(34),n(26)),O=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"https://upload.wikimedia.org/wikipedia/pt/7/74/Kingsglaive_Final_Fantasy_XV.png",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"http://roksolana-pleshkanovska.de/wp-content/uploads/2015/01/final_fantasy.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"https://br.web.img3.acsta.net/c_310_420/pictures/17/03/21/15/39/179516.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"https://www.filmmusicsite.com/pt/images/covers/large/31037.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"https://images-na.ssl-images-amazon.com/images/I/91lF%2BK1jhbL._AC_SX466_.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(O));var f=function(){return JSON.parse(localStorage.getItem("movies"))},g=function(e){return localStorage.setItem("movies",JSON.stringify(e))},x="OK",y=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},k=function(e){var t=f().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){y(t)(e)}))},S=function(e){return new Promise((function(t){var n=f().map((function(t){return t.id===parseInt(e.id,10)?Object(c.a)(Object(c.a)({},t),e):t}));g(n),y(x)(t)}))},w=function(e){return new Promise((function(t){var n=f(),i=n[n.length-1].id+1,a=Object(c.a)(Object(c.a)({},e),{},{id:i});n=[].concat(Object(p.a)(n),[a]),g(n),y(x)(t)}))},I=n(0),C=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(I.jsx)("h2",{id:"loading",children:"Carregando..."})}}]),n}(i.Component),R=n(18),M=n(15),_=(n(36),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).state=Object(c.a)({},e.movie),i.handleSubmit=i.handleSubmit.bind(Object(M.a)(i)),i}return Object(m.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(R.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(I.jsx)("div",{id:"titulo",children:Object(I.jsxs)("label",{htmlFor:"movie_title",children:["T\xedtulo:",Object(I.jsx)("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(I.jsx)("div",{id:"subtitulo",children:Object(I.jsxs)("label",{htmlFor:"movie_subtitle",children:["Subt\xedtulo:",Object(I.jsx)("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(I.jsx)("div",{id:"imagePath",className:"row",children:Object(I.jsxs)("label",{htmlFor:"movie_image",children:["Imagem:",Object(I.jsx)("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(I.jsx)("div",{id:"sinopse",children:Object(I.jsxs)("label",{htmlFor:"movie_storyline",children:["Sinopse:",Object(I.jsx)("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(I.jsx)("div",{id:"genero",children:Object(I.jsxs)("label",{htmlFor:"movie_genre",children:["G\xeanero:",Object(I.jsxs)("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(I.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(I.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(I.jsx)("option",{value:"thriller",children:"Suspense"}),Object(I.jsx)("option",{value:"fantasy",children:"Fantasia"})]})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(I.jsx)("div",{id:"nota",children:Object(I.jsx)("label",{htmlFor:"movie_rating",children:Object(I.jsx)("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})})})}},{key:"renderSubmitButton",value:function(){return Object(I.jsx)("div",{children:Object(I.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"Submit"})})}},{key:"render",value:function(){return Object(I.jsx)("div",{id:"divFormulario",children:Object(I.jsxs)("form",{children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()]})})}}]),n}(a.a.Component)),P=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.storyline,i=e.id,a=e.imagePath;return Object(I.jsxs)("div",{"data-testid":"movie-card",className:"card",children:[Object(I.jsx)("section",{className:"sectionImage",children:Object(I.jsx)("img",{className:"sectionImage",src:a,alt:"Capa do filme ".concat(t)})}),Object(I.jsx)("section",{children:Object(I.jsx)("h1",{children:t})}),Object(I.jsx)("section",{children:Object(I.jsx)("h5",{children:n})}),Object(I.jsx)("p",{children:Object(I.jsx)(s.b,{to:"/movie-crud/movies/".concat(i),children:"VER DETALHES"})})]})}}]),n}(a.a.Component),A=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).deleteMovie=function(){!function(e){var t=f();t=t.filter((function(t){return t.id!==parseInt(e,10)})),g(t),new Promise((function(e){y({status:x})(e)}))}(i.props.match.params.id),i.setState({shouldRedirect:!0})},i.state={loading:!0,movie:{},shouldRedirect:!1},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,k(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.loading,i=e.shouldRedirect,a=t.title,r=t.storyline,o=t.imagePath,c=t.genre,l=t.rating,d=t.subtitle,h=t.id;return n?Object(I.jsx)(C,{}):i?Object(I.jsx)(u.a,{to:"/movie-crud/"}):Object(I.jsxs)("div",{"data-testid":"movie-details",className:"movieDetails",children:[Object(I.jsx)("img",{className:"divImage",alt:"Movie Cover",src:o}),Object(I.jsx)("h1",{children:a}),Object(I.jsx)("p",{children:"Subtitle: ".concat(d)}),Object(I.jsx)("p",{children:"Storyline: ".concat(r)}),Object(I.jsx)("p",{children:"Genre: ".concat(c)}),Object(I.jsx)("p",{children:"Rating: ".concat(l)}),Object(I.jsxs)("div",{className:"divLinks",children:[Object(I.jsx)(s.b,{to:"/movie-crud/movies/".concat(h,"/edit"),children:"EDITAR"}),Object(I.jsx)(s.b,{to:"/movie-crud/",children:"VOLTAR"}),Object(I.jsx)(s.b,{to:"/movie-crud/",onClick:this.deleteMovie,children:"DELETAR"})]})]})}}]),n}(i.Component),N=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={movies:[],loading:!0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.showMovies()}},{key:"showMovies",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=f();y(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?Object(I.jsx)(C,{}):Object(I.jsx)("div",{"data-testid":"movie-list",className:"divList",children:t.map((function(e){return Object(I.jsx)(P,{movie:e},e.title)}))})}}]),n}(i.Component),F=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).state={shouldRedirect:!1},i.handleSubmit=i.handleSubmit.bind(Object(M.a)(i)),i}return Object(m.a)(n,[{key:"handleSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.shouldRedirect?Object(I.jsx)(u.a,{to:"/movie-crud/"}):Object(I.jsx)("div",{"data-testid":"new-movie",children:Object(I.jsx)(_,{onSubmit:this.handleSubmit})})}}]),n}(i.Component),T=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).state={loading:!0,movie:{},shouldRedirect:!1},i.handleSubmit=i.handleSubmit.bind(Object(M.a)(i)),i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovieUpdate()}},{key:"handleSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovieUpdate",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,k(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.shouldRedirect,i=e.movie;return n?Object(I.jsx)(u.a,{to:"/movie-crud/"}):t?Object(I.jsx)(C,{}):Object(I.jsx)("div",{"data-testid":"edit-movie",children:Object(I.jsx)(_,{movie:i,onSubmit:this.handleSubmit})})}}]),n}(i.Component),D=(n(42),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(I.jsx)("div",{id:"error","data-testid":"404-error",children:"P\xe1gina n\xe3o encontrada"})}}]),n}(i.Component));var E=function(){return Object(I.jsxs)(s.a,{children:[Object(I.jsxs)("header",{children:[Object(I.jsx)("h1",{id:"title",children:"Movie Card Library CRUD"}),Object(I.jsx)(s.b,{to:"/movie-crud/movies/new",children:"ADICIONAR CART\xc3O"})]}),Object(I.jsxs)(u.d,{children:[Object(I.jsx)(u.b,{path:"/movie-crud",component:N}),Object(I.jsx)(u.b,{exact:!0,path:"/movie-crud/",component:N}),Object(I.jsx)(u.b,{path:"/movie-crud/movies/new",component:F}),Object(I.jsx)(u.b,{exact:!0,path:"/movie-crud/movies/:id",render:function(e){return Object(I.jsx)(A,Object(c.a)({},e))}}),Object(I.jsx)(u.b,{exact:!0,path:"/movie-crud/movies/:id/edit",render:function(e){return Object(I.jsx)(T,Object(c.a)({},e))}}),Object(I.jsx)(u.b,{status:404,component:D})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(I.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.c04fc5bf.chunk.js.map