(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(140)},108:function(e,t,n){},109:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),o=(n(108),n(67)),s=n(12),l=n(13),u=n(15),m=n(14),d=n(16),b=n(96),f=n(171),k=n(170),h=n(165),g=n(166),p=n(167),v=n(163),O=n(164),E=n(169),S=n(94),j=n.n(S),w=n(173),y=n(86),I=n.n(y),T=(n(109),n(66)),R=n(39),C=n(52),U=n(32),W=n(162),N=n(29),M=n(30),_=n.n(M),$=n(45),P=n.n($),F=n(46),L=function(e){function t(e){var n,a=e.state;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this))).state=a,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(P.a,{className:"json-pretty",theme:F,data:this.state}))}}]),t}(r.a.Component);function B(){var e=Object(N.a)(["\n  subscription ConfigState {\n    configState ","\n  }\n"]);return B=function(){return e},e}function D(){var e=Object(N.a)(["\n  query ConfigState {\n    configState ","\n  }\n"]);return D=function(){return e},e}var q="\n{\n  schemaFile\n  taskGenerationConfig {\n    initialLocation\n  }\n}",x=_()(D(),q),A=_()(B(),q),Q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={didSubscribe:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_subscribeToState",value:function(e){e({document:A,variables:{},updateQuery:function(e,t){var n=t.subscriptionData;return Object.assign({},{configState:n.data})}})}},{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(U.c,{query:x,variables:{}},function(t){var n=t.loading,a=t.error,i=t.data,c=t.subscribeToMore;return n?r.a.createElement("div",null,"Fetching"):a?r.a.createElement("div",null,"Error"):(e.state.didSubscribe||(e._subscribeToState(c),e.setState({didSubscribe:!0})),r.a.createElement(L,{state:i.configState}))}))}}]),t}(r.a.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(W.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Config"),r.a.createElement(Q,{subscribeToState:this._subscribeToState})))}}]),t}(r.a.Component);function G(){var e=Object(N.a)(["\n  subscription State {\n    currentState ","\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(N.a)(["\n  query State {\n    currentState ","\n  }\n"]);return K=function(){return e},e}var V="\n{\n  currentTime\n  config {\n    schemaFile\n    taskGenerationConfig {\n      initialLocation\n    }\n  }\n\n  crowd {\n    stats {\n      seenWorkersTotal\n      availableWorkersTotal\n    }\n  }\n\n  tasks {\n    stats {\n      availableTasksTotal\n    }\n  }\n\n  knowledge {\n    stats {\n      totalEntityTypes\n    }\n    knownClasses\n  }\n\n}",z=_()(K(),V),H=_()(G(),V),X=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={didSubscribe:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_subscribeToState",value:function(e){e({document:H,updateQuery:function(e,t){var n=t.subscriptionData;return Object.assign({},n.data)}})}},{key:"render",value:function(){var e=this;return r.a.createElement(U.c,{query:z,variables:{}},function(t){var n=t.loading,a=t.error,i=t.data,c=t.subscribeToMore;return n?r.a.createElement("div",null,"Fetching"):a?r.a.createElement("div",null,"Error"):(e.state.didSubscribe||(e._subscribeToState(c),e.setState({didSubscribe:!0})),r.a.createElement(P.a,{className:"json-pretty",theme:F,data:i.currentState}))})}}]),t}(r.a.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(W.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"Dashboard"),r.a.createElement(X,{subscribeToState:this._subscribeToState})))}}]),t}(r.a.Component);function Z(){var e=Object(N.a)(["\n  mutation TaskResult($workerId: ID!, $taskString: String!, $taskResultString: String!, $file: Upload) {\n    submitTaskResult(workerId: $workerId, taskString: $taskString, taskResultString: $taskResultString, file: $file) {\n      isSubmitted\n    }\n  }\n"]);return Z=function(){return e},e}var ee=_()(Z()),te=function(e){function t(e){var n,a=e.workerId,r=e.task;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this))).state={workerId:a,task:r,file:null,fileUrl:null,submitted:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleFileChange",value:function(e){var t=e.target,n=t.validity,a=Object(o.a)(t.files,1)[0];n.valid&&this.setState({file:a,fileUrl:URL.createObjectURL(a)})}},{key:"submitResult",value:function(e){var t=this;e.preventDefault();var n=JSON.stringify(this.state.task),a=JSON.stringify({taskResult:"test2"});this.props.client.mutate({mutation:ee,variables:{workerId:this.state.workerId,taskString:n,taskResultString:a,file:this.state.file},update:function(){t.setState({submitted:!0})}})}},{key:"render",value:function(){var e,t=this;return e=this.state.submitted?r.a.createElement("div",null,"Task succesfully completed! Waiting for next task..."):r.a.createElement("form",{onSubmit:function(){return t.submitResult.apply(t,arguments)}},r.a.createElement("input",{type:"file",required:!0,onChange:function(){return t.handleFileChange.apply(t,arguments)}}),this.state.fileUrl&&r.a.createElement("img",{src:this.state.fileUrl,className:"imagePreview",alt:"file preview"}),r.a.createElement(O.a,{type:"submit",color:"primary",variant:"contained"},"Submit result!")),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),"QUESTION"===this.state.task.interfaceType&&r.a.createElement(v.a,{variant:"h5",className:"TaskQuestionInterface"},this.state.task.taskType," Task: ",this.state.task.interfaceParams[0]),e)}}]),t}(r.a.Component),ne=Object(U.d)(te),ae=function(e){function t(e){var n,a=e.workerId,r=e.workerState;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this))).state={workerId:a,workerState:r},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.workerState&&e.workerState!==this.props.workerState&&this.setState({workerState:e.workerState})}},{key:"render",value:function(){var e;return e=null==this.state.workerState.currentTask?r.a.createElement("div",null,"Waiting for task to be assigned..."):r.a.createElement(ne,{task:this.state.workerState.currentTask,workerId:this.state.workerId}),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(P.a,{className:"json-pretty",theme:F,data:this.state.workerState}),e)}}]),t}(r.a.Component);function re(){var e=Object(N.a)(["\n  subscription WorkerState($workerId: ID!) {\n    workerState(workerId: $workerId) ","\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(N.a)(["\n  query WorkerState($workerId: ID!) {\n    workerState(workerId: $workerId) ","\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(N.a)(["\n  mutation Worker($name: String!) {\n    registerWorker(name: $name) {\n      profile {\n        id\n      }\n    }\n  }\n"]);return ce=function(){return e},e}var oe="\n{\n  isOnline\n  isWorkingOnTask\n  currentTask {\n    taskType\n    taskParams\n    interfaceType\n    interfaceParams\n    resultType\n    resultParams\n  }\n}",se=_()(ce()),le=_()(ie(),oe),ue=_()(re(),oe),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={didSubscribe:!1,isRegistering:!1,didRegister:!1,workerId:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_subscribeToState",value:function(e){e({document:ue,variables:{workerId:this.state.workerId},updateQuery:function(e,t){var n=t.subscriptionData;return Object.assign({},n.data)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(U.b,{mutation:se},function(t,n){var a=n.loading,i=n.error;return a?r.a.createElement("div",null,"Registering worker..."):i?r.a.createElement("div",null,"Registration error."):e.state.isRegistering||e.state.didRegister?r.a.createElement("div",null,"Worker registered!"):(e.setState({isRegistering:!0}),t({variables:{name:"Steffan"}}).then(function(t){var n=t.data.registerWorker.profile.id;e.setState({workerId:n,didRegister:!1,isRegistering:!0})}),r.a.createElement("div",null,"Starting worker registration..."))}),this.state.workerId&&r.a.createElement(U.c,{query:le,variables:{workerId:this.state.workerId}},function(t){var n=t.loading,a=t.error,i=t.data,c=t.subscribeToMore;return n?r.a.createElement("div",null,"Fetching"):a?r.a.createElement("div",null,"Error"):(e.state.didSubscribe||(e._subscribeToState(c),e.setState({didSubscribe:!0})),r.a.createElement(ae,{workerState:i.workerState,workerId:e.state.workerId}))}))}}]),t}(r.a.Component),de=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(W.a,{maxWidth:"md"},r.a.createElement(v.a,{variant:"h4",className:"TitleBar"},"Worker UI"),r.a.createElement(me,null)))}}]),t}(r.a.Component),be=n(91);n(126);var fe=Object({NODE_ENV:"production",PUBLIC_URL:"/unsullied-ui"}),ke=fe.API_URI,he=void 0===ke?"http://localhost:4000/":ke,ge=fe.PUBLIC_URL,pe={API_URI:he,PUBLIC_URL:void 0===ge?be.a:ge},ve=n(98),Oe=n(92),Ee=n(38),Se=n(2),je=n(97),we=new ve.a({uri:pe.API_URI.replace("http","ws"),options:{reconnect:!0,timeout:3e4,connectionParams:{}}}),ye=Object(Ee.split)(function(e){var t=e.query,n=Object(Se.l)(t);return console.log(n.operation),"OperationDefinition"===n.kind&&"subscription"===n.operation},we,Object(Oe.createUploadLink)({uri:pe.API_URI,options:{path:"/"}})),Ie=new je.a,Te=new C.c({link:ye,cache:Ie}),Re=Object(b.a)({palette:{type:"dark"}}),Ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).login=function(){e.setState({logged:!0})},e.logout=function(){e.setState({logged:!1})},e.toggleMenu=function(){e.setState({open:!e.state.open})},e.closeMenu=function(){e.setState({open:!1})},e.selectMenuItem=function(t){e.setState({selectedMenuItem:t}),e.closeMenu()},e.createMenu=function(){return Object.entries(e.menuItems).map(function(t){var n=Object(o.a)(t,2),a=n[0],i=n[1],c=r.a.forwardRef(function(e,t){return r.a.createElement(T.b,Object.assign({innerRef:t,to:i},e),a)});return r.a.createElement(k.a,{className:"MenuItem",onClick:function(){return e.selectMenuItem(a)},component:c,key:a},a)})},e.state={open:!1,logged:!1,selectedMenuItem:null},e.menuItems={Dashboard:"/",Config:"/config","Worker UI":"/worker-ui"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{theme:Re},r.a.createElement(w.a,null),r.a.createElement(U.a,{client:Te},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(p.a,{edge:"start",className:"MenuIconButton",color:"inherit","aria-label":"Menu",onClick:this.toggleMenu},r.a.createElement(j.a,null)),r.a.createElement(v.a,{variant:"h6",className:"TitleBar"},"UnsulliedKnowledge"),this.state.logged?r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:this.logout},"Logout"):r.a.createElement(O.a,{variant:"contained",onClick:this.login},"Login"))),r.a.createElement(E.a,{open:this.state.open,docked:"false",onBackdropClick:this.toggleMenu},r.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),this.createMenu()),r.a.createElement(R.a,{exact:!0,path:"/",component:Y}),r.a.createElement(R.a,{path:"/config",component:J}),r.a.createElement(R.a,{path:"/worker-ui",component:de}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T.a,{basename:"/unsullied-ui"},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},91:function(e){e.exports={a:"https://unsulliedcrowd.github.io/unsullied-ui"}}},[[103,1,2]]]);
//# sourceMappingURL=main.e049eefe.chunk.js.map