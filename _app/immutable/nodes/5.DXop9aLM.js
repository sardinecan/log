import{s as R,n as q}from"../chunks/scheduler.DaEglZbh.js";import{S as U,i as V,e as y,s as A,c as C,k as F,f as N,a as E,d as f,m as v,g as w,A as z,B as G,o as J,t as k,b as j,h as m,j as L}from"../chunks/index.B_-7WD2a.js";import{e as B}from"../chunks/each.D6YF6ztN.js";import{d as D}from"../chunks/dates.D2-NGLRx.js";const K=async({fetch:r})=>({notes:await(await r("/api/notes")).json()}),$=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function H(r,a,n){const i=r.slice();return i[4]=a[n],i}function M(r){let a,n,i,s=r[4].meta.category+"",c,u,h,g=r[4].meta.title+"",p,l,e,o=D(r[4].meta.date)+"",t,S,P;return{c(){a=y("a"),n=y("article"),i=y("span"),c=k(s),u=A(),h=y("span"),p=k(g),l=A(),e=y("span"),t=k(o),S=A(),this.h()},l(_){a=C(_,"A",{class:!0,href:!0});var d=E(a);n=C(d,"ARTICLE",{});var b=E(n);i=C(b,"SPAN",{class:!0});var T=E(i);c=j(T,s),T.forEach(f),u=N(b),h=C(b,"SPAN",{class:!0});var I=E(h);p=j(I,g),I.forEach(f),l=N(b),e=C(b,"SPAN",{class:!0});var O=E(e);t=j(O,o),O.forEach(f),b.forEach(f),S=N(d),d.forEach(f),this.h()},h(){v(i,"class","category"),v(h,"class","title"),v(e,"class","date"),v(a,"class","card"),v(a,"href",P=r[4].path)},m(_,d){w(_,a,d),m(a,n),m(n,i),m(i,c),m(n,u),m(n,h),m(h,p),m(n,l),m(n,e),m(e,t),m(a,S)},p(_,d){d&2&&s!==(s=_[4].meta.category+"")&&L(c,s),d&2&&g!==(g=_[4].meta.title+"")&&L(p,g),d&2&&o!==(o=D(_[4].meta.date)+"")&&L(t,o),d&2&&P!==(P=_[4].path)&&v(a,"href",P)},d(_){_&&f(a)}}}function Q(r){let a,n="Notes",i,s,c,u,h,g,p=B(r[1]),l=[];for(let e=0;e<p.length;e+=1)l[e]=M(H(r,p,e));return{c(){a=y("h1"),a.textContent=n,i=A(),s=y("input"),c=A(),u=y("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){a=C(e,"H1",{"data-svelte-h":!0}),F(a)!=="svelte-16r2evl"&&(a.textContent=n),i=N(e),s=C(e,"INPUT",{class:!0,type:!0,placeholder:!0}),c=N(e),u=C(e,"DIV",{class:!0});var o=E(u);for(let t=0;t<l.length;t+=1)l[t].l(o);o.forEach(f),this.h()},h(){v(s,"class","filter"),v(s,"type","text"),v(s,"placeholder","filtrer"),v(u,"class","cards")},m(e,o){w(e,a,o),w(e,i,o),w(e,s,o),z(s,r[0]),w(e,c,o),w(e,u,o);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(u,null);h||(g=G(s,"input",r[3]),h=!0)},p(e,[o]){if(o&1&&s.value!==e[0]&&z(s,e[0]),o&2){p=B(e[1]);let t;for(t=0;t<p.length;t+=1){const S=H(e,p,t);l[t]?l[t].p(S,o):(l[t]=M(S),l[t].c(),l[t].m(u,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=p.length}},i:q,o:q,d(e){e&&(f(a),f(i),f(s),f(c),f(u)),J(l,e),h=!1,g()}}}function W(r,a,n){let i,{data:s}=a,c;function u(){c=this.value,n(0,c)}return r.$$set=h=>{"data"in h&&n(2,s=h.data)},r.$$.update=()=>{r.$$.dirty&5&&n(1,i=c?s.notes.filter(h=>h.meta.title.toLowerCase().match(`${c}.*`)||h.meta.category.toLowerCase().match(`${c}.*`)||h.meta.keywords.toLowerCase().match(`${c}.*`)):s.notes)},[c,i,s,u]}class ee extends U{constructor(a){super(),V(this,a,W,Q,R,{data:2})}}export{ee as component,$ as universal};
