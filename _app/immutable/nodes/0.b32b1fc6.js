import{s as w,n as u,c as S,d as k,e as H,u as B,g as q,f as G}from"../chunks/scheduler.a7dff244.js";import{S as y,i as v,g as _,h as g,x as $,a as h,f,y as K,k as N,z as b,r as L,s as T,u as j,c as C,v as M,d as p,t as d,w as x}from"../chunks/index.b034f966.js";import{p as P}from"../chunks/stores.6333e822.js";const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,X=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function Y(r){let t,o='<a href="/">Home</a> <a href="/now">Now</a> <a href="/blog">Blog</a> <a href="/links">Links</a>';return{c(){t=_("nav"),t.innerHTML=o},l(n){t=g(n,"NAV",{"data-svelte-h":!0}),$(t)!=="svelte-1j9j91j"&&(t.innerHTML=o)},m(n,a){h(n,t,a)},p:u,i:u,o:u,d(n){n&&f(t)}}}class z extends y{constructor(t){super(),v(this,t,null,Y,w,{})}}const{document:m}=Q;function A(r){let t,o="",n,a,i=`window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-2KY4XMBQL0');`;return{c(){t=_("script"),t.innerHTML=o,a=_("script"),a.textContent=i,this.h()},l(c){const s=K("svelte-j57hb7",m.head);t=g(s,"SCRIPT",{src:!0,"data-svelte-h":!0}),$(t)!=="svelte-1hbw1qk"&&(t.innerHTML=o),a=g(s,"SCRIPT",{"data-svelte-h":!0}),$(a)!=="svelte-1e04k7l"&&(a.textContent=i),s.forEach(f),this.h()},h(){t.async=!0,S(t.src,n="https://www.googletagmanager.com/gtag/js?id=G-2KY4XMBQL0")||N(t,"src",n)},m(c,s){b(m.head,t),b(m.head,a)},p:u,i:u,o:u,d(c){f(t),f(a)}}}function I(r,t,o){let n;return k(r,P,a=>o(0,n=a)),r.$$.update=()=>{r.$$.dirty&1&&typeof gtag<"u"&&gtag("config","G-2KY4XMBQL0",{page_title:document.title,page_path:n.url.pathname})},[n]}class O extends y{constructor(t){super(),v(this,t,I,A,w,{})}}function R(r){let t,o,n,a,i;t=new O({}),n=new z({});const c=r[1].default,s=H(c,r,r[0],null);return{c(){L(t.$$.fragment),o=T(),L(n.$$.fragment),a=T(),s&&s.c()},l(e){j(t.$$.fragment,e),o=C(e),j(n.$$.fragment,e),a=C(e),s&&s.l(e)},m(e,l){M(t,e,l),h(e,o,l),M(n,e,l),h(e,a,l),s&&s.m(e,l),i=!0},p(e,[l]){s&&s.p&&(!i||l&1)&&B(s,c,e,e[0],i?G(c,e[0],l,null):q(e[0]),null)},i(e){i||(p(t.$$.fragment,e),p(n.$$.fragment,e),p(s,e),i=!0)},o(e){d(t.$$.fragment,e),d(n.$$.fragment,e),d(s,e),i=!1},d(e){e&&(f(o),f(a)),x(t,e),x(n,e),s&&s.d(e)}}}function D(r,t,o){let{$$slots:n={},$$scope:a}=t;return r.$$set=i=>{"$$scope"in i&&o(0,a=i.$$scope)},[a,n]}class U extends y{constructor(t){super(),v(this,t,D,R,w,{})}}export{U as component,J as universal};
