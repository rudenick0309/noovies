(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{281:function(e,t,n){"use strict";var r=n(28),a=n.n(r),o=n(15),i=n.n(o),u=n(0),l=n.n(u),c=n(490),s=n(95),p=n(60),m=n(69),f=n(242),v=n(493),d=n(489),g=n(488),h=n(491),w=n(16),b=n.n(w),E=n(13),y=n.n(E),x=n(7),O=n.n(x),j=n(283),k=n(18),P=n.n(k),S=n(17),_=n(1),T=n.n(_),R=n(42),D=n(100),V=n(101);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.loading,n=e.children,r=e.contentContainerStyle,a=e.refreshFn,o=Object(u.useState)(!1),c=i()(o,2),s=c[0],p=c[1];return l.a.createElement(R.a,{refreshControl:l.a.createElement(V.a,{onRefresh:function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,y.a.awrap(a());case 3:p(!1);case 4:case"end":return e.stop()}}),null,null,null,Promise)},refreshing:s,enabled:!1,tintColor:"white"}),style:{backgroundColor:"black"},contentContainerStyle:F({flex:t?1:0,justifyContent:t?"center":"flex-start"},r)},t?l.a.createElement(D.a,{color:"white",size:"small"}):n)};C.propTypes={loading:T.a.bool.isRequired,children:T.a.node.isRequired,contentContainerStyle:T.a.object,refreshFn:T.a.func};var I=C,z=n(266),B=n.n(z);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e,t){return B.a.get("https://api.themoviedb.org/3"+e,{params:W({},t,{api_key:"10923b261ba94d897ac6b81148314a3f"})})},H=function(e){var t,n,r,a,o=arguments;return y.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},i.prev=1,i.next=4,y.a.awrap(L(e,t));case 4:return n=i.sent,r=n.data.results,a=n.data,i.abrupt("return",[r||a,null]);case 10:return i.prev=10,i.t0=i.catch(1),console.log(i.t0),i.abrupt("return",[null,i.t0]);case 14:case"end":return i.stop()}}),null,null,[[1,10]],Promise)},N=function(){return H("/movie/now_playing")},A=function(){return H("/movie/popular")},J=function(){return H("/movie/upcoming",{region:"kr"})},Q=function(e){return H("/search/movie",{query:e})},G=function(e){return H("/movie/"+e,{append_to_response:"videos"})},K=function(){return H("/discover/movie")},X=function(){return H("/tv/airing_today")},Y=function(){return H("/tv/on_the_air")},U=function(){return H("/tv/top_rated")},Z=function(){return H("/tv/popular")},$=function(e){return H("/search/tv",{query:e})},ee=function(e){return H("/tv/"+e,{append_to_response:"videos"})},te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80";return e?"https://image.tmdb.org/t/p/w500"+e:t},ne=n(32);function re(){var e=P()(["\n  width: 100px;\n  height: 160px;\n  border-radius: 4px;\n"]);return re=function(){return e},e}var ae=S.a.Image(re()),oe=function(e){var t=e.url;return l.a.createElement(ae,{source:{uri:te(t)}})};oe.propTypes={url:T.a.string};var ie=oe;function ue(){var e=P()(["\n  color: rgb(220, 220, 220);\n  margin-bottom: 7px;\n  font-weight: 500;\n  font-size: 12px;\n"]);return ue=function(){return e},e}var le=S.a.Text(ue()),ce=function(e){var t=e.votes;return l.a.createElement(le,null,"\u2b50\ufe0f ",t," / 10")},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.length>t?e.slice(0,t)+"...":e},pe=function(e){return new Date(e).toLocaleDateString("ko",{day:"numeric",month:"long",year:"numeric"})},me=(n(56),n(40));function fe(){var e=P()(["\n  font-weight: 600;\n  margin-left: 10px;\n"]);return fe=function(){return e},e}function ve(){var e=P()(["\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 5px;\n"]);return ve=function(){return e},e}var de=S.a.View(ve()),ge=S.a.Text(fe()),he=function(e){var t=e.onPress,n=e.text,r=e.icon;return l.a.createElement(me.a,{onPress:t},l.a.createElement(de,null,l.a.createElement(g.a,{name:r,color:"white",size:22}),l.a.createElement(ge,{style:{color:"white"}},n)))};function we(){var e=P()(["\n  color: white;\n  opacity: 0.8;\n  font-weight: 500;\n"]);return we=function(){return e},e}function be(){var e=P()(["\n  margin-top: 30px;\n  color: white;\n  opacity: 0.8;\n  font-weight: 800;\n  margin-bottom: 15px;\n"]);return be=function(){return e},e}function Ee(){var e=P()(["\n  margin-top: 30px;\n  padding: 0px 30px;\n"]);return Ee=function(){return e},e}function ye(){var e=P()(["\n  color: white;\n  font-weight: 600;\n  font-size: 24px;\n  margin-bottom: 10px;\n"]);return ye=function(){return e},e}function xe(){var e=P()(["\n  width: 50%;\n  margin-left: 40px;\n"]);return xe=function(){return e},e}function Oe(){var e=P()(["\n  flex-direction: row;\n  align-items: center;\n  top: 30px;\n"]);return Oe=function(){return e},e}function je(){var e=P()(["\n  height: ","px;\n  align-items: center;\n  justify-content: flex-end;\n"]);return je=function(){return e},e}function ke(){var e=P()(["\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  position: absolute;\n"]);return ke=function(){return e},e}var Pe=S.a.Image(ke()),Se=S.a.View(je(),ne.a.get("window").height/3),_e=S.a.View(Oe()),Te=S.a.View(xe()),Re=S.a.Text(ye()),De=S.a.View(Ee()),Ve=S.a.Text(be()),qe=S.a.Text(we()),Fe=function(e){var t,n=e.openBrowser,r=e.result,a=e.loading;return l.a.createElement(I,{loading:!1,contentContainerStyle:{paddingBottom:80}},l.a.createElement(l.a.Fragment,null,l.a.createElement(Se,null,l.a.createElement(Pe,{source:{uri:te(r.backgroundImage,"-")}}),l.a.createElement(_e,null,l.a.createElement(ie,{url:r.poster}),l.a.createElement(Te,null,l.a.createElement(Re,null,r.title),r.votes?l.a.createElement(ce,{votes:r.votes}):null))),l.a.createElement(De,null,r.overview?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Overview"),l.a.createElement(qe,null,r.overview)):null,a?l.a.createElement(D.a,{style:{marginTop:30},color:"white"}):null,r.spoken_languages?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Languages"),l.a.createElement(qe,null,r.spoken_languages.map((function(e){return e.name+" "})))):null,r.release_date?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Release Date"),l.a.createElement(qe,null,pe(r.release_date))):null,r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Status"),l.a.createElement(qe,null,r.status)):null,r.runtime?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Runtime"),l.a.createElement(qe,null,r.runtime," minutes")):null,r.first_air_date?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"First Air Date"),l.a.createElement(qe,null,pe(r.first_air_date))):null,r.genres?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Genres"),l.a.createElement(qe,null,r.genres.map((function(e,t){return t+1===r.genres.length?e.name:e.name+", "})))):null,r.number_of_episodes?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Seasons / Episodes"),l.a.createElement(qe,null,r.number_of_seasons," / ",r.number_of_episodes)):null,r.imdb_id?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Links"),l.a.createElement(he,{text:"IMDB Page",icon:"imdb",onPress:function(){return n("https://www.imdb.com/title/"+r.imdb_id)}})):null,(null==(t=r.videos.results)?void 0:t.length)>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve,null,"Videos"),r.videos.results.map((function(e){return l.a.createElement(he,{text:e.name,key:e.id,icon:"youtube-play",onPress:function(){return n("https://www.youtube.com/watch?v="+e.key)}})}))):null)))};function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=function(e){var t=e.navigation,n=e.route.params,r=n.isTv,a=n.id,o=n.title,c=n.backgroundImage,s=n.poster,p=n.votes,m=n.overview,f=Object(u.useState)({loading:!0,result:{title:o,backgroundImage:c,poster:s,overview:m,votes:p,videos:{results:[]}}}),v=i()(f,2),d=v[0],g=v[1];Object(u.useEffect)((function(){!function(){var e,t,n;y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!r){o.next=6;break}return o.next=3,y.a.awrap(ee(a));case 3:o.t0=o.sent,o.next=9;break;case 6:return o.next=8,y.a.awrap(G(a));case 8:o.t0=o.sent;case 9:e=o.t0,t=i()(e,2),n=t[0],t[1],g({loading:!1,result:Ie({},n,{title:n.title||n.name,backgroundImage:n.backdrop_path,poster:n.poster_path,overview:n.overview,votes:n.vote_average})});case 14:case"end":return o.stop()}}),null,null,null,Promise)}()}),[a]),l.a.useLayoutEffect((function(){t.setOptions({title:o})}));return l.a.createElement(Fe,b()({openBrowser:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(j.a(e));case 2:case"end":return t.stop()}}),null,null,null,Promise)}},d))},Be=n(492),Me=n(282),We=n(27);function Le(){var e=P()(["\n  color: white;\n"]);return Le=function(){return e},e}function He(){var e=P()(["\n  margin-top: 10px;\n  background-color: #e74c3c;\n  padding: 7px 10px;\n  border-radius: 3px;\n"]);return He=function(){return e},e}function Ne(){var e=P()(["\n  color: rgb(220, 220, 220);\n  font-size: 14px;\n  font-weight: 500;\n"]);return Ne=function(){return e},e}function Ae(){var e=P()(["\n  margin-bottom: 7px;\n"]);return Ae=function(){return e},e}function Je(){var e=P()(["\n  color: white;\n  font-weight: bold;\n  font-size: 19px;\n  margin-bottom: 10px;\n"]);return Je=function(){return e},e}function Qe(){var e=P()(["\n  width: 50%;\n  align-items: flex-start;\n"]);return Qe=function(){return e},e}function Ge(){var e=P()(["\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n"]);return Ge=function(){return e},e}function Ke(){var e=P()(["\n  height: 100%;\n  width: 100%;\n  opacity: 0.4;\n  position: absolute;\n"]);return Ke=function(){return e},e}function Xe(){var e=P()(["\n  height: 100%;\n  width: 100%;\n"]);return Xe=function(){return e},e}var Ye=S.a.View(Xe()),Ue=S.a.Image(Ke()),Ze=S.a.View(Ge()),$e=S.a.View(Qe()),et=S.a.Text(Je()),tt=S.a.View(Ae()),nt=S.a.Text(Ne()),rt=S.a.View(He()),at=S.a.Text(Le()),ot=function(e){var t=e.id,n=e.title,r=e.backgroundImage,a=e.votes,o=e.overview,i=e.poster,u=Object(We.useNavigation)();return l.a.createElement(Ye,null,l.a.createElement(Ue,{source:{uri:te(r)}}),l.a.createElement(Ze,null,l.a.createElement(ie,{url:i}),l.a.createElement($e,null,l.a.createElement(et,null,se(n,40)),l.a.createElement(tt,null,l.a.createElement(ce,{votes:a})),l.a.createElement(nt,null,se(o,80)),l.a.createElement(me.a,{onPress:function(){return u.navigate("Detail",{id:t,title:n,backgroundImage:r,votes:a,overview:o,poster:i})}},l.a.createElement(rt,null,l.a.createElement(at,null,"View details"))))))};ot.propTypes={id:T.a.number.isRequired,title:T.a.string.isRequired,backgroundImage:T.a.string.isRequired,votes:T.a.number.isRequired,overview:T.a.string.isRequired,poster:T.a.string.isRequired};var it=ot;function ut(){var e=P()(["\n  color: white;\n  font-weight: 500;\n  margin: 10px 0px 5px 0px;\n"]);return ut=function(){return e},e}function lt(){var e=P()(["\n  align-items: center;\n  margin-right: 20px;\n"]);return lt=function(){return e},e}var ct=S.a.View(lt()),st=S.a.Text(ut()),pt=function(e){var t=e.isTv,n=void 0!==t&&t,r=e.id,a=e.poster,o=e.title,i=e.votes,u=Object(We.useNavigation)();return l.a.createElement(me.a,{onPress:function(){u.navigate("Detail",{isTv:n,id:r,title:o,poster:a,votes:i})}},l.a.createElement(ct,null,l.a.createElement(ie,{url:a}),l.a.createElement(st,null,se(o,10)),i>0&&l.a.createElement(ce,{votes:i})))};pt.propTypes={id:T.a.number.isRequired,poster:T.a.string,title:T.a.string.isRequired,votes:T.a.number.isRequired};var mt=pt;function ft(){var e=P()(["\n  margin-top: 10px;\n  color: white;\n  opacity: 0.8;\n"]);return ft=function(){return e},e}function vt(){var e=P()(["\n  color: white;\n  opacity: 0.8;\n  font-size: 12px;\n"]);return vt=function(){return e},e}function dt(){var e=P()(["\n  color: white;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]);return dt=function(){return e},e}function gt(){var e=P()(["\n  align-items: flex-start;\n  width: 65%;\n  margin-left: 25px;\n"]);return gt=function(){return e},e}function ht(){var e=P()(["\n  padding: 0px 30px;\n  margin-bottom: 30px;\n  flex-direction: row;\n  align-items: flex-start;\n"]);return ht=function(){return e},e}var wt=S.a.View(ht()),bt=S.a.View(gt()),Et=S.a.Text(dt()),yt=S.a.Text(vt()),xt=S.a.Text(ft()),Ot=function(e){var t=e.isTv,n=void 0!==t&&t,r=e.id,a=e.title,o=e.poster,i=e.overview,u=e.releaseDate,c=Object(We.useNavigation)();return l.a.createElement(me.a,{onPress:function(){c.navigate("Detail",{isTv:n,id:r,title:a,poster:o,overview:i,releaseDate:u})}},l.a.createElement(wt,null,l.a.createElement(ie,{url:o}),l.a.createElement(bt,null,l.a.createElement(Et,null,se(a,30)),u?l.a.createElement(yt,null,pe(u)):null,l.a.createElement(xt,null,se(i,80)))))};Ot.propTypes={id:T.a.number.isRequired,title:T.a.string.isRequired,releaseDate:T.a.string,poster:T.a.string.isRequired,overview:T.a.string.isRequired};var jt=Ot;function kt(){var e=P()(["\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 30px;\n"]);return kt=function(){return e},e}var Pt=S.a.Text(kt()),St=function(e){var t=e.title;return l.a.createElement(Pt,null,t)};St.propTypes={title:T.a.string.isRequired};var _t=St,Tt=n(2),Rt=function(e){var t=e.title,n=e.children;return l.a.createElement(Tt.a,null,l.a.createElement(_t,{title:t}),l.a.createElement(R.a,{style:{marginTop:20,marginBottom:40},contentContainerStyle:{paddingLeft:30},horizontal:!0,showsHorizontalScrollIndicator:!1},n))};Rt.propTypes={title:T.a.string.isRequired,children:T.a.node.isRequired};var Dt=Rt;function Vt(){var e=P()(["\n  margin-top: 20px;\n"]);return Vt=function(){return e},e}var qt=S.a.View(Vt()),Ft=function(e){var t=e.title,n=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(_t,{title:t}),l.a.createElement(qt,null,n))};function Ct(){var e=P()([""]);return Ct=function(){return e},e}function It(){var e=P()(["\n  width: 100%;\n  height: ","px;\n  margin-bottom: 40px;\n"]);return It=function(){return e},e}var zt=ne.a.get("window"),Bt=(zt.width,zt.height),Mt=S.a.View(It(),Bt/3),Wt=S.a.View(Ct()),Lt=function(e){var t=e.refreshFn,n=e.loading,r=e.nowPlaying,a=e.popular,o=e.upcoming;return l.a.createElement(I,{refreshFn:t,loading:n},l.a.createElement(l.a.Fragment,null,l.a.createElement(Mt,null,l.a.createElement(Me.a,{controlsEnabled:!1,loop:!0,timeout:3},r.map((function(e){return l.a.createElement(it,{key:e.id,id:e.id,title:e.original_title,overview:e.overview,votes:e.vote_average,backgroundImage:e.backdrop_path,poster:e.poster_path})})))),l.a.createElement(Wt,null,l.a.createElement(Dt,{title:"Popular Movies"},a.map((function(e){return l.a.createElement(mt,{id:e.id,key:e.id,poster:e.poster_path,title:e.title,votes:e.vote_average})}))),l.a.createElement(Ft,{title:"Coming Soon"},o.map((function(e){return l.a.createElement(jt,{key:e.id,id:e.id,title:e.title,releaseDate:e.release_date,poster:e.poster_path,overview:e.overview})}))))))},Ht=function(){var e=Object(u.useState)(!1),t=i()(e,2),n=(t[0],t[1],Object(u.useState)({loading:!0,nowPlaying:[],popular:[],upcoming:[],nowPlayingError:null,popularError:null,upcomingError:null})),r=i()(n,2),a=r[0],o=r[1],c=function(){var e,t,n,r,a,u,l,c,s,p,m,f;return y.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,y.a.awrap(N());case 2:return e=v.sent,t=i()(e,2),n=t[0],r=t[1],v.next=8,y.a.awrap(A());case 8:return a=v.sent,u=i()(a,2),l=u[0],c=u[1],v.next=14,y.a.awrap(J());case 14:s=v.sent,p=i()(s,2),m=p[0],f=p[1],o({loading:!1,nowPlaying:n,popular:l,upcoming:m,nowPlayingError:r,popularError:c,upcomingError:f});case 19:case"end":return v.stop()}}),null,null,null,Promise)};return Object(u.useEffect)((function(){c()}),[]),l.a.createElement(Lt,b()({refreshFn:c},a))};function Nt(){var e=P()(["\n  margin-top: 30px;\n"]);return Nt=function(){return e},e}var At=S.a.View(Nt()),Jt=function(e){var t=e.refreshFn,n=e.loading,r=e.popular,a=e.topRated,o=e.today;return l.a.createElement(I,{refreshFn:t,loading:n},l.a.createElement(At,null,l.a.createElement(Dt,{title:"Popular Shows"},r.map((function(e){return l.a.createElement(mt,{isTv:!0,id:e.id,key:e.id,poster:e.poster_path,title:e.name,votes:e.vote_average})}))),l.a.createElement(Dt,{title:"Top Rated"},a.map((function(e){return l.a.createElement(mt,{isTv:!0,id:e.id,key:e.id,poster:e.poster_path,title:e.name,votes:e.vote_average})}))),l.a.createElement(Ft,{title:"Airing Today"},o.map((function(e){return l.a.createElement(jt,{isTv:!0,key:e.id,id:e.id,title:e.name,poster:e.poster_path,overview:e.overview})})))))},Qt=function(){var e=Object(u.useState)({loading:!0,today:[],thisWeek:[],topRated:[],popular:[],todayError:null,thisWeekError:null,topRatedError:null,popularError:null}),t=i()(e,2),n=t[0],r=t[1],a=function(){var e,t,n,a,o,u,l,c,s,p,m,f,v,d,g,h;return y.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,y.a.awrap(X());case 2:return e=w.sent,t=i()(e,2),n=t[0],a=t[1],w.next=8,y.a.awrap(U());case 8:return o=w.sent,u=i()(o,2),l=u[0],c=u[1],w.next=14,y.a.awrap(Z());case 14:return s=w.sent,p=i()(s,2),m=p[0],f=p[1],w.next=20,y.a.awrap(Y());case 20:v=w.sent,d=i()(v,2),g=d[0],h=d[1],r({loading:!1,today:n,thisWeek:g,topRated:l,popular:m,todayError:a,thisWeekError:h,topRatedError:c,popularError:f});case 25:case"end":return w.stop()}}),null,null,null,Promise)};return Object(u.useEffect)((function(){a()}),[]),l.a.createElement(Jt,b()({refreshFn:a},n))};function Gt(){var e=P()(["\n  background-color: white;\n  margin: 0px 30px;\n  padding: 10px 20px;\n  border-radius: 15px;\n  margin-bottom: 50px;\n"]);return Gt=function(){return e},e}var Kt=S.a.TextInput(Gt()),Xt=function(e){var t=e.placeholder,n=e.value,r=e.onChange,a=e.onSubmit;return l.a.createElement(Kt,{value:n,onChangeText:r,placeholder:t,onSubmitEditing:a,returnKeyType:"search"})};Xt.propTypes={placeholder:T.a.string.isRequired,value:T.a.string.isRequired,onChange:T.a.func.isRequired,onSubmit:T.a.func.isRequired};var Yt=Xt,Ut=function(e){var t=e.movies,n=e.shows,r=e.keyword,a=e.onChange,o=e.onSubmit;return l.a.createElement(I,{refreshFn:o,loading:!1,contentContainerStyle:{paddingTop:10}},l.a.createElement(Yt,{placeholder:"Write a keyword",value:r,onChange:a,onSubmit:o}),0!==t.length&&l.a.createElement(Dt,{title:"Movie Results"},t.map((function(e){return l.a.createElement(mt,{key:e.id,id:e.id,votes:e.vote_average,title:e.title,poster:e.poster_path||e.backdrop_path})}))),0!==n.length&&l.a.createElement(Dt,{title:"TV Results"},n.map((function(e){return l.a.createElement(mt,{isTv:!0,key:e.id,id:e.id,votes:e.vote_average,title:e.name,poster:e.poster_path})}))))},Zt=function(){var e=Object(u.useState)(""),t=i()(e,2),n=t[0],r=t[1],a=Object(u.useState)({movies:[],shows:[],movieError:null,showsError:null}),o=i()(a,2),c=o[0],s=o[1];return l.a.createElement(Ut,b()({},c,{onChange:function(e){return r(e)},onSubmit:function(){var e,t,r,a,o,u,l,c;return y.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(""!==n){p.next=2;break}return p.abrupt("return");case 2:return p.next=4,y.a.awrap(Q(n));case 4:return e=p.sent,t=i()(e,2),r=t[0],a=t[1],p.next=10,y.a.awrap($(n));case 10:o=p.sent,u=i()(o,2),l=u[0],c=u[1],s({movies:r,shows:l,movieError:a,showsError:c});case 15:case"end":return p.stop()}}),null,null,null,Promise)},keyword:n}))},$t=n(79),en=n(5);function tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tn(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function rn(){var e=P()(["\n  border-radius: 20px;\n  width: 100%;\n  height: 100%;\n"]);return rn=function(){return e},e}function an(){var e=P()(["\n  flex: 1;\n  background-color: black;\n  align-items: center;\n"]);return an=function(){return e},e}var on=ne.a.get("window"),un=on.width,ln=on.height,cn=S.a.View(an()),sn=S.a.Image(rn()),pn={top:50,height:ln/1.5,width:"90%",position:"absolute"},mn=function(e){var t=e.results,n=Object(u.useState)(0),r=i()(n,2),o=r[0],c=r[1],s=function(){return c((function(e){return e+1}))},p=new en.a.ValueXY,m=$t.a.create({onStartShouldSetPanResponder:function(){return!0},onPanResponderMove:function(e,t){var n=t.dx,r=t.dy;p.setValue({x:n,y:r})},onPanResponderRelease:function(e,t){var n=t.dx,r=t.dy;n>=250?en.a.spring(p,{toValue:{x:un+100,y:r}}).start(s):n<=-250?en.a.spring(p,{toValue:{x:-un-100,y:r}}).start(s):en.a.spring(p,{toValue:{x:0,y:0}}).start()}}),f=p.x.interpolate({inputRange:[-255,0,255],outputRange:["-8deg","0deg","8deg"],extrapolate:"clamp"}),v=p.x.interpolate({inputRange:[-255,0,255],outputRange:[1,.2,1],extrapolate:"clamp"}),d=p.x.interpolate({inputRange:[-255,0,255],outputRange:[1,.8,1],extrapolate:"clamp"});return Object(u.useEffect)((function(){p.setValue({x:0,y:0})}),[o]),l.a.createElement(cn,null,t.map((function(e,t){return t<o?null:t===o?l.a.createElement(en.a.View,b()({style:nn({},pn,{zIndex:1,transform:[{rotate:f}].concat(a()(p.getTranslateTransform()))}),key:e.id},m.panHandlers),l.a.createElement(sn,{source:{uri:te(e.poster_path)}})):t===o+1?l.a.createElement(en.a.View,b()({style:nn({},pn,{zIndex:-t,opacity:v,transform:[{scale:d}]}),key:e.id},m.panHandlers),l.a.createElement(sn,{source:{uri:te(e.poster_path)}})):l.a.createElement(en.a.View,b()({style:nn({},pn,{zIndex:-t,opacity:0}),key:e.id},m.panHandlers),l.a.createElement(sn,{source:{uri:te(e.poster_path)}}))})))},fn=function(){var e=Object(u.useState)({results:[],error:null}),t=i()(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){!function(){var e,t,n,a;y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,y.a.awrap(K());case 2:e=o.sent,t=i()(e,2),n=t[0],a=t[1],r({results:n,error:a});case 7:case"end":return o.stop()}}),null,null,null,Promise)}()}),[]),l.a.createElement(mn,n)},vn=n(12),dn=Object(Be.a)(),gn=function(e){var t=e.navigation,n=e.route;return Object(u.useLayoutEffect)((function(){var e=function(e){var t;return(null==e||null==(t=e.state)?void 0:t.routeNames[e.state.index])||"Movies"}(n);t.setOptions({title:e})}),[n]),l.a.createElement(dn.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n=e.focused,r="ios"===vn.a.OS?"ios-":"md-";return"Movies"===t.name?r+="film":"TV"===t.name?r+="tv":"Search"===t.name?r+="search":"Discovery"===t.name&&(r+="heart"),l.a.createElement(d.a,{name:r,color:n?"white":"grey",size:26})}}},tabBarOptions:{showLabel:!1,style:{backgroundColor:"black",borderTopColor:"black"}}},l.a.createElement(dn.Screen,{name:"Movies",component:Ht}),l.a.createElement(dn.Screen,{name:"TV",component:Qt}),l.a.createElement(dn.Screen,{name:"Search",component:Zt}),l.a.createElement(dn.Screen,{name:"Discovery",component:fn}))},hn=Object(h.a)(),wn=function(){return l.a.createElement(hn.Navigator,{screenOptions:{headerStyle:{backgroundColor:"black",borderBottomColor:"black",shadowColor:"black"},headerTintColor:"white",headerBackTitleVisible:!1}},l.a.createElement(hn.Screen,{name:"Tab",component:gn}),l.a.createElement(hn.Screen,{name:"Detail",component:ze}))};n.d(t,"a",(function(){return bn}));function bn(){var e=Object(u.useState)(!1),t=i()(e,2),r=t[0],o=t[1];return r?l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(wn,null)),l.a.createElement(m.a,{barStyle:"light-content"})):l.a.createElement(c.a,{startAsync:function(){var e=function(e){return e.map((function(e){return"string"===typeof e?p.a.prefetch(e):v.a.fromModule(e).downloadAsync()}))}(["https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",n(469)]),t=function(e){return e.map((function(e){return[s.b(e),s.b(e)]}))}([d.a.font,g.a.font]);return Promise.all([].concat(a()(e),a()(t)))},onFinish:function(){return o(!0)},onError:console.error})}},292:function(e,t,n){n(293),e.exports=n(475)},293:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},469:function(e,t,n){e.exports=n.p+"static/media/splash.a8e4ac9b.png"}},[[292,1,2]]]);
//# sourceMappingURL=app.ca1378a3.chunk.js.map