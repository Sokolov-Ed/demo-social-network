(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{300:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__2GpXQ",descriptionBlock:"ProfileInfo_descriptionBlock__B_MVT",userName:"ProfileInfo_userName__2EWdc",photoUser:"ProfileInfo_photoUser__20LnI",aboutUser:"ProfileInfo_aboutUser__2gw2h",fieldStatus:"ProfileInfo_fieldStatus__2V4j4",statusForm:"ProfileInfo_statusForm__3MVNw"}},307:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__35GIG",posts:"MyPosts_posts__2EkbX",addPostField:"MyPosts_addPostField__1Dke4",notPosts:"MyPosts_notPosts__2p99g",postsField:"MyPosts_postsField__1KSUr",inputsField:"MyPosts_inputsField__2CDyi",submitButton:"MyPosts_submitButton__7YQVq"}},308:function(e,t,s){e.exports={item:"Post_item__1ReU8",authorField:"Post_authorField__Wi4lg",postAuthor:"Post_postAuthor__2_wGK",photoUser:"Post_photoUser__2BorF",deleteIcon:"Post_deleteIcon__2kFok",postMessage:"Post_postMessage__3G64y",postLike:"Post_postLike__3bY9T",postPhoto:"Post_postPhoto__gwgHk",likesCount:"Post_likesCount__26PlI"}},309:function(e,t,s){e.exports={classForProfileInfo:"Profile_classForProfileInfo__3yPKH",postsField:"Profile_postsField__fROIp"}},311:function(e,t,s){"use strict";s.r(t);var o=s(3),i=s(31),a=s(32),n=s(34),r=s(33),c=s(1),l=s.n(c),d=s(12),u=s(7),p=s(11),j=s(101),h=s(41),b=s(99),f=s(43),O=s(307),m=s.n(O),x=s(308),P=s.n(x),v=s(62),_=s.p+"static/media/notLiked.b4db63fd.png",g=s.p+"static/media/liked.4dabba7b.png",k=s.p+"static/media/deleteIcon.cc77b84b.png",I=s(0),y=function(e){return Object(I.jsxs)("div",{className:P.a.item,children:[Object(I.jsxs)("div",{className:P.a.authorField,children:[Object(I.jsx)("div",{className:P.a.photoUser,children:Object(I.jsx)("img",{src:e.userPhoto?e.userPhoto:v.a})}),Object(I.jsx)("div",{className:P.a.postAuthor,children:e.userLogin}),Object(I.jsx)("div",{onClick:function(){return t=e.postId,void e.deletePost(t);var t},className:P.a.deleteIcon,children:Object(I.jsx)("img",{src:k})})]}),e.message&&Object(I.jsx)("div",{className:P.a.postMessage,children:e.message}),e.photoURL&&Object(I.jsx)("div",{className:P.a.postPhoto,children:Object(I.jsx)("img",{src:e.photoURL})}),Object(I.jsxs)("div",{className:P.a.postLike,children:[Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:e.isMyLike?g:_,onClick:function(){return t=e.postId,void e.addLike(t);var t}})}),Object(I.jsx)("div",{className:P.a.likesCount,children:e.quantityLikes})]})]})},M=s(38),F=s(132),N=s(133),L=s(72),S=s(53),U=(Object(L.a)(100),Object(N.a)({form:"ProfileNewPostReduxForm",validate:function(e){var t={};return e.newPostText||e.photo||(t.newPostText="This field is empty"),t}})((function(e){return Object(I.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(I.jsxs)("div",{className:m.a.inputsField,children:[Object(I.jsx)(F.a,{component:S.c,name:"newPostText",placeholder:"Input text"}),Object(I.jsx)(F.a,{name:"photo",type:"file",component:S.b})]}),Object(I.jsx)("div",{className:m.a.submitButton,children:Object(I.jsx)("button",{children:"Add post"})})]})}))),w=function(e){var t=e.profileId&&e.profileId.userId,s=Object(f.a)(e.posts).reverse().filter((function(e){return e.postOnIdProfile===t})).map((function(t){return Object(I.jsx)(y,{message:t.message,quantityLikes:t.likesCount,photoURL:t.photoURL,userId:t.userId,userLogin:t.userLogin,userPhoto:t.userPhoto,postId:t.id,addLike:e.addLike,isMyLike:t.isMyLike,deletePost:e.deletePost},t.id)}));return Object(I.jsxs)("div",{className:m.a.postsBlock,children:[Object(I.jsxs)("div",{className:m.a.addPostField+" "+(0===e.posts.filter((function(e){return e.postOnIdProfile===t})).length&&m.a.notPosts),children:[Object(I.jsx)("h3",{children:"Add post"}),Object(I.jsx)(U,{onSubmit:function(s,o){var i=s.newPostText,a=s.photo;document.getElementById("loadingPhoto").style.backgroundColor="",o(Object(M.a)("ProfileNewPostReduxForm")),e.addPost(t,e.auth.userId,e.auth.login,e.auth.photoUser,i,a&&URL.createObjectURL(a))}})]}),e.posts.filter((function(e){return e.postOnIdProfile===t})).length>0&&Object(I.jsxs)("div",{className:m.a.postsField,children:[Object(I.jsx)("h2",{children:"Posts"}),Object(I.jsx)("div",{className:m.a.posts,children:s})]})]})},A=Object(d.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,auth:e.auth,profileId:e.profilePage.profile}}),{addPost:j.b,addLike:j.a,deletePost:j.d})(w),C=s(309),T=s.n(C),B=s(102),D=s(300),R=s.n(D),E=function(e){var t=Object(c.useState)(!1),s=Object(B.a)(t,2),o=s[0],i=s[1],a=Object(c.useState)(e.status),n=Object(B.a)(a,2),r=n[0],l=n[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);return Object(I.jsxs)("div",{className:R.a.statusForm,children:["Status",o?Object(I.jsx)("div",{children:Object(I.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,value:r,onBlur:function(){i(!1),e.updateStatus(r)}})}):Object(I.jsx)("div",{children:Object(I.jsx)("div",{className:R.a.fieldStatus,onDoubleClick:function(){i(!0)},children:e.status})})]})},V=function(e){var t=e.contactTitle,s=e.contactValue,o=e.editMode,i=e.name;return Object(I.jsx)("div",{children:o?Object(I.jsxs)("div",{children:[t,": ",Object(I.jsx)(F.a,{placeholder:t,name:i,component:"input"})]}):s&&Object(I.jsxs)("div",{children:[t,": ",s]})})},J=Object(N.a)({form:"editProfile"})((function(e){var t=e.profile,s=e.handleSubmit,o=e.editMode,i=e.error;return Object(I.jsxs)("form",{onSubmit:s,children:[Object(I.jsxs)("div",{children:["Full name: ",Object(I.jsx)(F.a,{placeholder:"Full name",name:"fullName",component:"input"})]}),Object(I.jsxs)("div",{children:["About Me: ",Object(I.jsx)(F.a,{placeholder:"About me",name:"aboutMe",component:"textarea"})]}),Object(I.jsxs)("div",{children:["Looking for a job: ",Object(I.jsx)(F.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(I.jsxs)("div",{children:["My professional skills: ",Object(I.jsx)(F.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:"textarea"})]}),Object(I.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(I.jsx)(V,{error:i,contactTitle:e,contactValue:t.contacts[e],editMode:o,name:"contacts."+e},e)}))]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{children:"Save"}),i&&Object(I.jsx)("div",{children:i})]})]})})),G=function(e){return Object(I.jsx)(J,Object(o.a)({onSubmit:function(t){e.saveProfile(t).then((function(){e.exitOfEditMode()}))}},e))},q=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode,i=e.editMode;return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{children:s&&Object(I.jsx)("button",{onClick:o,children:"Edit"})}),Object(I.jsxs)("div",{children:["About Me: ",t.aboutMe]}),Object(I.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(I.jsxs)("div",{children:["My professional skills:",t.lookingForAJobDescription]}),Object(I.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(I.jsx)(V,{contactTitle:e,contactValue:t.contacts[e],editMode:i},e)}))]})]})},K=function(e){var t=e.profile,s=e.status,o=e.updateStatus,i=e.isOwner,a=e.savePhoto,n=e.saveProfile,r=Object(c.useState)(!1),l=Object(B.a)(r,2),d=l[0],u=l[1];return Object(I.jsxs)("div",{className:R.a.profileInfo,children:[Object(I.jsxs)("div",{className:R.a.descriptionBlock,children:[Object(I.jsx)("img",{src:null!=t.photos.large?t.photos.large:v.a,className:R.a.photoUser}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:R.a.userName,children:t.fullName}),Object(I.jsx)(E,{status:s,updateStatus:o})]})]}),i&&Object(I.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&a(e.target.files[0])}}),Object(I.jsx)("div",{className:R.a.aboutUser,children:d?Object(I.jsx)(G,{profile:t,exitOfEditMode:function(){u(!1)},saveProfile:n,editMode:d,initialValues:t}):Object(I.jsx)(q,{profile:t,isOwner:i,goToEditMode:function(){u(!0)},editMode:d})})]})},z=function(e){return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"profilePage",children:Object(I.jsx)(K,{profile:e.profile,className:T.a.classForProfileInfo,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile})}),Object(I.jsx)("div",{className:T.a.postsField,children:Object(I.jsx)(A,{})})]})},H=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserId),this.props.match.params.userID=e,this.props.user(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return this.props.profile?this.props.match.params.userID!=this.props.profile.userId?Object(I.jsx)(h.a,{}):Object(I.jsx)("div",{children:Object(I.jsx)(z,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}):Object(I.jsx)(h.a,{})}}]),s}(l.a.Component);t.default=Object(p.d)(Object(d.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{user:j.i,getStatus:j.e,updateStatus:j.h,savePhoto:j.f,saveProfile:j.g}),u.g,b.a)(H)}}]);
//# sourceMappingURL=4.95deb989.chunk.js.map