(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[4],{79:function(e,t,n){e.exports={"note-detail":"note-detail_note-detail__300Me"}},82:function(e,t,n){e.exports={catalog:"mdCatalog_catalog__3r75B",bg:"mdCatalog_bg__3VFDw",catelist:"mdCatalog_catelist__VMStr",head:"mdCatalog_head__3D1zK",desc:"mdCatalog_desc__2yoDB","cate-content":"mdCatalog_cate-content__2W5XA","cate-item":"mdCatalog_cate-item__3f3Dt",active:"mdCatalog_active__KtXHX","cate-show":"mdCatalog_cate-show__vLLRv"}},83:function(e,t,n){e.exports={export:"export_export__aMcjj",tools:"export_tools__2Eo1y","export-a":"export_export-a__37G93",toggle:"export_toggle__2iKaM"}},84:function(e,t,n){e.exports={"pic-preview":"index_pic-preview__1b7eL",content:"index_content__NRfaT",close:"index_close__28ht6",loading:"index_loading__gupw7","img-content":"index_img-content__3wpFr",text:"index_text__teOB-"}},85:function(e,t,n){e.exports={scroll2top:"scroll2top_scroll2top__2nPN3"}},99:function(e,t,n){"use strict";n.r(t);var a=n(58),c=n.n(a),o=n(59),i=n(12),r=n(0),l=n.n(r),s=n(3),u=n(55),d=n(56),m=n(57),f=n(24),v=n(85),b=n.n(v),p=function(e){var t=e.position;return l.a.createElement("div",{style:t,className:"btn ".concat(b.a.scroll2top),onClick:function(){var e=document.querySelector("#md-note");null===e||void 0===e||e.scrollIntoView({behavior:"smooth"})}},l.a.createElement(u.a,{icon:d.a}))},E=n(61),h=n(67),w=n(62),_=n(8),g=n.n(_),O=n(82),j=n.n(O),x=function(e){var t=e.mdtext,n=e.position,a=e.defaultActive,c=e.onCateClick,o=Object(w.a)(e,["mdtext","position","defaultActive","onCateClick"]),s=Object(r.useState)(!1),m=Object(i.a)(s,2),f=m[0],v=m[1],b=Object(r.useState)([]),p=Object(i.a)(b,2),E=p[0],h=p[1],_=Object(r.useState)(""),O=Object(i.a)(_,2),x=O[0],y=O[1],N=Object(r.useState)(""),k=Object(i.a)(N,2),C=k[0],L=k[1];Object(r.useEffect)((function(){C&&(document.title+="|".concat(C))}),[C]),Object(r.useEffect)((function(){a&&y(a)}),[a]),Object(r.useEffect)((function(){return S(),function(){I()}}),[]),Object(r.useEffect)((function(){function e(){f&&(window.innerWidth<1100&&(document.body.style.overflowY="auto"),v(!1),M("remove"))}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[f]),Object(r.useEffect)((function(){f?(document.body.style.overflowY="hidden",B(),T()):document.body.style.overflowY="auto",a&&B()}),[f,a]);var S=function(){var e=[],n=[],a=t.slice(t.indexOf("\n"),t.length);L(t.slice(0,t.indexOf("\n"))),a.split("\n## ").forEach((function(t){var a=t.substring(0,t.indexOf("\n")).trim(),c=t.split("\n### ");c.shift();var o=[];c.forEach((function(e){var t=e.substring(0,e.indexOf("\n")).trim();o.push({id:t,header:"catelog-".concat(t),label:t})}));var i={id:a,header:"catelog-".concat(a),label:a,child:[]};e.push(a),o.length>0&&(i.child=o,e=e.concat(o.map((function(e){return e.id})))),n.push(i)})),h((function(){return n.filter((function(e){return Boolean(e.id)}))}))},B=function(){var e=document.getElementById("catelog-".concat(a));null===e||void 0===e||e.scrollIntoView()},I=function(){return window.removeEventListener("click",P)},T=function(){return window.addEventListener("click",P)},P=function(){v(!1),I(),M("remove")},M=function(e){var t;null===(t=document.querySelector("#md-note"))||void 0===t||t.classList[e]("blur")},R=function(e){var t="".concat(j.a["cate-item"]," ").concat(x===e.id?j.a.active:"");return l.a.createElement("div",{"data-id":e.id,id:e.header,className:t,onClick:function(){return function(e){var t=document.getElementById(e.id);null===t||void 0===t||t.scrollIntoView(),y(e.id),null===c||void 0===c||c(e.id),setTimeout((function(){return v(!1)}),0)}(e)}},e.label)},W=Object(r.useMemo)((function(){return f?j.a["cate-show"]:""}),[f]);return g.a.createPortal(l.a.createElement("div",{id:"catalog",className:j.a.catalog,style:n},l.a.createElement(u.a,{className:"btn",icon:d.f,onClick:function(){M("add"),setTimeout((function(){return v(!0)}),0)}}),l.a.createElement("div",{className:j.a.bg,style:{display:f?"block":"none"}}),l.a.createElement("div",{className:"".concat(j.a.catelist," ").concat(W)},l.a.createElement("section",{className:j.a.head,title:C},"\u76ee\u5f55: ",C),l.a.createElement("section",{className:j.a["cate-content"]},E.length>0?E.map((function(e){var t,n;return l.a.createElement("ul",{key:e.id},R(e),e.child&&(null===(t=e.child)||void 0===t?void 0:t.length)>0&&(null===(n=e.child)||void 0===n?void 0:n.map((function(e){return l.a.createElement("ul",{key:e.id},R(e))}))))})):l.a.createElement((function(){return l.a.createElement("div",{className:j.a.desc},l.a.createElement("p",null,"\u4e00\u7ea7\u6807\u9898'#'\u4e3a\u6587\u7ae0\u540d\uff0c"),l.a.createElement("p",null,"\u4e8c\u7ea7\u6807\u9898'##'\u4e3a\u4e00\u7ea7\u76ee\u5f55\uff0c"),l.a.createElement("p",null,"\u4e09\u7ea7\u6807\u9898'###'\u4e3a\u4e09\u7ea7\u76ee\u5f55"))}),null))),o.children),document.body)},y=n(66),N=n(84),k=n.n(N),C=function(e){var t=e.show,n=e.src,a=e.alt,c=e.onClode;return Object(r.useEffect)((function(){var e=document.querySelector("#md-note"),n=document.querySelector("#catalog");return t?(e.classList.add("blur"),n.classList.add("blur"),document.body.style.overflowY="hidden"):(e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""),function(){e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""}}),[t]),g.a.createPortal(l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("section",{className:k.a["pic-preview"]},l.a.createElement("div",{className:k.a.content},l.a.createElement("button",{className:"btn ".concat(k.a.close),onClick:c},"X"),l.a.createElement("div",{className:k.a["img-content"]},n?l.a.createElement("img",{src:n,alt:a}):l.a.createElement("span",{className:k.a.loading},"\u6b63\u5728\u751f\u6210\u622a\u56fe\u3002\u3002\u3002")),l.a.createElement("div",{className:k.a.text},"\u5bfc\u51fa\u56fe\u7247\u9884\u89c8\uff0c\u53f3\u952e\u53e6\u5b58/\u957f\u6309\u4fdd\u5b58\uff01")))),document.body)},L=n(83),S=n.n(L),B=n(64);var I=function(e){e.id,e.position;var t=e.mdtext,a=Object(w.a)(e,["id","position","mdtext"]),s=Object(m.a)((function(e){return[e.theme]})).theme,f=Object(r.useState)(""),v=Object(i.a)(f,2),b=v[0],p=v[1],E=Object(r.useState)(""),h=Object(i.a)(E,2),_=h[0],g=h[1],O=Object(r.useState)(""),j=Object(i.a)(O,2),x=j[0],N=j[1],k=Object(r.useState)(!1),L=Object(i.a)(k,2),I=L[0],T=L[1],P=Object(r.useState)(!1),M=Object(i.a)(P,2),R=M[0],W=M[1],Y=Object(r.useState)(!1),z=Object(i.a)(Y,2),q=z[0],A=z[1],D=Object(r.useState)(!1),V=Object(i.a)(D,2),F=V[0],X=V[1];Object(r.useEffect)((function(){var e=t.substring(0,t.indexOf("\n")).split("# ")[1];N(e||"\u5bfc\u51fa")}),[]),Object(r.useEffect)((function(){function e(){!I&&window.innerWidth>=1100&&(T(!0),W(!1)),window.innerWidth<1100&&(T(!1),W(!0))}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var U=function(e,t){var a=t+50;e.style.width=a+"px",setTimeout(Object(o.a)(c.a.mark((function t(){var o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={scale:1,x:0,y:0,scrollX:0,scrollY:0,width:a,useCORS:!0,backgroundColor:"dark"===s?"#232426":"#fff"},R||(o.windowWidth=a),t.next=4,Promise.resolve().then(n.t.bind(null,54,7));case 4:i=t.sent,(0,i.default)(e,o).then((function(t){p((function(){return t.toDataURL("image/png")})),e.style.width="auto"}));case 7:case"end":return t.stop()}}),t)}))),100)},H=function e(){setTimeout((function(){return T(!1)}),0),window.removeEventListener("click",e)},K=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:_,className:"export-md",download:"".concat(x,".md"),hidden:!0},"\u5bfc\u51famd\u6587\u4ef6"),l.a.createElement("button",{className:"btn",onClick:function(e){return function(e){if(e.stopPropagation(),e.nativeEvent.stopPropagation(),!F){X(!0);var n=window.URL,a=new Blob([t],{type:"application/text"});g(n.createObjectURL(a)),setTimeout((function(){var e;null===(e=document.querySelector(".export-md"))||void 0===e||e.click(),X(!1)}),0)}}(e)}},"\u5bfc\u51famd\u6587\u4ef6",F?"...":""),l.a.createElement("button",{className:"btn",onClick:function(e){return function(e){if(e.stopPropagation(),!q){T(!1),A(!0);var t=document.getElementById("md-content"),n=0,a=null===t||void 0===t?void 0:t.querySelectorAll("pre>code");if(a){var c=Array.from(a).map((function(e){return e.offsetWidth}));n=Math.max.apply(Math,Object(y.a)(c)),console.log("maxCodeWidth: ",n),U(t,n)}}}(e)}},"\u5bfc\u51fa\u56fe\u7247"),a.children)};return l.a.createElement("div",{className:S.a.export},l.a.createElement("button",{className:"btn ".concat(S.a.toggle),onClick:function(){T(!I),setTimeout((function(){I?window.removeEventListener("click",H):window.addEventListener("click",H)}),0)}},l.a.createElement(u.a,{icon:d.j})),R?l.a.createElement(B.a,{title:"",visible:I,onClose:function(){return T(!1)}},l.a.createElement("div",{className:S.a.tools},K())):l.a.createElement("div",{className:S.a.tools},K()),l.a.createElement(C,{show:q,src:b,alt:"".concat(x,".png"),onClode:function(){A(!1),p("")}}))},T=n(79),P=n.n(T);t.default=function(){Object(m.a)((function(e){return[e.theme]})).theme;var e=Object(E.a)((function(e){return[e.getNoteById,e.updateNoteById,e.fetchNoteById]})),t=e.getNoteById,n=e.updateNoteById,a=e.fetchNoteById,v=Object(s.useParams)().id,b=Object(s.useHistory)(),w=Object(s.useLocation)(),_=Object(r.useState)(""),g=Object(i.a)(_,2),O=g[0],j=g[1],y=Object(r.useState)(!1),N=Object(i.a)(y,2),k=N[0],C=N[1],L=Object(r.useState)(),S=Object(i.a)(L,2),B=S[0],T=S[1],M=Object(r.useState)(),R=Object(i.a)(M,2),W=R[0],Y=R[1];Object(r.useEffect)((function(){return z(),function(){window.removeEventListener("resize",q),window.removeEventListener("scroll",D)}}),[]);var z=function(){var e=Object(o.a)(c.a.mark((function e(){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(),window.addEventListener("resize",q),window.addEventListener("scroll",D),!(null===(o=t(v))||void 0===o?void 0:o.data)){e.next=7;break}return j(o.data),e.abrupt("return");case 7:return e.next=9,a(v);case 9:if(!(i=e.sent)){e.next=15;break}if(!i.substring(0,20).includes("<!DOCTYPE html>")){e.next=13;break}return e.abrupt("return");case 13:n(v,i),j(i);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=document.body.clientWidth,t=e>1100?{left:"".concat((e-1100)/2+800+20,"px")}:{right:"12px"};T(t)},A=function(e){if(e){var t=document.getElementById(e);null===t||void 0===t||t.scrollIntoView(),Y(e)}},D=function(){var e=document.documentElement.scrollTop;C((function(){return e>window.innerHeight}))};return l.a.createElement("div",{className:"center-content ".concat(P.a["note-detail"])},l.a.createElement("h4",{className:"border-1px-bottom title"},l.a.createElement("span",{onClick:function(){b.push("/")}},l.a.createElement(u.a,{icon:d.b,className:"back"}),"\u8be6\u60c5")),O?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{mdtext:O,onMdRendered:function(){var e=w.hash.substr(1,w.hash.length);setTimeout((function(){return A(decodeURI(e))}),0)}}),l.a.createElement(x,{mdtext:O,defaultActive:W,position:B,onCateClick:function(e){var t="/detail/".concat(v);b.replace({pathname:t,hash:e})}},l.a.createElement(I,{id:v,position:B,mdtext:O},l.a.createElement("a",{href:"./#/md-editor/".concat(v),className:"link"},l.a.createElement("button",{className:"btn"},"\u7f16\u8f91"))))):l.a.createElement(f.a,null),k&&l.a.createElement(p,{position:B}))}}}]);