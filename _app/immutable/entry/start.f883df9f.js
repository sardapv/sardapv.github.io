import{n as ve,s as ot,o as Me,t as Ee}from"../chunks/scheduler.b732239f.js";function it(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function st(e){return e.split("%25").map(decodeURI).join("%25")}function ct(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const lt=["href","pathname","search","searchParams","toString","toJSON"];function ft(e,n){const c=new URL(e);for(const i of lt)Object.defineProperty(c,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return ut(c),c}function ut(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const dt="/__data.json";function pt(e){return e.replace(/\/$/,"")+dt}const Y=[];function Ie(e,n=ve){let c;const i=new Set;function d(s){if(ot(e,s)&&(e=s,c)){const h=!Y.length;for(const p of i)p[1](),Y.push(p,e);if(h){for(let p=0;p<Y.length;p+=2)Y[p][0](Y[p+1]);Y.length=0}}}function l(s){d(s(e))}function m(s,h=ve){const p=[s,h];return i.add(p),i.size===1&&(c=n(d,l)||ve),s(e),()=>{i.delete(p),i.size===0&&c&&(c(),c=null)}}return{set:d,update:l,subscribe:m}}var We;const z=((We=globalThis.__sveltekit_vctc0g)==null?void 0:We.base)??"";var Xe;const ht=((Xe=globalThis.__sveltekit_vctc0g)==null?void 0:Xe.assets)??z,gt="1688102165322",Ze="sveltekit:snapshot",Qe="sveltekit:scroll",V="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function ze(e){let n=e.baseURI;if(!n){const c=e.getElementsByTagName("base");n=c.length?c[0].href:e.URL}return n}function ne(){return{x:pageXOffset,y:pageYOffset}}function W(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Be={...pe,"":pe.hover};function et(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ge(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function ke(e,n){let c;try{c=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i=e instanceof SVGAElement?e.target.baseVal:e.target,d=!c||!!i||de(c,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(c==null?void 0:c.origin)===location.origin&&e.hasAttribute("download");return{url:c,external:d,target:i,download:l}}function ue(e){let n=null,c=null,i=null,d=null,l=null,m=null,s=e;for(;s&&s!==document.documentElement;)i===null&&(i=W(s,"preload-code")),d===null&&(d=W(s,"preload-data")),n===null&&(n=W(s,"keepfocus")),c===null&&(c=W(s,"noscroll")),l===null&&(l=W(s,"reload")),m===null&&(m=W(s,"replacestate")),s=et(s);function h(p){switch(p){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Be[i??"off"],preload_data:Be[d??"off"],keep_focus:h(n),noscroll:h(c),reload:h(l),replace_state:h(m)}}function He(e){const n=Ie(e);let c=!0;function i(){c=!0,n.update(m=>m)}function d(m){c=!1,n.set(m)}function l(m){let s;return n.subscribe(h=>{(s===void 0||c&&h!==s)&&m(s=h)})}return{notify:i,set:d,subscribe:l}}function mt(){const{set:e,subscribe:n}=Ie(!1);let c;async function i(){clearTimeout(c);try{const d=await fetch(`${ht}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const m=(await d.json()).version!==gt;return m&&(e(!0),clearTimeout(c)),m}catch{return!1}}return{subscribe:n,check:i}}function de(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}function tt(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Je(e,n){const c=JSON.stringify(n);try{sessionStorage[e]=c}catch{}}function _t(...e){let n=5381;for(const c of e)if(typeof c=="string"){let i=c.length;for(;i;)n=n*33^c.charCodeAt(--i)}else if(ArrayBuffer.isView(c)){const i=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);let d=i.length;for(;d;)n=n*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const he=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&re.delete(Le(e)),he(e,n));const re=new Map;function yt(e,n){const c=Le(e,n),i=document.querySelector(c);if(i!=null&&i.textContent){const{body:d,...l}=JSON.parse(i.textContent),m=i.getAttribute("data-ttl");return m&&re.set(c,{body:d,init:l,ttl:1e3*Number(m)}),Promise.resolve(new Response(d,l))}return he(e,n)}function wt(e,n,c){if(re.size>0){const i=Le(e,c),d=re.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(c==null?void 0:c.cache))return new Response(d.body,d.init);re.delete(i)}}return he(n,c)}function Le(e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const d=[];n.headers&&d.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&d.push(n.body),i+=`[data-hash="${_t(...d)}"]`}return i}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return n.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(l)return n.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const m=i.split(/\[(.+?)\](?!\])/);return"/"+m.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return Se(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Se(String.fromCharCode(...h.slice(2).split("-").map(O=>parseInt(O,16))));const g=bt.exec(h);if(!g)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,N,S,P]=g;return n.push({name:S,matcher:P,optional:!!C,rest:!!N,chained:N?p===1&&m[0]==="":!1}),N?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return Se(h)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(Et)}function St(e,n,c){const i={},d=e.slice(1);let l=0;for(let m=0;m<n.length;m+=1){const s=n[m];let h=d[m-l];if(s.chained&&s.rest&&l&&(h=d.slice(m-l,m+1).filter(p=>p).join("/"),l=0),h===void 0){s.rest&&(i[s.name]="");continue}if(!s.matcher||c[s.matcher](h)){i[s.name]=h;const p=n[m+1],g=d[m+1];p&&!p.rest&&p.optional&&g&&s.chained&&(l=0);continue}if(s.optional&&s.chained){l++;continue}return}if(!l)return i}function Se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Rt({nodes:e,server_loads:n,dictionary:c,matchers:i}){const d=new Set(n);return Object.entries(c).map(([s,[h,p,g]])=>{const{pattern:C,params:N}=vt(s),S={id:s,exec:P=>{const O=C.exec(P);if(O)return St(O,N,i)},errors:[1,...g||[]].map(P=>e[P]),layouts:[0,...p||[]].map(m),leaf:l(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function l(s){const h=s<0;return h&&(s=~s),[h,e[s]]}function m(s){return s===void 0?s:[d.has(s),e[s]]}}class ae{constructor(n,c){this.status=n,typeof c=="string"?this.body={message:c}:c?this.body=c:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(n,c){this.status=n,this.location=c}}function At(e){e.client}const M={url:He({}),page:He({}),navigating:Ie(null),updated:mt()};async function It(e){var n;for(const c in e)if(typeof((n=e[c])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([i,d])=>[i,await d])));return e}const Lt=-1,Ut=-2,Ot=-3,xt=-4,Nt=-5,Pt=-6;function Tt(e,n){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const c=e,i=Array(c.length);function d(l,m=!1){if(l===Lt)return;if(l===Ot)return NaN;if(l===xt)return 1/0;if(l===Nt)return-1/0;if(l===Pt)return-0;if(m)throw new Error("Invalid input");if(l in i)return i[l];const s=c[l];if(!s||typeof s!="object")i[l]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const h=s[0],p=n==null?void 0:n[h];if(p)return i[l]=p(d(s[1]));switch(h){case"Date":i[l]=new Date(s[1]);break;case"Set":const g=new Set;i[l]=g;for(let S=1;S<s.length;S+=1)g.add(d(s[S]));break;case"Map":const C=new Map;i[l]=C;for(let S=1;S<s.length;S+=2)C.set(d(s[S]),d(s[S+1]));break;case"RegExp":i[l]=new RegExp(s[1],s[2]);break;case"Object":i[l]=Object(s[1]);break;case"BigInt":i[l]=BigInt(s[1]);break;case"null":const N=Object.create(null);i[l]=N;for(let S=1;S<s.length;S+=2)N[s[S]]=d(s[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(s.length);i[l]=h;for(let p=0;p<s.length;p+=1){const g=s[p];g!==Ut&&(h[p]=d(g))}}else{const h={};i[l]=h;for(const p in s){const g=s[p];h[p]=d(g)}}return i[l]}return d(0)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const $t=new Set([...nt]);[...$t];function jt(e){return e.filter(n=>n!=null)}const Ct="x-sveltekit-invalidated",H=tt(Qe)??{},te=tt(Ze)??{};function Re(e){H[e]=ne()}function Dt(e,n){var Ve;const c=Rt(e),i=e.nodes[0],d=e.nodes[1];i(),d();const l=document.documentElement,m=[],s=[];let h=null;const p={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},C=!1,N=!1,S=!0,P=!1,O=!1,J=!1,B=!1,q,$=(Ve=history.state)==null?void 0:Ve[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const ge=H[$];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let F,oe,X;async function Ue(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),a=Q(t,!0);h=null;const o=oe={},r=a&&await ye(a);if(o===oe&&r){if(r.type==="redirect")return ie(new URL(r.location,t).href,{},[t.pathname],o);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Oe(t){s.some(a=>a==null?void 0:a.snapshot)&&(te[t]=s.map(a=>{var o;return(o=a==null?void 0:a.snapshot)==null?void 0:o.capture()}))}function xe(t){var a;(a=te[t])==null||a.forEach((o,r)=>{var f,u;(u=(f=s[r])==null?void 0:f.snapshot)==null||u.restore(o)})}function Ne(){Re($),Je(Qe,H),Oe($),Je(Ze,te)}async function ie(t,{noScroll:a=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:u=!1},y,w){return typeof t=="string"&&(t=new URL(t,ze(document))),fe({url:t,scroll:a?ne():null,keepfocus:r,redirect_chain:y,details:{state:f,replaceState:o},nav_token:w,accepted:()=>{u&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(t){return h={id:t.id,promise:ye(t).then(a=>(a.type==="loaded"&&a.state.error&&(h=null),a))},h.promise}async function se(...t){const o=c.filter(r=>t.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}function Te(t){var r;g=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),F=t.props.page,q=new e.root({target:n,props:{...t.props,stores:M,components:s},hydrate:!0}),xe($);const o={from:null,to:{params:g.params,route:{id:((r=g.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(f=>f(o)),N=!0}async function Z({url:t,params:a,branch:o,status:r,error:f,route:u,form:y}){let w="never";for(const v of o)(v==null?void 0:v.slash)!==void 0&&(w=v.slash);t.pathname=it(t.pathname,w),t.search=t.search;const E={type:"loaded",state:{url:t,params:a,branch:o,error:f,route:u},props:{constructors:jt(o).map(v=>v.node.component)}};y!==void 0&&(E.props.form=y);let b={},R=!F,A=0;for(let v=0;v<Math.max(o.length,g.branch.length);v+=1){const _=o[v],x=g.branch[v];(_==null?void 0:_.data)!==(x==null?void 0:x.data)&&(R=!0),_&&(b={...b,..._.data},R&&(E.props[`data_${A}`]=b),A+=1)}return(!g.url||t.href!==g.url.href||g.error!==f||y!==void 0&&y!==F.form||R)&&(E.props.page={error:f,params:a,route:{id:(u==null?void 0:u.id)??null},status:r,url:new URL(t),form:y??null,data:R?b:F.data}),E}async function me({loader:t,parent:a,url:o,params:r,route:f,server_data_node:u}){var b,R,A;let y=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((b=E.universal)!=null&&b.load){let U=function(..._){for(const x of _){const{href:T}=new URL(x,o);w.dependencies.add(T)}};const v={route:{get id(){return w.route=!0,f.id}},params:new Proxy(r,{get:(_,x)=>(w.params.add(x),_[x])}),data:(u==null?void 0:u.data)??null,url:ft(o,()=>{w.url=!0}),async fetch(_,x){let T;_ instanceof Request?(T=_.url,x={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...x}):T=_;const D=new URL(T,o);return U(D.href),D.origin===o.origin&&(T=D.href.slice(o.origin.length)),N?wt(T,D.href,x):yt(T,x)},setHeaders:()=>{},depends:U,parent(){return w.parent=!0,a()}};y=await E.universal.load.call(null,v)??null,y=y?await It(y):null}return{node:E,loader:t,server:u,universal:(R=E.universal)!=null&&R.load?{type:"data",data:y,uses:w}:null,data:y??(u==null?void 0:u.data)??null,slash:((A=E.universal)==null?void 0:A.trailingSlash)??(u==null?void 0:u.slash)}}function $e(t,a,o,r,f){if(B)return!0;if(!r)return!1;if(r.parent&&t||r.route&&a||r.url&&o)return!0;for(const u of r.params)if(f[u]!==g.params[u])return!0;for(const u of r.dependencies)if(m.some(y=>y(new URL(u))))return!0;return!1}function _e(t,a){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?a??null:null}async function ye({id:t,invalidating:a,url:o,params:r,route:f}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:u,layouts:y,leaf:w}=f,E=[...y,w];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const R=g.url?t!==g.url.pathname+g.url.search:!1,A=g.route?f.id!==g.route.id:!1;let U=!1;const v=E.map((k,L)=>{var G;const I=g.branch[L],j=!!(k!=null&&k[0])&&((I==null?void 0:I.loader)!==k[1]||$e(U,A,R,(G=I.server)==null?void 0:G.uses,r));return j&&(U=!0),j});if(v.some(Boolean)){try{b=await Ye(o,v)}catch(k){return ce({status:k instanceof ae?k.status:500,error:await ee(k,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(b.type==="redirect")return b}const _=b==null?void 0:b.nodes;let x=!1;const T=E.map(async(k,L)=>{var we;if(!k)return;const I=g.branch[L],j=_==null?void 0:_[L];if((!j||j.type==="skip")&&k[1]===(I==null?void 0:I.loader)&&!$e(x,A,R,(we=I.universal)==null?void 0:we.uses,r))return I;if(x=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:k[1],url:o,params:r,route:f,parent:async()=>{var Fe;const qe={};for(let be=0;be<L;be+=1)Object.assign(qe,(Fe=await T[be])==null?void 0:Fe.data);return qe},server_data_node:_e(j===void 0&&k[0]?{type:"skip"}:j??null,k[0]?I==null?void 0:I.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await T[k])}catch(L){if(L instanceof Ke)return{type:"redirect",location:L.location};let I=500,j;if(_!=null&&_.includes(L))I=L.status??I,j=L.error;else if(L instanceof ae)I=L.status,j=L.body;else{if(await M.updated.check())return await K(o);j=await ee(L,{params:r,url:o,route:{id:f.id}})}const G=await je(k,D,u);return G?await Z({url:o,params:r,branch:D.slice(0,G.idx).concat(G.node),status:I,error:j,route:f}):await De(o,{id:f.id},j,I)}else D.push(void 0);return await Z({url:o,params:r,branch:D,status:200,error:null,route:f,form:a?void 0:null})}async function je(t,a,o){for(;t--;)if(o[t]){let r=t;for(;!a[r];)r-=1;try{return{idx:r+1,node:{node:await o[t](),loader:o[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:a,url:o,route:r}){const f={};let u=null;if(e.server_loads[0]===0)try{const b=await Ye(o,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;u=b.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||C)&&await K(o)}const w=await me({loader:i,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:_e(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await Z({url:o,params:f,branch:[w,E],status:t,error:a,route:null})}function Q(t,a){if(de(t,z))return;const o=le(t);for(const r of c){const f=r.exec(o);if(f)return{id:t.pathname+t.search,invalidating:a,route:r,params:ct(f),url:t}}}function le(t){return st(t.pathname.slice(z.length)||"/")}function Ce({url:t,type:a,intent:o,delta:r}){var w,E;let f=!1;const u={from:{params:g.params,route:{id:((w=g.route)==null?void 0:w.id)??null},url:g.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((E=o==null?void 0:o.route)==null?void 0:E.id)??null},url:t},willUnload:!o,type:a};r!==void 0&&(u.delta=r);const y={...u,cancel:()=>{f=!0}};return O||p.before_navigate.forEach(b=>b(y)),f?null:u}async function fe({url:t,scroll:a,keepfocus:o,redirect_chain:r,details:f,type:u,delta:y,nav_token:w={},accepted:E,blocked:b}){var T,D,k;const R=Q(t,!1),A=Ce({url:t,type:u,delta:y,intent:R});if(!A){b();return}const U=$;E(),O=!0,N&&M.navigating.set(A),oe=w;let v=R&&await ye(R);if(!v){if(de(t,z))return await K(t);v=await De(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,oe!==w)return!1;if(v.type==="redirect")if(r.length>10||r.includes(t.pathname))v=await ce({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(v.location,t).href,{},[...r,t.pathname],w),!1;else((T=v.props.page)==null?void 0:T.status)>=400&&await M.updated.check()&&await K(t);if(m.length=0,B=!1,P=!0,Re(U),Oe(U),(D=v.props.page)!=null&&D.url&&v.props.page.url.pathname!==t.pathname&&(t.pathname=(k=v.props.page)==null?void 0:k.url.pathname),f){const L=f.replaceState?0:1;if(f.state[V]=$+=L,history[f.replaceState?"replaceState":"pushState"](f.state,"",t),!f.replaceState){let I=$+1;for(;te[I]||H[I];)delete te[I],delete H[I],I+=1}}h=null,N?(g=v.state,v.props.page&&(v.props.page.url=t),q.$set(v.props)):Te(v);const{activeElement:_}=document;if(await Ee(),S){const L=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));a?scrollTo(a.x,a.y):L?L.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==_&&document.activeElement!==document.body;!o&&!x&&Ae(),S=!0,v.props.page&&(F=v.props.page),O=!1,u==="popstate"&&xe($),p.after_navigate.forEach(L=>L(A)),M.navigating.set(null),P=!1}async function De(t,a,o,r){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await ce({status:r,error:o,url:t,route:a}):await K(t)}function K(t){return location.href=t.href,new Promise(()=>{})}function rt(){let t;l.addEventListener("mousemove",u=>{const y=u.target;clearTimeout(t),t=setTimeout(()=>{r(y,2)},20)});function a(u){r(u.composedPath()[0],1)}l.addEventListener("mousedown",a),l.addEventListener("touchstart",a,{passive:!0});const o=new IntersectionObserver(u=>{for(const y of u)y.isIntersecting&&(se(le(new URL(y.target.href))),o.unobserve(y.target))},{threshold:0});function r(u,y){const w=Ge(u,l);if(!w)return;const{url:E,external:b,download:R}=ke(w,z);if(b||R)return;const A=ue(w);if(!A.reload)if(y<=A.preload_data){const U=Q(E,!1);U&&Pe(U)}else y<=A.preload_code&&se(le(E))}function f(){o.disconnect();for(const u of l.querySelectorAll("a")){const{url:y,external:w,download:E}=ke(u,z);if(w||E)continue;const b=ue(u);b.reload||(b.preload_code===pe.viewport&&o.observe(u),b.preload_code===pe.eager&&se(le(y)))}}p.after_navigate.push(f),f()}function ee(t,a){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:a})??{message:a.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Me(()=>(p.after_navigate.push(t),()=>{const a=p.after_navigate.indexOf(t);p.after_navigate.splice(a,1)}))},before_navigate:t=>{Me(()=>(p.before_navigate.push(t),()=>{const a=p.before_navigate.indexOf(t);p.before_navigate.splice(a,1)}))},disable_scroll_handling:()=>{(P||!N)&&(S=!1)},goto:(t,a={})=>ie(t,a,[]),invalidate:t=>{if(typeof t=="function")m.push(t);else{const{href:a}=new URL(t,location.href);m.push(o=>o.href===a)}return Ue()},invalidate_all:()=>(B=!0,Ue()),preload_data:async t=>{const a=new URL(t,ze(document)),o=Q(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);await Pe(o)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const a=new URL(location.href),{branch:o,route:r}=g;if(!r)return;const f=await je(g.branch.length,o,r.errors);if(f){const u=await Z({url:a,params:g.params,branch:o.slice(0,f.idx).concat(f.node),status:t.status??500,error:t.error,route:r});g=u.state,q.$set(u.props),Ee().then(Ae)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:t.data,status:t.status}}),await Ee(),q.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{var r;let o=!1;if(Ne(),!O){const f={from:{params:g.params,route:{id:((r=g.route)==null?void 0:r.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};p.before_navigate.forEach(u=>u(f))}o?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne()}),(t=navigator.connection)!=null&&t.saveData||rt(),l.addEventListener("click",a=>{var A;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const o=Ge(a.composedPath()[0],l);if(!o)return;const{url:r,external:f,target:u,download:y}=ke(o,z);if(!r)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const w=ue(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||y)return;if(f||w.reload){Ce({url:r,type:"link"})?O=!0:a.preventDefault();return}const[b,R]=r.href.split("#");if(R!==void 0&&b===location.href.split("#")[0]){if(g.url.hash===r.hash){a.preventDefault(),(A=o.ownerDocument.getElementById(R))==null||A.scrollIntoView();return}if(J=!0,Re($),g.url=r,M.page.set({...F,url:r}),M.page.notify(),!w.replace_state)return;J=!1,a.preventDefault()}fe({url:r,scroll:w.noscroll?ne():null,keepfocus:w.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:w.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),l.addEventListener("submit",a=>{if(a.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const u=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(de(u,z))return;const y=a.target,{keep_focus:w,noscroll:E,reload:b,replace_state:R}=ue(y);if(b)return;a.preventDefault(),a.stopPropagation();const A=new FormData(y),U=r==null?void 0:r.getAttribute("name");U&&A.append(U,(r==null?void 0:r.getAttribute("value"))??""),u.search=new URLSearchParams(A).toString(),fe({url:u,scroll:E?ne():null,keepfocus:w??!1,redirect_chain:[],details:{state:{},replaceState:R??u.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var o;if((o=a.state)!=null&&o[V]){if(a.state[V]===$)return;const r=H[a.state[V]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){H[$]=ne(),$=a.state[V],scrollTo(r.x,r.y);return}const f=a.state[V]-$;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=a.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:a,node_ids:o,params:r,route:f,data:u,form:y})=>{C=!0;const w=new URL(location.href);({params:r={},route:f={id:null}}=Q(w,!1)||{});let E;try{const b=o.map(async(U,v)=>{const _=u[v];return _!=null&&_.uses&&(_.uses=at(_.uses)),me({loader:e.nodes[U],url:w,params:r,route:f,parent:async()=>{const x={};for(let T=0;T<v;T+=1)Object.assign(x,(await b[T]).data);return x},server_data_node:_e(_)})}),R=await Promise.all(b),A=c.find(({id:U})=>U===f.id);if(A){const U=A.layouts;for(let v=0;v<U.length;v++)U[v]||R.splice(v,0,void 0)}E=await Z({url:w,params:r,branch:R,status:t,error:a,form:y,route:A??null})}catch(b){if(b instanceof Ke){await K(new URL(b.location,location.href));return}E=await ce({status:b instanceof ae?b.status:500,error:await ee(b,{url:w,params:r,route:f}),url:w,route:f})}Te(E)}}}async function Ye(e,n){const c=new URL(e);c.pathname=pt(e.pathname),c.searchParams.append(Ct,n.map(d=>d?"1":"0").join(""));const i=await he(c.href);if(!i.ok)throw new ae(i.status,await i.json());return new Promise(async d=>{var g;const l=new Map,m=i.body.getReader(),s=new TextDecoder;function h(C){return Tt(C,{Promise:N=>new Promise((S,P)=>{l.set(N,{fulfil:S,reject:P})})})}let p="";for(;;){const{done:C,value:N}=await m.read();if(C&&!p)break;for(p+=!N&&p?`
`:s.decode(N);;){const S=p.indexOf(`
`);if(S===-1)break;const P=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),P.type==="redirect")return d(P);if(P.type==="data")(g=P.nodes)==null||g.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=at(O.uses),O.data=h(O.data))}),d(P);else if(P.type==="chunk"){const{id:O,data:J,error:B}=P,q=l.get(O);l.delete(O),B?q.reject(h(B)):q.fulfil(h(J))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,c=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),c!==null?n.setAttribute("tabindex",c):n.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let l=0;l<i.rangeCount;l+=1)d.push(i.getRangeAt(l));setTimeout(()=>{if(i.rangeCount===d.length){for(let l=0;l<i.rangeCount;l+=1){const m=d[l],s=i.getRangeAt(l);if(m.commonAncestorContainer!==s.commonAncestorContainer||m.startContainer!==s.startContainer||m.endContainer!==s.endContainer||m.startOffset!==s.startOffset||m.endOffset!==s.endOffset)return}i.removeAllRanges()}})}}}async function qt(e,n,c){const i=Dt(e,n);At({client:i}),c?await i._hydrate(c):i.goto(location.href,{replaceState:!0}),i._start_router()}export{qt as start};
