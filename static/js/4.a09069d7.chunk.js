(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{300:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__2GpXQ",descriptionBlock:"ProfileInfo_descriptionBlock__B_MVT",userName:"ProfileInfo_userName__2EWdc",photoUser:"ProfileInfo_photoUser__20LnI",aboutUser:"ProfileInfo_aboutUser__2gw2h",fieldStatus:"ProfileInfo_fieldStatus__2V4j4",statusForm:"ProfileInfo_statusForm__3MVNw"}},307:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__35GIG",posts:"MyPosts_posts__2EkbX"}},308:function(e,t,s){e.exports={item:"Post_item__1ReU8"}},309:function(e,t,s){e.exports={classForProfileInfo:"Profile_classForProfileInfo__3yPKH"}},312:function(e,t,s){"use strict";s.r(t);var o=s(3),i=s(32),n=s(33),c=s(35),a=s(34),r=s(1),l=s.n(r),u=s(12),j=s(7),d=s(11),p=s(101),b=s(99),f=s(43),h=s(307),O=s.n(h),x=s(308),m=s.n(x),v=s(0),P=function(e){return Object(v.jsxs)("div",{className:m.a.item,children:[Object(v.jsx)("img",{src:"https://static.thenounproject.com/png/801390-200.png"}),e.message,Object(v.jsx)("div",{children:Object(v.jsxs)("span",{children:[e.quantityLikes," like"]})})]})},g=s(29),_=s(132),k=s(133),M=s(72),S=s(52),I=Object(M.a)(10),y=Object(k.a)({form:"ProfileNewPostReduxForm"})((function(e){return Object(v.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{component:S.b,name:"newPostText",placeholder:"Input text",validate:[M.b,I]})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Add post"})})]})})),N=function(e){var t=Object(f.a)(e.posts).reverse().map((function(e){return Object(v.jsx)(P,{message:e.message,quantityLikes:e.likesCount},e.id)}));return Object(v.jsxs)("div",{className:O.a.postsBlock,children:[Object(v.jsx)("h3",{children:"My posts"}),Object(v.jsx)(y,{onSubmit:function(t,s){var o=t.newPostText;s(Object(g.a)("ProfileNewPostReduxForm")),e.addPost(o)}}),Object(v.jsx)("div",{className:O.a.posts,children:t})]})},F=Object(u.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:p.a})(N),w=s(309),A=s.n(w),T=s(102),D=s(300),U=s.n(D),C=s(71),B=s(41),E=function(e){var t=Object(r.useState)(!1),s=Object(T.a)(t,2),o=s[0],i=s[1],n=Object(r.useState)(e.status),c=Object(T.a)(n,2),a=c[0],l=c[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(v.jsxs)("div",{className:U.a.statusForm,children:["Status",o?Object(v.jsx)("div",{children:Object(v.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,value:a,onBlur:function(){i(!1),e.updateStatus(a)}})}):Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:U.a.fieldStatus,onDoubleClick:function(){i(!0)},children:e.status?Object(v.jsx)(v.Fragment,{children:e.status}):Object(v.jsx)(v.Fragment,{children:"Double tap"})})})]})},J=function(e){var t=e.contactTitle,s=e.contactValue,o=e.editMode,i=e.name;return Object(v.jsx)("div",{children:o?Object(v.jsxs)("div",{children:[t,": ",Object(v.jsx)(_.a,{placeholder:t,name:i,component:"input"})]}):s&&Object(v.jsxs)("div",{children:[t,": ",s]})})},V=Object(k.a)({form:"editProfile"})((function(e){var t=e.profile,s=e.handleSubmit,o=e.editMode,i=e.error;return Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsxs)("div",{children:["Full name: ",Object(v.jsx)(_.a,{placeholder:"Full name",name:"fullName",component:"input"})]}),Object(v.jsxs)("div",{children:["About Me: ",Object(v.jsx)(_.a,{placeholder:"About me",name:"aboutMe",component:"textarea"})]}),Object(v.jsxs)("div",{children:["Looking for a job: ",Object(v.jsx)(_.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(v.jsxs)("div",{children:["My professional skills: ",Object(v.jsx)(_.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:"textarea"})]}),Object(v.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(v.jsx)(J,{error:i,contactTitle:e,contactValue:t.contacts[e],editMode:o,name:"contacts."+e},e)}))]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{children:"Save"}),i&&Object(v.jsx)("div",{children:i})]})]})})),L=function(e){return Object(v.jsx)(V,Object(o.a)({onSubmit:function(t){e.saveProfile(t).then((function(){e.exitOfEditMode()}))}},e))},G=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode,i=e.editMode;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:s&&Object(v.jsx)("button",{onClick:o,children:"Edit"})}),Object(v.jsxs)("div",{children:["About Me: ",t.aboutMe]}),Object(v.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(v.jsxs)("div",{children:["My professional skills:",t.lookingForAJobDescription]}),Object(v.jsxs)("div",{children:["Contacts: ",Object.keys(t.contacts).map((function(e){return Object(v.jsx)(J,{contactTitle:e,contactValue:t.contacts[e],editMode:i},e)}))]})]})},R=function(e){var t=e.profile,s=e.status,o=e.updateStatus,i=e.isOwner,n=e.savePhoto,c=e.saveProfile,a=Object(r.useState)(!1),l=Object(T.a)(a,2),u=l[0],j=l[1];return t?Object(v.jsxs)("div",{className:U.a.profileInfo,children:[Object(v.jsxs)("div",{className:U.a.descriptionBlock,children:[Object(v.jsx)("img",{src:null!=t.photos.large?t.photos.large:C.a,className:U.a.photoUser}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:U.a.userName,children:t.fullName}),Object(v.jsx)(E,{status:s,updateStatus:o})]})]}),i&&Object(v.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}}),Object(v.jsx)("div",{className:U.a.aboutUser,children:u?Object(v.jsx)(L,{profile:t,exitOfEditMode:function(){j(!1)},saveProfile:c,editMode:u,initialValues:t}):Object(v.jsx)(G,{profile:t,isOwner:i,goToEditMode:function(){j(!0)},editMode:u})})]}):Object(v.jsx)(B.a,{})},q=function(e){return Object(v.jsxs)("div",{className:"mainContent",children:[Object(v.jsx)(R,{profile:e.profile,className:A.a.classForProfileInfo,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(v.jsx)(F,{})]})},z=function(e){Object(c.a)(s,e);var t=Object(a.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserId),this.props.user(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(q,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),s}(l.a.Component);t.default=Object(d.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{user:p.g,getStatus:p.c,updateStatus:p.f,savePhoto:p.d,saveProfile:p.e}),j.g,b.a)(z)}}]);
//# sourceMappingURL=4.a09069d7.chunk.js.map