(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{53:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),a=c(20),l=c.n(a),o=(c(53),c(7));c(65),c.p,c(71);var r=c(40),j=c(42),d=c(43),b=c(32),h=c(47),O=c(46),u=c(44),x=c.n(u),m=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e}return Object(d.a)(c,[{key:"handleChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e="data-theme",t=document.body,c="dark"===t.getAttribute(e)?"light":"dark";t.setAttribute(e,c)}},{key:"render",value:function(){return Object(n.jsxs)("label",{children:[Object(n.jsx)(x.a,{onChange:this.handleChange,checked:this.state.checked,offColor:"#baaa80",onColor:"#353535",width:80,height:35,uncheckedIcon:Object(n.jsx)("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"80%",marginTop:"3px",fontSize:20,textAlign:"end",marginLeft:"8px",color:"#353239",backgroundColor:"unset"}}),checkedIcon:Object(n.jsx)("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"92%",marginLeft:"-3px",fontSize:25,textAlign:"end",color:"#353239",backgroundColor:"unset"}})}),Object(n.jsx)("div",{style:{color:"white"},children:"Switch Theme"})]})}}]),c}(i.Component),g=c(33);var p=function(e){return Object(i.useEffect)((function(){g.isMobile&&alert("Visit this site from Desktop/Laptop for seamless User Experience")}),[]),Object(n.jsxs)("header",{id:"home",style:{height:"100%"},children:[e.headerData&&Object(n.jsx)("a",{href:e.headerData.github_link,id:"github",target:"blank",style:{position:"absolute",transform:"rotate(315deg)"},children:Object(n.jsx)("span",{class:"iconify","data-icon":"ri-github-line","data-inline":"false",style:{backgroundColor:"white"}})}),Object(n.jsx)("div",{className:"square"}),Object(n.jsxs)("div",{className:"header-data",children:[Object(n.jsx)("h2",{style:{fontFamily:"sans-serif",marginTop:"20px",fontWeight:"bold"},children:e.headerData&&Object(n.jsx)(r.a,{steps:[e.headerData.basic_info.name]})}),Object(n.jsx)("h4",{children:e.headerData&&Object(n.jsx)(r.a,{steps:e.headerData.basic_info.titles,loop:50,wrapper:"p"})}),Object(n.jsx)("div",{children:Object(n.jsx)(m,{})})]})]})};c(70),c(69);var y=c(68);var f=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"git-network-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Hire Me"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Hire Me"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var v=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"bar-chart-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Skills"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Skills"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var k=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"person-add-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"About You"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Lets C what I know about YOU"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})},w=c(66),N=c(67);c(61);var C=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"happy-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"About"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"About"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Modal body text goes here."})})]})})]})};var T=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"book-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Education"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Education"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var D=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"code-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Projects"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Projects"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var S=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"desktop-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Experience"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Experience"})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var B=function(e){var t=Object(i.useState)(),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.jsxs)("div",{style:{margin:"auto"},children:[Object(n.jsxs)("button",{className:"about_button",onClick:function(){a(!0)},children:[Object(n.jsx)("ion-icon",{name:"card-outline"}),Object(n.jsx)("div",{style:{display:"inline",margin:"5px"},children:"Donate"})]}),s&&Object(n.jsx)("div",{className:"overlay",children:Object(n.jsxs)(y.a.Dialog,{children:[Object(n.jsx)(y.a.Header,{closeButton:!0,onClick:function(){a(!1)},children:Object(n.jsx)(y.a.Title,{style:{color:"black"},children:"Want to Donate ?? "})}),Object(n.jsx)(y.a.Body,{style:{color:"black"},children:Object(n.jsx)("p",{children:"Thanks for showing interest"})})]})})]})};var M=function(e){var t=Object(i.useState)(new Date),c=Object(o.a)(t,2),s=c[0],a=c[1],l=Object(i.useState)(!1),r=Object(o.a)(l,2),j=r[0],d=r[1],b=Object(i.useState)(),h=Object(o.a)(b,2),O=h[0],u=h[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){clearInterval(e)}})),Object(n.jsx)("div",{id:"taskbar-wrapper",children:Object(n.jsxs)("div",{id:"taskbar",children:[Object(n.jsxs)("div",{id:"quickstart",children:[Object(n.jsxs)("div",{class:"dropup",children:[Object(n.jsx)("button",{style:{all:"unset"},onClick:function(){d(!1===j)},children:Object(n.jsx)("span",{class:"iconify","data-icon":"ant-design:windows-filled","data-inline":"false",style:{boxShadow:"100px"}})}),j&&Object(n.jsx)("div",{class:"dropup-content",children:Object(n.jsxs)(w.a,{class:"ow",style:{width:"40vw",backgroundColor:"currentColor",margin:"0px",paddingTop:"10px",paddingLeft:"7px",paddingRight:"7px"},children:[Object(n.jsxs)(N.a,{style:{color:"white"},children:[Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(C,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(v,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(S,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(D,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(T,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(k,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(f,{})}),Object(n.jsx)(w.a,{id:"menu-icon",children:Object(n.jsx)(B,{})})]}),g.isBrowser&&Object(n.jsx)(N.a,{style:{width:"10px"},children:Object(n.jsxs)("div",{className:"metro",children:[Object(n.jsxs)("div",{className:"l1",children:[Object(n.jsx)("li",{className:"item i1",children:Object(n.jsx)("a",{href:"https://google.com",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"logo-chrome"}),Object(n.jsx)("div",{children:" Chrome"})]})})}),Object(n.jsx)("li",{className:"item i2",children:Object(n.jsx)("a",{href:"https://www.google.com/search?q=videos",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"videocam-outline"}),Object(n.jsx)("div",{children:" Videos"})]})})})]}),Object(n.jsx)("div",{className:"l1",children:Object(n.jsx)("li",{className:"item i3",children:Object(n.jsx)("a",{href:"https://www.youtube.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"logo-youtube"}),Object(n.jsx)("div",{children:" Youtube"})]})})})}),Object(n.jsxs)("div",{className:"l1",children:[Object(n.jsx)("li",{className:"item i4",children:Object(n.jsx)("a",{href:"https://myaccount.google.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"settings-outline"}),Object(n.jsx)("div",{children:" Control Panel"})]})})}),Object(n.jsx)("li",{className:"item i5",children:Object(n.jsx)("a",{href:"https://www.netflix.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"tv-outline"}),Object(n.jsx)("div",{children:"Movie & TV"})]})})})]}),Object(n.jsx)("div",{className:"l1",children:Object(n.jsx)("li",{className:"item i6",children:Object(n.jsx)("a",{href:"https://photos.google.com/",target:"blank",style:{display:"block",background:"unset"},children:Object(n.jsxs)("div",{style:{marginTop:"4%"},children:[Object(n.jsx)("ion-icon",{name:"image-outline"}),Object(n.jsx)("div",{children:" Photos"})]})})})})]})})]})})]}),Object(n.jsxs)("div",{class:"dropup",children:[Object(n.jsx)("button",{style:{all:"unset"},onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:Object(n.jsx)("span",{class:"iconify","data-icon":"fluent:mail-28-filled","data-inline":"false"})}),O&&Object(n.jsx)("div",{class:"dropup-content",children:Object(n.jsx)("a",{children:"Ah! No New message. You're Single!"})})]}),Object(n.jsx)("a",{href:"https://www.google.com",title:"Open New Tab",target:"blank",children:Object(n.jsx)("span",{class:"iconify","data-icon":"grommet-icons:chrome","data-inline":"false"})}),Object(n.jsx)("a",{href:"https://www.netflix.com",target:"blank",children:Object(n.jsx)("span",{class:"iconify","data-icon":"logos:netflix-icon","data-inline":"false"})}),e.headerData&&Object(n.jsx)("a",{href:e.headerData.linkedin_link,target:"blank",children:Object(n.jsx)("span",{class:"iconify","data-icon":"logos:linkedin-icon","data-inline":"false"})})]}),Object(n.jsxs)("div",{id:"tray",children:[Object(n.jsxs)("span",{id:"system-time",children:[s.getHours(),":",s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),":",s.getSeconds(),Object(n.jsx)("br",{}),s.getDate(),"/",s.getMonth()+1,"/",s.getFullYear()]}),Object(n.jsx)("span",{id:"language",children:"ENG"})]})]})})};var _=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){fetch("info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(p,{headerData:c}),Object(n.jsx)(M,{headerData:c})]})};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.908aeee0.chunk.js.map