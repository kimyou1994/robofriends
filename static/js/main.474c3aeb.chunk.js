(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(6),i=n.n(c),s=n(7),a=n(8),l=n(12),u=n(13),d=(n(24),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))}),h=(n(25),n(14)),b=n(1),j=function(e){var t=e.id,n=e.name,o=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:o})]})]})},f=function(e){var t=e.robots;return console.log("CardList"),Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},g=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},p=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=n(2),v=n(3),w=n(5),x=n(4),m=function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(e){var o;return Object(O.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(v.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Not Good"}):this.props.children}}]),n}(o.Component),C=(n(27),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",k="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",E=function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),Object(b.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.PureComponent),R=function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return console.log("Header"),Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{color:"red"}),Object(b.jsx)("h1",{className:"f2",children:"RoboFriends"})]})}}]),n}(o.Component),P=R,F=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,console.log(n),{type:C,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:k,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}))}}}))((function(e){var t=Object(o.useState)(0),n=Object(h.a)(t,2),r=n[0],c=n[1],i=e.searchField,s=e.onSearchChange,a=e.robots,l=e.isPending,u=e.onRequestRobots,d=a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(o.useEffect)((function(){u()}),[u]),l?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)(P,{}),Object(b.jsx)("button",{onClick:function(){return c(r+1)},children:"Click Me!"}),Object(b.jsx)(g,{searchChange:s}),Object(b.jsx)(p,{children:Object(b.jsx)(m,{children:Object(b.jsx)(f,{robots:d})})})]})})),L={searchField:""},N={isPending:!1,robots:[],error:""},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=Object(l.createLogger)(),W=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log(t.type),t.type===C?Object.assign({},e,{searchField:t.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case k:return Object.assign({},e,{robots:t.payload,isPending:!1});case S:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(a.c)(W,Object(a.a)(u.a,U));i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{store:_,children:Object(b.jsx)(F,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),d()}},[[28,1,2]]]);
//# sourceMappingURL=main.474c3aeb.chunk.js.map