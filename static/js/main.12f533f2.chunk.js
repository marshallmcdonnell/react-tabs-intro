(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e){e.exports={title:"Person",type:"object",properties:{firstName:{type:"string"},lastName:{type:"string"},age:{description:"Age in years",type:"integer",minimum:0},shippingAddress:{type:"string"}},required:["firstName","lastName"]}},175:function(e){e.exports={title:"Order",type:"object",properties:{addressId:{type:"string",label:"Address Type",enum:["Home Address 1","Home Address 2","Workplace"]},street:{type:"string"},city:{type:"string"},zipCode:{type:"string"}}}},255:function(e){e.exports={type:"Group",label:"Person",elements:[{type:"HorizontalLayout",elements:[{type:"Control",scope:"#/properties/firstName"},{type:"Control",scope:"#/properties/lastName"}]},{type:"HorizontalLayout",elements:[{type:"Control",scope:"#/properties/age"},{type:"Control",scope:"#/properties/shippingAddress"}]}]}},455:function(e){e.exports={type:"Group",label:"Address",elements:[{type:"HorizontalLayout",elements:[{type:"Control",scope:"#/properties/addressId"},{type:"Control",scope:"#/properties/street"}]},{type:"HorizontalLayout",elements:[{type:"Control",scope:"#/properties/city"},{type:"Control",scope:"#/properties/zipCode"}]}]}},468:function(e,t,a){e.exports=a(977)},632:function(e,t){},640:function(e,t){},642:function(e,t){},977:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),s=a.n(i),c=a(98),o=a(99),l=a(101),d=a(100),u=a(102),p=a(979),m=a(36),h=a(980),b=a(981),v=a(15),y=a(982),f=a(19),T=a(14),g=a(983);a(334);function j(e){return r.a.createElement(h.a.Item,{key:e.name,active:e.isActive,onClick:e.changeTab,as:"a"},e.title,"  ",r.a.createElement(g.a,{name:"remove circle",onClick:e.removeTab}))}function O(e){var t=e.display,a=e.activeItem;return r.a.createElement("div",null,r.a.createElement(h.a,{pointing:!0,secondary:!0},r.a.createElement(h.a.Item,{name:"Input",active:"Input"===a,onClick:function(){return e.changeChildTab("Input")}}),r.a.createElement(h.a.Item,{name:"JSON-LD",active:"JSON-LD"===a,onClick:function(){return e.changeChildTab("JSON-LD")}})),r.a.createElement(b.a,null,t))}var D=a(129),C=a(175),E=a(255),k=a(455),I={name:"dataset1",title:"Dataset 1",schema:D,uischema:E,path:"person"},S={name:"dataset3",title:"Dataset 3",schema:D,uischema:E,path:"person"},A=[I,{name:"dataset2",title:"Dataset 2",schema:C,uischema:k,path:"address"}],F=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(l.a)(this,Object(d.a)(t).call(this,e));var n=I.name,i=I.schema,s=I.uischema,o=I.path;return a.state={activeItem:n,childActiveItem:"Input",childDisplay:a.renderJsonForm(i,s,o)},a.defaultDisplay=r.a.createElement("h1",null," "),a.changeTab=a.changeTab.bind(Object(m.a)(a)),a.changeChildTab=a.changeChildTab.bind(Object(m.a)(a)),a.removeTab=a.removeTab.bind(Object(m.a)(a)),a.renderTabFromDataset=a.renderTabFromDataset.bind(Object(m.a)(a)),a.renderTabs=a.renderTabs.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeTab",value:function(e){this.setState({activeItem:e})}},{key:"changeChildTab",value:function(e){this.setState({childActiveItem:e})}},{key:"removeTab",value:function(e){var t=this.props.datasets.filter(function(t){return t.name!==e});this.props.handleUpdateDatasets(t)}},{key:"renderTabFromDataset",value:function(e){var t=this,a=this.state.activeItem===e.name;return r.a.createElement(j,{key:e.name,name:e.name,title:e.title,isActive:a,changeTab:function(){return t.changeTab(e.name)},removeTab:function(){return t.removeTab(e.name)}})}},{key:"renderJsonForm",value:function(e,t,a){return r.a.createElement(f.JsonForms,{schema:e,uischema:t,path:a})}},{key:"renderActiveTabPanel",value:function(){var e=this.state.activeItem,t=this.props.datasets.filter(function(t){return e===t.name})[0],a=this.state.childActiveItem;if(void 0===t)return this.defaultDisplay;var n,i=this.props.data[t.path];return n="Input"===a?this.renderJsonForm(t.schema,t.uischema,t.path):JSON.stringify(i,null,2),r.a.createElement(O,{activeItem:a,display:n,changeChildTab:this.changeChildTab})}},{key:"renderTabs",value:function(){var e=this;return this.props.datasets.map(function(t){return e.renderTabFromDataset(t)})}},{key:"render",value:function(){var e=this.renderActiveTabPanel(),t=this.renderTabs();return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(y.a.Column,{width:4},r.a.createElement(h.a,{fluid:!0,vertical:!0,tabular:!0},t)),r.a.createElement(y.a.Column,{stretched:!0,width:12},e)))}}]),t}(n.Component),J=Object(v.connect)(function(e){return{data:Object(T.getData)(e)}})(F),N=r.a.createElement("button",null,"Add Dataset 3"),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={activeItem:"File Upload",display:N,datasets:A},a.changeTab=a.changeTab.bind(Object(m.a)(a)),a.updateDatasets=a.updateDatasets.bind(Object(m.a)(a)),a.addDataset=a.addDataset.bind(Object(m.a)(a)),a.setState=a.setState.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderSciDataTab",value:function(e){return r.a.createElement(J,{datasets:e,handleUpdateDatasets:this.updateDatasets})}},{key:"renderFileUpload",value:function(){return r.a.createElement("button",{onClick:this.addDataset}," Add Dataset 3")}},{key:"changeTab",value:function(e){var t;"File Upload"===e?t=this.renderFileUpload():"SciData"===e&&(t=this.renderSciDataTab(this.state.datasets)),this.setState({activeItem:e,display:t})}},{key:"updateDatasets",value:function(e){var t=this.renderSciDataTab(e);this.setState({datasets:e,display:t})}},{key:"addDataset",value:function(){var e=this.state.datasets;e.push(S),this.setState({datasets:e})}},{key:"render",value:function(){var e=this,t=this.state.activeItem,a=this.state.display;return r.a.createElement("div",null,r.a.createElement(h.a,{tabular:!0},r.a.createElement(h.a.Item,{name:"File Upload",active:"File Upload"===t,onClick:function(){return e.changeTab("File Upload")}}),r.a.createElement(h.a.Item,{name:"SciData",active:"SciData"===t,onClick:function(){return e.changeTab("SciData")}})),r.a.createElement(b.a,null,a))}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{style:{margin:20}},r.a.createElement(U,null))}}]),t}(r.a.Component),L=a(71),z=a(456),H={type:"object",properties:{person:D,address:C}},x=Object(L.createStore)(Object(L.combineReducers)({jsonforms:Object(T.jsonformsReducer)()}),{jsonforms:{renderers:z.materialRenderers}});x.dispatch(T.Actions.init({},H)),s.a.render(r.a.createElement(v.Provider,{store:x},r.a.createElement(w,null)),document.getElementById("root"))}},[[468,1,2]]]);
//# sourceMappingURL=main.12f533f2.chunk.js.map