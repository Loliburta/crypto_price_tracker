(this["webpackJsonprandom-coctail"]=this["webpackJsonprandom-coctail"]||[]).push([[0],{15:function(e,c,a){},16:function(e,c,a){},17:function(e,c,a){"use strict";a.r(c);var n=a(1),t=a.n(n),s=a(5),r=a.n(s),i=a(3),o=a.n(i),l=a(6),j=a(4),m=a(7),d=a(8),u=a(0),p=function(e){var c=e.image,a=e.name,n=e.symbol,t=e.price,s=e.volume,r=e.priceChange,i=e.marketCap;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"coin__row",children:[Object(u.jsxs)("div",{className:"coin",children:[Object(u.jsx)("img",{className:"coin__image",src:c,alt:"altcoin icon"}),Object(u.jsx)("div",{className:"coin__name",children:a}),Object(u.jsx)("p",{className:"coin__symbol",children:n})]}),Object(u.jsxs)("div",{className:"coin__data",children:[Object(u.jsxs)("div",{className:"coin__price",children:["price ",t]}),Object(u.jsxs)("div",{className:"coin__volume",children:["volume ",s]}),r<0?Object(u.jsxs)("div",{className:"coin__change--down",children:[r.toFixed(2),"%"]}):Object(u.jsxs)("div",{className:"coin__change--up",children:["+",r.toFixed(2),"%"]}),Object(u.jsxs)("div",{className:"coin__marketcap",children:["Market Cap: $",i]})]})]})})},b=(a(15),function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),a=c[0],t=c[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],b=r[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a),t(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"searchbar__text",children:"Search a currency"}),Object(u.jsxs)("div",{className:"searchbar",children:[Object(u.jsx)(m.Icon,{className:"searchbar__icon",icon:d.a}),Object(u.jsx)("input",{type:"text",placeholder:"Search",className:"searchbar__input",onChange:function(e){b(e.target.value)}})]}),Object(u.jsx)("div",{children:h.map((function(e){return Object(u.jsx)(p,{name:e.name,image:e.image,price:e.current_price,symbol:e.symbol,marketCap:e.market_cap,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))})]})});a(16);r.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0a43d73f.chunk.js.map