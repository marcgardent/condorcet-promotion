webpackJsonp([1,4],{"/fcW":function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="/fcW"},0:function(n,l,t){n.exports=t("x35b")},"1A80":function(n,l,t){"use strict";function e(n){return o._15(0,[(n()(),o._16(0,null,null,1,"app-simulation",[],null,null,null,r.a,r.b)),o._17(57344,null,0,a.a,[s.c],null,null),(n()(),o._18(null,["\n"]))],function(n,l){n(l,1,0)},null)}function u(n){return o._15(0,[(n()(),o._16(0,null,null,1,"app-root",[],null,null,null,e,d)),o._17(24576,null,0,_.a,[],null,null)],null,null)}var i=t("Ni5f"),o=t("3j3K"),r=t("dkn1"),a=t("dAku"),s=t("Qbdm"),_=t("YWx4");t.d(l,"a",function(){return p});var c=[i.a],d=o._14({encapsulation:0,styles:c,data:{}}),p=o._19("app-root",_.a,u,{},{},[])},Iksp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},M2j9:function(n,l,t){"use strict";var e=t("3j3K");t.d(l,"a",function(){return u});var u=function(){function n(n){this.element=n}return n.prototype.resize=function(){var n=this.element.nativeElement;n.size=n.value.length?n.value.length:1},n.prototype.ngAfterViewChecked=function(){this.resize()},n.ctorParameters=function(){return[{type:e.V}]},n}()},Ni5f:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},"Nl/t":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".vote[_ngcontent-%COMP%]{padding:3mm;margin:3mm}.candidate[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;background:#f8f8ff;position:relative;border:.1em solid gray;border-radius:.1em}.candidate[_ngcontent-%COMP%]{padding:.3em;margin:.2em}ul.candidatevote[_ngcontent-%COMP%]{padding:3mm;margin:0;list-style-type:none}.candidatevote[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#fff;padding:1mm;margin:1mm;margin-bottom:0;color:#000;padding-left:.4em;border:.1em solid #000;border-left:1em solid #000}.win[_ngcontent-%COMP%]{font-weight:700}.loose[_ngcontent-%COMP%]{font-style:italic}.delete[_ngcontent-%COMP%]{width:5mm;height:5mm;padding:1mm;line-height:3mm;position:absolute;right:3mm}.rank[_ngcontent-%COMP%]{margin:.2em;background:#f8f8ff;border:.1em dashed gray}div.part[_ngcontent-%COMP%]{padding:1em}div.part.intro[_ngcontent-%COMP%]{background:#d5ffa3}div.part.votes[_ngcontent-%COMP%]{background:#a3ffd8}div.part.result[_ngcontent-%COMP%]{background:#a3c6ff;padding-bottom:5em}div.foot[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:.01em dashed #000;color:0;opacity:.9;padding:0;padding-left:1em;font-size:.5em}"]},YWx4:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.title="app works!"}return n}()},dAku:function(n,l,t){"use strict";var e=t("kZql"),u=t("wSp2"),i=t("3j3K"),o=t("Qbdm");t.d(l,"a",function(){return s});var r={name:"Mon election",candidates:[]},a="#json-raw-",s=function(){function n(n){this.document=n,this.loadFromLink()||(this.simulation=new u.a(u.b.defaultFactory(r)))}return n.prototype.ngOnInit=function(){},n.prototype.onAddVote=function(){this.simulation.addVote("Electeurs "+(this.simulation.votes.length+1))},n.prototype.onAddCandidate=function(){this.simulation.addCandidate("Choix "+(this.simulation.elections.candidates.length+1))},n.prototype.onChangeSort=function(){this.simulation.update()},n.prototype.deleteCandidate=function(n){this.simulation.deleteCandidate(n)},n.prototype.deleteVote=function(n){this.simulation.deleteVote(n)},Object.defineProperty(n.prototype,"permanentLink",{get:function(){return e.a.virtualPath+a+encodeURIComponent(JSON.stringify(this.simulation.request))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"compactLink",{get:function(){for(var n=this.simulation.request.election.name,l=[],t=0,e=this.simulation.request.election.candidates;t<e.length;t++){var u=e[t];l.push(u.name)}for(var i=[],o=0,r=this.simulation.request.votes;o<r.length;o++){for(var a=r[o],s=a.quantity+":"+a.name,_=0,c=a.ranking;_<c.length;_++){var d=c[_];s+=">";for(var p=0,f=d.candidates;p<f.length;p++)var u=f[p]}i.push(s)}return"/pl/"+encodeURIComponent(n)+"/"+encodeURIComponent(l.join("+"))+"/"+encodeURIComponent(i.join("+"))},enumerable:!0,configurable:!0}),n.prototype.loadFromLink=function(){var n=this.document.location.href.split(a);if(2==n.length){console.debug("decoding",decodeURIComponent(n[n.length-1]));var l=JSON.parse(decodeURIComponent(n[n.length-1]));console.debug("loading",l);for(var t=(u.b.defaultFactory(l.election),[]),e=0,i=l.votes;e<i.length;e++){for(var o=i[e],r=new u.c(o.name,0,[]),s=0,_=o.ranking;s<_.length;s++){for(var c=_[s],d=[],p=function(n){var t=l.election.candidates.find(function(l){return l.name==n.name});d.push(t)},f=0,h=c.candidates;f<h.length;f++){p(h[f])}c.candidates=d}r.ranking=o.ranking,r.quantity=o.quantity,t.push(r)}return l.votes=t,this.simulation=new u.a(l),console.debug("loaded",this.simulation),!0}return!1},n.ctorParameters=function(){return[{type:void 0,decorators:[{type:i.E,args:[o.c]}]}]},n}()},dkn1:function(n,l,t){"use strict";function e(n){return b._15(0,[(n()(),b._16(0,null,null,12,"div",[["class","candidate"]],null,null,null,null,null)),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,6,"input",[["appElastischInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;if("input"===l){e=!1!==b._20(n,3)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==b._20(n,3).onTouched()&&e}if("compositionstart"===l){e=!1!==b._20(n,3)._compositionStart()&&e}if("compositionend"===l){e=!1!==b._20(n,3)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.name=t)&&e}return e},null,null)),b._17(8192,null,0,y.d,[b.W,b.V,[2,y.e]],null,null),b._21(512,null,y.f,function(n){return[n]},[y.d]),b._17(335872,null,0,y.g,[[8,null],[8,null],[8,null],[2,y.f]],{model:[0,"model"]},{update:"ngModelChange"}),b._21(1024,null,y.h,null,[y.g]),b._17(8192,null,0,y.i,[y.h],null,null),b._17(4202496,null,0,v.a,[b.V],null,null),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.deleteCandidate(n.context.$implicit)&&e}return e},null,null)),(n()(),b._18(null,["x"])),(n()(),b._18(null,["\n        "]))],function(n,l){n(l,5,0,l.context.$implicit.name)},function(n,l){n(l,2,0,b._20(l,7).ngClassUntouched,b._20(l,7).ngClassTouched,b._20(l,7).ngClassPristine,b._20(l,7).ngClassDirty,b._20(l,7).ngClassValid,b._20(l,7).ngClassInvalid,b._20(l,7).ngClassPending)})}function u(n){return b._15(0,[(n()(),b._16(0,null,null,2,"li",[["dnd-sortable",""]],null,[[null,"onDropSuccess"]],function(n,l,t){var e=!0,u=n.component;if("onDropSuccess"===l){e=!1!==u.onChangeSort()&&e}return e},null,null)),b._17(8192,null,0,C.b,[b.V,S.c,O.a,C.a,S.d,b._8],{index:[0,"index"]},{onDropSuccessCallback:"onDropSuccess"}),(n()(),b._18(null,["\n                        ","\n                    "]))],function(n,l){n(l,1,0,l.context.index)},function(n,l){n(l,2,0,l.context.$implicit.name)})}function i(n){return b._15(0,[(n()(),b._16(0,null,null,15,"div",[],null,null,null,null,null)),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,12,"div",[["class","rank"],["dnd-sortable-container",""]],null,null,null,null,null)),b._17(8192,null,0,C.a,[b.V,S.c,O.a,b._8,S.d],{sortableData:[0,"sortableData"],dropzones:[1,"dropzones"]},null),b._22(1),(n()(),b._18(null,["\n                "])),(n()(),b._16(0,null,null,1,"span",[["style","color:gray;padding:0.3em"]],null,null,null,null,null)),(n()(),b._18(null,["#",""])),(n()(),b._18(null,["\n                "])),(n()(),b._16(0,null,null,4,"ul",[["class","candidatevote"]],null,null,null,null,null)),(n()(),b._18(null,["\n                    "])),(n()(),b._23(8388608,null,null,1,null,u)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n                "])),(n()(),b._18(null,["\n            "])),(n()(),b._18(null,["\n        "]))],function(n,l){n(l,3,0,l.context.$implicit.candidates,n(l,4,0,l.parent.context.index)),n(l,12,0,l.context.$implicit.candidates)},function(n,l){n(l,7,0,l.context.index+1)})}function o(n){return b._15(0,[(n()(),b._16(0,null,null,30,"div",[["class","vote"]],null,null,null,null,null)),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,1,"button",[["class","delete"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.deleteVote(n.context.$implicit)&&e}return e},null,null)),(n()(),b._18(null,["x"])),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),b._18(null,[""," "])),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,8,"div",[],null,null,null,null,null)),(n()(),b._16(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),b._18(null,["nom : "])),(n()(),b._16(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;if("input"===l){e=!1!==b._20(n,12)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==b._20(n,12).onTouched()&&e}if("compositionstart"===l){e=!1!==b._20(n,12)._compositionStart()&&e}if("compositionend"===l){e=!1!==b._20(n,12)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.name=t)&&e}return e},null,null)),b._17(8192,null,0,y.d,[b.W,b.V,[2,y.e]],null,null),b._21(512,null,y.f,function(n){return[n]},[y.d]),b._17(335872,null,0,y.g,[[8,null],[8,null],[8,null],[2,y.f]],{model:[0,"model"]},{update:"ngModelChange"}),b._21(1024,null,y.h,null,[y.g]),b._17(8192,null,0,y.i,[y.h],null,null),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,8,"div",[],null,null,null,null,null)),(n()(),b._18(null,["nombre : "])),(n()(),b._16(0,null,null,6,"input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==b._20(n,21)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==b._20(n,21).onTouched()&&e}if("compositionstart"===l){e=!1!==b._20(n,21)._compositionStart()&&e}if("compositionend"===l){e=!1!==b._20(n,21)._compositionEnd(t.target.value)&&e}if("change"===l){e=!1!==b._20(n,22).onChange(t.target.value)&&e}if("input"===l){e=!1!==b._20(n,22).onChange(t.target.value)&&e}if("blur"===l){e=!1!==b._20(n,22).onTouched()&&e}if("ngModelChange"===l){e=!1!==(n.context.$implicit.quantity=t)&&e}if("ngModelChange"===l){e=!1!==u.onChangeSort()&&e}return e},null,null)),b._17(8192,null,0,y.d,[b.W,b.V,[2,y.e]],null,null),b._17(8192,null,0,y.j,[b.W,b.V],null,null),b._21(512,null,y.f,function(n,l){return[n,l]},[y.d,y.j]),b._17(335872,null,0,y.g,[[8,null],[8,null],[8,null],[2,y.f]],{model:[0,"model"]},{update:"ngModelChange"}),b._21(1024,null,y.h,null,[y.g]),b._17(8192,null,0,y.i,[y.h],null,null),(n()(),b._18(null,["\n\n        "])),(n()(),b._23(8388608,null,null,1,null,i)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n    "]))],function(n,l){n(l,14,0,l.context.$implicit.name),n(l,24,0,l.context.$implicit.quantity),n(l,29,0,l.context.$implicit.ranking)},function(n,l){n(l,6,0,l.context.$implicit.name),n(l,11,0,b._20(l,16).ngClassUntouched,b._20(l,16).ngClassTouched,b._20(l,16).ngClassPristine,b._20(l,16).ngClassDirty,b._20(l,16).ngClassValid,b._20(l,16).ngClassInvalid,b._20(l,16).ngClassPending),n(l,20,0,b._20(l,26).ngClassUntouched,b._20(l,26).ngClassTouched,b._20(l,26).ngClassPristine,b._20(l,26).ngClassDirty,b._20(l,26).ngClassValid,b._20(l,26).ngClassInvalid,b._20(l,26).ngClassPending)})}function r(n){return b._15(0,[(n()(),b._16(0,null,null,11,"li",[],null,null,null,null,null)),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,3,"span",[],null,null,null,null,null)),b._17(139264,null,0,P.g,[b.t,b.u,b.V,b.W],{ngClass:[0,"ngClass"]},null),b._24(["win","loose"]),(n()(),b._18(null,[""," - ",""])),(n()(),b._18(null,[" / \n            "])),(n()(),b._16(0,null,null,3,"span",[],null,null,null,null,null)),b._17(139264,null,0,P.g,[b.t,b.u,b.V,b.W],{ngClass:[0,"ngClass"]},null),b._24(["win","loose"]),(n()(),b._18(null,[""," - ",""])),(n()(),b._18(null,["\n            \n        "]))],function(n,l){n(l,3,0,n(l,4,0,l.context.$implicit.ticWin,l.context.$implicit.tacWin)),n(l,8,0,n(l,9,0,l.context.$implicit.tacWin,l.context.$implicit.ticWin))},function(n,l){n(l,5,0,l.context.$implicit.tic.name,l.context.$implicit.ticScore),n(l,10,0,l.context.$implicit.tacScore,l.context.$implicit.tac.name)})}function a(n){return b._15(0,[(n()(),b._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),b._18(null,["("]))],null,null)}function s(n){return b._15(0,[(n()(),b._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),b._18(null,[", "]))],null,null)}function _(n){return b._15(0,[(n()(),b._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),b._18(null,[")"]))],null,null)}function c(n){return b._15(0,[(n()(),b._16(0,null,null,12,"span",[],null,null,null,null,null)),(n()(),b._18(null,["\n                "])),(n()(),b._23(8388608,null,null,1,null,a)),b._17(8192,null,0,P.h,[b._0,b._1],{ngIf:[0,"ngIf"]},null),(n()(),b._18(null,[" "])),(n()(),b._16(0,null,null,1,"u",[],null,null,null,null,null)),(n()(),b._18(null,["",""])),(n()(),b._18(null,[" "])),(n()(),b._23(8388608,null,null,1,null,s)),b._17(8192,null,0,P.h,[b._0,b._1],{ngIf:[0,"ngIf"]},null),(n()(),b._18(null,[" "])),(n()(),b._23(8388608,null,null,1,null,_)),b._17(8192,null,0,P.h,[b._0,b._1],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.context.first),n(l,9,0,!l.context.last),n(l,12,0,l.context.last)},function(n,l){n(l,6,0,l.context.$implicit.name)})}function d(n){return b._15(0,[(n()(),b._16(0,null,null,7,"li",[],null,null,null,null,null)),(n()(),b._18(null,[""," "])),(n()(),b._16(0,null,null,1,"b",[],null,null,null,null,null)),(n()(),b._18(null,["",""])),(n()(),b._18(null,["\n            "])),(n()(),b._23(8388608,null,null,1,null,c)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n        "]))],function(n,l){n(l,6,0,l.context.$implicit.winAgainst)},function(n,l){n(l,1,0,l.context.$implicit.score),n(l,3,0,l.context.$implicit.candidate.name)})}function p(n){return b._15(0,[(n()(),b._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),b._18(null,[" / "]))],null,null)}function f(n){return b._15(0,[(n()(),b._16(0,null,null,6,"span",[],null,null,null,null,null)),(n()(),b._18(null,[" "])),(n()(),b._16(0,null,null,1,"b",[],null,null,null,null,null)),(n()(),b._18(null,["",""])),(n()(),b._18(null,["(",")"])),(n()(),b._23(8388608,null,null,1,null,p)),b._17(8192,null,0,P.h,[b._0,b._1],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,!l.context.last)},function(n,l){n(l,3,0,l.context.$implicit.candidate.name),n(l,4,0,l.context.$implicit.score)})}function h(n){return b._15(0,[(n()(),b._16(0,null,null,34,"div",[["class","part intro"]],null,null,null,null,null)),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),b._18(null,["Election Condorcet"])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),b._18(null,["Intro"])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["\n        Vous voulez repeindre le portes de la co-propriété en rose, mais vous vous sentez minoritaire, vous apprennez que des voisins commence à se mettre d'accord sur le bleu!\n        Mais en faite vous préférez largement le violet au bleu! Et donc vous finissez par abondonner le vote du rose au profit du violet!\n        Mais finalement si je n'aviez pas écouté aux portes je me serai retrouvé avec du bleu que je deteste! Bref le constat est singlant, le vote utile est une construction hasardeuse du conscensus qui se constitue en-dehors de l'organisation des élections.\n        Et s'ajoute que ce n'est pas très agréable  de voter en fonction des autres!\n    "])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,['\n        Cette page est un simulateur du "vote par préférences" théorisé par Condorcet. Ce système de vote permet une pleine expression des candidats et des électeurs:\n        '])),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,10,"ul",[],null,null,null,null,null)),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),b._18(null,["Le nombre des candidats n'influe pas sur le résultat."])),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),b._18(null,["Les électeurs peuvent donner leur avis sur l'ensemble des candidats."])),(n()(),b._18(null,["\n            "])),(n()(),b._16(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),b._18(null,["Le tout avec en seul tour de vote."])),(n()(),b._18(null,["\n        "])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,7,"p",[],null,null,null,null,null)),(n()(),b._18(null,["\n        Ci-dessous vous allez pouvoir manipuler les votes de plusieurs groupes de personnes pour constater l'influence sur le résultat de l'élection.\n        Vous pouvez gardez les données en copiant "])),(n()(),b._16(0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),b._18(null,["le lien permanent"])),(n()(),b._18(null,[" contenant l'ensemble de vos données saisies.\n        "])),(n()(),b._16(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),b._18(null,["Notez que rafraichir la page (F5) annulera les dernières modifications."])),(n()(),b._18(null,["\n    "])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n\n"])),(n()(),b._16(0,null,null,23,"div",[["class","part candidates"]],null,null,null,null,null)),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),b._18(null,["",""])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,9,"p",[],null,null,null,null,null)),(n()(),b._18(null,["\n    Le nom de la simulation : "])),(n()(),b._16(0,null,null,6,"input",[["appElastischInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==b._20(n,44)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==b._20(n,44).onTouched()&&e}if("compositionstart"===l){e=!1!==b._20(n,44)._compositionStart()&&e}if("compositionend"===l){e=!1!==b._20(n,44)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(u.simulation.elections.name=t)&&e}return e},null,null)),b._17(8192,null,0,y.d,[b.W,b.V,[2,y.e]],null,null),b._21(512,null,y.f,function(n){return[n]},[y.d]),b._17(335872,null,0,y.g,[[8,null],[8,null],[8,null],[2,y.f]],{model:[0,"model"]},{update:"ngModelChange"}),b._21(1024,null,y.h,null,[y.g]),b._17(8192,null,0,y.i,[y.h],null,null),b._17(4202496,null,0,v.a,[b.V],null,null),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["\n\n "])),(n()(),b._16(0,null,null,2,"p",[],null,null,null,null,null)),(n()(),b._16(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.onAddCandidate()&&e}return e},null,null)),(n()(),b._18(null,["Ajouter choix"])),(n()(),b._18(null,["\n    \n        "])),(n()(),b._23(8388608,null,null,1,null,e)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["    \n\n"])),(n()(),b._16(0,null,null,16,"div",[["class","part votes"]],null,null,null,null,null)),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),b._18(null,["Les votes"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["Avec un glisser/déposer vous pouvez trier par ordre de préférence les choix de chaque groupe d'électeur."])),(n()(),b._18(null,["\n\n\n"])),(n()(),b._16(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.onAddVote()&&e}return e},null,null)),(n()(),b._18(null,["Ajouter groupe de vote"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),b._18(null,["\n    "])),(n()(),b._23(8388608,null,null,1,null,o)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,16,"div",[["class","part"]],null,null,null,null,null)),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),b._18(null,["Dépouillement des votes"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,10,"div",[],null,null,null,null,null)),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["Le dépouillement consiste à compter les préférences deux par deux."])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),b._18(null,["\n        "])),(n()(),b._23(8388608,null,null,1,null,r)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n    "])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,19,"div",[["class","part result"]],null,null,null,null,null)),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),b._18(null,["Le Resultat"])),(n()(),b._18(null,["\n"])),(n()(),b._16(0,null,null,13,"div",[],null,null,null,null,null)),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["Les choix sont classés par nombre de duel gagné :"])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),b._18(null,["\n        "])),(n()(),b._23(8388608,null,null,1,null,d)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n    "])),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),b._18(null,["Il existe des solutions en cas d'égalité pour résoudre le vote - non mise en place par le simulateur."])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n\n"])),(n()(),b._16(0,null,null,10,"div",[["class","foot"]],null,null,null,null,null)),(n()(),b._18(null,["\n    "])),(n()(),b._16(0,null,null,7,"p",[],null,null,null,null,null)),(n()(),b._18(null,["\n        "])),(n()(),b._16(0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),b._18(null,["le lien permanent"])),(n()(),b._18(null,[" /// \n         Classement : \n        "])),(n()(),b._23(8388608,null,null,1,null,f)),b._17(401408,null,0,P.f,[b._0,b._1,b.t],{ngForOf:[0,"ngForOf"]},null),(n()(),b._18(null,["\n    "])),(n()(),b._18(null,["\n"])),(n()(),b._18(null,["\n"]))],function(n,l){var t=l.component;n(l,46,0,t.simulation.elections.name),n(l,58,0,t.simulation.elections.candidates),n(l,75,0,t.simulation.votes),n(l,92,0,t.simulation.duels),n(l,110,0,t.simulation.results),n(l,126,0,t.simulation.results)},function(n,l){var t=l.component;n(l,28,0,b._25(1,"",t.permanentLink,"")),n(l,39,0,t.simulation.elections.name),n(l,43,0,b._20(l,48).ngClassUntouched,b._20(l,48).ngClassTouched,b._20(l,48).ngClassPristine,b._20(l,48).ngClassDirty,b._20(l,48).ngClassValid,b._20(l,48).ngClassInvalid,b._20(l,48).ngClassPending),n(l,122,0,b._25(1,"",t.permanentLink,""))})}function g(n){return b._15(0,[(n()(),b._16(0,null,null,1,"app-simulation",[],null,null,null,h,k)),b._17(57344,null,0,D.a,[I.c],null,null)],function(n,l){n(l,1,0)},null)}var m=t("Nl/t"),b=t("3j3K"),y=t("NVOs"),v=t("M2j9"),C=t("hegN"),S=t("loX+"),O=t("n+yP"),P=t("2Je8"),D=t("dAku"),I=t("Qbdm");t.d(l,"b",function(){return k}),l.a=h;var M=[m.a],k=b._14({encapsulation:0,styles:M,data:{}});b._19("app-simulation",D.a,g,{},{},[])},kZql:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0,virtualPath:"/condorcet-promotion/"}},kke6:function(n,l,t){"use strict";var e=t("3j3K"),u=t("Iksp"),i=t("2Je8"),o=t("Qbdm"),r=t("NVOs"),a=t("Fzro"),s=t("D59C"),_=t("n+yP"),c=t("1A80"),d=t("loX+");t.d(l,"a",function(){return h});var p=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),f=function(n){function l(l){return n.call(this,l,[c.a],[c.a])||this}return p(l,n),Object.defineProperty(l.prototype,"_LOCALE_ID_13",{get:function(){return null==this.__LOCALE_ID_13&&(this.__LOCALE_ID_13=e.b(this.parent.get(e.c,null))),this.__LOCALE_ID_13},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NgLocalization_14",{get:function(){return null==this.__NgLocalization_14&&(this.__NgLocalization_14=new i.a(this._LOCALE_ID_13)),this.__NgLocalization_14},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Compiler_15",{get:function(){return null==this.__Compiler_15&&(this.__Compiler_15=new e.d),this.__Compiler_15},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_APP_ID_16",{get:function(){return null==this.__APP_ID_16&&(this.__APP_ID_16=e.e()),this.__APP_ID_16},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_IterableDiffers_17",{get:function(){return null==this.__IterableDiffers_17&&(this.__IterableDiffers_17=e.f()),this.__IterableDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_KeyValueDiffers_18",{get:function(){return null==this.__KeyValueDiffers_18&&(this.__KeyValueDiffers_18=e.g()),this.__KeyValueDiffers_18},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DomSanitizer_19",{get:function(){return null==this.__DomSanitizer_19&&(this.__DomSanitizer_19=new o.b(this.parent.get(o.c))),this.__DomSanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Sanitizer_20",{get:function(){return null==this.__Sanitizer_20&&(this.__Sanitizer_20=this._DomSanitizer_19),this.__Sanitizer_20},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_HAMMER_GESTURE_CONFIG_21",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_21&&(this.__HAMMER_GESTURE_CONFIG_21=new o.d),this.__HAMMER_GESTURE_CONFIG_21},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EVENT_MANAGER_PLUGINS_22",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_22&&(this.__EVENT_MANAGER_PLUGINS_22=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_21)]),this.__EVENT_MANAGER_PLUGINS_22},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EventManager_23",{get:function(){return null==this.__EventManager_23&&(this.__EventManager_23=new o.h(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(e.h))),this.__EventManager_23},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomSharedStylesHost_24",{get:function(){return null==this.__ɵDomSharedStylesHost_24&&(this.__ɵDomSharedStylesHost_24=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_24},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomRendererFactory2_25",{get:function(){return null==this.__ɵDomRendererFactory2_25&&(this.__ɵDomRendererFactory2_25=new o.j(this._EventManager_23,this._ɵDomSharedStylesHost_24)),this.__ɵDomRendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RendererFactory2_26",{get:function(){return null==this.__RendererFactory2_26&&(this.__RendererFactory2_26=this._ɵDomRendererFactory2_25),this.__RendererFactory2_26},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵSharedStylesHost_27",{get:function(){return null==this.__ɵSharedStylesHost_27&&(this.__ɵSharedStylesHost_27=this._ɵDomSharedStylesHost_24),this.__ɵSharedStylesHost_27},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Testability_28",{get:function(){return null==this.__Testability_28&&(this.__Testability_28=new e.i(this.parent.get(e.h))),this.__Testability_28},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Meta_29",{get:function(){return null==this.__Meta_29&&(this.__Meta_29=new o.k(this.parent.get(o.c))),this.__Meta_29},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Title_30",{get:function(){return null==this.__Title_30&&(this.__Title_30=new o.l(this.parent.get(o.c))),this.__Title_30},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_31",{get:function(){return null==this.__ɵi_31&&(this.__ɵi_31=new r.a),this.__ɵi_31},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_BrowserXhr_32",{get:function(){return null==this.__BrowserXhr_32&&(this.__BrowserXhr_32=new a.a),this.__BrowserXhr_32},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ResponseOptions_33",{get:function(){return null==this.__ResponseOptions_33&&(this.__ResponseOptions_33=new a.b),this.__ResponseOptions_33},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XSRFStrategy_34",{get:function(){return null==this.__XSRFStrategy_34&&(this.__XSRFStrategy_34=a.c()),this.__XSRFStrategy_34},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XHRBackend_35",{get:function(){return null==this.__XHRBackend_35&&(this.__XHRBackend_35=new a.d(this._BrowserXhr_32,this._ResponseOptions_33,this._XSRFStrategy_34)),this.__XHRBackend_35},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RequestOptions_36",{get:function(){return null==this.__RequestOptions_36&&(this.__RequestOptions_36=new a.e),this.__RequestOptions_36},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Http_37",{get:function(){return null==this.__Http_37&&(this.__Http_37=a.f(this._XHRBackend_35,this._RequestOptions_36)),this.__Http_37},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropConfig_38",{get:function(){return null==this.__DragDropConfig_38&&(this.__DragDropConfig_38=new _.a),this.__DragDropConfig_38},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropService_39",{get:function(){return null==this.__DragDropService_39&&(this.__DragDropService_39=d.a()),this.__DragDropService_39},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DragDropSortableService_40",{get:function(){return null==this.__DragDropSortableService_40&&(this.__DragDropSortableService_40=d.b(this._DragDropConfig_38)),this.__DragDropSortableService_40},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[e.j,o.n(this.parent.get(o.o,null),this.parent.get(e.k,null))],this._ApplicationInitStatus_3=new e.l(this._APP_INITIALIZER_2),this._ɵf_4=new e.m(this.parent.get(e.h),this.parent.get(e.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new e.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new r.b,this._FormsModule_9=new r.c,this._HttpModule_10=new a.g,this._DndModule_11=new s.a,this._AppModule_12=new u.a,this._AppModule_12},l.prototype.getInternal=function(n,l){return n===i.b?this._CommonModule_0:n===e.p?this._ErrorHandler_1:n===e.q?this._APP_INITIALIZER_2:n===e.l?this._ApplicationInitStatus_3:n===e.m?this._ɵf_4:n===e.r?this._ApplicationRef_5:n===e.o?this._ApplicationModule_6:n===o.p?this._BrowserModule_7:n===r.b?this._ɵba_8:n===r.c?this._FormsModule_9:n===a.g?this._HttpModule_10:n===s.a?this._DndModule_11:n===u.a?this._AppModule_12:n===e.c?this._LOCALE_ID_13:n===i.c?this._NgLocalization_14:n===e.d?this._Compiler_15:n===e.s?this._APP_ID_16:n===e.t?this._IterableDiffers_17:n===e.u?this._KeyValueDiffers_18:n===o.q?this._DomSanitizer_19:n===e.v?this._Sanitizer_20:n===o.r?this._HAMMER_GESTURE_CONFIG_21:n===o.s?this._EVENT_MANAGER_PLUGINS_22:n===o.h?this._EventManager_23:n===o.i?this._ɵDomSharedStylesHost_24:n===o.j?this._ɵDomRendererFactory2_25:n===e.w?this._RendererFactory2_26:n===o.t?this._ɵSharedStylesHost_27:n===e.i?this._Testability_28:n===o.k?this._Meta_29:n===o.l?this._Title_30:n===r.a?this._ɵi_31:n===a.a?this._BrowserXhr_32:n===a.h?this._ResponseOptions_33:n===a.i?this._XSRFStrategy_34:n===a.d?this._XHRBackend_35:n===a.j?this._RequestOptions_36:n===a.k?this._Http_37:n===_.a?this._DragDropConfig_38:n===d.c?this._DragDropService_39:n===d.d?this._DragDropSortableService_40:l},l.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_24&&this._ɵDomSharedStylesHost_24.ngOnDestroy()},l}(e.x),h=new e.y(f,u.a)},wSp2:function(n,l,t){"use strict";var e=t("U3E4");t.n(e);t.d(l,"c",function(){return u}),t.d(l,"b",function(){return o}),t.d(l,"a",function(){return a});var u=(function(){function n(){}}(),function(){function n(){}}(),function(){function n(n,l,t){this.name=n,this.quantity=l,this.ranking=[];for(var e=0,u=t;e<u.length;e++){var i=u[e];this.addRank(),this.addCandidate(i)}}return n.prototype.addRank=function(){this.ranking.push({candidates:[],rank:this.ranking.length})},n.prototype.deleteRank=function(){var n=this.ranking.findIndex(function(n){return 0==n.candidates.length});if(n>=0){this.ranking.splice(n,1);for(var l=0;l<this.ranking.length;l++)this.ranking[l].rank=l}},n.prototype.addCandidate=function(n){this.ranking[0].candidates.push(n)},n.prototype.deleteCandidate=function(n){for(var l=0,t=this.ranking;l<t.length;l++){var e=t[l],u=e.candidates.findIndex(function(l){return l==n});u>=0&&e.candidates.splice(u,1)}},n}()),i=(function(){function n(){}}(),function(){function n(n,l){this.tic=n,this.tac=l,this.ticScore=0,this.tacScore=0}return Object.defineProperty(n.prototype,"distance",{get:function(){return Math.abs(this.ticScore-this.tacScore)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ticWin",{get:function(){return this.ticScore>this.tacScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"tacWin",{get:function(){return this.tacScore>this.ticScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"winnerIfExist",{get:function(){return this.ticWin?this.tic:this.tacWin?this.tac:null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"looserIfExist",{get:function(){return this.ticWin?this.tac:this.tacWin?this.tic:null},enumerable:!0,configurable:!0}),n.prototype.resetScores=function(){this.ticScore=0,this.tacScore=0},n.fromCandidates=function(l){for(var t=new Array,e=0;e<l.length-1;e++)for(var u=e+1;u<l.length;u++)t.push(new n(l[e],l[u]));return t},n}()),o=function(){function n(n,l){this.election=n,this.votes=l}return n.defaultFactory=function(l){return new n(l,[])},n}(),r=function(){function n(n){this.candidate=n,this.winAgainst=[]}return n.prototype.reset=function(){this.winAgainst.length=0},Object.defineProperty(n.prototype,"score",{get:function(){return this.winAgainst.length},enumerable:!0,configurable:!0}),n}(),a=function(){function n(n){this.request=n,this.duels=i.fromCandidates(this.elections.candidates),this.results=new e.List(this.elections.candidates).Select(function(n){return new r(n)}).ToArray(),this.update()}return Object.defineProperty(n.prototype,"votes",{get:function(){return this.request.votes},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"elections",{get:function(){return this.request.election},enumerable:!0,configurable:!0}),n.prototype.update=function(){this.updateDuels(),this.updateResults()},n.prototype.updateDuels=function(){for(var n=function(n){n.resetScores();for(var t=0,e=l.votes;t<e.length;t++){var u=e[t],i=u.ranking,o=i.find(function(l){return void 0!=l.candidates.find(function(l){return l==n.tic})}),r=i.find(function(l){return void 0!=l.candidates.find(function(l){return l==n.tac})});o.rank<r.rank?n.ticScore+=u.quantity:r.rank<o.rank&&(n.tacScore+=u.quantity)}},l=this,t=0,e=this.duels;t<e.length;t++){n(e[t])}this.duels.sort(function(n,l){return Math.abs(n.distance-l.distance)})},n.prototype.updateResults=function(){for(var n=new e.List(this.duels),l=function(l){l.reset();var t=n.Where(function(n){return n.winnerIfExist==l.candidate}).Select(function(n){return n.looserIfExist}).ToArray();(e=l.winAgainst).push.apply(e,t);var e},t=0,u=this.results;t<u.length;t++){l(u[t])}this.results.sort(function(n,l){return l.score-n.score})},n.prototype.deleteCandidate=function(n){for(var l=0,t=this.votes;l<t.length;l++){var e=t[l];e.deleteCandidate(n),e.deleteRank()}for(var u=0,i=this.duels.filter(function(l){return l.tac==n||l.tic==n});u<i.length;u++){var o=i[u],r=this.duels.indexOf(o);this.duels.splice(r,1)}this.results.splice(this.results.findIndex(function(l){return l.candidate==n}),1),this.elections.candidates.splice(this.elections.candidates.indexOf(n),1),this.update()},n.prototype.deleteVote=function(n){var l=this.votes.indexOf(n);this.votes.splice(l,1),this.update()},n.prototype.addVote=function(n){var l=new u(n,1,this.elections.candidates);this.votes.push(l),this.update()},n.prototype.addCandidate=function(n){for(var l={name:n},t=0,e=this.votes;t<e.length;t++){var u=e[t];u.addRank(),u.addCandidate(l)}for(var o=0,a=this.elections.candidates;o<a.length;o++){var s=a[o];this.duels.push(new i(s,l))}this.results.push(new r(l)),this.elections.candidates.push(l),this.update()},n}()},x35b:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),u=t("kZql"),i=t("Qbdm"),o=t("kke6");u.a.production&&t.i(e.a)(),t.i(i.a)().bootstrapModuleFactory(o.a)}},[0]);