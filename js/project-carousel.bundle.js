(()=>{var ps="183";var Fc=0,bo=1,Oc=2;var Cr=1,Bc=2,On=3,Ui=0,xt=1,ni=2,ri=0,Rr=1,To=2,Eo=3,wo=4,zc=5;var Bn=100,Gc=101,Vc=102,kc=103,Hc=104,Wc=200,Xc=201,jc=202,qc=203,Yc=204,Zc=205,Jc=206,Kc=207,$c=208,Qc=209,eh=210,th=211,ih=212,nh=213,rh=214,Ao=0,Co=1,Ro=2,oa=3,Io=4,Po=5,Lo=6,Do=7,sh=0,ah=1,oh=2,Xt=0,Uo=1,No=2,Fo=3,Oo=4,Bo=5,zo=6,Go=7;var Vo=300,zn=301,$i=302,la=303,ca=304,Ir=306,ms=1e3,Ri=1001,fs=1002,Ut=1003,lh=1004;var Pr=1005;var vt=1006,ha=1007;var Qi=1008;var Ft=1009,ko=1010,Ho=1011,Gn=1012,ua=1013,xi=1014,jt=1015,si=1016,da=1017,pa=1018,Vn=1020,Wo=35902,Xo=35899,ch=1021,hh=1022,qt=1023,Ni=1026,en=1027,jo=1028,ma=1029,kn=1030,qo=1031;var Yo=1033,fa=33776,ga=33777,_a=33778,va=33779,Zo=35840,Jo=35841,Ko=35842,$o=35843,Qo=36196,el=37492,tl=37496,il=37488,nl=37489,rl=37490,sl=37491,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,pl=37815,ml=37816,fl=37817,gl=37818,_l=37819,vl=37820,xl=37821,yl=36492,Ml=36494,Sl=36495,bl=36283,Tl=36284,El=36285,wl=36286;var nr=2300,gs=2301,us=2302,uo=2303,po=2400,mo=2401,fo=2402;var uh=0,dh=1,tn="",pt="srgb",ji="srgb-linear",rr="linear",je="srgb";var Xi=7680;var ph=512,mh=513,fh=514,xa=515,gh=516,_h=517,ya=518,vh=519,go=35044;var Al="300 es",_i=2e3,sr=2001;function lu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xh(){let r=wn("canvas");return r.style.display="block",r}var cc={},An=null;function Cl(...r){let e="THREE."+r.shift();An?An("log",e,...r):console.log(e,...r)}function yh(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function be(...r){let e="THREE."+(r=yh(r)).shift();if(An)An("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Me(...r){let e="THREE."+(r=yh(r)).shift();if(An)An("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ar(...r){let e=r.join(" ");e in cc||(cc[e]=!0,be(...r))}function Mh(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Sh={[Ao]:1,[Ro]:6,[Io]:7,[oa]:5,[Co]:0,[Lo]:2,[Do]:4,[Po]:3},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,Tn=Math.PI/180,Cn=180/Math.PI;function nn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ft[255&r]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[255&e]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[63&t|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[255&i]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function Fe(r,e,t){return Math.max(e,Math.min(t,r))}function _o(r,e){return(r%e+e)%e}function er(r,e,t){return(1-t)*r+t*e}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ma={DEG2RAD:Tn,RAD2DEG:Cn,generateUUID:nn,clamp:Fe,euclideanModulo:_o,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:er,damp:function(r,e,t,i){return er(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(_o(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Tn},radToDeg:function(r){return r*Cn},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),p=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*p,o*l);break;case"YZY":r.set(c*p,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*p,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:St,denormalize:bn},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],p=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(u!==m||c!==p||l!==d||h!==g){let v=c*p+l*d+h*g+u*m;v<0&&(p=-p,d=-d,g=-g,m=-m,v=-v);let f=1-o;if(v<.9995){let _=Math.acos(v),M=Math.sin(_);f=Math.sin(f*_)/M,c=c*f+p*(o=Math.sin(o*_)/M),l=l*f+d*o,h=h*f+g*o,u=u*f+m*o}else{c=c*f+p*o,l=l*f+d*o,h=h*f+g*o,u=u*f+m*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],p=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*p,e[t+1]=c*g+h*p+l*u-o*d,e[t+2]=l*g+h*d+o*p-c*u,e[t+3]=h*g-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),p=c(i/2),d=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new C,uc=new Nt,Re=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],p=i[2],d=i[5],g=i[8],m=n[0],v=n[3],f=n[6],_=n[1],M=n[4],b=n[7],S=n[2],w=n[5],L=n[8];return s[0]=a*m+o*_+c*S,s[3]=a*v+o*M+c*w,s[6]=a*f+o*b+c*L,s[1]=l*m+h*_+u*S,s[4]=l*v+h*M+u*w,s[7]=l*f+h*b+u*L,s[2]=p*m+d*_+g*S,s[5]=p*v+d*M+g*w,s[8]=p*f+d*b+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*s,d=l*s-a*c,g=t*u+i*p+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=u*m,e[1]=(n*l-h*i)*m,e[2]=(o*i-n*a)*m,e[3]=p*m,e[4]=(h*t-n*c)*m,e[5]=(n*s-o*t)*m,e[6]=d*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ga=new Re,dc=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){let r={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===je&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?rr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ji]:{primaries:e,whitePoint:i,transfer:rr,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),r}var ke=cu();function gi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function En(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var un,_s=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{un===void 0&&(un=wn("canvas")),un.width=e.width,un.height=e.height;let n=un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=un}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*gi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*gi(t[i]/255)):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hu=0,Rn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Va(n[a].image)):s.push(Va(n[a]))}else s=Va(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Va(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_s.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var uu=0,ka=new C,bt=class r extends vi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=nn(),this.name="",this.source=new Rn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:be(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=Vo,bt.DEFAULT_ANISOTROPY=1;var $e=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],m=c[2],v=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(g+v)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(d+1)/2,S=(f+1)/2,w=(h+p)/4,L=(u+m)/4,F=(g+v)/4;return M>b&&M>S?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=w/i,s=L/i):b>S?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=w/n,s=F/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=L/s,n=F/s),this.set(i,n,s,t),this}let _=Math.sqrt((v-g)*(v-g)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(u-m)/_,this.z=(p-h)/_,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vs=class extends vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new bt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Rn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends vs{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},or=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xs=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Le=class r{constructor(e,t,i,n,s,a,o,c,l,h,u,p,d,g,m,v){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,u,p,d,g,m,v)}set(e,t,i,n,s,a,o,c,l,h,u,p,d,g,m,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=m,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/dn.setFromMatrixColumn(e,0).length(),s=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=p-m*l,t[9]=-o*c,t[2]=m-p*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,d=c*u,g=l*h,m=l*u;t[0]=p+m*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,d=c*u,g=l*h,m=l*u;t[0]=p-m*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,d=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+m,t[1]=c*u,t[5]=m*l+p,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-p*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=p-m*u}else if(e.order==="XZY"){let p=a*c,d=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+m,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=m*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,pu)}lookAt(e,t,i){let n=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),Mi.crossVectors(i,Et),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),Mi.crossVectors(i,Et)),Mi.normalize(),zr.crossVectors(Et,Mi),n[0]=Mi.x,n[4]=zr.x,n[8]=Et.x,n[1]=Mi.y,n[5]=zr.y,n[9]=Et.y,n[2]=Mi.z,n[6]=zr.z,n[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],p=i[9],d=i[13],g=i[2],m=i[6],v=i[10],f=i[14],_=i[3],M=i[7],b=i[11],S=i[15],w=n[0],L=n[4],F=n[8],R=n[12],z=n[1],k=n[5],O=n[9],H=n[13],B=n[2],V=n[6],X=n[10],j=n[14],le=n[3],_e=n[7],ve=n[11],me=n[15];return s[0]=a*w+o*z+c*B+l*le,s[4]=a*L+o*k+c*V+l*_e,s[8]=a*F+o*O+c*X+l*ve,s[12]=a*R+o*H+c*j+l*me,s[1]=h*w+u*z+p*B+d*le,s[5]=h*L+u*k+p*V+d*_e,s[9]=h*F+u*O+p*X+d*ve,s[13]=h*R+u*H+p*j+d*me,s[2]=g*w+m*z+v*B+f*le,s[6]=g*L+m*k+v*V+f*_e,s[10]=g*F+m*O+v*X+f*ve,s[14]=g*R+m*H+v*j+f*me,s[3]=_*w+M*z+b*B+S*le,s[7]=_*L+M*k+b*V+S*_e,s[11]=_*F+M*O+b*X+S*ve,s[15]=_*R+M*H+b*j+S*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],m=e[7],v=e[11],f=e[15],_=c*d-l*p,M=o*d-l*u,b=o*p-c*u,S=a*d-l*h,w=a*p-c*h,L=a*u-o*h;return t*(m*_-v*M+f*b)-i*(g*_-v*S+f*w)+n*(g*M-m*S+f*L)-s*(g*b-m*w+v*L)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],m=e[13],v=e[14],f=e[15],_=t*o-i*a,M=t*c-n*a,b=t*l-s*a,S=i*c-n*o,w=i*l-s*o,L=n*l-s*c,F=h*m-u*g,R=h*v-p*g,z=h*f-d*g,k=u*v-p*m,O=u*f-d*m,H=p*f-d*v,B=_*H-M*O+b*k+S*z-w*R+L*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/B;return e[0]=(o*H-c*O+l*k)*V,e[1]=(n*O-i*H-s*k)*V,e[2]=(m*L-v*w+f*S)*V,e[3]=(p*w-u*L-d*S)*V,e[4]=(c*z-a*H-l*R)*V,e[5]=(t*H-n*z+s*R)*V,e[6]=(v*b-g*L-f*M)*V,e[7]=(h*L-p*b+d*M)*V,e[8]=(a*O-o*z+l*F)*V,e[9]=(i*z-t*O-s*F)*V,e[10]=(g*w-m*b+f*_)*V,e[11]=(u*b-h*w-d*_)*V,e[12]=(o*R-a*k-c*F)*V,e[13]=(t*k-i*R+n*F)*V,e[14]=(m*M-g*S-v*_)*V,e[15]=(h*S-u*M+p*_)*V,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,p=s*l,d=s*h,g=s*u,m=a*h,v=a*u,f=o*u,_=c*l,M=c*h,b=c*u,S=i.x,w=i.y,L=i.z;return n[0]=(1-(m+f))*S,n[1]=(d+b)*S,n[2]=(g-M)*S,n[3]=0,n[4]=(d-b)*w,n[5]=(1-(p+f))*w,n[6]=(v+_)*w,n[7]=0,n[8]=(g+M)*L,n[9]=(v-_)*L,n[10]=(1-(p+m))*L,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=dn.set(n[0],n[1],n[2]).length(),o=dn.set(n[4],n[5],n[6]).length(),c=dn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Gt.copy(this);let l=1/a,h=1/o,u=1/c;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=u,Gt.elements[9]*=u,Gt.elements[10]*=u,t.setFromRotationMatrix(Gt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-n),p=(t+e)/(t-e),d=(i+n)/(i-n),g,m;if(c)g=s/(a-s),m=a*s/(a-s);else if(o===_i)g=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==sr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),p=-(t+e)/(t-e),d=-(i+n)/(i-n),g,m;if(c)g=1/(a-s),m=a/(a-s);else if(o===_i)g=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==sr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),m=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},dn=new C,Gt=new Le,du=new C(0,0,0),pu=new C(1,1,1),Mi=new C,zr=new C,Et=new C,mc=new Le,fc=new Nt,ii=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],p=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var In=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mu=0,gc=new C,pn=new Nt,hi=new Le,Gr=new C,Zn=new C,fu=new C,gu=new Nt,_c=new C(1,0,0),vc=new C(0,1,0),xc=new C(0,0,1),yc={type:"added"},_u={type:"removed"},mn={type:"childadded",child:null},Ha={type:"childremoved",child:null},Dt=class r extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new ii,i=new Nt,n=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Re}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new In,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Zn,Gr,this.up):hi.lookAt(Gr,Zn,this.up),this.quaternion.setFromRotationMatrix(hi),n&&(hi.extractRotation(n.matrixWorld),pn.setFromRotationMatrix(hi),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Me("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),mn.child=e,this.dispatchEvent(mn),mn.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),mn.child=e,this.dispatchEvent(mn),mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Dt.DEFAULT_UP=new C(0,1,0),Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vu={type:"move"},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,i),f=this._getHandJoint(l,m);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,ke.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ke.workingColorSpace){if(e=_o(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wa(a,s,e+1/3),this.g=Wa(a,s,e),this.b=Wa(a,s,e-1/3)}return ke.colorSpaceToWorking(this,n),this}setStyle(e,t=pt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=bh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ke.workingToColorSpace(gt.copy(this),e),65536*Math.round(Fe(255*gt.r,0,255))+256*Math.round(Fe(255*gt.g,0,255))+Math.round(Fe(255*gt.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(gt.copy(this),t);let i=gt.r,n=gt.g,s=gt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=pt){ke.workingToColorSpace(gt.copy(this),e);let t=gt.r,i=gt.g,n=gt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Vr);let i=er(Si.h,Vr.h,t),n=er(Si.s,Vr.s,t),s=er(Si.l,Vr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new He;He.NAMES=bh;var lr=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vt=new C,ui=new C,Xa=new C,di=new C,fn=new C,gn=new C,Mc=new C,ja=new C,qa=new C,Ya=new C,Za=new $e,Ja=new $e,Ka=new $e,fi=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Vt.subVectors(e,t),n.cross(Vt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Vt.subVectors(n,t),ui.subVectors(i,t),Xa.subVectors(e,t);let a=Vt.dot(Vt),o=Vt.dot(ui),c=Vt.dot(Xa),l=ui.dot(ui),h=ui.dot(Xa),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,di)!==null&&di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return Za.setScalar(0),Ja.setScalar(0),Ka.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Ka.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Za,s.x),a.addScaledVector(Ja,s.y),a.addScaledVector(Ka,s.z),a}static isFrontFacing(e,t,i,n){return Vt.subVectors(i,t),ui.subVectors(e,t),Vt.cross(ui).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),.5*Vt.cross(ui).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;fn.subVectors(n,i),gn.subVectors(s,i),ja.subVectors(e,i);let c=fn.dot(ja),l=gn.dot(ja);if(c<=0&&l<=0)return t.copy(i);qa.subVectors(e,n);let h=fn.dot(qa),u=gn.dot(qa);if(h>=0&&u<=h)return t.copy(n);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(fn,a);Ya.subVectors(e,s);let d=fn.dot(Ya),g=gn.dot(Ya);if(g>=0&&d<=g)return t.copy(s);let m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(gn,o);let v=h*g-d*u;if(v<=0&&u-h>=0&&d-g>=0)return Mc.subVectors(s,n),o=(u-h)/(u-h+(d-g)),t.copy(n).addScaledVector(Mc,o);let f=1/(v+m+p);return a=m*f,o=p*f,t.copy(i).addScaledVector(fn,a).addScaledVector(gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ht=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(s,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Hr.subVectors(this.max,Jn),_n.subVectors(e.a,Jn),vn.subVectors(e.b,Jn),xn.subVectors(e.c,Jn),bi.subVectors(vn,_n),Ti.subVectors(xn,vn),Vi.subVectors(_n,xn);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Vi.z,Vi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Vi.z,0,-Vi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Vi.y,Vi.x,0];return!!$a(t,_n,vn,xn,Hr)&&(t=[1,0,0,0,1,0,0,0,1],!!$a(t,_n,vn,xn,Hr)&&(Wr.crossVectors(bi,Ti),t=[Wr.x,Wr.y,Wr.z],$a(t,_n,vn,xn,Hr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(kt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new C,new C,new C,new C,new C,new C,new C,new C],kt=new C,kr=new Ht,_n=new C,vn=new C,xn=new C,bi=new C,Ti=new C,Vi=new C,Jn=new C,Hr=new C,Wr=new C,ki=new C;function $a(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){ki.fromArray(r,s);let o=n.x*Math.abs(ki.x)+n.y*Math.abs(ki.y)+n.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wp=xu();function xu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var st=new C,Xr=new ne,yu=0,Ct=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=go,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}};var cr=class extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var hr=class extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ye=class extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},Mu=new Ht,Kn=new C,Qa=new C,Wt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);let t=Kn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Kn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add(Qa)),this.expandByPoint(Kn.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Su=0,Lt=new Le,eo=new Dt,yn=new C,wt=new Ht,$n=new Ht,ut=new C,Ye=class r extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1}(e)?hr:cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Re().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,i){return Lt.makeTranslation(e,t,i),this.applyMatrix4(Lt),this}scale(e,t,i){return Lt.makeScale(e,t,i),this.applyMatrix4(Lt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(wt.min,$n.min),wt.expandByPoint(ut),ut.addVectors(wt.max,$n.max),wt.expandByPoint(ut)):(wt.expandByPoint($n.min),wt.expandByPoint($n.max))}wt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ut.fromBufferAttribute(o,l),c&&(yn.fromBufferAttribute(e,l),ut.add(yn)),n=Math.max(n,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new C,c[F]=new C;let l=new C,h=new C,u=new C,p=new ne,d=new ne,g=new ne,m=new C,v=new C;function f(F,R,z){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,z),p.fromBufferAttribute(s,F),d.fromBufferAttribute(s,R),g.fromBufferAttribute(s,z),h.sub(l),u.sub(l),d.sub(p),g.sub(p);let k=1/(d.x*g.y-g.x*d.y);isFinite(k)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(k),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(k),o[F].add(m),o[R].add(m),o[z].add(m),c[F].add(v),c[R].add(v),c[z].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,R=_.length;F<R;++F){let z=_[F],k=z.start;for(let O=k,H=k+z.count;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new C,b=new C,S=new C,w=new C;function L(F){S.fromBufferAttribute(n,F),w.copy(S);let R=o[F];M.copy(R),M.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(w,R);let z=b.dot(c[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,z)}for(let F=0,R=_.length;F<R;++F){let z=_[F],k=z.start;for(let O=k,H=k+z.count;O<H;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let n=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),m=e.getX(p+1),v=e.getX(p+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)n.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h),d=0,g=0;for(let m=0,v=c.length;m<v;m++){d=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new Ct(p,h,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let p=e(l[h],i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ap=new C;var bu=0,qi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:be(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cp=new C,Rp=new C,Ip=new C,Pp=new ne,Lp=new ne,Dp=new Le,Up=new C,Np=new C,Fp=new C,Op=new ne,Bp=new ne,zp=new ne;var Gp=new C,Vp=new C;var mi=new C,to=new C,jr=new C,Ei=new C,io=new C,qr=new C,no=new C,Ii=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){to.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(to);let s=.5*e.distanceTo(t),a=-this.direction.dot(jr),o=Ei.dot(this.direction),c=-Ei.dot(jr),l=Ei.lengthSq(),h=Math.abs(1-a*a),u,p,d,g;if(h>0)if(u=a*c-o,p=a*o-c,g=s*h,u>=0)if(p>=-g)if(p<=g){let m=1/h;u*=m,p*=m,d=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(to).addScaledVector(jr,p),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),n=mi.dot(mi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,n=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,n=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,n,s){io.subVectors(t,e),qr.subVectors(i,e),no.crossVectors(io,qr);let a,o=this.direction.dot(no);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ei.subVectors(this.origin,e);let c=a*this.direction.dot(qr.crossVectors(Ei,qr));if(c<0)return null;let l=a*this.direction.dot(io.cross(Ei));if(l<0||c+l>o)return null;let h=-a*Ei.dot(no);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sc=new Le,Hi=new Ii,Yr=new Wt,bc=new C,Zr=new C,Jr=new C,Kr=new C,ro=new C,$r=new C,Tc=new C,Qr=new C,mt=class extends Dt{constructor(e=new Ye,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(ro.fromBufferAttribute(u,e),a?$r.addScaledVector(ro,h):$r.addScaledVector(ro.sub(t),h))}t.add($r)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),Yr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Yr,bc)===null||Hi.origin.distanceToSquared(bc)>(e.far-e.near)**2))return;Sc.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Sc),i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Hi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=p.length;g<m;g++){let v=p[g],f=a[v.materialIndex];for(let _=Math.max(v.start,d.start),M=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));_<M;_+=3)n=es(this,f,e,i,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);g<m;g+=3)n=es(this,a,e,i,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let g=0,m=p.length;g<m;g++){let v=p[g],f=a[v.materialIndex];for(let _=Math.max(v.start,d.start),M=Math.min(c.count,Math.min(v.start+v.count,d.start+d.count));_<M;_+=3)n=es(this,f,e,i,l,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let g=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);g<m;g+=3)n=es(this,a,e,i,l,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function es(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,Zr),r.getVertexPosition(c,Jr),r.getVertexPosition(l,Kr);let h=function(u,p,d,g,m,v,f,_){let M;if(M=p.side===1?g.intersectTriangle(f,v,m,!0,_):g.intersectTriangle(m,v,f,p.side===0,_),M===null)return null;Qr.copy(_),Qr.applyMatrix4(u.matrixWorld);let b=d.ray.origin.distanceTo(Qr);return b<d.near||b>d.far?null:{distance:b,point:Qr.clone(),object:u}}(r,e,t,i,Zr,Jr,Kr,Tc);if(h){let u=new C;fi.getBarycoord(Tc,Zr,Jr,Kr,u),n&&(h.uv=fi.getInterpolatedAttribute(n,o,c,l,u,new ne)),s&&(h.uv1=fi.getInterpolatedAttribute(s,o,c,l,u,new ne)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new C,materialIndex:0};fi.getNormal(Zr,Jr,Kr,p.normal),h.face=p,h.barycoord=u}return h}var kp=new C,Hp=new $e,Wp=new $e,Xp=new C,jp=new Le,qp=new C,Yp=new Wt,Zp=new Le,Jp=new Ii;var ys=class extends bt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,u,p){super(null,a,o,c,l,h,n,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kp=new Le,$p=new Le;var Qp=new Le,em=new Le;var tm=new Ht,im=new Le,nm=new mt,rm=new Wt;var so=new C,Tu=new C,Eu=new Re,Qt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=so.subVectors(i,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(so),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Eu.getNormalMatrix(e),n=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Wt,wu=new ne(.5,.5),ts=new C,Zi=class{constructor(e=new Qt,t=new Qt,i=new Qt,n=new Qt,s=new Qt,a=new Qt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],p=s[6],d=s[7],g=s[8],m=s[9],v=s[10],f=s[11],_=s[12],M=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-a,d-h,f-g,S-_).normalize(),n[1].setComponents(l+a,d+h,f+g,S+_).normalize(),n[2].setComponents(l+o,d+u,f+m,S+M).normalize(),n[3].setComponents(l-o,d-u,f-m,S-M).normalize(),i)n[4].setComponents(c,p,v,b).normalize(),n[5].setComponents(l-c,d-p,f-v,S-b).normalize();else if(n[4].setComponents(l-c,d-p,f-v,S-b).normalize(),t===_i)n[5].setComponents(l+c,d+p,f+v,S+b).normalize();else{if(t!==sr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,p,v,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=wu.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ts.x=n.normal.x>0?e.max.x:e.min.x,ts.y=n.normal.y>0?e.max.y:e.min.y,ts.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jt=new Le,Kt=new Zi,Ms=class r{constructor(){this.coordinateSystem=_i}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,n.coordinateSystem,n.reversedDepth),Kt.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,n.coordinateSystem,n.reversedDepth),Kt.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,n.coordinateSystem,n.reversedDepth),Kt.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,n.coordinateSystem,n.reversedDepth),Kt.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,n.coordinateSystem,n.reversedDepth),Kt.containsPoint(e))return!0}return!1}clone(){return new r}};var vo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},sm=new Le,am=new He(1,1,1),om=new Zi,lm=new Ms,cm=new Ht,hm=new Wt,um=new C,dm=new C,pm=new C,mm=new vo,fm=new mt;var gm=new C,_m=new C,vm=new Le,xm=new Ii,ym=new Wt,Mm=new C,Sm=new C;var bm=new C,Tm=new C;var Em=new Le,wm=new Ii,Am=new Wt,Cm=new C;var ur=class extends bt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Pi=class extends bt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Ni&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ss=class extends Pi{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dr=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ji=class r extends Ye{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],p=0,d=0;function g(m,v,f,_,M,b,S,w,L,F,R){let z=b/L,k=S/F,O=b/2,H=S/2,B=w/2,V=L+1,X=F+1,j=0,le=0,_e=new C;for(let ve=0;ve<X;ve++){let me=ve*k-H;for(let ue=0;ue<V;ue++){let te=ue*z-O;_e[m]=te*_,_e[v]=me*M,_e[f]=B,l.push(_e.x,_e.y,_e.z),_e[m]=0,_e[v]=0,_e[f]=w>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(ue/L),u.push(1-ve/F),j+=1}}for(let ve=0;ve<F;ve++)for(let me=0;me<L;me++){let ue=p+me+V*ve,te=p+me+V*(ve+1),re=p+(me+1)+V*(ve+1),se=p+(me+1)+V*ve;c.push(ue,te,se),c.push(te,re,se),le+=6}o.addGroup(d,le,R),d+=le,p+=j}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bs=class r extends Ye{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,g=2*i+s,m=n+1,v=new C,f=new C;for(let _=0;_<=g;_++){let M=0,b=0,S=0,w=0;if(_<=i){let R=_/i,z=R*Math.PI/2;b=-h-e*Math.cos(z),S=e*Math.sin(z),w=-e*Math.cos(z),M=R*u}else if(_<=i+s){let R=(_-i)/s;b=R*t-h,S=e,w=0,M=u+R*p}else{let R=(_-i-s)/i,z=R*Math.PI/2;b=h+e*Math.sin(z),S=e*Math.cos(z),w=e*Math.sin(z),M=u+p+R*u}let L=Math.max(0,Math.min(1,M/d)),F=0;_===0?F=.5/n:_===g&&(F=-.5/n);for(let R=0;R<=n;R++){let z=R/n,k=z*Math.PI*2,O=Math.sin(k),H=Math.cos(k);f.x=-S*H,f.y=b,f.z=S*O,o.push(f.x,f.y,f.z),v.set(-S*H,w,S*O),v.normalize(),c.push(v.x,v.y,v.z),l.push(z+F,L)}if(_>0){let R=(_-1)*m;for(let z=0;z<n;z++){let k=R+z,O=R+z+1,H=_*m+z,B=_*m+z+1;a.push(k,O,H),a.push(O,B,H)}}}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ts=class r extends Ye{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new C,h=new ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*n;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pr=class r extends Ye{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],p=[],d=[],g=0,m=[],v=i/2,f=0;function _(M){let b=g,S=new ne,w=new C,L=0,F=M===!0?e:t,R=M===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,v*R,0),p.push(0,R,0),d.push(.5,.5),g++;let z=g;for(let k=0;k<=n;k++){let O=k/n*c+o,H=Math.cos(O),B=Math.sin(O);w.x=F*B,w.y=v*R,w.z=F*H,u.push(w.x,w.y,w.z),p.push(0,R,0),S.x=.5*H+.5,S.y=.5*B*R+.5,d.push(S.x,S.y),g++}for(let k=0;k<n;k++){let O=b+k,H=z+k;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),L+=3}l.addGroup(f,L,M===!0?1:2),f+=L}(function(){let M=new C,b=new C,S=0,w=(t-e)/i;for(let L=0;L<=s;L++){let F=[],R=L/s,z=R*(t-e)+e;for(let k=0;k<=n;k++){let O=k/n,H=O*c+o,B=Math.sin(H),V=Math.cos(H);b.x=z*B,b.y=-R*i+v,b.z=z*V,u.push(b.x,b.y,b.z),M.set(B,w,V).normalize(),p.push(M.x,M.y,M.z),d.push(O,1-R),F.push(g++)}m.push(F)}for(let L=0;L<n;L++)for(let F=0;F<s;F++){let R=m[F][L],z=m[F+1][L],k=m[F+1][L+1],O=m[F][L+1];(e>0||F!==0)&&(h.push(R,z,O),S+=3),(t>0||F!==s-1)&&(h.push(z,k,O),S+=3)}l.addGroup(f,S,0),f+=S})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Es=class r extends pr{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Li=class r extends Ye{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,g,m,v){let f=v+1,_=[];for(let M=0;M<=f;M++){_[M]=[];let b=d.clone().lerp(m,M/f),S=g.clone().lerp(m,M/f),w=f-M;for(let L=0;L<=w;L++)_[M][L]=L===0&&M===f?b:b.clone().lerp(S,L/w)}for(let M=0;M<f;M++)for(let b=0;b<2*(f-M)-1;b++){let S=Math.floor(b/2);b%2==0?(c(_[M][S+1]),c(_[M+1][S]),c(_[M][S])):(c(_[M][S+1]),c(_[M+1][S+1]),c(_[M+1][S]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,g){let m=3*d;g.x=e[m+0],g.y=e[m+1],g.z=e[m+2]}function h(d,g,m,v){v<0&&d.x===1&&(a[g]=d.x-1),m.x===0&&m.z===0&&(a[g]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}(function(d){let g=new C,m=new C,v=new C;for(let f=0;f<t.length;f+=3)l(t[f+0],g),l(t[f+1],m),l(t[f+2],v),o(g,m,v,d)})(n),function(d){let g=new C;for(let m=0;m<s.length;m+=3)g.x=s[m+0],g.y=s[m+1],g.z=s[m+2],g.normalize().multiplyScalar(d),s[m+0]=g.x,s[m+1]=g.y,s[m+2]=g.z}(i),function(){let d=new C;for(let g=0;g<s.length;g+=3){d.x=s[g+0],d.y=s[g+1],d.z=s[g+2];let m=u(d)/2/Math.PI+.5,v=p(d)/Math.PI+.5;a.push(m,1-v)}(function(){let g=new C,m=new C,v=new C,f=new C,_=new ne,M=new ne,b=new ne;for(let S=0,w=0;S<s.length;S+=9,w+=6){g.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),_.set(a[w+0],a[w+1]),M.set(a[w+2],a[w+3]),b.set(a[w+4],a[w+5]),f.copy(g).add(m).add(v).divideScalar(3);let L=u(f);h(_,w+0,g,L),h(M,w+2,m,L),h(b,w+4,v,L)}})(),function(){for(let g=0;g<a.length;g+=6){let m=a[g+0],v=a[g+2],f=a[g+4],_=Math.max(m,v,f),M=Math.min(m,v,f);_>.9&&M<.1&&(m<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}}()}(),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(s.slice(),3)),this.setAttribute("uv",new ye(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},ws=class r extends Li{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},is=new C,ns=new C,ao=new C,rs=new fi,As=class extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Tn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:m,b:v,c:f}=rs;if(m.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),rs.getNormal(ao),u[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let M=(_+1)%3,b=u[_],S=u[M],w=rs[h[_]],L=rs[h[M]],F=`${b}_${S}`,R=`${S}_${b}`;R in p&&p[R]?(ao.dot(p[R].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(L.x,L.y,L.z)),p[R]=null):F in p||(p[F]={index0:l[_],index1:l[M],normal:ao.clone()})}}for(let g in p)if(p[g]){let{index0:m,index1:v}=p[g];is.fromBufferAttribute(o,m),ns.fromBufferAttribute(o,v),d.push(is.x,is.y,is.z),d.push(ns.x,ns.y,ns.z)}this.setAttribute("position",new ye(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},It=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new ne:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,n=[],s=[],a=[],o=new C,c=new Le;for(let d=0;d<=e;d++){let g=d/e;n[d]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(n[d],s[d])}if(t===!0){let d=Math.acos(Fe(s[0].dot(s[e]),-1,1));d/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ln=class extends It{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cs=class extends Ln{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,d*=h,n(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var ss=new C,oo=new Rl,lo=new Rl,co=new Rl,Rs=class extends It{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(ss.subVectors(n[0],n[1]).add(n[0]),o=ss);let u=n[l%s],p=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(ss.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=ss),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(c),d);m<1e-4&&(m=1),g<1e-4&&(g=m),v<1e-4&&(v=m),oo.initNonuniformCatmullRom(o.x,u.x,p.x,c.x,g,m,v),lo.initNonuniformCatmullRom(o.y,u.y,p.y,c.y,g,m,v),co.initNonuniformCatmullRom(o.z,u.z,p.z,c.z,g,m,v)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(o.x,u.x,p.x,c.x,this.tension),lo.initCatmullRom(o.y,u.y,p.y,c.y,this.tension),co.initCatmullRom(o.z,u.z,p.z,c.z,this.tension));return i.set(oo.calc(h),lo.calc(h),co.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ec(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function tr(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function ir(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var mr=class extends It{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(e,n.x,s.x,a.x,o.x),ir(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Is=class extends It{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(e,n.x,s.x,a.x,o.x),ir(e,n.y,s.y,a.y,o.y),ir(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fr=class extends It{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends It{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends It{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(tr(e,n.x,s.x,a.x),tr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends It{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(tr(e,n.x,s.x,a.x),tr(e,n.y,s.y,a.y),tr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends It{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Ec(o,c.x,l.x,h.x,u.x),Ec(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Ls=Object.freeze({__proto__:null,ArcCurve:Cs,CatmullRomCurve3:Rs,CubicBezierCurve:mr,CubicBezierCurve3:Is,EllipseCurve:Ln,LineCurve:fr,LineCurve3:Ps,QuadraticBezierCurve:gr,QuadraticBezierCurve3:_r,SplineCurve:vr}),Ds=class extends It{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ls[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ls[n.type]().fromJSON(n))}return this}},xr=class extends Ds{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new fr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new gr(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new mr(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new vr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Ln(e,t,i,n,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yr=class extends xr{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new xr().fromJSON(n))}return this}};function Au(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=wc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=function(h,u,p,d){let g=[];for(let m=0,v=u.length;m<v;m++){let f=wc(h,u[m]*d,m<v-1?u[m+1]*d:h.length,d,!1);f===f.next&&(f.steiner=!0),g.push(Nu(f))}g.sort(Lu);for(let m=0;m<g.length;m++)p=Du(g[m],p);return p}(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,u=c;for(let p=t;p<n;p+=t){let d=r[p],g=r[p+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Mr(s,a,t,o,c,l,0),a}function wc(r,e,t,i,n){let s;if(n===function(a,o,c,l){let h=0;for(let u=o,p=c-l;u<c;u+=l)h+=(a[p]-a[u])*(a[u+1]+a[p+1]),p=u;return h}(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Ac(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Ac(a/i|0,r[a],r[a+1],s);return s&&Dn(s,s.next)&&(br(s),s=s.next),s}function Ki(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Dn(i,i.next)&&tt(i.prev,i,i.next)!==0)i=i.next;else{if(br(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Mr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,l,h,u){let p=c;do p.z===0&&(p.z=xo(p.x,p.y,l,h,u)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==c);p.prevZ.nextZ=null,p.prevZ=null,function(d){let g,m=1;do{let v,f=d;d=null;let _=null;for(g=0;f;){g++;let M=f,b=0;for(let w=0;w<m&&(b++,M=M.nextZ,M);w++);let S=m;for(;b>0||S>0&&M;)b!==0&&(S===0||!M||f.z<=M.z)?(v=f,f=f.nextZ,b--):(v=M,M=M.nextZ,S--),_?_.nextZ=v:d=v,v.prevZ=_,_=v;f=M}_.nextZ=null,m*=2}while(g>1)}(p)}(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?Ru(r,i,n,s):Cu(r))e.push(c.i,r.i,l.i),br(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Mr(r=Iu(Ki(r),e),e,t,i,n,s,2):a===2&&Pu(r,e,t,i,n,s):Mr(Ki(r),e,t,i,n,s,1);break}}}function Cu(r){let e=r.prev,t=r,i=r.next;if(tt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),u=Math.min(o,c,l),p=Math.max(n,s,a),d=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&Qn(n,o,s,c,a,l,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ru(r,e,t,i){let n=r.prev,s=r,a=r.next;if(tt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,u=s.y,p=a.y,d=Math.min(o,c,l),g=Math.min(h,u,p),m=Math.max(o,c,l),v=Math.max(h,u,p),f=xo(d,g,e,t,i),_=xo(m,v,e,t,i),M=r.prevZ,b=r.nextZ;for(;M&&M.z>=f&&b&&b.z<=_;){if(M.x>=d&&M.x<=m&&M.y>=g&&M.y<=v&&M!==n&&M!==a&&Qn(o,h,c,u,l,p,M.x,M.y)&&tt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=m&&b.y>=g&&b.y<=v&&b!==n&&b!==a&&Qn(o,h,c,u,l,p,b.x,b.y)&&tt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=f;){if(M.x>=d&&M.x<=m&&M.y>=g&&M.y<=v&&M!==n&&M!==a&&Qn(o,h,c,u,l,p,M.x,M.y)&&tt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=m&&b.y>=g&&b.y<=v&&b!==n&&b!==a&&Qn(o,h,c,u,l,p,b.x,b.y)&&tt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Iu(r,e){let t=r;do{let i=t.prev,n=t.next.next;!Dn(i,n)&&Eh(i,t,t.next,n)&&Sr(i,n)&&Sr(n,i)&&(e.push(i.i,t.i,n.i),br(t),br(t.next),t=r=n),t=t.next}while(t!==r);return Ki(t)}function Pu(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fu(a,o)){let c=wh(a,o);return a=Ki(a,a.next),c=Ki(c,c.next),Mr(a,e,t,i,n,s,0),void Mr(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Lu(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Du(r,e){let t=function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(Dn(n,a))return a;do{if(Dn(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,l=a.x<a.next.x?a:a.next,m===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,p=l.x,d=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=p&&o!==a.x&&Th(c<d?o:h,c,p,d,c<d?h:o,c,a.x,a.y)){let m=Math.abs(c-a.y)/(o-a.x);Sr(a,n)&&(m<g||m===g&&(a.x>l.x||a.x===l.x&&Uu(l,a)))&&(l=a,g=m)}a=a.next}while(a!==u);return l}(r,e);if(!t)return e;let i=wh(t,r);return Ki(i,i.next),Ki(t,t.next)}function Uu(r,e){return tt(r.prev,r,e.prev)<0&&tt(e.next,r,r.next)<0}function xo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Nu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Th(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Qn(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&Th(r,e,t,i,n,s,a,o)}function Fu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Eh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Sr(r,e)&&Sr(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(tt(r.prev,r,e.prev)||tt(r,e.prev,e))||Dn(r,e)&&tt(r.prev,r,r.next)>0&&tt(e.prev,e,e.next)>0)}function tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Dn(r,e){return r.x===e.x&&r.y===e.y}function Eh(r,e,t,i){let n=os(tt(r,e,t)),s=os(tt(r,e,i)),a=os(tt(t,i,r)),o=os(tt(t,i,e));return n!==s&&a!==o||!(n!==0||!as(r,t,e))||!(s!==0||!as(r,i,e))||!(a!==0||!as(t,r,i))||!(o!==0||!as(t,e,i))}function as(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function os(r){return r>0?1:r<0?-1:0}function Sr(r,e){return tt(r.prev,r,r.next)<0?tt(r,e,r.next)>=0&&tt(r,r.prev,e)>=0:tt(r,e,r.prev)<0||tt(r,r.next,e)<0}function wh(r,e){let t=yo(r.i,r.x,r.y),i=yo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ac(r,e,t,i){let n=yo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Mo=class{static triangulate(e,t,i=2){return Au(e,t,i)}},ti=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Cc(e),Rc(i,e);let a=e.length;t.forEach(Cc);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Rc(i,t[c]);let o=Mo.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Cc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Rc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Us=class r extends Ye{constructor(e=new yr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ou,M,b,S,w,L,F=!1;if(f){M=f.getSpacedPoints(h),F=!0,p=!1;let I=!!f.isCatmullRomCurve3&&f.closed;b=f.computeFrenetFrames(h,I),S=new C,w=new C,L=new C}p||(v=0,d=0,g=0,m=0);let R=o.extractPoints(l),z=R.shape,k=R.holes;if(!ti.isClockWise(z)){z=z.reverse();for(let I=0,x=k.length;I<x;I++){let A=k[I];ti.isClockWise(A)&&(k[I]=A.reverse())}}function O(I){let x=10000000000000001e-36,A=I[0];for(let U=1;U<=I.length;U++){let D=U%I.length,Y=I[D],q=Y.x-A.x,G=Y.y-A.y,$=q*q+G*G,K=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(A.x),Math.abs(A.y));$<=x*K*K?(I.splice(D,1),U--):A=Y}}O(z),k.forEach(O);let H=k.length,B=z;for(let I=0;I<H;I++){let x=k[I];z=z.concat(x)}function V(I,x,A){return x||Me("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(x,A)}let X=z.length;function j(I,x,A){let U,D,Y,q=I.x-x.x,G=I.y-x.y,$=A.x-I.x,K=A.y-I.y,ee=q*q+G*G,ie=q*K-G*$;if(Math.abs(ie)>Number.EPSILON){let oe=Math.sqrt(ee),Te=Math.sqrt($*$+K*K),Ue=x.x-G/oe,Xe=x.y+q/oe,Ge=((A.x-K/Te-Ue)*K-(A.y+$/Te-Xe)*$)/(q*K-G*$);U=Ue+q*Ge-I.x,D=Xe+G*Ge-I.y;let pe=U*U+D*D;if(pe<=2)return new ne(U,D);Y=Math.sqrt(pe/2)}else{let oe=!1;q>Number.EPSILON?$>Number.EPSILON&&(oe=!0):q<-Number.EPSILON?$<-Number.EPSILON&&(oe=!0):Math.sign(G)===Math.sign(K)&&(oe=!0),oe?(U=-G,D=q,Y=Math.sqrt(ee)):(U=q,D=G,Y=Math.sqrt(ee/2))}return new ne(U/Y,D/Y)}let le=[];for(let I=0,x=B.length,A=x-1,U=I+1;I<x;I++,A++,U++)A===x&&(A=0),U===x&&(U=0),le[I]=j(B[I],B[A],B[U]);let _e=[],ve,me,ue=le.concat();for(let I=0,x=H;I<x;I++){let A=k[I];ve=[];for(let U=0,D=A.length,Y=D-1,q=U+1;U<D;U++,Y++,q++)Y===D&&(Y=0),q===D&&(q=0),ve[U]=j(A[U],A[Y],A[q]);_e.push(ve),ue=ue.concat(ve)}if(v===0)me=ti.triangulateShape(B,k);else{let I=[],x=[];for(let A=0;A<v;A++){let U=A/v,D=d*Math.cos(U*Math.PI/2),Y=g*Math.sin(U*Math.PI/2)+m;for(let q=0,G=B.length;q<G;q++){let $=V(B[q],le[q],Y);xe($.x,$.y,-D),U===0&&I.push($)}for(let q=0,G=H;q<G;q++){let $=k[q];ve=_e[q];let K=[];for(let ee=0,ie=$.length;ee<ie;ee++){let oe=V($[ee],ve[ee],Y);xe(oe.x,oe.y,-D),U===0&&K.push(oe)}U===0&&x.push(K)}}me=ti.triangulateShape(I,x)}let te=me.length,re=g+m;for(let I=0;I<X;I++){let x=p?V(z[I],ue[I],re):z[I];F?(w.copy(b.normals[0]).multiplyScalar(x.x),S.copy(b.binormals[0]).multiplyScalar(x.y),L.copy(M[0]).add(w).add(S),xe(L.x,L.y,L.z)):xe(x.x,x.y,0)}for(let I=1;I<=h;I++)for(let x=0;x<X;x++){let A=p?V(z[x],ue[x],re):z[x];F?(w.copy(b.normals[I]).multiplyScalar(A.x),S.copy(b.binormals[I]).multiplyScalar(A.y),L.copy(M[I]).add(w).add(S),xe(L.x,L.y,L.z)):xe(A.x,A.y,u/h*I)}for(let I=v-1;I>=0;I--){let x=I/v,A=d*Math.cos(x*Math.PI/2),U=g*Math.sin(x*Math.PI/2)+m;for(let D=0,Y=B.length;D<Y;D++){let q=V(B[D],le[D],U);xe(q.x,q.y,u+A)}for(let D=0,Y=k.length;D<Y;D++){let q=k[D];ve=_e[D];for(let G=0,$=q.length;G<$;G++){let K=V(q[G],ve[G],U);F?xe(K.x,K.y+M[h-1].y,M[h-1].x+A):xe(K.x,K.y,u+A)}}}function se(I,x){let A=I.length;for(;--A>=0;){let U=A,D=A-1;D<0&&(D=I.length-1);for(let Y=0,q=h+2*v;Y<q;Y++){let G=X*Y,$=X*(Y+1);T(x+U+G,x+D+G,x+D+$,x+U+$)}}}function xe(I,x,A){c.push(I),c.push(x),c.push(A)}function we(I,x,A){y(I),y(x),y(A);let U=n.length/3,D=_.generateTopUV(i,n,U-3,U-2,U-1);P(D[0]),P(D[1]),P(D[2])}function T(I,x,A,U){y(I),y(x),y(U),y(x),y(A),y(U);let D=n.length/3,Y=_.generateSideWallUV(i,n,D-6,D-3,D-2,D-1);P(Y[0]),P(Y[1]),P(Y[3]),P(Y[1]),P(Y[2]),P(Y[3])}function y(I){n.push(c[3*I+0]),n.push(c[3*I+1]),n.push(c[3*I+2])}function P(I){s.push(I.x),s.push(I.y)}(function(){let I=n.length/3;if(p){let x=0,A=X*x;for(let U=0;U<te;U++){let D=me[U];we(D[2]+A,D[1]+A,D[0]+A)}x=h+2*v,A=X*x;for(let U=0;U<te;U++){let D=me[U];we(D[0]+A,D[1]+A,D[2]+A)}}else{for(let x=0;x<te;x++){let A=me[x];we(A[2],A[1],A[0])}for(let x=0;x<te;x++){let A=me[x];we(A[0]+X*h,A[1]+X*h,A[2]+X*h)}}i.addGroup(I,n.length/3-I,0)})(),function(){let I=n.length/3,x=0;se(B,x),x+=B.length;for(let A=0,U=k.length;A<U;A++){let D=k[A];se(D,x),x+=D.length}i.addGroup(I,n.length/3-I,1)}()}this.setAttribute("position",new ye(n,3)),this.setAttribute("uv",new ye(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ls[n.type]().fromJSON(n)),new r(i,e.options)}},Ou={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,c),new ne(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],u=e[3*i+2],p=e[3*n],d=e[3*n+1],g=e[3*n+2],m=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-u),new ne(p,1-g),new ne(m,1-f)]:[new ne(o,1-c),new ne(h,1-u),new ne(d,1-g),new ne(v,1-f)]}},Ns=class r extends Li{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Fs=class r extends Ye{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Fe(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,p=new ne,d=new C,g=new C,m=new C,v=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=1*f,d.y=-v,d.z=0*f,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=1*f,d.y=-v,d.z=0*f,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(g)}for(let _=0;_<=t;_++){let M=i+_*h*n,b=Math.sin(M),S=Math.cos(M);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*b,u.y=e[w].y,u.z=e[w].x*S,a.push(u.x,u.y,u.z),p.x=_/t,p.y=w/(e.length-1),o.push(p.x,p.y);let L=c[3*w+0]*b,F=c[3*w+1],R=c[3*w+0]*S;l.push(L,F,R)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let b=M+_*e.length,S=b,w=b+e.length,L=b+e.length+1,F=b+1;s.push(S,w,F),s.push(L,F,w)}this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Os=class r extends Li{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Un=class r extends Ye{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,p=t/c,d=[],g=[],m=[],v=[];for(let f=0;f<h;f++){let _=f*p-a;for(let M=0;M<l;M++){let b=M*u-s;g.push(b,-_,0),m.push(0,0,1),v.push(M/o),v.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){let M=_+l*f,b=_+l*(f+1),S=_+1+l*(f+1),w=_+1+l*f;d.push(M,b,w),d.push(b,S,w)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Bs=class r extends Ye{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],u=e,p=(t-e)/(n=Math.max(1,n)),d=new C,g=new ne;for(let m=0;m<=n;m++){for(let v=0;v<=i;v++){let f=s+v/i*a;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let m=0;m<n;m++){let v=m*(i+1);for(let f=0;f<i;f++){let _=f+v,M=_,b=_+i+1,S=_+i+2,w=_+1;o.push(M,b,w),o.push(b,S,w)}}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zs=class r extends Ye{constructor(e=new yr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=n.length/3,p=h.extractPoints(t),d=p.shape,g=p.holes;ti.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,f=g.length;v<f;v++){let _=g[v];ti.isClockWise(_)===!0&&(g[v]=_.reverse())}let m=ti.triangulateShape(d,g);for(let v=0,f=g.length;v<f;v++){let _=g[v];d=d.concat(_)}for(let v=0,f=d.length;v<f;v++){let _=d[v];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,f=m.length;v<f;v++){let _=m[v],M=_[0]+u,b=_[1]+u,S=_[2]+u;i.push(M,b,S),c+=3}}this.setIndex(i),this.setAttribute("position",new ye(n,3)),this.setAttribute("normal",new ye(s,3)),this.setAttribute("uv",new ye(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Gs=class r extends Ye{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,p=new C,d=[],g=[],m=[],v=[];for(let f=0;f<=i;f++){let _=[],M=f/i,b=0;f===0&&a===0?b=.5/t:f===i&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let w=S/t;u.x=-e*Math.cos(n+w*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(n+w*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),v.push(w+b,1-M),_.push(l++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let M=h[f][_+1],b=h[f][_],S=h[f+1][_],w=h[f+1][_+1];(f!==0||a>0)&&d.push(M,b,w),(f!==i-1||c<Math.PI)&&d.push(b,S,w)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Vs=class r extends Li{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ks=class r extends Ye{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],u=[],p=new C,d=new C,g=new C;for(let m=0;m<=i;m++){let v=a+m/i*o;for(let f=0;f<=n;f++){let _=f/n*s;d.x=(e+t*Math.cos(v))*Math.cos(_),d.y=(e+t*Math.cos(v))*Math.sin(_),d.z=t*Math.sin(v),l.push(d.x,d.y,d.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),g.subVectors(d,p).normalize(),h.push(g.x,g.y,g.z),u.push(f/n),u.push(m/i)}}for(let m=1;m<=i;m++)for(let v=1;v<=n;v++){let f=(n+1)*m+v-1,_=(n+1)*(m-1)+v-1,M=(n+1)*(m-1)+v,b=(n+1)*m+v;c.push(f,_,b),c.push(_,M,b)}this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Hs=class r extends Ye{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],u=new C,p=new C,d=new C,g=new C,m=new C,v=new C,f=new C;for(let M=0;M<=i;++M){let b=M/i*s*Math.PI*2;_(b,s,a,e,d),_(b+.01,s,a,e,g),v.subVectors(g,d),f.addVectors(g,d),m.crossVectors(v,f),f.crossVectors(m,v),m.normalize(),f.normalize();for(let S=0;S<=n;++S){let w=S/n*Math.PI*2,L=-t*Math.cos(w),F=t*Math.sin(w);u.x=d.x+(L*f.x+F*m.x),u.y=d.y+(L*f.y+F*m.y),u.z=d.z+(L*f.z+F*m.z),c.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(M/i),h.push(S/n)}}for(let M=1;M<=i;M++)for(let b=1;b<=n;b++){let S=(n+1)*(M-1)+(b-1),w=(n+1)*M+(b-1),L=(n+1)*M+b,F=(n+1)*(M-1)+b;o.push(S,w,F),o.push(w,L,F)}function _(M,b,S,w,L){let F=Math.cos(M),R=Math.sin(M),z=S/b*M,k=Math.cos(z);L.x=w*(2+k)*.5*F,L.y=w*(2+k)*R*.5,L.z=w*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ws=class r extends Ye{constructor(e=new _r(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new ne,h=new C,u=[],p=[],d=[],g=[];function m(v){h=e.getPointAt(v/t,h);let f=a.normals[v],_=a.binormals[v];for(let M=0;M<=n;M++){let b=M/n*Math.PI*2,S=Math.sin(b),w=-Math.cos(b);c.x=w*f.x+S*_.x,c.y=w*f.y+S*_.y,c.z=w*f.z+S*_.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),function(){for(let v=0;v<=t;v++)for(let f=0;f<=n;f++)l.x=v/t,l.y=f/n,d.push(l.x,l.y)}(),function(){for(let v=1;v<=t;v++)for(let f=1;f<=n;f++){let _=(n+1)*(v-1)+(f-1),M=(n+1)*v+(f-1),b=(n+1)*v+f,S=(n+1)*(v-1)+f;g.push(_,M,S),g.push(M,b,S)}}()})(),this.setIndex(g),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ls[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Xs=class extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],p=u.start;for(let d=p,g=p+u.count;d<g;d+=3)for(let m=0;m<3;m++){let v=o.getX(d+m),f=o.getX(d+(m+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,f),Ic(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ic(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ic(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Rm=Object.freeze({__proto__:null,BoxGeometry:Ji,CapsuleGeometry:bs,CircleGeometry:Ts,ConeGeometry:Es,CylinderGeometry:pr,DodecahedronGeometry:ws,EdgesGeometry:As,ExtrudeGeometry:Us,IcosahedronGeometry:Ns,LatheGeometry:Fs,OctahedronGeometry:Os,PlaneGeometry:Un,PolyhedronGeometry:Li,RingGeometry:Bs,ShapeGeometry:zs,SphereGeometry:Gs,TetrahedronGeometry:Vs,TorusGeometry:ks,TorusKnotGeometry:Hs,TubeGeometry:Ws,WireframeGeometry:Xs});function rn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function yt(r){let e={};for(let t=0;t<r.length;t++){let i=rn(r[t]);for(let n in i)e[n]=i[n]}return e}function Il(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var Ah={clone:rn,merge:yt},Tt=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},js=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qs=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ys=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var Di=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zs=class extends Di{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case mo:s=e,o=2*t-i;break;case fo:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case mo:a=e,c=2*i-t;break;case fo:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(i-t)/(n-t),m=g*g,v=m*g,f=-p*v+2*p*m-p*g,_=(1+p)*v+(-1.5-2*p)*m+(-.5+p)*g+1,M=(-1-d)*v+(1.5+d)*m+.5*g,b=d*v-d*m;for(let S=0;S!==o;++S)s[S]=f*a[h+S]+_*a[l+S]+M*a[c+S]+b*a[u+S];return s}},Js=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*u+a[c+p]*h;return s}},Ks=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},$s=class extends Di{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,p=h.outTangents;if(!u||!p){let m=(i-t)/(n-t),v=1-m;for(let f=0;f!==o;++f)s[f]=a[l+f]*v+a[c+f]*m;return s}let d=2*o,g=e-1;for(let m=0;m!==o;++m){let v=a[l+m],f=a[c+m],_=g*d+2*m,M=p[_],b=p[_+1],S=e*d+2*m,w=u[S],L=u[S+1],F,R,z,k,O,H=(i-t)/(n-t);for(let B=0;B<8;B++){F=H*H,R=F*H,z=1-H,k=z*z,O=k*z;let V=O*t+3*k*H*M+3*z*F*w+R*n-i;if(Math.abs(V)<1e-10)break;let X=3*k*(M-t)+6*z*H*(w-M)+3*F*(n-w);if(Math.abs(X)<1e-10)break;H-=V/X,H=Math.max(0,Math.min(1,H))}s[m]=O*v+3*k*H*b+3*z*F*L+R*f}return s}},At=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $s(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case us:t=this.InterpolantFactoryMethodSmooth;break;case uo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return us;case this.InterpolantFactoryMethodBezier:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Me("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Me("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Me("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Me("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&lu(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Me("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===us,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,u=h-i,p=h+i;for(let d=0;d!==i;++d){let g=t[h+d];if(g!==t[u+d]||g!==t[p+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};At.prototype.ValueTypeName="",At.prototype.TimeBufferType=Float32Array,At.prototype.ValueBufferType=Float32Array,At.prototype.DefaultInterpolation=gs;var Ai=class extends At{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=nr,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};Qs.prototype.ValueTypeName="color";var ea=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};ea.prototype.ValueTypeName="number";var ta=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Tr=class extends At{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion",Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends At{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string",Ci.prototype.ValueBufferType=Array,Ci.prototype.DefaultInterpolation=nr,Ci.prototype.InterpolantFactoryMethodLinear=void 0,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends At{constructor(e,t,i,n){super(e,t,i,n)}};ia.prototype.ValueTypeName="vector";var ds={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Pc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Pc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Pc(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var na=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ch=new na,Nn=class{constructor(e){this.manager=e!==void 0?e:Ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn=new WeakMap,ra=class extends Nn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ds.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Mn.get(a);u===void 0&&(u=[],Mn.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=wn("img");function c(){h(),t&&t(this);let u=Mn.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}Mn.delete(this),s.manager.itemEnd(e)}function l(u){h(),n&&n(u),ds.remove(`image:${e}`);let p=Mn.get(this)||[];for(let d=0;d<p.length;d++){let g=p[d];g.onError&&g.onError(u)}Mn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ds.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Er=class extends Nn{constructor(e){super(e)}load(e,t,i,n){let s=new bt,a=new ra(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}};var Im=new Le,Pm=new C,Lm=new C;var cs=new C,hs=new Nt,$t=new C,Fn=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cs,hs,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,hs,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cs,hs,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,hs,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new C,Lc=new ne,Dc=new ne,_t=class extends Fn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Cn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Tn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Cn*Math.atan(Math.tan(.5*Tn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Tn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wr=class extends Fn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Dm=new Le,Um=new Le,Nm=new Le;var Sn=-90,sa=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new _t(Sn,1,e,t);n.layers=this.layers,this.add(n);let s=new _t(Sn,1,e,t);s.layers=this.layers,this.add(s);let a=new _t(Sn,1,e,t);a.layers=this.layers,this.add(a);let o=new _t(Sn,1,e,t);o.layers=this.layers,this.add(o);let c=new _t(Sn,1,e,t);c.layers=this.layers,this.add(c);let l=new _t(Sn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==sr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},aa=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fm=new C,Om=new Nt,Bm=new C,zm=new C,Gm=new C;var Vm=new C,km=new Nt,Hm=new C,Wm=new C;var Pl="\\[\\]\\.:\\/",Bu=new RegExp("["+Pl+"]","g"),ho="[^"+Pl+"]",zu="[^"+Pl.replace("\\.","")+"]",Gu=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ho)+/(WCOD+)?/.source.replace("WCOD",zu)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ho)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ho)+"$"),Vu=["material","materials","bones","map"],Je=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bu,"")}static parseTrackName(e){let t=Gu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Vu.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void be("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Me("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Me("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Me("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Me("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=class{constructor(r,e,t){let i=t||Je.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xm=new Float32Array(1);var Uc=new Le,Ar=class{constructor(e,t,i=0,n=1/0){this.ray=new Ii(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new In,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Me("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,i=[]){return So(e,this,i,t),i.sort(Nc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)So(e[n],this,i,t);return i.sort(Nc),i}};function Nc(r,e){return r.distance-e.distance}function So(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)So(s[a],e,t,!0)}}var jm=new ne;var qm=new C,Ym=new C,Zm=new C,Jm=new C,Km=new C,$m=new C,Qm=new C;var ef=new C;var tf=new C,nf=new Le,rf=new Le;var sf=new C,af=new He,of=new He;var lf=new C,cf=new C,hf=new C;var uf=new C,df=new Fn;var pf=new Ht;var mf=new C;function Ll(r,e,t,i){let n=function(s){switch(s){case Ft:case ko:return{byteLength:1,components:1};case Gn:case Ho:case si:return{byteLength:2,components:1};case da:case pa:return{byteLength:2,components:4};case xi:case ua:case jt:return{byteLength:4,components:1};case Wo:case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(i);switch(t){case 1021:return r*e;case jo:case ma:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case qt:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ps}})),typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ps);function Kh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ku(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}}(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,p)=>u.start-p.start);let h=0;for(let u=1;u<l.length;u++){let p=l[h],d=l[u];d.start<=p.start+p.count+1?p.count=Math.max(p.count,d.start+d.count-p.start):(++h,l[h]=d)}l.length=h+1;for(let u=0,p=l.length;u<p;u++){let d=l[u];r.bufferSubData(o,d.start*c.BYTES_PER_ELEMENT,c,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
}`,lights_fragment_begin:`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main () {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ce={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},oi={basic:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:yt([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:yt([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:yt([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:yt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:yt([ce.lights,ce.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};oi.physical={uniforms:yt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Sa={r:0,b:0,g:0},sn=new ii,Hu=new Le;function Wu(r,e,t,i,n,s){let a=new He(0),o,c,l=n===!0?0:1,h=null,u=0,p=null;function d(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let f=m.backgroundBlurriness>0;v=e.get(v,f)}return v}function g(m,v){m.getRGB(Sa,Il(r)),t.buffers.color.setClear(Sa.r,Sa.g,Sa.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:function(m){let v=!1,f=d(m);f===null?g(a,l):f&&f.isColor&&(g(f,1),v=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,v){let f=d(v);f&&(f.isCubeTexture||f.mapping===Ir)?(c===void 0&&(c=new mt(new Ji(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:rn(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),sn.copy(v.backgroundRotation),sn.x*=-1,sn.y*=-1,sn.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),c.material.uniforms.envMap.value=f,c.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(sn)),c.material.toneMapped=ke.getTransfer(f.colorSpace)!==je,h===f&&u===f.version&&p===r.toneMapping||(c.material.needsUpdate=!0,h=f,u=f.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new mt(new Un(2,2),new Tt({name:"BackgroundMaterial",uniforms:rn(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=ke.getTransfer(f.colorSpace)!==je,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&u===f.version&&p===r.toneMapping||(o.material.needsUpdate=!0,h=f,u=f.version,p=r.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Xu(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function c(f){return r.deleteVertexArray(f)}function l(f){let _=[],M=[],b=[];for(let S=0;S<t;S++)_[S]=0,M[S]=0,b[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:M,attributeDivisors:b,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,M=f.length;_<M;_++)f[_]=0}function u(f){p(f,0)}function p(f,_){let M=s.newAttributes,b=s.enabledAttributes,S=s.attributeDivisors;M[f]=1,b[f]===0&&(r.enableVertexAttribArray(f),b[f]=1),S[f]!==_&&(r.vertexAttribDivisor(f,_),S[f]=_)}function d(){let f=s.newAttributes,_=s.enabledAttributes;for(let M=0,b=_.length;M<b;M++)_[M]!==f[M]&&(r.disableVertexAttribArray(M),_[M]=0)}function g(f,_,M,b,S,w,L){L===!0?r.vertexAttribIPointer(f,_,M,S,w):r.vertexAttribPointer(f,_,M,b,S,w)}function m(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,_,M,b,S){let w=!1,L=function(F,R,z,k){let O=k.wireframe===!0,H=i[R.id];H===void 0&&(H={},i[R.id]=H);let B=F.isInstancedMesh===!0?F.id:0,V=H[B];V===void 0&&(V={},H[B]=V);let X=V[z.id];X===void 0&&(X={},V[z.id]=X);let j=X[O];return j===void 0&&(j=l(r.createVertexArray()),X[O]=j),j}(f,b,M,_);s!==L&&(s=L,o(s.object)),w=function(F,R,z,k){let O=s.attributes,H=R.attributes,B=0,V=z.getAttributes();for(let X in V)if(V[X].location>=0){let j=O[X],le=H[X];if(le===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;B++}return s.attributesNum!==B||s.index!==k}(f,b,M,S),w&&function(F,R,z,k){let O={},H=R.attributes,B=0,V=z.getAttributes();for(let X in V)if(V[X].location>=0){let j=H[X];j===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let le={};le.attribute=j,j&&j.data&&(le.data=j.data),O[X]=le,B++}s.attributes=O,s.attributesNum=B,s.index=k}(f,b,M,S),S!==null&&e.update(S,r.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,function(F,R,z,k){h();let O=k.attributes,H=z.getAttributes(),B=R.defaultAttributeValues;for(let V in H){let X=H[V];if(X.location>=0){let j=O[V];if(j===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){let le=j.normalized,_e=j.itemSize,ve=e.get(j);if(ve===void 0)continue;let me=ve.buffer,ue=ve.type,te=ve.bytesPerElement,re=ue===r.INT||ue===r.UNSIGNED_INT||j.gpuType===ua;if(j.isInterleavedBufferAttribute){let se=j.data,xe=se.stride,we=j.offset;if(se.isInstancedInterleavedBuffer){for(let T=0;T<X.locationSize;T++)p(X.location+T,se.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let T=0;T<X.locationSize;T++)u(X.location+T);r.bindBuffer(r.ARRAY_BUFFER,me);for(let T=0;T<X.locationSize;T++)g(X.location+T,_e/X.locationSize,ue,le,xe*te,(we+_e/X.locationSize*T)*te,re)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,j.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<X.locationSize;se++)u(X.location+se);r.bindBuffer(r.ARRAY_BUFFER,me);for(let se=0;se<X.locationSize;se++)g(X.location+se,_e/X.locationSize,ue,le,_e*te,_e/X.locationSize*se*te,re)}}else if(B!==void 0){let le=B[V];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(X.location,le);break;case 3:r.vertexAttrib3fv(X.location,le);break;case 4:r.vertexAttrib4fv(X.location,le);break;default:r.vertexAttrib1fv(X.location,le)}}}}d()}(f,_,M,b),S!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let f in i){let _=i[f];for(let M in _){let b=_[M];for(let S in b){let w=b[S];for(let L in w)c(w[L].object),delete w[L];delete b[S]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let _=i[f.id];for(let M in _){let b=_[M];for(let S in b){let w=b[S];for(let L in w)c(w[L].object),delete w[L];delete b[S]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let _ in i){let M=i[_],b=f.isInstancedMesh===!0?f.id:0,S=M[b];if(S!==void 0){for(let w in S){let L=S[w];for(let F in L)c(L[F].object),delete L[F];delete S[w]}delete M[b],Object.keys(M).length===0&&delete i[_]}}},releaseStatesOfProgram:function(f){for(let _ in i){let M=i[_];for(let b in M){let S=M[b];if(S[f.id]===void 0)continue;let w=S[f.id];for(let L in w)c(w[L].object),delete w[L];delete S[f.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function ju(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,i,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)n(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(i,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,i,1)}}}function qu(r,e,t,i){let n;function s(c){if(c==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";c="mediump"}return c==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(be("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let c=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(c){return c===qt||i.convert(c)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(c){let l=c===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(c!==Ft&&i.convert(c)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&c!==jt&&!l)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function Yu(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Qt,o=new Re,c={value:null,needsUpdate:!1};function l(h,u,p,d){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,d!==!0||m===null){let v=p+4*g,f=u.matrixWorldInverse;o.getNormalMatrix(f),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,M=p;_!==g;++_,M+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||n;return n=u,i=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,v=r.get(h);if(!n||d===null||d.length===0||s&&!m)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let f=s?0:i,_=4*f,M=v.clippingState||null;c.value=M,M=l(d,u,_,p);for(let b=0;b!==_;++b)M[b]=t[b];v.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}var Rh=[.125,.215,.35,.446,.526,.582],Lr=20,Dr=new wr,Ih=new He,Dl=null,Ul=0,Nl=0,Fl=!1,Zu=new C,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Zu}=s;Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ul,Nl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Hn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zn||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:si,format:qt,colorSpace:ji,depthBuffer:!1},n=Ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Rh.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);o.push(d);let g=1/d;p>a-4?g=Rh[p-a+4-1]:p===0&&(g=0),c.push(g);let m=1/(d-2),v=-m,f=1+m,_=[v,v,f,v,f,f,v,v,f,f,v,f],M=6,b=6,S=3,w=2,L=1,F=new Float32Array(S*b*M),R=new Float32Array(w*b*M),z=new Float32Array(L*b*M);for(let O=0;O<M;O++){let H=O%3*2/3-1,B=O>2?0:-1,V=[H,B,0,H+2/3,B,0,H+2/3,B+1,0,H,B,0,H+2/3,B+1,0,H,B+1,0];F.set(V,S*b*O),R.set(_,w*b*O);let X=[O,O,O,O,O,O];z.set(X,L*b*O)}let k=new Ye;k.setAttribute("position",new Ct(F,S)),k.setAttribute("uv",new Ct(R,w)),k.setAttribute("faceIndex",new Ct(z,L)),l.push(new mt(k,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(Lr),h=new C(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}(s,e,t),this._ggxMaterial=function(a,o,c){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new mt(new Ye,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,i,n,s){let a=new _t(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Ih),l.toneMapping=Xt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Ji,new Yi({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,d=p.material,g=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Ih),g=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):f===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;Hn(n,f*_,v>2?_:0,_,_),l.setRenderTarget(n),g&&l.render(p,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===zn||e.mapping===$i;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Hn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Dr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:p}=this,d=this._sizeLods[i],g=3*d*(i>p-4?i-p+4:0),m=4*(this._cubeSize-d);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=p-t,Hn(s,g,m,3*d,2*d),n.setRenderTarget(s),n.render(o,Dr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,Hn(e,g,m,3*d,2*d),n.setRenderTarget(e),n.render(o,Dr)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Me("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let u=l.uniforms,p=this._sizeLods[i]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,g=s/d,m=isFinite(s)?1+Math.floor(3*g):Lr;m>Lr&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],f=0;for(let b=0;b<Lr;++b){let S=b/g,w=Math.exp(-S*S/2);v.push(w),b===0?f+=w:b<m&&(f+=2*w)}for(let b=0;b<v.length;b++)v[b]=v[b]/f;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-i;let M=this._sizeLods[n];Hn(t,3*M*(n>_-4?n-_+4:0),4*(this._cubeSize-M),3*M,2*M),c.setRenderTarget(t),c.render(h,Dr)}};function Ph(r,e,t){let i=new Rt(r,e,t);return i.texture.mapping=Ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Lh(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Dh(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ea(){return`

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
	`}var wa=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ur(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ji(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:rn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:ri});s.uniforms.tEquirect.value=t;let a=new mt(n,s),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=vt),new sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Ju(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===la?o.mapping=zn:c===ca&&(o.mapping=$i),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?function(l){if(l&&l.isTexture){let h=l.mapping,u=h===la||h===ca,p=h===zn||h===$i;if(u||p){let d=t.get(l),g=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return i===null&&(i=new Ta(r)),d=u?i.fromEquirectangular(l,d):i.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{let m=l.image;return u&&m&&m.height>0||p&&m&&function(v){let f=0,_=6;for(let M=0;M<_;M++)v[M]!==void 0&&f++;return f===_}(m)?(i===null&&(i=new Ta(r)),d=u?i.fromEquirectangular(l):i.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",a),d.texture):null}}}return l}(o):function(l){if(l&&l.isTexture){let h=l.mapping;if(h===la||h===ca){if(e.has(l))return n(e.get(l).texture,l.mapping);{let u=l.image;if(u&&u.height>0){let p=new wa(u.height);return p.fromEquirectangularTexture(r,l),e.set(l,p),l.addEventListener("dispose",s),n(p.texture,l.mapping)}return null}}}return l}(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Ku(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ar("WebGLRenderer: "+i+" extension not supported."),n}}}function $u(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,p=0;if(u===void 0)return;if(h!==null){let m=h.array;p=h.version;for(let v=0,f=m.length;v<f;v+=3){let _=m[v+0],M=m[v+1],b=m[v+2];l.push(_,M,M,b,b,_)}}else{let m=u.array;p=u.version;for(let v=0,f=m.length/3-1;v<f;v+=3){let _=v+0,M=v+1,b=v+2;l.push(_,M,M,b,b,_)}}let d=new(u.count>=65535?hr:cr)(l,1);d.version=p;let g=s.get(c);g&&e.remove(g),s.set(c,d)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Qu(r,e,t){let i,n,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(i,c,n,o*s,l),t.update(c,i,l))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(i,c,n,o*s),t.update(c,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,n,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<o.length;p++)a(o[p]/s,c[p],h[p]);else{u.multiDrawElementsInstancedWEBGL(i,c,0,n,o,0,h,0,l);let p=0;for(let d=0;d<l;d++)p+=c[d]*h[d];t.update(p,i,1)}}}function ed(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Me("WebGLInfo: Unknown draw mode:",i)}}}}function td(r,e,t){let i=new WeakMap,n=new $e;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;p===!0&&(_=1),d===!0&&(_=2),g===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*b*4*h),w=new or(S,M,b,h);w.type=jt,w.needsUpdate=!0;let L=4*_;for(let R=0;R<h;R++){let z=m[R],k=v[R],O=f[R],H=M*b*4*R;for(let B=0;B<z.count;B++){let V=B*L;p===!0&&(n.fromBufferAttribute(z,B),S[H+V+0]=n.x,S[H+V+1]=n.y,S[H+V+2]=n.z,S[H+V+3]=0),d===!0&&(n.fromBufferAttribute(k,B),S[H+V+4]=n.x,S[H+V+5]=n.y,S[H+V+6]=n.z,S[H+V+7]=0),g===!0&&(n.fromBufferAttribute(O,B),S[H+V+8]=n.x,S[H+V+9]=n.y,S[H+V+10]=n.z,S[H+V+11]=O.itemSize===4?n.w:1)}}u={count:h,texture:w,size:new ne(M,b)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let d=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(r,"morphTargetBaseInfluence",d),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function id(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h},dispose:function(){s=new WeakMap}}}var nd={[Uo]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Fo]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};function rd(r,e,t,i,n){let s=new Rt(e,t,{type:r,depthBuffer:i,stencilBuffer:n}),a=new Rt(e,t,{type:si,depthBuffer:!1,stencilBuffer:!1}),o=new Ye;o.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ye([0,2,0,0,2,0],2));let c=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new mt(o,c),h=new wr(-1,1,1,-1,0,1),u,p=null,d=null,g=!1,m=null,v=[],f=!1;this.setSize=function(_,M){s.setSize(_,M),a.setSize(_,M);for(let b=0;b<v.length;b++){let S=v[b];S.setSize&&S.setSize(_,M)}},this.setEffects=function(_){v=_,f=v.length>0&&v[0].isRenderPass===!0;let M=s.width,b=s.height;for(let S=0;S<v.length;S++){let w=v[S];w.setSize&&w.setSize(M,b)}},this.begin=function(_,M){if(g||_.toneMapping===Xt&&v.length===0)return!1;if(m=M,M!==null){let b=M.width,S=M.height;s.width===b&&s.height===S||this.setSize(b,S)}return f===!1&&_.setRenderTarget(s),u=_.toneMapping,_.toneMapping=Xt,!0},this.hasRenderPass=function(){return f},this.end=function(_,M){_.toneMapping=u,g=!0;let b=s,S=a;for(let w=0;w<v.length;w++){let L=v[w];if(L.enabled!==!1&&(L.render(_,S,b,M),L.needsSwap!==!1)){let F=b;b=S,S=F}}if(p!==_.outputColorSpace||d!==_.toneMapping){p=_.outputColorSpace,d=_.toneMapping,c.defines={},ke.getTransfer(p)===je&&(c.defines.SRGB_TRANSFER="");let w=nd[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(m),_.render(l,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}var $h=new bt,zl=new Pi(1,1),Qh=new or,eu=new xs,tu=new ur,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function Xn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Uh[n];if(s===void 0&&(s=new Float32Array(n),Uh[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ca(r,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function sd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ad(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function od(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function ld(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function cd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Bh.set(i),r.uniformMatrix2fv(this.addr,!1,Bh),lt(t,i)}}function hd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Oh.set(i),r.uniformMatrix3fv(this.addr,!1,Oh),lt(t,i)}}function ud(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Fh.set(i),r.uniformMatrix4fv(this.addr,!1,Fh),lt(t,i)}}function dd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function fd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function gd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _d(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function vd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function xd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function yd(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?ya:xa,s=zl):s=$h,t.setTexture2D(e||s,n)}function Md(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||eu,n)}function Sd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||tu,n)}function bd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Qh,n)}function Td(r,e){r.uniform1fv(this.addr,e)}function Ed(r,e){let t=Xn(e,this.size,2);r.uniform2fv(this.addr,t)}function wd(r,e){let t=Xn(e,this.size,3);r.uniform3fv(this.addr,t)}function Ad(r,e){let t=Xn(e,this.size,4);r.uniform4fv(this.addr,t)}function Cd(r,e){let t=Xn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rd(r,e){let t=Xn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Id(r,e){let t=Xn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pd(r,e){r.uniform1iv(this.addr,e)}function Ld(r,e){r.uniform2iv(this.addr,e)}function Dd(r,e){r.uniform3iv(this.addr,e)}function Ud(r,e){r.uniform4iv(this.addr,e)}function Nd(r,e){r.uniform1uiv(this.addr,e)}function Fd(r,e){r.uniform2uiv(this.addr,e)}function Od(r,e){r.uniform3uiv(this.addr,e)}function Bd(r,e){r.uniform4uiv(this.addr,e)}function zd(r,e,t){let i=this.cache,n=e.length,s=Ca(t,n),a;ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?zl:$h;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function Gd(r,e,t){let i=this.cache,n=e.length,s=Ca(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||eu,s[a])}function Vd(r,e,t){let i=this.cache,n=e.length,s=Ca(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||tu,s[a])}function kd(r,e,t){let i=this.cache,n=e.length,s=Ca(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Qh,s[a])}var Gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return sd;case 35664:return ad;case 35665:return od;case 35666:return ld;case 35674:return cd;case 35675:return hd;case 35676:return ud;case 5124:case 35670:return dd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return fd;case 5125:return gd;case 36294:return _d;case 36295:return vd;case 36296:return xd;case 35678:case 36198:case 36298:case 36306:case 35682:return yd;case 35679:case 36299:case 36307:return Md;case 35680:case 36300:case 36308:case 36293:return Sd;case 36289:case 36303:case 36311:case 36292:return bd}}(t.type)}},Vl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Td;case 35664:return Ed;case 35665:return wd;case 35666:return Ad;case 35674:return Cd;case 35675:return Rd;case 35676:return Id;case 5124:case 35670:return Pd;case 35667:case 35671:return Ld;case 35668:case 35672:return Dd;case 35669:case 35673:return Ud;case 5125:return Nd;case 36294:return Fd;case 36295:return Od;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Vd;case 36289:case 36303:case 36311:case 36292:return kd}}(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function zh(r,e){r.seq.push(e),r.map[e.id]=e}function Hd(r,e,t){let i=r.name,n=i.length;for(Ol.lastIndex=0;;){let s=Ol.exec(i),a=Ol.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){zh(t,l===void 0?new Gl(o,r,e):new Vl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new kl(o),zh(t,h)),t=h}}}var Wn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Hd(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Gh(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Wd=0,Vh=new Re;function kh(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let d=u;d<p;d++){let g=d+1;h.push(`${g===c?">":" "} ${g}: ${l[d]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function Xd(r,e){let t=function(i){ke._getMatrix(Vh,ke.workingColorSpace,i);let n=`mat3( ${Vh.elements.map(s=>s.toFixed(4))} )`;switch(ke.getTransfer(i)){case rr:return[n,"LinearTransferOETF"];case je:return[n,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jd={[Uo]:"Linear",[No]:"Reinhard",[Fo]:"Cineon",[Oo]:"ACESFilmic",[zo]:"AgX",[Go]:"Neutral",[Bo]:"Custom"};function qd(r,e){let t=jd[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ba=new C;function Yd(){return ke.getLuminanceCoefficients(ba),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ba.x.toFixed(4)}, ${ba.y.toFixed(4)}, ${ba.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ur(r){return r!==""}function Hh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(Zd,Kd)}var Jd=new Map;function Kd(r,e){let t=De[e];if(t===void 0){let i=Jd.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Hl(t)}var $d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(r){return r.replace($d,Qd)}function Qd(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function jh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ep={[Cr]:"SHADOWMAP_TYPE_PCF",[On]:"SHADOWMAP_TYPE_VSM"},tp={[zn]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"},ip={[$i]:"ENVMAP_MODE_REFRACTION"},np={[sh]:"ENVMAP_BLENDING_MULTIPLY",[ah]:"ENVMAP_BLENDING_MIX",[oh]:"ENVMAP_BLENDING_ADD"};function rp(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(k){return ep[k.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}(t),l=function(k){return k.envMap===!1?"ENVMAP_TYPE_CUBE":tp[k.envMapMode]||"ENVMAP_TYPE_CUBE"}(t),h=function(k){return k.envMap===!1?"ENVMAP_MODE_REFLECTION":ip[k.envMapMode]||"ENVMAP_MODE_REFLECTION"}(t),u=function(k){return k.envMap===!1?"ENVMAP_BLENDING_NONE":np[k.combine]||"ENVMAP_BLENDING_NONE"}(t),p=function(k){let O=k.envMapCubeUVHeight;if(O===null)return null;let H=Math.log2(O)-2,B=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:B,maxMip:H}}(t),d=function(k){return[k.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",k.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}(t),g=function(k){let O=[];for(let H in k){let B=k[H];B!==!1&&O.push("#define "+H+" "+B)}return O.join(`
`)}(s),m=n.createProgram(),v,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`)):(v=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),f=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xt?"#define TONE_MAPPING":"",t.toneMapping!==Xt?De.tonemapping_pars_fragment:"",t.toneMapping!==Xt?qd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Xd("linearToOutputTexel",t.outputColorSpace),Yd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Hl(a),a=Hh(a,t),a=Wh(a,t),o=Hl(o),o=Hh(o,t),o=Wh(o,t),a=Xh(a),o=Xh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=_+v+a,b=_+f+o,S=Gh(n,n.VERTEX_SHADER,M),w=Gh(n,n.FRAGMENT_SHADER,b);function L(k){if(r.debug.checkShaderErrors){let O=n.getProgramInfoLog(m)||"",H=n.getShaderInfoLog(S)||"",B=n.getShaderInfoLog(w)||"",V=O.trim(),X=H.trim(),j=B.trim(),le=!0,_e=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,S,w);else{let ve=kh(n,S,"vertex"),me=kh(n,w,"fragment");Me("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+ve+`
`+me)}else V!==""?be("WebGLProgram: Program Info Log:",V):X!==""&&j!==""||(_e=!1);_e&&(k.diagnostics={runnable:le,programLog:V,vertexShader:{log:X,prefix:v},fragmentShader:{log:j,prefix:f}})}n.deleteShader(S),n.deleteShader(w),F=new Wn(n,m),R=function(O,H){let B={},V=O.getProgramParameter(H,O.ACTIVE_ATTRIBUTES);for(let X=0;X<V;X++){let j=O.getActiveAttrib(H,X),le=j.name,_e=1;j.type===O.FLOAT_MAT2&&(_e=2),j.type===O.FLOAT_MAT3&&(_e=3),j.type===O.FLOAT_MAT4&&(_e=4),B[le]={type:j.type,location:O.getAttribLocation(H,le),locationSize:_e}}return B}(n,m)}let F,R;n.attachShader(m,S),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return F===void 0&&L(this),F},this.getAttributes=function(){return R===void 0&&L(this),R};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(m,37297)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var sp=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xl(e),t.set(e,i)),i}},Xl=class{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}};function ap(r,e,t,i,n,s){let a=new In,o=new Wl,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,p=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,f,_,M){let b=_.fog,S=M.geometry,w=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,L=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||w,L),R=F&&F.mapping===Ir?F.image.height:null,z=d[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&be("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let k=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,O=k!==void 0?k.length:0,H,B,V,X,j=0;if(S.morphAttributes.position!==void 0&&(j=1),S.morphAttributes.normal!==void 0&&(j=2),S.morphAttributes.color!==void 0&&(j=3),z){let it=oi[z];H=it.vertexShader,B=it.fragmentShader}else H=m.vertexShader,B=m.fragmentShader,o.update(m),V=o.getVertexShaderID(m),X=o.getFragmentShaderID(m);let le=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),ve=M.isInstancedMesh===!0,me=M.isBatchedMesh===!0,ue=!!m.map,te=!!m.matcap,re=!!F,se=!!m.aoMap,xe=!!m.lightMap,we=!!m.bumpMap,T=!!m.normalMap,y=!!m.displacementMap,P=!!m.emissiveMap,I=!!m.metalnessMap,x=!!m.roughnessMap,A=m.anisotropy>0,U=m.clearcoat>0,D=m.dispersion>0,Y=m.iridescence>0,q=m.sheen>0,G=m.transmission>0,$=A&&!!m.anisotropyMap,K=U&&!!m.clearcoatMap,ee=U&&!!m.clearcoatNormalMap,ie=U&&!!m.clearcoatRoughnessMap,oe=Y&&!!m.iridescenceMap,Te=Y&&!!m.iridescenceThicknessMap,Ue=q&&!!m.sheenColorMap,Xe=q&&!!m.sheenRoughnessMap,Ge=!!m.specularMap,pe=!!m.specularColorMap,Ie=!!m.specularIntensityMap,qe=G&&!!m.transmissionMap,ht=G&&!!m.thicknessMap,de=!!m.gradientMap,Pe=!!m.alphaMap,Ne=m.alphaTest>0,ln=!!m.alphaHash,Fi=!!m.extensions,Mt=Xt;m.toneMapped&&(le!==null&&le.isXRRenderTarget!==!0||(Mt=r.toneMapping));let Ze={shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:B,defines:m.defines,customVertexShaderID:V,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:me,batchingColor:me&&M._colorsTexture!==null,instancing:ve,instancingColor:ve&&M.instanceColor!==null,instancingMorph:ve&&M.morphTexture!==null,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ji,alphaToCoverage:!!m.alphaToCoverage,map:ue,matcap:te,envMap:re,envMapMode:re&&F.mapping,envMapCubeUVHeight:R,aoMap:se,lightMap:xe,bumpMap:we,normalMap:T,displacementMap:y,emissiveMap:P,normalMapObjectSpace:T&&m.normalMapType===dh,normalMapTangentSpace:T&&m.normalMapType===uh,metalnessMap:I,roughnessMap:x,anisotropy:A,anisotropyMap:$,clearcoat:U,clearcoatMap:K,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,dispersion:D,iridescence:Y,iridescenceMap:oe,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:Ue,sheenRoughnessMap:Xe,specularMap:Ge,specularColorMap:pe,specularIntensityMap:Ie,transmission:G,transmissionMap:qe,thicknessMap:ht,gradientMap:de,opaque:m.transparent===!1&&m.blending===Rr&&m.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Ne,alphaHash:ln,combine:m.combine,mapUv:ue&&g(m.map.channel),aoMapUv:se&&g(m.aoMap.channel),lightMapUv:xe&&g(m.lightMap.channel),bumpMapUv:we&&g(m.bumpMap.channel),normalMapUv:T&&g(m.normalMap.channel),displacementMapUv:y&&g(m.displacementMap.channel),emissiveMapUv:P&&g(m.emissiveMap.channel),metalnessMapUv:I&&g(m.metalnessMap.channel),roughnessMapUv:x&&g(m.roughnessMap.channel),anisotropyMapUv:$&&g(m.anisotropyMap.channel),clearcoatMapUv:K&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(m.sheenRoughnessMap.channel),specularMapUv:Ge&&g(m.specularMap.channel),specularColorMapUv:pe&&g(m.specularColorMap.channel),specularIntensityMapUv:Ie&&g(m.specularIntensityMap.channel),transmissionMapUv:qe&&g(m.transmissionMap.channel),thicknessMapUv:ht&&g(m.thicknessMap.channel),alphaMapUv:Pe&&g(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(T||A),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!S.attributes.uv&&(ue||Pe),fog:!!b,useFog:m.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||S.attributes.normal===void 0&&T===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:M.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:j,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&f.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ue&&m.map.isVideoTexture===!0&&ke.getTransfer(m.map.colorSpace)===je,decodeVideoTextureEmissive:P&&m.emissiveMap.isVideoTexture===!0&&ke.getTransfer(m.emissiveMap.colorSpace)===je,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ni,flipSided:m.side===xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Fi&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fi&&m.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let f in m.defines)v.push(f),v.push(m.defines[f]);return m.isRawShaderMaterial===!1&&(function(f,_){f.push(_.precision),f.push(_.outputColorSpace),f.push(_.envMapMode),f.push(_.envMapCubeUVHeight),f.push(_.mapUv),f.push(_.alphaMapUv),f.push(_.lightMapUv),f.push(_.aoMapUv),f.push(_.bumpMapUv),f.push(_.normalMapUv),f.push(_.displacementMapUv),f.push(_.emissiveMapUv),f.push(_.metalnessMapUv),f.push(_.roughnessMapUv),f.push(_.anisotropyMapUv),f.push(_.clearcoatMapUv),f.push(_.clearcoatNormalMapUv),f.push(_.clearcoatRoughnessMapUv),f.push(_.iridescenceMapUv),f.push(_.iridescenceThicknessMapUv),f.push(_.sheenColorMapUv),f.push(_.sheenRoughnessMapUv),f.push(_.specularMapUv),f.push(_.specularColorMapUv),f.push(_.specularIntensityMapUv),f.push(_.transmissionMapUv),f.push(_.thicknessMapUv),f.push(_.combine),f.push(_.fogExp2),f.push(_.sizeAttenuation),f.push(_.morphTargetsCount),f.push(_.morphAttributeCount),f.push(_.numDirLights),f.push(_.numPointLights),f.push(_.numSpotLights),f.push(_.numSpotLightMaps),f.push(_.numHemiLights),f.push(_.numRectAreaLights),f.push(_.numDirLightShadows),f.push(_.numPointLightShadows),f.push(_.numSpotLightShadows),f.push(_.numSpotLightShadowsWithMaps),f.push(_.numLightProbes),f.push(_.shadowMapType),f.push(_.toneMapping),f.push(_.numClippingPlanes),f.push(_.numClipIntersection),f.push(_.depthPacking)}(v,m),function(f,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),f.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),f.push(a.mask)}(v,m),v.push(r.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=d[m.type],f;if(v){let _=oi[v];f=Ah.clone(_.uniforms)}else f=m.uniforms;return f},acquireProgram:function(m,v){let f=h.get(v);return f!==void 0?++f.usedTimes:(f=new rp(r,v,m,n),l.push(f),h.set(v,f)),f},releaseProgram:function(m){if(--m.usedTimes===0){let v=l.indexOf(m);l[v]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:l,dispose:function(){o.dispose()}}}function op(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function lp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function qh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yh(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,u,p){let d=r[e];return d===void 0?(d={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:p},r[e]=d):(d.id=o.id,d.object=o,d.geometry=c,d.material=l,d.materialVariant=s(o),d.groupOrder=h,d.renderOrder=o.renderOrder,d.z=u,d.group=p),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,u,p){let d=a(o,c,l,h,u,p);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(o,c,l,h,u,p){let d=a(o,c,l,h,u,p);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c){t.length>1&&t.sort(o||lp),i.length>1&&i.sort(c||qh),n.length>1&&n.sort(c||qh)}}}function cp(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Yh,r.set(e,[n])):t>=i.length?(n=new Yh,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function hp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var up=0;function dp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pp(r){let e=new hp,t=function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let n=new C,s=new Le,a=new Le;return{setup:function(o){let c=0,l=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,p=0,d=0,g=0,m=0,v=0,f=0,_=0,M=0,b=0,S=0;o.sort(dp);for(let L=0,F=o.length;L<F;L++){let R=o[L],z=R.color,k=R.intensity,O=R.distance,H=null;if(R.shadow&&R.shadow.map&&(H=R.shadow.map.texture.format===kn?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=z.r*k,l+=z.g*k,h+=z.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],k);S++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,X=t.get(R);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.directionalShadow[u]=X,i.directionalShadowMap[u]=H,i.directionalShadowMatrix[u]=R.shadow.matrix,v++}i.directional[u]=B,u++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(z).multiplyScalar(k),B.distance=O,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[d]=B;let V=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,V.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[d]=V.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.spotShadow[d]=X,i.spotShadowMap[d]=H,_++}d++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(z).multiplyScalar(k),B.halfWidth.set(.5*R.width,0,0),B.halfHeight.set(0,.5*R.height,0),i.rectArea[g]=B,g++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let V=R.shadow,X=t.get(R);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=R.shadow.matrix,f++}i.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[m]=B,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let w=i.hash;w.directionalLength===u&&w.pointLength===p&&w.spotLength===d&&w.rectAreaLength===g&&w.hemiLength===m&&w.numDirectionalShadows===v&&w.numPointShadows===f&&w.numSpotShadows===_&&w.numSpotMaps===M&&w.numLightProbes===S||(i.directional.length=u,i.spot.length=d,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=_+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=S,w.directionalLength=u,w.pointLength=p,w.spotLength=d,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=v,w.numPointShadows=f,w.numSpotShadows=_,w.numSpotMaps=M,w.numLightProbes=S,i.version=up++)},setupView:function(o,c){let l=0,h=0,u=0,p=0,d=0,g=c.matrixWorldInverse;for(let m=0,v=o.length;m<v;m++){let f=o[m];if(f.isDirectionalLight){let _=i.directional[l];_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),l++}else if(f.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),u++}else if(f.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(f.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let _=i.hemi[d];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(g),d++}}},state:i}}function Zh(r){let e=new pp(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function mp(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Zh(r),e.set(t,[s])):i>=n.length?(s=new Zh(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var fp=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],gp=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Jh=new Le,Nr=new C,Bl=new C;function _p(r,e,t){let i=new Zi,n=new ne,s=new ne,a=new $e,o=new qs,c=new Ys,l={},h=t.maxTextureSize,u={[Ui]:xt,[xt]:Ui,[ni]:ni},p=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new mt(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let f=this.type;function _(w,L){let F=e.update(m);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rt(n.x,n.y,{format:kn,type:si})),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(L,null,F,p,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(L,null,F,d,m,null)}function M(w,L,F,R){let z=null,k=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)z=k;else if(z=F.isPointLight===!0?c:o,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let O=z.uuid,H=L.uuid,B=l[O];B===void 0&&(B={},l[O]=B);let V=B[H];V===void 0&&(V=z.clone(),B[H]=V,L.addEventListener("dispose",S)),z=V}return z.visible=L.visible,z.wireframe=L.wireframe,z.side=R===On?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:u[L.side],z.alphaMap=L.alphaMap,z.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,z.map=L.map,z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.displacementMap=L.displacementMap,z.displacementScale=L.displacementScale,z.displacementBias=L.displacementBias,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,F.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=F),z}function b(w,L,F,R,z){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===On)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);let O=e.update(w),H=w.material;if(Array.isArray(H)){let B=O.groups;for(let V=0,X=B.length;V<X;V++){let j=B[V],le=H[j.materialIndex];if(le&&le.visible){let _e=M(w,le,R,z);w.onBeforeShadow(r,w,L,F,O,_e,j),r.renderBufferDirect(F,null,O,_e,w,j),w.onAfterShadow(r,w,L,F,O,_e,j)}}}else if(H.visible){let B=M(w,H,R,z);w.onBeforeShadow(r,w,L,F,O,B,null),r.renderBufferDirect(F,null,O,B,w,null),w.onAfterShadow(r,w,L,F,O,B,null)}}let k=w.children;for(let O=0,H=k.length;O<H;O++)b(k[O],L,F,R,z)}function S(w){w.target.removeEventListener("dispose",S);for(let L in l){let F=l[L],R=w.target.uuid;R in F&&(F[R].dispose(),delete F[R])}}this.render=function(w,L,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===Bc&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cr);let R=r.getRenderTarget(),z=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==this.type;H&&L.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=w.length;B<V;B++){let X=w[B],j=X.shadow;if(j===void 0){be("WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);let le=j.getFrameExtents();n.multiply(le),s.copy(j.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/le.x),n.x=s.x*le.x,j.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/le.y),n.y=s.y*le.y,j.mapSize.y=s.y));let _e=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=_e,j.map===null||H===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===On){if(X.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Rt(n.x,n.y,{format:kn,type:si,minFilter:vt,magFilter:vt,generateMipmaps:!1}),j.map.texture.name=X.name+".shadowMap",j.map.depthTexture=new Pi(n.x,n.y,jt),j.map.depthTexture.name=X.name+".shadowMapDepth",j.map.depthTexture.format=Ni,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut}else X.isPointLight?(j.map=new wa(n.x),j.map.depthTexture=new Ss(n.x,xi)):(j.map=new Rt(n.x,n.y),j.map.depthTexture=new Pi(n.x,n.y,xi)),j.map.depthTexture.name=X.name+".shadowMap",j.map.depthTexture.format=Ni,this.type===Cr?(j.map.depthTexture.compareFunction=_e?ya:xa,j.map.depthTexture.minFilter=vt,j.map.depthTexture.magFilter=vt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut);j.camera.updateProjectionMatrix()}let ve=j.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ve;me++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,me),r.clear();else{me===0&&(r.setRenderTarget(j.map),r.clear());let ue=j.getViewport(me);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),O.viewport(a)}if(X.isPointLight){let ue=j.camera,te=j.matrix,re=X.distance||ue.far;re!==ue.far&&(ue.far=re,ue.updateProjectionMatrix()),Nr.setFromMatrixPosition(X.matrixWorld),ue.position.copy(Nr),Bl.copy(ue.position),Bl.add(fp[me]),ue.up.copy(gp[me]),ue.lookAt(Bl),ue.updateMatrixWorld(),te.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Jh.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Jh,ue.coordinateSystem,ue.reversedDepth)}else j.updateMatrices(X);i=j.getFrustum(),b(L,F,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===On&&_(j,F),j.needsUpdate=!1}f=this.type,v.needsUpdate=!1,r.setRenderTarget(R,z,k)}}function vp(r,e){let t=new function(){let x=!1,A=new $e,U=null,D=new $e(0,0,0,0);return{setMask:function(Y){U===Y||x||(r.colorMask(Y,Y,Y,Y),U=Y)},setLocked:function(Y){x=Y},setClear:function(Y,q,G,$,K){K===!0&&(Y*=$,q*=$,G*=$),A.set(Y,q,G,$),D.equals(A)===!1&&(r.clearColor(Y,q,G,$),D.copy(A))},reset:function(){x=!1,U=null,D.set(-1,0,0,0)}}},i=new function(){let x=!1,A=!1,U=null,D=null,Y=null;return{setReversed:function(q){if(A!==q){let G=e.get("EXT_clip_control");q?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),A=q;let $=Y;Y=null,this.setClear($)}},getReversed:function(){return A},setTest:function(q){q?re(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(q){U===q||x||(r.depthMask(q),U=q)},setFunc:function(q){if(A&&(q=Sh[q]),D!==q){switch(q){case Ao:r.depthFunc(r.NEVER);break;case Co:r.depthFunc(r.ALWAYS);break;case Ro:r.depthFunc(r.LESS);break;case oa:r.depthFunc(r.LEQUAL);break;case Io:r.depthFunc(r.EQUAL);break;case Po:r.depthFunc(r.GEQUAL);break;case Lo:r.depthFunc(r.GREATER);break;case Do:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}D=q}},setLocked:function(q){x=q},setClear:function(q){Y!==q&&(Y=q,A&&(q=1-q),r.clearDepth(q))},reset:function(){x=!1,U=null,D=null,Y=null,A=!1}}},n=new function(){let x=!1,A=null,U=null,D=null,Y=null,q=null,G=null,$=null,K=null;return{setTest:function(ee){x||(ee?re(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ee){A===ee||x||(r.stencilMask(ee),A=ee)},setFunc:function(ee,ie,oe){U===ee&&D===ie&&Y===oe||(r.stencilFunc(ee,ie,oe),U=ee,D=ie,Y=oe)},setOp:function(ee,ie,oe){q===ee&&G===ie&&$===oe||(r.stencilOp(ee,ie,oe),q=ee,G=ie,$=oe)},setLocked:function(ee){x=ee},setClear:function(ee){K!==ee&&(r.clearStencil(ee),K=ee)},reset:function(){x=!1,A=null,U=null,D=null,Y=null,q=null,G=null,$=null,K=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,p=!1,d=null,g=null,m=null,v=null,f=null,_=null,M=null,b=new He(0,0,0),S=0,w=!1,L=null,F=null,R=null,z=null,k=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,B=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=B>=2);let X=null,j={},le=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),ve=new $e().fromArray(le),me=new $e().fromArray(_e);function ue(x,A,U,D){let Y=new Uint8Array(4),q=r.createTexture();r.bindTexture(x,q),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let G=0;G<U;G++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(A,0,r.RGBA,1,1,D,0,r.RGBA,r.UNSIGNED_BYTE,Y):r.texImage2D(A+G,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Y);return q}let te={};function re(x){o[x]!==!0&&(r.enable(x),o[x]=!0)}function se(x){o[x]!==!1&&(r.disable(x),o[x]=!1)}te[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),re(r.DEPTH_TEST),i.setFunc(oa),y(!1),P(bo),re(r.CULL_FACE),T(ri);let xe={[Bn]:r.FUNC_ADD,[Gc]:r.FUNC_SUBTRACT,[Vc]:r.FUNC_REVERSE_SUBTRACT};xe[kc]=r.MIN,xe[Hc]=r.MAX;let we={[Wc]:r.ZERO,[Xc]:r.ONE,[jc]:r.SRC_COLOR,[Yc]:r.SRC_ALPHA,[eh]:r.SRC_ALPHA_SATURATE,[$c]:r.DST_COLOR,[Jc]:r.DST_ALPHA,[qc]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[Qc]:r.ONE_MINUS_DST_COLOR,[Kc]:r.ONE_MINUS_DST_ALPHA,[th]:r.CONSTANT_COLOR,[ih]:r.ONE_MINUS_CONSTANT_COLOR,[nh]:r.CONSTANT_ALPHA,[rh]:r.ONE_MINUS_CONSTANT_ALPHA};function T(x,A,U,D,Y,q,G,$,K,ee){if(x!==ri){if(p===!1&&(re(r.BLEND),p=!0),x===zc)Y=Y||A,q=q||U,G=G||D,A===g&&Y===f||(r.blendEquationSeparate(xe[A],xe[Y]),g=A,f=Y),U===m&&D===v&&q===_&&G===M||(r.blendFuncSeparate(we[U],we[D],we[q],we[G]),m=U,v=D,_=q,M=G),$.equals(b)!==!1&&K===S||(r.blendColor($.r,$.g,$.b,K),b.copy($),S=K),d=x,w=!1;else if(x!==d||ee!==w){if(g===Bn&&f===Bn||(r.blendEquation(r.FUNC_ADD),g=Bn,f=Bn),ee)switch(x){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case To:r.blendFunc(r.ONE,r.ONE);break;case Eo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Me("WebGLState: Invalid blending: ",x)}else switch(x){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case To:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Eo:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wo:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",x)}m=null,v=null,_=null,M=null,b.set(0,0,0),S=0,d=x,w=ee}}else p===!0&&(se(r.BLEND),p=!1)}function y(x){L!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),L=x)}function P(x){x!==Fc?(re(r.CULL_FACE),x!==F&&(x===bo?r.cullFace(r.BACK):x===Oc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),F=x}function I(x,A,U){x?(re(r.POLYGON_OFFSET_FILL),z===A&&k===U||(z=A,k=U,i.getReversed()&&(A=-A),r.polygonOffset(A,U))):se(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:re,disable:se,bindFramebuffer:function(x,A){return c[x]!==A&&(r.bindFramebuffer(x,A),c[x]=A,x===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=A),x===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=A),!0)},drawBuffers:function(x,A){let U=h,D=!1;if(x){U=l.get(A),U===void 0&&(U=[],l.set(A,U));let Y=x.textures;if(U.length!==Y.length||U[0]!==r.COLOR_ATTACHMENT0){for(let q=0,G=Y.length;q<G;q++)U[q]=r.COLOR_ATTACHMENT0+q;U.length=Y.length,D=!0}}else U[0]!==r.BACK&&(U[0]=r.BACK,D=!0);D&&r.drawBuffers(U)},useProgram:function(x){return u!==x&&(r.useProgram(x),u=x,!0)},setBlending:T,setMaterial:function(x,A){x.side===ni?se(r.CULL_FACE):re(r.CULL_FACE);let U=x.side===xt;A&&(U=!U),y(U),x.blending===Rr&&x.transparent===!1?T(ri):T(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let D=x.stencilWrite;n.setTest(D),D&&(n.setMask(x.stencilWriteMask),n.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),n.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),I(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:y,setCullFace:P,setLineWidth:function(x){x!==R&&(H&&r.lineWidth(x),R=x)},setPolygonOffset:I,setScissorTest:function(x){x?re(r.SCISSOR_TEST):se(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+O-1),X!==x&&(r.activeTexture(x),X=x)},bindTexture:function(x,A,U){U===void 0&&(U=X===null?r.TEXTURE0+O-1:X);let D=j[U];D===void 0&&(D={type:void 0,texture:void 0},j[U]=D),D.type===x&&D.texture===A||(X!==U&&(r.activeTexture(U),X=U),r.bindTexture(x,A||te[x]),D.type=x,D.texture=A)},unbindTexture:function(){let x=j[X];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(x){Me("WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(x){Me("WebGLState:",x)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(x){Me("WebGLState:",x)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(x){Me("WebGLState:",x)}},updateUBOMapping:function(x,A){let U=a.get(A);U===void 0&&(U=new WeakMap,a.set(A,U));let D=U.get(x);D===void 0&&(D=r.getUniformBlockIndex(A,x.name),U.set(x,D))},uniformBlockBinding:function(x,A){let U=a.get(A).get(x);s.get(A)!==U&&(r.uniformBlockBinding(A,U,x.__bindingPointIndex),s.set(A,U))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(x){Me("WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(x){Me("WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(x){Me("WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(x){Me("WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(x){Me("WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(x){Me("WebGLState:",x)}},scissor:function(x){ve.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ve.copy(x))},viewport:function(x){me.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),me.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},X=null,j={},c={},l=new WeakMap,h=[],u=null,p=!1,d=null,g=null,m=null,v=null,f=null,_=null,M=null,b=new He(0,0,0),S=0,w=!1,L=null,F=null,R=null,z=null,k=null,ve.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function xp(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):wn("canvas")}function m(T,y,P){let I=1,x=we(T);if((x.width>P||x.height>P)&&(I=P/Math.max(x.width,x.height)),I<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let A=Math.floor(I*x.width),U=Math.floor(I*x.height);u===void 0&&(u=g(A,U));let D=y?g(A,U):u;return D.width=A,D.height=U,D.getContext("2d").drawImage(T,0,0,A,U),be("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+A+"x"+U+")."),D}return"data"in T&&be("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),T}return T}function v(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(T,y,P,I,x=!1){if(T!==null){if(r[T]!==void 0)return r[T];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let A=y;if(y===r.RED&&(P===r.FLOAT&&(A=r.R32F),P===r.HALF_FLOAT&&(A=r.R16F),P===r.UNSIGNED_BYTE&&(A=r.R8)),y===r.RED_INTEGER&&(P===r.UNSIGNED_BYTE&&(A=r.R8UI),P===r.UNSIGNED_SHORT&&(A=r.R16UI),P===r.UNSIGNED_INT&&(A=r.R32UI),P===r.BYTE&&(A=r.R8I),P===r.SHORT&&(A=r.R16I),P===r.INT&&(A=r.R32I)),y===r.RG&&(P===r.FLOAT&&(A=r.RG32F),P===r.HALF_FLOAT&&(A=r.RG16F),P===r.UNSIGNED_BYTE&&(A=r.RG8)),y===r.RG_INTEGER&&(P===r.UNSIGNED_BYTE&&(A=r.RG8UI),P===r.UNSIGNED_SHORT&&(A=r.RG16UI),P===r.UNSIGNED_INT&&(A=r.RG32UI),P===r.BYTE&&(A=r.RG8I),P===r.SHORT&&(A=r.RG16I),P===r.INT&&(A=r.RG32I)),y===r.RGB_INTEGER&&(P===r.UNSIGNED_BYTE&&(A=r.RGB8UI),P===r.UNSIGNED_SHORT&&(A=r.RGB16UI),P===r.UNSIGNED_INT&&(A=r.RGB32UI),P===r.BYTE&&(A=r.RGB8I),P===r.SHORT&&(A=r.RGB16I),P===r.INT&&(A=r.RGB32I)),y===r.RGBA_INTEGER&&(P===r.UNSIGNED_BYTE&&(A=r.RGBA8UI),P===r.UNSIGNED_SHORT&&(A=r.RGBA16UI),P===r.UNSIGNED_INT&&(A=r.RGBA32UI),P===r.BYTE&&(A=r.RGBA8I),P===r.SHORT&&(A=r.RGBA16I),P===r.INT&&(A=r.RGBA32I)),y===r.RGB&&(P===r.UNSIGNED_INT_5_9_9_9_REV&&(A=r.RGB9_E5),P===r.UNSIGNED_INT_10F_11F_11F_REV&&(A=r.R11F_G11F_B10F)),y===r.RGBA){let U=x?rr:ke.getTransfer(I);P===r.FLOAT&&(A=r.RGBA32F),P===r.HALF_FLOAT&&(A=r.RGBA16F),P===r.UNSIGNED_BYTE&&(A=U===je?r.SRGB8_ALPHA8:r.RGBA8),P===r.UNSIGNED_SHORT_4_4_4_4&&(A=r.RGBA4),P===r.UNSIGNED_SHORT_5_5_5_1&&(A=r.RGB5_A1)}return A!==r.R16F&&A!==r.R32F&&A!==r.RG16F&&A!==r.RG32F&&A!==r.RGBA16F&&A!==r.RGBA32F||e.get("EXT_color_buffer_float"),A}function b(T,y){let P;return T?y===null||y===xi||y===Vn?P=r.DEPTH24_STENCIL8:y===jt?P=r.DEPTH32F_STENCIL8:y===Gn&&(P=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===Vn?P=r.DEPTH_COMPONENT24:y===jt?P=r.DEPTH_COMPONENT32F:y===Gn&&(P=r.DEPTH_COMPONENT16),P}function S(T,y){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==vt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){let y=T.target;y.removeEventListener("dispose",w),function(P){let I=i.get(P);if(I.__webglInit===void 0)return;let x=P.source,A=p.get(x);if(A){let U=A[I.__cacheKey];U.usedTimes--,U.usedTimes===0&&F(P),Object.keys(A).length===0&&p.delete(x)}i.remove(P)}(y),y.isVideoTexture&&h.delete(y)}function L(T){let y=T.target;y.removeEventListener("dispose",L),function(P){let I=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(I.__webglFramebuffer[A]))for(let U=0;U<I.__webglFramebuffer[A].length;U++)r.deleteFramebuffer(I.__webglFramebuffer[A][U]);else r.deleteFramebuffer(I.__webglFramebuffer[A]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[A])}else{if(Array.isArray(I.__webglFramebuffer))for(let A=0;A<I.__webglFramebuffer.length;A++)r.deleteFramebuffer(I.__webglFramebuffer[A]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let A=0;A<I.__webglColorRenderbuffer.length;A++)I.__webglColorRenderbuffer[A]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[A]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let x=P.textures;for(let A=0,U=x.length;A<U;A++){let D=i.get(x[A]);D.__webglTexture&&(r.deleteTexture(D.__webglTexture),a.memory.textures--),i.remove(x[A])}i.remove(P)}(y)}function F(T){let y=i.get(T);r.deleteTexture(y.__webglTexture);let P=T.source;delete p.get(P)[y.__cacheKey],a.memory.textures--}let R=0;function z(T,y){let P=i.get(T);if(T.isVideoTexture&&function(I){let x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let I=T.image;if(I===null)be("WebGLRenderer: Texture marked for update but no image data found.");else{if(I.complete!==!1)return void j(P,T,y);be("WebGLRenderer: Texture marked for update but image is incomplete")}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,P.__webglTexture,r.TEXTURE0+y)}let k={[ms]:r.REPEAT,[Ri]:r.CLAMP_TO_EDGE,[fs]:r.MIRRORED_REPEAT},O={[Ut]:r.NEAREST,[lh]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[vt]:r.LINEAR,[ha]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},H={[ph]:r.NEVER,[vh]:r.ALWAYS,[mh]:r.LESS,[xa]:r.LEQUAL,[fh]:r.EQUAL,[ya]:r.GEQUAL,[gh]:r.GREATER,[_h]:r.NOTEQUAL};function B(T,y){if(y.type!==jt||e.has("OES_texture_float_linear")!==!1||y.magFilter!==vt&&y.magFilter!==ha&&y.magFilter!==Pr&&y.magFilter!==Qi&&y.minFilter!==vt&&y.minFilter!==ha&&y.minFilter!==Pr&&y.minFilter!==Qi||be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,k[y.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,k[y.wrapT]),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,k[y.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,O[y.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,O[y.minFilter]),y.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,H[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Pr&&y.minFilter!==Qi||y.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function V(T,y){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",w));let I=y.source,x=p.get(I);x===void 0&&(x={},p.set(I,x));let A=function(U){let D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.colorSpace),D.join()}(y);if(A!==T.__cacheKey){x[A]===void 0&&(x[A]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,P=!0),x[A].usedTimes++;let U=x[T.__cacheKey];U!==void 0&&(x[T.__cacheKey].usedTimes--,U.usedTimes===0&&F(y)),T.__cacheKey=A,T.__webglTexture=x[A].texture}return P}function X(T,y,P){return Math.floor(Math.floor(T/P)/y)}function j(T,y,P){let I=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(I=r.TEXTURE_3D);let x=V(T,y),A=y.source;t.bindTexture(I,T.__webglTexture,r.TEXTURE0+P);let U=i.get(A);if(A.version!==U.__version||x===!0){t.activeTexture(r.TEXTURE0+P);let D=ke.getPrimaries(ke.workingColorSpace),Y=y.colorSpace===tn?null:ke.getPrimaries(y.colorSpace),q=y.colorSpace===tn||D===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let G=m(y.image,!1,n.maxTextureSize);G=xe(y,G);let $=s.convert(y.format,y.colorSpace),K=s.convert(y.type),ee,ie=M(y.internalFormat,$,K,y.colorSpace,y.isVideoTexture);B(I,y);let oe=y.mipmaps,Te=y.isVideoTexture!==!0,Ue=U.__version===void 0||x===!0,Xe=A.dataReady,Ge=S(y,G);if(y.isDepthTexture)ie=b(y.format===en,y.type),Ue&&(Te?t.texStorage2D(r.TEXTURE_2D,1,ie,G.width,G.height):t.texImage2D(r.TEXTURE_2D,0,ie,G.width,G.height,0,$,K,null));else if(y.isDataTexture)if(oe.length>0){Te&&Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ie,oe[0].width,oe[0].height);for(let pe=0,Ie=oe.length;pe<Ie;pe++)ee=oe[pe],Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ee.width,ee.height,$,K,ee.data):t.texImage2D(r.TEXTURE_2D,pe,ie,ee.width,ee.height,0,$,K,ee.data);y.generateMipmaps=!1}else Te?(Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ie,G.width,G.height),Xe&&function(pe,Ie,qe,ht){let de=pe.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie.width,Ie.height,qe,ht,Ie.data);else{de.sort((Mt,Ze)=>Mt.start-Ze.start);let Pe=0;for(let Mt=1;Mt<de.length;Mt++){let Ze=de[Pe],it=de[Mt],li=Ze.start+Ze.count,N=X(it.start,Ie.width,4),Oi=X(Ze.start,Ie.width,4);it.start<=li+1&&N===Oi&&X(it.start+it.count-1,Ie.width,4)===N?Ze.count=Math.max(Ze.count,it.start+it.count-Ze.start):(++Pe,de[Pe]=it)}de.length=Pe+1;let Ne=r.getParameter(r.UNPACK_ROW_LENGTH),ln=r.getParameter(r.UNPACK_SKIP_PIXELS),Fi=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Ie.width);for(let Mt=0,Ze=de.length;Mt<Ze;Mt++){let it=de[Mt],li=Math.floor(it.start/4),N=Math.ceil(it.count/4),Oi=li%Ie.width,jn=Math.floor(li/Ie.width),nt=N;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oi),r.pixelStorei(r.UNPACK_SKIP_ROWS,jn),t.texSubImage2D(r.TEXTURE_2D,0,Oi,jn,nt,1,qe,ht,Ie.data)}pe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ln),r.pixelStorei(r.UNPACK_SKIP_ROWS,Fi)}}(y,G,$,K)):t.texImage2D(r.TEXTURE_2D,0,ie,G.width,G.height,0,$,K,G.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Te&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,ie,oe[0].width,oe[0].height,G.depth);for(let pe=0,Ie=oe.length;pe<Ie;pe++)if(ee=oe[pe],y.format!==qt)if($!==null)if(Te){if(Xe)if(y.layerUpdates.size>0){let qe=Ll(ee.width,ee.height,y.format,y.type);for(let ht of y.layerUpdates){let de=ee.data.subarray(ht*qe/ee.data.BYTES_PER_ELEMENT,(ht+1)*qe/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,ht,ee.width,ee.height,1,$,de)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,G.depth,$,ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,ie,ee.width,ee.height,G.depth,0,ee.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,G.depth,$,K,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,ie,ee.width,ee.height,G.depth,0,$,K,ee.data)}else{Te&&Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ie,oe[0].width,oe[0].height);for(let pe=0,Ie=oe.length;pe<Ie;pe++)ee=oe[pe],y.format!==qt?$!==null?Te?Xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ee.width,ee.height,$,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,ie,ee.width,ee.height,0,ee.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ee.width,ee.height,$,K,ee.data):t.texImage2D(r.TEXTURE_2D,pe,ie,ee.width,ee.height,0,$,K,ee.data)}else if(y.isDataArrayTexture)if(Te){if(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,ie,G.width,G.height,G.depth),Xe)if(y.layerUpdates.size>0){let pe=Ll(G.width,G.height,y.format,y.type);for(let Ie of y.layerUpdates){let qe=G.data.subarray(Ie*pe/G.data.BYTES_PER_ELEMENT,(Ie+1)*pe/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,G.width,G.height,1,$,K,qe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,$,K,G.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ie,G.width,G.height,G.depth,0,$,K,G.data);else if(y.isData3DTexture)Te?(Ue&&t.texStorage3D(r.TEXTURE_3D,Ge,ie,G.width,G.height,G.depth),Xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,$,K,G.data)):t.texImage3D(r.TEXTURE_3D,0,ie,G.width,G.height,G.depth,0,$,K,G.data);else if(y.isFramebufferTexture){if(Ue)if(Te)t.texStorage2D(r.TEXTURE_2D,Ge,ie,G.width,G.height);else{let pe=G.width,Ie=G.height;for(let qe=0;qe<Ge;qe++)t.texImage2D(r.TEXTURE_2D,qe,ie,pe,Ie,0,$,K,null),pe>>=1,Ie>>=1}}else if(oe.length>0){if(Te&&Ue){let pe=we(oe[0]);t.texStorage2D(r.TEXTURE_2D,Ge,ie,pe.width,pe.height)}for(let pe=0,Ie=oe.length;pe<Ie;pe++)ee=oe[pe],Te?Xe&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,$,K,ee):t.texImage2D(r.TEXTURE_2D,pe,ie,$,K,ee);y.generateMipmaps=!1}else if(Te){if(Ue){let pe=we(G);t.texStorage2D(r.TEXTURE_2D,Ge,ie,pe.width,pe.height)}Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$,K,G)}else t.texImage2D(r.TEXTURE_2D,0,ie,$,K,G);v(y)&&f(I),U.__version=A.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function le(T,y,P,I,x,A){let U=s.convert(P.format,P.colorSpace),D=s.convert(P.type),Y=M(P.internalFormat,U,D,P.colorSpace),q=i.get(y),G=i.get(P);if(G.__renderTarget=y,!q.__hasExternalTextures){let $=Math.max(1,y.width>>A),K=Math.max(1,y.height>>A);x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?t.texImage3D(x,A,Y,$,K,y.depth,0,U,D,null):t.texImage2D(x,A,Y,$,K,0,U,D,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),se(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,x,G.__webglTexture,0,re(y)):(x===r.TEXTURE_2D||x>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,x,G.__webglTexture,A),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(T,y,P){if(r.bindRenderbuffer(r.RENDERBUFFER,T),y.depthBuffer){let I=y.depthTexture,x=I&&I.isDepthTexture?I.type:null,A=b(y.stencilBuffer,x),U=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;se(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re(y),A,y.width,y.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,re(y),A,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,A,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,T)}else{let I=y.textures;for(let x=0;x<I.length;x++){let A=I[x],U=s.convert(A.format,A.colorSpace),D=s.convert(A.type),Y=M(A.internalFormat,U,D,A.colorSpace);se(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re(y),Y,y.width,y.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,re(y),Y,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Y,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(T,y,P){let I=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,T),!y.depthTexture||!y.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(y.depthTexture);if(x.__renderTarget=y,x.__webglTexture&&y.depthTexture.image.width===y.width&&y.depthTexture.image.height===y.height||(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I){if(x.__webglInit===void 0&&(x.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),x.__webglTexture===void 0){x.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture),B(r.TEXTURE_CUBE_MAP,y.depthTexture);let q=s.convert(y.depthTexture.format),G=s.convert(y.depthTexture.type),$;y.depthTexture.format===Ni?$=r.DEPTH_COMPONENT24:y.depthTexture.format===en&&($=r.DEPTH24_STENCIL8);for(let K=0;K<6;K++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$,y.width,y.height,0,q,G,null)}}else z(y.depthTexture,0);let A=x.__webglTexture,U=re(y),D=I?r.TEXTURE_CUBE_MAP_POSITIVE_X+P:r.TEXTURE_2D,Y=y.depthTexture.format===en?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ni)se(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,D,A,0,U):r.framebufferTexture2D(r.FRAMEBUFFER,Y,D,A,0);else{if(y.depthTexture.format!==en)throw new Error("Unknown depthTexture format");se(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,D,A,0,U):r.framebufferTexture2D(r.FRAMEBUFFER,Y,D,A,0)}}function me(T){let y=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let I=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),I){let x=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,I.removeEventListener("dispose",x)};I.addEventListener("dispose",x),y.__depthDisposeCallback=x}y.__boundDepthTexture=I}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let I=0;I<6;I++)ve(y.__webglFramebuffer[I],T,I);else{let I=T.texture.mipmaps;I&&I.length>0?ve(y.__webglFramebuffer[0],T,0):ve(y.__webglFramebuffer,T,0)}else if(P){y.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[I]),y.__webglDepthbuffer[I]===void 0)y.__webglDepthbuffer[I]=r.createRenderbuffer(),_e(y.__webglDepthbuffer[I],T,!1);else{let x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=y.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,A)}}else{let I=T.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),_e(y.__webglDepthbuffer,T,!1);else{let x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,A)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ue=[],te=[];function re(T){return Math.min(n.maxSamples,T.samples)}function se(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xe(T,y){let P=T.colorSpace,I=T.format,x=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==ji&&P!==tn&&(ke.getTransfer(P)===je?I===qt&&x===Ft||be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",P)),y}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=function(){let T=R;return T>=n.maxTextures&&be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),R+=1,T},this.resetTextureUnits=function(){R=0},this.setTexture2D=z,this.setTexture2DArray=function(T,y){let P=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version?j(P,T,y):(T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,P.__webglTexture,r.TEXTURE0+y))},this.setTexture3D=function(T,y){let P=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version?j(P,T,y):t.bindTexture(r.TEXTURE_3D,P.__webglTexture,r.TEXTURE0+y)},this.setTextureCube=function(T,y){let P=i.get(T);T.isCubeDepthTexture!==!0&&T.version>0&&P.__version!==T.version?function(I,x,A){if(x.image.length!==6)return;let U=V(I,x),D=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+A);let Y=i.get(D);if(D.version!==Y.__version||U===!0){t.activeTexture(r.TEXTURE0+A);let q=ke.getPrimaries(ke.workingColorSpace),G=x.colorSpace===tn?null:ke.getPrimaries(x.colorSpace),$=x.colorSpace===tn||q===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let K=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let de=0;de<6;de++)ie[de]=K||ee?ee?x.image[de].image:x.image[de]:m(x.image[de],!0,n.maxCubemapSize),ie[de]=xe(x,ie[de]);let oe=ie[0],Te=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type),Xe=M(x.internalFormat,Te,Ue,x.colorSpace),Ge=x.isVideoTexture!==!0,pe=Y.__version===void 0||U===!0,Ie=D.dataReady,qe,ht=S(x,oe);if(B(r.TEXTURE_CUBE_MAP,x),K){Ge&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Xe,oe.width,oe.height);for(let de=0;de<6;de++){qe=ie[de].mipmaps;for(let Pe=0;Pe<qe.length;Pe++){let Ne=qe[Pe];x.format!==qt?Te!==null?Ge?Ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ne.width,Ne.height,Te,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,Xe,Ne.width,Ne.height,0,Ne.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ne.width,Ne.height,Te,Ue,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,Xe,Ne.width,Ne.height,0,Te,Ue,Ne.data)}}}else{if(qe=x.mipmaps,Ge&&pe){qe.length>0&&ht++;let de=we(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Xe,de.width,de.height)}for(let de=0;de<6;de++)if(ee){Ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ie[de].width,ie[de].height,Te,Ue,ie[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,ie[de].width,ie[de].height,0,Te,Ue,ie[de].data);for(let Pe=0;Pe<qe.length;Pe++){let Ne=qe[Pe].image[de].image;Ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Ne.width,Ne.height,Te,Ue,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,Xe,Ne.width,Ne.height,0,Te,Ue,Ne.data)}}else{Ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te,Ue,ie[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,Te,Ue,ie[de]);for(let Pe=0;Pe<qe.length;Pe++){let Ne=qe[Pe];Ge?Ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Te,Ue,Ne.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,Xe,Te,Ue,Ne.image[de])}}}v(x)&&f(r.TEXTURE_CUBE_MAP),Y.__version=D.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}(P,T,y):t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+y)},this.rebindTextures=function(T,y,P){let I=i.get(T);y!==void 0&&le(I.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),P!==void 0&&me(T)},this.setupRenderTarget=function(T){let y=T.texture,P=i.get(T),I=i.get(y);T.addEventListener("dispose",L);let x=T.textures,A=T.isWebGLCubeRenderTarget===!0,U=x.length>1;if(U||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=y.version,a.memory.textures++),A){P.__webglFramebuffer=[];for(let D=0;D<6;D++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[D]=[];for(let Y=0;Y<y.mipmaps.length;Y++)P.__webglFramebuffer[D][Y]=r.createFramebuffer()}else P.__webglFramebuffer[D]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let D=0;D<y.mipmaps.length;D++)P.__webglFramebuffer[D]=r.createFramebuffer()}else P.__webglFramebuffer=r.createFramebuffer();if(U)for(let D=0,Y=x.length;D<Y;D++){let q=i.get(x[D]);q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&se(T)===!1){P.__webglMultisampledFramebuffer=r.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let D=0;D<x.length;D++){let Y=x[D];P.__webglColorRenderbuffer[D]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,P.__webglColorRenderbuffer[D]);let q=s.convert(Y.format,Y.colorSpace),G=s.convert(Y.type),$=M(Y.internalFormat,q,G,Y.colorSpace,T.isXRRenderTarget===!0),K=re(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,P.__webglColorRenderbuffer[D])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),B(r.TEXTURE_CUBE_MAP,y);for(let D=0;D<6;D++)if(y.mipmaps&&y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)le(P.__webglFramebuffer[D][Y],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,Y);else le(P.__webglFramebuffer[D],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);v(y)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let D=0,Y=x.length;D<Y;D++){let q=x[D],G=i.get(q),$=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),B($,q),le(P.__webglFramebuffer,T,q,r.COLOR_ATTACHMENT0+D,$,0),v(q)&&f($)}t.unbindTexture()}else{let D=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(D=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(D,I.__webglTexture),B(D,y),y.mipmaps&&y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)le(P.__webglFramebuffer[Y],T,y,r.COLOR_ATTACHMENT0,D,Y);else le(P.__webglFramebuffer,T,y,r.COLOR_ATTACHMENT0,D,0);v(y)&&f(D),t.unbindTexture()}T.depthBuffer&&me(T)},this.updateRenderTargetMipmap=function(T){let y=T.textures;for(let P=0,I=y.length;P<I;P++){let x=y[P];if(v(x)){let A=_(T),U=i.get(x).__webglTexture;t.bindTexture(A,U),f(A),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(se(T)===!1){let y=T.textures,P=T.width,I=T.height,x=r.COLOR_BUFFER_BIT,A=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=i.get(T),D=y.length>1;if(D)for(let q=0;q<y.length;q++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let Y=T.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let q=0;q<y.length;q++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(x|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(x|=r.STENCIL_BUFFER_BIT)),D){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,U.__webglColorRenderbuffer[q]);let G=i.get(y[q]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,G,0)}r.blitFramebuffer(0,0,P,I,0,0,P,I,x,r.NEAREST),c===!0&&(ue.length=0,te.length=0,ue.push(r.COLOR_ATTACHMENT0+q),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(A),te.push(A),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),D)for(let q=0;q<y.length;q++){t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,U.__webglColorRenderbuffer[q]);let G=i.get(y[q]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,G,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yp(r,e){return{convert:function(t,i=tn){let n,s=ke.getTransfer(i);if(t===Ft)return r.UNSIGNED_BYTE;if(t===da)return r.UNSIGNED_SHORT_4_4_4_4;if(t===pa)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Wo)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Xo)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===ko)return r.BYTE;if(t===Ho)return r.SHORT;if(t===Gn)return r.UNSIGNED_SHORT;if(t===ua)return r.INT;if(t===xi)return r.UNSIGNED_INT;if(t===jt)return r.FLOAT;if(t===si)return r.HALF_FLOAT;if(t===ch)return r.ALPHA;if(t===hh)return r.RGB;if(t===qt)return r.RGBA;if(t===Ni)return r.DEPTH_COMPONENT;if(t===en)return r.DEPTH_STENCIL;if(t===jo)return r.RED;if(t===ma)return r.RED_INTEGER;if(t===kn)return r.RG;if(t===qo)return r.RG_INTEGER;if(t===Yo)return r.RGBA_INTEGER;if(t===fa||t===ga||t===_a||t===va)if(s===je){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===fa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===_a)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===va)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===fa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ga)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===_a)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===va)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Zo||t===Jo||t===Ko||t===$o){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Zo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Jo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ko)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===$o)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Qo||t===el||t===tl||t===il||t===nl||t===rl||t===sl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Qo||t===el)return s===je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===tl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===il)return n.COMPRESSED_R11_EAC;if(t===nl)return n.COMPRESSED_SIGNED_R11_EAC;if(t===rl)return n.COMPRESSED_RG11_EAC;if(t===sl)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===al||t===ol||t===ll||t===cl||t===hl||t===ul||t===dl||t===pl||t===ml||t===fl||t===gl||t===_l||t===vl||t===xl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===al)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===ol)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ll)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===cl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ul)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===pl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===ml)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===_l)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===vl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xl)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===yl||t===Ml||t===Sl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===yl)return s===je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ml)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Sl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===bl||t===Tl||t===El||t===wl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===bl)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Tl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===El)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===wl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Vn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Tt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends vi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null,m=typeof XRWebGLBinding<"u",v=new jl,f={},_=t.getContextAttributes(),M=null,b=null,S=[],w=[],L=new ne,F=null,R=new _t;R.viewport=new $e;let z=new _t;z.viewport=new $e;let k=[R,z],O=new aa,H=null,B=null;function V(te){let re=w.indexOf(te.inputSource);if(re===-1)return;let se=S[re];se!==void 0&&(se.update(te.inputSource,te.frame,l||a),se.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",j);for(let te=0;te<S.length;te++){let re=w[te];re!==null&&(w[te]=null,S[te].disconnect(re))}H=null,B=null,v.reset();for(let te in f)delete f[te];e.setRenderTarget(M),d=null,p=null,u=null,n=null,b=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}function j(te){for(let re=0;re<te.removed.length;re++){let se=te.removed[re],xe=w.indexOf(se);xe>=0&&(w[xe]=null,S[xe].disconnect(se))}for(let re=0;re<te.added.length;re++){let se=te.added[re],xe=w.indexOf(se);if(xe===-1){for(let T=0;T<S.length;T++){if(T>=w.length){w.push(se),xe=T;break}if(w[T]===null){w[T]=se,xe=T;break}}if(xe===-1)break}let we=S[xe];we&&we.connect(se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=S[te];return re===void 0&&(re=new Pn,S[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=S[te];return re===void 0&&(re=new Pn,S[te]=re),re.getGripSpace()},this.getHand=function(te){let re=S[te];return re===void 0&&(re=new Pn,S[te]=re),re.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(te){if(n=te,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",X),n.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,se=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?en:Ni,se=_.stencil?Vn:xi);let we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer(we),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Rt(p.textureWidth,p.textureHeight,{format:qt,type:Ft,depthTexture:new Pi(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,re),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Rt(d.framebufferWidth,d.framebufferHeight,{format:qt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ue.setContext(n),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let le=new C,_e=new C;function ve(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(n===null)return;let re=te.near,se=te.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(se=v.depthFar)),O.near=z.near=R.near=re,O.far=z.far=R.far=se,H===O.near&&B===O.far||(n.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,B=O.far),O.layers.mask=6|te.layers.mask,R.layers.mask=-5&O.layers.mask,z.layers.mask=-3&O.layers.mask;let xe=te.parent,we=O.cameras;ve(O,xe);for(let T=0;T<we.length;T++)ve(we[T],xe);we.length===2?function(T,y,P){le.setFromMatrixPosition(y.matrixWorld),_e.setFromMatrixPosition(P.matrixWorld);let I=le.distanceTo(_e),x=y.projectionMatrix.elements,A=P.projectionMatrix.elements,U=x[14]/(x[10]-1),D=x[14]/(x[10]+1),Y=(x[9]+1)/x[5],q=(x[9]-1)/x[5],G=(x[8]-1)/x[0],$=(A[8]+1)/A[0],K=U*G,ee=U*$,ie=I/(-G+$),oe=ie*-G;if(y.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(oe),T.translateZ(ie),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),x[10]===-1)T.projectionMatrix.copy(y.projectionMatrix),T.projectionMatrixInverse.copy(y.projectionMatrixInverse);else{let Te=U+ie,Ue=D+ie,Xe=K-oe,Ge=ee+(I-oe),pe=Y*D/Ue*Te,Ie=q*D/Ue*Te;T.projectionMatrix.makePerspective(Xe,Ge,pe,Ie,Te,Ue),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}(O,R,z):O.projectionMatrix.copy(R.projectionMatrix),function(T,y,P){P===null?T.matrix.copy(y.matrixWorld):(T.matrix.copy(P.matrixWorld),T.matrix.invert(),T.matrix.multiply(y.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(y.projectionMatrix),T.projectionMatrixInverse.copy(y.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*Cn*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}(te,O,xe)},this.getCamera=function(){return O},this.getFoveation=function(){if(p!==null||d!==null)return c},this.setFoveation=function(te){c=te,p!==null&&(p.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(te){return f[te]};let me=null,ue=new Kh;ue.setAnimationLoop(function(te,re){if(h=re.getViewerPose(l||a),g=re,h!==null){let se=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let xe=!1;se.length!==O.cameras.length&&(O.cameras.length=0,xe=!0);for(let T=0;T<se.length;T++){let y=se[T],P=null;if(d!==null)P=d.getViewport(y);else{let x=u.getViewSubImage(p,y);P=x.viewport,T===0&&(e.setRenderTargetTextures(b,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(b))}let I=k[T];I===void 0&&(I=new _t,I.layers.enable(T),I.viewport=new $e,k[T]=I),I.matrix.fromArray(y.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(y.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(P.x,P.y,P.width,P.height),T===0&&(O.matrix.copy(I.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),xe===!0&&O.cameras.push(I)}let we=n.enabledFeatures;if(we&&we.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let T=u.getDepthInformation(se[0]);T&&T.isValid&&T.texture&&v.init(T,n.renderState)}if(we&&we.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let T=0;T<se.length;T++){let y=se[T].camera;if(y){let P=f[y];P||(P=new dr,f[y]=P);let I=u.getCameraImage(y);P.sourceTexture=I}}}}for(let se=0;se<S.length;se++){let xe=w[se],we=S[se];xe!==null&&we!==void 0&&we.update(xe,re,l||a)}me&&me(te,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}),this.setAnimationLoop=function(te){me=te},this.dispose=function(){}}},an=new ii,Mp=new Le;function Sp(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===xt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===xt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,an.copy(c),an.x*=-1,an.y*=-1,an.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),n.envMapRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(an)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Il(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(n,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(l,h,u,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function bp(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,p,d,g){let m=u.value,v=p+"_"+d;if(g[v]===void 0)return g[v]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let f=g[v];if(typeof m=="number"||typeof m=="boolean"){if(f!==m)return g[v]=m,!0}else if(f.equals(m)===!1)return f.copy(m),!0}return!1}function l(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(n[p.id]),delete n[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;i.uniformBlockBinding(u,d)},update:function(u,p){let d=n[u.id];d===void 0&&(function(v){let f=v.uniforms,_=0,M=16;for(let S=0,w=f.length;S<w;S++){let L=Array.isArray(f[S])?f[S]:[f[S]];for(let F=0,R=L.length;F<R;F++){let z=L[F],k=Array.isArray(z.value)?z.value:[z.value];for(let O=0,H=k.length;O<H;O++){let B=l(k[O]),V=_%M,X=V%B.boundary,j=V+X;_+=X,j!==0&&M-j<B.storage&&(_+=M-j),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=B.storage}}}let b=_%M;b>0&&(_+=M-b),v.__size=_,v.__cache={}}(u),d=function(v){let f=function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();v.__bindingPointIndex=f;let _=r.createBuffer(),M=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,M,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,_),_}(u),n[u.id]=d,u.addEventListener("dispose",h));let g=p.program;i.updateUBOMapping(u,g);let m=e.render.frame;s[u.id]!==m&&(function(v){let f=n[v.id],_=v.uniforms,M=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let b=0,S=_.length;b<S;b++){let w=Array.isArray(_[b])?_[b]:[_[b]];for(let L=0,F=w.length;L<F;L++){let R=w[L];if(c(R,b,L,M)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],O=0;for(let H=0;H<k.length;H++){let B=k[H],V=l(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+O,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),s[u.id]=m)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Tp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null,Aa=class{constructor(e={}){let{canvas:t=xh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:d=Ft}=e,g;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let m=d,v=new Set([Yo,qo,ma]),f=new Set([Ft,xi,Gn,Vn,da,pa]),_=new Uint32Array(4),M=new Int32Array(4),b=null,S=null,w=[],L=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,z=!1;this._outputColorSpace=pt;let k=0,O=0,H=null,B=-1,V=null,X=new $e,j=new $e,le=null,_e=new He(0),ve=0,me=t.width,ue=t.height,te=1,re=null,se=null,xe=new $e(0,0,me,ue),we=new $e(0,0,me,ue),T=!1,y=new Zi,P=!1,I=!1,x=new Le,A=new C,U=new $e,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function q(){return H===null?te:1}let G,$,K,ee,ie,oe,Te,Ue,Xe,Ge,pe,Ie,qe,ht,de,Pe,Ne,ln,Fi,Mt,Ze,it,li,N=i;function Oi(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ps}`),t.addEventListener("webglcontextlost",Pa,!1),t.addEventListener("webglcontextrestored",Yl,!1),t.addEventListener("webglcontextcreationerror",Zl,!1),N===null){let W="webgl2";if(N=Oi(W,E),N===null)throw Oi(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Me("WebGLRenderer: "+E.message),E}function jn(){G=new Ku(N),G.init(),Ze=new yp(N,G),$=new qu(N,G,e,Ze),K=new vp(N,G),$.reversedDepthBuffer&&p&&K.buffers.depth.setReversed(!0),ee=new ed(N),ie=new op,oe=new xp(N,G,K,ie,$,Ze,ee),Te=new Ju(R),Ue=new ku(N),it=new Xu(N,Ue),Xe=new $u(N,Ue,ee,it),Ge=new id(N,Xe,Ue,it,ee),ln=new td(N,$,oe),de=new Yu(ie),pe=new ap(R,Te,G,$,it,de),Ie=new Sp(R,ie),qe=new cp,ht=new mp(G),Ne=new Wu(R,Te,K,Ge,g,c),Pe=new _p(R,Ge,$),li=new bp(N,ee,$,K),Fi=new ju(N,G,ee),Mt=new Qu(N,G,ee),ee.programs=pe.programs,R.capabilities=$,R.extensions=G,R.properties=ie,R.renderLists=qe,R.shadowMap=Pe,R.state=K,R.info=ee}jn(),m!==Ft&&(F=new rd(m,t.width,t.height,n,s));let nt=new ql(R,N);function Pa(E){E.preventDefault(),Cl("WebGLRenderer: Context Lost."),z=!0}function Yl(){Cl("WebGLRenderer: Context Restored."),z=!1;let E=ee.autoReset,W=Pe.enabled,Z=Pe.autoUpdate,Q=Pe.needsUpdate,J=Pe.type;jn(),ee.autoReset=E,Pe.enabled=W,Pe.autoUpdate=Z,Pe.needsUpdate=Q,Pe.type=J}function Zl(E){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jl(E){let W=E.target;W.removeEventListener("dispose",Jl),function(Z){(function(Q){let J=ie.get(Q).programs;J!==void 0&&(J.forEach(function(ae){pe.releaseProgram(ae)}),Q.isShaderMaterial&&pe.releaseShaderCache(Q))})(Z),ie.remove(Z)}(W)}function Kl(E,W,Z){E.transparent===!0&&E.side===ni&&E.forceSinglePass===!1?(E.side=xt,E.needsUpdate=!0,Or(E,W,Z),E.side=Ui,E.needsUpdate=!0,Or(E,W,Z),E.side=ni):Or(E,W,Z)}this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(me,ue,!1))},this.getSize=function(E){return E.set(me,ue)},this.setSize=function(E,W,Z=!0){nt.isPresenting?be("WebGLRenderer: Can't change size while VR device is presenting."):(me=E,ue=W,t.width=Math.floor(E*te),t.height=Math.floor(W*te),Z===!0&&(t.style.width=E+"px",t.style.height=W+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,E,W))},this.getDrawingBufferSize=function(E){return E.set(me*te,ue*te).floor()},this.setDrawingBufferSize=function(E,W,Z){me=E,ue=W,te=Z,t.width=Math.floor(E*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,E,W)},this.setEffects=function(E){if(m!==Ft){if(E){for(let W=0;W<E.length;W++)if(E[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,W,Z,Q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,W,Z,Q),K.viewport(X.copy(xe).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,W,Z,Q){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,W,Z,Q),K.scissor(j.copy(we).multiplyScalar(te).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(E){K.setScissorTest(T=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,Z=!0){let Q=0;if(E){let J=!1;if(H!==null){let ae=H.texture.format;J=v.has(ae)}if(J){let ae=H.texture.type,he=f.has(ae),fe=Ne.getClearColor(),ge=Ne.getClearAlpha(),Ee=fe.r,ze=fe.g,Ve=fe.b;he?(_[0]=Ee,_[1]=ze,_[2]=Ve,_[3]=ge,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=Ee,M[1]=ze,M[2]=Ve,M[3]=ge,N.clearBufferiv(N.COLOR,0,M))}else Q|=N.COLOR_BUFFER_BIT}W&&(Q|=N.DEPTH_BUFFER_BIT),Z&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pa,!1),t.removeEventListener("webglcontextrestored",Yl,!1),t.removeEventListener("webglcontextcreationerror",Zl,!1),Ne.dispose(),qe.dispose(),ht.dispose(),ie.dispose(),Te.dispose(),Ge.dispose(),it.dispose(),li.dispose(),pe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",$l),nt.removeEventListener("sessionend",Ql),Bi.stop()},this.renderBufferDirect=function(E,W,Z,Q,J,ae){W===null&&(W=D);let he=J.isMesh&&J.matrixWorld.determinant()<0,fe=function(Be,Qe,dt,Ae,Ce){Qe.isScene!==!0&&(Qe=D),oe.resetTextureUnits();let Ot=Qe.fog,Ua=Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial||Ae.isMeshPhongMaterial?Qe.environment:null,Br=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ji,qn=Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial&&!Ae.envMap||Ae.isMeshPhongMaterial&&!Ae.envMap,Yt=Te.get(Ae.envMap||Ua,qn),cn=Ae.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ci=!!dt.attributes.tangent&&(!!Ae.normalMap||Ae.anisotropy>0),Na=!!dt.morphAttributes.position,hn=!!dt.morphAttributes.normal,su=!!dt.morphAttributes.color,sc=Xt;Ae.toneMapped&&(H!==null&&H.isXRRenderTarget!==!0||(sc=R.toneMapping));let ac=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,au=ac!==void 0?ac.length:0,Oe=ie.get(Ae),zi=S.state.lights;if(P===!0&&(I===!0||Be!==V)){let Pt=Be===V&&Ae.id===B;de.setState(Ae,Be,Pt)}let Bt=!1;Ae.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==zi.state.version||Oe.outputColorSpace!==Br||Ce.isBatchedMesh&&Oe.batching===!1?Bt=!0:Ce.isBatchedMesh||Oe.batching!==!0?Ce.isBatchedMesh&&Oe.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Oe.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Oe.instancing===!1?Bt=!0:Ce.isInstancedMesh||Oe.instancing!==!0?Ce.isSkinnedMesh&&Oe.skinning===!1?Bt=!0:Ce.isSkinnedMesh||Oe.skinning!==!0?Ce.isInstancedMesh&&Oe.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Oe.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Oe.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Oe.instancingMorph===!1&&Ce.morphTexture!==null||Oe.envMap!==Yt||Ae.fog===!0&&Oe.fog!==Ot?Bt=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===de.numPlanes&&Oe.numIntersection===de.numIntersection?(Oe.vertexAlphas!==cn||Oe.vertexTangents!==ci||Oe.morphTargets!==Na||Oe.morphNormals!==hn||Oe.morphColors!==su||Oe.toneMapping!==sc||Oe.morphTargetsCount!==au)&&(Bt=!0):Bt=!0:Bt=!0:Bt=!0:Bt=!0:(Bt=!0,Oe.__version=Ae.version);let Gi=Oe.currentProgram;Bt===!0&&(Gi=Or(Ae,Qe,Ce));let oc=!1,Yn=!1,Fa=!1,et=Gi.getUniforms(),yi=Oe.uniforms;if(K.useProgram(Gi.program)&&(oc=!0,Yn=!0,Fa=!0),Ae.id!==B&&(B=Ae.id,Yn=!0),oc||V!==Be){K.buffers.depth.getReversed()&&Be.reversedDepth!==!0&&(Be._reversedDepth=!0,Be.updateProjectionMatrix()),et.setValue(N,"projectionMatrix",Be.projectionMatrix),et.setValue(N,"viewMatrix",Be.matrixWorldInverse);let Pt=et.map.cameraPosition;Pt!==void 0&&Pt.setValue(N,A.setFromMatrixPosition(Be.matrixWorld)),$.logarithmicDepthBuffer&&et.setValue(N,"logDepthBufFC",2/(Math.log(Be.far+1)/Math.LN2)),(Ae.isMeshPhongMaterial||Ae.isMeshToonMaterial||Ae.isMeshLambertMaterial||Ae.isMeshBasicMaterial||Ae.isMeshStandardMaterial||Ae.isShaderMaterial)&&et.setValue(N,"isOrthographic",Be.isOrthographicCamera===!0),V!==Be&&(V=Be,Yn=!0,Fa=!0)}if(Oe.needsLights&&(zi.state.directionalShadowMap.length>0&&et.setValue(N,"directionalShadowMap",zi.state.directionalShadowMap,oe),zi.state.spotShadowMap.length>0&&et.setValue(N,"spotShadowMap",zi.state.spotShadowMap,oe),zi.state.pointShadowMap.length>0&&et.setValue(N,"pointShadowMap",zi.state.pointShadowMap,oe)),Ce.isSkinnedMesh){et.setOptional(N,Ce,"bindMatrix"),et.setOptional(N,Ce,"bindMatrixInverse");let Pt=Ce.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),et.setValue(N,"boneTexture",Pt.boneTexture,oe))}Ce.isBatchedMesh&&(et.setOptional(N,Ce,"batchingTexture"),et.setValue(N,"batchingTexture",Ce._matricesTexture,oe),et.setOptional(N,Ce,"batchingIdTexture"),et.setValue(N,"batchingIdTexture",Ce._indirectTexture,oe),et.setOptional(N,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&et.setValue(N,"batchingColorTexture",Ce._colorsTexture,oe));let Oa=dt.morphAttributes;Oa.position===void 0&&Oa.normal===void 0&&Oa.color===void 0||ln.update(Ce,dt,Gi),(Yn||Oe.receiveShadow!==Ce.receiveShadow)&&(Oe.receiveShadow=Ce.receiveShadow,et.setValue(N,"receiveShadow",Ce.receiveShadow)),(Ae.isMeshStandardMaterial||Ae.isMeshLambertMaterial||Ae.isMeshPhongMaterial)&&Ae.envMap===null&&Qe.environment!==null&&(yi.envMapIntensity.value=Qe.environmentIntensity),yi.dfgLUT!==void 0&&(yi.dfgLUT.value=(ai===null&&(ai=new ys(Tp,16,16,kn,si),ai.name="DFG_LUT",ai.minFilter=vt,ai.magFilter=vt,ai.wrapS=Ri,ai.wrapT=Ri,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai)),Yn&&(et.setValue(N,"toneMappingExposure",R.toneMappingExposure),Oe.needsLights&&(zt=Fa,(Zt=yi).ambientLightColor.needsUpdate=zt,Zt.lightProbe.needsUpdate=zt,Zt.directionalLights.needsUpdate=zt,Zt.directionalLightShadows.needsUpdate=zt,Zt.pointLights.needsUpdate=zt,Zt.pointLightShadows.needsUpdate=zt,Zt.spotLights.needsUpdate=zt,Zt.spotLightShadows.needsUpdate=zt,Zt.rectAreaLights.needsUpdate=zt,Zt.hemisphereLights.needsUpdate=zt),Ot&&Ae.fog===!0&&Ie.refreshFogUniforms(yi,Ot),Ie.refreshMaterialUniforms(yi,Ae,te,ue,S.state.transmissionRenderTarget[Be.id]),Wn.upload(N,nc(Oe),yi,oe));var Zt,zt;if(Ae.isShaderMaterial&&Ae.uniformsNeedUpdate===!0&&(Wn.upload(N,nc(Oe),yi,oe),Ae.uniformsNeedUpdate=!1),Ae.isSpriteMaterial&&et.setValue(N,"center",Ce.center),et.setValue(N,"modelViewMatrix",Ce.modelViewMatrix),et.setValue(N,"normalMatrix",Ce.normalMatrix),et.setValue(N,"modelMatrix",Ce.matrixWorld),Ae.isShaderMaterial||Ae.isRawShaderMaterial){let Pt=Ae.uniformsGroups;for(let Ba=0,ou=Pt.length;Ba<ou;Ba++){let lc=Pt[Ba];li.update(lc,Gi),li.bind(lc,Gi)}}return Gi}(E,W,Z,Q,J);K.setMaterial(Q,he);let ge=Z.index,Ee=1;if(Q.wireframe===!0){if(ge=Xe.getWireframeAttribute(Z),ge===void 0)return;Ee=2}let ze=Z.drawRange,Ve=Z.attributes.position,Se=ze.start*Ee,We=(ze.start+ze.count)*Ee;ae!==null&&(Se=Math.max(Se,ae.start*Ee),We=Math.min(We,(ae.start+ae.count)*Ee)),ge!==null?(Se=Math.max(Se,0),We=Math.min(We,ge.count)):Ve!=null&&(Se=Math.max(Se,0),We=Math.min(We,Ve.count));let at=We-Se;if(at<0||at===1/0)return;let rt;it.setup(J,Q,fe,Z,ge);let Ke=Fi;if(ge!==null&&(rt=Ue.get(ge),Ke=Mt,Ke.setIndex(rt)),J.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*q()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(J.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),K.setLineWidth(Be*q()),J.isLineSegments?Ke.setMode(N.LINES):J.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else J.isPoints?Ke.setMode(N.POINTS):J.isSprite&&Ke.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ar("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Ke.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Be=J._multiDrawStarts,Qe=J._multiDrawCounts,dt=J._multiDrawCount,Ae=ge?Ue.get(ge).bytesPerElement:1,Ce=ie.get(Q).currentProgram.getUniforms();for(let Ot=0;Ot<dt;Ot++)Ce.setValue(N,"_gl_DrawID",Ot),Ke.render(Be[Ot]/Ae,Qe[Ot])}else if(J.isInstancedMesh)Ke.renderInstances(Se,at,J.count);else if(Z.isInstancedBufferGeometry){let Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Qe=Math.min(Z.instanceCount,Be);Ke.renderInstances(Se,at,Qe)}else Ke.render(Se,at)},this.compile=function(E,W,Z=null){Z===null&&(Z=E),S=ht.get(Z),S.init(W),L.push(S),Z.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),E!==Z&&E.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();let Q=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ae=J.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){let fe=ae[he];Kl(fe,Z,J),Q.add(fe)}else Kl(ae,Z,J),Q.add(ae)}),S=L.pop(),Q},this.compileAsync=function(E,W,Z=null){let Q=this.compile(E,W,Z);return new Promise(J=>{function ae(){Q.forEach(function(he){ie.get(he).currentProgram.isReady()&&Q.delete(he)}),Q.size!==0?setTimeout(ae,10):J(E)}G.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let La=null;function $l(){Bi.stop()}function Ql(){Bi.start()}let Bi=new Kh;function Da(E,W,Z,Q){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||y.intersectsSprite(E)){Q&&U.setFromMatrixPosition(E.matrixWorld).applyMatrix4(x);let ae=Ge.update(E),he=E.material;he.visible&&b.push(E,ae,he,Z,U.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||y.intersectsObject(E))){let ae=Ge.update(E),he=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),U.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),U.copy(ae.boundingSphere.center)),U.applyMatrix4(E.matrixWorld).applyMatrix4(x)),Array.isArray(he)){let fe=ae.groups;for(let ge=0,Ee=fe.length;ge<Ee;ge++){let ze=fe[ge],Ve=he[ze.materialIndex];Ve&&Ve.visible&&b.push(E,ae,Ve,Z,U.z,ze)}}else he.visible&&b.push(E,ae,he,Z,U.z,null)}}let J=E.children;for(let ae=0,he=J.length;ae<he;ae++)Da(J[ae],W,Z,Q)}function ec(E,W,Z,Q){let{opaque:J,transmissive:ae,transparent:he}=E;S.setupLightsView(Z),P===!0&&de.setGlobalState(R.clippingPlanes,Z),Q&&K.viewport(X.copy(Q)),J.length>0&&Fr(J,W,Z),ae.length>0&&Fr(ae,W,Z),he.length>0&&Fr(he,W,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function tc(E,W,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){let Ve=G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new Rt(1,1,{generateMipmaps:!0,type:Ve?si:Ft,minFilter:Qi,samples:$.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let J=S.state.transmissionRenderTarget[Q.id],ae=Q.viewport||X;J.setSize(ae.z*R.transmissionResolutionScale,ae.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),fe=R.getActiveCubeFace(),ge=R.getActiveMipmapLevel();R.setRenderTarget(J),R.getClearColor(_e),ve=R.getClearAlpha(),ve<1&&R.setClearColor(16777215,.5),R.clear(),Y&&Ne.render(Z);let Ee=R.toneMapping;R.toneMapping=Xt;let ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),P===!0&&de.setGlobalState(R.clippingPlanes,Q),Fr(E,Z,Q),oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J),G.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Se=0,We=W.length;Se<We;Se++){let at=W[Se],{object:rt,geometry:Ke,material:Be,group:Qe}=at;if(Be.side===ni&&rt.layers.test(Q.layers)){let dt=Be.side;Be.side=xt,Be.needsUpdate=!0,ic(rt,Z,Q,Ke,Be,Qe),Be.side=dt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J))}R.setRenderTarget(he,fe,ge),R.setClearColor(_e,ve),ze!==void 0&&(Q.viewport=ze),R.toneMapping=Ee}function Fr(E,W,Z){let Q=W.isScene===!0?W.overrideMaterial:null;for(let J=0,ae=E.length;J<ae;J++){let he=E[J],{object:fe,geometry:ge,group:Ee}=he,ze=he.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),fe.layers.test(Z.layers)&&ic(fe,W,Z,ge,ze,Ee)}}function ic(E,W,Z,Q,J,ae){E.onBeforeRender(R,W,Z,Q,J,ae),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(R,W,Z,Q,E,ae),J.transparent===!0&&J.side===ni&&J.forceSinglePass===!1?(J.side=xt,J.needsUpdate=!0,R.renderBufferDirect(Z,W,Q,J,E,ae),J.side=Ui,J.needsUpdate=!0,R.renderBufferDirect(Z,W,Q,J,E,ae),J.side=ni):R.renderBufferDirect(Z,W,Q,J,E,ae),E.onAfterRender(R,W,Z,Q,J,ae)}function Or(E,W,Z){W.isScene!==!0&&(W=D);let Q=ie.get(E),J=S.state.lights,ae=S.state.shadowsArray,he=J.state.version,fe=pe.getParameters(E,J.state,ae,W,Z),ge=pe.getProgramCacheKey(fe),Ee=Q.programs;Q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Q.envMap=Te.get(E.envMap||Q.environment,ze),Q.envMapRotation=Q.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",Jl),Ee=new Map,Q.programs=Ee);let Ve=Ee.get(ge);if(Ve!==void 0){if(Q.currentProgram===Ve&&Q.lightsStateVersion===he)return rc(E,fe),Ve}else fe.uniforms=pe.getUniforms(E),E.onBeforeCompile(fe,R),Ve=pe.acquireProgram(fe,ge),Ee.set(ge,Ve),Q.uniforms=fe.uniforms;let Se=Q.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Se.clippingPlanes=de.uniform),rc(E,fe),Q.needsLights=function(We){return We.isMeshLambertMaterial||We.isMeshToonMaterial||We.isMeshPhongMaterial||We.isMeshStandardMaterial||We.isShadowMaterial||We.isShaderMaterial&&We.lights===!0}(E),Q.lightsStateVersion=he,Q.needsLights&&(Se.ambientLightColor.value=J.state.ambient,Se.lightProbe.value=J.state.probe,Se.directionalLights.value=J.state.directional,Se.directionalLightShadows.value=J.state.directionalShadow,Se.spotLights.value=J.state.spot,Se.spotLightShadows.value=J.state.spotShadow,Se.rectAreaLights.value=J.state.rectArea,Se.ltc_1.value=J.state.rectAreaLTC1,Se.ltc_2.value=J.state.rectAreaLTC2,Se.pointLights.value=J.state.point,Se.pointLightShadows.value=J.state.pointShadow,Se.hemisphereLights.value=J.state.hemi,Se.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Se.spotLightMatrix.value=J.state.spotLightMatrix,Se.spotLightMap.value=J.state.spotLightMap,Se.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=Ve,Q.uniformsList=null,Ve}function nc(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Wn.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function rc(E,W){let Z=ie.get(E);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}Bi.setAnimationLoop(function(E){La&&La(E)}),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){La=E,nt.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},nt.addEventListener("sessionstart",$l),nt.addEventListener("sessionend",Ql),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0)return void Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(z===!0)return;let Z=nt.enabled===!0&&nt.isPresenting===!0,Q=F!==null&&(H===null||Z)&&F.begin(R,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled!==!0||nt.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,W,H),S=ht.get(E,L.length),S.init(W),L.push(S),x.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),y.setFromProjectionMatrix(x,_i,W.reversedDepth),I=this.localClippingEnabled,P=de.init(this.clippingPlanes,I),b=qe.get(E,w.length),b.init(),w.push(b),nt.enabled===!0&&nt.isPresenting===!0){let ae=R.xr.getDepthSensingMesh();ae!==null&&Da(ae,W,-1/0,R.sortObjects)}Da(E,W,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(re,se),Y=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Y&&Ne.addToRenderList(b,E),this.info.render.frame++,P===!0&&de.beginShadows();let J=S.state.shadowsArray;if(Pe.render(J,E,W),P===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&F.hasRenderPass())===!1){let ae=b.opaque,he=b.transmissive;if(S.setupLights(),W.isArrayCamera){let fe=W.cameras;if(he.length>0)for(let ge=0,Ee=fe.length;ge<Ee;ge++)tc(ae,he,E,fe[ge]);Y&&Ne.render(E);for(let ge=0,Ee=fe.length;ge<Ee;ge++){let ze=fe[ge];ec(b,E,ze,ze.viewport)}}else he.length>0&&tc(ae,he,E,W),Y&&Ne.render(E),ec(b,E,W)}H!==null&&O===0&&(oe.updateMultisampleRenderTarget(H),oe.updateRenderTargetMipmap(H)),Q&&F.end(R),E.isScene===!0&&E.onAfterRender(R,E,W),it.resetDefaultState(),B=-1,V=null,L.pop(),L.length>0?(S=L[L.length-1],P===!0&&de.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,w.pop(),b=w.length>0?w[w.length-1]:null},this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,W,Z){let Q=ie.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ie.get(E.texture).__webglTexture=W,ie.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){let Z=ie.get(E);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};let iu=N.createFramebuffer();this.setRenderTarget=function(E,W=0,Z=0){H=E,k=W,O=Z;let Q=null,J=!1,ae=!1;if(E){let he=ie.get(E);if(he.__useDefaultFramebuffer!==void 0)return K.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),X.copy(E.viewport),j.copy(E.scissor),le=E.scissorTest,K.viewport(X),K.scissor(j),K.setScissorTest(le),void(B=-1);if(he.__webglFramebuffer===void 0)oe.setupRenderTarget(E);else if(he.__hasExternalTextures)oe.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ee=E.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&ie.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(E)}}let fe=E.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(ae=!0);let ge=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Array.isArray(ge[W])?ge[W][Z]:ge[W],J=!0):Q=E.samples>0&&oe.useMultisampledRTT(E)===!1?ie.get(E).__webglMultisampledFramebuffer:Array.isArray(ge)?ge[Z]:ge,X.copy(E.viewport),j.copy(E.scissor),le=E.scissorTest}else X.copy(xe).multiplyScalar(te).floor(),j.copy(we).multiplyScalar(te).floor(),le=T;if(Z!==0&&(Q=iu),K.bindFramebuffer(N.FRAMEBUFFER,Q)&&K.drawBuffers(E,Q),K.viewport(X),K.scissor(j),K.setScissorTest(le),J){let he=ie.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,he.__webglTexture,Z)}else if(ae){let he=W;for(let fe=0;fe<E.textures.length;fe++){let ge=ie.get(E.textures[fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+fe,ge.__webglTexture,Z,he)}}else if(E!==null&&Z!==0){let he=ie.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,Z)}B=-1},this.readRenderTargetPixels=function(E,W,Z,Q,J,ae,he,fe=0){if(!E||!E.isWebGLRenderTarget)return void Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){K.bindFramebuffer(N.FRAMEBUFFER,ge);try{let Ee=E.textures[fe],ze=Ee.format,Ve=Ee.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!$.textureFormatReadable(ze))return void Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ve))return void Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=E.width-Q&&Z>=0&&Z<=E.height-J&&N.readPixels(W,Z,Q,J,Ze.convert(ze),Ze.convert(Ve),ae)}finally{let Ee=H!==null?ie.get(H).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,W,Z,Q,J,ae,he,fe=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){if(W>=0&&W<=E.width-Q&&Z>=0&&Z<=E.height-J){K.bindFramebuffer(N.FRAMEBUFFER,ge);let Ee=E.textures[fe],ze=Ee.format,Ve=Ee.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!$.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(W,Z,Q,J,Ze.convert(ze),Ze.convert(Ve),0);let We=H!==null?ie.get(H).__webglFramebuffer:null;K.bindFramebuffer(N.FRAMEBUFFER,We);let at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Mh(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(Se),N.deleteSync(at),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,Z=0){let Q=Math.pow(2,-Z),J=Math.floor(E.image.width*Q),ae=Math.floor(E.image.height*Q),he=W!==null?W.x:0,fe=W!==null?W.y:0;oe.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,he,fe,J,ae),K.unbindTexture()};let nu=N.createFramebuffer(),ru=N.createFramebuffer();this.copyTextureToTexture=function(E,W,Z=null,Q=null,J=0,ae=0){let he,fe,ge,Ee,ze,Ve,Se,We,at,rt=E.isCompressedTexture?E.mipmaps[ae]:E.image;if(Z!==null)he=Z.max.x-Z.min.x,fe=Z.max.y-Z.min.y,ge=Z.isBox3?Z.max.z-Z.min.z:1,Ee=Z.min.x,ze=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{let Yt=Math.pow(2,-J);he=Math.floor(rt.width*Yt),fe=Math.floor(rt.height*Yt),ge=E.isDataArrayTexture?rt.depth:E.isData3DTexture?Math.floor(rt.depth*Yt):1,Ee=0,ze=0,Ve=0}Q!==null?(Se=Q.x,We=Q.y,at=Q.z):(Se=0,We=0,at=0);let Ke=Ze.convert(W.format),Be=Ze.convert(W.type),Qe;W.isData3DTexture?(oe.setTexture3D(W,0),Qe=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(oe.setTexture2DArray(W,0),Qe=N.TEXTURE_2D_ARRAY):(oe.setTexture2D(W,0),Qe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let dt=N.getParameter(N.UNPACK_ROW_LENGTH),Ae=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ce=N.getParameter(N.UNPACK_SKIP_PIXELS),Ot=N.getParameter(N.UNPACK_SKIP_ROWS),Ua=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);let Br=E.isDataArrayTexture||E.isData3DTexture,qn=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){let Yt=ie.get(E),cn=ie.get(W),ci=ie.get(Yt.__renderTarget),Na=ie.get(cn.__renderTarget);K.bindFramebuffer(N.READ_FRAMEBUFFER,ci.__webglFramebuffer),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let hn=0;hn<ge;hn++)Br&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ie.get(E).__webglTexture,J,Ve+hn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ie.get(W).__webglTexture,ae,at+hn)),N.blitFramebuffer(Ee,ze,he,fe,Se,We,he,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||ie.has(E)){let Yt=ie.get(E),cn=ie.get(W);K.bindFramebuffer(N.READ_FRAMEBUFFER,nu),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,ru);for(let ci=0;ci<ge;ci++)Br?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,J,Ve+ci):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,J),qn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,cn.__webglTexture,ae,at+ci):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,cn.__webglTexture,ae),J!==0?N.blitFramebuffer(Ee,ze,he,fe,Se,We,he,fe,N.COLOR_BUFFER_BIT,N.NEAREST):qn?N.copyTexSubImage3D(Qe,ae,Se,We,at+ci,Ee,ze,he,fe):N.copyTexSubImage2D(Qe,ae,Se,We,Ee,ze,he,fe);K.bindFramebuffer(N.READ_FRAMEBUFFER,null),K.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else qn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Qe,ae,Se,We,at,he,fe,ge,Ke,Be,rt.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Qe,ae,Se,We,at,he,fe,ge,Ke,rt.data):N.texSubImage3D(Qe,ae,Se,We,at,he,fe,ge,Ke,Be,rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ae,Se,We,he,fe,Ke,Be,rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ae,Se,We,rt.width,rt.height,Ke,rt.data):N.texSubImage2D(N.TEXTURE_2D,ae,Se,We,he,fe,Ke,Be,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,dt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ua),ae===0&&W.generateMipmaps&&N.generateMipmap(Qe),K.unbindTexture()},this.initRenderTarget=function(E){ie.get(E).__webglFramebuffer===void 0&&oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?oe.setTextureCube(E,0):E.isData3DTexture?oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?oe.setTexture2DArray(E,0):oe.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){k=0,O=0,H=null,K.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};var ct=document.querySelector(".project-orbit-viewport"),on=document.querySelector("#project-orbit-canvas"),Ra=Array.from(document.querySelectorAll(".con02 .workList > li > a")),Ia=document.querySelector(".con02");if(ct&&on&&Ra.length){let r=new Aa({canvas:on,alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setClearColor(0,0),r.outputColorSpace=pt,on.setAttribute("aria-hidden","true");let e=new lr,t=new _t(45,1,.1,100);t.position.set(0,0,11.3),t.lookAt(0,0,0);let i=new ei;i.rotation.x=Ma.degToRad(18),i.rotation.z=Ma.degToRad(11.5),i.position.y=.3,e.add(i);let n=new ei;i.add(n);let s=Ra.length,a=Math.PI*2/s,o=4.9,c=2.65,l=3.4,h=28,u=new Er,p=r.capabilities.getMaxAnisotropy(),d=[],g=3355443,m=y=>{let P=[],I=[],x=[];for(let D=0;D<=1;D+=1){let Y=(D-.5)*l;for(let q=0;q<=h;q+=1){let G=q/h,$=(G-.5)*c,K=y+$/o;P.push(Math.sin(K)*o,Y,Math.cos(K)*o),I.push(G,D)}}let A=h+1;for(let D=0;D<h;D+=1){let Y=D,q=D+1,G=A+D,$=A+D+1;x.push(Y,q,$,Y,$,G)}let U=new Ye;return U.setAttribute("position",new ye(P,3)),U.setAttribute("uv",new ye(I,2)),U.setIndex(x),U.computeVertexNormals(),U.computeBoundingSphere(),U},v=`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,f=`
        precision highp float;

        uniform sampler2D uMap;
        uniform vec2 uUvScale;
        uniform vec2 uUvOffset;
        uniform float uBrightness;
        uniform float uOpacity;
        uniform float uHover;
        varying vec2 vUv;

        void main() {
            vec2 coverUv = vUv * uUvScale + uUvOffset;
            vec4 texel = texture2D(uMap, coverUv);
            float hoverLight = mix(1.0, 1.08, uHover);
            gl_FragColor = vec4(texel.rgb * uBrightness * hoverLight, texel.a * uOpacity);
        }
    `;Ra.forEach((y,P)=>{let I=y.querySelector("img"),x=u.load(I?I.getAttribute("src"):"",q=>{q.colorSpace=pt,q.anisotropy=Math.min(p,8),q.needsUpdate=!0;let G=q.image.width/q.image.height,$=c/l,K=d[P].material;if(G>$){let ee=$/G;K.uniforms.uUvScale.value.set(ee,1),K.uniforms.uUvOffset.value.set((1-ee)*.5,0)}else{let ee=G/$;K.uniforms.uUvScale.value.set(1,ee),K.uniforms.uUvOffset.value.set(0,(1-ee)*.5)}});x.colorSpace=pt;let A=new Tt({uniforms:{uMap:{value:x},uUvScale:{value:new ne(1,1)},uUvOffset:{value:new ne(0,0)},uBrightness:{value:1},uOpacity:{value:1},uHover:{value:0}},vertexShader:v,fragmentShader:f,transparent:!0,side:Ui,depthTest:!0,depthWrite:!0}),U=m(P*a),D=new mt(U,A),Y=new mt(U,new Yi({color:g,side:xt,depthTest:!0,depthWrite:!0}));D.userData.cardIndex=P,D.userData.backMesh=Y,d.push(D),n.add(Y),n.add(D)});let _=new Ar,M=new ne,b=0,S=0,w=!1,L=!1,F=0,R=0,z=0,k=null,O=-1,H=performance.now(),B=!0,V=!1,X=-1e3,j=-1e3,le=.1,_e=y=>{let P=y%(Math.PI*2);return P>Math.PI&&(P-=Math.PI*2),P<-Math.PI&&(P+=Math.PI*2),P},ve=()=>{let y=Math.max(1,ct.clientWidth),P=Math.max(1,ct.clientHeight);r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(y,P,!1),t.aspect=y/P,t.updateProjectionMatrix()},me=(y,P)=>{let I=on.getBoundingClientRect();M.x=(y-I.left)/I.width*2-1,M.y=-((P-I.top)/I.height)*2+1,_.setFromCamera(M,t);let x=_.intersectObjects(d,!1)[0];return x?x.object.userData.cardIndex:-1},ue=(y,P)=>{let I=me(y,P);I!==O&&(O=I,O>=0&&(S=b),d.forEach((x,A)=>{x.material.uniforms.uHover.value=A===O?1:0}),on.style.cursor=O>=0?"pointer":"grab")},te=()=>{S=Math.round(S/a)*a},re=y=>{let P=Ra[y];P&&P.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))};ct.addEventListener("pointerdown",y=>{y.button===0&&(V=!0,X=y.clientX,j=y.clientY,S=b,ue(-1e3,-1e3),w=!0,L=!1,z=0,k=y.pointerId,F=y.clientX,R=y.clientX,ct.classList.add("is-dragging"),on.style.cursor="grabbing",ct.setPointerCapture(y.pointerId))}),ct.addEventListener("pointermove",y=>{if(V=!0,X=y.clientX,j=y.clientY,!w){ue(y.clientX,y.clientY);return}let P=y.clientX-R;R=y.clientX,z=Math.abs(y.clientX-F),L=z>6,L&&(b+=P*.0042,S=b)});let se=y=>{if(!w)return;w=!1,ct.classList.remove("is-dragging"),k!==null&&ct.hasPointerCapture(k)&&ct.releasePointerCapture(k),k=null,L?S=Math.round(b/a)*a:y.type==="pointerup"&&re(me(y.clientX,y.clientY)),X=y.clientX,j=y.clientY;let P=ct.getBoundingClientRect();V=y.clientX>=P.left&&y.clientX<=P.right&&y.clientY>=P.top&&y.clientY<=P.bottom,on.style.cursor="grab"};ct.addEventListener("pointerup",se),ct.addEventListener("pointercancel",se),ct.addEventListener("lostpointercapture",y=>{w&&se(y)}),ct.addEventListener("pointerenter",y=>{V=!0,X=y.clientX,j=y.clientY}),ct.addEventListener("pointerleave",()=>{w||(V=!1,X=-1e3,j=-1e3,ue(-1e3,-1e3))}),ct.addEventListener("keydown",y=>{if(y.key==="ArrowLeft"||y.key==="ArrowRight"){y.preventDefault(),S+=y.key==="ArrowLeft"?a:-a,te();return}if(y.key==="Enter"||y.key===" "){y.preventDefault();let P=(Math.round(-b/a)%s+s)%s;re(P)}}),new IntersectionObserver(y=>{B=y[0]?y[0].isIntersecting:!0},{threshold:.05}).observe(Ia||ct);let we=y=>{let P=Math.min(y-H,34);H=y,!w&&V&&ue(X,j),!w&&O<0&&B&&document.visibilityState==="visible"&&!document.body.classList.contains("project-detail-open")&&(S-=le*(P/1e3));let x=1-Math.pow(8e-5,P/1e3);b+=(S-b)*x,n.rotation.y=b,d.forEach((D,Y)=>{let q=Math.cos(_e(Y*a+b)),G=Math.max(0,q),$=Math.pow(G,1.3),K=Y===O?.38:0,ee=1-Math.pow(5e-4,P/1e3);D.position.y+=(K-D.position.y)*ee,D.userData.backMesh.position.y=D.position.y,D.material.uniforms.uBrightness.value=.38+$*.62,D.material.uniforms.uOpacity.value=.08+$*.92}),r.render(e,t);let A=r.getContext(),U=r.info.render.calls>0&&A.getError()===A.NO_ERROR;Ia&&U&&!Ia.classList.contains("has-webgl-carousel")&&Ia.classList.add("has-webgl-carousel"),window.requestAnimationFrame(we)};new ResizeObserver(ve).observe(ct),window.addEventListener("resize",ve),ve(),window.requestAnimationFrame(we)}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
