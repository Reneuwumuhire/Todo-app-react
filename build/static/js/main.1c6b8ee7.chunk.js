(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{52:function(e,t,a){e.exports=a(76)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),l=(a(57),a(26)),i=(a(58),a(103)),d=a(99),s=a(100),u=a(101),p=a(106),m=(a(59),a(33)),f=a.n(m),E=f.a.initializeApp({apiKey:"AIzaSyAiK3-DcJ6_eAnOpYYHXvzIfLTc-rhNgvc",authDomain:"todo-app-3ed04.firebaseapp.com",databaseURL:"https://todo-app-3ed04.firebaseio.com",projectId:"todo-app-3ed04",storageBucket:"todo-app-3ed04.appspot.com",messagingSenderId:"965229454744",appId:"1:965229454744:web:b3df1ff07695e57e92f7ed",measurementId:"G-J8WH6J38BF"}).firestore(),b=a(46),h=a.n(b),v=a(96),g=Object(v.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var w=function(e){var t=g(),a=Object(o.useState)(!1),r=Object(l.a)(a,2),c=r[0],m=r[1],f=Object(o.useState)(),b=Object(l.a)(f,2),v=b[0],w=b[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{open:c,onClose:function(e){return m(!1)}},n.a.createElement("div",{className:t.paper},n.a.createElement("h1",null,"I am A Modal"),n.a.createElement("form",null,n.a.createElement("input",{placeholder:e.todo.todo,value:v,onChange:function(e){return w(e.target.value)}}),n.a.createElement(d.a,{type:"submit",onClick:function(t){t.preventDefault(),E.collection("todos").doc(e.todo.id).set({todo:v},{merge:!0}),m(!1)}},"Update Todo")))),n.a.createElement(s.a,{className:"todo__list"},n.a.createElement(u.a,null,n.a.createElement(p.a,{primary:e.todo.todo,secondary:"the dead"})),n.a.createElement("button",{onClick:function(e){return m(!0)}},"Edit"),n.a.createElement(h.a,{onClick:function(t){return E.collection("todos").doc(e.todo.id).delete()}})))},O=a(102),j=a(105),k=a(104);var y=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1];return Object(o.useEffect)((function(){E.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Your TODO LIST APP ",n.a.createElement("span",null,"\u2649")),n.a.createElement("form",{className:"new__todo"},n.a.createElement(O.a,{className:"todo"},n.a.createElement(j.a,null,"Write a Todo"),n.a.createElement(k.a,{value:s,onChange:function(e){return u(e.target.value)}}),n.a.createElement(d.a,{disabled:!s,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),E.collection("todos").add({todo:s,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),u("")}},"Add To Do"))),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(w,{id:e.id,todo:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.1c6b8ee7.chunk.js.map