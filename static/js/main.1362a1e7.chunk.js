(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return U}));var A=n(10),r=n.n(A),a=n(17),s=n(42),c=n(3),o=n(12),i=n(23),u=n(28),l="ADD-POST",d="SET_USER_PROFILE",p="SET_STATUS",j="DELETE_POST",f="SAVE_PHOTO_SUCCESS",h={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It's hard",likesCount:17}],profile:null,status:""},b=function(e){return{type:l,text:e}},g=function(e){return{type:p,status:e}},O=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getUser(e);case 2:A=t.sent,n({type:d,profile:A});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:A=t.sent,n(g(A.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.saveMyPhoto(e);case 2:0===(A=t.sent).data.resultCode&&(n((r=A.data.data.photos,{type:f,photos:r})),n(Object(i.e)()));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n,A){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=A().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(O(a)),t.next=12;break;case 8:return s.data.messages[0].substr(s.data.messages[0].indexOf(">")+1).slice(0,-1),console.log({contacts:{isWhereError:[s.data.messages[0]]}}),n(Object(u.b)("editProfile",{contacts:{isWhereError:s.data.messages[0]}})),t.abrupt("return",Promise.reject());case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.text,A={id:3,message:n,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[A])});case j:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case p:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case f:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));n(0);var A=n(135),r=n.n(A).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3208ca02-74e8-460f-ad52-2022af0286c5"}}),a={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFollow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getUnfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getUser:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getAuthMe:function(){return r.get("auth/me").then((function(e){return e.data}))}},s={login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],A=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:A})},logout:function(){return r.delete("auth/login")}},c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},saveMyPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}}},136:function(e,t,n){e.exports={preloader:"Preloader_preloader__1YXBc"}},138:function(e,t,n){e.exports={loginText:"Login_loginText__2YLSp"}},171:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},19:function(e,t,n){e.exports={nav:"Nav_nav__3FOwX",item:"Nav_item__1DKU2",activeLink:"Nav_activeLink__3uDD3"}},23:function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b}));var A=n(10),r=n.n(A),a=n(17),s=n(3),c=n(28),o=n(12),i="samurai-network/auth/SET_USER_DATA",u="UPDATE_PROFILE_PHOTO",l={userId:null,email:null,login:null,photoUser:null,isAuth:!1,isFetching:!1},d=function(e,t,n){var A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4?arguments[4]:void 0;return{type:i,payload:{userId:e,email:t,login:n,photoUser:A,isAuth:r}}},p=function(e){return{type:u,photo:e}},j=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n,A,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getAuthMe();case 2:if(0!==(n=e.sent).resultCode){e.next=10;break}return A=n.data.id,e.next=7,o.c.getUser(A);case 7:n=e.sent,a=n.photos.small,t(p(a));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n,A,a,s,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getAuthMe();case 2:if(0!==(n=e.sent).resultCode){e.next=11;break}return A=n.data,a=A.id,s=A.email,c=A.login,t(d(a,s,c,null,!0)),e.next=8,o.c.getUser(a);case 8:n=e.sent,i=n.photos.small,t(d(a,s,c,i,!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,n,A,s){return function(){var i=Object(a.a)(r.a.mark((function a(i){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n,A);case 2:0===(u=r.sent).data.resultCode?(i(f()),i(Object(c.a)(s))):(l=u.data.messages.length>0?u.data.messages[0]:"Some error",i(Object(c.b)("login",{_error:l})));case 4:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}()},b=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),t.payload);case u:return Object(s.a)(Object(s.a)({},e),{},{photoUser:t.photo});default:return e}}},25:function(e,t,n){e.exports={header:"Header_header__1GlFK",logo:"Header_logo__2rVsZ",loginBlock:"Header_loginBlock__1C489",area:"Header_area__1YAEA",userBlock:"Header_userBlock__1LHli",userName:"Header_userName__1mpdC",userPhoto:"Header_userPhoto__1_6Zq",vertLIne:"Header_vertLIne__1owmc",logoutBlock:"Header_logoutBlock__37zpe"}},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var A=n(0),r=n.n(A),a=n(69),s=n.n(a),c=n(31),o=n(32),i=n(34),u=n(33),l=(n(171),n(15)),d=n(19),p=n.n(d),j=n(1),f=function(e){return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})})]})},h=n(7),b=(n(177),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"News"})}),g=(n(178),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"Music"})}),O=(n(179),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"Settings"})}),m=n(13),v=n(11),x=n(141),U=Object(x.a)((function(e){return e.usersPage.users}),(function(e){return e})),w=function(e){return e.usersPage.pageSize},C=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProcess},N=function(e){return e.usersPage.currentPortion},E=n(10),k=n.n(E),B=n(17),R=n(42),T=n(3),I=n(12),P=function(e,t,n,A){return e.map((function(e){return e[n]===t?Object(T.a)(Object(T.a)({},e),A):e}))},G="FOLLOW_OR_UNFOLLOW",D="SET_USERS",L="SET_CURRENT_PAGE",q="SET_TOTAL_USERS_COUNT",K="TOGGLE_IS_FETCHING",Q="TOGGLE_IS_FOLLOWING",M="SET_CURRENT_PORTION",V={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProcess:[],currentPortion:1},X=function(e){return{type:L,currentPage:e}},W=function(e){return{type:K,isFetching:e}},Z=function(e,t){return{type:Q,isFetching:e,userId:t}},Y=function(e,t){return{type:G,userID:e,boolValue:t}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(T.a)(Object(T.a)({},e),{},{users:P(e.users,t.userID,"id",{followed:t.boolValue})});case D:return Object(T.a)(Object(T.a)({},e),{},{users:Object(R.a)(t.users)});case M:return Object(T.a)(Object(T.a)({},e),{},{currentPortion:t.portionNumber});case L:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case q:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.totalUsersCount});case K:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case Q:return Object(T.a)(Object(T.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(R.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!=t.userId}))});default:return e}},H=n(40),z=n(98),_=n(73),$=n(101),ee=n(94),te=n.n(ee),ne=n(137),Ae=n.n(ne),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.onPageGhanged,a=e.currentPortion,s=e.currentPage,c=e.setCurrentPortion,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var p=Math.ceil(u/i),f=Object(A.useState)(1),h=Object($.a)(f,2),b=h[0],g=h[1];c(b),Object(A.useEffect)((function(){g(a)}),[]);var O=(b-1)*i+1,m=b*i;return Object(j.jsxs)("div",{className:te.a.content,children:[b>1&&Object(j.jsx)("button",{onClick:function(){g(b-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(j.jsxs)("span",{className:Ae()(Object(_.a)({},te.a.selected,s===e)),onClick:function(t){r(e)},children:[" ",e," "]},e)})),p>b&&Object(j.jsx)("button",{onClick:function(){g(b+1)},children:"NEXT"})]})},ae=n(37),se=n.n(ae),ce=n(70),oe=function(e){var t=e.user,n=e.followingInProcess,A=e.followOrUnfollow;return Object(j.jsxs)("div",{className:se.a.item,children:[Object(j.jsx)("div",{children:Object(j.jsx)(l.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{src:null!=t.photos.small?t.photos.small:ce.a,className:se.a.ava})})}),Object(j.jsxs)("div",{className:se.a.forDataAndButton,children:[Object(j.jsxs)("div",{className:se.a.forData,children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsx)("div",{className:se.a.areaForButton,children:t.followed?Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id,!1)},className:se.a.forButton,children:"Unfollow"}):Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id,!0)},className:se.a.forButton,children:"Follow"})})]})]})},ie=function(e){return Object(j.jsxs)("div",{className:"mainContent",children:[Object(j.jsx)(re,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageGhanged:e.onPageGhanged,currentPortion:e.currentPortion,setCurrentPortion:e.setCurrentPortion,currentPage:e.currentPage}),e.isFetching?Object(j.jsx)(H.a,{}):e.users.map((function(t){return Object(j.jsx)(oe,{user:t,followingInProcess:e.followingInProcess,followOrUnfollow:e.followOrUnfollow},t.id)}))]})},ue=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var A=arguments.length,r=new Array(A),a=0;a<A;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageGhanged=function(t){var n=e.props;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(j.jsx)(ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,onPageGhanged:this.onPageGhanged,currentPage:this.props.currentPage,followingInProcess:this.props.followingInProcess,followOrUnfollow:this.props.followOrUnfollow,isFetching:this.props.isFetching,currentPortion:this.props.currentPortion,setCurrentPortion:this.props.setCurrentPortion})}}]),n}(r.a.Component),le=Object(v.d)(Object(m.b)((function(e){return{users:U(e),pageSize:w(e),totalUsersCount:C(e),currentPage:S(e),isFetching:y(e),followingInProcess:F(e),currentPortion:N(e)}}),{getUsers:function(e,t){return function(){var n=Object(B.a)(k.a.mark((function n(A){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(X(e)),A(W(!0)),n.next=4,I.c.getUsers(e,t);case 4:r=n.sent,A(W(!1)),A((s=r.items,{type:D,users:s})),A((a=r.totalCount,{type:q,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},followOrUnfollow:function(e,t){return function(){var n=Object(B.a)(k.a.mark((function n(A){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(A(Z(!0,e)),!0!==t){n.next=7;break}return n.next=4,I.c.getFollow(e);case 4:r=n.sent,n.next=10;break;case 7:return n.next=9,I.c.getUnfollow(e);case 9:r=n.sent;case 10:0==r.resultCode&&A(Y(e,t)),A(Z(!1,e));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPortion:function(e){return{type:M,portionNumber:e}}}),z.a)(ue),de=n(23),pe=n(25),je=n.n(pe),fe=function(e){return Object(j.jsxs)("header",{className:je.a.header,children:[Object(j.jsx)("img",{src:"https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300",className:je.a.logo}),Object(j.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{className:je.a.area,children:[Object(j.jsx)(l.b,{to:"/profile",children:Object(j.jsxs)("div",{className:je.a.userBlock,children:[Object(j.jsx)("img",{src:null!=e.auth.photoUser?e.auth.photoUser:ce.a,className:je.a.userPhoto}),Object(j.jsx)("div",{className:je.a.userName,children:e.auth.login})]})}),Object(j.jsx)("div",{className:je.a.vertLIne,children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB1cQxDQAAAMKwBf+eYTboUaqg7wYyVwRLXXVthgAAAABJRU5ErkJggg=="})}),Object(j.jsx)("div",{className:je.a.logoutBlock,onClick:e.logout,children:"Log Out"})]}):Object(j.jsx)(l.b,{to:"/login",children:Object(j.jsx)("div",{className:je.a.userBlock,children:"LOGIN"})})})]})},he=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(fe,Object(T.a)({},this.props))}}]),n}(r.a.Component),be=Object(m.b)((function(e){return{auth:e.auth,isAuth:e.auth.isAuth}}),{logout:de.d,newProfilePhoto:de.e})(he),ge=n(138),Oe=n.n(ge),me=n(131),ve=n(132),xe=n(58),Ue=n(78),we=n(48),Ce=n.n(we),Se=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("div",{children:Object(j.jsx)(me.a,{placeholder:"email",name:"email",component:xe.a,validate:[Ue.b]})}),Object(j.jsx)("div",{children:Object(j.jsx)(me.a,{placeholder:"Password",name:"password",component:xe.a,validate:[Ue.b],type:"password"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{component:xe.a,name:"rememberMe",type:"checkbox"})," remember me"]}),n&&Object(j.jsx)("div",{className:Ce.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Log In"})})]})})),ye=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:de.c})((function(e){return e.isAuth?Object(j.jsx)(h.a,{to:"/profile"}):Object(j.jsxs)("div",{className:Oe.a.loginText,children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(Se,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha,"login")}})]})})),Fe="INITIALIZED_SUCCESS",Ne={initialized:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},ke=n(99),Be={},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return e},Te=n(100),Ie=n(140),Pe=n(133),Ge=Object(v.c)({profilePage:Te.b,messagesPage:ke.c,navBarPage:Re,usersPage:J,auth:de.b,form:Pe.a,appR:Ee}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,Le=Object(v.e)(Ge,De(Object(v.a)(Ie.a))),qe=function(e){return function(t){return Object(j.jsx)(A.Suspense,Object(T.a)(Object(T.a)({},t),{},{fallback:Object(j.jsx)(H.a,{}),children:Object(j.jsx)(e,Object(T.a)({},t))}))}},Ke=r.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),Qe=r.a.lazy((function(){return n.e(4).then(n.bind(null,312))})),Me=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(be,{}),Object(j.jsx)(f,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(h.b,{path:"/profile/:userID?",render:qe(Qe)}),Object(j.jsx)(h.b,{path:"/dialogs",render:qe(Ke)}),Object(j.jsx)(h.b,{path:"/news",render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(h.b,{path:"/music",render:function(){return Object(j.jsx)(g,{})}}),Object(j.jsx)(h.b,{path:"/settings",render:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(h.b,{path:"/users",render:function(){return Object(j.jsx)(le,{})}}),Object(j.jsx)(h.b,{path:"/login",render:function(){return Object(j.jsx)(ye,{})}})]})]}):Object(j.jsx)(H.a,{})}}]),n}(r.a.Component),Ve=Object(v.d)(h.f,Object(m.b)((function(e){return{initialized:e.appR.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(de.a)());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Me),Xe=function(e){return Object(j.jsx)(l.a,{children:Object(j.jsx)(m.a,{store:Le,children:Object(j.jsx)(Ve,{})})})},We=(n(298),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,310)).then((function(t){var n=t.getCLS,A=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),A(e),r(e),a(e),s(e)}))});s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Xe,{})}),document.getElementById("root")),We()},37:function(e,t,n){e.exports={item:"Users_item__JpluW",ava:"Users_ava__1EVwO",forDataAndButton:"Users_forDataAndButton__27RKP",forData:"Users_forData__19wzs",areaForButton:"Users_areaForButton__cyF_N"}},40:function(e,t,n){"use strict";var A=n(136),r=n.n(A),a=n.p+"static/media/preloader.c7879f91.svg",s=n(1);t.a=function(){return Object(s.jsx)("div",{className:r.a.preloader,children:Object(s.jsx)("img",{src:a})})}},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2z1qS",error:"FormsControls_error__3G5Ul",formSummaryError:"FormsControls_formSummaryError__2CcCL"}},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var A=n(3),r=n(97),a=n(48),s=n.n(a),c=n(1),o=["input","meta","child"],i=["input","meta","child"],u=function(e){e.input;var t=e.meta,n=t.touched,A=t.error,r=e.children,a=n&&A;return Object(c.jsx)("div",{className:s.a.Field,children:Object(c.jsxs)("div",{className:s.a.formControl+" "+(a&&s.a.error),children:[Object(c.jsx)("div",{children:r}),a&&Object(c.jsx)("span",{children:A})]})})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,o));return Object(c.jsx)(u,Object(A.a)(Object(A.a)({},e),{},{children:Object(c.jsx)("textarea",Object(A.a)(Object(A.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,i));return Object(c.jsx)(u,Object(A.a)(Object(A.a)({},e),{},{children:Object(c.jsx)("input",Object(A.a)(Object(A.a)({},t),n))}))}},70:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return r}));var A=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},94:function(e,t,n){e.exports={content:"Paginator_content__rGhTB",selected:"Paginator_selected__3aGP6",pageNumber:"Paginator_pageNumber__3stUR"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var A=n(3),r=n(31),a=n(32),s=n(34),c=n(33),o=n(0),i=n.n(o),u=n(13),l=n(7),d=n(1),p=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(s.a)(o,t);var n=Object(c.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(A.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(i.a.Component);return Object(u.b)(p)(t)}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return l}));var A=n(42),r=n(3),a="ADD-MESSAGE",s="SET_CURRENT_DIALOG",c="CLOSE_CURRENT_DIALOG",o={dialogs:[{id:1,name:"Dima",src:"https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png"},{id:2,name:"Vlad",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},{id:3,name:"Igor",src:"https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg"},{id:4,name:"Andrey",src:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},{id:5,name:"Vanya",src:"https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"},{id:6,name:"Vadik",src:"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"},{id:7,name:"Dimasik",src:"https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png"},{id:8,name:"Vladick",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},{id:9,name:"Vadim",src:"https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg"},{id:10,name:"Andromeda",src:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},{id:11,name:"Vanish",src:"https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"},{id:12,name:"WTFfgsdsdgsdfgfsdgsdgfsdgs",src:"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"}],messages:[{id:1,myMessage:!1,message:"Hi"},{id:2,myMessage:!1,message:"How are you?"},{id:1,myMessage:!0,message:"Hi"},{id:2,myMessage:!0,message:"I feel bad"},{id:2,myMessage:!1,message:"Why?"}],currentDialog:{}},i=function(e){return{type:a,text:e}},u=function(e){return{type:s,idDialog:e}},l=function(){return{type:c}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.text,i={id:3,myMessage:!0,message:n};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(A.a)(e.messages),[i])});case s:var u={id:e.dialogs[t.idDialog].id,name:e.dialogs[t.idDialog].name,src:e.dialogs[t.idDialog].src};return Object(r.a)(Object(r.a)({},e),{},{currentDialog:u});case c:return Object(r.a)(Object(r.a)({},e),{},{currentDialog:{}});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.1362a1e7.chunk.js.map