(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),c=(n(101),n(87)),i=n(70),u=n(71),s=n(88),m=n(72),d=n(89),p=n(85),g=n(156),E=n(154),h=n(148),f=n(149),v=n(150),b=n(147),I=n(151),w=n(153),k=n(83),M=n.n(k),U=n(73),O=n.n(U),j=(n(102),n(52)),B=n(31),L=n(86),C=n(50),N=n(155),R=n(146);var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(R.a,{maxWidth:"md"},r.a.createElement(b.a,{variant:"h6",className:"TitleBar"},"Hello!")))},P=n(75),x=n(44),y=n.n(x);function A(){var e=Object(P.a)(["\n      {\n        allUsers {\n          id\n          name\n        }\n      }\n    "]);return A=function(){return e},e}var S=function(){return r.a.createElement(C.b,{query:y()(A())},function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error ",n.message," :("):a.allUsers.map(function(e){var t=e.id,n=e.name;return r.a.createElement("div",{key:t},r.a.createElement("p",null,t,": ",n))})})};var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(R.a,{maxWidth:"md"},r.a.createElement(b.a,{variant:"h6",className:"TitleBar"},"Dashboard"),r.a.createElement(S,null)))},D=n(80);n(112);var T=Object({NODE_ENV:"production",PUBLIC_URL:"/unsulliedcrowd-ui"}),F=T.API_URI,H=void 0===F?"https://staging-unsullied-api.herokuapp.com/":F,J=T.PUBLIC_URL,q={API_URI:H,PUBLIC_URL:void 0===J?D.a:J},V=new L.a({uri:q.API_URI}),$=Object(p.a)({palette:{type:"dark"}}),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).login=function(){e.setState({logged:!0})},e.logout=function(){e.setState({logged:!1})},e.toggleMenu=function(){e.setState({open:!e.state.open})},e.closeMenu=function(){e.setState({open:!1})},e.selectMenuItem=function(t){e.setState({selectedMenuItem:t}),e.closeMenu()},e.createMenu=function(){return Object.entries(e.menuItems).map(function(t){var n=Object(c.a)(t,2),a=n[0],o=n[1],l=r.a.forwardRef(function(e,t){return r.a.createElement(j.b,Object.assign({innerRef:t,to:o},e),a)});return r.a.createElement(E.a,{className:"MenuItem",onClick:function(){return e.selectMenuItem(a)},component:l},a)})},e.state={open:!1,logged:!1,selectedMenuItem:null},e.menuItems={Home:"/",Dashboard:"/dashboard"},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{theme:$},r.a.createElement(C.a,{client:V},r.a.createElement(h.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(v.a,{edge:"start",className:"MenuIconButton",color:"inherit","aria-label":"Menu",onClick:this.toggleMenu},r.a.createElement(M.a,null)),r.a.createElement(b.a,{variant:"h6",className:"TitleBar"},"Unsullied"),this.state.logged?r.a.createElement(I.a,{onClick:this.logout},"Logout"):r.a.createElement(I.a,{onClick:this.login},"Login"))),r.a.createElement(w.a,{open:this.state.open,docked:!1,onBackdropClick:this.toggleMenu},r.a.createElement("img",{src:O.a,className:"App-logo",alt:"logo"}),this.createMenu()),r.a.createElement(B.a,{exact:!0,path:"/",component:_}),r.a.createElement(B.a,{path:"/dashboard",component:W}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j.a,{basename:q.PUBLIC_URL},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},80:function(e){e.exports={a:"https://unsulliedcrowd.github.io/unsulliedcrowd-ui"}},96:function(e,t,n){e.exports=n(125)}},[[96,1,2]]]);
//# sourceMappingURL=main.7dcde4dd.chunk.js.map