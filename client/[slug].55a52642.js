import{S as s,i as t,s as a,e,a as n,c as o,y as r,b as c,g as i,h as l,f as g,d as $,k as f,m,l as p,n as u,p as h,q as d,r as w,t as y,j as E,o as j}from"./client.c41dfe85.js";import"./Image.5d61160f.js";import{c as B}from"./BlogPostCard.5bb94481.js";import{S as x}from"./SEO.092c8d63.js";import{B as T,a as b,b as v}from"./BlogPostFilters.8bc60bef.js";function P(s){let t,a,n,o;return{c(){t=e("h1"),a=y("Posts tagged with\n    "),n=e("span"),o=y(s[2]),this.h()},l(e){t=c(e,"H1",{});var r=$(t);a=E(r,"Posts tagged with\n    "),n=c(r,"SPAN",{class:!0});var l=$(n);o=E(l,s[2]),l.forEach(i),r.forEach(i),this.h()},h(){f(n,"class","underline")},m(s,e){p(s,t,e),m(t,a),m(t,n),m(n,o)},p:j,d(s){s&&i(t)}}}function S(s){let t,a,y,E,j,B,S,k,A,I,R,q,C,J;return document.title=t=s[2]+" | Ricky Januari",j=new x({}),S=new T({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),I=new b({props:{posts:s[0],filteredByTag:!0}}),C=new v({props:{posts:s[1]}}),{c(){a=e("meta"),E=n(),o(j.$$.fragment),B=n(),o(S.$$.fragment),k=n(),A=e("section"),o(I.$$.fragment),R=n(),q=e("aside"),o(C.$$.fragment),this.h()},l(s){const t=r('[data-svelte="svelte-1q95sii"]',document.head);a=c(t,"META",{name:!0,content:!0}),t.forEach(i),E=l(s),g(j.$$.fragment,s),B=l(s),g(S.$$.fragment,s),k=l(s),A=c(s,"SECTION",{class:!0});var e=$(A);g(I.$$.fragment,e),R=l(e),q=c(e,"ASIDE",{class:!0});var n=$(q);g(C.$$.fragment,n),n.forEach(i),e.forEach(i),this.h()},h(){f(a,"name","description"),f(a,"content",y="Posts tagged with "+s[2]+"."),f(q,"class","w-full mt-8 lg:mt-0 lg:w-3/12"),f(A,"class","container flex flex-wrap mh-container")},m(s,t){m(document.head,a),p(s,E,t),u(j,s,t),p(s,B,t),u(S,s,t),p(s,k,t),p(s,A,t),u(I,A,null),m(A,R),m(A,q),u(C,q,null),J=!0},p(s,[a]){(!J||4&a)&&t!==(t=s[2]+" | Ricky Januari")&&(document.title=t);const e={};16&a&&(e.$$scope={dirty:a,ctx:s}),S.$set(e);const n={};1&a&&(n.posts=s[0]),I.$set(n);const o={};2&a&&(o.posts=s[1]),C.$set(o)},i(s){J||(h(j.$$.fragment,s),h(S.$$.fragment,s),h(I.$$.fragment,s),h(C.$$.fragment,s),J=!0)},o(s){d(j.$$.fragment,s),d(S.$$.fragment,s),d(I.$$.fragment,s),d(C.$$.fragment,s),J=!1},d(s){i(a),s&&i(E),w(j,s),s&&i(B),w(S,s),s&&i(k),s&&i(A),w(I),w(C)}}}async function k({params:s}){try{const t=await this.fetch("blog.json"),a=await t.json(),e=a.filter(t=>{if(!t.tags)return[];return new RegExp(t.tags.join("|"),"i").test(B(s.slug))});return{posts:a,postsByTag:e,slug:s.slug}}catch(s){console.error(s)}}function A(s,t,a){let{postsByTag:e}=t,{slug:n}=t,{posts:o}=t;const r=B(n);return s.$$set=s=>{"postsByTag"in s&&a(0,e=s.postsByTag),"slug"in s&&a(3,n=s.slug),"posts"in s&&a(1,o=s.posts)},[e,o,r,n]}export default class extends s{constructor(s){super(),t(this,s,A,S,a,{postsByTag:0,slug:3,posts:1})}}export{k as preload};
