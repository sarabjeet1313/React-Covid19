(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",infected:"Cards_infected__bZ078",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=a(6),u=a.n(s),i=a(10),l=a(73),d=a(74),m=a(84),p=a(83),f=a(224),v=a(228),h=a(225),b=a(226),g=a(13),y=a.n(g),E=a(32),x=a.n(E),C=a(33),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected stats"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"}," ",new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"}," ","Number of active cases of COVID19."," "))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered stats"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})," "),r.a.createElement(b.a,{color:"textSecondary"}," ",new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"}," ","Number of recovered cases from COVID19."," "))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths stats"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})," "),r.a.createElement(b.a,{color:"textSecondary"}," ",new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"}," ","Number of deaths from COVID19."," "))))):"Loading ..."},O=a(31),j=a(34),k=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(D),t&&(a="".concat(D,"/countries/").concat(t)),e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(35),B=a(80),V=a.n(B),U=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(O.a)(c,2),s=o[0],l=o[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);s.length&&(A.b,s.map((function(e){return e.date})),s.map((function(e){return e.confirmed})),s.map((function(e){return e.deaths})));var d=t.confirmed?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null,m=t.confirmed?r.a.createElement(A.c,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return r.a.createElement("div",{className:V.a.container},a?d:m)},M=a(229),P=a(227),R=a(81),J=a.n(R),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(M.a,{className:J.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),")"))},F=a(46),G=a.n(F),L=a(82),Q=a.n(L),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{className:G.a.image,src:Q.a,alt:"COVID 19"}),r.a.createElement(w,{data:this.state.data}),r.a.createElement(q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:this.state.data,country:this.state.country}))}}]),a}(n.Component);o.a.render(r.a.createElement(T,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__2bxln"}},81:function(e,t,a){e.exports={formControl:"Country_Picker_formControl__32gxU"}},82:function(e,t,a){e.exports=a.p+"static/media/covid191.d6ffb636.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.e6e77b1f.chunk.js.map