// ==UserScript==
// @name        gimkit-utility
// @description An open sourced utility for interacting with Gimkit's game socket and API.
// @namespace   http://github.com/UndercoverGoose/gimkit
// @updateURL   https://undercovergoose.github.io/gimkit/output/main-userscript.user.js
// @downloadURL https://undercovergoose.github.io/gimkit/output/main-userscript.user.js
// @author      UndercoverGoose (https://github.com/UndercoverGoose)
// @version     0.0.2
// @run-at      document-start
// @icon        https://www.gimkit.com/favicon.png
// @match       https://www.gimkit.com/join
// @license     GPL-3.0
// @grant       none
// ==/UserScript==

/*
	This script is licensed under GNU General Public License v3.0
	View conditions -> https://github.com/UndercoverGoose/gimkit/blob/main/LICENSE
	Copyright (c) 2023 UndercoverGoose
*/

(function(){const s=function s(t){"use strict";function e(t){if(this.t=0,t instanceof ArrayBuffer)this.i=t,this.s=new DataView(this.i);else{if(!ArrayBuffer.isView(t))throw new Error("Invalid argument");this.i=t.buffer,this.s=new DataView(this.i,t.byteOffset,t.byteLength)}}function n(t,e,n){for(var i=0,s=0,r=n.length;s<r;s++)(i=n.charCodeAt(s))<128?t.setUint8(e++,i):(i<2048?t.setUint8(e++,192|i>>6):(i<55296||57344<=i?t.setUint8(e++,224|i>>12):(s++,i=65536+((1023&i)<<10|1023&n.charCodeAt(s)),t.setUint8(e++,240|i>>18),t.setUint8(e++,128|i>>12&63)),t.setUint8(e++,128|i>>6&63)),t.setUint8(e++,128|63&i))}e.prototype.g=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=this.v();return e},e.prototype.M=function(t){for(var e={},n=0;n<t;n++)e[this.v()]=this.v();return e},e.prototype.h=function(t){var e=function(t,e,n){for(var i="",s=0,r=e,o=e+n;r<o;r++){var a=t.getUint8(r);if(0!=(128&a))if(192!=(224&a))if(224!=(240&a)){if(240!=(248&a))throw new Error("Invalid byte "+a.toString(16));65536<=(s=(7&a)<<18|(63&t.getUint8(++r))<<12|(63&t.getUint8(++r))<<6|(63&t.getUint8(++r))<<0)?(s-=65536,i+=String.fromCharCode(55296+(s>>>10),56320+(1023&s))):i+=String.fromCharCode(s)}else i+=String.fromCharCode((15&a)<<12|(63&t.getUint8(++r))<<6|(63&t.getUint8(++r))<<0);else i+=String.fromCharCode((31&a)<<6|63&t.getUint8(++r));else i+=String.fromCharCode(a)}return i}(this.s,this.t,t);return this.t+=t,e},e.prototype.l=function(t){var e=this.i.slice(this.t,this.t+t);return this.t+=t,e},e.prototype.v=function(){var t,e=this.s.getUint8(this.t++),n=0,i=0,s=0,r=0;if(e<192)return e<128?e:e<144?this.M(15&e):e<160?this.g(15&e):this.h(31&e);if(223<e)return-1*(255-e+1);switch(e){case 192:return null;case 194:return!1;case 195:return!0;case 196:return n=this.s.getUint8(this.t),this.t+=1,this.l(n);case 197:return n=this.s.getUint16(this.t),this.t+=2,this.l(n);case 198:return n=this.s.getUint32(this.t),this.t+=4,this.l(n);case 199:return n=this.s.getUint8(this.t),i=this.s.getInt8(this.t+1),this.t+=2,[i,this.l(n)];case 200:return n=this.s.getUint16(this.t),i=this.s.getInt8(this.t+2),this.t+=3,[i,this.l(n)];case 201:return n=this.s.getUint32(this.t),i=this.s.getInt8(this.t+4),this.t+=5,[i,this.l(n)];case 202:return t=this.s.getFloat32(this.t),this.t+=4,t;case 203:return t=this.s.getFloat64(this.t),this.t+=8,t;case 204:return t=this.s.getUint8(this.t),this.t+=1,t;case 205:return t=this.s.getUint16(this.t),this.t+=2,t;case 206:return t=this.s.getUint32(this.t),this.t+=4,t;case 207:return s=this.s.getUint32(this.t)*Math.pow(2,32),r=this.s.getUint32(this.t+4),this.t+=8,s+r;case 208:return t=this.s.getInt8(this.t),this.t+=1,t;case 209:return t=this.s.getInt16(this.t),this.t+=2,t;case 210:return t=this.s.getInt32(this.t),this.t+=4,t;case 211:return s=this.s.getInt32(this.t)*Math.pow(2,32),r=this.s.getUint32(this.t+4),this.t+=8,s+r;case 212:return i=this.s.getInt8(this.t),this.t+=1,0===i?void(this.t+=1):[i,this.l(1)];case 213:return i=this.s.getInt8(this.t),this.t+=1,[i,this.l(2)];case 214:return i=this.s.getInt8(this.t),this.t+=1,[i,this.l(4)];case 215:return i=this.s.getInt8(this.t),this.t+=1,0===i?(s=this.s.getInt32(this.t)*Math.pow(2,32),r=this.s.getUint32(this.t+4),this.t+=8,new Date(s+r)):[i,this.l(8)];case 216:return i=this.s.getInt8(this.t),this.t+=1,[i,this.l(16)];case 217:return n=this.s.getUint8(this.t),this.t+=1,this.h(n);case 218:return n=this.s.getUint16(this.t),this.t+=2,this.h(n);case 219:return n=this.s.getUint32(this.t),this.t+=4,this.h(n);case 220:return n=this.s.getUint16(this.t),this.t+=2,this.g(n);case 221:return n=this.s.getUint32(this.t),this.t+=4,this.g(n);case 222:return n=this.s.getUint16(this.t),this.t+=2,this.M(n);case 223:return n=this.s.getUint32(this.t),this.t+=4,this.M(n)}throw new Error("Could not parse")};const i=new Int32Array(2);new Float32Array(i.buffer),new Float64Array(i.buffer);const s={9:"HANDSHAKE",10:"JOIN_ROOM",11:"ERROR",12:"LEAVE_ROOM",13:"ROOM_DATA",14:"ROOM_STATE",15:"ROOM_STATE_PATCH",16:"ROOM_DATA_SCHEMA",HANDSHAKE:9,JOIN_ROOM:10,ERROR:11,LEAVE_ROOM:12,ROOM_DATA:13,ROOM_STATE:14,ROOM_STATE_PATCH:15,ROOM_DATA_SCHEMA:16},r=new Int32Array(2),o=new Float32Array(r.buffer),a=new Float64Array(r.buffer),h={int8:function(t,e){return h.uint8(t,e)<<24>>24},uint8:function(t,e){return t[e.offset++]},int16:function(t,e){return h.uint16(t,e)<<16>>16},uint16:function(t,e){return t[e.offset++]|t[e.offset++]<<8},int32:function(t,e){return t[e.offset++]|t[e.offset++]<<8|t[e.offset++]<<16|t[e.offset++]<<24},uint32:function(t,e){return h.int32(t,e)>>>0},float32:function(t,e){return h.readFloat32(t,e)},float64:function(t,e){return h.readFloat64(t,e)},int64:function(t,e){var n=h.uint32(t,e);return h.int32(t,e)*Math.pow(2,32)+n},uint64:function(t,e){var n=h.uint32(t,e);return h.uint32(t,e)*Math.pow(2,32)+n},readFloat32:function(t,e){return r[0]=h.int32(t,e),o[0]},readFloat64:function(t,e){return r[0]=h.int32(t,e),r[1]=h.int32(t,e),a[0]},boolean:function(t,e){return h.uint8(t,e)>0},string:function(t,e){var n,i=t[e.offset++];i<192?n=31&i:217===i?n=h.uint8(t,e):218===i?n=h.uint16(t,e):219===i&&(n=h.uint32(t,e));var s=((t,e,n)=>{for(var i="",s=0,r=e,o=e+n;r<o;r++){var a=t[r];0!=(128&a)?192!=(224&a)?224!=(240&a)?240!=(248&a)?console.error("Invalid byte "+a.toString(16)):(s=(7&a)<<18|(63&t[++r])<<12|(63&t[++r])<<6|(63&t[++r])<<0)>=65536?(s-=65536,i+=String.fromCharCode(55296+(s>>>10),56320+(1023&s))):i+=String.fromCharCode(s):i+=String.fromCharCode((15&a)<<12|(63&t[++r])<<6|(63&t[++r])<<0):i+=String.fromCharCode((31&a)<<6|63&t[++r]):i+=String.fromCharCode(a)}return i})(t,e.offset,n);return e.offset+=n,s},stringCheck:function(t,e){var n=t[e.offset];return n<192&&n>160||217===n||218===n||219===n},number:function(t,e){var n=t[e.offset++];return n<128?n:202===n?h.readFloat32(t,e):203===n?h.readFloat64(t,e):204===n?h.uint8(t,e):205===n?h.uint16(t,e):206===n?h.uint32(t,e):207===n?h.uint64(t,e):208===n?h.int8(t,e):209===n?h.int16(t,e):210===n?h.int32(t,e):211===n?h.int64(t,e):n>223?-1*(255-n+1):void 0},numberCheck:function(t,e){var n=t[e.offset];return n<128||n>=202&&n<=211},arrayCheck:function(t,e){return t[e.offset]<160},switchStructureCheck:function(t,e){return t[e.offset-1]===SWITCH_TO_STRUCTURE&&(t[e.offset]<128||t[e.offset]>=202&&t[e.offset]<=211)}},f=function(t,e){if(this._offset=e,t instanceof ArrayBuffer)this._buffer=t,this._view=new DataView(this._buffer);else{if(!ArrayBuffer.isView(t))throw new Error("Invalid argument");this._buffer=t.buffer,this._view=new DataView(this._buffer,t.byteOffset,t.byteLength)}};f.prototype._array=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=this._parse();return e},f.prototype._map=function(t){for(var e={},n=0;n<t;n++)e[this._parse()]=this._parse();return e},f.prototype._str=function(t){var e=((t,e,n)=>{for(var i="",s=0,r=e,o=e+n;r<o;r++){var a=t.getUint8(r);if(0!=(128&a))if(192!=(224&a))if(224!=(240&a)){if(240!=(248&a))throw new Error("Invalid byte "+a.toString(16));(s=(7&a)<<18|(63&t.getUint8(++r))<<12|(63&t.getUint8(++r))<<6|(63&t.getUint8(++r))<<0)>=65536?(s-=65536,i+=String.fromCharCode(55296+(s>>>10),56320+(1023&s))):i+=String.fromCharCode(s)}else i+=String.fromCharCode((15&a)<<12|(63&t.getUint8(++r))<<6|(63&t.getUint8(++r))<<0);else i+=String.fromCharCode((31&a)<<6|63&t.getUint8(++r));else i+=String.fromCharCode(a)}return i})(this._view,this._offset,t);return this._offset+=t,e},f.prototype._bin=function(t){var e=this._buffer.slice(this._offset,this._offset+t);return this._offset+=t,e},f.prototype._parse=function(){var t,e=this._view.getUint8(this._offset++),n=0,i=0,s=0,r=0;if(e<192)return e<128?e:e<144?this._map(15&e):e<160?this._array(15&e):this._str(31&e);if(e>223)return-1*(255-e+1);switch(e){case 192:return null;case 194:return!1;case 195:return!0;case 196:return n=this._view.getUint8(this._offset),this._offset+=1,this._bin(n);case 197:return n=this._view.getUint16(this._offset),this._offset+=2,this._bin(n);case 198:return n=this._view.getUint32(this._offset),this._offset+=4,this._bin(n);case 199:return n=this._view.getUint8(this._offset),i=this._view.getInt8(this._offset+1),this._offset+=2,[i,this._bin(n)];case 200:return n=this._view.getUint16(this._offset),i=this._view.getInt8(this._offset+2),this._offset+=3,[i,this._bin(n)];case 201:return n=this._view.getUint32(this._offset),i=this._view.getInt8(this._offset+4),this._offset+=5,[i,this._bin(n)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return s=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,s+r;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return s=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,s+r;case 212:return i=this._view.getInt8(this._offset),this._offset+=1,0===i?void(this._offset+=1):[i,this._bin(1)];case 213:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(2)];case 214:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(4)];case 215:return i=this._view.getInt8(this._offset),this._offset+=1,0===i?(s=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(s+r)):[i,this._bin(8)];case 216:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(16)];case 217:return n=this._view.getUint8(this._offset),this._offset+=1,this._str(n);case 218:return n=this._view.getUint16(this._offset),this._offset+=2,this._str(n);case 219:return n=this._view.getUint32(this._offset),this._offset+=4,this._str(n);case 220:return n=this._view.getUint16(this._offset),this._offset+=2,this._array(n);case 221:return n=this._view.getUint32(this._offset),this._offset+=4,this._array(n);case 222:return n=this._view.getUint16(this._offset),this._offset+=2,this._map(n);case 223:return n=this._view.getUint32(this._offset),this._offset+=4,this._map(n)}throw new Error("Could not parse")};const u=t=>{const e=Array.from(new Uint8Array(t)),n=e[0],i=s[n];if(n===s.ROOM_DATA){const n={offset:1};return{type:h.stringCheck(e,n)?h.string(e,n):h.number(e,n),message:e.length>n.offset?((t,e)=>{void 0===e&&(e=0);var n=new f(t,e),i=n._parse();if(n._offset!==t.byteLength)throw new Error(t.byteLength-n._offset+" trailing bytes");return i})(t,n.offset):null}}return{type:i,message:null}},l=()=>d.ws,c=new EventTarget,d={ws:null},g=(t,e,i="blueboat_SEND_MESSAGE",s=d.ROOM)=>{const r={type:2,data:[i,{room:s,key:t,data:e}],options:{compress:!0},nsp:"/"};l().send(function(t){var e=[],i=[],s=function t(e,n,i){var s=typeof i,r=0,o=0,a=0,h=0,f=0,u=0;if("string"===s){if((f=function(t){for(var e=0,n=0,i=0,s=t.length;i<s;i++)(e=t.charCodeAt(i))<128?n+=1:e<2048?n+=2:e<55296||57344<=e?n+=3:(i++,n+=4);return n}(i))<32)e.push(160|f),u=1;else if(f<256)e.push(217,f),u=2;else if(f<65536)e.push(218,f>>8,f),u=3;else{if(!(f<4294967296))throw new Error("String too long");e.push(219,f>>24,f>>16,f>>8,f),u=5}return n.push({h:i,u:f,t:e.length}),u+f}if("number"===s)return Math.floor(i)===i&&isFinite(i)?0<=i?i<128?(e.push(i),1):i<256?(e.push(204,i),2):i<65536?(e.push(205,i>>8,i),3):i<4294967296?(e.push(206,i>>24,i>>16,i>>8,i),5):(a=i/Math.pow(2,32)>>0,h=i>>>0,e.push(207,a>>24,a>>16,a>>8,a,h>>24,h>>16,h>>8,h),9):-32<=i?(e.push(i),1):-128<=i?(e.push(208,i),2):-32768<=i?(e.push(209,i>>8,i),3):-2147483648<=i?(e.push(210,i>>24,i>>16,i>>8,i),5):(a=Math.floor(i/Math.pow(2,32)),h=i>>>0,e.push(211,a>>24,a>>16,a>>8,a,h>>24,h>>16,h>>8,h),9):(e.push(203),n.push({o:i,u:8,t:e.length}),9);if("object"===s){if(null===i)return e.push(192),1;if(Array.isArray(i)){if((f=i.length)<16)e.push(144|f),u=1;else if(f<65536)e.push(220,f>>8,f),u=3;else{if(!(f<4294967296))throw new Error("Array too large");e.push(221,f>>24,f>>16,f>>8,f),u=5}for(r=0;r<f;r++)u+=t(e,n,i[r]);return u}if(i instanceof Date){var l=i.getTime();return a=Math.floor(l/Math.pow(2,32)),h=l>>>0,e.push(215,0,a>>24,a>>16,a>>8,a,h>>24,h>>16,h>>8,h),10}if(i instanceof ArrayBuffer){if((f=i.byteLength)<256)e.push(196,f),u=2;else if(f<65536)e.push(197,f>>8,f),u=3;else{if(!(f<4294967296))throw new Error("Buffer too large");e.push(198,f>>24,f>>16,f>>8,f),u=5}return n.push({l:i,u:f,t:e.length}),u+f}if("function"==typeof i.toJSON)return t(e,n,i.toJSON());var c=[],d="",g=Object.keys(i);for(r=0,o=g.length;r<o;r++)"function"!=typeof i[d=g[r]]&&c.push(d);if((f=c.length)<16)e.push(128|f),u=1;else if(f<65536)e.push(222,f>>8,f),u=3;else{if(!(f<4294967296))throw new Error("Object too large");e.push(223,f>>24,f>>16,f>>8,f),u=5}for(r=0;r<f;r++)u+=t(e,n,d=c[r]),u+=t(e,n,i[d]);return u}if("boolean"===s)return e.push(i?195:194),1;if("undefined"===s)return e.push(212,0,0),3;throw new Error("Could not encode")}(e,i,t),r=new ArrayBuffer(s),o=new DataView(r),a=0,h=0,f=-1;0<i.length&&(f=i[0].t);for(var u,l=0,c=0,d=0,g=e.length;d<g;d++)if(o.setUint8(h+d,e[d]),d+1===f){if(l=(u=i[a]).u,c=h+f,u.l)for(var p=new Uint8Array(u.l),y=0;y<l;y++)o.setUint8(c+y,p[y]);else u.h?n(o,c,u.h):void 0!==u.o&&o.setFloat64(c,u.o);h+=l,i[++a]&&(f=i[a].t)}let w=Array.from(new Uint8Array(r));return w.unshift(4),new Uint8Array(w).buffer}(r))};function p(t,e){const n=new CustomEvent(t,{detail:e});c.dispatchEvent(n)}const y=t=>{if("Blockly"in window)return w(t);const n=function(t){var n=new e(t=t.slice(1)),i=n.v();if(n.t===t.byteLength)return i;throw new Error(t.byteLength-n.t+" trailing bytes")}(t.data);if(console.warn(n),"object"!=typeof n)return;if("3"===n.toString()&&setTimeout((()=>g("PLAYER_LEADERBOARD_REQUESTED")),500),2!==n.type)return;const{data:i,key:s}=n.data[1];switch(s){case"UPDATED_PLAYER_LEADERBOARD":d.PLAYER_LEADERBOARD=i.terms;break;case"PLAYER_JOINS_STATIC_STATE":d.GAME_STATE=i,p("GAME_STATE");break;case"IMPOSTER_MODE_PEOPLE":case"LAVA_RESULTS":case"DEFENDING_HOMEBASE_STATUS":case"AVAILABLE_HOMEBASE_UPGRADES":case"AVAILABLE_LAVA_UPGRADES":d[s]=i;break;default:if(!i||!i?.type)return;d.ROOM=n.data[0].slice(8),d[i.type]=i.value}},w=t=>{const e=u(t.data);switch(e.type){case"AUTH_ID":p("AUTH_ID",e.message);break;case"MESSAGE_FOR_DEVICE":p("MESSAGE_FOR_DEVICE",e.message)}},_=WebSocket.prototype.send;WebSocket.prototype.send=function(t){return console.warn("[S]",t),d.ws=this,this.removeEventListener("message",y),this.addEventListener("message",y),"Blockly"in window?(t=>{const e=u(t);"MOVED"===e.type&&p("MOVED",e.message),l().send(t)})(t):_.apply(this,arguments)};const m=t=>new Promise((e=>setTimeout(e,t))),v=()=>"g_"+Date.now().toString(32)+"_"+Math.floor(1e4*Math.random()).toString(32),A=t=>Array.from({length:t},v),b=function(t){const e=t??C(),n=E(e.answers),i=S();if("text"===e.type)return{index:-1,type:"input",text:n.text,choice:n,element:null};for(const t of i){const e=t.textContent,s=t.getElementsByTagName("img")[0]?.src??"";if((n.text||"")===e&&(n.image||"")===s)return{index:i?.indexOf(t),type:"text",text:n.text??"",choice:n,element:t}}return{type:null}},E=function(t){for(const e of t??[])if(e.correct){let t="text";return e.text||(t="image"),e.type=t,e}return{type:null}},S=function(){return Array.from(document.querySelector(".sc-hKFoFe")?.children??[])},C=function(){const t=d.GAME_QUESTIONS,e=k();if(!e||!t)return{type:null};let n=[];for(const i of t)e.img===i.image&&e.text===i.text&&n.push(i);for(const t of n){const e=b(t);if(e?.type)return t}return{type:null}},k=function(){const t=document.querySelector(".notranslate.lang-en")||document.querySelector("img[alt=Question]");if(t){return{img:document.querySelector("img[alt=Question]")?.src??"",text:t.textContent}}return{type:null}},U=()=>{const t=d.GAME_QUESTIONS?.[0];g("QUESTION_ANSWERED",{questionId:t._id,answer:E(t.answers)._id})},I={Answers:{type:"header"},"Auto Answer":{type:"toggle",value:!1,keybindId:"classic_auto_answer",action:async function(){U(),await m(I["Auto Answer Config"].elements.Delay.value),this.value&&this.action.bind(this)()}},"Auto Answer Config":{type:"collapse",elements:{Delay:{type:"slider",interval:[500,250,2500],value:1500,numSuffix:"ms",colors:{red:20,orange:20,lime:60}},"Question Index":{type:"slider",interval:[0,1,4],value:0},"Success Rate":{type:"slider",interval:[0,5,100],value:100,numSuffix:"%"}}},"Answer Correctly Once":{type:"button",action:U},"Highlight Answer":{type:"toggle",value:!1,action:async function(){const t=b();if(t&&"text"===t?.type&&t.index){const e=S()?.[t.index];e&&(e.children[0].style.background="dodgerblue",e.children[0].style.color="black")}await m(250),this.value?this.action.bind(this)():S()?.forEach((t=>{t.children[0].style.background="",t.children[0].style.color=""}))}},"Hidden Answer":{type:"toggle",value:!1,action:async function(){const t=b();"text"===t?.type&&t.index?document.title=`${t.index+1}lay Gimkit! - Enter game code here | Gimkit`:document.title="Play Gimkit! - Enter game code here | Gimkit",await m(250),this.value?this.action.bind(this)():document.title="Play Gimkit! - Enter game code here | Gimkit"}},"Input Answer":{type:"toggle",value:!1,action:async function(){const t=b(),e=document.getElementsByTagName("form")[0]?.children[0]??{};if("input"===t?.type&&e&&(e.placeholder=t.text),await m(250),this.value)this.action.bind(this)();else{(document.getElementsByTagName("form")[0]?.children[0]??{}).placeholder="Enter answer here..."}}},Upgrades:{type:"header"},"Auto Upgrade":{type:"toggle",value:!1,action:async function(){function t(t,e){g("UPGRADE_PURCHASED",{upgradeName:t,level:e})}let e=d.BALANCE??0;const n=d.PERSONAL_ACTIVE_POWERUPS?.includes("discount")?.75:1,i=I["Auto Upgrade Config"].elements["Money Per Question"].value,s=I["Auto Upgrade Config"].elements.Multiplier.value,r=I["Auto Upgrade Config"].elements["Streak Bonus"].value,o=I["Auto Upgrade Config"].elements.Insurance.value;if(i){const i=d.GAME_STATE.upgrades[0].levels,s=d.UPGRADE_LEVELS.moneyPerQuestion,r=(i[s]?.price??1/0)*n*(d.UPGRADE_PRICING_DISCOUNT??1);e>=r&&(t("Money Per Question",s+1),e-=r)}if(s){const i=d.GAME_STATE.upgrades[1].levels,s=d.UPGRADE_LEVELS.multiplier,r=(i[s]?.price??1/0)*n*(d.UPGRADE_PRICING_DISCOUNT??1);e>=r&&(t("Multiplier",s+1),e-=r)}if(r){const i=d.GAME_STATE.upgrades[2].levels,s=d.UPGRADE_LEVELS.streakBonus,r=(i[s]?.price??1/0)*n*(d.UPGRADE_PRICING_DISCOUNT??1);e>=r&&(t("Streak Bonus",s+1),e-=r)}if(o){const i=d.GAME_STATE.upgrades[3].levels,s=d.UPGRADE_LEVELS.insurance,r=(i[s]?.price??1/0)*n*(d.UPGRADE_PRICING_DISCOUNT??1);e>=r&&(t("Insurance",s+1),e-=r)}await m(500),this.value&&this.action.bind(this)()}},"Auto Upgrade Config":{type:"collapse",elements:{"Money Per Question":{type:"toggle",value:!0},Multiplier:{type:"toggle",value:!0},"Streak Bonus":{type:"toggle",value:!0},Insurance:{type:"toggle",value:!1}}}},$={Answers:I.Answers,"Auto Answer":{type:"toggle",value:!1,action:async function(){"questionStatus"===d.PARDY_MODE_STATE?.[0].value.key&&"ask"===d.PARDY_MODE_STATE[0].value.value&&(await m($["Auto Answer Config"].elements.Delay.value),U(),await m(500)),await m(10),this.value&&this.action.bind(this)()}},"Auto Answer Config":{type:"collapse",elements:{Delay:{type:"slider",interval:[0,250,2500],value:0,numSuffix:"ms",colors:{orange:50,lime:50}},"Question Index":I["Auto Answer Config"].elements["Question Index"],"Success Rate":I["Auto Answer Config"].elements["Success Rate"]}},"Answer Correctly Once":I["Answer Correctly Once"],"Highlight Answer":I["Highlight Answer"],"Hidden Answer":I["Hidden Answer"],"Input Answer":I["Input Answer"]},x={Answers:I.Answers,"Auto Answer":I["Auto Answer"],"Auto Answer Config":I["Auto Answer Config"],"Answer Correctly Once":I["Answer Correctly Once"],"Highlight Answer":I["Highlight Answer"],"Hidden Answer":I["Hidden Answer"],"Input Answer":I["Input Answer"]},O=JSON.parse(localStorage.getItem("g_keybinds")||"{}"),M=new EventTarget;function T(t,e){const n=new CustomEvent(t,{detail:e});M.dispatchEvent(n)}const R=()=>localStorage.setItem("g_keybinds",JSON.stringify(O));window.addEventListener("keydown",(t=>{const e=ht(),n=O[e];for(const[i,s]of Object.entries(n))if(t.key===s){T("KEYBIND",{keybindId:i,key:t.key,mode:e});break}}));const[L,D,N,P,G,B,H,V,F,K,q,Q,Y,z]=A(14),j={keybind:t=>{const e=document.createElement("span");return e.className=K,e.setAttribute("keybind",t.keybindId??""),e.setAttribute("keybind-key",t.key??""),e.textContent=t.key&&t.keybindId?t.key:"[ ]",e.addEventListener("click",(n=>{Z.bindingKey||(e.textContent="...",Z.bindingKey=!0,Z.boundKey=n=>{(t=>{const e=ht();O[e]&&(delete O[e][t],R())})(t.keybindId),((t,e)=>{const n=ht();O[n]||(O[n]={}),O[n][t]=e,R()})(t.keybindId,n),t.key=n,e.textContent=n,e.setAttribute("keybind-key",n),Z.bindingKey=!1,Z.boundKey=t=>{}},setTimeout((()=>{Z.bindingKey=!1,e.textContent=t.key&&t.keybindId?t.key:"[ ]",Z.boundKey=t=>{}}),1e3))})),e},toggle:(t,e)=>{const n=document.createElement("div");n.className=`${L} ${D} `+(e.value?N:P),n.setAttribute("keybind",e.keybindId??"");const i=document.createElement("span");return i.textContent=t,t.length>21&&(i.style.fontSize="17px"),n.appendChild(i),e.keybindId&&n.appendChild(j.keybind(e)),n},button:(t,e)=>{const n=document.createElement("div");n.className=`${L} ${q}`,n.setAttribute("keybind",e.keybindId??"");const i=document.createElement("span");return i.textContent=t,t.length>21&&(i.style.fontSize="17px"),n.appendChild(i),e.keybindId&&n.appendChild(j.keybind(e)),n},slider:(t,e)=>{const n=document.createElement("div");n.className=`${L} ${z}`;const i=document.createElement("span");i.textContent=`${t}: ${e.value}${e.numSuffix||""}`;const s=document.createElement("input");if(s.type="range",s.className=v(),s.min=e.interval[0].toString(),s.step=e.interval[1].toString(),s.max=e.interval[2].toString(),s.value=e.value.toString(),n.appendChild(i),n.appendChild(s),e.colors){const t=document.createElement("style");let i="linear-gradient(90deg",r=0;for(const[t,n]of Object.entries(e.colors))r&&(i+=`, ${t} ${r}%`),i+=`, ${t} ${n+r}%`,r+=n;t.innerHTML=`#${W} .${s.className}::-moz-range-track {background: ${i}) !important;}`,n.appendChild(t)}return n},nav:()=>{if(document.querySelector(`#${W}`))return document.querySelector(`#${W}`);const t=document.createElement("div");return t.id=W,t.style.display="none",document.body.appendChild(t),t},style:()=>{if(document.querySelector(`style#${J}`))return;const t=document.createElement("style");t.id=J,t.innerHTML=` @import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n  #${W} {position: fixed;width: 280px;height: 500px;background: #00000090;font-family: 'Baloo 2', cursive;border-radius: 3px;font-size: 19px;user-select: none;overflow-y: scroll;-ms-overflow-style: none;scrollbar-width: none;overscroll-behavior-y: none;z-index: 99999;}\n  #${W}::-webkit-scrollbar {display: none;}\n  #${W} .${G}, #${W} .${L}, #${W} .${H} {display: block;width: 100%;height: 40px;line-height: 40px;color: white;}\n  #${W} span.${G} {text-align: center;border-bottom-style: solid;border-bottom-width: 3px;animation: 7s infinite rainbowBC, 7s infinite rainbowC;}\n  #${W} .${L} {position: relative;transition: 0.3s background;}\n  #${W} .${L} span:first-child {color: white;transition: 0.2s color;padding-left: 20px;}\n  #${W} .${H} {transition: 0.3s height;}\n  #${W} .${H}:not(.${Q}) {overflow-y: hidden;height: 40px;}\n  #${W} .${H}.${Q} {height: auto;}\n  #${W} .${L}.${D}.${P} span:first-child {color: #f00a;}\n  #${W} .${L}.${D}.${N} span:first-child {color: #1f0e;}\n  #${W} .${L}:hover, #${W} .${H}:hover {background: #ffffff20;cursor: pointer;}\n  #${W} .${B}:hover {cursor: move;}\n  #${W} .${L} span.${K} {position: absolute;display: block;right: 0px;top: 0px;width: 40px;color: white;background: #ffffff10;text-align: center;margin-right: 7px;}\n  #${W} .${L} span.${K}[keybind-key=""] {color: #00000050;}\n  #${W} .${H} span.${F} {display: inline-block;width: 40px;text-align: center;transition: 0.2s transform;font-family: 'Righteous', cursive;}\n  #${W} .${H}.${Q} span.${F} {transform: rotate(90deg);}\n  .${Y} {position: absolute;right: 12px;top: 7px;opacity: 0.25;transition: 0.2s opacity;}\n  .${Y}:hover {opacity: 0.5;cursor: pointer;}\n  .${Y}.${N} {opacity: 1;}\n  #${W} .${z} {height: 60px;}\n  #${W} .${z} span {position: absolute;top: 8px;line-height: initial;}\n  #${W} .${z} input {position: absolute;top: 28px;width: calc(100% - 40px);left: 20px;background: transparent;}\n  #${W} .${z} input[type="range"]::-moz-range-thumb {height: 17px;width: 8px;border: none;border-radius: 0px;background: #9736FF;cursor: col-resize;}\n  #${W} .${z} input[type="range"]::-moz-range-track {height: 2.4px;border: none;background: white;border-radius: 0px;}\n  @keyframes rainbowBC {\n    0% { border-color: red; }\n    18% { border-color: orange; }\n    36% { border-color: yellow; }\n    54% { border-color: lime; }\n    72% { border-color: dodgerblue; }\n    90% { border-color: violet; }\n    100% { border-color: red; }\n  }\n  @keyframes rainbowC {\n    0% { color: red; }\n    18% { color: orange; }\n    36% { color: yellow; }\n    54% { color: lime; }\n    72% { color: dodgerblue; }\n    90% { color: violet; }\n    100% { color: red; }\n  }`,document.head.appendChild(t)},elements:(t,e=!1,n,i)=>{const s=[];for(const[r,o]of Object.entries(t))switch(o.type){case"header":{const t=document.createElement("span");if(t.className=`${G} ${B}`,e)t.textContent=r;else{t.innerHTML=`${r}<svg class="${Y}" fill="#8e3bff" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#8e3bff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1154.976 0 988.342 166.52c-60.448 60.447-63.436 153.418-15.4 220.646L670.359 689.751c-4.022 4.022-6.55 8.964-9.079 13.79-147.212-61.022-328.671-34.246-444.626 81.709l-98.027 98.141 418.31 418.195-520.129 520.129c-22.41 22.409-22.41 58.724 0 81.248 11.262 11.147 25.972 16.778 40.682 16.778s29.42-5.63 40.567-16.778l520.128-520.129 418.195 418.31 98.142-98.142c75.962-75.847 117.793-176.862 117.793-284.313 0-56.195-12.067-110.208-33.787-160.198 2.758-1.839 5.861-2.988 8.275-5.516l303.963-303.964c29.19 21.145 63.896 33.097 100.67 33.097 46.083 0 89.293-17.928 121.93-50.565L1920 764.909 1154.976 0Z" fill-rule="evenodd"></path> </g></svg>`;const n=t.querySelector("svg");n.addEventListener("click",(t=>{n.classList.toggle(N),Z.pinned=!Z.pinned})),e=!0}t.addEventListener("mousedown",at),s.push(t);break}case"toggle":{const t=j.toggle(r,o);t.addEventListener("click",(e=>{if(!e.target?.classList.contains("key")){if(t.classList.toggle(N),t.classList.toggle(P),n&&i){const t=n[i].elements[r];t.value=!t.value}else o.value=!o.value;o.action?.()}})),s.push(t);break}case"button":{const t=j.button(r,o);t.addEventListener("click",(t=>{t.target?.classList.contains("key")||o.action()})),s.push(t);break}case"collapse":{const n=document.createElement("div");n.className=`${H} ${V}`;const i=document.createElement("span");i.className=`${F} ${V}`,i.textContent=">";const a=document.createElement("span");a.className=V,a.textContent=r,r.length>21&&(a.style.fontSize="17px");const h=document.createElement("div");n.appendChild(i),n.appendChild(a),n.appendChild(h);const f=j.elements(o.elements,e,t,r);for(const t of f)h.appendChild(t);n.addEventListener("click",(t=>{t.target?.classList.contains(V)&&n.classList.toggle(Q)})),s.push(n);break}case"slider":{const t=j.slider(r,o);t.querySelector("input").addEventListener("input",(e=>{const n=e.target;o.value=parseInt(n.value),t.querySelector("span").textContent=`${r}: ${o.value}${o.numSuffix||""}`})),s.push(t);break}}return s}},[W,J]=A(2),X=[0,0,0,0,!1],Z={pinned:!1,bindingKey:!1,boundKey:t=>{}};let tt=1,et=0,nt=0,it={};const st=t=>{it=t,j.style();const e=j.nav();e.innerHTML="";const n=j.elements(t);for(const t of n)e.appendChild(t)},rt=t=>{tt=Math.round(10*t)/10,j.nav().style.transform=`scale(${tt})`,et=Math.abs((280-j.nav().offsetWidth)/2),nt=Math.abs((500-j.nav().offsetHeight)/2),ot()},ot=()=>{const t=j.nav();window.innerWidth-et<parseInt(t.style.left)+t.offsetWidth&&(t.style.left=""),t.style.right=-1*et+"px",window.innerHeight-nt<parseInt(t.style.top)+t.offsetHeight&&(t.style.top=""),t.style.bottom=-1*nt+"px"},at=t=>{X[2]=t.clientX,X[3]=t.clientY,X[4]=!0};window.addEventListener("mousedown",(t=>{Array.from(j.nav().querySelectorAll("*")).includes(t.target)||Z.pinned||(j.nav().style.display="none",Z.bindingKey=!1)})),window.addEventListener("resize",ot),window.addEventListener("mouseup",(()=>{X[4]=!1})),window.addEventListener("mousemove",(t=>{if(!X[4])return;X[0]=X[2]-t.clientX,X[1]=X[3]-t.clientY,X[2]=t.clientX,X[3]=t.clientY;const e=j.nav();e.style.top=Math.max(-1*nt,e.offsetTop-X[1])+"px",e.style.left=Math.max(-1*et,e.offsetLeft-X[0])+"px",ot()})),window.addEventListener("contextmenu",(t=>{const e=j.nav();e.style.display="",e.style.left=Math.min(window.innerWidth-e.offsetWidth,t.x-et)+"px",e.style.top=Math.min(window.innerHeight-e.offsetHeight,t.y-nt)+"px",ot(),t.preventDefault()})),window.addEventListener("keydown",(t=>{""===j.nav().style.display&&("-"===t.key&&rt(Math.max(.5,tt-.1)),"="===t.key&&rt(Math.min(1,tt+.1)),Z.bindingKey&&(["Escape","Backspace"].includes(t.key)?Z.bindingKey=!1:Z.boundKey(t.key)));const e=O[t.key];if(e){function n(t){if("toggle"===t.type){if(t.keybindId===e)return t.value=!t.value,t.action?.(),!0}else if("button"===t.type&&t.keybindId===e)return t.action?.(),!0}t:for(const i of Object.values(it))if("collapse"===i.type){for(const s of Object.values(i.elements))if(n(s))break t}else if(n(i))break t}}));const ht=()=>d.GAME_STATE.gameOptions.specialGameType[0];document.body.style.background="#4C1B81",window.addEventListener("load",(t=>{st(I)})),c.addEventListener("GAME_STATE",(t=>{switch(t.detail,ht()){case"CLASSIC":default:st(I);break;case"PARDY":st($);break;case"IMPOSTER":st(x)}})),M.addEventListener("KEYBIND",(t=>{t.detail})),setInterval((()=>{Array.from(document.body.children??[]).forEach((t=>{t.id!==W&&(t.style.zIndex="10")}))}),200),t.mode=ht};if(Object.isFrozen(WebSocket.prototype)){const w=window.open(location.href,'_blank');w.ssrc=s.toString();w.eval(s+';s({})');w.focus();}else s({})})();
