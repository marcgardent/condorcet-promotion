webpackJsonp([1,4],{"/fcW":function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="/fcW"},0:function(n,l,t){n.exports=t("x35b")},"1A80":function(n,l,t){"use strict";function e(n){return o._15(0,[(n()(),o._16(0,null,null,1,"app-simulation",[],null,null,null,r.a,r.b)),o._17(57344,null,0,_.a,[a.c],null,null),(n()(),o._18(null,["\n"]))],function(n,l){n(l,1,0)},null)}function u(n){return o._15(0,[(n()(),o._16(0,null,null,1,"app-root",[],null,null,null,e,p)),o._17(24576,null,0,s.a,[],null,null)],null,null)}var i=t("Ni5f"),o=t("3j3K"),r=t("dkn1"),_=t("dAku"),a=t("Qbdm"),s=t("YWx4");t.d(l,"a",function(){return f});var c=[i.a],p=o._14({encapsulation:0,styles:c,data:{}}),f=o._19("app-root",s.a,u,{},{},[])},Iksp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},Ni5f:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},"Nl/t":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".vote[_ngcontent-%COMP%]{display:inline-block;background:#f8f8ff;padding:3mm;margin:3mm;position:relative}.win[_ngcontent-%COMP%]{font-weight:700}.loose[_ngcontent-%COMP%]{font-style:italic}.delete[_ngcontent-%COMP%]{width:5mm;height:5mm;padding:1mm;line-height:3mm;position:absolute;right:3mm}"]},YWx4:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.title="app works!"}return n}()},dAku:function(n,l,t){"use strict";var e=t("wSp2"),u=t("3j3K"),i=t("Qbdm"),o=t("U3E4");t.n(o);t.d(l,"a",function(){return _});var r={name:"Election présidentielle 2017",candidates:[{name:"François Fillon"},{name:"Benoît Hamon"},{name:"Emmanuel Macron"},{name:"Marine Le Pen"},{name:"Jean Luc Melenchon"},{name:"Jacques Cheminade"},{name:"Jean Lassalle"},{name:"Nathalie Arthaud"},{name:"Philippe Poutou"},{name:"François Asselineau"},{name:"Nicolas Dupont Aignan"}]},_=function(){function n(n){this.document=n,this.indexSamples=1,this.loadFromLink()||(this.simulation=new e.a(e.b.defaultFactory(r)))}return n.prototype.ngOnInit=function(){},n.prototype.onAddVote=function(){this.simulation.addVote("Sample "+(this.simulation.votes.length+1))},n.prototype.onChangeSort=function(){this.simulation.update()},n.prototype.deleteVote=function(n){this.simulation.deleteVote(n)},Object.defineProperty(n.prototype,"permanentLink",{get:function(){return encodeURIComponent(JSON.stringify(this.simulation.request))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"compactLink",{get:function(){for(var n=this.simulation.request.election.name,l=[],t=0,e=this.simulation.request.election.candidates;t<e.length;t++){var u=e[t];l.push(u.name)}for(var i=[],o=0,r=this.simulation.request.votes;o<r.length;o++){for(var _=r[o],a=_.quantity+":"+_.name,s=0,c=_.candidates;s<c.length;s++){var u=c[s];a+=u.enabled?">":"-",a+=this.simulation.request.election.candidates.indexOf(u.candidate)}i.push(a)}return"/pl/"+encodeURIComponent(n)+"/"+encodeURIComponent(l.join("+"))+"/"+encodeURIComponent(i.join("+"))},enumerable:!0,configurable:!0}),n.prototype.loadFromLink=function(){var n=this.document.location.href.split("/");if(n.length>3&&"from-data"==n[n.length-2]){console.debug(decodeURIComponent(n[n.length-1]));var l=JSON.parse(decodeURIComponent(n[n.length-1]));console.debug(l);for(var t=(e.b.defaultFactory(l.election),new o.List(l.votes),0),u=l.votes;t<u.length;t++)for(var i=u[t],r=function(n){var t=l.election.candidates.find(function(l){return l.name==n.candidate.name});n.candidate=t},_=0,a=i.candidates;_<a.length;_++){var s=a[_];r(s)}return this.simulation=new e.a(l),!0}return!1},n.ctorParameters=function(){return[{type:void 0,decorators:[{type:u.E,args:[i.c]}]}]},n}()},dkn1:function(n,l,t){"use strict";function e(n){return m._15(0,[(n()(),m._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._18(null,[","]))],null,null)}function u(n){return m._15(0,[(n()(),m._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._18(null,["."]))],null,null)}function i(n){return m._15(0,[(n()(),m._16(0,null,null,7,"span",[],null,null,null,null,null)),(n()(),m._18(null,["\n        ",""])),(n()(),m._20(8388608,null,null,1,null,e)),m._17(8192,null,0,b.f,[m._0,m._1],{ngIf:[0,"ngIf"]},null),(n()(),m._18(null,[" "])),(n()(),m._20(8388608,null,null,1,null,u)),m._17(8192,null,0,b.f,[m._0,m._1],{ngIf:[0,"ngIf"]},null),(n()(),m._18(null,["\n    "]))],function(n,l){n(l,3,0,!l.context.last),n(l,6,0,l.context.last)},function(n,l){n(l,1,0,l.context.$implicit.name)})}function o(n){return m._15(0,[(n()(),m._16(0,null,null,9,"li",[["class","list-group-item"],["dnd-sortable",""]],null,[[null,"onDropSuccess"]],function(n,l,t){var e=!0,u=n.component;if("onDropSuccess"===l){e=!1!==u.onChangeSort()&&e}return e},null,null)),m._17(8192,null,0,y.b,[m.V,S.c,v.a,y.a,S.d,m._8],{index:[0,"index"]},{onDropSuccessCallback:"onDropSuccess"}),(n()(),m._18(null,["\n                "])),(n()(),m._16(0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var e=!0,u=n.component;if("change"===l){e=!1!==m._21(n,4).onChange(t.target.checked)&&e}if("blur"===l){e=!1!==m._21(n,4).onTouched()&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.enabled=t)&&e}if("ngModelChange"===l){e=!1!==u.onChangeSort()&&e}return e},null,null)),m._17(8192,null,0,O.d,[m.W,m.V],null,null),m._22(512,null,O.e,function(n){return[n]},[O.d]),m._17(335872,null,0,O.f,[[8,null],[8,null],[8,null],[2,O.e]],{model:[0,"model"]},{update:"ngModelChange"}),m._22(1024,null,O.g,null,[O.f]),m._17(8192,null,0,O.h,[O.g],null,null),(n()(),m._18(null,["\n                ","\n            "]))],function(n,l){n(l,1,0,l.context.index),n(l,6,0,l.context.$implicit.enabled)},function(n,l){n(l,3,0,m._21(l,8).ngClassUntouched,m._21(l,8).ngClassTouched,m._21(l,8).ngClassPristine,m._21(l,8).ngClassDirty,m._21(l,8).ngClassValid,m._21(l,8).ngClassInvalid,m._21(l,8).ngClassPending),n(l,9,0,l.context.$implicit.candidate.name)})}function r(n){return m._15(0,[(n()(),m._16(0,null,null,34,"div",[["class","vote"]],null,null,null,null,null)),(n()(),m._18(null,["\n     "])),(n()(),m._16(0,null,null,1,"button",[["class","delete"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.deleteVote(n.context.$implicit)&&e}return e},null,null)),(n()(),m._18(null,["x"])),(n()(),m._18(null,["\n    "])),(n()(),m._16(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),m._18(null,["Electeurs - "," "])),(n()(),m._18(null,["\n    "])),(n()(),m._16(0,null,null,8,"div",[],null,null,null,null,null)),(n()(),m._16(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),m._18(null,["nom : "])),(n()(),m._16(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;if("input"===l){e=!1!==m._21(n,12)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==m._21(n,12).onTouched()&&e}if("compositionstart"===l){e=!1!==m._21(n,12)._compositionStart()&&e}if("compositionend"===l){e=!1!==m._21(n,12)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.name=t)&&e}return e},null,null)),m._17(8192,null,0,O.i,[m.W,m.V,[2,O.j]],null,null),m._22(512,null,O.e,function(n){return[n]},[O.i]),m._17(335872,null,0,O.f,[[8,null],[8,null],[8,null],[2,O.e]],{model:[0,"model"]},{update:"ngModelChange"}),m._22(1024,null,O.g,null,[O.f]),m._17(8192,null,0,O.h,[O.g],null,null),(n()(),m._18(null,["\n    "])),(n()(),m._16(0,null,null,7,"div",[],null,null,null,null,null)),(n()(),m._18(null,["nombre : "])),(n()(),m._16(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;if("input"===l){e=!1!==m._21(n,21)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==m._21(n,21).onTouched()&&e}if("compositionstart"===l){e=!1!==m._21(n,21)._compositionStart()&&e}if("compositionend"===l){e=!1!==m._21(n,21)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.quantity=t)&&e}return e},null,null)),m._17(8192,null,0,O.i,[m.W,m.V,[2,O.j]],null,null),m._22(512,null,O.e,function(n){return[n]},[O.i]),m._17(335872,null,0,O.f,[[8,null],[8,null],[8,null],[2,O.e]],{model:[0,"model"]},{update:"ngModelChange"}),m._22(1024,null,O.g,null,[O.f]),m._17(8192,null,0,O.h,[O.g],null,null),(n()(),m._18(null,["\n    \n      "])),(n()(),m._16(0,null,null,6,"ul",[["class","list-group"],["dnd-sortable-container",""]],null,null,null,null,null)),m._17(8192,null,0,y.a,[m.V,S.c,v.a,m._8,S.d],{sortableData:[0,"sortableData"],dropzones:[1,"dropzones"]},null),m._23(1),(n()(),m._18(null,["\n            "])),(n()(),m._20(8388608,null,null,1,null,o)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n        "])),(n()(),m._18(null,["\n    "]))],function(n,l){n(l,14,0,l.context.$implicit.name),n(l,23,0,l.context.$implicit.quantity),n(l,28,0,l.context.$implicit.candidates,n(l,29,0,l.context.index)),n(l,32,0,l.context.$implicit.candidates)},function(n,l){n(l,6,0,l.context.$implicit.name),n(l,11,0,m._21(l,16).ngClassUntouched,m._21(l,16).ngClassTouched,m._21(l,16).ngClassPristine,m._21(l,16).ngClassDirty,m._21(l,16).ngClassValid,m._21(l,16).ngClassInvalid,m._21(l,16).ngClassPending),n(l,20,0,m._21(l,25).ngClassUntouched,m._21(l,25).ngClassTouched,m._21(l,25).ngClassPristine,m._21(l,25).ngClassDirty,m._21(l,25).ngClassValid,m._21(l,25).ngClassInvalid,m._21(l,25).ngClassPending)})}function _(n){return m._15(0,[(n()(),m._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._18(null,["("]))],null,null)}function a(n){return m._15(0,[(n()(),m._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._18(null,[", "]))],null,null)}function s(n){return m._15(0,[(n()(),m._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),m._18(null,[")"]))],null,null)}function c(n){return m._15(0,[(n()(),m._16(0,null,null,12,"span",[],null,null,null,null,null)),(n()(),m._18(null,["\n                "])),(n()(),m._20(8388608,null,null,1,null,_)),m._17(8192,null,0,b.f,[m._0,m._1],{ngIf:[0,"ngIf"]},null),(n()(),m._18(null,[" "])),(n()(),m._16(0,null,null,1,"u",[],null,null,null,null,null)),(n()(),m._18(null,["",""])),(n()(),m._18(null,[" "])),(n()(),m._20(8388608,null,null,1,null,a)),m._17(8192,null,0,b.f,[m._0,m._1],{ngIf:[0,"ngIf"]},null),(n()(),m._18(null,[" "])),(n()(),m._20(8388608,null,null,1,null,s)),m._17(8192,null,0,b.f,[m._0,m._1],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.context.first),n(l,9,0,!l.context.last),n(l,12,0,l.context.last)},function(n,l){n(l,6,0,l.context.$implicit.name)})}function p(n){return m._15(0,[(n()(),m._16(0,null,null,7,"li",[],null,null,null,null,null)),(n()(),m._18(null,[""," "])),(n()(),m._16(0,null,null,1,"b",[],null,null,null,null,null)),(n()(),m._18(null,["",""])),(n()(),m._18(null,["\n            "])),(n()(),m._20(8388608,null,null,1,null,c)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n        "]))],function(n,l){n(l,6,0,l.context.$implicit.winAgainst)},function(n,l){n(l,1,0,l.context.$implicit.score),n(l,3,0,l.context.$implicit.candidate.name)})}function f(n){return m._15(0,[(n()(),m._16(0,null,null,11,"li",[],null,null,null,null,null)),(n()(),m._18(null,["\n            "])),(n()(),m._16(0,null,null,3,"span",[],null,null,null,null,null)),m._17(139264,null,0,b.h,[m.t,m.u,m.V,m.W],{ngClass:[0,"ngClass"]},null),m._24(["win","loose"]),(n()(),m._18(null,[""," - ",""])),(n()(),m._18(null,[" / \n            "])),(n()(),m._16(0,null,null,3,"span",[],null,null,null,null,null)),m._17(139264,null,0,b.h,[m.t,m.u,m.V,m.W],{ngClass:[0,"ngClass"]},null),m._24(["win","loose"]),(n()(),m._18(null,[""," - ",""])),(n()(),m._18(null,["\n            \n        "]))],function(n,l){n(l,3,0,n(l,4,0,l.context.$implicit.ticWin,l.context.$implicit.tacWin)),n(l,8,0,n(l,9,0,l.context.$implicit.tacWin,l.context.$implicit.ticWin))},function(n,l){n(l,5,0,l.context.$implicit.tic.name,l.context.$implicit.ticScore),n(l,10,0,l.context.$implicit.tacScore,l.context.$implicit.tac.name)})}function h(n){return m._15(0,[(n()(),m._16(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),m._18(null,["Simulation d'une élection avec la methode de Condorcet"])),(n()(),m._18(null,["\n\n"])),(n()(),m._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),m._18(null,['Les candidats de la simulation "','"'])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),m._18(null,["Lien permanent"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),m._18(null,["\n    "])),(n()(),m._20(8388608,null,null,1,null,i)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),m._18(null,["Simuler des votes"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.onAddVote()&&e}return e},null,null)),(n()(),m._18(null,["Ajouter groupe de vote"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),m._18(null,["\n    "])),(n()(),m._20(8388608,null,null,1,null,r)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),m._18(null,["Le Classement"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,20,"div",[],null,null,null,null,null)),(n()(),m._18(null,["\n    "])),(n()(),m._16(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),m._18(null,["\n        "])),(n()(),m._20(8388608,null,null,1,null,p)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n    "])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,12,"div",[],null,null,null,null,null)),(n()(),m._18(null,["\n\n"])),(n()(),m._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),m._18(null,["Détails des duels"])),(n()(),m._18(null,["\n"])),(n()(),m._16(0,null,null,7,"div",[],null,null,null,null,null)),(n()(),m._18(null,["\n    "])),(n()(),m._16(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),m._18(null,["\n        "])),(n()(),m._20(8388608,null,null,1,null,f)),m._17(401408,null,0,b.g,[m._0,m._1,m.t],{ngForOf:[0,"ngForOf"]},null),(n()(),m._18(null,["\n    "])),(n()(),m._18(null,["\n"]))],function(n,l){var t=l.component;n(l,12,0,t.simulation.elections.candidates),n(l,24,0,t.simulation.votes),n(l,35,0,t.simulation.results),n(l,48,0,t.simulation.duels)},function(n,l){var t=l.component;n(l,4,0,t.simulation.elections.name),n(l,6,0,m._25(1,"/from-data/",t.permanentLink,""))})}function d(n){return m._15(0,[(n()(),m._16(0,null,null,1,"app-simulation",[],null,null,null,h,I)),m._17(57344,null,0,D.a,[C.c],null,null)],function(n,l){n(l,1,0)},null)}var g=t("Nl/t"),m=t("3j3K"),b=t("2Je8"),y=t("hegN"),S=t("loX+"),v=t("n+yP"),O=t("NVOs"),D=t("dAku"),C=t("Qbdm");t.d(l,"b",function(){return I}),l.a=h;var P=[g.a],I=m._14({encapsulation:0,styles:P,data:{}});m._19("app-simulation",D.a,d,{},{},[])},kZql:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0}},kke6:function(n,l,t){"use strict";var e=t("3j3K"),u=t("Iksp"),i=t("2Je8"),o=t("Qbdm"),r=t("NVOs"),_=t("Fzro"),a=t("D59C"),s=t("n+yP"),c=t("1A80"),p=t("loX+");t.d(l,"a",function(){return d});var f=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),h=function(n){function l(l){return n.call(this,l,[c.a],[c.a])||this}return f(l,n),Object.defineProperty(l.prototype,"_LOCALE_ID_13",{get:function(){return null==this.__LOCALE_ID_13&&(this.__LOCALE_ID_13=e.b(this.parent.get(e.c,null))),this.__LOCALE_ID_13},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NgLocalization_14",{get:function(){return null==this.__NgLocalization_14&&(this.__NgLocalization_14=new i.a(this._LOCALE_ID_13)),this.__NgLocalization_14},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Compiler_15",{get:function(){return null==this.__Compiler_15&&(this.__Compiler_15=new e.d),this.__Compiler_15},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_APP_ID_16",{get:function(){return null==this.__APP_ID_16&&(this.__APP_ID_16=e.e()),this.__APP_ID_16},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_IterableDiffers_17",{get:function(){return null==this.__IterableDiffers_17&&(this.__IterableDiffers_17=e.f()),this.__IterableDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_KeyValueDiffers_18",{get:function(){return null==this.__KeyValueDiffers_18&&(this.__KeyValueDiffers_18=e.g()),this.__KeyValueDiffers_18},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DomSanitizer_19",{get:function(){return null==this.__DomSanitizer_19&&(this.__DomSanitizer_19=new o.b(this.parent.get(o.c))),this.__DomSanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Sanitizer_20",{get:function(){return null==this.__Sanitizer_20&&(this.__Sanitizer_20=this._DomSanitizer_19),this.__Sanitizer_20},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_HAMMER_GESTURE_CONFIG_21",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_21&&(this.__HAMMER_GESTURE_CONFIG_21=new o.d),this.__HAMMER_GESTURE_CONFIG_21},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EVENT_MANAGER_PLUGINS_22",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_22&&(this.__EVENT_MANAGER_PLUGINS_22=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_21)]),this.__EVENT_MANAGER_PLUGINS_22},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EventManager_23",{get:function(){return null==this.__EventManager_23&&(this.__EventManager_23=new o.h(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(e.h))),this.__EventManager_23},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomSharedStylesHost_24",{get:function(){return null==this.__ɵDomSharedStylesHost_24&&(this.__ɵDomSharedStylesHost_24=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_24},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomRendererFactory2_25",{get:function(){return null==this.__ɵDomRendererFactory2_25&&(this.__ɵDomRendererFactory2_25=new o.j(this._EventManager_23,this._ɵDomSharedStylesHost_24)),this.__ɵDomRendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RendererFactory2_26",{get:function(){return null==this.__RendererFactory2_26&&(this.__RendererFactory2_26=this._ɵDomRendererFactory2_25),this.__RendererFactory2_26},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵSharedStylesHost_27",{get:function(){return null==this.__ɵSharedStylesHost_27&&(this.__ɵSharedStylesHost_27=this._ɵDomSharedStylesHost_24),this.__ɵSharedStylesHost_27},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Testability_28",{get:function(){return null==this.__Testability_28&&(this.__Testability_28=new e.i(this.parent.get(e.h))),this.__Testability_28},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Meta_29",{get:function(){return null==this.__Meta_29&&(this.__Meta_29=new o.k(this.parent.get(o.c))),this.__Meta_29},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Title_30",{get:function(){return null==this.__Title_30&&(this.__Title_30=new o.l(this.parent.get(o.c))),this.__Title_30},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_31",{get:function(){return null==this.__ɵi_31&&(this.__ɵi_31=new r.a),this.__ɵi_31},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_BrowserXhr_32",{get:function(){return null==this.__BrowserXhr_32&&(this.__BrowserXhr_32=new _.a),this.__BrowserXhr_32},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ResponseOptions_33",{get:function(){return null==this.__ResponseOptions_33&&(this.__ResponseOptions_33=new _.b),this.__ResponseOptions_33},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XSRFStrategy_34",{get:function(){return null==this.__XSRFStrategy_34&&(this.__XSRFStrategy_34=_.c()),this.__XSRFStrategy_34},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XHRBackend_35",{get:function(){return null==this.__XHRBackend_35&&(this.__XHRBackend_35=new _.d(this._BrowserXhr_32,this._ResponseOptions_33,this._XSRFStrategy_34)),this.__XHRBackend_35},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RequestOptions_36",{get:function(){return null==this.__RequestOptions_36&&(this.__RequestOptions_36=new _.e),this.__RequestOptions_36},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Http_37",{get:function(){return null==this.__Http_37&&(this.__Http_37=_.f(this._XHRBackend_35,this._RequestOptions_36)),this.__Http_37},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropConfig_38",{get:function(){return null==this.__DragDropConfig_38&&(this.__DragDropConfig_38=new s.a),this.__DragDropConfig_38},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropService_39",{get:function(){return null==this.__DragDropService_39&&(this.__DragDropService_39=p.a()),this.__DragDropService_39},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropSortableService_40",{get:function(){return null==this.__DragDropSortableService_40&&(this.__DragDropSortableService_40=p.b(this._DragDropConfig_38)),this.__DragDropSortableService_40},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[e.j,o.n(this.parent.get(o.o,null),this.parent.get(e.k,null))],this._ApplicationInitStatus_3=new e.l(this._APP_INITIALIZER_2),this._ɵf_4=new e.m(this.parent.get(e.h),this.parent.get(e.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new e.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new r.b,this._FormsModule_9=new r.c,this._HttpModule_10=new _.g,this._DndModule_11=new a.a,this._AppModule_12=new u.a,this._AppModule_12},l.prototype.getInternal=function(n,l){return n===i.b?this._CommonModule_0:n===e.p?this._ErrorHandler_1:n===e.q?this._APP_INITIALIZER_2:n===e.l?this._ApplicationInitStatus_3:n===e.m?this._ɵf_4:n===e.r?this._ApplicationRef_5:n===e.o?this._ApplicationModule_6:n===o.p?this._BrowserModule_7:n===r.b?this._ɵba_8:n===r.c?this._FormsModule_9:n===_.g?this._HttpModule_10:n===a.a?this._DndModule_11:n===u.a?this._AppModule_12:n===e.c?this._LOCALE_ID_13:n===i.c?this._NgLocalization_14:n===e.d?this._Compiler_15:n===e.s?this._APP_ID_16:n===e.t?this._IterableDiffers_17:n===e.u?this._KeyValueDiffers_18:n===o.q?this._DomSanitizer_19:n===e.v?this._Sanitizer_20:n===o.r?this._HAMMER_GESTURE_CONFIG_21:n===o.s?this._EVENT_MANAGER_PLUGINS_22:n===o.h?this._EventManager_23:n===o.i?this._ɵDomSharedStylesHost_24:n===o.j?this._ɵDomRendererFactory2_25:n===e.w?this._RendererFactory2_26:n===o.t?this._ɵSharedStylesHost_27:n===e.i?this._Testability_28:n===o.k?this._Meta_29:n===o.l?this._Title_30:n===r.a?this._ɵi_31:n===_.a?this._BrowserXhr_32:n===_.h?this._ResponseOptions_33:n===_.i?this._XSRFStrategy_34:n===_.d?this._XHRBackend_35:n===_.j?this._RequestOptions_36:n===_.k?this._Http_37:n===s.a?this._DragDropConfig_38:n===p.c?this._DragDropService_39:n===p.d?this._DragDropSortableService_40:l},l.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_24&&this._ɵDomSharedStylesHost_24.ngOnDestroy()},l}(e.x),d=new e.y(h,u.a)},wSp2:function(n,l,t){"use strict";var e=t("U3E4");t.n(e);t.d(l,"b",function(){return i}),t.d(l,"a",function(){return r});var u=(function(){function n(){}}(),function(){function n(){}}(),function(){function n(){}}(),function(){function n(){}}(),function(){function n(n,l){this.tic=n,this.tac=l,this.ticScore=0,this.tacScore=0}return Object.defineProperty(n.prototype,"distance",{get:function(){return Math.abs(this.ticScore-this.tacScore)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ticWin",{get:function(){return this.ticScore>this.tacScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"tacWin",{get:function(){return this.tacScore>this.ticScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"winnerIfExist",{get:function(){return this.ticWin?this.tic:this.tacWin?this.tac:null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"looserIfExist",{get:function(){return this.ticWin?this.tac:this.tacWin?this.tic:null},enumerable:!0,configurable:!0}),n.prototype.resetScores=function(){this.ticScore=0,this.tacScore=0},n.fromCandidates=function(l){for(var t=new Array,e=0;e<l.length-1;e++)for(var u=e+1;u<l.length;u++)t.push(new n(l[e],l[u]));return t},n}()),i=function(){function n(n,l){this.election=n,this.votes=l}return n.defaultFactory=function(l){return new n(l,[])},n}(),o=function(){function n(n){this.candidate=n,this.winAgainst=[]}return n.prototype.reset=function(){this.winAgainst.length=0},Object.defineProperty(n.prototype,"score",{get:function(){return this.winAgainst.length},enumerable:!0,configurable:!0}),n}(),r=function(){function n(n){this.request=n,this.duels=u.fromCandidates(this.elections.candidates),this.results=new e.List(this.elections.candidates).Select(function(n){return new o(n)}).ToArray(),this.update()}return Object.defineProperty(n.prototype,"votes",{get:function(){return this.request.votes},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"elections",{get:function(){return this.request.election},enumerable:!0,configurable:!0}),n.prototype.update=function(){this.updateDuels(),this.updateResults()},n.prototype.updateDuels=function(){for(var n=function(n){n.resetScores();for(var t=0,e=l.votes;t<e.length;t++){var u=e[t],i=u.candidates,o=i.find(function(l){return l.candidate==n.tic}),r=i.indexOf(o),_=i.find(function(l){return l.candidate==n.tac}),a=i.indexOf(_);o.enabled&&_.enabled&&r<a||o.enabled&&!_.enabled?n.ticScore+=u.quantity:(_.enabled&&o.enabled&&a<r||_.enabled&&!o.enabled)&&(n.tacScore+=u.quantity)}},l=this,t=0,e=this.duels;t<e.length;t++){n(e[t])}this.duels.sort(function(n,l){return n.distance-l.distance})},n.prototype.updateResults=function(){for(var n=new e.List(this.duels),l=function(l){l.reset();var t=n.Where(function(n){return n.winnerIfExist==l.candidate}).Select(function(n){return n.looserIfExist}).ToArray();(e=l.winAgainst).push.apply(e,t);var e},t=0,u=this.results;t<u.length;t++){l(u[t])}this.results.sort(function(n){return n.winAgainst.length})},n.prototype.deleteVote=function(n){var l=this.votes.indexOf(n);this.votes.splice(l,1),this.update()},n.prototype.addVote=function(n){for(var l={candidates:[],name:n,quantity:10},t=0,e=this.elections.candidates;t<e.length;t++){var u=e[t],i={candidate:u,enabled:!0};l.candidates.push(i)}this.votes.push(l),this.update()},n}()},x35b:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),u=t("kZql"),i=t("Qbdm"),o=t("kke6");u.a.production&&t.i(e.a)(),t.i(i.a)().bootstrapModuleFactory(o.a)}},[0]);