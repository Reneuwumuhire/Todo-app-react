(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{44:function(e,t,a){e.exports=a(66)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),i=(a(49),a(32)),l=(a(50),a(82)),s=a(83),d=a(88);a(51);var u=function(e){return o.a.createElement(l.a,{className:"todo__list"},o.a.createElement(s.a,null,o.a.createElement(d.a,{primary:e.text,secondary:" Deadline"})))},p=a(84),m=a(87),f=a(86),h=a(85),v=a(30),E=a.n(v),b=E.a.initializeApp({apiKey:"AIzaSyAiK3-DcJ6_eAnOpYYHXvzIfLTc-rhNgvc",authDomain:"todo-app-3ed04.firebaseapp.com",databaseURL:"https://todo-app-3ed04.firebaseio.com",projectId:"todo-app-3ed04",storageBucket:"todo-app-3ed04.appspot.com",messagingSenderId:"965229454744",appId:"1:965229454744:web:b3df1ff07695e57e92f7ed",measurementId:"G-J8WH6J38BF"}).firestore();var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],d=l[1];return Object(n.useEffect)((function(){b.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return e.data().todo})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Your TODO LIST APP"),o.a.createElement("form",null,o.a.createElement(p.a,null,o.a.createElement(m.a,null,"Write a Todo"),o.a.createElement(f.a,{value:s,onChange:function(e){return d(e.target.value)}}),o.a.createElement(h.a,{disabled:!s,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("todos").add({todo:s,timestamp:E.a.firestore.FieldValue.serverTimestamp()}),d("")}},"Add To Do"))),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement(u,{text:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.a61866c6.chunk.js.map