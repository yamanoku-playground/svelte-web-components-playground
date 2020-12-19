var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(){return t="",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){const e={};for(const n of t)e[n.name]=n.value;return e}let m;function p(t){m=t}function $(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const g=[],y=[],w=[],b=[],k=Promise.resolve();let _=!1;function x(t){w.push(t)}let v=!1;const E=new Set;function C(){if(!v){v=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];p(e),M(e.$$)}for(p(null),g.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];E.has(e)||(E.add(e),e())}w.length=0}while(g.length);for(;b.length;)b.pop()();_=!1,v=!1,E.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const S=new Set;function j(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(s,c,i,u,l,f,d=[-1]){const h=m;p(s);const $=c.props||{},g=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let y=!1;if(g.ctx=i?i(s,$,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&j(s,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),c.target){if(c.hydrate){const t=(k=c.target,Array.from(k.childNodes));g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();c.intro&&((w=s.$$.fragment)&&w.i&&(S.delete(w),w.i(b))),function(t,n,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,s),x((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(x)}(s,c.target,c.anchor),C()}var w,b,k;p(h)}let H;function N(t,e,n){const o=t.slice();return o[4]=e[n],o}function T(t,e,n){const o=t.slice();return o[7]=e[n],o}function L(t){let e,n;return{c(){e=l("line"),d(e,"class","minor"),d(e,"y1","42"),d(e,"y2","45"),d(e,"transform",n="rotate("+6*(t[4]+t[7])+")")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}function O(e){let n,o,r,s=[1,2,3,4],c=[];for(let t=0;t<4;t+=1)c[t]=L(T(e,s,t));return{c(){n=l("line");for(let t=0;t<4;t+=1)c[t].c();r=f(),d(n,"class","major"),d(n,"y1","35"),d(n,"y2","45"),d(n,"transform",o="rotate("+30*e[4]+")")},m(t,e){i(t,n,e);for(let n=0;n<4;n+=1)c[n].m(t,e);i(t,r,e)},p:t,d(t){t&&a(n),u(c,t),t&&a(r)}}}function B(e){let n,o,r,s,f,h,m,p,$,g,y=[0,5,10,15,20,25,30,35,40,45,50,55],w=[];for(let t=0;t<12;t+=1)w[t]=O(N(e,y,t));return{c(){n=l("svg"),o=l("circle");for(let t=0;t<12;t+=1)w[t].c();r=l("line"),f=l("line"),m=l("g"),p=l("line"),$=l("line"),this.c=t,d(o,"class","clock-face"),d(o,"r","48"),d(r,"class","hour"),d(r,"y1","2"),d(r,"y2","-20"),d(r,"transform",s="rotate("+(30*e[0]+e[1]/2)+")"),d(f,"class","minute"),d(f,"y1","4"),d(f,"y2","-30"),d(f,"transform",h="rotate("+(6*e[1]+e[2]/10)+")"),d(p,"class","second"),d(p,"y1","10"),d(p,"y2","-38"),d($,"class","second-counterweight"),d($,"y1","10"),d($,"y2","2"),d(m,"transform",g="rotate("+6*e[2]+")"),d(n,"viewBox","-50 -50 100 100")},m(t,e){i(t,n,e),c(n,o);for(let t=0;t<12;t+=1)w[t].m(n,null);c(n,r),c(n,f),c(n,m),c(m,p),c(m,$)},p(t,[e]){3&e&&s!==(s="rotate("+(30*t[0]+t[1]/2)+")")&&d(r,"transform",s),6&e&&h!==(h="rotate("+(6*t[1]+t[2]/10)+")")&&d(f,"transform",h),4&e&&g!==(g="rotate("+6*t[2]+")")&&d(m,"transform",g)},i:t,o:t,d(t){t&&a(n),u(w,t)}}}function D(t,e,n){let o,r,s,c=new Date;return $((()=>{const t=setInterval((()=>{n(3,c=new Date)}),1e3);return()=>{clearInterval(t)}})),t.$$.update=()=>{8&t.$$.dirty&&n(0,o=c.getHours()),8&t.$$.dirty&&n(1,r=c.getMinutes()),8&t.$$.dirty&&n(2,s=c.getSeconds())},[o,r,s,c]}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class I extends H{constructor(t){super(),this.shadowRoot.innerHTML="<style>svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}</style>",A(this,{target:this.shadowRoot,props:h(this.attributes)},D,B,s,{}),t&&t.target&&i(t.target,this,t.anchor)}}return customElements.define("clock-component",I),I}();
//# sourceMappingURL=bundle.js.map
