(this.webpackJsonpexercise2=this.webpackJsonpexercise2||[]).push([[0],[,,,,function(n,e,t){n.exports=t(11)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(3),u=t.n(a),i=(t(9),t(1));function c(n){for(var e=[],t=0;t<n.length;t++){for(var r=[],o=0;o<n.length;o++)""!==n[t][o]&&r.push(n[t][o]);for(var a=0;a<r.length;a++)r[a]===r[a+1]&&(r[a]=parseInt(r[a])+parseInt(r[a+1]),r[a+1]="");r=r.filter((function(n){return n}));for(var u=n.length-r.length;u>0;)r.push(""),u-=1;e.push(r)}return e}function f(n){for(var e=[],t=0;t<n.length;t++){for(var r=[],o=0;o<n.length;o++)""!==n[t][o]&&r.push(n[t][o]);for(var a=r.length;a>0;a--)r[a]===r[a-1]&&(r[a]=parseInt(r[a])+parseInt(r[a-1]),r[a-1]="");r=r.filter((function(n){return n}));for(var u=n.length-r.length;u>0;)r.unshift(""),u-=1;e.push(r)}return e}function l(n){for(var e=[],t=[],r=0;r<n.length;r++){for(var o=[],a=0;a<n.length;a++)""!==n[a][r]&&o.push(n[a][r]);for(var u=0;u<o.length;u++)o[u]===o[u+1]&&(o[u]=parseInt(o[u])+parseInt(o[u+1]),o[u+1]="");o=o.filter((function(n){return n}));for(var i=n.length-o.length;i>0;)o.push(""),i-=1;t.push(o)}for(var c=0;c<t.length;c++){for(var f=[],l=0;l<t.length;l++)f.push(t[l][c]);e.push(f)}return e}function s(n){for(var e=[],t=[],r=0;r<n.length;r++){for(var o=[],a=0;a<n.length;a++)""!==n[a][r]&&o.push(n[a][r]);for(var u=o.length;u>0;u--)o[u]===o[u-1]&&(o[u]=parseInt(o[u])+parseInt(o[u-1]),o[u-1]="");o=o.filter((function(n){return n}));for(var i=n.length-o.length;i>0;)o.unshift(""),i-=1;t.push(o)}for(var c=0;c<t.length;c++){for(var f=[],l=0;l<t.length;l++)f.push(t[l][c]);e.push(f)}return e}t(10);var h=function(){var n=Object(r.useState)((function(){return[[2,"","",""],["","","",""],["","","",""],["","","",""]]})),e=Object(i.a)(n,2),t=e[0],a=e[1],u="You Win! :)",h="You Lost ):",g="React 2048",v=Object(r.useState)(g),p=Object(i.a)(v,2),w=p[0],d=p[1],m=function(n){return Math.floor(Math.random()*Math.ceil(n))},y=function(n,e){return JSON.stringify(n)!==JSON.stringify(e)},k=function(n,e){var t=[];return"left"===e?t=c(n):"right"===e?t=f(n):"up"===e?t=l(n):"down"===e&&(t=s(n)),y(n,t)?!function(n){return n.some((function(n){return n.includes(2048)}))}(t)?t=function(n){var e=function(n){for(var e=[],t=0;t<n.length;t++)for(var r=0;r<n.length;r++)""===n[t][r]&&e.push([t,r]);return e}(n),t=2*(m(2)+1),r=e[m(e.length)];return n[r[0]][r[1]]=t,n}(t):d(w=u):function(n){return[y(n,c(n)),y(n,f(n)),y(n,l(n)),y(n,s(n))].includes(!0)}(t)||d(w=h),t},E=function(n){n.preventDefault(),37===n.keyCode?(console.log("left"),a(k(t,"left"))):38===n.keyCode?(console.log("up"),a(k(t,"up"))):39===n.keyCode?(console.log("right"),a(k(t,"right"))):40===n.keyCode&&(console.log("down"),a(k(t,"down")))};Object(r.useEffect)((function(){return window.onkeydown=E,function(){window.onkeydown=!E}})),Object(r.useEffect)((function(){w!==h&&w!==u||(window.onkeydown=!E)}));var I={2:"two",4:"four",8:"eight",16:"sixteen",32:"thirty-two",64:"sixty-four",128:"one-two-eight",256:"two-five-six",512:"five-one-two",1024:"one-o-two-four",2048:"win"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,w),o.a.createElement("div",{className:"game"},t.map((function(n,e){return o.a.createElement("div",{key:"row".concat(e),className:"row"},n.map((function(n,e){return o.a.createElement("div",{key:"square".concat(e),className:I[n]},n)})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.cf1cd8a8.chunk.js.map