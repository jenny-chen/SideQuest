(window["webpackJsonpsidesideproject-frontend"]=window["webpackJsonpsidesideproject-frontend"]||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),s=a(7),o=a(18),i=a.n(o),m=a(32),d=a(10),u=a(12),p=a(13),y=a(15),v=a(14),h=a(2),E=a(16),b=a(8);function f(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(b.b,{className:"navbar-brand",to:"/"},"SideQuest"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/submit"},"Submit Project")))))}var g=a(35),k=a.n(g),w=[["design","Design"],["education","Education"],["health","Healthcare"],["science","Science"],["shopping","Shopping"],["sports","Sports"]],N=[["android","Android"],["api","API"],["blockchain","Blockchain"],["graphic-design","Graphic Design"],["ios","iOS"],["ml","Machine Learning"],["oop","Object Oriented"],["scripting","Scripting"],["web","Web"]],S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(y.a)(this,Object(v.a)(t).call(this,e))).state={keywords:[],interests:[["all","All"]],projects:[],searching:!1},a.keywordSelect=a.keywordSelect.bind(Object(h.a)(a)),a.interestSelect=a.interestSelect.bind(Object(h.a)(a)),a.removeKeyword=a.removeKeyword.bind(Object(h.a)(a)),a.removeInterest=a.removeInterest.bind(Object(h.a)(a)),a.search=a.search.bind(Object(h.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"keywordSelect",value:function(){var e=!1,t=!0,a=!1,n=void 0;try{for(var r,l=this.state.keywords[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){if(r.value[0]===document.getElementById("keyword-select").value){e=!0;break}}}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}e||(this.setState({keywords:[].concat(Object(d.a)(this.state.keywords),[[document.getElementById("keyword-select").value,document.getElementById("keyword-select").options[document.getElementById("keyword-select").selectedIndex].text]])}),document.getElementById("keyword-select").value="placeholder")}},{key:"interestSelect",value:function(){var e=!1,t=!0,a=!1,n=void 0;try{for(var r,l=this.state.interests[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){if(r.value[0]===document.getElementById("interest-select").value){e=!0;break}}}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}e||(this.setState({interests:[].concat(Object(d.a)(this.state.interests.filter((function(e){return"all"!==e[0]}))),[[document.getElementById("interest-select").value,document.getElementById("interest-select").options[document.getElementById("interest-select").selectedIndex].text]])}),document.getElementById("interest-select").value="placeholder")}},{key:"removeKeyword",value:function(e){this.setState({keywords:this.state.keywords.filter((function(t){return t[0]!==e}))})}},{key:"removeInterest",value:function(e){var t=this;this.setState({interests:this.state.interests.filter((function(t){return t[0]!==e}))},(function(){0===t.state.interests.length&&t.setState({interests:[["all","All"]]})}))}},{key:"search",value:function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({searching:!0}),e.next=3,k.a.post("https://us-central1-graph-intelligence.cloudfunctions.net/searchProjects?fbclid=IwAR162ulayDPSRpwNfo2-vKlRrsJaouTGLbXY6J7LdrsQsuAgHmzOupDLTlo",{crossdomain:!0});case 3:t=e.sent.data,this.setState({projects:t.body.projects,searching:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.keywords.map((function(t){return r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){e.removeKeyword(t[0])},key:t[0],className:"badge badge-secondary ml-1"},t[1])})),a=this.state.interests.map((function(t){return"all"===t[0]?r.a.createElement("span",{style:{cursor:"pointer"},key:t[0],className:"badge badge-secondary ml-1"},t[1]):r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){e.removeInterest(t[0])},key:t[0],className:"badge badge-secondary ml-1"},t[1])})),n=this.state.projects.map((function(e){return r.a.createElement("div",{className:"card mt-1 mx-2",style:{width:"20rem"},key:e.name},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},e.description),e.skills.map((function(e){return r.a.createElement("span",{style:{cursor:"pointer"},key:e,className:"badge badge-secondary ml-1"},e)})),r.a.createElement("footer",{className:"mt-2 blockquote-footer"},r.a.createElement("small",{className:"text-muted"},e.author))))}));return 0===n.length&&n.push(r.a.createElement("p",null,"No projects found.")),r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Search"),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-inline"},"Keywords:"),r.a.createElement("div",{className:"d-inline"},t)),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("select",{className:"custom-select",id:"keyword-select",onChange:this.keywordSelect},r.a.createElement("option",{value:"placeholder",selected:!0},"Add Keyword..."),N.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])}))))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-inline"},"Interests:"),r.a.createElement("div",{className:"d-inline"},a)),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("select",{className:"custom-select",id:"interest-select",onChange:this.interestSelect},r.a.createElement("option",{value:"placeholder",selected:!0},"Add Interest..."),w.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])})))))),r.a.createElement("button",{onClick:this.search,className:"btn btn-primary mt-3"},r.a.createElement("div",null,this.state.searching?r.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}):null,"Search")))),r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},n)))))}}]),t}(n.Component),I=[["design","Design"],["education","Education"],["health","Healthcare"],["science","Science"],["shopping","Shopping"],["sports","Sports"]],j=[["android","Android"],["api","API"],["blockchain","Blockchain"],["graphic-design","Graphic Design"],["ios","iOS"],["ml","Machine Learning"],["oop","Object Oriented"],["scripting","Scripting"],["web","Web"]],x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(y.a)(this,Object(v.a)(t).call(this,e))).state={keywords:[],interests:[]},a.keywordSelect=a.keywordSelect.bind(Object(h.a)(a)),a.interestSelect=a.interestSelect.bind(Object(h.a)(a)),a.removeKeyword=a.removeKeyword.bind(Object(h.a)(a)),a.removeInterest=a.removeInterest.bind(Object(h.a)(a)),a.submit=a.submit.bind(Object(h.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"keywordSelect",value:function(){var e=!1,t=!0,a=!1,n=void 0;try{for(var r,l=this.state.keywords[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){if(r.value[0]===document.getElementById("keyword-select").value){e=!0;break}}}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}e||(this.setState({keywords:[].concat(Object(d.a)(this.state.keywords),[[document.getElementById("keyword-select").value,document.getElementById("keyword-select").options[document.getElementById("keyword-select").selectedIndex].text]])}),document.getElementById("keyword-select").value="placeholder")}},{key:"interestSelect",value:function(){var e=!1,t=!0,a=!1,n=void 0;try{for(var r,l=this.state.interests[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){if(r.value[0]===document.getElementById("interest-select").value){e=!0;break}}}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}e||(this.setState({interests:[].concat(Object(d.a)(this.state.interests.filter((function(e){return"all"!==e[0]}))),[[document.getElementById("interest-select").value,document.getElementById("interest-select").options[document.getElementById("interest-select").selectedIndex].text]])}),document.getElementById("interest-select").value="placeholder")}},{key:"removeKeyword",value:function(e){this.setState({keywords:this.state.keywords.filter((function(t){return t[0]!==e}))})}},{key:"removeInterest",value:function(e){this.setState({interests:this.state.interests.filter((function(t){return t[0]!==e}))})}},{key:"submit",value:function(){alert("submit!")}},{key:"render",value:function(){var e=this,t=this.state.keywords.map((function(t){return r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){e.removeKeyword(t[0])},key:t[0],className:"badge badge-secondary ml-1"},t[1])})),a=this.state.interests.map((function(t){return r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){e.removeInterest(t[0])},key:t[0],className:"badge badge-secondary ml-1"},t[1])}));return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"container mt-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title",className:"font-weight-bold"},"Project Title"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"My Project",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author",className:"font-weight-bold"},"Author"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"John Doe",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"font-weight-bold"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-inline font-weight-bold"},"Keywords:"),r.a.createElement("div",{className:"d-inline"},t)),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("select",{className:"custom-select",id:"keyword-select",onChange:this.keywordSelect},r.a.createElement("option",{value:"placeholder",selected:!0},"Add Keyword..."),j.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])}))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-inline font-weight-bold"},"Interests:"),r.a.createElement("div",{className:"d-inline"},a)),r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("select",{className:"custom-select",id:"interest-select",onChange:this.interestSelect},r.a.createElement("option",{value:"placeholder",selected:!0},"Add Interest..."),I.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])})))))),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",{className:"font-weight-bold"},"Project Description"),r.a.createElement("textarea",{className:"form-control",rows:"3",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"font-weight-bold"},"Image URL"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter image URL"})),r.a.createElement("button",{className:"btn btn-primary"},"Submit"))))}}]),t}(n.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:S}),r.a.createElement(s.a,{exact:!0,path:"/submit",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.57626d5c.chunk.js.map