(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n(138)},106:function(e,t,n){},107:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),o=(n(106),n(94)),s=n(20),u=n(21),l=n(23),m=n(22),d=n(24),b=n(92),g=n(168),f=n(166),h=n(161),p=n(162),k=n(163),v=n(159),E=n(160),S=n(165),O=n(90),j=n.n(O),w=n(167),I=n(83),y=n.n(I),T=(n(107),n(64)),R=n(39),N=n(49),C=n(33),M=n(158);var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Hello!")))},U=n(35),W=n(36),B=n.n(W);function P(){var e=Object(U.a)(["\n  subscription State {\n    currentState ","\n  }\n"]);return P=function(){return e},e}function L(){var e=Object(U.a)(["\n  query State {\n    currentState ","\n  }\n"]);return L=function(){return e},e}var $="\n{\n  currentTime\n  config {\n    schemaFile\n  }\n\n  crowd {\n    stats {\n      availableWorkersTotal\n    }\n  }\n\n}",D=B()(L(),$),x=B()(P(),$),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={didSubscribe:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_subscribeToState",value:function(e){e({document:x,updateQuery:function(e,t){var n=t.subscriptionData;return Object.assign({},e,n.data)}})}},{key:"render",value:function(){var e=this;return r.a.createElement(C.c,{query:D,variables:{}},function(t){var n=t.loading,a=t.error,i=t.data,c=t.subscribeToMore;return n?r.a.createElement("div",null,"Fetching"):a?r.a.createElement("div",null,"Error"):(e.state.didSubscribe||(e._subscribeToState(c),e.setState({didSubscribe:!0})),r.a.createElement("div",null,JSON.stringify(i.currentState)))})}}]),t}(r.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Dashboard"),r.a.createElement(A,{subscribeToState:this._subscribeToState})))}}]),t}(r.a.Component);function J(){var e=Object(U.a)(["\n  mutation TaskResult($taskString: String!, $taskResultString: String!) {\n    submitTaskResult(taskString: $taskString, taskResultString: $taskResultString) {\n      isSubmitted\n    }\n  }\n"]);return J=function(){return e},e}var q=B()(J()),Q=function(e){function t(e){var n,a=e.task;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this))).state=a,n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"submitResult",value:function(){var e=JSON.stringify(this.state),t=JSON.stringify({taskResult:"test2"});this.props.client.mutate({mutation:q,variables:{taskString:e,taskResultString:t}})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},this.state.taskType," Task!"),"QUESTION"===this.state.interfaceType&&r.a.createElement("div",null,"Question interface: ",JSON.stringify(this.state.interfaceParams),"."),"LABEL"===this.state.resultType&&r.a.createElement("div",null,"Label result: ",JSON.stringify(this.state.resultParams),"."),r.a.createElement(E.a,{color:"primary",variant:"contained",onClick:function(){return e.submitResult()}},"Submit result!"))}}]),t}(r.a.Component),H=Object(C.d)(Q);r.a.Component;function V(){var e=Object(U.a)(["\n  subscription WorkerState($workerId: ID!) {\n    workerState(workerId: $workerId) ","\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(U.a)(["\n  query WorkerState($workerId: ID!) {\n    workerState(workerId: $workerId) ","\n  }\n"]);return z=function(){return e},e}function G(){var e=Object(U.a)(["\n  mutation Worker($name: String!) {\n    registerWorker(name: $name) {\n      profile {\n        id\n      }\n    }\n  }\n"]);return G=function(){return e},e}var K="\n{\n  isOnline\n  currentTask {\n    taskType\n    taskParams\n    interfaceType\n    interfaceParams\n    resultType\n    resultParams\n  }\n}",X=B()(G()),Y=B()(z(),K),Z=B()(V(),K),ee=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={didSubscribe:!1,isRegistering:!1,didRegister:!1,workerId:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_subscribeToState",value:function(e){e({document:Z,variables:{workerId:this.state.workerId},updateQuery:function(e,t){var n=t.subscriptionData;return Object.assign({},e,{workerState:n.data.currentState})}})}},{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(C.b,{mutation:X},function(t,n){var a=n.loading,i=n.error;return a?r.a.createElement("div",null,"Registering worker..."):i?r.a.createElement("div",null,"Registration error."):e.state.isRegistering||e.state.didRegister?r.a.createElement("div",null,"Worker registered!"):(e.setState({isRegistering:!0}),t({variables:{name:"Steffan"}}).then(function(t){var n=t.data.registerWorker.profile.id;e.setState({workerId:n,didRegister:!1,isRegistering:!0})}),r.a.createElement("div",null,"Starting worker registration..."))}),this.state.workerId&&r.a.createElement(C.c,{query:Y,variables:{workerId:this.state.workerId}},function(t){var n=t.loading,a=t.error,i=t.data,c=t.subscribeToMore;return n?r.a.createElement("div",null,"Fetching"):a?r.a.createElement("div",null,"Error"):(e.state.didSubscribe||(e._subscribeToState(c),e.setState({didSubscribe:!0})),r.a.createElement("worker_state",{state:i.workerState}))}))}}]),t}(r.a.Component),te=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Worker UI"),r.a.createElement(ee,{subscribeToState:this._subscribeToState})))}}]),t}(r.a.Component),ne=n(88);n(124);var ae=Object({NODE_ENV:"production",PUBLIC_URL:"/unsullied-ui"}),re=ae.API_URI,ie=void 0===re?"https://staging-unsullied-api.herokuapp.com/":re,ce=ae.PUBLIC_URL,oe={API_URI:ie,PUBLIC_URL:void 0===ce?ne.a:ce},se=n(96),ue=n(95),le=n(29),me=n(2),de=n(93),be=new se.a({uri:oe.API_URI,options:{path:"/"}}),ge=new ue.a({uri:oe.API_URI.replace("http","ws"),options:{reconnect:!0,timeout:3e4,connectionParams:{}}}),fe=Object(le.d)(function(e){var t=e.query,n=Object(me.l)(t);return console.log(n.operation),"OperationDefinition"===n.kind&&"subscription"===n.operation},ge,be),he=new de.a,pe=new N.c({link:fe,cache:he}),ke=Object(b.a)({palette:{type:"dark"}}),ve=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).login=function(){e.setState({logged:!0})},e.logout=function(){e.setState({logged:!1})},e.toggleMenu=function(){e.setState({open:!e.state.open})},e.closeMenu=function(){e.setState({open:!1})},e.selectMenuItem=function(t){e.setState({selectedMenuItem:t}),e.closeMenu()},e.createMenu=function(){return Object.entries(e.menuItems).map(function(t){var n=Object(o.a)(t,2),a=n[0],i=n[1],c=r.a.forwardRef(function(e,t){return r.a.createElement(T.b,Object.assign({innerRef:t,to:i},e),a)});return r.a.createElement(f.a,{className:"MenuItem",onClick:function(){return e.selectMenuItem(a)},component:c,key:a},a)})},e.state={open:!1,logged:!1,selectedMenuItem:null},e.menuItems={Home:"/",Dashboard:"/dashboard","Worker UI":"/worker-ui"},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{theme:ke},r.a.createElement(w.a,null),r.a.createElement(C.a,{client:pe},r.a.createElement(h.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(k.a,{edge:"start",className:"MenuIconButton",color:"inherit","aria-label":"Menu",onClick:this.toggleMenu},r.a.createElement(j.a,null)),r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Unsullied"),this.state.logged?r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:this.logout},"Logout"):r.a.createElement(E.a,{variant:"contained",onClick:this.login},"Login"))),r.a.createElement(S.a,{open:this.state.open,docked:"false",onBackdropClick:this.toggleMenu},r.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"}),this.createMenu()),r.a.createElement(R.a,{exact:!0,path:"/",component:_}),r.a.createElement(R.a,{path:"/dashboard",component:F}),r.a.createElement(R.a,{path:"/worker-ui",component:te}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T.a,{basename:"/unsullied-ui"},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},88:function(e){e.exports={a:"https://unsulliedcrowd.github.io/unsullied-ui"}}},[[101,1,2]]]);
//# sourceMappingURL=main.6d6bd978.chunk.js.map