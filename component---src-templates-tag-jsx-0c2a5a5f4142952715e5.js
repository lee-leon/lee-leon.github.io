(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",function(){return v});var n=r(1),a=r.n(n),o=r(0),i=r.n(o),u=r(266),c=r(264),l=r(276),f=r.n(l),d=r(265),s=r(277),p=r.n(s),m=r(274),g=r(267),x=r(308),b=Object(c.b)(u.a,{target:"egjujy50"})("color:",function(e){return e.theme.colors.white.light},";"),h=function(e){var t=e.pageContext.tag,r=e.data.allMarkdownRemark,n=r.edges,o=r.totalCount;return a.a.createElement(d.c,null,a.a.createElement(f.a,{title:t+" | "+p.a.siteTitle}),a.a.createElement(g.a,{title:t},o," ",1===o?"Beitrag":"Beiträge"," wurde",1===o?"":"n",' mit "',t,'" markiert'," ",a.a.createElement("br",null),a.a.createElement(b,{to:"/tags"},"Alle Tags")),a.a.createElement(d.a,null,n.map(function(e){return a.a.createElement(x.a,{key:e.node.frontmatter.title,title:e.node.frontmatter.title,category:e.node.frontmatter.category,path:e.node.fields.slug,date:e.node.frontmatter.date,timeToRead:e.node.timeToRead,tags:e.node.frontmatter.tags,excerpt:e.node.excerpt})})),a.a.createElement(m.a,null))};t.default=h,h.propTypes={pageContext:i.a.shape({tag:i.a.string.isRequired}).isRequired,data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array.isRequired})}).isRequired};var v="4203073627"},267:function(e,t,r){"use strict";r(271);var n=r(1),a=r.n(n),o=r(264),i=r(0),u=r.n(i),c=r(265),l=Object(o.b)("header",{target:"e1v9si0u0"})("background:",function(e){return e.theme.gradient.rightToLeft},";height:",function(e){return e.big?"650px":"450px"},";@media (max-width:",function(e){return e.theme.breakpoints.m},"){height:",function(e){return e.big?"600px":"400px"},";}@media (max-width:",function(e){return e.theme.breakpoints.s},"){height:",function(e){return e.big?"500px":"325px"},";}position:relative;overflow:hidden;"),f=Object(o.b)("div",{target:"e1v9si0u1"})("color:",function(e){return e.theme.colors.white.base},";z-index:1000;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;text-align:center;width:100%;max-width:",function(e){return e.theme.layout.base},";padding:0 2rem;margin-bottom:7rem;align-items:center;"),d=Object(o.b)("p",{target:"e1v9si0u2"})("max-width:650px;color:",function(e){return e.theme.colors.white.blue},";"),s=function(e){var t=e.children,r=e.title,n=e.big;return a.a.createElement(l,{big:n},a.a.createElement(f,null,a.a.createElement("h1",null,r),t&&a.a.createElement(d,null,t)),a.a.createElement(c.f,null))};t.a=s,s.propTypes={children:u.a.any,title:u.a.oneOfType([u.a.string,u.a.object]).isRequired,big:u.a.bool},s.defaultProps={big:!1,children:!1}},268:function(e,t,r){var n=r(269).Symbol;e.exports=n},269:function(e,t,r){var n=r(287),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},270:function(e,t,r){var n=r(286);e.exports=function(e){return null==e?"":n(e)}},272:function(e,t,r){var n=r(281)(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});e.exports=n},275:function(e,t,r){var n=r(268),a=r(290),o=r(291),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},279:function(e,t){var r=Array.isArray;e.exports=r},280:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},281:function(e,t,r){var n=r(282),a=r(283),o=r(292),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(o(a(t).replace(i,"")),e,"")}}},282:function(e,t){e.exports=function(e,t,r,n){var a=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r}},283:function(e,t,r){var n=r(284),a=r(270),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,n).replace(i,"")}},284:function(e,t,r){var n=r(285)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},285:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},286:function(e,t,r){var n=r(268),a=r(288),o=r(279),i=r(289),u=n?n.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(i(t))return c?c.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},287:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(137))},288:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}},289:function(e,t,r){var n=r(275),a=r(280);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},290:function(e,t,r){var n=r(268),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(e){}var a=i.call(e);return n&&(t?e[u]=r:delete e[u]),a}},291:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},292:function(e,t,r){var n=r(293),a=r(294),o=r(270),i=r(295);e.exports=function(e,t,r){return e=o(e),void 0===(t=r?void 0:t)?a(e)?i(e):n(e):e.match(t)||[]}},293:function(e,t){var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},294:function(e,t){var r=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return r.test(e)}},295:function(e,t){var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+r+"]",a="\\d+",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+i+")",d="(?:"+l+"|"+i+")",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+s+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,c].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*",m="(?:"+["[\\u2700-\\u27bf]",u,c].join("|")+")"+p,g=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,l+f,"$"].join("|")+")",l+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},301:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(264),i=r(272),u=r.n(i),c=r(0),l=r.n(c),f=r(266),d=r(297),s=Object(o.b)("div",{target:"e1868dal0"})("margin:1rem 0;display:flex;flex-direction:row;flex-wrap:wrap;a{background:",function(e){return e.theme.tint.black},";color:",function(e){return e.theme.colors.black.light},";font-size:0.9rem;padding:0.2rem 0.75rem;border-radius:",function(e){return e.theme.borderRadius.default},";margin:0.3rem 0.6rem 0.3rem 0;white-space:nowrap;&:hover{background:",function(e){return Object(d.a)(.35,e.theme.tint.black)},";color:",function(e){return Object(d.a)(.35,e.theme.colors.black.light)},";}}"),p=function(e){var t=e.tags;return a.a.createElement(s,null,t&&t.map(function(e){return a.a.createElement(f.a,{key:e,to:"/tags/"+u()(e)},a.a.createElement("span",null,e))}))};t.a=p,p.propTypes={tags:l.a.array.isRequired}},308:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(264),i=r(0),u=r.n(i),c=r(266),l=r(272),f=r.n(l),d=r(300),s=r(301),p=Object(o.b)("article",{target:"e1dv96pe0"})("display:flex;flex-direction:column;margin-bottom:4rem;margin-top:2rem;"),m=Object(o.b)("div",{target:"e1dv96pe1"})("h1{font-size:2rem;margin-bottom:1.25rem;display:inline-block;color:",function(e){return e.theme.colors.black.base},";transition:all ",function(e){return e.theme.transitions.default.duration},";&:hover{color:",function(e){return e.theme.colors.primary.base},";}}"),g=Object(o.b)("div",{target:"e1dv96pe2"})("color:",function(e){return e.theme.colors.black.lighter},";"),x=Object(o.b)("div",{target:"e1dv96pe3"})("margin-top:1rem;"),b=function(e){var t=e.category,r=e.path,n=e.title,o=e.date,i=e.timeToRead,u=e.tags,l=e.excerpt;return a.a.createElement(p,null,a.a.createElement(m,null,a.a.createElement(c.a,{to:r},a.a.createElement("h1",null,n)),a.a.createElement(g,null,o," — Lesezeit: ",i," Min. — ",a.a.createElement("span",{className:d.d},"Kategorie: "),a.a.createElement(c.a,{to:"/categories/"+f()(t)},t)),a.a.createElement(s.a,{tags:u}),a.a.createElement(x,null,l)))};t.a=b,b.propTypes={category:u.a.string.isRequired,path:u.a.string.isRequired,title:u.a.string.isRequired,date:u.a.string.isRequired,timeToRead:u.a.number.isRequired,tags:u.a.array.isRequired,excerpt:u.a.string.isRequired}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-0c2a5a5f4142952715e5.js.map