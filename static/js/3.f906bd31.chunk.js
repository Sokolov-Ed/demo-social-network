(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{301:function(e,t,s){e.exports={dialog:"DialogItem_dialog__wThHb",activeLink:"DialogItem_activeLink__244P5",avaDialogs:"DialogItem_avaDialogs__1fb9u",UserName:"DialogItem_UserName__1SDgT"}},302:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3zk7F",dialogItems:"Dialogs_dialogItems__PvrOR",openDialogArea:"Dialogs_openDialogArea__UlBOP",closedDialogArea:"Dialogs_closedDialogArea__16Zxe",messagesArea:"Dialogs_messagesArea__1rkrU",panelUser:"Dialogs_panelUser__A_cYk",iconExit:"Dialogs_iconExit__13yuf",PhotoUser:"Dialogs_PhotoUser__2omjZ",UserName:"Dialogs_UserName__1k77E",options:"Dialogs_options__2m2Nc",point:"Dialogs_point__2z4X1",messages:"Dialogs_messages__aw7jM",addMessage:"Dialogs_addMessage__2jkkI"}},303:function(e,t,s){e.exports={areaMessages:"Message_areaMessages__11acy"}},304:function(e,t,s){e.exports={itemMyMessage:"MyMessage_itemMyMessage__Ee9XK",borderMyMessage:"MyMessage_borderMyMessage__1vmkb",Arrow:"MyMessage_Arrow__zaZ7L",myAva:"MyMessage_myAva__hwNkC"}},305:function(e,t,s){e.exports={itemOtherMessage:"OtherMessage_itemOtherMessage__ZMgfj",borderOtherMessage:"OtherMessage_borderOtherMessage__17Shk",Arrow:"OtherMessage_Arrow__oWJ0E",avaCompanion:"OtherMessage_avaCompanion__1lRYj"}},306:function(e,t,s){e.exports={areaAddMessage:"AddMessage_areaAddMessage__2vQ2z"}},311:function(e,t,s){"use strict";s.r(t);var a=s(16),r=s(301),o=s.n(r),i=s(1),n=function(e){return Object(i.jsx)(a.b,{to:"/dialogs/".concat(e.id),activeClassName:o.a.activeLink,children:Object(i.jsxs)("div",{className:o.a.dialog,onClick:function(){e.setCurrentDialog(e.id-1)},children:[Object(i.jsx)("img",{src:e.src,className:o.a.avaDialogs}),Object(i.jsx)("div",{className:o.a.UserName,children:e.name})]})})},c=s(302),l=s.n(c),d=s(303),g=s.n(d),p=s(304),m=s.n(p),u=function(e){return Object(i.jsxs)("div",{className:m.a.itemMyMessage,children:[Object(i.jsx)("div",{className:m.a.borderMyMessage,children:e.message}),Object(i.jsx)("div",{className:m.a.Arrow})]})},h=s(305),b=s.n(h),f=function(e){return Object(i.jsxs)("div",{className:b.a.itemOtherMessage,children:[Object(i.jsx)("div",{className:b.a.Arrow}),Object(i.jsx)("div",{className:b.a.borderOtherMessage,children:e.message})]})},j=function(e){var t=e.messages.map((function(e){return e.myMessage?Object(i.jsx)(u,{message:e.message}):Object(i.jsx)(f,{message:e.message})}));return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:g.a.areaMessages,children:t})})},_=s(0),A=s(12),v=s(100),O=s(306),x=s.n(O),M=s(28),w=s(132),y=s(133),D=s(51),N=s(71),R=Object(N.a)(150),C=Object(y.a)({form:"dialogAddMessageReduxForm"})((function(e){return Object(i.jsx)("form",{onSubmit:e.handleSubmit,children:Object(i.jsxs)("div",{className:x.a.areaAddMessage,children:[Object(i.jsx)(w.a,{component:D.b,name:"newMessageBody",placeholder:"Enter your message",validate:[N.b,R]}),Object(i.jsx)("button",{children:"Add message"})]})})})),S=function(e){return Object(i.jsx)(C,{onSubmit:function(t,s){var a=t.newMessageBody;s(Object(M.a)("dialogAddMessageReduxForm")),e.addMyMessage(a)}})},U=Object(A.b)((function(e){return{newMessageText:e.messagesPage.messages.newMessageText}}),{addMyMessage:v.a})(S),E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])})(e,t)};var B="styles_scrollable-div__prSCv";!function(e,t){void 0===t&&(t={});var s=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===s&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".styles_scrollable-div__prSCv {\r\n  max-height: inherit;\r\n  height: inherit;\r\n  overflow-y: auto;\r\n}\r\n");var k=function(e){function t(t){var s=e.call(this,t)||this;return s.bottomRef=Object(_.createRef)(),s.wrapperRef=Object(_.createRef)(),s.handleScroll=s.handleScroll.bind(s),s}return function(e,t){function s(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}(t,e),t.prototype.getSnapshotBeforeUpdate=function(){if(this.wrapperRef.current&&this.bottomRef.current){var e=this.props.viewableDetectionEpsilon;return t.isViewable(this.wrapperRef.current,this.bottomRef.current,e)}return!1},t.prototype.componentDidUpdate=function(e,t,s){var a=this.props,r=a.forceScroll;(0,a.changeDetectionFilter)(e,this.props)&&(r||s)&&this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.componentDidMount=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.scrollParentToChild=function(e,s){var a=this.props.viewableDetectionEpsilon;if(!t.isViewable(e,s,a)){var r=e.getBoundingClientRect(),o=s.getBoundingClientRect().top+e.scrollTop-r.top,i=this.props,n=i.animateScroll,c=i.onScrollComplete;n&&(n(e,o),c())}},t.isViewable=function(e,t,s){s=s||0;var a=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.top>=a.top,i=a.top+e.clientHeight-r.top;return o&&i+s>=0},t.prototype.handleScroll=function(){var e=this.props,s=e.viewableDetectionEpsilon,a=e.onScroll;a&&this.bottomRef.current&&this.wrapperRef.current&&a(t.isViewable(this.wrapperRef.current,this.bottomRef.current,s))},t.prototype.scrollToBottom=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.render=function(){var e=this.props,t=e.children,s=e.className,a=B+(s?" "+s:"");return Object(_.createElement)("div",{className:a,ref:this.wrapperRef,onScroll:this.handleScroll},t,Object(_.createElement)("div",{ref:this.bottomRef}))},t.defaultProps={forceScroll:!1,animateScroll:function(e,t){e.scrollBy?e.scrollBy({top:t}):e.scrollTop=t},onScrollComplete:function(){},changeDetectionFilter:function(){return!0},viewableDetectionEpsilon:2,onScroll:function(){}},t}(_.Component),I=function(e){var t=e.state.dialogs.map((function(t){return Object(i.jsx)(n,{name:t.name,id:t.id,src:t.src,setCurrentDialog:e.setCurrentDialog},t.id)})),s=e.state.currentDialog;return Object(i.jsxs)("div",{className:l.a.dialogs,children:[Object(i.jsx)("div",{className:l.a.dialogItems+" "+(e.state.currentDialog.id?l.a.openDialogArea:l.a.closedDialogArea),children:t}),s.id&&Object(i.jsxs)("div",{className:l.a.messagesArea,children:[Object(i.jsxs)("div",{className:l.a.panelUser,children:[Object(i.jsx)("div",{onClick:e.closeCurrentDialog,className:l.a.iconExit,children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAiCAYAAADYmxC7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgB7ZfRccIwDIZ/9zpARvAGZQRG6AYwAp2g2aAjNExQNqCdoGyAN4ANjAQOiLw4CknQQ767H99xWPdhC+UAWhBjnFEOlBVG4CX3ARaiZUspKB7PRpwQU+HZTEI5JqEck1AG15hDO8oHunGkBOfcEQ/CUnv0OxQDLl9uQ/kjyQAlLl3XQhQM6EY98YvG+xVlTXK/0MBiqZ8O6To7k/pzSfmJ93xTvKZWr2KipqeU3CJC7lNbpHcxIVcJsS9tgUHEUu1lvI2ef0qh2TykmBfXudVuHkvM1FXKp8hCu3lIsZWo3b6/GmIb9Az3VapdQgtteo/a4deuru98WkMSb9O/hBVIZl6fFiwhfonz7P++EVmndWZJapfWN1ghDVNmDyvwOKib3cEQbMSrpZ66YlLqFbYI/GKtp87PvhNIxwCJ8w1ptgAAAABJRU5ErkJggg=="})}),Object(i.jsx)("img",{src:s.src,className:l.a.PhotoUser}),Object(i.jsx)("div",{className:l.a.UserName,children:s.name}),Object(i.jsxs)("div",{className:l.a.options,children:[Object(i.jsx)("div",{className:l.a.point}),Object(i.jsx)("div",{className:l.a.point}),Object(i.jsx)("div",{className:l.a.point})]})]}),Object(i.jsx)("div",{className:l.a.messages,children:Object(i.jsx)(k,{forceScroll:!0,children:Object(i.jsx)(j,{messages:e.state.messages})})}),Object(i.jsx)("div",{className:l.a.addMessage,children:Object(i.jsx)(U,{})})]})]})},T=s(99),P=s(11);t.default=Object(P.d)(Object(A.b)((function(e){return{state:e.messagesPage}}),{setCurrentDialog:v.d,closeCurrentDialog:v.b}),T.a)(I)}}]);
//# sourceMappingURL=3.f906bd31.chunk.js.map