!function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);var r=document.querySelector("html").lang;document.querySelector("#lang-switch").onclick=function(e){e.preventDefault(),function(e,n,t){var r="";if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),r="; expires=".concat(o.toUTCString())}document.cookie="".concat(e,"=").concat(n||"").concat(r,"; path=/")}("lang","en"===r?"es":"en"),window.location=e.target.href};window.onload=function(){var e=function(e){for(var n="".concat(e,"="),t=document.cookie.split(";"),r=0;r<t.length;r+=1){for(var o=t[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return null}("lang");return e&&e!=r?(window.location.href="/".concat(e),!1):e||(navigator.language||navigator.browserLanguage).startsWith("es")||"en"==r?void 0:!(window.location.href="/en")}},function(e,n,t){}]);
//# sourceMappingURL=main-26a26058a134a5e921e2.js.map