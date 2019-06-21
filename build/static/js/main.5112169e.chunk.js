(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/logo_white.84bb471c.png"},136:function(e,t,a){e.exports=a(280)},141:function(e,t,a){},142:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),i=(a(141),a(285)),l=a(289),u=a(287),s=a(290),h=a(286),d=a(116),v=a.n(d),m=(a(142),a(13)),f=a(14),b=a(16),p=a(15),g=a(17),j=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"redirect",value:function(e,t){return new Promise(function(a,n){fetch("http://localhost:8000".concat(e),Object.assign({credentials:"same-origin"},t)).then(function(e){a(e)}).catch(function(e){n(e)})})}}]),e}(),O=a(288),E=a(117),w=a.n(E),y=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.header,a=void 0===t?"DATA":t,n=e.height,o=void 0===n?160:n,c=e.width,i=void 0===c?200:c,l=e.value,u=void 0===l?0:l,s=e.className,h=e.color,d=void 0===h?"green":h,v=e.min,m=void 0===v?0:v,f=e.max,b=void 0===f?100:f,p=e.valueFormatter;return r.a.createElement(O.a,{raised:!0,fluid:!0,className:s},r.a.createElement(O.a.Content,{textAlign:"center"},r.a.createElement(O.a.Header,null,a)),r.a.createElement(O.a.Content,{fluid:!0,textAlign:"center"},r.a.createElement(w.a,{value:u,width:i,height:o,label:"",color:d,min:m,max:b,valueFormatter:p,valueLabelStyle:{fontSize:"24px"}})))}}]),t}(r.a.PureComponent),k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:0},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchHumidity()},3e3)}},{key:"fetchHumidity",value:function(){var e=this;j.redirect("/data/humidity").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({value:t})})}},{key:"render",value:function(){var e=this.state.value,t="".concat(function(e){return e<49?"#77be47":e<69?"#beba11":"#b42400"}(e));return r.a.createElement(y,{value:e,width:200,height:160,header:"HUMIDITY",color:t,min:0,max:100,valueFormatter:function(e){return"".concat(e,"%")}})}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:0},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchTemperature()},3e3)}},{key:"fetchTemperature",value:function(){var e=this;j.redirect("/data/temperature").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({value:t})})}},{key:"render",value:function(){var e=this.state.value,t="".concat(function(e){return e<13?"#00a191":e<37?"#77be47":"#b42400"}(e));return r.a.createElement(y,{value:e,width:200,height:160,header:"TEMPERATURE",color:t,min:-30,max:60,valueFormatter:function(e){return"".concat(e,"\xb0C")}})}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:0},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchMoisture()},3e3)}},{key:"fetchMoisture",value:function(){var e=this;j.redirect("/data/moisture").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({value:t})})}},{key:"render",value:function(){var e=this.state.value,t="".concat(function(e){return e<.7?"#77be47":"#e79419"}(e));return r.a.createElement(y,{value:e,width:200,height:160,header:"MOISTURE",color:t,min:0,max:1})}}]),t}(r.a.Component),C=a(59),I=a.n(C),M=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).componentWillReceiveProps=function(e){var t=e.value;a.setState({series:[void 0===t?0:t]})};var n=a.props,r=n.startAngle,o=void 0===r?0:r,c=n.endAngle,i=void 0===c?360:c,l=n.value,u=void 0===l?33:l,s=n.height,h=void 0===s?160:s,d=n.valueFontSize,v=void 0===d?"30px":d;return a.state={options:{plotOptions:{radialBar:{startAngle:o,endAngle:i,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:20,fontSize:v}}}},fill:{colors:[function(e){var t=e.value;return t<33?"#73d33d":t<77?"#b4c028":"#8a1d00"}],type:"gradient",gradient:{shade:"light",shadeIntensity:.2,inverseColors:!1,stops:[0,33,77]}}},series:[u],height:h},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,a=e.options,n=e.height;return r.a.createElement("div",{id:"chart"},r.a.createElement(I.a,{options:a,series:t,type:"radialBar",height:n}))}}]),t}(r.a.Component),S=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.header,a=e.endAngle,n=e.height,o=e.startAngle,c=e.value,i=e.valueFontSize,l=e.className;return r.a.createElement(O.a,{raised:!0,fluid:!0,className:l},r.a.createElement(O.a.Content,null,r.a.createElement(O.a.Header,null,t)),r.a.createElement(O.a.Content,{fluid:!0},r.a.createElement(M,{startAngle:o,endAngle:a,height:n,value:c,valueFontSize:i})))}}]),t}(r.a.PureComponent),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:0},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchMildewData()},3e3)}},{key:"fetchMildewData",value:function(){var e=this;j.redirect("/data/downyMildewIndex").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({value:t})})}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement(S,{className:"mildew",header:"DOWNY MILDEW RISK",value:e,height:350,valueFontSize:"48px"})}}]),t}(r.a.Component),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:0},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchBlackRootData()},3e3)}},{key:"fetchBlackRootData",value:function(){var e=this;j.redirect("/data/blackRotIndex").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({value:t})})}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement(S,{className:"blackRoot",header:"BLACK ROOT RISK",value:e,height:350,valueFontSize:"48px"})}}]),t}(r.a.Component),F={chart:{id:"mychart",shadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:1},toolbar:{show:!1}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Diseases predictions",style:{fontSize:"26px"},align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},markers:{size:6},xaxis:{categories:["".concat((new Date).getDate(),".").concat((new Date).getMonth()+1,".").concat((new Date).getFullYear()),"".concat((new Date).getDate()+1,".").concat((new Date).getMonth()+1,".").concat((new Date).getFullYear()),"".concat((new Date).getDate()+2,".").concat((new Date).getMonth()+1,".").concat((new Date).getFullYear()),"".concat((new Date).getDate()+3,".").concat((new Date).getMonth()+1,".").concat((new Date).getFullYear()),"".concat((new Date).getDate()+4,".").concat((new Date).getMonth()+1,".").concat((new Date).getFullYear())],title:{text:"Date"}},yaxis:{min:0,max:100},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}},z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={series:[{name:"Mildew Index",data:[54,89,33,76,62]},{name:"Black Rot Index",data:[12,21,44,58,87]}]},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.fetchIndexes()},108e3)}},{key:"fetchIndexes",value:function(){var e=this;j.redirect("/data/diseasesPredictions").then(function(e){return e.json()}).then(function(t){403!==t.status&&e.setState({series:t})})}},{key:"render",value:function(){var e=this.state.series;return r.a.createElement("div",{id:"chart"},r.a.createElement(I.a,{options:F,series:e,type:"line",height:"400",width:"700"}))}}]),t}(r.a.Component);var N=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{className:"nav-bar",fixed:"top",size:"small",inverted:!0,color:"b92c2c"},r.a.createElement(l.a.Header,{className:"logo-nav-bar"},r.a.createElement(u.a,{src:v.a,className:"App-logo",alt:"logo"})),r.a.createElement(l.a.Item,{className:"logo-nav-bar",fitted:"horizontally"},r.a.createElement("h1",{id:"vision"},"We make vines talk"))),r.a.createElement(s.a,null,r.a.createElement(s.a,{container:!0,id:"sensors-grid",textAlign:"center",centered:!0},r.a.createElement(s.a.Row,{columns:3},r.a.createElement(s.a.Column,null,r.a.createElement(k,null)),r.a.createElement(s.a.Column,null,r.a.createElement(D,null)),r.a.createElement(s.a.Column,null,r.a.createElement(x,null))),r.a.createElement(s.a.Row,{columns:2},r.a.createElement(s.a.Column,null,r.a.createElement(A,null)),r.a.createElement(s.a.Column,null,r.a.createElement(R,null))),r.a.createElement(h.a,null),r.a.createElement(s.a.Row,null,r.a.createElement(z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,1,2]]]);
//# sourceMappingURL=main.5112169e.chunk.js.map