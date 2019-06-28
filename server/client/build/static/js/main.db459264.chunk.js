(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(61)},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),i=a.n(l),s=(a(42),a(43),a(70)),o=a(3),c=a(5),m=a(4),u=a(6),p=a(7),h=a(36),d=(a(44),a(72)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={apiResponse:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"callAPI",value:function(){var e=this;fetch("/api/test").then(function(e){return e.text()}).then(function(t){return e.setState({apiResponse:t})})}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.state.apiResponse),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg text-center"},r.a.createElement("h1",null,"Plant dat!"),r.a.createElement("p",null,"Avert flooding by spawning a native plant in the Lucky Hotel!"),r.a.createElement(d.a,{to:"/plants"},r.a.createElement("button",{type:"submit",className:"btn spawnhome"},"Plant!"))))),r.a.createElement("div",{className:"imgtile"}))}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"hi")}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Resources")}}]),t}(r.a.Component),g=a(35),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card top-buffer"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,this.props.plant.name),r.a.createElement("h5",{className:"latin"},this.props.plant.latin_name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("a",{href:"/api/dig/"+this.props.plant.short_name},r.a.createElement("button",{className:"btn spawn"},"Plant me!")))),r.a.createElement("div",{className:"row top-buffer"},r.a.createElement("div",{className:"col-lg-6 mb-3"},r.a.createElement("div",{className:"slideIcon"},r.a.createElement("img",{src:"../images/icons/"+this.props.plant.img_path}))),r.a.createElement("div",{className:"col-lg-6 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"mb-0"},"Bio")),r.a.createElement("div",{className:"card-body"},this.props.plant.bio)))))))}}]),t}(r.a.Component),y=[{id:0,name:"American Beautyberry",short_name:"beauty",latin_name:"Callicarpa americana",bio:"Beautyberry, or French Mulberry, is very common in southeast Louisiana and important for our songbirds. The fruit is edible to humans and often gets spread by other mammals like deer, foxes, and squirrels. Used medicinally by indigenous communities and as a mosquito repellent. Research has revealed two compounds capable of deterring biting insects. A valuable shrub with many benefits that is happy in part shade or beneath larger trees.",img_path:"beauty.png"},{id:1,name:"Clasping Coneflower",short_name:"clasping",latin_name:"Rudbeckia amplexicaulis",bio:"Here is an adaptable native sunflower that can take the heat and grow in front yards that don\u2019t want to be lawns anymore. A great attractor of birds and pollinators, this tall annual is drought tolerant but likes it when it rains. An excellent choice for those spaces that receive a lot of sun as well as water, and would like more attention from the wildlife. Medicinally important to indigenous peoples and a source of natural dyes.",img_path:"clasping.png"},{id:2,name:"Lizard's Tail",short_name:"lizard",latin_name:"Saururus cernuus",bio:"Lizard\u2019s Tail loves water. Wants to stand in it all the time even, and especially in squishy clay soils. A puffy white tail covered in tiny flowers emerges through the heart shaped leaves when ready to pollinate. A good choice for boggy shade areas with occasional or constantly standing water. This aquatic species assists with rainwater by creating infiltration spaces in dense soils with their root system. Less pumping, more planting!",img_path:"lizard.png"},{id:3,name:"Corelli\u2019s Obedient Plant",short_name:"obedient",latin_name:"Physostegia correlli",bio:"Also known as False Dragonhead, a tall perennial and now difficult to find in the wild. A member of the mint family and good spreader by rhizome when given plenty of water and full sun. Let\u2019s increase the urban population of this wonderful lavender flower by letting it go to work in our rain gardens and green infrastructure. Spread the good deed seeds!",img_path:"obedient.png"},{id:4,name:"Stokes Aster",short_name:"stokes",latin_name:"Stokesia laevis",bio:"This summer bloomer needs very little maintenance and sows itself easily. It enjoys the sun but is versatile and happy with a little shade. A great nectar source for pollinators and easily divides by root cuttings. This aster is happy to accept extra rainwater in sandy soils, and to grow densely in areas when left for several years.",img_path:"stokes.png"}],w=a(33),O=a.n(w),j=a(22),N=a(63),k=(a(50),function(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),a=t[0],l=t[1],i={modules:[j.Pagination,j.Navigation],pagination:{el:".this.swiper-pagination",type:"bullets",clickable:!0},spaceBetween:30,getSwiper:l},s=y.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(E,{plant:e}))});return r.a.createElement("div",null,r.a.createElement(N.a,{className:"btn-sm",onClick:function(){null!==a&&a.slidePrev()}},"<"),r.a.createElement(N.a,{className:"btn-sm",onClick:function(){null!==a&&a.slideNext()}},">"),r.a.createElement(O.a,i,s))}),C=(n.Component,a(21)),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(C.a)({},r,n))},a.onSubmit=function(e){e.preventDefault(),fetch("/api/authenticate",{method:"POST",body:JSON.stringify(a.state),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status)throw new Error(e.error);a.props.history.push("/")}).catch(function(e){console.error(e),alert("Error logging in please try again")})},a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login Below!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(C.a)({},r,n))},a.onSubmit=function(e){e.preventDefault(),fetch("/api/register",{method:"POST",body:JSON.stringify(a.state),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status)throw new Error(e.error);a.props.history.push("/")}).catch(function(e){console.error(e),alert("Error logging in please try again")})},a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Register!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component);a(71);var x=a(15),A=a(64),P=a(65),I=a(66),T=a(69),R=a(67),q=a(68),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).active={fontWeight:"bold"},a.toggleNavbar=a.toggleNavbar.bind(Object(x.a)(a)),a.state={collapsed:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{className:"plantColor",dark:!0},r.a.createElement(P.a,{href:"/",className:"mr-auto"},"Plant Dat"),r.a.createElement(I.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(T.a,{isOpen:!this.state.collapsed,navbar:!0},r.a.createElement(R.a,{navbar:!0},r.a.createElement(q.a,null,r.a.createElement(d.a,{exact:!0,to:"/",className:"nav-link",activeStyle:this.active},"Home")),r.a.createElement(q.a,null,r.a.createElement(d.a,{to:"/about",className:"nav-link",activeStyle:this.active},"About")),r.a.createElement(q.a,null,r.a.createElement(d.a,{className:"nav-link",to:"/resources",activeStyle:this.active},"Resources")))),r.a.createElement(R.a,{navbar:!0},r.a.createElement(q.a,null,r.a.createElement(d.a,{exact:!0,to:"/login",className:"nav-link",activeStyle:this.active},"Login"))),r.a.createElement(R.a,{navbar:!0},r.a.createElement(q.a,null,r.a.createElement(d.a,{exact:!0,to:"/register",className:"nav-link",activeStyle:this.active},"Register")))))}}]),t}(r.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null))}}]),t}(r.a.Component),z=a(25),D=a(27),W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer font-small plantColor pt-4"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3 text-center text-md-left"},r.a.createElement("h5",null,"Mission"),r.a.createElement("hr",null),r.a.createElement("p",null,"Plant Dat seeks to promote indigenous plants, pavement removal, and green infrastructure for sustainable water management in New Orleans.")),r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3 text-center"},r.a.createElement("a",{href:"https://www.instagram.com/plant_dat/"},r.a.createElement(z.a,{icon:D.b,className:"fa-4x"})),r.a.createElement("a",{href:"https://www.facebook.com/plant_dat/"},r.a.createElement(z.a,{icon:D.a,className:"fa-4x"}))))))}}]),t}(r.a.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("div",{className:"container main-content"},r.a.createElement("div",{id:"content-wrap"},r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/about",component:f}),r.a.createElement(h.a,{path:"/resources",component:v}),r.a.createElement(h.a,{path:"/plants",component:k}),r.a.createElement(h.a,{path:"/login",component:S}),r.a.createElement(h.a,{path:"/register",component:_}))),r.a.createElement(W,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.db459264.chunk.js.map