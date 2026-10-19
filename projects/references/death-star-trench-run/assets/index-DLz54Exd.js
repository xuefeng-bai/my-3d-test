(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const B0="185",rg=0,Tf=1,lg=2,Nc=1,cg=2,Kr=3,pi=0,Yn=1,cn=2,Ls=0,ta=1,Jt=2,Ef=3,Af=4,Yp=5,Fa=100,ug=101,hg=102,fg=103,dg=104,$p=200,pg=201,mg=202,gg=203,Fh=204,Nh=205,vg=206,xg=207,Kp=208,_g=209,yg=210,bg=211,Mg=212,Sg=213,wg=214,Uh=0,Oh=1,zh=2,sr=3,Bh=4,kh=5,Vh=6,Gh=7,Zp=0,Tg=1,Eg=2,Ds=0,k0=1,V0=2,G0=3,tu=4,H0=5,W0=6,q0=7,Jp=300,no=301,ar=302,fu=303,du=304,nu=306,Hh=1e3,ea=1001,Wh=1002,Zn=1003,Ag=1004,Pl=1005,ii=1006,pu=1007,ja=1008,Ui=1009,Qp=1010,jp=1011,rl=1012,X0=1013,Fs=1014,as=1015,Ti=1016,Y0=1017,$0=1018,ll=1020,em=35902,tm=35899,nm=1021,im=1022,os=1023,aa=1026,eo=1027,K0=1028,Z0=1029,io=1030,J0=1031,Q0=1033,Uc=33776,Oc=33777,zc=33778,Bc=33779,qh=35840,Xh=35841,Yh=35842,$h=35843,Kh=36196,Zh=37492,Jh=37496,Qh=37488,jh=37489,Wc=37490,e0=37491,t0=37808,n0=37809,i0=37810,s0=37811,a0=37812,o0=37813,r0=37814,l0=37815,c0=37816,u0=37817,h0=37818,f0=37819,d0=37820,p0=37821,m0=36492,g0=36494,v0=36495,x0=36283,_0=36284,qc=36285,y0=36286,Cg=3200,b0=0,Pg=1,Na="",Di="srgb",cl="srgb-linear",Xc="linear",Kt="srgb",uo=7680,Cf=519,Rg=512,Ig=513,Lg=514,j0=515,Dg=516,Fg=517,ef=518,Ng=519,Pf=35044,tn=35048,Rf="300 es",Rs=2e3,ul=2001;function Ug(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Og(){const i=Yc("canvas");return i.style.display="block",i}const If={};function Lf(...i){const e="THREE."+i.shift();console.log(e,...i)}function sm(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function vt(...i){i=sm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Bt(...i){i=sm(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){const e=i.join(" ");e in If||(If[e]=!0,vt(...i))}function zg(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Bg={[Uh]:Oh,[zh]:Vh,[Bh]:Gh,[sr]:kh,[Oh]:Uh,[Vh]:zh,[Gh]:Bh,[kh]:sr};class ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=Math.PI/180,M0=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function kg(i,e){return(i%e+e)%e}function gu(i,e,t){return(1-t)*i+t*e}function yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class _e{static{_e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,r){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3];if(f!==v||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-r;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,r=Math.sin(r*y)/M,l=l*p+h*r,c=c*p+d*r,u=u*p+g*r,f=f*p+v*r}else{l=l*p+h*r,c=c*p+d*r,u=u*p+g*r,f=f*p+v*r;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,a,o){const r=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=a[o],h=a[o+1],d=a[o+2],g=a[o+3];return e[t]=r*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-r*d,e[t+2]=c*g+u*d+r*h-l*f,e[t+3]=u*g-r*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(s/2),f=r(a/2),h=l(n/2),d=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+r+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(o-s)*d}else if(n>r&&n>f){const d=2*Math.sqrt(1+n-r-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(a+c)/d}else if(r>f){const d=2*Math.sqrt(1+r-n-f);this._w=(a-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-r);this._w=(o-s)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*r+s*c-a*l,this._y=s*u+o*l+a*r-n*c,this._z=a*u+o*c+n*l-s*r,this._w=o*u-n*r-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,o=e._w,r=this.dot(e);r<0&&(n=-n,s=-s,a=-a,o=-o,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{static{b.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*s-r*n),u=2*(r*t-a*s),f=2*(a*n-o*t);return this.x=t+l*c+o*f-r*u,this.y=n+l*u+r*c-a*f,this.z=s+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,r=t.y,l=t.z;return this.x=s*l-a*r,this.y=a*o-n*l,this.z=n*r-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new b,Df=new Ct;class Mt{static{Mt.prototype.isMatrix3=!0}constructor(e,t,n,s,a,o,r,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c)}set(e,t,n,s,a,o,r,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=r,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],x=s[7],w=s[2],T=s[5],E=s[8];return a[0]=o*v+r*y+l*w,a[3]=o*m+r*M+l*T,a[6]=o*p+r*x+l*E,a[1]=c*v+u*y+f*w,a[4]=c*m+u*M+f*T,a[7]=c*p+u*x+f*E,a[2]=h*v+d*y+g*w,a[5]=h*m+d*M+g*T,a[8]=h*p+d*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-n*a*u+n*r*l+s*a*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],f=u*o-r*c,h=r*l-u*a,d=c*a-o*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(r*n-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*a-r*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-s*c,s*l,-s*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xu.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Mt,Ff=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vg(){const i={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===Kt&&(s.r=na(s.r),s.g=na(s.g),s.b=na(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Na?Xc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cl]:{primaries:e,whitePoint:n,transfer:Xc,toXYZ:Ff,fromXYZ:Nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:n,transfer:Kt,toXYZ:Ff,fromXYZ:Nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),i}const Ot=Vg();function na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ho;class Gg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=Yc("canvas")),ho.width=e.width,ho.height=e.height;const s=ho.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=na(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(na(t[n]/255)*255):t[n]=na(t[n]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hg=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(_u(s[o].image)):a.push(_u(s[o]))}else a=_u(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function _u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let Wg=0;const yu=new b;class fi extends ao{constructor(e=fi.DEFAULT_IMAGE,t=fi.DEFAULT_MAPPING,n=ea,s=ea,a=ii,o=ja,r=os,l=Ui,c=fi.DEFAULT_ANISOTROPY,u=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=dr(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yu).x}get height(){return this.source.getSize(yu).y}get depth(){return this.source.getSize(yu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case ea:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case ea:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Jp;fi.DEFAULT_ANISOTROPY=1;class Tn{static{Tn.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,w=(p+1)/2,T=(u+h)/4,E=(f+v)/4,_=(g+m)/4;return M>x&&M>w?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=T/n,a=E/n):x>w?x<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),n=T/s,a=_/s):w<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),n=E/a,s=_/a),this.set(n,s,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qg extends ao{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tn(0,0,e,t),this.scissorTest=!1,this.viewport=new Tn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new fi(s),o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends qg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class am extends fi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xg extends fi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class st{static{st.prototype.isMatrix4=!0}constructor(e,t,n,s,a,o,r,l,c,u,f,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c,u,f,h,d,g,v,m)}set(e,t,n,s,a,o,r,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=o,p[9]=r,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/fo.setFromMatrixColumn(e,0).length(),a=1/fo.setFromMatrixColumn(e,1).length(),o=1/fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*u,d=o*f,g=r*u,v=r*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-r*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*r,t[4]=g*r-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-r,t[2]=d*r-g,t[6]=v+h*r,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*r,t[4]=-o*f,t[8]=g+d*r,t[1]=d+g*r,t[5]=o*u,t[9]=v-h*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=r*u,v=r*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=r*l,v=r*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=r*l,v=r*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=r*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,$g)}lookAt(e,t,n){const s=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),fa.crossVectors(n,Ai),fa.lengthSq()===0&&(Math.abs(n.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),fa.crossVectors(n,Ai)),fa.normalize(),Rl.crossVectors(Ai,fa),s[0]=fa.x,s[4]=Rl.x,s[8]=Ai.x,s[1]=fa.y,s[5]=Rl.y,s[9]=Ai.y,s[2]=fa.z,s[6]=Rl.z,s[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],w=n[15],T=s[0],E=s[4],_=s[8],A=s[12],R=s[1],I=s[5],F=s[9],H=s[13],X=s[2],O=s[6],V=s[10],z=s[14],re=s[3],ue=s[7],Y=s[11],ee=s[15];return a[0]=o*T+r*R+l*X+c*re,a[4]=o*E+r*I+l*O+c*ue,a[8]=o*_+r*F+l*V+c*Y,a[12]=o*A+r*H+l*z+c*ee,a[1]=u*T+f*R+h*X+d*re,a[5]=u*E+f*I+h*O+d*ue,a[9]=u*_+f*F+h*V+d*Y,a[13]=u*A+f*H+h*z+d*ee,a[2]=g*T+v*R+m*X+p*re,a[6]=g*E+v*I+m*O+p*ue,a[10]=g*_+v*F+m*V+p*Y,a[14]=g*A+v*H+m*z+p*ee,a[3]=y*T+M*R+x*X+w*re,a[7]=y*E+M*I+x*O+w*ue,a[11]=y*_+M*F+x*V+w*Y,a[15]=y*A+M*H+x*z+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=l*d-c*h,M=r*d-c*f,x=r*h-l*f,w=o*d-c*u,T=o*h-l*u,E=o*f-r*u;return t*(v*y-m*M+p*x)-n*(g*y-m*w+p*T)+s*(g*M-v*w+p*E)-a*(g*x-v*T+m*E)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],o=e[5],r=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-r*c)-n*(a*u-r*l)+s*(a*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*r-n*o,M=t*l-s*o,x=t*c-a*o,w=n*l-s*r,T=n*c-a*r,E=s*c-a*l,_=u*v-f*g,A=u*m-h*g,R=u*p-d*g,I=f*m-h*v,F=f*p-d*v,H=h*p-d*m,X=y*H-M*F+x*I+w*R-T*A+E*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return e[0]=(r*H-l*F+c*I)*O,e[1]=(s*F-n*H-a*I)*O,e[2]=(v*E-m*T+p*w)*O,e[3]=(h*T-f*E-d*w)*O,e[4]=(l*R-o*H-c*A)*O,e[5]=(t*H-s*R+a*A)*O,e[6]=(m*x-g*E-p*M)*O,e[7]=(u*E-h*x+d*M)*O,e[8]=(o*F-r*R+c*_)*O,e[9]=(n*R-t*F-a*_)*O,e[10]=(g*T-v*x+p*y)*O,e[11]=(f*x-u*T-d*y)*O,e[12]=(r*A-o*I-l*_)*O,e[13]=(t*I-n*A+s*_)*O,e[14]=(v*M-g*w-m*y)*O,e[15]=(u*w-f*M+h*y)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,r=e.y,l=e.z,c=a*o,u=a*r;return this.set(c*o+n,c*r-s*l,c*l+s*r,0,c*r+s*l,u*r+n,u*l-s*o,0,c*l-s*r,u*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,r=t._z,l=t._w,c=a+a,u=o+o,f=r+r,h=a*c,d=a*u,g=a*f,v=o*u,m=o*f,p=r*f,y=l*c,M=l*u,x=l*f,w=n.x,T=n.y,E=n.z;return s[0]=(1-(v+p))*w,s[1]=(d+x)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(h+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(m-y)*E,s[10]=(1-(h+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let o=fo.set(s[0],s[1],s[2]).length();const r=fo.set(s[4],s[5],s[6]).length(),l=fo.set(s[8],s[9],s[10]).length();a<0&&(o=-o),Yi.copy(this);const c=1/o,u=1/r,f=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=f,Yi.elements[9]*=f,Yi.elements[10]*=f,t.setFromRotationMatrix(Yi),n.x=o,n.y=r,n.z=l,this}makePerspective(e,t,n,s,a,o,r=Rs,l=!1){const c=this.elements,u=2*a/(t-e),f=2*a/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(l)g=a/(o-a),v=o*a/(o-a);else if(r===Rs)g=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(r===ul)g=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,o,r=Rs,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,v;if(l)g=1/(o-a),v=o/(o-a);else if(r===Rs)g=-2/(o-a),v=-(o+a)/(o-a);else if(r===ul)g=-1/(o-a),v=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fo=new b,Yi=new st,Yg=new b(0,0,0),$g=new b(1,1,1),fa=new b,Rl=new b,Ai=new b,Uf=new st,Of=new Ct;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],r=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(St(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kg=0;const zf=new b,po=new Ct,Gs=new st,Il=new b,br=new b,Zg=new b,Jg=new Ct,Bf=new b(1,0,0),kf=new b(0,1,0),Vf=new b(0,0,1),Gf={type:"added"},Qg={type:"removed"},mo={type:"childadded",child:null},bu={type:"childremoved",child:null};class In extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new b,t=new Qn,n=new Ct,s=new b(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Mt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Il.copy(e):Il.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gs.lookAt(br,Il,this.up):Gs.lookAt(Il,br,this.up),this.quaternion.setFromRotationMatrix(Gs),s&&(Gs.extractRotation(s.matrixWorld),po.setFromRotationMatrix(Gs),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),mo.child=e,this.dispatchEvent(mo),mo.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(r=>({...r})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(e.materials,this.material[l]));s.material=r}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}In.DEFAULT_UP=new b(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gn extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ot.workingColorSpace){if(e=kg(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Su(o,a,e+1/3),this.g=Su(o,a,e),this.b=Su(o,a,e-1/3)}return Ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Di){function n(a){a!==void 0&&parseFloat(a)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const n=rm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Ot.workingToColorSpace(ti.copy(this),e),Math.round(St(ti.r*255,0,255))*65536+Math.round(St(ti.g*255,0,255))*256+Math.round(St(ti.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(ti.copy(this),t);const n=ti.r,s=ti.g,a=ti.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let l,c;const u=(r+o)/2;if(r===o)l=0,c=0;else{const f=o-r;switch(c=u<=.5?f/(o+r):f/(2-o-r),o){case n:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-n)/f+2;break;case a:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Di){Ot.workingToColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,s=ti.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(da),this.setHSL(da.h+e,da.s+t,da.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(da),e.getHSL(Ll);const n=gu(da.h,Ll.h,t),s=gu(da.s,Ll.s,t),a=gu(da.l,Ll.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Ve;Ve.NAMES=rm;class ev extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new b,Hs=new b,wu=new b,Ws=new b,go=new b,vo=new b,Hf=new b,Tu=new b,Eu=new b,Au=new b,Cu=new Tn,Pu=new Tn,Ru=new Tn;class Wi{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$i.subVectors(e,t),s.cross($i);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){$i.subVectors(s,t),Hs.subVectors(n,t),wu.subVectors(e,t);const o=$i.dot($i),r=$i.dot(Hs),l=$i.dot(wu),c=Hs.dot(Hs),u=Hs.dot(wu),f=o*c-r*r;if(f===0)return a.set(0,0,0),null;const h=1/f,d=(c*l-r*u)*h,g=(o*u-r*l)*h;return a.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ws)===null?!1:Ws.x>=0&&Ws.y>=0&&Ws.x+Ws.y<=1}static getInterpolation(e,t,n,s,a,o,r,l){return this.getBarycoord(e,t,n,s,Ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ws.x),l.addScaledVector(o,Ws.y),l.addScaledVector(r,Ws.z),l)}static getInterpolatedAttribute(e,t,n,s,a,o){return Cu.setScalar(0),Pu.setScalar(0),Ru.setScalar(0),Cu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Ru.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cu,a.x),o.addScaledVector(Pu,a.y),o.addScaledVector(Ru,a.z),o}static isFrontFacing(e,t,n,s){return $i.subVectors(n,t),Hs.subVectors(e,t),$i.cross(Hs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Hs.subVectors(this.a,this.b),$i.cross(Hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Wi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,r;go.subVectors(s,n),vo.subVectors(a,n),Tu.subVectors(e,n);const l=go.dot(Tu),c=vo.dot(Tu);if(l<=0&&c<=0)return t.copy(n);Eu.subVectors(e,s);const u=go.dot(Eu),f=vo.dot(Eu);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(go,o);Au.subVectors(e,a);const d=go.dot(Au),g=vo.dot(Au);if(g>=0&&d<=g)return t.copy(a);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(vo,r);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Hf.subVectors(a,s),r=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Hf,r);const p=1/(m+v+h);return o=v*p,r=h*p,t.copy(n).addScaledVector(go,o).addScaledVector(vo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(a,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Fl.subVectors(this.max,Mr),xo.subVectors(e.a,Mr),_o.subVectors(e.b,Mr),yo.subVectors(e.c,Mr),pa.subVectors(_o,xo),ma.subVectors(yo,_o),Va.subVectors(xo,yo);let t=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-Va.z,Va.y,pa.z,0,-pa.x,ma.z,0,-ma.x,Va.z,0,-Va.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-Va.y,Va.x,0];return!Iu(t,xo,_o,yo,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,xo,_o,yo,Fl))?!1:(Nl.crossVectors(pa,ma),t=[Nl.x,Nl.y,Nl.z],Iu(t,xo,_o,yo,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qs=[new b,new b,new b,new b,new b,new b,new b,new b],Ki=new b,Dl=new oo,xo=new b,_o=new b,yo=new b,pa=new b,ma=new b,Va=new b,Mr=new b,Fl=new b,Nl=new b,Ga=new b;function Iu(i,e,t,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){Ga.fromArray(i,a);const r=s.x*Math.abs(Ga.x)+s.y*Math.abs(Ga.y)+s.z*Math.abs(Ga.z),l=e.dot(Ga),c=t.dot(Ga),u=n.dot(Ga);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const Dn=new b,Ul=new _e;let tv=0;class We extends ao{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pf,this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array),a=xi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lm extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cm extends We{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends We{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nv=new oo,Sr=new b,Lu=new b;class mi{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nv.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Lu)),this.expandByPoint(Sr.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let iv=0;const Vi=new st,Du=new In,bo=new b,Ci=new oo,wr=new oo,qn=new b;class Tt extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?cm:lm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Mt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,n){return Vi.makeTranslation(e,t,n),this.applyMatrix4(Vi),this}scale(e,t,n){return Vi.makeScale(e,t,n),this.applyMatrix4(Vi),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const r=t[a];wr.setFromBufferAttribute(r),this.morphTargetsRelative?(qn.addVectors(Ci.min,wr.min),Ci.expandByPoint(qn),qn.addVectors(Ci.max,wr.max),Ci.expandByPoint(qn)):(Ci.expandByPoint(wr.min),Ci.expandByPoint(wr.max))}Ci.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)qn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(qn));if(t)for(let a=0,o=t.length;a<o;a++){const r=t[a],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)qn.fromBufferAttribute(r,c),l&&(bo.fromBufferAttribute(e,c),qn.add(bo)),s=Math.max(s,n.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const r=[],l=[];for(let _=0;_<n.count;_++)r[_]=new b,l[_]=new b;const c=new b,u=new b,f=new b,h=new _e,d=new _e,g=new _e,v=new b,m=new b;function p(_,A,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),h.fromBufferAttribute(a,_),d.fromBufferAttribute(a,A),g.fromBufferAttribute(a,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),r[_].add(v),r[A].add(v),r[R].add(v),l[_].add(m),l[A].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,A=y.length;_<A;++_){const R=y[_],I=R.start,F=R.count;for(let H=I,X=I+F;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new b,x=new b,w=new b,T=new b;function E(_){w.fromBufferAttribute(s,_),T.copy(w);const A=r[_];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),x.crossVectors(T,A);const I=x.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,A=y.length;_<A;++_){const R=y[_],I=R.start,F=R.count;for(let H=I,X=I+F;H<X;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new We(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new b,a=new b,o=new b,r=new b,l=new b,c=new b,u=new b,f=new b;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(s,a),u.cross(f),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,a),f.subVectors(s,a),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qn.fromBufferAttribute(e,t),qn.normalize(),e.setXYZ(t,qn.x,qn.y,qn.z)}toNonIndexed(){function e(r,l){const c=r.array,u=r.itemSize,f=r.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?d=l[v]*r.data.stride+r.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new We(h,u,f)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=e(l,n);t.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sv=0;class pr extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ta,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Nh,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fh&&(n.blendSrc=this.blendSrc),this.blendDst!==Nh&&(n.blendDst=this.blendDst),this.blendEquation!==Fa&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xs=new b,Fu=new b,Ol=new b,ga=new b,Nu=new b,zl=new b,Uu=new b;class um{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xs.copy(this.origin).addScaledVector(this.direction,t),Xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fu.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),ga.copy(this.origin).sub(Fu);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ol),r=ga.dot(this.direction),l=-ga.dot(Ol),c=ga.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-r,h=o*r-l,g=a*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*r)+h*(o*f+h+2*l)+c}else h=a,f=Math.max(0,-(o*h+r)),d=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(o*h+r)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*a+r)),h=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(f=Math.max(0,-(o*a+r)),h=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+r)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fu).addScaledVector(Ol,h),d}intersectSphere(e,t){Xs.subVectors(e.center,this.origin);const n=Xs.dot(this.direction),s=Xs.dot(Xs)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,r,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),f>=0?(r=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(r=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xs)!==null}intersectTriangle(e,t,n,s,a){Nu.subVectors(t,e),zl.subVectors(n,e),Uu.crossVectors(Nu,zl);let o=this.direction.dot(Uu),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ga.subVectors(this.origin,e);const l=r*this.direction.dot(zl.crossVectors(ga,zl));if(l<0)return null;const c=r*this.direction.dot(Nu.cross(ga));if(c<0||l+c>o)return null;const u=-r*ga.dot(Uu);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nf extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wf=new st,Ha=new um,Bl=new mi,qf=new b,kl=new b,Vl=new b,Gl=new b,Ou=new b,Hl=new b,Xf=new b,Wl=new b;class ft extends In{constructor(e=new Tt,t=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(a&&r){Hl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=r[l],f=a[l];u!==0&&(Ou.fromBufferAttribute(f,e),o?Hl.addScaledVector(Ou,u):Hl.addScaledVector(Ou.sub(t),u))}t.add(Hl)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(a),Ha.copy(e.ray).recast(e.near),!(Bl.containsPoint(Ha.origin)===!1&&(Ha.intersectSphere(Bl,qf)===null||Ha.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Wf.copy(a).invert(),Ha.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&Ha.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ha)))}_computeIntersections(e,t,n){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,d=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(r.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,w=M;x<w;x+=3){const T=r.getX(x),E=r.getX(x+1),_=r.getX(x+2);s=ql(this,p,e,n,c,u,f,T,E,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(r.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=r.getX(m),M=r.getX(m+1),x=r.getX(m+2);s=ql(this,o,e,n,c,u,f,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,w=M;x<w;x+=3){const T=x,E=x+1,_=x+2;s=ql(this,p,e,n,c,u,f,T,E,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,M=m+1,x=m+2;s=ql(this,o,e,n,c,u,f,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function av(i,e,t,n,s,a,o,r){let l;if(e.side===Yn?l=n.intersectTriangle(o,a,s,!0,r):l=n.intersectTriangle(s,a,o,e.side===pi,r),l===null)return null;Wl.copy(r),Wl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:i}}function ql(i,e,t,n,s,a,o,r,l,c){i.getVertexPosition(r,kl),i.getVertexPosition(l,Vl),i.getVertexPosition(c,Gl);const u=av(i,e,t,n,kl,Vl,Gl,Xf);if(u){const f=new b;Wi.getBarycoord(Xf,kl,Vl,Gl,f),s&&(u.uv=Wi.getInterpolatedAttribute(s,r,l,c,f,new _e)),a&&(u.uv1=Wi.getInterpolatedAttribute(a,r,l,c,f,new _e)),o&&(u.normal=Wi.getInterpolatedAttribute(o,r,l,c,f,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:r,b:l,c,normal:new b,materialIndex:0};Wi.getNormal(kl,Vl,Gl,h.normal),u.face=h,u.barycoord=f}return u}class hm extends fi{constructor(e=null,t=1,n=1,s,a,o,r,l,c=Zn,u=Zn,f,h){super(null,o,r,l,c,u,s,a,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi extends We{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mo=new st,Yf=new st,Xl=[],$f=new oo,ov=new st,Tr=new ft,Er=new mi;class hs extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ov)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),$f.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union($f)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),Er.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,o=e*a+1;for(let r=0;r<n.length;r++)n[r]=s[o+r]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Mo),Yf.multiplyMatrices(n,Mo),Tr.matrixWorld=Yf,Tr.raycast(e,Xl);for(let o=0,r=Xl.length;o<r;o++){const l=Xl[o];l.instanceId=a,l.object=this,t.push(l)}Xl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hm(new Float32Array(s*this.count),s,this.count,K0,as));const a=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const r=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return a[l]=r,a.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zu=new b,rv=new b,lv=new Mt;class La{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=zu.subVectors(n,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(zu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lv.getNormalMatrix(e),s=this.coplanarPoint(zu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wa=new mi,cv=new _e(.5,.5),Yl=new b;class sf{constructor(e=new La,t=new La,n=new La,s=new La,a=new La,o=new La){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rs,n=!1){const s=this.planes,a=e.elements,o=a[0],r=a[1],l=a[2],c=a[3],u=a[4],f=a[5],h=a[6],d=a[7],g=a[8],v=a[9],m=a[10],p=a[11],y=a[12],M=a[13],x=a[14],w=a[15];if(s[0].setComponents(c-o,d-u,p-g,w-y).normalize(),s[1].setComponents(c+o,d+u,p+g,w+y).normalize(),s[2].setComponents(c+r,d+f,p+v,w+M).normalize(),s[3].setComponents(c-r,d-f,p-v,w-M).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,p-m,w-x).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-x).normalize(),t===Rs)s[5].setComponents(c+l,d+h,p+m,w+x).normalize();else if(t===ul)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wa)}intersectsSprite(e){Wa.center.set(0,0,0);const t=cv.distanceTo(e.center);return Wa.radius=.7071067811865476+t,Wa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wa)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kf=new st,S0=new um,$l=new mi,Kl=new b;class af extends In{constructor(e=new Tt,t=new uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),$l.radius+=a,e.ray.intersectsSphere($l)===!1)return;Kf.copy(s).invert(),S0.copy(e.ray).applyMatrix4(Kf);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);Kl.fromBufferAttribute(f,m),Zf(Kl,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Kl.fromBufferAttribute(f,g),Zf(Kl,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Zf(i,e,t,n,s,a,o){const r=S0.distanceSqToPoint(i);if(r<t){const l=new b;S0.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fm extends fi{constructor(e=[],t=no,n,s,a,o,r,l,c,u){super(e,t,n,s,a,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class or extends fi{constructor(e,t,n=Fs,s,a,o,r=Zn,l=Zn,c,u=aa,f=1){if(u!==aa&&u!==eo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,a,o,r,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hv extends or{constructor(e,t=Fs,n=no,s,a,o=Zn,r=Zn,l,c=aa){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,a,o,r,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dm extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zs extends Tt{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function g(v,m,p,y,M,x,w,T,E,_,A){const R=x/E,I=w/_,F=x/2,H=w/2,X=T/2,O=E+1,V=_+1;let z=0,re=0;const ue=new b;for(let Y=0;Y<V;Y++){const ee=Y*I-H;for(let le=0;le<O;le++){const Ce=le*R-F;ue[v]=Ce*y,ue[m]=ee*M,ue[p]=X,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[p]=T>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(le/E),f.push(1-Y/_),z+=1}}for(let Y=0;Y<_;Y++)for(let ee=0;ee<E;ee++){const le=h+ee+O*Y,Ce=h+ee+O*(Y+1),Ue=h+(ee+1)+O*(Y+1),Ie=h+(ee+1)+O*Y;l.push(le,Ce,Ie),l.push(Ce,Ue,Ie),re+=6}r.addGroup(d,re,A),d+=re,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $c extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],o=[],r=[],l=[],c=new b,u=new _e;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wi extends Tt{constructor(e=1,t=1,n=1,s=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const u=[],f=[],h=[],d=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function y(){const x=new b,w=new b;let T=0;const E=(t-e)/n;for(let _=0;_<=a;_++){const A=[],R=_/a,I=R*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,X=H*l+r,O=Math.sin(X),V=Math.cos(X);w.x=I*O,w.y=-R*n+m,w.z=I*V,f.push(w.x,w.y,w.z),x.set(O,E,V).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-R),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<a;A++){const R=v[A][_],I=v[A+1][_],F=v[A+1][_+1],H=v[A][_+1];(e>0||A!==0)&&(u.push(R,I,H),T+=3),(t>0||A!==a-1)&&(u.push(I,F,H),T+=3)}c.addGroup(p,T,0),p+=T}function M(x){const w=g,T=new _e,E=new b;let _=0;const A=x===!0?e:t,R=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const X=F/s*l+r,O=Math.cos(X),V=Math.sin(X);E.x=A*V,E.y=m*R,E.z=A*O,f.push(E.x,E.y,E.z),h.push(0,R,0),T.x=O*.5+.5,T.y=V*.5*R+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){const H=w+F,X=I+F;x===!0?u.push(X,X+1,H):u.push(X+1,X,H),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class of extends wi{constructor(e=1,t=1,n=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,e,t,n,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(e){return new of(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bl extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],o=[];r(s),c(n),u(),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(a.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(y){const M=new b,x=new b,w=new b;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],x),d(t[T+2],w),l(M,x,w,y)}function l(y,M,x,w){const T=w+1,E=[];for(let _=0;_<=T;_++){E[_]=[];const A=y.clone().lerp(x,_/T),R=M.clone().lerp(x,_/T),I=T-_;for(let F=0;F<=I;F++)F===0&&_===T?E[_][F]=A:E[_][F]=A.clone().lerp(R,F/I)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const R=Math.floor(A/2);A%2===0?(h(E[_][R+1]),h(E[_+1][R]),h(E[_][R])):(h(E[_][R+1]),h(E[_+1][R+1]),h(E[_+1][R]))}}function c(y){const M=new b;for(let x=0;x<a.length;x+=3)M.x=a[x+0],M.y=a[x+1],M.z=a[x+2],M.normalize().multiplyScalar(y),a[x+0]=M.x,a[x+1]=M.y,a[x+2]=M.z}function u(){const y=new b;for(let M=0;M<a.length;M+=3){y.x=a[M+0],y.y=a[M+1],y.z=a[M+2];const x=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(x,1-w)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],w=o[y+4],T=Math.max(M,x,w),E=Math.min(M,x,w);T>.9&&E<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function h(y){a.push(y.x,y.y,y.z)}function d(y,M){const x=y*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const y=new b,M=new b,x=new b,w=new b,T=new _e,E=new _e,_=new _e;for(let A=0,R=0;A<a.length;A+=9,R+=6){y.set(a[A+0],a[A+1],a[A+2]),M.set(a[A+3],a[A+4],a[A+5]),x.set(a[A+6],a[A+7],a[A+8]),T.set(o[R+0],o[R+1]),E.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),w.copy(y).add(M).add(x).divideScalar(3);const I=m(w);v(T,R+0,y,I),v(E,R+2,M,I),v(_,R+4,x,I)}}function v(y,M,x,w){w<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.vertices,e.indices,e.radius,e.detail)}}class Bs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let r=0,l=a-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=n[s]-o,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(a-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),l=t||(o.isVector2?new _e:new b);return l.copy(r).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new b,s=[],a=[],o=[],r=new b,l=new st;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new b)}a[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),o[d]=o[d-1].clone(),r.crossVectors(s[d-1],s[d]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(St(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(r,g))}o[d].crossVectors(s[d],a[d])}if(t===!0){let d=Math.acos(St(a[0].dot(a[e]),-1,1));d/=e,s[0].dot(r.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rf extends Bs{constructor(e=0,t=0,n=1,s=1,a=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new _e){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fv extends rf{constructor(e,t,n,s,a,o){super(e,t,n,n,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lf(){let i=0,e=0,t=0,n=0;function s(a,o,r,l){i=a,e=r,t=-3*a+3*o-2*r-l,n=2*a-2*o+r+l}return{initCatmullRom:function(a,o,r,l,c){s(o,r,c*(r-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,r,l,c,u,f){let h=(o-a)/c-(r-a)/(c+u)+(r-o)/u,d=(r-o)/u-(l-o)/(u+f)+(l-r)/f;h*=u,d*=u,s(o,r,h,d)},calc:function(a){const o=a*a,r=o*a;return i+e*a+t*o+n*r}}}const Jf=new b,Qf=new b,Bu=new lf,ku=new lf,Vu=new lf;class cf extends Bs{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new b){const n=t,s=this.points,a=s.length,o=(a-(this.closed?0:1))*e;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let c,u;this.closed||r>0?c=s[(r-1)%a]:(Qf.subVectors(s[0],s[1]).add(s[0]),c=Qf);const f=s[r%a],h=s[(r+1)%a];if(this.closed||r+2<a?u=s[(r+2)%a]:(Jf.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Jf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Bu.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,m),ku.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,m),Vu.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Bu.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ku.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Vu.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Bu.calc(l),ku.calc(l),Vu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jf(i,e,t,n,s){const a=(n-e)*.5,o=(s-t)*.5,r=i*i,l=i*r;return(2*t-2*n+a+o)*l+(-3*t+3*n-2*a-o)*r+a*i+t}function dv(i,e){const t=1-i;return t*t*e}function pv(i,e){return 2*(1-i)*i*e}function mv(i,e){return i*i*e}function tl(i,e,t,n){return dv(i,e)+pv(i,t)+mv(i,n)}function gv(i,e){const t=1-i;return t*t*t*e}function vv(i,e){const t=1-i;return 3*t*t*i*e}function xv(i,e){return 3*(1-i)*i*i*e}function _v(i,e){return i*i*i*e}function nl(i,e,t,n,s){return gv(i,e)+vv(i,t)+xv(i,n)+_v(i,s)}class pm extends Bs{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){const n=t,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(nl(e,s.x,a.x,o.x,r.x),nl(e,s.y,a.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yv extends Bs{constructor(e=new b,t=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b){const n=t,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(nl(e,s.x,a.x,o.x,r.x),nl(e,s.y,a.y,o.y,r.y),nl(e,s.z,a.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mm extends Bs{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bv extends Bs{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gm extends Bs{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,s=this.v0,a=this.v1,o=this.v2;return n.set(tl(e,s.x,a.x,o.x),tl(e,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mv extends Bs{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,s=this.v0,a=this.v1,o=this.v2;return n.set(tl(e,s.x,a.x,o.x),tl(e,s.y,a.y,o.y),tl(e,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vm extends Bs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,s=this.points,a=(s.length-1)*e,o=Math.floor(a),r=a-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(jf(r,l.x,c.x,u.x,f.x),jf(r,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new _e().fromArray(s))}return this}}var w0=Object.freeze({__proto__:null,ArcCurve:fv,CatmullRomCurve3:cf,CubicBezierCurve:pm,CubicBezierCurve3:yv,EllipseCurve:rf,LineCurve:mm,LineCurve3:bv,QuadraticBezierCurve:gm,QuadraticBezierCurve3:Mv,SplineCurve:vm});class Sv extends Bs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new w0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const o=s[a]-n,r=this.curves[a],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(r);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new w0[s.type]().fromJSON(s))}return this}}class rr extends Sv{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mm(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new gm(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,o){const r=new pm(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,o){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,s,a,o),this}absarc(e,t,n,s,a,o){return this.absellipse(e,t,n,n,s,a,o),this}ellipse(e,t,n,s,a,o,r,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,a,o,r,l),this}absellipse(e,t,n,s,a,o,r,l){const c=new rf(e,t,n,s,a,o,r,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class iu extends rr{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new rr().fromJSON(s))}return this}}function wv(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=xm(i,0,s,t,!0);const o=[];if(!a||a.next===a.prev)return o;let r,l,c;if(n&&(a=Pv(i,e,a,t)),i.length>80*t){r=i[0],l=i[1];let u=r,f=l;for(let h=t;h<s;h+=t){const d=i[h],g=i[h+1];d<r&&(r=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-r,f-l),c=c!==0?32767/c:0}return hl(a,o,t,r,l,c,0),o}function xm(i,e,t,n,s){let a;if(s===kv(i,e,t,n)>0)for(let o=e;o<t;o+=n)a=ed(o/n|0,i[o],i[o+1],a);else for(let o=t-n;o>=e;o-=n)a=ed(o/n|0,i[o],i[o+1],a);return a&&lr(a,a.next)&&(dl(a),a=a.next),a}function so(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(lr(t,t.next)||En(t.prev,t,t.next)===0)){if(dl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hl(i,e,t,n,s,a,o){if(!i)return;!o&&a&&Fv(i,n,s,a);let r=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?Ev(i,n,s,a):Tv(i)){e.push(l.i,i.i,c.i),dl(i),i=c.next,r=c.next;continue}if(i=c,i===r){o?o===1?(i=Av(so(i),e),hl(i,e,t,n,s,a,2)):o===2&&Cv(i,e,t,n,s,a):hl(so(i),e,t,n,s,a,1);break}}}function Tv(i){const e=i.prev,t=i,n=i.next;if(En(e,t,n)>=0)return!1;const s=e.x,a=t.x,o=n.x,r=e.y,l=t.y,c=n.y,u=Math.min(s,a,o),f=Math.min(r,l,c),h=Math.max(s,a,o),d=Math.max(r,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Zr(s,r,a,l,o,c,g.x,g.y)&&En(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ev(i,e,t,n){const s=i.prev,a=i,o=i.next;if(En(s,a,o)>=0)return!1;const r=s.x,l=a.x,c=o.x,u=s.y,f=a.y,h=o.y,d=Math.min(r,l,c),g=Math.min(u,f,h),v=Math.max(r,l,c),m=Math.max(u,f,h),p=T0(d,g,e,t,n),y=T0(v,m,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Zr(r,u,l,f,c,h,M.x,M.y)&&En(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zr(r,u,l,f,c,h,x.x,x.y)&&En(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Zr(r,u,l,f,c,h,M.x,M.y)&&En(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zr(r,u,l,f,c,h,x.x,x.y)&&En(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Av(i,e){let t=i;do{const n=t.prev,s=t.next.next;!lr(n,s)&&ym(n,t,t.next,s)&&fl(n,s)&&fl(s,n)&&(e.push(n.i,t.i,s.i),dl(t),dl(t.next),t=i=s),t=t.next}while(t!==i);return so(t)}function Cv(i,e,t,n,s,a){let o=i;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&Ov(o,r)){let l=bm(o,r);o=so(o,o.next),l=so(l,l.next),hl(o,e,t,n,s,a,0),hl(l,e,t,n,s,a,0);return}r=r.next}o=o.next}while(o!==i)}function Pv(i,e,t,n){const s=[];for(let a=0,o=e.length;a<o;a++){const r=e[a]*n,l=a<o-1?e[a+1]*n:i.length,c=xm(i,r,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Uv(c))}s.sort(Rv);for(let a=0;a<s.length;a++)t=Iv(s[a],t);return t}function Rv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Iv(i,e){const t=Lv(i,e);if(!t)return e;const n=bm(t,i);return so(n,n.next),so(t,t.next)}function Lv(i,e){let t=e;const n=i.x,s=i.y;let a=-1/0,o;if(lr(i,t))return t;do{if(lr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>a&&(a=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const r=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_m(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);fl(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Dv(o,t)))&&(o=t,u=f)}t=t.next}while(t!==r);return o}function Dv(i,e){return En(i.prev,i,e.prev)<0&&En(e.next,i,i.next)<0}function Fv(i,e,t,n){let s=i;do s.z===0&&(s.z=T0(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nv(s)}function Nv(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let o=n,r=0;for(let c=0;c<t&&(r++,o=o.nextZ,!!o);c++);let l=t;for(;r>0||l>0&&o;)r!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,r--):(s=o,o=o.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=o}a.nextZ=null,t*=2}while(e>1);return i}function T0(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Uv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _m(i,e,t,n,s,a,o,r){return(s-o)*(e-r)>=(i-o)*(a-r)&&(i-o)*(n-r)>=(t-o)*(e-r)&&(t-o)*(a-r)>=(s-o)*(n-r)}function Zr(i,e,t,n,s,a,o,r){return!(i===o&&e===r)&&_m(i,e,t,n,s,a,o,r)}function Ov(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zv(i,e)&&(fl(i,e)&&fl(e,i)&&Bv(i,e)&&(En(i.prev,i,e.prev)||En(i,e.prev,e))||lr(i,e)&&En(i.prev,i,i.next)>0&&En(e.prev,e,e.next)>0)}function En(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lr(i,e){return i.x===e.x&&i.y===e.y}function ym(i,e,t,n){const s=Jl(En(i,e,t)),a=Jl(En(i,e,n)),o=Jl(En(t,n,i)),r=Jl(En(t,n,e));return!!(s!==a&&o!==r||s===0&&Zl(i,t,e)||a===0&&Zl(i,n,e)||o===0&&Zl(t,i,n)||r===0&&Zl(t,e,n))}function Zl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jl(i){return i>0?1:i<0?-1:0}function zv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fl(i,e){return En(i.prev,i,i.next)<0?En(i,e,i.next)>=0&&En(i,i.prev,e)>=0:En(i,e,i.prev)<0||En(i,i.next,e)<0}function Bv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bm(i,e){const t=E0(i.i,i.x,i.y),n=E0(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function ed(i,e,t,n){const s=E0(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function E0(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kv(i,e,t,n){let s=0;for(let a=e,o=t-n;a<t;a+=n)s+=(i[o]-i[a])*(i[a+1]+i[o+1]),o=a;return s}class Vv{static triangulate(e,t,n=2){return wv(e,t,n)}}class Yo{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Yo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];td(e),nd(n,e);let o=e.length;t.forEach(td);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,nd(n,t[l]);const r=Vv.triangulate(n,s);for(let l=0;l<r.length;l+=3)a.push(r.slice(l,l+3));return a}}function td(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class rs extends Tt{constructor(e=new iu([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];o(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(a,2)),this.computeVertexNormals();function o(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Gv;let M,x=!1,w,T,E,_;if(p){M=p.getSpacedPoints(u),x=!0,h=!1;const B=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,B),T=new b,E=new b,_=new b}h||(m=0,d=0,g=0,v=0);const A=r.extractPoints(c);let R=A.shape;const I=A.holes;if(!Yo.isClockWise(R)){R=R.reverse();for(let B=0,Q=I.length;B<Q;B++){const te=I[B];Yo.isClockWise(te)&&(I[B]=te.reverse())}}function H(B){const te=10000000000000001e-36;let ve=B[0];for(let pe=1;pe<=B.length;pe++){const he=pe%B.length,Ee=B[he],Be=Ee.x-ve.x,$e=Ee.y-ve.y,N=Be*Be+$e*$e,ct=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ve.x),Math.abs(ve.y)),Oe=te*ct*ct;if(N<=Oe){B.splice(he,1),pe--;continue}ve=Ee}}H(R),I.forEach(H);const X=I.length,O=R;for(let B=0;B<X;B++){const Q=I[B];R=R.concat(Q)}function V(B,Q,te){return Q||Bt("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Q,te)}const z=R.length;function re(B,Q,te){let ve,pe,he;const Ee=B.x-Q.x,Be=B.y-Q.y,$e=te.x-B.x,N=te.y-B.y,ct=Ee*Ee+Be*Be,Oe=Ee*N-Be*$e;if(Math.abs(Oe)>Number.EPSILON){const P=Math.sqrt(ct),S=Math.sqrt($e*$e+N*N),L=Q.x-Be/P,W=Q.y+Ee/P,ne=te.x-N/S,Te=te.y+$e/S,Pe=((ne-L)*N-(Te-W)*$e)/(Ee*N-Be*$e);ve=L+Ee*Pe-B.x,pe=W+Be*Pe-B.y;const ce=ve*ve+pe*pe;if(ce<=2)return new _e(ve,pe);he=Math.sqrt(ce/2)}else{let P=!1;Ee>Number.EPSILON?$e>Number.EPSILON&&(P=!0):Ee<-Number.EPSILON?$e<-Number.EPSILON&&(P=!0):Math.sign(Be)===Math.sign(N)&&(P=!0),P?(ve=-Be,pe=Ee,he=Math.sqrt(ct)):(ve=Ee,pe=Be,he=Math.sqrt(ct/2))}return new _e(ve/he,pe/he)}const ue=[];for(let B=0,Q=O.length,te=Q-1,ve=B+1;B<Q;B++,te++,ve++)te===Q&&(te=0),ve===Q&&(ve=0),ue[B]=re(O[B],O[te],O[ve]);const Y=[];let ee,le=ue.concat();for(let B=0,Q=X;B<Q;B++){const te=I[B];ee=[];for(let ve=0,pe=te.length,he=pe-1,Ee=ve+1;ve<pe;ve++,he++,Ee++)he===pe&&(he=0),Ee===pe&&(Ee=0),ee[ve]=re(te[ve],te[he],te[Ee]);Y.push(ee),le=le.concat(ee)}let Ce;if(m===0)Ce=Yo.triangulateShape(O,I);else{const B=[],Q=[];for(let te=0;te<m;te++){const ve=te/m,pe=d*Math.cos(ve*Math.PI/2),he=g*Math.sin(ve*Math.PI/2)+v;for(let Ee=0,Be=O.length;Ee<Be;Ee++){const $e=V(O[Ee],ue[Ee],he);De($e.x,$e.y,-pe),ve===0&&B.push($e)}for(let Ee=0,Be=X;Ee<Be;Ee++){const $e=I[Ee];ee=Y[Ee];const N=[];for(let ct=0,Oe=$e.length;ct<Oe;ct++){const P=V($e[ct],ee[ct],he);De(P.x,P.y,-pe),ve===0&&N.push(P)}ve===0&&Q.push(N)}}Ce=Yo.triangulateShape(B,Q)}const Ue=Ce.length,Ie=g+v;for(let B=0;B<z;B++){const Q=h?V(R[B],le[B],Ie):R[B];x?(E.copy(w.normals[0]).multiplyScalar(Q.x),T.copy(w.binormals[0]).multiplyScalar(Q.y),_.copy(M[0]).add(E).add(T),De(_.x,_.y,_.z)):De(Q.x,Q.y,0)}for(let B=1;B<=u;B++)for(let Q=0;Q<z;Q++){const te=h?V(R[Q],le[Q],Ie):R[Q];x?(E.copy(w.normals[B]).multiplyScalar(te.x),T.copy(w.binormals[B]).multiplyScalar(te.y),_.copy(M[B]).add(E).add(T),De(_.x,_.y,_.z)):De(te.x,te.y,f/u*B)}for(let B=m-1;B>=0;B--){const Q=B/m,te=d*Math.cos(Q*Math.PI/2),ve=g*Math.sin(Q*Math.PI/2)+v;for(let pe=0,he=O.length;pe<he;pe++){const Ee=V(O[pe],ue[pe],ve);De(Ee.x,Ee.y,f+te)}for(let pe=0,he=I.length;pe<he;pe++){const Ee=I[pe];ee=Y[pe];for(let Be=0,$e=Ee.length;Be<$e;Be++){const N=V(Ee[Be],ee[Be],ve);x?De(N.x,N.y+M[u-1].y,M[u-1].x+te):De(N.x,N.y,f+te)}}}$(),ie();function $(){const B=s.length/3;if(h){let Q=0,te=z*Q;for(let ve=0;ve<Ue;ve++){const pe=Ce[ve];Ae(pe[2]+te,pe[1]+te,pe[0]+te)}Q=u+m*2,te=z*Q;for(let ve=0;ve<Ue;ve++){const pe=Ce[ve];Ae(pe[0]+te,pe[1]+te,pe[2]+te)}}else{for(let Q=0;Q<Ue;Q++){const te=Ce[Q];Ae(te[2],te[1],te[0])}for(let Q=0;Q<Ue;Q++){const te=Ce[Q];Ae(te[0]+z*u,te[1]+z*u,te[2]+z*u)}}n.addGroup(B,s.length/3-B,0)}function ie(){const B=s.length/3;let Q=0;de(O,Q),Q+=O.length;for(let te=0,ve=I.length;te<ve;te++){const pe=I[te];de(pe,Q),Q+=pe.length}n.addGroup(B,s.length/3-B,1)}function de(B,Q){let te=B.length;for(;--te>=0;){const ve=te;let pe=te-1;pe<0&&(pe=B.length-1);for(let he=0,Ee=u+m*2;he<Ee;he++){const Be=z*he,$e=z*(he+1),N=Q+ve+Be,ct=Q+pe+Be,Oe=Q+pe+$e,P=Q+ve+$e;K(N,ct,Oe,P)}}}function De(B,Q,te){l.push(B),l.push(Q),l.push(te)}function Ae(B,Q,te){ae(B),ae(Q),ae(te);const ve=s.length/3,pe=y.generateTopUV(n,s,ve-3,ve-2,ve-1);D(pe[0]),D(pe[1]),D(pe[2])}function K(B,Q,te,ve){ae(B),ae(Q),ae(ve),ae(Q),ae(te),ae(ve);const pe=s.length/3,he=y.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);D(he[0]),D(he[1]),D(he[3]),D(he[1]),D(he[2]),D(he[3])}function ae(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function D(B){a.push(B.x),a.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hv(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,o=e.shapes.length;a<o;a++){const r=t[e.shapes[a]];n.push(r)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new w0[s.type]().fromJSON(s)),new rs(n,e.options)}}const Gv={generateTopUV:function(i,e,t,n,s){const a=e[t*3],o=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new _e(a,o),new _e(r,l),new _e(c,u)]},generateSideWallUV:function(i,e,t,n,s,a){const o=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(r-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-f),new _e(h,1-g),new _e(v,1-p)]:[new _e(r,1-l),new _e(u,1-f),new _e(d,1-g),new _e(m,1-p)]}};function Hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ns extends bl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ns(e.radius,e.detail)}}class uf extends bl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uf(e.radius,e.detail)}}class Us extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,r=Math.floor(n),l=Math.floor(s),c=r+1,u=l+1,f=e/r,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let M=0;M<c;M++){const x=M*f-a;g.push(x,-y,0),v.push(0,0,1),m.push(M/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<r;y++){const M=y+c*p,x=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;d.push(M,x,T),d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class su extends Tt{constructor(e=.5,t=1,n=32,s=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const r=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,d=new b,g=new _e;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=a+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,M=y,x=y+n+1,w=y+n+2,T=y+1;r.push(M,x,T),r.push(x,w,T)}}this.setIndex(r),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ps extends Tt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let c=0;const u=[],f=new b,h=new b,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n,x=o+M*r,w=e*Math.cos(x),T=Math.sqrt(e*e-w*w);let E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let _=0;_<=t;_++){const A=_/t,R=s+A*a;f.x=-T*Math.cos(R),f.y=w,f.z=T*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+E,1-M),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=u[p][y+1],x=u[p][y],w=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(M,x,T),(p!==n-1||l<Math.PI)&&d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hf extends bl{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hf(e.radius,e.detail)}}class il extends Tt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,o=0,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:o,thetaLength:r},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new b,d=new b,g=new b;for(let v=0;v<=n;v++){const m=o+v/n*r;for(let p=0;p<=s;p++){const y=p/s*a;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,M=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(p,y,x),l.push(y,M,x)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(id(s))s.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(id(s[0])){const a=[];for(let o=0,r=s.length;o<r;o++)a[o]=s[o].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ui(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const s in n)e[s]=n[s]}return e}function id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const pl={clone:cr,merge:ui};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new b().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sm extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ml extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yv extends Ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $v extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kv extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class au extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zv extends au{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gu=new st,sd=new b,ad=new b;class wm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),Gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ul||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new b,jl=new Ct,xs=new b;class Tm extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Rs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,jl,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,jl,xs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ql,jl,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,jl,xs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const va=new b,od=new _e,rd=new _e;class Fi extends Tm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=M0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return M0*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(va.x,va.y).multiplyScalar(-e/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-e/va.z)}getViewSize(e,t){return this.getViewBounds(e,od,rd),t.subVectors(rd,od)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jv extends wm{constructor(){super(new Fi(90,1,.5,500)),this.isPointLightShadow=!0}}class A0 extends au{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ou extends Tm{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,r=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qv extends wm{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jv extends au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Qv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class e1 extends au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ar extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const So=-90,wo=1;class t1 extends In{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fi(So,wo,e,t);s.layers=this.layers,this.add(s);const a=new Fi(So,wo,e,t);a.layers=this.layers,this.add(a);const o=new Fi(So,wo,e,t);o.layers=this.layers,this.add(o);const r=new Fi(So,wo,e,t);r.layers=this.layers,this.add(r);const l=new Fi(So,wo,e,t);l.layers=this.layers,this.add(l);const c=new Fi(So,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,o,r,l]=t;for(const c of t)this.remove(c);if(e===Rs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class n1 extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class i1{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=s1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function s1(){this._document.hidden===!1&&this.reset()}class Em{static{Em.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}}const ld=new b,ec=new b,To=new b,Eo=new b,Hu=new b,a1=new b,o1=new b;class r1{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ld.subVectors(e,this.start),ec.subVectors(this.end,this.start);const n=ec.dot(ec);if(n===0)return 0;let a=ec.dot(ld)/n;return t&&(a=St(a,0,1)),a}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=a1,n=o1){const s=10000000000000001e-32;let a,o;const r=this.start,l=e.start,c=this.end,u=e.end;To.subVectors(c,r),Eo.subVectors(u,l),Hu.subVectors(r,l);const f=To.dot(To),h=Eo.dot(Eo),d=Eo.dot(Hu);if(f<=s&&h<=s)return t.copy(r),n.copy(l),t.sub(n),t.dot(t);if(f<=s)a=0,o=d/h,o=St(o,0,1);else{const g=To.dot(Hu);if(h<=s)o=0,a=St(-g/f,0,1);else{const v=To.dot(Eo),m=f*h-v*v;m!==0?a=St((v*d-g*h)/m,0,1):a=0,o=(v*a+d)/h,o<0?(o=0,a=St(-g/f,0,1)):o>1&&(o=1,a=St((v-g)/f,0,1))}}return t.copy(r).addScaledVector(To,a),n.copy(l).addScaledVector(Eo,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function cd(i,e,t,n){const s=l1(n);switch(t){case nm:return i*e;case K0:return i*e/s.components*s.byteLength;case Z0:return i*e/s.components*s.byteLength;case io:return i*e*2/s.components*s.byteLength;case J0:return i*e*2/s.components*s.byteLength;case im:return i*e*3/s.components*s.byteLength;case os:return i*e*4/s.components*s.byteLength;case Q0:return i*e*4/s.components*s.byteLength;case Uc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xh:case $h:return Math.max(i,16)*Math.max(e,8)/4;case qh:case Yh:return Math.max(i,8)*Math.max(e,8)/2;case Kh:case Zh:case Qh:case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jh:case Wc:case e0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case t0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case n0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case i0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case s0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case a0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case o0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case r0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case l0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case c0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case u0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case h0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case f0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case d0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case p0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case m0:case g0:case v0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case x0:case _0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qc:case y0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l1(i){switch(i){case Ui:case Qp:return{byteLength:1,components:1};case rl:case jp:case Ti:return{byteLength:2,components:1};case Y0:case $0:return{byteLength:2,components:4};case Fs:case X0:case as:return{byteLength:4,components:1};case em:case tm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:B0}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=B0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Am(){let i=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function c1(i){const e=new WeakMap;function t(r,l){const c=r.array,u=r.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),r.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:f}}function n(r,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,r),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=e.get(r);(!u||u.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:a,update:o}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:u1,alphahash_pars_fragment:h1,alphamap_fragment:f1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:v1,batching_pars_vertex:x1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:b1,bsdfs:M1,iridescence_fragment:S1,bumpmap_pars_fragment:w1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:P1,color_pars_fragment:R1,color_pars_vertex:I1,color_vertex:L1,common:D1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:N1,displacementmap_pars_vertex:U1,displacementmap_vertex:O1,emissivemap_fragment:z1,emissivemap_pars_fragment:B1,colorspace_fragment:k1,colorspace_pars_fragment:V1,envmap_fragment:G1,envmap_common_pars_fragment:H1,envmap_pars_fragment:W1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:nx,envmap_vertex:X1,fog_vertex:Y1,fog_pars_vertex:$1,fog_fragment:K1,fog_pars_fragment:Z1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:Q1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:ax,lights_phong_pars_fragment:ox,lights_physical_fragment:rx,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:hx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:vx,map_pars_fragment:xx,map_particle_fragment:_x,map_particle_pars_fragment:yx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:wx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Px,normal_pars_fragment:Rx,normal_pars_vertex:Ix,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Ox,opaque_fragment:zx,packing:Bx,premultiplied_alpha_fragment:kx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Hx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Zx,skinning_pars_vertex:Jx,skinning_vertex:Qx,skinnormal_vertex:jx,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:s2,transmission_pars_fragment:a2,uv_pars_fragment:o2,uv_pars_vertex:r2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:h2,backgroundCube_vert:f2,backgroundCube_frag:d2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:v2,distance_vert:x2,distance_frag:_2,equirect_vert:y2,equirect_frag:b2,linedashed_vert:M2,linedashed_frag:S2,meshbasic_vert:w2,meshbasic_frag:T2,meshlambert_vert:E2,meshlambert_frag:A2,meshmatcap_vert:C2,meshmatcap_frag:P2,meshnormal_vert:R2,meshnormal_frag:I2,meshphong_vert:L2,meshphong_frag:D2,meshphysical_vert:F2,meshphysical_frag:N2,meshtoon_vert:U2,meshtoon_frag:O2,points_vert:z2,points_frag:B2,shadow_vert:k2,shadow_frag:V2,sprite_vert:G2,sprite_frag:H2},Ke={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Cs={basic:{uniforms:ui([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:ui([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:ui([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:ui([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:ui([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:ui([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:ui([Ke.points,Ke.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:ui([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:ui([Ke.common,Ke.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:ui([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:ui([Ke.sprite,Ke.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:ui([Ke.common,Ke.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:ui([Ke.lights,Ke.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Cs.physical={uniforms:ui([Cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const tc={r:0,b:0,g:0},W2=new st,Cm=new Mt;Cm.set(-1,0,0,0,1,0,0,0,1);function q2(i,e,t,n,s,a){const o=new Ve(0);let r=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const x=y.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(y){let M=!1;const x=d(y);x===null?m(o,r):x&&x.isColor&&(m(x,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===nu)?(c===void 0&&(c=new ft(new zs(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:cr(Cs.backgroundCube.uniforms),vertexShader:Cs.backgroundCube.vertexShader,fragmentShader:Cs.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cm),c.material.toneMapped=Ot.getTransfer(x.colorSpace)!==Kt,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ft(new Us(2,2),new xt({name:"BackgroundMaterial",uniforms:cr(Cs.background.uniforms),vertexShader:Cs.background.vertexShader,fragmentShader:Cs.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ot.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(tc,Mm(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,M,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),r=M,m(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(y){r=y,m(o,r)},render:g,addToRenderList:v,dispose:p}}function X2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,o=!1;function r(I,F,H,X,O){let V=!1;const z=f(I,X,H,F);a!==z&&(a=z,c(a.object)),V=d(I,X,H,O),V&&g(I,X,H,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(I,F,H,X),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,F,H,X){const O=X.wireframe===!0;let V=n[F.id];V===void 0&&(V={},n[F.id]=V);const z=I.isInstancedMesh===!0?I.id:0;let re=V[z];re===void 0&&(re={},V[z]=re);let ue=re[H.id];ue===void 0&&(ue={},re[H.id]=ue);let Y=ue[O];return Y===void 0&&(Y=h(l()),ue[O]=Y),Y}function h(I){const F=[],H=[],X=[];for(let O=0;O<t;O++)F[O]=0,H[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:X,object:I,attributes:{},index:null}}function d(I,F,H,X){const O=a.attributes,V=F.attributes;let z=0;const re=H.getAttributes();for(const ue in re)if(re[ue].location>=0){const ee=O[ue];let le=V[ue];if(le===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;z++}return a.attributesNum!==z||a.index!==X}function g(I,F,H,X){const O={},V=F.attributes;let z=0;const re=H.getAttributes();for(const ue in re)if(re[ue].location>=0){let ee=V[ue];ee===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),O[ue]=le,z++}a.attributes=O,a.attributesNum=z,a.index=X}function v(){const I=a.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const H=a.newAttributes,X=a.enabledAttributes,O=a.attributeDivisors;H[I]=1,X[I]===0&&(i.enableVertexAttribArray(I),X[I]=1),O[I]!==F&&(i.vertexAttribDivisor(I,F),O[I]=F)}function y(){const I=a.newAttributes,F=a.enabledAttributes;for(let H=0,X=F.length;H<X;H++)F[H]!==I[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function M(I,F,H,X,O,V,z){z===!0?i.vertexAttribIPointer(I,F,H,O,V):i.vertexAttribPointer(I,F,H,X,O,V)}function x(I,F,H,X){v();const O=X.attributes,V=H.getAttributes(),z=F.defaultAttributeValues;for(const re in V){const ue=V[re];if(ue.location>=0){let Y=O[re];if(Y===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const ee=Y.normalized,le=Y.itemSize,Ce=e.get(Y);if(Ce===void 0)continue;const Ue=Ce.buffer,Ie=Ce.type,$=Ce.bytesPerElement,ie=Ie===i.INT||Ie===i.UNSIGNED_INT||Y.gpuType===X0;if(Y.isInterleavedBufferAttribute){const de=Y.data,De=de.stride,Ae=Y.offset;if(de.isInstancedInterleavedBuffer){for(let K=0;K<ue.locationSize;K++)p(ue.location+K,de.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<ue.locationSize;K++)m(ue.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let K=0;K<ue.locationSize;K++)M(ue.location+K,le/ue.locationSize,Ie,ee,De*$,(Ae+le/ue.locationSize*K)*$,ie)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<ue.locationSize;de++)p(ue.location+de,Y.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<ue.locationSize;de++)m(ue.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let de=0;de<ue.locationSize;de++)M(ue.location+de,le/ue.locationSize,Ie,ee,le*$,le/ue.locationSize*de*$,ie)}}else if(z!==void 0){const ee=z[re];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(ue.location,ee);break;case 3:i.vertexAttrib3fv(ue.location,ee);break;case 4:i.vertexAttrib4fv(ue.location,ee);break;default:i.vertexAttrib1fv(ue.location,ee)}}}}y()}function w(){A();for(const I in n){const F=n[I];for(const H in F){const X=F[H];for(const O in X){const V=X[O];for(const z in V)u(V[z].object),delete V[z];delete X[O]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const H in F){const X=F[H];for(const O in X){const V=X[O];for(const z in V)u(V[z].object),delete V[z];delete X[O]}}delete n[I.id]}function E(I){for(const F in n){const H=n[F];for(const X in H){const O=H[X];if(O[I.id]===void 0)continue;const V=O[I.id];for(const z in V)u(V[z].object),delete V[z];delete O[I.id]}}}function _(I){for(const F in n){const H=n[F],X=I.isInstancedMesh===!0?I.id:0,O=H[X];if(O!==void 0){for(const V in O){const z=O[V];for(const re in z)u(z[re].object),delete z[re];delete O[V]}delete H[X],Object.keys(H).length===0&&delete n[F]}}}function A(){R(),o=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:A,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Y2(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function r(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r}function $2(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==os&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){const _=E===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ui&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==as&&!_)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:T}}function K2(i){const e=this;let t=null,n=0,s=!1,a=!1;const o=new La,r=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{const y=a?0:n,M=y*4;let x=p.clippingState||null;l.value=x,x=u(g,h,M,d);for(let w=0;w!==M;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,y=h.matrixWorldInverse;r.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)o.copy(f[M]).applyMatrix4(y,r),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Oa=4,ud=[.125,.215,.35,.446,.526,.582],Ja=20,Z2=256,Cr=new ou,hd=new Ve;let Wu=null,qu=0,Xu=0,Yu=!1;const J2=new b;class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:o=256,position:r=J2}=a;Wu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,qu,Xu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Ti,format:os,colorSpace:cl,depthBuffer:!1},s=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q2(a)),this._blurMaterial=e_(a,e,t),this._ggxMaterial=j2(a,e,t)}return s}_compileMaterial(e){const t=new ft(new Tt,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,s,a){const l=new Fi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(hd),f.toneMapping=Ds,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new zs,new nf({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(hd),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[M],a.y,a.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[M]));const w=this._cubeSize;Ao(s,x*w,M>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===no||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const a=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const r=a.uniforms;r.envMap.value=e;const l=this._cubeSize;Ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,r=this._lodMeshes[n];r.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Oa?n-g+Oa:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ao(a,m,p,3*v,2*v),s.setRenderTarget(a),s.render(r,Cr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,Ao(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(r,Cr)}_blur(e,t,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ja-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):Ja;m>Ja&&vt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ja}`);const p=[];let y=0;for(let E=0;E<Ja;++E){const _=E/v,A=Math.exp(-_*_/2);p.push(A),E===0?y+=A:E<m&&(y+=2*A)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const x=this._sizeLods[s],w=3*x*(s>M-Oa?s-M+Oa:0),T=4*(this._cubeSize-x);Ao(t,w,T,3*x,2*x),l.setRenderTarget(t),l.render(f,Cr)}}function Q2(i){const e=[],t=[],n=[];let s=i;const a=i-Oa+1+ud.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let l=1/r;o>i-Oa?l=ud[o-i+Oa-1]:o===0&&(l=0),t.push(l);const c=1/(r-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,_=T>2?0:-1,A=[E,_,0,E+2/3,_,0,E+2/3,_+1,0,E,_,0,E+2/3,_+1,0,E,_+1,0];y.set(A,v*g*T),M.set(h,m*g*T);const R=[T,T,T,T,T,T];x.set(R,p*g*T)}const w=new Tt;w.setAttribute("position",new We(y,v)),w.setAttribute("uv",new We(M,m)),w.setAttribute("faceIndex",new We(x,p)),n.push(new ft(w,null)),s>Oa&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function dd(i,e,t){const n=new di(i,e,t);return n.texture.mapping=nu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function j2(i,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function e_(i,e,t){const n=new Float32Array(Ja),s=new b(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Ja,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function pd(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function md(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pm extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zs(5,5,5),a=new xt({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Ls});a.uniforms.tEquirect.value=t;const o=new ft(s,a),r=t.minFilter;return t.minFilter===ja&&(t.minFilter=ii),new t1(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}function t_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):a(h)}function a(h){if(h&&h.isTexture){const d=h.mapping;if(d===fu||d===du)if(e.has(h)){const g=e.get(h).texture;return r(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Pm(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),r(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===fu||d===du,v=d===no||d===ar;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new fd(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new fd(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function r(h,d){return d===fu?h.mapping=no:d===du&&(h.mapping=ar),h}function l(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function n_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){const s={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=a.get(h);d&&(e.remove(d),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const y=d.array;v=d.version;for(let M=0,x=y.length;M<x;M+=3){const w=y[M+0],T=y[M+1],E=y[M+2];h.push(w,T,T,E,E,w)}}else{const y=g.array;v=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const w=M+0,T=M+1,E=M+2;h.push(w,T,T,E,E,w)}}const m=new(g.count>=65535?cm:lm)(h,1);m.version=v;const p=a.get(f);p&&e.remove(p),a.set(f,m)}function u(f){const h=a.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:r,update:l,getWireframeAttribute:u}}function s_(i,e,t){let n;function s(f){n=f}let a,o;function r(f){a=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,a,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,a,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,n,1)}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function a_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(a/3);break;case i.LINES:t.lines+=r*(a/2);break;case i.LINE_STRIP:t.lines+=r*(a-1);break;case i.LINE_LOOP:t.lines+=r*a;break;case i.POINTS:t.points+=r*a;break;default:Bt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){const n=new WeakMap,s=new Tn;function a(o,r,l){const c=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(r);if(h===void 0||h.count!==f){let R=function(){_.dispose(),n.delete(r),r.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],y=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let w=r.attributes.position.count*x,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*f),_=new am(E,w,T,f);_.type=as,_.needsUpdate=!0;const A=x*4;for(let I=0;I<f;I++){const F=p[I],H=y[I],X=M[I],O=w*T*4*I;for(let V=0;V<F.count;V++){const z=V*A;g===!0&&(s.fromBufferAttribute(F,V),E[O+z+0]=s.x,E[O+z+1]=s.y,E[O+z+2]=s.z,E[O+z+3]=0),v===!0&&(s.fromBufferAttribute(H,V),E[O+z+4]=s.x,E[O+z+5]=s.y,E[O+z+6]=s.z,E[O+z+7]=0),m===!0&&(s.fromBufferAttribute(X,V),E[O+z+8]=s.x,E[O+z+9]=s.y,E[O+z+10]=s.z,E[O+z+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new _e(w,T)},n.set(r,h),r.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function r_(i,e,t,n,s){let a=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==u&&(d.update(),a.set(d,u))}return h}function r(){a=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:r}}const l_={[k0]:"LINEAR_TONE_MAPPING",[V0]:"REINHARD_TONE_MAPPING",[G0]:"CINEON_TONE_MAPPING",[tu]:"ACES_FILMIC_TONE_MAPPING",[W0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[H0]:"CUSTOM_TONE_MAPPING"};function c_(i,e,t,n,s,a){const o=new di(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,depthTexture:s?new or(e,t):void 0}),r=new di(e,t,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Tt;l.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new Sm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ft(l,c),f=new ou(-1,1,1,-1,0,1);let h=null,d=null,g=!1,v,m=null,p=[],y=!1;this.setSize=function(M,x){o.setSize(M,x),r.setSize(M,x);for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(M,x)}},this.setEffects=function(M){p=M,y=p.length>0&&p[0].isRenderPass===!0;const x=o.width,w=o.height;for(let T=0;T<p.length;T++){const E=p[T];E.setSize&&E.setSize(x,w)}},this.begin=function(M,x){if(g||M.toneMapping===Ds&&p.length===0)return!1;if(m=x,x!==null){const w=x.width,T=x.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return y===!1&&M.setRenderTarget(o),v=M.toneMapping,M.toneMapping=Ds,!0},this.hasRenderPass=function(){return y},this.end=function(M,x){M.toneMapping=v,g=!0;let w=o,T=r;for(let E=0;E<p.length;E++){const _=p[E];if(_.enabled!==!1&&(_.render(M,T,w,x),_.needsSwap!==!1)){const A=w;w=T,T=A}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},Ot.getTransfer(h)===Kt&&(c.defines.SRGB_TRANSFER="");const E=l_[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(m),M.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),r.dispose(),l.dispose(),c.dispose()}}const Rm=new fi,C0=new or(1,1),Im=new am,Lm=new Xg,Dm=new fm,gd=[],vd=[],xd=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=gd[s];if(a===void 0&&(a=new Float32Array(s),gd[s]=a),e!==0){n.toArray(a,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(a,r)}return a}function Hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lu(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2fv(this.addr,e),Wn(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;i.uniform3fv(this.addr,e),Wn(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4fv(this.addr,e),Wn(t,e)}}function p_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Wn(t,n)}}function m_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),Wn(t,n)}}function g_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),Wn(t,n)}}function v_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2iv(this.addr,e),Wn(t,e)}}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3iv(this.addr,e),Wn(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4iv(this.addr,e),Wn(t,e)}}function b_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2uiv(this.addr,e),Wn(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3uiv(this.addr,e),Wn(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4uiv(this.addr,e),Wn(t,e)}}function T_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(C0.compareFunction=t.isReversedDepthBuffer()?ef:j0,a=C0):a=Rm,t.setTexture2D(e||a,s)}function E_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lm,s)}function A_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dm,s)}function C_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Im,s)}function P_(i){switch(i){case 5126:return u_;case 35664:return h_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return v_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return b_;case 36294:return M_;case 36295:return S_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}function R_(i,e){i.uniform1fv(this.addr,e)}function I_(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function L_(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function F_(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N_(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U_(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O_(i,e){i.uniform1iv(this.addr,e)}function z_(i,e){i.uniform2iv(this.addr,e)}function B_(i,e){i.uniform3iv(this.addr,e)}function k_(i,e){i.uniform4iv(this.addr,e)}function V_(i,e){i.uniform1uiv(this.addr,e)}function G_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function q_(i,e,t){const n=this.cache,s=e.length,a=lu(t,s);Hn(n,a)||(i.uniform1iv(this.addr,a),Wn(n,a));let o;this.type===i.SAMPLER_2D_SHADOW?o=C0:o=Rm;for(let r=0;r!==s;++r)t.setTexture2D(e[r]||o,a[r])}function X_(i,e,t){const n=this.cache,s=e.length,a=lu(t,s);Hn(n,a)||(i.uniform1iv(this.addr,a),Wn(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lm,a[o])}function Y_(i,e,t){const n=this.cache,s=e.length,a=lu(t,s);Hn(n,a)||(i.uniform1iv(this.addr,a),Wn(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dm,a[o])}function $_(i,e,t){const n=this.cache,s=e.length,a=lu(t,s);Hn(n,a)||(i.uniform1iv(this.addr,a),Wn(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Im,a[o])}function K_(i){switch(i){case 5126:return R_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return F_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return G_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}class Z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}}class Q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(e,t[r.id],n)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function j_(i,e,t){const n=i.name,s=n.length;for($u.lastIndex=0;;){const a=$u.exec(n),o=$u.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===s){bd(t,c===void 0?new Z_(r,i,e):new J_(r,i,e));break}else{let f=t.map[r];f===void 0&&(f=new Q_(r),bd(t,f)),t=f}}}class kc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const r=e.getActiveUniform(t,o),l=e.getUniformLocation(t,r.name);j_(r,l,this)}const s=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):a.push(o);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const r=t[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Md(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ey=37297;let ty=0;function ny(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}const Sd=new Mt;function iy(i){Ot._getMatrix(Sd,Ot.workingColorSpace,i);const e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(i)){case Xc:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+ny(i.getShaderSource(e),r)}else return a}function sy(i,e){const t=iy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ay={[k0]:"Linear",[V0]:"Reinhard",[G0]:"Cineon",[tu]:"ACESFilmic",[W0]:"AgX",[q0]:"Neutral",[H0]:"Custom"};function oy(i,e){const t=ay[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new b;function ry(){Ot.getLuminanceCoefficients(nc);const i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function cy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function Jr(i){return i!==""}function Td(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function P0(i){return i.replace(hy,dy)}const fy=new Map;function dy(i,e){let t=Rt[e];if(t===void 0){const n=fy.get(e);if(n!==void 0)t=Rt[n],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return P0(t)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(py,my)}function my(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Cd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gy={[Nc]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function vy(i){return gy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xy={[no]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function _y(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const yy={[ar]:"ENVMAP_MODE_REFRACTION"};function by(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const My={[Zp]:"ENVMAP_BLENDING_MULTIPLY",[Tg]:"ENVMAP_BLENDING_MIX",[Eg]:"ENVMAP_BLENDING_ADD"};function Sy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":My[i.combine]||"ENVMAP_BLENDING_NONE"}function wy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ty(i,e,t,n){const s=i.getContext(),a=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=vy(t),c=_y(t),u=by(t),f=Sy(t),h=wy(t),d=ly(t),g=cy(a),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ds?"#define TONE_MAPPING":"",t.toneMapping!==Ds?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Ds?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=P0(o),o=Td(o,t),o=Ed(o,t),r=P0(r),r=Td(r,t),r=Ed(r,t),o=Ad(o),r=Ad(r),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,x=y+p+r,w=Md(s,s.VERTEX_SHADER,M),T=Md(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(T)||"",O=F.trim(),V=H.trim(),z=X.trim();let re=!0,ue=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,T);else{const Y=wd(s,w,"vertex"),ee=wd(s,T,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Y+`
`+ee)}else O!==""?vt("WebGLProgram: Program Info Log:",O):(V===""||z==="")&&(ue=!1);ue&&(I.diagnostics={runnable:re,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(w),s.deleteShader(T),_=new kc(s,v),A=uy(s,v)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,ey)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let Ey=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cy(e),t.set(e,n)),n}}class Cy{constructor(e){this.id=Ey++,this.code=e,this.usedTimes=0}}function Py(i){return i===io||i===Wc||i===qc}function Ry(i,e,t,n,s,a){const o=new om,r=new Ay,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,R,I,F,H){const X=I.fog,O=F.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||V,z),ue=re&&re.mapping===nu?re.image.height:null,Y=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&vt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=ee!==void 0?ee.length:0;let Ce=0;O.morphAttributes.position!==void 0&&(Ce=1),O.morphAttributes.normal!==void 0&&(Ce=2),O.morphAttributes.color!==void 0&&(Ce=3);let Ue,Ie,$,ie;if(Y){const Qe=Cs[Y];Ue=Qe.vertexShader,Ie=Qe.fragmentShader}else{Ue=_.vertexShader,Ie=_.fragmentShader;const Qe=r.getVertexShaderStage(_),sn=r.getFragmentShaderStage(_);r.update(_,Qe,sn),$=Qe.id,ie=sn.id}const de=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,K=F.isBatchedMesh===!0,ae=!!_.map,D=!!_.matcap,B=!!re,Q=!!_.aoMap,te=!!_.lightMap,ve=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,he=!!_.displacementMap,Ee=!!_.emissiveMap,Be=!!_.metalnessMap,$e=!!_.roughnessMap,N=_.anisotropy>0,ct=_.clearcoat>0,Oe=_.dispersion>0,P=_.iridescence>0,S=_.sheen>0,L=_.transmission>0,W=N&&!!_.anisotropyMap,ne=ct&&!!_.clearcoatMap,Te=ct&&!!_.clearcoatNormalMap,Pe=ct&&!!_.clearcoatRoughnessMap,ce=P&&!!_.iridescenceMap,fe=P&&!!_.iridescenceThicknessMap,Le=S&&!!_.sheenColorMap,je=S&&!!_.sheenRoughnessMap,qe=!!_.specularMap,Ge=!!_.specularColorMap,at=!!_.specularIntensityMap,ot=L&&!!_.transmissionMap,_t=L&&!!_.thicknessMap,G=!!_.gradientMap,Ne=!!_.alphaMap,me=_.alphaTest>0,ke=!!_.alphaHash,Xe=!!_.extensions;let Me=Ds;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Me=i.toneMapping);const et={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Ie,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:K,batchingColor:K&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ae,matcap:D,envMap:B,envMapMode:B&&re.mapping,envMapCubeUVHeight:ue,aoMap:Q,lightMap:te,bumpMap:ve,normalMap:pe,displacementMap:he,emissiveMap:Ee,normalMapObjectSpace:pe&&_.normalMapType===Pg,normalMapTangentSpace:pe&&_.normalMapType===b0,packedNormalMap:pe&&_.normalMapType===b0&&Py(_.normalMap.format),metalnessMap:Be,roughnessMap:$e,anisotropy:N,anisotropyMap:W,clearcoat:ct,clearcoatMap:ne,clearcoatNormalMap:Te,clearcoatRoughnessMap:Pe,dispersion:Oe,iridescence:P,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:S,sheenColorMap:Le,sheenRoughnessMap:je,specularMap:qe,specularColorMap:Ge,specularIntensityMap:at,transmission:L,transmissionMap:ot,thicknessMap:_t,gradientMap:G,opaque:_.transparent===!1&&_.blending===ta&&_.alphaToCoverage===!1,alphaMap:Ne,alphaTest:me,alphaHash:ke,combine:_.combine,mapUv:ae&&g(_.map.channel),aoMapUv:Q&&g(_.aoMap.channel),lightMapUv:te&&g(_.lightMap.channel),bumpMapUv:ve&&g(_.bumpMap.channel),normalMapUv:pe&&g(_.normalMap.channel),displacementMapUv:he&&g(_.displacementMap.channel),emissiveMapUv:Ee&&g(_.emissiveMap.channel),metalnessMapUv:Be&&g(_.metalnessMap.channel),roughnessMapUv:$e&&g(_.roughnessMap.channel),anisotropyMapUv:W&&g(_.anisotropyMap.channel),clearcoatMapUv:ne&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(_.sheenRoughnessMap.channel),specularMapUv:qe&&g(_.specularMap.channel),specularColorMapUv:Ge&&g(_.specularColorMap.channel),specularIntensityMapUv:at&&g(_.specularIntensityMap.channel),transmissionMapUv:ot&&g(_.transmissionMap.channel),thicknessMapUv:_t&&g(_.thicknessMap.channel),alphaMapUv:Ne&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||N),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ae||Ne),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:ae&&_.map.isVideoTexture===!0&&Ot.getTransfer(_.map.colorSpace)===Kt,decodeVideoTextureEmissive:Ee&&_.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(_.emissiveMap.colorSpace)===Kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===Yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&_.extensions.multiDraw===!0||K)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(A,_),y(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function y(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const A=d[_.type];let R;if(A){const I=Cs[A];R=pl.clone(I.uniforms)}else R=_.uniforms;return R}function x(_,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new Ty(i,A,_,s),c.push(R),u.set(A,R)),R}function w(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){r.remove(_)}function E(){r.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:E}}function Iy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function s(o,r,l){i.get(o)[r]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function r(h,d,g,v,m,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=o(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,d,g,v,m,p){const y=r(h,d,g,v,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(h,d,g,v,m,p){const y=r(h,d,g,v,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,d,g){t.length>1&&t.sort(h||Ly),n.length>1&&n.sort(d||Pd),s.length>1&&s.sort(d||Pd),g&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:f,sort:u}}function Dy(){let i=new WeakMap;function e(n,s){const a=i.get(n);let o;return a===void 0?(o=new Rd,i.set(n,[o])):s>=a.length?(o=new Rd,a.push(o)):o=a[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ve};break;case"SpotLight":t={position:new b,direction:new b,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function Ny(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Uy=0;function Oy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zy(i){const e=new Fy,t=Ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,a=new st,o=new st;function r(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,M=0,x=0,w=0,T=0,E=0;c.sort(Oy);for(let A=0,R=c.length;A<R;A++){const I=c[A],F=I.color,H=I.intensity,X=I.distance;let O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===io?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*H,f+=F.g*H,h+=F.b*H;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],H);E++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,re=t.get(I);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,n.directionalShadow[d]=re,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=I.shadow.matrix,y++}n.directional[d]=V,d++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(H),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;const z=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=z.matrix,I.castShadow){const re=t.get(I);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=O,x++}v++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(F).multiplyScalar(H),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const z=I.shadow,re=t.get(I);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,re.shadowCameraNear=z.camera.near,re.shadowCameraFar=z.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(H),V.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==d||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==x||_.numSpotMaps!==w||_.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,_.directionalLength=d,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=x,_.numSpotMaps=w,_.numLightProbes=E,n.version=Uy++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:n}}function Id(i){const e=new zy(i),t=[],n=[],s=[];function a(h){f.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function r(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:r,pushLightProbeGrid:l}}function By(i){let e=new WeakMap;function t(s,a=0){const o=e.get(s);let r;return o===void 0?(r=new Id(i),e.set(s,[r])):a>=o.length?(r=new Id(i),o.push(r)):r=o[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gy=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],Hy=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],Ld=new st,Pr=new b,Ku=new b;function Wy(i,e,t){let n=new sf;const s=new _e,a=new _e,o=new Tn,r=new $v,l=new Kv,c={},u=t.maxTextureSize,f={[pi]:Yn,[Yn]:pi,[cn]:cn},h=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ky,fragmentShader:Vy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(T,E,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===cg&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const A=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ls),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&E.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=T.length;X<O;X++){const V=T[X],z=V.shadow;if(z===void 0){vt("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const re=z.getFrameExtents();s.multiply(re),a.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/re.x),s.x=a.x*re.x,z.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/re.y),s.y=a.y*re.y,z.mapSize.y=a.y));const ue=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ue,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Kr){if(V.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new di(s.x,s.y,{format:io,type:Ti,minFilter:ii,magFilter:ii,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new or(s.x,s.y,as),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=aa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zn,z.map.depthTexture.magFilter=Zn}else V.isPointLight?(z.map=new Pm(s.x),z.map.depthTexture=new hv(s.x,Fs)):(z.map=new di(s.x,s.y),z.map.depthTexture=new or(s.x,s.y,Fs)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=aa,this.type===Nc?(z.map.depthTexture.compareFunction=ue?ef:j0,z.map.depthTexture.minFilter=ii,z.map.depthTexture.magFilter=ii):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zn,z.map.depthTexture.magFilter=Zn);z.camera.updateProjectionMatrix()}const Y=z.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<Y;ee++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(z.map),i.clear());const le=z.getViewport(ee);o.set(a.x*le.x,a.y*le.y,a.x*le.z,a.y*le.w),F.viewport(o)}if(V.isPointLight){const le=z.camera,Ce=z.matrix,Ue=V.distance||le.far;Ue!==le.far&&(le.far=Ue,le.updateProjectionMatrix()),Pr.setFromMatrixPosition(V.matrixWorld),le.position.copy(Pr),Ku.copy(le.position),Ku.add(Gy[ee]),le.up.copy(Hy[ee]),le.lookAt(Ku),le.updateMatrixWorld(),Ce.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Ld.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ld,le.coordinateSystem,le.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),x(E,_,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Kr&&y(z,_),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,R,I)};function y(T,E){const _=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(s.x,s.y,{format:io,type:Ti})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,_,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,_,d,v,null)}function M(T,E,_,A){let R=null;const I=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:r,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=R.uuid,H=E.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let O=X[H];O===void 0&&(O=R.clone(),X[H]=O,E.addEventListener("dispose",w)),R=O}if(R.visible=E.visible,R.wireframe=E.wireframe,A===Kr?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:f[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=_}return R}function x(T,E,_,A,R){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Kr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const H=e.update(T),X=T.material;if(Array.isArray(X)){const O=H.groups;for(let V=0,z=O.length;V<z;V++){const re=O[V],ue=X[re.materialIndex];if(ue&&ue.visible){const Y=M(T,ue,A,R);T.onBeforeShadow(i,T,E,_,H,Y,re),i.renderBufferDirect(_,null,H,Y,T,re),T.onAfterShadow(i,T,E,_,H,Y,re)}}}else if(X.visible){const O=M(T,X,A,R);T.onBeforeShadow(i,T,E,_,H,O,null),i.renderBufferDirect(_,null,H,O,T,null),T.onAfterShadow(i,T,E,_,H,O,null)}}const F=T.children;for(let H=0,X=F.length;H<X;H++)x(F[H],E,_,A,R)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const A=c[_],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function qy(i,e){function t(){let G=!1;const Ne=new Tn;let me=null;const ke=new Tn(0,0,0,0);return{setMask:function(Xe){me!==Xe&&!G&&(i.colorMask(Xe,Xe,Xe,Xe),me=Xe)},setLocked:function(Xe){G=Xe},setClear:function(Xe,Me,et,Qe,sn){sn===!0&&(Xe*=Qe,Me*=Qe,et*=Qe),Ne.set(Xe,Me,et,Qe),ke.equals(Ne)===!1&&(i.clearColor(Xe,Me,et,Qe),ke.copy(Ne))},reset:function(){G=!1,me=null,ke.set(-1,0,0,0)}}}function n(){let G=!1,Ne=!1,me=null,ke=null,Xe=null;return{setReversed:function(Me){if(Ne!==Me){const et=e.get("EXT_clip_control");Me?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ne=Me;const Qe=Xe;Xe=null,this.setClear(Qe)}},getReversed:function(){return Ne},setTest:function(Me){Me?de(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Me){me!==Me&&!G&&(i.depthMask(Me),me=Me)},setFunc:function(Me){if(Ne&&(Me=Bg[Me]),ke!==Me){switch(Me){case Uh:i.depthFunc(i.NEVER);break;case Oh:i.depthFunc(i.ALWAYS);break;case zh:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Bh:i.depthFunc(i.EQUAL);break;case kh:i.depthFunc(i.GEQUAL);break;case Vh:i.depthFunc(i.GREATER);break;case Gh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=Me}},setLocked:function(Me){G=Me},setClear:function(Me){Xe!==Me&&(Xe=Me,Ne&&(Me=1-Me),i.clearDepth(Me))},reset:function(){G=!1,me=null,ke=null,Xe=null,Ne=!1}}}function s(){let G=!1,Ne=null,me=null,ke=null,Xe=null,Me=null,et=null,Qe=null,sn=null;return{setTest:function(qt){G||(qt?de(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(qt){Ne!==qt&&!G&&(i.stencilMask(qt),Ne=qt)},setFunc:function(qt,gi,vi){(me!==qt||ke!==gi||Xe!==vi)&&(i.stencilFunc(qt,gi,vi),me=qt,ke=gi,Xe=vi)},setOp:function(qt,gi,vi){(Me!==qt||et!==gi||Qe!==vi)&&(i.stencilOp(qt,gi,vi),Me=qt,et=gi,Qe=vi)},setLocked:function(qt){G=qt},setClear:function(qt){sn!==qt&&(i.clearStencil(qt),sn=qt)},reset:function(){G=!1,Ne=null,me=null,ke=null,Xe=null,Me=null,et=null,Qe=null,sn=null}}}const a=new t,o=new n,r=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,x=null,w=null,T=null,E=null,_=new Ve(0,0,0),A=0,R=!1,I=null,F=null,H=null,X=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,re=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ue)[1]),z=re>=1):ue.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),z=re>=2);let Y=null,ee={};const le=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Ue=new Tn().fromArray(le),Ie=new Tn().fromArray(Ce);function $(G,Ne,me,ke){const Xe=new Uint8Array(4),Me=i.createTexture();i.bindTexture(G,Me),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<me;et++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(Ne+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return Me}const ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),de(i.DEPTH_TEST),o.setFunc(sr),ve(!1),pe(Tf),de(i.CULL_FACE),Q(Ls);function de(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function De(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ae(G,Ne){return h[G]!==Ne?(i.bindFramebuffer(G,Ne),h[G]=Ne,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ne),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function K(G,Ne){let me=g,ke=!1;if(G){me=d.get(Ne),me===void 0&&(me=[],d.set(Ne,me));const Xe=G.textures;if(me.length!==Xe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,et=Xe.length;Me<et;Me++)me[Me]=i.COLOR_ATTACHMENT0+Me;me.length=Xe.length,ke=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,ke=!0);ke&&i.drawBuffers(me)}function ae(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const D={[Fa]:i.FUNC_ADD,[ug]:i.FUNC_SUBTRACT,[hg]:i.FUNC_REVERSE_SUBTRACT};D[fg]=i.MIN,D[dg]=i.MAX;const B={[$p]:i.ZERO,[pg]:i.ONE,[mg]:i.SRC_COLOR,[Fh]:i.SRC_ALPHA,[yg]:i.SRC_ALPHA_SATURATE,[Kp]:i.DST_COLOR,[vg]:i.DST_ALPHA,[gg]:i.ONE_MINUS_SRC_COLOR,[Nh]:i.ONE_MINUS_SRC_ALPHA,[_g]:i.ONE_MINUS_DST_COLOR,[xg]:i.ONE_MINUS_DST_ALPHA,[bg]:i.CONSTANT_COLOR,[Mg]:i.ONE_MINUS_CONSTANT_COLOR,[Sg]:i.CONSTANT_ALPHA,[wg]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(G,Ne,me,ke,Xe,Me,et,Qe,sn,qt){if(G===Ls){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),G!==Yp){if(G!==p||qt!==R){if((y!==Fa||w!==Fa)&&(i.blendEquation(i.FUNC_ADD),y=Fa,w=Fa),qt)switch(G){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFunc(i.ONE,i.ONE);break;case Ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",G);break}else switch(G){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ef:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Af:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",G);break}M=null,x=null,T=null,E=null,_.set(0,0,0),A=0,p=G,R=qt}return}Xe=Xe||Ne,Me=Me||me,et=et||ke,(Ne!==y||Xe!==w)&&(i.blendEquationSeparate(D[Ne],D[Xe]),y=Ne,w=Xe),(me!==M||ke!==x||Me!==T||et!==E)&&(i.blendFuncSeparate(B[me],B[ke],B[Me],B[et]),M=me,x=ke,T=Me,E=et),(Qe.equals(_)===!1||sn!==A)&&(i.blendColor(Qe.r,Qe.g,Qe.b,sn),_.copy(Qe),A=sn),p=G,R=!1}function te(G,Ne){G.side===cn?De(i.CULL_FACE):de(i.CULL_FACE);let me=G.side===Yn;Ne&&(me=!me),ve(me),G.blending===ta&&G.transparent===!1?Q(Ls):Q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),a.setMask(G.colorWrite);const ke=G.stencilWrite;r.setTest(ke),ke&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function pe(G){G!==rg?(de(i.CULL_FACE),G!==F&&(G===Tf?i.cullFace(i.BACK):G===lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),F=G}function he(G){G!==H&&(z&&i.lineWidth(G),H=G)}function Ee(G,Ne,me){G?(de(i.POLYGON_OFFSET_FILL),(X!==Ne||O!==me)&&(X=Ne,O=me,o.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,me))):De(i.POLYGON_OFFSET_FILL)}function Be(G){G?de(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function $e(G){G===void 0&&(G=i.TEXTURE0+V-1),Y!==G&&(i.activeTexture(G),Y=G)}function N(G,Ne,me){me===void 0&&(Y===null?me=i.TEXTURE0+V-1:me=Y);let ke=ee[me];ke===void 0&&(ke={type:void 0,texture:void 0},ee[me]=ke),(ke.type!==G||ke.texture!==Ne)&&(Y!==me&&(i.activeTexture(me),Y=me),i.bindTexture(G,Ne||ie[G]),ke.type=G,ke.texture=Ne)}function ct(){const G=ee[Y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function S(){try{i.texSubImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function L(){try{i.texSubImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Te(){try{i.texStorage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Pe(){try{i.texStorage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function ce(){try{i.texImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function fe(){try{i.texImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Le(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function je(G,Ne){f[G]!==Ne&&(i.pixelStorei(G,Ne),f[G]=Ne)}function qe(G){Ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Ge(G){Ie.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function at(G,Ne){let me=c.get(Ne);me===void 0&&(me=new WeakMap,c.set(Ne,me));let ke=me.get(G);ke===void 0&&(ke=i.getUniformBlockIndex(Ne,G.name),me.set(G,ke))}function ot(G,Ne){const ke=c.get(Ne).get(G);l.get(Ne)!==ke&&(i.uniformBlockBinding(Ne,ke,G.__bindingPointIndex),l.set(Ne,ke))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Y=null,ee={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,x=null,w=null,T=null,E=null,_=new Ve(0,0,0),A=0,R=!1,I=null,F=null,H=null,X=null,O=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:de,disable:De,bindFramebuffer:Ae,drawBuffers:K,useProgram:ae,setBlending:Q,setMaterial:te,setFlipSided:ve,setCullFace:pe,setLineWidth:he,setPolygonOffset:Ee,setScissorTest:Be,activeTexture:$e,bindTexture:N,unbindTexture:ct,compressedTexImage2D:Oe,compressedTexImage3D:P,texImage2D:ce,texImage3D:fe,pixelStorei:je,getParameter:Le,updateUBOMapping:at,uniformBlockBinding:ot,texStorage2D:Te,texStorage3D:Pe,texSubImage2D:S,texSubImage3D:L,compressedTexSubImage2D:W,compressedTexSubImage3D:ne,scissor:qe,viewport:Ge,reset:_t}}function Xy(i,e,t,n,s,a,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return g?new OffscreenCanvas(P,S):Yc("canvas")}function m(P,S,L){let W=1;const ne=Oe(P);if((ne.width>L||ne.height>L)&&(W=L/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Te=Math.floor(W*ne.width),Pe=Math.floor(W*ne.height);h===void 0&&(h=v(Te,Pe));const ce=S?v(Te,Pe):h;return ce.width=Te,ce.height=Pe,ce.getContext("2d").drawImage(P,0,0,Te,Pe),vt("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Te+"x"+Pe+")."),ce}else return"data"in P&&vt("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function p(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,S,L,W,ne,Te=!1){if(P!==null){if(i[P]!==void 0)return i[P];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;W&&(Pe=e.get("EXT_texture_norm16"),Pe||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=S;if(S===i.RED&&(L===i.FLOAT&&(ce=i.R32F),L===i.HALF_FLOAT&&(ce=i.R16F),L===i.UNSIGNED_BYTE&&(ce=i.R8),L===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.R16_EXT),L===i.SHORT&&Pe&&(ce=Pe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(ce=i.R8UI),L===i.UNSIGNED_SHORT&&(ce=i.R16UI),L===i.UNSIGNED_INT&&(ce=i.R32UI),L===i.BYTE&&(ce=i.R8I),L===i.SHORT&&(ce=i.R16I),L===i.INT&&(ce=i.R32I)),S===i.RG&&(L===i.FLOAT&&(ce=i.RG32F),L===i.HALF_FLOAT&&(ce=i.RG16F),L===i.UNSIGNED_BYTE&&(ce=i.RG8),L===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RG16_EXT),L===i.SHORT&&Pe&&(ce=Pe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(ce=i.RG8UI),L===i.UNSIGNED_SHORT&&(ce=i.RG16UI),L===i.UNSIGNED_INT&&(ce=i.RG32UI),L===i.BYTE&&(ce=i.RG8I),L===i.SHORT&&(ce=i.RG16I),L===i.INT&&(ce=i.RG32I)),S===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),L===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),L===i.UNSIGNED_INT&&(ce=i.RGB32UI),L===i.BYTE&&(ce=i.RGB8I),L===i.SHORT&&(ce=i.RGB16I),L===i.INT&&(ce=i.RGB32I)),S===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),L===i.UNSIGNED_INT&&(ce=i.RGBA32UI),L===i.BYTE&&(ce=i.RGBA8I),L===i.SHORT&&(ce=i.RGBA16I),L===i.INT&&(ce=i.RGBA32I)),S===i.RGB&&(L===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGB16_EXT),L===i.SHORT&&Pe&&(ce=Pe.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),S===i.RGBA){const fe=Te?Xc:Ot.getTransfer(ne);L===i.FLOAT&&(ce=i.RGBA32F),L===i.HALF_FLOAT&&(ce=i.RGBA16F),L===i.UNSIGNED_BYTE&&(ce=fe===Kt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGBA16_EXT),L===i.SHORT&&Pe&&(ce=Pe.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(P,S){let L;return P?S===null||S===Fs||S===ll?L=i.DEPTH24_STENCIL8:S===as?L=i.DEPTH32F_STENCIL8:S===rl&&(L=i.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fs||S===ll?L=i.DEPTH_COMPONENT24:S===as?L=i.DEPTH_COMPONENT32F:S===rl&&(L=i.DEPTH_COMPONENT16),L}function T(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zn&&P.minFilter!==ii?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){const S=P.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function _(P){const S=P.target;S.removeEventListener("dispose",_),I(S)}function A(P){const S=n.get(P);if(S.__webglInit===void 0)return;const L=P.source,W=d.get(L);if(W){const ne=W[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(W).length===0&&d.delete(L)}n.remove(P)}function R(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const L=P.source,W=d.get(L);delete W[S.__cacheKey],o.memory.textures--}function I(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let ne=0;ne<S.__webglFramebuffer[W].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[W][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const L=P.textures;for(let W=0,ne=L.length;W<ne;W++){const Te=n.get(L[W]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(L[W])}n.remove(P)}let F=0;function H(){F=0}function X(){return F}function O(P){F=P}function V(){const P=F;return P>=s.maxTextures&&vt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function z(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function re(P,S){const L=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&L.__version!==P.version){const W=P.image;if(W===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(L,P,S);return}}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+S)}function ue(P,S){const L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){De(L,P,S);return}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+S)}function Y(P,S){const L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){De(L,P,S);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+S)}function ee(P,S){const L=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&L.__version!==P.version){Ae(L,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+S)}const le={[Hh]:i.REPEAT,[ea]:i.CLAMP_TO_EDGE,[Wh]:i.MIRRORED_REPEAT},Ce={[Zn]:i.NEAREST,[Ag]:i.NEAREST_MIPMAP_NEAREST,[Pl]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[ja]:i.LINEAR_MIPMAP_LINEAR},Ue={[Rg]:i.NEVER,[Ng]:i.ALWAYS,[Ig]:i.LESS,[j0]:i.LEQUAL,[Lg]:i.EQUAL,[ef]:i.GEQUAL,[Dg]:i.GREATER,[Fg]:i.NOTEQUAL};function Ie(P,S){if(S.type===as&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ii||S.magFilter===pu||S.magFilter===Pl||S.magFilter===ja||S.minFilter===ii||S.minFilter===pu||S.minFilter===Pl||S.minFilter===ja)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,le[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ce[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ce[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zn||S.minFilter!==Pl&&S.minFilter!==ja||S.type===as&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $(P,S){let L=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));const W=S.source;let ne=d.get(W);ne===void 0&&(ne={},d.set(W,ne));const Te=z(S);if(Te!==P.__cacheKey){ne[Te]===void 0&&(ne[Te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ne[Te].usedTimes++;const Pe=ne[P.__cacheKey];Pe!==void 0&&(ne[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(S)),P.__cacheKey=Te,P.__webglTexture=ne[Te].texture}return L}function ie(P,S,L){return Math.floor(Math.floor(P/L)/S)}function de(P,S,L,W){const Te=P.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,L,W,S.data);else{Te.sort((je,qe)=>je.start-qe.start);let Pe=0;for(let je=1;je<Te.length;je++){const qe=Te[Pe],Ge=Te[je],at=qe.start+qe.count,ot=ie(Ge.start,S.width,4),_t=ie(qe.start,S.width,4);Ge.start<=at+1&&ot===_t&&ie(Ge.start+Ge.count-1,S.width,4)===ot?qe.count=Math.max(qe.count,Ge.start+Ge.count-qe.start):(++Pe,Te[Pe]=Ge)}Te.length=Pe+1;const ce=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let je=0,qe=Te.length;je<qe;je++){const Ge=Te[je],at=Math.floor(Ge.start/4),ot=Math.ceil(Ge.count/4),_t=at%S.width,G=Math.floor(at/S.width),Ne=ot,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,_t,G,Ne,me,L,W,S.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function De(P,S,L){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);const ne=$(P,S),Te=S.source;t.bindTexture(W,P.__webglTexture,i.TEXTURE0+L);const Pe=n.get(Te);if(Te.version!==Pe.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const me=Ot.getPrimaries(Ot.workingColorSpace),ke=S.colorSpace===Na?null:Ot.getPrimaries(S.colorSpace),Xe=S.colorSpace===Na||me===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let fe=m(S.image,!1,s.maxTextureSize);fe=ct(S,fe);const Le=a.convert(S.format,S.colorSpace),je=a.convert(S.type);let qe=x(S.internalFormat,Le,je,S.normalized,S.colorSpace,S.isVideoTexture);Ie(W,S);let Ge;const at=S.mipmaps,ot=S.isVideoTexture!==!0,_t=Pe.__version===void 0||ne===!0,G=Te.dataReady,Ne=T(S,fe);if(S.isDepthTexture)qe=w(S.format===eo,S.type),_t&&(ot?t.texStorage2D(i.TEXTURE_2D,1,qe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,qe,fe.width,fe.height,0,Le,je,null));else if(S.isDataTexture)if(at.length>0){ot&&_t&&t.texStorage2D(i.TEXTURE_2D,Ne,qe,at[0].width,at[0].height);for(let me=0,ke=at.length;me<ke;me++)Ge=at[me],ot?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Le,je,Ge.data):t.texImage2D(i.TEXTURE_2D,me,qe,Ge.width,Ge.height,0,Le,je,Ge.data);S.generateMipmaps=!1}else ot?(_t&&t.texStorage2D(i.TEXTURE_2D,Ne,qe,fe.width,fe.height),G&&de(S,fe,Le,je)):t.texImage2D(i.TEXTURE_2D,0,qe,fe.width,fe.height,0,Le,je,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,qe,at[0].width,at[0].height,fe.depth);for(let me=0,ke=at.length;me<ke;me++)if(Ge=at[me],S.format!==os)if(Le!==null)if(ot){if(G)if(S.layerUpdates.size>0){const Xe=cd(Ge.width,Ge.height,S.format,S.type);for(const Me of S.layerUpdates){const et=Ge.data.subarray(Me*Xe/Ge.data.BYTES_PER_ELEMENT,(Me+1)*Xe/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Me,Ge.width,Ge.height,1,Le,et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ge.width,Ge.height,fe.depth,Le,Ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,qe,Ge.width,Ge.height,fe.depth,0,Ge.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ge.width,Ge.height,fe.depth,Le,je,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,qe,Ge.width,Ge.height,fe.depth,0,Le,je,Ge.data)}else{ot&&_t&&t.texStorage2D(i.TEXTURE_2D,Ne,qe,at[0].width,at[0].height);for(let me=0,ke=at.length;me<ke;me++)Ge=at[me],S.format!==os?Le!==null?ot?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,me,qe,Ge.width,Ge.height,0,Ge.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ge.width,Ge.height,Le,je,Ge.data):t.texImage2D(i.TEXTURE_2D,me,qe,Ge.width,Ge.height,0,Le,je,Ge.data)}else if(S.isDataArrayTexture)if(ot){if(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,qe,fe.width,fe.height,fe.depth),G)if(S.layerUpdates.size>0){const me=cd(fe.width,fe.height,S.format,S.type);for(const ke of S.layerUpdates){const Xe=fe.data.subarray(ke*me/fe.data.BYTES_PER_ELEMENT,(ke+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,fe.width,fe.height,1,Le,je,Xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,je,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,fe.width,fe.height,fe.depth,0,Le,je,fe.data);else if(S.isData3DTexture)ot?(_t&&t.texStorage3D(i.TEXTURE_3D,Ne,qe,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,je,fe.data)):t.texImage3D(i.TEXTURE_3D,0,qe,fe.width,fe.height,fe.depth,0,Le,je,fe.data);else if(S.isFramebufferTexture){if(_t)if(ot)t.texStorage2D(i.TEXTURE_2D,Ne,qe,fe.width,fe.height);else{let me=fe.width,ke=fe.height;for(let Xe=0;Xe<Ne;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,qe,me,ke,0,Le,je,null),me>>=1,ke>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),fe.parentNode!==me){me.appendChild(fe),f.add(S),me.onpaint=ke=>{const Xe=ke.changedElements;for(const Me of f)Xe.includes(Me.image)&&(Me.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{const Xe=i.RGBA,Me=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xe,Me,et,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(ot&&_t){const me=Oe(at[0]);t.texStorage2D(i.TEXTURE_2D,Ne,qe,me.width,me.height)}for(let me=0,ke=at.length;me<ke;me++)Ge=at[me],ot?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Le,je,Ge):t.texImage2D(i.TEXTURE_2D,me,qe,Le,je,Ge);S.generateMipmaps=!1}else if(ot){if(_t){const me=Oe(fe);t.texStorage2D(i.TEXTURE_2D,Ne,qe,me.width,me.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,je,fe)}else t.texImage2D(i.TEXTURE_2D,0,qe,Le,je,fe);p(S)&&y(W),Pe.__version=Te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ae(P,S,L){if(S.image.length!==6)return;const W=$(P,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+L);const Te=n.get(ne);if(ne.version!==Te.__version||W===!0){t.activeTexture(i.TEXTURE0+L);const Pe=Ot.getPrimaries(Ot.workingColorSpace),ce=S.colorSpace===Na?null:Ot.getPrimaries(S.colorSpace),fe=S.colorSpace===Na||Pe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,je=S.image[0]&&S.image[0].isDataTexture,qe=[];for(let Me=0;Me<6;Me++)!Le&&!je?qe[Me]=m(S.image[Me],!0,s.maxCubemapSize):qe[Me]=je?S.image[Me].image:S.image[Me],qe[Me]=ct(S,qe[Me]);const Ge=qe[0],at=a.convert(S.format,S.colorSpace),ot=a.convert(S.type),_t=x(S.internalFormat,at,ot,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,Ne=Te.__version===void 0||W===!0,me=ne.dataReady;let ke=T(S,Ge);Ie(i.TEXTURE_CUBE_MAP,S);let Xe;if(Le){G&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,_t,Ge.width,Ge.height);for(let Me=0;Me<6;Me++){Xe=qe[Me].mipmaps;for(let et=0;et<Xe.length;et++){const Qe=Xe[et];S.format!==os?at!==null?G?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,0,0,Qe.width,Qe.height,at,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,_t,Qe.width,Qe.height,0,Qe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,0,0,Qe.width,Qe.height,at,ot,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et,_t,Qe.width,Qe.height,0,at,ot,Qe.data)}}}else{if(Xe=S.mipmaps,G&&Ne){Xe.length>0&&ke++;const Me=Oe(qe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,_t,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(je){G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,qe[Me].width,qe[Me].height,at,ot,qe[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,qe[Me].width,qe[Me].height,0,at,ot,qe[Me].data);for(let et=0;et<Xe.length;et++){const sn=Xe[et].image[Me].image;G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,0,0,sn.width,sn.height,at,ot,sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,_t,sn.width,sn.height,0,at,ot,sn.data)}}else{G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,at,ot,qe[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,at,ot,qe[Me]);for(let et=0;et<Xe.length;et++){const Qe=Xe[et];G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,0,0,at,ot,Qe.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,et+1,_t,at,ot,Qe.image[Me])}}}p(S)&&y(i.TEXTURE_CUBE_MAP),Te.__version=ne.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function K(P,S,L,W,ne,Te){const Pe=a.convert(L.format,L.colorSpace),ce=a.convert(L.type),fe=x(L.internalFormat,Pe,ce,L.normalized,L.colorSpace),Le=n.get(S),je=n.get(L);if(je.__renderTarget=S,!Le.__hasExternalTextures){const qe=Math.max(1,S.width>>Te),Ge=Math.max(1,S.height>>Te);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Te,fe,qe,Ge,S.depth,0,Pe,ce,null):t.texImage2D(ne,Te,fe,qe,Ge,0,Pe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),$e(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ne,je.__webglTexture,0,Be(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ne,je.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,S,L){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const W=S.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Te=w(S.stencilBuffer,ne),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$e(S)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(S),Te,S.width,S.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(S),Te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,P)}else{const W=S.textures;for(let ne=0;ne<W.length;ne++){const Te=W[ne],Pe=a.convert(Te.format,Te.colorSpace),ce=a.convert(Te.type),fe=x(Te.internalFormat,Pe,ce,Te.normalized,Te.colorSpace);$e(S)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(S),fe,S.width,S.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(S),fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function D(P,S,L){const W=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=n.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S.depthTexture);const Le=a.convert(S.depthTexture.format),je=a.convert(S.depthTexture.type);let qe;S.depthTexture.format===aa?qe=i.DEPTH_COMPONENT24:S.depthTexture.format===eo&&(qe=i.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,qe,S.width,S.height,0,Le,je,null)}}else re(S.depthTexture,0);const Te=ne.__webglTexture,Pe=Be(S),ce=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,fe=S.depthTexture.format===eo?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===aa)$e(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,Te,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,Te,0);else if(S.depthTexture.format===eo)$e(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,Te,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(P){const S=n.get(P),L=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=W}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(L)for(let W=0;W<6;W++)D(S.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?D(S.__webglFramebuffer[0],P,0):D(S.__webglFramebuffer,P,0)}else if(L){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[W],P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Te)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(P,S,L){const W=n.get(P);S!==void 0&&K(W.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&B(P)}function te(P){const S=P.texture,L=n.get(P),W=n.get(S);P.addEventListener("dispose",_);const ne=P.textures,Te=P.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,o.memory.textures++),Te){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)L.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else L.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)L.__webglFramebuffer[ce]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ce=0,fe=ne.length;ce<fe;ce++){const Le=n.get(ne[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const fe=ne[ce];L.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Le=a.convert(fe.format,fe.colorSpace),je=a.convert(fe.type),qe=x(fe.internalFormat,Le,je,fe.normalized,fe.colorSpace,P.isXRRenderTarget===!0),Ge=Be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,qe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(L.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)K(L.__webglFramebuffer[ce][fe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else K(L.__webglFramebuffer[ce],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ce=0,fe=ne.length;ce<fe;ce++){const Le=ne[ce],je=n.get(Le);let qe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(qe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(qe,je.__webglTexture),Ie(qe,Le),K(L.__webglFramebuffer,P,Le,i.COLOR_ATTACHMENT0+ce,qe,0),p(Le)&&y(qe)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Ie(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)K(L.__webglFramebuffer[fe],P,S,i.COLOR_ATTACHMENT0,ce,fe);else K(L.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ce,0);p(S)&&y(ce),t.unbindTexture()}P.depthBuffer&&B(P)}function ve(P){const S=P.textures;for(let L=0,W=S.length;L<W;L++){const ne=S[L];if(p(ne)){const Te=M(P),Pe=n.get(ne).__webglTexture;t.bindTexture(Te,Pe),y(Te),t.unbindTexture()}}}const pe=[],he=[];function Ee(P){if(P.samples>0){if($e(P)===!1){const S=P.textures,L=P.width,W=P.height;let ne=i.COLOR_BUFFER_BIT;const Te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(P),ce=S.length>1;if(ce)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const fe=P.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const je=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,L,W,0,0,L,W,ne,i.NEAREST),l===!0&&(pe.length=0,he.length=0,pe.push(i.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pe.push(Te),he.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const je=n.get(S[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Be(P){return Math.min(s.maxSamples,P.samples)}function $e(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ct(P,S){const L=P.colorSpace,W=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||L!==cl&&L!==Na&&(Ot.getTransfer(L)===Kt?(W!==os||ne!==Ui)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",L)),S}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=re,this.setTexture2DArray=ue,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=Q,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=K,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yy(i,e){function t(n,s=Na){let a;const o=Ot.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===Y0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===em)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qp)return i.BYTE;if(n===jp)return i.SHORT;if(n===rl)return i.UNSIGNED_SHORT;if(n===X0)return i.INT;if(n===Fs)return i.UNSIGNED_INT;if(n===as)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===nm)return i.ALPHA;if(n===im)return i.RGB;if(n===os)return i.RGBA;if(n===aa)return i.DEPTH_COMPONENT;if(n===eo)return i.DEPTH_STENCIL;if(n===K0)return i.RED;if(n===Z0)return i.RED_INTEGER;if(n===io)return i.RG;if(n===J0)return i.RG_INTEGER;if(n===Q0)return i.RGBA_INTEGER;if(n===Uc||n===Oc||n===zc||n===Bc)if(o===Kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qh||n===Xh||n===Yh||n===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kh||n===Zh||n===Jh||n===Qh||n===jh||n===Wc||n===e0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Kh||n===Zh)return o===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Jh)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qh)return a.COMPRESSED_R11_EAC;if(n===jh)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Wc)return a.COMPRESSED_RG11_EAC;if(n===e0)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===t0||n===n0||n===i0||n===s0||n===a0||n===o0||n===r0||n===l0||n===c0||n===u0||n===h0||n===f0||n===d0||n===p0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===t0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===n0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===i0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===s0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===a0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===o0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===r0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===l0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===c0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===u0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===h0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===f0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===d0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===p0)return o===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===m0||n===g0||n===v0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===m0)return o===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===g0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===v0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===x0||n===_0||n===qc||n===y0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===x0)return a.COMPRESSED_RED_RGTC1_EXT;if(n===_0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===y0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ll?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xt({vertexShader:$y,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jy extends ao{constructor(e,t){super();const n=this;let s=null,a=1,o=null,r="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Zy,p={},y=t.getContextAttributes();let M=null,x=null;const w=[],T=[],E=new _e;let _=null;const A=new Fi;A.viewport=new Tn;const R=new Fi;R.viewport=new Tn;const I=[A,R],F=new n1;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=w[$];return ie===void 0&&(ie=new Mu,w[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=w[$];return ie===void 0&&(ie=new Mu,w[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=w[$];return ie===void 0&&(ie=new Mu,w[$]=ie),ie.getHandSpace()};function O($){const ie=T.indexOf($.inputSource);if(ie===-1)return;const de=w[ie];de!==void 0&&(de.update($.inputSource,$.frame,c||o),de.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",z);for(let $=0;$<w.length;$++){const ie=T[$];ie!==null&&(T[$]=null,w[$].disconnect(ie))}H=null,X=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(M),d=null,h=null,f=null,s=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,n.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,De=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?eo:aa,De=y.stencil?ll:Fs);const K={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};f=this.getBinding(),h=f.createProjectionLayer(K),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new di(h.textureWidth,h.textureHeight,{format:os,type:Ui,depthTexture:new or(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new di(d.framebufferWidth,d.framebufferHeight,{format:os,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(r),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let ie=0;ie<$.removed.length;ie++){const de=$.removed[ie],De=T.indexOf(de);De>=0&&(T[De]=null,w[De].disconnect(de))}for(let ie=0;ie<$.added.length;ie++){const de=$.added[ie];let De=T.indexOf(de);if(De===-1){for(let K=0;K<w.length;K++)if(K>=T.length){T.push(de),De=K;break}else if(T[K]===null){T[K]=de,De=K;break}if(De===-1)break}const Ae=w[De];Ae&&Ae.connect(de)}}const re=new b,ue=new b;function Y($,ie,de){re.setFromMatrixPosition(ie.matrixWorld),ue.setFromMatrixPosition(de.matrixWorld);const De=re.distanceTo(ue),Ae=ie.projectionMatrix.elements,K=de.projectionMatrix.elements,ae=Ae[14]/(Ae[10]-1),D=Ae[14]/(Ae[10]+1),B=(Ae[9]+1)/Ae[5],Q=(Ae[9]-1)/Ae[5],te=(Ae[8]-1)/Ae[0],ve=(K[8]+1)/K[0],pe=ae*te,he=ae*ve,Ee=De/(-te+ve),Be=Ee*-te;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const $e=ae+Ee,N=D+Ee,ct=pe-Be,Oe=he+(De-Be),P=B*D/N*$e,S=Q*D/N*$e;$.projectionMatrix.makePerspective(ct,Oe,P,S,$e,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,de=$.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(de=m.depthFar)),F.near=R.near=A.near=ie,F.far=R.far=A.far=de,(H!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,X=F.far),F.layers.mask=$.layers.mask|6,A.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const De=$.parent,Ae=F.cameras;ee(F,De);for(let K=0;K<Ae.length;K++)ee(Ae[K],De);Ae.length===2?Y(F,A,R):F.projectionMatrix.copy(A.projectionMatrix),le($,F,De)};function le($,ie,de){de===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=M0*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let Ce=null;function Ue($,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let De=!1;de.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let D=0;D<de.length;D++){const B=de[D];let Q=null;if(d!==null)Q=d.getViewport(B);else{const ve=f.getViewSubImage(h,B);Q=ve.viewport,D===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let te=I[D];te===void 0&&(te=new Fi,te.layers.enable(D),te.viewport=new Tn,I[D]=te),te.matrix.fromArray(B.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(B.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(F.matrix.copy(te.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(te)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const D=f.getDepthInformation(de[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<de.length;D++){const B=de[D].camera;if(B){let Q=p[B];Q||(Q=new dm,p[B]=Q);const te=f.getCameraImage(B);Q.sourceTexture=te}}}}for(let de=0;de<w.length;de++){const De=T[de],Ae=w[de];De!==null&&Ae!==void 0&&Ae.update(De,ie,c||o)}Ce&&Ce($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ie=new Am;Ie.setAnimationLoop(Ue),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}}const Qy=new st,Fm=new Mt;Fm.set(-1,0,0,0,1,0,0,0,1);function jy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eb(i,e,t,n){let s={},a={},o=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const T=w.program;n.uniformBlockBinding(x,T)}function c(x,w){let T=s[x.id];T===void 0&&(m(x),T=u(x),s[x.id]=T,x.addEventListener("dispose",y));const E=w.program;n.updateUBOMapping(x,E);const _=e.render.frame;a[x.id]!==_&&(h(x),a[x.id]=_)}function u(x){const w=f();x.__bindingPointIndex=w;const T=i.createBuffer(),E=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function f(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=s[x.id],T=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,A=T.length;_<A;_++){const R=T[_];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)d(R[I],_,I,E);else d(R,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,w,T,E){if(v(x,w,T,E)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){const F=A[I],H=p(F);g(F,x.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,w,T){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,T)}function v(x,w,T,E){const _=x.value,A=w+"_"+T;if(E[A]===void 0)return typeof _=="number"||typeof _=="boolean"?E[A]=_:ArrayBuffer.isView(_)?E[A]=_.slice():E[A]=_.clone(),!0;{const R=E[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return E[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){const w=x.uniforms;let T=0;const E=16;for(let A=0,R=w.length;A<R;A++){const I=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,H=I.length;F<H;F++){const X=I[F],O=Array.isArray(X.value)?X.value:[X.value];for(let V=0,z=O.length;V<z;V++){const re=O[V],ue=p(re),Y=T%E,ee=Y%ue.boundary,le=Y+ee;T+=ee,le!==0&&E-le<ue.storage&&(T+=E-le),X.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ue.storage}}}const _=T%E;return _>0&&(T+=E-_),x.__size=T,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",x),w}function y(x){const w=x.target;w.removeEventListener("dispose",y);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function M(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},a={}}return{bind:l,update:c,dispose:M}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _s=null;function nb(){return _s===null&&(_s=new hm(tb,16,16,io,Ti),_s.name="DFG_LUT",_s.minFilter=ii,_s.magFilter=ii,_s.wrapS=ea,_s.wrapT=ea,_s.generateMipmaps=!1,_s.needsUpdate=!0),_s}class ib{constructor(e={}){const{canvas:t=Og(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ui}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=d,m=new Set([Q0,J0,Z0]),p=new Set([Ui,Fs,rl,ll,Y0,$0]),y=new Uint32Array(4),M=new Int32Array(4),x=new b;let w=null,T=null;const E=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,F=null,H=null,X=null,O=null;this._outputColorSpace=Di;let V=0,z=0,re=null,ue=-1,Y=null;const ee=new Tn,le=new Tn;let Ce=null;const Ue=new Ve(0);let Ie=0,$=t.width,ie=t.height,de=1,De=null,Ae=null;const K=new Tn(0,0,$,ie),ae=new Tn(0,0,$,ie);let D=!1;const B=new sf;let Q=!1,te=!1;const ve=new st,pe=new b,he=new Tn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function $e(){return re===null?de:1}let N=n;function ct(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${B0}`),t.addEventListener("webglcontextlost",sn,!1),t.addEventListener("webglcontextrestored",qt,!1),t.addEventListener("webglcontextcreationerror",gi,!1),N===null){const q="webgl2";if(N=ct(q,C),N===null)throw ct(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Bt("WebGLRenderer: "+C.message),C}let Oe,P,S,L,W,ne,Te,Pe,ce,fe,Le,je,qe,Ge,at,ot,_t,G,Ne,me,ke,Xe,Me;function et(){Oe=new n_(N),Oe.init(),ke=new Yy(N,Oe),P=new $2(N,Oe,e,ke),S=new qy(N,Oe),P.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),H=N.createFramebuffer(),X=N.createFramebuffer(),O=N.createFramebuffer(),L=new a_(N),W=new Iy,ne=new Xy(N,Oe,S,W,P,ke,L),Te=new t_(R),Pe=new c1(N),Xe=new X2(N,Pe),ce=new i_(N,Pe,L,Xe),fe=new r_(N,ce,Pe,Xe,L),G=new o_(N,P,ne),at=new K2(W),Le=new Ry(R,Te,Oe,P,Xe,at),je=new jy(R,W),qe=new Dy,Ge=new By(Oe),_t=new q2(R,Te,S,fe,g,l),ot=new Wy(R,fe,P),Me=new eb(N,L,P,S),Ne=new Y2(N,Oe,L),me=new s_(N,Oe,L),L.programs=Le.programs,R.capabilities=P,R.extensions=Oe,R.properties=W,R.renderLists=qe,R.shadowMap=ot,R.state=S,R.info=L}et(),v!==Ui&&(A=new c_(v,t.width,t.height,r,s,a));const Qe=new Jy(R,N);this.xr=Qe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize($,ie,!1))},this.getSize=function(C){return C.set($,ie)},this.setSize=function(C,q,J=!0){if(Qe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,ie=q,t.width=Math.floor(C*de),t.height=Math.floor(q*de),J===!0&&(t.style.width=C+"px",t.style.height=q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set($*de,ie*de).floor()},this.setDrawingBufferSize=function(C,q,J){$=C,ie=q,de=J,t.width=Math.floor(C*J),t.height=Math.floor(q*J),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(v===Ui){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ee)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,q,J,se){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,q,J,se),S.viewport(ee.copy(K).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,q,J,se){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,q,J,se),S.scissor(le.copy(ae).multiplyScalar(de).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(C){S.setScissorTest(D=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){Ae=C},this.getClearColor=function(C){return C.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,J=!0){let se=0;if(C){let oe=!1;if(re!==null){const Se=re.texture.format;oe=m.has(Se)}if(oe){const Se=re.texture.type,ge=p.has(Se),be=_t.getClearColor(),Re=_t.getClearAlpha(),ze=be.r,nt=be.g,Ze=be.b;ge?(y[0]=ze,y[1]=nt,y[2]=Ze,y[3]=Re,N.clearBufferuiv(N.COLOR,0,y)):(M[0]=ze,M[1]=nt,M[2]=Ze,M[3]=Re,N.clearBufferiv(N.COLOR,0,M))}else se|=N.COLOR_BUFFER_BIT}q&&(se|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(se|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&N.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){t.removeEventListener("webglcontextlost",sn,!1),t.removeEventListener("webglcontextrestored",qt,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),_t.dispose(),qe.dispose(),Ge.dispose(),W.dispose(),Te.dispose(),fe.dispose(),Xe.dispose(),Me.dispose(),Le.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Ut),Qe.removeEventListener("sessionend",xn),Bn.stop()};function sn(C){C.preventDefault(),Lf("WebGLRenderer: Context Lost."),I=!0}function qt(){Lf("WebGLRenderer: Context Restored."),I=!1;const C=L.autoReset,q=ot.enabled,J=ot.autoUpdate,se=ot.needsUpdate,oe=ot.type;et(),L.autoReset=C,ot.enabled=q,ot.autoUpdate=J,ot.needsUpdate=se,ot.type=oe}function gi(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vi(C){const q=C.target;q.removeEventListener("dispose",vi),xe(q)}function xe(C){U(C),W.remove(C)}function U(C){const q=W.get(C).programs;q!==void 0&&(q.forEach(function(J){Le.releaseProgram(J)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,J,se,oe,Se){q===null&&(q=Ee);const ge=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,be=un(C,q,J,se,oe);S.setMaterial(se,ge);let Re=J.index,ze=1;if(se.wireframe===!0){if(Re=ce.getWireframeAttribute(J),Re===void 0)return;ze=2}const nt=J.drawRange,Ze=J.attributes.position;let Ye=nt.start*ze,yt=(nt.start+nt.count)*ze;Se!==null&&(Ye=Math.max(Ye,Se.start*ze),yt=Math.min(yt,(Se.start+Se.count)*ze)),Re!==null?(Ye=Math.max(Ye,0),yt=Math.min(yt,Re.count)):Ze!=null&&(Ye=Math.max(Ye,0),yt=Math.min(yt,Ze.count));const Ht=yt-Ye;if(Ht<0||Ht===1/0)return;Xe.setup(oe,se,be,J,Re);let Xt,an=Ne;if(Re!==null&&(Xt=Pe.get(Re),an=me,an.setIndex(Xt)),oe.isMesh)se.wireframe===!0?(S.setLineWidth(se.wireframeLinewidth*$e()),an.setMode(N.LINES)):an.setMode(N.TRIANGLES);else if(oe.isLine){let jn=se.linewidth;jn===void 0&&(jn=1),S.setLineWidth(jn*$e()),oe.isLineSegments?an.setMode(N.LINES):oe.isLineLoop?an.setMode(N.LINE_LOOP):an.setMode(N.LINE_STRIP)}else oe.isPoints?an.setMode(N.POINTS):oe.isSprite&&an.setMode(N.TRIANGLES);if(oe.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))an.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const jn=oe._multiDrawStarts,Je=oe._multiDrawCounts,Ei=oe._multiDrawCount,kt=Re?Pe.get(Re).bytesPerElement:1,ki=W.get(se).currentProgram.getUniforms();for(let vs=0;vs<Ei;vs++)ki.setValue(N,"_gl_DrawID",vs),an.render(jn[vs]/kt,Je[vs])}else if(oe.isInstancedMesh)an.renderInstances(Ye,Ht,oe.count);else if(J.isInstancedBufferGeometry){const jn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Je=Math.min(J.instanceCount,jn);an.renderInstances(Ye,Ht,Je)}else an.render(Ye,Ht)};function Z(C,q,J){C.transparent===!0&&C.side===cn&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,$n(C,q,J),C.side=pi,C.needsUpdate=!0,$n(C,q,J),C.side=cn):$n(C,q,J)}this.compile=function(C,q,J=null){J===null&&(J=C),T=Ge.get(J),T.init(q),_.push(T),J.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(T.pushLight(oe),oe.castShadow&&T.pushShadow(oe))}),C!==J&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(T.pushLight(oe),oe.castShadow&&T.pushShadow(oe))}),T.setupLights();const se=new Set;return C.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Se=oe.material;if(Se)if(Array.isArray(Se))for(let ge=0;ge<Se.length;ge++){const be=Se[ge];Z(be,J,oe),se.add(be)}else Z(Se,J,oe),se.add(Se)}),T=_.pop(),se},this.compileAsync=function(C,q,J=null){const se=this.compile(C,q,J);return new Promise(oe=>{function Se(){if(se.forEach(function(ge){W.get(ge).currentProgram.isReady()&&se.delete(ge)}),se.size===0){oe(C);return}setTimeout(Se,10)}Oe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ye=null;function ut(C){ye&&ye(C)}function Ut(){Bn.stop()}function xn(){Bn.start()}const Bn=new Am;Bn.setAnimationLoop(ut),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(C){ye=C,Qe.setAnimationLoop(C),C===null?Bn.stop():Bn.start()},Qe.addEventListener("sessionstart",Ut),Qe.addEventListener("sessionend",xn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(C,q);const J=Qe.enabled===!0&&Qe.isPresenting===!0,se=A!==null&&(re===null||J)&&A.begin(R,re);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(q),q=Qe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,q,re),T=Ge.get(C,_.length),T.init(q),T.state.textureUnits=ne.getTextureUnits(),_.push(T),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B.setFromProjectionMatrix(ve,Rs,q.reversedDepth),te=this.localClippingEnabled,Q=at.init(this.clippingPlanes,te),w=qe.get(C,E.length),w.init(),E.push(w),Qe.enabled===!0&&Qe.isPresenting===!0){const ge=R.xr.getDepthSensingMesh();ge!==null&&kn(ge,q,-1/0,R.sortObjects)}kn(C,q,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(De,Ae,q.reversedDepth),Be=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,Be&&_t.addToRenderList(w,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&at.beginShadows();const oe=T.state.shadowsArray;if(ot.render(oe,C,q),Q===!0&&at.endShadows(),(se&&A.hasRenderPass())===!1){const ge=w.opaque,be=w.transmissive;if(T.setupLights(),q.isArrayCamera){const Re=q.cameras;if(be.length>0)for(let ze=0,nt=Re.length;ze<nt;ze++){const Ze=Re[ze];ai(ge,be,C,Ze)}Be&&_t.render(C);for(let ze=0,nt=Re.length;ze<nt;ze++){const Ze=Re[ze];zi(w,C,Ze,Ze.viewport)}}else be.length>0&&ai(ge,be,C,q),Be&&_t.render(C),zi(w,C,q)}re!==null&&z===0&&(ne.updateMultisampleRenderTarget(re),ne.updateRenderTargetMipmap(re)),se&&A.end(R),C.isScene===!0&&C.onAfterRender(R,C,q),Xe.resetDefaultState(),ue=-1,Y=null,_.pop(),_.length>0?(T=_[_.length-1],ne.setTextureUnits(T.state.textureUnits),Q===!0&&at.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,F!==null&&F.renderEnd()};function kn(C,q,J,se){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){se&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const ge=fe.update(C),be=C.material;be.visible&&w.push(C,ge,be,J,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){const ge=fe.update(C),be=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),he.copy(ge.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Re=ge.groups;for(let ze=0,nt=Re.length;ze<nt;ze++){const Ze=Re[ze],Ye=be[Ze.materialIndex];Ye&&Ye.visible&&w.push(C,ge,Ye,J,he.z,Ze)}}else be.visible&&w.push(C,ge,be,J,he.z,null)}}const Se=C.children;for(let ge=0,be=Se.length;ge<be;ge++)kn(Se[ge],q,J,se)}function zi(C,q,J,se){const{opaque:oe,transmissive:Se,transparent:ge}=C;T.setupLightsView(J),Q===!0&&at.setGlobalState(R.clippingPlanes,J),se&&S.viewport(ee.copy(se)),oe.length>0&&oi(oe,q,J),Se.length>0&&oi(Se,q,J),ge.length>0&&oi(ge,q,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ai(C,q,J,se){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[se.id]===void 0){const Ye=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[se.id]=new di(1,1,{generateMipmaps:!0,type:Ye?Ti:Ui,minFilter:ja,samples:Math.max(4,P.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Se=T.state.transmissionRenderTarget[se.id],ge=se.viewport||ee;Se.setSize(ge.z*R.transmissionResolutionScale,ge.w*R.transmissionResolutionScale);const be=R.getRenderTarget(),Re=R.getActiveCubeFace(),ze=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(Ue),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),Be&&_t.render(J);const nt=R.toneMapping;R.toneMapping=Ds;const Ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),T.setupLightsView(se),Q===!0&&at.setGlobalState(R.clippingPlanes,se),oi(C,J,se),ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let yt=0,Ht=q.length;yt<Ht;yt++){const Xt=q[yt],{object:an,geometry:jn,material:Je,group:Ei}=Xt;if(Je.side===cn&&an.layers.test(se.layers)){const kt=Je.side;Je.side=Yn,Je.needsUpdate=!0,la(an,J,se,jn,Je,Ei),Je.side=kt,Je.needsUpdate=!0,Ye=!0}}Ye===!0&&(ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se))}R.setRenderTarget(be,Re,ze),R.setClearColor(Ue,Ie),Ze!==void 0&&(se.viewport=Ze),R.toneMapping=nt}function oi(C,q,J){const se=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,Se=C.length;oe<Se;oe++){const ge=C[oe],{object:be,geometry:Re,group:ze}=ge;let nt=ge.material;nt.allowOverride===!0&&se!==null&&(nt=se),be.layers.test(J.layers)&&la(be,q,J,Re,nt,ze)}}function la(C,q,J,se,oe,Se){C.onBeforeRender(R,q,J,se,oe,Se),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(R,q,J,se,C,Se),oe.transparent===!0&&oe.side===cn&&oe.forceSinglePass===!1?(oe.side=Yn,oe.needsUpdate=!0,R.renderBufferDirect(J,q,se,oe,C,Se),oe.side=pi,oe.needsUpdate=!0,R.renderBufferDirect(J,q,se,oe,C,Se),oe.side=cn):R.renderBufferDirect(J,q,se,oe,C,Se),C.onAfterRender(R,q,J,se,oe,Se)}function $n(C,q,J){q.isScene!==!0&&(q=Ee);const se=W.get(C),oe=T.state.lights,Se=T.state.shadowsArray,ge=oe.state.version,be=Le.getParameters(C,oe.state,Se,q,J,T.state.lightProbeGridArray),Re=Le.getProgramCacheKey(be);let ze=se.programs;se.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;se.envMap=Te.get(C.envMap||se.environment,nt),se.envMapRotation=se.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",vi),ze=new Map,se.programs=ze);let Ze=ze.get(Re);if(Ze!==void 0){if(se.currentProgram===Ze&&se.lightsStateVersion===ge)return Bi(C,be),Ze}else be.uniforms=Le.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,J,be),C.onBeforeCompile(be,R),Ze=Le.acquireProgram(be,Re),ze.set(Re,Ze),se.uniforms=be.uniforms;const Ye=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=at.uniform),Bi(C,be),se.needsLights=Vs(C),se.lightsStateVersion=ge,se.needsLights&&(Ye.ambientLightColor.value=oe.state.ambient,Ye.lightProbe.value=oe.state.probe,Ye.directionalLights.value=oe.state.directional,Ye.directionalLightShadows.value=oe.state.directionalShadow,Ye.spotLights.value=oe.state.spot,Ye.spotLightShadows.value=oe.state.spotShadow,Ye.rectAreaLights.value=oe.state.rectArea,Ye.ltc_1.value=oe.state.rectAreaLTC1,Ye.ltc_2.value=oe.state.rectAreaLTC2,Ye.pointLights.value=oe.state.point,Ye.pointLightShadows.value=oe.state.pointShadow,Ye.hemisphereLights.value=oe.state.hemi,Ye.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ye.spotLightMatrix.value=oe.state.spotLightMatrix,Ye.spotLightMap.value=oe.state.spotLightMap,Ye.pointShadowMatrix.value=oe.state.pointShadowMatrix),se.lightProbeGrid=T.state.lightProbeGridArray.length>0,se.currentProgram=Ze,se.uniformsList=null,Ze}function ks(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=kc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Bi(C,q){const J=W.get(C);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function Xi(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(q.matrixWorld);for(let J=0,se=C.length;J<se;J++){const oe=C[J];if(oe.texture!==null&&oe.boundingBox.containsPoint(x))return oe}return null}function un(C,q,J,se,oe){q.isScene!==!0&&(q=Ee),ne.resetTextureUnits();const Se=q.fog,ge=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,be=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ot.workingColorSpace,Re=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ze=Te.get(se.envMap||ge,Re),nt=se.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,Ht=!!J.morphAttributes.color;let Xt=Ds;se.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const an=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,jn=an!==void 0?an.length:0,Je=W.get(se),Ei=T.state.lights;if(Q===!0&&(te===!0||C!==Y)){const hn=C===Y&&se.id===ue;at.setState(se,C,hn)}let kt=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ei.state.version||Je.outputColorSpace!==be||oe.isBatchedMesh&&Je.batching===!1||!oe.isBatchedMesh&&Je.batching===!0||oe.isBatchedMesh&&Je.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Je.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Je.instancing===!1||!oe.isInstancedMesh&&Je.instancing===!0||oe.isSkinnedMesh&&Je.skinning===!1||!oe.isSkinnedMesh&&Je.skinning===!0||oe.isInstancedMesh&&Je.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Je.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Je.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Je.instancingMorph===!1&&oe.morphTexture!==null||Je.envMap!==ze||se.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==at.numPlanes||Je.numIntersection!==at.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==Ze||Je.morphTargets!==Ye||Je.morphNormals!==yt||Je.morphColors!==Ht||Je.toneMapping!==Xt||Je.morphTargetsCount!==jn||!!Je.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(kt=!0):(kt=!0,Je.__version=se.version);let ki=Je.currentProgram;kt===!0&&(ki=$n(se,q,oe),F&&se.isNodeMaterial&&F.onUpdateProgram(se,ki,Je));let vs=!1,ca=!1,lo=!1;const on=ki.getUniforms(),Ln=Je.uniforms;if(S.useProgram(ki.program)&&(vs=!0,ca=!0,lo=!0),se.id!==ue&&(ue=se.id,ca=!0),Je.needsLights){const hn=Xi(T.state.lightProbeGridArray,oe);Je.lightProbeGrid!==hn&&(Je.lightProbeGrid=hn,ca=!0)}if(vs||Y!==C){S.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),on.setValue(N,"projectionMatrix",C.projectionMatrix),on.setValue(N,"viewMatrix",C.matrixWorldInverse);const ha=on.map.cameraPosition;ha!==void 0&&ha.setValue(N,pe.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&on.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&on.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,ca=!0,lo=!0)}if(Je.needsLights&&(Ei.state.directionalShadowMap.length>0&&on.setValue(N,"directionalShadowMap",Ei.state.directionalShadowMap,ne),Ei.state.spotShadowMap.length>0&&on.setValue(N,"spotShadowMap",Ei.state.spotShadowMap,ne),Ei.state.pointShadowMap.length>0&&on.setValue(N,"pointShadowMap",Ei.state.pointShadowMap,ne)),oe.isSkinnedMesh){on.setOptional(N,oe,"bindMatrix"),on.setOptional(N,oe,"bindMatrixInverse");const hn=oe.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),on.setValue(N,"boneTexture",hn.boneTexture,ne))}oe.isBatchedMesh&&(on.setOptional(N,oe,"batchingTexture"),on.setValue(N,"batchingTexture",oe._matricesTexture,ne),on.setOptional(N,oe,"batchingIdTexture"),on.setValue(N,"batchingIdTexture",oe._indirectTexture,ne),on.setOptional(N,oe,"batchingColorTexture"),oe._colorsTexture!==null&&on.setValue(N,"batchingColorTexture",oe._colorsTexture,ne));const ua=J.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&G.update(oe,J,ki),(ca||Je.receiveShadow!==oe.receiveShadow)&&(Je.receiveShadow=oe.receiveShadow,on.setValue(N,"receiveShadow",oe.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&(Ln.envMapIntensity.value=q.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=nb()),ca){if(on.setValue(N,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&Cn(Ln,lo),Se&&se.fog===!0&&je.refreshFogUniforms(Ln,Se),je.refreshMaterialUniforms(Ln,se,de,ie,T.state.transmissionRenderTarget[C.id]),Je.needsLights&&Je.lightProbeGrid){const hn=Je.lightProbeGrid;Ln.probesSH.value=hn.texture,Ln.probesMin.value.copy(hn.boundingBox.min),Ln.probesMax.value.copy(hn.boundingBox.max),Ln.probesResolution.value.copy(hn.resolution)}kc.upload(N,ks(Je),Ln,ne)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(kc.upload(N,ks(Je),Ln,ne),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&on.setValue(N,"center",oe.center),on.setValue(N,"modelViewMatrix",oe.modelViewMatrix),on.setValue(N,"normalMatrix",oe.normalMatrix),on.setValue(N,"modelMatrix",oe.matrixWorld),se.uniformsGroups!==void 0){const hn=se.uniformsGroups;for(let ha=0,co=hn.length;ha<co;ha++){const wf=hn[ha];Me.update(wf,ki),Me.bind(wf,ki)}}return ki}function Cn(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Vs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(C,q,J){const se=W.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),W.get(C.texture).__webglTexture=q,W.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:J,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const J=W.get(C);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,J=0){re=C,V=q,z=J;let se=null,oe=!1,Se=!1;if(C){const be=W.get(C);if(be.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(C.viewport),le.copy(C.scissor),Ce=C.scissorTest,S.viewport(ee),S.scissor(le),S.setScissorTest(Ce),ue=-1;return}else if(be.__webglFramebuffer===void 0)ne.setupRenderTarget(C);else if(be.__hasExternalTextures)ne.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(be.__boundDepthTexture!==nt){if(nt!==null&&W.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(C)}}const Re=C.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const ze=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[q])?se=ze[q][J]:se=ze[q],oe=!0):C.samples>0&&ne.useMultisampledRTT(C)===!1?se=W.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?se=ze[J]:se=ze,ee.copy(C.viewport),le.copy(C.scissor),Ce=C.scissorTest}else ee.copy(K).multiplyScalar(de).floor(),le.copy(ae).multiplyScalar(de).floor(),Ce=D;if(J!==0&&(se=H),S.bindFramebuffer(N.FRAMEBUFFER,se)&&S.drawBuffers(C,se),S.viewport(ee),S.scissor(le),S.setScissorTest(Ce),oe){const be=W.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,J)}else if(Se){const be=q;for(let Re=0;Re<C.textures.length;Re++){const ze=W.get(C.textures[Re]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Re,ze.__webglTexture,J,be)}}else if(C!==null&&J!==0){const be=W.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,be.__webglTexture,J)}ue=-1},this.readRenderTargetPixels=function(C,q,J,se,oe,Se,ge,be=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Re=Re[ge]),Re){S.bindFramebuffer(N.FRAMEBUFFER,Re);try{const ze=C.textures[be],nt=ze.format,Ze=ze.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(nt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ze)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-se&&J>=0&&J<=C.height-oe&&N.readPixels(q,J,se,oe,ke.convert(nt),ke.convert(Ze),Se)}finally{const ze=re!==null?W.get(re).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,q,J,se,oe,Se,ge,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Re=Re[ge]),Re)if(q>=0&&q<=C.width-se&&J>=0&&J<=C.height-oe){S.bindFramebuffer(N.FRAMEBUFFER,Re);const ze=C.textures[be],nt=ze.format,Ze=ze.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.bufferData(N.PIXEL_PACK_BUFFER,Se.byteLength,N.STREAM_READ),N.readPixels(q,J,se,oe,ke.convert(nt),ke.convert(Ze),0);const yt=re!==null?W.get(re).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,yt);const Ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zg(N,Ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Se),N.deleteBuffer(Ye),N.deleteSync(Ht),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,J=0){const se=Math.pow(2,-J),oe=Math.floor(C.image.width*se),Se=Math.floor(C.image.height*se),ge=q!==null?q.x:0,be=q!==null?q.y:0;ne.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,ge,be,oe,Se),S.unbindTexture()},this.copyTextureToTexture=function(C,q,J=null,se=null,oe=0,Se=0){let ge,be,Re,ze,nt,Ze,Ye,yt,Ht;const Xt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(J!==null)ge=J.max.x-J.min.x,be=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,nt=J.min.y,Ze=J.isBox3?J.min.z:0;else{const Ln=Math.pow(2,-oe);ge=Math.floor(Xt.width*Ln),be=Math.floor(Xt.height*Ln),C.isDataArrayTexture?Re=Xt.depth:C.isData3DTexture?Re=Math.floor(Xt.depth*Ln):Re=1,ze=0,nt=0,Ze=0}se!==null?(Ye=se.x,yt=se.y,Ht=se.z):(Ye=0,yt=0,Ht=0);const an=ke.convert(q.format),jn=ke.convert(q.type);let Je;q.isData3DTexture?(ne.setTexture3D(q,0),Je=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ne.setTexture2DArray(q,0),Je=N.TEXTURE_2D_ARRAY):(ne.setTexture2D(q,0),Je=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const Ei=S.getParameter(N.UNPACK_ROW_LENGTH),kt=S.getParameter(N.UNPACK_IMAGE_HEIGHT),ki=S.getParameter(N.UNPACK_SKIP_PIXELS),vs=S.getParameter(N.UNPACK_SKIP_ROWS),ca=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),S.pixelStorei(N.UNPACK_SKIP_ROWS,nt),S.pixelStorei(N.UNPACK_SKIP_IMAGES,Ze);const lo=C.isDataArrayTexture||C.isData3DTexture,on=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Ln=W.get(C),ua=W.get(q),hn=W.get(Ln.__renderTarget),ha=W.get(ua.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let co=0;co<Re;co++)lo&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(C).__webglTexture,oe,Ze+co),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(q).__webglTexture,Se,Ht+co)),N.blitFramebuffer(ze,nt,ge,be,Ye,yt,ge,be,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(oe!==0||C.isRenderTargetTexture||W.has(C)){const Ln=W.get(C),ua=W.get(q);S.bindFramebuffer(N.READ_FRAMEBUFFER,X),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let hn=0;hn<Re;hn++)lo?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ln.__webglTexture,oe,Ze+hn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ln.__webglTexture,oe),on?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ua.__webglTexture,Se,Ht+hn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ua.__webglTexture,Se),oe!==0?N.blitFramebuffer(ze,nt,ge,be,Ye,yt,ge,be,N.COLOR_BUFFER_BIT,N.NEAREST):on?N.copyTexSubImage3D(Je,Se,Ye,yt,Ht+hn,ze,nt,ge,be):N.copyTexSubImage2D(Je,Se,Ye,yt,ze,nt,ge,be);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else on?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Je,Se,Ye,yt,Ht,ge,be,Re,an,jn,Xt.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Je,Se,Ye,yt,Ht,ge,be,Re,an,Xt.data):N.texSubImage3D(Je,Se,Ye,yt,Ht,ge,be,Re,an,jn,Xt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Se,Ye,yt,ge,be,an,jn,Xt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Se,Ye,yt,Xt.width,Xt.height,an,Xt.data):N.texSubImage2D(N.TEXTURE_2D,Se,Ye,yt,ge,be,an,jn,Xt);S.pixelStorei(N.UNPACK_ROW_LENGTH,Ei),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt),S.pixelStorei(N.UNPACK_SKIP_PIXELS,ki),S.pixelStorei(N.UNPACK_SKIP_ROWS,vs),S.pixelStorei(N.UNPACK_SKIP_IMAGES,ca),Se===0&&q.generateMipmaps&&N.generateMipmap(Je),S.unbindTexture()},this.initRenderTarget=function(C){W.get(C).__webglFramebuffer===void 0&&ne.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ne.setTextureCube(C,0):C.isData3DTexture?ne.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ne.setTexture2DArray(C,0):ne.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){V=0,z=0,re=null,S.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}const Vc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sb=new ou(-1,1,1,-1,0,1);class ab extends Tt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const ob=new ab;class ff{constructor(e){this._mesh=new ft(ob,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nm extends gr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pl.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ff(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dd extends gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class rb extends gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nm(Vc),this.copyPass.material.blending=Ls,this.timer=new i1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Dd!==void 0&&(o instanceof Dd?n=!0:o instanceof rb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cb extends gr{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ub={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ur extends gr{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new di(a,o,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new di(a,o,{type:Ti});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new di(a,o,{type:Ti});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),o=Math.round(o/2)}const r=ub;this.highPassUniforms=pl.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _e(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pl.clone(Vc.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Vc.vertexShader,fragmentShader:Vc.fragmentShader,premultipliedAlpha:!0,blending:Jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new nf,this._fsQuad=new ff(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new _e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ur.BlurDirectionX=new _e(1,0);ur.BlurDirectionY=new _e(0,1);const ic={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hb extends gr{constructor(){super(),this.isOutputPass=!0,this.uniforms=pl.clone(ic.uniforms),this.material=new Sm({name:ic.name,uniforms:this.uniforms,vertexShader:ic.vertexShader,fragmentShader:ic.fragmentShader}),this._fsQuad=new ff(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ot.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===k0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===V0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===G0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===W0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===q0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===H0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const fb={uniforms:{tDiffuse:{value:null},uTime:{value:0},uAspect:{value:1.777},uSpeedBlur:{value:0},uBlurCenter:{value:new _e(.5,.5)},uCA:{value:42e-5},uVignette:{value:.72},uGrain:{value:.016},uFlash:{value:0},uFlashColor:{value:new Ve(1,.92,.78)},uLift:{value:new b(.004,.008,.02)},uGain:{value:new b(1.02,1,1.03)},uSaturation:{value:1.06},uDesat:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uTime, uAspect, uSpeedBlur, uCA, uVignette, uGrain, uFlash, uSaturation, uDesat;
    uniform vec2 uBlurCenter;
    uniform vec3 uLift, uGain, uFlashColor;
    varying vec2 vUv;

    float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }

    void main(){
      vec2 uv = vUv;
      vec2 d = uv - uBlurCenter;
      float r2 = dot(d,d);
      float ca = uCA * (0.25 + r2*2.2);
      vec3 col;

      if(uSpeedBlur > 0.001){
        // chromatic radial blur: each channel walks a slightly different scale,
        // so the smear and the dispersion come from the same samples
        float j = h12(uv*vec2(1024.0,768.0) + uTime) * 0.1;
        float disp = 1.0 + uSpeedBlur*0.9;
        vec3 acc = vec3(0.0); float wsum = 0.0;
        for(int i=0;i<10;i++){
          float t = (float(i)+j)/10.0;
          float w = 1.0 - t*0.55;
          float s = 1.0 - uSpeedBlur*0.13*t;
          float e = ca*disp*1.6;
          acc.r += texture2D(tDiffuse, uBlurCenter + d*(s*(1.0+e))).r * w;
          acc.g += texture2D(tDiffuse, uBlurCenter + d*s).g * w;
          acc.b += texture2D(tDiffuse, uBlurCenter + d*(s*(1.0-e))).b * w;
          wsum += w;
        }
        col = acc/wsum;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
        if(ca > 0.00002){
          vec2 off = d * ca * 2.2;
          col.r = texture2D(tDiffuse, uv + off).r;
          col.b = texture2D(tDiffuse, uv - off).b;
        }
      }

      // grade: lift / gain / saturation
      col = col * uGain + uLift;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSaturation);
      col = mix(col, vec3(l), uDesat);

      // additive flash (before tonemap so ACES rolls it off)
      col += uFlashColor * uFlash;

      // vignette
      vec2 vd = (uv-0.5) * vec2(uAspect,1.0);
      float vig = 1.0 - uVignette * pow(clamp(dot(vd,vd)*0.86,0.0,1.0), 1.35);
      col *= vig;

      // grain (scaled by darkness so highlights stay clean)
      float g = h12(uv*vec2(1920.0,1080.0) + fract(uTime)*77.0) - 0.5;
      col += g * uGrain * (0.35 + 0.65*(1.0 - clamp(l,0.0,1.0)));

      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};class db{constructor(e,t,n){this.renderer=e;const s=e.getSize(new _e),a=e.getPixelRatio(),o=new di(s.x*a,s.y*a,{type:Ti,colorSpace:cl,samples:4});this.composer=new lb(e,o),this.composer.setPixelRatio(a),this.composer.setSize(s.x,s.y),this.renderPass=new cb(t,n),this.composer.addPass(this.renderPass),this.bloom=new ur(new _e(s.x,s.y),.58,.45,1.08),this.composer.addPass(this.bloom),this.grade=new Nm(fb),this.composer.addPass(this.grade),this.output=new hb,this.composer.addPass(this.output)}setCamera(e){this.renderPass.camera=e}setQuality(e){this.bloom.strength=e<.8?.48:.58}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloom.setSize(e,t),this.grade.uniforms.uAspect.value=e/t}get u(){return this.grade.uniforms}update(e,t){this.grade.uniforms.uTime.value=t}render(e){this.composer.render(e)}}const pb=12.5,tt=5e4,fs=new b(.46,.55,-.7).normalize(),Ba=62,Zu=-3e3,Fd=26200,Ft=24e3,mb=11,gb=0,Nd=430,Um=640;function gn(i,e=new b){const t=i/tt;return e.set(Math.sin(t),Math.cos(t),0)}function Qs(i,e=new b){const t=i/tt;return e.set(Math.cos(t),-Math.sin(t),0)}function Jn(i,e,t,n=new b){const s=i/tt,a=tt+t;return n.set(Math.sin(s)*a,Math.cos(s)*a,e),n}const Ud=new st,Od=new b,zd=new b,vb=new b(0,0,1);function Kc(i,e=new Ct){return Qs(i,Od).negate(),gn(i,zd),Ud.makeBasis(vb,zd,Od),e.setFromRotationMatrix(Ud)}function ns(i,e={s:0,lateral:0,up:0}){const t=Math.atan2(i.x,i.y);return e.s=t*tt,e.lateral=i.z,e.up=Math.hypot(i.x,i.y)-tt,e}function za(i=new b){return Jn(Ft,gb,-104,i)}const xb=1,_b=7e5,yb=55,R0=new Ve(1,.13,.06),Zc=new Ve(.3,1,.35),Om=new Ve(.35,1,.45),bb=new Ve(.42,.82,1);new Ve(1,.34,.16);const zm=new Ve(.55,.85,1),df=1250,ls=-3400,cs=26600,Bm=950,mn=8200;function Mb(i){if(Math.abs(i.z)>df)return!1;const e=Math.atan2(i.x,i.y)*tt;return e>ls&&e<cs}function Sb(i){return Math.abs(i.y)<Bm}const Bd=new b;function wb(i){Bd.copy(i).normalize();const e=Bd.dot(fs);return e<=0?!1:Math.acos(Math.min(1,e))*tt<mn}class Tb{constructor(e){this.time=0,this.dt=0,this.frame=0,this.paused=!1,this.timeScale=1,this._raf=0,this._last=0,this._acc=[],this.fps=60,this.quality=1,this.onUpdate=null,this._qTimer=0,this.autoQualityEnabled=!0;const t=document.createElement("canvas");e.appendChild(t),this.renderer=new ib({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.outputColorSpace=Di,this.renderer.toneMapping=tu,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!1,this.renderer.debug.checkShaderErrors=!0,this.renderer.info.autoReset=!1,this.scene=new ev,this.scene.background=null,this.camera=new Fi(yb,innerWidth/innerHeight,xb,_b),this.camera.position.set(0,0,0),this.post=new db(this.renderer,this.scene,this.camera),addEventListener("resize",()=>this.resize()),this.resize()}resize(){const e=innerWidth,t=innerHeight,n=Math.min(devicePixelRatio||1,2)*this.quality;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.post.setSize(e,t,n)}start(){this._last=performance.now();const e=t=>{this._raf=requestAnimationFrame(e);let n=(t-this._last)/1e3;this._last=t,n>.1&&(n=.1),this._acc.push(n),this._acc.length>45&&this._acc.shift(),this.fps=1/(this._acc.reduce((a,o)=>a+o,0)/this._acc.length);const s=this.paused?0:n*this.timeScale;this.dt=s,this.time+=s,this.frame++,this.renderer.info.reset(),this.autoQuality(n),this.onUpdate?.(s,this.time),this.post.update(s,this.time),this.post.render(Math.max(s,1e-4))};this._raf=requestAnimationFrame(e)}stop(){cancelAnimationFrame(this._raf)}autoQuality(e){if(!this.autoQualityEnabled||this.frame<90||(this._qTimer+=e,this._qTimer<1.5))return;this._qTimer=0;const t=this.fps;let n=this.quality;t<42&&n>.6?n=Math.max(.6,n-.12):t>58&&n<1&&(n=Math.min(1,n+.08)),Math.abs(n-this.quality)>.001&&(this.quality=n,this.post.setQuality(n),this.resize())}}class Eb{constructor(e=window){this.down=new Set,this.pressed=new Set,this.pointer={x:0,y:0,down:!1},this.anyFlightInput=!1,addEventListener("keydown",t=>{const n=t.code;this.down.has(n)||this.pressed.add(n),this.down.add(n),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),Ab.has(n)&&(this.anyFlightInput=!0)}),addEventListener("keyup",t=>{this.down.delete(t.code)}),addEventListener("blur",()=>{this.down.clear()}),addEventListener("pointermove",t=>{this.pointer.x=t.clientX/innerWidth*2-1,this.pointer.y=-(t.clientY/innerHeight*2-1)}),addEventListener("pointerdown",()=>{this.pointer.down=!0}),addEventListener("pointerup",()=>{this.pointer.down=!1})}isDown(...e){return e.some(t=>this.down.has(t))}wasPressed(...e){return e.some(t=>this.pressed.has(t))}endFrame(){this.pressed.clear()}axis(e,t){return(this.isDown(...t)?1:0)-(this.isDown(...e)?1:0)}}const Ab=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyF","ShiftLeft","ShiftRight"]);class Cb{constructor(){this.ctx=null,this.engineOsc=[],this.noiseBuf=null,this.droneNodes=[],this.enabled=!0,this.started=!1,this.droneGain=null}init(){if(!this.started)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;const t=this.ctx;this.master=t.createGain(),this.master.gain.value=.55,this.master.connect(t.destination),this.musicGain=t.createGain(),this.musicGain.gain.value=.32,this.musicGain.connect(this.master),this.sfxGain=t.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.master);const n=t.sampleRate*2,s=t.createBuffer(1,n,t.sampleRate),a=s.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1;this.noiseBuf=s,this.buildEngine(),this.started=!0}catch{}}resume(){this.ctx?.resume?.()}setMasterVolume(e){this.master&&(this.master.gain.value=e)}noise(e,t,n){const s=this.ctx,a=s.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=a;if(n){const l=s.createBiquadFilter();l.type=n.type,l.frequency.value=n.freq,l.Q.value=n.q??1,a.connect(l),o=l}const r=s.createGain();return r.gain.value=t,o.connect(r),r.connect(this.sfxGain),a.start(),a.stop(s.currentTime+e),{g:r,f:n?o:null}}buildEngine(){const e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(this.sfxGain);for(const[a,o,r]of[[46,.22,"sawtooth"],[69,.13,"sawtooth"],[92,.08,"square"],[138,.05,"sawtooth"]]){const l=e.createOscillator();l.type=r,l.frequency.value=a;const c=e.createGain();c.gain.value=o;const u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=900,u.Q.value=.7,l.connect(c),c.connect(u),u.connect(this.engineGain),l.start(),this.engineOsc.push(l)}const t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=320,n.Q.value=.8;const s=e.createGain();s.gain.value=.16,t.connect(n),n.connect(s),s.connect(this.engineGain),t.start()}setEngine(e,t=0){if(!this.ctx||!this.enabled)return;const n=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(.34*e,n,.12);const s=1+t*.34+e*.12;for(let a=0;a<this.engineOsc.length;a++){const o=[46,69,92,138][a];this.engineOsc[a].frequency.setTargetAtTime(o*s,n,.16)}}laser(e=1,t=.5){if(!this.ctx||!this.enabled)return;const n=this.ctx,s=n.currentTime,a=n.createOscillator();a.type="square",a.frequency.setValueAtTime(1750*e,s),a.frequency.exponentialRampToValueAtTime(180*e,s+.16);const o=n.createGain();o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.3*t,s+.006),o.gain.exponentialRampToValueAtTime(1e-4,s+.2);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=1200*e,r.Q.value=2.2,a.connect(r),r.connect(o),o.connect(this.sfxGain),a.start(s),a.stop(s+.22)}explosion(e=1,t=.8){if(!this.ctx||!this.enabled)return;const n=this.ctx,s=n.currentTime,a=.5+e*1.6,{g:o,f:r}=this.noise(a+.2,1e-4,{type:"lowpass",freq:1800/Math.max(e,.4),q:.9});o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.75*t,s+.02),o.gain.exponentialRampToValueAtTime(1e-4,s+a),r&&(r.frequency.setValueAtTime(2400/Math.max(e,.4),s),r.frequency.exponentialRampToValueAtTime(70,s+a));const l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(88/Math.max(e*.6,.5),s),l.frequency.exponentialRampToValueAtTime(24,s+a*.7);const c=n.createGain();c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.6*t*Math.min(e,2.4),s+.03),c.gain.exponentialRampToValueAtTime(1e-4,s+a),l.connect(c),c.connect(this.sfxGain),l.start(s),l.stop(s+a+.05)}torpedo(){if(!this.ctx||!this.enabled)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(1400,t+.34);const s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.34,t+.05),s.gain.exponentialRampToValueAtTime(1e-4,t+.8);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,n.connect(a),a.connect(s),s.connect(this.sfxGain),n.start(t),n.stop(t+.85),this.noise(.7,.12,{type:"highpass",freq:900}).g.gain.setTargetAtTime(1e-4,t+.1,.2)}beep(e=900,t=.08,n=.2){if(!this.ctx||!this.enabled)return;const s=this.ctx,a=s.currentTime,o=s.createOscillator();o.type="sine",o.frequency.value=e;const r=s.createGain();r.gain.setValueAtTime(1e-4,a),r.gain.exponentialRampToValueAtTime(n,a+.008),r.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(r),r.connect(this.sfxGain),o.start(a),o.stop(a+t+.02)}alarm(e){!this.ctx||!this.enabled||e&&this.beep(660,.12,.16)}setDrone(e,t=55){if(!this.ctx||!this.enabled)return;const n=this.ctx;if(!this.droneGain){this.droneGain=n.createGain(),this.droneGain.gain.value=0,this.droneGain.connect(this.musicGain);for(const[s,a,o]of[[1,.3,0],[1.5,.18,4],[2,.14,-5],[3,.06,7],[4.02,.04,0]]){const r=n.createOscillator();r.type="sawtooth",r.frequency.value=t*s,r.detune.value=o;const l=n.createGain();l.gain.value=a;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=420,c.Q.value=1.1;const u=n.createOscillator();u.frequency.value=.07+Math.random()*.09;const f=n.createGain();f.gain.value=90,u.connect(f),f.connect(c.frequency),u.start(),r.connect(l),l.connect(c),c.connect(this.droneGain),r.start(),this.droneNodes.push(r,u)}}this.droneGain.gain.setTargetAtTime(e*.55,n.currentTime,1.4)}rumble(e=6,t=.9){if(!this.ctx||!this.enabled)return;const n=this.ctx,s=n.currentTime,{g:a,f:o}=this.noise(e+.3,1e-4,{type:"lowpass",freq:140,q:1.2});a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.9*t,s+.6),a.gain.setTargetAtTime(1e-4,s+e*.45,e*.35),o&&o.frequency.setTargetAtTime(45,s,e*.4);const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(38,s),r.frequency.exponentialRampToValueAtTime(17,s+e);const l=n.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.85*t,s+.35),l.gain.setTargetAtTime(1e-4,s+e*.5,e*.3),r.connect(l),l.connect(this.sfxGain),r.start(s),r.stop(s+e+.4)}dispose(){try{this.ctx?.close()}catch{}}}const Un=new Cb,we=(i,e,t)=>i<e?e:i>t?t:i,dn=i=>we(i,0,1),On=(i,e,t)=>i+(e-i)*t,Pb=(i,e,t)=>e===i?0:(t-i)/(e-i),Dt=(i,e,t)=>{const n=dn(Pb(i,e,t));return n*n*(3-2*n)},bn=(i,e,t,n)=>On(i,e,1-Math.exp(-t*n)),km=(i,e,t,n)=>{const s=1-Math.exp(-3.4*n);return i.x+=(e.x-i.x)*s,i.y+=(e.y-i.y)*s,i.z+=(e.z-i.z)*s,i},I0=(i,e,t,n)=>(i.slerp(e,1-Math.exp(-t*n)),i),Jc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Rr=i=>1-Math.pow(1-i,3),L0=i=>-(Math.cos(Math.PI*i)-1)/2,Xn=Math.PI*2,sl=Math.PI/180,Mn=`
float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
float hash13(vec3 p3){ p3 = fract(p3*0.1031); p3 += dot(p3, p3.zyx+31.32); return fract((p3.x+p3.y)*p3.z); }
vec2  hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); p3 += dot(p3, p3.yzx+33.33); return fract((p3.xx+p3.yz)*p3.zy); }
vec3  hash33(vec3 p3){ p3 = fract(p3*vec3(0.1031,0.1030,0.0973)); p3 += dot(p3, p3.yxz+33.33); return fract((p3.xxy+p3.yxx)*p3.zyx); }
`,zn=`
float vnoise2(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i+vec2(0,0)), hash12(i+vec2(1,0)), u.x),
             mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i+vec3(0,0,0)), hash13(i+vec3(1,0,0)), u.x),
                 mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x),
                 mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y), u.z);
}
float snoise3(vec3 p){ return vnoise3(p)*2.0-1.0; }

float fbm3(vec3 p, int oct, float lac, float gain){
  float a = 0.5, s = 0.0, n = 0.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    s += a*vnoise3(p); n += a; p *= lac; a *= gain;
  }
  return s/max(n,1e-4);
}
float fbm2(vec2 p, int oct, float lac, float gain){
  float a = 0.5, s = 0.0, n = 0.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    s += a*vnoise2(p); n += a; p *= lac; a *= gain;
  }
  return s/max(n,1e-4);
}
/** ridged multifractal — good for fire filaments & nebula strands */
float ridged3(vec3 p, int oct, float lac, float gain){
  float a = 0.5, s = 0.0, n = 0.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    float v = 1.0 - abs(snoise3(p));
    v *= v;
    s += a*v; n += a; p *= lac; a *= gain;
  }
  return s/max(n,1e-4);
}
/** curl-ish domain warp */
vec3 warp3(vec3 p, float amt, float freq){
  return p + amt*vec3(
    vnoise3(p*freq + vec3(11.3, 4.1, 7.7)),
    vnoise3(p*freq + vec3(3.9, 19.2, 1.4)),
    vnoise3(p*freq + vec3(23.1, 8.8, 15.5))) * 2.0 - amt;
}
float worley3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  float d = 1.0;
  for(int x=-1;x<=1;x++) for(int y=-1;y<=1;y++) for(int z=-1;z<=1;z++){
    vec3 g = vec3(float(x),float(y),float(z));
    vec3 o = hash33(i+g);
    d = min(d, length(g+o-f));
  }
  return d;
}
`,qi=`
// t: 0 = cold smoke, 1 = white-hot core
vec3 blackbody(float t){
  t = clamp(t, 0.0, 1.0);
  vec3 c;
  c  = vec3(0.06,0.02,0.015) * smoothstep(0.0,0.22,t);
  c += vec3(0.85,0.16,0.02)  * smoothstep(0.10,0.45,t);
  c += vec3(1.10,0.55,0.06)  * smoothstep(0.34,0.70,t);
  c += vec3(1.20,1.02,0.42)  * smoothstep(0.58,0.90,t);
  c += vec3(1.30,1.30,1.30)  * smoothstep(0.84,1.00,t);
  return c;
}
vec3 plasmaRamp(float t, vec3 core, vec3 mid, vec3 outer){
  t = clamp(t,0.0,1.0);
  return mix(outer, mix(mid, core, smoothstep(0.45,1.0,t)), smoothstep(0.0,0.6,t));
}
float luma(vec3 c){ return dot(c, vec3(0.2126,0.7152,0.0722)); }
`,vr=`
mat2 rot2(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
mat3 rotAxis(vec3 ax, float a){
  float s=sin(a), c=cos(a), t=1.0-c;
  return mat3(t*ax.x*ax.x+c, t*ax.x*ax.y-s*ax.z, t*ax.x*ax.z+s*ax.y,
              t*ax.x*ax.y+s*ax.z, t*ax.y*ax.y+c, t*ax.y*ax.z-s*ax.x,
              t*ax.x*ax.z-s*ax.y, t*ax.y*ax.z+s*ax.x, t*ax.z*ax.z+c);
}
`,Rb=`
/* stellar class ramp: 0 = O/B blue-white, 1 = M red */
vec3 stellarColor(float t){
  vec3 c = vec3(0.62,0.75,1.00);
  c = mix(c, vec3(0.85,0.91,1.00), smoothstep(0.00,0.20,t));
  c = mix(c, vec3(1.00,0.99,0.96), smoothstep(0.18,0.40,t));
  c = mix(c, vec3(1.00,0.94,0.79), smoothstep(0.38,0.60,t));
  c = mix(c, vec3(1.00,0.80,0.58), smoothstep(0.58,0.80,t));
  c = mix(c, vec3(1.00,0.64,0.45), smoothstep(0.78,1.00,t));
  return c;
}

/* One grid cell -> the light it contributes to direction d.
   pixAng = radians subtended by one screen pixel (from screen derivatives),
   so every star is sized in *pixels* and stays crisp at any resolution. */
vec3 starCell(vec3 cell, vec3 d, float pixAng, float dens, float fluxScale,
              float sd, vec3 camX, vec3 camY, float twAmt, float spikeAmt){
  if(hash13(cell*0.913 + sd) > dens) return vec3(0.0);

  vec3 j  = hash33(cell + sd*1.7 + 3.1);
  vec3 r2 = hash33(cell*1.31 - sd*0.71 + 11.9);

  vec3 q  = cell + 0.25 + j*0.5;                 // jittered position inside the cell
  vec3 sdir = q * inversesqrt(dot(q,q));         // its direction on the sky
  vec3 dl = sdir - d;
  float rp = length(dl) / pixAng;                // angular distance, in pixels
  if(rp > 62.0) return vec3(0.0);

  /* power-law flux: N(>F) ~ F^-1.5  ->  F = u^(-1/1.5), a few very bright,
     thousands faint. */
  float u = max(r2.x, 0.0009);
  float flux = fluxScale * min(pow(u, -0.62), 120.0);

  /* brighter stars skew hotter/bluer (true of the naked-eye sky) */
  float ct = clamp(r2.y*1.16 - 0.34*smoothstep(2.0, 18.0, flux), 0.0, 1.0);
  vec3 col = stellarColor(ct);

  float tw = 1.0 + twAmt * sin(uTime*(0.65 + r2.z*2.2) + r2.z*61.0 + r2.y*23.0);

  float core = exp(-rp*rp*0.80);                 // tight ~0.8 px sigma gaussian
  float halo = 0.030 * exp(-rp*rp*0.050);        // faint airy skirt
  float I = core + halo;

  /* 4-point diffraction cross, screen aligned, only on the brightest few */
  float bg = smoothstep(7.0, 26.0, flux) * spikeAmt;
  if(bg > 0.002){
    float sx = dot(dl, camX)/pixAng;
    float sy = dot(dl, camY)/pixAng;
    float sp = exp(-abs(sx)*0.34 - sy*sy*2.4) + exp(-abs(sy)*0.34 - sx*sx*2.4);
    I += sp * 0.055 * bg;
  }
  return col * (flux * tw * I);
}

/* 2x2x2 neighbourhood is enough: any star within 0.25 cells of the sample
   point is guaranteed to be found, which is far beyond its visible radius. */
vec3 starLayer(vec3 d, float scale, float dens, float fluxScale, float pixAng,
               float sd, vec3 camX, vec3 camY, float twAmt, float spikeAmt){
  vec3 base = floor(d*scale - 0.5);
  vec3 acc = vec3(0.0);
  for(int i=0;i<2;i++)
  for(int k=0;k<2;k++)
  for(int m=0;m<2;m++){
    acc += starCell(base + vec3(float(i),float(k),float(m)), d, pixAng,
                    dens, fluxScale, sd, camX, camY, twAmt, spikeAmt);
  }
  return acc;
}
`,Ib=`
/* galactic band normal, and the slightly tilted dust-lane normal so the lane
   crosses the band rather than sitting exactly inside it */
const vec3 GAL_AXIS  = vec3(0.4104, 0.8208, -0.3972);
const vec3 DUST_AXIS = vec3(0.3106, 0.8926, -0.3252);

vec3 nebula(vec3 d, float seed, out float dustExt){
  float wob  = fbm3(d*1.35 + seed + 21.0, 3, 2.1, 0.55) - 0.5;
  float bb   = dot(d, GAL_AXIS) + wob*0.20;
  float band = exp(-bb*bb*13.0);

  vec3 p = d*2.1 + seed*0.37;
  vec3 w = warp3(p, 0.70, 1.25);

  float f1 = fbm3(w, 5, 2.03, 0.55);                 // broad cloud envelope
  float f2 = ridged3(w*2.4 + 5.5, 4, 2.15, 0.52);    // filaments
  float f3 = ridged3(w*6.1 + 17.0, 3, 2.30, 0.50);   // fine strands

  float env  = smoothstep(0.30, 0.76, f1);
  float mass = env * band;
  float fil  = smoothstep(0.48, 0.93, f2) * mass;
  float fine = smoothstep(0.58, 0.96, f3) * mass;

  const vec3 colA = vec3(0.07, 0.17, 0.34);   // cool blue
  const vec3 colB = vec3(0.05, 0.25, 0.27);   // teal
  const vec3 colC = vec3(0.30, 0.08, 0.26);   // magenta accent
  const vec3 colD = vec3(0.34, 0.25, 0.08);   // dull gold accent

  /* filaments carry most of the visible structure so it never reads as
     round cotton-wool blobs */
  /* Regional accents: magenta and gold are pushed into *different* patches of
     sky, otherwise they overlap everywhere and average out to mud. */
  float reg = fbm3(d*0.85 + seed + 5.0, 2, 2.0, 0.5);
  float wMag = smoothstep(0.50, 0.72, reg);
  float wGld = smoothstep(0.48, 0.26, reg);

  vec3 n = colA * mass * 0.42
         + colB * fil  * 0.85
         + colC * pow(fil, 1.3) * 0.72 * wMag
         + colD * fine * 0.75 * wGld;

  /* broad unresolved-star haze — this is what makes the band read as a galaxy */
  n += vec3(0.046,0.053,0.072) * band * (0.24 + 0.76*f1);

  /* dust lane: warm, dark, narrow, broken up by its own noise */
  float lw  = dot(d, DUST_AXIS) + (fbm3(d*2.4 + seed + 61.0, 3, 2.1, 0.55)-0.5)*0.26;
  float dn  = smoothstep(0.36, 0.76, fbm3(warp3(d*3.1 + 7.0, 0.55, 1.9), 4, 2.05, 0.55));
  float dust = clamp(exp(-lw*lw*48.0) * dn * 1.15, 0.0, 1.0);

  dustExt = exp(-dust * 2.2 * uDust);
  n *= mix(1.0, 0.30, dust * uDust);
  n += vec3(0.028,0.016,0.008) * dust * uDust;   // faint warm re-emission
  return n * 0.60;
}
`,Lb=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Db=`
precision highp float;
uniform float uTime, uSeed, uNebula, uStarBright, uDust;
varying vec3 vDir;

${Mn}
${zn}
${qi}
${Rb}
${Ib}

void main(){
  vec3 d = normalize(vDir);

  /* radians per pixel, straight from the screen derivative — keeps stars the
     same crisp size at any resolution / FOV */
  float pixAng = max(length(dFdx(d)), 1e-7);

  /* world-space camera axes (rows of the view matrix) for screen-aligned spikes */
  vec3 camX = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 camY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);

  float ext;
  vec3 neb = nebula(d, uSeed, ext) * uNebula;
  /* hue-preserving ceiling: the sky must never bloom into a grey haze */
  neb *= 0.28 / max(max(max(neb.r, neb.g), neb.b), 0.28);

  vec3 stars = vec3(0.0);
  stars += starLayer(d, 27.0, 0.30, 0.070, pixAng, uSeed +  0.0, camX, camY, 0.10, 0.0);
  stars += starLayer(d, 15.0, 0.32, 0.185, pixAng, uSeed + 17.0, camX, camY, 0.16, 0.6);
  stars += starLayer(d,  8.5, 0.24, 0.420, pixAng, uSeed + 41.0, camX, camY, 0.20, 1.0);
  stars += starLayer(d,  4.6, 0.17, 1.050, pixAng, uSeed + 73.0, camX, camY, 0.24, 1.0);
  stars *= uStarBright * ext;

  vec3 col = vec3(0.0015,0.0021,0.0040) + neb + stars;
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
`;function Fb(i={}){const e=i.seed??1337;return new xt({name:"starfield",uniforms:{uTime:{value:0},uSeed:{value:e%997*.131},uNebula:{value:1},uStarBright:{value:1},uDust:{value:1}},vertexShader:Lb,fragmentShader:Db,side:Yn,depthWrite:!1,depthTest:!1,transparent:!1,fog:!1,toneMapped:!1})}const Nb=`
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vW;
void main(){
  vLocal = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Ub=`
precision highp float;
uniform float uTime, uSeed, uExposure;
uniform vec3 uSunDir, uSunColor;
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vW;

${Mn}
${zn}
${vr}

void main(){
  float lat = asin(clamp(vLocal.y, -1.0, 1.0));
  float lon = atan(vLocal.z, vLocal.x);
  vec2 ring = vec2(cos(lon), sin(lon));          // seamless longitude

  /* zonal jets: each latitude band is sheared a different amount in longitude,
     which is what makes a gas giant read as *turbulent* rather than striped */
  float shear = sin(lat*5.0)*0.95 + sin(lat*11.0 + 1.3)*0.42;
  vec3 q = vec3(rot2(shear*0.42) * (ring*1.25), lat*3.0);
  vec3 wq = warp3(q + uSeed, 0.55, 1.15);

  float turb = fbm3(wq*1.6, 5, 2.05, 0.55);
  float fine = fbm3(vec3(ring*3.0, lat*26.0) + uSeed, 4, 2.2, 0.50);
  float curl = ridged3(wq*4.4 + 9.0, 3, 2.2, 0.5);

  /* narrow zonal bands, plus a slow belt/zone envelope so the disc has a
     large-scale read as well as fine striping */
  float bands = 0.5 + 0.5*sin(lat*15.0 + (turb-0.5)*3.0 + (fine-0.5)*0.9);
  bands = mix(bands, smoothstep(0.24, 0.76, bands), 0.55);
  float belt = 0.5 + 0.5*sin(lat*5.0 + 0.6);

  float tone = clamp(bands*0.50 + belt*0.26 + (turb-0.5)*0.44
                     + (curl-0.5)*0.16 + 0.15, 0.0, 1.0);

  vec3 alb = mix(vec3(0.185,0.092,0.046), vec3(0.60,0.33,0.125), smoothstep(0.00,0.40,tone));
  alb = mix(alb, vec3(0.82,0.59,0.30), smoothstep(0.36,0.66,tone));
  alb = mix(alb, vec3(0.93,0.85,0.66), smoothstep(0.68,0.95,tone));
  /* thin pale ammonia wisps riding the shear */
  alb = mix(alb, vec3(0.96,0.92,0.80), smoothstep(0.82,0.99,fine)*0.30);

  /* ---- great red spot: domain-warped vortex around one point ---- */
  float dlon = lon - 1.15;
  dlon = atan(sin(dlon), cos(dlon));
  vec2 sp = vec2(dlon*cos(lat), (lat + 0.34)*2.15);
  float sr = length(sp)/0.40;
  float swirl = 1.0 - clamp(sr, 0.0, 1.0);
  sp = rot2(swirl*swirl*4.4 + uTime*0.015) * sp;
  float sn = fbm3(vec3(sp*4.5, 3.7) + uSeed, 4, 2.1, 0.55);
  vec3 spotCol = mix(vec3(0.60,0.20,0.10), vec3(0.90,0.55,0.30), smoothstep(0.32,0.76,sn));
  alb = mix(alb, spotCol, smoothstep(1.02,0.42,sr) * (0.55 + 0.45*sn));
  /* cream collar dragged around the vortex */
  alb = mix(alb, vec3(0.93,0.85,0.66),
            smoothstep(0.88,1.02,sr) * smoothstep(1.22,1.02,sr) * (0.30 + 0.35*sn));

  /* ---- lighting ---- */
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  float ndl = dot(N, uSunDir);
  float vdn = clamp(dot(N, V), 0.0, 1.0);

  /* a real lambert terminator: narrow softening, then a proper cosine falloff */
  float lam = smoothstep(-0.07, 0.20, ndl) * pow(clamp(ndl, 0.0, 1.0), 0.65);

  float limb = pow(vdn, 0.55);                     // limb darkening
  vec3 lit = alb * lam * limb * uSunColor * uExposure;
  lit = mix(lit, lit*vec3(1.22,0.85,0.55), (1.0-vdn)*0.75);   // warm toward the limb

  /* bright forward-scattered rim on the lit limb — also softens the silhouette */
  float rim = pow(1.0 - vdn, 2.6) * smoothstep(-0.02, 0.38, ndl);
  lit += uSunColor * vec3(1.00,0.80,0.55) * rim * 0.45 * uExposure;

  /* thin hazy atmosphere hugging the lit limb */
  float atmo = pow(1.0 - vdn, 4.5) * smoothstep(-0.26, 0.50, ndl);
  lit += vec3(0.95,0.83,0.64) * atmo * 0.34 * uExposure;

  /* warm twilight scattering right along the terminator */
  float twi = exp(-pow(ndl * 7.0, 2.0)) * (1.0 - vdn * 0.45);
  lit += vec3(0.55, 0.28, 0.13) * twi * 0.055 * uExposure;

  lit += alb * 0.008;                              // night side isn't pure black

  gl_FragColor = vec4(max(lit, 0.0), 1.0);
}
`;function Ob(i={}){const e=i.seed??1337;return new xt({name:"yavin",uniforms:{uTime:{value:0},uSeed:{value:e%613*.077},uExposure:{value:.62},uSunDir:{value:new b(-.55,.42,.72).normalize()},uSunColor:{value:new Ve(1,.95,.86)}},vertexShader:Nb,fragmentShader:Ub,side:pi,depthWrite:!1,depthTest:!1,transparent:!1,fog:!1,toneMapped:!1})}class Qt{constructor(e=1337){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1-1e-9))}bool(e=.5){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)%e.length]}gauss(e=0,t=1){return e+t*((this.next()+this.next()+this.next()+this.next()-2)*.8660254)}fork(e=1){return new Qt(Math.floor(this.next()*4294967295)^e*2654435769)}}function ml(i){let e=Math.imul(i^625341585,739982445);return e=Math.imul(e^e>>>15,695872825),((e^e>>>13)>>>0)/4294967296}function pn(i,e,t){return ml(i*374761393+e*668265263+t*2147483647)}const Ir=new b(.34,.3,.89).normalize(),Ho=new b(.2,.94,-.185).normalize(),zb=42e4,Bb=3e5,kd=4e5,Vd=78e3,sc=48e4,kb=6e4,ac=1400,Ju=260,Vb=`
varying vec2 vP;
void main(){
  vP = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gb=`
precision highp float;
uniform float uTime, uFade, uCore, uDiscR;
varying vec2 vP;

void main(){
  float r = length(vP);
  float ang = atan(vP.y, vP.x);

  vec3 warm  = vec3(1.00, 0.95, 0.87);
  vec3 amber = vec3(1.00, 0.70, 0.36);

  /* photosphere: crisp disc, HDR core. Kept small and not too hot — bloom
     turns anything larger into a featureless white ball. */
  float aa = fwidth(r) * 1.3 + 0.0004;
  float disc = smoothstep(uDiscR + aa, uDiscR - aa, r);
  vec3 c = warm * disc * uCore;

  /* chromosphere: a thin hot skirt right off the limb */
  c += warm * 3.0 * exp(-r * 130.0);

  /* corona with a little ray structure so it isn't a plain radial blob.
     Amber, so the bloom skirt keeps some colour instead of going pure white. */
  float rays = 0.70 + 0.20 * sin(ang * 19.0 + 1.7 + uTime * 0.05)
                    + 0.10 * sin(ang * 7.0 - 0.6 - uTime * 0.03);
  c += mix(warm, amber, 0.80) * 0.55 * exp(-r * 11.0) * rays;

  /* wide halo — the part that reads as atmospheric veiling flare */
  c += amber * 0.055 * exp(-r * 6.0) * uFade;

  /* screen-aligned streaks: a long 4-point cross plus faint 45 deg spurs */
  float spike = exp(-abs(vP.x) * 4.2 - vP.y * vP.y * 9000.0)
              + exp(-abs(vP.y) * 4.2 - vP.x * vP.x * 9000.0);
  vec2 dg = vec2(vP.x + vP.y, vP.x - vP.y) * 0.70710678;
  spike += 0.30 * (exp(-abs(dg.x) * 7.5 - dg.y * dg.y * 14000.0)
                 + exp(-abs(dg.y) * 7.5 - dg.x * dg.x * 14000.0));
  c += mix(warm, amber, 0.25) * spike * 0.80 * uFade;

  /* a few concentric ghost rings — kept very faint and angularly broken so
     they read as lens artefacts rather than a bullseye */
  float garc = 0.45 + 0.55 * (0.5 + 0.5 * sin(ang * 2.0 + 0.8));
  float g = 0.0;
  g += exp(-pow((r - 0.30) * 34.0, 2.0)) * 0.60;
  g += exp(-pow((r - 0.46) * 26.0, 2.0)) * 0.38 * garc;
  g += exp(-pow((r - 0.66) * 19.0, 2.0)) * 0.26 * garc;
  c += mix(amber, vec3(0.50, 0.78, 1.00), 0.42) * g * 0.045 * uFade;

  c *= smoothstep(1.0, 0.88, r);      // never show the quad edge
  gl_FragColor = vec4(max(c, 0.0), 1.0);
}
`,Hb=`
attribute vec2 aCorner;
attribute float aSize;
attribute float aIdx;
varying vec2 vP;
varying vec3 vC;
varying float vI;
void main(){
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 wpos = (modelMatrix * vec4(position, 1.0)).xyz;
  vP = aCorner;
  vI = aIdx;
  vC = normalize(wpos - cameraPosition);
  vec3 wp = wpos + (camR * aCorner.x + camU * aCorner.y) * aSize;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,Wb=`
precision highp float;
uniform vec3 uSunDir;
uniform float uBright;
varying vec2 vP;
varying vec3 vC;
varying float vI;

${Mn}
${zn}

void main(){
  float r = length(vP);
  if(r > 1.0) discard;

  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 n = normalize(camR * vP.x + camU * vP.y - vC * sqrt(max(1.0 - r * r, 0.0)));

  float d = dot(n, uSunDir);
  float lam = smoothstep(-0.04, 0.24, d) * (0.22 + 0.78 * clamp(d, 0.0, 1.0));
  float mot = 0.70 + 0.55 * vnoise3(n * 6.5 + vI * 17.0);
  float edge = smoothstep(1.0, 1.0 - max(fwidth(r) * 2.0, 0.015), r);

  vec3 base = mix(vec3(0.74, 0.71, 0.66), vec3(0.60, 0.66, 0.74), vI);
  gl_FragColor = vec4(max(base * lam * mot * edge * uBright, 0.0), 1.0);
}
`,qb=`
uniform vec3 uCamPos;
uniform float uBox, uSize, uPix;
attribute float aSeed;
varying float vA;
void main(){
  /* wrap the whole cloud into a box centred on the camera -> infinite field */
  vec3 rel = mod(position - uCamPos + uBox * 0.5, uBox) - uBox * 0.5;
  vec4 mv = modelViewMatrix * vec4(rel, 1.0);
  float dist = max(-mv.z, 0.001);
  vA = smoothstep(6.0, 60.0, dist) * (1.0 - smoothstep(uBox * 0.36, uBox * 0.5, length(rel)));
  vA *= 0.55 + 0.45 * aSeed;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uPix * clamp(220.0 / dist, 0.35, 2.2);
}
`,Xb=`
precision highp float;
uniform float uBright;
varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float a = exp(-dot(c, c) * 14.0);
  gl_FragColor = vec4(vec3(0.52, 0.60, 0.78) * a * vA * uBright, 1.0);
}
`,xa=new b,Gd=new Ct,Hd=new st,_a=new b,Wd=new b;function Yb(){const t=new b(Math.cos(-.34)*Math.cos(1.15),Math.sin(-.34),Math.cos(-.34)*Math.sin(1.15)).normalize(),n=new b(0,1,0),s=t.dot(n),a=t.clone().addScaledVector(n,-s).normalize(),o=new st().makeBasis(a,n,new b().crossVectors(a,n)),r=new b(.16,.95,.27).normalize(),l=Ho.clone().negate().applyAxisAngle(r,.38),c=l.addScaledVector(r,-l.dot(r)).normalize(),u=new st().makeBasis(c,r,new b().crossVectors(c,r));return new Ct().setFromRotationMatrix(u.multiply(o.transpose()))}function $b(i={}){const e=i.seed??1337,t=new Qt(e),n=new Gn;n.name="spaceEnv";const s=new ps(zb,96,64),a=Fb({seed:e}),o=new ft(s,a);o.renderOrder=-1e3,o.frustumCulled=!1,o.matrixAutoUpdate=!1,o.updateMatrix(),n.add(o);const r=new Gn;r.name="yavin",r.position.copy(Ho).multiplyScalar(sc),n.add(r);const l=new ps(kb,72,48),c=Ob({seed:e+7});c.uniforms.uSunDir.value.copy(Ir);const u=new ft(l,c);u.quaternion.copy(Yb()),u.renderOrder=-900,u.frustumCulled=!1,u.matrixAutoUpdate=!1,u.updateMatrix(),r.add(u),_a.set(0,1,0).cross(Ho).normalize(),Wd.copy(Ho).cross(_a).normalize();const f=Ho.clone().multiplyScalar(sc),h=[{off:.205,az:.9,ang:.0096},{off:.285,az:3.9,ang:.0058}],d=new Float32Array(8*3),g=new Float32Array(8*2),v=new Float32Array(8),m=new Float32Array(8),p=[],y=[-1,-1,1,-1,1,1,-1,1];for(let le=0;le<h.length;le++){const Ce=h[le];xa.copy(Ho).addScaledVector(_a,Math.cos(Ce.az)*Ce.off).addScaledVector(Wd,Math.sin(Ce.az)*Ce.off).normalize().multiplyScalar(sc).sub(f);for(let Ie=0;Ie<4;Ie++){const $=le*4+Ie;d[$*3+0]=xa.x,d[$*3+1]=xa.y,d[$*3+2]=xa.z,g[$*2+0]=y[Ie*2+0],g[$*2+1]=y[Ie*2+1],v[$]=sc*Math.tan(Ce.ang),m[$]=le}const Ue=le*4;p.push(Ue,Ue+1,Ue+2,Ue,Ue+2,Ue+3)}const M=new Tt;M.setAttribute("position",new We(d,3)),M.setAttribute("aCorner",new We(g,2)),M.setAttribute("aSize",new We(v,1)),M.setAttribute("aIdx",new We(m,1)),M.setIndex(p);const x=new xt({name:"yavinMoons",uniforms:{uSunDir:{value:Ir.clone()},uBright:{value:.55}},vertexShader:Hb,fragmentShader:Wb,depthWrite:!1,depthTest:!1,transparent:!1,blending:Jt,fog:!1,toneMapped:!1}),w=new ft(M,x);w.renderOrder=-890,w.frustumCulled=!1,w.matrixAutoUpdate=!1,w.updateMatrix(),r.add(w);const T=new Us(Vd*2,Vd*2),E=new xt({name:"sunDisc",uniforms:{uTime:{value:0},uFade:{value:1},uCore:{value:18},uDiscR:{value:.038}},vertexShader:Vb,fragmentShader:Gb,depthWrite:!1,depthTest:!1,transparent:!1,blending:Jt,fog:!1,toneMapped:!1}),_=new ft(T,E);_.position.copy(Ir).multiplyScalar(kd),_.renderOrder=-880,_.frustumCulled=!1,n.add(_);const A=new Float32Array(Ju*3),R=new Float32Array(Ju);for(let le=0;le<Ju;le++)A[le*3+0]=t.range(0,ac),A[le*3+1]=t.range(0,ac),A[le*3+2]=t.range(0,ac),R[le]=t.next();const I=new Tt;I.setAttribute("position",new We(A,3)),I.setAttribute("aSeed",new We(R,1));const F=new xt({name:"dustMotes",uniforms:{uCamPos:{value:new b},uBox:{value:ac},uSize:{value:1.7},uPix:{value:1},uBright:{value:.5}},vertexShader:qb,fragmentShader:Xb,depthWrite:!1,depthTest:!0,transparent:!1,blending:Jt,fog:!1,toneMapped:!1}),H=new af(I,F);H.renderOrder=5,H.frustumCulled=!1,H.matrixAutoUpdate=!1,H.updateMatrix(),n.add(H);const X=new jv(16773856,3.2);X.position.copy(Ir).multiplyScalar(Bb),X.castShadow=!1,X.name="keySun";const O=new Zv(2768213,1051142,.35);O.name="spaceFill",n.add(O);const V=a.uniforms.uTime,z=c.uniforms.uTime,re=E.uniforms.uTime,ue=E.uniforms.uFade,Y=F.uniforms.uCamPos.value;F.uniforms.uPix.value=typeof devicePixelRatio=="number"?Math.min(devicePixelRatio,2):1;function ee(le,Ce,Ue){Ue.getWorldPosition(xa),n.position.copy(xa),Y.copy(xa),Ue.getWorldQuaternion(Gd),_.quaternion.copy(Gd),V.value=Ce,z.value=Ce,re.value=Ce,Hd.copy(Ue.matrixWorld).invert(),_a.copy(Ir).multiplyScalar(kd).add(xa).applyMatrix4(Hd);let Ie=0;if(_a.z<0){_a.applyMatrix4(Ue.projectionMatrix);const $=Math.max(Math.abs(_a.x),Math.abs(_a.y));Ie=1-Dt(.45,1.05,$)}ue.value=Ie}return{group:n,sun:X,fill:O,planet:r,update:ee,setNebula(le){a.uniforms.uNebula.value=we(le,0,1)},setStarBrightness(le){a.uniforms.uStarBright.value=Math.max(0,le)},dispose(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),M.dispose(),x.dispose(),T.dispose(),E.dispose(),I.dispose(),F.dispose(),r.clear(),n.clear(),X.dispose(),O.dispose()}}}function Kb(i={}){const e=new Ml({color:new Ve(i.color??9278619),roughness:i.roughness??.72,metalness:i.metalness??.62,emissive:new Ve(0),emissiveIntensity:1}),t={uPanel:{value:i.panelScale??.35},uGrime:{value:i.grime??.55},uEmisCol:{value:new Ve(i.emissive??16757850)},uEmisStr:{value:i.emissiveStrength??3},uWindow:{value:i.windowDensity??.55},uTime:{value:0},uDamage:{value:0}};return e.userData.uniforms=t,e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`
        #include <common>
        attribute float aEmis;
        attribute float aMat;
        varying float vEmis;
        varying float vMat;
        varying vec3 vWorldPos;
        varying vec3 vObjPos;
      `).replace("#include <begin_vertex>",`
        #include <begin_vertex>
        vEmis = aEmis;
        vMat = aMat;
        vObjPos = position;
      `).replace("#include <project_vertex>",`
        #include <project_vertex>
        vec4 hmWp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          hmWp = instanceMatrix * hmWp;
        #endif
        vWorldPos = (modelMatrix * hmWp).xyz;
      `),n.fragmentShader=n.fragmentShader.replace("#include <common>",`
        #include <common>
        varying float vEmis;
        varying float vMat;
        varying vec3 vWorldPos;
        varying vec3 vObjPos;
        uniform float uPanel, uGrime, uEmisStr, uWindow, uTime, uDamage;
        uniform vec3 uEmisCol;
        ${Mn}
        ${zn}
        // triplanar panel-line field in world space
        float panelLines(vec3 p, vec3 n, float scale){
          vec3 a = abs(n);
          a /= (a.x+a.y+a.z);
          vec2 uvx = p.zy*scale, uvy = p.xz*scale, uvz = p.xy*scale;
          float d = 0.0;
          vec2 gx = abs(fract(uvx)-0.5), gy = abs(fract(uvy)-0.5), gz = abs(fract(uvz)-0.5);
          d += a.x * (1.0-smoothstep(0.0,0.045,min(gx.x,gx.y)));
          d += a.y * (1.0-smoothstep(0.0,0.045,min(gy.x,gy.y)));
          d += a.z * (1.0-smoothstep(0.0,0.045,min(gz.x,gz.y)));
          return d;
        }
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        {
          vec3 wp = vWorldPos;
          vec3 nn = normalize(vNormal);
          // large-scale plate tint
          float plate = vnoise3(wp*0.035);
          float plate2 = vnoise3(wp*0.011);
          float tint = 0.82 + 0.34*plate + 0.16*plate2;
          // material class tinting
          vec3 base = diffuseColor.rgb;
          if(vMat > 2.5)      base = mix(base, vec3(0.30,0.33,0.36), 0.6);
          else if(vMat > 1.5) base = mix(base, vec3(0.44,0.45,0.48), 0.55);
          else if(vMat > 0.5) base = mix(base, vec3(0.60,0.61,0.63), 0.45);
          base *= tint;
          // panel lines
          float pl = panelLines(wp, nn, uPanel);
          base *= (1.0 - 0.55*pl);
          // grime streaks
          float streak = fbm3(wp*vec3(0.02,0.10,0.02), 4, 2.2, 0.55);
          base *= mix(1.0, 0.62 + 0.5*streak, uGrime);
          diffuseColor.rgb = base;
        }
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        {
          float rv = vnoise3(vWorldPos*0.28);
          float rv2 = vnoise3(vWorldPos*1.7);
          roughnessFactor = clamp(roughnessFactor * (0.72 + 0.55*rv) + 0.10*(rv2-0.5), 0.14, 1.0);
        }
      `).replace("#include <emissivemap_fragment>",`
        #include <emissivemap_fragment>
        {
          float m = vEmis;
          if(m > 0.001){
            // break the emissive strip into individual lit windows
            vec3 wp = vWorldPos;
            float cells = hash13(floor(wp*0.55));
            float lit = step(1.0-uWindow, cells);
            float flick = 0.86 + 0.14*sin(uTime*(2.0+cells*9.0) + cells*40.0);
            vec3 c = uEmisCol;
            // some panels run cool-white / blue
            if(cells > 0.72) c = mix(c, vec3(0.62,0.82,1.0), 0.85);
            totalEmissiveRadiance += c * (m * lit * flick * uEmisStr);
          }
          // dying-station heat glow bleeding through the seams
          if(uDamage > 0.001){
            float crack = fbm3(vWorldPos*0.006 + vec3(0.0,uTime*0.05,0.0), 4, 2.3, 0.55);
            float hot = smoothstep(0.62 - uDamage*0.45, 0.78, crack) * uDamage;
            totalEmissiveRadiance += vec3(3.0,0.75,0.12) * hot * 3.5;
          }
        }
      `)},e.customProgramCacheKey=()=>"hull-v3",e}function Zb(i,e,t=0){for(const n of i){const s=n.userData?.uniforms;s&&(s.uTime.value=e,s.uDamage.value=t)}}function us(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},o={},r=i[0].morphTargetsRelative,l=new Tt;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(r!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in a){const f=qd(a[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][h]);const g=qd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function qd(i){let e,t,n,s=-1,a=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}const o=new e(a),r=new We(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const v=u.getComponent(h,g);r.setComponent(h+f,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(r.gpuType=s),r}function Sl(i,e,t=0){const n=i.attributes.position.count,s=new Float32Array(n),a=new Float32Array(n);if(s.fill(e),a.fill(t),i.setAttribute("aEmis",new We(s,1)),i.setAttribute("aMat",new We(a,1)),!i.attributes.uv){const o=new Float32Array(n*2);i.setAttribute("uv",new We(o,2))}return i}function bt(i,e=0,t=0,n=0,s=0,a=0,o=0){if(s||a||o){const r=new Qn(s,a,o);i.applyMatrix4(new st().makeRotationFromEuler(r))}return i.translate(e,t,n),i}function ms(i){const e=i.filter(Boolean);for(const n of e)n.index&&n.toNonIndexed?.();const t=us(e.map(n=>n.index?n.toNonIndexed():n),!1);if(!t)throw new Error("greebleKit: merge failed");return t.computeVertexNormals(),t}function pt(i,e,t,n=0,s=0){return Sl(new zs(i,e,t).translate(0,e/2,0),n,s)}function si(i,e,t,n=.12,s=0,a=0){const o=Math.min(n,Math.min(i,t)*.35,e*.45),r=new iu,l=i/2,c=t/2;r.moveTo(-l+o,-c),r.lineTo(l-o,-c),r.lineTo(l,-c+o),r.lineTo(l,c-o),r.lineTo(l-o,c),r.lineTo(-l+o,c),r.lineTo(-l,c-o),r.lineTo(-l,-c+o),r.closePath();const u=new rs(r,{depth:e,bevelEnabled:!0,bevelThickness:o*.5,bevelSize:o*.5,bevelSegments:1,curveSegments:1});return u.rotateX(-Math.PI/2),u.translate(0,e,0),Sl(u,s,a)}function wt(i,e,t=10,n=0,s=0){return Sl(new wi(i,i,e,t,1,!1).translate(0,e/2,0),n,s)}function Oi(i,e,t,n=8,s=0,a=0){return Sl(new wi(e,i,t,n,1,!1).translate(0,t/2,0),s,a)}function wl(i,e=1){const t=[];let n=i.range(3,7)*e,s=n*i.range(.7,1.3),a=0;const o=i.int(2,4);for(let r=0;r<o;r++){const l=i.range(3,9)*e;if(t.push(bt(si(n,l,s,.25*e,0,0),0,a,0)),i.bool(.55)){const c=n*i.range(.2,.4);t.push(bt(pt(c,l*i.range(.3,.7),s*.6,i.bool(.25)?1:0,1),(n/2+c/2)*i.sign(),a+l*.15,0))}a+=l,n*=i.range(.55,.82),s*=i.range(.55,.82)}if(i.bool(.7)){const r=i.range(4,14)*e;t.push(bt(wt(i.range(.25,.6)*e,r,6,0,2),0,a,0)),t.push(bt(wt(i.range(.5,1.1)*e,.5*e,8,1,3),0,a+r,0))}return i.bool(.6)&&t.push(bt(pt(n*1.15,.35*e,s*.25,1,3),0,a*i.range(.3,.7),s*.42)),ms(t)}function pf(i,e=1){const t=[],n=i.range(5,12)*e,s=i.range(4,9)*e;t.push(bt(si(n,.9*e,s,.3*e,0,0),0,0,0));const a=i.int(4,9),o=i.bool(.4)?1:0;for(let r=0;r<a;r++){const l=(r+.5)/a;t.push(bt(pt(n*.86,i.range(.5,1.3)*e,s/a*.55,o,o?3:1),0,.55*e,(l-.5)*s*.9))}return t.push(bt(pt(n*1.02,1.5*e,.5*e,0,0),0,0,s/2)),t.push(bt(pt(n*1.02,1.5*e,.5*e,0,0),0,0,-s/2)),ms(t)}function Vm(i,e,t=1){const n=[],s=i.range(.4,1.4)*t,a=i.range(1.5,4)*t,o=wt(s,e,8,0,2);o.rotateX(Math.PI/2),n.push(bt(o,0,a,0));const r=Math.max(2,Math.floor(e/i.range(8,20)));for(let l=0;l<=r;l++){const c=(l/r-.5)*e;n.push(bt(pt(s*2.6,a,s*1.4,0,0),0,0,c)),i.bool(.3)&&n.push(bt(wt(s*1.5,s*.8,8,0,1),0,a-s*.4,c))}if(i.bool(.5)){const l=s*i.range(.5,.85),c=wt(l,e,6,0,2);c.rotateX(Math.PI/2),n.push(bt(c,s*2.4,a*i.range(.6,1.1),0))}return ms(n)}function mf(i,e=1){const t=[];t.push(bt(si(i.range(2,4)*e,1*e,i.range(2,4)*e,.2,0,0),0,0,0));const n=i.range(6,18)*e;t.push(bt(Oi(.55*e,.2*e,n,6,0,2),0,.9*e,0));const s=i.int(0,2);if(s===0){const a=new ps(i.range(1.5,4)*e,12,8,0,Math.PI*2,0,Math.PI*.42);a.rotateX(Math.PI*i.range(.75,1.15)),t.push(bt(Sl(a,0,1),0,n*i.range(.75,1),0))}else if(s===1)for(let a=0;a<3;a++){const o=a/3*Math.PI*2,r=wt(.16*e,i.range(3,7)*e,5,0,2);r.rotateZ(Math.PI*.28),t.push(bt(r,Math.cos(o)*.5*e,n*.9,Math.sin(o)*.5*e,0,o,0))}else t.push(bt(pt(i.range(1,2.5)*e,i.range(1.5,3)*e,.35*e,1,3),0,n*.85,0));return i.bool(.5)&&t.push(bt(wt(.35*e,.35*e,6,1,3),0,n+.4*e,0)),ms(t)}function cu(i,e=1){const t=[],n=i.range(8,20)*e,s=i.range(6,16)*e,a=i.range(3,9)*e;t.push(bt(si(n,a,s,.5*e,0,0),0,0,0));const o=i.int(3,8);for(let r=0;r<o;r++){const l=i.next(),c=i.range(-.42,.42)*n,u=i.range(-.42,.42)*s;if(l<.3)t.push(bt(pt(i.range(.1,.28)*n,i.range(.3,1.2)*a,i.range(.1,.3)*s,0,1),c,a,u));else if(l<.55)t.push(bt(wt(i.range(.4,1.4)*e,i.range(1,4)*e,8,0,2),c,a,u));else if(l<.75)t.push(bt(pt(i.range(.15,.4)*n,.25*e,i.range(.15,.4)*s,1,3),c,a+.02,u));else{const f=Vm(i,i.range(.4,.9)*s,e*.7);t.push(bt(f,c,a,u,0,i.bool()?Math.PI/2:0,0))}}return t.push(bt(pt(n*1.06,.3*e,s*1.06,i.bool(.5)?1:0,3),0,a*.12,0)),ms(t)}function Jb(i,e=1){const t=[],n=i.range(8,22)*e,s=i.range(6,18)*e,a=i.range(2,6)*e,o=pt(n*.86,.3*e,s*.86,i.bool(.5)?.8:.1,3);t.push(bt(o,0,-a,0));const r=.09;return t.push(bt(pt(n*r,a,s,0,0),-n*(.5-r/2),-a,0)),t.push(bt(pt(n*r,a,s,0,0),n*(.5-r/2),-a,0)),t.push(bt(pt(n,a,s*r,0,0),0,-a,-s*(.5-r/2))),t.push(bt(pt(n,a,s*r,0,0),0,-a,s*(.5-r/2))),ms(t)}function Qb(i,e=1){const t=i.range(10,28)*e,n=i.range(8,22)*e,s=i.range(.4,1.6)*e,a=[si(t,s,n,.4*e,0,0)];return i.bool(.45)&&a.push(bt(pt(t*i.range(.5,.9),s*.4,.35*e,1,3),0,s,n*i.range(-.4,.4))),i.bool(.35)&&a.push(bt(si(t*i.range(.3,.6),s*i.range(.8,2.2),n*i.range(.3,.6),.25*e,0,1),i.range(-.2,.2)*t,s,i.range(-.2,.2)*n)),ms(a)}function jb(i,e,t=1){const n=[],s=i.range(4,10)*t,a=i.range(1.2,3)*t,o=pt(s,a,e,0,0);bt(o,0,0,0),n.push(o);const r=Math.max(2,Math.floor(e/i.range(9,18)));for(let l=0;l<=r;l++){const c=(l/r-.5)*e*.94;n.push(bt(pt(s*1.18,a*i.range(1.4,2.4),a*.7,0,1),0,-a*.2,c))}n.push(bt(pt(.35*t,.35*t,e,1,3),s/2,a,0)),n.push(bt(pt(.35*t,.35*t,e,1,3),-s/2,a,0));for(let l=0;l<r;l++){const c=((l+.5)/r-.5)*e*.94,u=wt(.3*t,a*3.2,5,0,2);u.rotateX(Math.PI*.5*(l%2?.45:-.45)),n.push(bt(u,0,-a*1.6,c))}return ms(n)}function e3(i,e=1){const t=[];return t.push(bt(Oi(3.2*e,2.4*e,1.6*e,10,0,0),0,0,0)),t.push(bt(wt(2.9*e,.35*e,10,1,3),0,1.6*e,0)),ms(t)}function t3(i,e=1){const t=[];return t.push(bt(si(4.4*e,2.4*e,3.4*e,.5*e,0,0),0,0,0)),t.push(bt(pt(1.2*e,1.6*e,2.2*e,0,1),-2.2*e,.4*e,0)),t.push(bt(pt(1.2*e,1.6*e,2.2*e,0,1),2.2*e,.4*e,0)),ms(t)}function n3(i,e=1){const t=[],n=i.range(7,11)*e;for(const s of[-1,1]){const a=Oi(.62*e,.4*e,n,8,0,2);a.rotateX(-Math.PI/2),t.push(bt(a,s*1.1*e,0,0));const o=wt(.85*e,1.2*e,8,0,1);o.rotateX(-Math.PI/2),t.push(bt(o,s*1.1*e,0,n*.28));const r=wt(.5*e,.5*e,8,1,3);r.rotateX(-Math.PI/2),t.push(bt(r,s*1.1*e,0,-n*.98))}return t.push(bt(si(3.4*e,1.6*e,2.6*e,.35*e,0,0),0,-.8*e,1.2*e)),ms(t)}function Js(i,e,t,n=1){const s=new Qt(i),a=[];for(let o=0;o<e;o++)switch(t[o%t.length]){case"tower":a.push(wl(s,n));break;case"vent":a.push(pf(s,n));break;case"pipe":a.push(Vm(s,s.range(14,40)*n,n));break;case"antenna":a.push(mf(s,n));break;case"machinery":a.push(cu(s,n));break;case"recess":a.push(Jb(s,n));break;case"plate":a.push(Qb(s,n));break}return a}const Lt=250,oc=96,gl=120,Gm=14,hr=1250,i3=new Qn,s3=new st;function It(i,e=0,t=0,n=0,s=0,a=0,o=0){return(s||a||o)&&i.applyMatrix4(s3.makeRotationFromEuler(i3.set(s,a,o,"YXZ"))),(e||t||n)&&i.translate(e,t,n),i}function Zt(i){const e=i.filter(Boolean).map(n=>n.index?n.toNonIndexed():n),t=us(e,!1);if(!t)throw new Error("trenchProps: merge failed");return t.computeVertexNormals(),t}function k(i,e,t,n,s,a,o=0,r=0){return It(pt(Math.abs(e-i),Math.abs(n-t),Math.abs(a-s),o,r),(i+e)/2,Math.min(t,n),(s+a)/2)}function nn(i,e,t,n,s,a,o=.6,r=0,l=0){const c=Math.abs(n-t),u=si(Math.abs(e-i),c,Math.abs(a-s),o,r,l);return u.translate(0,-c,0),It(u,(i+e)/2,Math.min(t,n),(s+a)/2)}function D0(i,e,t,n,s,a=8,o=0,r=0){const l=wt(t,Math.abs(e-i),a,o,r);return l.rotateZ(-Math.PI/2),It(l,Math.min(i,e),n,s)}function ro(i,e,t,n,s,a=8,o=0,r=0){const l=wt(t,Math.abs(e-i),a,o,r);return l.rotateX(Math.PI/2),It(l,n,s,Math.max(i,e))}function Hm(i,e,t,n,s,a,o,r=5,l=0,c=2){const u=n-i,f=s-e,h=a-t,d=Math.max(.001,Math.hypot(u,f,h)),g=wt(o,d,r,l,c),v=new Ct().setFromUnitVectors(new b(0,1,0),new b(u/d,f/d,h/d));return g.applyQuaternion(v),g.translate(i,e,t),g}function $o(i,e,t){const n=i.attributes.position.count,s=new Float32Array(n);s.fill(e);const a=new Float32Array(n);return a.fill(t),i.setAttribute("aEmis",new We(s,1)),i.setAttribute("aMat",new We(a,1)),i}function gf(i,e,t,n){const s=new Tt;return s.setAttribute("position",new gt(i,3)),s.setAttribute("uv",new gt(e,2)),s.computeVertexNormals(),$o(s,t,n)}function vl(i,e,t,n,s,a,o,r,l,c,u,f,h,d){i.push(t,n,s,l,c,u,a,o,r,t,n,s,f,h,d,l,c,u),e.push(0,0,1,1,1,0,0,0,0,1,1,1)}function fr(i){const e=Math.min(Math.abs(i),hr);return Math.sqrt(Math.max(0,tt*tt-e*e))-tt-Gm*(1-Dt(gl,hr,e))}const He=-Lt/2,lt=Lt/2;function oa(i,e){i.push(k(0,40,-134,.2,He,lt,0,0));const t=e.int(3,6);for(let s=0;s<t;s++){const a=-6-(s+e.range(.1,.9))/t*112;i.push(k(-1.6,1,a,a+e.range(1.1,2.8),He,lt,0,1))}i.push(nn(0,oc,-3.4,0,He,lt,1.2,0,0)),i.push(k(oc-5,oc,-Gm-1,0,He,lt,0,1)),i.push(k(-1.4,3.4,0,2.8,He,lt,0,1)),i.push(k(-2,-1.2,.6,1.5,He,lt,1,3));const n=e.int(13,20);for(let s=0;s<n;s++){const a=e.range(9,oc-14),o=e.range(He+8,lt-8),r=e.next();if(r<.4){const l=e.range(5,16),c=e.range(5,20),u=e.range(2.5,14);i.push(k(a-l/2,a+l/2,0,u,o-c/2,o+c/2,0,1)),e.bool(.4)&&i.push(k(a-l*.3,a+l*.3,u,u+.4,o-c*.3,o+c*.3,1,3))}else if(r<.68){const l=e.range(9,26),c=e.range(7,24);i.push(nn(a-l/2,a+l/2,0,e.range(1,3.2),o-c/2,o+c/2,.5,0,0)),e.bool(.4)&&i.push(k(a-l*.22,a+l*.22,0,e.range(3,11),o-c*.22,o+c*.22,0,1))}else if(r<.86)i.push(It(wt(e.range(1.4,4.2),e.range(4,18),8,0,2),a,0,o)),i.push(It(wt(e.range(1.8,2.6),1,8,1,3),a,e.range(4,16),o));else{const l=e.range(6,16),c=e.range(5,12),u=e.range(2,5);i.push(k(a-l/2,a+l/2,-u,-u+.4,o-c/2,o+c/2,.9,3)),i.push(k(a-l/2-1,a-l/2,-u,.2,o-c/2,o+c/2,0,0)),i.push(k(a+l/2,a+l/2+1,-u,.2,o-c/2,o+c/2,0,0)),i.push(k(a-l/2,a+l/2,-u,.2,o-c/2-1,o-c/2,0,0)),i.push(k(a-l/2,a+l/2,-u,.2,o+c/2,o+c/2+1,0,0))}}}function ra(i,e,t,n=()=>0){for(let s=0;s<t;s++){const a=e.range(-124,-6),o=e.range(He+4,lt-4),r=n(a),l=e.next();if(l<.34){const c=e.range(1.5,7),u=e.range(2,9),f=e.range(.8,2.6);i.push(k(r-f,r+2,a,a+c,o-u/2,o+u/2,0,1))}else if(l<.56){const c=e.range(1,3),u=e.range(4,16);i.push(k(r-1.2,r+1,a,a+c,o-u/2,o+u/2,0,0))}else if(l<.74)i.push(ro(o-e.range(4,22),o,e.range(.4,1.3),r-e.range(.6,2.2),a,6,0,2));else if(l<.88){const c=e.range(1.2,3.4),u=e.range(2.5,7);i.push(k(r-.9,r+.4,a,a+c,o-u/2,o+u/2,1,3))}else i.push(It(wt(e.range(.7,2),e.range(1,3.5),7,0,1),r-.4,a,o,0,0,Math.PI/2))}}function Tl(i,e,t,n,s,a){const o=e.range(2.5,5);i.push(k(o-.4,o,t,t+a,n-s/2,n+s/2,.95,3));const r=Math.max(2,Math.round(a/e.range(1.2,2.4)));for(let l=0;l<r;l++){const c=t+(l+.5)/r*a;i.push(k(.2,o-.6,c-.35,c+.35,n-s/2,n+s/2,0,1))}i.push(k(-.6,.9,t-1.2,t+a+1.2,n-s/2-1.4,n-s/2,0,0)),i.push(k(-.6,.9,t-1.2,t+a+1.2,n+s/2,n+s/2+1.4,0,0)),i.push(k(-.6,.9,t-1.4,t,n-s/2-1.4,n+s/2+1.4,0,0)),i.push(k(-.6,.9,t+a,t+a+1.4,n-s/2-1.4,n+s/2+1.4,0,0))}function Wm(i,e,t,n){let s=n;for(let a=0;a<i.length;a++){const o=i[a];t<o.y0||t>o.y1||Math.abs(e-o.c)<o.hw&&o.d>s&&(s=o.d)}return s}function a3(i){const e=[];oa(e,i);const t=i.int(14,22),n=i.range(2.2,3.6),s=i.range(-4,-9),a=i.range(-118,-130);for(let r=0;r<t;r++){const l=He+(r+.5)/t*Lt,c=i.range(2.6,5.4);e.push(k(-n,1,s,a,l-c/2,l+c/2,0,0)),e.push(k(-n-.7,-n+.6,s-2,s-5.5,l-c/2-.4,l+c/2+.4,0,1)),r%3===0&&e.push(k(-n-.5,-n+.2,-30,-34,l-c/2,l+c/2,1,3))}const o=i.range(-45,-75);e.push(k(-.5,5.5,o,o+i.range(4,8),He,lt,0,1)),ra(e,i,26);for(let r=0;r<3;r++)Tl(e,i,i.range(-100,-20),i.range(He+20,lt-20),i.range(5,11),i.range(4,10));return{geo:Zt(e),prot:()=>n+.7,name:"ribs"}}function o3(i){const e=[];oa(e,i);const t=i.int(3,5);for(let n=0;n<t;n++){const s=He+(n+.5)/t*Lt,a=Lt/t*i.range(.5,.72),o=i.range(-108,-80),r=i.range(-18,-40),l=i.range(9,16);e.push(k(l-1.2,l,o,r,s-a/2,s+a/2,0,1)),e.push(k(0,l,o-1.4,o,s-a/2,s+a/2,0,0)),e.push(k(0,l,r,r+1.4,s-a/2,s+a/2,0,0)),e.push(k(0,l,o,r,s-a/2-1.4,s-a/2,0,0)),e.push(k(0,l,o,r,s+a/2,s+a/2+1.4,0,0)),e.push(k(-1.6,.4,o-2.6,o-1,s-a/2-2.6,s+a/2+2.6,0,1)),e.push(k(-1.6,.4,r+1,r+2.6,s-a/2-2.6,s+a/2+2.6,0,1));const c=i.int(4,8);for(let u=0;u<c;u++){const f=i.range(o+2,r-3),h=i.range(s-a/2+3,s+a/2-3),d=i.next();d<.4?e.push(k(l-i.range(3,7),l-1,f,f+i.range(2,8),h-i.range(1,4),h+i.range(1,4),0,1)):d<.7?e.push(ro(h-i.range(5,20),h,i.range(.5,1.6),l-i.range(1.5,4),f,6,0,2)):e.push(k(l-1.6,l-.9,f,f+i.range(1.5,5),h-i.range(1,3),h+i.range(1,3),1,3))}e.push(k(l-1.5,l-.8,o+1,o+1.8,s-a/2+1,s+a/2-1,1,3))}return ra(e,i,30),{geo:Zt(e),prot:()=>2.4,name:"bays"}}function r3(i){const e=[];oa(e,i);const t=i.int(3,4),n=[],s=i.range(6,9.5);for(let a=0;a<t;a++){const o=He+(a+.5)/t*Lt+i.range(-10,10),r=i.range(13,22);e.push(k(-s,2,-132,-70,o-r/2,o+r/2,0,0)),e.push(k(-s*.68,2,-70,-34,o-r*.42,o+r*.42,0,0)),e.push(k(-s*.4,2,-34,-2,o-r*.3,o+r*.3,0,1)),e.push(k(-s-.9,-s+.3,-128,-74,o-r/2-.6,o+r/2+.6,0,1)),e.push(k(-s-.6,-s+.1,-100,-96,o-r/2,o+r/2,1,3)),e.push(k(-s-.6,-s+.1,-60,-57,o-r*.42,o+r*.42,1,3)),e.push(ro(o-r*.8,o+r*.8,.9,-s*.5,-72,6,0,2)),n.push({c:(o-He)/Lt,hw:(r/2+1.5)/Lt,d:s+1,y0:-134,y1:-68}),n.push({c:(o-He)/Lt,hw:(r*.42+1)/Lt,d:s*.68+1,y0:-70,y1:-30})}ra(e,i,26);for(let a=0;a<2;a++)Tl(e,i,i.range(-95,-30),i.range(He+20,lt-20),i.range(6,12),i.range(5,12));return{geo:Zt(e),prot:(a,o)=>Wm(n,a,o,2.2),name:"buttress"}}function l3(i){const e=[];oa(e,i);const t=i.int(2,3);let n=i.range(4.5,7),s=i.range(-24,-38);const a=[];for(let r=0;r<t;r++){const l=s-i.range(24,36);e.push(k(-n,2,s,l,He,lt,0,0)),e.push(k(-n-1.1,-n+.4,s,s-2.4,He,lt,0,1)),e.push(k(-n-.8,-n+.1,s-2.9,s-3.6,He,lt,1,3));const c=i.int(4,8);for(let u=0;u<c;u++){const f=i.range(He+6,lt-6),h=i.range(2,6),d=i.range(2,7);e.push(k(-n+.3,-n+.3+h,s,s+i.range(2,7),f-d/2,f+d/2,0,1))}a.push({y0:l,y1:s,d:n+1.2}),s=l,n+=i.range(2.5,5)}e.push(k(-n,2,s,-134,He,lt,0,0)),e.push(k(-n-1.1,-n+.4,s,s-2.4,He,lt,0,1)),a.push({y0:-134,y1:s,d:n+1.2}),ra(e,i,24,r=>{for(const l of a)if(r>=l.y0&&r<=l.y1)return-(l.d-1.2);return 0});for(let r=0;r<2;r++)Tl(e,i,i.range(-30,-12),i.range(He+20,lt-20),i.range(6,12),i.range(4,9));return{geo:Zt(e),prot:(r,l)=>{for(const c of a)if(l>=c.y0&&l<=c.y1)return c.d;return 2.2},name:"terrace"}}function c3(i){const e=[];oa(e,i);const t=i.range(-84,-60),n=i.range(20,32),s=i.range(11,17);e.push(k(s-1.2,s,t,t+n,He,lt,0,1)),e.push(k(0,s,t-2,t,He,lt,0,0)),e.push(k(0,s,t+n,t+n+2,He,lt,0,0)),e.push(k(-2.4,.6,t-3.4,t-1.4,He,lt,0,1)),e.push(k(-2.4,.6,t+n+1.4,t+n+3.4,He,lt,0,1));const a=i.int(3,6);for(let r=0;r<a;r++)e.push(ro(He-2,lt+2,i.range(.6,1.8),s-i.range(1.5,6),t+i.range(3,n-3),7,0,2));const o=i.int(8,14);for(let r=0;r<o;r++){const l=He+(r+.5)/o*Lt;e.push(k(.5,s,t+1,t+n-1,l-1.1,l+1.1,0,0)),i.bool(.5)&&e.push(k(s-2.2,s-1.4,t+i.range(2,n-5),t+i.range(5,n-2),l-2.6,l+2.6,1,3))}for(let r=0;r<10;r++){const l=i.bool()?i.range(t+n+5,-10):i.range(-128,t-6),c=i.range(He+8,lt-8);e.push(nn(-i.range(1.5,3.5),.5,l,l+i.range(6,18),c-i.range(6,20),c+i.range(6,20),.5,0,0))}return ra(e,i,24),{geo:Zt(e),prot:()=>3.6,name:"channel"}}function u3(i){const e=[];oa(e,i);const t=i.range(-52,-30),n=i.range(8,12);e.push(nn(-n,1,t,t+2.2,He,lt,.5,0,0)),e.push(k(-n-.9,-n+.3,t,t+.9,He,lt,1,3));const s=14;for(let o=0;o<=s;o++){const r=He+o/s*Lt;e.push(k(-n+.3,-n+1.1,t+2.2,t+5.2,r-.45,r+.45,0,2)),e.push(Hm(.5,t-13,r,-n+1.5,t-.3,r,.7,5))}e.push(k(-n+.2,-n+.8,t+4.6,t+5.2,He,lt,0,2));const a=i.int(4,7);for(let o=0;o<a;o++){const r=i.range(He+8,lt-8),l=i.range(2.5,6),c=i.range(3,10);e.push(k(-n+1.5,-n+1.5+l,t+2.2,t+2.2+i.range(3,10),r-c/2,r+c/2,0,1)),i.bool(.5)&&e.push(k(-n+1.5,-n+1.5+l,t+2.2,t+2.6,r-c/2,r+c/2,1,3))}for(let o=0;o<10;o++){const r=i.bool()?i.range(t+12,-8):i.range(-126,t-10),l=i.range(He+10,lt-10);e.push(nn(-i.range(1.2,3),.5,r,r+i.range(8,22),l-i.range(8,22),l+i.range(8,22),.6,0,0))}ra(e,i,22);for(let o=0;o<2;o++)Tl(e,i,i.range(-118,t-14),i.range(He+20,lt-20),i.range(6,12),i.range(5,12));return{geo:Zt(e),prot:(o,r)=>r>t-2&&r<t+6?n+1.4:2.4,name:"gantry"}}function h3(i){const e=[];oa(e,i);const t=i.int(4,7),n=i.int(4,7);for(let s=0;s<t;s++)for(let a=0;a<n;a++){const o=He+s/t*Lt+1.5,r=He+(s+1)/t*Lt-1.5,l=-130+a/n*126+1.5,c=-130+(a+1)/n*126-1.5,u=i.next();if(u<.35){const f=i.range(2.5,6.5);e.push(nn(-f,.4,l,c,o,r,.7,0,0)),e.push(k(-f-1.2,-f+.3,l+1,l+2.6,o,r,0,1)),e.push(k(-f-1.2,-f+.3,c-2.6,c-1,o,r,0,1)),i.bool(.35)&&e.push(k(-f-.9,-f+.2,(l+c)/2-.7,(l+c)/2+.7,o+2,r-2,1,3))}else if(u<.55){const f=i.range(4,9);e.push(k(f-.5,f,l,c,o,r,u<.44?.85:0,u<.44?3:1)),e.push(k(-.6,f,l-1,l,o,r,0,0)),e.push(k(-.6,f,c,c+1,o,r,0,0)),e.push(k(-.6,f,l,c,o-1,o,0,0)),e.push(k(-.6,f,l,c,r,r+1,0,0))}else if(u<.72){const f=i.int(3,7);for(let h=0;h<f;h++){const d=l+(h+.5)/f*(c-l);e.push(k(-1.1,.3,d-.7,d+.7,o+1,r-1,0,1))}e.push(k(.2,1.2,l,c,o,r,0,1))}else e.push(nn(-i.range(2.2,4),.4,l+2,c-2,o+2,r-2,.6,0,1)),i.bool(.4)&&e.push(k(-i.range(2.4,4.2),-1.6,(l+c)/2-.8,(l+c)/2+.8,o+3,r-3,1,3))}ra(e,i,26);for(let s=0;s<3;s++)Tl(e,i,i.range(-110,-20),i.range(He+20,lt-20),i.range(5,10),i.range(4,9));return{geo:Zt(e),prot:()=>7.6,name:"panels"}}function f3(i){const e=[];oa(e,i);const t=[],n=i.int(4,7);for(let s=0;s<n;s++){const a=i.range(He+22,lt-22),o=i.range(16,34),r=i.range(16,40),l=i.range(-118,-34),c=i.range(5.5,11);e.push(nn(-c,1.5,l,l+r,a-o/2,a+o/2,1,0,0)),e.push(k(-c-1.2,-c+.5,l+1,l+3.2,a-o/2-.8,a+o/2+.8,0,1)),e.push(k(-c-1.2,-c+.5,l+r-3.2,l+r-1,a-o/2-.8,a+o/2+.8,0,1)),e.push(k(-c-.9,-c+.2,l+r*.5-.8,l+r*.5+.8,a-o/2+2,a+o/2-2,1,3));const u=i.int(3,6);for(let f=0;f<u;f++){const h=i.range(a-o/2+3,a+o/2-3),d=i.range(l+2,l+r-4);i.bool(.5)?e.push(It(wt(i.range(.8,2.2),i.range(2,6),8,0,2),-c-.2,d,h,0,0,Math.PI/2)):e.push(k(-c-i.range(1.5,4),-c,d,d+i.range(2,6),h-i.range(1,3),h+i.range(1,3),0,1))}t.push({c:(a-He)/Lt,hw:(o/2+4)/Lt,d:c+4.2,y0:l-2,y1:l+r+2})}for(let s=0;s<3;s++){const a=i.range(-124,-10);e.push(ro(He-2,lt+2,i.range(.9,2.2),-i.range(1.5,3.5),a,8,0,2));for(let o=0;o<6;o++){const r=He+(o+.5)/6*Lt;e.push(k(-4.2,.5,a-2.4,a+2.4,r-1.1,r+1.1,0,1))}}return ra(e,i,22),{geo:Zt(e),prot:(s,a)=>Wm(t,s,a,3.4),name:"heavy"}}function d3(i){const e=new Qt(i),t=[];oa(t,e);const n=5;for(let s=0;s<n;s++){const a=He+(s+.5)/n*Lt,o=26;t.push(nn(-9,2,-134,-6,a-o/2,a+o/2,1.4,0,0)),t.push(k(-10.4,-8,-128,-14,a-o/2-1,a+o/2+1,0,1)),t.push(k(-10.2,-8.4,-120,-114,a-o/2,a+o/2,1,3)),t.push(k(-10.2,-8.4,-76,-70,a-o/2,a+o/2,1,3)),t.push(k(-10.2,-8.4,-32,-26,a-o/2,a+o/2,1,3)),t.push(k(-14,-8,-14,-6,a-4,a+4,0,1)),t.push(k(-14.6,-13.4,-13,-7,a-3.2,a+3.2,1,3));const r=a+o/2+3,l=a+Lt/n-o/2-3;if(l>r){t.push(k(4.4,5,-120,-14,r,l,.9,3));for(let c=0;c<9;c++){const u=-120+(c+.5)/9*106;t.push(k(0,4.6,u-1.4,u+1.4,r,l,0,1))}}}return ra(t,e,20),{geo:Zt(t),prot:()=>11,name:"approach"}}function p3(i){return[a3,o3,r3,l3,c3,u3,h3,f3].map((t,n)=>t(new Qt(i+n*7919)))}const Vn=96;function El(i,e){i.push(k(-Vn,Vn,-9,0,He,lt,0,0))}function Al(i,e){const t=e.range(-16,16),n=e.range(30,62);for(const o of[-1,1]){const r=t+o*n/2,l=e.range(5,11),c=e.range(3.2,6);i.push(k(r-l/2,r+l/2,-c,-c+.6,He,lt,0,1)),i.push(k(r-l/2-1.8,r-l/2,-c,.4,He,lt,0,0)),i.push(k(r+l/2,r+l/2+1.8,-c,.4,He,lt,0,0)),i.push(k(r-1,r+1,-c+.6,-c+1,He,lt,1,3));const u=Math.round(Lt/e.range(9,16));for(let f=0;f<u;f++){const h=He+(f+.5)/u*Lt;i.push(k(r-l/2-.6,r+l/2+.6,-c+.6,-c+e.range(1.6,2.8),h-1.5,h+1.5,0,2))}}const s=Math.round(Lt/e.range(11,19)),a=e.range(.7,1.6);for(let o=0;o<s;o++){const r=He+(o+.5)/s*Lt;i.push(k(-Vn,Vn,0,a,r-e.range(1.2,2.6),r+e.range(1.2,2.6),0,1)),o%3===0&&(i.push(k(-Vn+6,-Vn+16,0,a+.5,r-3,r+3,0,1)),i.push(k(Vn-16,Vn-6,0,a+.5,r-3,r+3,0,1)))}}function xr(i,e){for(const t of[-1,1]){const n=t*e.range(50,64);i.push(k(n-2.2,n+2.2,0,1.1,He,lt,0,1)),i.push(k(n-.9,n+.9,1.1,1.5,He,lt,1,3))}}function m3(i){const e=[];El(e);const t=i.int(5,8),n=i.int(4,7);for(let s=0;s<t;s++)for(let a=0;a<n;a++){const o=He+s/t*Lt+1.2,r=He+(s+1)/t*Lt-1.2,l=-Vn+a/n*Vn*2+1.2,c=-Vn+(a+1)/n*Vn*2-1.2,u=i.next();u<.5?e.push(nn(l,c,0,i.range(.5,1.6),o,r,.5,0,0)):u<.72?e.push(k(l,c,-2.2,-1.6,o,r,i.bool(.35)?.8:0,3)):e.push(nn(l+2,c-2,0,i.range(1.5,3.4),o+2,r-2,.6,0,1))}for(let s=0;s<2;s++){const a=i.range(-70,70);e.push(k(a-4,a+4,-3.4,-2.8,He,lt,0,1));for(let o=0;o<16;o++){const r=He+(o+.5)/16*Lt;e.push(k(a-4.2,a+4.2,-2.6,-1.9,r-1.4,r+1.4,0,2))}}return Al(e,i),xr(e,i),{geo:Zt(e),rise:()=>2.4,name:"plated"}}function g3(i){const e=[];El(e);const t=i.int(3,5);for(let n=0;n<t;n++){const s=-70+(n+.5)/t*140+i.range(-8,8),a=i.range(7,15),o=i.range(2.5,5);e.push(k(s-a/2,s+a/2,-o,-o+.5,He,lt,0,1)),e.push(k(s-a/2-1.6,s-a/2,-o,.3,He,lt,0,0)),e.push(k(s+a/2,s+a/2+1.6,-o,.3,He,lt,0,0));const r=i.next();if(r<.4)e.push(ro(He-2,lt+2,i.range(.9,2.2),s,-o+1.8,8,0,2));else if(r<.7)for(let l=0;l<22;l++){const c=He+(l+.5)/22*Lt;e.push(k(s-a/2+.6,s+a/2-.6,-o+.5,-o+1.2,c-2.4,c+2.4,0,1))}else e.push(k(s-a/2+1,s+a/2-1,-o+.4,-o+.8,He,lt,.9,3))}for(let n=0;n<10;n++){const s=He+(n+.5)/10*Lt;e.push(k(-Vn,Vn,0,i.range(.6,1.5),s-i.range(1.5,4),s+i.range(1.5,4),0,1))}return Al(e,i),xr(e,i),{geo:Zt(e),rise:()=>2.4,name:"channels"}}function v3(i){const e=[];El(e);const t=i.int(2,4);for(let n=0;n<t;n++){const s=He+(n+.5)/t*Lt,a=Lt/t*i.range(.55,.85),o=i.range(30,80),r=i.range(-30,30);e.push(k(r-o/2,r+o/2,-4.2,-3.6,s-a/2,s+a/2,.9,3));const l=Math.round(a/i.range(3.5,6));for(let c=0;c<l;c++){const u=s-a/2+(c+.5)/l*a;e.push(k(r-o/2,r+o/2,-1.6,-.4,u-.9,u+.9,0,2))}e.push(k(r-o/2-2,r-o/2,-4.2,.6,s-a/2-2,s+a/2+2,0,0)),e.push(k(r+o/2,r+o/2+2,-4.2,.6,s-a/2-2,s+a/2+2,0,0)),e.push(k(r-o/2,r+o/2,-4.2,.6,s-a/2-2,s-a/2,0,0)),e.push(k(r-o/2,r+o/2,-4.2,.6,s+a/2,s+a/2+2,0,0))}for(let n=0;n<10;n++){const s=i.range(-Vn+6,Vn-6),a=i.range(He+6,lt-6);e.push(nn(s-i.range(3,10),s+i.range(3,10),0,i.range(.8,2.6),a-i.range(3,10),a+i.range(3,10),.5,0,0))}return Al(e,i),xr(e,i),{geo:Zt(e),rise:()=>2.4,name:"grates"}}function x3(i){const e=[];El(e);const t=[],n=i.int(2,4);for(let s=0;s<n;s++){const a=(i.bool()?1:-1)*i.range(30,74),o=He+(s+.5)/n*Lt+i.range(-20,20),r=i.range(16,34),l=i.range(20,55),c=i.range(5,16);e.push(nn(a-r/2,a+r/2,0,c,o-l/2,o+l/2,1,0,0)),e.push(k(a-r/2-.8,a+r/2+.8,c*.15,c*.15+.7,o-l/2-.8,o+l/2+.8,1,3));const u=i.int(3,7);for(let f=0;f<u;f++){const h=i.range(a-r*.35,a+r*.35),d=i.range(o-l*.4,o+l*.4),g=i.next();g<.4?e.push(k(h-i.range(1,4),h+i.range(1,4),c,c+i.range(2,9),d-i.range(1,4),d+i.range(1,4),0,1)):g<.75?e.push(It(wt(i.range(1,3),i.range(2,8),8,0,2),h,c,d)):e.push(k(h-2.5,h+2.5,c,c+.4,d-2.5,d+2.5,1,3))}t.push({x:a,z:o,xw:r/2+3,zw:l/2+3,h:c+1})}for(let s=0;s<3;s++){const a=i.range(-80,80),o=i.range(1.5,4);e.push(ro(He-2,lt+2,i.range(.7,1.8),a,o,7,0,2));for(let r=0;r<7;r++){const l=He+(r+.5)/7*Lt;e.push(k(a-2.2,a+2.2,0,o+.6,l-1.1,l+1.1,0,1))}}return Al(e,i),xr(e,i),{geo:Zt(e),rise:(s,a)=>{const o=He+s*Lt;for(const r of t)if(Math.abs(a-r.x)<r.xw&&Math.abs(o-r.z)<r.zw)return r.h;return 2.4},name:"islands"}}function _3(i){const e=[];El(e);const t=i.range(26,52),n=i.range(-24,24);for(const s of[-1,1]){const a=n+s*t/2;e.push(k(a-1.6,a+1.6,0,2.4,He,lt,0,2)),e.push(k(a-2.6,a+2.6,2.4,3,He,lt,0,1))}for(let s=0;s<26;s++){const a=He+(s+.5)/26*Lt;e.push(k(n-t/2-5,n+t/2+5,0,1,a-1.7,a+1.7,0,1))}e.push(k(n-1.2,n+1.2,-2.4,-1.8,He,lt,.9,3));for(let s=0;s<12;s++){const a=(i.bool()?1:-1)*i.range(34,88),o=i.range(He+8,lt-8),r=i.next();r<.5?e.push(nn(a-i.range(4,12),a+i.range(4,12),0,i.range(1,3.4),o-i.range(5,18),o+i.range(5,18),.5,0,0)):r<.8?e.push(k(a-3,a+3,0,i.range(2,7),o-i.range(2,7),o+i.range(2,7),0,1)):e.push(k(a-4,a+4,-2.4,-1.9,o-6,o+6,1,3))}return Al(e,i),xr(e,i),{geo:Zt(e),rise:()=>3.6,name:"rails"}}function y3(i){return[m3,g3,v3,x3,_3].map((t,n)=>t(new Qt(i+n*104729)))}function Xd(i,e,t){const n=new Qt(i),s=[],a=26,o=34,r=[],l=[],c=Vn*2/a,u=Lt/o;for(let f=0;f<a;f++)for(let h=0;h<o;h++){const d=-Vn+f*c,g=d+c,v=He+h*u,m=v+u,p=(d+g)/2,y=(v+m)/2;Math.hypot(p,y-e)<t||(vl(r,l,d,0,v,g,0,v,g,0,m,d,0,m),vl(r,l,d,-9,m,g,-9,m,g,-9,v,d,-9,v))}s.push(gf(r,l,0,0));for(let f=0;f<20;f++){const h=f/20*Math.PI*2,d=F0+n.range(3,12),g=d+n.range(10,30),v=(d+g)/2,m=e+Math.cos(h)*v,p=Math.sin(h)*v;if(m<He+4||m>lt-4||Math.abs(p)>Vn-12)continue;const y=k(-n.range(2.5,6),n.range(2.5,6),0,n.range(.5,1.4),d,g,0,f%3===0?1:0);s.push(It(y,0,0,e,0,h,0))}for(let f=0;f<10;f++){const h=f/10*Math.PI*2+.31,d=F0+16,g=e+Math.cos(h)*d,v=Math.sin(h)*d;g<He+6||g>lt-6||Math.abs(v)>44||(s.push(It(k(-2.4,2.4,0,8,d-2.4,d+2.4,0,1),0,0,e,0,h,0)),s.push(It(k(-1.8,1.8,5.2,7.6,d-3,d-2.2,1,3),0,0,e,0,h,0)))}return xr(s,n),{geo:Zt(s),rise:(f,h)=>{const d=He+f*Lt;return Math.max(2,R3(Math.hypot(h,d-e)))},name:"port"}}function b3(i,e,t,n,s,a,o){const r=[],l=[],c=(e-i)/s,u=(n-t)/a;for(let f=0;f<s;f++)for(let h=0;h<a;h++){const d=i+f*c,g=d+c,v=t+h*u,m=v+u,p=(d+g)/2,y=(v+m)/2;let M=!1;for(const T of o)if(p>T.x0&&p<T.x1&&y>T.z0&&y<T.z1){M=!0;break}if(M)continue;const x=fr(d),w=fr(g);vl(r,l,d,x,v,g,w,v,g,w,m,d,x,m)}return gf(r,l,0,0)}function M3(i,e,t){const n=fr((t.x0+t.x1)/2),s=e.range(9,20);i.push(k(t.x0,t.x1,n-s,n-s+1.2,t.z0,t.z1,0,1)),i.push(k(t.x0-2.5,t.x0,n-s,n+1,t.z0-2.5,t.z1+2.5,0,0)),i.push(k(t.x1,t.x1+2.5,n-s,n+1,t.z0-2.5,t.z1+2.5,0,0)),i.push(k(t.x0-2.5,t.x1+2.5,n-s,n+1,t.z0-2.5,t.z0,0,0)),i.push(k(t.x0-2.5,t.x1+2.5,n-s,n+1,t.z1,t.z1+2.5,0,0));const a=t.z1-t.z0>t.x1-t.x0,o=Math.max(3,Math.round((a?t.z1-t.z0:t.x1-t.x0)/e.range(18,40)));for(let r=0;r<o;r++){const l=(r+.5)/o;if(a){const c=t.z0+l*(t.z1-t.z0);i.push(k(t.x0,t.x1,n-s+1.2,n-s+e.range(3,7),c-2,c+2,0,1)),e.bool(.4)&&i.push(k(t.x0+1,t.x1-1,n-2.4,n-1.6,c-5,c+5,1,3))}else{const c=t.x0+l*(t.x1-t.x0);i.push(k(c-2,c+2,n-s+1.2,n-s+e.range(3,7),t.z0,t.z1,0,1))}}i.push(k(t.x0-1.2,t.x0+.4,n,n+.9,t.z0,t.z1,1,3)),i.push(k(t.x1-.4,t.x1+1.2,n,n+.9,t.z0,t.z1,1,3))}function Qu(i,e,t,n,s,a,o){const r=-n/2,l=n/2,c=[],u=[],f=[],h=i.int(1,3);for(let g=0;g<h;g++){const v=i.range(24,60),m=i.range(e+v,t-v),p={x0:m-v/2,x1:m+v/2,z0:r-1,z1:l+1};u.push({x0:p.x0-2.5,x1:p.x1+2.5,z0:p.z0-3,z1:p.z1+3}),f.push(p)}if(i.bool(.65)){const g=i.range(20,48),v=i.range(r+g,l-g),m={x0:e-1,x1:t+1,z0:v-g/2,z1:v+g/2};u.push({x0:m.x0-3,x1:m.x1+3,z0:m.z0-2.5,z1:m.z1+2.5}),f.push(m)}c.push(b3(e,t,r,l,s,a,u));for(const g of f)M3(c,i,g);const d=Math.round(o*i.range(14,22));for(let g=0;g<d;g++){const v=i.range(e+12,t-12),m=i.range(r+12,l-12);let p=!1;for(const w of u)if(v>w.x0-20&&v<w.x1+20&&m>w.z0-20&&m<w.z1+20){p=!0;break}if(p)continue;const y=fr(v),M=1+Math.abs(v)/hr*3.2,x=i.next();if(x<.4){const w=i.range(14,44)*M,T=i.range(14,50)*M;c.push(nn(v-w/2,v+w/2,y,y+i.range(1.2,4)*M,m-T/2,m+T/2,.8,0,0))}else if(x<.66){const w=i.range(10,30)*M,T=i.range(10,34)*M,E=i.range(5,22)*M;c.push(nn(v-w/2,v+w/2,y,y+E,m-T/2,m+T/2,1.2,0,0)),c.push(k(v-w/2-1,v+w/2+1,y+E*.12,y+E*.12+.8*M,m-T/2-1,m+T/2+1,1,3)),c.push(k(v-w*.3,v+w*.3,y+E,y+E+i.range(2,8)*M,m-T*.3,m+T*.3,0,1))}else if(x<.84){const w=i.range(16,40)*M,T=i.range(16,40)*M,E=i.range(4,12)*M;c.push(k(v-w/2,v+w/2,y-E,y-E+.7,m-T/2,m+T/2,.85,3)),c.push(k(v-w/2-2,v-w/2,y-E,y+.6,m-T/2-2,m+T/2+2,0,0)),c.push(k(v+w/2,v+w/2+2,y-E,y+.6,m-T/2-2,m+T/2+2,0,0)),c.push(k(v-w/2,v+w/2,y-E,y+.6,m-T/2-2,m-T/2,0,0)),c.push(k(v-w/2,v+w/2,y-E,y+.6,m+T/2,m+T/2+2,0,0))}else{const w=i.range(3,9)*M,T=i.range(6,26)*M;c.push(It(Oi(w,w*i.range(.5,.9),T,8,0,2),v,y,m)),c.push(It(wt(w*1.3,1.2*M,8,1,3),v,y+T,m))}}return Zt(c)}function S3(i){const e=[],t=[],n=[];for(let s=0;s<3;s++)e.push(Qu(new Qt(i+s*3301),gl,430,Lt,7,8,1.4));for(let s=0;s<2;s++)t.push(Qu(new Qt(i+900+s*3301),430,820,Lt*2,6,10,1.15));for(let s=0;s<2;s++)n.push(Qu(new Qt(i+1800+s*3301),820,hr,Lt*4,6,12,.95));return{near:e,mid:t,far:n}}function w3(i){return Js(i,6,["tower","machinery","antenna","plate","vent","recess"],2.4)}function T3(i){const e=[];for(let n=0;n<4;n++){const s=new Qt(i+n*7717),a=[];if(n===0){const o=jb(s,190,1.9);o.rotateY(Math.PI/2),a.push(o);for(let r=0;r<6;r++){const l=-95+(r+.5)/6*190;a.push(k(l-3,l+3,3.5,s.range(6,13),-2.5,2.5,0,1))}a.push(k(-190/2,190/2,-3.4,-2.6,-1,1,1,3))}else if(n===1){const o=s.int(3,5);for(let r=0;r<o;r++){const l=s.range(1.6,3.6),c=s.range(-2,4),u=s.range(-5,5);a.push(D0(-190/2,190/2,l,c,u,9,0,2));for(let f=0;f<9;f++){const h=-95+(f+.5)/9*190;a.push(k(h-1.2,h+1.2,c-l-1,c+l+1,u-l-1,u+l+1,0,1))}}a.push(k(-190/2,190/2,-3,-2.2,-.8,.8,1,3)),a.push(nn(-190/2,-190/2+16,-8,8,-9,9,1,0,0)),a.push(nn(190/2-16,190/2,-8,8,-9,9,1,0,0))}else if(n===3){a.push(k(-190/2,190/2,0,3.6,-3.2,3.2,0,0)),a.push(k(-190/2,190/2,3.6,5,-4.4,4.4,0,1)),a.push(k(-190/2,190/2,-.9,-.35,-1.1,1.1,1,3));for(let o=0;o<12;o++){const r=-95+(o+.5)/12*190;a.push(k(r-1.6,r+1.6,-2.6,0,-2.6,2.6,0,1))}for(const o of[-1,1]){const r=o*88;a.push(k(r-7,r+7,-9,7,-6,6,0,0)),a.push(k(r-5,r+5,7,9.4,-7,7,0,1))}}else{a.push(nn(-190/2,190/2,0,4.2,-7,7,1,0,0)),a.push(k(-190/2,190/2,4.2,5.6,-8,-6.2,0,1)),a.push(k(-190/2,190/2,4.2,5.6,6.2,8,0,1)),a.push(k(-190/2,190/2,-1,-.2,-6,6,1,3));for(let o=0;o<10;o++){const r=-95+(o+.5)/10*190,l=wt(.7,13,5,0,2);l.rotateZ(Math.PI*(o%2?.4:-.4)),a.push(It(l,r,-7,0))}for(const o of[-1,1]){const r=o*86;a.push(nn(r-9,r+9,-6,22,-11,11,1.4,0,0)),a.push(k(r-4,r+4,22,30,-4,4,0,1)),a.push(k(r-5,r+5,19,20.4,-12,12,1,3))}}e.push(Zt(a))}return e}function E3(i){const e=new Qt(i),t=[];{t.push(nn(0,74,-110,-4,-5,5,1.4,0,0)),t.push(k(70,74+1.5,-110,-4,-6.5,6.5,0,1)),t.push(k(74-3.2,74-1.4,-104,-10,-7,7,1,3));for(let l=0;l<8;l++){const c=-108+(l+.5)/8*100;t.push(k(2,68,c-1.6,c+1.6,-6.5,6.5,0,1))}for(let l=0;l<10;l++){const c=e.range(4,66),u=e.range(-104,-10);t.push(k(c,c+e.range(3,10),u,u+e.range(3,12),-7.5,-5,0,1)),e.bool(.4)&&t.push(k(c+1,c+4,u+1,u+3,-8.2,-7.4,1,3))}t.push(k(0,8,-112,-2,-8,8,0,0))}const n=[];{n.push(k(-9,9,-3,1,-4,4,0,0));const r=e.int(5,9);for(let l=0;l<r;l++){const c=e.range(-7,7),u=e.range(-3,3),f=e.range(20,62),h=5;let d=c,g=-3,v=u;for(let m=0;m<h;m++){const p=(m+1)/h,y=c+Math.sin(p*2.1+l)*3.5*p,M=-3-f*p,x=u+Math.cos(p*1.7+l)*2.5*p,w=y-d,T=M-g,E=x-v,_=Math.hypot(w,T,E),A=wt(e.range(.28,.7),_,5,0,2),R=new Ct().setFromUnitVectors(new b(0,1,0),new b(w/_,T/_,E/_));A.applyQuaternion(R),A.translate(d,g,v),n.push(A),d=y,g=M,v=x}n.push(It(wt(.9,1.2,6,1,3),d,g-1.2,v))}}const s=[];{s.push(nn(-7,7,0,58,-7,7,1.4,0,0)),s.push(k(-9,9,0,3,-9,9,0,1)),s.push(k(-8,8,58*.4,58*.4+1.2,-8,8,1,3)),s.push(k(-5,5,58,68,-5,5,0,1)),s.push(k(-6,6,68,58+11.2,-6,6,1,3));for(let l=0;l<8;l++){const c=e.range(4,52),u=e.range(0,Math.PI*2),f=k(6.5,6.5+e.range(2,6),c,c+e.range(2,7),-3,3,0,1);s.push(It(f,0,0,0,0,u,0))}}const a=[];{a.push(nn(-1,15,-3.5,0,-11,11,.9,0,0)),a.push(k(-1,4,-14,-3.5,-9,9,0,1));const r=wt(1.1,17,6,0,2);r.rotateZ(Math.PI*.35),a.push(It(r,1,-13,-7));const l=wt(1.1,17,6,0,2);l.rotateZ(Math.PI*.35),a.push(It(l,1,-13,7)),a.push(k(13.6,15.2,-3.2,-2.4,-10,10,1,3))}const o=[];{o.push(nn(-5,5,0,40,-5,5,1,0,0)),o.push(k(-7,7,0,4,-7,7,0,1));for(let r=0;r<3;r++){const l=30+r*4;o.push(k(-9,9,l,l+2.6,-3.2,3.2,0,1)),o.push(k(-8.4,8.4,l+.4,l+2.2,-3.6,-3,1,3))}o.push(k(-2,2,40,46,-2,2,0,2)),o.push(k(-3.2,3.2,46,47.4,-3.2,3.2,1,3))}return{bulkhead:Zt(t),cables:Zt(n),pylon:Zt(s),bracket:Zt(a),flood:Zt(o)}}function A3(i){const e=[];{e.push(It(wt(3.2,5,10,0,1),0,-2.5,0,Math.PI/2,0,0));for(let r=0;r<7;r++){const l=r/7*Math.PI*2,c=k(-1,1,3,13,-2.6,2.6,0,1);c.applyMatrix4(new st().makeRotationY(.42)),e.push(It(c,0,0,0,0,0,l))}e.push(It(wt(2.2,1.6,8,1,3),0,2.4,0,Math.PI/2,0,0))}const t=[];{for(let a=0;a<16;a++){const o=a/16*Math.PI*2,r=k(-2.4,2.4,14,18.5,-4.5,4.5,0,0);t.push(It(r,0,0,0,0,0,o))}t.push(It(wt(18.5,3,20,0,1),0,-6.5,0,Math.PI/2,0,0));for(let a=0;a<6;a++){const o=a/6*Math.PI*2+.3,r=k(-1.2,1.2,15.5,17.5,-6.4,-5.6,1,3);t.push(It(r,0,0,0,0,0,o))}}const n=[];n.push(D0(0,34,2,0,0,10,0,2)),n.push(D0(30,40,3.6,0,0,10,0,1)),n.push(k(38,42,-5,5,-5,5,0,1)),n.push(k(41.2,42.2,-3.6,3.6,-3.6,3.6,1,3));const s=[];{s.push(nn(0,66,-104,-6,-3.5,3.5,1.2,0,0)),s.push(k(63,67,-104,-6,-5,5,0,1)),s.push(k(66-2.4,66-1.2,-100,-10,-5.4,5.4,1,3));for(let o=0;o<6;o++){const r=(o+.5)/6*66;s.push(k(r-4,r+4,-102,-8,-4.6,-3.2,0,1))}for(let o=0;o<5;o++){const r=-100+(o+.5)/5*92;s.push(k(3,61,r-2.2,r+2.2,-4.4,-3,0,1))}}return{fan:Zt(e),housing:Zt(t),piston:Zt(n),door:Zt(s)}}function C3(i,e=2.2){const t=new Qt(i),n=e3(t,e),s=t3(t,e);s.translate(0,-2.2*e,0);const a=n3(new Qt(i+17),e);a.computeBoundingBox();const o=a.boundingBox?a.boundingBox.min.z:-9*e;return{base:n,head:s,barrels:a,headY:1.95*e,barrelY:1.6*e,muzzleZ:o}}function ya(i,e,t,n,s,a,o,r=!1){const l=new wi(e,i,Math.abs(n-t),s,1,!0);return l.translate(0,(t+n)/2,0),r&&l.scale(-1,1,1),$o(l.toNonIndexed(),a,o)}function P3(i,e){const t=new Qt(i),n=[],s=[],a=[],o=210,r=44,l=52,c=3.2,u=e+19,f=11.5,h=e+3.2,d=(v,m,p,y=0,M=0)=>{const x=new su(v,m,r,1);return x.rotateX(-Math.PI/2),x.translate(0,p,0),$o(x.toNonIndexed(),y,M)};n.push(ya(l,l,c,-1,r,0,1)),n.push(d(l-8,l,c)),n.push(ya(l-8,u,c,f,r,0,0)),n.push(d(h,u,f)),n.push(ya(h,h,f,f+2,r,0,1)),n.push(d(e,h,f+2,0,1)),n.push(ya(e,e,f+2,f-2.2,r,0,1,!0));const g=26;for(let v=0;v<g;v++){const m=v/g*Math.PI*2,p=t.range(1.5,3);n.push(It(k(-p,p,f,f+t.range(.7,1.9),h+.6,u-t.range(.5,5),0,v%4===0?1:0),0,0,0,0,m,0)),v%2===0&&n.push(It(k(-p*.5,p*.5,f,f+.5,u-6,u-1.5,1,3),0,0,0,0,m,0))}for(let v=0;v<6;v++){const m=v/6*Math.PI*2+.26;n.push(It(nn(-6,6,c-1,f+3.5,u-5,l+1,1.4,0,0),0,0,0,0,m,0)),n.push(It(k(-7.2,7.2,c+1.2,c+3,u-3,l+1.6,0,1),0,0,0,0,m,0)),n.push(It(k(-3.2,3.2,f+3.5,f+7.5,u-3,u+9,0,1),0,0,0,0,m,0)),n.push(It(k(-2.3,2.3,f+7.5,f+8.4,u-1,u+7,1,3),0,0,0,0,m,0)),n.push(It(Hm(0,f+3.5,u-2,0,c+2,l-2,1.2,6),0,0,0,0,m,0))}for(let v=0;v<4;v++){const m=v/4*Math.PI*2+Math.PI/4,p=l-5;n.push(It(nn(-4.4,4.4,c-1,c+26,p-4.4,p+4.4,1,0,0),0,0,0,0,m,0)),n.push(It(k(-5.8,5.8,c+2,c+5,p-5.8,p+5.8,0,1),0,0,0,0,m,0)),n.push(It(k(-3.2,3.2,c+26,c+30,p-3.2,p+3.2,1,3),0,0,0,0,m,0));const y=new ps(3.5,12,8);y.translate(0,c+31.4,p),y.applyMatrix4(new st().makeRotationY(m)),n.push($o(y.toNonIndexed(),1,3))}for(let v=0;v<6;v++){const m=v/6*Math.PI*2+.52,p=l-6;n.push(It(k(-2.6,2.6,c,c+12,p-2.6,p+2.6,0,1),0,0,0,0,m,0)),n.push(It(k(-4.4,4.4,c+12,c+17,p-4.6,p-.4,0,0),0,0,0,0,m,0)),n.push(It(k(-3.6,3.6,c+12.8,c+16.2,p-5,p-4.3,1,3),0,0,0,0,m,0))}s.push(ya(e,e,f-2.2,-o,r,0,1,!0));for(let v=0;v<12;v++){const m=-4-v*(o-16)/12;s.push(ya(e-1.7,e-1.7,m,m-2.6,r,0,0,!0));for(let p=0;p<8;p++){const y=p/8*Math.PI*2+v*.21;s.push(It(k(-1.3,1.3,m-4,m-(o-16)/12+1.2,e-3.6,e-.7,0,1),0,0,0,0,y,0))}}s.push(It(wt(e-.4,2,r,0,1),0,-o,0)),a.push(ya(e-.6,e-.6,-1,-o+6,r,1,3,!0));for(let v=0;v<7;v++){const m=-8-v*24;a.push(ya(e-2,e-2,m,m-3.4,r,1,3,!0))}for(const v of[-17,-38,-66]){const m=new $c(e-.9,r);m.rotateX(-Math.PI/2),m.translate(0,v,0),a.push($o(m.toNonIndexed(),1,3))}for(let v=0;v<4;v++){const m=new $c(e-1.6,r);m.rotateX(-Math.PI/2),m.translate(0,-o*(.45+v*.17),0),a.push($o(m.toNonIndexed(),1,3))}return{hull:Zt(n),dark:Zt(s),glow:Zt(a),depth:o}}const F0=53;function R3(i){return i>F0?0:i>44?4.4:i>30?13:15}function I3(i){const e=new Qt(i),t=[];t.push(nn(-95,95,-112,6,-14,0,2,0,0)),t.push(k(-95,95,-112,6,-18,-14,0,1));for(let n=0;n<9;n++){const s=-108+(n+.5)/9*108;t.push(k(-92,92,s-2.4,s+2.4,-20,-17,0,1))}for(let n=0;n<6;n++){const s=-90+(n+.5)/6*180;t.push(k(s-6,s+6,-110,4,-21,-18,0,0)),t.push(k(s-4,s+4,-60,-52,-22,-20.2,1,3))}for(let n=0;n<14;n++){const s=e.range(-88,88),a=e.range(-106,-6);t.push(k(s-e.range(2,8),s+e.range(2,8),a,a+e.range(3,14),-24,-20,0,1))}return t.push(k(-95,95,6,26,-18,0,0,0)),t.push(k(-95,95,26,28,-20,2,0,1)),Zt(t)}function L3(i,e){const t=[],n=[],s=Math.ceil((e-i)/500),a=82,o=-124,r=-5,l=[gl,400,700,1e3,hr],c=new b,u=(h,d,g)=>(Jn(h,d,g,c),[c.x,c.y,c.z]),f=(h,d,g,v)=>{vl(t,n,h[0],h[1],h[2],d[0],d[1],d[2],g[0],g[1],g[2],v[0],v[1],v[2]),vl(t,n,h[0],h[1],h[2],v[0],v[1],v[2],g[0],g[1],g[2],d[0],d[1],d[2])};for(let h=0;h<s;h++){const d=i+h/s*(e-i),g=i+(h+1)/s*(e-i);f(u(d,-a,o),u(g,-a,o),u(g,a,o),u(d,a,o));for(const v of[-1,1]){f(u(d,v*a,o),u(d,v*a,r),u(g,v*a,r),u(g,v*a,o));let m=v*a,p=r;for(const y of l){const M=v*y,x=y<=gl?r:fr(y)-3;f(u(d,m,p),u(g,m,p),u(g,M,x),u(d,M,x)),m=M,p=x}}}return gf(t,n,0,0)}function D3(i,e,t){const n=[],s=-i/2,a=i/2,o=(c,u,f,h)=>{n.push(c,u,s,f,h,s,f,h,a,c,u,s,f,h,a,c,u,a)};o(-e,0,e,0),o(0,-t,0,t),o(-e*3.2,t*.6,e*3.2,t*.6);const r=new Tt;r.setAttribute("position",new gt(n,3));const l=[];for(let c=0;c<n.length/3;c++)l.push(n[c*3+2]-s,0);return r.setAttribute("uv",new gt(l,2)),r.computeVertexNormals(),r}function F3(i){const e=new uf(i,0).toNonIndexed();if(!e.attributes.uv){const t=e.attributes.position.count;e.setAttribute("uv",new gt(new Float32Array(t*2),2))}return e}function N3(i,e){return new Us(i,e)}const rn=Lt,Yd=2500,$d=11e3,U3=Math.floor(ls/rn),O3=Math.floor(cs/rn)-1,Kd=19,z3=21600,ju=24;function Co(i,e){return(i%e+e)%e}function Zd(i){const e=Math.floor(i),t=i-e,n=t*t*(3-2*t);return(ml(e)*(1-n)+ml(e+1)*n)*2-1}function vf(i){return Zd(i)*.68+Zd(i*2.17+5.5)*.32}const Jd=420,B3=1700;function xf(i){return we((Math.abs(i-Ft)-Jd)/(B3-Jd),0,1)}const Qd=i=>Ba+6*vf(i/900+11.3),jd=i=>-105+8*vf(i/1300+4.7);function Mi(i){return On(Qd(Ft),Qd(i),xf(i))}function ts(i){return On(jd(Ft),jd(i),xf(i))}function Kn(i){return 10*vf(i/1700+21.1)*xf(i)}const ia=4,k3=i=>(Mi(i+ia)-Mi(i-ia))/(2*ia),V3=i=>(ts(i+ia)-ts(i-ia))/(2*ia),G3=i=>(Kn(i+ia)-Kn(i-ia))/(2*ia),ep=new b,eh=new Ct,H3=new Ct,tp=new b,np=new Qn,W3=new st,Da=new st().makeScale(0,0,0);function jt(i,e,t,n=0,s=0,a=0,o=1,r=1,l=1,c=W3){return Jn(i,e,t,ep),Kc(i,eh),(n||s||a)&&(np.set(n,s,a,"YXZ"),eh.multiply(H3.setFromEuler(np))),tp.set(o,r,l),c.compose(ep,eh,tp)}class Sn{constructor(e,t,n,s){this.cap=n,this.free=[],this.hi=0,this.dirty=!1,this.mesh=new hs(e,t,n),this.mesh.name=s,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.instanceMatrix.setUsage(tn);for(let a=n-1;a>=0;a--)this.mesh.setMatrixAt(a,Da),this.free.push(a);this.mesh.instanceMatrix.needsUpdate=!0}alloc(e){const t=this.free.pop();return t===void 0?-1:(this.mesh.setMatrixAt(t,e),t+1>this.hi&&(this.hi=t+1,this.mesh.count=this.hi),this.dirty=!0,t)}set(e,t){this.mesh.setMatrixAt(e,t),this.dirty=!0}release(e){this.mesh.setMatrixAt(e,Da),this.free.push(e),this.dirty=!0}flush(){this.dirty&&(this.mesh.instanceMatrix.needsUpdate=!0,this.dirty=!1)}get used(){return this.cap-this.free.length}}class th extends Sn{constructor(e,t,n,s){const a=e.clone(),o=new Float32Array(n*3),r=new hi(o,3);r.setUsage(tn),a.setAttribute("aParams",r),super(a,t,n,s),this.params=r}setParams(e,t,n,s){this.params.setXYZ(e,t,n,s),this.params.needsUpdate=!0}}const qm=`
#include <common>
attribute vec3 aParams;
varying vec2 vU;
varying vec3 vPar;
void main() {
  vU = uv;
  vPar = aParams;
  #include <begin_vertex>
  #include <project_vertex>
}
`;function q3(){const i={uTime:{value:0},uDamage:{value:0},uColA:{value:new Ve(.55,.8,1)},uColB:{value:new Ve(1,.62,.22)},uStr:{value:1.85}},e=new xt({uniforms:i,vertexShader:qm,fragmentShader:`
      precision highp float;
      uniform float uTime, uStr, uDamage;
      uniform vec3 uColA, uColB;
      varying vec2 vU;
      varying vec3 vPar;
      void main() {
        float d = vU.x;                              // metres along the bar
        float t = fract(d / 12.5);
        float dash = smoothstep(0.02, 0.10, t) * (1.0 - smoothstep(0.52, 0.66, t));
        float run = fract(d * 0.011 - uTime * 0.5);
        float chase = smoothstep(0.9, 1.0, run) * 1.1;
        float pulse = 0.85 + 0.15 * sin(uTime * 2.3 + vPar.x * 6.2831);
        vec3 c = mix(uColA, uColB, vPar.z);
        float a = (0.16 + 0.95 * dash + chase) * pulse * vPar.y;
        gl_FragColor = vec4(c * uStr * a * (1.0 + uDamage * 0.6), 1.0);
      }
    `,transparent:!0,blending:Jt,depthWrite:!1,side:cn});return e.userData.uniforms=i,e}function X3(){const i={uTime:{value:0},uDamage:{value:0},uStr:{value:2.1}},e=new xt({uniforms:i,vertexShader:`
      varying vec3 vLocal;
      void main() {
        vLocal = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime, uStr, uDamage;
      varying vec3 vLocal;
      void main() {
        float d = clamp(-vLocal.y / 190.0, 0.0, 1.0);
        vec3 c = mix(vec3(1.0, 0.46, 0.10), vec3(1.0, 0.84, 0.42), d * d);
        float boil = 0.80 + 0.20 * sin(uTime * 1.7 + vLocal.y * 0.06) * sin(uTime * 2.9 + vLocal.x * 0.3);
        float amt = (0.95 + 1.8 * d) * boil * (1.0 + uDamage * 2.0);
        gl_FragColor = vec4(c * uStr * amt, 1.0);
      }
    `,transparent:!0,blending:Jt,depthWrite:!1,side:cn});return e.userData.uniforms=i,e}function Y3(){const i={uTime:{value:0},uDamage:{value:0},uStr:{value:3}},e=new xt({uniforms:i,vertexShader:qm,fragmentShader:`
      precision highp float;
      uniform float uTime, uStr, uDamage;
      varying vec2 vU;
      varying vec3 vPar;
      float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
      float vn(vec2 p){
        vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(h12(i), h12(i+vec2(1,0)), u.x), mix(h12(i+vec2(0,1)), h12(i+vec2(1,1)), u.x), u.y);
      }
      void main() {
        float kind = vPar.z;
        vec3 col;
        float a;
        if (kind < 0.5) {
          // warning beacon — hard pulsing blob
          float ph = vPar.x * 6.2831;
          float rate = 1.1 + vPar.y * 2.4;
          float p = pow(0.5 + 0.5 * sin(uTime * rate + ph), 3.0);
          col = mix(vec3(1.0, 0.35, 0.13), vec3(1.0, 0.86, 0.45), vPar.y);
          a = 0.85 + 2.1 * p;
        } else {
          // vent heat shimmer — soft, drifting
          vec2 uv = vU;
          float edge = smoothstep(0.0, 0.34, uv.x) * smoothstep(1.0, 0.66, uv.x)
                     * smoothstep(0.0, 0.22, uv.y) * smoothstep(1.0, 0.72, uv.y);
          float n = vn(vec2(uv.x * 5.0, uv.y * 3.0 - uTime * 0.9 - vPar.x * 20.0));
          float n2 = vn(vec2(uv.x * 11.0 + 3.0, uv.y * 7.0 - uTime * 1.7));
          float h = edge * (0.45 + 0.75 * n * n2 * 3.0);
          col = mix(vec3(1.0, 0.42, 0.10), vec3(0.55, 0.82, 1.0), step(0.62, vPar.y));
          a = h * (0.75 + 0.25 * sin(uTime * 1.5 + vPar.x * 9.0));
        }
        gl_FragColor = vec4(col * uStr * a * (1.0 + uDamage), 1.0);
      }
    `,transparent:!0,blending:Jt,depthWrite:!1,side:cn});return e.userData.uniforms=i,e}function $3(i={}){const e=(i.seed??20770)>>>0,t=new Gn;t.name="trench",t.matrixAutoUpdate=!1;const n=xe=>{const U=Kb(xe);return U.emissive.r+U.emissive.g+U.emissive.b>0&&(U.emissiveIntensity=0),U},s=n({color:7173244,roughness:.8,metalness:.4,panelScale:.115,grime:.7,emissive:16757850,emissiveStrength:2.6,windowDensity:.4}),a=n({color:4936282,roughness:.62,metalness:.44,panelScale:.24,grime:.82,emissive:16760434,emissiveStrength:3.2,windowDensity:.5}),o=n({color:6054763,roughness:.84,metalness:.38,panelScale:.055,grime:.62,emissive:13163775,emissiveStrength:2.2,windowDensity:.28}),r=n({color:8291724,roughness:.58,metalness:.5,panelScale:.22,grime:.7,emissive:16751150,emissiveStrength:4.2,windowDensity:.5}),l=q3(),c=Y3(),u=X3(),f=[s,a,o,r,l,c,u],h=p3(e+11),d=d3(e+733),g=y3(e+29),v=Xd(e+401,-rn/2,Kd),m=Xd(e+402,rn/2,Kd),p=S3(e+53),y=w3(e+71),M=T3(e+97),x=E3(e+131),w=A3(),T=C3(e+181,2.3),E=[],_=xe=>(E.push(xe),t.add(xe.mesh),xe),A=Math.ceil((Yd+$d)/rn)+3,R=h.map((xe,U)=>_(new Sn(xe.geo,s,34,"wall"+U))),I=_(new Sn(d.geo,s,40,"wallApproach")),F=g.map((xe,U)=>_(new Sn(xe.geo,s,26,"floor"+U))),H=[_(new Sn(v.geo,s,2,"floorPortA")),_(new Sn(m.geo,s,2,"floorPortB"))],X=p.near.map((xe,U)=>_(new Sn(xe,o,56,"deckN"+U))),O=p.mid.map((xe,U)=>_(new Sn(xe,o,40,"deckM"+U))),V=p.far.map((xe,U)=>_(new Sn(xe,o,24,"deckF"+U))),z=y.map((xe,U)=>_(new Sn(xe,o,200,"greeb"+U))),re=M.map((xe,U)=>_(new Sn(xe,a,U===3?150:14,"span"+U))),ue=_(new Sn(x.bulkhead,a,16,"bulkhead")),Y=_(new Sn(x.cables,a,22,"cables")),ee=_(new Sn(x.pylon,a,20,"pylon")),le=_(new Sn(x.bracket,a,22,"bracket")),Ce=_(new Sn(x.flood,a,26,"flood")),Ue=_(new Sn(w.housing,a,12,"fanHousing")),Ie=_(new Sn(w.fan,a,12,"fan")),$=_(new Sn(w.piston,a,12,"piston")),ie=_(new Sn(w.door,a,16,"door")),de=_(new Sn(T.base,a,26,"turretBase")),De=_(new Sn(T.head,a,26,"turretHead")),Ae=_(new Sn(T.barrels,a,26,"turretBarrels"));for(const xe of[de,De,Ae])xe.mesh.count=xe.cap;const K=new th(D3(rn,.55,.55),l,A*4+8,"strips");E.push(K),t.add(K.mesh);const ae=new th(F3(1.05),c,A*8+40,"beacons");E.push(ae),t.add(ae.mesh);const D=new th(N3(1,1),c,A*4+8,"vents");E.push(D),t.add(D.mesh);const B=L3(ls-200,cs+200),Q=new ft(B,o);Q.frustumCulled=!1,Q.name="trenchFiller",t.add(Q);const te=I3(e+211),ve=new hs(te,a,2);ve.frustumCulled=!1;{const xe=new st;jt(cs-60,Kn(cs-60),ts(cs-60),0,Math.PI,0,1,1,1,xe),ve.setMatrixAt(0,xe),jt(ls+60,Kn(ls+60),ts(ls+60),0,0,0,1,1,1,xe),ve.setMatrixAt(1,xe),ve.instanceMatrix.needsUpdate=!0}t.add(ve);const pe=P3(e+313,mb),he=new Gn;he.name="exhaustPort";const Ee=new ft(pe.hull,r),Be=new ft(pe.dark,a),$e=new ft(pe.glow,u);Ee.frustumCulled=!1,Be.frustumCulled=!1,$e.frustumCulled=!1,he.add(Ee,Be,$e);{const xe=ts(Ft);Jn(Ft,0,xe,he.position),Kc(Ft,he.quaternion)}t.add(he);const ct=Jn(Ft,0,ts(Ft)+13.5,new b),Oe=new Gn;Oe.name="trenchTurrets",t.add(Oe);const P=[];for(let xe=0;xe<24;xe++){const U=new In,Z=new In,ye=new In;Z.position.y=T.headY,ye.position.y=T.barrelY,Z.add(ye),U.add(Z),Oe.add(U);const ut={root:U,head:Z,barrels:ye,muzzle:new b,s:0,lateral:0,up:0,side:0,alive:!1,cooldown:0,slot:xe,inUse:!1,destroy(){this.alive=!1}};P.push(ut)}const S=[],L=P.map((xe,U)=>U).reverse(),W=h.length,ne=g.length,Te=W*W*ne,Pe=(()=>{const xe=new Array(Te);for(let Z=0;Z<Te;Z++)xe[Z]=Z;const U=new Qt(e+9001);for(let Z=Te-1;Z>0;Z--){const ye=U.int(0,Z),ut=xe[Z];xe[Z]=xe[ye],xe[ye]=ut}return xe})(),ce=137,fe=new Map;let Le=0;function je(xe,U){return new Qt((Math.imul(xe+4096,2654435761)^Math.imul(U+1,2246822507)^e)>>>0||1)}function qe(xe){const U=je(xe,0),Z=xe*rn,ye=Z+rn/2,ut=Kn(ye),Ut=Mi(ye),xn=ts(ye),Bn=G3(ye),kn=k3(ye),zi=V3(ye),ai=ye>z3&&ye<Ft+900,oi=ye>Ft-800&&ye<Ft+330||Math.abs(ye)<340,la=ye>Ft-1800&&ye<Ft+400,$n=Pe[Co(xe*ce,Te)];let ks=$n%W,Bi=Math.floor($n/W)%W;const Xi=Math.floor($n/(W*W))%ne,un={idx:xe,allocs:[],wallL:h[ks],wallR:h[Bi],floor:g[Xi],blocks:[],anims:[],turret:null},Cn=(Se,ge)=>{const be=Se.alloc(ge);return be>=0&&un.allocs.push({p:Se,i:be}),be},Vs=-(Bn+kn),C=Math.PI-(Bn-kn);let q=R[ks],J=R[Bi];ai&&(Co(xe,2)===0?(q=I,un.wallL=d):(J=I,un.wallR=d)),Cn(J,jt(ye,ut+Ut,0,0,Vs,0)),Cn(q,jt(ye,ut-Ut,0,0,C,0));let se=F[Xi];xe===Math.floor(Ft/rn)-1?(se=H[0],un.floor=v):xe===Math.floor(Ft/rn)&&(se=H[1],un.floor=m),Cn(se,jt(ye,ut,xn,zi,-Bn,0));for(const Se of[-1,1]){const ge=Se>0?0:Math.PI,be=X[U.int(0,X.length-1)];if(Cn(be,jt(ye,0,0,0,ge,0)),Co(xe,2)===0){const ze=O[U.int(0,O.length-1)];Cn(ze,jt(Z+rn,0,0,0,ge,0))}if(Co(xe,4)===0){const ze=V[U.int(0,V.length-1)];Cn(ze,jt(Z+rn*2,0,0,0,ge,0))}const Re=U.int(7,11);for(let ze=0;ze<Re;ze++){const nt=Math.pow(U.next(),.6),Ze=Se*On(gl+25,hr-40,nt),Ye=On(1,4.6,nt)*U.range(.75,1.4),yt=z[U.int(0,z.length-1)];Cn(yt,jt(Z+U.range(6,rn-6),Ze,fr(Ze),0,U.range(0,Math.PI*2),0,Ye,Ye,Ye))}}if(U.bool(.46)&&!oi){const Se=re[U.int(0,2)],ge=U.bool(.45)?U.range(-28,-16):U.range(-86,-62);Cn(Se,jt(Z+U.range(30,rn-30),ut,ge,0,U.range(-.05,.05),0))}if(!oi){const Se=U.int(1,3);for(let ge=0;ge<Se;ge++){const be=Z+(ge+.5)/Se*rn+U.range(-24,24);Cn(re[3],jt(be,Kn(be),U.range(-15,-7),0,0,0))}}const oe=oi?0:U.int(0,3);for(let Se=0;Se<oe;Se++){const ge=Z+U.range(18,rn-18),be=Kn(ge),Re=Mi(ge),ze=ts(ge),nt=U.next();if(nt<.22&&!la){const Ze=U.bool()?1:-1;Cn(ue,jt(ge,be+Ze*Re,0,0,Ze>0?Math.PI:0,0)),un.blocks.push({s0:ge-9,s1:ge+9,side:Ze,depth:78})}else if(nt<.46)Cn(Y,jt(ge,be+U.range(-Re+16,Re-16),0,0,U.range(0,3),0));else if(nt<.62)Cn(ee,jt(ge,be+U.sign()*U.range(26,Re-12),ze,0,U.range(0,3),0)),un.blocks.push({s0:ge-10,s1:ge+10,side:0,depth:0});else if(nt<.82&&Le<ju){const Ze=U.bool()?1:-1,Ye=U.range(-88,-30),yt=Ze>0?-Math.PI/2:Math.PI/2;Cn(Ue,jt(ge,be+Ze*(Re-3),Ye,0,yt,0));const Ht=Ie.alloc(jt(ge,be+Ze*(Re-5),Ye,0,yt,0));Ht>=0&&(un.allocs.push({p:Ie,i:Ht}),un.anims.push({kind:0,pool:Ie,slot:Ht,s:ge,side:Ze,up:Ye,phase:U.range(0,6.28),rate:U.range(1.2,3.4)*U.sign(),reach:20,span:20}),Le++)}else if(Le<ju){const Ze=U.bool()?1:-1,Ye=U.range(-92,-26),yt=$.alloc(jt(ge,be+Ze*Re,Ye,0,Ze>0?Math.PI:0,0));yt>=0&&(un.allocs.push({p:$,i:yt}),un.anims.push({kind:1,pool:$,slot:yt,s:ge,side:Ze,up:Ye,phase:U.range(0,6.28),rate:U.range(.35,.75),reach:0,span:6}),Le++)}}if(U.bool(.11)&&Le<ju-1&&!la){const Se=Z+U.range(40,rn-40),ge=Kn(Se),be=Mi(Se);for(const Re of[-1,1]){const ze=ie.alloc(jt(Se,ge+Re*be,0,0,Re>0?Math.PI:0,0));ze>=0&&(un.allocs.push({p:ie,i:ze}),un.anims.push({kind:2,pool:ie,slot:ze,s:Se,side:Re,up:0,phase:xe*.7%6.283,rate:.16,reach:0,span:5}),Le++)}}if(ai){for(const Se of[-1,1])if(Co(xe,2)===(Se>0?0:1)){const ge=Z+U.range(40,rn-40),be=Kn(ge),Re=Mi(ge);Cn(Ce,jt(ge,be+Se*(Re+26),.2,0,0,Se*.16))}for(let Se=0;Se<4;Se++){const ge=Z+(Se+.5)/4*rn,be=Kn(ge),Re=Mi(ge);for(const ze of[-1,1]){const nt=ae.alloc(jt(ge,be+ze*(Re-2),-6,0,0,0,2.2,2.2,2.2));nt>=0&&(ae.setParams(nt,(Se*.25+xe*.13)%1,.15,0),un.allocs.push({p:ae,i:nt}))}}}if(U.bool(.3)){const Se=L.pop();if(Se!==void 0){const ge=P[Se],be=Z+U.range(30,rn-30),Re=Kn(be),ze=Mi(be),nt=Co(xe,3);let Ze,Ye,yt;if(nt===2){Ze=0;const Ht=U.bool()?1:-1;Ye=Re+Ht*(ze+U.range(28,84)),yt=.2}else Ze=nt===0?-1:1,yt=U.range(-74,-24),Ye=Re+Ze*(ze-10),Cn(le,jt(be,Re+Ze*ze,yt,0,Ze>0?Math.PI:0,0));Jn(be,Ye,yt,ge.root.position),Kc(be,ge.root.quaternion),ge.root.scale.set(1,1,1),ge.s=be,ge.lateral=Ye,ge.up=yt,ge.side=Ze,ge.alive=!0,ge.cooldown=U.range(.5,2.5),ge.inUse=!0,ge.head.rotation.set(0,0,0),ge.barrels.rotation.set(0,0,0),un.turret=ge}}for(const ge of[-1,1]){const be=ge>0?Vs:C,Re=K.alloc(jt(ye,ut+ge*(Ut+1),1.9,0,be,0));Re>=0&&(K.setParams(Re,xe*.37%1,1,0),un.allocs.push({p:K,i:Re}));const ze=K.alloc(jt(ye,ut+ge*(Ut-14),xn+2.4,zi,be-(ge>0?0:Math.PI),0));ze>=0&&(K.setParams(ze,(xe*.61+.4)%1,.62,1),un.allocs.push({p:K,i:ze}))}{const Se=U.int(3,6);for(let be=0;be<Se;be++){const Re=Z+U.range(4,rn-4),ze=Kn(Re),nt=Mi(Re),Ze=U.bool()?1:-1,Ye=U.next(),yt=Ye<.35?U.range(2.4,4):U.range(-96,-12),Ht=ze+Ze*(nt-(Ye<.35?-3:U.range(1,6))),Xt=ae.alloc(jt(Re,Ht,yt,0,0,0,U.range(1,2),U.range(1,2),U.range(1,2)));Xt>=0&&(ae.setParams(Xt,U.next(),U.next(),0),un.allocs.push({p:ae,i:Xt}))}const ge=U.int(1,3);for(let be=0;be<ge;be++){const Re=Z+U.range(20,rn-20),ze=Kn(Re),nt=Mi(Re),Ze=U.bool()?1:-1,Ye=U.range(-98,-20),yt=U.range(9,22),Ht=U.range(7,20),Xt=D.alloc(jt(Re,ze+Ze*(nt-2.2),Ye,0,Ze>0?-Math.PI/2:Math.PI/2,0,yt,Ht,1));Xt>=0&&(D.setParams(Xt,U.next(),U.next(),1),un.allocs.push({p:D,i:Xt}))}}return un}function Ge(xe){for(const U of xe.allocs)U.p.release(U.i);if(xe.allocs.length=0,Le-=xe.anims.length,xe.anims.length=0,xe.turret){const U=xe.turret;U.alive=!1,U.inUse=!1,U.root.position.set(0,-1e6,0),de.set(U.slot,Da),De.set(U.slot,Da),Ae.set(U.slot,Da),L.push(U.slot),xe.turret=null}}function at(){S.length=0;for(const xe of P)xe.inUse&&S.push(xe)}let ot=1<<30,_t=-1073741824,G=0;const Ne=new st,me=new st,ke=new b;function Xe(xe){const U=Math.max(U3,Math.floor((xe-Yd)/rn)),Z=Math.min(O3,Math.floor((xe+$d)/rn));if(!(U===ot&&Z===_t)){ot=U,_t=Z;for(const[ye,ut]of fe)(ye<U||ye>Z)&&(Ge(ut),fe.delete(ye));for(let ye=U;ye<=Z;ye++)fe.has(ye)||fe.set(ye,qe(ye));at()}}function Me(xe){for(const U of fe.values())for(const Z of U.anims){const ye=Kn(Z.s),ut=Mi(Z.s);if(Z.kind===0){const Ut=Z.side>0?-Math.PI/2:Math.PI/2;Z.pool.set(Z.slot,jt(Z.s,ye+Z.side*(ut-5),Z.up,0,Ut,xe*Z.rate+Z.phase))}else if(Z.kind===1){const Ut=.5-.5*Math.cos(xe*Z.rate*2+Z.phase);Z.reach=44*Ut,Z.pool.set(Z.slot,jt(Z.s,ye+Z.side*(ut+(1-Ut)*30),Z.up,0,Z.side>0?Math.PI:0,0))}else{const Ut=(xe*Z.rate+Z.phase/6.283)%1,xn=Dt(.06,.34,Ut)*(1-Dt(.62,.9,Ut));Z.reach=68*xn,Z.pool.set(Z.slot,jt(Z.s,ye+Z.side*(ut+(1-xn)*62),0,0,Z.side>0?Math.PI:0,0))}}}function et(){if(S.length){Oe.updateMatrixWorld(!0),me.copy(t.matrixWorld).invert();for(const xe of P)if(xe.inUse){if(!xe.alive){de.set(xe.slot,Da),De.set(xe.slot,Da),Ae.set(xe.slot,Da);continue}Ne.multiplyMatrices(me,xe.root.matrixWorld),de.set(xe.slot,Ne),Ne.multiplyMatrices(me,xe.head.matrixWorld),De.set(xe.slot,Ne),Ne.multiplyMatrices(me,xe.barrels.matrixWorld),Ae.set(xe.slot,Ne),ke.set(0,0,T.muzzleZ).applyMatrix4(xe.barrels.matrixWorld),xe.muzzle.copy(ke)}}}function Qe(xe,U,Z,ye){const ut=Kn(xe),Ut=Mi(xe),xn=ts(xe),Bn=Math.floor(xe/rn),kn=fe.get(Bn),zi=we((xe-Bn*rn)/rn,0,.999999);let ai=3,oi=3,la=2;if(kn){ai=kn.wallR.prot(zi,Z),oi=kn.wallL.prot(1-zi,Z),la=kn.floor.rise(zi,U-ut);for(const J of kn.blocks)xe<J.s0||xe>J.s1||J.depth<=0||(J.side>0?ai=Math.max(ai,J.depth):J.side<0&&(oi=Math.max(oi,J.depth)));for(const J of kn.anims)J.reach<=.5||Math.abs(xe-J.s)>J.span+ye||(J.side>0?ai=Math.max(ai,J.reach):oi=Math.max(oi,J.reach))}let $n=U,ks=Z,Bi=!1,Xi=0,un=0;const Cn=ut+Ut-ai-ye,Vs=ut-Ut+oi+ye;if(Cn>Vs)$n>Cn?($n=Cn,Bi=!0,Xi=-1):$n<Vs&&($n=Vs,Bi=!0,Xi=1);else{const J=(Cn+Vs)*.5;Math.abs($n-J)>.001&&(Xi=$n>J?-1:1),$n=J,Bi=!0}const C=xn+la+ye;ks<C&&(ks=C,Bi=!0,un=1);const q=new b;return Bi&&(un>0&&Xi===0?gn(xe,q):(gn(xe,q).multiplyScalar(un),q.z+=Xi,q.lengthSq()<1e-6&&q.set(0,0,Xi||1),q.normalize())),{lateral:$n,up:ks,hit:Bi,normal:q}}let sn=!1;function qt(xe,U,Z,ye){sn||(t.updateMatrix(),t.updateMatrixWorld(!0),sn=!0),Xe(Z),Me(U),et();for(const ut of E)ut.flush();Zb(f,U,G)}function gi(xe){G=we(xe,0,1)}function vi(){for(const xe of E)xe.mesh.geometry.dispose();for(const xe of f)xe.dispose();te.dispose(),B.dispose(),pe.hull.dispose(),pe.dark.dispose(),pe.glow.dispose(),t.removeFromParent()}return Xe(0),{group:t,turrets:S,materials:f,update:qt,collide:Qe,port:he,portMouth:ct,setDamage:gi,dispose:vi}}const K3=`
// Direction -> (face index, face uv in [-1,1]).  Stable, pole-free.
vec3 cubeUV(vec3 d){
  vec3 a = abs(d);
  if(a.x >= a.y && a.x >= a.z){
    return vec3(d.z / a.x, d.y / a.x, d.x > 0.0 ? 0.0 : 1.0);
  } else if(a.y >= a.z){
    return vec3(d.x / a.y, d.z / a.y, d.y > 0.0 ? 2.0 : 3.0);
  }
  return vec3(d.x / a.z, d.y / a.z, d.z > 0.0 ? 4.0 : 5.0);
}

// One level of jittered rectangular plating.
// returns: x = plate tone (0..1), y = edge mask (1 at the seam), z = plate id
vec3 plateLevel(vec2 uv, float seed, float lineW){
  vec2 id = floor(uv);
  vec2 f = fract(uv);
  float h = hash12(id + seed);
  // split some cells into halves so plates are not a uniform checker
  float split = hash12(id * 1.31 + seed + 5.7);
  if(split > 0.66){
    if(split > 0.83){ f.x = fract(f.x * 2.0); id.x += 77.0 * floor(fract(uv.x) * 2.0); }
    else            { f.y = fract(f.y * 2.0); id.y += 51.0 * floor(fract(uv.y) * 2.0); }
    h = hash12(id * 2.17 + seed + 1.9);
  }
  vec2 e = min(f, 1.0 - f);
  float d = min(e.x, e.y);
  float aa = max(fwidth(d), 1e-5);
  float edge = 1.0 - smoothstep(lineW, lineW + aa * 1.4, d);
  return vec3(h, edge, hash12(id * 3.71 + seed));
}

// Level of detail fade: 1 when a cell of this scale is comfortably bigger
// than a pixel, 0 once it aliases away.  Kills shimmer at long range.
float lodFade(vec2 uv){
  float w = max(length(fwidth(uv)), 1e-6);
  return 1.0 - smoothstep(0.09, 0.40, w);
}
`;function ba(i={}){const e=i.seed??7,t=i.radius??5e4,n=new Ml({color:new Ve(i.color??11713217),roughness:i.roughness??.78,metalness:i.metalness??.14,emissive:new Ve(0),emissiveIntensity:1}),s={uTime:{value:0},uDamage:{value:0},uCamPos:{value:new b},uSeed:{value:e},uRadius:{value:t},uDetail:{value:i.detailScale??1},uWindow:{value:i.windowStrength??1},uNightFloor:{value:.06},uEmisTint:{value:new Ve(i.emissiveTint??16758632)},uEmisStr:{value:i.emissiveStrength??1},uFade:{value:new _e(i.instanceFade?.[0]??0,i.instanceFade?.[1]??0)}};n.userData.uniforms=s;const a=i.projection??"cube";return a==="local"&&(n.defines={...n.defines||{},DS_LOCAL_UV:""}),a==="uv"&&(n.defines={...n.defines||{},DS_MESH_UV:""}),n.onBeforeCompile=o=>{Object.assign(o.uniforms,s),o.vertexShader=o.vertexShader.replace("#include <common>",`
        #include <common>
        attribute float aRegion;
        attribute float aEmis;
        attribute float aMat;
        varying float vRegion;
        varying float vEmis;
        varying float vMat;
        varying vec3 vWPos;
        varying vec3 vOPos;
        varying vec2 vDsUv;
        varying vec3 vDsN;
        uniform vec2 uFade;
        uniform vec3 uCamPos;
      `).replace("#include <begin_vertex>",`
        #include <begin_vertex>
        vRegion = aRegion;
        vEmis = aEmis;
        vMat = aMat;
        #ifdef USE_INSTANCING
        if(uFade.y > 0.0){
          // distance-based scale ramp: a streamed greeble grows out of the
          // hull instead of popping in when its cell enters range.
          vec3 io = (modelMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0)).xyz;
          float dd = length(io - uCamPos);
          float sFade = 1.0 - smoothstep(uFade.x, uFade.y, dd);
          sFade = sFade * sFade * (3.0 - 2.0 * sFade);
          transformed *= sFade;
        }
        #endif
        vOPos = position;
        vDsUv = uv;
        vDsN = objectNormal;
      `).replace("#include <project_vertex>",`
        #include <project_vertex>
        {
          vec4 dsWp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            dsWp = instanceMatrix * dsWp;
          #endif
          vWPos = (modelMatrix * dsWp).xyz;
        }
      `),o.fragmentShader=o.fragmentShader.replace("#include <common>",`
        #include <common>
        varying float vRegion;
        varying float vEmis;
        varying float vMat;
        varying vec3 vWPos;
        varying vec3 vOPos;
        varying vec2 vDsUv;
        varying vec3 vDsN;
        uniform float uTime, uDamage, uSeed, uRadius, uDetail, uWindow, uNightFloor, uEmisStr;
        uniform vec3 uCamPos, uEmisTint;
        ${Mn}
        ${zn}
        ${K3}

        // Which 2D space the plating lives in, for this material.
        vec2 dsPanelUV(vec3 nrm){
        #if defined( DS_LOCAL_UV )
          vec3 a = abs(nrm); a /= max(a.x + a.y + a.z, 1e-4);
          vec3 lp = vOPos * (1.0 / 24.0) * uDetail;
          vec2 uvp = (a.y >= a.x && a.y >= a.z) ? lp.xz : ((a.x >= a.z) ? lp.zy : lp.xy);
          return uvp;
        #elif defined( DS_MESH_UV )
          return vDsUv * uDetail;
        #else
          vec3 cu = cubeUV(normalize(vOPos));
          // each structural region gets its own plate module, so neighbouring
          // sectors of the hull are visibly built to different standards
          float ps = mix(0.55, 2.10, vRegion);
          return cu.xy * 9.0 * ps * uDetail + vec2(cu.z * 17.0, cu.z * 31.0);
        #endif
        }

        // Bump height field, in metres, evaluated in world space.
        // Everything the normal perturbation and the albedo agree on lives here.
        float dsHeight(vec3 wp, vec2 puv, float dsc){
          // metres of surface per pixel — every term below is faded out once it
          // would be finer than a pixel, otherwise the perturbed normal turns
          // into per-pixel noise and the whole hull sparkles.
          float mpp = max(length(fwidth(wp)), 1e-3);
          float h = 0.0;
          // continental plating swells
          h += 26.0 * fbm3(wp * (0.9 / uRadius) * 6.0 + uSeed, 4, 2.1, 0.55)
               * (1.0 - smoothstep(300.0, 1400.0, mpp));
          // mid machinery relief
          h += 17.0 * fbm3(wp * (0.9 / uRadius) * 42.0 + uSeed * 3.1, 3, 2.3, 0.5)
               * (1.0 - smoothstep(60.0, 300.0, mpp));
          // meso relief: ~280 m ridges and pits, the scale you read at 1-20 km
          h += 5.0 * fbm3(wp * (0.9 / uRadius) * 190.0 + uSeed * 5.3, 3, 2.2, 0.5)
               * (1.0 - smoothstep(14.0, 70.0, mpp));
          // plate steps: each plate sits a few metres proud of its neighbours
          vec3 p1 = plateLevel(puv * 1.0, uSeed, 0.012);
          vec3 p2 = plateLevel(puv * 4.0, uSeed + 11.0, 0.016);
          vec3 p3 = plateLevel(puv * 16.0, uSeed + 23.0, 0.022);
          vec3 p4 = plateLevel(puv * 64.0, uSeed + 41.0, 0.026);
          h += (p1.x - 0.5) * 9.0 * lodFade(puv * 1.0);
          h += (p2.x - 0.5) * 3.4 * lodFade(puv * 4.0);
          h += (p3.x - 0.5) * 1.1 * lodFade(puv * 16.0);
          // seams cut down
          h -= p1.y * 6.0 * lodFade(puv * 1.0);
          h -= p2.y * 2.2 * lodFade(puv * 4.0);
          h -= p3.y * 0.8 * lodFade(puv * 16.0);
          h += (p4.x - 0.5) * 0.55 * lodFade(puv * 64.0);
          h -= p4.y * 0.45 * lodFade(puv * 64.0);
          // fine grain so raking light always has something to catch
          h += 2.2 * (worley3(wp * (0.9 / uRadius) * 900.0 * dsc) - 0.5)
               * (1.0 - smoothstep(4.0, 22.0, mpp));
          return h;
        }
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        {
          vec3 wp = vWPos;
          vec3 dir = normalize(vWPos);
          vec2 puv = dsPanelUV(normalize(vDsN));

          vec3 base = diffuseColor.rgb;

          // --- macro structural regions: broad tonal zones -------------------
          float regTone = 0.88 + 0.22 * vRegion;
          float cont = fbm3(dir * 2.3 + uSeed * 0.7, 4, 2.15, 0.55);
          float cont2 = fbm3(dir * 6.1 + uSeed * 1.9, 3, 2.4, 0.5);
          base *= regTone * (0.74 + 0.36 * cont + 0.14 * cont2);

          // --- latitudinal mechanical bands ---------------------------------
          float lat = dir.y;
          float bandF = sin(lat * 46.0 + fbm3(dir * 3.0, 3, 2.0, 0.5) * 4.0);
          float band = smoothstep(0.86, 0.995, abs(bandF));
          base *= mix(1.0, 0.66, band * 0.8);
          // a handful of heavy structural rings
          float ring = smoothstep(0.985, 1.0, abs(sin(lat * 9.0 + 0.6)));
          base *= mix(1.0, 0.55, ring);

          // --- multi-scale panel tessellation -------------------------------
          vec3 L0 = plateLevel(puv * 1.0, uSeed, 0.010);
          vec3 L1 = plateLevel(puv * 4.0, uSeed + 11.0, 0.014);
          vec3 L2 = plateLevel(puv * 16.0, uSeed + 23.0, 0.018);
          vec3 L3 = plateLevel(puv * 64.0, uSeed + 41.0, 0.024);
          vec3 L4 = plateLevel(puv * 256.0, uSeed + 67.0, 0.030);
          float f0 = lodFade(puv * 1.0), f1 = lodFade(puv * 4.0);
          float f2 = lodFade(puv * 16.0), f3 = lodFade(puv * 64.0);
          float f4 = lodFade(puv * 256.0);

          float tone = 1.0;
          tone *= mix(1.0, 0.78 + 0.36 * L0.x, f0);
          tone *= mix(1.0, 0.84 + 0.26 * L1.x, f1);
          tone *= mix(1.0, 0.89 + 0.19 * L2.x, f2);
          tone *= mix(1.0, 0.92 + 0.14 * L3.x, f3);
          tone *= mix(1.0, 0.94 + 0.11 * L4.x, f4);
          base *= tone;

          float seam = max(max(max(L0.y * f0 * 1.0, L1.y * f1 * 0.85),
                               max(L2.y * f2 * 0.7, L3.y * f3 * 0.55)),
                           L4.y * f4 * 0.45);
          base *= (1.0 - 0.62 * seam);

          // --- long thin grooves cut across the plating ---------------------
          vec2 sc = puv * 0.111;
          float scr = smoothstep(0.962, 1.0, abs(sin(sc.y * 96.0 + fbm2(sc * 5.0, 3, 2.0, 0.5) * 9.0)));
          scr *= step(0.55, hash12(floor(sc * vec2(6.0, 1.0))));
          base *= mix(1.0, 0.42, scr * f1 * lodFade(puv * 8.0));

          // --- material class + grime ---------------------------------------
          if(vMat > 2.5)      base = mix(base, vec3(0.30,0.33,0.36), 0.55);
          else if(vMat > 1.5) base = mix(base, vec3(0.42,0.44,0.47), 0.5);
          else if(vMat > 0.5) base = mix(base, vec3(0.58,0.60,0.63), 0.4);

          float grime = fbm3(wp * vec3(0.000085, 0.00013, 0.000085) * uDetail, 4, 2.2, 0.55);
          base *= mix(0.87, 1.05, grime);

          // faint warm/cool duotone so the plating is not flat grey
          base *= mix(vec3(0.97,0.98,1.03), vec3(1.05,1.00,0.93), cont);

          diffuseColor.rgb = clamp(base, vec3(0.0), vec3(0.88));
        }
      `).replace("#include <normal_fragment_begin>",`
        #include <normal_fragment_begin>
        {
          vec2 puv = dsPanelUV(normalize(vDsN));
          float dsc = uDetail;
          float h = dsHeight(vWPos, puv, dsc);
          vec3 vp = -vViewPosition;
          vec3 dpdx = dFdx(vp), dpdy = dFdy(vp);
          float dhdx = dFdx(h), dhdy = dFdy(h);
          vec3 r1 = cross(dpdy, normal);
          vec3 r2 = cross(normal, dpdx);
          float det = dot(dpdx, r1);
          if(abs(det) > 1e-12){
            vec3 grad = sign(det) * (dhdx * r1 + dhdy * r2);
            normal = normalize(abs(det) * normal - grad);
          }
        }
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        {
          vec2 puv = dsPanelUV(normalize(vDsN));
          vec3 R0 = plateLevel(puv * 4.0, uSeed + 11.0, 0.014);
          vec3 R1 = plateLevel(puv * 16.0, uSeed + 23.0, 0.018);
          float rv = fbm3(vWPos * (1.0/uRadius) * 60.0 + uSeed, 3, 2.2, 0.55);
          roughnessFactor = clamp(
            roughnessFactor
            * (0.80 + 0.36 * rv)
            + 0.16 * (R0.z - 0.5) * lodFade(puv * 4.0)
            + 0.10 * (R1.z - 0.5) * lodFade(puv * 16.0),
            0.16, 1.0);
          if(vMat > 0.5 && vMat < 2.5) roughnessFactor *= 0.72;
        }
      `).replace("#include <lights_fragment_end>",`
        #include <lights_fragment_end>
        {
          vec2 puv = dsPanelUV(normalize(vDsN));

          // How lit is this fragment by the key light?  Divide the reflected
          // diffuse back out by the albedo so this is (N.L * lightIntensity)
          // and does not depend on how dark this particular plate happens to
          // be — otherwise dim plating reads as "night" in full sunlight.
          float dcl = max(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
          float sunlit = dot(reflectedLight.directDiffuse, vec3(0.2126, 0.7152, 0.0722)) / (dcl * 0.3183);
          float night = 1.0 - smoothstep(0.02, 0.24, sunlit);

          // ---- window banks: a dense grid of tiny lit cells -----------------
          vec2 wuv = puv * 210.0;
          vec2 wid = floor(wuv);
          vec2 wf = fract(wuv);
          float wr = hash12(wid + uSeed * 2.0);
          // clustered: windows only live on some plates, in some bands
          vec3 P = plateLevel(puv * 16.0, uSeed + 23.0, 0.018);
          // each hash dissolves into its own mean as it shrinks past a pixel,
          // so the window field becomes a smooth glow instead of noise
          float aF = min(lodFade(wuv / 7.0), lodFade(puv * 16.0));
          float allow = mix(0.42, step(0.44, P.z) * step(0.30, hash12(floor(wuv / 7.0) + uSeed)), aF);
          float shape = step(0.18, wf.x) * step(wf.x, 0.62) * step(0.30, wf.y) * step(wf.y, 0.70);
          float lit = step(0.62, wr) * allow * shape;
          float wfade = lodFade(wuv * 0.35);
          // Everything driven by the per-window hash — the flicker and the
          // warm/cool tint as well as the on/off — has to dissolve into its
          // mean at range, or the night side turns into coloured confetti.
          float flick = mix(0.90, 0.80 + 0.20 * sin(uTime * (1.3 + wr * 5.0) + wr * 60.0), wfade);
          vec3 wcol = mix(vec3(0.88, 0.79, 0.63),
                          mix(vec3(1.00, 0.80, 0.46), vec3(0.55, 0.78, 1.00), step(0.74, wr)), wfade);
          float wcell = mix(0.055 * allow, lit, wfade);
          float wamp = uWindow * wcell * flick * (0.05 + 1.95 * night);
          totalEmissiveRadiance += wcol * wamp * 0.95;

          // ---- larger strip / hangar glows (survive at long range) ---------
          float sF = lodFade(puv * 4.0);
          float strip = mix(0.10, step(0.90, hash12(floor(puv * 4.0) + uSeed * 5.0)), sF);
          float sband = mix(0.10, smoothstep(0.42, 0.5, abs(fract(puv.y * 4.0) - 0.5)), sF);
          totalEmissiveRadiance += vec3(0.95, 0.72, 0.40) * strip * sband * night * 0.45 * uWindow;

          // ---- tagged emissive geometry (strip lights, dish core) ----------
          if(vEmis > 0.001){
            float cells = hash13(floor(vWPos * 0.08));
            float f2 = 0.85 + 0.15 * sin(uTime * (2.0 + cells * 8.0) + cells * 40.0);
            vec3 c = mix(uEmisTint, mix(uEmisTint, vec3(0.66, 0.82, 1.0), 0.8), step(0.72, cells));
            totalEmissiveRadiance += c * vEmis * f2 * uEmisStr;
          }

          // ---- night side is never pure black: self-illumination bounce ----
          totalEmissiveRadiance += diffuseColor.rgb * uNightFloor * night;
          // and a soft, clustered city haze that survives any distance
          float haze = fbm3(normalize(vWPos) * 11.0 + uSeed, 2, 2.3, 0.5);
          haze = smoothstep(0.46, 0.92, haze);
          totalEmissiveRadiance += vec3(0.82, 0.80, 0.78) * haze * night * 0.030 * uWindow;

          // ---- damage: cracks that spread and brighten ---------------------
          if(uDamage > 0.0005){
            float mppD = max(length(fwidth(vWPos)), 1e-3);
            // ridged noise gives filaments, not blobs — these read as fissures
            float veins = ridged3(vWPos * (1.0 / uRadius) * 18.0 + uSeed, 4, 2.2, 0.55);
            float fine = ridged3(vWPos * (1.0 / uRadius) * 78.0 + uSeed * 2.0, 3, 2.3, 0.5)
                         * (1.0 - smoothstep(80.0, 400.0, mppD));
            float mask = fbm3(vWPos * (1.0 / uRadius) * 3.4 + uTime * 0.02, 3, 2.2, 0.5);
            float spread = smoothstep(0.70 - uDamage * 0.85, 0.94 - uDamage * 0.55, mask);
            float c = smoothstep(0.62, 0.97, veins) + 0.55 * smoothstep(0.70, 1.0, fine);
            float hot = c * spread * uDamage;
            vec3 hotCol = mix(vec3(2.4, 0.55, 0.06), vec3(4.0, 2.6, 1.2), uDamage * uDamage);
            totalEmissiveRadiance += hotCol * hot * (0.8 + 4.0 * uDamage);
            // scorch the plating around the fissures
            diffuseColor.rgb *= (1.0 - 0.72 * clamp(spread * uDamage, 0.0, 1.0));
          }
        }
      `)},n.customProgramCacheKey=()=>"ds-surface-v4-"+a,n}function nh(i,e,t){const n=i?.userData?.uniforms;if(!n)return;const s=n[e];s&&(s.value&&typeof s.value=="object"&&typeof s.value.copy=="function"&&t&&typeof t=="object"?s.value.copy(t):s.value=t)}function Xm(i,e,t){const n=Math.floor(i),s=Math.floor(e),a=Math.floor(t),o=i-n,r=e-s,l=t-a,c=o*o*(3-2*o),u=r*r*(3-2*r),f=l*l*(3-2*l),h=pn(n,s,a),d=pn(n+1,s,a),g=pn(n,s+1,a),v=pn(n+1,s+1,a),m=pn(n,s,a+1),p=pn(n+1,s,a+1),y=pn(n,s+1,a+1),M=pn(n+1,s+1,a+1),x=h+(d-h)*c,w=g+(v-g)*c,T=m+(p-m)*c,E=y+(M-y)*c,_=x+(w-x)*u,A=T+(E-T)*u;return _+(A-_)*f}function Wo(i,e,t,n=3,s=2.17,a=.52){let o=.5,r=0,l=0;for(let c=0;c<n;c++)r+=o*Xm(i,e,t),l+=o,i*=s,e*=s,t*=s,o*=a;return r/Math.max(l,1e-4)}const Ua=Bm/tt,ip=mn/tt,Po=df/tt,Ym=new b,Ko=new b,Z3=new b,al=new b,Gc=new b;{const i=fs.clone(),e=Math.abs(i.y)>.9?new b(1,0,0):new b(0,1,0);al.copy(e).cross(i).normalize(),Gc.copy(i).cross(al).normalize()}function N0(i,e,t){const n=(Math.abs(e)-Ua)*tt,s=i*fs.x+e*fs.y+t*fs.z,a=Math.acos(we(s,-1,1))*tt-mn,o=Math.atan2(i,e)*tt,r=Math.max(ls-o,0,o-cs),l=Math.abs(t)*tt-df;let c;return r>0&&l>0?c=Math.hypot(r,l):r>0?c=r:c=l,Math.min(n,a,c)}function uu(i,e,t){let n=(Wo(i*2.1+11.3,e*2.1+4.7,t*2.1+21.9,3)-.5)*128;n+=(Wo(i*5.7+61.1,e*5.7+3.3,t*5.7+8.5,2)-.5)*52;const s=Wo(i*6.9+130.7,e*6.9+77.1,t*6.9+41.3,2);n-=Dt(.72,.98,1-Math.abs(2*s-1))*62;const a=Wo(i*12.3+5.9,e*12.3+90.2,t*12.3+31.7,2);n-=Dt(.6,.33,a)*58,n+=(Wo(i*31+3.1,e*31+17.7,t*31+55.5,2)-.5)*26,n=we(n,-120,120);const o=N0(i,e,t);return n*Dt(0,3400,o)}function J3(i,e,t){const n=Wo(i*1.35+71.7,e*1.35+12.1,t*1.35+44.9,2);return Math.min(5,Math.floor(n*6.2))/5}const Q3=new b;function j3(i,e,t,n=Q3){const s=tt+uu(i,e,t);return n.set(i*s,e*s,t*s)}function _f(i,e,t){const n=i.attributes.position.count;if(!i.attributes.aEmis){const s=new Float32Array(n);s.fill(e),i.setAttribute("aEmis",new We(s,1))}if(!i.attributes.aMat){const s=new Float32Array(n);s.fill(t),i.setAttribute("aMat",new We(s,1))}return i.attributes.uv||i.setAttribute("uv",new We(new Float32Array(n*2),2)),i}function $m(i){const e=i.attributes.position.array,t=i.index.array;let n=0;for(let s=0;s<t.length;s+=3){const a=t[s]*3,o=t[s+1]*3,r=t[s+2]*3,l=e[o]-e[a],c=e[o+1]-e[a+1],u=e[o+2]-e[a+2],f=e[r]-e[a],h=e[r+1]-e[a+1],d=e[r+2]-e[a+2];n+=(c*d-u*h)*e[a]+(u*f-l*d)*e[a+1]+(l*h-c*f)*e[a+2]}if(n<0){for(let s=0;s<t.length;s+=3){const a=t[s+1];t[s+1]=t[s+2],t[s+2]=a}i.index.needsUpdate=!0,i.computeVertexNormals()}return i}function xl(i,e){const t=i.attributes.position.count,n=new Float32Array(t);return n.fill(e),i.setAttribute("aRegion",new We(n,1)),i}const Km=[[new b(1,0,0),new b(0,0,-1),new b(0,1,0)],[new b(-1,0,0),new b(0,0,1),new b(0,1,0)],[new b(0,1,0),new b(0,0,1),new b(1,0,0)],[new b(0,-1,0),new b(1,0,0),new b(0,0,1)],[new b(0,0,1),new b(1,0,0),new b(0,1,0)],[new b(0,0,-1),new b(-1,0,0),new b(0,1,0)]];function Zm(i,e,t,n){const s=i*i,a=e*e,o=t*t;return n.set(i*Math.sqrt(1-a*.5-o*.5+a*o/3),e*Math.sqrt(1-o*.5-s*.5+o*s/3),t*Math.sqrt(1-s*.5-a*.5+s*a/3)).normalize()}function eM(i,e){const t=(Math.abs(i.y)-Ua)*tt;if(Math.abs(t)<e){const l=i.y>=0?Ua:-Ua,c=Math.sqrt(Math.max(1e-9,(1-Ua*Ua)/Math.max(1e-9,i.x*i.x+i.z*i.z)));i.set(i.x*c,l,i.z*c);return}const n=i.dot(fs),s=Math.acos(we(n,-1,1));if(Math.abs(s*tt-mn)<e){const l=Ym.copy(i).addScaledVector(fs,-n);l.lengthSq()>1e-16&&(l.normalize(),i.copy(fs).multiplyScalar(Math.cos(ip)).addScaledVector(l,Math.sin(ip)).normalize());return}const a=Math.atan2(i.x,i.y)*tt,o=a>ls-e&&a<cs+e,r=(Math.abs(i.z)-Po)*tt;if(o&&Math.abs(r)<e){const l=i.z>=0?Po:-Po,c=Math.sqrt(Math.max(1e-9,(1-Po*Po)/Math.max(1e-9,i.x*i.x+i.y*i.y)));i.set(i.x*c,i.y*c,l);return}if(Math.abs(i.z)<Po+e/tt){for(const l of[ls,cs])if(Math.abs(a-l)<e){const c=l/tt,u=Math.sqrt(Math.max(0,1-i.z*i.z));i.set(Math.sin(c)*u,Math.cos(c)*u,i.z);return}}}function tM(i){return Ko.copy(i).multiplyScalar(tt),Sb(Ko)||wb(Ko)||Mb(Ko)}const nM=160;function iM(){const i=nM,e=i+1,t=e*e,n=t*6,s=new Float32Array(n*3),a=new Float32Array(n*3),o=new Float32Array(n*2),r=new Float32Array(n),l=new Float32Array(n),c=new Float32Array(n),u=new Float32Array(n*3),f=Math.PI*.5*tt/i,h=new b;for(let m=0;m<6;m++){const[p,y,M]=Km[m];for(let x=0;x<=i;x++){const w=x/i*2-1;for(let T=0;T<=i;T++){const E=T/i*2-1;Zm(p.x+y.x*E+M.x*w,p.y+y.y*E+M.y*w,p.z+y.z*E+M.z*w,h),eM(h,f*.75);const _=m*t+x*e+T;u[_*3]=h.x,u[_*3+1]=h.y,u[_*3+2]=h.z;const A=tt+uu(h.x,h.y,h.z);s[_*3]=h.x*A,s[_*3+1]=h.y*A,s[_*3+2]=h.z*A,a[_*3]=h.x,a[_*3+1]=h.y,a[_*3+2]=h.z,o[_*2]=T/i,o[_*2+1]=x/i,r[_]=J3(h.x,h.y,h.z),l[_]=0,c[_]=0}}}const d=[],g=new b;for(let m=0;m<6;m++)for(let p=0;p<i;p++)for(let y=0;y<i;y++){const M=m*t+p*e+y,x=M+1,w=M+e,T=w+1;g.set(u[M*3]+u[x*3]+u[w*3]+u[T*3],u[M*3+1]+u[x*3+1]+u[w*3+1]+u[T*3+1],u[M*3+2]+u[x*3+2]+u[w*3+2]+u[T*3+2]).normalize(),!tM(g)&&d.push(M,w,x,x,w,T)}for(let m=0;m<d.length;m+=3){const p=d[m]*3,y=d[m+1]*3,M=d[m+2]*3,x=s[y]-s[p],w=s[y+1]-s[p+1],T=s[y+2]-s[p+2],E=s[M]-s[p],_=s[M+1]-s[p+1],A=s[M+2]-s[p+2],R=w*A-T*_,I=T*E-x*A,F=x*_-w*E;if(R*s[p]+I*s[p+1]+F*s[p+2]<0){const H=d[m+1];d[m+1]=d[m+2],d[m+2]=H}}const v=new Tt;v.setAttribute("position",new We(s,3)),v.setAttribute("normal",new We(a,3)),v.setAttribute("uv",new We(o,2)),v.setAttribute("aRegion",new We(r,1)),v.setAttribute("aEmis",new We(l,1)),v.setAttribute("aMat",new We(c,1)),v.setIndex(new We(new Uint32Array(d),1)),v.computeVertexNormals();{const m=v.attributes.normal.array,p=new Map;for(let y=0;y<6;y++)for(let M=0;M<=i;M++)for(let x=0;x<=i;x++){if(x!==0&&x!==i&&M!==0&&M!==i)continue;const w=y*t+M*e+x,T=`${Math.round(s[w*3]*.05)},${Math.round(s[w*3+1]*.05)},${Math.round(s[w*3+2]*.05)}`,E=p.get(T);E?E.push(w):p.set(T,[w])}for(const y of p.values()){if(y.length<2)continue;let M=0,x=0,w=0;for(const E of y)M+=m[E*3],x+=m[E*3+1],w+=m[E*3+2];const T=Math.hypot(M,x,w)||1;M/=T,x/=T,w/=T;for(const E of y)m[E*3]=M,m[E*3+1]=x,m[E*3+2]=w}}return v.boundingSphere=new mi(new b,tt+1200),v}const rc=[[1.02,-4,0,0],[1,0,0,0],[.975,34,0,0],[.955,30,0,0],[.95,-70,0,1],[.93,-96,0,1],[.926,-132,1,3],[.918,-150,0,1],[.905,-430,0,1],[.898,-470,1,3],[.893,-520,0,1],[.88,-690,0,0],[.84,-706,0,0],[.7,-712,0,0],[.3,-742,0,0],[0,-756,0,0]];function sM(i){const t=[];for(let v=0;v<rc.length;v++)t.push(rc[v]);for(let v=rc.length-2;v>=0;v--){const m=rc[v];t.push([-m[0],m[1],m[2],m[3]])}const n=t.length,s=769*n,a=new Float32Array(s*3),o=new Float32Array(s*2),r=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s);for(let v=0;v<=768;v++){const m=v/768*Math.PI*2,p=Math.cos(m),y=Math.sin(m),M=Xm(p*3.1+5,0,y*3.1+5)-.5;for(let x=0;x<n;x++){const[w,T,E,_]=t[x],A=w*Ua,R=Math.sqrt(Math.max(0,1-A*A));let I=tt+T;Math.abs(w)<.99&&(I+=M*46*(1-Math.abs(w)));const F=v*n+x;a[F*3]=p*R*I,a[F*3+1]=A*I,a[F*3+2]=y*R*I,o[F*2]=v/768*260,o[F*2+1]=x/(n-1),r[F]=E,l[F]=_,c[F]=.35}}const u=[];for(let v=0;v<768;v++)for(let m=0;m<n-1;m++){const p=v*n+m,y=p+n;u.push(p,y,p+1,p+1,y,y+1)}const f=new Tt;f.setAttribute("position",new We(a,3)),f.setAttribute("uv",new We(o,2)),f.setAttribute("aEmis",new We(r,1)),f.setAttribute("aMat",new We(l,1)),f.setAttribute("aRegion",new We(c,1)),f.setIndex(new We(new Uint32Array(u),1)),f.computeVertexNormals(),$m(f),f.boundingSphere=new mi(new b,tt+200);const h=Ua*1.78*tt,d=[];d.push(pt(160,80,h,0,1).translate(0,-170,0)),d.push(pt(220,46,h*.3,0,0).translate(0,-100,0)),d.push(pt(100,14,h,1,3).translate(0,-186,0)),d.push(pt(110,60,h*.94,0,1).translate(0,-470,0));for(const v of[-1,1])d.push(pt(130,430,130,0,1).translate(0,-690,v*h*.455)),d.push(Oi(46,22,470,7,0,2).translate(0,-260,v*h*.4)),d.push(pt(250,60,210,0,0).translate(0,-756,v*h*.4)),d.push(Oi(58,26,330,7,0,2).translate(0,0,v*h*.49)),d.push(pt(70,26,90,1,3).translate(0,330,v*h*.49));d.push(si(320,140,430,24,0,0).translate(0,-756,i.range(-.2,.2)*h)),d.push(pt(130,34,210,1,3).translate(0,-616,0));const g=us(d.map(v=>v.index?v.toNonIndexed():v),!1);return g.computeVertexNormals(),xl(g,.35),{geo:f,ribs:g}}function Qr(i,e,t=new b){const n=i/tt,s=Math.cos(n),a=Math.sin(n),o=Math.cos(e)*a,r=Math.sin(e)*a;return t.set(fs.x*s+al.x*o+Gc.x*r,fs.y*s+al.y*o+Gc.y*r,fs.z*s+al.z*o+Gc.z*r).normalize()}const aM=[[mn+26,-4,0,0],[mn,0,0,0],[mn-120,86,0,0],[mn-300,74,0,0],[mn-330,-180,0,1],[mn-900,-210,0,1],[mn-940,-560,1,3],[mn-1560,-600,0,1],[mn-1600,-980,0,1],[mn-2260,-1030,0,1],[mn-2300,-1420,1,3],[mn-2900,-1470,0,1],[mn-2960,-1760,0,2]];function oM(){const e=aM.slice(),t=e[e.length-1][0],n=e[e.length-1][1],s=-2980,a=22;for(let m=1;m<=a;m++){const p=1-m/a,y=t*p,M=s+(n-s)*p*p;e.push([y,M,0,m>a-3?2:1])}const o=e.length,r=193*o,l=new Float32Array(r*3),c=new Float32Array(r*2),u=new Float32Array(r),f=new Float32Array(r),h=new Float32Array(r),d=new b;for(let m=0;m<=192;m++){const p=m/192*Math.PI*2;for(let y=0;y<o;y++){const[M,x,w,T]=e[y];Qr(M,p,d);let E=tt+x;M<mn-100&&M>200&&(E+=Math.sin(p*8+M*.0011)*26+Math.sin(p*3)*34);const _=m*o+y;l[_*3]=d.x*E,l[_*3+1]=d.y*E,l[_*3+2]=d.z*E,c[_*2]=m/192*60,c[_*2+1]=M/mn,u[_]=w,f[_]=T,h[_]=.8}}const g=[];for(let m=0;m<192;m++)for(let p=0;p<o-1;p++){const y=m*o+p,M=y+o;g.push(y,y+1,M,y+1,M+1,M)}const v=new Tt;return v.setAttribute("position",new We(l,3)),v.setAttribute("uv",new We(c,2)),v.setAttribute("aEmis",new We(u,1)),v.setAttribute("aMat",new We(f,1)),v.setAttribute("aRegion",new We(h,1)),v.setIndex(new We(new Uint32Array(g),1)),v.computeVertexNormals(),$m(v),v}function Qc(i,e=0,t=new Ct){const n=Ym.copy(i).normalize(),s=Math.abs(n.y)>.95?Ko.set(1,0,0):Ko.set(0,1,0),a=Z3.copy(s).cross(n).normalize(),o=new b().copy(a).cross(n).normalize(),r=new st().makeBasis(a,n,o);return t.setFromRotationMatrix(r),e&&t.multiply(new Ct().setFromAxisAngle(new b(0,1,0),e)),t}function rM(i){const e=[],t=new Ct,n=new b,s=new st,a=(c,u,f,h,d=0)=>{Qr(u,f,n),Qc(n,d,t);const g=tt+h;s.compose(new b(n.x*g,n.y*g,n.z*g),t,new b(1,1,1)),c.applyMatrix4(s),e.push(c)};for(let c=0;c<8;c++){const u=c/8*Math.PI*2+.19,f=mn-1900,h=[];h.push(Oi(300,190,900,12,0,0)),h.push(wt(210,260,12,0,1).translate(0,900,0)),h.push(Oi(160,90,620,10,0,2).translate(0,1160,0)),h.push(wt(120,90,12,.5,3).translate(0,1780,0)),h.push(pt(150,70,480,0,1).translate(0,300,0)),h.push(pt(700,90,700,0,0).translate(0,-60,0));for(let g=0;g<3;g++)h.push(pt(90,140,90,0,1).translate(i.range(-260,260),900,i.range(-260,260)));const d=us(h.map(g=>g.index?g.toNonIndexed():g),!1);d.computeVertexNormals(),a(d,f,u,-1030)}for(let c=0;c<12;c++){const u=c/12*Math.PI*2,f=10,h=[];for(let g=0;g<f;g++){const v=g/f,m=(g+1)/f,p=mn*(1-v)*.96+40,y=mn*(1-m)*.96+40,M=-2980+2980*(p/mn)*(p/mn)+190,x=-2980+2980*(y/mn)*(y/mn)+190,w=Qr(p,u,new b).multiplyScalar(tt+M),T=Qr(y,u,new b).multiplyScalar(tt+x),E=w.distanceTo(T),_=pt(150,E,150,g%3===0?.28:0,g%3===0?3:2);w.clone().add(T).multiplyScalar(.5);const A=T.clone().sub(w).normalize(),R=new Ct().setFromUnitVectors(new b(0,1,0),A);_.applyMatrix4(new st().compose(w,R,new b(1,1,1))),h.push(_)}const d=us(h.map(g=>g.index?g.toNonIndexed():g),!1);d.computeVertexNormals(),e.push(d)}const o=[];{const c=o;c.push(wt(1200,260,24,0,0)),c.push(Oi(1050,700,420,24,0,1).translate(0,260,0)),c.push(wt(760,180,20,0,2).translate(0,680,0));const u=new ps(520,24,16);u.translate(0,700,0),c.push(_f(u,1,3));for(let f=0;f<8;f++){const h=f/8*Math.PI*2,d=Oi(120,70,700,8,0,2);d.rotateX(.42),d.rotateY(h),d.translate(Math.cos(h)*900,300,Math.sin(h)*900),c.push(d);const g=wt(84,60,8,.6,3);g.translate(Math.cos(h)*900*.72,900,Math.sin(h)*900*.72),c.push(g)}}const r=us(o.map(c=>c.index?c.toNonIndexed():c),!1);r.computeVertexNormals();{Qr(0,0,n),Qc(n,0,t);const c=tt-2980;r.applyMatrix4(s.compose(new b(n.x*c,n.y*c,n.z*c),t,new b(1,1,1)))}xl(r,.8);const l=us(e.map(c=>c.index?c.toNonIndexed():c),!1);return l.computeVertexNormals(),xl(l,.8),{main:l,core:r}}function _r(i){const e=us(i.map(t=>t.index?t.toNonIndexed():t),!1);return e.computeVertexNormals(),e}function lM(i){const e=[];e.push(si(4200,300,2800,90,0,0).translate(0,-260,0)),e.push(si(4200*.82,90,2800*.82,70,0,1).translate(0,40,0));const s=2e3,a=1100,o=420;for(const r of[-1,1])e.push(pt(140,o,a+280,0,1).translate(r*(s/2+70),40,0));for(const r of[-1,1])e.push(pt(s+280,o,140,0,1).translate(0,40,r*(a/2+70)));e.push(pt(s,40,a,1,3).translate(0,40,0));for(let r=0;r<7;r++)e.push(pt(70,30,a,1,3).translate((r/6-.5)*s*.9,400,0));for(let r=0;r<4;r++){const l=(r/3-.5)*s*.8;e.push(pt(80,520,90,0,2).translate(l,40,-a/2-60)),e.push(pt(80,520,90,0,2).translate(l,40,a/2+60)),e.push(pt(110,70,a+200,0,1).translate(l,560,0))}for(let r=0;r<9;r++){const l=i.range(0,Math.PI*2),c=i.range(1500,2050),u=i.bool(.45)?wl(i,16):cu(i,14);e.push(u.translate(Math.cos(l)*c,40,Math.sin(l)*c*.66))}return _r(e)}function cM(i){const e=[];e.push(si(3400,260,3400,120,0,0).translate(0,-230,0)),e.push(wt(420,240,16,0,0).translate(0,30,0));for(const n of[-1,1])e.push(pt(140,620,220,0,1).translate(n*320,270,0));const t=new ps(900,28,14,0,Math.PI*2,0,Math.PI*.36);t.rotateX(Math.PI*1.18),t.translate(0,900,0),e.push(_f(t,0,1)),e.push(Oi(70,30,620,8,0,2).translate(0,620,0)),e.push(wt(60,60,8,1,3).translate(0,1240,0));for(let n=0;n<22;n++){const s=i.range(0,Math.PI*2),a=i.range(700,1650);e.push(mf(i,i.range(7,15)).translate(Math.cos(s)*a,20,Math.sin(s)*a))}for(let n=0;n<8;n++){const s=i.range(0,Math.PI*2),a=i.range(900,1700);e.push(pf(i,16).translate(Math.cos(s)*a,20,Math.sin(s)*a))}return _r(e)}function uM(i){const e=[],n=[[2600,-380],[2440,150],[2280,130],[2260,-120],[1900,-150],[1880,-420],[1500,-450],[1480,-700]];for(let l=12;l>=0;l--){const c=l/12;n.push([1480*c,-700-620*(1-c*c)])}const s=n.length,a=new Float32Array(73*s*3),o=[];for(let l=0;l<=72;l++){const c=l/72*Math.PI*2;for(let u=0;u<s;u++){const[f,h]=n[u],d=(l*s+u)*3;a[d]=Math.cos(c)*f,a[d+1]=h,a[d+2]=Math.sin(c)*f}}for(let l=0;l<72;l++)for(let c=0;c<s-1;c++){const u=l*s+c,f=u+s;o.push(u,u+1,f,u+1,f+1,f)}const r=new Tt;r.setAttribute("position",new We(a,3)),r.setIndex(o),r.computeVertexNormals();{const l=r.attributes.position.array,c=r.index.array;let u=0;for(let f=0;f<c.length;f+=3){const h=c[f]*3,d=c[f+1]*3,g=c[f+2]*3,v=l[d]-l[h];l[d+1]-l[h+1];const m=l[d+2]-l[h+2],p=l[g]-l[h];l[g+1]-l[h+1];const y=l[g+2]-l[h+2];u+=m*p-v*y}if(u<0){for(let f=0;f<c.length;f+=3){const h=c[f+1];c[f+1]=c[f+2],c[f+2]=h}r.computeVertexNormals()}}e.push(_f(r.toNonIndexed(),0,1)),e.push(wt(340,220,16,0,0).translate(0,-1320,0)),e.push(Oi(260,150,420,12,0,2).translate(0,-1100,0)),e.push(wt(150,120,12,1,3).translate(0,-680,0));for(let l=0;l<6;l++){const c=l/6*Math.PI*2;e.push(wl(i,12).translate(Math.cos(c)*2300,60,Math.sin(c)*2300)),e.push(pt(90,40,700,1,3).translate(Math.cos(c)*2050,130,Math.sin(c)*2050))}return _r(e)}function hM(i){const e=[];e.push(si(3e3,240,3e3,140,0,0).translate(0,-210,0));const t=1450;for(let n=0;n<40;n++){const s=n/40*Math.PI*2,a=(n+1)/40*Math.PI*2,o=Math.cos(s)*t,r=Math.sin(s)*t,l=Math.cos(a)*t,c=Math.sin(a)*t,u=Math.hypot(l-o,c-r),f=pt(u*1.05,110,200,n%4===0?1:0,n%4===0?3:1);f.rotateY(-Math.atan2(c-r,l-o)),f.translate((o+l)/2,760,(r+c)/2),e.push(f),n%5===0&&e.push(pt(150,800,150,0,2).translate(o,20,r))}for(let n=0;n<14;n++){const s=i.range(0,Math.PI*2),a=i.range(120,1150);e.push(wl(i,i.range(10,20)).translate(Math.cos(s)*a,20,Math.sin(s)*a))}return e.push(Oi(180,60,1900,10,0,2).translate(0,20,0)),e.push(wt(120,110,10,1,3).translate(0,1920,0)),_r(e)}function fM(i){const e=[];e.push(si(3800,280,2600,130,0,0).translate(0,-250,0));const t=[[0,0,520],[-1200,-700,380],[1200,-700,380],[-1200,700,380],[1200,700,380]];for(const[n,s,a]of t){e.push(wt(a*1.42,130,20,0,0).translate(n,30,s)),e.push(wt(a*1.18,220,20,0,1).translate(n,120,s)),e.push(wt(a*.9,40,20,1,3).translate(n,200,s));for(let o=0;o<8;o++){const r=o/8*Math.PI*2;e.push(pt(90,300,90,0,2).translate(n+Math.cos(r)*a*1.3,130,s+Math.sin(r)*a*1.3))}}for(let n=0;n<10;n++)e.push(cu(i,i.range(10,18)).translate(i.range(-1750,1750),20,i.range(-1150,1150)));return _r(e)}function dM(i){const e=[];e.push(si(4600,320,3200,150,0,0).translate(0,-290,0));for(let t=0;t<46;t++){const n=i.range(-2100,2100),s=i.range(-1400,1400),a=i.next();a<.45?e.push(cu(i,i.range(8,20)).translate(n,20,s)):a<.72?e.push(wl(i,i.range(8,22)).translate(n,20,s)):a<.88?e.push(pf(i,i.range(10,20)).translate(n,20,s)):e.push(mf(i,i.range(8,16)).translate(n,20,s))}for(let t=0;t<3;t++){const n=(t-1)*1e3;e.push(pt(4200,90,160,0,1).translate(0,460,n)),e.push(pt(4200,24,40,1,3).translate(0,556,n));for(let s=0;s<9;s++)e.push(pt(130,480,130,0,2).translate((s/8-.5)*4e3,20,n))}return _r(e)}const pM=[[.75,.35,.56],[-.62,.28,.73],[-.45,-.55,-.7],[.05,-.99,.1],[.3,.8,.52],[-.88,-.3,.36]];function mM(i){const e=[lM,cM,uM,hM,dM,fM],t=[],n=new b;for(let s=0;s<e.length;s++){const a=e[s](i.fork(s+3));xl(a,.15+.14*s);const[o,r,l]=pM[s];n.set(o,r,l).normalize();const c=Qc(n,i.range(0,Math.PI*2),new Ct),u=tt+uu(n.x,n.y,n.z);t.push({geo:a,pos:new b(n.x*u,n.y*u,n.z*u),quat:c})}return t}function sp(i){i.computeBoundingSphere();const e=i.boundingSphere.center.clone();return i.translate(-e.x,-e.y,-e.z),i.computeBoundingSphere(),e}const Ni=96,Jm=6*Ni*Ni,ap=Math.PI*.5*tt/Ni,ih=3e4,gM=[25e3,3e4],op=8e3,vM=[6600,8e3],rp=2e3,xM=[1650,2e3],_M=42e3;let sh=null;function yM(){if(sh)return sh;const i=new Float32Array(Jm*3),e=new b;let t=0;for(let n=0;n<6;n++){const[s,a,o]=Km[n];for(let r=0;r<Ni;r++){const l=(r+.5)/Ni*2-1;for(let c=0;c<Ni;c++){const u=(c+.5)/Ni*2-1;Zm(s.x+a.x*u+o.x*l,s.y+a.y*u+o.y*l,s.z+a.z*u+o.z*l,e),i[t++]=e.x,i[t++]=e.y,i[t++]=e.z}}}return sh=i,i}function bM(i){const e=Math.abs(i.x),t=Math.abs(i.y),n=Math.abs(i.z);let s=0,a=0,o=0;e>=t&&e>=n?i.x>0?(s=0,a=-i.z/e,o=i.y/e):(s=1,a=i.z/e,o=i.y/e):t>=n?i.y>0?(s=2,a=i.z/t,o=i.x/t):(s=3,a=i.x/t,o=i.z/t):i.z>0?(s=4,a=i.x/n,o=i.y/n):(s=5,a=-i.x/n,o=i.y/n);const r=Math.min(Ni-1,Math.max(0,Math.floor((a+1)*.5*Ni))),l=Math.min(Ni-1,Math.max(0,Math.floor((o+1)*.5*Ni)));return(s*Ni+l)*Ni+r}function ah(i,e,t,n){return{meshes:i.map(a=>{a.computeBoundingBox();const o=a.boundingBox.min.y;o<-1&&a.translate(0,-o,0),xl(a,.5);const r=new hs(a,e,t);return r.frustumCulled=!1,r.count=0,r.instanceMatrix.setUsage(tn),r}),counts:i.map(()=>0),cap:t,radius:n}}function MM(i={}){const e=i.seed??20250908,t=new Qt(e),n=new Gn;n.name="deathstar";const s=[],a=[],o=ba({seed:e%977,radius:tt,projection:"cube",detailScale:1}),r=ba({seed:(e+31)%977,radius:tt,projection:"uv",detailScale:1,color:9870499,windowStrength:1.35,emissiveStrength:1.7}),l=ba({seed:(e+57)%977,radius:tt,projection:"cube",detailScale:7,color:10660013,windowStrength:.3}),c=ba({seed:(e+91)%977,radius:tt,projection:"local",detailScale:.34,color:9409948,windowStrength:.8,emissiveStrength:.75}),u=ba({seed:(e+13)%977,radius:tt,projection:"local",detailScale:1,color:9409948,windowStrength:.55,emissiveStrength:.5,instanceFade:gM}),f=ba({seed:(e+17)%977,radius:tt,projection:"local",detailScale:1.6,color:9409948,windowStrength:.55,emissiveStrength:.5,instanceFade:vM}),h=ba({seed:(e+19)%977,radius:tt,projection:"local",detailScale:2.6,color:9738913,windowStrength:.55,emissiveStrength:.5,instanceFade:xM}),d=ba({seed:(e+77)%977,radius:tt,projection:"local",detailScale:.9,color:8291724,emissiveTint:3145606,emissiveStrength:2,windowStrength:.2});s.push(o,r,l,c,u,f,h,d);const g=iM();a.push(g);const v=new ft(g,o);v.name="ds-shell",v.frustumCulled=!1,n.add(v);const m=sM(t.fork(11));a.push(m.geo,m.ribs);const p=new ft(m.geo,r);p.name="ds-equator-trench",p.frustumCulled=!1,n.add(p);const y=84,M=new hs(m.ribs,c,y);M.frustumCulled=!1;{const B=new st,Q=new Ct,te=new b(1,1,1),ve=new b(0,1,0);for(let pe=0;pe<y;pe++){const he=pe/y*Math.PI*2+.013,Ee=new b(Math.cos(he),0,Math.sin(he)),Be=new b(-Math.sin(he),0,Math.cos(he));Q.setFromRotationMatrix(new st().makeBasis(Be,Ee,ve)),B.compose(Ee.clone().multiplyScalar(tt),Q,te),M.setMatrixAt(pe,B)}M.instanceMatrix.needsUpdate=!0}n.add(M);const x=oM();a.push(x);const w=new ft(x,l);w.name="ds-dish",w.frustumCulled=!1,n.add(w);const T=rM(t.fork(23)),E=sp(T.main);a.push(T.main,T.core);const _=new ft(T.main,c);_.position.copy(E),n.add(_);const A=sp(T.core),R=new ft(T.core,d);R.position.copy(A),n.add(R);for(const B of mM(t.fork(37))){a.push(B.geo);const Q=new ft(B.geo,c);Q.position.copy(B.pos),Q.quaternion.copy(B.quat),n.add(Q)}const I=[...Js(e+101,3,["tower"],11),...Js(e+102,3,["machinery"],26),...Js(e+103,2,["antenna"],15)],F=[...Js(e+104,3,["machinery","vent"],11),...Js(e+105,2,["tower","pipe"],5),...Js(e+106,2,["antenna","vent"],7)],H=[...Js(e+107,3,["plate","machinery"],5),...Js(e+108,3,["vent","plate","pipe"],3)];for(const B of[...I,...F,...H])a.push(B);const X=[ah(I,u,185,ih),ah(F,f,120,op),ah(H,h,96,rp)];for(const B of X)for(const Q of B.meshes)n.add(Q);const O=yM();let V=-1,z=!1;const re=new b,ue=new b,Y=new b,ee=new b,le=new Ct,Ce=new st,Ue=new b,Ie=new b,$=Math.cos((ih+ap)/tt);function ie(B,Q,te,ve,pe,he,Ee,Be){const $e=B.meshes[Q],N=B.counts[Q];if(N>=B.cap||N0(te,ve,pe)<260)return;ue.set(te,ve,pe);const ct=tt+uu(te,ve,pe)-Be;Ie.set(te*ct,ve*ct,pe*ct),Qc(ue,he,le),Ue.set(Ee,Ee,Ee),Ce.compose(Ie,le,Ue),$e.setMatrixAt(N,Ce),B.counts[Q]=N+1}let de=0;function De(B){const Q=performance.now();for(const he of X)he.counts.fill(0);re.copy(B).normalize();const te=X[0].meshes.length,ve=X[1].meshes.length,pe=X[2].meshes.length;for(let he=0;he<Jm;he++){const Ee=O[he*3],Be=O[he*3+1],$e=O[he*3+2],N=Ee*re.x+Be*re.y+$e*re.z;if(N<$)continue;const ct=Math.acos(Math.min(1,N))*tt;if(N0(Ee,Be,$e)<340)continue;ue.set(Ee,Be,$e),Y.set(0,1,0),Math.abs(Be)>.95&&Y.set(1,0,0),Y.cross(ue).normalize(),ee.copy(Y).cross(ue).normalize();const Oe=ap/tt;if(pn(he,1,7)>.66&&ct<ih){const S=pn(he,2,7)-.5,L=pn(he,3,7)-.5,W=Ee+(Y.x*S+ee.x*L)*Oe,ne=Be+(Y.y*S+ee.y*L)*Oe,Te=$e+(Y.z*S+ee.z*L)*Oe,Pe=Math.hypot(W,ne,Te);ie(X[0],Math.floor(pn(he,4,7)*te)%te,W/Pe,ne/Pe,Te/Pe,pn(he,5,7)*Math.PI*2,.75+pn(he,6,7)*.7,12)}if(ct<op)for(let S=0;S<3;S++){if(pn(he,20+S,3)<.34)continue;const L=pn(he,30+S,3)-.5,W=pn(he,40+S,3)-.5,ne=Ee+(Y.x*L+ee.x*W)*Oe,Te=Be+(Y.y*L+ee.y*W)*Oe,Pe=$e+(Y.z*L+ee.z*W)*Oe,ce=Math.hypot(ne,Te,Pe);ie(X[1],Math.floor(pn(he,50+S,3)*ve)%ve,ne/ce,Te/ce,Pe/ce,pn(he,60+S,3)*Math.PI*2,.7+pn(he,70+S,3)*.8,6)}if(ct<rp)for(let S=0;S<8;S++)for(let L=0;L<8;L++){const W=S*8+L;if(pn(he,100+W,9)<.62)continue;const ne=(L+pn(he,200+W,9))/8-.5,Te=(S+pn(he,300+W,9))/8-.5,Pe=Ee+(Y.x*ne+ee.x*Te)*Oe,ce=Be+(Y.y*ne+ee.y*Te)*Oe,fe=$e+(Y.z*ne+ee.z*Te)*Oe,Le=Math.hypot(Pe,ce,fe);ie(X[2],Math.floor(pn(he,400+W,9)*pe)%pe,Pe/Le,ce/Le,fe/Le,pn(he,500+W,9)*Math.PI*2,.6+pn(he,600+W,9)*.8,3)}}for(const he of X)for(let Ee=0;Ee<he.meshes.length;Ee++)he.meshes[Ee].count=he.counts[Ee],he.meshes[Ee].instanceMatrix.needsUpdate=!0;de=performance.now()-Q}function Ae(){for(const B of X)for(const Q of B.meshes)Q.count=0}let K=0;const ae=new b;return{group:n,shell:v,materials:s,_liveInstances:()=>X.map(B=>B.counts.reduce((Q,te)=>Q+te,0)),_rebuildMs:()=>de,update(B,Q,te){te.getWorldPosition(ae);for(const he of s)nh(he,"uTime",Q),nh(he,"uCamPos",ae);if(ae.length()-tt>_M){z&&(Ae(),z=!1,V=-1);return}z=!0;const pe=bM(re.copy(ae).normalize());pe!==V&&(V=pe,De(ae))},setDamage(B){K=we(B,0,1);for(const Q of s)nh(Q,"uDamage",K)},setVisible(B){n.visible=B},dispose(){for(const B of a)B.dispose();for(const B of s)B.dispose();n.clear()}}}const oh=16;function SM(){const i=new Tt,e=oh+1,t=new Float32Array(e*2*3),n=new Float32Array(e*2*2),s=[];for(let a=0;a<e;a++){const o=a/oh;if(t[a*6+0]=-.5,t[a*6+1]=0,t[a*6+2]=o,t[a*6+3]=.5,t[a*6+4]=0,t[a*6+5]=o,n[a*4+0]=0,n[a*4+1]=o,n[a*4+2]=1,n[a*4+3]=o,a<oh){const r=a*2,l=r+1,c=r+2,u=r+3;s.push(r,l,c,l,u,c)}}return i.setAttribute("position",new We(t,3)),i.setAttribute("uv",new We(n,2)),i.setIndex(s),i.boundingSphere=new mi(new b(0,0,.5),4e3),i}const wM=`
precision highp float;

attribute vec3 aColor;
attribute vec4 aData;   // age01, length, radius, seed

uniform float uPixelScale;   // world units per pixel at 1m depth (2*tan(fov/2)/screenH)
uniform float uMinPixels;    // minimum on-screen half-width, in pixels

varying vec3  vColor;
varying float vT;
varying float vSide;
varying float vAge;
varying float vSeed;
varying float vFatten;

void main() {
  vColor = aColor;
  vAge   = aData.x;
  vSeed  = aData.w;

  float len = aData.y;
  float rad = aData.z;
  float t   = position.z;
  vT = t;

  // Instance frame -> view space.
  vec4 originVS4 = modelViewMatrix * (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0));
  vec3 originVS  = originVS4.xyz;
  vec3 axisVS    = normalize((modelViewMatrix * (instanceMatrix * vec4(0.0, 0.0, 1.0, 0.0))).xyz);

  vec3 p = originVS + axisVS * (t * len);

  // Camera-facing ribbon: expand perpendicular to both the bolt axis and the eye ray.
  vec3 toEye = normalize(-p);
  vec3 c = cross(axisVS, toEye);
  float cl = length(c);
  vec3 side = (cl > 1e-4) ? (c / cl) : vec3(1.0, 0.0, 0.0);

  // 0 = seen broadside, 1 = looking straight down the barrel.
  float headOn = clamp(1.0 - cl, 0.0, 1.0);
  vFatten = headOn;

  // Width profile: tapered tail, full body, slight bulge just behind the head.
  float body   = pow(smoothstep(0.0, 0.20, t), 0.55) * (1.0 - 0.62 * smoothstep(0.84, 1.0, t));
  float bulge  = exp(-pow((t - 0.885) / 0.085, 2.0));
  float w = rad * (0.42 + 0.85 * body + 0.55 * bulge);

  // Foreshortened bolts become round glows rather than vanishing.
  w *= mix(1.0, 3.4, headOn * headOn);

  // Never let a distant bolt fall below a couple of pixels.
  float depth = max(-p.z, 0.02);
  w = max(w, depth * uPixelScale * uMinPixels);

  vSide = position.x * 2.0;
  p += side * (position.x * 2.0 * w);

  gl_Position = projectionMatrix * vec4(p, 1.0);
}
`,TM=`
precision highp float;

${Mn}
${zn}

uniform float uTime;
uniform float uIntensity;

varying vec3  vColor;
varying float vT;
varying float vSide;
varying float vAge;
varying float vSeed;
varying float vFatten;

void main() {
  float s  = abs(vSide);
  float s2 = s * s;

  // Three nested radial lobes: needle core, plasma sheath, soft halo.
  float core = exp(-s2 * 30.0);
  float glow = exp(-s2 * 4.6);
  float halo = exp(-s2 * 1.15);

  float t = vT;

  // Longitudinal shaping.
  float tail   = smoothstep(0.0, 0.14, t);
  float endcap = 1.0 - smoothstep(0.955, 1.0, t);
  float head   = smoothstep(0.68, 0.98, t);

  // Animated energy running down the shaft.
  float n = fbm2(vec2(t * 11.0 - uTime * 26.0 + vSeed * 91.0, vSeed * 23.0), 3, 2.2, 0.55);
  float energy = 0.72 + 0.62 * n;

  // Life fade: bolts dim slightly as they age out rather than blinking off.
  float lifeFade = 1.0 - smoothstep(0.86, 1.0, vAge);
  // Head-on bolts lose the shaft, keep the glow.
  float shaft = mix(1.0, 0.35, vFatten);

  float body = (core * 3.2 * energy * shaft + glow * 0.62 + halo * 0.13) * tail * endcap;
  float flare = head * (core * 2.6 + glow * 0.55);
  float I = (body + flare) * lifeFade;

  vec3 col = vColor * I;
  // A near-white needle in the centre so bloom blooms white, not just tinted.
  float white = core * core * (1.9 + 1.6 * head) * tail * endcap * lifeFade * shaft;
  col += vec3(1.0, 0.97, 0.93) * white;

  float a = clamp(I + white * 0.5, 0.0, 1.0);
  gl_FragColor = vec4(col * uIntensity, a);
}
`;function EM(){return new xt({uniforms:{uTime:{value:0},uIntensity:{value:4.2},uPixelScale:{value:.0018},uMinPixels:{value:1.35}},vertexShader:wM,fragmentShader:TM,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,side:cn,toneMapped:!0})}const Hc=0,AM=1,CM=new b,lp=new r1,rh=new La,cp=new b,lc=new Wi;class PM{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new up,this.unassigned=new up,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new RM(e[t]));this._compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const s=n.geometry;if(s!==void 0){const a=s.attributes.position;if(a!==void 0)for(let o=0,r=a.count;o<r;o++){const l=new b;l.fromBufferAttribute(a,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let s=-1/0,a=1/0;for(let o=0,r=n.length;o<r;o++){const l=n[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;const f=u!==0?-c/u:0;if(!(f<=0)&&(u>0?a=Math.min(f,a):s=Math.max(f,s),s>a))return null}return s!==-1/0?e.at(s,t):e.at(a,t),t}intersectsRay(e){return this.intersectRay(e,CM)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){const n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{const a=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=a}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let s=this.tolerance,a=null;for(let o=0;o<e.length;o++){const r=e[o];if(r.mark===Hc){const l=r.distanceToPoint(t.point);if(l>s&&(s=l,a=r),s>1e3*this.tolerance)break}}a!==null&&this._addVertexToFace(t,a),t=n}while(t!==null)}return this}_computeExtremes(){const e=new b,t=new b,n=[],s=[];for(let a=0;a<3;a++)n[a]=s[a]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let a=0,o=this.vertices.length;a<o;a++){const r=this.vertices[a],l=r.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=r);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=r)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){const e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max;let a=0,o=0;for(let h=0;h<3;h++){const d=s[h].point.getComponent(h)-n[h].point.getComponent(h);d>a&&(a=d,o=h)}const r=n[o],l=s[o];let c,u;a=0,lp.set(r.point,l.point);for(let h=0,d=this.vertices.length;h<d;h++){const g=e[h];if(g!==r&&g!==l){lp.closestPointToPoint(g.point,!0,cp);const v=cp.distanceToSquared(g.point);v>a&&(a=v,c=g)}}a=-1,rh.setFromCoplanarPoints(r.point,l.point,c.point);for(let h=0,d=this.vertices.length;h<d;h++){const g=e[h];if(g!==r&&g!==l&&g!==c){const v=Math.abs(rh.distanceToPoint(g.point));v>a&&(a=v,u=g)}}const f=[];if(rh.distanceToPoint(u.point)<0){f.push(es.create(r,l,c),es.create(u,l,r),es.create(u,c,l),es.create(u,r,c));for(let h=0;h<3;h++){const d=(h+1)%3;f[h+1].getEdge(2).setTwin(f[0].getEdge(d)),f[h+1].getEdge(1).setTwin(f[d+1].getEdge(0))}}else{f.push(es.create(r,c,l),es.create(u,r,l),es.create(u,l,c),es.create(u,c,r));for(let h=0;h<3;h++){const d=(h+1)%3;f[h+1].getEdge(2).setTwin(f[0].getEdge((3-h)%3)),f[h+1].getEdge(0).setTwin(f[d+1].getEdge(1))}}for(let h=0;h<4;h++)this.faces.push(f[h]);for(let h=0,d=e.length;h<d;h++){const g=e[h];if(g!==r&&g!==l&&g!==c&&g!==u){a=this.tolerance;let v=null;for(let m=0;m<4;m++){const p=this.faces[m].distanceToPoint(g.point);p>a&&(a=p,v=this.faces[m])}v!==null&&this._addVertexToFace(g,v)}}return this}_reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===Hc&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let s=n.outside;do{const a=n.distanceToPoint(s.point);a>t&&(t=a,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=AM;let a;t===null?a=t=n.getEdge(0):a=t.next;do{const o=a.twin,r=o.face;r.mark===Hc&&(r.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,r,s):s.push(a)),a=a.next}while(a!==t);return this}_addAdjoiningFace(e,t){const n=es.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let a=0;a<t.length;a++){const o=t[a],r=this._addAdjoiningFace(e,o);n===null?n=r:r.next.setTwin(s),this.newFaces.push(r.face),s=r}return n.next.setTwin(s),this}_addVertexToHull(e){const t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}}class es{constructor(){this.normal=new b,this.midpoint=new b,this.area=0,this.constant=0,this.outside=null,this.mark=Hc,this.edge=null}static create(e,t,n){const s=new es,a=new lh(e,s),o=new lh(t,s),r=new lh(n,s);return a.next=r.prev=o,o.next=a.prev=r,r.next=o.prev=a,s.edge=a,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return lc.set(e.point,t.point,n.point),lc.getNormal(this.normal),lc.getMidpoint(this.midpoint),this.area=lc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class lh{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class RM{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class up{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class IM extends Tt{constructor(e=[]){super();const t=[],n=[],a=new PM().setFromPoints(e).faces;for(let o=0;o<a.length;o++){const r=a[o];let l=r.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),n.push(r.normal.x,r.normal.y,r.normal.z),l=l.next}while(l!==r.edge)}this.setAttribute("position",new gt(t,3)),this.setAttribute("normal",new gt(n,3))}}const LM=`
precision highp float;

attribute vec3  aVel;
attribute vec3  aColor;
attribute vec4  aData;   // spawnTime, life, size, extra(heat)
attribute float aSeed;

uniform float uTime;
uniform float uDrag;
uniform float uWander;
uniform float uPixelScale;   // 2*tan(fov/2)/screenHeightPx
uniform float uMinPixels;
uniform float uMaxPixels;
uniform vec3  uAccel;

varying float vAge01;
varying vec3  vColor;
varying float vSeed;
varying float vExtra;
varying float vFade;
`,DM=`
  float age  = uTime - aData.x;
  float life = max(aData.y, 1e-4);
  float a01  = age / life;
  vAge01 = a01;
  vColor = aColor;
  vSeed  = aSeed;
  vExtra = aData.w;

  if (a01 < 0.0 || a01 >= 1.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // exponential drag: x(t) = x0 + v0*(1-e^(-kt))/k
  float k = uDrag;
  float ie = (k > 1e-3) ? (1.0 - exp(-k * age)) / k : age;
  vec3 p = position + aVel * ie + 0.5 * uAccel * age * age;

  if (uWander > 0.0) {
    float sd = aSeed * 61.7;
    p += vec3(sin(age * 1.7 + sd), cos(age * 1.31 + sd * 1.7), sin(age * 2.1 + sd * 2.3))
         * uWander * age;
  }

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
`;function FM(i){switch(i){case"spark":return"float sc = smoothstep(0.0, 0.05, a01) * pow(1.0 - a01, 0.75);";case"ember":return"float sc = smoothstep(0.0, 0.08, a01) * (0.55 + 0.45 * pow(1.0 - a01, 0.6));";default:return"float sc = 0.28 + 1.55 * pow(a01, 0.5);"}}function NM(i){switch(i){case"spark":return"vFade = pow(1.0 - a01, 1.4);";case"ember":return"vFade = smoothstep(0.0, 0.06, a01) * pow(1.0 - a01, 1.8);";default:return"vFade = smoothstep(0.0, 0.10, a01) * (1.0 - smoothstep(0.28, 1.0, a01));"}}const UM=`
precision highp float;
${Mn}
${qi}

uniform float uTime;
uniform float uIntensity;
uniform float uOpacity;

varying float vAge01;
varying vec3  vColor;
varying float vSeed;
varying float vExtra;
varying float vFade;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc) * 2.0;
  if (d > 1.0) discard;

  // needle core + soft bloomy skirt (never a flat square dot)
  float core = pow(max(1.0 - d, 0.0), 4.0);
  float glow = pow(max(1.0 - d, 0.0), 1.3);

  // temperature falls over life -> white-hot, yellow, orange, red, out
  float heat = clamp(vExtra * pow(1.0 - vAge01, 1.25), 0.0, 1.0);
  float flick = 0.65 + 0.35 * sin(uTime * 47.0 + vSeed * 137.0)
                     * (0.4 + 0.6 * hash11(vSeed * 7.7));

  vec3 bb = blackbody(heat);
  vec3 col = mix(bb, bb * 0.45 + vColor * 1.15, 0.55);

  float I = (core * 3.0 + glow * 0.55) * vFade * flick;
  vec3 outc = col * I + vec3(1.0, 0.95, 0.88) * core * core * heat * 1.4 * vFade;
  gl_FragColor = vec4(outc * uIntensity, clamp(I, 0.0, 1.0) * uOpacity);
}
`,OM=`
precision highp float;
${Mn}
${qi}

uniform float uTime;
uniform float uIntensity;
uniform float uOpacity;

varying float vAge01;
varying vec3  vColor;
varying float vSeed;
varying float vExtra;
varying float vFade;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc) * 2.0;
  if (d > 1.0) discard;

  float core = pow(max(1.0 - d, 0.0), 3.0);
  float glow = pow(max(1.0 - d, 0.0), 1.1);

  // embers pulse slowly as they tumble
  float ph = vSeed * 121.0;
  float flick = 0.45 + 0.55 * (0.5 + 0.5 * sin(uTime * (5.0 + hash11(vSeed) * 9.0) + ph));
  float heat = clamp(vExtra * (0.35 + 0.65 * pow(1.0 - vAge01, 1.7)) * flick, 0.0, 1.0);

  vec3 bb = blackbody(heat * 0.86);
  vec3 col = mix(bb, vColor * (0.4 + heat), 0.4);

  float I = (core * 2.0 + glow * 0.4) * vFade;
  gl_FragColor = vec4(col * I * uIntensity, clamp(I, 0.0, 1.0) * uOpacity);
}
`,zM=`
precision highp float;
${Mn}
${zn}
${qi}
${vr}

uniform float uTime;
uniform float uIntensity;
uniform float uOpacity;

varying float vAge01;
varying vec3  vColor;
varying float vSeed;
varying float vExtra;
varying float vFade;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc) * 2.0;
  if (d > 1.0) discard;

  // slow rotation + fbm gives billowing edges instead of a soft disc
  vec2 rp = rot2(vSeed * 6.2831 + vAge01 * 0.55) * pc;
  float n = fbm2(rp * 3.6 + vec2(vSeed * 37.0, vSeed * 11.0 + vAge01 * 0.6), 4, 2.1, 0.55);

  float edge = smoothstep(1.0, 0.08, d);
  float mask = edge * clamp(0.35 + 1.35 * n - 0.45 * d, 0.0, 1.0);
  if (mask <= 0.003) discard;

  // freshly-born smoke still carries firelight in its folds
  float heat = clamp(vExtra * pow(1.0 - vAge01, 3.0), 0.0, 1.0);
  vec3 col = vColor * (0.10 + 0.42 * n);
  col += blackbody(heat * (0.30 + 0.70 * n)) * heat * 0.75;

  float a = mask * vFade * uOpacity;
  gl_FragColor = vec4(col * uIntensity, clamp(a, 0.0, 1.0));
}
`;class ch{constructor(e){this.attrs=[],this.cursor=0,this.dirtyLo=1/0,this.dirtyHi=-1/0,this._alive=0;const t=e.capacity;this.capacity=t,this.kind=e.kind,this.death=new Float32Array(t);const n=new Tt;this.aPos=new We(new Float32Array(t*3),3),this.aVel=new We(new Float32Array(t*3),3),this.aCol=new We(new Float32Array(t*3),3),this.aData=new We(new Float32Array(t*4),4),this.aSeed=new We(new Float32Array(t),1),this.aPos.setUsage(tn),this.aVel.setUsage(tn),this.aCol.setUsage(tn),this.aData.setUsage(tn),this.aSeed.setUsage(tn);for(let r=0;r<t;r++)this.aData.array[r*4+1]=0;n.setAttribute("position",this.aPos),n.setAttribute("aVel",this.aVel),n.setAttribute("aColor",this.aCol),n.setAttribute("aData",this.aData),n.setAttribute("aSeed",this.aSeed),this.attrs=[this.aPos,this.aVel,this.aCol,this.aData,this.aSeed],n.setDrawRange(0,t),n.boundingSphere=new mi(new b,1e7),this.geo=n;const s=e.kind==="spark"?UM:e.kind==="ember"?OM:zM,a=LM+`void main() {
`+DM+`
  `+FM(e.kind)+`
  `+NM(e.kind)+`
  float px = aData.z * sc * uPixelScale / max(-mv.z, 0.01);
  gl_PointSize = clamp(px, uMinPixels, uMaxPixels);
}
`,o=e.kind==="smoke";this.mat=new xt({uniforms:{uTime:{value:0},uDrag:{value:e.drag??0},uWander:{value:e.wander??0},uAccel:{value:(e.accel??new b).clone()},uPixelScale:{value:900},uMinPixels:{value:e.minPixels??(o?2:1.1)},uMaxPixels:{value:e.maxPixels??(o?900:260)},uIntensity:{value:e.intensity??(o?1:4)},uOpacity:{value:e.opacity??(o?.55:1)}},vertexShader:a,fragmentShader:s,transparent:!0,depthWrite:!1,depthTest:!0,blending:o?ta:Jt,toneMapped:!0}),this.points=new af(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e.renderOrder??(o?8:12)}get material(){return this.mat}get aliveCount(){return this._alive}emit(e,t,n,s,a,o,r,l,c,u,f,h,d,g){const v=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const m=this.aPos.array,p=this.aVel.array,y=this.aCol.array,M=this.aData.array,x=this.aSeed.array;m[v*3]=t,m[v*3+1]=n,m[v*3+2]=s,p[v*3]=a,p[v*3+1]=o,p[v*3+2]=r,y[v*3]=u,y[v*3+1]=f,y[v*3+2]=h,M[v*4]=e,M[v*4+1]=c,M[v*4+2]=l,M[v*4+3]=d,x[v]=g,this.death[v]=e+c,v<this.dirtyLo&&(this.dirtyLo=v),v>this.dirtyHi&&(this.dirtyHi=v)}update(e,t){if(this.mat.uniforms.uTime.value=e,this.mat.uniforms.uPixelScale.value=t,this.dirtyHi>=this.dirtyLo){const n=this.dirtyLo,s=this.dirtyHi-this.dirtyLo+1;for(let a=0;a<this.attrs.length;a++){const o=this.attrs[a];o.clearUpdateRanges(),o.addUpdateRange(n*o.itemSize,s*o.itemSize),o.needsUpdate=!0}this.dirtyLo=1/0,this.dirtyHi=-1/0}}recount(e){let t=0;const n=this.death;for(let s=0;s<n.length;s++)n[s]>e&&t++;return this._alive=t,t}clear(){const e=this.aData.array;for(let t=0;t<this.capacity;t++)e[t*4]=-1e9,e[t*4+1]=0;this.death.fill(-1e9),this._alive=0,this.dirtyLo=0,this.dirtyHi=this.capacity-1,this.cursor=0}dispose(){this.geo.dispose(),this.mat.dispose()}}function BM(i){const e=[],t=i.int(7,11),n=i.range(.28,.6);for(let f=0;f<t;f++)e.push(new b(i.gauss(0,.55),i.gauss(0,.55)*n,i.gauss(0,.55)));for(let f=0;f<2;f++)e.push(new b(i.gauss(0,1.05),i.gauss(0,.3)*n,i.gauss(0,1.05)));let s;try{s=new IM(e)}catch{s=new hf(.8,0)}s=s.toNonIndexed&&s.index?s.toNonIndexed():s,s.computeBoundingSphere();const a=s.boundingSphere;s.translate(-a.center.x,-a.center.y,-a.center.z);const o=1/Math.max(a.radius,.001);s.scale(o,o,o),s.computeVertexNormals();const r=s.attributes.position,l=r.count,c=new Float32Array(l);let u=1e-4;for(let f=0;f<l;f++){const h=Math.hypot(r.getX(f),r.getY(f),r.getZ(f));c[f]=h,h>u&&(u=h)}for(let f=0;f<l;f++)c[f]=Math.pow(c[f]/u,2.2);return s.setAttribute("aEdge",new We(c,1)),s}const kM=`
precision highp float;
attribute float aEdge;
attribute vec4  aData;   // age01, seed, heat, spare
attribute vec3  aColor;

varying vec3  vNormalW;
varying vec3  vViewW;
varying float vEdge;
varying vec4  vData;
varying vec3  vColor;

void main() {
  vEdge = aEdge;
  vData = aData;
  vColor = aColor;

  mat3 im = mat3(instanceMatrix);
  vec4 wp = modelMatrix * (instanceMatrix * vec4(position, 1.0));
  vNormalW = normalize(mat3(modelMatrix) * normalize(im * normal));
  vViewW = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,VM=`
precision highp float;
${Mn}
${qi}

uniform vec3  uLightDir;
uniform vec3  uLightColor;
uniform vec3  uAmbient;
uniform float uHotBoost;

varying vec3  vNormalW;
varying vec3  vViewW;
varying float vEdge;
varying vec4  vData;
varying vec3  vColor;

void main() {
  float age  = clamp(vData.x, 0.0, 1.0);
  float seed = vData.y;
  float heat0 = vData.z;

  vec3 N = normalize(vNormalW);
  vec3 V = normalize(vViewW);
  float ndl = max(dot(N, uLightDir), 0.0);
  float rim = pow(1.0 - max(dot(N, V), 0.0), 2.6);

  vec3 albedo = vColor * (0.42 + 0.42 * hash11(seed * 13.0));
  vec3 lit = albedo * (uAmbient + uLightColor * (ndl * 1.15 + 0.05));
  lit += albedo * rim * 0.35;

  // hot torn edges cool through the black-body ramp
  float heat = clamp(heat0 * pow(1.0 - age, 2.1), 0.0, 1.0);
  float flick = 0.75 + 0.25 * sin(seed * 91.0 + age * 40.0);
  vec3 hot = blackbody(heat) * heat * (0.18 + 1.15 * vEdge) * uHotBoost * flick;

  float alpha = 1.0 - smoothstep(0.82, 1.0, age);
  gl_FragColor = vec4(lit + hot, alpha);
}
`,qa=8,hp=new Ct,fp=new b,dp=new st;class GM{constructor(e=512,t=9021){this.meshes=[],this.colAttr=[],this.dataAttr=[],this.geos=[],this.chunks=[],this.free=[],this.counts=[],this._alive=0,this.gravity=new b(0,0,0),this.drag=.35,this.capacity=e,this.perMesh=Math.ceil(e/qa),this.group=new Gn,this.group.name="fx-debris",this.mat=new xt({uniforms:{uLightDir:{value:new b(.45,.75,.48).normalize()},uLightColor:{value:new Ve(1,.96,.9)},uAmbient:{value:new Ve(.1,.13,.18)},uHotBoost:{value:1.6}},vertexShader:kM,fragmentShader:VM,transparent:!0,depthWrite:!0,depthTest:!0,side:cn,toneMapped:!0});const n=new Qt(t);for(let s=0;s<qa;s++){const a=BM(n.fork(s+1)),o=new hi(new Float32Array(this.perMesh*3),3),r=new hi(new Float32Array(this.perMesh*4),4);o.setUsage(tn),r.setUsage(tn),a.setAttribute("aColor",o),a.setAttribute("aData",r);const l=new hs(a,this.mat,this.perMesh);l.instanceMatrix.setUsage(tn),l.frustumCulled=!1,l.count=0,l.renderOrder=4,this.group.add(l),this.meshes.push(l),this.colAttr.push(o),this.dataAttr.push(r),this.geos.push(a),this.counts.push(0)}for(let s=0;s<e;s++)this.chunks.push({active:!1,variant:s%qa,pos:new b,vel:new b,quat:new Ct,spinAxis:new b(0,1,0),spinRate:0,scale:1,age:0,life:1,heat:1,seed:0,color:new Ve(.42,.44,.48)}),this.free.push(s)}get material(){return this.mat}get aliveCount(){return this._alive}spawn(e,t,n,s,a,o,r){let l=this.free.pop();if(l===void 0){let u=-1,f=-1;for(let h=0;h<this.chunks.length;h++){const d=this.chunks[h],g=d.age/d.life;g>f&&(f=g,u=h)}if(u<0)return;l=u}const c=this.chunks[l];c.active=!0,c.variant=r.int(0,qa-1),c.pos.copy(e),c.vel.copy(t),c.quat.set(r.gauss(),r.gauss(),r.gauss(),r.gauss()).normalize(),c.spinAxis.set(r.gauss(),r.gauss(),r.gauss()).normalize(),c.spinRate=r.range(1.5,9)*r.sign(),c.scale=n,c.age=0,c.life=s,c.heat=a,c.seed=r.next(),c.color.copy(o)}update(e){for(let n=0;n<qa;n++)this.counts[n]=0;let t=0;for(let n=0;n<this.chunks.length;n++){const s=this.chunks[n];if(!s.active)continue;if(s.age+=e,s.age>=s.life){s.active=!1,this.free.push(n);continue}t++;const a=Math.exp(-this.drag*e);s.pos.addScaledVector(s.vel,e),s.vel.multiplyScalar(a),s.vel.addScaledVector(this.gravity,e);const o=s.spinRate*e;hp.setFromAxisAngle(s.spinAxis,o),s.quat.multiply(hp);const r=s.age/s.life,l=s.scale*(1-Math.pow(Math.max(0,(r-.72)/.28),1.4));fp.set(l,l,l),dp.compose(s.pos,s.quat,fp);const c=s.variant,u=this.counts[c];if(u>=this.perMesh)continue;this.counts[c]=u+1,this.meshes[c].setMatrixAt(u,dp);const f=this.dataAttr[c].array;f[u*4]=r,f[u*4+1]=s.seed,f[u*4+2]=s.heat,f[u*4+3]=0;const h=this.colAttr[c].array;h[u*3]=s.color.r,h[u*3+1]=s.color.g,h[u*3+2]=s.color.b}this._alive=t;for(let n=0;n<qa;n++){const s=this.counts[n],a=this.meshes[n];a.count=s,a.visible=s>0,s>0&&(a.instanceMatrix.needsUpdate=!0,this.colAttr[n].needsUpdate=!0,this.dataAttr[n].needsUpdate=!0)}}clear(){for(let e=0;e<this.chunks.length;e++)this.chunks[e].active&&(this.chunks[e].active=!1,this.free.push(e));for(let e=0;e<qa;e++)this.meshes[e].count=0,this.counts[e]=0;this._alive=0}dispose(){for(const e of this.geos)e.dispose();for(const e of this.meshes)e.dispose();this.mat.dispose()}}const Lr=512,Xa=96,Ya=64,HM=4e3,WM=2e3,qM=600,pp=512,XM=10,YM=4,mp=new b,gp=new b,Ro=new Ct,Io=new st,$M=new b(1,1,1),vp=new b(0,0,1),Dr=new b,xp=new b,Lo=new b,Do=new b,$a=new b,Ma=new b,ys=new b,cc=new b,Fr=new b,Nr=new b,_p=new b,uh=new b,uc=new b,Ur=new b,hc=new b,fc=new b,Sa=new b,Pi=new b,_i=new b,dc=new b,Fo=new b,bs=new b,ri=new b,wa=new Ve,Ms=new Ve,Ta=new Ve,Gi=new Ve,KM=`
precision highp float;
attribute vec4 aData;    // spawnTime, life, size, seed
attribute vec3 aColor;
uniform float uTime;
varying vec2  vUv;
varying float vA;
varying vec3  vColor;
varying float vSeed;
void main() {
  float a01 = (uTime - aData.x) / max(aData.y, 1e-4);
  vUv = uv; vA = a01; vColor = aColor; vSeed = aData.w;
  if (a01 < 0.0 || a01 >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  // pops to near full size instantly, then swells
  float s = aData.z * (0.55 + 0.75 * pow(a01, 0.42));
  vec3 originVS = (modelViewMatrix * (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0))).xyz;
  vec3 p = originVS + vec3(position.x, position.y, 0.0) * s;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}
`,ZM=`
precision highp float;
${Mn}
${qi}
uniform float uIntensity;
varying vec2  vUv;
varying float vA;
varying vec3  vColor;
varying float vSeed;
void main() {
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);
  if (r > 1.0) discard;
  float inv = max(1.0 - r, 0.0);

  float core = pow(inv, 7.0) * 3.2;
  float halo = pow(inv, 2.0) * 0.85;
  float wide = pow(inv, 1.05) * 0.26;

  float ang = atan(p.y, p.x);
  float spikes = pow(abs(cos(ang * 2.0 + vSeed * 6.2831)), 26.0) * pow(inv, 1.25) * 0.8;
  float streak = exp(-abs(p.y) * 20.0) * exp(-abs(p.x) * 1.35) * 0.5;

  // thin expanding shell
  float rr = pow(vA, 0.44);
  float th = max(0.10 * (1.0 - vA * 0.7), 0.02);
  float shell = exp(-pow((r - rr) / th, 2.0)) * (1.0 - vA) * 0.9;

  float decay = pow(max(1.0 - vA, 0.0), 1.7);
  float I = (core + halo + wide + spikes + streak + shell) * decay;

  // white at ignition, settling into the tint as it dies
  vec3 c = mix(vec3(1.0, 0.99, 0.96), vColor, smoothstep(0.04, 0.5, vA));
  vec3 col = c * I + vec3(1.0) * core * decay * 0.7;
  gl_FragColor = vec4(col * uIntensity, clamp(I, 0.0, 1.0));
}
`,JM=`
precision highp float;
attribute vec4 aData;   // spawnTime, life, seed, thickness
attribute vec3 aColor;
uniform float uTime;
varying vec2  vUv;
varying float vA;
varying vec3  vColor;
varying float vSeed;
varying float vTh;
void main() {
  float a01 = (uTime - aData.x) / max(aData.y, 1e-4);
  vUv = uv; vA = a01; vColor = aColor; vSeed = aData.z; vTh = aData.w;
  if (a01 < 0.0 || a01 >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  gl_Position = projectionMatrix * modelViewMatrix * (instanceMatrix * vec4(position, 1.0));
}
`,QM=`
precision highp float;
${Mn}
${zn}
uniform float uIntensity;
varying vec2  vUv;
varying float vA;
varying vec3  vColor;
varying float vSeed;
varying float vTh;
void main() {
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);
  if (r > 1.0) discard;

  float ang = atan(p.y, p.x);
  // ragged, turbulent front instead of a perfect circle
  float rag = 0.965 + 0.07 * (fbm2(vec2(ang * 6.5, vSeed * 33.0), 3, 2.2, 0.55) - 0.5) * 2.0;
  float rr = pow(vA, 0.40) * rag;
  float th = max(mix(0.075, 0.010, pow(vA, 0.6)) * vTh, 0.006);

  float d = (r - rr) / th;
  float ring = exp(-d * d);
  float wash = smoothstep(rr, rr - th * 7.0, r) * 0.07 * (1.0 - vA);

  float decay = pow(max(1.0 - vA, 0.0), 1.5);
  float I = (ring * 1.35 + wash) * decay;
  if (I < 0.002) discard;

  vec3 hot = mix(vec3(1.0, 0.94, 0.78), vColor * vec3(1.1, 0.75, 0.45), smoothstep(0.0, 0.30, vA));
  vec3 col = hot * I + vec3(1.0, 0.97, 0.9) * pow(ring, 5.0) * pow(decay, 2.5) * 0.55;
  gl_FragColor = vec4(col * uIntensity, clamp(I, 0.0, 1.0));
}
`,jM=`
precision highp float;
${Mn}
${zn}
uniform float uTime, uSeed, uDisp, uNoiseScale, uAge01, uChurn;
varying vec3  vDir;
varying float vDisp;
varying vec3  vNormalW;
varying vec3  vViewW;
void main() {
  vec3 n = normalize(position);
  vec3 q = n * uNoiseScale + vec3(uSeed * 17.3, uSeed * 31.7, uSeed * 7.1);
  // Keep the displacement band-limited: the top octave must stay coarser than
  // the vertex spacing or the icosphere grows spikes instead of billows.
  q = warp3(q + vec3(0.0, uTime * uChurn, uTime * uChurn * 0.4), 0.30, 0.85);
  float f = fbm3(q, 3, 2.0, 0.5);
  float rg = ridged3(q * 1.35, 2, 2.1, 0.5);
  float d = (f - 0.5) * 2.0 * uDisp + (rg - 0.45) * uDisp * 0.8;
  // smooth at ignition, lumpy as it billows out
  d *= mix(0.30, 1.0, smoothstep(0.0, 0.30, uAge01));
  vDisp = d;
  vDir = n;
  vec3 pos = n * (1.0 + d);
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * n);
  vViewW = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,eS=`
precision highp float;
${Mn}
${zn}
${qi}
uniform float uTime, uSeed, uAge01, uHeat, uBright, uOpacity, uThresh, uDetail, uChurn;
uniform float uDispHeat, uFresHeat, uContrast;
uniform vec3  uTint;
varying vec3  vDir;
varying float vDisp;
varying vec3  vNormalW;
varying vec3  vViewW;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(vViewW);
  float fres = pow(1.0 - abs(dot(N, V)), 1.8);

  vec3 q = vDir * uDetail + vec3(uSeed * 11.7);
  float n1  = fbm3(q + vec3(0.0, uTime * uChurn * 1.6, 0.0), 4, 2.2, 0.52);
  float rid = ridged3(q * 2.05 - vec3(uTime * uChurn), 3, 2.3, 0.5);

  // hard-edged billows: the gaps are what let the inner shells read through
  float raw = n1 * 1.55 + vDisp * 1.25 + fres * 0.80;
  float dens = smoothstep(uThresh, uThresh + uContrast, raw);
  if (dens < 0.004) discard;

  // hot filaments live in the ridges; everything cools with age
  float temp = uHeat * (0.35 + 0.85 * rid) * (0.50 + 0.75 * n1)
             + vDisp * uDispHeat + fres * uFresHeat;
  temp = clamp(temp, 0.0, 1.0);

  vec3 col = blackbody(temp) * uTint;
  // sooty edges once it has cooled
  col = mix(col, col * vec3(0.50, 0.36, 0.32), smoothstep(0.35, 1.0, uAge01) * (1.0 - temp));

  float a = clamp(dens * uOpacity, 0.0, 1.0);
  gl_FragColor = vec4(col * uBright, a);
}
`,pc=[{s0:.13,s1:.72,bright:1.7,opacity:.95,thresh:.42,contrast:.55,disp:.2,noiseScale:2,detail:3.4,churn:.95,heat:1.3,heatPow:1.05,dispHeat:.55,fresHeat:.22,fadeOut:.4},{s0:.28,s1:2,bright:.6,opacity:.92,thresh:.72,contrast:.42,disp:.36,noiseScale:2.2,detail:4.4,churn:.55,heat:.95,heatPow:1.75,dispHeat:.45,fresHeat:.15,fadeOut:.92},{s0:.42,s1:3.1,bright:.36,opacity:.72,thresh:.92,contrast:.55,disp:.52,noiseScale:1.7,detail:4.6,churn:.32,heat:.48,heatPow:2.3,dispHeat:.18,fresHeat:.05,fadeOut:1}];class tS{constructor(e){this.hitTest=null,this.intensity=1,this.rng=new Qt(48879),this.time=0,this.frame=0,this.pixelScale=900,this.bolts=[],this.nBolts=0,this.flashCursor=0,this.ringCursor=0,this.blasts=[],this.nBlasts=0,this.lightSlots=[],this.trails=[],this.particleCount=0,this.scene=e,this.group=new Gn,this.group.name="fx",e.add(this.group),this.boltGeo=SM(),this.boltMat=EM(),this.boltColor=new hi(new Float32Array(Lr*3),3),this.boltData=new hi(new Float32Array(Lr*4),4),this.boltColor.setUsage(tn),this.boltData.setUsage(tn),this.boltGeo.setAttribute("aColor",this.boltColor),this.boltGeo.setAttribute("aData",this.boltData),this.boltMesh=new hs(this.boltGeo,this.boltMat,Lr),this.boltMesh.instanceMatrix.setUsage(tn),this.boltMesh.frustumCulled=!1,this.boltMesh.count=0,this.boltMesh.renderOrder=14,this.boltMesh.name="fx-lasers",this.group.add(this.boltMesh);for(let t=0;t<Lr;t++)this.bolts.push({pos:new b,dir:new b(0,0,1),color:new Ve(1,.2,.1),speed:2200,len:26,rad:.45,life:2.4,age:0,team:"rebel",seed:0});this.flashGeo=new Us(2,2),this.flashData=new hi(new Float32Array(Xa*4),4),this.flashColor=new hi(new Float32Array(Xa*3),3),this.flashData.setUsage(tn),this.flashColor.setUsage(tn),this.flashGeo.setAttribute("aData",this.flashData),this.flashGeo.setAttribute("aColor",this.flashColor),this.flashMat=new xt({uniforms:{uTime:{value:0},uIntensity:{value:3}},vertexShader:KM,fragmentShader:ZM,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,toneMapped:!0}),this.flashMesh=new hs(this.flashGeo,this.flashMat,Xa),this.flashMesh.instanceMatrix.setUsage(tn),this.flashMesh.frustumCulled=!1,this.flashMesh.count=Xa,this.flashMesh.renderOrder=16,this.flashMesh.name="fx-flash",this.group.add(this.flashMesh);for(let t=0;t<Xa;t++)this.flashData.array[t*4]=-1e9,this.flashData.array[t*4+1]=1;this.ringGeo=new Us(2,2),this.ringData=new hi(new Float32Array(Ya*4),4),this.ringColor=new hi(new Float32Array(Ya*3),3),this.ringData.setUsage(tn),this.ringColor.setUsage(tn),this.ringGeo.setAttribute("aData",this.ringData),this.ringGeo.setAttribute("aColor",this.ringColor),this.ringMat=new xt({uniforms:{uTime:{value:0},uIntensity:{value:.95}},vertexShader:JM,fragmentShader:QM,transparent:!0,depthWrite:!1,depthTest:!0,side:cn,blending:Jt,toneMapped:!0}),this.ringMesh=new hs(this.ringGeo,this.ringMat,Ya),this.ringMesh.instanceMatrix.setUsage(tn),this.ringMesh.frustumCulled=!1,this.ringMesh.count=Ya,this.ringMesh.renderOrder=15,this.ringMesh.name="fx-rings",this.group.add(this.ringMesh);for(let t=0;t<Ya;t++)this.ringData.array[t*4]=-1e9,this.ringData.array[t*4+1]=1;this.sparkSys=new ch({capacity:HM,kind:"spark",drag:2.6,wander:.35,intensity:2,renderOrder:12,maxPixels:180}),this.emberSys=new ch({capacity:WM,kind:"ember",drag:.9,wander:.9,intensity:1.5,renderOrder:12,maxPixels:140}),this.smokeSys=new ch({capacity:qM,kind:"smoke",drag:1.35,wander:1.6,intensity:1,opacity:.44,renderOrder:8,maxPixels:1400}),this.sparkSys.points.name="fx-sparks",this.emberSys.points.name="fx-embers",this.smokeSys.points.name="fx-smoke",this.group.add(this.sparkSys.points,this.emberSys.points,this.smokeSys.points),this.debrisField=new GM(pp,4711),this.group.add(this.debrisField.group),this.shellGeo=new Ns(1,12);for(let t=0;t<XM;t++){const n=new Gn;n.name="fx-blast",n.visible=!1;const s=[],a=[];for(let o=0;o<pc.length;o++){const r=pc[o],l=new xt({uniforms:{uTime:{value:0},uSeed:{value:0},uAge01:{value:0},uHeat:{value:1},uBright:{value:r.bright},uOpacity:{value:r.opacity},uThresh:{value:r.thresh},uDisp:{value:r.disp},uNoiseScale:{value:r.noiseScale},uDetail:{value:r.detail},uChurn:{value:r.churn},uTint:{value:new Ve(1,1,1)},uDispHeat:{value:r.dispHeat},uFresHeat:{value:r.fresHeat},uContrast:{value:r.contrast}},vertexShader:jM,fragmentShader:eS,transparent:!0,depthWrite:!1,depthTest:!0,side:pi,blending:Jt,toneMapped:!0}),c=new ft(this.shellGeo,l);c.frustumCulled=!1,c.renderOrder=9+(pc.length-1-o),n.add(c),s.push(c),a.push(l)}this.group.add(n),this.blasts.push({group:n,shells:s,mats:a,active:!1,age:0,life:1,radius:1,smokeAcc:0,wantSmoke:!0,tint:new Ve(1,1,1),spinAxis:new b(0,1,0),spinRate:0})}for(let t=0;t<YM;t++){const n=new A0(16777215,0,100,2);n.visible=!1,this.group.add(n),this.lightSlots.push({light:n,age:0,life:1,base:0,active:!1})}}setKeyLight(e,t,n){const s=this.debrisField.material.uniforms;s.uLightDir.value.copy(e).normalize(),t&&s.uLightColor.value.copy(t),n&&s.uAmbient.value.copy(n)}laser(e,t,n){const s=n?.team??"rebel";if(this.nBolts>=Lr){let r=0,l=-1;for(let c=0;c<this.nBolts;c++)this.bolts[c].age>l&&(l=this.bolts[c].age,r=c);this.swapRemoveBolt(r)}const a=this.bolts[this.nBolts++];a.pos.copy(e),a.dir.copy(t),a.dir.lengthSq()<1e-9?a.dir.set(0,0,1):a.dir.normalize();const o=s==="turbo";a.speed=n?.speed??(o?3200:2200),a.len=n?.length??(o?90:26),a.rad=n?.radius??(o?1.5:.45),a.life=n?.life??2.4,a.age=0,a.team=s,a.seed=this.rng.next(),n?.color?a.color.copy(n.color):a.color.copy(s==="rebel"?R0:o?Om:Zc),n?.muzzleFlash!==!1&&this.muzzleFlash(e,a.dir,a.color,o?3.2:1)}swapRemoveBolt(e){const t=--this.nBolts;if(e!==t){const n=this.bolts[e];this.bolts[e]=this.bolts[t],this.bolts[t]=n}}spawnFlash(e,t,n,s){const a=this.flashCursor;this.flashCursor=(this.flashCursor+1)%Xa,Io.makeTranslation(e.x,e.y,e.z),this.flashMesh.setMatrixAt(a,Io);const o=this.flashData.array;o[a*4]=this.time,o[a*4+1]=n,o[a*4+2]=t,o[a*4+3]=this.rng.next();const r=this.flashColor.array;r[a*3]=s.r,r[a*3+1]=s.g,r[a*3+2]=s.b,this.flashMesh.instanceMatrix.needsUpdate=!0,this.flashData.needsUpdate=!0,this.flashColor.needsUpdate=!0}spawnRing(e,t,n,s,a,o=1){const r=this.ringCursor;this.ringCursor=(this.ringCursor+1)%Ya,Dr.copy(t),Dr.lengthSq()<1e-9?Dr.set(0,1,0):Dr.normalize(),Ro.setFromUnitVectors(vp,Dr),xp.setScalar(n),Io.compose(e,Ro,xp),this.ringMesh.setMatrixAt(r,Io);const l=this.ringData.array;l[r*4]=this.time,l[r*4+1]=s,l[r*4+2]=this.rng.next(),l[r*4+3]=o;const c=this.ringColor.array;c[r*3]=a.r,c[r*3+1]=a.g,c[r*3+2]=a.b,this.ringMesh.instanceMatrix.needsUpdate=!0,this.ringData.needsUpdate=!0,this.ringColor.needsUpdate=!0}muzzleFlash(e,t,n,s=1){Lo.copy(t),Lo.lengthSq()<1e-9?Lo.set(0,0,1):Lo.normalize(),Do.copy(e).addScaledVector(Lo,.6*s),this.spawnFlash(Do,2*s,.085+.03*s,n);const a=4+Math.round(s*3);for(let o=0;o<a;o++)$a.copy(Lo).multiplyScalar(this.rng.range(14,46)*s),$a.x+=this.rng.gauss(0,5*s),$a.y+=this.rng.gauss(0,5*s),$a.z+=this.rng.gauss(0,5*s),this.sparkSys.emit(this.time,Do.x,Do.y,Do.z,$a.x,$a.y,$a.z,.1*s,this.rng.range(.05,.16),n.r,n.g,n.b,this.rng.range(.75,1),this.rng.next());this.requestLight(Do,n,70*s*s,40*s,.075)}impact(e,t,n,s=1){Ma.copy(t),Ma.lengthSq()<1e-9?Ma.set(0,1,0):Ma.normalize(),ys.copy(e).addScaledVector(Ma,.35*s),wa.copy(n),this.spawnFlash(ys,5.2*s,.17+.05*s,wa),this.spawnRing(ys,Ma,7*s,.28+.08*s,wa,.85),this.sparks(ys,Ma,Math.round(16+12*s),wa,30*Math.sqrt(s));const a=Math.round(3+4*s);for(let o=0;o<a;o++)this.randomCone(Ma,1.15,cc).multiplyScalar(this.rng.range(2,12)*Math.sqrt(s)),this.emberSys.emit(this.time,ys.x,ys.y,ys.z,cc.x,cc.y,cc.z,.22*s,this.rng.range(.55,1.6),wa.r,wa.g,wa.b,this.rng.range(.55,.95),this.rng.next());s>1.4&&(this.smokePuff(ys,1.4*s,.9+.25*s),this.debrisBurst(ys,Math.round(2+s),{speed:9*Math.sqrt(s),scale:.2*s,life:1.6,glow:.8})),this.requestLight(ys,wa,140*s*s,55*s,.16)}sparks(e,t,n,s,a=26){Fr.copy(t),Fr.lengthSq()<1e-9?Fr.set(0,1,0):Fr.normalize();const o=Math.max(0,Math.min(n,500)),r=e.x,l=e.y,c=e.z,u=s.r,f=s.g,h=s.b;for(let d=0;d<o;d++){this.randomCone(Fr,1.35,Nr),Nr.multiplyScalar(a*this.rng.range(.25,1.35));const g=this.rng.range(.12,.5)*(1+a*.006);this.sparkSys.emit(this.time,r,l,c,Nr.x,Nr.y,Nr.z,this.rng.range(.05,.16)*(1+a*.004),g,u,f,h,this.rng.range(.7,1),this.rng.next())}}randomCone(e,t,n){n.set(this.rng.gauss(),this.rng.gauss(),this.rng.gauss()),n.lengthSq()<1e-9&&n.set(0,1,0),n.normalize();const s=we(1-t/Math.PI,0,1);return n.lerp(e,s*.85+.12),n.lengthSq()<1e-9&&n.copy(e),n.normalize()}randomSphere(e){const t=this.rng.range(-1,1),n=this.rng.range(0,Math.PI*2),s=Math.sqrt(Math.max(0,1-t*t));return e.set(s*Math.cos(n),s*Math.sin(n),t)}explosion(e,t,n){const s=Math.max(.5,t),a=n?.life??we(.55+Math.sqrt(s)*.34,.5,9),o=n?.color??null,r=this.rng;n?.seed!==void 0&&(this.rng=new Qt(n.seed));const l=this.rng;_i.copy(e),o?Ms.copy(o):Ms.setRGB(1,.88,.66),this.spawnFlash(_i,s*.85,we(.07+s*.0016,.06,.38),Ms);const c=this.acquireBlast();if(c){c.active=!0,c.age=0,c.life=a,c.radius=s,c.smokeAcc=0,c.wantSmoke=n?.smoke!==!1,o?c.tint.copy(o).lerp(Gi.setRGB(1,1,1),.4):c.tint.setRGB(1,1,1),c.spinAxis.set(l.gauss(),l.gauss(),l.gauss()),c.spinAxis.lengthSq()<1e-9&&c.spinAxis.set(0,1,0),c.spinAxis.normalize(),c.spinRate=l.range(.08,.35)*l.sign(),c.group.position.copy(_i),c.group.quaternion.set(l.gauss(),l.gauss(),l.gauss(),l.gauss()).normalize(),c.group.visible=!0;const p=l.next();for(let y=0;y<c.mats.length;y++){const M=c.mats[y].uniforms;M.uSeed.value=p*(1+y*.37)+y*3.1,M.uTint.value.copy(c.tint)}this.nBlasts++}n?.shock!==!1&&(o?Ms.copy(o):Ms.setRGB(1,.82,.55),this.randomSphere(fc),this.spawnRing(_i,fc,s*3,we(.16+Math.sqrt(s)*.055,.14,.9),Ms,1),s>55&&(this.randomSphere(fc),this.spawnRing(_i,fc,s*2,we(.2+Math.sqrt(s)*.05,.18,.8),Ms,1.8)));const u=n?.debris??Math.round(we(6+s*.9,6,64));this.debrisBurst(_i,u,{speed:we(s*1.5,6,220),scale:we(s*.075,.12,9),life:we(a*1.35,.8,9),glow:1}),o?Ta.copy(o).lerp(Gi.setRGB(1,.7,.35),.5):Ta.setRGB(1,.62,.28);const f=Math.round(we(30+s*3.2,30,320)),h=we(s*.02,.05,1.4),d=we(s*2.6,14,420),g=we(.25+Math.sqrt(s)*.22,.2,2.6);for(let p=0;p<f;p++)this.randomSphere(Pi),Pi.multiplyScalar(d*(.35+.75*Math.pow(l.next(),.4))),this.sparkSys.emit(this.time,_i.x,_i.y,_i.z,Pi.x,Pi.y,Pi.z,h*l.range(.5,1.7),g*l.range(.35,1.3),Ta.r,Ta.g,Ta.b,l.range(.7,1),l.next());const v=Math.round(we(12+s*1.1,12,160)),m=we(s*.85,3,130);for(let p=0;p<v;p++)this.randomSphere(Pi).multiplyScalar(m*l.range(.2,1)),this.emberSys.emit(this.time,_i.x,_i.y,_i.z,Pi.x,Pi.y,Pi.z,we(s*.03,.08,2.2),a*l.range(.7,1.9),Ta.r,Ta.g,Ta.b,l.range(.55,1),l.next());if(n?.smoke!==!1){const p=Math.round(we(2+s*.05,2,8));for(let y=0;y<p;y++)this.randomSphere(Sa).multiplyScalar(s*l.range(.15,.7)),Pi.copy(Sa).multiplyScalar(l.range(.6,1.6)),Sa.add(_i),this.smokePuff(Sa,s*l.range(.35,.8),a*l.range(1.2,2.4),Pi)}n?.light!==!1&&(o?Ms.copy(o):Ms.setRGB(1,.72,.42),this.requestLight(_i,Ms,5.5*s*s,s*14,we(a*.5,.12,2.2))),this.rng=r}acquireBlast(){for(let n=0;n<this.blasts.length;n++)if(!this.blasts[n].active)return this.blasts[n];let e=null,t=-1;for(let n=0;n<this.blasts.length;n++){const s=this.blasts[n].age/this.blasts[n].life;s>t&&(t=s,e=this.blasts[n])}return e&&this.nBlasts--,e}debrisBurst(e,t,n){const s=n?.speed??22,a=n?.scale??.35,o=n?.life??2.4,r=n?.glow??1,l=Math.max(0,Math.min(t,pp));Gi.setRGB(.21,.22,.25);const c=e.x,u=e.y,f=e.z;for(let h=0;h<l;h++)this.randomSphere(uh).multiplyScalar(s*this.rng.range(.25,1.25)),n?.velocity&&uh.add(n.velocity),_p.set(c+this.rng.gauss(0,a*1.4),u+this.rng.gauss(0,a*1.4),f+this.rng.gauss(0,a*1.4)),this.debrisField.spawn(_p,uh,a*this.rng.range(.45,1.6),o*this.rng.range(.6,1.35),we(r*this.rng.range(.5,1),0,1),Gi,this.rng)}smokePuff(e,t,n=2.2,s){const a=Math.round(we(3+t*.32,3,26));Gi.setRGB(.135,.118,.112);const o=e.x,r=e.y,l=e.z;for(let c=0;c<a;c++)this.randomSphere(Ur).multiplyScalar(t*this.rng.range(.12,.55)),s&&Ur.add(s),this.randomSphere(hc).multiplyScalar(t*this.rng.range(0,.55)),uc.set(o+hc.x,r+hc.y,l+hc.z),this.smokeSys.emit(this.time,uc.x,uc.y,uc.z,Ur.x,Ur.y,Ur.z,t*this.rng.range(.8,1.8),n*this.rng.range(.65,1.4),Gi.r,Gi.g,Gi.b,this.rng.range(.25,.85),this.rng.next())}emberTrail(e,t){const n=this.findTrail(e);t?n<0&&this.trails.push({obj:e,last:new b,started:!1,acc:0,timeAcc:0}):n>=0&&this.trails.splice(n,1)}findTrail(e){for(let t=0;t<this.trails.length;t++)if(this.trails[t].obj===e)return t;return-1}updateTrails(e){const t=1/Math.max(e,1e-4);for(let n=0;n<this.trails.length;n++){const s=this.trails[n];if(s.obj.updateWorldMatrix(!0,!1),s.obj.getWorldPosition(dc),!s.started){s.last.copy(dc),s.started=!0;continue}Fo.subVectors(dc,s.last);const a=Fo.length();s.acc+=a,s.timeAcc+=e;const o=1.6;let r=Math.floor(s.acc/o);r>10&&(r=10),r>0&&(s.acc-=r*o),s.timeAcc>.05&&(s.timeAcc=0,r===0&&(r=1)),Gi.setRGB(1,.5,.18);for(let l=0;l<r;l++){const c=(l+1)/(r+1);bs.copy(s.last).addScaledVector(Fo,c),this.randomSphere(ri).multiplyScalar(this.rng.range(.5,4.5)),ri.addScaledVector(Fo,t*this.rng.range(.12,.45)),this.emberSys.emit(this.time,bs.x,bs.y,bs.z,ri.x,ri.y,ri.z,this.rng.range(.2,.6),this.rng.range(.5,1.7),Gi.r,Gi.g,Gi.b,this.rng.range(.6,1),this.rng.next()),this.rng.bool(.4)&&(this.randomSphere(ri).multiplyScalar(this.rng.range(2,14)),ri.addScaledVector(Fo,t*this.rng.range(.05,.3)),this.sparkSys.emit(this.time,bs.x,bs.y,bs.z,ri.x,ri.y,ri.z,this.rng.range(.12,.3),this.rng.range(.12,.4),1,.6,.3,this.rng.range(.8,1),this.rng.next())),this.rng.bool(.14)&&(this.randomSphere(ri).multiplyScalar(this.rng.range(.5,2.5)),ri.addScaledVector(Fo,t*this.rng.range(.02,.15)),this.smokeSys.emit(this.time,bs.x,bs.y,bs.z,ri.x,ri.y,ri.z,this.rng.range(1.2,3),this.rng.range(1.2,3),.22,.2,.2,this.rng.range(.1,.4),this.rng.next()))}s.last.copy(dc)}}requestLight(e,t,n,s,a){let o=null;for(let r=0;r<this.lightSlots.length;r++)if(!this.lightSlots[r].active){o=this.lightSlots[r];break}if(!o){let r=null,l=1/0;for(let c=0;c<this.lightSlots.length;c++){const u=this.lightSlots[c],f=u.base*Math.max(0,1-u.age/u.life);f<l&&(l=f,r=u)}if(!r||n<=l)return;o=r}o.active=!0,o.age=0,o.life=Math.max(a,.001),o.base=n,o.light.color.copy(t),o.light.distance=s,o.light.decay=2,o.light.position.copy(e),o.light.intensity=n,o.light.visible=!0}updateLights(e){for(let t=0;t<this.lightSlots.length;t++){const n=this.lightSlots[t];if(!n.active)continue;if(n.age+=e,n.age>=n.life){n.active=!1,n.light.intensity=0,n.light.visible=!1;continue}const s=1-n.age/n.life;n.light.intensity=n.base*s*s}}update(e,t,n){this.time=t,this.frame++;const s=n;if(s&&s.isPerspectiveCamera){const c=typeof window<"u"&&window.devicePixelRatio||1,u=(typeof window<"u"?window.innerHeight:1080)*c;this.pixelScale=u/(2*Math.tan(s.fov*Math.PI/360))}for(let c=this.nBolts-1;c>=0;c--){const u=this.bolts[c];mp.copy(u.pos),u.pos.addScaledVector(u.dir,u.speed*e),u.age+=e;let f=u.age>=u.life;if(!f&&this.hitTest){const h=this.hitTest(mp,u.pos,u.team);if(h){const d=u.team==="turbo"?3.4:1;this.impact(h.point,h.normal,u.color,d),this.sparks(h.point,h.normal,u.team==="turbo"?40:16,u.color,34*d),f=!0}}f&&this.swapRemoveBolt(c)}const a=this.boltColor.array,o=this.boltData.array,r=this.nBolts;for(let c=0;c<r;c++){const u=this.bolts[c],f=Math.min(1,u.age*u.speed/u.len+.3),h=u.len*f;gp.copy(u.pos).addScaledVector(u.dir,-h),Ro.setFromUnitVectors(vp,u.dir),Io.compose(gp,Ro,$M),this.boltMesh.setMatrixAt(c,Io),a[c*3]=u.color.r,a[c*3+1]=u.color.g,a[c*3+2]=u.color.b,o[c*4]=u.age/u.life,o[c*4+1]=h,o[c*4+2]=u.rad,o[c*4+3]=u.seed}this.boltMesh.count=r,this.boltMesh.visible=r>0,r>0&&(this.boltMesh.instanceMatrix.needsUpdate=!0,this.boltColor.needsUpdate=!0,this.boltData.needsUpdate=!0),this.boltMat.uniforms.uTime.value=t,this.boltMat.uniforms.uPixelScale.value=1/this.pixelScale,this.boltMat.uniforms.uIntensity.value=4.2*this.intensity,this.updateTrails(e);let l=0;for(let c=0;c<this.blasts.length;c++){const u=this.blasts[c];if(!u.active)continue;if(u.age+=e,u.age>=u.life){u.active=!1,u.group.visible=!1;continue}l++;const f=u.age/u.life;Ro.setFromAxisAngle(u.spinAxis,u.spinRate*e),u.group.quaternion.multiply(Ro);for(let h=0;h<u.mats.length;h++){const d=pc[h],g=u.mats[h].uniforms,v=1-Math.pow(1-f,2.3);u.shells[h].scale.setScalar(u.radius*(d.s0+(d.s1-d.s0)*v)),g.uTime.value=t,g.uAge01.value=f,g.uHeat.value=d.heat*Math.pow(Math.max(0,1-f),d.heatPow);const m=we(1-f/d.fadeOut,0,1);g.uOpacity.value=d.opacity*Math.pow(m,.8),g.uBright.value=d.bright*this.intensity*Math.pow(m,.5),u.shells[h].visible=m>.004}if(u.wantSmoke&&f<.55){u.smokeAcc+=e;const h=we(.3-u.radius*4e-4,.06,.3);let d=0;for(;u.smokeAcc>h&&d++<4;)u.smokeAcc-=h,this.randomSphere(Sa).multiplyScalar(u.radius*this.rng.range(.5,1.4)),Pi.copy(Sa).multiplyScalar(this.rng.range(.2,.7)),Sa.add(u.group.position),this.smokePuff(Sa,u.radius*this.rng.range(.25,.6),u.life*this.rng.range(1.1,2.2),Pi)}}this.nBlasts=l,this.debrisField.update(e),this.sparkSys.update(t,this.pixelScale),this.emberSys.update(t,this.pixelScale),this.smokeSys.update(t,this.pixelScale),this.sparkSys.material.uniforms.uIntensity.value=2*this.intensity,this.emberSys.material.uniforms.uIntensity.value=1.5*this.intensity,this.flashMat.uniforms.uTime.value=t,this.flashMat.uniforms.uIntensity.value=3*this.intensity,this.ringMat.uniforms.uTime.value=t,this.ringMat.uniforms.uIntensity.value=.95*this.intensity,this.updateLights(e),this.frame&7||(this.particleCount=this.sparkSys.recount(t)+this.emberSys.recount(t)+this.smokeSys.recount(t))}stats(){return{lasers:this.nBolts,explosions:this.nBlasts,debris:this.debrisField.aliveCount,particles:this.particleCount}}clear(){this.nBolts=0,this.boltMesh.count=0,this.sparkSys.clear(),this.emberSys.clear(),this.smokeSys.clear(),this.debrisField.clear();for(let n=0;n<this.blasts.length;n++)this.blasts[n].active=!1,this.blasts[n].group.visible=!1;this.nBlasts=0;const e=this.flashData.array;for(let n=0;n<Xa;n++)e[n*4]=-1e9,e[n*4+1]=1;this.flashData.needsUpdate=!0;const t=this.ringData.array;for(let n=0;n<Ya;n++)t[n*4]=-1e9,t[n*4+1]=1;this.ringData.needsUpdate=!0;for(let n=0;n<this.lightSlots.length;n++)this.lightSlots[n].active=!1,this.lightSlots[n].light.intensity=0,this.lightSlots[n].light.visible=!1;this.trails.length=0,this.particleCount=0}dispose(){this.clear(),this.boltGeo.dispose(),this.boltMat.dispose(),this.boltMesh.dispose(),this.flashGeo.dispose(),this.flashMat.dispose(),this.flashMesh.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.ringMesh.dispose(),this.sparkSys.dispose(),this.emberSys.dispose(),this.smokeSys.dispose(),this.debrisField.dispose(),this.shellGeo.dispose();for(let e=0;e<this.blasts.length;e++)for(let t=0;t<this.blasts[e].mats.length;t++)this.blasts[e].mats[t].dispose();this.scene.remove(this.group)}}const yf=Mn+zn+qi+vr,Zo=new b,Jo=new b;function Qm(i,e,t){i.getWorldPosition(Zo),e.getWorldPosition(Jo);const n=i.scale.x||1;return t.set((Jo.x-Zo.x)/n,(Jo.y-Zo.y)/n,(Jo.z-Zo.z)/n),t}const nS=`
${yf}
uniform float uTime, uProgress, uDisplace, uNoiseScale, uScroll, uSeed;
varying vec3 vPos;
varying vec3 vDir;
varying float vDisp;

void main(){
  vec3 dir = normalize(position);
  vec3 q = dir * uNoiseScale + vec3(uSeed*3.71, uSeed*1.33, uSeed*7.19);
  vec3 flow = vec3(0.0, -uTime*uScroll, uTime*uScroll*0.55);

  float big  = fbm3(q*0.55 + flow*0.35, 4, 2.03, 0.55) - 0.5;      // slow lobes
  float mid  = ridged3(q*1.35 + flow, 4, 2.11, 0.50) - 0.42;       // plumes
  float fine = fbm3(q*3.10 + flow*1.7, 3, 2.20, 0.50) - 0.5;

  float d = big*2.30 + mid*1.25 + fine*0.55;
  vDisp = d;

  // early on the ball is tight; as it decelerates the lobes throw further out
  float amp = uDisplace * mix(0.55, 1.35, clamp(uProgress, 0.0, 1.0));
  vec3 p = dir * (1.0 + d * amp);

  vPos = p;
  vDir = dir;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,iS=`
${yf}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform vec3  uCamObj;
uniform float uTime, uProgress, uOpacity, uEmissive, uBase, uSoot, uNoiseScale, uScroll, uSeed, uTempBias;
varying vec3 vPos;
varying vec3 vDir;
varying float vDisp;

void main(){
  vec3 N = normalize(vDir);
  vec3 V = normalize(vPos - uCamObj);
  float ndv = clamp(abs(dot(N, V)), 0.0, 1.0);
  float limb = pow(1.0 - ndv, 1.7);            // edge-on = more fire depth

  vec3 q = N * uNoiseScale + vec3(uSeed*5.13, uSeed*2.07, uSeed*9.41);
  vec3 flow = vec3(0.0, -uTime*uScroll, uTime*uScroll*0.55);

  float cells = fbm3(warp3(q*1.70 + flow, 0.42, 1.30), 5, 2.07, 0.53);
  float fil   = ridged3(q*4.20 + flow*1.4, 4, 2.20, 0.50);
  float soot  = smoothstep(0.38, 0.78, fbm3(q*8.5 + flow*2.4, 4, 2.30, 0.50));
  float sootF = smoothstep(0.52, 0.90, ridged3(q*15.0 - flow*3.1, 3, 2.4, 0.5));
  soot = max(soot, sootF*0.9);

  // density: subtract a floor so most of the shell is actually empty
  float dens = cells*0.85 + fil*0.45 + vDisp*0.22;
  dens = clamp((dens - 0.46) * 1.7, 0.0, 1.0);  // real voids between the lobes
  dens *= 1.0 - soot * uSoot * 0.95;            // soot filaments carve holes

  float cool = 1.0 - clamp(uProgress, 0.0, 1.0);
  float temp = (dens*1.05 + limb*0.26 + uTempBias) * mix(0.34, 1.18, cool);
  temp -= soot * uSoot * (0.30 + 0.55*uProgress);
  temp = clamp(temp, 0.0, 1.05);

  // sparse white-hot filaments carry the HDR; the bulk stays near 1.0
  float hot = pow(clamp(dens*1.10, 0.0, 1.0), 8.0) * smoothstep(0.45, 0.82, temp);
  vec3 col = bbn(temp) * (uBase * (0.25 + dens) + uEmissive * hot);

  float a = uOpacity * pow(dens, 1.5) * (0.26 + 0.90*limb);
  a = clamp(a, 0.0, 1.0);
  if(a < 0.0035) discard;

  gl_FragColor = vec4(col * a, 1.0);
}
`;function sS(i={}){return new xt({uniforms:{uTime:{value:0},uProgress:{value:0},uDisplace:{value:i.displace??.16},uNoiseScale:{value:i.noiseScale??3.2},uScroll:{value:i.scroll??.18},uSeed:{value:i.seed??0},uOpacity:{value:i.opacity??1},uEmissive:{value:i.emissive??26},uBase:{value:i.base??.9},uSoot:{value:i.soot??.3},uTempBias:{value:i.tempBias??.35},uCamObj:{value:new b(0,0,6)}},vertexShader:nS,fragmentShader:iS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:i.depthTest??!0,side:i.side??cn,toneMapped:!1})}function aS(i=5,e={}){const t=new Gn;t.name="fireballLayers";const n=e.coreDetail??31,s=e.shellDetail??15,a=e.seed??7,o=e.emissive??34,r=new Ns(1,n),l=new Ns(1,s),c=[],u=[],f=[],h=[];let d=0;for(let p=0;p<i;p++){const y=i>1?p/(i-1):0,M=p===0?r:l,x=sS({seed:a+p*13.7,noiseScale:3*(1+p*.52),scroll:.15*(1+p*.34),displace:.115+p*.055,opacity:.115*Math.pow(.66,p),emissive:o*Math.pow(.58,p),base:.42*Math.pow(.66,p),soot:.1+y*1.15,tempBias:.44-p*.1,depthTest:e.depthTest??!0}),w=new ft(M,x);w.frustumCulled=!1,w.renderOrder=24+(i-p),t.add(w),c.push(w),u.push(x),f.push(1+p*.115+p*p*.012),h.push(x.uniforms.uOpacity.value),d+=M.index?M.index.count/3:M.attributes.position.count/3}let g=1,v=1;const m=new b;return{mesh:t,triangles:d,drawCalls:i,setRadius(p){g=p;for(let y=0;y<c.length;y++)c[y].scale.setScalar(p*f[y])},setProgress(p){for(let y=0;y<u.length;y++)u[y].uniforms.uProgress.value=p},setOpacity(p){v=p},setDepthTest(p){for(const y of u)y.depthTest!==p&&(y.depthTest=p)},update(p,y,M){M.getWorldPosition(Jo),t.getWorldPosition(Zo);const x=Jo.distanceTo(Zo);for(let w=0;w<c.length;w++){const T=c[w],E=u[w];E.uniforms.uTime.value=y,Qm(T,M,m),E.uniforms.uCamObj.value.copy(m);const _=g*f[w],R=x<_*1.25?Yn:pi;E.side!==R&&(E.side=R);const I=x<_?.16:x<_*1.7?.16+.84*((x-_)/(_*.7)):1;E.uniforms.uOpacity.value=h[w]*v*I}},dispose(){r.dispose(),l.dispose();for(const p of u)p.dispose();t.clear()}}}const oS=`
varying vec3 vPos;
void main(){
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,rS=`
${yf}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform vec3  uCamObj;
uniform float uTime, uProgress, uEmissive, uBase, uAbsorb, uNoiseScale, uScroll, uSeed, uOpacity, uCoreHeat;
varying vec3 vPos;

float density(vec3 p, out float temp){
  float r = length(p);
  vec3 flow = vec3(0.0, -uTime*uScroll, uTime*uScroll*0.6);
  vec3 q = warp3(p*uNoiseScale + vec3(uSeed*4.3) + flow, 0.45, 1.6);
  float f  = fbm3(q, 5, 2.05, 0.54);
  float rg = ridged3(q*2.15 + 4.7, 4, 2.17, 0.50);
  float d = f*0.95 + rg*0.60 - 0.62;
  d = max(d, 0.0) * 1.7;
  // soft radial clip so it never shows the mesh silhouette
  d *= smoothstep(1.0, 0.45, r);
  // a knotted, noisy core rather than a uniform pit
  d += 0.45 * smoothstep(0.34, 0.02, r) * (0.35 + 0.9*rg);
  temp = clamp(uCoreHeat * (0.30 + 0.85*d) * (1.30 - 0.60*r), 0.0, 1.05);
  return d;
}

void main(){
  vec3 ro = uCamObj;
  vec3 rd = normalize(vPos - uCamObj);
  float b = dot(ro, rd);
  float c = dot(ro, ro) - 1.0;
  float h = b*b - c;
  if(h <= 0.0) discard;
  h = sqrt(h);
  float t0 = max(-b - h, 0.0);
  float t1 = -b + h;
  if(t1 <= t0) discard;

  const int STEPS = 24;
  float dt = (t1 - t0) / float(STEPS);
  float jit = hash13(vec3(gl_FragCoord.xy, uTime*13.0)) * dt;

  vec3 acc = vec3(0.0);
  float trans = 1.0;
  for(int i=0;i<STEPS;i++){
    float t = t0 + float(i)*dt + jit;
    if(t > t1) break;
    vec3 p = ro + rd*t;
    float temp;
    float d = density(p, temp);
    if(d > 0.001){
      float dm = d * dt * 3.4;
      float hotv = smoothstep(0.88, 1.04, temp);
      acc += (bbn(temp) * uBase + vec3(1.30, 1.06, 0.70) * (uEmissive * hotv)) * (dm * trans);
      trans *= exp(-dm * uAbsorb);
      if(trans < 0.02) break;
    }
  }
  if(max(acc.r, max(acc.g, acc.b)) < 0.002) discard;
  gl_FragColor = vec4(acc * uOpacity, 1.0);
}
`;function lS(i={}){const e=new Ns(1,i.detail??8),t=new xt({uniforms:{uTime:{value:0},uProgress:{value:0},uEmissive:{value:i.emissive??5},uBase:{value:i.base??.85},uAbsorb:{value:i.absorb??2.6},uNoiseScale:{value:i.noiseScale??2.6},uScroll:{value:i.scroll??.22},uSeed:{value:i.seed??3},uOpacity:{value:1},uCoreHeat:{value:.8},uCamObj:{value:new b(0,0,4)}},vertexShader:oS,fragmentShader:rS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!0,side:pi,toneMapped:!1}),n=new ft(e,t);n.frustumCulled=!1,n.renderOrder=22;const s=new b;return{mesh:n,material:t,triangles:e.index?e.index.count/3:e.attributes.position.count/3,setRadius(a){n.scale.setScalar(a)},setProgress(a){t.uniforms.uProgress.value=a},setHeat(a){t.uniforms.uCoreHeat.value=a},setOpacity(a){t.uniforms.uOpacity.value=a},setDepthTest(a){t.depthTest!==a&&(t.depthTest=a)},update(a,o,r){t.uniforms.uTime.value=o,Qm(n,r,s),t.uniforms.uCamObj.value.copy(s);const c=s.lengthSq()<1?Yn:pi;t.side!==c&&(t.side=c)},dispose(){e.dispose(),t.dispose()}}}const Cl=Mn+zn+qi+vr,mc=new b,gc=new b;function jm(i,e,t){i.getWorldPosition(mc),e.getWorldPosition(gc);const n=i.scale.x||1;return t.set((gc.x-mc.x)/n,(gc.y-mc.y)/n,(gc.z-mc.z)/n),t}const cS=`
${Cl}
uniform float uTime, uProgress, uThick, uSeed, uInner, uWarp;
varying float vR;      // 0 at inner edge .. 1 at leading edge
varying float vA;      // angle
varying float vZ;

void main(){
  float r = length(position.xy);
  float ang = atan(position.y, position.x);
  float rn = clamp((r - uInner) / (1.0 - uInner), 0.0, 1.0);

  // the leading edge is not a perfect circle
  float lump = fbm2(vec2(ang*1.7 + uSeed, uSeed*3.3), 4, 2.10, 0.55) - 0.5;
  float lump2 = fbm2(vec2(ang*5.3 + uSeed*2.0, 7.7), 3, 2.05, 0.5) - 0.5;
  float rr = r * (1.0 + (lump*0.11 + lump2*0.045) * uWarp * smoothstep(0.10, 1.0, rn));

  vec3 p = vec3(cos(ang)*rr, sin(ang)*rr, 0.0);

  // out-of-plane billow so it is a shaped membrane, not a flat washer
  float bl = fbm2(vec2(ang*3.1 + uSeed*5.0, rn*2.6 - uTime*0.06), 4, 2.05, 0.55) - 0.5;
  float prof = smoothstep(0.02, 0.55, rn) * (1.0 - smoothstep(0.80, 1.0, rn));
  p.z += bl * uThick * prof * 2.0;
  vZ = bl * prof;

  vR = rn;
  vA = ang;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,uS=`
${Cl}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform float uTime, uProgress, uRimGain, uEdgeGain, uOpacity, uBody, uSeed, uEdgeSharp;
varying float vR;
varying float vA;
varying float vZ;

void main(){
  float rn = vR;
  float ang = vA;

  // ---- radial filaments / spokes ----
  float fil  = fbm2(vec2(ang*26.0 + uSeed, rn*3.5 - uTime*0.55), 4, 2.10, 0.55);
  float fil2 = ridged3(vec3(cos(ang), sin(ang), rn*1.2)*9.0 + vec3(uTime*0.22), 4, 2.13, 0.50);
  float spoke = mix(fil, fil2, 0.55);

  // ---- the leading edge, a thin bright rim, and the membrane behind ----
  float front = smoothstep(0.70, 0.985, rn);
  float rim   = exp(-pow((rn - 0.972) / (0.0095 * uEdgeSharp), 2.0)) * (0.10 + 1.55*spoke*spoke);
  float memb  = smoothstep(0.0, 0.62, rn) * (1.0 - smoothstep(0.90, 1.0, rn));

  float body = memb * (0.05 + 0.75*spoke*spoke*spoke) * uBody;
  float edge = front * front * (0.10 + 1.05*spoke) * uEdgeGain;
  float amt  = body + edge + rim*rim*uRimGain;

  // hard clip so the geometry edge never shows
  amt *= 1.0 - smoothstep(0.985, 1.0, rn);
  if(amt < 0.002) discard;

  float temp = clamp(0.24 + rim*0.78 + front*0.26 + spoke*0.28 + abs(vZ)*0.22, 0.0, 1.05);
  vec3 col = bbn(temp);
  col += vec3(0.22, 0.48, 1.05) * rim*rim * 1.3;             // hot blue-white rim
  col += vec3(0.34, 0.13, 0.30) * memb * spoke * 0.22;       // cool magenta membrane

  gl_FragColor = vec4(col * amt * uOpacity, 1.0);
}
`;function hS(i={}){const e=i.segments??240,t=i.rings??12,n=i.inner??.26,s=i.seed??5,a=new Gn;a.name="shockRing",a.rotation.x=-Math.PI/2;const o=(d,g,v,m,p)=>{const y=new su(d,1,g,v),M=new xt({uniforms:{uTime:{value:0},uProgress:{value:0},uThick:{value:m.thick},uSeed:{value:m.seed},uInner:{value:d},uWarp:{value:m.warp},uRimGain:{value:m.rim},uEdgeGain:{value:m.edgeGain},uOpacity:{value:m.opacity},uBody:{value:m.body},uEdgeSharp:{value:m.edge}},vertexShader:cS,fragmentShader:uS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}),x=new ft(y,M);return x.frustumCulled=!1,x.renderOrder=p,a.add(x),{m:x,mat:M,geo:y}},r=i.emissive??4.2,l=o(n,e,t,{rim:r,edgeGain:.55,body:.3,thick:i.thickness??.055,edge:1,opacity:1,seed:s,warp:1},32),c=o(.34,Math.floor(e*.4),6,{rim:r*.05,edgeGain:.12,body:.15,thick:(i.thickness??.055)*2.4,edge:3,opacity:.5,seed:s+17.3,warp:.55},31),u=[l,c],f=[1,1.035];let h=0;for(const d of u)h+=d.geo.index?d.geo.index.count/3:d.geo.attributes.position.count/3;return{mesh:a,triangles:h,drawCalls:u.length,setRadius(d){for(let g=0;g<u.length;g++)u[g].m.scale.set(d*f[g],d*f[g],d*f[g])},setProgress(d){for(const g of u)g.mat.uniforms.uProgress.value=d},setIntensity(d){l.mat.uniforms.uOpacity.value=d,c.mat.uniforms.uOpacity.value=d*.5},update(d,g,v){for(const m of u)m.mat.uniforms.uTime.value=g},dispose(){for(const d of u)d.geo.dispose(),d.mat.dispose();a.clear()}}}const eg=`
${Cl}
uniform float uTime, uProgress, uWobble, uSeed;
varying vec3 vPos;
varying vec3 vDir;
void main(){
  vec3 dir = normalize(position);
  float lump = fbm3(dir*2.3 + vec3(uSeed), 4, 2.05, 0.55) - 0.5;
  float lump2 = ridged3(dir*5.1 + vec3(uSeed*2.0), 3, 2.1, 0.5) - 0.45;
  vec3 p = dir * (1.0 + (lump*1.4 + lump2*0.7) * uWobble);
  vPos = p; vDir = dir;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,fS=`
${Cl}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform vec3  uCamObj;
uniform float uTime, uProgress, uIntensity, uOpacity, uSeed;
varying vec3 vPos;
varying vec3 vDir;

void main(){
  vec3 N = normalize(vDir);
  vec3 V = normalize(vPos - uCamObj);
  float ndv = clamp(abs(dot(N, V)), 0.0, 1.0);
  float limb = pow(1.0 - ndv, 3.4);

  vec3 q = N*5.5 + vec3(uSeed);
  float cell = ridged3(q + vec3(uTime*0.14), 4, 2.11, 0.50);
  float fine = fbm3(N*17.0 - vec3(uTime*0.42), 4, 2.22, 0.50);
  float veins = smoothstep(0.38, 0.92, cell*fine*2.2);
  veins = max(veins, smoothstep(0.72, 0.98, ridged3(N*11.0 + vec3(uTime*0.25), 4, 2.15, 0.5)) * 0.7);

  float shell = limb*limb*2.2 + 0.012;
  float amt = shell * (0.10 + 1.55*veins) * uIntensity;
  if(amt < 0.002) discard;

  float temp = clamp(0.26 + cell*0.40 + limb*0.44 + veins*0.22, 0.0, 1.05);
  vec3 col = bbn(temp);
  col = mix(col, vec3(0.38, 0.62, 1.20), limb*0.55);

  gl_FragColor = vec4(col * amt * uOpacity, 1.0);
}
`;function dS(i={}){const e=new Ns(1,i.detail??31),t=new xt({uniforms:{uTime:{value:0},uProgress:{value:0},uWobble:{value:i.wobble??.035},uSeed:{value:i.seed??9},uIntensity:{value:i.emissive??2.6},uOpacity:{value:1},uCamObj:{value:new b(0,0,3)}},vertexShader:eg,fragmentShader:fS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}),n=new ft(e,t);n.frustumCulled=!1,n.renderOrder=30;const s=new b;return{mesh:n,triangles:e.index?e.index.count/3:e.attributes.position.count/3,drawCalls:1,setRadius(a){n.scale.setScalar(a)},setProgress(a){t.uniforms.uProgress.value=a},setIntensity(a){t.uniforms.uOpacity.value=a},update(a,o,r){t.uniforms.uTime.value=o,jm(n,r,s),t.uniforms.uCamObj.value.copy(s)},dispose(){e.dispose(),t.dispose()}}}const pS=eg,mS=`
${Cl}
precision highp float;
uniform vec3  uCamObj;
uniform float uTime, uProgress, uAmount, uSeed;
varying vec3 vPos;
varying vec3 vDir;

void main(){
  vec3 N = normalize(vDir);
  vec3 V = normalize(vPos - uCamObj);
  float ndv = clamp(abs(dot(N, V)), 0.0, 1.0);

  // How much shell the view ray travels through: grazing = a lot.
  float path = pow(1.0 - ndv, 1.35);

  vec3 q = N*4.4 + vec3(uSeed*1.7);
  float w  = fbm3(q + vec3(uTime*0.18), 4, 2.10, 0.55);
  float w2 = ridged3(q*2.6 - vec3(uTime*0.30), 3, 2.2, 0.5);
  float warp = w*0.65 + w2*0.55;

  float amt = clamp(uAmount * path * (0.45 + 1.35*warp), 0.0, 1.0);

  // Thin lens band right at the silhouette: bright, blue-shifted.
  float band = exp(-pow((ndv - 0.06)/0.10, 2.0)) * path;

  // Per-channel gain: red is bent away (dims), blue piles up (brightens).
  // Multiplying the framebuffer by this gives genuine chromatic fringing of
  // whatever is behind the wave.
  vec3 tint = vec3(1.0)
            + vec3(-0.82, -0.24, 0.72) * amt
            + vec3( 0.45,  0.80, 1.85) * band * 0.80;
  tint *= 1.0 - amt*0.42;                 // compressed void behind the front
  tint = clamp(tint, vec3(0.0), vec3(3.0));

  gl_FragColor = vec4(tint, 1.0);
}
`;function gS(i={}){const e=new Ns(1,i.detail??15),t=new xt({uniforms:{uTime:{value:0},uProgress:{value:0},uWobble:{value:.03},uSeed:{value:i.seed??21},uAmount:{value:i.amount??1},uCamObj:{value:new b(0,0,3)}},vertexShader:pS,fragmentShader:mS,transparent:!0,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1,blending:Yp,blendEquation:Fa,blendSrc:Kp,blendDst:$p}),n=new ft(e,t);n.frustumCulled=!1,n.renderOrder=29;const s=new b,a=i.amount??1;return{mesh:n,triangles:e.index?e.index.count/3:e.attributes.position.count/3,drawCalls:1,setRadius(o){n.scale.setScalar(o)},setProgress(o){t.uniforms.uProgress.value=o},setIntensity(o){t.uniforms.uAmount.value=a*o},update(o,r,l){t.uniforms.uTime.value=r,jm(n,l,s),t.uniforms.uCamObj.value.copy(s)},dispose(){e.dispose(),t.dispose()}}}const gs=Mn+zn+qi+vr,yp=0,vc=2,xc=2,Or=4.2,Ys=4.2,_c=5.6,Yt=5.6,Ka=6,zr=8,vS=34,No=44,Ea=110,$s=40,yc=190,hh=430,Ss=3e3,fh=2400,ws=18,xS=8.8,_S=6.4,yS=8.6,bS=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,MS=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform vec3  uSeedDir;
uniform vec3  uCamObj;
uniform float uTime, uFront, uHeat, uIntensity, uCoreGlow, uOpen, uSeed;
varying vec3 vDir;

void main(){
  vec3 d = normalize(vDir);
  float ang = acos(clamp(dot(d, normalize(uSeedDir)), -1.0, 1.0));   // 0..PI from the port

  // ---- fracture network: two worley scales, domain-warped ----
  vec3 wp = warp3(d*2.6 + vec3(uSeed), 0.30, 1.7);
  float w1 = worley3(wp*3.1);
  float w2 = worley3(wp*7.4 + 13.7);
  float w3 = worley3(wp*11.0 - 4.1);

  float widen = 0.010 + uOpen*0.045;
  float c1 = 1.0 - smoothstep(0.0, widen*2.2, w1);
  float c2 = 1.0 - smoothstep(0.0, widen*1.2, w2);
  float c3 = 1.0 - smoothstep(0.0, widen*0.9, w3);
  float net = max(c1, max(c2*0.60, c3*0.26));

  // heat bleeding out around each crack (broad + dim)
  float bleed = (1.0 - smoothstep(0.0, 0.30, min(w1, w2))) * 0.55;

  // spidering hairlines that appear before the crack fully opens
  float hair = smoothstep(0.70, 0.95, ridged3(d*22.0 + vec3(uSeed*3.0), 4, 2.2, 0.5));

  // ---- reveal: a wave of failure spreading out from the port ----
  float reveal = smoothstep(uFront + 0.30, uFront - 0.16, ang);
  float lead   = exp(-pow((ang - uFront)/0.13, 2.0));      // bright cracking front

  float lines = (net + hair*0.45) * reveal + lead*net*0.8;
  float wide  = (bleed*reveal + lead*0.35) ;

  // the two structural trenches fail first and open into white-hot gashes
  float bandEq  = exp(-pow(d.y / 0.026, 2.0));
  float bandMer = exp(-pow(d.z / 0.020, 2.0));
  float band = max(bandEq, bandMer*0.85);
  // broken into a chain of openings rather than a continuous belt
  float gashN = smoothstep(0.46, 0.78, fbm3(d*13.0 + vec3(uSeed*2.0), 4, 2.1, 0.55));
  float gash = band * reveal * smoothstep(0.55, 1.0, uOpen) * gashN;

  // the core shining through the widening gaps
  float through = (net*0.80 + gash*0.55) * reveal * uCoreGlow;

  float temp = clamp(0.14 + uHeat*0.55 + net*0.24 + lead*0.30 + through*0.55, 0.0, 1.05);
  vec3 col = bbn(temp);

  float amt = lines*uIntensity*5.5 + wide*uIntensity*0.55 + through*1.35 + gash*uIntensity*1.1;
  // grazing angles alias badly at this scale — fade the limb out
  float ndv = clamp(dot(d, normalize(uCamObj - d)), 0.0, 1.0);
  amt *= smoothstep(0.0, 0.30, ndv);
  if(amt < 0.002) discard;
  gl_FragColor = vec4(col * amt, 1.0);
}
`,SS=`
${gs}
uniform float uElapsed, uSizeMul, uGrow, uStartR;
uniform vec3  uCamLocal;
attribute vec3 aPos;
attribute vec3 aVel;
attribute float aT0;
attribute float aSize;
attribute float aSeed;
attribute float aLife;
varying vec2 vUv;
varying float vLife;
varying float vSeed;
varying float vFace;

void main(){
  float lt = uElapsed - aT0;
  if(lt < 0.0 || lt > aLife){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  vec3 c = aPos*uStartR + aVel*uStartR*lt;
  float u = clamp(lt / aLife, 0.0, 1.0);
  float grow = (1.0 - exp(-lt*uGrow)) * (1.0 - u*u*0.5);
  float sz = aSize * uStartR * uSizeMul * grow;

  vec4 mv = modelViewMatrix * vec4(c, 1.0);
  mv.xy += position.xy * sz;
  gl_Position = projectionMatrix * mv;

  vUv = uv;
  vLife = u;
  vSeed = aSeed;
  vFace = dot(normalize(aPos), normalize(uCamLocal - c));
}
`,wS=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform float uEmissive, uBase, uFaceCull, uTempHi, uTempLo, uFlare, uMaster;
varying vec2 vUv;
varying float vLife;
varying float vSeed;
varying float vFace;

void main(){
  vec2 d = vUv - 0.5;
  float r = length(d)*2.0;
  float halo = exp(-r*r*6.0);
  float hotc = exp(-r*r*44.0);
  float flare = uFlare * (
      pow(max(0.0, 1.0 - abs(d.x)*2.1), 3.0) * exp(-abs(d.y)*90.0)
    + pow(max(0.0, 1.0 - abs(d.y)*2.1), 3.0) * exp(-abs(d.x)*90.0));
  float n = 0.55 + 0.45*hash11(vSeed*37.13);
  float fade = pow(1.0 - vLife, 1.7);
  float face = mix(1.0, smoothstep(-0.03, 0.32, vFace), uFaceCull);
  float a = (halo*0.55 + flare*0.30 + hotc*0.45) * fade * n * face * uMaster;
  if(a < 0.003) discard;
  float temp = mix(uTempLo, uTempHi, (1.0 - vLife) * (0.40 + 0.60*halo));
  vec3 col = bbn(clamp(temp, 0.0, 1.10)) * (uBase + uEmissive*hotc);
  gl_FragColor = vec4(col * a, 1.0);
}
`,TS=`
${gs}
uniform float uElapsed, uStartR, uSizeMul;
attribute vec3 aOrigin;
attribute vec3 aVel;
attribute vec4 aSpin;
attribute vec3 aScale;
attribute float aT0;
attribute float aSeed;
varying vec3 vN;
varying vec3 vP;
varying float vSeed;
varying float vLt;

void main(){
  if(uElapsed < aT0){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  float lt = uElapsed - aT0;
  vec3 c = aOrigin*uStartR + aVel*uStartR*lt;
  mat3 R = rotAxis(normalize(aSpin.xyz), aSpin.w * lt);
  vec3 p = R * (position * aScale * uStartR * uSizeMul) + c;
  vN = R * normal;
  vP = c;
  vSeed = aSeed;
  vLt = lt;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,ES=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform float uCool, uEmissive, uGlow, uOpacity, uElapsed;
varying vec3 vN;
varying vec3 vP;
varying float vSeed;
varying float vLt;

void main(){
  vec3 N = normalize(vN);
  vec3 L = normalize(-vP);                     // the fireball is at the origin
  float diff = max(dot(N, L), 0.0);
  float rimGlow = pow(1.0 - abs(dot(N, normalize(vP))), 2.0);

  float h = hash11(vSeed*13.7);
  float t = clamp(vLt / (uCool * (0.55 + 0.9*h)), 0.0, 1.0);
  float heat = pow(1.0 - t, 2.3);
  float temp = clamp(0.20 + heat*0.88, 0.0, 1.10);

  vec3 emis = bbn(temp) * uEmissive * heat*heat*heat * (0.30 + 0.70*h);
  vec3 lit  = vec3(0.40, 0.37, 0.35) * (0.04 + diff*0.85) * uGlow;
  lit += bbn(0.50) * rimGlow * uGlow * 0.75;

  gl_FragColor = vec4(emis + lit, uOpacity);
}
`,AS=`
${gs}
uniform float uElapsed, uStartR, uLenMul, uHold;
attribute vec3 aDir;
attribute float aT0;
attribute float aLen;
attribute float aRad;
attribute float aSeed;
varying float vY;
varying float vA;
varying float vSeed;
varying float vAmt;

void main(){
  float lt = uElapsed - aT0;
  if(lt < 0.0){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  float g = clamp(lt/0.30, 0.0, 1.0) * (1.0 - smoothstep(uHold, uHold + 1.6, lt));
  if(g <= 0.001){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }

  vec3 up = normalize(aDir);
  vec3 t = abs(up.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 xa = normalize(cross(t, up));
  vec3 za = cross(up, xa);

  float len = aLen * uStartR * uLenMul * g;
  float rad = aRad * uStartR * (0.55 + 0.45*g);
  vec3 p = up*(uStartR*0.995) + xa*(position.x*rad) + up*(position.y*len) + za*(position.z*rad);

  vY = position.y;
  vA = atan(position.z, position.x);
  vSeed = aSeed;
  vAmt = g;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,CS=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform float uElapsed, uEmissive, uBase, uMaster;
varying float vY;
varying float vA;
varying float vSeed;
varying float vAmt;

void main(){
  float f = fbm3(vec3(cos(vA), sin(vA), vY*3.2)*3.4 + vec3(vSeed*7.0, 0.0, -uElapsed*1.9), 4, 2.1, 0.55);
  float rg = ridged3(vec3(cos(vA)*2.0, sin(vA)*2.0, vY*5.0) + vec3(0.0, 0.0, -uElapsed*2.6), 3, 2.2, 0.5);
  float shape = (1.0 - smoothstep(0.03, 0.95, vY)) * smoothstep(0.0, 0.08, vY);
  float d = shape * clamp(f*rg*2.4 - 0.28, 0.0, 1.2);
  float a = d * vAmt * uMaster;
  if(a < 0.004) discard;
  float temp = clamp(0.95 - vY*0.75 + f*0.28, 0.0, 1.05);
  float hot = pow(clamp(d, 0.0, 1.0), 3.0) * (1.0 - smoothstep(0.0, 0.4, vY));
  gl_FragColor = vec4(bbn(temp) * (uBase + uEmissive*hot) * a, 1.0);
}
`,PS=`
${gs}
uniform float uElapsed, uStartR, uSizeMul, uStretch;
attribute vec3 aDir;
attribute float aSpeed;
attribute float aT0;
attribute float aSize;
attribute float aSeed;
attribute float aR0;
attribute float aLife;
varying float vLife;
varying float vSeed;
varying vec2 vUv;

void main(){
  float lt = uElapsed - aT0;
  if(lt < 0.0 || lt > aLife){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  vec3 dir = normalize(aDir);
  float drag = 1.0 - exp(-lt*0.42);
  vec3 c = dir * uStartR * (aR0 + aSpeed*drag/0.42);
  vec3 vel = dir * uStartR * aSpeed * exp(-lt*0.42);

  vec4 mv = modelViewMatrix * vec4(c, 1.0);
  vec3 velV = (modelViewMatrix * vec4(vel, 0.0)).xyz;
  vec2 dv = velV.xy;
  float dl = length(dv);
  vec2 d1 = dl > 1e-5 ? dv/dl : vec2(0.0, 1.0);
  vec2 d2 = vec2(-d1.y, d1.x);

  float sz = aSize * uStartR * uSizeMul;
  float st = 1.0 + uStretch * clamp(dl / max(abs(mv.z), 1.0) * 40.0, 0.0, 9.0);
  mv.xy += d1 * (position.y * sz * st) + d2 * (position.x * sz);
  gl_Position = projectionMatrix * mv;

  vLife = lt / aLife;
  vSeed = aSeed;
  vUv = uv;
}
`,RS=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform float uEmissive, uBase, uMaster;
varying float vLife;
varying float vSeed;
varying vec2 vUv;

void main(){
  vec2 d = vUv - 0.5;
  float head = exp(-pow((d.y - 0.30)/0.24, 2.0));
  float body = exp(-abs(d.x)*11.0) * (1.0 - smoothstep(-0.5, 0.5, d.y) * 0.75);
  float a = (head*0.85 + body*0.35) * exp(-abs(d.x)*9.0);
  a *= pow(1.0 - vLife, 2.0) * (0.35 + 0.65*hash11(vSeed*23.1)) * uMaster * 0.45;
  if(a < 0.004) discard;
  float temp = clamp(1.02 - vLife*0.95 + head*0.12, 0.0, 1.05);
  gl_FragColor = vec4(bbn(temp) * (uBase + uEmissive*head*head) * a, 1.0);
}
`,IS=`
${gs}
uniform float uElapsed, uStartR, uSizeMul;
attribute vec3 aDir;
attribute float aT0;
attribute float aSize;
attribute float aSpeed;
attribute float aSeed;
attribute float aGrow;
varying vec3 vN;
varying vec3 vP;
varying vec3 vLocal;
varying float vSeed;
varying float vAge;

void main(){
  float lt = uElapsed - aT0;
  if(lt < 0.0){ gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  vec3 dir = normalize(aDir);
  vec3 c = dir * uStartR * (0.5 + aSpeed*lt);
  float sc = aSize * uStartR * uSizeMul * (0.35 + aGrow*lt);

  vec3 nd = normalize(position);
  float lump = fbm3(nd*1.9 + vec3(aSeed*5.0), 4, 2.05, 0.55) - 0.5;
  vec3 p = nd * (1.0 + lump*0.42) * sc + c;

  vN = nd;
  vP = c;
  vLocal = nd;
  vSeed = aSeed;
  vAge = lt;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,LS=`
${gs}
precision highp float;
vec3 bbn(float t){ return blackbody(t) * 0.28; }
uniform vec3  uCamLocal;
uniform float uElapsed, uOpacity, uGlow;
varying vec3 vN;
varying vec3 vP;
varying vec3 vLocal;
varying float vSeed;
varying float vAge;

void main(){
  vec3 N = normalize(vN);
  vec3 V = normalize(vP - uCamLocal);
  float ndv = clamp(abs(dot(N, V)), 0.0, 1.0);

  vec3 q = vLocal*3.4 + vec3(vSeed*9.0) - vec3(0.0, vAge*0.05, 0.0);
  float dens = fbm3(warp3(q, 0.5, 1.4), 5, 2.06, 0.55);
  dens = smoothstep(0.34, 0.80, dens);

  // smoothstep (not raw N.V) so the blob silhouette fades out instead of
  // showing the icosphere's creases at 150 km across
  float a = dens * smoothstep(0.0, 0.55, ndv) * uOpacity;
  if(a < 0.004) discard;

  // lit from the inside: the face pointing back toward the blast is hot
  float inward = max(dot(N, -normalize(vP + N*1e-3)), 0.0);
  vec3 col = vec3(0.030, 0.024, 0.022);
  col += bbn(clamp(0.14 + inward*0.38 + dens*0.14, 0.0, 0.78)) * uGlow * 2.6;
  gl_FragColor = vec4(col, clamp(a, 0.0, 0.9));
}
`;function $t(i,e,t,n){const s=new hi(new Float32Array(n*t),t);return s.setUsage(tn),i.setAttribute(e,s),s}function bp(i,e,t){const n=[];for(let a=0;a<e;a++){const o=new zs(i.range(.35,1),i.range(.05,.22)*t,i.range(.35,1),1,1,1),r=new st,l=new Ct().setFromEuler(new Qn(i.range(-.5,.5),i.range(-Math.PI,Math.PI),i.range(-.5,.5)));r.compose(new b(i.range(-.28,.28),i.range(-.1,.1)*t,i.range(-.28,.28)),l,new b(1,1,1)),o.applyMatrix4(r),n.push(o)}const s=us(n,!1)??n[0];for(const a of n)a!==s&&a.dispose();return s.computeVertexNormals(),s}const it=new b,Br=new b,kr=new b;function DS(i){const e=new Gn;e.name="destruction",e.visible=!1,e.matrixAutoUpdate=!0,i.add(e);let t=tt,n=24601;const s=new b(Math.sin(Ft/tt),Math.cos(Ft/tt),0).normalize(),a=new ps(1,128,80),o=new xt({uniforms:{uTime:{value:0},uFront:{value:0},uHeat:{value:0},uIntensity:{value:0},uCoreGlow:{value:0},uOpen:{value:0},uSeed:{value:1.7},uSeedDir:{value:s.clone()},uCamObj:{value:new b(0,0,4)}},vertexShader:bS,fragmentShader:MS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:pi,toneMapped:!1}),r=new ft(a,o);r.frustumCulled=!1,r.renderOrder=12,e.add(r);const l=aS(5,{seed:11,coreDetail:31,shellDetail:15,emissive:34});l.mesh.visible=!1,e.add(l.mesh);const c=lS({seed:3.4,detail:8,emissive:5.5,base:.9,absorb:2.8,noiseScale:2.7,scroll:.24});c.mesh.visible=!1,e.add(c.mesh);const u=hS({seed:5.1,segments:240,rings:12,inner:.24,thickness:.05,emissive:5.5});u.mesh.visible=!1,e.add(u.mesh);const f=dS({seed:9.3,detail:31,wobble:.038,emissive:2.4});f.mesh.visible=!1,e.add(f.mesh);const h=gS({seed:21.7,detail:15,amount:1.05});h.mesh.visible=!1,e.add(h.mesh);const d=new Us(1,1);function g(Ae,K){const ae=new Ar;ae.index=d.index,ae.setAttribute("position",d.attributes.position),ae.setAttribute("uv",d.attributes.uv),ae.instanceCount=Ae;const D={aPos:$t(ae,"aPos",3,Ae),aVel:$t(ae,"aVel",3,Ae),aT0:$t(ae,"aT0",1,Ae),aSize:$t(ae,"aSize",1,Ae),aSeed:$t(ae,"aSeed",1,Ae),aLife:$t(ae,"aLife",1,Ae)},B=new xt({uniforms:{uElapsed:{value:0},uSizeMul:{value:K.sizeMul??1},uGrow:{value:K.grow??18},uStartR:{value:t},uCamLocal:{value:new b(0,0,1)},uEmissive:{value:K.emissive??20},uBase:{value:K.base??1},uFaceCull:{value:K.faceCull??1},uTempHi:{value:K.tempHi??1.05},uTempLo:{value:K.tempLo??.25},uFlare:{value:K.flare??.5},uMaster:{value:1}},vertexShader:SS,fragmentShader:wS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}),Q=new ft(ae,B);return Q.frustumCulled=!1,{geo:ae,mat:B,mesh:Q,attrs:D}}const v=g(No,{sizeMul:1,grow:22,emissive:50,base:1.5,faceCull:1,flare:1.25,tempHi:1.05,tempLo:.3});v.mesh.renderOrder=14,v.mesh.visible=!1,e.add(v.mesh);const m=g(Ea,{sizeMul:1,grow:20,emissive:34,base:1.1,faceCull:1,flare:1.05,tempHi:1.05,tempLo:.26});m.mesh.renderOrder=15,m.mesh.visible=!1,e.add(m.mesh);const p=g(fh,{sizeMul:1,grow:4,emissive:18,base:.7,faceCull:0,flare:.25,tempHi:.95,tempLo:.05});p.mesh.renderOrder=20,p.mesh.visible=!1,e.add(p.mesh);const y=new Qt(90210),M=bp(y,5,1),x=bp(y,3,1.6);function w(Ae,K,ae){const D=new Ar;D.index=Ae.index,D.setAttribute("position",Ae.attributes.position),D.setAttribute("normal",Ae.attributes.normal),D.instanceCount=K;const B={aOrigin:$t(D,"aOrigin",3,K),aVel:$t(D,"aVel",3,K),aSpin:$t(D,"aSpin",4,K),aScale:$t(D,"aScale",3,K),aT0:$t(D,"aT0",1,K),aSeed:$t(D,"aSeed",1,K)},Q=new xt({uniforms:{uElapsed:{value:0},uStartR:{value:t},uSizeMul:{value:ae.sizeMul??1},uCool:{value:ae.cool??9},uEmissive:{value:ae.emissive??9},uGlow:{value:1},uOpacity:{value:1}},vertexShader:TS,fragmentShader:ES,transparent:!0,depthWrite:!0,depthTest:!0,side:cn,toneMapped:!1,blending:ta}),te=new ft(D,Q);return te.frustumCulled=!1,{geo:D,mat:Q,mesh:te,attrs:B}}const T=w(M,yc,{sizeMul:1,cool:8.5,emissive:4});T.mesh.renderOrder=6,T.mesh.visible=!1,e.add(T.mesh);const E=w(x,hh,{sizeMul:1,cool:13,emissive:4.5});E.mesh.renderOrder=7,E.mesh.visible=!1,e.add(E.mesh);const _=new of(1,1,14,6,!0);_.rotateX(Math.PI),_.translate(0,.5,0);const A=new Ar;A.index=_.index,A.setAttribute("position",_.attributes.position),A.instanceCount=$s;const R={aDir:$t(A,"aDir",3,$s),aT0:$t(A,"aT0",1,$s),aLen:$t(A,"aLen",1,$s),aRad:$t(A,"aRad",1,$s),aSeed:$t(A,"aSeed",1,$s)},I=new xt({uniforms:{uElapsed:{value:0},uStartR:{value:t},uLenMul:{value:1},uHold:{value:1.6},uEmissive:{value:26},uBase:{value:1.7},uMaster:{value:1}},vertexShader:AS,fragmentShader:CS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}),F=new ft(A,I);F.frustumCulled=!1,F.renderOrder=16,F.visible=!1,e.add(F);const H=new Ar;H.index=d.index,H.setAttribute("position",d.attributes.position),H.setAttribute("uv",d.attributes.uv),H.instanceCount=Ss;const X={aDir:$t(H,"aDir",3,Ss),aSpeed:$t(H,"aSpeed",1,Ss),aT0:$t(H,"aT0",1,Ss),aSize:$t(H,"aSize",1,Ss),aSeed:$t(H,"aSeed",1,Ss),aR0:$t(H,"aR0",1,Ss),aLife:$t(H,"aLife",1,Ss)},O=new xt({uniforms:{uElapsed:{value:0},uStartR:{value:t},uSizeMul:{value:1},uStretch:{value:1.8},uEmissive:{value:5},uBase:{value:.26},uMaster:{value:1}},vertexShader:PS,fragmentShader:RS,transparent:!0,blending:Jt,depthWrite:!1,depthTest:!1,side:cn,toneMapped:!1}),V=new ft(H,O);V.frustumCulled=!1,V.renderOrder=18,V.visible=!1,e.add(V);const z=new Ns(1,11),re=new Ar;re.index=z.index,re.setAttribute("position",z.attributes.position),re.instanceCount=ws;const ue={aDir:$t(re,"aDir",3,ws),aT0:$t(re,"aT0",1,ws),aSize:$t(re,"aSize",1,ws),aSpeed:$t(re,"aSpeed",1,ws),aSeed:$t(re,"aSeed",1,ws),aGrow:$t(re,"aGrow",1,ws)},Y=new xt({uniforms:{uElapsed:{value:0},uStartR:{value:t},uSizeMul:{value:1},uOpacity:{value:0},uGlow:{value:1},uCamLocal:{value:new b(0,0,1)}},vertexShader:IS,fragmentShader:LS,transparent:!0,blending:ta,depthWrite:!1,depthTest:!0,side:Yn,toneMapped:!1}),ee=new ft(re,Y);ee.frustumCulled=!1,ee.renderOrder=8,ee.visible=!1,e.add(ee);const le=new A0(16756838,0,0,2);le.visible=!1,e.add(le);const Ce=new A0(12572927,0,0,2);Ce.visible=!1,e.add(Ce);const Ue=new Float32Array(No),Ie=new Float32Array(Ea);function $(Ae){const K=new Qt(Ae);{const ae=v.attrs;for(let D=0;D<No;D++){const B=1-(2*D+1)/No,Q=Math.sqrt(Math.max(0,1-B*B)),te=D*2.399963+K.range(-.25,.25);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q).normalize();const pe=.06+Math.acos(we(it.dot(s),-1,1))/Math.PI*1.62+K.range(-.09,.16);Ue[D]=pe,ae.aPos.setXYZ(D,it.x,it.y,it.z),ae.aVel.setXYZ(D,it.x*.012,it.y*.012,it.z*.012),ae.aT0.setX(D,pe),ae.aSize.setX(D,K.range(.01,.042)),ae.aSeed.setX(D,K.range(0,100)),ae.aLife.setX(D,K.range(.55,1.3)),ae.aPos.needsUpdate=ae.aVel.needsUpdate=ae.aT0.needsUpdate=!0,ae.aSize.needsUpdate=ae.aSeed.needsUpdate=ae.aLife.needsUpdate=!0}}{const ae=m.attrs,D=Math.floor(Ea*.55);for(let B=0;B<Ea;B++){let Q;if(B<D){const te=B/D,ve=te*Xn+K.range(-.02,.02);it.set(Math.cos(ve),K.range(-.02,.02),Math.sin(ve)).normalize(),Q=Ys+.05+te*1.32+K.range(-.05,.1)}else{const te=(B-D)/(Ea-D),ve=Zu+te*(Fd-Zu),pe=ve/tt;it.set(Math.sin(pe),Math.cos(pe),K.range(-.02,.02)).normalize();const he=Math.abs(ve-Ft)/(Fd-Zu);Q=Ys+.02+he*1.4+K.range(-.06,.12)}Ie[B]=Q,ae.aPos.setXYZ(B,it.x,it.y,it.z),ae.aVel.setXYZ(B,it.x*.05,it.y*.05,it.z*.05),ae.aT0.setX(B,Q),ae.aSize.setX(B,K.range(.006,.027)),ae.aSeed.setX(B,K.range(0,100)),ae.aLife.setX(B,K.range(.45,1.05))}for(const B in ae)ae[B].needsUpdate=!0}{const ae=p.attrs;for(let D=0;D<fh;D++){const B=1-2*K.next(),Q=Math.sqrt(Math.max(0,1-B*B)),te=K.range(0,Xn);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q);const ve=K.range(.25,1.5),pe=K.range(.018,.115)*K.range(.5,1.6);ae.aPos.setXYZ(D,it.x*ve,it.y*ve,it.z*ve),ae.aVel.setXYZ(D,it.x*pe,it.y*pe,it.z*pe),ae.aT0.setX(D,K.range(Yt+.2,zr+3.5)),ae.aSize.setX(D,K.range(.004,.019)),ae.aSeed.setX(D,K.range(0,100)),ae.aLife.setX(D,K.range(8,26))}for(const D in ae)ae[D].needsUpdate=!0}{const ae=T.attrs;for(let D=0;D<yc;D++){const B=1-(2*D+1)/yc,Q=Math.sqrt(Math.max(0,1-B*B)),te=D*2.399963+K.range(-.4,.4);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q).normalize();const ve=-Math.sin(te),pe=Math.cos(te),he=K.range(.055,.235),Ee=K.range(-.05,.05);ae.aOrigin.setXYZ(D,it.x,it.y,it.z),ae.aVel.setXYZ(D,it.x*he+ve*Ee,it.y*he+K.range(-.03,.03),it.z*he+pe*Ee);const Be=new b(K.gauss(),K.gauss(),K.gauss()).normalize();ae.aSpin.setXYZW(D,Be.x,Be.y,Be.z,K.range(-1.5,1.5));const $e=K.range(.006,.08)*(K.bool(.2)?1.7:1);ae.aScale.setXYZ(D,$e*K.range(.6,1.5),$e*K.range(.5,1.2),$e*K.range(.6,1.5));const N=Math.acos(we(it.dot(s),-1,1));ae.aT0.setX(D,Ys+.05+N/Math.PI*1.05+K.range(-.08,.2)),ae.aSeed.setX(D,K.range(0,100))}for(const D in ae)ae[D].needsUpdate=!0}{const ae=E.attrs;for(let D=0;D<hh;D++){const B=1-2*K.next(),Q=Math.sqrt(Math.max(0,1-B*B)),te=K.range(0,Xn);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q).normalize();const ve=K.range(.03,.18);ae.aOrigin.setXYZ(D,it.x*K.range(.35,1.05),it.y*K.range(.35,1.05),it.z*K.range(.35,1.05)),ae.aVel.setXYZ(D,it.x*ve,it.y*ve,it.z*ve);const pe=new b(K.gauss(),K.gauss(),K.gauss()).normalize();ae.aSpin.setXYZW(D,pe.x,pe.y,pe.z,K.range(-2.6,2.6));const he=K.range(.0025,.03);ae.aScale.setXYZ(D,he*K.range(.6,1.6),he*K.range(.5,1.3),he*K.range(.6,1.6)),ae.aT0.setX(D,K.range(Yt+.1,Yt+1.9)),ae.aSeed.setX(D,K.range(0,100))}for(const D in ae)ae[D].needsUpdate=!0}{const ae=R;for(let D=0;D<$s;D++){const B=1-(2*D+1)/$s,Q=Math.sqrt(Math.max(0,1-B*B)),te=D*2.399963+K.range(-.5,.5);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q).normalize(),ae.aDir.setXYZ(D,it.x,it.y,it.z);const ve=Math.acos(we(it.dot(s),-1,1));ae.aT0.setX(D,Ys-.35+ve/Math.PI*1+K.range(-.1,.25)),ae.aLen.setX(D,K.range(.07,.22)),ae.aRad.setX(D,K.range(.01,.034)),ae.aSeed.setX(D,K.range(0,100))}for(const D in ae)ae[D].needsUpdate=!0}{const ae=X;for(let D=0;D<Ss;D++){const B=1-2*K.next(),Q=Math.sqrt(Math.max(0,1-B*B)),te=K.range(0,Xn);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q),ae.aDir.setXYZ(D,it.x,it.y,it.z),ae.aSpeed.setX(D,K.range(.3,1.55)*(K.bool(.12)?2.1:1)),ae.aT0.setX(D,Yt+K.range(0,.85)*K.range(.2,1)),ae.aSize.setX(D,K.range(.006,.026)),ae.aSeed.setX(D,K.range(0,100)),ae.aR0.setX(D,K.range(.55,1.6)),ae.aLife.setX(D,K.range(3.5,13))}for(const D in ae)ae[D].needsUpdate=!0}{const ae=ue;for(let D=0;D<ws;D++){const B=1-(2*D+1)/ws,Q=Math.sqrt(Math.max(0,1-B*B)),te=D*2.399963+K.range(-.6,.6);it.set(Math.cos(te)*Q,B,Math.sin(te)*Q).normalize(),ae.aDir.setXYZ(D,it.x,it.y,it.z),ae.aT0.setX(D,zr-1.4+K.range(0,2.4)),ae.aSize.setX(D,K.range(.45,1.05)),ae.aSpeed.setX(D,K.range(.045,.135)),ae.aSeed.setX(D,K.range(0,100)),ae.aGrow.setX(D,K.range(.045,.115))}for(const D in ae)ae[D].needsUpdate=!0}}$(n);const ie={group:e,active:!1,elapsed:0,hullDamage:0,flash:0,bloomBoost:0,fireballRadius:0,shockRadius:0,stationHidden:!1,shake:0,start(Ae,K,ae){e.position.copy(Ae),t=K>0?K:tt,ae!==void 0&&ae!==n&&(n=ae,$(n));for(const D of[v.mat,m.mat,p.mat,T.mat,E.mat,I,O,Y])D.uniforms.uStartR.value=t;r.scale.setScalar(t*1.0015),ie.active=!0,ie.elapsed=0,ie.stationHidden=!1,ie.hullDamage=0,ie.flash=0,ie.bloomBoost=0,ie.shake=0,ie.fireballRadius=0,ie.shockRadius=0,e.visible=!0},update(Ae,K,ae){if(!ie.active)return;ie.elapsed+=Ae;const D=ie.elapsed;if(D>vS){ie.active=!1,e.visible=!1;return}const B=t;ae.getWorldPosition(Br),e.getWorldPosition(kr);const Q=Br.distanceTo(kr);it.set(Br.x-kr.x,Br.y-kr.y,Br.z-kr.z);const te=dn((D-yp)/(vc-yp)),ve=dn((D-xc)/(Or-xc)),pe=dn((D-Ys)/(_c-Ys));let he;D<vc?he=.4*Rr(te):D<Or?he=.4+.45*ve:D<_c?he=.85+.15*pe:he=1,ie.hullDamage=he;let Ee;D<xc?Ee=B*.04:D<Or?Ee=B*(.05+.5*Rr(ve)):D<_c?Ee=B*(.55-.15*L0(pe)):D<7.4?Ee=B*(.4+1.05*Rr((D-Yt)/1.8)):Ee=B*(1.45+5.05*Rr(dn((D-7.4)/13))),ie.fireballRadius=Ee;const Be=Math.max(0,D-Ka),$e=D<Ka?0:B*.9+B*1.9*Be/(1+.16*Be);ie.shockRadius=$e;const N=Math.min($e,B*xS),ct=(1-Dt(B*_S,B*yS,$e))*Dt(Ka,Ka+.28,D);ie.stationHidden=D>=6.2;{const Oe=o.uniforms;Oe.uTime.value=D,Oe.uFront.value=Math.PI*(.02+1.22*dn(D/2.15)),Oe.uHeat.value=dn(D/4.6)*.9+.1*dn((D-4.2)/1.4),Oe.uOpen.value=dn((D-1.2)/3.6),Oe.uCoreGlow.value=3*Dt(1.8,4.8,D)*(1-Dt(5.5,6.4,D)),Oe.uCamObj.value.set(it.x/(t*1.0015),it.y/(t*1.0015),it.z/(t*1.0015));const P=Dt(.02,.2,D)*(1-Dt(5.7,6.5,D));Oe.uIntensity.value=P*(.3+1.05*dn((D-.8)/3.8)),r.visible=P>.002}{const Oe=D>1.55;if(c.mesh.visible=Oe,Oe){const P=D<Yt?Ee*1.02:Ee*(.62-.3*dn((D-Yt)/8));c.setRadius(Math.max(P,B*.05)),c.setProgress(dn((D-xc)/10));const S=D<Yt?.55+.45*Dt(1.9,5.2,D):we(1-.62*Dt(Yt,16,D),.16,1);c.setHeat(S);const L=Dt(1.55,2.5,D)*(D<Yt?1:we(1.35-.95*Dt(Yt,18,D),.1,1));c.setOpacity(L),c.setDepthTest(D<5.62),c.update(Ae,D,ae)}}{const Oe=D>2.05;if(l.mesh.visible=Oe,Oe){l.setRadius(Ee);const P=D<Yt?.05*ve:dn((D-Yt)/12);l.setProgress(P);let S;if(D<Yt)S=Dt(2.05,2.9,D)*.85;else if(D<6.3)S=.85+.15*dn((D-Yt)/.7);else{const L=dn((D-Yt)/12);S=Math.max(.025,Math.pow(1-L,2.6))}l.setOpacity(S),l.setDepthTest(D<5.62),l.update(Ae,D,ae)}}v.mat.uniforms.uElapsed.value=D,v.mat.uniforms.uCamLocal.value.copy(it),v.mat.uniforms.uMaster.value=1-Dt(3.2,4.6,D),v.mesh.visible=D<4.7,m.mat.uniforms.uElapsed.value=D,m.mat.uniforms.uCamLocal.value.copy(it),m.mat.uniforms.uMaster.value=1-Dt(6,6.8,D),m.mesh.visible=D>Ys-.1&&D<6.9,p.mat.uniforms.uElapsed.value=D,p.mat.uniforms.uCamLocal.value.copy(it),p.mat.uniforms.uMaster.value=Dt(Yt,Yt+1.2,D),p.mesh.visible=D>Yt;{const Oe=.18+1.05*Math.exp(-Math.max(0,D-5.9)*.3)*Dt(4,5.9,D);T.mat.uniforms.uElapsed.value=D,T.mat.uniforms.uGlow.value=Oe,T.mat.uniforms.uOpacity.value=1-Dt(24,32,D),T.mesh.visible=D>Ys,E.mat.uniforms.uElapsed.value=D,E.mat.uniforms.uGlow.value=Oe*.85,E.mat.uniforms.uOpacity.value=1-Dt(26,33,D),E.mesh.visible=D>Yt}I.uniforms.uElapsed.value=D,I.uniforms.uLenMul.value=.6+.85*Dt(Ys,_c,D),I.uniforms.uMaster.value=.85*Dt(3.6,4.2,D)*(1-Dt(6,6.7,D)),F.visible=D>3.6&&D<6.8,O.uniforms.uElapsed.value=D,O.uniforms.uMaster.value=Dt(Yt,Yt+.25,D)*(1-Dt(15,21,D)),V.visible=D>Yt&&D<21.5,Y.uniforms.uElapsed.value=D,Y.uniforms.uCamLocal.value.copy(it),Y.uniforms.uOpacity.value=.42*Dt(zr-1,zr+2.5,D)*(1-Dt(27,34,D)),Y.uniforms.uGlow.value=we(1.7-1.35*Dt(8,22,D),.25,1.7),ee.visible=D>zr-1.2;{const Oe=D>=Ka&&ct>.003;if(u.mesh.visible=Oe,f.mesh.visible=Oe,h.mesh.visible=Oe,Oe){const P=dn(Be/9);u.setRadius(N),u.setProgress(P),u.setIntensity(ct*(.75+.55*(1-P))),u.update(Ae,D),f.setRadius(N*.955),f.setProgress(P),f.setIntensity(ct*(.65+.5*(1-P))),f.update(Ae,D,ae),h.setRadius(N*1.02),h.setProgress(P),h.setIntensity(ct*(.55+.65*(1-P))),h.update(Ae,D,ae)}}{const Oe=D<Yt?.06*Dt(1.8,4.2,D)+.2*pe:Math.max(.06,1.6*Math.exp(-(D-Yt)*.42));le.visible=D>1.6&&Oe>.02,le.decay=1,le.intensity=Oe*2.6*Math.max(Ee,B*.2),le.distance=Math.max(Ee*6,B*6),le.color.setRGB(1,.62+.22*dn(1-(D-Yt)/6),.3);const P=ct*(.55+.75*Math.exp(-Be*.2));Ce.visible=D>=Ka&&P>.02,Ce.decay=0,Ce.intensity=P*1.9,Ce.distance=N*1.12}{let Oe=0;D>=5.55&&(Oe=D<5.78?.78*Dt(5.56,5.78,D):.78*Math.exp(-(D-5.78)*4.5));for(let W=0;W<No;W++){const ne=D-Ue[W];ne>0&&ne<1.2&&(Oe+=.0055*Math.exp(-ne*6.5))}for(let W=0;W<Ea;W++){const ne=D-Ie[W];ne>0&&ne<1.2&&(Oe+=.0035*Math.exp(-ne*5.5))}let P=0;if(D>=Ka&&ct>.01&&Q>1){const W=Q*.1+B*.35,ne=(N-Q)/W;P=Math.exp(-ne*ne)*ct,Oe+=.3*P}ie.flash=we(Oe,0,1.35);let S;D<vc?S=.1*Rr(te):D<Or?S=.1+.2*ve:D<Yt?S=.3+.14*pe:D<5.95?S=.38+.32*dn((D-Yt)/.35):S=Math.max(.03,.7*Math.exp(-(D-5.95)*1.9)),ie.bloomBoost=we(S+.22*P,0,1);let L;D<vc?L=.05+.13*te:D<Or?L=.18+.16*ve:D<Yt?L=.34+.22*pe:D<5.95?L=.56+.44*dn((D-Yt)/.3):L=Math.max(.02,Math.exp(-(D-5.95)*.4));for(let W=0;W<Ea;W++){const ne=D-Ie[W];ne>0&&ne<.8&&(L+=.02*Math.exp(-ne*6))}ie.shake=we(L+.55*P,0,1)}},reset(){ie.active=!1,ie.elapsed=0,ie.hullDamage=0,ie.flash=0,ie.bloomBoost=0,ie.fireballRadius=0,ie.shockRadius=0,ie.stationHidden=!1,ie.shake=0,e.visible=!1,r.visible=!1,l.mesh.visible=!1,c.mesh.visible=!1,u.mesh.visible=!1,f.mesh.visible=!1,h.mesh.visible=!1,v.mesh.visible=!1,m.mesh.visible=!1,p.mesh.visible=!1,T.mesh.visible=!1,E.mesh.visible=!1,F.visible=!1,V.visible=!1,ee.visible=!1,le.visible=!1,Ce.visible=!1},dispose(){ie.reset(),a.dispose(),o.dispose(),l.dispose(),c.dispose(),u.dispose(),f.dispose(),h.dispose();for(const Ae of[v,m,p])Ae.geo.dispose(),Ae.mat.dispose();for(const Ae of[T,E])Ae.geo.dispose(),Ae.mat.dispose();d.dispose(),M.dispose(),x.dispose(),_.dispose(),A.dispose(),I.dispose(),H.dispose(),O.dispose(),z.dispose(),re.dispose(),Y.dispose(),e.clear(),i.remove(e)}},de=Ae=>(Ae.index?Ae.index.count:Ae.attributes.position.count)/3,De=de(a)+l.triangles+c.triangles+u.triangles+f.triangles+h.triangles+(No+Ea+fh+Ss)*2+yc*de(M)+hh*de(x)+$s*de(_)+ws*de(z);return e.userData.stats={drawCalls:1+l.drawCalls+1+u.drawCalls+1+1+3+2+1+1+1,triangles:Math.round(De)},ie.reset(),ie}const qo=48,Zi=qo+1,dh=44,FS=`
precision highp float;
varying vec3 vDir;
varying vec3 vNormalW;
varying vec3 vViewW;
void main() {
  vDir = normalize(position);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vViewW = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,NS=`
precision highp float;
${Mn}
${zn}
${qi}

uniform float uTime;
uniform float uIntensity;
uniform vec3  uColor;

varying vec3 vDir;
varying vec3 vNormalW;
varying vec3 vViewW;

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(vViewW);
  float fres = 1.0 - abs(dot(N, V));
  float centre = pow(1.0 - fres, 2.2);

  // churning plasma cells + filaments on the surface, visible from 2 m
  vec3 q = vDir * 3.4 + vec3(0.0, uTime * 0.85, uTime * 0.3);
  // warp the cells so the core reads as churning plasma, not a golf ball
  float cells = 1.0 - worley3(warp3(q * 1.5, 0.55, 1.7));
  float fil = ridged3(vDir * 5.5 + vec3(uTime * 1.4, 0.0, uTime * -0.7), 4, 2.15, 0.55);
  float n = fbm3(q, 4, 2.2, 0.55);

  float shell = pow(fres, 2.4) * (0.40 + 1.05 * fil);
  // strong noise weighting keeps visible plasma structure instead of a white ball
  float body = centre * (0.12 + 1.35 * n) * (0.55 + 0.85 * fil) + cells * 0.6 * (0.25 + fres);

  float pulse = 0.86 + 0.14 * sin(uTime * 26.0) + 0.06 * sin(uTime * 61.0);

  vec3 hot = mix(uColor, vec3(1.0, 1.0, 1.0), clamp(centre * 0.95, 0.0, 1.0));
  vec3 col = hot * (body * 2.2 + shell * 1.5) * pulse;
  // tight white-hot pinhole so bloom flares white without washing the body
  col += vec3(1.0) * pow(centre, 14.0) * (2.2 + 1.6 * n);

  float a = clamp(body * 1.5 + shell, 0.0, 1.0);
  gl_FragColor = vec4(col * uIntensity, a);
}
`,US=`
precision highp float;
uniform float uSize;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 originVS = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vec3 p = originVS + vec3(position.x, position.y, 0.0) * uSize;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}
`,OS=`
precision highp float;
${Mn}
${zn}
${vr}

uniform float uTime;
uniform float uIntensity;
uniform vec3  uColor;
varying vec2 vUv;

void main() {
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);
  if (r > 1.0) discard;

  float ang = atan(p.y, p.x);
  float rays = 0.55 + 0.45 * fbm2(vec2(ang * 2.6, uTime * 0.9), 3, 2.1, 0.6);
  float halo = pow(max(1.0 - r, 0.0), 2.6) * (0.55 + 0.7 * rays);
  float inner = pow(max(1.0 - r, 0.0), 10.0) * 2.6;
  // anamorphic streak, sells the "hot light source" read
  float streak = exp(-abs(p.y) * 26.0) * exp(-abs(p.x) * 1.7) * 0.85;

  float pulse = 0.82 + 0.18 * sin(uTime * 19.0);
  float I = (halo + inner + streak) * pulse;
  vec3 col = mix(uColor, vec3(1.0), clamp(inner * 0.6, 0.0, 1.0)) * I;
  gl_FragColor = vec4(col * uIntensity, clamp(I, 0.0, 1.0));
}
`,zS=`
precision highp float;
attribute float aT;
attribute float aSide;
varying float vT;
varying float vSide;
void main() {
  vT = aT;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,BS=`
precision highp float;
${Mn}
${zn}

uniform float uTime;
uniform float uIntensity;
uniform float uFill;
uniform vec3  uColor;
varying float vT;
varying float vSide;

void main() {
  float s = abs(vSide);
  float core = exp(-s * s * 16.0);
  float glow = exp(-s * s * 2.4);

  // energy shimmer running back along the wake
  float n = fbm2(vec2(vT * 9.0 + uTime * 3.5, 3.7), 3, 2.2, 0.55);
  float shimmer = 0.66 + 0.62 * n;

  float lenFade = pow(max(1.0 - vT, 0.0), 1.5) * smoothstep(0.0, 0.04, vT);
  float valid = step(vT, uFill + 1e-4);

  vec3 hot = mix(vec3(1.0, 1.0, 1.0), uColor, smoothstep(0.0, 0.22, vT));
  vec3 cold = uColor * vec3(0.45, 0.62, 1.0);
  vec3 col = mix(hot, cold, smoothstep(0.12, 0.85, vT));

  float I = (core * 1.9 + glow * 0.55) * lenFade * shimmer * valid;
  // the white-hot streak only survives near the head; the wake stays blue
  float hotHead = 1.0 - smoothstep(0.0, 0.22, vT);
  col = col * I + vec3(0.88, 0.95, 1.0) * core * core * lenFade * valid * hotHead * 1.3;
  gl_FragColor = vec4(col * uIntensity, clamp(I, 0.0, 1.0));
}
`,kS=`
precision highp float;
attribute float aIdx;
uniform float uTime;
uniform float uRadius;
uniform float uPixelScale;
uniform float uSize;
uniform vec3  uBack;      // local-space "backwards" (opposite travel)
uniform float uPull;
varying float vSeed;
varying float vLife;

float h(float x){ return fract(sin(x * 78.233) * 43758.5453); }

void main() {
  float i = aIdx;
  float s1 = h(i * 1.37);
  float s2 = h(i * 2.71 + 4.1);
  float s3 = h(i * 5.13 + 9.7);
  vSeed = s1;

  float sp = 2.2 + s2 * 5.5;
  float t = uTime * sp + i * 2.399963;

  vec3 axis = normalize(vec3(s1 - 0.5, s2 - 0.5, s3 - 0.5) + vec3(0.001));
  vec3 u = normalize(cross(axis, vec3(0.0, 0.0, 1.0) + vec3(0.31, 0.11, 0.0)));
  vec3 w = cross(axis, u);

  float rr = uRadius * (0.55 + 0.75 * s3) * (0.85 + 0.15 * sin(t * 0.83 + s1 * 10.0));
  vec3 p = (u * cos(t) + w * sin(t)) * rr;
  // streamed back into the wake
  p += uBack * (uPull * (0.15 + 1.25 * s2) * (0.55 + 0.45 * sin(t * 0.4)));

  vLife = 0.45 + 0.55 * (0.5 + 0.5 * sin(uTime * (7.0 + s2 * 14.0) + s1 * 30.0));

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uSize * (0.5 + s1) * uPixelScale / max(-mv.z, 0.01), 1.0, 60.0);
}
`,VS=`
precision highp float;
uniform float uIntensity;
uniform vec3  uColor;
varying float vSeed;
varying float vLife;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if (d > 1.0) discard;
  float core = pow(max(1.0 - d, 0.0), 3.5);
  float glow = pow(max(1.0 - d, 0.0), 1.2);
  float I = (core * 2.4 + glow * 0.4) * vLife;
  vec3 col = mix(uColor, vec3(1.0), core * 0.7) * I;
  gl_FragColor = vec4(col * uIntensity, clamp(I, 0.0, 1.0));
}
`,Ji=new b,Vr=new b,Mp=new b,Gr=new b,Sp=new b,Qi=new b,yi=new b,wp=new b,Tp=new b,bc=new st,Uo=new b;function GS(i){const e=(i?.color??new Ve(.42,.82,1)).clone(),t=i?.scale,n=i?.trail??95*t,s=n/qo,a=s*s,o=new Gn;o.name="torpedo-fx";const r=new Ns(.42*t,4),l=new xt({uniforms:{uTime:{value:0},uIntensity:{value:.62},uColor:{value:e.clone()}},vertexShader:FS,fragmentShader:NS,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,side:pi,toneMapped:!0}),c=new ft(r,l);c.renderOrder=16,o.add(c);const u=new Us(2,2),f=new xt({uniforms:{uTime:{value:0},uIntensity:{value:.28},uSize:{value:1.45*t},uColor:{value:e.clone()}},vertexShader:US,fragmentShader:OS,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,toneMapped:!0}),h=new ft(u,f);h.frustumCulled=!1,h.renderOrder=15,o.add(h);const d=new Tt,g=new We(new Float32Array(Zi*2*3),3);g.setUsage(tn);const v=new Float32Array(Zi*2),m=new Float32Array(Zi*2),p=[];for(let Y=0;Y<Zi;Y++){const ee=Y/qo;if(v[Y*2]=ee,v[Y*2+1]=ee,m[Y*2]=-1,m[Y*2+1]=1,Y<qo){const le=Y*2,Ce=le+1,Ue=le+2,Ie=le+3;p.push(le,Ce,Ue,Ce,Ie,Ue)}}d.setAttribute("position",g),d.setAttribute("aT",new We(v,1)),d.setAttribute("aSide",new We(m,1)),d.setIndex(p),d.boundingSphere=new mi(new b,n*2.5);const y=new xt({uniforms:{uTime:{value:0},uIntensity:{value:.28},uFill:{value:0},uColor:{value:e.clone()}},vertexShader:zS,fragmentShader:BS,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,side:cn,toneMapped:!0}),M=new ft(d,y);M.frustumCulled=!1,M.renderOrder=14,o.add(M);const x=new Tt,w=new Float32Array(dh*3),T=new Float32Array(dh);for(let Y=0;Y<dh;Y++)T[Y]=Y;x.setAttribute("position",new We(w,3)),x.setAttribute("aIdx",new We(T,1)),x.boundingSphere=new mi(new b,20*t);const E=new xt({uniforms:{uTime:{value:0},uIntensity:{value:.9},uRadius:{value:1.15*t},uPixelScale:{value:900},uSize:{value:.085*t},uBack:{value:new b(0,0,1)},uPull:{value:2.6*t},uColor:{value:e.clone()}},vertexShader:kS,fragmentShader:VS,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,toneMapped:!0}),_=new af(x,E);_.frustumCulled=!1,_.renderOrder=15,o.add(_);const A=new Float32Array(Zi*3);let R=0,I=1,F=!1;const H=(Y,ee,le)=>{A.copyWithin(3,0,(Zi-1)*3),A[0]=Y,A[1]=ee,A[2]=le,R<Zi&&R++},X=(Y,ee,le)=>{for(let Ce=0;Ce<Zi;Ce++)A[Ce*3]=Y,A[Ce*3+1]=ee,A[Ce*3+2]=le;R=1};let O=0;const V=(Y,ee)=>{const le=Math.min(Y,O);if(le<=0)return ee.copy(Ji);const Ce=le-1;return ee.set(A[Ce*3],A[Ce*3+1],A[Ce*3+2])};return{object:o,setIntensity:Y=>{I=Math.max(0,Y),l.uniforms.uIntensity.value=.62*I,f.uniforms.uIntensity.value=.28*I,y.uniforms.uIntensity.value=.55*I,E.uniforms.uIntensity.value=.9*I,o.visible=I>.001},update:(Y,ee,le,Ce)=>{o.updateWorldMatrix(!0,!1),o.getWorldPosition(Ji),le.getWorldPosition(Mp),F||(X(Ji.x,Ji.y,Ji.z),F=!0),Vr.set(A[0],A[1],A[2]);let Ue=Ji.distanceToSquared(Vr);if(Ue>n*n*9)X(Ji.x,Ji.y,Ji.z);else{let De=0;for(;Ue>a&&De++<Zi;){const Ae=Math.sqrt(Ue);yi.lerpVectors(Vr,Ji,s/Ae),H(yi.x,yi.y,yi.z),Vr.copy(yi),Ue=Ji.distanceToSquared(Vr)}}bc.copy(o.matrixWorld).invert();const Ie=g.array,$=Math.min(R,Zi-1);O=$;const ie=.22*t;for(let De=0;De<Zi;De++){V(De,yi),V(Math.max(De-1,0),wp),V(Math.min(De+1,$),Tp),Gr.subVectors(wp,Tp),Gr.lengthSq()<1e-9&&Gr.set(0,0,1),Gr.normalize(),Sp.subVectors(Mp,yi).normalize(),Qi.crossVectors(Gr,Sp),Qi.lengthSq()<1e-9?Qi.set(1,0,0):Qi.normalize();const Ae=De/qo,K=Math.min(1,Ae*6.5),ae=De>$?0:ie*(.38+1.35*K)*Math.pow(Math.max(0,1-Ae),.75);yi.applyMatrix4(bc),Qi.transformDirection(bc).multiplyScalar(ae);const D=De*6;Ie[D]=yi.x-Qi.x,Ie[D+1]=yi.y-Qi.y,Ie[D+2]=yi.z-Qi.z,Ie[D+3]=yi.x+Qi.x,Ie[D+4]=yi.y+Qi.y,Ie[D+5]=yi.z+Qi.z}g.needsUpdate=!0,y.uniforms.uFill.value=$/qo,l.uniforms.uTime.value=ee,f.uniforms.uTime.value=ee,y.uniforms.uTime.value=ee,E.uniforms.uTime.value=ee;const de=le;if(de.isPerspectiveCamera){const De=(typeof window<"u"?window.innerHeight:1080)*(window.devicePixelRatio||1);E.uniforms.uPixelScale.value=De/(2*Math.tan(de.fov*Math.PI/360))}Uo.copy(Ce),Uo.lengthSq()<1e-8?Uo.set(0,0,1):Uo.normalize().negate(),Uo.transformDirection(bc),E.uniforms.uBack.value.copy(Uo)},dispose:()=>{r.dispose(),l.dispose(),u.dispose(),f.dispose(),d.dispose(),y.dispose(),x.dispose(),E.dispose(),o.removeFromParent?.()}}}const Ep="sw-hud-style",HS=`
.sw-hud, .sw-hud * { box-sizing: border-box; }
.sw-hud {
  position: fixed; inset: 0; overflow: hidden; pointer-events: none;
  font-family: "SF Mono","Menlo","Consolas",monospace;
  -webkit-font-smoothing: antialiased;
  font-variant-numeric: tabular-nums;
  color: #cfe9ff;
  --amber: #ffb400;
  --amber-soft: #ffd684;
  --amber-dim: #7a5410;
  --blue: #d7ecff;
  --blue-dim: #5f88a4;
  --green: #79ffb4;
  --red: #ff4438;
  user-select: none;
}
.sw-hud[data-visible="0"] { display: none; }

.sw-hud .sw-el { position: absolute; left: 0; top: 0; will-change: transform; }

/* ---------------- letterbox ---------------- */
.sw-lb { position: absolute; left: 0; width: 100%; height: clamp(40px, 13vh, 150px); background: #000; }
.sw-lb-top { top: 0; transform-origin: top center; transform: scaleY(0); }
.sw-lb-bot { bottom: 0; transform-origin: bottom center; transform: scaleY(0); }

/* ---------------- damage flash / vignette ---------------- */
.sw-vignette-static {
  position: absolute; inset: -2px;
  background-image:
    radial-gradient(ellipse at center, transparent 55%, rgba(255,60,60,.05) 100%),
    radial-gradient(ellipse at center, transparent 58%, rgba(60,190,255,.05) 100%);
  background-position: -2px 0, 2px 0;
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  mix-blend-mode: screen;
}
.sw-dmg {
  position: absolute; inset: -2px; opacity: 0;
  background: radial-gradient(ellipse at center, transparent 45%, rgba(255,30,20,.65) 100%);
}

/* ---------------- scanlines (topmost, subtle) ---------------- */
.sw-scan {
  position: absolute; inset: 0; opacity: .035; mix-blend-mode: overlay;
  background: repeating-linear-gradient(to bottom, rgba(255,255,255,.9) 0px, rgba(255,255,255,.9) 1px, transparent 1px, transparent 3px);
}

/* ---------------- reticle ---------------- */
.sw-reticle-wrap { position: absolute; left: 0; top: 0; opacity: 1; transition: opacity .35s ease; }
.sw-reticle-wrap.is-hidden { opacity: 0; }
.sw-reticle-svg { width: clamp(120px, 15vmin, 230px); height: clamp(120px, 15vmin, 230px); overflow: visible; display: block; transform: translate(-50%,-50%); }
.sw-reticle-svg .ring { stroke: var(--amber); stroke-width: 1; fill: none; opacity: .8; }
.sw-reticle-svg .brk { stroke: var(--amber); stroke-width: 1.4; fill: none; }
.sw-reticle-svg .tick { stroke: var(--amber); stroke-width: 1.2; }
.sw-reticle-svg .dot { fill: var(--amber); }
.sw-reticle-svg .lockgrp { opacity: 0; transition: opacity .3s ease; }
.sw-hud.mode-targeting .sw-reticle-svg .lockgrp { opacity: 1; }
.sw-reticle-svg .lockbox { stroke: var(--amber); stroke-width: 1; fill: none; transition: stroke .25s ease; }
.sw-reticle-svg .lockbox.locked { stroke: var(--green); }
.sw-reticle-svg .corner { stroke: var(--amber); stroke-width: 1.6; fill: none; transition: stroke .25s ease, transform .18s cubic-bezier(.2,1.5,.4,1); }
.sw-reticle-svg .corner.locked { stroke: var(--green); }
.sw-reticle-svg .pulse { stroke: var(--green); stroke-width: 1.2; fill: none; opacity: 0; }
.sw-reticle-svg .locktxt { fill: var(--green); font-size: 11px; letter-spacing: .3em; opacity: 0; font-family: inherit; }

/* ---------------- target box ---------------- */
.sw-tbox-wrap { position: absolute; inset: 0; opacity: 0; transition: opacity .25s ease; }
.sw-tbox-wrap.is-visible { opacity: 1; }
.sw-tbox-box { position: absolute; left: 0; top: 0; width: 100px; height: 100px; }
.sw-tbox-svg { width: 100%; height: 100%; display: block; overflow: visible; }
.sw-tbox-svg .frame { stroke: var(--amber); stroke-width: 1; fill: none; opacity: .35; }
.sw-tbox-svg .corner { stroke: var(--amber); stroke-width: 2; fill: none; }
.sw-tbox-svg .cross { stroke: var(--green); stroke-width: 1; opacity: 0; transition: opacity .25s ease; }
.sw-tbox-wrap.is-locked .sw-tbox-svg .corner { stroke: var(--green); }
.sw-tbox-wrap.is-locked .sw-tbox-svg .frame { stroke: var(--green); opacity: .5; }
.sw-tbox-wrap.is-locked .sw-tbox-svg .cross { opacity: .9; }
.sw-tbox-label {
  position: absolute; left: 0; top: 0; transform: translate(-50%,0);
  font-size: clamp(9px, 1.1vmin, 12px); letter-spacing: .28em; color: var(--amber);
  text-shadow: 0 0 6px rgba(255,180,0,.5); white-space: nowrap;
}
.sw-tbox-wrap.is-locked .sw-tbox-label { color: var(--green); text-shadow: 0 0 6px rgba(120,255,180,.5); }
.sw-tbox-range {
  position: absolute; left: 0; top: 0; transform: translate(-50%,0);
  font-size: clamp(9px, 1vmin, 11px); letter-spacing: .12em; color: var(--blue-dim); white-space: nowrap;
}

/* ---------------- corner panels ---------------- */
.sw-panel { position: absolute; opacity: 1; transition: opacity .4s ease; }
.sw-hud:not(.mode-combat):not(.mode-targeting) .sw-panel { opacity: 0; }

.sw-panel-left { left: clamp(12px, 2.2vw, 30px); bottom: clamp(14px, 3vh, 34px); width: clamp(96px, 10vw, 140px); }
.sw-panel-right { right: clamp(12px, 2.2vw, 30px); bottom: clamp(14px, 3vh, 34px); width: clamp(120px, 12vw, 170px); }

.sw-cap { font-size: clamp(8px, .9vmin, 10px); letter-spacing: .3em; color: var(--blue-dim); text-align: center; margin-top: 4px; }

.sw-shield-wrap { position: relative; width: clamp(70px, 8vw, 108px); height: clamp(70px, 8vw, 108px); margin: 0 auto; }
.sw-shield-svg { width: 100%; height: 100%; display: block; overflow: visible; }
.sw-shield-svg .track { stroke: rgba(120,170,200,.18); stroke-width: 4; fill: none; }
.sw-shield-svg .fill { stroke: var(--blue); stroke-width: 4; fill: none; stroke-linecap: butt; transition: stroke .3s ease; }
.sw-shield-svg .fill.low { stroke: var(--red); }
.sw-shield-pct {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: clamp(13px, 1.5vw, 18px); color: var(--blue); text-shadow: 0 0 8px rgba(160,210,255,.35);
}
.sw-deflector { width: clamp(46px, 5.2vw, 68px); height: clamp(46px, 5.2vw, 68px); margin: 8px auto 0; display: block; overflow: visible; }
.sw-deflector .quad { fill: var(--blue); stroke: #050a10; stroke-width: 2; opacity: .3; transition: opacity .3s ease, fill .3s ease; }
.sw-deflector .quad.low { fill: var(--red); }
.sw-deflector .cross { stroke: rgba(200,230,255,.65); stroke-width: 1; }
.sw-deflector .ring { stroke: rgba(200,230,255,.65); stroke-width: 1.2; fill: none; }
.sw-deflector .hub { fill: rgba(200,230,255,.8); }

.sw-right-row { display: flex; align-items: flex-end; gap: 8px; }
.sw-throttle-track { position: relative; width: 8px; height: clamp(64px, 9vh, 110px); background: rgba(120,170,200,.14); border: 1px solid rgba(120,170,200,.3); flex: none; }
.sw-throttle-fill { position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; background: var(--amber); transform: scaleY(0); transform-origin: bottom; }
.sw-throttle-fill.boost { background: var(--amber-soft); box-shadow: 0 0 10px rgba(255,190,80,.7); }

.sw-right-col { flex: 1; min-width: 0; }
.sw-speed { font-size: clamp(18px, 2.1vw, 26px); color: var(--blue); text-shadow: 0 0 8px rgba(160,210,255,.35); letter-spacing: .05em; line-height: 1; text-align: right; }
.sw-speed .unit { font-size: .4em; letter-spacing: .2em; color: var(--blue-dim); margin-left: .35em; }
.sw-boost-tag {
  margin-top: 4px; text-align: right; font-size: clamp(8px, .9vmin, 10px); letter-spacing: .3em;
  color: var(--amber-dim); transition: color .2s ease, text-shadow .2s ease;
}
.sw-boost-tag.on { color: var(--amber); text-shadow: 0 0 8px rgba(255,180,0,.6); }

.sw-laser { margin-top: 10px; }
.sw-laser-label { font-size: clamp(8px, .9vmin, 10px); letter-spacing: .28em; color: var(--blue-dim); display: flex; justify-content: space-between; }
.sw-laser-label .state { color: var(--amber); }
.sw-laser-label .state.hot { color: var(--red); }
.sw-laser-track { height: 4px; background: rgba(120,170,200,.14); border: 1px solid rgba(120,170,200,.3); margin-top: 3px; }
.sw-laser-fill { height: 100%; width: 100%; background: var(--green); transform: scaleX(0); transform-origin: left; }

.sw-torp { margin-top: 10px; display: flex; justify-content: flex-end; gap: 6px; }
.sw-torp svg { width: 26px; height: 12px; overflow: visible; }
.sw-torp path { fill: var(--amber); stroke: var(--amber); stroke-width: .5; transition: fill .3s ease, opacity .3s ease; }
.sw-torp .spent path { fill: rgba(110,140,160,.25); stroke: rgba(110,140,160,.25); }

/* ---------------- corner stats / phase ---------------- */
.sw-stats {
  position: absolute; left: clamp(10px, 1.6vw, 20px); top: clamp(10px, 1.6vh, 20px);
  font-size: clamp(9px, 1vmin, 11px); letter-spacing: .1em; color: var(--blue-dim); opacity: 0; transition: opacity .2s ease;
}
.sw-stats.on { opacity: .85; }
.sw-stats b { color: var(--blue); font-weight: 400; }

.sw-phase {
  position: absolute; right: clamp(10px, 1.6vw, 20px); top: clamp(10px, 1.6vh, 20px);
  font-size: clamp(9px, 1vmin, 11px); letter-spacing: .32em; color: var(--amber-dim);
  border-bottom: 1px solid rgba(255,180,0,.25); padding-bottom: 3px; opacity: .9;
}

/* ---------------- radio chatter ---------------- */
.sw-radio {
  position: absolute; left: 50%; bottom: clamp(58px, 9vh, 96px); transform: translateX(-50%);
  max-width: min(74vw, 640px); text-align: center; opacity: 0; transition: opacity .35s ease;
  font-size: clamp(11px, 1.5vmin, 15px); letter-spacing: .04em;
}
.sw-radio.show { opacity: 1; }
.sw-radio .spk { color: var(--amber); letter-spacing: .18em; text-shadow: 0 0 6px rgba(255,180,0,.4); }
.sw-radio .sep { color: var(--amber-dim); margin: 0 .5em; }
.sw-radio .txt { color: var(--blue); text-shadow: 0 0 5px rgba(160,210,255,.3); }

/* ---------------- title card ---------------- */
.sw-title { position: absolute; left: 50%; top: 44%; transform: translate(-50%,-50%); text-align: center; opacity: 0; transition: opacity .9s ease; }
.sw-title.show { opacity: 1; }
.sw-title .main { font-size: clamp(16px, 3.4vw, 46px); letter-spacing: .24em; color: var(--amber-soft); font-weight: 400; text-shadow: 0 0 22px rgba(255,190,60,.4); white-space: nowrap; }
.sw-title .sub { margin-top: 12px; font-size: clamp(9px, 1.15vw, 14px); letter-spacing: .38em; color: var(--blue-dim); white-space: nowrap; }

/* ---------------- progress hairline ---------------- */
.sw-progress { position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: rgba(120,170,200,.14); }
.sw-progress i { display: block; height: 100%; width: 100%; background: var(--amber-dim); transform: scaleX(0); transform-origin: left; }
`;function WS(){if(document.getElementById(Ep))return;const i=document.createElement("style");i.id=Ep,i.textContent=HS,document.head.appendChild(i)}const qS="http://www.w3.org/2000/svg";function At(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t&&t.appendChild(n),n}function en(i,e,t){const n=document.createElementNS(qS,i);if(e)for(const s in e)n.setAttribute(s,String(e[s]));return t&&t.appendChild(n),n}function Qo(i,e,t,n){const s=(n-90)*Math.PI/180;return{x:i+t*Math.cos(s),y:e+t*Math.sin(s)}}function Ap(i,e,t,n,s){const a=Qo(i,e,t,n),o=Qo(i,e,t,s),r=((s-n)%360+360)%360>180?1:0;return`M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${t} ${t} 0 ${r} 1 ${o.x.toFixed(2)} ${o.y.toFixed(2)}`}function XS(){return"M2,6 C2,3 5,1 9,1 L17,1 L26,6 L17,11 L9,11 C5,11 2,9 2,6 Z"}function YS(i){return i>=1e6?(i/1e6).toFixed(1)+"M":i>=1e3?(i/1e3).toFixed(1)+"K":String(Math.round(i))}function $S(i){return Math.max(0,Math.round(i)).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" M"}function KS(i){WS(),i.classList.add("sw-hud"),i.setAttribute("data-visible","1");let e=window.innerWidth||1280,t=window.innerHeight||720;const n=()=>{e=window.innerWidth,t=window.innerHeight};window.addEventListener("resize",n);const s=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);At("div","sw-vignette-static",i);const a=At("div","sw-lb sw-lb-top",i),o=At("div","sw-lb sw-lb-bot",i),r=At("div","sw-dmg",i),l=At("div","sw-reticle-wrap is-hidden",i),c=en("svg",{viewBox:"0 0 200 200",class:"sw-reticle-svg"},l),u=en("g",{class:"ringgrp"},c);en("circle",{cx:100,cy:100,r:88,class:"ring","stroke-dasharray":"3 8"},u),en("path",{d:Ap(100,100,72,235,305),class:"brk"},c),en("path",{d:Ap(100,100,72,55,125),class:"brk"},c);for(const U of[0,90,180,270]){const Z=Qo(100,100,52,U),ye=Qo(100,100,64,U);en("line",{x1:Z.x.toFixed(1),y1:Z.y.toFixed(1),x2:ye.x.toFixed(1),y2:ye.y.toFixed(1),class:"tick"},c)}en("circle",{cx:100,cy:100,r:2.2,class:"dot"},c);const f=en("g",{class:"lockgrp"},c),h=en("rect",{x:52,y:52,width:96,height:96,class:"lockbox"},f),d=10;function g(U,Z,ye,ut){return`M ${U} ${Z+ut*d} L ${U} ${Z} L ${U+ye*d} ${Z}`}const v=[],m=[[-1,-1],[1,-1],[-1,1],[1,1]];for(const[U,Z]of m){const ye=en("path",{class:"corner"},f);v.push(ye)}const p=en("circle",{cx:100,cy:100,r:20,class:"pulse"},c),y=en("text",{x:100,y:152,class:"locktxt","text-anchor":"middle"},c);y.textContent="LOCK";const M=At("div","sw-tbox-wrap",i),x=At("div","sw-tbox-box",M),w=en("svg",{viewBox:"0 0 100 100",class:"sw-tbox-svg"},x);en("rect",{x:4,y:4,width:92,height:92,class:"frame"},w);const T=16,E=[`M4,${4+T} L4,4 L${4+T},4`,`M${96-T},4 L96,4 L96,${4+T}`,`M4,${96-T} L4,96 L${4+T},96`,`M${96-T},96 L96,96 L96,${96-T}`];for(const U of E)en("path",{d:U,class:"corner"},w);en("line",{x1:4,y1:4,x2:96,y2:96,class:"cross"},w),en("line",{x1:96,y1:4,x2:4,y2:96,class:"cross"},w);const _=At("div","sw-tbox-label",M);_.textContent="EXHAUST PORT";const A=At("div","sw-tbox-range",M),R=At("div","sw-panel sw-panel-left",i),I=At("div","sw-shield-wrap",R),F=en("svg",{viewBox:"0 0 120 120",class:"sw-shield-svg"},I),H=50,X=2*Math.PI*H;en("circle",{cx:60,cy:60,r:H,class:"track"},F);const O=en("circle",{cx:60,cy:60,r:H,class:"fill","stroke-dasharray":X.toFixed(1),transform:"rotate(-90 60 60)"},F),V=At("div","sw-shield-pct",I),z=en("svg",{viewBox:"0 0 80 80",class:"sw-deflector"},R),re=[],ue=[[0,90],[90,180],[180,270],[270,360]];for(const[U,Z]of ue){const ye=Qo(40,40,30,U),ut=Qo(40,40,30,Z),Ut=Z-U>180?1:0,xn=`M40,40 L${ye.x.toFixed(1)},${ye.y.toFixed(1)} A30,30 0 ${Ut} 1 ${ut.x.toFixed(1)},${ut.y.toFixed(1)} Z`;re.push(en("path",{d:xn,class:"quad"},z))}en("circle",{cx:40,cy:40,r:30,class:"ring"},z),en("line",{x1:10,y1:40,x2:70,y2:40,class:"cross"},z),en("line",{x1:40,y1:10,x2:40,y2:70,class:"cross"},z),en("circle",{cx:40,cy:40,r:2.4,class:"hub"},z);const Y=At("div","sw-cap",R);Y.textContent="DEFLECTOR";const ee=At("div","sw-panel sw-panel-right",i),le=At("div","sw-right-row",ee),Ce=At("div","sw-throttle-track",le),Ue=At("div","sw-throttle-fill",Ce),Ie=At("div","sw-right-col",le),$=At("div","sw-speed",Ie),ie=At("span","unit",$);ie.textContent="M/S";const de=At("div","sw-boost-tag",Ie);de.textContent="BOOST";const De=At("div","sw-laser",Ie),Ae=At("div","sw-laser-label",De),K=At("span",void 0,Ae);K.textContent="LASER";const ae=At("span","state",Ae);ae.textContent="READY";const D=At("div","sw-laser-track",De),B=At("div","sw-laser-fill",D),Q=At("div","sw-torp",Ie),te=[];for(let U=0;U<2;U++){const Z=At("div",void 0,Q),ye=en("svg",{viewBox:"0 0 28 12"},Z);en("path",{d:XS()},ye),te.push(Z)}const ve=At("div","sw-stats",i),pe=At("div","sw-phase",i),he=At("div","sw-radio",i),Ee=At("span","spk",he),Be=At("span","sep",he);Be.textContent="▸";const $e=At("span","txt",he),N=At("div","sw-title",i),ct=At("div","main",N),Oe=At("div","sub",N),P=At("div","sw-progress",i),S=At("i",void 0,P);At("div","sw-scan",i);const L={mode:"off",visible:!0,speedLast:-1,boostLast:void 0,shieldLast:-1,torpLast:-1,laserReadyLast:void 0,laserHeatLast:-1,lockProgress:0,locked:!1,lockSizeCur:96,pulseActive:!1,pulseT:0,reticle:{x:0,y:0,visible:!1},reticleShownLast:!1,tbox:{x:0,y:0,size:60,visible:!1,locked:!1},tboxVisibleLast:!1,tboxLockedLast:!1,rangeLast:void 0,phaseLast:"",letterboxTarget:0,letterboxCur:0,dmgFlash:0,statsOn:!1,progressLast:-1,ringAngle:0,radioQueue:[],radioActive:null,title:null},W=(U,Z)=>({x:(U*.5+.5)*e,y:(1-(Z*.5+.5))*t});function ne(){i.classList.remove("mode-off","mode-cinematic","mode-combat","mode-targeting"),i.classList.add("mode-"+L.mode)}function Te(U){L.mode!==U&&(L.mode=U,ne())}function Pe(U){L.visible!==U&&(L.visible=U,i.setAttribute("data-visible",U?"1":"0"))}function ce(U,Z){const ye=Math.round(U);if(ye!==L.speedLast){L.speedLast=ye;const Ut=Math.max(0,Math.min(9999,ye)).toString().padStart(4,"0");$.firstChild.textContent=Ut+" "}Z!==L.boostLast&&(L.boostLast=Z,de.classList.toggle("on",Z),Ue.classList.toggle("boost",Z));const ut=dn(U/Um);Ue.style.transform=`scaleY(${ut.toFixed(3)})`}function fe(U){const Z=dn(U);if(Math.abs(Z-L.shieldLast)<.001&&L.shieldLast>=0)return;L.shieldLast=Z;const ye=X*(1-Z);O.setAttribute("stroke-dashoffset",ye.toFixed(1));const ut=Z<.35;O.classList.toggle("low",ut),V.textContent=Math.round(Z*100)+"%";for(const Ut of re)Ut.classList.toggle("low",ut);for(const Ut of re)Ut.style.opacity=String(.12+Z*.55)}function Le(U){U!==L.torpLast&&(L.torpLast=U,te.forEach((Z,ye)=>Z.classList.toggle("spent",ye>=U)))}function je(U,Z){const ye=dn(Z);U!==L.laserReadyLast&&(L.laserReadyLast=U,ae.textContent=U?"READY":"OVERHEAT",ae.classList.toggle("hot",!U)),Math.abs(ye-L.laserHeatLast)>.003&&(L.laserHeatLast=ye,B.style.transform=`scaleX(${ye.toFixed(3)})`,B.style.background=ye>.85?"var(--red)":ye>.55?"var(--amber)":"var(--green)")}function qe(U,Z){L.lockProgress=dn(U),Z&&!L.locked&&(L.pulseActive=!0,L.pulseT=0),L.locked=Z,h.classList.toggle("locked",Z);for(const ye of v)ye.classList.toggle("locked",Z)}function Ge(U,Z,ye){if(L.reticle.x=U,L.reticle.y=Z,L.reticle.visible=ye,ye!==L.reticleShownLast&&(L.reticleShownLast=ye,l.classList.toggle("is-hidden",!ye)),ye){const ut=W(U,Z);c.style.transform=`translate(${ut.x.toFixed(1)}px,${ut.y.toFixed(1)}px) translate(-50%,-50%)`}}function at(U,Z,ye,ut,Ut){if(L.tbox.x=U,L.tbox.y=Z,L.tbox.size=ye,L.tbox.visible=ut,L.tbox.locked=Ut,ut!==L.tboxVisibleLast&&(L.tboxVisibleLast=ut,M.classList.toggle("is-visible",ut)),Ut!==L.tboxLockedLast&&(L.tboxLockedLast=Ut,M.classList.toggle("is-locked",Ut)),!ut)return;const xn=W(U,Z),Bn=ye/100;x.style.transform=`translate(${(xn.x-50).toFixed(1)}px,${(xn.y-50).toFixed(1)}px) scale(${Bn.toFixed(3)})`;const kn=ye/2;_.style.transform=`translate(${xn.x.toFixed(0)}px,${(xn.y-kn-20).toFixed(0)}px) translate(-50%,0)`,A.style.transform=`translate(${xn.x.toFixed(0)}px,${(xn.y+kn+12).toFixed(0)}px) translate(-50%,0)`}function ot(U){U!==L.rangeLast&&(L.rangeLast=U,A.style.opacity=U===null?"0":"1",A.textContent=U===null?"":$S(U))}function _t(U,Z,ye=3.6){L.radioQueue.length+(L.radioActive?1:0)>=4||L.radioQueue.push({speaker:U,text:Z,dur:ye})}function G(U,Z="",ye=3.5){L.title={main:U,sub:Z,dur:ye,phase:"in",t:0},ct.textContent=U,Oe.textContent=Z,Oe.style.display=Z?"":"none",N.classList.add("show")}function Ne(U){U!==L.phaseLast&&(L.phaseLast=U,pe.textContent=U)}function me(U=1){L.dmgFlash=Math.max(L.dmgFlash,dn(U))}function ke(U){L.letterboxTarget=dn(U)}function Xe(U,Z,ye,ut){ve.innerHTML=`<b>${Math.round(U)}</b> FPS &middot; <b>${Math.round(Z)}</b> DRAWS &middot; <b>${YS(ye)}</b> TRIS &middot; <b>${ut.toFixed(1)}</b> MS`}function Me(U){U!==L.statsOn&&(L.statsOn=U,ve.classList.toggle("on",U))}function et(U){const Z=dn(U);Math.abs(Z-L.progressLast)<5e-4||(L.progressLast=Z,S.style.transform=`scaleX(${Z.toFixed(4)})`)}function Qe(){const U=On(96,40,L.lockProgress);L.lockSizeCur=bn(L.lockSizeCur,U,10,1/60);const Z=L.lockSizeCur,ye=Z/2,ut=100-ye,Ut=100-ye;h.setAttribute("x",ut.toFixed(2)),h.setAttribute("y",Ut.toFixed(2)),h.setAttribute("width",Z.toFixed(2)),h.setAttribute("height",Z.toFixed(2));const xn=4,Bn=ut+xn,kn=Ut+xn,zi=ut+Z-xn,ai=Ut+Z-xn;v[0].setAttribute("d",g(Bn,kn,1,1)),v[1].setAttribute("d",g(zi,kn,-1,1)),v[2].setAttribute("d",g(Bn,ai,1,-1)),v[3].setAttribute("d",g(zi,ai,-1,-1))}function sn(U){if(!L.pulseActive)return;L.pulseT+=U;const ye=L.pulseT/.5;if(ye>=1){L.pulseActive=!1,p.style.opacity="0",y.style.opacity="0";return}const ut=On(18,74,ye);p.setAttribute("r",ut.toFixed(1)),p.style.opacity=String(1-ye);const Ut=ye<.2?ye/.2:1-(ye-.2)/.8;y.style.opacity=String(Math.max(0,Ut))}function qt(U){if(!L.radioActive&&L.radioQueue.length){const ye=L.radioQueue.shift();L.radioActive={...ye,phase:"type",t:0,shown:0},Ee.textContent=ye.speaker.toUpperCase(),$e.textContent="",he.classList.add("show")}const Z=L.radioActive;if(Z)if(Z.t+=U,Z.phase==="type"){const ye=Math.min(Z.text.length,Math.floor(Z.t*28));ye!==Z.shown&&(Z.shown=ye,$e.textContent=Z.text.slice(0,ye)),ye>=Z.text.length&&(Z.phase="hold",Z.t=0)}else Z.phase==="hold"?Z.t>=Z.dur&&(Z.phase="fade",Z.t=0,he.classList.remove("show")):Z.t>=.4&&(L.radioActive=null)}function gi(U){const Z=L.title;Z&&(Z.t+=U,Z.phase==="in"?Z.t>=.9&&(Z.phase="hold",Z.t=0):Z.phase==="hold"?Z.t>=Z.dur&&(Z.phase="out",Z.t=0,N.classList.remove("show")):Z.t>=.9&&(L.title=null))}function vi(U,Z){U<=0&&(U=1/60),s||(L.ringAngle+=U*9),u.setAttribute("transform",`rotate(${L.ringAngle.toFixed(2)} 100 100)`),Qe(),sn(U),L.letterboxCur=bn(L.letterboxCur,L.letterboxTarget,4,U),(Math.abs(L.letterboxCur-L.letterboxTarget)>.001||L.letterboxCur>5e-4||L.letterboxTarget===0)&&(a.style.transform=`scaleY(${L.letterboxCur.toFixed(4)})`,o.style.transform=`scaleY(${L.letterboxCur.toFixed(4)})`),L.dmgFlash>5e-4?(L.dmgFlash*=Math.exp(-U*3.4),r.style.opacity=L.dmgFlash.toFixed(3)):L.dmgFlash!==0&&(L.dmgFlash=0,r.style.opacity="0"),qt(U),gi(U)}function xe(){for(window.removeEventListener("resize",n);i.firstChild;)i.removeChild(i.firstChild);i.classList.remove("sw-hud","mode-off","mode-cinematic","mode-combat","mode-targeting"),i.removeAttribute("data-visible")}return $.insertBefore(document.createTextNode("0000 "),ie),ce(0,!1),fe(1),Le(2),je(!0,0),qe(0,!1),ne(),{root:i,setMode:Te,setVisible:Pe,setSpeed:ce,setShield:fe,setTorpedoes:Le,setLasers:je,setLock:qe,setReticle:Ge,setTargetBox:at,setRange:ot,radio:_t,title:G,setPhase:Ne,flashDamage:me,setLetterbox:ke,setStats:Xe,showStats:Me,setProgress:et,update:vi,dispose:xe}}const Ks=new Ct,Mc=new Ct,Oo=new Qn(0,0,0,"YXZ"),Aa=new b,Hr=new b,Cp=new b;function ph(i,e,t){const n=i/e,s=Math.floor(n),a=n-s,o=a*a*(3-2*a),r=ml(s+t*7919)*2-1,l=ml(s+1+t*7919)*2-1;return r+(l-r)*o}class ZS{constructor(){this.mode="path",this.autopilot=!0,this.position=new b,this.quaternion=new Ct,this.velocity=new b,this.radius=7,this.s=0,this.lateral=0,this.up=-105*.5,this.latVel=0,this.upVel=0,this.speed=0,this.throttle=1,this.boosting=!1,this.boostFuel=1,this.bank=0,this.pitchA=0,this.yawA=0,this.rollInput=0,this.shield=1,this.torpedoes=2,this.laserHeat=0,this.laserCooldown=0,this.hitFlash=0,this.hullHitTimer=0,this.path=null,this.pathDuration=1,this.pathTime=0,this.pathBank=0,this.pathUp=new b(0,1,0),this.pathDone=!1,this.freeDir=new b(0,0,-1),this.freeSpeed=300,this.frozen=!1,this.profile=null,this._clear={lateral:0,up:0}}pc(e){return this.profile?this.profile.centre(e):0}pf(e){return this.profile?this.profile.floor(e):-105}ph(e){return this.profile?this.profile.halfWidth(e):Ba}setPath(e,t,n){this.path=new cf(e,!1,"catmullrom",.25),this.pathDuration=t,this.pathTime=0,this.pathDone=!1,n&&this.pathUp.copy(n),this.mode="path"}clearPath(){this.path=null}enterTrench(e,t,n){this.mode="trench",this.s=e,this.lateral=t??this.pc(e),this.up=n??this.pf(e)+48,this.latVel=0,this.upVel=0,this.speed=Nd}trenchEntryPoint(e,t){return Jn(e,this.pc(e),this.pf(e)+48,t)}update(e,t,n,s){e<=0||(Cp.copy(this.position),this.frozen||(this.mode==="path"?this.updatePath(e,t):this.mode==="trench"?this.updateTrench(e,t,n,s):this.updateFree(e,t,n)),this.velocity.subVectors(this.position,Cp).divideScalar(Math.max(e,1e-5)),this.mode==="free"&&(this.speed=this.velocity.length()||this.speed),this.laserCooldown=Math.max(0,this.laserCooldown-e),this.laserHeat=we(this.laserHeat-e*.42,0,1),this.hitFlash=Math.max(0,this.hitFlash-e*2.4),this.hullHitTimer=Math.max(0,this.hullHitTimer-e),this.shield=we(this.shield+e*.05,0,1),this.boosting||(this.boostFuel=we(this.boostFuel+e*.22,0,1)))}updatePath(e,t){if(!this.path)return;this.pathTime=Math.min(this.pathTime+e,this.pathDuration);const n=this.pathTime/this.pathDuration;n>=1&&(this.pathDone=!0),this.path.getPointAt(we(n,0,1),this.position),this.path.getTangentAt(we(n,0,1),Aa).normalize(),this.path.getTangentAt(we(n+.012,0,1),Hr).normalize();const a=Hr.clone().cross(Aa).dot(Aa.clone().cross(this.pathUp).normalize());this.pathBank=bn(this.pathBank,we(-a*26,-.9,.9),3,e),Hr.copy(this.position).add(Aa);const o=new st().lookAt(this.position,Hr,this.pathUp);Ks.setFromRotationMatrix(o),Oo.set(0,0,this.pathBank,"YXZ"),Mc.setFromEuler(Oo),Ks.multiply(Mc),I0(this.quaternion,Ks,7,e),this.speed=this.path.getLength()/this.pathDuration}updateFree(e,t,n){let s=0,a=0,o=0;if(n&&!this.autopilot&&(s=-n.axis(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),a=n.axis(["KeyS","ArrowDown"],["KeyW","ArrowUp"]),o=n.axis(["KeyE"],["KeyQ"])),Oo.set(a*1.1*e,s*1.1*e,o*2*e,"YXZ"),Ks.setFromEuler(Oo),this.quaternion.multiply(Ks).normalize(),this.autopilot){Aa.copy(this.position).addScaledVector(this.freeDir,100);const r=new st().lookAt(this.position,Aa,Hr.set(0,1,0));Ks.setFromRotationMatrix(r),I0(this.quaternion,Ks,1.6,e)}Aa.set(0,0,-1).applyQuaternion(this.quaternion),this.speed=bn(this.speed,this.freeSpeed,1.2,e),this.position.addScaledVector(Aa,this.speed*e)}updateTrench(e,t,n,s){let r=0,l=0,c=0,u=!1;if(n&&!this.autopilot)r=n.axis(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]),l=n.axis(["KeyS","ArrowDown"],["KeyW","ArrowUp"]),c=n.axis(["KeyE"],["KeyQ"]),u=n.isDown("ShiftLeft","ShiftRight");else{const m=this.pc(this.s),p=this.pf(this.s),y=this.ph(this.s),M=ph(this.s,620,3),x=ph(this.s,240,11);let w=m+(M*.58+x*.18)*(y-44),T=p+54+ph(this.s,480,5)*14;const E=Ft-this.s;if(E<2600){const _=Dt(2600,700,E);w=On(w,this.pc(Ft),_),T=On(T,this.pf(Ft)+40,_)}if(s){let _=this.findClear(s,this.s+160,w,T);_=this.findClear(s,this.s+Math.max(340,this.speed*.9),_.lateral,_.up),w=_.lateral,T=_.up}r=we((w-this.lateral)*.05,-1,1),l=we((T-this.up)*.055,-1,1),u=!1}this.boosting=u&&this.boostFuel>.02,this.boosting&&(this.boostFuel=we(this.boostFuel-e*.34,0,1));const f=this.boosting?Um:Nd;if(this.speed=bn(this.speed,f*this.throttle,this.boosting?1.6:1.1,e),this.latVel=bn(this.latVel,r*92,7.5,e),this.upVel=bn(this.upVel,l*74,7,e),this.s+=this.speed*e,this.lateral+=this.latVel*e,this.up+=this.upVel*e,s){const m=s.collide(this.s,this.lateral,this.up,this.radius);if(m.hit){const p=26*e*60,y=we(m.lateral,this.lateral-p,this.lateral+p),M=we(m.up,this.up-p,this.up+p);y!==this.lateral&&(this.latVel=Math.min(0,this.latVel*Math.sign(y-this.lateral))*0),M!==this.up&&(this.upVel=0),this.lateral=y,this.up=M,this.hullHitTimer<=0&&(this.hullHitTimer=.35,this.shield=we(this.shield-.018,0,1),this.hitFlash=.6)}}else this.lateral=we(this.lateral,-Ba+this.radius,Ba-this.radius);const h=-this.radius*.9;this.up>h&&(this.up=h,this.upVel>0&&(this.upVel=0)),Jn(this.s,this.lateral,this.up,this.position);const d=we(this.latVel/92,-1,1),g=we(this.upVel/74,-1,1);this.rollInput=bn(this.rollInput,c,6,e),this.bank=bn(this.bank,-d*.78+this.rollInput*.95,6.5,e),this.pitchA=bn(this.pitchA,g*.2,6,e),this.yawA=bn(this.yawA,d*.11,6,e);const v=Math.sin(t*.63)*.018+Math.sin(t*1.31)*.009;Kc(this.s,Ks),Oo.set(this.pitchA,this.yawA,this.bank+v,"YXZ"),Mc.setFromEuler(Oo),this.quaternion.copy(Ks).multiply(Mc)}findClear(e,t,n,s){const a=this.radius*1.7;let o=e.collide(t,n,s,a);if(!o.hit)return this._clear.lateral=n,this._clear.up=s,this._clear;this._clear.lateral=o.lateral,this._clear.up=o.up;const r=this.pc(t),l=this.pf(t),c=this.ph(t),u=[0,0,26,-26,50,-50,0,34,-34,70,-70],f=[18,34,0,0,0,0,-16,24,24,10,10];for(let h=0;h<u.length;h++){const d=we(n+u[h],r-c+18,r+c-18),g=we(s+f[h],l+16,-12);if(o=e.collide(t,d,g,a),!o.hit)return this._clear.lateral=d,this._clear.up=g,this._clear}return this._clear.lateral=o.lateral,this._clear.up=o.up,this._clear}canFireLaser(){return this.laserCooldown<=0&&this.laserHeat<.98}didFireLaser(){this.laserCooldown=.11,this.laserHeat=we(this.laserHeat+.075,0,1)}takeDamage(e){this.shield=we(this.shield-e,0,1),this.hitFlash=Math.min(1,this.hitFlash+e*3)}getForward(e=new b){return e.set(0,0,-1).applyQuaternion(this.quaternion)}getUp(e=new b){return e.set(0,1,0).applyQuaternion(this.quaternion)}getRight(e=new b){return e.set(1,0,0).applyQuaternion(this.quaternion)}}function ol(){return{pos:new b,quat:new Ct,fov:55,roll:0}}const mh=new st,JS=new b(0,1,0),U0=new b,As=new b,Pp=new b,gh=new b;function vh(i,e,t,n=new b){As.copy(i).normalize();const s=Math.abs(As.dot(e));if(s<.82)return n.copy(e).normalize();const a=Math.min(1,(s-.82)/.16);return n.copy(e).lerp(t,a),n.lengthSq()<1e-6&&n.copy(t),n.normalize()}function fn(i,e,t,n){i.pos.copy(e);const s=n??JS;return As.copy(t).sub(e),As.lengthSq()<1e-8&&As.set(0,0,-1),As.normalize(),Math.abs(As.dot(s))>.995?(gh.set(1,0,0),Math.abs(As.x)>.9&&gh.set(0,1,0),Pp.crossVectors(As,gh).cross(As).normalize(),mh.lookAt(e,t,Pp)):mh.lookAt(e,t,s),i.quat.setFromRotationMatrix(mh),i}function is(i,e){return Math.sin(i*1.913+e*12.9898)*.5+Math.sin(i*3.771+e*78.233)*.29+Math.sin(i*7.331+e*43.114)*.14+Math.sin(i*13.17+e*3.717)*.07}class QS{constructor(){this.trauma=0,this.t=0}add(e){this.trauma=we(this.trauma+e,0,1)}update(e,t=1.35){this.t+=e,this.trauma=Math.max(0,this.trauma-e*t)}apply(e,t=0,n=1){const s=we(this.trauma+t,0,1);if(s<=5e-4)return;const a=s*s*n,o=this.t;U0.set(is(o*11,1),is(o*11,2),is(o*11,3)).multiplyScalar(a*1.35),e.pos.add(U0.applyQuaternion(e.quat));const r=new Qn(is(o*9.3,4)*a*.045,is(o*9.3,5)*a*.045,is(o*7.1,6)*a*.075,"XYZ");e.quat.multiply(new Ct().setFromEuler(r))}}class jS{constructor(e){this.camera=e,this.shots=[],this.shake=new QS,this.letterbox=0,this.fovKick=0,this.speedBlur=0,this.cur=-1,this.prev=-1,this.curStart=0,this.a=ol(),this.b=ol(),this.outState=ol(),this.started=new Set,this.fovSmooth=55,this.posSmooth=new b,this.quatSmooth=new Ct,this.inited=!1,this.manual=!1,this.explicit=!1,this.byName=new Map,this.playToken=0,this._shotTime=0,this.prevShotTime=0}setShots(e){this.shots=e.slice().sort((t,n)=>t.at-n.at),this.byName.clear(),this.shots.forEach((t,n)=>this.byName.set(t.name,n)),this.cur=-1,this.prev=-1,this.started.clear(),this.inited=!1}play(e,t,n){const s=this.byName.get(e);if(s===void 0){console.warn("[director] unknown shot",e);return}s!==this.cur&&(this.explicit=!0,this.prevShotTime=t-this.curStart,this.prev=this.cur,this.cur=s,this.curStart=t,this.started.delete(s),n!==void 0?this.blendOverride=n:this.blendOverride=void 0,this.playToken++)}get currentShotName(){return this.cur>=0?this.shots[this.cur].name:""}get shotTime(){return this._shotTime}activeShot(){return this.cur>=0?this.shots[this.cur]:null}indexAt(e){let t=-1;for(let n=0;n<this.shots.length&&this.shots[n].at<=e;n++)t=n;return t}durationOf(e){const t=this.shots[e+1];return t?t.at-this.shots[e].at:30}update(e,t,n){if(!this.shots.length||this.manual)return;if(!this.explicit){const f=this.indexAt(e);if(f<0)return;f!==this.cur&&(this.prev=this.cur,this.cur=f,this.curStart=this.shots[f].at)}if(this.cur<0)return;const s={time:e,dt:t,camera:this.camera,world:n},a=this.shots[this.cur];this.started.has(this.cur)||(this.started.add(this.cur),a.init?.(s));const o=e-this.curStart;this._shotTime=o;const r=a.duration??this.durationOf(this.cur);this.a.fov=a.fov??55,this.a.roll=0,a.update(o,we(o/r,0,1),s,this.a);let l=this.a;const c=this.blendOverride??a.blend??0;if(c>0&&o<c&&this.prev>=0){const f=this.shots[this.prev],h=this.prevShotTime+o,d=f.duration??this.durationOf(this.prev);this.b.fov=f.fov??55,this.b.roll=0,f.update(h,we(h/d,0,1),s,this.b);const g=Jc(we(o/c,0,1));this.b.pos.lerp(this.a.pos,g),this.b.quat.slerp(this.a.quat,g),this.b.fov=On(this.b.fov,this.a.fov,g),this.b.roll=On(this.b.roll,this.a.roll,g),l=this.b}const u=a.letterbox??0;this.letterbox=bn(this.letterbox,u,3.2,t),Math.abs(l.roll)>1e-5&&l.quat.multiply(ew.setFromAxisAngle(tw,l.roll)),this.shake.update(t),this.shake.apply(l,a.shake??0,1),this.inited||(this.posSmooth.copy(l.pos),this.quatSmooth.copy(l.quat),this.fovSmooth=l.fov,this.inited=!0),this.posSmooth.copy(l.pos),this.quatSmooth.copy(l.quat),this.fovSmooth=bn(this.fovSmooth,l.fov+this.fovKick,5.5,t),this.camera.position.copy(this.posSmooth),this.camera.quaternion.copy(this.quatSmooth),Math.abs(this.camera.fov-this.fovSmooth)>.002&&(this.camera.fov=this.fovSmooth,this.camera.updateProjectionMatrix()),this.outState=l}get state(){return this.outState}}const ew=new Ct,tw=new b(0,0,1),Rp=new b,xh=new b,_h=new b;function Sc(i,e,t={}){const n=new b,s=new b;let a=!1;const o=t.lag??5.5,r=t.lookAhead??60;return(l,c,u,f)=>{const h=i(u.world);if(!h)return;_h.copy(e).applyQuaternion(h.quaternion).add(h.position),xh.set(0,0,-r).applyQuaternion(h.quaternion).add(h.position);const d=u.world?.ship?.velocity;a?d&&(n.addScaledVector(d,u.dt),s.addScaledVector(d,u.dt)):(n.copy(_h),s.copy(xh),a=!0);const g=1-Math.exp(-o*u.dt);n.lerp(_h,g),s.lerp(xh,Math.min(1,g*1.6)),Rp.set(0,1,0).applyQuaternion(h.quaternion),fn(f,n,s,Rp)}}function nw(i,e,t=Jc,n=[0,1]){const s=ol(),a=ol();return(o,r,l,c)=>{s.fov=c.fov,a.fov=c.fov,i(o,r,l,s),e(o,r,l,a);const u=t(we(Dt(n[0],n[1],r),0,1));c.pos.lerpVectors(s.pos,a.pos,u),c.quat.copy(s.quat).slerp(a.quat,u),c.fov=On(s.fov,a.fov,u)}}function yh(i,e=1,t=0){const n=new Qn,s=new Ct;return(a,o,r,l)=>{i(a,o,r,l);const c=r.time*.55+t;n.set(is(c,1+t)*.0035*e,is(c,2+t)*.0045*e,is(c*.7,3+t)*.006*e,"XYZ"),l.quat.multiply(s.setFromEuler(n)),l.pos.addScaledVector(U0.set(is(c*.8,4+t),is(c*.8,5+t),0).applyQuaternion(l.quat),e*.35)}}const ht=new b,rt=new b,Et=new b,Pn=new b,Rn=new b,Ca=new b(0,0,1),li={s:0,lateral:0,up:0},Es=(i,e)=>e.set(0,1,0).applyQuaternion(i.ship.quaternion),wc=i=>i.shipObj,Tc=new b,zo=new b;function tg(i,e,t){if(i.ship.getForward(Tc),t.copy(i.ship.position).addScaledVector(Tc,e),i.focus&&i.focusDist<3e3){zo.copy(i.focus).sub(i.ship.position),zo.addScaledVector(Tc,-zo.dot(Tc));const n=e*.3;zo.lengthSq()>n*n&&zo.setLength(n),t.addScaledVector(zo,.8)}return t}function Ip(i,e){const t=new b,n=new b;let s=!1;const a=new b,o=new b;return(r,l,c,u)=>{const f=c.world;a.copy(i).applyQuaternion(f.ship.quaternion).add(f.ship.position),tg(f,420,o),s?(t.addScaledVector(f.ship.velocity,c.dt),n.addScaledVector(f.ship.velocity,c.dt)):(t.copy(a),n.copy(o),s=!0);const h=1-Math.exp(-e*c.dt);t.lerp(a,h),n.lerp(o,Math.min(1,h*1.3)),Es(f,Et),fn(u,t,n,Et)}}function iw(i){const e=[],t=a=>(e.push(a),a);t({name:"wide-station",at:0,duration:18,blend:0,fov:34,letterbox:1,update(a,o,r,l){const c=r.world;ns(c.ship.position,li),gn(li.s,Pn),Qs(li.s,Rn);const u=On(-3600,300,L0(we(a/10,0,1)));ht.copy(c.ship.position).addScaledVector(Pn,u).addScaledVector(Ca,116-a*5.6).addScaledVector(Rn,-26),fn(l,ht,rt.set(0,0,0),Rn)}}),t({name:"alongside",at:18,duration:9,blend:1.6,fov:46,letterbox:1,update:yh((a,o,r,l)=>{const c=r.world,u=-.5+a*.075;ht.set(Math.sin(u)*17,3.2+Math.sin(a*.4)*1.1,Math.cos(u)*17+2).applyQuaternion(c.ship.quaternion).add(c.ship.position),rt.set(0,.2,-2.2).applyQuaternion(c.ship.quaternion).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)},.7,3)}),t({name:"sfoil-detail",at:27,duration:7,blend:1.1,fov:33,letterbox:1,update:yh((a,o,r,l)=>{const c=r.world;ht.set(6.4-a*.16,1.5,5.6-a*.1).applyQuaternion(c.ship.quaternion).add(c.ship.position),rt.set(2.1,.35,2.3).applyQuaternion(c.ship.quaternion).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)},.9,11)}),t({name:"ties-approach",at:34,duration:8,blend:1.4,fov:50,letterbox:.35,update(a,o,r,l){const c=r.world;ht.set(6.5,2.6,19).applyQuaternion(c.ship.quaternion).add(c.ship.position),tg(c,900,rt),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"dogfight-chase",at:42,duration:8,blend:1.2,fov:48,shake:.07,letterbox:.2,update:Ip(new b(0,3,19),4.2)}),t({name:"dogfight-side",at:50,duration:5,blend:1,fov:54,shake:.06,letterbox:.2,update(a,o,r,l){const c=r.world;ht.set(30*Math.cos(a*.45+.4),6+Math.sin(a*.6)*3,-6+a*1.5).applyQuaternion(c.ship.quaternion).add(c.ship.position),rt.copy(c.ship.position),c.focus&&c.focusDist<2200&&rt.lerp(c.focus,.42),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"dogfight-chase2",at:55,duration:4,blend:.9,fov:52,shake:.09,letterbox:.2,update:Ip(new b(-3.5,-2,15),6)}),t({name:"dive",at:58,duration:9,blend:1.5,fov:64,letterbox:.55,update(a,o,r,l){const c=r.world;l.fov=On(58,76,Jc(we(a/8,0,1))),ht.set(2.5,10-a*.35,34+a*.9).applyQuaternion(c.ship.quaternion).add(c.ship.position),c.ship.getForward(rt),rt.multiplyScalar(900).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"surface-skim",at:67,duration:7,blend:1.4,fov:78,shake:.05,letterbox:.55,update:Sc(wc,new b(0,5,27),{lag:5.5,lookAhead:520})}),t({name:"trench-entry",at:74,duration:6,blend:1.2,fov:70,letterbox:.35,init(a){const o=a.world;Jn(o.ship.s+1500,Ba+260,210,Lp)},update:nw((a,o,r,l)=>{const c=r.world;rt.copy(c.ship.position),ns(c.ship.position,li),gn(li.s,Et),fn(l,Lp,rt,Et)},Sc(wc,new b(0,5.2,25),{lag:5,lookAhead:420}),Jc,[.35,.95])}),t({name:"trench-chase",at:80,duration:12,blend:1.1,fov:72,shake:.035,update(a,o,r,l){const c=r.world,u=c.ship.boosting?1:0;l.fov=70+u*7+we((c.ship.speed-380)/260,0,1)*5,n(a,o,r,l)}});const n=Sc(wc,new b(0,4.4,22.5),{lag:6.5,lookAhead:300});t({name:"trench-cockpit",at:92,duration:5,blend:.9,fov:82,shake:.05,update(a,o,r,l){const c=r.world,u=c.xwing?.cockpitEye??ht.set(0,1.55,-1.1);ht.copy(u).applyQuaternion(c.ship.quaternion).add(c.ship.position),c.ship.getForward(rt),rt.multiplyScalar(600).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"trench-low",at:97,duration:5,blend:.9,fov:84,shake:.06,update:Sc(wc,new b(.5,-2.8,14),{lag:8.5,lookAhead:260})});const s=(a,o,r,l)=>t({name:a,at:o,duration:3.2,blend:.85,fov:62,shake:.05,init(c){const u=c.world;Jn(u.ship.s+l,r*(Ba-9),-105*.36,Fp[a]??=new b)},update(c,u,f,h){const d=f.world,g=Fp[a]??ht;rt.copy(d.ship.position),ns(g,li),gn(li.s,Et),fn(h,g,rt,Et)}});return s("trench-side",102,1,620),s("trench-side2",106,-1,760),t({name:"targeting",at:110,duration:6,blend:1,fov:44,letterbox:.7,shake:.03,update:yh((a,o,r,l)=>{const c=r.world,u=On(-14,-10,L0(we(a/6,0,1)));ht.set(7.6,-1.1+Math.sin(a*.5)*.4,u).applyQuaternion(c.ship.quaternion).add(c.ship.position),rt.set(0,.4,-1.5).applyQuaternion(c.ship.quaternion).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)},.6,21)}),t({name:"targeting-port",at:116,duration:6,blend:1,fov:30,letterbox:.7,shake:.04,update(a,o,r,l){const c=r.world;ht.set(0,3,15).applyQuaternion(c.ship.quaternion).add(c.ship.position),za(rt),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"torpedo-launch",at:122,duration:2,blend:.7,fov:52,letterbox:.7,shake:.06,update(a,o,r,l){const c=r.world;ht.set(3,-3,-13).applyQuaternion(c.ship.quaternion).add(c.ship.position),rt.set(0,-.2,0).applyQuaternion(c.ship.quaternion).add(c.ship.position),Es(c,Et),fn(l,ht,rt,Et)}}),t({name:"torpedo-track",at:124,duration:5,blend:.8,fov:58,letterbox:.7,shake:.05,update(a,o,r,l){const c=r.world,u=c.torpedoes[0],f=u?.alive?u.pos:c.ship.position,h=u?.alive?u.vel:c.ship.velocity;Et.copy(h).normalize(),Et.lengthSq()<.1&&Et.set(0,0,-1),ht.copy(f).addScaledVector(Et,-34).add(rt.set(0,0,0)),ns(f,li),gn(li.s,rt),ht.addScaledVector(rt,9).addScaledVector(Ca,11),rt.copy(f).addScaledVector(Et,34),gn(li.s,Pn),Qs(li.s,Rn),fn(l,ht,rt,vh(Et,Pn,Rn,bh))}}),t({name:"port-entry",at:129,duration:2.2,blend:.55,fov:46,letterbox:.7,shake:.07,update(a,o,r,l){za(rt),gn(Ft,Pn),Qs(Ft,Rn),ht.copy(rt).addScaledVector(Pn,62-a*8).addScaledVector(Rn,-46+a*5).addScaledVector(Ca,22),fn(l,ht,rt,Rn)}}),t({name:"shaft",at:131,duration:1.7,blend:.35,fov:76,shake:.18,update(a,o,r,l){za(rt),gn(Ft,Pn),Qs(Ft,Rn),ht.copy(rt).addScaledVector(Pn,-(40+a*300)),Et.copy(rt).addScaledVector(Pn,-(40+a*300+260)),fn(l,ht,Et,Rn)}}),t({name:"core-hit",at:133,duration:2.4,blend:.4,fov:86,shake:.6,update(a,o,r,l){za(rt),gn(Ft,Pn),Qs(Ft,Rn),ht.copy(rt).addScaledVector(Pn,-(900+a*260)),Et.copy(rt).addScaledVector(Pn,-2600),fn(l,ht,Et,Rn),l.roll=a*.12}}),t({name:"escape-climb",at:136,duration:5,blend:.9,fov:66,shake:.05,letterbox:.4,update(a,o,r,l){const c=r.world;ns(c.ship.position,li),gn(li.s,Pn),c.ship.getForward(Rn),ht.copy(c.ship.position).addScaledVector(Pn,62+a*16).addScaledVector(Rn,-34).addScaledVector(Ca,24),rt.copy(c.ship.position).addScaledVector(Pn,-260-a*260),fn(l,ht,rt,vh(Et.copy(rt).sub(ht),Rn,Pn,bh))}}),t({name:"escape-wide",at:141,duration:7,blend:1.6,fov:48,letterbox:.4,update(a,o,r,l){const c=r.world;ns(c.ship.position,li),gn(li.s,Pn),c.ship.getForward(Rn),ht.copy(c.ship.position).addScaledVector(Pn,96+a*10).addScaledVector(Ca,21),rt.set(0,0,0),fn(l,ht,rt,vh(Et.copy(rt).sub(ht),Rn,Ca,bh))}}),t({name:"destruction-wide",at:148,duration:5,blend:1.2,fov:46,letterbox:.8,init(a){gn(Ft,Pn),Ec.copy(Pn).multiplyScalar(.8).addScaledVector(Ca,.4).add(ht.set(0,.3,0)).normalize(),Qs(Ft,Bo)},update(a,o,r,l){ht.copy(Ec).multiplyScalar(On(158e3,14e4,we(a/5,0,1))),fn(l,ht,rt.set(0,0,0),Bo)}}),t({name:"destruction-core",at:153,duration:3,blend:1.3,fov:40,letterbox:.8,shake:.1,update(a,o,r,l){ht.copy(Ec).multiplyScalar(On(104e3,122e3,we(a/3,0,1))),fn(l,ht,rt.set(0,0,0),Bo)}}),t({name:"destruction-primary",at:156,duration:5,blend:.9,fov:62,letterbox:.8,shake:.34,update(a,o,r,l){ht.copy(Ec).multiplyScalar(On(132e3,336e3,we(a/4.6,0,1))),fn(l,ht,rt.set(0,0,0),Bo),l.roll=Math.sin(a*.4)*.03}}),t({name:"shockwave",at:161,duration:6,blend:1.1,fov:76,letterbox:.8,shake:.4,init(a){gn(Ft,Pn),Dp.copy(Pn).multiplyScalar(.86).addScaledVector(Ca,.34).add(ht.set(0,.22,0)).normalize(),Qs(Ft,Bo)},update(a,o,r,l){ht.copy(Dp).multiplyScalar(372e3+a*7e3),fn(l,ht,rt.set(0,0,0),Bo),l.roll=Math.sin(a*.9)*.05*we(a/3,0,1)}}),t({name:"escape-final",at:167,duration:8,blend:.9,fov:54,letterbox:.9,update(a,o,r,l){const c=r.world;c.ship.getForward(Rn),Et.set(0,1,0).applyQuaternion(c.ship.quaternion);const u=.7+a*.06;ht.copy(c.ship.position).addScaledVector(Rn,86+a*4).addScaledVector(Et,15+Math.sin(a*.3)*3).add(rt.set(Math.cos(u),0,Math.sin(u)).multiplyScalar(34)),rt.copy(c.ship.position),fn(l,ht,rt,Et)}}),t({name:"outro-drift",at:175,duration:12,blend:2.4,fov:42,letterbox:1,update(a,o,r,l){const c=r.world;c.ship.getForward(Rn),Et.set(0,1,0).applyQuaternion(c.ship.quaternion),ht.copy(c.ship.position).addScaledVector(Rn,132+Math.min(a,9)*17).addScaledVector(Et,22+Math.min(a,9)*3),rt.copy(c.ship.position).addScaledVector(Rn,-220),fn(l,ht,rt,Et)}}),e}const Lp=new b,Bo=new b(0,1,0),bh=new b,Ec=new b,Dp=new b,Fp={},Ac=[{name:"approach",dur:18},{name:"squadron",dur:16},{name:"intercept",dur:24},{name:"dive",dur:16},{name:"entry",dur:7},{name:"trench",dur:999},{name:"targeting",dur:9},{name:"torpedo",dur:9},{name:"escape",dur:11},{name:"destruction",dur:22},{name:"outro",dur:10},{name:"end",dur:9999}],dt=new b,Pt=new b,Wt=new b,Mh=new Ct,Sh=new Ct,_n={s:0,lateral:0,up:0},ko=new Qn,Hi=new b,Zs=new b,Fn={point:new b,normal:new b,kind:""};function Gt(i,e,t){return Jn(i,e,t,new b)}class sw{constructor(e){this.phaseIndex=0,this.phaseTime=0,this.time=0,this.running=!1,this.radioQueue=[],this.radioIdx=0,this.tieWaves=0,this.trenchTIEsSpawned=!1,this.lastAutoFire=0,this.killCount=0,this.retireTimer=0,this.realKills=0,this.chaseWaves=0,this.lockTimer=0,this.torpFired=!1,this.destructionStarted=!1,this.surfaceExplodeTimer=0,this.hullDamageApplied=0,this.lastBeat=-1,this._lockBeeped=!1,this.cannonIdx=0,this.lastWingFire=0,this.wingFireIdx=0,this.enemyFireT=0,this._lastFlash=0,this._rt1=!1,this._rt2=!1,this._rt3=!1,this._rt4=!1,this.w=e,this.buildRadio()}get phase(){return Ac[this.phaseIndex].name}start(e){const t=this.w;t.interactive=e,t.cinematic=!e,t.ship.autopilot=!e,this.running=!0,this.time=0,this.phaseIndex=-1,t.hud.setTorpedoes(2),t.hud.setShield(1),t.hud.setVisible(!0),this.nextPhase(),Un.setDrone(.35)}nextPhase(){this.phaseIndex++,this.phaseTime=0;const e=this.phase;this.w.phase=e,this.onEnterPhase(e)}onEnterPhase(e){const t=this.w,n=t.director;switch(e){case"approach":{t.ship.setPath([Gt(-15500,5200,15e4),Gt(-14200,3600,12e4),Gt(-12900,2300,88e3),Gt(-11600,1400,62e3)],18,Hi.copy(gn(-13e3)).clone()),t.hud.setMode("cinematic"),t.hud.title("A LONG TIME AGO…","BATTLE OF YAVIN",4.6),n.play("wide-station",this.time,0);break}case"squadron":{t.ship.setPath([Gt(-11600,1400,62e3),Gt(-11e3,900,54e3),Gt(-10400,300,46e3),Gt(-9900,-120,4e4)],16,gn(-10500).clone()),t.xwing.sfoilTarget=1;for(const s of t.wingmen)s.craft.sfoilTarget=1;n.play("alongside",this.time,1.6),Un.beep(520,.12,.15);break}case"intercept":{t.ship.setPath([Gt(-9900,-120,4e4),Gt(-9750,620,38200),Gt(-9600,-480,36400),Gt(-9450,380,34700),Gt(-9300,-150,33200),Gt(-9150,120,32e3)],24,gn(-8500).clone()),this.spawnTIEWave(4,1050),t.hud.setMode("combat"),n.play("ties-approach",this.time,1.4),Un.setDrone(.6,62);break}case"dive":{t.ship.setPath([Gt(-9150,120,32e3),Gt(-8500,40,19e3),Gt(-7700,0,9e3),Gt(-7100,0,4e3),Gt(-6700,0,1700),Gt(-6400,0,900)],16,gn(-5e3).clone()),t.ties.breakOff(),n.play("dive",this.time,1.5);break}case"entry":{{const s=new b;t.ship.trenchEntryPoint(-2800,s),t.ship.setPath([Gt(-6400,0,900),Gt(-5600,0,470),Gt(-4700,0,180),Gt(-3900,0,10),Gt(-3300,0,-40),s],7,gn(-4200).clone())}n.play("trench-entry",this.time,1.2),t.hud.setLetterbox(0);break}case"trench":{t.ship.enterTrench(-2800),t.ship.autopilot=!t.interactive,t.hud.setMode("combat");for(const s of t.wingmen)s.inTrench=!0;n.play("trench-chase",this.time,1.1),Un.setDrone(.8,55);break}case"targeting":{t.hud.setMode("targeting"),this.lockTimer=0,n.play("targeting",this.time,1),Un.setDrone(.95,49);break}case"torpedo":{this.torpFired=!1,n.play("torpedo-launch",this.time,.7);break}case"escape":{const s=this.w.ship.s;t.ship.setPath([Gt(s,t.ship.lateral,t.ship.up),Gt(s+900,0,-20),Gt(s+1900,0,260),Gt(s+3200,0,2400),Gt(s+4800,0,14e3),Gt(s+6400,0,4e4),Gt(s+7800,0,9e4)],11,gn(s+3e3).clone()),t.hud.setMode("cinematic"),t.hud.setLock(0,!1),n.play("escape-climb",this.time,.9);break}case"destruction":{t.ship.mode="free",t.ship.autopilot=!0,t.ship.freeSpeed=17e3,gn(Ft+8e3,Hi),t.ship.freeDir.copy(Hi).normalize(),t.destruction.start(t.stationCenter,tt,7),this.destructionStarted=!0,t.destroyed=!0,n.play("destruction-wide",this.time,1.2),Un.rumble(9,1),Un.setDrone(.5,41);break}case"outro":{t.ship.freeSpeed=900,n.play("escape-final",this.time,2),t.hud.setMode("cinematic"),Un.setDrone(.42,73);break}case"end":{t.hud.title("THE DEATH STAR IS DESTROYED","RED FIVE, RETURNING",13),t.hud.radio("BASE","All wings, return to base. Great shot, Red Five.",6),t.hud.setLetterbox(1);break}}}update(e,t){if(!this.running)return;const n=this.w;this.time+=e,this.phaseTime+=e,n.seqTime=this.time,n.phaseTime=this.phaseTime;const s=this.phase;n.ship.update(e,this.time,n.input,s==="trench"?n.trench:null),n.shipObj.position.copy(n.ship.position),n.shipObj.quaternion.copy(n.ship.quaternion),n.xwing.throttle=we(.55+(n.ship.boosting?.45:.28),0,1),n.xwing.update(e,this.time,n.camera),this.updateWingmen(e),this.updateWeapons(e),this.updateTIEs(e),this.updateTurrets(e),this.updateEnemyFire(e),this.updateTorpedoes(e),this.updateHUD(e),this.updateRadio(),this.updatePhaseLogic(e),Un.setEngine(n.ship.mode==="trench"?.85:.6,n.ship.boosting?1:0)}updatePhaseLogic(e){const t=this.w,n=this.phase,s=Ac[this.phaseIndex];switch(n){case"intercept":{{const a=[3.2,6.6,10,13.4,16.8,20.2],o=[1,-1,0,1,-1,0];for(let r=0;r<a.length;r++)this.phaseTime>a[r]&&this.tieWaves<r+2&&this.spawnTIEWave(r%2===0?3:2,850+r%3*120,o[r]);this.phaseTime>7.4&&this.chaseWaves<1&&(this.chaseWaves=1,this.spawnTIEChase(2,340,-1)),this.phaseTime>14.6&&this.chaseWaves<2&&(this.chaseWaves=2,this.spawnTIEChase(2,300,1)),this.phaseTime>20&&this.chaseWaves<3&&(this.chaseWaves=3,this.spawnTIEChase(2,320,0))}this.phaseTime>7.5&&t.director.currentShotName==="ties-approach"&&t.director.play("dogfight-chase",this.time,1.2),this.phaseTime>15.5&&t.director.currentShotName==="dogfight-chase"&&t.director.play("dogfight-side",this.time,1),this.phaseTime>20&&t.director.currentShotName==="dogfight-side"&&t.director.play("dogfight-chase2",this.time,.9),this.phaseTime>=s.dur&&this.nextPhase();break}case"squadron":{this.phaseTime>8.4&&t.director.currentShotName==="alongside"&&t.director.play("sfoil-detail",this.time,1.1),this.phaseTime>=s.dur&&this.nextPhase();break}case"dive":{this.phaseTime>8.5&&t.director.currentShotName==="dive"&&t.director.play("surface-skim",this.time,1.4),this.phaseTime>=s.dur&&this.nextPhase();break}case"trench":{const a=we((t.ship.s+2800)/(Ft-5800+2800),0,1);if(t.trenchProgress=a,!this.trenchTIEsSpawned&&a>.3&&(this.trenchTIEsSpawned=!0,Jn(t.ship.s-1500,0,-48,dt),Qs(t.ship.s,Zs),t.ties.setBounds(null),t.ties.spawn(dt,Zs,3,{mode:"pursue",variant:"fighter",spread:1.8,speed:470}),t.hud.radio("BASE","Three marks at two-ten. Watch your back.")),t.cinematic){const o=[[.1,"trench-side"],[.17,"trench-chase"],[.34,"trench-cockpit"],[.43,"trench-chase"],[.56,"trench-low"],[.64,"trench-chase"],[.78,"trench-side2"],[.84,"trench-chase"]];for(const[r,l]of o)a>=r&&this.lastBeat<r&&(t.director.play(l,this.time,.85),this.lastBeat=r)}t.ship.s>=Ft-5800&&this.nextPhase();break}case"targeting":{t.ship.throttle=bn(t.ship.throttle,.86,1.4,e),this.lockTimer+=e;const a=we((this.lockTimer-1)/4.2,0,1);t.lockProgress=a,t.locked=a>=1,t.locked&&!this._lockBeeped&&(this._lockBeeped=!0,Un.beep(1400,.16,.3)),this.phaseTime>5.4&&t.director.currentShotName==="targeting"&&t.director.play("targeting-port",this.time,1),this.phaseTime>=s.dur&&this.nextPhase();break}case"torpedo":{!this.torpFired&&this.phaseTime>.8&&(this.fireTorpedoes(),this.torpFired=!0),this.phaseTime>1.5&&t.director.currentShotName==="torpedo-launch"&&t.director.play("torpedo-track",this.time,.8),this.phaseTime>4&&t.director.currentShotName==="torpedo-track"&&t.director.play("port-entry",this.time,.55),this.phaseTime>5.1&&t.director.currentShotName==="port-entry"&&t.director.play("shaft",this.time,.35),this.phaseTime>6.7&&t.director.currentShotName==="shaft"&&(t.director.play("core-hit",this.time,.4),za(dt),gn(Ft,Hi),dt.addScaledVector(Hi,-2400),t.fx.explosion(dt,320,{debris:40,light:!0,smoke:!0,shock:!0}),t.director.shake.add(.9),Un.explosion(2.2,1)),this.phaseTime>=s.dur&&this.nextPhase();break}case"escape":{this.phaseTime>4.5&&t.director.currentShotName==="escape-climb"&&t.director.play("escape-wide",this.time,1.6),this.phaseTime>=s.dur&&this.nextPhase();break}case"destruction":{const a=t.destruction.elapsed;a>4&&t.director.currentShotName==="destruction-wide"&&t.director.play("destruction-core",this.time,1.3),a>6.4&&t.director.currentShotName==="destruction-core"&&t.director.play("destruction-primary",this.time,.9),a>11&&t.director.currentShotName==="destruction-primary"&&t.director.play("shockwave",this.time,1.1),a>16.5&&t.director.currentShotName==="shockwave"&&t.director.play("escape-final",this.time,1.8),this.phaseTime>=s.dur&&this.nextPhase();break}case"outro":{this.phaseTime>7&&t.director.currentShotName==="escape-final"&&t.director.play("outro-drift",this.time,2.4),this.phaseTime>=s.dur&&this.nextPhase();break}default:this.phaseTime>=s.dur&&this.phaseIndex<Ac.length-1&&this.nextPhase()}}updateWingmen(e){const t=this.w;for(const n of t.wingmen){if(!n.alive)continue;if(n.dieAt>0&&this.time>=n.dieAt){this.killWingman(n);continue}const s=n.inTrench?dt.copy(n.offset).multiplyScalar(1).setZ(n.offset.z*2.2):dt.copy(n.offset);s.applyQuaternion(t.ship.quaternion).add(t.ship.position),n.wobble+=e,s.x+=Math.sin(n.wobble*.83+n.offset.x)*3.2,s.y+=Math.sin(n.wobble*1.17+n.offset.z)*2.4,n.seeded?n.pos.addScaledVector(t.ship.velocity,e):(n.pos.copy(s),n.quat.copy(t.ship.quaternion),n.seeded=!0),km(n.pos,s,3.4,e),n.inTrench&&(ns(n.pos,_n),_n.lateral=we(_n.lateral,-Ba+12,Ba-12),_n.up=we(_n.up,-93,-8),Jn(_n.s,_n.lateral,_n.up,n.pos)),n.quat.slerp(t.ship.quaternion,1-Math.exp(-4*e)),n.obj.position.copy(n.pos),n.obj.quaternion.copy(n.quat),n.craft.throttle=.8,n.craft.update(e,this.time,t.camera)}}killWingman(e){const t=this.w;e.alive=!1,e.obj.visible=!1,t.fx.explosion(e.pos,16,{debris:26,light:!0,smoke:!0}),Un.explosion(.9,.8),t.hud.radio("LUKE",`${e.name.toUpperCase()}, PULL UP!`),t.hud.flashDamage(.5),t.director.shake.add(.5)}updateWeapons(e){const t=this.w,n=this.phase,s=n==="intercept"||n==="trench"||n==="dive";let a=!1;if(t.interactive&&t.input.isDown("Space")&&(a=!0),(!t.interactive||t.ship.autopilot)&&s&&this.time-this.lastAutoFire>.16&&this.pickAutoTarget()&&(a=!0,this.lastAutoFire=this.time),a&&s&&t.ship.canFireLaser()){t.ship.didFireLaser();const o=this.cannonIdx%2;this.cannonIdx++;for(const r of o===0?[0,3]:[1,2]){t.xwing.getCannonTip(r,dt);const l=this.pickAutoTarget();l?Pt.copy(l).sub(dt).normalize():t.ship.getForward(Pt),t.fx.laser(dt,Pt,{color:R0,team:"rebel",speed:2400,length:22,radius:.36})}Un.laser(1,.35)}if(s&&this.time-this.lastWingFire>.42){this.lastWingFire=this.time;const o=t.wingmen.filter(r=>r.alive);if(o.length){const r=o[this.wingFireIdx++%o.length];let l=null,c=4200;for(const u of t.ties.ties){if(!u.alive)continue;const f=u.position.distanceTo(r.pos);f<c&&(c=f,l=u)}if(l)for(const u of[-1,1])dt.set(u*5.4,.4,-3.4).applyQuaternion(r.quat).add(r.pos),Pt.copy(l.position).sub(dt).normalize(),ko.set((Math.random()-.5)*.045,(Math.random()-.5)*.045,0,"XYZ"),Pt.applyQuaternion(Sh.setFromEuler(ko)),t.fx.laser(dt,Pt,{color:R0,team:"rebel",speed:2400,length:22,radius:.34})}}t.interactive&&t.input.wasPressed("KeyF")&&this.phase==="targeting"&&t.locked&&!this.torpFired&&(this.phaseTime=Ac[this.phaseIndex].dur)}pickAutoTarget(){const e=this.w;let t=null,n=-1;e.ship.getForward(Wt);for(const s of e.ties.ties){if(!s.alive)continue;dt.copy(s.position).sub(e.ship.position);const a=dt.length();if(a<40||a>4200)continue;dt.divideScalar(a);const o=dt.dot(Wt);if(o<.86)continue;const r=o-a/6e3;r>n&&(n=r,t=s.position)}return t}spawnTIEWave(e,t=2200,n=0){const s=this.w;s.ship.getForward(Zs),s.ship.getRight(Wt),s.ship.getUp(Pt),dt.copy(s.ship.position).addScaledVector(Zs,t).addScaledVector(Wt,n*110+40).addScaledVector(Pt,70-n*45),s.ties.setBounds(tt+900);const a=Zs.clone().negate();s.ties.spawn(dt,a,e-1,{mode:"attack",variant:"fighter",spread:2.4,speed:430}),this.tieWaves===0?s.ties.spawn(dt.clone().addScaledVector(Pt,190),a,1,{mode:"attack",variant:"interceptor",spread:1.2,speed:470}):this.tieWaves===2?s.ties.spawn(dt.clone().addScaledVector(Pt,190),a,1,{mode:"attack",variant:"advanced",spread:1,speed:450}):s.ties.spawn(dt.clone().addScaledVector(Pt,190),a,1,{mode:"attack",variant:"interceptor",spread:1.2,speed:470}),this.tieWaves++}spawnTIEChase(e,t,n){const s=this.w;s.ship.getForward(Zs),s.ship.getRight(Wt),s.ship.getUp(Pt),dt.copy(s.ship.position).addScaledVector(Zs,t).addScaledVector(Wt,n*90).addScaledVector(Pt,24),s.ties.spawn(dt,Zs.clone(),e,{mode:"evade",variant:"fighter",spread:1.5,speed:360})}retireFarTIEs(e){const t=this.w;for(const n of t.ties.ties){if(!n.alive)continue;const s=n.position.distanceTo(t.ship.position);(s>e||n.mode==="flee"&&s>e*.55)&&t.ties.kill(n,aw)}}updateTIEs(e){const t=this.w;this.retireTimer-=e,this.retireTimer<=0&&(this.retireTimer=.75,this.phase==="intercept"||this.phase==="dive"?this.retireFarTIEs(4200):this.phase!=="trench"&&this.retireFarTIEs(2600)),Wr.position.copy(t.ship.position),Wr.quaternion.copy(t.ship.quaternion),Wr.velocity.copy(t.ship.velocity),Wr.radius=8,t.ties.update(e,this.time,Wr,t.fx);let n=1/0,s=null;t.ship.getForward(Wt);for(const a of t.ties.ties){if(!a.alive)continue;dt.copy(a.position).sub(t.ship.position);const o=dt.length();if(o>3400)continue;const r=dt.dot(Wt)/Math.max(o,1),l=o*(r>0?1:2.2);l<n&&(n=l,s=a)}t.focus=s?s.position:null,t.focusDist=s?s.position.distanceTo(t.ship.position):1/0,this.realKills>this.killCount&&(this.killCount=this.realKills,Un.explosion(.7,.65),t.director.shake.add(.16))}updateEnemyFire(e){const t=this.w,n=this.phase;if(n!=="intercept"&&n!=="dive"&&n!=="trench"||(this.enemyFireT-=e,this.enemyFireT>0))return;this.enemyFireT=n==="trench"?.42:.2,t.ship.getForward(Zs);let s=0;for(const a of t.ties.ties){if(!a.alive||s>=2)continue;dt.copy(t.ship.position).sub(a.position);const o=dt.length();if(o<60||o>2600||(dt.divideScalar(o),Pt.set(0,0,-1).applyQuaternion(a.quaternion),dt.dot(Pt)<.55))continue;const r=.01+Math.random()*.028;ko.set((Math.random()-.5)*r*2,(Math.random()-.5)*r*2,0,"XYZ"),Wt.copy(dt).applyQuaternion(Sh.setFromEuler(ko)),Pt.copy(a.position).addScaledVector(Wt,5),t.fx.laser(Pt,Wt,{color:Zc,team:"imperial",speed:2100,length:26,radius:.42,muzzleFlash:!0}),s++}}updateTurrets(e){const t=this.w;if(this.phase!=="trench"&&this.phase!=="targeting"&&this.phase!=="entry")return;const n=t.trench.turrets;if(!n)return;const s=t.ship;let a=0;for(const o of n){if(!o.alive)continue;const r=o.s-s.s;if(r<-600||r>2600)continue;const l=we(Math.abs(r)/1400,0,1)*.55;dt.copy(s.position).addScaledVector(s.velocity,l),o.head.getWorldPosition(Pt),Wt.copy(dt).sub(Pt),o.head.parent?.getWorldQuaternion(Mh),Mh.invert(),Wt.applyQuaternion(Mh);const c=Math.atan2(-Wt.x,-Wt.z);o.head.rotation.y=bn(o.head.rotation.y,c,5,e);const u=Math.hypot(Wt.x,Wt.z),f=Math.atan2(Wt.y,u);o.barrels.rotation.x=bn(o.barrels.rotation.x,we(f,-.5,1.3),5,e),o.cooldown-=e,o.cooldown<=0&&r>120&&r<2200&&a<3&&(o.cooldown=1.1+Math.random()*1.5,a++,Wt.copy(dt).sub(o.muzzle).normalize(),Pt.copy(o.muzzle).addScaledVector(Wt,7),ko.set((Math.random()-.5)*.055,(Math.random()-.5)*.055,0,"XYZ"),Wt.applyQuaternion(Sh.setFromEuler(ko)),t.fx.laser(Pt,Wt,{color:Om,team:"turbo",speed:1900,length:42,radius:.85,muzzleFlash:!0}),r<900&&Un.laser(.55,.22))}}fireTorpedoes(){const e=this.w;za(Wt),gn(Ft,Hi);for(let t=0;t<2;t++){const n=e.torpedoes[t];e.xwing.getTorpedoTube(t,dt),e.ship.getForward(Pt);const s=[dt.clone(),dt.clone().addScaledVector(Pt,520),dt.clone().addScaledVector(Pt,1180).addScaledVector(Hi,-14),Wt.clone().addScaledVector(Hi,46).addScaledVector(Pt,300),Wt.clone().addScaledVector(Hi,14).addScaledVector(Pt,34+t*8),Wt.clone().addScaledVector(Hi,-70),Wt.clone().addScaledVector(Hi,-260)];for(let a=0;a<3;a++)s[a].addScaledVector(Pt.clone().cross(Hi).normalize(),(t===0?-1:1)*9);n.curve=new cf(s,!1,"catmullrom",.2),n.t=0,n.duration=3.7,n.delay=t*.22,n.alive=!0,n.entered=!1,n.visual.object.visible=!0,n.visual.setIntensity(1)}Un.torpedo(),e.hud.radio("LUKE","Torpedoes away!"),e.hud.setTorpedoes(0),e.director.shake.add(.2)}updateTorpedoes(e){const t=this.w;for(const n of t.torpedoes){if(!n.alive||!n.curve)continue;if(n.delay>0){n.delay-=e;continue}const s=dt.copy(n.pos);n.t=Math.min(n.t+e,n.duration);const a=n.t/n.duration;n.curve.getPointAt(we(a*a*.22+a*.78,0,1),n.pos),n.vel.copy(n.pos).sub(s).divideScalar(Math.max(e,1e-4)),n.visual.object.position.copy(n.pos),n.visual.update(e,this.time,t.camera,n.vel),n.entered||(ns(n.pos,_n),_n.up<-109&&Math.abs(_n.s-Ft)<260&&(n.entered=!0,t.fx.impact(n.pos,gn(Ft,Pt),bb,4),Un.beep(220,.3,.3))),a>=1&&(n.alive=!1,n.visual.object.visible=!1,n.visual.setIntensity(0))}}updateHUD(e){const t=this.w,n=t.hud;if(n.setSpeed(t.ship.speed,t.ship.boosting),n.setShield(t.ship.shield),n.setLasers(t.ship.canFireLaser(),t.ship.laserHeat),n.setProgress(we(this.time/215,0,1)),n.setPhase(this.phase.toUpperCase()),this.phase==="targeting"||this.phase==="torpedo"){n.setLock(t.lockProgress,t.locked),za(dt);const s=dt.distanceTo(t.ship.position);n.setRange(s),Pt.copy(dt).project(t.camera);const a=Pt.z<1&&Math.abs(Pt.x)<1.3&&Math.abs(Pt.y)<1.3,o=we(2400/Math.max(s,60),26,190);n.setTargetBox(Pt.x,Pt.y,o,a,t.locked)}else n.setRange(null),n.setTargetBox(0,0,0,!1,!1),n.setLock(0,!1);this.phase==="trench"||this.phase==="intercept"?(t.ship.getForward(dt),Pt.copy(t.ship.position).addScaledVector(dt,900).project(t.camera),n.setReticle(Pt.x,Pt.y,Pt.z<1)):n.setReticle(0,0,!1),t.ship.hitFlash>.5&&this._lastFlash<this.time-.3&&(this._lastFlash=this.time,n.flashDamage(t.ship.hitFlash)),n.setLetterbox(t.director.letterbox)}buildRadio(){this.radioQueue=[{t:2,who:"BASE",text:"All wings report in."},{t:5.4,who:"RED LEADER",text:"Red Leader standing by."},{t:7.6,who:"WEDGE",text:"Red Two standing by."},{t:9.6,who:"BIGGS",text:"Red Three standing by."},{t:12,who:"LUKE",text:"Red Five standing by."},{t:18.6,who:"RED LEADER",text:"Lock S-foils in attack position."},{t:25,who:"BASE",text:"We are in position. Stand by."},{t:34.6,who:"BIGGS",text:"Enemy fighters coming in — point three five!"},{t:40,who:"WEDGE",text:"They came from behind!"},{t:47,who:"RED LEADER",text:"Watch it — you have got one on your tail!"},{t:58.5,who:"RED LEADER",text:"This is it. Cut the chatter, Red Two."},{t:66,who:"LUKE",text:"Going in. Accelerating to attack speed."},{t:74,who:"BEN",text:"Use the Force, Luke."},{t:84,who:"BIGGS",text:"Hurry up, Luke — they are coming in much faster this time."},{t:96,who:"WEDGE",text:"I can hold them off. Go!"},{t:112,who:"BASE",text:"Heavy fire, zone five."},{t:128,who:"BIGGS",text:"You are all clear, kid. Now blow this thing and go home!"}]}updateRadio(){for(;this.radioIdx<this.radioQueue.length&&this.radioQueue[this.radioIdx].t<=this.time;){const e=this.radioQueue[this.radioIdx++];this.w.hud.radio(e.who,e.text)}this.phase==="targeting"&&this.phaseTime>1&&!this._rt1&&(this._rt1=!0,this.w.hud.radio("BEN","Let go, Luke.")),this.phase==="targeting"&&this.phaseTime>6.2&&!this._rt2&&(this._rt2=!0,this.w.hud.radio("LUKE","Lock on. Almost there…")),this.phase==="escape"&&this.phaseTime>2.6&&!this._rt3&&(this._rt3=!0,this.w.hud.radio("BASE","Great shot, kid — that was one in a million!")),this.phase==="destruction"&&this.phaseTime>8.5&&!this._rt4&&(this._rt4=!0,this.w.hud.title("","",.1))}makeHitTest(){const e=this.w;return(t,n,s)=>{if(s==="rebel"){const o=e.ties.hitTest(t,n);if(o)return e.ties.damage(o.tie,45)&&(e.ties.kill(o.tie,e.fx),this.realKills++),Fn.point.copy(o.point),Fn.normal.copy(o.normal),Fn.kind="ship",Fn}else{dt.copy(n).sub(t);const o=dt.length()||1;dt.divideScalar(o),Pt.copy(e.ship.position).sub(t);const r=we(Pt.dot(dt),0,o);if(Wt.copy(t).addScaledVector(dt,r),Wt.distanceTo(e.ship.position)<9)return e.ship.takeDamage(.09),e.director.shake.add(.32),Un.beep(180,.1,.25),Fn.point.copy(Wt),Fn.normal.copy(Wt).sub(e.ship.position).normalize(),Fn.kind="player",Fn}if(n.length()<tt+4){if(ns(n,_n),_n.s>ls&&_n.s<cs){const r=Kn(_n.s),l=Mi(_n.s),c=ts(_n.s),u=_n.lateral-r;return Math.abs(u)<l&&_n.up>c?null:Math.abs(u)<l?(Jn(_n.s,_n.lateral,c,Fn.point),gn(_n.s,Fn.normal),Fn.kind="floor",Fn):_n.up<0?(Fn.point.copy(n),Fn.normal.set(0,0,u>0?-1:1),Fn.kind="wall",Fn):null}if(_n.up<0)return Fn.point.copy(n),Fn.normal.copy(n).normalize(),Fn.kind="surface",Fn}return null}}get estimatedTotal(){return 215}}const aw={laser(){},explosion(){},debrisBurst(){},muzzleFlash(){},sparks(){}},Wr={position:new b,quaternion:new Ct,velocity:new b,radius:8},ow=()=>new Promise(i=>requestAnimationFrame(()=>i())),rw=document.getElementById("bootbar"),O0=document.getElementById("bootstatus"),Np=document.getElementById("boot"),Up=document.getElementById("btn-play"),Op=document.getElementById("btn-cine");async function Pa(i,e){rw.style.width=`${Math.round(i*100)}%`,O0.textContent=e,await ow()}const wh=new URLSearchParams(location.search);async function lw(i){const{createXWing:e,createDeathStar:t,createTrench:n,createTIESquadron:s}=i,a=document.getElementById("app"),o=new Tb(a),r=o.scene,l=o.camera,c=new Eb;await Pa(.05,"GENERATING STARFIELD…");const u=$b({seed:7});r.add(u.group),r.add(u.sun),r.add(u.sun.target),r.add(u.fill);const f=new e1(2241608,.18);r.add(f),u.sun.intensity=3.1,u.fill.intensity=.26,await Pa(.16,"BUILDING BATTLE STATION…");const h=t({seed:42});r.add(h.group);function d(Y,ee=.68,le=1){for(const Ce of Y){const Ue=Ce;Ue.isMeshStandardMaterial&&Ue.color&&(Ue.color.multiplyScalar(ee),Ue.roughness=Math.min(1,Ue.roughness*1.08+.04));const Ie=Ce.userData?.uniforms;Ie&&le!==1&&(Ie.uWindow&&(Ie.uWindow.value*=le),Ie.uEmisStr&&(Ie.uEmisStr.value*=le))}}d(h.materials,.86,.45),await Pa(.46,"CARVING THE TRENCH…");function g(Y){const ee=[-1250,-900,-560,-300,-140,-63,-62.5,-34,0,34,62.5,63,140,300,560,900,1250],le=ee.map(he=>Math.abs(he)<62.8?-105:0),Ce=150,Ue=ls-40,Ie=cs+40,$=new Float32Array((Ce+1)*ee.length*3),ie=new b,de=new b;let De=0;for(let he=0;he<=Ce;he++){const Ee=Ue+(Ie-Ue)*(he/Ce);for(let Be=0;Be<ee.length;Be++){Jn(Ee,ee[Be],0,ie).normalize(),j3(ie.x,ie.y,ie.z,de);const $e=de.length()+le[Be];$[De++]=ie.x*$e,$[De++]=ie.y*$e,$[De++]=ie.z*$e}}const Ae=ee.length,K=new b($[0],$[1],$[2]),ae=new b($[3],$[4],$[5]),D=new b($[Ae*3],$[Ae*3+1],$[Ae*3+2]),B=ae.clone().sub(K).cross(D.clone().sub(K)).dot(K)>0,Q=[];for(let he=0;he<Ce;he++)for(let Ee=0;Ee<Ae-1;Ee++){const Be=he*Ae+Ee,$e=Be+1,N=Be+Ae,ct=N+1;B?Q.push(Be,$e,N,$e,ct,N):Q.push(Be,N,$e,$e,N,ct)}const te=new Tt;te.setAttribute("position",new We($,3)),te.setIndex(Q),te.computeVertexNormals();const ve=$.length/3;te.setAttribute("aEmis",new We(new Float32Array(ve),1)),te.setAttribute("aMat",new We(new Float32Array(ve),1)),te.setAttribute("aRegion",new We(new Float32Array(ve),1)),te.setAttribute("uv",new We(new Float32Array(ve*2),2));const pe=new ft(te,Y);return pe.name="corridor-cap",pe.frustumCulled=!1,pe}const v=g(h.materials[0]);h.group.add(v);const m=n({seed:1977});d(m.materials,.92,.95),r.add(m.group),await Pa(.68,"ASSEMBLING RED FIVE…");const p=e({seed:5,detail:"hero",redFive:!0});r.add(p.group),await Pa(.78,"LAUNCHING SQUADRON…");const y=["Red Two","Red Three","Red Six"],M=[new b(-26,-2.5,22),new b(28,1.8,26),new b(-6,5.5,44)],x=[];for(let Y=0;Y<3;Y++){const ee=e({seed:11+Y*7,detail:"lod",redFive:!1,markingColor:[13647914,14186526,11811416][Y]});r.add(ee.group),ee.setSFoil(0),x.push({craft:ee,obj:ee.group,offset:M[Y],pos:new b,quat:new Ct,alive:!0,name:y[Y],dieAt:-1,inTrench:!1,wobble:Y*3.1})}await Pa(.86,"SPOOLING WEAPONS…");const w=new tS(r),T=DS(r),E=s(r,{seed:3,max:20}),_=[];for(let Y=0;Y<2;Y++){const ee=GS({scale:1});ee.object.visible=!1,r.add(ee.object),_.push({visual:ee,pos:new b,vel:new b,curve:null,t:0,duration:5,alive:!1,entered:!1,delay:0})}await Pa(.94,"CALIBRATING TARGETING COMPUTER…");const A=KS(document.getElementById("hud")),R=new ZS;R.profile={centre:Kn,floor:ts,halfWidth:Mi};const I=new jS(l),F={engine:o,scene:r,camera:l,input:c,ship:R,director:I,hud:A,fx:w,destruction:T,space:u,deathStar:h,trench:m,ties:E,xwing:p,wingmen:x,shipObj:p.group,portPos:za(new b),stationCenter:new b(0,0,0),torpedoes:_,focus:null,focusDist:1/0,phase:"title",phaseTime:0,seqTime:0,cinematic:!0,interactive:!1,trenchProgress:0,lockProgress:0,locked:!1,destroyed:!1};I.setShots(iw());const H=new sw(F);w.hitTest=H.makeHitTest(),x[1].dieAt=-1,await Pa(1,"READY");const X={s:0,lateral:0,up:0};let O=wh.has("stats");A.showStats(O),A.setVisible(!1);let V=!1,z=!1;function re(Y,ee){if(!V){const ie=ee*.02;l.position.set(Math.cos(ie)*21e4,62e3,Math.sin(ie)*21e4),l.lookAt(0,0,0),u.update(Y,ee,l),h.update(Y,ee,l),o.post.u.uSpeedBlur.value=0;return}H.update(Y,ee),F.phase==="trench"&&(F.trenchProgress>.34&&x[0].alive&&x[0].dieAt<0&&(x[0].dieAt=F.seqTime+.1),F.trenchProgress>.62&&x[2].alive&&x[2].dieAt<0&&(x[2].dieAt=F.seqTime+.1)),ns(l.position,X);const le=X.up;if(!F.destroyed||!T.stationHidden){h.update(Y,ee,l);const ie=le<26e3&&X.s>-9e3&&X.s<34e3;m.group.visible!==ie&&(m.group.visible=ie,v.visible=!ie),ie&&m.update(Y,ee,F.phase==="trench"||F.phase==="targeting"||F.phase==="torpedo"?R.s:X.s,l)}if(u.update(Y,ee,l),w.update(Y,ee,l),T.update(Y,ee,l),T.active){if(h.setDamage(T.hullDamage),m.setDamage(T.hullDamage),T.stationHidden&&!z){z=!0,h.setVisible(!1),m.group.visible=!1;for(const De of x)De.alive||(De.obj.visible=!1)}I.shake.add(T.shake*Y*2.2);const ie=T.elapsed,de=Dt(3,5.4,ie)*(1-Dt(11,21,ie));o.post.bloom.strength=On(.58+T.bloomBoost*.4,.3,de),o.post.u.uFlash.value=T.flash*.9,o.renderer.toneMappingExposure=On(.92,.28,Math.max(de,we(T.flash*1.1,0,1)))}else o.post.u.uFlash.value=bn(o.post.u.uFlash.value,R.hitFlash*.28,6,Y),o.post.bloom.strength=.58;I.update(F.seqTime,Y,F);const Ce=R.speed,Ue=F.phase,$=Ue==="trench"||Ue==="targeting"||Ue==="torpedo"?we((Ce-300)/420,0,1)*.62+(R.boosting?.3:0):Ue==="entry"||Ue==="dive"?.11:0;if(o.post.u.uSpeedBlur.value=bn(o.post.u.uSpeedBlur.value,we($,0,1.1),4,Y),o.post.u.uDesat.value=bn(o.post.u.uDesat.value,F.phase==="end"?.15:0,1,Y),A.update(Y,ee),O){const ie=o.renderer.info;A.setStats(o.fps,ie.render.calls,ie.render.triangles,Y*1e3)}c.endFrame()}o.onUpdate=re,o.start();function ue(Y){V||(V=!0,Un.init(),Un.resume(),Np.classList.add("gone"),setTimeout(()=>Np.style.display="none",950),A.setVisible(!0),H.start(Y))}Up.disabled=!1,Op.disabled=!1,Up.onclick=()=>ue(!0),Op.onclick=()=>ue(!1),addEventListener("keydown",Y=>{Y.code==="KeyP"&&(o.paused=!o.paused),Y.code==="KeyC"&&V&&(F.interactive=!F.interactive,F.cinematic=!F.interactive,R.autopilot=!F.interactive,A.radio("BASE",F.interactive?"Manual control.":"Autopilot engaged.")),Y.code==="F3"&&(O=!O,A.showStats(O)),Y.code==="Enter"&&!V&&ue(!0)}),window.__demo={ready:!0,engine:o,world:F,sequence:H,director:I,ship:R,hud:A,start:(Y=!1)=>ue(Y),async seek(Y,ee=1/30){V||ue(!1),o.paused=!0;let le=0;for(;H.time<Y&&le++<2e4;)o.renderer.info.reset(),re(ee,H.time);return o.post.update(ee,H.time),o.post.render(ee),H.time},render(){o.post.render(1/60)},inspect(Y,ee,le,Ce=0,Ue=0,Ie=0,$=45){I.manual=!0,l.position.set(Y,ee,le),l.lookAt(Ce,Ue,Ie),l.fov=$,l.updateProjectionMatrix(),h.update(1/60,H.time,l);const ie=ns(l.position,{s:0,lateral:0,up:0});return m.group.visible=ie.up<26e3&&ie.s>-9e3&&ie.s<34e3,m.group.visible&&m.update(1/60,H.time,ie.s,l),u.update(1/60,H.time,l),o.post.render(1/60),{calls:o.renderer.info.render.calls,tris:o.renderer.info.render.triangles}},inspectTrench(Y,ee,le,Ce=300,Ue=0,Ie=0,$=60){const ie=Jn(Y,ee,le,new b),de=Jn(Y+Ce,ee+Ue,le+Ie,new b);return window.__demo.inspect(ie.x,ie.y,ie.z,de.x,de.y,de.z,$)},inspectShip(Y=26,ee=.7,le=.25,Ce=40){const Ue=new b(Math.cos(le)*Math.sin(ee),Math.sin(le),Math.cos(le)*Math.cos(ee)).multiplyScalar(Y).applyQuaternion(R.quaternion).add(R.position);return window.__demo.inspect(Ue.x,Ue.y,Ue.z,R.position.x,R.position.y,R.position.z,Ce)},release(){I.manual=!1},resume(){o.paused=!1},state:()=>({t:H.time,phase:F.phase,shot:I.currentShotName,s:R.s,speed:R.speed,calls:o.renderer.info.render.calls,tris:o.renderer.info.render.triangles,fps:o.fps})},wh.has("auto")&&ue(wh.get("auto")==="play")}function cw(i){console.error(i),O0.textContent="ERROR: "+(i?.message??i),O0.style.color="#ff6a4a"}const ka=[[.6,.32],[.6,-.32],[-.6,.32],[-.6,-.32]],_l=[1,1,-1,-1],jc=[1,-1,1,-1],Qa=3.07;function An(i,e=0,t=0,n=0){let s=i.index?i.toNonIndexed():i;s!==i&&i.dispose();const a=s.attributes.position.count;s.attributes.normal||s.computeVertexNormals(),s.attributes.uv||s.setAttribute("uv",new We(new Float32Array(a*2),2));for(const c of Object.keys(s.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&s.deleteAttribute(c);const o=new Float32Array(a);o.fill(e);const r=new Float32Array(a);r.fill(t);const l=new Float32Array(a);return l.fill(n),s.setAttribute("aWing",new We(o,1)),s.setAttribute("aSlide",new We(r,1)),s.setAttribute("aEmis",new We(l,1)),s.morphAttributes={},s}function j(i,e=0,t=0,n=0,s=0,a=0,o=0,r=1,l=1,c=1){return(r!==1||l!==1||c!==1)&&i.scale(r,l,c),s&&i.rotateX(s),a&&i.rotateY(a),o&&i.rotateZ(o),(e||t||n)&&i.translate(e,t,n),i}function Ia(i){const e=i.filter(Boolean);if(!e.length)return new Tt;if(e.length===1)return e[0];const t=us(e,!1);if(!t)throw new Error("xwing: merge failed (attribute mismatch)");for(const n of e)n.dispose();return t}function jr(i){return(i.index?i.index.count:i.attributes.position.count)/3}(()=>{const i=[[0,1],[.3,.995],[.58,.965],[.8,.87],[.935,.66],[1,.36],[1,0],[.985,-.3],[.905,-.585],[.735,-.815],[.47,-.95],[.19,-.995]],e=[];for(const t of i)e.push(t);for(let t=i.length-1;t>=0;t--){const n=i[t];Math.abs(n[0])>1e-4&&e.push([-n[0],n[1]])}return e})();function uw(i){const e=Math.min(Math.max(i,0),1);return 1.4845*Math.sqrt(e)-.63*e-1.758*e*e+1.4215*e*e*e-.5075*e*e*e*e}function hw(i,e,t){const n=new Float32Array(4),s=new Float32Array(4);for(let a=0;a<4;a++)n[a]=ka[a][0],s[a]=ka[a][1];return{uWingAngle:{value:new Float32Array(4)},uWingExt:{value:new Float32Array(4)},uPivotX:{value:n},uPivotY:{value:s},uDomeSpin:{value:0},uDomeOrigin:{value:new b(0,.5,.95)},uTime:{value:0},uDamage:{value:0},uMarkCol:{value:e},uRedFive:{value:t?1:0},uSeed:{value:i%977}}}const fw=`
attribute float aWing;
attribute float aSlide;
attribute float aEmis;
uniform float uWingAngle[4];
uniform float uWingExt[4];
uniform float uPivotX[4];
uniform float uPivotY[4];
uniform float uDomeSpin;
uniform vec3 uDomeOrigin;
varying vec3 vObjPos;
varying vec3 vObjNrm;
varying float vEmisV;
varying float vWingV;
void xwSelect(float idx, out float ang, out float ext, out vec2 piv){
  ang = 0.0; ext = 0.0; piv = vec2(0.0);
  if(idx > 3.5){ ang = uWingAngle[3]; ext = uWingExt[3]; piv = vec2(uPivotX[3], uPivotY[3]); }
  else if(idx > 2.5){ ang = uWingAngle[2]; ext = uWingExt[2]; piv = vec2(uPivotX[2], uPivotY[2]); }
  else if(idx > 1.5){ ang = uWingAngle[1]; ext = uWingExt[1]; piv = vec2(uPivotX[1], uPivotY[1]); }
  else { ang = uWingAngle[0]; ext = uWingExt[0]; piv = vec2(uPivotX[0], uPivotY[0]); }
}
`,dw=`
#include <beginnormal_vertex>
vObjPos = position;
vObjNrm = objectNormal;
vEmisV = aEmis;
vWingV = aWing;
if(aWing > 4.5){
  float cs = cos(uDomeSpin), sn = sin(uDomeSpin);
  objectNormal.xz = vec2(cs*objectNormal.x + sn*objectNormal.z, -sn*objectNormal.x + cs*objectNormal.z);
} else if(aWing > 0.5){
  float _a, _e; vec2 _p;
  xwSelect(aWing, _a, _e, _p);
  float cs = cos(_a), sn = sin(_a);
  objectNormal.xy = vec2(cs*objectNormal.x - sn*objectNormal.y, sn*objectNormal.x + cs*objectNormal.y);
}
`,pw=`
#include <begin_vertex>
if(aWing > 4.5){
  vec2 dd = transformed.xz - uDomeOrigin.xz;
  float cs = cos(uDomeSpin), sn = sin(uDomeSpin);
  transformed.xz = uDomeOrigin.xz + vec2(cs*dd.x + sn*dd.y, -sn*dd.x + cs*dd.y);
} else if(aWing > 0.5){
  float _a, _e; vec2 _p;
  xwSelect(aWing, _a, _e, _p);
  transformed.x += aSlide * _e;
  vec2 d = transformed.xy - _p;
  float cs = cos(_a), sn = sin(_a);
  transformed.xy = _p + vec2(cs*d.x - sn*d.y, sn*d.x + cs*d.y);
}
`,mw=`
varying vec3 vObjPos;
varying vec3 vObjNrm;
varying float vEmisV;
varying float vWingV;
uniform float uTime, uDamage, uRedFive, uSeed;
uniform vec3 uMarkCol;
${Mn}
${zn}

// --- rectangular plate layout: returns (edge, plateId, plateTone) --------------
vec3 xwPlates(vec2 uv, float scale, float seed){
  vec2 p = uv * scale + seed;
  // stagger each row so plate seams never run the whole length of a panel
  p.x += 0.37 * floor(p.y) + 0.23 * hash12(vec2(floor(p.y), seed));
  vec2 id = floor(p);
  vec2 f = fract(p);
  float h = hash12(id + seed);
  // two levels of subdivision so plate sizes vary
  if(h > 0.42){
    vec2 q = p * (h > 0.78 ? vec2(3.0, 1.0) : vec2(2.0, 1.0));
    id = floor(q); f = fract(q); h = hash12(id*1.31 + 5.7);
    if(h > 0.45){
      q = q * (h > 0.80 ? vec2(1.0, 3.0) : vec2(1.0, 2.0));
      id = floor(q); f = fract(q); h = hash12(id*2.13 + 11.1);
    }
  }
  vec2 e = min(f, 1.0 - f);
  float d = min(e.x, e.y);
  float w = fwidth(d) * 0.8 + 0.0015;
  float line = 1.0 - smoothstep(0.004, 0.004 + w, d);
  return vec3(line, h, hash12(id * 3.77 + 1.3));
}

// triplanar plate field in OBJECT space so detail never swims
vec3 xwSurface(vec3 p, vec3 n, float scale, float seed){
  vec3 a = abs(normalize(n)); a = pow(a, vec3(4.0)); a /= (a.x + a.y + a.z + 1e-5);
  vec3 rx = xwPlates(p.zy, scale, seed + 0.0);
  vec3 ry = xwPlates(p.xz, scale, seed + 17.0);
  vec3 rz = xwPlates(p.xy, scale, seed + 31.0);
  return rx * a.x + ry * a.y + rz * a.z;
}

// rivet dots along the plate seams
float xwRivets(vec3 p, vec3 n, float scale){
  vec3 a = abs(normalize(n)); a = pow(a, vec3(4.0)); a /= (a.x + a.y + a.z + 1e-5);
  vec2 uv = p.zy * a.x + p.xz * a.y + p.xy * a.z;
  vec2 q = uv * scale * 6.5;
  vec2 c = fract(q) - 0.5;
  float d = length(c);
  vec2 id = floor(q);
  // rivets only sit near a plate seam, in rows
  float keep = step(0.62, hash12(id * 1.7));
  return keep * (1.0 - smoothstep(0.055, 0.115, d));
}

float xwRect(vec2 p, vec2 c, vec2 h, float soft){
  vec2 d = abs(p - c) - h;
  return 1.0 - smoothstep(-soft, soft, max(d.x, d.y));
}
`;function Th(i,e){const t={hull:{color:10133923,roughness:.62,metalness:.2,mark:1,plate:2.3,wear:1},metal:{color:8883602,roughness:.42,metalness:.72,mark:0,plate:4.2,wear:1.05},grille:{color:1645857,roughness:.84,metalness:.45,mark:0,plate:3.2,wear:.35}}[i],n=new Ml({color:new Ve(t.color),roughness:t.roughness,metalness:t.metalness,emissive:new Ve(0),emissiveIntensity:1,envMapIntensity:1.7});return n.userData.uniforms=e,n.onBeforeCompile=s=>{Object.assign(s.uniforms,e),s.uniforms.uMark={value:t.mark},s.uniforms.uPlateScale={value:t.plate},s.uniforms.uWear={value:t.wear},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
`+fw).replace("#include <beginnormal_vertex>",dw).replace("#include <begin_vertex>",pw),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
`+mw+`
uniform float uMark, uPlateScale, uWear;`).replace("#include <color_fragment>",`
        #include <color_fragment>
        {
          vec3 p = vObjPos;
          vec3 n = normalize(vObjNrm);
          float seed = uSeed;
          vec3 sf = xwSurface(p, n, uPlateScale, seed);
          float line = sf.x;
          float plateTone = sf.y;

          vec3 base = diffuseColor.rgb;
          // per-plate tonal drift + a soft large-scale mottle
          base *= 0.90 + 0.20 * plateTone + 0.10 * vnoise3(p * 0.9 + seed);
          // a coarser structural seam layer on top of the plate grid
          float big = xwSurface(p, n, uPlateScale * 0.34, seed + 61.0).x;
          // recessed seams
          base *= 1.0 - 0.58 * line - 0.22 * big;
          // rivets read as tiny bright/dark specks
          float riv = xwRivets(p, n, uPlateScale);
          base *= 1.0 - 0.26 * riv;

          // ---- edge wear: chamfers (non axis-aligned normals) polish to metal
          float axis = max(abs(n.x), max(abs(n.y), abs(n.z)));
          float edge = pow(1.0 - clamp(axis, 0.0, 1.0), 1.6) * 2.6;
          edge = clamp(edge, 0.0, 1.0) * uWear;
          edge *= 0.45 + 0.55 * vnoise3(p * 6.0 + 13.0);
          base = mix(base, vec3(0.52, 0.53, 0.55), edge * 0.55);

          // ---- grime: dirt caught in the seams and in concave corners
          float grime = fbm3(p * vec3(1.6, 4.0, 0.9) + 4.0, 5, 2.25, 0.55);
          base *= mix(1.0, 0.60 + 0.48 * grime, 0.66);
          base *= 1.0 - 0.42 * line * grime;
          // faint dust settling on upward faces (broad, never blotchy)
          base *= 1.0 - 0.09 * smoothstep(0.2, 1.0, n.y) * fbm3(p * 0.55 + 9.0, 3, 2.2, 0.5);

          // ---- engine soot: streaks trailing aft (+Z) from the nacelles
          float aft = smoothstep(0.6, 4.6, p.z);
          float streak = fbm3(vec3(p.x * 5.0, p.y * 5.0, p.z * 0.55) + 21.0, 4, 2.3, 0.55);
          float soot = aft * smoothstep(0.42, 0.86, streak);
          base *= 1.0 - 0.55 * soot;

          // ---- squadron markings (object space, so they never swim) --------
          if(uMark > 0.5){
            float m = 0.0;
            // nose chevrons: swept stripes over the forward upper decking
            float noseZ = smoothstep(-6.60, -6.35, p.z) * (1.0 - smoothstep(-4.75, -4.45, p.z));
            float chev = step(fract((p.z + 0.55 * abs(p.x)) * 0.92 + 0.30), 0.19);
            m = max(m, noseZ * chev * step(0.10, n.y));
            // chin flash under the chisel
            m = max(m, smoothstep(-6.5, -6.2, p.z) * (1.0 - smoothstep(-5.5, -5.2, p.z))
                       * step(n.y, -0.35) * step(fract(p.z * 1.6 + 0.2), 0.42));
            // wing bands — narrow, clean, outboard of the nacelle only
            if(vWingV > 0.5){
              float ax = abs(p.x);
              float b1 = xwRect(vec2(ax, 0.0), vec2(2.48, 0.0), vec2(0.165, 9.0), 0.012);
              float b2 = xwRect(vec2(ax, 0.0), vec2(4.46, 0.0), vec2(0.115, 9.0), 0.012);
              float band = max(b1, b2) * step(1.75, ax);
              float tip = xwRect(vec2(ax, 0.0), vec2(5.66, 0.0), vec2(0.13, 9.0), 0.012);
              m = max(m, (band + tip) * (1.0 - smoothstep(1.95, 2.20, abs(p.z - 3.05))));
            }
            // fuselage flank blocks + Red Five hash marks by the cockpit
            float side = step(0.55, abs(n.x));
            m = max(m, side * xwRect(p.zy, vec2(1.15, 0.10), vec2(0.62, 0.16), 0.03));
            if(uRedFive > 0.5){
              float rf = xwRect(p.zy, vec2(-0.55, 0.16), vec2(0.30, 0.115), 0.02);
              float bars = step(fract(p.z * 4.2), 0.55);
              m = max(m, side * rf * bars);
            }
            // engine collar band
            m = max(m, xwRect(vec2(p.z, 0.0), vec2(3.02, 0.0), vec2(0.085, 9.0), 0.012)
                       * step(0.5, vWingV) * step(abs(p.x), 1.45) * step(0.62, abs(p.x)));
            // worn edges on the paint: light fade + a little chipping, never blotches
            m *= 0.84 + 0.16 * vnoise3(p * 13.0 + 7.0);
            m *= 1.0 - 0.55 * smoothstep(0.62, 0.90, vnoise3(p * 34.0 + 3.0));
            m *= 1.0 - 0.65 * line;
            base = mix(base, uMarkCol * (0.75 + 0.35 * plateTone), clamp(m, 0.0, 1.0) * 0.92);
          }

          // ---- astromech blue/silver two-tone (object space, tight to the socket)
          {
            float rr = length(p.xz - vec2(0.0, 0.95));
            float r2 = step(0.49, p.y) * (1.0 - smoothstep(0.27, 0.31, rr));
            float ang = fract(atan(p.x, p.z - 0.95) * 0.9549 + 0.12);   // 6 sectors
            // a shoulder band plus every other sector, only on the lower dome
            float lowDome = 1.0 - smoothstep(0.70, 0.86, p.y);
            float sector = step(0.55, ang) * step(ang, 0.80);
            float band = smoothstep(0.55, 0.60, p.y) * (1.0 - smoothstep(0.64, 0.68, p.y));
            base = mix(base, vec3(0.08, 0.22, 0.48), r2 * clamp(band + sector * lowDome, 0.0, 1.0) * 0.92);
          }

          // ---- battle damage: scorching then glowing cracks
          if(uDamage > 0.001){
            float blot = fbm3(p * 1.15 + 31.0, 5, 2.2, 0.55);
            float burn = smoothstep(0.62 - uDamage * 0.34, 0.80 - uDamage * 0.20, blot) * uDamage;
            base = mix(base, vec3(0.045, 0.035, 0.030), clamp(burn * 1.25, 0.0, 0.95));
          }
          diffuseColor.rgb = base;
        }
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        {
          vec3 p = vObjPos; vec3 n = normalize(vObjNrm);
          float axis = max(abs(n.x), max(abs(n.y), abs(n.z)));
          float edge = clamp(pow(1.0 - clamp(axis,0.0,1.0), 1.6) * 2.6, 0.0, 1.0) * uWear;
          float rv = vnoise3(p * 2.2 + 3.0);
          float fine = vnoise3(p * 24.0);
          roughnessFactor = clamp(roughnessFactor * (0.80 + 0.42 * rv) + 0.09 * (fine - 0.5), 0.10, 1.0);
          roughnessFactor = mix(roughnessFactor, 0.22, edge * 0.7);
          float aft = smoothstep(0.6, 4.6, p.z);
          roughnessFactor = mix(roughnessFactor, 0.92, aft * 0.35);
        }
      `).replace("#include <metalnessmap_fragment>",`
        #include <metalnessmap_fragment>
        {
          vec3 p = vObjPos; vec3 n = normalize(vObjNrm);
          float axis = max(abs(n.x), max(abs(n.y), abs(n.z)));
          float edge = clamp(pow(1.0 - clamp(axis,0.0,1.0), 1.6) * 2.6, 0.0, 1.0) * uWear;
          metalnessFactor = clamp(metalnessFactor + edge * 0.30, 0.0, 0.92);
        }
      `).replace("#include <emissivemap_fragment>",`
        #include <emissivemap_fragment>
        {
          if(vEmisV > 0.001){
            vec3 c = vec3(1.0, 0.42, 0.14);
            if(vEmisV > 0.85)      c = vec3(0.55, 0.86, 1.25);   // R2 lens / nav strobe
            else if(vEmisV > 0.55) c = vec3(0.35, 1.00, 0.55);   // instrument green
            else if(vEmisV > 0.30) c = vec3(1.00, 0.18, 0.09);   // warning red
            float fl = 0.90 + 0.10 * sin(uTime * (5.0 + vEmisV * 22.0) + vObjPos.x * 9.0);
            totalEmissiveRadiance += c * vEmisV * fl * 3.2;
          }
          if(uDamage > 0.001){
            float cr = ridged3(vObjPos * 1.9 + vec3(0.0, 0.0, uTime * 0.08), 4, 2.3, 0.55);
            float hot = smoothstep(0.74 - uDamage * 0.26, 0.93, cr) * uDamage;
            float pulse = 0.7 + 0.3 * sin(uTime * 7.0 + vObjPos.z * 3.0);
            totalEmissiveRadiance += vec3(4.2, 0.95, 0.14) * hot * pulse * 1.8;
          }
        }
      `)},n.customProgramCacheKey=()=>"xwing-ship2-"+i,n}function gw(i){const e=new Yv({color:new Ve(1915448),metalness:0,roughness:.04,clearcoat:1,clearcoatRoughness:.015,ior:1.45,transparent:!0,opacity:.2,depthWrite:!1,side:cn,envMapIntensity:2.6,specularIntensity:1});return e.userData.uniforms=i,e.onBeforeCompile=t=>{Object.assign(t.uniforms,i),t.vertexShader=t.vertexShader.replace("#include <common>",`
        #include <common>
        varying vec3 vObjPos;
      `).replace("#include <begin_vertex>",`#include <begin_vertex>
 vObjPos = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`
        #include <common>
        varying vec3 vObjPos;
        uniform float uDamage;
        ${Mn}
        ${zn}
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        {
          // micro-scratches + a dusting of grime along the frame lines
          float sc = vnoise3(vObjPos * vec3(60.0, 8.0, 40.0));
          float dirt = smoothstep(0.55, 1.0, fbm3(vObjPos * 5.0, 3, 2.2, 0.55));
          roughnessFactor = clamp(roughnessFactor + sc * 0.05 + dirt * 0.13 + uDamage * 0.25, 0.02, 0.9);
        }
      `).replace("#include <opaque_fragment>",`
        // fresnel: nearly clear head-on so the tub reads, mirror-bright at grazing angles
        {
          float f = 1.0 - abs(dot(normalize(vViewPosition), normalize(vNormal)));
          diffuseColor.a = clamp(diffuseColor.a + pow(f, 2.6) * 0.62, 0.0, 0.88);
        }
        #include <opaque_fragment>
      `)},e.customProgramCacheKey=()=>"xwing-glass",e}function vw(i){return{uWingAngle:i.uWingAngle,uPivotX:i.uPivotX,uPivotY:i.uPivotY,uLen:{value:new Float32Array([1,1,1,1])},uRad:{value:new Float32Array([1,1,1,1])},uPow:{value:new Float32Array([1,1,1,1])},uTime:{value:0},uNear:{value:1}}}const ng=`
uniform float uWingAngle[4];
uniform float uPivotX[4];
uniform float uPivotY[4];
uniform float uLen[4];
uniform float uRad[4];
uniform float uPow[4];
void pSelect(float idx, out float ang, out vec2 piv, out float len, out float rad, out float pw){
  if(idx > 3.5){ ang=uWingAngle[3]; piv=vec2(uPivotX[3],uPivotY[3]); len=uLen[3]; rad=uRad[3]; pw=uPow[3]; }
  else if(idx > 2.5){ ang=uWingAngle[2]; piv=vec2(uPivotX[2],uPivotY[2]); len=uLen[2]; rad=uRad[2]; pw=uPow[2]; }
  else if(idx > 1.5){ ang=uWingAngle[1]; piv=vec2(uPivotX[1],uPivotY[1]); len=uLen[1]; rad=uRad[1]; pw=uPow[1]; }
  else { ang=uWingAngle[0]; piv=vec2(uPivotX[0],uPivotY[0]); len=uLen[0]; rad=uRad[0]; pw=uPow[0]; }
}
`;function xw(i){return new xt({uniforms:i,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,side:cn,toneMapped:!1,vertexShader:`
      attribute float aWing;
      attribute float aType;
      attribute float aAxial;
      attribute float aRad;
      attribute vec2 aCen;
      ${ng}
      varying vec3 vLoc;
      varying float vT, vR, vType, vPow, vIdx;
      void main(){
        float ang, len, rad, pw; vec2 piv;
        pSelect(aWing, ang, piv, len, rad, pw);
        vec3 p = position;
        vec2 d = (p.xy - aCen) * rad;
        vLoc = vec3(d, aAxial);
        p.xy = aCen + d;
        p.z += aAxial * (len - 1.0);
        vec2 q = p.xy - piv;
        float cs = cos(ang), sn = sin(ang);
        p.xy = piv + vec2(cs*q.x - sn*q.y, sn*q.x + cs*q.y);
        vT = aAxial; vR = aRad; vType = aType; vPow = pw; vIdx = aWing;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      varying vec3 vLoc;
      varying float vT, vR, vType, vPow, vIdx;
      ${Mn}
      ${zn}
      ${qi}
      void main(){
        float t = clamp(vT, 0.0, 1.0);
        float r = clamp(vR, 0.0, 1.0);
        float sd = vIdx * 7.31;
        // turbulence scrolling backwards down the plume
        vec3 np = vec3(vLoc.xy * 16.0, vLoc.z * 7.5 - uTime * 11.0 + sd);
        float n  = fbm3(np, 4, 2.35, 0.55);
        float rg = ridged3(np * vec3(1.7, 1.7, 0.9) + 17.0 + sd, 4, 2.25, 0.52);

        if(vType > 0.5){
          // --- heat-shimmer shell: near-transparent, warped, no colour of its own
          float shim = fbm3(vec3(vLoc.xy * 22.0, vLoc.z * 9.0 - uTime * 14.0 + sd), 3, 2.4, 0.5);
          float body = (1.0 - t) * (1.0 - t) * smoothstep(0.0, 0.18, t);
          float a = body * (0.18 + 0.95 * shim * shim) * (1.0 - r * 0.6) * 0.028 * vPow;
          vec3 c = mix(vec3(0.70, 0.52, 0.40), vec3(1.0, 0.68, 0.34), shim);
          gl_FragColor = vec4(c * a * 1.5, a);
          return;
        }

        // --- core plume
        float radial = exp(-r * r * 4.4);
        float taper = pow(1.0 - t, 1.9);
        float lick = 0.30 + 0.85 * n + 0.85 * rg * smoothstep(0.10, 0.85, t);
        float a = radial * taper * lick * 0.46;
        a *= smoothstep(0.0, 0.13, t);                  // ease out of the bell lip
        a = clamp(a, 0.0, 1.2);

        float heat = clamp(radial * 1.5 * (1.0 - t * 0.70) * (0.45 + 0.80 * n), 0.0, 1.0);
        vec3 col = plasmaRamp(heat,
                     vec3(0.78, 0.93, 1.45),            // white-blue core
                     vec3(1.00, 0.58, 0.20),            // orange mantle
                     vec3(1.00, 0.24, 0.04));           // red fringe
        col = mix(col, vec3(1.35, 1.45, 1.60), smoothstep(0.72, 1.0, heat));
        float hdr = (1.5 + 4.2 * vPow);
        gl_FragColor = vec4(col * a * hdr, a);
      }
    `})}function _w(i){return new xt({uniforms:i,transparent:!0,depthWrite:!1,depthTest:!0,blending:Jt,toneMapped:!1,vertexShader:`
      attribute float aWing;
      attribute float aSize;
      attribute vec2 aCorner;
      ${ng}
      varying vec2 vC;
      varying float vPow, vIdx;
      void main(){
        float ang, len, rad, pw; vec2 piv;
        pSelect(aWing, ang, piv, len, rad, pw);
        vec3 p = position;
        vec2 q = p.xy - piv;
        float cs = cos(ang), sn = sin(ang);
        p.xy = piv + vec2(cs*q.x - sn*q.y, sn*q.x + cs*q.y);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        mv.xy += aCorner * aSize * (0.55 + 0.55 * pw);
        vC = aCorner; vPow = pw; vIdx = aWing;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime, uNear;
      varying vec2 vC;
      varying float vPow, vIdx;
      void main(){
        float d = length(vC);
        if(d > 1.0) discard;
        float core = pow(1.0 - d, 2.6);
        float halo = pow(1.0 - d, 0.9) * 0.30;
        float fl = 0.90 + 0.10 * sin(uTime * 41.0 + vIdx * 2.1) + 0.06 * sin(uTime * 13.7 + vIdx);
        float a = (core + halo) * fl;
        vec3 c = mix(vec3(1.00, 0.42, 0.12), vec3(0.85, 0.94, 1.30), core);
        gl_FragColor = vec4(c * a * (1.1 + 4.4 * vPow), a);
      }
    `})}function yw(i,e,t,n,s,a,o,r,l,c){i.pos.push(e,t,n),i.wing.push(s),i.type.push(a),i.axial.push(o),i.rad.push(r),i.cen.push(l,c)}function Za(i,e,t,n,s,a,o,r,l,c,u=1){const f=h=>{const d=1+.55*Math.sin(Math.PI*Math.min(h*2.4,1))*(1-h);return(o+(r-o)*Math.pow(h,.72))*d};for(let h=0;h<c;h++){const d=h/c,g=(h+1)/c,v=f(d),m=f(g);for(let p=0;p<l;p++){const y=p/l*Math.PI*2,M=(p+1)/l*Math.PI*2,x=(T,E,_,A)=>yw(i,n+Math.cos(T)*E,s+Math.sin(T)*E,a+_,e,t,_,A,n,s),w=u;x(y,v,d,w),x(M,v,d,w),x(M,m,g,w),x(y,v,d,w),x(M,m,g,w),x(y,m,g,w)}}}function bw(i,e=!0){const t={pos:[],wing:[],type:[],axial:[],rad:[],cen:[]};for(const s of i){if(!e){Za(t,s.wing,0,s.x,s.y,s.z,s.r*.42,s.r*.07,8,8,.34),Za(t,s.wing,0,s.x,s.y,s.z,s.r*.94,s.r*.2,10,8,.92);continue}Za(t,s.wing,0,s.x,s.y,s.z,s.r*.2,s.r*.03,12,20,.16),Za(t,s.wing,0,s.x,s.y,s.z,s.r*.44,s.r*.07,14,20,.4),Za(t,s.wing,0,s.x,s.y,s.z,s.r*.7,s.r*.12,18,20,.66),Za(t,s.wing,0,s.x,s.y,s.z,s.r*.96,s.r*.22,20,20,.94),Za(t,s.wing,1,s.x,s.y,s.z-.02,s.r*1.45,s.r*.5,14,10,.85)}const n=new Tt;return n.setAttribute("position",new gt(t.pos,3)),n.setAttribute("aWing",new gt(t.wing,1)),n.setAttribute("aType",new gt(t.type,1)),n.setAttribute("aAxial",new gt(t.axial,1)),n.setAttribute("aRad",new gt(t.rad,1)),n.setAttribute("aCen",new gt(t.cen,2)),n.boundingSphere=new mi(new b(0,0,4),16),n}function Mw(i){const e=[],t=[],n=[],s=[];for(const o of i){const r=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]];for(const l of r)e.push(o.x,o.y,o.z-.03),t.push(o.wing),n.push(o.r*2),s.push(l[0],l[1])}const a=new Tt;return a.setAttribute("position",new gt(e,3)),a.setAttribute("aWing",new gt(t,1)),a.setAttribute("aSize",new gt(n,1)),a.setAttribute("aCorner",new gt(s,2)),a.boundingSphere=new mi(new b(0,0,4),12),a}let ds=!1;const js=(i,e,t)=>new zs(i,e,t);function Fe(i,e,t,n=.035){if(ds)return new zs(i,e,t);const s=Math.max(.004,Math.min(n,i*.32,e*.32,t*.32)),a=new iu,o=i/2-s,r=e/2-s;a.moveTo(-o,-e/2),a.lineTo(o,-e/2),a.lineTo(i/2,-r),a.lineTo(i/2,r),a.lineTo(o,e/2),a.lineTo(-o,e/2),a.lineTo(-i/2,r),a.lineTo(-i/2,-r),a.closePath();const l=new rs(a,{depth:t-2*s,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:1,steps:1});return l.translate(0,0,-(t-2*s)/2),l}function Nt(i,e,t,n=14,s=!1){const a=new wi(e,i,t,ds?Math.min(n,6):n,1,s);return a.rotateX(Math.PI/2),a}function yl(i,e,t,n=12,s=!1){const a=new wi(e,i,t,ds?Math.min(n,6):n,1,s);return a.rotateZ(-Math.PI/2),a}const sa=(i,e=12,t=8)=>new ps(i,ds?Math.min(e,7):e,ds?Math.min(t,5):t),Sw=[[0,1,0],[.145,.999,0],[.3,.992,1],[.44,.978,1],[.56,.955,1],[.79,.868,1],[.93,.665,1],[1,.375,1],[1,.01,0],[.988,-.3,1],[.902,-.585,1],[.735,-.808,1],[.47,-.942,1],[.185,-.996,0]],ww=[[0,.98,0],[.2,.978,0],[.4,.972,1],[.58,.958,1],[.76,.905,1],[.94,.77,1],[1,.53,1],[1,.18,1],[.975,-.115,1],[.87,-.335,1],[.7,-.47,0],[.48,-.552,0],[.26,-.592,1],[.09,-.602,0]];function ig(i){const e=i.map(t=>[t[0],t[1],t[2]]);for(let t=i.length-1;t>=1;t--)e.push([-i[t][0],i[t][1],i[t][2]]);return e}const Os=ig(Sw),sg=ig(ww),Tw=Os.map(i=>i[2]>.5);function bf(i,e,t,n){const s=i.length,a=i[0].pts.length,o=[];for(let p=0;p<a;p++)o.push(p),e[p]&&o.push(p);const r=o.length,l=new Float32Array(s*r*3),c=new Float32Array(s*r*2);for(let p=0;p<s;p++)for(let y=0;y<r;y++){const M=i[p].pts[o[y]],x=p*r+y;l[x*3]=M.x,l[x*3+1]=M.y,l[x*3+2]=i[p].z,c[x*2]=y/r,c[x*2+1]=p/(s-1)}const u=[];for(let p=0;p<s-1;p++)for(let y=0;y<r;y++){const M=(y+1)%r,x=p*r+y,w=p*r+M,T=(p+1)*r+y,E=(p+1)*r+M;u.push(x,E,w,x,T,E)}const f=(p,y,M)=>{let x=0,w=0;for(let E=0;E<r;E++)x+=l[(p*r+E)*3],w+=l[(p*r+E)*3+1];x/=r,w/=r,h.push(x,w,i[p].z);const T=M;for(let E=0;E<r;E++){const _=(E+1)%r;y?u.push(T,p*r+_,p*r+E):u.push(T,p*r+E,p*r+_)}},h=[];let d=s*r;f(0,!1,d),d++,f(s-1,!0,d),d++;const g=new Float32Array(l.length+h.length);g.set(l),g.set(h,l.length);const v=new Float32Array(g.length/3*2);v.set(c);const m=new Tt;return m.setAttribute("position",new We(g,3)),m.setAttribute("uv",new We(v,2)),m.setIndex(u),m.computeVertexNormals(),m}const bi=[{z:-7.3,w:.175,h:.15,y:-.004,nose:1},{z:-7.14,w:.222,h:.188,y:-.009,nose:1},{z:-6.86,w:.278,h:.23,y:-.016,nose:1},{z:-6.42,w:.34,h:.274,y:-.026,nose:1},{z:-5.85,w:.402,h:.315,y:-.038,nose:1},{z:-5.2,w:.456,h:.35,y:-.048,nose:.95},{z:-4.45,w:.505,h:.381,y:-.057,nose:.82},{z:-3.7,w:.543,h:.403,y:-.062,nose:.63},{z:-2.95,w:.573,h:.418,y:-.06,nose:.44},{z:-2.25,w:.598,h:.43,y:-.052,nose:.27},{z:-1.6,w:.618,h:.445,y:-.042,nose:.12},{z:-1.05,w:.641,h:.469,y:-.03,nose:.04},{z:-.45,w:.66,h:.489,y:-.018,nose:0},{z:.15,w:.674,h:.505,y:-.008,nose:0},{z:.75,w:.684,h:.518,y:0,nose:0},{z:1.4,w:.691,h:.529,y:.004,nose:0},{z:2.05,w:.694,h:.538,y:.008,nose:0},{z:2.7,w:.692,h:.543,y:.01,nose:0},{z:3.35,w:.681,h:.542,y:.01,nose:0},{z:3.95,w:.66,h:.531,y:.008,nose:0},{z:4.5,w:.628,h:.508,y:.004,nose:0},{z:4.9,w:.59,h:.478,y:0,nose:0},{z:5.08,w:.545,h:.44,y:0,nose:0}];function vn(i){if(i<=bi[0].z)return bi[0];if(i>=bi[bi.length-1].z)return bi[bi.length-1];for(let e=0;e<bi.length-1;e++){const t=bi[e],n=bi[e+1];if(i>=t.z&&i<=n.z){const s=(i-t.z)/(n.z-t.z),a=s*s*(3-2*s);return{z:i,w:t.w+(n.w-t.w)*a,h:t.h+(n.h-t.h)*a,y:t.y+(n.y-t.y)*a,nose:t.nose+(n.nose-t.nose)*a}}}return bi[bi.length-1]}function jo(i,e){const t=vn(i),n=Os.length,s=f=>{const h=Os[(f+n)%n],d=sg[(f+n)%n];return[(h[0]+(d[0]-h[0])*t.nose)*t.w,(h[1]+(d[1]-h[1])*t.nose)*t.h+t.y]},a=s(e),o=s(e-1),r=s(e+1),l=r[0]-o[0],c=r[1]-o[1],u=Math.hypot(l,c)||1;return{x:a[0],y:a[1],nx:c/u,ny:-l/u}}const Mf=-1.98,Sf=.28,el=.055;function Ew(i){const e=(i-Mf)/.36,t=(Sf-i)/.3;return Math.max(0,Math.min(1,Math.min(e,t)))}const Aw=Os.map(()=>!1);function Cw(){const i=[];for(let n=0;n<bi.length;n++)(!ds||n%2===0||n===bi.length-1)&&i.push(bi[n].z);for(let n=Mf-.12;n<=Sf+.16;n+=ds?.5:.14)i.push(n);i.sort((n,s)=>n-s);const t=i.filter((n,s)=>s===0||n-i[s-1]>.001).map(n=>{const s=vn(n),a=[];for(let r=0;r<Os.length;r++){const l=Os[r],c=sg[r],u=l[0]+(c[0]-l[0])*s.nose,f=l[1]+(c[1]-l[1])*s.nose;a.push(new _e(u*s.w,f*s.h+s.y))}const o=Ew(n);if(o>0){const r=s.h+s.y;for(let l=0;l<a.length;l++){const c=a[l],u=Math.abs(c.x);if(c.y>r*.45&&u<s.w*.62){const f=1-Math.min(1,Math.max(0,(u-s.w*.4)/(s.w*.2))),h=el+(1-f)*.14;c.y=c.y+(h-c.y)*o*f}}}return{z:n,pts:a}});return bf(t,ds?Aw:Tw)}function Pw(i){const e=i.length,t=i[0].pts.length,n=new Float32Array(e*t*3),s=new Float32Array(e*t*2);for(let r=0;r<e;r++)for(let l=0;l<t;l++){const c=i[r].pts[l],u=r*t+l;n[u*3]=c.x,n[u*3+1]=c.y,n[u*3+2]=i[r].z,s[u*2]=l/(t-1),s[u*2+1]=r/(e-1)}const a=[];for(let r=0;r<e-1;r++)for(let l=0;l<t-1;l++){const c=r*t+l,u=r*t+l+1,f=(r+1)*t+l,h=(r+1)*t+l+1;a.push(c,u,h,c,h,f)}const o=new Tt;return o.setAttribute("position",new We(n,3)),o.setAttribute("uv",new We(s,2)),o.setIndex(a),o.computeVertexNormals(),o}function Eh(i,e,t){const n=i.length,s=new b(0,1,0),a=new b,o=new b,r=new b,l=[],c=[];for(let h=0;h<n;h++){const d=i[Math.max(0,h-1)],g=i[Math.min(n-1,h+1)];a.subVectors(g,d).normalize(),Math.abs(a.dot(s))>.97?o.set(1,0,0):o.copy(s),r.crossVectors(a,o).normalize(),o.crossVectors(r,a).normalize();const v=i[h];c.push([new b().copy(v).addScaledVector(r,-e/2).addScaledVector(o,-t/2),new b().copy(v).addScaledVector(r,e/2).addScaledVector(o,-t/2),new b().copy(v).addScaledVector(r,e/2).addScaledVector(o,t/2),new b().copy(v).addScaledVector(r,-e/2).addScaledVector(o,t/2)])}const u=(h,d,g,v)=>{l.push(h.x,h.y,h.z,d.x,d.y,d.z,g.x,g.y,g.z),l.push(h.x,h.y,h.z,g.x,g.y,g.z,v.x,v.y,v.z)};for(let h=0;h<n-1;h++){const d=c[h],g=c[h+1];for(let v=0;v<4;v++)u(d[v],d[(v+1)%4],g[(v+1)%4],g[v])}u(c[0][3],c[0][2],c[0][1],c[0][0]),u(c[n-1][0],c[n-1][1],c[n-1][2],c[n-1][3]);const f=new Tt;return f.setAttribute("position",new gt(l,3)),f.computeVertexNormals(),f}function Ah(i,e,t,n,s){const a=i.clone(),o=a.attributes.position.array,r=a.attributes.normal.array;for(let u=0;u<o.length;u+=3)o[u]*=e,o[u+1]*=t,r[u]*=e,r[u+1]*=t;if(e*t<0){const u=a.attributes.uv.array;for(let f=0;f<o.length;f+=9){for(let d=0;d<3;d++){let g=o[f+3+d];o[f+3+d]=o[f+6+d],o[f+6+d]=g,g=r[f+3+d],r[f+3+d]=r[f+6+d],r[f+6+d]=g}const h=f/3*2;for(let d=0;d<2;d++){const g=u[h+2+d];u[h+2+d]=u[h+4+d],u[h+4+d]=g}}}const l=a.attributes.aWing.array,c=a.attributes.aSlide.array;for(let u=0;u<l.length;u++)l[u]>.5&&(l[u]=n),c[u]=c[u]!==0?s:0;return a}function Rw(i,e,t){const n=(o,r=0)=>i.hull.push(An(o,0,0,r)),s=(o,r=0)=>i.metal.push(An(o,0,0,r)),a=(o,r=0)=>i.grille.push(An(o,0,0,r));if(n(j(Nt(.07,.112,.15,14),0,-.006,-7.33)),s(j(Nt(.03,.058,.09,10),0,-.006,-7.43)),a(j(Nt(.024,.024,.02,10),0,-.006,-7.49),.3),t)for(let o=0;o<4;o++){const r=o/4*Math.PI*2+.4;s(j(js(.016,.016,.2),Math.cos(r)*.078,-.006+Math.sin(r)*.068,-7.24))}if(t){for(let o=0;o<3;o++){const r=-6.98+o*.16,l=vn(r);a(j(js(l.w*1.55,.012,.03),0,l.y-.012,r)),a(j(js(.012,l.h*1.5,.03),0,l.y-.012,r))}for(let o=0;o<8;o++){const r=o/8*Math.PI,l=js(.11,.006,.006);l.rotateZ(r),s(j(l,0,-.012,-6.86))}}for(const o of[-1,1]){const r=vn(-5.35),l=sa(.105,t?14:8,t?10:6);l.scale(.85,.72,2.05),n(j(l,o*(r.w*.86),r.y+r.h*.1,-5.35));const c=sa(.052,10,7);c.scale(.5,.8,.8),a(j(c,o*(r.w*1.02),r.y+r.h*.1,-5.62),.95),n(j(sa(.055,10,7).scale(.9,.7,1.5),o*(r.w*.8),r.y-r.h*.42,-4.7))}if(t){for(let o=0;o<7;o++){const r=-6.55+o*.62,l=vn(r);n(j(Fe(l.w*.62,.03,.44,.012),0,l.y-l.h*.965,r))}s(j(Fe(.2,.1,.62,.028),0,vn(-4.2).y-vn(-4.2).h*.92,-4.2)),a(j(Nt(.055,.055,.05,12),0,vn(-4.45).y-vn(-4.45).h*.92-.035,-4.5),.35);for(let o=0;o<6;o++){const r=-5.95+o*.66,l=vn(r),c=l.w*(.52-o*.012);n(j(Fe(c,.026,.52,.012),0,l.y+l.h*.975,r))}s(j(Fe(.1,.075,.24,.02),0,vn(-2.55).y+vn(-2.55).h+.045,-2.55)),a(j(Nt(.032,.032,.03,10),0,vn(-2.7).y+vn(-2.7).h+.045,-2.7),.9);for(const o of[-1,1])for(let r=0;r<5;r++){const l=-4.9+r*.72,c=vn(l),u=o>0?7:Os.length-7,f=jo(l,u),h=Math.atan2(f.ny,f.nx)-Math.PI/2;a(j(Fe(.022,c.h*.28,.56,.006),f.x,f.y,l,0,0,h)),r%2===0&&s(j(Fe(.03,c.h*.15,.16,.008),f.x+f.nx*.012,f.y+f.ny*.012,l+.24,0,0,h))}}}const Iw=new b(0,.6,-.92);function Lw(){return[[-2.02,.135,.03],[-1.8,.225,.13],[-1.48,.3,.255],[-1.05,.345,.36],[-.55,.362,.415],[0,.36,.43],[.24,.33,.36],[.4,.28,.21]].map(([e,t,n])=>{const s=vn(e),a=s.y+s.h*.985,o=[new _e(-t,a),new _e(-t*.935,a+n*.56),new _e(-t*.5,a+n),new _e(t*.5,a+n),new _e(t*.935,a+n*.56),new _e(t,a)];return{z:e,pts:o}})}function Dw(i,e,t){const n=(l,c=0)=>i.hull.push(An(l,0,0,c)),s=(l,c=0)=>i.metal.push(An(l,0,0,c)),a=(l,c=0)=>i.grille.push(An(l,0,0,c)),o=Lw();for(let l=0;l<o.length-1;l++){const c=o[l],u=o[l+1],f=(c.z+u.z)/2,h=u.z-c.z,d=(c.pts[0].y+u.pts[0].y)/2;for(const g of[-1,1]){const v=(Math.abs(c.pts[5].x)+Math.abs(u.pts[5].x))*.5;n(j(Fe(.085,.04,h*1.02,.012),g*(v+.026),d+.008,f))}}if(n(j(Fe(.34,.045,.16,.014),0,o[0].pts[0].y+.01,o[0].z+.02)),n(j(Fe(.58,.045,.2,.014),0,o[o.length-1].pts[0].y+.01,o[o.length-1].z-.02)),t){a(j(Fe(.6,.012,2.05,.01),0,el+.03,-.8));for(const v of[-1,1]){const m=Fe(.014,.42,2.05,.006);m.rotateZ(v*.1),a(j(m,v*.298,.235,-.8))}a(j(Fe(.58,.4,.014,.008),0,.235,.245)),a(j(Fe(.58,.4,.014,.008),0,.235,-1.845));for(const v of[-1,1])s(j(Fe(.075,.155,1.42,.016),v*.245,.185,-.86)),a(j(Fe(.048,.048,1.2,.008),v*.208,.245,-.86),.66);a(j(js(.5,.014,1.55),0,el+.008,-.82),.1);for(let v=0;v<7;v++)a(j(js(.46,.01,.03),0,el+.018,-1.52+v*.22));const l=Fe(.44,.2,.055,.012);l.rotateX(-.42),s(j(l,0,.215,-1.52));const c=js(.36,.145,.01);c.rotateX(-.42),a(j(c,0,.222,-1.556),.72);const u=Fe(.5,.035,.16,.012);u.rotateX(-.3),n(j(u,0,.325,-1.6)),s(j(Fe(.075,.045,.22,.012),.09,.345,-1.4)),a(j(js(.055,.03,.012),.09,.345,-1.29),.75),s(j(Nt(.02,.02,.24,8),0,.155,-1.18)),s(j(yl(.017,.017,.2,8),0,.262,-1.09));for(const v of[-1,1])s(j(sa(.03,8,6),v*.1,.262,-1.09));s(j(Fe(.3,.045,.34,.014),0,.115,-.78));const f=Fe(.3,.42,.055,.016);f.rotateX(.16),s(j(f,0,.325,-.6)),s(j(Fe(.34,.075,.075,.016),0,.545,-.585));for(const v of[-1,1])s(j(Fe(.045,.3,.26,.012),v*.165,.245,-.74));s(j(Fe(.22,.3,.16,.05),0,.29,-.72)),s(j(Fe(.3,.1,.14,.04),0,.415,-.72));const h=sa(.098,12,9);h.scale(1,1.05,1.12),i.hull.push(An(j(h,0,.545,-.76),0,0,0));const d=sa(.094,12,9);d.scale(.99,.58,1.02),a(j(d,0,.528,-.815)),a(j(Fe(.075,.03,.07,.012),0,.47,-.845));const g=Fe(.155,.055,.03,.008);g.rotateX(-.22),a(j(g,0,.56,-.856));for(const v of[-1,1])a(j(Fe(.03,.075,.055,.01),v*.092,.545,-.78));s(j(Fe(.045,.02,.02,.005),.085,.505,-.83),.55);for(const v of[-1,1]){const m=Fe(.045,.3,.02,.005);m.rotateX(-.16),m.rotateZ(v*.28),a(j(m,v*.058,.315,-.64))}a(j(Fe(.1,.055,.045,.01),0,.215,-.66));for(const v of[-1,1])s(j(Fe(.055,.19,.075,.02),v*.145,.315,-.86));n(j(Fe(.4,.26,.055,.016),0,.28,-.4))}else a(j(js(.5,.02,1.6),0,el+.01,-.85)),a(j(Fe(.28,.42,.34,.05),0,.3,-.72));if(i.glass.push(An(Pw(o),0,0,0)),!t)return;const r=(l,c)=>o.map(u=>new b(u.pts[l].x,u.pts[l].y+c,u.z));for(const l of[0,1,2,3,4,5])s(Eh(r(l,.008),.03,.026));for(const l of[1,3,5,7]){const c=o[Math.min(l,o.length-1)];s(Eh(c.pts.map(u=>new b(u.x,u.y+.008,c.z)),.026,.024))}for(const l of[-1,1])s(Eh(o.map(c=>new b(c.pts[l>0?5:0].x*1.06,c.pts[0].y-.012,c.z)),.038,.03));s(j(Fe(.3,.075,.12,.02),0,vn(.44).y+vn(.44).h+.03,.46));for(const l of[-1,1])s(j(yl(.02,.02,.09,8),l*.155,vn(.46).y+vn(.46).h+.055,.46))}const z0=new b(0,0,.95);function Fw(i,e,t){const n=(f,h=0,d=0)=>i.metal.push(An(f,d,0,h)),s=(f,h=0,d=0)=>i.grille.push(An(f,d,0,h)),a=(f,h=0,d=0)=>i.hull.push(An(f,d,0,h)),o=z0.z,r=vn(o),l=r.y+r.h;z0.y=l,n(j(new wi(.335,.35,.05,t?24:12,1,!0),0,l-.018,o)),s(j(new wi(.31,.31,.34,t?20:10,1,!0),0,l-.19,o)),s(j(new wi(.31,.31,.012,t?20:10),0,l-.355,o));for(let f=0;f<6;f++){const h=f/6*Math.PI*2+.3;n(j(Fe(.055,.04,.055,.01),Math.cos(h)*.368,l-.008,o+Math.sin(h)*.368))}if(a(j(new wi(.288,.278,.13,t?24:10),0,l+.02,o)),t)for(let f=0;f<8;f++){const h=f/8*Math.PI*2+.2;s(j(Fe(.06,.08,.016,.004),Math.cos(h)*.286,l+.02,o+Math.sin(h)*.286))}const c=5,u=l+.085;if(a(j(new ps(.288,t?24:10,t?13:6,0,Math.PI*2,0,Math.PI*.5),0,u,o),0,c),n(j(new wi(.29,.288,.028,t?24:10),0,u-.012,o),0,c),s(j(j(sa(.068,12,9),0,0,0,0,0,0,1,1,.55),0,u+.145,o+.245),0,c),n(j(sa(.017,8,6),0,u+.145,o+.268),.95,c),n(j(Nt(.07,.076,.02,14),0,u+.145,o+.246),0,c),t){for(let f=0;f<6;f++){const h=f/6*Math.PI*2+.15,d=.3+f%2*.34,g=.29,v=Math.cos(h)*Math.cos(d)*g,m=Math.sin(h)*Math.cos(d)*g,p=Math.sin(d)*g,y=Fe(.085,.07,.012,.004);y.rotateX(d),y.rotateY(Math.PI/2-h),n(j(y,v,u+p,o+m),0,c)}for(const f of[-1,1])n(j(Nt(.014,.014,.085,8),f*.145,u+.225,o+.185),0,c);s(j(Fe(.11,.075,.012,.004),0,u+.115,o-.268),0,c)}}function Nw(i,e,t){const n=(l,c=0)=>i.hull.push(An(l,0,0,c)),s=(l,c=0)=>i.metal.push(An(l,0,0,c)),a=(l,c=0)=>i.grille.push(An(l,0,0,c));if(t)for(let l=0;l<5;l++){const c=1.1+l*.72,u=vn(c);n(j(Fe(u.w*(.6-l*.02),.032,.58,.014),0,u.y+u.h*.985,c))}for(const l of[1,-1]){const c=[];for(let u=0;u<=5;u++){const f=u/5,h=2.35+f*2.35,d=vn(h),g=l>0?d.y+d.h*.97:d.y-d.h*.97,v=(.1+.34*Math.sin(Math.PI*Math.min(1,f*1.25)))*l,m=.055*(1-f*.45),p=[new _e(-m,g),new _e(-m*.35,g+v),new _e(m*.35,g+v),new _e(m,g)];l<0&&p.reverse(),c.push({z:h,pts:p})}n(bf(c,[!0,!0,!0,!0]))}if(t)for(const l of[!1,!0]){const c=Os.length;for(let u=0;u<5;u++){const f=1.55+u*.72,h=jo(f,l?c-5:5),d=jo(f+.3,l?c-11:11),g=Math.atan2(h.ny,h.nx)-Math.PI/2,v=Math.atan2(d.ny,d.nx)-Math.PI/2;n(j(Fe(.13,.03,.58,.01),h.x,h.y,f,0,0,g)),s(j(Nt(.02,.02,.66,7),h.x+h.nx*.03,h.y+h.ny*.03,f,0,0,g)),a(j(Fe(.1,.016,.24,.006),d.x,d.y,f+.3,0,0,v)),u%2===0&&s(j(Fe(.055,.055,.055,.01),h.x+h.nx*.03,h.y+h.ny*.03,f+.3,0,0,g))}}for(const l of[-1,1])s(j(Fe(.2,.165,1.05,.03),l*.605,-.145,-2.45)),a(j(Fe(.135,.105,.34,.012),l*.605,-.145,-2.9)),a(j(Nt(.052,.058,.1,12),l*.605,-.145,-2.955),.15),s(j(Fe(.055,.05,.3,.012),l*.7,-.145,-2.3)),n(j(Fe(.235,.045,.1,.014),l*.605,-.055,-2.94)),n(j(Fe(.235,.045,.1,.014),l*.605,-.235,-2.94));if(!t)return;for(const l of[-1,1]){const c=vn(1.75);a(j(Fe(.3,.02,.85,.01),l*.28,c.y-c.h*.985,1.75)),n(j(Fe(.32,.014,.88,.01),l*.28,c.y-c.h*.995,1.75)),s(j(yl(.03,.03,.1,8),l*.42,c.y-c.h*.94,1.35))}const o=Os.length;if(t)for(const l of[!1,!0])for(let c=0;c<6;c++){const u=-5.1+c*1.32,f=l?o-6:6,h=l?o-9:9,d=jo(u,f),g=jo(u+.35,h),v=Math.atan2(d.ny,d.nx)-Math.PI/2,m=Math.atan2(g.ny,g.nx)-Math.PI/2;n(j(Fe(.03,.07,1.05,.01),d.x,d.y,u,0,0,v)),n(j(Fe(.026,.05,.82,.008),g.x,g.y,u+.35,0,0,m)),c%2===1&&s(j(Fe(.042,.095,.16,.01),d.x,d.y,u+.42,0,0,v))}const r=vn(-3.3);a(j(Fe(.24,.018,.62,.01),0,r.y-r.h*.985,-3.3)),n(j(Fe(.26,.012,.65,.01),0,r.y-r.h*.995,-3.3))}function Uw(i,e,t){const n=(l,c=0)=>i.hull.push(An(l,0,0,c)),s=(l,c=0)=>i.metal.push(An(l,0,0,c)),a=(l,c=0)=>i.grille.push(An(l,0,0,c));let o=0;const r=t?112:16;for(let l=0;l<r;l++){const c=e.range(-6.4,4.7);if(c>Mf-.25&&c<Sf+.6&&e.bool(.8))continue;const u=Os.length,f=e.next();let h;f<.5?h=e.int(5,9):f<.76?h=e.int(10,13):h=e.int(1,4),e.bool()&&(h=(u-h)%u);const d=jo(c,h),g=d.x,v=d.y,m=0,p=0,y=Math.atan2(d.ny,d.nx)-Math.PI/2,M=e.next(),x=e.range(.65,1.4);if(M<.24){const w=Fe(e.range(.06,.18)*x,e.range(.02,.06)*x,e.range(.1,.34)*x,.008);n(j(w,g,v,c,m,p,y))}else if(M<.42){const w=Fe(e.range(.05,.12)*x,e.range(.03,.09)*x,e.range(.05,.14)*x,.01);s(j(w,g,v,c,m,p,y))}else if(M<.56){const w=e.range(.09,.2)*x,T=e.range(.1,.24)*x;a(j(Fe(w,.014,T,.005),g,v,c,m,p,y));const E=e.int(3,5);for(let _=0;_<E;_++)s(j(Fe(w*.86,.022,T/E*.42,.004),g+d.nx*.008,v+d.ny*.008,c+(_/E-.45)*T,m,p,y));o+=E}else if(M<.7){const w=e.range(.3,.95),T=e.range(.015,.032);s(j(Nt(T,T,w,7),g,v,c,m,p,y));for(let E=0;E<3;E++)s(j(Nt(T*1.7,T*1.7,T*1.2,7),g,v,c+(E-1)*w*.36,m,p,y));o+=3}else if(M<.8){const w=sa(e.range(.03,.062)*x,10,7);w.scale(1,.62,e.range(.9,1.8)),n(j(w,g,v,c,m,p,y))}else if(M<.88){const w=e.range(.03,.055)*x,T=Nt(w,w*.8,.03,9);T.rotateX(Math.PI/2),T.rotateZ(y),s(j(T,g,v,c));for(let E=0;E<5;E++){const _=E/5*Math.PI*2;s(j(Fe(.012,.014,.012,.003),g+d.nx*.012+-d.ny*Math.cos(_)*w*.72,v+d.ny*.012+d.nx*Math.cos(_)*w*.72,c+Math.sin(_)*w*.72))}o+=5}else if(M<.95){const w=e.range(.1,.22)*x,T=e.range(.12,.26)*x;n(j(Fe(w,.016,T,.006),g,v,c,m,p,y)),a(j(Fe(w*.72,.02,T*.72,.005),g,v,c,m,p,y)),o++}else s(j(Fe(e.range(.05,.12),.014,.035,.004),g,v,c,m,p,y),e.bool(.5)?.42:.2);o++}return o}const ln=.6,er=.72,Xo=5.72,yn=.95,Nn=.395,ji=2.28,Ii=5.18,ci=5.58,Ri=-.68,Ow=[0,.02,.06,.13,.25,.4,.58,.76,.9,1],zw=[0,.1,.35,.7,1];function Bw(i){const e=i?Ow:zw,t=i?13:3,n=[];for(let o=0;o<=t;o++){const r=o/t,l=er+(Xo-er)*r,c=1.72+.4*r,u=4.44-.26*r,f=.118-.06*r,h=g=>f*(uw(g)/.5*.88+.12*g*g),d=[];for(let g=0;g<e.length;g++){const v=e[g];d.push(new _e(-(c+v*(u-c)),-h(v)))}for(let g=e.length-1;g>=1;g--){const v=e[g];d.push(new _e(-(c+v*(u-c)),h(v)))}n.push({z:l,pts:d})}const s=n[0].pts.map((o,r)=>!ds&&(r===e.length-1||r===e.length)),a=bf(n,s);return a.rotateY(Math.PI/2),a.translate(0,ln,0),a}function kw(i,e){const t=[],n=[],s=[],a=(p,y=0,M=0)=>t.push(An(p,1,M,y)),o=(p,y=0,M=0)=>n.push(An(p,1,M,y)),r=(p,y=0,M=0)=>s.push(An(p,1,M,y));if(a(Bw(e)),e)for(const p of[1,-1]){for(const y of[2.35,3.3])a(j(Fe(Xo-er-.55,.02,.16,.008),(er+Xo)/2+.15,ln+p*.088,y));o(j(Fe(.85,.024,.44,.01),1.75,ln+p*.09,2.75))}if(e)for(let p=0;p<3;p++){const y=2.3+p*1.02,x=4.44-.26*((y-er)/(Xo-er));r(j(Fe(.92,.036,.045,.006),y,ln,x-.3)),a(j(Fe(.9,.048,.3,.01),y,ln,x-.14));for(const w of[-1,1])o(j(Fe(.035,.055,.11,.008),y+w*.44,ln,x-.3))}a(j(Fe(.06,.075,.75,.012),Xo-.03,ln,3.3)),o(j(Fe(.045,.045,.1,.01),Xo+.005,ln+.055,3.85),.9);const l=e?20:9,c=ln;if(o(j(Nt(.375,Nn+.03,.14,l),yn,c,ji+.07)),r(j(Nt(.36,.36,.3,l,!0),yn,c,ji+.28)),r(j(Nt(.36,.36,.014,l),yn,c,ji+.42)),e){for(let p=0;p<10;p++){const y=p/10*Math.PI,M=Fe(.7,.03,.1,.006);M.rotateZ(y),o(j(M,yn,c,ji+.2))}o(j(Nt(.075,.055,.3,10),yn,c,ji+.24))}a(j(Nt(Nn,Nn+.012,1.05,l),yn,c,ji+.7));const u=e?14:0;for(let p=0;p<u;p++){const y=p/u*Math.PI*2,M=Fe(.055,.11,.62,.01);M.rotateZ(y),o(j(M,yn+Math.cos(y)*(Nn+.045),c+Math.sin(y)*(Nn+.045),ji+1.55))}if(o(j(Nt(Nn+.02,Nn+.02,.055,l),yn,c,ji+1.24)),o(j(Nt(Nn+.02,Nn+.02,.055,l),yn,c,ji+1.86)),a(j(Nt(Nn+.012,Nn+.045,.75,l),yn,c,ji+2.28)),o(j(Nt(Nn+.012,Nn+.055,.42,l,!0),yn,c,Ii-.21)),o(j(Nt(Nn+.055,Nn+.042,.045,l),yn,c,Ii-.008)),r(j(Nt(.105,Nn+.005,.58,l,!0),yn,c,Ii-.31)),r(j(Nt(.105,.105,.02,l),yn,c,Ii-.6)),o(j(Nt(Nn+.005,Nn+.03,.035,l),yn,c,Ii-.028)),e&&(o(j(Nt(.32,.345,.03,l),yn,c,Ii-.12),.26),o(j(Nt(.23,.255,.028,l),yn,c,Ii-.28),.32),o(j(Nt(.155,.175,.026,l),yn,c,Ii-.44),.38)),o(j(Nt(.026,.135,.4,e?14:8),yn,c,Ii-.34),.4),e)for(let p=0;p<8;p++){const y=p/8*Math.PI*2+.4,M=Fe(.022,.13,.34,.005);M.rotateZ(y),o(j(M,yn+Math.cos(y)*.275,c+Math.sin(y)*.275,Ii-.26),.18)}const f=i.fork(7);for(let p=0;p<(e?16:3);p++){const y=f.range(0,Math.PI*2),M=f.range(ji+.55,Ii-.45),x=Nn+.018,w=yn+Math.cos(y)*x,T=c+Math.sin(y)*x,E=f.next();if(E<.4){const _=Fe(f.range(.05,.11),f.range(.03,.07),f.range(.12,.34),.008);_.rotateZ(y),o(j(_,w,T,M))}else if(E<.72){const _=f.range(.5,1.3),A=f.range(.016,.032);o(j(Nt(A,A,_,7),w,T,M));for(let R=0;R<3;R++)o(j(Nt(A*1.8,A*1.8,A,7),w,T,M+(R-1)*_*.35))}else{const _=Fe(f.range(.06,.14),.018,f.range(.08,.2),.005);_.rotateZ(y),r(j(_,w,T,M),f.bool(.3)?.35:0)}}a(j(Fe(.42,.3,1.85,.06),yn-.36,c-.16,3.35));const h=(p,y,M,x=12,w=!1)=>Nt(p,y,M,x,w);o(j(h(.052,.046,3.05,e?14:8),ci,ln,Ri+1.83)),o(j(h(.108,.058,.32,e?16:8),ci,ln,Ri+.16)),r(j(h(.062,.062,.16,e?14:8,!0),ci,ln,Ri+.1),.12),r(j(h(.048,.048,.012,10),ci,ln,Ri+.19),.55);for(let p=0;p<(e?3:1);p++){const y=Ri+.62+p*.86;if(o(j(h(.084,.084,.1,e?14:8),ci,ln,y)),o(j(h(.094,.078,.045,e?14:8),ci,ln,y-.07)),e)for(let M=0;M<6;M++){const x=M/6*Math.PI*2+p;o(j(Fe(.016,.016,.016,.004),ci+Math.cos(x)*.086,ln+Math.sin(x)*.086,y))}}if(a(j(Fe(.165,.17,1,.03),ci,ln,Ri+3.42)),o(j(Fe(.1,.115,.3,.018),ci,ln,Ri+4.05)),o(j(h(.055,.028,.26,10),ci,ln,Ri+4.32)),a(j(Fe(.135,.1,.78,.024),ci-.1,ln,Ri+2.62)),e)for(const p of[-1,1]){o(j(h(.014,.014,2.35,6),ci+p*.07,ln-.052,Ri+1.7));for(let y=0;y<4;y++)o(j(Fe(.02,.03,.024,.005),ci+p*.07,ln-.052,Ri+.75+y*.62))}r(j(Fe(.06,.05,.2,.01),ci,ln+.1,Ri+3.3),.35);const d=ka[0][0],g=ka[0][1];o(j(Fe(.115,.235,.36,.022),d,g,Qa)),a(j(Fe(.155,.3,.9,.035),d+.02,g+.11,Qa+.05)),a(j(Fe(.2,.42,.7,.055),d+.14,(g+ln)*.5+.06,3.3));const v=.235,m=(p,y,M=10)=>{const x=yl(p,p,y,M);return x.rotateZ(v),x};if(o(j(m(.034,.86,10),.8,.32,3.7),0,1),o(j(Fe(.075,.085,.085,.014),1.19,.415,3.7),0,1),e&&(o(j(Fe(.085,.1,.1,.016),1.3,.455,3.7)),o(j(Nt(.02,.02,.14,8),1.245,.435,3.7))),e)for(let p=0;p<3;p++){const y=.24+p*.09;o(j(m(.013+p*.003,.7,6),.92,y,3.3+p*.16))}return{hull:t,metal:n,grille:s}}function Vw(i,e){const t=(a,o=0)=>i.metal.push(An(a,0,0,o)),n=(a,o=0)=>i.hull.push(An(a,0,0,o));for(let a=0;a<4;a++){const o=_l[a],r=jc[a],l=ka[a][0],c=ka[a][1];if(e){for(const f of[-.235,.235])t(j(Fe(.135,.26,.1,.02),l,c,Qa+f));t(j(Nt(.062,.062,.05,12),l,c,Qa-.36)),t(j(Nt(.062,.062,.05,12),l,c,Qa+.36))}t(j(Nt(.048,.048,.72,e?12:6),l,c,Qa)),n(j(Fe(.24,.34,1.1,.055),l-o*.1,c-r*.02,Qa-.1));const u=yl(.062,.062,.62,e?12:6);u.rotateZ(.235*o*r),t(j(u,o*.6,r*.245,3.7)),e&&t(j(Fe(.11,.13,.13,.022),o*.36,r*.19,3.7)),e&&(t(j(Nt(.02,.02,.34,7),o*.62,r*.3,3.7)),t(j(Fe(.05,.05,.05,.01),o*.62,r*.3,3.88)))}}function Gw(i,e){ds=!e;const t=new Qt(i),n={hull:[],metal:[],grille:[],glass:[]};n.hull.push(An(Cw(),0,0,0)),Rw(n,t.fork(1),e),Dw(n,t.fork(2),e),Fw(n,t.fork(3),e),Nw(n,t.fork(4),e);const s=Uw(n,t.fork(5),e);Vw(n,e);const a=kw(t.fork(6),e),o=Ia(a.hull),r=Ia(a.metal),l=Ia(a.grille);for(let M=0;M<4;M++){const x=_l[M],w=jc[M];n.hull.push(Ah(o,x,w,M+1,x)),n.metal.push(Ah(r,x,w,M+1,x)),n.grille.push(Ah(l,x,w,M+1,x))}o.dispose(),r.dispose(),l.dispose();const c=Ia(n.hull),u=Ia(n.metal),f=Ia(n.grille),h=Ia(n.glass),d=new mi(new b(0,0,-.6),8.2);for(const M of[c,u,f,h])M.boundingSphere=d.clone();const g=[],v=[],m=[];for(let M=0;M<4;M++){const x=_l[M],w=jc[M];g.push({wing:M+1,x:x*yn,y:w*ln,z:Ii,r:Nn}),m.push(new b(x*yn,w*ln,Ii)),v.push(new b(x*ci,w*ln,Ri))}const p=[new b(-.605,-.145,-3),new b(.605,-.145,-3)],y=jr(c)+jr(u)+jr(f)+jr(h);return ds=!1,{hull:c,metal:u,grille:f,glass:h,engines:g,cannonLocal:v,engineLocal:m,torpedoLocal:p,greebleCount:s,tris:y}}const zp=1.2*sl,Hw=15*sl,Ww=.155,Bp=new b,kp=new b;function qw(i={}){const e=i.seed??5150,t=(i.detail??"hero")!=="lod",n=i.redFive??t,s=new Ve(i.markingColor??12722971),a=Gw(e,t),o=hw(e,s,n);o.uDomeOrigin.value.copy(z0);const r=vw(o),l=new Gn;l.name="xwing";const c=Th("hull",o),u=Th("metal",o),f=Th("grille",o),h=[],d=[c,u,f];let g=null;if(t){g=gw(o),d.push(g),h.push(new ft(a.hull,c)),h.push(new ft(a.metal,u)),h.push(new ft(a.grille,f));const V=new ft(a.glass,g);V.renderOrder=2,h.push(V)}else{const V=Ia([a.grille,a.glass]);h.push(new ft(a.hull,c)),h.push(new ft(a.metal,u)),h.push(new ft(V,f))}for(const V of h)V.castShadow=!1,V.receiveShadow=!1,l.add(V);const v=xw(r),m=bw(a.engines,t),p=new ft(m,v);p.renderOrder=12,p.frustumCulled=!1,l.add(p),d.push(v);let y=null,M=null;t&&(M=_w(r),y=new ft(Mw(a.engines),M),y.renderOrder=13,y.frustumCulled=!1,l.add(y),d.push(M));const x=new Float32Array(4);function w(V,z,re){const ue=ka[V][0],Y=ka[V][1],ee=x[V],le=Math.cos(ee),Ce=Math.sin(ee),Ue=z.x+_l[V]*o.uWingExt.value[V]-ue,Ie=z.y-Y;return re.set(ue+le*Ue-Ce*Ie,Y+Ce*Ue+le*Ie,z.z)}const T=new Qt(e^20903),E=[T.range(0,9),T.range(0,9),T.range(0,9),T.range(0,9)];let _=T.range(0,Math.PI*2),A=_,R=T.range(.5,3),I=0,F=0,H=!1;const X={group:l,sfoil:0,sfoilTarget:0,throttle:.55,damage:0,length:pb,cockpitEye:Iw.clone(),materials:d,setSFoil(V){X.sfoil=we(V,0,1),X.sfoilTarget=X.sfoil,I=0,O(0)},getCannonTip(V,z){const re=we(V|0,0,3);return w(re,a.cannonLocal[re],z),z.applyMatrix4(l.matrixWorld)},getEngineTip(V,z){const re=we(V|0,0,3);return w(re,a.engineLocal[re],z),z.applyMatrix4(l.matrixWorld)},getTorpedoTube(V,z){return z.copy(a.torpedoLocal[we(V|0,0,1)]),z.applyMatrix4(l.matrixWorld)},update(V,z,re){if(H)return;const ue=Math.min(V,.1),Y=X.sfoil;X.sfoilTarget=we(X.sfoilTarget,0,1),X.sfoil=bn(X.sfoil,X.sfoilTarget,2.6,ue);const ee=ue>1e-5?(X.sfoil-Y)/ue:0;Math.abs(F)>.45&&Math.abs(ee)<.16&&(I=Math.min(1,Math.abs(F)*.9)),F=ee,I*=Math.exp(-5.2*ue),O(z),R-=ue,R<=0&&(R=1.4+Math.random()*3.4,A=_+(Math.random()-.5)*2.4),_=bn(_,A,2.2,ue),o.uDomeSpin.value=_+Math.sin(z*.7)*.05,o.uTime.value=z,o.uDamage.value=we(X.damage,0,1),r.uTime.value=z;const le=we(X.throttle,0,1),Ce=we(X.damage,0,1);for(let Ie=0;Ie<4;Ie++){const $=E[Ie];let ie=1+.055*Math.sin(z*27.3+$*5.1)+.035*Math.sin(z*61.7+$);if(Ce>.25){const De=Math.sin(z*(9+Ie*3.1)+$*3)*.5+.5;ie*=1-Ce*.75*Math.pow(De,6)*(Ie===(Math.floor(z*.35)&3)?1:.35)}const de=Math.max(.04,le*ie);r.uPow.value[Ie]=de,r.uLen.value[Ie]=.45+4.2*de,r.uRad.value[Ie]=.8+.3*de}re.getWorldPosition(kp),l.getWorldPosition(Bp);const Ue=kp.distanceTo(Bp);r.uNear.value=.25+.75*we((Ue-2.2)/4.5,0,1)},dispose(){if(!H){H=!0;for(const V of h)V.geometry.dispose(),l.remove(V);p.geometry.dispose(),l.remove(p),y&&(y.geometry.dispose(),l.remove(y));for(const V of d)V.dispose();h.length=0}}};function O(V){const z=we(X.sfoil,0,1),re=zp+(Hw-zp)*z;for(let ue=0;ue<4;ue++){const Y=I*.02*Math.sin(V*26+ue*1.9)*(.6+.4*Math.sin(V*11+ue));x[ue]=_l[ue]*jc[ue]*(re+Y),o.uWingAngle.value[ue]=x[ue],o.uWingExt.value[ue]=Ww*z+I*.012*Math.sin(V*26+ue*1.9)}}return O(0),X.setSFoil(0),l.userData.xwing={tris:a.tris+jr(m),hullTris:a.tris,drawCalls:h.length+1+(y?1:0),greebles:a.greebleCount},X}const ag=new st,Xw=new Qn,Vp=new Ct,qr=new b,Yw=new b(0,1,0);function Si(i,e,t=0){const n=i.attributes.position.count,s=new Float32Array(n);s.fill(e);const a=new Float32Array(n);return a.fill(t),i.setAttribute("aKind",new We(s,1)),i.setAttribute("aEmis",new We(a,1)),i.attributes.uv||i.setAttribute("uv",new We(new Float32Array(n*2),2)),i}function mt(i,e=0,t=0,n=0,s=0,a=0,o=0){return(s||a||o)&&i.applyMatrix4(ag.makeRotationFromEuler(Xw.set(s,a,o))),(e||t||n)&&i.translate(e,t,n),i}function wn(i,e,t,n=0,s=0){return Si(new zs(i,e,t),n,s)}function ir(i,e,t,n=8,s=0,a=0,o=!1){return Si(new wi(e,i,t,n,1,o),s,a)}function Is(i,e,t,n=8,s=0,a=0){const o=ir(i,e,t,n,s,a);return o.rotateZ(-Math.PI/2),o}function Vo(i,e,t,n=8,s=0,a=0,o=!1){const r=ir(i,e,t,n,s,a,o);return r.rotateX(-Math.PI/2),r}function hu(i){const e=i.map(n=>n.index?n.toNonIndexed():n),t=us(e,!1);if(!t)throw new Error("tie.ts: merge failed");return t.computeVertexNormals(),t.computeBoundingSphere(),t}function Xr(i,e,t,n,s=.06){return qr.set(Math.sin(t)*Math.sin(n),Math.cos(t),Math.sin(t)*Math.cos(n)),Vp.setFromUnitVectors(Yw,qr),i.applyMatrix4(ag.makeRotationFromQuaternion(Vp)),i.translate(qr.x*(e-s),qr.y*(e-s),qr.z*(e-s)),i}function $w(i,e,t,n,s=0){const a=[],o=[];for(let f=0;f<t;f++)o.push(i*(1+.03*Math.round(n.range(-1.75,1.75))));const r=(f,h,d)=>[Math.sin(h)*Math.sin(d)*f,Math.cos(h)*f,Math.sin(h)*Math.cos(d)*f],l=(f,h,d)=>{a.push(f[0],f[1],f[2],h[0],h[1],h[2],d[0],d[1],d[2])},c=(f,h,d,g)=>{l(f,g,d),l(f,d,h)};for(let f=0;f<t;f++){const h=f/t*Math.PI,d=(f+1)/t*Math.PI,g=o[f];for(let v=0;v<e;v++){const m=v/e*Xn,p=(v+1)/e*Xn,y=r(g,h,m),M=r(g,h,p),x=r(g,d,p),w=r(g,d,m);f===0?l(y,w,x):f===t-1?l(y,x,M):c(y,M,x,w)}}for(let f=0;f<t-1;f++){const h=o[f],d=o[f+1];if(Math.abs(h-d)<1e-4)continue;const g=(f+1)/t*Math.PI;for(let v=0;v<e;v++){const m=v/e*Xn,p=(v+1)/e*Xn;c(r(h,g,m),r(h,g,p),r(d,g,p),r(d,g,m))}}const u=new Tt;return u.setAttribute("position",new We(new Float32Array(a),3)),u.computeVertexNormals(),Si(u,s)}function Kw(i,e,t,n){const s=i.attributes.position.array;for(let a=0;a<s.length;a+=9){const o=s[a],r=s[a+1],l=s[a+2],c=s[a+3],u=s[a+4],f=s[a+5],h=s[a+6],d=s[a+7],g=s[a+8],v=c-o,m=u-r,p=f-l,y=h-o,M=d-r,x=g-l,w=m*x-p*M,T=p*y-v*x,E=v*M-m*y,_=(o+c+h)/3-e,A=(r+u+d)/3-t,R=(l+f+g)/3-n;w*_+T*A+E*R<0&&(s[a+3]=h,s[a+4]=d,s[a+5]=g,s[a+6]=c,s[a+7]=u,s[a+8]=f)}return i.computeVertexNormals(),i}function Zw(i,e,t,n,s){const a=i/2,o=e/2,r=a-n,l=o-n,c=[],u=(w,T,E)=>{c.push(E,T,w)},f=(w,T,E,_)=>{u(w[0],w[1],w[2]),u(T[0],T[1],T[2]),u(E[0],E[1],E[2]),u(w[0],w[1],w[2]),u(E[0],E[1],E[2]),u(_[0],_[1],_[2])},h=[-a,-o,0],d=[a,-o,0],g=[a,o,0],v=[-a,o,0],m=[-r,-l,t],p=[r,-l,t],y=[r,l,t],M=[-r,l,t];f(m,p,y,M),f(h,m,M,v),f(d,g,y,p),f(h,d,p,m),f(v,M,y,g);const x=new Tt;return x.setAttribute("position",new We(new Float32Array(c),3)),Kw(x,t*.5,0,0),Si(x,s)}const Jw={fighter:[[0,3.5],[-2.62,1.78],[-2.62,-1.78],[0,-3.5],[2.62,-1.78],[2.62,1.78]],interceptor:[[-2.25,3.62],[-2.62,0],[-2.25,-3.62],[2.95,-1.52],[.62,0],[2.95,1.52]],advanced:[[.35,3.42],[-2.35,2.02],[-2.6,-2.02],[.35,-3.42],[2.7,-1.62],[2.7,1.62]]};function ss(i,e){return i.map(([t,n])=>[t*e,n*e])}function to(i){const e=new iu;e.moveTo(i[0][0],i[0][1]);for(let t=1;t<i.length;t++)e.lineTo(i[t][0],i[t][1]);return e.closePath(),e}function Qw(i,e,t){let n=!1;for(let s=0,a=i.length-1;s<i.length;a=s++){const[o,r]=i[s],[l,c]=i[a];r>t!=c>t&&e<(l-o)*(t-r)/(c-r)+o&&(n=!n)}return n}function Cc(i,e){let t=1/0,n=-1/0;for(let s=0,a=i.length-1;s<i.length;a=s++){const[o,r]=i[s],[l,c]=i[a];if(r>e!=c>e){const u=(l-o)*(e-r)/(c-r)+o;u<t&&(t=u),u>n&&(n=u)}}return n>t?[t,n]:null}function jw(i,e){const t=Jw[i],n=.4,s=n/2,a=[],o=R=>(R.rotateY(Math.PI/2),R),r=ss(t,.795),l=to(t);l.holes.push(new rr(r.map(([R,I])=>new _e(R,I))));const c=new rs(l,{depth:n,bevelEnabled:!0,bevelThickness:.095,bevelSize:.095,bevelSegments:1,curveSegments:1});a.push(mt(o(Si(c,0)),-s,0,0));const u=to(ss(t,.82)),f=new rs(u,{depth:.18,bevelEnabled:!1,curveSegments:1});a.push(mt(o(Si(f,1)),-.09,0,0));const h=ss(t,.775),d=6,g=3;let v=1/0,m=-1/0;for(const[,R]of h)v=Math.min(v,R),m=Math.max(m,R);const p=v*.8,M=(m*.8-p)/d,x=(R,I)=>{const F=Cc(h,R),H=Cc(h,I),X=Cc(h,(R+I)/2);if(!F||!H||!X)return null;const O=Math.max(F[0],H[0],X[0]),V=Math.min(F[1],H[1],X[1]);return V-O>.4?[O,V]:null},w=.145,T=.115;for(let R=1;R<d;R++){const I=p+M*R,F=x(I-M*.5,I+M*.5);F&&a.push(mt(wn(T,.085,F[1]-F[0],0),w,I,-(F[0]+F[1])/2))}for(let R=0;R<d;R++){const I=p+M*(R+.5),F=x(I-M*.5,I+M*.5);if(!F)continue;const H=(F[1]-F[0])/g;for(let X=0;X<g;X++){const O=F[0]+H*(X+.5),V=H*.9,z=M*.88;Qw(h,O,I)&&a.push(mt(Zw(V,z,.05,Math.min(V,z)*.1,1),.09,I,-O))}for(let X=1;X<g;X++)a.push(mt(wn(T,M*.98,.085,0),w,I,-(F[0]+H*X)))}for(const[R,I]of t){const F=-R*.86,H=I*.86,X=Math.hypot(H,F);X<.2||a.push(mt(wn(.46,.155,X,0),0,H/2,F/2,Math.atan2(-H,F),0,0))}const E=to(ss(t,.56));E.holes.push(new rr(ss(t,.44).map(([R,I])=>new _e(R,I))));const _=new rs(E,{depth:.11,bevelEnabled:!1,curveSegments:1});a.push(mt(o(Si(_,0)),-s-.1,0,0));for(let R=0;R<2;R++){const I=(R-.5)*2.6,F=Cc(ss(t,.78),I);F&&a.push(mt(wn(.1,.22,(F[1]-F[0])*.94,3),-s-.05,I,-(F[0]+F[1])/2))}a.push(mt(Is(.66,.52,.4,10,0),-s-.19,0,0)),a.push(mt(Is(.4,.4,.18,8,3),-s-.46,0,0)),a.push(mt(Is(.42,.32,.16,8,0),s+.07,0,0)),a.push(mt(Is(.2,.2,.09,6,4,.3),s+.16,0,0)),a.push(mt(wn(.05,.09,.52,5,.55),s+.02,-.9,0));const A=hu(a);if(i==="advanced"){const R=A.attributes.position;for(let I=0;I<R.count;I++){const F=R.getY(I),H=Math.min(1,Math.abs(F)/3.4);R.setX(I,R.getX(I)-Math.pow(H,1.35)*.95),R.setZ(I,R.getZ(I)+Math.pow(H,1.7)*.55)}R.needsUpdate=!0,A.computeVertexNormals()}return A}function eT(i){const e=i.clone(),t=e.attributes.position,n=e.attributes.normal;for(let a=0;a<t.count;a++)t.setX(a,-t.getX(a)),n.setX(a,-n.getX(a));const s=[t.array,n.array];for(const a of s)for(let o=0;o<t.count;o+=3)for(let r=0;r<3;r++){const l=a[(o+1)*3+r];a[(o+1)*3+r]=a[(o+2)*3+r],a[(o+2)*3+r]=l}for(const a of["aKind","aEmis"]){const o=e.attributes[a],r=o.array;for(let l=0;l<o.count;l+=3){const c=r[l+1];r[l+1]=r[l+2],r[l+2]=c}o.needsUpdate=!0}return t.needsUpdate=!0,n.needsUpdate=!0,e}const Yr=[[-.8,.14],[-.52,.44],[.52,.44],[.8,.14],[.5,-.44],[-.5,-.44]];function tT(i,e,t){const n=[];n.push($w(e,18,11,t,0)),n.push(Si(new il(e*.985,.08,3,16),3).rotateX(Math.PI/2));const s=e/1.7,a=ss(Yr,s),o=to(ss(Yr,s*1.2));o.holes.push(new rr(a.map(([m,p])=>new _e(m,p))));const r=new rs(o,{depth:.42,bevelEnabled:!0,bevelThickness:.055,bevelSize:.055,bevelSegments:1,curveSegments:1});n.push(mt(Si(r,0),0,-.02,-(e-.14)-.42));const l=to(ss(Yr,s*1));l.holes.push(new rr(ss(Yr,s*.86).map(([m,p])=>new _e(m,p))));const c=new rs(l,{depth:.2,bevelEnabled:!1,curveSegments:1});n.push(mt(Si(c,3),0,-.02,-(e-.05)-.2));const u=new rs(to(ss(Yr,s*.87)),{depth:.08,bevelEnabled:!1,curveSegments:1});n.push(mt(Si(u,2,.18),0,-.02,-(e-.02)-.08));for(const m of[-.3,.3])n.push(mt(wn(.045,.72*s,.1,0),m*s,-.02,-(e+.045)));n.push(mt(wn(1.3*s,.045,.09,0),0,.16*s,-(e+.045))),n.push(mt(wn(.72*s,.05,.05,4,.42),0,-.38*s-.02,-(e+.035)));const f=Si(new il(.98*s,.085,4,14,Math.PI*.92),0);f.rotateZ(Math.PI*.04),n.push(mt(f,0,.3*s,-(e-.3),.22,0,0)),n.push(mt(wn(1.45*s,.16,.34,0,0),0,.62*s,-(e-.42)));const h=-.62*e,d=-(e*.8);n.push(mt(wn(1.72*s,.6,1.15,0,0),0,h-.06,d-.05)),n.push(mt(wn(1.42*s,.2,.52,3,0),0,h-.32,d+.1)),n.push(mt(wn(1.34*s,.24,.34,3,0),0,h+.32,d-.5));for(const m of[-.62,-.27,.27,.62]){const p=m*s,M=Math.abs(m)>.4?1.05:1.34;n.push(mt(Vo(.062,.05,M,8,3),p,h,d-.6-M/2)),n.push(mt(Vo(.145,.145,.26,8,0),p,h,d-.66)),n.push(mt(Vo(.085,.07,.09,8,4,.3),p,h,d-.6-M-.03))}const g=e*.86;for(const[m,p]of[[0,.6],[-.55,-.34],[.55,-.34]]){const y=m*s,M=p*s;n.push(mt(Vo(.42,.5,.36,10,0,0,!0),y,M,g+.08)),n.push(mt(Vo(.5,.56,.1,10,3),y,M,g-.1)),n.push(mt(Vo(.38,.38,.05,10,4,.4),y,M,g-.03))}n.push(mt(wn(1.5*s,.5,.26,3,0),0,-.05,g+.18));const v=t.fork(7);for(let m=0;m<5;m++){const p=v.range(.45,2.65),y=v.range(0,Xn),M=v.next();M<.45?n.push(Xr(wn(v.range(.3,.62),.1,v.range(.28,.55),3),e,p,y,.02)):M<.75?n.push(Xr(ir(.16,.13,.16,6,3),e,p,y,.03)):n.push(Xr(wn(v.range(.2,.34),.05,.09,5,.5),e,p,y,.01))}n.push(Xr(ir(.62,.52,.16,12,0),e,.34,.7,.05)),n.push(Xr(ir(.38,.34,.1,8,3),e,.34,.7,-.06));for(const m of[-1,1])n.push(mt(Is(.98,.82,.26,6,0),m*(e*.9),0,0,0,0,0)),n.push(mt(Is(.74,.74,.14,6,3),m*(e*.99),0,0));for(const m of[.42,-.42]){const p=Si(new il(e*.99,.055,3,10,Math.PI*1.05),3);p.rotateZ(-Math.PI*.52),n.push(mt(p,0,0,0,0,m,0))}if(i==="advanced"){const m=[[.3,-.05],[-.1,1.15],[-1.05,1.3],[-1.65,-.05]],p=new rs(to(m),{depth:.14,bevelEnabled:!0,bevelThickness:.045,bevelSize:.045,bevelSegments:1,curveSegments:1});p.rotateY(Math.PI/2),n.push(mt(Si(p,0),-.07,e*.88,.1)),n.push(mt(wn(.46,.24,1.7,0,0),0,e*.93,.35)),n.push(mt(wn(1.9,.3,.7,0,0),0,h-.28,d-.1))}if(i==="interceptor")for(const m of[-1,1])n.push(mt(wn(.34,.46,.9,3,0),m*e*.72,-.15,-e*.45)),n.push(mt(wn(.12,.16,.34,5,.5),m*e*.86,-.15,-e*.5));return hu(n)}function Gp(i,e,t){const n=[],s=e-i,a=(i+e)/2;n.push(mt(Is(.78,.58,.44,8,0),i+.16,0,0)),n.push(mt(Is(.44,.44,s,6,0),a,0,0)),n.push(mt(wn(s*.86,.62,.34,3,0),a,0,0)),n.push(mt(Is(.34,.34,s*.62,6,3),a+s*.08,.3,0)),n.push(mt(Is(.6,.72,.46,8,0),e-.18,0,0));for(let o=0;o<6;o++){const r=o/6*Xn;for(const l of[i+.3,e-.32])n.push(mt(ir(.06,.06,.1,5,3),l,Math.cos(r)*.56,Math.sin(r)*.56,0,0,Math.PI/2))}for(let o=0;o<2;o++){const r=i+s*(.3+o*.26);n.push(mt(wn(s*.11,.12,.5,3,0),r,.42,0)),n.push(mt(wn(s*.11,.12,.5,3,0),r,-.42,0))}return n.push(mt(wn(s*.4,.05,.13,5,.5),a,.46,.2)),hu(n)}const Ch=["fighter","interceptor","advanced"];function nT(i,e){const t=new Qt(e),n=i==="advanced"?1.94:1.7,s=i==="advanced"?4.2:4.05,a=i==="interceptor"?.075:.045,o=[];o.push(tT(i,n,t)),o.push(Gp(n*.88,s-.3)),o.push(mt(Gp(n*.88,s-.3),0,0,0,0,Math.PI,0));const r=jw(i),l=r.clone();l.rotateZ(a),l.translate(s,0,0),o.push(l);const c=eT(r);c.rotateZ(-a),c.translate(-s,0,0),o.push(c);const u=hu(o),f=n/1.7,h=-.62*n,d=-(n*.8),g=[-.62,-.27,.27,.62].map(p=>{const y=Math.abs(p)>.4?1.05:1.34;return new b(p*f,h,d-.63-y)}),v=new st().makeTranslation(0,0,n*1.02).multiply(new st().makeScale(f,f,1)),m=u.attributes.position.count/3;return{geo:u,wing:r,muzzles:g,ionOffset:v,radius:i==="advanced"?3.9:i==="interceptor"?3.4:3.6,tris:m}}function iT(){const i=[],e=[],t=[],n=(a,o)=>{const l=(c,u,f,h)=>{for(let d=0;d<9;d++){const g=d/9*Xn,v=(d+1)/9*Xn,m=[[a+Math.cos(g)*c,o+Math.sin(g)*c,0,0],[a+Math.cos(v)*c,o+Math.sin(v)*c,0,0],[a+Math.cos(v)*u,o+Math.sin(v)*u,f,1],[a+Math.cos(g)*u,o+Math.sin(g)*u,f,1]];for(const[p,y,M]of[[0,1,2],[0,2,3]])for(const x of[p,y,M])i.push(m[x][0],m[x][1],m[x][2]),e.push(m[x][3]),t.push(h)}};l(.26,.46,1.65,.55),l(.34,.86,2.6,.88);for(let c=0;c<9;c++){const u=c/9*Xn,f=(c+1)/9*Xn;i.push(a,o,.02),e.push(0),t.push(0),i.push(a+Math.cos(u)*.3,o+Math.sin(u)*.3,.02),e.push(0),t.push(1),i.push(a+Math.cos(f)*.3,o+Math.sin(f)*.3,.02),e.push(0),t.push(1)}};n(0,.6),n(-.55,-.34),n(.55,-.34);const s=new Tt;return s.setAttribute("position",new We(new Float32Array(i),3)),s.setAttribute("aT",new We(new Float32Array(e),1)),s.setAttribute("aR",new We(new Float32Array(t),1)),s.computeBoundingSphere(),s}function sT(){return new xt({uniforms:{uTime:{value:0},uColor:{value:new Ve().copy(zm)},uStrength:{value:8.5}},vertexShader:`
      attribute float aT;
      attribute float aR;
      attribute vec2 aIon;
      varying float vT; varying float vR; varying float vSeed; varying float vPow;
      void main(){
        vT = aT; vR = aR; vSeed = aIon.x; vPow = aIon.y;
        vec4 mv = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          mv = instanceMatrix * mv;
        #endif
        mv = modelViewMatrix * mv;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime; uniform vec3 uColor; uniform float uStrength;
      varying float vT; varying float vR; varying float vSeed; varying float vPow;
      void main(){
        float t = clamp(vT, 0.0, 1.0);
        float fall = pow(1.0 - t, 1.9);
        float flick = 0.80
          + 0.16 * sin(uTime * 37.0 + vSeed * 17.3) * cos(uTime * 23.0 + vSeed * 41.1)
          + 0.10 * sin(uTime * 91.0 + vSeed * 7.7);
        vec3 col = mix(uColor, vec3(1.0), pow(1.0 - t, 3.0) * 0.9);
        float a = fall * pow(max(1.0 - vR * 0.86, 0.0), 2.0);
        gl_FragColor = vec4(col * a * uStrength * flick * max(vPow, 0.0), 1.0);
      }
    `,transparent:!0,blending:Jt,depthWrite:!1,side:cn,toneMapped:!0})}function aT(){const i=new Ml({color:16777215,emissive:0,roughness:.6,metalness:.55,flatShading:!0}),e={uTime:{value:0},uHull:{value:new Ve(.52,.552,.59)},uCell:{value:new Ve(.052,.064,.1)},uGlass:{value:new Ve(.022,.028,.038)},uMetal:{value:new Ve(.335,.352,.378)},uEmisA:{value:new Ve(.55,.86,1)},uEmisB:{value:new Ve(1,.34,.1)},uEmisStr:{value:1.8},uPanel:{value:1.9},uGrime:{value:.42}};return i.userData.uniforms=e,i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`
        #include <common>
        attribute float aKind;
        attribute float aEmis;
        #ifdef USE_INSTANCING
          attribute vec4 aInst;
        #endif
        varying float vKind; varying float vEmis; varying vec3 vObj; varying vec4 vInst;
      `).replace("#include <begin_vertex>",`
        #include <begin_vertex>
        vKind = aKind; vEmis = aEmis; vObj = position;
        #ifdef USE_INSTANCING
          vInst = aInst;
        #else
          vInst = vec4(0.0, 0.0, 0.0, 1.0);
        #endif
      `),t.fragmentShader=t.fragmentShader.replace("#include <common>",`
        #include <common>
        varying float vKind; varying float vEmis; varying vec3 vObj; varying vec4 vInst;
        uniform float uTime, uEmisStr, uPanel, uGrime;
        uniform vec3 uHull, uCell, uGlass, uMetal, uEmisA, uEmisB;
        ${Mn}
        ${zn}
        float tiePanel(vec3 p, vec3 a, float s){
          vec2 gx = abs(fract(p.zy*s)-0.5), gy = abs(fract(p.xz*s)-0.5), gz = abs(fract(p.xy*s)-0.5);
          float dx = min(gx.x,gx.y), dy = min(gy.x,gy.y), dz = min(gz.x,gz.y);
          float w = 0.030;
          return a.x*(1.0-smoothstep(w, w+max(fwidth(dx)*1.5, 0.008), dx))
               + a.y*(1.0-smoothstep(w, w+max(fwidth(dy)*1.5, 0.008), dy))
               + a.z*(1.0-smoothstep(w, w+max(fwidth(dz)*1.5, 0.008), dz));
        }
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        {
          vec3 P = vObj;
          vec3 ON = normalize(cross(dFdx(P), dFdy(P)));
          vec3 an = abs(ON); an /= max(an.x+an.y+an.z, 1e-4);
          float sd = vInst.x;
          vec3 base;
          if (vKind < 0.5)      base = uHull;
          else if (vKind < 1.5) base = uCell;
          else if (vKind < 2.5) base = uGlass;
          else if (vKind < 3.5) base = uMetal;
          else                  base = vec3(0.06);

          if (vKind < 0.5 || (vKind > 2.5 && vKind < 3.5)) {
            vec3 aniso = vec3(1.0, 0.58, 0.78);
            float pl  = tiePanel(P*aniso, an, uPanel);
            float pl2 = tiePanel(P*aniso, an, uPanel*0.37);
            float plate = hash13(floor(P*aniso*uPanel*0.99) + sd*13.0);
            float bigPlate = hash13(floor(P*aniso*uPanel*0.37) + sd*4.0);
            base *= 0.90 + 0.15*plate + 0.09*bigPlate;
            base *= 1.0 - 0.40*pl - 0.22*pl2;
            // edge wear: bare metal showing along a subset of the seams
            float wear = step(0.62, hash13(floor(P*aniso*uPanel) + sd*3.0 + 5.0));
            base += vec3(0.14,0.148,0.158) * pl * wear;
            float gr = fbm3(P*vec3(1.05,1.05,0.28) + sd*7.0, 4, 2.2, 0.55);
            base *= mix(1.0, 0.62+0.56*gr, uGrime);
          } else if (vKind < 1.5) {
            float c = hash13(floor(P*2.6) + sd*5.0);
            base *= 0.62 + 0.90*c;
            base += vec3(0.012,0.020,0.042) * (0.4 + 0.6*c);
            base *= 1.0 - 0.35*tiePanel(P, an, 4.4);
          }
          float dmg = vInst.y;
          if (dmg > 0.001) {
            float sc = fbm3(P*2.1 + sd*3.0, 3, 2.3, 0.5);
            base *= 1.0 - 0.78*dmg*smoothstep(0.34, 0.72, sc);
          }
          diffuseColor.rgb *= base * clamp(vInst.w, 0.0, 1.0);
        }
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        {
          float r = 0.60;
          if (vKind < 0.5) r = 0.55;
          else if (vKind < 1.5) r = 0.27;
          else if (vKind < 2.5) r = 0.09;
          else if (vKind < 3.5) r = 0.36;
          float n = vnoise3(vObj*5.5 + vInst.x*11.0);
          roughnessFactor = clamp(r*(0.80+0.44*n), 0.035, 1.0);
        }
      `).replace("#include <metalnessmap_fragment>",`
        #include <metalnessmap_fragment>
        {
          float m = 0.45;
          if (vKind < 0.5) m = 0.40;
          else if (vKind < 1.5) m = 0.62;
          else if (vKind < 2.5) m = 0.85;
          else if (vKind < 3.5) m = 0.88;
          metalnessFactor = m;
        }
      `).replace("#include <emissivemap_fragment>",`
        #include <emissivemap_fragment>
        {
          float fade = clamp(vInst.w, 0.0, 1.0);
          if (vKind > 3.5 && vKind < 4.5) {
            float fl = 0.86 + 0.14*sin(uTime*6.0 + vInst.x*30.0);
            totalEmissiveRadiance += uEmisA * (vEmis * uEmisStr * fl * fade);
          } else if (vKind > 4.5) {
            float fl = 0.5 + 0.5*step(0.5, fract(uTime*1.3 + vInst.x*3.0));
            totalEmissiveRadiance += uEmisB * (vEmis * uEmisStr * fl * fade);
          } else if (vKind > 1.5 && vKind < 2.5) {
            // faint cockpit interior spill, brightest at the bottom of the pane
            float g = smoothstep(0.35, -0.95, vObj.y) * 0.92 + 0.08;
            totalEmissiveRadiance += uEmisA * (vEmis * 0.85 * g * fade);
          }
          if (vInst.y > 0.35) {
            float h = fbm3(vObj*2.6 + vInst.x*9.0, 3, 2.4, 0.5);
            float hot = smoothstep(0.64, 0.82, h) * (vInst.y - 0.35) * 1.15;
            totalEmissiveRadiance += vec3(3.0, 0.78, 0.10) * hot;
          }
          totalEmissiveRadiance += vec3(1.0, 0.94, 0.86) * (vInst.z * 30.0);
        }
      `)},i.customProgramCacheKey=()=>"tie-hull-v1",i}const Ph=24,oT=[-1,1],rT=new Ve(1,.62,.24),Vt=new b,zt=new b,Li=new b,ni=new b,Ts=new b,Ps=new b,eu=new b,Rh=new b,Hp=new b,Ih=new b,Pc=new b,Ra=new b,Rc=new b,Go=new b,Ic=new b,Lc=new b,$r=new Ct,Lh=new Ct,Wp=new st,Dc=new st,Dh=new b(1,1,1),qp=new b(0,1,0),og=new b(0,0,1);function Xp(i,e,t,n){Ps.crossVectors(e,t),Ps.lengthSq()<1e-6&&Ps.crossVectors(e,og),Ps.normalize(),eu.crossVectors(Ps,e).normalize();const s=Math.cos(n),a=Math.sin(n);return Rh.copy(eu).multiplyScalar(s).addScaledVector(Ps,a).normalize(),Hp.crossVectors(e,Rh).normalize(),Li.copy(e).negate(),Wp.makeBasis(Hp,Rh,Li),i.setFromRotationMatrix(Wp)}function Fc(i,e,t){return t.set(0,1,0),Math.abs(i.y)>.92&&t.set(1,0,0),Vt.crossVectors(i,t).normalize(),zt.crossVectors(i,Vt).normalize(),t.copy(Vt).multiplyScalar(Math.cos(e)).addScaledVector(zt,Math.sin(e)).normalize()}class lT{constructor(e,t={}){this.group=new Gn,this.ties=[],this.aliveCount=0,this.kills=0,this.meshes=[],this.instAttrs=[],this.panels=[],this.minAlt=null,this.list=[],this.anchorPos=new b,this.anchorQuat=new Ct,this.anchorSpeed=300,this.time=0,this.scene=e,this.max=Math.max(1,t.max??18),this.rng=new Qt(t.seed??90210),this.group.name="tie-squadron",this.hullMat=aT(),this.ionMat=sT(),this.builds=Ch.map((a,o)=>nT(a,(t.seed??90210)+o*977));for(let a=0;a<3;a++){const o=this.builds[a],r=new hi(new Float32Array(this.max*4),4);r.setUsage(tn),o.geo.setAttribute("aInst",r);const l=new hs(o.geo,this.hullMat,this.max);l.instanceMatrix.setUsage(tn),l.frustumCulled=!1,l.count=0,l.name=`tie-${Ch[a]}`,this.meshes.push(l),this.instAttrs.push(r),this.group.add(l)}const n=iT();this.ionAttr=new hi(new Float32Array(this.max*2),2),this.ionAttr.setUsage(tn),n.setAttribute("aIon",this.ionAttr),this.ionMesh=new hs(n,this.ionMat,this.max),this.ionMesh.instanceMatrix.setUsage(tn),this.ionMesh.frustumCulled=!1,this.ionMesh.renderOrder=3,this.ionMesh.count=0,this.group.add(this.ionMesh);const s=this.builds[0].wing.clone();this.debrisAttr=new hi(new Float32Array(Ph*4),4),this.debrisAttr.setUsage(tn),s.setAttribute("aInst",this.debrisAttr),this.debris=new hs(s,this.hullMat,Ph),this.debris.instanceMatrix.setUsage(tn),this.debris.frustumCulled=!1,this.debris.count=0,this.group.add(this.debris);for(let a=0;a<Ph;a++)this.panels.push({active:!1,pos:new b,vel:new b,quat:new Ct,spinAxis:new b(0,1,0),spinSpd:0,life:0,maxLife:1,scale:1,seed:0});for(let a=0;a<this.max;a++)this.list.push(this.makeTIE(a));this.ties=this.list,e.add(this.group)}makeTIE(e){const t=new In;return t.matrixAutoUpdate=!1,t.visible=!1,this.group.add(t),{root:t,position:t.position,quaternion:t.quaternion,velocity:new b,mode:"dead",hp:0,alive:!1,variant:"fighter",slot:new b,radius:3.6,idx:e,vi:0,maxHp:30,speed:300,baseSpeed:300,turnRate:1.6,aggression:1,seed:this.rng.next()*97,bank:0,rollPhase:0,fireTimer:0,fireCooldown:0,burst:0,muzzleIdx:0,modeTimer:0,thinkTimer:0,wander:this.rng.next()*Xn,axis:new b(0,1,0),flash:0,damageVis:0,sparkTimer:0,rendered:!1,killed:!0,pendingKill:!1,deadTimer:0,engageDelay:0}}spawn(e,t,n,s={}){const a=[],o=s.mode??"formation",r=s.spread??1,l=s.speed??320;ni.copy(t).normalize(),Xp(this.anchorQuat,ni,qp,0),this.anchorPos.copy(e),this.anchorSpeed=l;let c=this.list.some(f=>f.rendered&&f.variant==="advanced"),u=0;for(const f of this.list){if(u>=n)break;if(f.rendered)continue;let h;s.variant?h=s.variant:!c&&n>=3&&u===0?(h="advanced",c=!0):h=this.rng.bool(.28)?"interceptor":"fighter";const d=Ch.indexOf(h),g=this.builds[d],v=u,m=Math.ceil(v/2),p=v===0?0:v%2===1?-1:1,y=this.rng;f.slot.set(p*m*22*r+y.gauss(0,2.6),(m%2?5.5:-4)*r+y.gauss(0,2.4),m*17*r+y.gauss(0,3)),f.variant=h,f.vi=d,f.radius=g.radius,f.maxHp=h==="advanced"?70:h==="interceptor"?24:30,f.hp=f.maxHp,f.alive=!0,f.killed=!1,f.pendingKill=!1,f.rendered=!0,f.mode=o,f.modeTimer=0,f.thinkTimer=this.rng.range(0,.25),f.flash=0,f.damageVis=0,f.deadTimer=0,f.burst=0,f.fireCooldown=this.rng.range(.2,1.4),f.muzzleIdx=this.rng.int(0,3),f.seed=this.rng.next()*97,f.wander=this.rng.next()*Xn,f.aggression=this.rng.range(.65,1.45),f.engageDelay=this.rng.range(.4,3.4),f.baseSpeed=(h==="interceptor"?380:h==="advanced"?340:320)*this.rng.range(.92,1.1),f.speed=l,f.turnRate=(h==="interceptor"?1.95:h==="advanced"?1.7:1.6)*this.rng.range(.9,1.1),f.bank=0,f.rollPhase=this.rng.next()*Xn,f.axis.set(this.rng.gauss(),this.rng.gauss(),this.rng.gauss()).normalize(),Vt.copy(f.slot).applyQuaternion(this.anchorQuat).add(this.anchorPos),f.position.copy(Vt),f.quaternion.copy(this.anchorQuat),f.velocity.copy(ni).multiplyScalar(l),f.root.visible=!0,f.root.matrix.compose(f.position,f.quaternion,Dh),this.aliveCount++,u++,a.push(f)}return a}damage(e,t){const n=e;return!n.alive||n.pendingKill?!1:(n.hp-=t,n.damageVis=we(1-n.hp/Math.max(1,n.maxHp),0,1),n.flash=Math.max(n.flash,.1),n.hp<=0?(n.pendingKill=!0,!0):!1)}kill(e,t){const n=e;if(!n.killed){n.killed=!0,n.pendingKill=!1,n.alive=!1,n.mode="dead",n.hp=0,n.flash=1,n.deadTimer=.1,this.aliveCount=Math.max(0,this.aliveCount-1),this.kills++,t.explosion(n.position,14,{color:rT,core:44,life:1.5,shock:!0}),t.debrisBurst?.(n.position,14,{speed:46,size:1.4,spread:1,life:2.6,velocity:n.velocity}),t.sparks?.(n.position,Vt.copy(n.velocity).normalize(),26,zm,70);for(const s of oT){let a=null;for(let o=0;o<this.panels.length;o++)if(!this.panels[o].active){a=this.panels[o];break}if(!a)break;a.active=!0,Vt.set(s*4.05,0,0).applyQuaternion(n.quaternion),a.pos.copy(n.position).add(Vt),a.vel.copy(n.velocity).multiplyScalar(.55),a.vel.x+=this.rng.gauss(0,16)+s*12,a.vel.y+=this.rng.gauss(0,16),a.vel.z+=this.rng.gauss(0,16),a.quat.copy(n.quaternion),a.spinAxis.set(this.rng.gauss(),this.rng.gauss(),this.rng.gauss()).normalize(),a.spinSpd=this.rng.range(2.2,6.5)*this.rng.sign(),a.maxLife=this.rng.range(2.2,3.4),a.life=a.maxLife,a.scale=1,a.seed=this.rng.next()*97}}}breakOff(){for(const e of this.list)!e.rendered||!e.alive||(e.mode="flee",e.modeTimer=0,e.burst=0,e.axis.set(this.rng.gauss(),this.rng.gauss(.4,.6),this.rng.gauss()).normalize())}setBounds(e){this.minAlt=e}clear(){for(const e of this.list)e.rendered=!1,e.alive=!1,e.killed=!0,e.pendingKill=!1,e.mode="dead",e.flash=0,e.damageVis=0,e.root.visible=!1;for(const e of this.panels)e.active=!1;this.aliveCount=0;for(const e of this.meshes)e.count=0;this.ionMesh.count=0,this.debris.count=0}dispose(){this.group.removeFromParent();for(const e of this.builds)e.geo.dispose(),e.wing.dispose();this.ionMesh.geometry.dispose(),this.debris.geometry.dispose();for(const e of this.meshes)e.dispose();this.ionMesh.dispose(),this.debris.dispose(),this.hullMat.dispose(),this.ionMat.dispose()}hitTest(e,t){Vt.subVectors(t,e);const n=Vt.length();if(n<1e-4)return null;Vt.multiplyScalar(1/n);let s=-1,a=1/0;for(let c=0;c<this.list.length;c++){const u=this.list[c];if(!u.alive||!u.rendered)continue;zt.subVectors(u.position,e);const f=zt.dot(Vt);if(f<-u.radius||f>n+u.radius)continue;const h=zt.lengthSq()-f*f,d=u.radius*u.radius;if(h>d)continue;const g=Math.sqrt(Math.max(0,d-h)),v=f-g;v<a&&(a=v,s=c)}if(s<0)return null;const o=this.list[s],r=new b().copy(e).addScaledVector(Vt,Math.max(0,a)),l=new b().subVectors(r,o.position).normalize();return{tie:o,point:r,normal:l}}update(e,t,n,s){e<=0&&(e=1e-4),this.time=t,this.hullMat.userData.uniforms.uTime.value=t,this.ionMat.uniforms.uTime.value=t,Ts.set(0,0,-1).applyQuaternion(this.anchorQuat),this.anchorPos.addScaledVector(Ts,this.anchorSpeed*e),Ps.set(1,0,0).applyQuaternion(this.anchorQuat),this.anchorPos.addScaledVector(Ps,Math.sin(t*.23)*26*e),eu.set(0,1,0).applyQuaternion(this.anchorQuat),this.anchorPos.addScaledVector(eu,Math.sin(t*.17+1.2)*16*e),Ic.set(0,0,-1).applyQuaternion(n.quaternion),Lc.set(0,0,0);let a=0;for(const o of this.list)!o.rendered||!o.alive||(o.mode==="pursue"||o.mode==="attack"||o.mode==="strafe")&&(Lc.add(o.position),a++);a>0&&Lc.multiplyScalar(1/a);for(let o=0;o<this.list.length;o++){const r=this.list[o];if(!r.rendered)continue;if(r.pendingKill&&this.kill(r,s),!r.alive){r.position.addScaledVector(r.velocity,e),r.flash=Math.max(0,r.flash-e*9),r.deadTimer-=e,r.deadTimer<=0&&(r.rendered=!1,r.root.visible=!1),r.root.matrix.compose(r.position,r.quaternion,Dh);continue}r.flash=Math.max(0,r.flash-e*6),r.modeTimer+=e,r.thinkTimer-=e;const l=r.position.distanceTo(n.position),c=we(l/950,0,1.35);Ih.copy(n.velocity).multiplyScalar(c).add(n.position),Ts.set(0,0,-1).applyQuaternion(r.quaternion),Vt.subVectors(Ih,r.position);const u=Math.max(.001,Vt.length());Vt.multiplyScalar(1/u);const f=Math.acos(we(Ts.dot(Vt),-1,1));zt.subVectors(r.position,n.position).normalize();const h=zt.dot(Ic)>.86&&l<620;r.thinkTimer<=0&&(r.thinkTimer=.22+r.seed%1*.16,this.think(r,l,f,h)),ni.copy(Vt);let d=r.baseSpeed,g=2.1;switch(r.mode){case"formation":{zt.copy(r.slot),zt.x+=Math.sin(t*.71+r.wander)*4.5,zt.y+=Math.sin(t*.53+r.wander*2.1)*3.2,zt.z+=Math.sin(t*.61+r.wander*3.3)*5,zt.applyQuaternion(this.anchorQuat).add(this.anchorPos),Li.subVectors(zt,r.position);const w=Li.length();Ts.set(0,0,-1).applyQuaternion(this.anchorQuat),ni.copy(Li).addScaledVector(Ts,90+w*.35).normalize(),d=this.anchorSpeed+we(Li.dot(Ts)*.75,-110,150),g=1.5;break}case"pursue":{l<240&&(Fc(Vt,r.seed*1.7+t*.4,Ra),ni.copy(Vt).addScaledVector(Ra,.85).normalize()),d=r.baseSpeed*1.12;break}case"attack":{Fc(Vt,r.seed*2.3+t*1.6,Ra),ni.copy(Vt).addScaledVector(Ra,.055).normalize(),d=r.baseSpeed*(l>900?1.15:.94),g=2.5;break}case"strafe":{Li.crossVectors(Ic,r.axis),Li.lengthSq()<1e-4&&Li.crossVectors(Ic,og),Li.normalize(),zt.copy(n.velocity).multiplyScalar(.6).add(n.position).addScaledVector(Li,340),ni.subVectors(zt,r.position).normalize(),d=r.baseSpeed*1.3,g=2.8;break}case"evade":{zt.subVectors(r.position,n.position).normalize(),r.rollPhase+=e*7.5,Fc(zt,r.rollPhase,Ra),ni.copy(zt).addScaledVector(Ra,.62).normalize(),d=r.baseSpeed*1.22,g=0;break}case"flee":{zt.subVectors(r.position,n.position).normalize(),ni.copy(zt).addScaledVector(r.axis,.55).normalize(),d=r.baseSpeed*1.45;break}}if(a>1&&(r.mode==="pursue"||r.mode==="attack"||r.mode==="strafe")){zt.subVectors(Lc,r.position);const w=zt.length();w>190&&ni.addScaledVector(zt.multiplyScalar(1/w),we((w-190)/420,0,.45)).normalize()}Rc.set(0,0,0);for(let w=0;w<this.list.length;w++){if(w===o)continue;const T=this.list[w];if(!T.rendered||!T.alive)continue;zt.subVectors(r.position,T.position);const E=zt.lengthSq();E>3600||E<1e-4||Rc.addScaledVector(zt,1/Math.sqrt(E)*(1-Math.sqrt(E)/60))}Rc.lengthSq()>1e-6&&ni.addScaledVector(Rc.normalize(),.55).normalize();let v=qp;if(this.minAlt!==null){const w=r.position.length();Go.copy(r.position).normalize(),v=Go;const T=Dt(this.minAlt+260,this.minAlt-40,w);T>0&&(ni.addScaledVector(Go,T*2.4).normalize(),w<this.minAlt&&(r.position.setLength(this.minAlt),r.velocity.dot(Go)<0&&r.velocity.addScaledVector(Go,-r.velocity.dot(Go)*1.6)))}Ts.set(0,0,-1).applyQuaternion(r.quaternion),Ps.set(1,0,0).applyQuaternion(r.quaternion);const m=ni.dot(Ps),p=we(m*g,-1.2,1.2);r.bank=bn(r.bank,p,4.2,e);let y=r.bank;r.mode==="evade"&&(y=r.rollPhase),zt.copy(r.velocity),zt.lengthSq()>1&&(zt.normalize(),ni.addScaledVector(zt,.14).normalize()),Xp($r,ni,v,y),Lh.copy(r.quaternion),I0(r.quaternion,$r,4.4,e);const M=Lh.angleTo(r.quaternion),x=r.turnRate*e;M>x&&r.quaternion.copy(Lh).rotateTowards($r,x),r.speed=bn(r.speed,we(d,200,430),2,e),Ts.set(0,0,-1).applyQuaternion(r.quaternion),zt.copy(Ts).multiplyScalar(r.speed),km(r.velocity,zt,3.4,e),r.position.addScaledVector(r.velocity,e),r.root.matrix.compose(r.position,r.quaternion,Dh),r.fireCooldown-=e,r.mode==="attack"&&l<1100&&l>90?r.burst>0?(r.fireTimer-=e,r.fireTimer<=0&&(this.shoot(r,Ih,s),r.burst--,r.fireTimer=.12)):r.fireCooldown<=0&&f<4*sl&&(r.burst=2+Math.floor(this.rng.next()*3),r.fireTimer=0,r.fireCooldown=this.rng.range(.75,2.1)/r.aggression):r.burst=0,r.damageVis=bn(r.damageVis,we(1-r.hp/r.maxHp,0,1),6,e),r.damageVis>.6&&s.sparks&&(r.sparkTimer-=e,r.sparkTimer<=0&&(r.sparkTimer=.07+this.rng.next()*.06,zt.copy(r.velocity).normalize().negate(),Li.copy(r.position).addScaledVector(zt,1.2),s.sparks(Li,zt,2,cT,22)))}this.updatePanels(e),this.writeInstances()}think(e,t,n,s){const a=o=>{e.mode!==o&&(e.mode=o,e.modeTimer=0,e.burst=0)};switch(e.mode){case"formation":e.engageDelay-=.22,t<2400&&e.engageDelay<=0&&a("pursue");break;case"pursue":s&&this.rng.bool(.5)?(this.pickAxis(e),a("evade")):t<1e3&&n<26*sl?a("attack"):t>3200&&e.modeTimer>5&&a("pursue");break;case"attack":t<130||e.modeTimer>5+e.aggression*2?(this.pickAxis(e),a(this.rng.bool(.55)?"strafe":"evade")):t>1500?a("pursue"):s&&this.rng.bool(.35)&&(this.pickAxis(e),a("evade"));break;case"strafe":e.modeTimer>2.6+this.rng.next()*1.6&&a("pursue");break;case"evade":(e.modeTimer>2.2+this.rng.next()*1.8&&!s||e.modeTimer>5)&&a("pursue");break}}pickAxis(e){Vt.set(this.rng.gauss(),this.rng.gauss(),this.rng.gauss()),Vt.lengthSq()<1e-4&&Vt.set(0,1,0),e.axis.copy(Vt).normalize()}shoot(e,t,n){const s=this.builds[e.vi].muzzles,a=s[e.muzzleIdx%s.length];e.muzzleIdx++,Pc.copy(a).applyQuaternion(e.quaternion).add(e.position),Vt.subVectors(t,Pc).normalize();const o=(.5+this.rng.next()*2)*sl;Fc(Vt,this.rng.next()*Xn,Ra),Vt.addScaledVector(Ra,Math.tan(o)).normalize(),n.laser(Pc,Vt,{color:Zc,speed:1150,length:26,radius:.24,life:2,hostile:!0,owner:"tie",damage:8}),n.muzzleFlash?.(Pc,Vt,Zc,.8)}updatePanels(e){let t=0;for(const n of this.panels){if(!n.active)continue;if(n.life-=e,n.life<=0){n.active=!1;continue}n.pos.addScaledVector(n.vel,e),n.vel.multiplyScalar(1-Math.min(.9,.22*e)),$r.setFromAxisAngle(n.spinAxis,n.spinSpd*e),n.quat.premultiply($r);const s=n.life/n.maxLife,a=s>.7?1:s/.7;Vt.setScalar(.55+.45*a),Dc.compose(n.pos,n.quat,Vt),this.debris.setMatrixAt(t,Dc),this.debrisAttr.setXYZW(t,n.seed,.58,0,a),t++}this.debris.count=t,t>0&&(this.debris.instanceMatrix.needsUpdate=!0,this.debrisAttr.needsUpdate=!0)}writeInstances(){let e=0,t=0,n=0,s=0;for(const o of this.list){if(!o.rendered)continue;const r=this.meshes[o.vi],l=this.instAttrs[o.vi],c=o.vi===0?e++:o.vi===1?t++:n++;r.setMatrixAt(c,o.root.matrix),l.setXYZW(c,o.seed,o.damageVis,o.flash,1),Dc.multiplyMatrices(o.root.matrix,this.builds[o.vi].ionOffset),this.ionMesh.setMatrixAt(s,Dc),this.ionAttr.setXY(s,o.seed*1.7,o.alive?we(.72+(o.speed-260)/420,.66,1.3):0),s++}const a=[e,t,n];for(let o=0;o<3;o++)this.meshes[o].count=a[o],a[o]>0&&(this.meshes[o].instanceMatrix.needsUpdate=!0,this.instAttrs[o].needsUpdate=!0);this.ionMesh.count=s,s>0&&(this.ionMesh.instanceMatrix.needsUpdate=!0,this.ionAttr.needsUpdate=!0)}}const cT=new Ve(1,.55,.16);function uT(i,e){return new lT(i,e)}lw({createXWing:qw,createDeathStar:MM,createTrench:$3,createTIESquadron:uT}).catch(cw);
