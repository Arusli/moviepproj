(this.webpackJsonpmovieproj=this.webpackJsonpmovieproj||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),i=a(19),c=a.n(i),n=a(7),l=a.n(n),o=a(8),p=a(3),h=a(4),m=a(6),d=a(5),u=a(0),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={initial:!0,searchterm:"",displayterm:""},e.onInputChange=function(t){e.setState({searchterm:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchterm),e.setState({displayterm:e.state.searchterm.toUpperCase()}),e.setState({searchterm:"",initial:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){return this.state.initial?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"ui basic segment center aligned",style:{color:"cornflowerblue"},children:"FILMOGRAPHY FINDER"}),Object(u.jsx)("div",{style:{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"ui center aligned container",children:[Object(u.jsx)("form",{className:"ui center aligned huge input focus",onSubmit:this.onSubmit,children:Object(u.jsx)("input",{type:"text",placeholder:"ex. matt damon",onChange:this.onInputChange,value:this.state.searchterm})}),Object(u.jsx)("h4",{children:"(search an actor...)"})]})})]}):Object(u.jsx)("div",{className:"ui container",style:{marginBottom:"50px"},children:Object(u.jsxs)("div",{className:"ui center aligned container",children:[Object(u.jsx)("h1",{className:"ui basic segment center aligned",style:{color:"cornflowerblue"},children:"FILMOGRAPHY FINDER"}),Object(u.jsx)("form",{className:"ui center aligned huge input focus",onSubmit:this.onSubmit,children:Object(u.jsx)("input",{type:"text",placeholder:"ex. matt damon...",onChange:this.onInputChange,value:this.state.searchterm})})]})})}}]),a}(s.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).click=function(){e.props.matchState(e.props),e.props.click()},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"column",onClick:this.click,style:{cursor:"pointer"},children:Object(u.jsxs)("div",{className:"ui center aligned segment",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"ui centered image",src:this.props.profilePathSmall,style:{width:150,height:225},alt:this.props.actorName})}),Object(u.jsx)("div",{children:this.props.actorName})]})},this.props.actorId)}}]),a}(s.a.Component),f="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg",g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"mapArray",value:function(e){return e.profile_path?Object(u.jsx)(b,{actorId:e.id,actorName:e.name,profilePathSmall:"https://www.themoviedb.org/t/p/w150_and_h225_bestv2"+e.profile_path,profilePathLarge:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+e.profile_path,matchState:this.props.matchState,click:this.props.click},e.id):Object(u.jsx)(b,{actorId:e.id,actorName:e.name,profilePathSmall:f,profilePathLarge:f,matchState:this.props.matchState,click:this.props.click},e.id)}},{key:"render",value:function(){return Object(u.jsxs)("div",{style:{display:this.props.display},children:[Object(u.jsx)("div",{style:{margin:"20px"},className:"ui container",children:Object(u.jsxs)("h5",{children:["Results for: ",this.props.searchTerm]})}),Object(u.jsx)("div",{className:"ui stackable four column grid",children:this.props.personArray.map(this.mapArray,this)})]})}}]),a}(s.a.Component),O="https://www.themoviedb.org/t/p/w150_and_h225_bestv2",v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"mapImages",value:function(e){if("movie"===e.media_type){if(e.poster_path&&e.release_date)return Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"ui center aligned segment",children:[Object(u.jsx)("img",{className:"ui centered image",src:O+e.poster_path,alt:e.title}),Object(u.jsxs)("h5",{children:[e.title," (",e.release_date.substr(0,4),")"]})]})},e.id);if(e.poster_path)return Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"ui center aligned segment",children:[Object(u.jsx)("img",{className:"ui centered image",src:O+e.poster_path,alt:e.title}),Object(u.jsxs)("h5",{children:[e.title," "]})]})},e.id)}else if("movie"!==e.media_type){if(e.poster_path&&e.first_air_date)return Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"ui center aligned segment",children:[Object(u.jsx)("img",{className:"ui centered image",src:O+e.poster_path,alt:e.name}),Object(u.jsxs)("h5",{children:[e.name," (",e.first_air_date.substr(0,4),")"]})]})},e.id);if(e.poster_path)return Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"ui center aligned segment",children:[Object(u.jsx)("img",{className:"ui centered image",src:O+e.poster_path,alt:e.name}),Object(u.jsxs)("h5",{children:[e.name," "]})]})},e.id)}}},{key:"render",value:function(){return this.props.filmArray.length>0?Object(u.jsxs)("div",{className:"ui container",children:[Object(u.jsx)("div",{className:"ui segment",style:{backgroundColor:"skyblue",padding:"20px"},children:Object(u.jsxs)("div",{className:"ui stackable grid",children:[Object(u.jsx)("div",{className:"four wide column",children:Object(u.jsxs)("div",{className:"ui center aligned container",children:[Object(u.jsx)("img",{className:"ui centered image",src:this.props.profileUrlLarge,alt:this.props.actorName}),Object(u.jsx)("h3",{children:this.props.actorName})]})}),Object(u.jsx)("div",{className:"ten wide column",children:this.props.actorBio})]})}),Object(u.jsxs)("div",{className:"ui center aligned container",style:{margin:"25px"},children:[Object(u.jsx)("h4",{children:"FILM and TV CREDITS"}),Object(u.jsx)("h4",{children:"(cast only)"})]}),Object(u.jsx)("div",{className:"ui stackable four column grid",children:this.props.filmArray.map(this.mapImages,this)})]}):Object(u.jsx)("div",{style:{display:"none"}})}}]),a}(s.a.Component),y=a(9),x=a.n(y),N="b48c4b54c6c63147c8e82f9fe931740c",S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={response:null,actorId:null,searchTerm:"",searchResults:[],personArray:[],filmArray:[],actorBio:"",actorName:"",profileUrlLarge:"",profileUrlSmall:"",resultsDisplay:"none"},e.onSubmit=function(){var t=Object(o.a)(l.a.mark((function t(a){var r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,x.a.get("https://api.themoviedb.org/3/search/person",{params:{api_key:N,query:a}});case 3:s=t.sent,e.setState({filmArray:[],response:s.data,searchResults:s.data.results,resultsDisplay:"inline",searchTerm:a.toUpperCase()}),e.state.searchResults.forEach((function(e){r.push({name:e.name,id:e.id,profile_path:e.profile_path})})),e.setState({personArray:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCreditsAndBio=Object(o.a)(l.a.mark((function t(){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.themoviedb.org/3/person/".concat(e.state.actorId,"/combined_credits"),{params:{api_key:N}});case 2:return a=t.sent,t.next=5,x.a.get("https://api.themoviedb.org/3/person/".concat(e.state.actorId),{params:{api_key:N}});case 5:r=t.sent,s=e.removeDuplicatesAndSort(a.data.cast),e.setState({filmArray:s}),r.data.biography?e.setState({actorBio:r.data.biography,actorName:r.data.name}):e.setState({actorBio:"Biography unavailable.",actorName:r.data.name});case 9:case"end":return t.stop()}}),t)}))),e.click=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({filmArray:[]});case 2:e.changeFilms(),e.setState({resultsDisplay:"none"});case 4:case"end":return t.stop()}}),t)}))),e.matchState=function(t){e.setState({actorId:t.actorId,actorBio:t.actorBio,actorName:t.actorName,actorImage:t.actorImage,profileUrlLarge:t.profilePathLarge,profileUrlSmall:t.profilePathSmall,filmArray:t.filmArray})},e}return Object(h.a)(a,[{key:"removeDuplicatesAndSort",value:function(e){var t=e.map((function(e){return e.id}));return e.filter((function(a,r){return t.indexOf(t[r])===e.indexOf(a)})).sort((function(e,t){return t.popularity-e.popularity}))}},{key:"changeFilms",value:function(){this.getCreditsAndBio()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"ui container",children:[Object(u.jsx)(j,{onSubmit:this.onSubmit,display:this.state.resultsDisplay}),Object(u.jsx)(g,{personArray:this.state.personArray,display:this.state.resultsDisplay,searchTerm:this.state.searchTerm,matchState:this.matchState,click:this.click}),Object(u.jsx)(v,{filmArray:this.state.filmArray,profileUrlLarge:this.state.profileUrlLarge,actorBio:this.state.actorBio,actorName:this.state.actorName})]})}}]),a}(s.a.Component);c.a.render(Object(u.jsx)(S,{}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1465379a.chunk.js.map