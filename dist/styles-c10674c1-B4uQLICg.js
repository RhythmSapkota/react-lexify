"use strict";const z=require("./graph-L5sQI78Q.js"),l=require("./index-CvlpYZ1D.js"),G=require("./index-3862675e-Dx_IPd9f.js"),V=require("./channel-DYMmfQxT.js");function E(e){return new l.Selection([document.querySelectorAll(e)],[document.documentElement])}function F(e,o){return!!e.children(o).length}function P(e){return C(e.v)+":"+C(e.w)+":"+C(e.name)}var R=/:/g;function C(e){return e?String(e).replace(R,"\\:"):""}function N(e,o){o&&e.attr("style",o)}function M(e,o,d){o&&e.attr("class",o).attr("class",d+" "+e.attr("class"))}function H(e,o){var d=o.graph();if(l.isPlainObject(d)){var a=d.transition;if(l.isFunction(a))return a(e)}return e}function B(e,o){var d=e.append("foreignObject").attr("width","100000"),a=d.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var c=o.label;switch(typeof c){case"function":a.insert(c);break;case"object":a.insert(function(){return c});break;default:a.html(c)}N(a,o.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var p=a.node().getBoundingClientRect();return d.attr("width",p.width).attr("height",p.height),d}const I={},K=function(e){const o=Object.keys(e);for(const d of o)I[d]=e[d]},D=async function(e,o,d,a,c,p){const u=a.select(`[id="${d}"]`),s=Object.keys(e);for(const b of s){const r=e[b];let h="default";r.classes.length>0&&(h=r.classes.join(" ")),h=h+" flowchart-label";const w=l.getStylesFromArray(r.styles);let t=r.text!==void 0?r.text:r.id,i;if(l.log$1.info("vertex",r,r.labelType),r.labelType==="markdown")l.log$1.info("vertex",r,r.labelType);else if(l.evaluate(l.getConfig().flowchart.htmlLabels))i=B(u,{label:t}).node(),i.parentNode.removeChild(i);else{const k=c.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("style",w.labelStyle.replace("color:","fill:"));const T=t.split(l.common$1.lineBreakRegex);for(const $ of T){const m=c.createElementNS("http://www.w3.org/2000/svg","tspan");m.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),m.setAttribute("dy","1em"),m.setAttribute("x","1"),m.textContent=$,k.appendChild(m)}i=k}let f=0,n="";switch(r.type){case"round":f=5,n="rect";break;case"square":n="rect";break;case"diamond":n="question";break;case"hexagon":n="hexagon";break;case"odd":n="rect_left_inv_arrow";break;case"lean_right":n="lean_right";break;case"lean_left":n="lean_left";break;case"trapezoid":n="trapezoid";break;case"inv_trapezoid":n="inv_trapezoid";break;case"odd_right":n="rect_left_inv_arrow";break;case"circle":n="circle";break;case"ellipse":n="ellipse";break;case"stadium":n="stadium";break;case"subroutine":n="subroutine";break;case"cylinder":n="cylinder";break;case"group":n="rect";break;case"doublecircle":n="doublecircle";break;default:n="rect"}const S=await l.renderKatex(t,l.getConfig());o.setNode(r.id,{labelStyle:w.labelStyle,shape:n,labelText:S,labelType:r.labelType,rx:f,ry:f,class:h,style:w.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:p.db.getTooltip(r.id)||"",domId:p.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:l.getConfig().flowchart.padding}),l.log$1.info("setNode",{labelStyle:w.labelStyle,labelType:r.labelType,shape:n,labelText:S,rx:f,ry:f,class:h,style:w.style,id:r.id,domId:p.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:l.getConfig().flowchart.padding})}},q=async function(e,o,d){l.log$1.info("abc78 edges = ",e);let a=0,c={},p,u;if(e.defaultStyle!==void 0){const s=l.getStylesFromArray(e.defaultStyle);p=s.style,u=s.labelStyle}for(const s of e){a++;const b="L-"+s.start+"-"+s.end;c[b]===void 0?(c[b]=0,l.log$1.info("abc78 new entry",b,c[b])):(c[b]++,l.log$1.info("abc78 new entry",b,c[b]));let r=b+"-"+c[b];l.log$1.info("abc78 new link id to be used is",b,r,c[b]);const h="LS-"+s.start,w="LE-"+s.end,t={style:"",labelStyle:""};switch(t.minlen=s.length||1,s.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",s.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let i="",f="";switch(s.stroke){case"normal":i="fill:none;",p!==void 0&&(i=p),u!==void 0&&(f=u),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(s.style!==void 0){const n=l.getStylesFromArray(s.style);i=n.style,f=n.labelStyle}t.style=t.style+=i,t.labelStyle=t.labelStyle+=f,s.interpolate!==void 0?t.curve=l.interpolateToCurve(s.interpolate,l.curveLinear):e.defaultInterpolate!==void 0?t.curve=l.interpolateToCurve(e.defaultInterpolate,l.curveLinear):t.curve=l.interpolateToCurve(I.curve,l.curveLinear),s.text===void 0?s.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=s.labelType,t.label=await l.renderKatex(s.text.replace(l.common$1.lineBreakRegex,`
`),l.getConfig()),s.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+h+" "+w,o.setEdge(s.start,s.end,t,a)}},U=function(e,o){return o.db.getClasses()},j=async function(e,o,d,a){l.log$1.info("Drawing flowchart");let c=a.db.getDirection();c===void 0&&(c="TD");const{securityLevel:p,flowchart:u}=l.getConfig(),s=u.nodeSpacing||50,b=u.rankSpacing||50;let r;p==="sandbox"&&(r=l.select("#i"+o));const h=p==="sandbox"?l.select(r.nodes()[0].contentDocument.body):l.select("body"),w=p==="sandbox"?r.nodes()[0].contentDocument:document,t=new z.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:s,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let i;const f=a.db.getSubGraphs();l.log$1.info("Subgraphs - ",f);for(let g=f.length-1;g>=0;g--)i=f[g],l.log$1.info("Subgraph - ",i),a.db.addVertex(i.id,{text:i.title,type:i.labelType},"group",void 0,i.classes,i.dir);const n=a.db.getVertices(),S=a.db.getEdges();l.log$1.info("Edges",S);let k=0;for(k=f.length-1;k>=0;k--){i=f[k],E("cluster").append("text");for(let g=0;g<i.nodes.length;g++)l.log$1.info("Setting up subgraphs",i.nodes[g],i.id),t.setParent(i.nodes[g],i.id)}await D(n,t,o,h,w,a),await q(S,t);const T=h.select(`[id="${o}"]`),$=h.select("#"+o+" g");if(await G.render($,t,["point","circle","cross"],"flowchart",o),l.utils.insertTitle(T,"flowchartTitleText",u.titleTopMargin,a.db.getDiagramTitle()),l.setupGraphViewbox$1(t,T,u.diagramPadding,u.useMaxWidth),a.db.indexNodes("subGraph"+k),!u.htmlLabels){const g=w.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const x of g){const v=x.getBBox(),y=w.createElementNS("http://www.w3.org/2000/svg","rect");y.setAttribute("rx",0),y.setAttribute("ry",0),y.setAttribute("width",v.width),y.setAttribute("height",v.height),x.insertBefore(y,x.firstChild)}}Object.keys(n).forEach(function(g){const x=n[g];if(x.link){const v=l.select("#"+o+' [id="'+g+'"]');if(v){const y=w.createElementNS("http://www.w3.org/2000/svg","a");y.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),y.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),y.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),p==="sandbox"?y.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&y.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);const _=v.insert(function(){return y},":first-child"),L=v.select(".label-container");L&&_.append(function(){return L.node()});const A=v.select(".label");A&&_.append(function(){return A.node()})}}})},W={setConf:K,addVertices:D,addEdges:q,getClasses:U,draw:j},X=(e,o)=>{const d=V.channel,a=d(e,"r"),c=d(e,"g"),p=d(e,"b");return l.rgba(a,c,p,o)},J=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${X(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,Q=J;exports.addHtmlLabel=B;exports.applyClass=M;exports.applyStyle=N;exports.applyTransition=H;exports.edgeToId=P;exports.flowRendererV2=W;exports.flowStyles=Q;exports.isSubgraph=F;exports.selectAll=E;
//# sourceMappingURL=styles-c10674c1-B4uQLICg.js.map
