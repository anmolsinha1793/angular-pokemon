import{A as ke,B as Pe,C as Se,D as De,E as Te,F as Ie,H as Ae,I as Ee,J as Fe,K as Oe,L as Re,a as ge,b as _e,c as be,d as ve,f as xe,g as k,h as ye,j as Ce,o as O,w as P,x as we,y as Me}from"./chunk-36IBTXCM.js";import{$a as ie,Ab as d,Bb as b,Cb as y,Eb as p,F as z,Fa as X,Fb as ue,Ha as Y,Ja as l,Ka as u,La as Z,Na as G,Pa as K,Qa as ee,Ra as te,U as N,W as B,Wb as M,X as V,Z as U,Za as A,_ as $,_a as oe,bb as w,cc as fe,da as H,db as ne,eb as re,gb as ae,hb as se,ia as c,j as L,ja as Q,jb as le,ka as W,kb as me,la as q,lb as a,mb as s,nb as f,pb as E,qa as T,ra as I,rb as x,sb as _,tb as ce,ub as F,vb as de,xb as pe,y as j,ya as J,yb as he}from"./chunk-U7JWLIVM.js";var h={invalidUrlMessage:"Invalid route entered!!",designBytext:"Designed by: Anmol Aditya Sinha",headerText:"The Pokemon Center",totalItems:100,pageSize:20,currentPage:0,technicalAdjustment:20};var qe=()=>[fe,we,Pe,Te,Se,De,ke,Me,Ae,Ie],Je=o=>({"background-image":o});function Xe(o,e){if(o&1){let n=E();a(0,"mat-card",2)(1,"mat-card-header"),f(2,"div",5),a(3,"mat-card-title"),d(4),s(),a(5,"mat-card-subtitle"),d(6),s()(),f(7,"img",6),a(8,"mat-card-actions")(9,"button",7),x("click",function(){let t=T(n).$implicit,r=_(3);return I(r.navigate(t.id))}),d(10,"Navigate to the pokemon"),s()()()}if(o&2){let n=e.$implicit;l(2),w("ngStyle",ue(5,Je,"url("+n.image+")")),l(2),b(n.name),l(2),y("Breed: ",n.name,""),l(),w("src",n.image,Y)("alt",n.name)}}function Ye(o,e){if(o&1){let n=E();a(0,"div",0)(1,"div",1),le(2,Xe,11,7,"mat-card",2,se),s(),a(4,"div",3)(5,"mat-paginator",4),x("page",function(t){T(n);let r=_(2);return I(r.pageChanged(t))}),s()()()}if(o&2){let n=_(2);l(2),me(n.pokemonData),l(3),w("length",n.totalItems)("pageSize",n.pageSize)("pageIndex",n.currentPage)}}function Ze(o,e){o&1&&(a(0,"div",8),f(1,"mat-spinner"),s())}function Ge(o,e){if(o&1&&(A(0,Ye,6,3)(1,Ze,2,0),oe(2,0,qe,null,1)),o&2){let n=_();l(2),ie(n.isContentLoaded)}}function Ke(o,e){if(o&1&&d(0),o&2){let n=_();y(" ",n.errorText,`
`)}}var Le=(()=>{let e=class e{constructor(i,t,r){this.fetchPokemonService=i,this.utilsService=t,this.router=r,this.totalItems=h.totalItems,this.pageSize=h.pageSize,this.currentPage=h.currentPage,this.pokemonData=[],this.isContentLoaded=!1,this.isInitialLoad=!0,this.unSubscription$=new L,this.isError=!1,this.errorText=""}ngOnInit(){this.fetchPokemonList(),this.isInitialLoad=!1}fetchPokemonList(){let i=this.currentPage*h.technicalAdjustment;this.isContentLoaded=!1,(this.isInitialLoad?this.fetchPokemonService.fetchAllPokemons():this.fetchPokemonService.makeNextPageCalls(i)).pipe(B(r=>{this.totalItems=r.count}),z(r=>this.handlePokemonListCreation(r)),N(this.unSubscription$)).subscribe({next:r=>{r?.forEach(m=>{this.pokemonData.push(this.utilsService.handlePokemonListCreation(m)),this.utilsService.setPokemonList(this.pokemonData)}),this.isError=!1,this.errorText=""},error:r=>{this.isError=!0,this.errorText=r}})}handlePokemonListCreation(i){let t=i.results.map(r=>this.fetchPokemonService.getPokemonDetails(r.url));return this.isContentLoaded=!0,j(t)}navigate(i){this.router.navigate([`pokemon-details/${i}`])}pageChanged(i){this.currentPage=i.pageIndex,this.pokemonData=[],this.utilsService.setPokemonList([]),this.fetchPokemonList()}ngOnDestroy(){this.unSubscription$.next(0),this.unSubscription$.complete()}};e.\u0275fac=function(t){return new(t||e)(u(Oe),u(Re),u(k))},e.\u0275cmp=c({type:e,selectors:[["app-pokemon-list"]],standalone:!0,features:[p],decls:2,vars:1,consts:[[1,"pokemon__list__wrapper"],[1,"pokemon__wrapper"],[1,"example-card"],[1,"paginator__wrapper"],[3,"page","length","pageSize","pageIndex"],["mat-card-avatar","",1,"example-header-image",3,"ngStyle"],["mat-card-image","",1,"customize__image",3,"src","alt"],["mat-raised-button","","color","primary",1,"customize__goto__pokemon",3,"click"],[1,"spinner__wrapper"]],template:function(t,r){t&1&&A(0,Ge,4,1)(1,Ke,1,1),t&2&&ae(0,r.isError?1:0)},dependencies:[Fe,Ee],styles:[".pokemon__wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}.pokemon__wrapper[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}.pokemon__wrapper[_ngcontent-%COMP%]   .customize__goto__pokemon[_ngcontent-%COMP%]{height:2rem;width:10rem;font-size:8px}.pokemon__wrapper[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]{max-width:400px;border-radius:8px;margin:8px;box-shadow:#00000059 0 5px 15px}.pokemon__wrapper[_ngcontent-%COMP%]   .example-header-image[_ngcontent-%COMP%]{background-size:cover}.paginator__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.spinner__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:90vh}"]});let o=e;return o})();var je=(()=>{let e=class e{constructor(){this.invalidText=h.invalidUrlMessage}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["app-not-found"]],standalone:!0,features:[p],decls:3,vars:1,consts:[[1,"not__found__wrapper"],[1,"content"]],template:function(t,r){t&1&&(a(0,"div",0)(1,"div",1),d(2),s()()),t&2&&(l(2),y(" ",r.invalidText," "))},styles:[".not__found__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:85vh}"]});let o=e;return o})();var ze=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",title:"Pokemon List",component:Le},{path:"pokemon-details/:id",loadChildren:()=>import("./chunk-YLO63LPD.js").then(o=>o.PokemonDetailsModule)},{path:"**",title:"404 - Component not found",component:je}];var et="@",tt=(()=>{let e=class e{constructor(i,t,r,m,g){this.doc=i,this.delegate=t,this.zone=r,this.animationType=m,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=H(G,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-34GMZFHB.js")).catch(t=>{throw new V(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:r})=>{this._engine=t(this.animationType,this.doc,this.scheduler);let m=new r(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(i,t){let r=this.delegate.createRenderer(i,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let m=new R(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Qe=g.createRenderer(i,t);m.use(Qe)}).catch(g=>{m.use(r)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){Z()},e.\u0275prov=U({token:e,factory:e.\u0275fac});let o=e;return o})(),R=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,i,t){this.delegate.insertBefore(e,n,i,t)}removeChild(e,n,i){this.delegate.removeChild(e,n,i)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,i,t){this.delegate.setAttribute(e,n,i,t)}removeAttribute(e,n,i){this.delegate.removeAttribute(e,n,i)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,i,t){this.delegate.setStyle(e,n,i,t)}removeStyle(e,n,i){this.delegate.removeStyle(e,n,i)}setProperty(e,n,i){this.shouldReplay(n)&&this.replay.push(t=>t.setProperty(e,n,i)),this.delegate.setProperty(e,n,i)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,i){return this.shouldReplay(n)&&this.replay.push(t=>t.listen(e,n,i)),this.delegate.listen(e,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(et)}};function Ne(o="animations"){return ee("NgAsyncAnimations"),q([{provide:K,useFactory:(e,n,i)=>new tt(e,n,i,o),deps:[M,be,te]},{provide:X,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Be={providers:[ye(ze),ge(_e()),Ne()]};var ot=["*",[["mat-toolbar-row"]]],it=["*","mat-toolbar-row"],C=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=W({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let o=e;return o})(),S=(()=>{let e=class e{constructor(i,t,r){this._elementRef=i,this._platform=t,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};e.\u0275fac=function(t){return new(t||e)(u(J),u(Ce),u(M))},e.\u0275cmp=c({type:e,selectors:[["mat-toolbar"]],contentQueries:function(t,r,m){if(t&1&&de(m,C,5),t&2){let g;pe(g=he())&&(r._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(re(r.color?"mat-"+r.color:""),ne("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[p],ngContentSelectors:it,decls:2,vars:0,template:function(t,r){t&1&&(ce(ot),F(0),F(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let o=e;return o})();var D=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=$({imports:[O,O]});let o=e;return o})();var Ue=(()=>{let e=class e{constructor(i){this.router=i,this.headerText=h.headerText}navigate(){this.router.navigate(["/home"])}};e.\u0275fac=function(t){return new(t||e)(u(k))},e.\u0275cmp=c({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:8,vars:1,consts:[["color","primary"],[1,"style__header__content"],[1,"example-spacer"],["mat-raised-button","","color","accent",1,"customize__goto__pokemon",3,"click"]],template:function(t,r){t&1&&(a(0,"mat-toolbar",0)(1,"mat-toolbar-row")(2,"div",1)(3,"span"),d(4),s()(),f(5,"span",2),a(6,"button",3),x("click",function(){return r.navigate()}),d(7,"Home"),s()()()),t&2&&(l(4),b(r.headerText))},dependencies:[D,S,C,P],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.customize__goto__pokemon[_ngcontent-%COMP%]{height:2rem;width:5rem;border-radius:4px;background:#ffbf00;border:0}.style__header__content[_ngcontent-%COMP%]{display:flex;align-items:center}"]});let o=e;return o})();var $e=(()=>{let e=class e{constructor(){this.designedBy=h.designBytext}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:5,vars:1,consts:[[1,"style__footer"],["color","primary"],[1,"style__toolbar"]],template:function(t,r){t&1&&(a(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row",2)(3,"span"),d(4),s()()()()),t&2&&(l(4),b(r.designedBy))},dependencies:[D,S,C,P],styles:[".style__footer[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;z-index:999;left:0;bottom:0;width:100%}.style__toolbar[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}"]});let o=e;return o})();var He=(()=>{let e=class e{constructor(){this.title="pokemon-evolution"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"content__outer__wrapper"],[1,"content__inner__wrapper"]],template:function(t,r){t&1&&(f(0,"app-header"),a(1,"div",0)(2,"div",1),f(3,"router-outlet"),s()(),f(4,"app-footer"))},dependencies:[xe,Ue,$e],styles:[".content__outer__wrapper[_ngcontent-%COMP%]{min-height:100%}.content__inner__wrapper[_ngcontent-%COMP%]{padding-bottom:50px}"]});let o=e;return o})();ve(He,Be).catch(o=>console.error(o));
