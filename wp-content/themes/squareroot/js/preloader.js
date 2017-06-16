(function(){var H,Q,n,k,R,w,z,S,T,I,U,V,q,W,m,A,B,r,C,J,K,p,X,t,f,D,L,Y,y,M,E,l,x,N,u,F,O,G,Z,P,da,aa,v=[].slice,ba={}.hasOwnProperty,ca=function(b,a){function d(){this.constructor=b}for(var c in a)ba.call(a,c)&&(b[c]=a[c]);d.prototype=a.prototype;b.prototype=new d;b.__super__=a.prototype;return b},ea=[].indexOf||function(b){for(var a=0,d=this.length;a<d;a++)if(a in this&&this[a]===b)return a;return-1};n={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:20,easeFactor:1.25,
  startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"#preload",elements:{checkInterval:100,selectors:["#preload"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}};t=function(){var b;return null!=(b="undefined"!==typeof performance&&null!==performance?"function"===typeof performance.now?performance.now():void 0:void 0)?b:+new Date};D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||
    window.msRequestAnimationFrame;B=window.cancelAnimationFrame||window.mozCancelAnimationFrame;null==D&&(D=function(b){return setTimeout(b,50)},B=function(b){return clearTimeout(b)});Y=function(b){var a,d;a=t();d=function(){var c;c=t()-a;return 33<=c?(a=t(),b(c,function(){return D(d)})):setTimeout(d,33-c)};return d()};L=function(){var b,a,d;d=arguments[0];a=arguments[1];b=3<=arguments.length?v.call(arguments,2):[];return"function"===typeof d[a]?d[a].apply(d,b):d[a]};r=function(){var b,a,d,c,e,h,g;a=
    arguments[0];c=2<=arguments.length?v.call(arguments,1):[];h=0;for(g=c.length;h<g;h++)if(d=c[h])for(b in d)ba.call(d,b)&&(e=d[b],null!=a[b]&&"object"===typeof a[b]&&null!=e&&"object"===typeof e?r(a[b],e):a[b]=e);return a};W=function(b){var a,d,c,e,h;e=d=a=0;for(h=b.length;e<h;e++)c=b[e],d+=Math.abs(c),a++;return d/a};k=function(){function b(){}b.prototype.on=function(a,b,c,e){var h;null==e&&(e=!1);null==this.bindings&&(this.bindings={});null==(h=this.bindings)[a]&&(h[a]=[]);return this.bindings[a].push({handler:b,
  ctx:c,once:e})};b.prototype.once=function(a,b,c){return this.on(a,b,c,!0)};b.prototype.off=function(a,b){var c,e;if(null!=(null!=(c=this.bindings)?c[a]:void 0)){if(null==b)return delete this.bindings[a];c=0;for(e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}};b.prototype.trigger=function(){var a,b,c,e,h,g,f;c=arguments[0];a=2<=arguments.length?v.call(arguments,1):[];if(null!=(b=this.bindings)&&b[c]){h=0;for(f=[];h<this.bindings[c].length;)g=
    this.bindings[c][h],e=g.handler,b=g.ctx,g=g.once,e.apply(null!=b?b:this,a),g?f.push(this.bindings[c].splice(h,1)):f.push(h++);return f}};return b}();null==window.Pace&&(window.Pace={});r(Pace,k.prototype);f=Pace.options=r({},n,window.paceOptions,function(b,a){var d;null==b&&(b="options");null==a&&(a=!0);if(d=document.querySelector("[data-pace-"+b+"]")){d=d.getAttribute("data-pace-"+b);if(!a)return d;try{return JSON.parse(d)}catch(c){return"undefined"!==typeof console&&null!==console?console.error("Error parsing inline pace options",
    c):void 0}}}());P=["ajax","document","eventLag","elements"];k=0;for(w=P.length;k<w;k++)l=P[k],!0===f[l]&&(f[l]=n[l]);z=function(b){function a(){return da=a.__super__.constructor.apply(this,arguments)}ca(a,b);return a}(Error);Q=function(){function b(){this.progress=0}b.prototype.getElement=function(){var a;if(null==this.el){a=document.querySelector(f.target);if(!a)throw new z;this.el=document.createElement("div");this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,
    "");document.body.className+=" pace-running";this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el};b.prototype.finish=function(){var a;a=this.getElement();a.className=a.className.replace("pace-active","");a.className+=" pace-inactive";document.body.className=document.body.className.replace("pace-running","");return document.body.className+=
    " pace-done"};b.prototype.update=function(a){this.progress=a;return this.render()};b.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){z=a}return this.el=void 0};b.prototype.render=function(){var a,b;if(null==document.querySelector(f.target))return!1;a=this.getElement();a.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)a.children[0].setAttribute("data-progress-text",""+(this.progress|
    0)+"%"),100<=this.progress?b="99":(b=10>this.progress?"0":"",b+=this.progress|0),a.children[0].setAttribute("data-progress",""+b);return this.lastRenderedProgress=this.progress};b.prototype.done=function(){return 100<=this.progress};return b}();n=function(){function b(){this.bindings={}}b.prototype.trigger=function(a,b){var c,e,h,g,f;if(null!=this.bindings[a]){g=this.bindings[a];f=[];e=0;for(h=g.length;e<h;e++)c=g[e],f.push(c.call(this,b));return f}};b.prototype.on=function(a,b){var c;null==(c=this.bindings)[a]&&
(c[a]=[]);return this.bindings[a].push(b)};return b}();O=window.XMLHttpRequest;F=window.XDomainRequest;u=window.WebSocket;C=function(b,a){var d,c,e;e=[];for(d in a.prototype)try{c=a.prototype[d],null==b[d]&&"function"!==typeof c?e.push(b[d]=c):e.push(void 0)}catch(h){}return e};p=[];Pace.ignore=function(){var b,a;a=arguments[0];b=2<=arguments.length?v.call(arguments,1):[];p.unshift("ignore");b=a.apply(null,b);p.shift();return b};Pace.track=function(){var b,a;a=arguments[0];b=2<=arguments.length?v.call(arguments,
    1):[];p.unshift("track");b=a.apply(null,b);p.shift();return b};E=function(b){var a;null==b&&(b="GET");return"track"===p[0]?"force":!p.length&&f.ajax&&("socket"===b&&f.ajax.trackWebSockets||(a=b.toUpperCase(),0<=ea.call(f.ajax.trackMethods,a)))?!0:!1};S=function(b){function a(){var b,c=this;a.__super__.constructor.apply(this,arguments);b=function(a){var b;b=a.open;return a.open=function(d,f,l){E(d)&&c.trigger("request",{type:d,url:f,request:a});return b.apply(a,arguments)}};window.XMLHttpRequest=function(a){a=
    new O(a);b(a);return a};C(window.XMLHttpRequest,O);null!=F&&(window.XDomainRequest=function(){var a;a=new F;b(a);return a},C(window.XDomainRequest,F));null!=u&&f.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;d=null!=b?new u(a,b):new u(a);E("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d});return d},C(window.WebSocket,u))}ca(a,b);return a}(n);G=null;J=function(){null==G&&(G=new S);return G};M=function(b){var a,d,c,e;e=f.ajax.ignoreURLs;d=0;for(c=e.length;d<c;d++)if(a=
        e[d],"string"===typeof a){if(-1!==b.indexOf(a))return!0}else if(a.test(b))return!0;return!1};J().on("request",function(b){var a,d,c,e;e=b.type;c=b.request;if(!(M(b.url)||Pace.running||!1===f.restartOnRequestAfter&&"force"!==E(e)))return d=arguments,a=f.restartOnRequestAfter||0,"boolean"===typeof a&&(a=0),setTimeout(function(){var a,b,f,m;if("socket"===e?2>c.readyState:0<(a=c.readyState)&&4>a){Pace.restart();f=Pace.sources;m=[];a=0;for(b=f.length;a<b;a++)if(l=f[a],l instanceof H){l.watch.apply(l,d);
  break}else m.push(void 0);return m}},a)});H=function(){function b(){var a=this;this.elements=[];J().on("request",function(){return a.watch.apply(a,arguments)})}b.prototype.watch=function(a){var b,c;c=a.type;b=a.request;if(!M(a.url))return a="socket"===c?new U(b):new V(b),this.elements.push(a)};return b}();V=function(){return function(b){var a,d,c,e,f,g=this;this.progress=0;if(null!=window.ProgressEvent)for(b.addEventListener("progress",function(a){return a.lengthComputable?g.progress=100*a.loaded/
    a.total:g.progress+=(100-g.progress)/2}),f=["load","abort","timeout","error"],d=0,c=f.length;d<c;d++)a=f[d],b.addEventListener(a,function(){return g.progress=100});else e=b.onreadystatechange,b.onreadystatechange=function(){var a;0===(a=b.readyState)||4===a?g.progress=100:3===b.readyState&&(g.progress=50);return"function"===typeof e?e.apply(null,arguments):void 0}}}();U=function(){return function(b){var a,d,c,e,f=this;this.progress=0;e=["error","open"];d=0;for(c=e.length;d<c;d++)a=e[d],b.addEventListener(a,
    function(){return f.progress=100})}}();k=function(){return function(b){var a,d,c;null==b&&(b={});this.elements=[];null==b.selectors&&(b.selectors=[]);c=b.selectors;a=0;for(d=c.length;a<d;a++)b=c[a],this.elements.push(new R(b))}}();R=function(){function b(a){this.selector=a;this.progress=0;this.check()}b.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},f.elements.checkInterval)};b.prototype.done=function(){return this.progress=
    100};return b}();n=function(){function b(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100;a=document.onreadystatechange;document.onreadystatechange=function(){null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]);return"function"===typeof a?a.apply(null,arguments):void 0}}b.prototype.states={loading:0,interactive:50,complete:100};return b}();w=function(){return function(){var b,a,d,c,e,h=this;b=this.progress=0;e=[];c=0;d=t();a=setInterval(function(){var g;
  g=t()-d-50;d=t();e.push(g);e.length>f.eventLag.sampleCount&&e.shift();b=W(e);return++c>=f.eventLag.minSamples&&b<f.eventLag.lagThreshold?(h.progress=100,clearInterval(a)):h.progress=3/(b+3)*100},50)}}();I=function(){function b(a){this.source=a;this.last=this.sinceLastUpdate=0;this.rate=f.initialRate;this.progress=this.lastProgress=this.catchup=0;null!=this.source&&(this.progress=L(this.source,"progress"))}b.prototype.tick=function(a,b){null==b&&(b=L(this.source,"progress"));100<=b&&(this.done=!0);
  b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/f.catchupTime,this.sinceLastUpdate=0,this.last=b);b>this.progress&&(this.progress+=this.catchup*a);this.progress+=(1-Math.pow(this.progress/100,f.easeFactor))*this.rate*a;this.progress=Math.min(this.lastProgress+f.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);return this.lastProgress=this.progress=Math.min(100,this.progress)};return b}();
  A=q=N=m=y=x=null;Pace.running=!1;K=function(){if(f.restartOnPushState)return Pace.restart()};null!=window.history.pushState&&(Z=window.history.pushState,window.history.pushState=function(){K();return Z.apply(window.history,arguments)});null!=window.history.replaceState&&(aa=window.history.replaceState,window.history.replaceState=function(){K();return aa.apply(window.history,arguments)});T={ajax:H,elements:k,document:n,eventLag:w};(X=function(){var b,a,d,c,e;Pace.sources=x=[];e=["ajax","elements",
    "document","eventLag"];a=0;for(c=e.length;a<c;a++)b=e[a],!1!==f[b]&&x.push(new T[b](f[b]));b=null!=(d=f.extraSources)?d:[];d=0;for(a=b.length;d<a;d++)l=b[d],x.push(new l(f));Pace.bar=m=new Q;y=[];return N=new I})();Pace.stop=function(){Pace.trigger("stop");Pace.running=!1;m.destroy();A=!0;null!=q&&("function"===typeof B&&B(q),q=null);return X()};Pace.restart=function(){Pace.trigger("restart");Pace.stop();return Pace.start()};Pace.go=function(){var b;Pace.running=!0;m.render();b=t();A=!1;return q=
      Y(function(a,d){var c,e,h,g,k,n,p,q,r,u,v,w;c=p=0;e=!0;g=q=0;for(u=x.length;q<u;g=++q)for(l=x[g],n=null!=y[g]?y[g]:y[g]=[],g=null!=(w=l.elements)?w:[l],k=r=0,v=g.length;r<v;k=++r)h=g[k],h=null!=n[k]?n[k]:n[k]=new I(h),e&=h.done,h.done||(c++,p+=h.tick(a));m.update(N.tick(a,p/c));return m.done()||e||A?(m.update(100),Pace.trigger("done"),setTimeout(function(){m.finish();Pace.running=!1;return Pace.trigger("hide")},Math.max(f.ghostTime,Math.max(f.minTime-(t()-b),0)))):d()})};Pace.start=function(b){r(f,
      b);Pace.running=!0;try{m.render()}catch(a){z=a}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)};"function"===typeof define&&define.amd?define(function(){return Pace}):"object"===typeof exports?module.exports=Pace:f.startOnPageLoad&&Pace.start()}).call(this);