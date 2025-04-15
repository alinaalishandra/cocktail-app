import{A as cr,B as Uo,C as jo,D as _e,E as ur,G as ce,H as un,K as dn,L as W,N as ge,P as G,a as vt,b as Ro,c as xo,d as Do,e as rn,f as yt,g as $o,h as on,i as sn,j as an,k as Ie,m as cn,o as Je,r as Lo,w as lr,y as No,z as Fo}from"./chunk-DKKJMV65.js";import{a as Ao,b as Po}from"./chunk-BCDZCWSS.js";import{a as H,b as Mo,c as Oo,d as ln,e as ar,f as ko}from"./chunk-LEWGZHHT.js";import{c as hn,d as pn,f as Ct,g as dr,h as wt,j as hr,l as pr}from"./chunk-6YLYVHER.js";import{$ as te,A as Ze,Aa as po,B as Le,Ba as fo,Bb as Xe,C as Re,Ca as $e,Cb as Io,D as Yn,E as Jr,Ea as go,Eb as _o,F as eo,G as to,Ga as mo,Gb as or,H as ie,Ha as nr,I as Zt,Ia as k,Ib as ir,J as L,Ja as ae,K as A,Ka as pe,La as M,Lb as To,M as v,Ma as z,Mb as O,N as se,Na as bo,Nb as je,O as no,Oa as vo,P as j,Pb as nn,Q as Kn,Qa as yo,Qb as sr,R as $,Ra as Co,Rb as Eo,S as d,Sa as y,T as ro,Ta as p,U as oo,Ua as wo,V as pt,W as Se,Wa as Xt,X as io,Xa as P,Y as Ne,Ya as mt,Z as xe,_ as De,a as h,aa as I,ab as E,b as B,ba as so,bb as R,ca as Qt,cb as S,d as Gr,da as Yt,db as Qe,e as Zr,eb as Ye,f as Qr,fa as ao,fb as bt,g as Wn,ga as q,gb as Jt,h as Gn,ha as de,hb as Me,i as K,ia as Xn,ib as D,j as X,ja as he,jb as en,k as Ce,ka as Kt,kb as tn,l as J,la as Jn,lb as fe,m as g,ma as lo,mb as rr,n as Pe,na as er,nb as ne,o as Yr,oa as co,ob as re,p as Kr,pa as Fe,q as T,qb as Ue,r as Gt,ra as tr,rb as Ke,s as ee,sa as uo,sb as So,t as Xr,u as Zn,ua as ft,w as Ge,wa as ho,x as we,xa as b,y as ht,ya as gt,z as Qn,zb as le}from"./chunk-DD2MLFIJ.js";var mn=new j(""),br=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,i){return this._findPluginFor(n).addEventListener(e,n,r,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new A(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)($(mn),$(de))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),St=class{_doc;constructor(o){this._doc=o}manager},fn="ng-app-id";function zo(t){for(let o of t)o.remove()}function Bo(t,o){let e=o.createElement("style");return e.textContent=t,e}function is(t,o,e,n){let r=t.head?.querySelectorAll(`style[${fn}="${o}"],link[${fn}="${o}"]`);if(r)for(let i of r)i.removeAttribute(fn),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function gr(t,o){let e=o.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var vr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,i={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=ar(i),is(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Bo);n?.forEach(r=>this.addUsage(r,this.external,gr))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(zo(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])zo(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Bo(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,gr(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(fn,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)($(H),$(er),$(tr,8),$(Fe))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),fr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},yr=/%COMP%/g;var Vo="%COMP%",ss=`_nghost-${Vo}`,as=`_ngcontent-${Vo}`,ls=!0,cs=new j("",{providedIn:"root",factory:()=>ls});function us(t){return as.replace(yr,t)}function ds(t){return ss.replace(yr,t)}function qo(t,o){return o.map(e=>e.replace(yr,t))}var Cr=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,i,s,a,l,c=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=ar(a),this.defaultRenderer=new It(e,s,l,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===ft.ShadowDom&&(n=B(h({},n),{encapsulation:ft.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof gn?r.applyToHost(e):r instanceof _t&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.platformIsServer,C=this.tracingService;switch(n.encapsulation){case ft.Emulated:i=new gn(l,c,n,this.appId,u,s,a,f,C);break;case ft.ShadowDom:return new mr(l,c,e,n,s,a,this.nonce,f,C);default:i=new _t(l,c,n,u,s,a,f,C);break}r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)($(br),$(vr),$(er),$(cs),$(H),$(Fe),$(de),$(tr),$(uo,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),It=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,e,n,r,i){this.eventManager=o,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(o,e){return e?this.doc.createElementNS(fr[e]||e,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,e){(Ho(o)?o.content:o).appendChild(e)}insertBefore(o,e,n){o&&(Ho(o)?o.content:o).insertBefore(e,n)}removeChild(o,e){e.remove()}selectRootElement(o,e){let n=typeof o=="string"?this.doc.querySelector(o):o;if(!n)throw new A(-5104,!1);return e||(n.textContent=""),n}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,n,r){if(r){e=r+":"+e;let i=fr[r];i?o.setAttributeNS(i,e,n):o.setAttribute(e,n)}else o.setAttribute(e,n)}removeAttribute(o,e,n){if(n){let r=fr[n];r?o.removeAttributeNS(r,e):o.removeAttribute(`${n}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,n,r){r&(gt.DashCase|gt.Important)?o.style.setProperty(e,n,r&gt.Important?"important":""):o.style[e]=n}removeStyle(o,e,n){n&gt.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,n){o!=null&&(o[e]=n)}setValue(o,e){o.nodeValue=e}listen(o,e,n,r){if(typeof o=="string"&&(o=vt().getGlobalEventTarget(this.doc,o),!o))throw new A(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,e,i)),this.eventManager.addEventListener(o,e,i,r)}decoratePreventDefault(o){return e=>{if(e==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(e)):o(e))===!1&&e.preventDefault()}}};function Ho(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var mr=class extends It{sharedStylesHost;hostEl;shadowRoot;constructor(o,e,n,r,i,s,a,l,c){super(o,i,s,l,c),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=qo(r.id,u);for(let C of u){let w=document.createElement("style");a&&w.setAttribute("nonce",a),w.textContent=C,this.shadowRoot.appendChild(w)}let f=r.getExternalStyles?.();if(f)for(let C of f){let w=gr(C,i);a&&w.setAttribute("nonce",a),this.shadowRoot.appendChild(w)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,n){return super.insertBefore(this.nodeOrShadowRoot(o),e,n)}removeChild(o,e){return super.removeChild(null,e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},_t=class extends It{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,e,n,r,i,s,a,l,c){super(o,i,s,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?qo(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},gn=class extends _t{contentAttr;hostAttr;constructor(o,e,n,r,i,s,a,l,c){let u=r+"-"+n.id;super(o,e,n,i,s,a,l,c,u),this.contentAttr=us(u),this.hostAttr=ds(u)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,e){let n=super.createElement(o,e);return super.setAttribute(n,this.contentAttr,""),n}};var bn=class t extends xo{supportsDOMEvents=!0;static makeCurrent(){Ro(new t)}onAndCancel(o,e,n,r){return o.addEventListener(e,n,r),()=>{o.removeEventListener(e,n,r)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.remove()}createElement(o,e){return e=e||this.getDefaultDocument(),e.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return e==="window"?window:e==="document"?o:e==="body"?o.body:null}getBaseHref(o){let e=hs();return e==null?null:ps(e)}resetBaseElement(){Tt=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return Mo(document.cookie,o)}},Tt=null;function hs(){return Tt=Tt||document.querySelector("base"),Tt?Tt.getAttribute("href"):null}function ps(t){return new URL(t,document.baseURI).pathname}var fs=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Go=(()=>{class t extends St{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,i){return e.addEventListener(n,r,i),()=>this.removeEventListener(e,n,r,i)}removeEventListener(e,n,r,i){return e.removeEventListener(n,r,i)}static \u0275fac=function(n){return new(n||t)($(H))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Wo=["alt","control","meta","shift"],gs={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ms={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Zo=(()=>{class t extends St{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,i){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>vt().onAndCancel(e,s.domEventName,a,i))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Wo.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let r=gs[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(r=e.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Wo.forEach(s=>{if(s!==r){let a=ms[s];a(e)&&(i+=s+".")}}),i+=r,i===n)}static eventCallback(e,n,r){return i=>{t.matchEventFullKeyCode(i,e)&&r.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)($(H))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function bs(t,o){return To(h({rootComponent:t},vs(o)))}function vs(t){return{appProviders:[...Is,...t?.providers??[]],platformProviders:Ss}}function ys(){bn.makeCurrent()}function Cs(){return new Xn}function ws(){return lo(document),document}var Ss=[{provide:Fe,useValue:Oo},{provide:co,useValue:ys,multi:!0},{provide:H,useFactory:ws}];var Is=[{provide:oo,useValue:"root"},{provide:Xn,useFactory:Cs},{provide:mn,useClass:Go,multi:!0,deps:[H]},{provide:mn,useClass:Zo,multi:!0,deps:[H]},Cr,vr,br,{provide:po,useExisting:Cr},{provide:ko,useClass:fs},[]];var Qo=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)($(H))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ts=["*"],Es=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Rs=(()=>{class t extends ge{name="baseicon";inlineStyles=Es;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var oe=(()=>{class t extends G{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=_e(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",O],styleClass:"styleClass"},features:[le([Rs]),M],ngContentSelectors:Ts,decls:1,vars:0,template:function(n,r){n&1&&(en(),tn(0))},encapsulation:2,changeDetection:0})}return t})();var Yo=(()=>{class t extends oe{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["CheckIcon"]],features:[M],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,r){n&1&&(te(),E(0,"svg",0),S(1,"path",1),R()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var Ko=(()=>{class t extends oe{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["ExclamationTriangleIcon"]],features:[M],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(te(),E(0,"svg",0)(1,"g"),S(2,"path",1)(3,"path",2)(4,"path",3),R(),E(5,"defs")(6,"clipPath",4),S(7,"rect",5),R()()()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),y("clip-path",r.pathId),b(5),p("id",r.pathId))},encapsulation:2})}return t})();var Xo=(()=>{class t extends oe{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["InfoCircleIcon"]],features:[M],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(te(),E(0,"svg",0)(1,"g"),S(2,"path",1),R(),E(3,"defs")(4,"clipPath",2),S(5,"rect",3),R()()()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),y("clip-path",r.pathId),b(3),p("id",r.pathId))},encapsulation:2})}return t})();var Jo=(()=>{class t extends oe{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["SpinnerIcon"]],features:[M],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(te(),E(0,"svg",0)(1,"g"),S(2,"path",1),R(),E(3,"defs")(4,"clipPath",2),S(5,"rect",3),R()()()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),y("clip-path",r.pathId),b(3),p("id",r.pathId))},encapsulation:2})}return t})();var ei=(()=>{class t extends oe{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["TimesIcon"]],features:[M],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(te(),E(0,"svg",0),S(1,"path",1),R()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var ti=(()=>{class t extends oe{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["TimesCircleIcon"]],features:[M],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(te(),E(0,"svg",0)(1,"g"),S(2,"path",1),R(),E(3,"defs")(4,"clipPath",2),S(5,"rect",3),R()()()),n&2&&(P(r.getClassNames()),y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),b(),y("clip-path",r.pathId),b(3),p("id",r.pathId))},encapsulation:2})}return t})();function xs(){let t=[],o=(i,s)=>{let a=t.length>0?t[t.length-1]:{key:i,value:s},l=a.value+(a.key===i?0:s)+2;return t.push({key:i,value:l}),l},e=i=>{t=t.filter(s=>s.value!==i)},n=()=>t.length>0?t[t.length-1].value:0,r=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:r,set:(i,s,a)=>{s&&(s.style.zIndex=String(o(i,a)))},clear:i=>{i&&(e(r(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var vn=xs();var ri=["container"],Ds=(t,o,e,n)=>({showTransformParams:t,hideTransformParams:o,showTransitionParams:e,hideTransitionParams:n}),$s=t=>({value:"visible",params:t}),Ms=(t,o)=>({$implicit:t,closeFn:o}),Os=t=>({$implicit:t});function ks(t,o){t&1&&bt(0)}function As(t,o){if(t&1&&z(0,ks,1,0,"ng-container",3),t&2){let e=D();p("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",Io(2,Ms,e.message,e.onCloseIconClick))}}function Ps(t,o){if(t&1&&S(0,"span",4),t&2){let e=D(3);p("ngClass",e.cx("messageIcon"))}}function Ls(t,o){t&1&&S(0,"CheckIcon"),t&2&&y("aria-hidden",!0)("data-pc-section","icon")}function Ns(t,o){t&1&&S(0,"InfoCircleIcon"),t&2&&y("aria-hidden",!0)("data-pc-section","icon")}function Fs(t,o){t&1&&S(0,"TimesCircleIcon"),t&2&&y("aria-hidden",!0)("data-pc-section","icon")}function Us(t,o){t&1&&S(0,"ExclamationTriangleIcon"),t&2&&y("aria-hidden",!0)("data-pc-section","icon")}function js(t,o){t&1&&S(0,"InfoCircleIcon"),t&2&&y("aria-hidden",!0)("data-pc-section","icon")}function zs(t,o){if(t&1&&(E(0,"span",4),z(1,Ls,1,2,"CheckIcon")(2,Ns,1,2,"InfoCircleIcon")(3,Fs,1,2,"TimesCircleIcon")(4,Us,1,2,"ExclamationTriangleIcon")(5,js,1,2,"InfoCircleIcon"),R()),t&2){let e,n=D(3);p("ngClass",n.cx("messageIcon")),y("aria-hidden",!0)("data-pc-section","icon"),b(),mt((e=n.message.severity)==="success"?1:e==="info"?2:e==="error"?3:e==="warn"?4:5)}}function Bs(t,o){if(t&1&&(Qe(0),z(1,Ps,1,1,"span",6)(2,zs,6,4,"span",6),E(3,"div",4)(4,"div",4),Ue(5),R(),E(6,"div",4),Ue(7),R()(),Ye()),t&2){let e=D(2);b(),p("ngIf",e.message.icon),b(),p("ngIf",!e.message.icon),b(),p("ngClass",e.cx("messageText")),y("data-pc-section","text"),b(),p("ngClass",e.cx("summary")),y("data-pc-section","summary"),b(),So(" ",e.message.summary," "),b(),p("ngClass",e.cx("detail")),y("data-pc-section","detail"),b(),Ke(e.message.detail)}}function Hs(t,o){t&1&&bt(0)}function Vs(t,o){if(t&1&&S(0,"span",4),t&2){let e=D(4);p("ngClass",e.cx("closeIcon"))}}function qs(t,o){if(t&1&&z(0,Vs,1,1,"span",6),t&2){let e=D(3);p("ngIf",e.message.closeIcon)}}function Ws(t,o){if(t&1&&S(0,"TimesIcon",4),t&2){let e=D(3);p("ngClass",e.cx("closeIcon")),y("aria-hidden",!0)("data-pc-section","closeicon")}}function Gs(t,o){if(t&1){let e=Jt();E(0,"div")(1,"button",7),Me("click",function(r){xe(e);let i=D(2);return De(i.onCloseIconClick(r))})("keydown.enter",function(r){xe(e);let i=D(2);return De(i.onCloseIconClick(r))}),z(2,qs,1,1,"span",4)(3,Ws,1,3,"TimesIcon",4),R()()}if(t&2){let e=D(2);b(),p("ariaLabel",e.closeAriaLabel),y("class",e.cx("closeButton"))("data-pc-section","closebutton"),b(),mt(e.message.closeIcon?2:3)}}function Zs(t,o){if(t&1&&(E(0,"div",4),z(1,Bs,8,10,"ng-container",5)(2,Hs,1,0,"ng-container",3)(3,Gs,4,4,"div"),R()),t&2){let e=D();P(e.message==null?null:e.message.contentStyleClass),p("ngClass",e.cx("messageContent")),y("data-pc-section","content"),b(),p("ngIf",!e.template),b(),p("ngTemplateOutlet",e.template)("ngTemplateOutletContext",Xe(8,Os,e.message)),b(),mt((e.message==null?null:e.message.closable)!==!1?3:-1)}}var Qs=["message"],Ys=["headless"];function Ks(t,o){if(t&1){let e=Jt();E(0,"p-toastItem",3),Me("onClose",function(r){xe(e);let i=D();return De(i.onMessageClose(r))})("@toastAnimation.start",function(r){xe(e);let i=D();return De(i.onAnimationStart(r))})("@toastAnimation.done",function(r){xe(e);let i=D();return De(i.onAnimationEnd(r))}),R()}if(t&2){let e=o.$implicit,n=o.index,r=D();p("message",e)("index",n)("life",r.life)("template",r.template||r._template)("headlessTemplate",r.headlessTemplate||r._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",r.showTransformOptions)("hideTransformOptions",r.hideTransformOptions)("showTransitionOptions",r.showTransitionOptions)("hideTransitionOptions",r.hideTransitionOptions)}}var Xs=({dt:t})=>`
.p-toast {
    width: ${t("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${t("toast.icon.size")};
    width: ${t("toast.icon.size")};
    height: ${t("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${t("toast.content.padding")};
    gap: ${t("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${t("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${t("toast.summary.font.weight")};
    font-size: ${t("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${t("toast.detail.font.weight")};
    font-size: ${t("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${t("toast.transition.duration")}, color ${t("toast.transition.duration")}, outline-color ${t("toast.transition.duration")}, box-shadow ${t("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${t("toast.close.button.width")};
    height: ${t("toast.close.button.height")};
    border-radius: ${t("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${t("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${t("toast.blur")});
    border-radius: ${t("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${t("toast.close.icon.size")};
    width: ${t("toast.close.icon.size")};
    height: ${t("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${t("focus.ring.width")};
    outline-style: ${t("focus.ring.style")};
    outline-offset: ${t("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${t("toast.info.background")};
    border-color: ${t("toast.info.border.color")};
    color: ${t("toast.info.color")};
    box-shadow: ${t("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${t("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.info.close.button.focus.ring.color")};
    box-shadow: ${t("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${t("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${t("toast.success.background")};
    border-color: ${t("toast.success.border.color")};
    color: ${t("toast.success.color")};
    box-shadow: ${t("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${t("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.success.close.button.focus.ring.color")};
    box-shadow: ${t("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${t("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${t("toast.warn.background")};
    border-color: ${t("toast.warn.border.color")};
    color: ${t("toast.warn.color")};
    box-shadow: ${t("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${t("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${t("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${t("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${t("toast.error.background")};
    border-color: ${t("toast.error.border.color")};
    color: ${t("toast.error.color")};
    box-shadow: ${t("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${t("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.error.close.button.focus.ring.color")};
    box-shadow: ${t("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${t("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${t("toast.secondary.background")};
    border-color: ${t("toast.secondary.border.color")};
    color: ${t("toast.secondary.color")};
    box-shadow: ${t("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${t("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${t("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${t("toast.contrast.background")};
    border-color: ${t("toast.contrast.border.color")};
    color: ${t("toast.contrast.color")};
    box-shadow: ${t("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${t("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${t("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,Js={root:({instance:t})=>{let{_position:o}=t;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},ea={root:({instance:t})=>({"p-toast p-component":!0,[`p-toast-${t._position}`]:!!t._position}),message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},yn=(()=>{class t extends ge{name="toast";theme=Xs;classes=ea;inlineStyles=Js;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ta=(()=>{class t extends G{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new q;containerViewChild;_componentStyle=d(yn);timeout;constructor(e){super(),this.zone=e}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)($e(de))};static \u0275cmp=k({type:t,selectors:[["p-toastItem"]],viewQuery:function(n,r){if(n&1&&rr(ri,5),n&2){let i;ne(i=re())&&(r.containerViewChild=i.first)}},inputs:{message:"message",index:[2,"index","index",je],life:[2,"life","life",je],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[le([yn]),M],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(n,r){if(n&1){let i=Jt();E(0,"div",1,0),Me("mouseenter",function(){return xe(i),De(r.onMouseEnter())})("mouseleave",function(){return xe(i),De(r.onMouseLeave())}),z(2,As,1,5,"ng-container")(3,Zs,4,10,"div",2),R()}n&2&&(P(r.message==null?null:r.message.styleClass),p("ngClass",r.cx("message"))("@messageState",Xe(13,$s,_o(8,Ds,r.showTransformOptions,r.hideTransformOptions,r.showTransitionOptions,r.hideTransitionOptions))),y("id",r.message==null?null:r.message.id)("data-pc-name","toast")("data-pc-section","root"),b(2),mt(r.headlessTemplate?2:3))},dependencies:[Ie,yt,on,an,Yo,Ko,Xo,ei,ti,W],encapsulation:2,data:{animation:[hn("messageState",[dr("visible",Ct({transform:"translateY(0)",opacity:1})),wt("void => *",[Ct({transform:"{{showTransformParams}}",opacity:0}),pn("{{showTransitionParams}}")]),wt("* => void",[pn("{{hideTransitionParams}}",Ct({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),na=(()=>{class t extends G{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new q;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=d(un);_componentStyle=d(yn);styleElement;id=ce("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(r=>this.canAdd(r));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(r=>r.summary===n.summary&&r.detail==n.detail&&r.severity===n.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&vn.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&_e(this.messages)&&vn.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let r="";for(let i in this.breakpoints[n])r+=i+":"+this.breakpoints[n][i]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${r}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),jo(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&vn.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["p-toast"]],contentQueries:function(n,r,i){if(n&1&&(fe(i,Qs,5),fe(i,Ys,5),fe(i,dn,4)),n&2){let s;ne(s=re())&&(r.template=s.first),ne(s=re())&&(r.headlessTemplate=s.first),ne(s=re())&&(r.templates=s)}},viewQuery:function(n,r){if(n&1&&rr(ri,5),n&2){let i;ne(i=re())&&(r.containerViewChild=i.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",O],baseZIndex:[2,"baseZIndex","baseZIndex",je],life:[2,"life","life",je],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",O],preventDuplicates:[2,"preventDuplicates","preventDuplicates",O],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[le([yn]),M],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(n,r){n&1&&(E(0,"div",1,0),z(2,Ks,1,10,"p-toastItem",2),R()),n&2&&(Xt(r.style),P(r.styleClass),p("ngClass",r.cx("root"))("ngStyle",r.sx("root")),b(2),p("ngForOf",r.messages))},dependencies:[Ie,yt,$o,sn,ta,W],encapsulation:2,data:{animation:[hn("toastAnimation",[wt(":enter, :leave",[pr("@*",hr())])])]},changeDetection:0})}return t})(),Gu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=se({imports:[na,W,W]})}return t})();var m="primary",Ut=Symbol("RouteTitle"),Tr=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function He(t){return new Tr(t)}function di(t,o,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(o.hasChildren()||n.length<t.length))return null;let r={};for(let i=0;i<n.length;i++){let s=n[i],a=t[i];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function ra(t,o){if(t.length!==o.length)return!1;for(let e=0;e<t.length;++e)if(!me(t[e],o[e]))return!1;return!0}function me(t,o){let e=t?Er(t):void 0,n=o?Er(o):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let i=0;i<e.length;i++)if(r=e[i],!hi(t[r],o[r]))return!1;return!0}function Er(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function hi(t,o){if(Array.isArray(t)&&Array.isArray(o)){if(t.length!==o.length)return!1;let e=[...t].sort(),n=[...o].sort();return e.every((r,i)=>n[i]===r)}else return t===o}function pi(t){return t.length>0?t[t.length-1]:null}function Ae(t){return Yr(t)?t:vo(t)?J(Promise.resolve(t)):g(t)}var oa={exact:gi,subset:mi},fi={exact:ia,subset:sa,ignored:()=>!0};function oi(t,o,e){return oa[e.paths](t.root,o.root,e.matrixParams)&&fi[e.queryParams](t.queryParams,o.queryParams)&&!(e.fragment==="exact"&&t.fragment!==o.fragment)}function ia(t,o){return me(t,o)}function gi(t,o,e){if(!ze(t.segments,o.segments)||!Sn(t.segments,o.segments,e)||t.numberOfChildren!==o.numberOfChildren)return!1;for(let n in o.children)if(!t.children[n]||!gi(t.children[n],o.children[n],e))return!1;return!0}function sa(t,o){return Object.keys(o).length<=Object.keys(t).length&&Object.keys(o).every(e=>hi(t[e],o[e]))}function mi(t,o,e){return bi(t,o,o.segments,e)}function bi(t,o,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!ze(r,e)||o.hasChildren()||!Sn(r,e,n))}else if(t.segments.length===e.length){if(!ze(t.segments,e)||!Sn(t.segments,e,n))return!1;for(let r in o.children)if(!t.children[r]||!mi(t.children[r],o.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!ze(t.segments,r)||!Sn(t.segments,r,n)||!t.children[m]?!1:bi(t.children[m],o,i,n)}}function Sn(t,o,e){return o.every((n,r)=>fi[e](t[r].parameters,n.parameters))}var ve=class{root;queryParams;fragment;_queryParamMap;constructor(o=new _([],{}),e={},n=null){this.root=o,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=He(this.queryParams),this._queryParamMap}toString(){return ca.serialize(this)}},_=class{segments;children;parent=null;constructor(o,e){this.segments=o,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return In(this)}},Oe=class{path;parameters;_parameterMap;constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap??=He(this.parameters),this._parameterMap}toString(){return yi(this)}};function aa(t,o){return ze(t,o)&&t.every((e,n)=>me(e.parameters,o[n].parameters))}function ze(t,o){return t.length!==o.length?!1:t.every((e,n)=>e.path===o[n].path)}function la(t,o){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===m&&(e=e.concat(o(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==m&&(e=e.concat(o(r,n)))}),e}var jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new Ve,providedIn:"root"})}return t})(),Ve=class{parse(o){let e=new xr(o);return new ve(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){let e=`/${Et(o.root,!0)}`,n=ha(o.queryParams),r=typeof o.fragment=="string"?`#${ua(o.fragment)}`:"";return`${e}${n}${r}`}},ca=new Ve;function In(t){return t.segments.map(o=>yi(o)).join("/")}function Et(t,o){if(!t.hasChildren())return In(t);if(o){let e=t.children[m]?Et(t.children[m],!1):"",n=[];return Object.entries(t.children).forEach(([r,i])=>{r!==m&&n.push(`${r}:${Et(i,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=la(t,(n,r)=>r===m?[Et(t.children[m],!1)]:[`${r}:${Et(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[m]!=null?`${In(t)}/${e[0]}`:`${In(t)}/(${e.join("//")})`}}function vi(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Cn(t){return vi(t).replace(/%3B/gi,";")}function ua(t){return encodeURI(t)}function Rr(t){return vi(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _n(t){return decodeURIComponent(t)}function ii(t){return _n(t.replace(/\+/g,"%20"))}function yi(t){return`${Rr(t.path)}${da(t.parameters)}`}function da(t){return Object.entries(t).map(([o,e])=>`;${Rr(o)}=${Rr(e)}`).join("")}function ha(t){let o=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Cn(e)}=${Cn(r)}`).join("&"):`${Cn(e)}=${Cn(n)}`).filter(e=>e);return o.length?`?${o.join("&")}`:""}var pa=/^[^\/()?;#]+/;function wr(t){let o=t.match(pa);return o?o[0]:""}var fa=/^[^\/()?;=#]+/;function ga(t){let o=t.match(fa);return o?o[0]:""}var ma=/^[^=?&#]+/;function ba(t){let o=t.match(ma);return o?o[0]:""}var va=/^[^&#]+/;function ya(t){let o=t.match(va);return o?o[0]:""}var xr=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _([],{}):new _([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(n[m]=new _(o,e)),n}parseSegment(){let o=wr(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(o),new Oe(_n(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let e=ga(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=wr(this.remaining);r&&(n=r,this.capture(n))}o[_n(e)]=_n(n)}parseQueryParam(o){let e=ba(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=ya(this.remaining);s&&(n=s,this.capture(n))}let r=ii(e),i=ii(n);if(o.hasOwnProperty(r)){let s=o[r];Array.isArray(s)||(s=[s],o[r]=s),s.push(i)}else o[r]=i}parseParens(o){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=wr(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new A(4010,!1);let i;n.indexOf(":")>-1?(i=n.slice(0,n.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=m);let s=this.parseChildren();e[i]=Object.keys(s).length===1?s[m]:new _([],s),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new A(4011,!1)}};function Ci(t){return t.segments.length>0?new _([],{[m]:t}):t}function wi(t){let o={};for(let[n,r]of Object.entries(t.children)){let i=wi(r);if(n===m&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))o[s]=a;else(i.segments.length>0||i.hasChildren())&&(o[n]=i)}let e=new _(t.segments,o);return Ca(e)}function Ca(t){if(t.numberOfChildren===1&&t.children[m]){let o=t.children[m];return new _(t.segments.concat(o.segments),o.children)}return t}function ke(t){return t instanceof ve}function Si(t,o,e=null,n=null){let r=Ii(t);return _i(r,o,e,n)}function Ii(t){let o;function e(i){let s={};for(let l of i.children){let c=e(l);s[l.outlet]=c}let a=new _(i.url,s);return i===t&&(o=a),a}let n=e(t.root),r=Ci(n);return o??r}function _i(t,o,e,n){let r=t;for(;r.parent;)r=r.parent;if(o.length===0)return Sr(r,r,r,e,n);let i=wa(o);if(i.toRoot())return Sr(r,r,new _([],{}),e,n);let s=Sa(i,r,t),a=s.processChildren?xt(s.segmentGroup,s.index,i.commands):Ei(s.segmentGroup,s.index,i.commands);return Sr(r,s.segmentGroup,a,e,n)}function En(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function $t(t){return typeof t=="object"&&t!=null&&t.outlets}function Sr(t,o,e,n,r){let i={};n&&Object.entries(n).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;t===o?s=e:s=Ti(t,o,e);let a=Ci(wi(s));return new ve(a,i,r)}function Ti(t,o,e){let n={};return Object.entries(t.children).forEach(([r,i])=>{i===o?n[r]=e:n[r]=Ti(i,o,e)}),new _(t.segments,n)}var Rn=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,e,n){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=n,o&&n.length>0&&En(n[0]))throw new A(4003,!1);let r=n.find($t);if(r&&r!==pi(n))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function wa(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Rn(!0,0,t);let o=0,e=!1,n=t.reduce((r,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(i.segmentPath)return[...r,i.segmentPath]}return typeof i!="string"?[...r,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?o++:a!=""&&r.push(a))}),r):[...r,i]},[]);return new Rn(e,o,n)}var nt=class{segmentGroup;processChildren;index;constructor(o,e,n){this.segmentGroup=o,this.processChildren=e,this.index=n}};function Sa(t,o,e){if(t.isAbsolute)return new nt(o,!0,0);if(!e)return new nt(o,!1,NaN);if(e.parent===null)return new nt(e,!0,0);let n=En(t.commands[0])?0:1,r=e.segments.length-1+n;return Ia(e,r,t.numberOfDoubleDots)}function Ia(t,o,e){let n=t,r=o,i=e;for(;i>r;){if(i-=r,n=n.parent,!n)throw new A(4005,!1);r=n.segments.length}return new nt(n,!1,r-i)}function _a(t){return $t(t[0])?t[0].outlets:{[m]:t}}function Ei(t,o,e){if(t??=new _([],{}),t.segments.length===0&&t.hasChildren())return xt(t,o,e);let n=Ta(t,o,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let i=new _(t.segments.slice(0,n.pathIndex),{});return i.children[m]=new _(t.segments.slice(n.pathIndex),t.children),xt(i,0,r)}else return n.match&&r.length===0?new _(t.segments,{}):n.match&&!t.hasChildren()?Dr(t,o,e):n.match?xt(t,0,r):Dr(t,o,e)}function xt(t,o,e){if(e.length===0)return new _(t.segments,{});{let n=_a(e),r={};if(Object.keys(n).some(i=>i!==m)&&t.children[m]&&t.numberOfChildren===1&&t.children[m].segments.length===0){let i=xt(t.children[m],o,e);return new _(t.segments,i.children)}return Object.entries(n).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[i]=Ei(t.children[i],o,s))}),Object.entries(t.children).forEach(([i,s])=>{n[i]===void 0&&(r[i]=s)}),new _(t.segments,r)}}function Ta(t,o,e){let n=0,r=o,i={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return i;let s=t.segments[r],a=e[n];if($t(a))break;let l=`${a}`,c=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!ai(l,c,s))return i;n+=2}else{if(!ai(l,{},s))return i;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Dr(t,o,e){let n=t.segments.slice(0,o),r=0;for(;r<e.length;){let i=e[r];if($t(i)){let l=Ea(i.outlets);return new _(n,l)}if(r===0&&En(e[0])){let l=t.segments[o];n.push(new Oe(l.path,si(e[0]))),r++;continue}let s=$t(i)?i.outlets[m]:`${i}`,a=r<e.length-1?e[r+1]:null;s&&a&&En(a)?(n.push(new Oe(s,si(a))),r+=2):(n.push(new Oe(s,{})),r++)}return new _(n,{})}function Ea(t){let o={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(o[e]=Dr(new _([],{}),0,n))}),o}function si(t){let o={};return Object.entries(t).forEach(([e,n])=>o[e]=`${n}`),o}function ai(t,o,e){return t==e.path&&me(o,e.parameters)}var Tn="imperative",N=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(N||{}),Q=class{id;url;constructor(o,e){this.id=o,this.url=e}},qe=class extends Q{type=N.NavigationStart;navigationTrigger;restoredState;constructor(o,e,n="imperative",r=null){super(o,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ye=class extends Q{urlAfterRedirects;type=N.NavigationEnd;constructor(o,e,n){super(o,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},V=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(V||{}),Mt=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Mt||{}),be=class extends Q{reason;code;type=N.NavigationCancel;constructor(o,e,n,r){super(o,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Te=class extends Q{reason;code;type=N.NavigationSkipped;constructor(o,e,n,r){super(o,e),this.reason=n,this.code=r}},ot=class extends Q{error;target;type=N.NavigationError;constructor(o,e,n,r){super(o,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ot=class extends Q{urlAfterRedirects;state;type=N.RoutesRecognized;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xn=class extends Q{urlAfterRedirects;state;type=N.GuardsCheckStart;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dn=class extends Q{urlAfterRedirects;state;shouldActivate;type=N.GuardsCheckEnd;constructor(o,e,n,r,i){super(o,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},$n=class extends Q{urlAfterRedirects;state;type=N.ResolveStart;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mn=class extends Q{urlAfterRedirects;state;type=N.ResolveEnd;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},On=class{route;type=N.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},kn=class{route;type=N.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},An=class{snapshot;type=N.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pn=class{snapshot;type=N.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ln=class{snapshot;type=N.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nn=class{snapshot;type=N.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var kt=class{},it=class{url;navigationBehaviorOptions;constructor(o,e){this.url=o,this.navigationBehaviorOptions=e}};function Ra(t,o){return t.providers&&!t._injector&&(t._injector=nr(t.providers,o,`Route: ${t.path}`)),t._injector??o}function ue(t){return t.outlet||m}function xa(t,o){let e=t.filter(n=>ue(n)===o);return e.push(...t.filter(n=>ue(n)!==o)),e}function zt(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let o=t.parent;o;o=o.parent){let e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Fn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return zt(this.route?.snapshot)??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new lt(this.rootInjector)}},lt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Fn(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)($(pt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Un=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){let e=$r(o,this._root);return e?e.children.map(n=>n.value):[]}firstChild(o){let e=$r(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){let e=Mr(o,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==o)}pathFromRoot(o){return Mr(o,this._root).map(e=>e.value)}};function $r(t,o){if(t===o.value)return o;for(let e of o.children){let n=$r(t,e);if(n)return n}return null}function Mr(t,o){if(t===o.value)return[o];for(let e of o.children){let n=Mr(t,e);if(n.length)return n.unshift(o),n}return[]}var Z=class{value;children;constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}};function tt(t){let o={};return t&&t.children.forEach(e=>o[e.value.outlet]=e),o}var At=class extends Un{snapshot;constructor(o,e){super(o),this.snapshot=e,Ur(this,o)}toString(){return this.snapshot.toString()}};function Ri(t){let o=Da(t),e=new X([new Oe("",{})]),n=new X({}),r=new X({}),i=new X({}),s=new X(""),a=new Ee(e,n,i,s,r,m,t,o.root);return a.snapshot=o.root,new At(new Z(a,[]),o)}function Da(t){let o={},e={},n={},r="",i=new Be([],o,n,r,e,m,t,null,{});return new Pt("",new Z(i,[]))}var Ee=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,e,n,r,i,s,a,l){this.urlSubject=o,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(T(c=>c[Ut]))??g(void 0),this.url=o,this.params=e,this.queryParams=n,this.fragment=r,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(T(o=>He(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(T(o=>He(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function jn(t,o,e="emptyOnly"){let n,{routeConfig:r}=t;return o!==null&&(e==="always"||r?.path===""||!o.component&&!o.routeConfig?.loadComponent)?n={params:h(h({},o.params),t.params),data:h(h({},o.data),t.data),resolve:h(h(h(h({},t.data),o.data),r?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&Di(r)&&(n.resolve[Ut]=r.title),n}var Be=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ut]}constructor(o,e,n,r,i,s,a,l,c){this.url=o,this.params=e,this.queryParams=n,this.fragment=r,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=He(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=He(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${e}')`}},Pt=class extends Un{url;constructor(o,e){super(e),this.url=o,Ur(this,e)}toString(){return xi(this._root)}};function Ur(t,o){o.value._routerState=t,o.children.forEach(e=>Ur(t,e))}function xi(t){let o=t.children.length>0?` { ${t.children.map(xi).join(", ")} } `:"";return`${t.value}${o}`}function Ir(t){if(t.snapshot){let o=t.snapshot,e=t._futureSnapshot;t.snapshot=e,me(o.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),o.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),me(o.params,e.params)||t.paramsSubject.next(e.params),ra(o.url,e.url)||t.urlSubject.next(e.url),me(o.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Or(t,o){let e=me(t.params,o.params)&&aa(t.url,o.url),n=!t.parent!=!o.parent;return e&&!n&&(!t.parent||Or(t.parent,o.parent))}function Di(t){return typeof t.title=="string"||t.title===null}var $i=new j(""),jr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=m;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=he(void 0);parentContexts=d(lt);location=d(go);changeDetector=d(ir);inputBinder=d(Bt,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new kr(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=pe({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ne]})}return t})(),kr=class{route;childContexts;parent;outletData;constructor(o,e,n,r){this.route=o,this.childContexts=e,this.parent=n,this.outletData=r}get(o,e){return o===Ee?this.route:o===lt?this.childContexts:o===$i?this.outletData:this.parent.get(o,e)}},Bt=new j(""),zr=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Gt([n.queryParams,n.params,n.data]).pipe(ie(([i,s,a],l)=>(a=h(h(h({},i),s),a),l===0?g(a):Promise.resolve(a)))).subscribe(i=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let s=Eo(n.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,i[a])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function $a(t,o,e){let n=Lt(t,o._root,e?e._root:void 0);return new At(n,o)}function Lt(t,o,e){if(e&&t.shouldReuseRoute(o.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=o.value;let r=Ma(t,o,e);return new Z(n,r)}else{if(t.shouldAttach(o.value)){let i=t.retrieve(o.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(a=>Lt(t,a)),s}}let n=Oa(o.value),r=o.children.map(i=>Lt(t,i));return new Z(n,r)}}function Ma(t,o,e){return o.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Lt(t,n,r);return Lt(t,n)})}function Oa(t){return new Ee(new X(t.url),new X(t.params),new X(t.queryParams),new X(t.fragment),new X(t.data),t.outlet,t.component,t)}var st=class{redirectTo;navigationBehaviorOptions;constructor(o,e){this.redirectTo=o,this.navigationBehaviorOptions=e}},Mi="ngNavigationCancelingError";function zn(t,o){let{redirectTo:e,navigationBehaviorOptions:n}=ke(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,r=Oi(!1,V.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Oi(t,o){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Mi]=!0,e.cancellationCode=o,e}function ka(t){return ki(t)&&ke(t.url)}function ki(t){return!!t&&t[Mi]}var Aa=(t,o,e,n)=>T(r=>(new Ar(o,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),Ar=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,e,n,r,i){this.routeReuseStrategy=o,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=i}activate(o){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,o),Ir(this.futureState.root),this.activateChildRoutes(e,n,o)}deactivateChildRoutes(o,e,n){let r=tt(e);o.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,r[s],n),delete r[s]}),Object.values(r).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(o,e,n){let r=o.value,i=e?e.value:null;if(r===i)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(o,e,s.children)}else this.deactivateChildRoutes(o,e,n);else i&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){let n=e.getContext(o.value.outlet),r=n&&o.value.component?n.children:e,i=tt(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:a})}}deactivateRouteAndOutlet(o,e){let n=e.getContext(o.value.outlet),r=n&&o.value.component?n.children:e,i=tt(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(o,e,n){let r=tt(e);o.children.forEach(i=>{this.activateRoutes(i,r[i.value.outlet],n),this.forwardEvent(new Nn(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Pn(o.value.snapshot))}activateRoutes(o,e,n){let r=o.value,i=e?e.value:null;if(Ir(r),r===i)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(o,e,s.children)}else this.activateChildRoutes(o,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ir(a.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,n)}},Bn=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},rt=class{component;route;constructor(o,e){this.component=o,this.route=e}};function Pa(t,o,e){let n=t._root,r=o?o._root:null;return Rt(n,r,e,[n.value])}function La(t){let o=t.routeConfig?t.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:t,guards:o}}function ct(t,o){let e=Symbol(),n=o.get(t,e);return n===e?typeof t=="function"&&!no(t)?t:o.get(t):n}function Rt(t,o,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=tt(o);return t.children.forEach(s=>{Na(s,i[s.value.outlet],e,n.concat([s.value]),r),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Dt(a,e.getContext(s),r)),r}function Na(t,o,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,s=o?o.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=Fa(s,i,i.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Bn(n)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Rt(t,o,a?a.children:null,n,r):Rt(t,o,e,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new rt(a.outlet.component,s))}else s&&Dt(o,a,r),r.canActivateChecks.push(new Bn(n)),i.component?Rt(t,null,a?a.children:null,n,r):Rt(t,null,e,n,r);return r}function Fa(t,o,e){if(typeof e=="function")return e(t,o);switch(e){case"pathParamsChange":return!ze(t.url,o.url);case"pathParamsOrQueryParamsChange":return!ze(t.url,o.url)||!me(t.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Or(t,o)||!me(t.queryParams,o.queryParams);case"paramsChange":default:return!Or(t,o)}}function Dt(t,o,e){let n=tt(t),r=t.value;Object.entries(n).forEach(([i,s])=>{r.component?o?Dt(s,o.children.getContext(i),e):Dt(s,null,e):Dt(s,o,e)}),r.component?o&&o.outlet&&o.outlet.isActivated?e.canDeactivateChecks.push(new rt(o.outlet.component,r)):e.canDeactivateChecks.push(new rt(null,r)):e.canDeactivateChecks.push(new rt(null,r))}function Ht(t){return typeof t=="function"}function Ua(t){return typeof t=="boolean"}function ja(t){return t&&Ht(t.canLoad)}function za(t){return t&&Ht(t.canActivate)}function Ba(t){return t&&Ht(t.canActivateChild)}function Ha(t){return t&&Ht(t.canDeactivate)}function Va(t){return t&&Ht(t.canMatch)}function Ai(t){return t instanceof Kr||t?.name==="EmptyError"}var wn=Symbol("INITIAL_VALUE");function at(){return ie(t=>Gt(t.map(o=>o.pipe(Ze(1),to(wn)))).pipe(T(o=>{for(let e of o)if(e!==!0){if(e===wn)return wn;if(e===!1||qa(e))return e}return!0}),Ge(o=>o!==wn),Ze(1)))}function qa(t){return ke(t)||t instanceof st}function Wa(t,o){return ee(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:s}}=e;return s.length===0&&i.length===0?g(B(h({},e),{guardsResult:!0})):Ga(s,n,r,t).pipe(ee(a=>a&&Ua(a)?Za(n,i,t,o):g(a)),T(a=>B(h({},e),{guardsResult:a})))})}function Ga(t,o,e,n){return J(t).pipe(ee(r=>Ja(r.component,r.route,e,o,n)),Re(r=>r!==!0,!0))}function Za(t,o,e,n){return J(o).pipe(ht(r=>Xr(Ya(r.route.parent,n),Qa(r.route,n),Xa(t,r.path,e),Ka(t,r.route,e))),Re(r=>r!==!0,!0))}function Qa(t,o){return t!==null&&o&&o(new Ln(t)),g(!0)}function Ya(t,o){return t!==null&&o&&o(new An(t)),g(!0)}function Ka(t,o,e){let n=o.routeConfig?o.routeConfig.canActivate:null;if(!n||n.length===0)return g(!0);let r=n.map(i=>Zn(()=>{let s=zt(o)??e,a=ct(i,s),l=za(a)?a.canActivate(o,t):Se(s,()=>a(o,t));return Ae(l).pipe(Re())}));return g(r).pipe(at())}function Xa(t,o,e){let n=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(s=>La(s)).filter(s=>s!==null).map(s=>Zn(()=>{let a=s.guards.map(l=>{let c=zt(s.node)??e,u=ct(l,c),f=Ba(u)?u.canActivateChild(n,t):Se(c,()=>u(n,t));return Ae(f).pipe(Re())});return g(a).pipe(at())}));return g(i).pipe(at())}function Ja(t,o,e,n,r){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return g(!0);let s=i.map(a=>{let l=zt(o)??r,c=ct(a,l),u=Ha(c)?c.canDeactivate(t,o,e,n):Se(l,()=>c(t,o,e,n));return Ae(u).pipe(Re())});return g(s).pipe(at())}function el(t,o,e,n){let r=o.canLoad;if(r===void 0||r.length===0)return g(!0);let i=r.map(s=>{let a=ct(s,t),l=ja(a)?a.canLoad(o,e):Se(t,()=>a(o,e));return Ae(l)});return g(i).pipe(at(),Pi(n))}function Pi(t){return Zr(L(o=>{if(typeof o!="boolean")throw zn(t,o)}),T(o=>o===!0))}function tl(t,o,e,n){let r=o.canMatch;if(!r||r.length===0)return g(!0);let i=r.map(s=>{let a=ct(s,t),l=Va(a)?a.canMatch(o,e):Se(t,()=>a(o,e));return Ae(l)});return g(i).pipe(at(),Pi(n))}var Nt=class{segmentGroup;constructor(o){this.segmentGroup=o||null}},Ft=class extends Error{urlTree;constructor(o){super(),this.urlTree=o}};function et(t){return Pe(new Nt(t))}function nl(t){return Pe(new A(4e3,!1))}function rl(t){return Pe(Oi(!1,V.GuardRejected))}var Pr=class{urlSerializer;urlTree;constructor(o,e){this.urlSerializer=o,this.urlTree=e}lineralizeSegments(o,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return g(n);if(r.numberOfChildren>1||!r.children[m])return nl(`${o.redirectTo}`);r=r.children[m]}}applyRedirectCommands(o,e,n,r,i){if(typeof e!="string"){let a=e,{queryParams:l,fragment:c,routeConfig:u,url:f,outlet:C,params:w,data:x,title:F}=r,Y=Se(i,()=>a({params:w,data:x,queryParams:l,fragment:c,routeConfig:u,url:f,outlet:C,title:F}));if(Y instanceof ve)throw new Ft(Y);e=Y}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,n);if(e[0]==="/")throw new Ft(s);return s}applyRedirectCreateUrlTree(o,e,n,r){let i=this.createSegmentGroup(o,e.root,n,r);return new ve(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){let n={};return Object.entries(o).forEach(([r,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);n[r]=e[a]}else n[r]=i}),n}createSegmentGroup(o,e,n,r){let i=this.createSegments(o,e.segments,n,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(o,l,n,r)}),new _(i,s)}createSegments(o,e,n,r){return e.map(i=>i.path[0]===":"?this.findPosParam(o,i,r):this.findOrReturn(i,n))}findPosParam(o,e,n){let r=n[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(o,e){let n=0;for(let r of e){if(r.path===o.path)return e.splice(n),r;n++}return o}},Lr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ol(t,o,e,n,r){let i=Li(t,o,e);return i.matched?(n=Ra(o,n),tl(n,o,e,r).pipe(T(s=>s===!0?i:h({},Lr)))):g(i)}function Li(t,o,e){if(o.path==="**")return il(e);if(o.path==="")return o.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},Lr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(o.matcher||di)(e,t,o);if(!r)return h({},Lr);let i={};Object.entries(r.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=r.consumed.length>0?h(h({},i),r.consumed[r.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function il(t){return{matched:!0,parameters:t.length>0?pi(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function li(t,o,e,n){return e.length>0&&ll(t,e,n)?{segmentGroup:new _(o,al(n,new _(e,t.children))),slicedSegments:[]}:e.length===0&&cl(t,e,n)?{segmentGroup:new _(t.segments,sl(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new _(t.segments,t.children),slicedSegments:e}}function sl(t,o,e,n){let r={};for(let i of e)if(Vn(t,o,i)&&!n[ue(i)]){let s=new _([],{});r[ue(i)]=s}return h(h({},n),r)}function al(t,o){let e={};e[m]=o;for(let n of t)if(n.path===""&&ue(n)!==m){let r=new _([],{});e[ue(n)]=r}return e}function ll(t,o,e){return e.some(n=>Vn(t,o,n)&&ue(n)!==m)}function cl(t,o,e){return e.some(n=>Vn(t,o,n))}function Vn(t,o,e){return(t.hasChildren()||o.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ul(t,o,e){return o.length===0&&!t.children[e]}var Nr=class{};function dl(t,o,e,n,r,i,s="emptyOnly"){return new Fr(t,o,e,n,r,s,i).recognize()}var hl=31,Fr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,e,n,r,i,s,a){this.injector=o,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Pr(this.urlSerializer,this.urlTree)}noMatchError(o){return new A(4002,`'${o.segmentGroup}'`)}recognize(){let o=li(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(T(({children:e,rootSnapshot:n})=>{let r=new Z(n,e),i=new Pt("",r),s=Si(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(o){let e=new Be([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),m,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,m,e).pipe(T(n=>({children:n,rootSnapshot:e})),we(n=>{if(n instanceof Ft)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Nt?this.noMatchError(n):n}))}processSegmentGroup(o,e,n,r,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(o,e,n,i):this.processSegment(o,e,n,n.segments,r,!0,i).pipe(T(s=>s instanceof Z?[s]:[]))}processChildren(o,e,n,r){let i=[];for(let s of Object.keys(n.children))s==="primary"?i.unshift(s):i.push(s);return J(i).pipe(ht(s=>{let a=n.children[s],l=xa(e,s);return this.processSegmentGroup(o,l,a,s,r)}),eo((s,a)=>(s.push(...a),s)),Qn(null),Jr(),ee(s=>{if(s===null)return et(n);let a=Ni(s);return pl(a),g(a)}))}processSegment(o,e,n,r,i,s,a){return J(e).pipe(ht(l=>this.processSegmentAgainstRoute(l._injector??o,e,l,n,r,i,s,a).pipe(we(c=>{if(c instanceof Nt)return g(null);throw c}))),Re(l=>!!l),we(l=>{if(Ai(l))return ul(n,r,i)?g(new Nr):et(n);throw l}))}processSegmentAgainstRoute(o,e,n,r,i,s,a,l){return ue(n)!==s&&(s===m||!Vn(r,i,n))?et(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(o,r,n,i,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(o,r,e,n,i,s,l):et(r)}expandSegmentAgainstRouteUsingRedirect(o,e,n,r,i,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:C}=Li(e,r,i);if(!l)return et(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>hl&&(this.allowRedirects=!1));let w=new Be(i,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,ci(r),ue(r),r.component??r._loadedComponent??null,r,ui(r)),x=jn(w,a,this.paramsInheritanceStrategy);w.params=Object.freeze(x.params),w.data=Object.freeze(x.data);let F=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,w,o);return this.applyRedirects.lineralizeSegments(r,F).pipe(ee(Y=>this.processSegment(o,n,e,Y.concat(C),s,!1,a)))}matchSegmentAgainstRoute(o,e,n,r,i,s){let a=ol(e,n,r,o,this.urlSerializer);return n.path==="**"&&(e.children={}),a.pipe(ie(l=>l.matched?(o=n._injector??o,this.getChildConfig(o,n,r).pipe(ie(({routes:c})=>{let u=n._loadedInjector??o,{parameters:f,consumedSegments:C,remainingSegments:w}=l,x=new Be(C,f,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,ci(n),ue(n),n.component??n._loadedComponent??null,n,ui(n)),F=jn(x,s,this.paramsInheritanceStrategy);x.params=Object.freeze(F.params),x.data=Object.freeze(F.data);let{segmentGroup:Y,slicedSegments:dt}=li(e,C,w,c);if(dt.length===0&&Y.hasChildren())return this.processChildren(u,c,Y,x).pipe(T(Wt=>new Z(x,Wt)));if(c.length===0&&dt.length===0)return g(new Z(x,[]));let We=ue(n)===i;return this.processSegment(u,c,Y,dt,We?m:i,!0,x).pipe(T(Wt=>new Z(x,Wt instanceof Z?[Wt]:[])))}))):et(e)))}getChildConfig(o,e,n){return e.children?g({routes:e.children,injector:o}):e.loadChildren?e._loadedRoutes!==void 0?g({routes:e._loadedRoutes,injector:e._loadedInjector}):el(o,e,n,this.urlSerializer).pipe(ee(r=>r?this.configLoader.loadChildren(o,e).pipe(L(i=>{e._loadedRoutes=i.routes,e._loadedInjector=i.injector})):rl(e))):g({routes:[],injector:o})}};function pl(t){t.sort((o,e)=>o.value.outlet===m?-1:e.value.outlet===m?1:o.value.outlet.localeCompare(e.value.outlet))}function fl(t){let o=t.value.routeConfig;return o&&o.path===""}function Ni(t){let o=[],e=new Set;for(let n of t){if(!fl(n)){o.push(n);continue}let r=o.find(i=>n.value.routeConfig===i.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):o.push(n)}for(let n of e){let r=Ni(n.children);o.push(new Z(n.value,r))}return o.filter(n=>!e.has(n))}function ci(t){return t.data||{}}function ui(t){return t.resolve||{}}function gl(t,o,e,n,r,i){return ee(s=>dl(t,o,e,n,s.extractedUrl,r,i).pipe(T(({state:a,tree:l})=>B(h({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function ml(t,o){return ee(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return g(e);let i=new Set(r.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let c of Fi(l))s.add(c);let a=0;return J(s).pipe(ht(l=>i.has(l)?bl(l,n,t,o):(l.data=jn(l,l.parent,t).resolve,g(void 0))),L(()=>a++),Yn(1),ee(l=>a===s.size?g(e):Ce))})}function Fi(t){let o=t.children.map(e=>Fi(e)).flat();return[t,...o]}function bl(t,o,e,n){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Di(r)&&(i[Ut]=r.title),vl(i,t,o,n).pipe(T(s=>(t._resolvedData=s,t.data=jn(t,t.parent,e).resolve,null)))}function vl(t,o,e,n){let r=Er(t);if(r.length===0)return g({});let i={};return J(r).pipe(ee(s=>yl(t[s],o,e,n).pipe(Re(),L(a=>{if(a instanceof st)throw zn(new Ve,a);i[s]=a}))),Yn(1),T(()=>i),we(s=>Ai(s)?Ce:Pe(s)))}function yl(t,o,e,n){let r=zt(o)??n,i=ct(t,r),s=i.resolve?i.resolve(o,e):Se(r,()=>i(o,e));return Ae(s)}function _r(t){return ie(o=>{let e=t(o);return e?J(e).pipe(T(()=>o)):g(o)})}var Br=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(i=>i.outlet===m);return n}getResolvedTitleForRoute(e){return e.data[Ut]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>d(Ui),providedIn:"root"})}return t})(),Ui=(()=>{class t extends Br{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)($(Qo))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ut=new j("",{providedIn:"root",factory:()=>({})}),Hr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&S(0,"router-outlet")},dependencies:[jr],encapsulation:2})}return t})();function Vr(t){let o=t.children&&t.children.map(Vr),e=o?B(h({},t),{children:o}):h({},t);return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==m&&(e.component=Hr),e}var Vt=new j(""),ji=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(or);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return g(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=Ae(e.loadComponent()).pipe(T(Bi),L(i=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=i}),Le(()=>{this.componentLoaders.delete(e)})),r=new Gn(n,()=>new K).pipe(Wn());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return g({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=zi(n,this.compiler,e,this.onLoadEndListener).pipe(Le(()=>{this.childrenLoaders.delete(n)})),s=new Gn(i,()=>new K).pipe(Wn());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zi(t,o,e,n){return Ae(t.loadChildren()).pipe(T(Bi),ee(r=>r instanceof mo||Array.isArray(r)?g(r):J(o.compileModuleAsync(r))),T(r=>{n&&n(t);let i,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(i=r.create(e).injector,s=i.get(Vt,[],{optional:!0,self:!0}).flat()),{routes:s.map(Vr),injector:i}}))}function Cl(t){return t&&typeof t=="object"&&"default"in t}function Bi(t){return Cl(t)?t.default:t}var qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>d(wl),providedIn:"root"})}return t})(),wl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hi=new j("");var Vi=new j(""),qi=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new K;transitionAbortSubject=new K;configLoader=d(ji);environmentInjector=d(pt);destroyRef=d(Yt);urlSerializer=d(jt);rootContexts=d(lt);location=d(rn);inputBindingEnabled=d(Bt,{optional:!0})!==null;titleStrategy=d(Br);options=d(ut,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(qn);createViewTransition=d(Hi,{optional:!0});navigationErrorHandler=d(Vi,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new On(r)),n=r=>this.events.next(new kn(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(B(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(e){return this.transitions=new X(null),this.transitions.pipe(Ge(n=>n!==null),ie(n=>{let r=!1,i=!1;return g(n).pipe(ie(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",V.SupersededByNewNavigation),Ce;this.currentTransition=n,this.currentNavigation={id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?B(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!a&&l!=="reload"){let c="";return this.events.next(new Te(s.id,this.urlSerializer.serialize(s.rawUrl),c,Mt.IgnoredSameUrlNavigation)),s.resolve(!1),Ce}if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(ie(c=>(this.events.next(new qe(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Ce:Promise.resolve(c))),gl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),L(c=>{n.targetSnapshot=c.targetSnapshot,n.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=B(h({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let u=new Ot(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:c,extractedUrl:u,source:f,restoredState:C,extras:w}=s,x=new qe(c,this.urlSerializer.serialize(u),f,C);this.events.next(x);let F=Ri(this.rootComponentType).snapshot;return this.currentTransition=n=B(h({},s),{targetSnapshot:F,urlAfterRedirects:u,extras:B(h({},w),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,g(n)}else{let c="";return this.events.next(new Te(s.id,this.urlSerializer.serialize(s.extractedUrl),c,Mt.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ce}}),L(s=>{let a=new xn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),T(s=>(this.currentTransition=n=B(h({},s),{guards:Pa(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n)),Wa(this.environmentInjector,s=>this.events.next(s)),L(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw zn(this.urlSerializer,s.guardsResult);let a=new Dn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(a)}),Ge(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",V.GuardRejected),!1)),_r(s=>{if(s.guards.canActivateChecks.length!==0)return g(s).pipe(L(a=>{let l=new $n(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),ie(a=>{let l=!1;return g(a).pipe(ml(this.paramsInheritanceStrategy,this.environmentInjector),L({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(a,"",V.NoDataFromResolver)}}))}),L(a=>{let l=new Mn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}))}),_r(s=>{let a=l=>{let c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(L(u=>{l.component=u}),T(()=>{})));for(let u of l.children)c.push(...a(u));return c};return Gt(a(s.targetSnapshot.root)).pipe(Qn(null),Ze(1))}),_r(()=>this.afterPreactivation()),ie(()=>{let{currentSnapshot:s,targetSnapshot:a}=n,l=this.createViewTransition?.(this.environmentInjector,s.root,a.root);return l?J(l).pipe(T(()=>n)):g(n)}),T(s=>{let a=$a(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=B(h({},s),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),L(()=>{this.events.next(new kt)}),Aa(this.rootContexts,e.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Ze(1),L({next:s=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ye(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),Zt(this.transitionAbortSubject.pipe(L(s=>{throw s}))),Le(()=>{!r&&!i&&this.cancelNavigationTransition(n,"",V.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),we(s=>{if(this.destroyed)return n.resolve(!1),Ce;if(i=!0,ki(s))this.events.next(new be(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),ka(s)?this.events.next(new it(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let a=new ot(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let l=Se(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(l instanceof st){let{message:c,cancellationCode:u}=zn(this.urlSerializer,l);this.events.next(new be(n.id,this.urlSerializer.serialize(n.extractedUrl),c,u)),this.events.next(new it(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(a),s}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Ce}))}))}cancelNavigationTransition(e,n,r){let i=new be(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sl(t){return t!==Tn}var Wi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>d(Il),providedIn:"root"})}return t})(),Hn=class{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}},Il=(()=>{class t extends Hn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gi=(()=>{class t{urlSerializer=d(jt);options=d(ut,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(rn);urlHandlingStrategy=d(qn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ve;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let i=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,s=r??i;return s instanceof ve?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Ri(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>d(_l),providedIn:"root"})}return t})(),_l=(()=>{class t extends Gi{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof qe?this.updateStateMemento():e instanceof Te?this.commitTransition(n):e instanceof Ot?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof kt?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof be&&(e.code===V.GuardRejected||e.code===V.NoDataFromResolver)?this.restoreHistory(n):e instanceof ot?this.restoreHistory(n,!0):e instanceof ye&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:i,state:s}=n;if(this.location.isCurrentPathEqualTo(e)||i){let a=this.browserPageId,l=h(h({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=h(h({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,i=this.currentPageId-r;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===e.finalUrl&&i===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qr(t,o){t.events.pipe(Ge(e=>e instanceof ye||e instanceof be||e instanceof ot||e instanceof Te),T(e=>e instanceof ye||e instanceof Te?0:(e instanceof be?e.code===V.Redirect||e.code===V.SupersededByNewNavigation:!1)?2:1),Ge(e=>e!==2),Ze(1)).subscribe(()=>{o()})}var Tl={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},El={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},qt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(bo);stateManager=d(Gi);options=d(ut,{optional:!0})||{};pendingTasks=d(ao);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(qi);urlSerializer=d(jt);location=d(rn);urlHandlingStrategy=d(qn);_events=new K;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Wi);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Vt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Bt,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Gr;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(r!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof be&&n.code!==V.Redirect&&n.code!==V.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ye)this.navigated=!0;else if(n instanceof it){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=h({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Sl(r.source)},s);this.scheduleNavigation(a,Tn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}xl(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Tn,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r)=>{this.navigateToSyncWithBrowser(e,r,n)})}navigateToSyncWithBrowser(e,n,r){let i={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let l=h({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,n,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Vr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let C=r?r.snapshot:this.routerState.snapshot.root;f=Ii(C)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return _i(f,e,u,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=ke(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,Tn,null,n)}navigate(e,n={skipLocationChange:!1}){return Rl(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=h({},Tl):n===!1?r=h({},El):r=n,ke(e))return oi(this.currentUrlTree,e,r);let i=this.parseUrl(e);return oi(this.currentUrlTree,i,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,i])=>(i!=null&&(n[r]=i),n),{})}scheduleNavigation(e,n,r,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,C)=>{a=f,l=C});let u=this.pendingTasks.add();return qr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(f=>Promise.reject(f))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rl(t){for(let o=0;o<t.length;o++)if(t[o]==null)throw new A(4008,!1)}function xl(t){return!(t instanceof kt)&&!(t instanceof it)}var Zi=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new K;constructor(e,n,r,i,s,a){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof ye&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(ke(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(e!==0||n||r||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:ho(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,i=this.el.nativeElement;n!==null?r.setAttribute(i,e,n):r.removeAttribute(i,e)}get urlTree(){return this.routerLinkInput===null?null:ke(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)($e(qt),$e(Ee),so("tabindex"),$e(fo),$e(Kt),$e(Do))};static \u0275dir=pe({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&Me("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&y("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",O],skipLocationChange:[2,"skipLocationChange","skipLocationChange",O],replaceUrl:[2,"replaceUrl","replaceUrl",O],routerLink:"routerLink"},features:[Ne]})}return t})();var $l=new j("");function Ml(t,...o){return ro([{provide:Vt,multi:!0,useValue:t},[],{provide:Ee,useFactory:Ol,deps:[qt]},{provide:yo,multi:!0,useFactory:kl},o.map(e=>e.\u0275providers)])}function Ol(t){return t.routerState.root}function Qi(t,o){return{\u0275kind:t,\u0275providers:o}}function kl(){let t=d(Qt);return o=>{let e=t.get(Co);if(o!==e.components[0])return;let n=t.get(qt),r=t.get(Al);t.get(Pl)===1&&n.initialNavigation(),t.get(Ll,null,Kn.Optional)?.setUpPreloading(),t.get($l,null,Kn.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Al=new j("",{factory:()=>new K}),Pl=new j("",{providedIn:"root",factory:()=>1});var Ll=new j("");function Nl(t){return Qi(5,[{provide:ut,useValue:t}])}function Fl(){return Qi(8,[zr,{provide:Bt,useExisting:zr}])}var Yi=class t{isLoading=Jn(!1);lastSearchValue="";foundDrinks$=new K;randomDrink$=new K;httpClient=d(Po);notify=d(un);fetchCocktailsByName(o){if(this.lastSearchValue===o)return this.foundDrinks$;let e="https://www.thecocktaildb.com/api/json/v1/1/search.php",n={s:o};return this.toggleLoading(!0),this.httpClient.get(e,{params:n}).pipe(T(r=>r.drinks||[]),L(r=>{this.foundDrinks$.next(r),this.lastSearchValue=o}),we(this.handleError.bind(this)),Le(()=>this.toggleLoading(!1)))}getRandomCocktail(){let o="https://www.thecocktaildb.com/api/json/v1/1/random.php";return this.toggleLoading(!0),this.httpClient.get(o).pipe(T(e=>e.drinks.at(0)),L(e=>this.randomDrink$.next(e)),we(this.handleError.bind(this)),Le(()=>this.toggleLoading(!1)))}handleError(o){let e=o instanceof Ao?o.message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C.";return this.notify.add({severity:"error",detail:e}),Pe(()=>o)}toggleLoading(o){this.isLoading.set(o)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})};var Ki=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let i=0;i<r.length;i++)e.classList.add(r[i])}else{let r=n.split(" ");for(let i=0;i<r.length;i++)e.className+=" "+r[i]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(i=>this.removeClass(e,i)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var i=0;i<n.length;i++){if(n[i]==e)return r;n[i].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],i=0;for(var s=0;s<r.length;s++){if(r[s]==e)return i;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&i++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",i=!0){e&&n&&(i&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let i=We=>{if(We)return getComputedStyle(We).getPropertyValue("position")==="relative"?We:i(We.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),f=this.getViewport(),w=i(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},x,F;l.top+a+s.height>f.height?(x=l.top-w.top-s.height,e.style.transformOrigin="bottom",l.top+x<0&&(x=-1*l.top)):(x=a+l.top-w.top,e.style.transformOrigin="top");let Y=l.left+s.width-f.width,dt=l.left-w.left;s.width>f.width?F=(l.left-w.left)*-1:Y>0?F=dt-Y:F=l.left-w.left,e.style.top=x+"px",e.style.left=F+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=i.height,a=i.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),f=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),w=this.getViewport(),x,F;u.top+l+s>w.height?(x=u.top+f-s,e.style.transformOrigin="bottom",x<0&&(x=f)):(x=l+u.top+f,e.style.transformOrigin="top"),u.left+a>w.width?F=Math.max(0,u.left+C+c-a):F=u.left+C,e.style.top=x+"px",e.style.left=F+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let f=this.findSingle(a,u);f&&s(f)&&n.push(f)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,f=e.scrollTop,C=e.clientHeight,w=this.getOuterHeight(n);u<0?e.scrollTop=f+u:u+w>C&&(e.scrollTop=f+u-C+w)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,i=0,s=function(){i=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,i=50,s=n,a=i/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,i=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let i=getComputedStyle(e);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||i.clientWidth,a=e.innerHeight||r.clientHeight||i.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var i=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),i=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let i=getComputedStyle(r);if(this.isVisible(r)&&i.display!="none"&&i.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),i=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?i=r.length-1:i=s-1:s!=-1&&s!==r.length-1&&(i=s+1)}return r[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let i=document.createElement(e);return this.setAttributes(i,n),i.append(...r),i}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(i,s)=>{let a=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let f=Array.isArray(c)?r(i,c):Object.entries(c).map(([C,w])=>i==="style"&&(w||w===0)?`${C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${w}`:w?C:void 0);l=f.length?l.concat(f.filter(C=>!!C)):l}}return l},a)};Object.entries(n).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):i==="pBind"?this.setAttributes(e,s):(s=i==="class"?[...new Set(r("class",s))].join(" ").trim():i==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=s),e.setAttribute(i,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var Xi=(()=>{class t extends G{autofocus=!1;_autofocus=!1;focused=!1;platformId=d(Fe);document=d(H);host=d(Kt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ln(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Ki.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275dir=pe({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",O],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[M]})}return t})();var Ul=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,jl={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":ur(t.value)&&String(t.value).length===1,"p-badge-dot":_e(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Ji=(()=>{class t extends ge{name="badge";theme=Ul;classes=jl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Wr=(()=>{class t extends G{styleClass=he();style=he();badgeSize=he();size=he();severity=he();value=he();badgeDisabled=he(!1,{transform:O});_componentStyle=d(Ji);containerClass=nn(()=>{let e="p-badge p-component";return ur(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),_e(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(Xt(r.style()),P(r.containerClass()),wo("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[le([Ji]),M],decls:1,vars:1,template:function(n,r){n&1&&Ue(0),n&2&&Ke(r.value())},dependencies:[Ie,W],encapsulation:2,changeDetection:0})}return t})(),es=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=se({imports:[Wr,W,W]})}return t})();var Bl=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Hl={root:"p-ink"},ts=(()=>{class t extends ge{name="ripple";theme=Bl;classes=Hl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ns=(()=>{class t extends G{zone=d(de);_componentStyle=d(ts);animationListener;mouseDownListener;timeout;constructor(){super(),sr(()=>{ln(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Je(n,"p-ink-active"),!lr(n)&&!cr(n)){let a=Math.max(Lo(this.el.nativeElement),Fo(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=No(this.el.nativeElement),i=e.pageX-r.left+this.document.body.scrollTop-cr(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-lr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),cn(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Je(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Je(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Je(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Uo(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=pe({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[le([ts]),M]})}return t})();var Vl=["content"],ql=["loading"],Wl=["icon"],Gl=["*"],os=t=>({class:t});function Zl(t,o){t&1&&bt(0)}function Ql(t,o){if(t&1&&S(0,"span",8),t&2){let e=D(3);p("ngClass",e.iconClass()),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Yl(t,o){if(t&1&&S(0,"SpinnerIcon",9),t&2){let e=D(3);p("styleClass",e.spinnerIconClass())("spin",!0),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Kl(t,o){if(t&1&&(Qe(0),z(1,Ql,1,3,"span",6)(2,Yl,1,4,"SpinnerIcon",7),Ye()),t&2){let e=D(2);b(),p("ngIf",e.loadingIcon),b(),p("ngIf",!e.loadingIcon)}}function Xl(t,o){}function Jl(t,o){if(t&1&&z(0,Xl,0,0,"ng-template",10),t&2){let e=D(2);p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ec(t,o){if(t&1&&(Qe(0),z(1,Kl,3,2,"ng-container",2)(2,Jl,1,1,null,5),Ye()),t&2){let e=D();b(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),b(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Xe(3,os,e.iconClass()))}}function tc(t,o){if(t&1&&S(0,"span",8),t&2){let e=D(2);P(e.icon),p("ngClass",e.iconClass()),y("data-pc-section","icon")}}function nc(t,o){}function rc(t,o){if(t&1&&z(0,nc,0,0,"ng-template",10),t&2){let e=D(2);p("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function oc(t,o){if(t&1&&(Qe(0),z(1,tc,1,4,"span",11)(2,rc,1,1,null,5),Ye()),t&2){let e=D();b(),p("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),b(),p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Xe(3,os,e.iconClass()))}}function ic(t,o){if(t&1&&(E(0,"span",12),Ue(1),R()),t&2){let e=D();y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),b(),Ke(e.label)}}function sc(t,o){if(t&1&&S(0,"p-badge",13),t&2){let e=D();p("value",e.badge)("severity",e.badgeSeverity)}}var ac=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,lc={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},rs=(()=>{class t extends ge{name="button";theme=ac;classes=lc;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var cc=(()=>{class t extends G{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return _e(this.fluid)?!!n:this.fluid}_componentStyle=d(rs);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let i in r)this[i]=r[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(n,r,i){if(n&1&&(fe(i,Vl,5),fe(i,ql,5),fe(i,Wl,5),fe(i,dn,4)),n&2){let s;ne(s=re())&&(r.contentTemplate=s.first),ne(s=re())&&(r.loadingIconTemplate=s.first),ne(s=re())&&(r.iconTemplate=s.first),ne(s=re())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",O],loading:[2,"loading","loading",O],loadingIcon:"loadingIcon",raised:[2,"raised","raised",O],rounded:[2,"rounded","rounded",O],text:[2,"text","text",O],plain:[2,"plain","plain",O],severity:"severity",outlined:[2,"outlined","outlined",O],link:[2,"link","link",O],tabindex:[2,"tabindex","tabindex",je],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",O],fluid:[2,"fluid","fluid",O],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[le([rs]),M,Ne],ngContentSelectors:Gl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(en(),E(0,"button",0),Me("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),tn(1),z(2,Zl,1,0,"ng-container",1)(3,ec,3,5,"ng-container",2)(4,oc,3,5,"ng-container",2)(5,ic,2,3,"span",3)(6,sc,1,2,"p-badge",4),R()),n&2&&(p("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),y("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),b(2),p("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),b(),p("ngIf",r.loading),b(),p("ngIf",!r.loading),b(),p("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),b(),p("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[Ie,yt,on,an,sn,ns,Xi,Jo,es,Wr,W],encapsulation:2,changeDetection:0})}return t})(),ap=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=se({imports:[Ie,cc,W,W]})}return t})();function uc(t){t||(io(uc),t=d(Yt));let o=new Qr(e=>t.onDestroy(e.next.bind(e)));return e=>e.pipe(Zt(o))}export{Cr as a,bs as b,ye as c,Ee as d,jr as e,qt as f,Zi as g,Ml as h,Nl as i,Fl as j,Yi as k,Ki as l,oe as m,ei as n,cc as o,ap as p,uc as q,vn as r,na as s,Gu as t};
