(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=n(1),s=n(2),l=n(5),u=n(4),h=n(6),b=n(3),m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).state={blogsList:[]},n.fetchData=n.fetchData.bind(Object(b.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("https://bdrbn5pb32.execute-api.ap-southeast-1.amazonaws.com/dev/blogs").then(function(e){return e.json()}).then(function(t){e.setState({blogsList:t})})}},{key:"renderList",value:function(){return this.state.blogsList.map(function(e,t){var n=e.title,a=e.body;return o.a.createElement("div",{key:t,className:"blog-item"},o.a.createElement("h2",null,n),o.a.createElement("p",null,a))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"blog-list"},this.renderList())}}]),t}(o.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{className:"blogs"}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f2b4a435.chunk.js.map