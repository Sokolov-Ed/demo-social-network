(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,A){"use strict";A.d(t,"a",(function(){return h})),A.d(t,"f",(function(){return g})),A.d(t,"c",(function(){return O})),A.d(t,"e",(function(){return m})),A.d(t,"d",(function(){return v}));var n=A(11),r=A.n(n),a=A(21),c=A(40),o=A(3),s=A(14),i=A(23),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",p="DELETE_POST",j="SAVE_PHOTO_SUCCESS",f={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It's hard",likesCount:17}],profile:null,status:""},h=function(e){return{type:u,text:e}},b=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(A){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getUser(e);case 2:n=t.sent,A({type:l,profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(A){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:n=t.sent,A(b(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(A){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&A(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(A){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.saveMyPhoto(e);case 2:0===(n=t.sent).data.resultCode&&(A((r=n.data.data.photos,{type:j,photos:r})),A(Object(i.e)()));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var A=t.text,n={id:3,message:A,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case p:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},136:function(e,t,A){e.exports={preloader:"Preloader_preloader__1YXBc"}},138:function(e,t,A){e.exports={loginText:"Login_loginText__2YLSp"}},14:function(e,t,A){"use strict";A.d(t,"c",(function(){return a})),A.d(t,"a",(function(){return c})),A.d(t,"b",(function(){return o}));A(0);var n=A(135),r=A.n(n).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3208ca02-74e8-460f-ad52-2022af0286c5"}}),a={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFollow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getUnfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getUser:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getAuthMe:function(){return r.get("auth/me").then((function(e){return e.data}))}},c={login:function(e,t){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.post("auth/login",{email:e,password:t,rememberMe:A,captcha:n})},logout:function(){return r.delete("auth/login")}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},saveMyPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}}},171:function(e,t,A){},177:function(e,t,A){},178:function(e,t,A){},179:function(e,t,A){},18:function(e,t,A){e.exports={nav:"Nav_nav__3FOwX",item:"Nav_item__1DKU2",activeLink:"Nav_activeLink__3uDD3"}},23:function(e,t,A){"use strict";A.d(t,"e",(function(){return j})),A.d(t,"a",(function(){return f})),A.d(t,"c",(function(){return h})),A.d(t,"d",(function(){return b}));var n=A(11),r=A.n(n),a=A(21),c=A(3),o=A(41),s=A(14),i="samurai-network/auth/SET_USER_DATA",u="UPDATE_PROFILE_PHOTO",l={userId:null,email:null,login:null,photoUser:null,isAuth:!1,isFetching:!1},d=function(e,t,A){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4?arguments[4]:void 0;return{type:i,payload:{userId:e,email:t,login:A,photoUser:n,isAuth:r}}},p=function(e){return{type:u,photo:e}},j=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var A,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getAuthMe();case 2:if(0!==(A=e.sent).resultCode){e.next=10;break}return n=A.data.id,e.next=7,s.c.getUser(n);case 7:A=e.sent,a=A.photos.small,t(p(a));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var A,n,a,c,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getAuthMe();case 2:if(0!==(A=e.sent).resultCode){e.next=11;break}return n=A.data,a=n.id,c=n.email,o=n.login,t(d(a,c,o,null,!0)),e.next=8,s.c.getUser(a);case 8:A=e.sent,i=A.photos.small,t(d(a,c,o,i,!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,A,n,c){return function(){var i=Object(a.a)(r.a.mark((function a(i){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.login(e,t,A,n);case 2:0===(u=r.sent).data.resultCode?(i(f()),i(Object(o.a)(c))):(l=u.data.messages.length>0?u.data.messages[0]:"Some error",i(Object(o.b)("login",{_error:l})));case 4:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}()},b=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),t.payload);case u:return Object(c.a)(Object(c.a)({},e),{},{photoUser:t.photo});default:return e}}},25:function(e,t,A){e.exports={header:"Header_header__1GlFK",logo:"Header_logo__2rVsZ",loginBlock:"Header_loginBlock__1C489",area:"Header_area__1YAEA",userBlock:"Header_userBlock__1LHli",userName:"Header_userName__1mpdC",userPhoto:"Header_userPhoto__1_6Zq",vertLIne:"Header_vertLIne__1owmc",logoutBlock:"Header_logoutBlock__37zpe"}},298:function(e,t,A){},299:function(e,t,A){"use strict";A.r(t);var n=A(0),r=A.n(n),a=A(68),c=A.n(a),o=A(30),s=A(31),i=A(33),u=A(32),l=(A(171),A(15)),d=A(18),p=A.n(d),j=A(1),f=function(e){return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(l.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})})]})},h=A(7),b=(A(177),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"News"})}),g=(A(178),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"Music"})}),O=(A(179),function(e){return Object(j.jsx)("div",{className:"mainContent",children:"Settings"})}),m=A(12),v=A(10),x=A(141),U=Object(x.a)((function(e){return e.usersPage.users}),(function(e){return e})),w=function(e){return e.usersPage.pageSize},C=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProcess},N=function(e){return e.usersPage.currentPortion},E=A(11),B=A.n(E),R=A(21),T=A(40),k=A(3),I=A(14),P=function(e,t,A,n){return e.map((function(e){return e[A]===t?Object(k.a)(Object(k.a)({},e),n):e}))},G="FOLLOW_OR_UNFOLLOW",D="SET_USERS",L="SET_CURRENT_PAGE",q="SET_TOTAL_USERS_COUNT",K="TOGGLE_IS_FETCHING",Q="TOGGLE_IS_FOLLOWING",M="SET_CURRENT_PORTION",V={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProcess:[],currentPortion:1},X=function(e){return{type:L,currentPage:e}},Z=function(e){return{type:K,isFetching:e}},W=function(e,t){return{type:Q,isFetching:e,userId:t}},Y=function(e,t){return{type:G,userID:e,boolValue:t}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(k.a)(Object(k.a)({},e),{},{users:P(e.users,t.userID,"id",{followed:t.boolValue})});case D:return Object(k.a)(Object(k.a)({},e),{},{users:Object(T.a)(t.users)});case M:return Object(k.a)(Object(k.a)({},e),{},{currentPortion:t.portionNumber});case L:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case q:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.totalUsersCount});case K:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case Q:return Object(k.a)(Object(k.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(T.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!=t.userId}))});default:return e}},H=A(51),z=A(98),_=A(73),$=A(101),ee=A(94),te=A.n(ee),Ae=A(137),ne=A.n(Ae),re=function(e){for(var t=e.totalItemsCount,A=e.pageSize,r=e.onPageGhanged,a=e.currentPortion,c=e.currentPage,o=e.setCurrentPortion,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/A),l=[],d=1;d<=u;d++)l.push(d);var p=Math.ceil(u/i),f=Object(n.useState)(1),h=Object($.a)(f,2),b=h[0],g=h[1];o(b),Object(n.useEffect)((function(){g(a)}),[]);var O=(b-1)*i+1,m=b*i;return Object(j.jsxs)("div",{className:te.a.content,children:[b>1&&Object(j.jsx)("button",{onClick:function(){g(b-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(j.jsxs)("span",{className:ne()(Object(_.a)({},te.a.selected,c===e)),onClick:function(t){r(e)},children:[" ",e," "]},e)})),p>b&&Object(j.jsx)("button",{onClick:function(){g(b+1)},children:"NEXT"})]})},ae=A(36),ce=A.n(ae),oe=A(69),se=function(e){var t=e.user,A=e.followingInProcess,n=e.followOrUnfollow;return Object(j.jsxs)("div",{className:ce.a.item,children:[Object(j.jsx)("div",{children:Object(j.jsx)(l.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{src:null!=t.photos.small?t.photos.small:oe.a,className:ce.a.ava})})}),Object(j.jsxs)("div",{className:ce.a.forDataAndButton,children:[Object(j.jsxs)("div",{className:ce.a.forData,children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsx)("div",{className:ce.a.areaForButton,children:t.followed?Object(j.jsx)("button",{disabled:A.some((function(e){return e===t.id})),onClick:function(){n(t.id,!1)},className:ce.a.forButton,children:"Unfollow"}):Object(j.jsx)("button",{disabled:A.some((function(e){return e===t.id})),onClick:function(){n(t.id,!0)},className:ce.a.forButton,children:"Follow"})})]})]})},ie=function(e){return Object(j.jsxs)("div",{className:"mainContent",children:[Object(j.jsx)(re,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageGhanged:e.onPageGhanged,currentPortion:e.currentPortion,setCurrentPortion:e.setCurrentPortion,currentPage:e.currentPage}),e.isFetching?Object(j.jsx)(H.a,{}):e.users.map((function(t){return Object(j.jsx)(se,{user:t,followingInProcess:e.followingInProcess,followOrUnfollow:e.followOrUnfollow},t.id)}))]})},ue=function(e){Object(i.a)(A,e);var t=Object(u.a)(A);function A(){var e;Object(o.a)(this,A);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageGhanged=function(t){var A=e.props;e.props.getUsers(t,A)},e}return Object(s.a)(A,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,A=e.pageSize;this.props.getUsers(t,A)}},{key:"render",value:function(){return Object(j.jsx)(ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,onPageGhanged:this.onPageGhanged,currentPage:this.props.currentPage,followingInProcess:this.props.followingInProcess,followOrUnfollow:this.props.followOrUnfollow,isFetching:this.props.isFetching,currentPortion:this.props.currentPortion,setCurrentPortion:this.props.setCurrentPortion})}}]),A}(r.a.Component),le=Object(v.d)(Object(m.b)((function(e){return{users:U(e),pageSize:w(e),totalUsersCount:C(e),currentPage:S(e),isFetching:y(e),followingInProcess:F(e),currentPortion:N(e)}}),{getUsers:function(e,t){return function(){var A=Object(R.a)(B.a.mark((function A(n){var r;return B.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n(X(e)),n(Z(!0)),A.next=4,I.c.getUsers(e,t);case 4:r=A.sent,n(Z(!1)),n((c=r.items,{type:D,users:c})),n((a=r.totalCount,{type:q,totalUsersCount:a}));case 8:case"end":return A.stop()}var a,c}),A)})));return function(e){return A.apply(this,arguments)}}()},followOrUnfollow:function(e,t){return function(){var A=Object(R.a)(B.a.mark((function A(n){var r;return B.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(n(W(!0,e)),!0!==t){A.next=7;break}return A.next=4,I.c.getFollow(e);case 4:r=A.sent,A.next=10;break;case 7:return A.next=9,I.c.getUnfollow(e);case 9:r=A.sent;case 10:0==r.resultCode&&n(Y(e,t)),n(W(!1,e));case 12:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},setCurrentPortion:function(e){return{type:M,portionNumber:e}}}),z.a)(ue),de=A(23),pe=A(25),je=A.n(pe),fe=function(e){return Object(j.jsxs)("header",{className:je.a.header,children:[Object(j.jsx)("img",{src:"https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300",className:je.a.logo}),Object(j.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{className:je.a.area,children:[Object(j.jsx)(l.b,{to:"/profile",children:Object(j.jsxs)("div",{className:je.a.userBlock,children:[Object(j.jsx)("img",{src:null!=e.auth.photoUser?e.auth.photoUser:oe.a,className:je.a.userPhoto}),Object(j.jsx)("div",{className:je.a.userName,children:e.auth.login})]})}),Object(j.jsx)("div",{className:je.a.vertLIne,children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB1cQxDQAAAMKwBf+eYTboUaqg7wYyVwRLXXVthgAAAABJRU5ErkJggg=="})}),Object(j.jsx)("div",{className:je.a.logoutBlock,onClick:e.logout,children:"Log Out"})]}):Object(j.jsx)(l.b,{to:"/login",children:Object(j.jsx)("div",{className:je.a.userBlock,children:"LOGIN"})})})]})},he=function(e){Object(i.a)(A,e);var t=Object(u.a)(A);function A(){return Object(o.a)(this,A),t.apply(this,arguments)}return Object(s.a)(A,[{key:"render",value:function(){return Object(j.jsx)(fe,Object(k.a)({},this.props))}}]),A}(r.a.Component),be=Object(m.b)((function(e){return{auth:e.auth,isAuth:e.auth.isAuth}}),{logout:de.d,newProfilePhoto:de.e})(he),ge=A(138),Oe=A.n(ge),me=A(131),ve=A(132),xe=A(70),Ue=A(78),we=A(47),Ce=A.n(we),Se=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,A=e.error;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("div",{children:Object(j.jsx)(me.a,{placeholder:"email",name:"email",component:xe.a,validate:[Ue.b]})}),Object(j.jsx)("div",{children:Object(j.jsx)(me.a,{placeholder:"Password",name:"password",component:xe.a,validate:[Ue.b],type:"password"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{component:xe.a,name:"rememberMe",type:"checkbox"})," remember me"]}),A&&Object(j.jsx)("div",{className:Ce.a.formSummaryError,children:A}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Log In"})})]})})),ye=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:de.c})((function(e){return e.isAuth?Object(j.jsx)(h.a,{to:"/profile"}):Object(j.jsxs)("div",{className:Oe.a.loginText,children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(Se,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha,"login")}})]})})),Fe="INITIALIZED_SUCCESS",Ne={initialized:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},Be=A(99),Re={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return e},ke=A(100),Ie=A(140),Pe=A(133),Ge=Object(v.c)({profilePage:ke.b,messagesPage:Be.c,navBarPage:Te,usersPage:J,auth:de.b,form:Pe.a,appR:Ee}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,Le=Object(v.e)(Ge,De(Object(v.a)(Ie.a))),qe=function(e){return function(t){return Object(j.jsx)(n.Suspense,Object(k.a)(Object(k.a)({},t),{},{fallback:Object(j.jsx)(H.a,{}),children:Object(j.jsx)(e,Object(k.a)({},t))}))}},Ke=r.a.lazy((function(){return A.e(3).then(A.bind(null,311))})),Qe=r.a.lazy((function(){return A.e(4).then(A.bind(null,312))})),Me=function(e){Object(i.a)(A,e);var t=Object(u.a)(A);function A(){return Object(o.a)(this,A),t.apply(this,arguments)}return Object(s.a)(A,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(be,{}),Object(j.jsx)(f,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(h.b,{path:"/profile/:userID?",render:qe(Qe)}),Object(j.jsx)(h.b,{path:"/dialogs",render:qe(Ke)}),Object(j.jsx)(h.b,{path:"/news",render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(h.b,{path:"/music",render:function(){return Object(j.jsx)(g,{})}}),Object(j.jsx)(h.b,{path:"/settings",render:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(h.b,{path:"/users",render:function(){return Object(j.jsx)(le,{})}}),Object(j.jsx)(h.b,{path:"/login",render:function(){return Object(j.jsx)(ye,{})}})]})]})}}]),A}(r.a.Component),Ve=Object(v.d)(h.f,Object(m.b)((function(e){return{initialized:e.appR.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(de.a)());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Me),Xe=function(e){return Object(j.jsx)(l.a,{children:Object(j.jsx)(m.a,{store:Le,children:Object(j.jsx)(Ve,{})})})},Ze=(A(298),function(e){e&&e instanceof Function&&A.e(5).then(A.bind(null,310)).then((function(t){var A=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;A(e),n(e),r(e),a(e),c(e)}))});c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Xe,{})}),document.getElementById("root")),Ze()},36:function(e,t,A){e.exports={item:"Users_item__JpluW",ava:"Users_ava__1EVwO",forDataAndButton:"Users_forDataAndButton__27RKP",forData:"Users_forData__19wzs",areaForButton:"Users_areaForButton__cyF_N"}},47:function(e,t,A){e.exports={formControl:"FormsControls_formControl__2z1qS",error:"FormsControls_error__3G5Ul",formSummaryError:"FormsControls_formSummaryError__2CcCL"}},51:function(e,t,A){"use strict";var n=A(136),r=A.n(n),a=A.p+"static/media/preloader.c7879f91.svg",c=A(1);t.a=function(){return Object(c.jsx)("div",{className:r.a.preloader,children:Object(c.jsx)("img",{src:a})})}},69:function(e,t,A){"use strict";t.a="data:image/png;base64,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"},70:function(e,t,A){"use strict";A.d(t,"b",(function(){return l})),A.d(t,"a",(function(){return d}));var n=A(3),r=A(97),a=A(47),c=A.n(a),o=A(1),s=["input","meta","child"],i=["input","meta","child"],u=function(e){e.input;var t=e.meta,A=t.touched,n=t.error,r=e.children,a=A&&n;return Object(o.jsx)("div",{className:c.a.Field,children:Object(o.jsxs)("div",{className:c.a.formControl+" "+(a&&c.a.error),children:[Object(o.jsx)("div",{children:r}),a&&Object(o.jsx)("span",{children:n})]})})},l=function(e){var t=e.input,A=(e.meta,e.child,Object(r.a)(e,s));return Object(o.jsx)(u,Object(n.a)(Object(n.a)({},e),{},{children:Object(o.jsx)("textarea",Object(n.a)(Object(n.a)({},t),A))}))},d=function(e){var t=e.input,A=(e.meta,e.child,Object(r.a)(e,i));return Object(o.jsx)(u,Object(n.a)(Object(n.a)({},e),{},{children:Object(o.jsx)("input",Object(n.a)(Object(n.a)({},t),A))}))}},78:function(e,t,A){"use strict";A.d(t,"b",(function(){return n})),A.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},94:function(e,t,A){e.exports={content:"Paginator_content__rGhTB",selected:"Paginator_selected__3aGP6",pageNumber:"Paginator_pageNumber__3stUR"}},98:function(e,t,A){"use strict";A.d(t,"a",(function(){return j}));var n=A(3),r=A(30),a=A(31),c=A(33),o=A(32),s=A(0),i=A.n(s),u=A(12),l=A(7),d=A(1),p=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(c.a)(s,t);var A=Object(o.a)(s);function s(){return Object(r.a)(this,s),A.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(n.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),s}(i.a.Component);return Object(u.b)(p)(t)}},99:function(e,t,A){"use strict";A.d(t,"a",(function(){return i})),A.d(t,"d",(function(){return u})),A.d(t,"b",(function(){return l}));var n=A(40),r=A(3),a="ADD-MESSAGE",c="SET_CURRENT_DIALOG",o="CLOSE_CURRENT_DIALOG",s={dialogs:[{id:1,name:"Dima",src:"https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png"},{id:2,name:"Vlad",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},{id:3,name:"Igor",src:"https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg"},{id:4,name:"Andrey",src:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},{id:5,name:"Vanya",src:"https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"},{id:6,name:"Vadik",src:"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"},{id:7,name:"Dimasik",src:"https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png"},{id:8,name:"Vladick",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},{id:9,name:"Vadim",src:"https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg"},{id:10,name:"Andromeda",src:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},{id:11,name:"Vanish",src:"https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"},{id:12,name:"WTFfgsdsdgsdfgfsdgsdgfsdgs",src:"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"}],messages:[{id:1,myMessage:!1,message:"Hi"},{id:2,myMessage:!1,message:"How are you?"},{id:1,myMessage:!0,message:"Hi"},{id:2,myMessage:!0,message:"I feel bad"},{id:2,myMessage:!1,message:"Why?"}],currentDialog:{}},i=function(e){return{type:a,text:e}},u=function(e){return{type:c,idDialog:e}},l=function(){return{type:o}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var A=t.text,i={id:3,myMessage:!0,message:A};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[i])});case c:var u={id:e.dialogs[t.idDialog].id,name:e.dialogs[t.idDialog].name,src:e.dialogs[t.idDialog].src};return Object(r.a)(Object(r.a)({},e),{},{currentDialog:u});case o:return Object(r.a)(Object(r.a)({},e),{},{currentDialog:{}});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.da619bcc.chunk.js.map