(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return x});var r=a(1),i=a.n(r),n=a(0),o=a.n(n),l=a(266),s=a(278),d=a.n(s),c=a(268),u=a(267),f=a(301),m=a(304),h=a(308),p=a(299),b=a(275),g=Object(l.c)("0%{transform:scale(1);animation-timing-function:ease-in;}25%{animation-timing-function:ease-out;transform:scale(1.05);}50%{transform:scale(1.12);animation-timing-function:ease-in;}to{transform:scale(1);animation-timing-function:ease-out;}"),y=Object(l.b)("div",{target:"eitypi10"})("height:600px;position:relative;overflow:hidden;.gatsby-image-wrapper{height:600px;img{animation:",g," 30s infinite;}}@media (max-width:",function(e){return e.theme.breakpoints.m},"){height:500px;.gatsby-image-wrapper{height:500px;}}@media (max-width:",function(e){return e.theme.breakpoints.s},"){height:400px;.gatsby-image-wrapper{height:400px;}}"),w=Object(l.b)("div",{target:"eitypi11"})("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;",h.a,"{color:",function(e){return e.theme.colors.black.base}," !important;margin-bottom:2rem;text-align:center;flex-basis:calc(99.9% * 1 / 3 - 1rem);max-width:calc(99.9% * 1 / 3 - 1rem);width:calc(99.9% * 1 / 3 - 1rem);@media (max-width:750px){flex-basis:100%;max-width:100%;width:100%;margin-bottom:1.5rem;}}"),v=function(e){var t=e.pageContext,a=t.slug,r=t.left,n=t.right,o=e.data.markdownRemark,l=o.frontmatter,s=l.cover.childImageSharp.fluid;return l.id||(l.id=a),i.a.createElement(u.c,null,i.a.createElement(u.e,{postPath:a,postNode:o,postSEO:!0}),i.a.createElement(y,null,i.a.createElement(f.a,null,i.a.createElement("h1",null,l.title)),i.a.createElement(u.f,null),i.a.createElement(d.a,{fluid:s})),i.a.createElement(u.a,null,i.a.createElement(w,null,i.a.createElement(h.a,null,i.a.createElement("h2",null,"Kunde"),l.customer),i.a.createElement(h.a,null,i.a.createElement("h2",null,"Aufgabe"),l.task),i.a.createElement(h.a,null,i.a.createElement("h2",null,"Zeitraum"),l.time))),i.a.createElement(u.a,{type:"article"},i.a.createElement(u.b,{input:o.html})),i.a.createElement(u.a,null,i.a.createElement(u.d,{"aria-hidden":"true"}),i.a.createElement(f.b,null,"Weitere Projekte"),i.a.createElement(m.a,{left:r,right:n})),i.a.createElement(b.a,null,i.a.createElement("h1",null,"Packen wir's an!"),i.a.createElement(c.a,{to:"/kontakt"},i.a.createElement(p.a,{type:"primary"},"Projekt starten"))))};t.default=v,v.propTypes={pageContext:o.a.shape({slug:o.a.string.isRequired}).isRequired,data:o.a.shape({markdownRemark:o.a.object.isRequired}).isRequired};var x="1832022174"},278:function(e,t,a){"use strict";var r=a(17);t.__esModule=!0,t.default=void 0;var i,n=r(a(31)),o=r(a(51)),l=r(a(131)),s=r(a(71)),d=r(a(1)),c=r(a(0)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[],p=null,b=function(){if(null!==p)return p;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return p=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1";return"<img "+o+l+t+a+n+i+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},y=function(e){var t=e.style,a=e.onLoad,r=(0,l.default)(e,["style","onLoad"]);return d.default.createElement("img",(0,s.default)({},r,{onLoad:a,style:(0,s.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};y.propTypes={style:c.default.object,onLoad:c.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1;return!m(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),a.state={isVisible:r,imgLoaded:i,IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},a.render=function(){var e,t=this,a=u(this.props),r=a.title,i=a.alt,n=a.className,o=a.outerWrapperClassName,l=a.style,c=void 0===l?{}:l,f=a.imgStyle,m=void 0===f?{}:f,h=a.placeholderStyle,p=void 0===h?{}:h,w=a.fluid,v=a.fixed,x=a.backgroundColor,E=a.Tag;e="boolean"==typeof x?"lightgray":x;var k=(0,s.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},m,p),S=(0,s.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},m);if(w){var R=w;return R.srcWebp&&R.srcSetWebp&&b()&&(R.src=R.srcWebp,R.srcSet=R.srcSetWebp),d.default.createElement(E,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,{alt:i,title:r,src:R.base64,style:k}),R.tracedSVG&&d.default.createElement(y,{alt:i,title:r,src:R.tracedSVG,style:k}),e&&d.default.createElement(E,{title:r,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement(y,{alt:i,title:r,srcSet:R.srcSet,src:R.src,sizes:R.sizes,style:S,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:i,title:r},R))}})))}if(v){var j=v,O=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},c);return"inherit"===c.display&&delete O.display,j.srcWebp&&j.srcSetWebp&&b()&&(j.src=j.srcWebp,j.srcSet=j.srcSetWebp),d.default.createElement(E,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef},j.base64&&d.default.createElement(y,{alt:i,title:r,src:j.base64,style:k}),j.tracedSVG&&d.default.createElement(y,{alt:i,title:r,src:j.tracedSVG,style:k}),e&&d.default.createElement(E,{title:r,style:{backgroundColor:e,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement(y,{alt:i,title:r,width:j.width,height:j.height,srcSet:j.srcSet,src:j.src,style:S,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:i,title:r,width:j.width,height:j.height},j))}})))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:v,sizes:x,fixed:v,fluid:x,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),outerWrapperClassName:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,position:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,Tag:c.default.string};var E=w;t.default=E},299:function(e,t,a){"use strict";var r=a(266),i=a(0),n=a.n(i),o=Object(r.b)("button",{target:"e10w5hqf0"})("background:",function(e){return e.theme.button[e.type].background},";border:none;border-radius:",function(e){return e.theme.borderRadius.round},";box-shadow:",function(e){return e.theme.button[e.type].boxShadow},";color:",function(e){return e.theme.colors.white.base},";cursor:pointer;font-family:",function(e){return e.theme.fontFamily.heading},";display:inline-block;font-size:1.5rem;font-weight:700;line-height:1.25;margin:2rem auto;min-width:10rem;padding:1.15rem 2.45rem;text-align:center;transition:",function(e){return e.theme.transitions.default.transition},";user-select:none;vertical-align:middle;white-space:nowrap;z-index:10;-webkit-appearance:button;&:hover{box-shadow:",function(e){return e.theme.button[e.type].hover.boxShadow},";transform:translateY(-8px);}");t.a=o,o.propTypes={children:n.a.node.isRequired,type:n.a.oneOf(["primary","secondary"])},o.defaultProps={type:"default"}},304:function(e,t,a){"use strict";a(298);var r=a(1),i=a.n(r),n=a(266),o=a(0),l=a.n(o),s=a(268),d=a(277),c=Object(n.b)("div",{target:"e1kpra9q0"})("display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:2rem;margin-bottom:1rem;"),u=Object(n.b)("div",{target:"e1kpra9q1"})("border-radius:",function(e){return e.theme.borderRadius.default},";position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;opacity:0;transition:opacity ",function(e){return e.theme.transitions.default.duration},";",function(e){return e.primary&&"background-image: linear-gradient(\n    30deg,\n    "+e.theme.colors.primary.light+" 0%,\n    "+e.theme.colors.primary.dark+" 100%\n  )"},";",function(e){return e.secondary&&"background-image: linear-gradient(\n    30deg,\n    "+e.theme.colors.secondary.light+" 0%,\n    "+e.theme.colors.secondary.dark+" 100%\n  )"},";"),f=Object(n.b)("article",{target:"e1kpra9q2"})("position:relative;z-index:100;border-radius:",function(e){return e.theme.borderRadius.default},";box-shadow:",function(e){return e.theme.shadow.feature.small.default},";transition:",function(e){return e.theme.transitions.boom.transition},";height:15rem;&:hover{box-shadow:",function(e){return e.theme.shadow.feature.small.hover},";transform:translateY(-12px);",u,"{opacity:0.9;}}flex-basis:calc(99.9% * 1 / 2 - 1rem);max-width:calc(99.9% * 1 / 2 - 1rem);width:calc(99.9% * 1 / 2 - 1rem);@media (max-width:800px){flex-basis:100%;max-width:100%;width:100%;height:12rem;&:first-child{margin-bottom:2rem;}}"),m=Object(n.b)(s.a,{target:"e1kpra9q3"})("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;padding:1rem;z-index:3;&:after{content:'';position:absolute;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.42) 35%,rgba(0,0,0,0.52) 50%,rgba(0,0,0,0.42) 65%,rgba(0,0,0,0) 100% );z-index:-10;border-radius:",d.a.borderRadius.default,";transition:opacity ",d.a.transitions.default.duration,";}&:hover{&:after{opacity:0;}}"),h=Object(n.b)("div",{target:"e1kpra9q4"})("position:absolute;top:0;overflow:hidden;right:0;left:0;bottom:0;z-index:1;border-radius:",function(e){return e.theme.borderRadius.default},";img{border-radius:",function(e){return e.theme.borderRadius.default},";object-fit:cover;width:100%;height:100%;}"),p=Object(n.b)("h4",{target:"e1kpra9q5"})("color:",function(e){return e.theme.colors.white.base},";text-align:center;margin-bottom:0;text-shadow:",function(e){return e.theme.shadow.text.small},";"),b=function(e){var t=e.left,a=e.right,r=e.primary,n=e.secondary;return i.a.createElement(c,null,t&&i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement("img",{src:t.frontmatter.cover.childImageSharp.resize.src,alt:t.frontmatter.title})),i.a.createElement(m,{to:t.fields.slug},i.a.createElement(p,null,t.frontmatter.title)),i.a.createElement(u,{primary:r,secondary:n})),a&&i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement("img",{src:a.frontmatter.cover.childImageSharp.resize.src,alt:a.frontmatter.title})),i.a.createElement(m,{to:a.fields.slug},i.a.createElement(p,null,a.frontmatter.title)),i.a.createElement(u,{primary:r,secondary:n})))};t.a=b,b.propTypes={left:l.a.any.isRequired,right:l.a.any.isRequired,primary:l.a.bool,secondary:l.a.bool},b.defaultProps={primary:!0,secondary:!1}},308:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return b}),a(309);var r=a(1),i=a.n(r),n=a(0),o=a.n(n),l=a(130),s=a(266),d=a(277),c=Object(l.css)("svg{fill:",d.a.colors.brands.discord,";}&:hover{background-color:",d.a.colors.brands.discord,";color:",d.a.colors.white.light,";svg{fill:",d.a.colors.white.light,";}}"),u=Object(l.css)("&:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background-color:",d.a.colors.white.light,";z-index:-1;opacity:1;border-radius:",d.a.borderRadius.default,";transition:opacity ",d.a.transitions.default.duration,";}&:before{content:'';background-color:",d.a.colors.white.light,";background-image:linear-gradient( 45deg,",d.a.colors.brands.instagram.yellow," 0%,",d.a.colors.brands.instagram.pink," 29%,",d.a.colors.brands.instagram.blue," 100% );position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:",d.a.borderRadius.default,";opacity:0;transition:opacity ",d.a.transitions.default.duration,";}&:hover{color:",d.a.colors.white.light,";svg{fill:",d.a.colors.white.light,";}&:before{opacity:1;}&:after{opacity:0;}}"),f=Object(l.css)("svg{font-size:3rem;}&:hover{background-color:",d.a.colors.brands.behance,";color:",d.a.colors.white.light,";svg{fill:",d.a.colors.white.light,";}}"),m=Object(l.css)("svg{fill:",d.a.colors.brands.youtube,";font-size:3rem;}&:hover{background-color:",d.a.colors.brands.youtube,";color:",d.a.colors.white.light,";svg{fill:",d.a.colors.white.light,";}}"),h=Object(l.css)("display:flex;flex-direction:column;padding:2rem;align-items:center;color:",d.a.colors.black.base,";border-radius:",d.a.borderRadius.default,";box-shadow:",d.a.shadow.card,";position:relative;transition:background-color ",d.a.transitions.default.duration,";svg{height:4rem;fill:",d.a.colors.black.blue,";margin-bottom:0.5rem;}&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;z-index:-1;border-radius:",d.a.borderRadius.default,";background-color:",d.a.colors.white.light,";}"),p=Object(s.b)("div",{target:"e1klv6qe0"})(h,";"),b=function(e){var t,a=e.children,r=Object(l.cx)(h,e.className,((t={})[c]=e.discord,t[u]=e.instagram,t[f]=e.behance,t[m]=e.youtube,t));return i.a.createElement("a",{href:e.link,rel:"noreferrer noopener",target:"_blank",className:r},a)};p.propTypes={children:o.a.node.isRequired},b.propTypes={children:o.a.node.isRequired,link:o.a.string.isRequired,className:o.a.string,discord:o.a.bool,instagram:o.a.bool,behance:o.a.bool,youtube:o.a.bool},b.defaultProps={discord:!1,instagram:!1,behance:!1,youtube:!1,className:"default"}},309:function(e,t,a){"use strict";a(306)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-templates-hci-jsx-9383461cbcbe4b683ba1.js.map