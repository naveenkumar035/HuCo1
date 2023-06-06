"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,r){r.d(t,{Bt:function(){return sQ},ET:function(){return sz},IO:function(){return sO},JU:function(){return st},Xo:function(){return sq},ad:function(){return si},cf:function(){return sG},hJ:function(){return se},r7:function(){return s$}});var n,s,i=r(2238),a=r(8463),o=r(3333),l=r(4444),u=r(3510);r(4155);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.5.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(w);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(w);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(w);f.warn(`Firestore (${d}): ${e}`,...r)}}function w(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||E(),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||E(),new c(e)}}class b{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){let e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class _{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new b(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.T=-1;class k{static I(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function C(e,t){return e<t?-1:e>t?1:0}function L(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new R(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?C(this.nanoseconds,e.nanoseconds):C(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new R(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function M(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function U(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,r){void 0===t?t=0:t>e.length&&E(),void 0===r?r=e.length-t:r>e.length-t&&E(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let s=e.get(n),i=t.get(n);if(s<i)return -1;if(s>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends F{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends F{construct(e,t,r){return new q(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new T(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let a=e[n];if("\\"===a){if(n+1===e.length)throw new T(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[n+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=o,n+=2}else"`"===a?(i=!i,n++):"."!==a||i?(r+=a,n++):(s(),n++)}if(s(),i)throw new T(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.fields=e,e.sort(q.comparator)}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new K(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new K(t)}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}K.EMPTY_BYTE_STRING=new K("");let $=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function z(e){if(e||E(),"string"==typeof e){let t=0,r=$.exec(e);if(r||E(),r[1]){let n=r[1];t=Number(n=(n+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function j(e){return"string"==typeof e?K.fromBase64String(e):K.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function H(e){let t=z(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return null==e}function Y(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(O.fromString(e))}static fromName(e){return new X(O.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new O(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Q(e)?4:10:E()}function Z(e,t){let r=J(e);if(r!==J(t))return!1;switch(r){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return H(e).isEqual(H(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=z(e.timestampValue),n=z(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return j(e.bytesValue).isEqual(j(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return G(e.geoPointValue.latitude)===G(t.geoPointValue.latitude)&&G(e.geoPointValue.longitude)===G(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return G(e.integerValue)===G(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=G(e.doubleValue),n=G(t.doubleValue);return r===n?Y(r)===Y(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],Z);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(x(r)!==x(n))return!1;for(let s in r)if(r.hasOwnProperty(s)&&(void 0===n[s]||!Z(r[s],n[s])))return!1;return!0}(e,t);default:return E()}}function ee(e,t){return void 0!==(e.values||[]).find(e=>Z(e,t))}function et(e,t){let r=J(e),n=J(t);if(r!==n)return C(r,n);switch(r){case 0:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=G(e.integerValue||e.doubleValue),n=G(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return er(e.timestampValue,t.timestampValue);case 4:return er(H(e),H(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(e,t){let r=j(e),n=j(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let s=0;s<r.length&&s<n.length;s++){let i=C(r[s],n[s]);if(0!==i)return i}return C(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=C(G(e.latitude),G(t.latitude));return 0!==r?r:C(G(e.longitude),G(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let s=0;s<r.length&&s<n.length;++s){let i=et(r[s],n[s]);if(i)return i}return C(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let a=0;a<n.length&&a<i.length;++a){let o=C(n[a],i[a]);if(0!==o)return o;let l=et(r[n[a]],s[i[a]]);if(0!==l)return l}return C(n.length,i.length)}(e.mapValue,t.mapValue);default:throw E()}}function er(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return C(e,t);let r=z(e),n=z(t),s=C(r.seconds,n.seconds);return 0!==s?s:C(r.nanos,n.nanos)}function en(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=z(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?j(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,X.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=en(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${en(e.fields[s])}`;return r+"}"}(e.mapValue):E()}function es(e){return!!e&&"integerValue"in e}function ei(e){return!!e&&"arrayValue"in e}function ea(e){return!!e&&"nullValue"in e}function eo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function el(e){return!!e&&"mapValue"in e}function eu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return M(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eu(r)),t}if(e.arrayValue){let r={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)r.arrayValue.values[n]=eu(e.arrayValue.values[n]);return r}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.value=e}static empty(){return new eh({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!el(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(t)}setAll(e){let t=q.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let i=this.getFieldsMap(t);this.applyChanges(i,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=eu(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());el(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Z(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];el(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(M(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eh(eu(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,n,s){this.key=e,this.documentType=t,this.version=r,this.data=n,this.documentState=s}static newInvalidDocument(e){return new ec(e,0,V.min(),eh.empty(),0)}static newFoundDocument(e,t,r){return new ec(e,1,t,r,0)}static newNoDocument(e,t){return new ec(e,2,t,eh.empty(),0)}static newUnknownDocument(e,t){return new ec(e,3,t,eh.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eh.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ec&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ec(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.A=null}}function ef(e,t=null,r=[],n=[],s=null,i=null,a=null){return new ed(e,t,r,n,s,i,a)}function em(e){let t=e;if(null===t.A){let r=t.path.canonicalString();null!==t.collectionGroup&&(r+="|cg:"+t.collectionGroup),r+="|f:"+t.filters.map(e=>e.field.canonicalString()+e.op.toString()+en(e.value)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),W(t.limit)||(r+="|l:"+t.limit),t.startAt&&(r+="|lb:"+e_(t.startAt)),t.endAt&&(r+="|ub:"+e_(t.endAt)),t.A=r}return t.A}function eg(e,t){var r,n,s,i;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(s=e.orderBy[a],i=t.orderBy[a],!(s.dir===i.dir&&s.field.isEqual(i.field)))return!1;if(e.filters.length!==t.filters.length)return!1;for(let o=0;o<e.filters.length;o++)if(r=e.filters[o],n=t.filters[o],r.op!==n.op||!r.field.isEqual(n.field)||!Z(r.value,n.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eC(e.startAt,t.startAt)&&eC(e.endAt,t.endAt)}function ep(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ey extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,r):new ew(e,t,r):"array-contains"===t?new eI(e,r):"in"===t?new eS(e,r):"not-in"===t?new eN(e,r):"array-contains-any"===t?new eA(e,r):new ey(e,t,r)}static R(e,t,r){return"in"===t?new eE(e,r):new ev(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(et(t,this.value)):null!==t&&J(this.value)===J(t)&&this.P(et(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return E()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ew extends ey{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.P(t)}}class eE extends ey{constructor(e,t){super(e,"in",t),this.keys=eT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ev extends ey{constructor(e,t){super(e,"not-in",t),this.keys=eT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eT(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>X.fromName(e.referenceValue))}class eI extends ey{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ei(t)&&ee(t.arrayValue,this.value)}}class eS extends ey{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ee(this.value.arrayValue,t)}}class eN extends ey{constructor(e,t){super(e,"not-in",t)}matches(e){if(ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ee(this.value.arrayValue,t)}}class eA extends ey{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ei(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ee(this.value.arrayValue,e))}}class eb{constructor(e,t){this.position=e,this.before=t}}function e_(e){return`${e.before?"b":"a"}:${e.position.map(e=>en(e)).join(",")}`}class eD{constructor(e,t="asc"){this.field=e,this.dir=t}}function ek(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?X.comparator(X.fromName(a.referenceValue),r.key):et(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return e.before?n<=0:n<0}function eC(e,t){if(null===e)return null===t;if(null===t||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!Z(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.V=null,this.S=null,this.startAt,this.endAt}}function eR(e){return!W(e.limit)&&"F"===e.limitType}function eV(e){return!W(e.limit)&&"L"===e.limitType}function ex(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eM(e){for(let t of e.filters)if(t.v())return t.field;return null}function eU(e){let t=e;if(null===t.V){t.V=[];let r=eM(t),n=ex(t);if(null!==r&&null===n)r.isKeyField()||t.V.push(new eD(r)),t.V.push(new eD(q.keyField(),"asc"));else{let s=!1;for(let i of t.explicitOrderBy)t.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){let a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new eD(q.keyField(),a))}}}return t.V}function eF(e){let t=e;if(!t.S){if("F"===t.limitType)t.S=ef(t.path,t.collectionGroup,eU(t),t.filters,t.limit,t.startAt,t.endAt);else{let r=[];for(let n of eU(t)){let s="desc"===n.dir?"asc":"desc";r.push(new eD(n.field,s))}let i=t.endAt?new eb(t.endAt.position,!t.endAt.before):null,a=t.startAt?new eb(t.startAt.position,!t.startAt.before):null;t.S=ef(t.path,t.collectionGroup,r,t.filters,t.limit,i,a)}}return t.S}function eO(e,t){return eg(eF(e),eF(t))&&e.limitType===t.limitType}function eP(e){return`${em(eF(e))}|lt:${e.limitType}`}function eq(e){var t;let r;return`Query(target=${r=(t=eF(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>`${e.field.canonicalString()} ${e.op} ${en(e.value)}`).join(", ")}]`),W(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+e_(t.startAt)),t.endAt&&(r+=", endAt: "+e_(t.endAt)),`Target(${r})`}; limitType=${e.limitType})`}function eB(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):X.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e.explicitOrderBy)if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&!(e.startAt&&!ek(e.startAt,eU(e),t)||e.endAt&&ek(e.endAt,eU(e),t))}function eK(e){return(t,r)=>{let n=!1;for(let s of eU(e)){let i=function(e,t,r){let n=e.field.isKeyField()?X.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?et(n,s):E()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return E()}}(s,t,r);if(0!==i)return i;n=n||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(t)?"-0":t}}function ez(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(){this._=void 0}}function ej(e,t){return e instanceof eJ?es(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class eQ extends eG{}class eH extends eG{constructor(e){super(),this.elements=e}}function eW(e,t){let r=e0(t);for(let n of e.elements)r.some(e=>Z(e,n))||r.push(n);return{arrayValue:{values:r}}}class eY extends eG{constructor(e){super(),this.elements=e}}function eX(e,t){let r=e0(t);for(let n of e.elements)r=r.filter(e=>!Z(e,n));return{arrayValue:{values:r}}}class eJ extends eG{constructor(e,t){super(),this.N=e,this.C=t}}function eZ(e){return G(e.integerValue||e.doubleValue)}function e0(e){return ei(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t){this.field=e,this.transform=t}}class e2{constructor(e,t){this.version=e,this.transformResults=t}}class e3{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new e3}static exists(e){return new e3(void 0,e)}static updateTime(e){return new e3(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function e4(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class e6{}function e8(e,t,r){e instanceof e7?function(e,t,r){if(!e4(e.precondition,t))return;let n=e.value.clone(),s=tn(e.fieldTransforms,r,t);n.setAll(s),t.convertToFoundDocument(e9(t),n).setHasLocalMutations()}(e,t,r):e instanceof te?function(e,t,r){if(!e4(e.precondition,t))return;let n=tn(e.fieldTransforms,r,t),s=t.data;s.setAll(tt(e)),s.setAll(n),t.convertToFoundDocument(e9(t),s).setHasLocalMutations()}(e,t,r):e4(e.precondition,t)&&t.convertToNoDocument(V.min())}function e5(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&L(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof eH&&n instanceof eH||r instanceof eY&&n instanceof eY?L(r.elements,n.elements,Z):r instanceof eJ&&n instanceof eJ?Z(r.C,n.C):r instanceof eQ&&n instanceof eQ)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function e9(e){return e.isFoundDocument()?e.version:V.min()}class e7 extends e6{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}}class te extends e6{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}}function tt(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tr(e,t,r){var n;let s=new Map;e.length===r.length||E();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(n=r[i],o instanceof eH?eW(o,l):o instanceof eY?eX(o,l):n))}return s}function tn(e,t,r){let n=new Map;for(let s of e){let i=s.transform,a=r.data.field(s.field);n.set(s.field,i instanceof eQ?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,a):i instanceof eH?eW(i,a):i instanceof eY?eX(i,a):function(e,t){let r=ej(e,t),n=eZ(r)+eZ(e.C);return es(r)&&es(e.C)?ez(n):e$(e.N,n)}(i,a))}return n}class ts extends e6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class ti extends e6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.count=e}}function to(e){if(void 0===e)return p("GRPC error has no .code"),v.UNKNOWN;switch(e){case n.OK:return v.OK;case n.CANCELLED:return v.CANCELLED;case n.UNKNOWN:return v.UNKNOWN;case n.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case n.INTERNAL:return v.INTERNAL;case n.UNAVAILABLE:return v.UNAVAILABLE;case n.UNAUTHENTICATED:return v.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case n.NOT_FOUND:return v.NOT_FOUND;case n.ALREADY_EXISTS:return v.ALREADY_EXISTS;case n.PERMISSION_DENIED:return v.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case n.ABORTED:return v.ABORTED;case n.OUT_OF_RANGE:return v.OUT_OF_RANGE;case n.UNIMPLEMENTED:return v.UNIMPLEMENTED;case n.DATA_LOSS:return v.DATA_LOSS;default:return E()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.comparator=e,this.root=t||th.EMPTY}insert(e,t){return new tl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,th.BLACK,null,null))}remove(e){return new tl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,th.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class th{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:th.RED,this.left=null!=n?n:th.EMPTY,this.right=null!=s?s:th.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new th(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return th.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return th.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,th.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,th.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}th.EMPTY=null,th.RED=!0,th.BLACK=!1,th.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,r,n,s){return this}insert(e,t,r){return new th(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.comparator=e,this.data=new tl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tc)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let n=t.getNext().key,s=r.getNext().key;if(0!==this.comparator(n,s))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tc(this.comparator);return t.data=e,t}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf=new tl(X.comparator),tm=new tl(X.comparator),tg=new tl(X.comparator),tp=new tc(X.comparator);function ty(...e){let t=tp;for(let r of e)t=t.add(r);return t}let tw=new tc(C);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){let r=new Map;return r.set(e,tv.createSynthesizedTargetChangeForCurrentChange(e,t)),new tE(V.min(),r,tw,tf,ty())}}class tv{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new tv(K.EMPTY_BYTE_STRING,t,ty(),ty(),ty())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,r,n){this.k=e,this.removedTargetIds=t,this.key=r,this.$=n}}class tI{constructor(e,t){this.targetId=e,this.O=t}}class tS{constructor(e,t,r=K.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tN{constructor(){this.F=0,this.M=t_(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ty(),t=ty(),r=ty();return this.M.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:E()}}),new tv(this.L,this.B,e,t,r)}G(){this.U=!1,this.M=t_()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class tA{constructor(e){this.tt=e,this.et=new Map,this.nt=tf,this.st=tb(),this.it=new tc(C)}rt(e){for(let t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(let r of e.removedTargetIds)this.ct(r,e.key,e.$)}at(e){this.forEachTarget(e,t=>{let r=this.ut(t);switch(e.state){case 0:this.ht(t)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(t);break;case 3:this.ht(t)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),r.j(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,r)=>{this.ht(r)&&t(r)})}ft(e){let t=e.targetId,r=e.O.count,n=this.dt(t);if(n){let s=n.target;if(ep(s)){if(0===r){let i=new X(s.path);this.ct(t,i,ec.newNoDocument(i,V.min()))}else 1===r||E()}else this.wt(t)!==r&&(this.lt(t),this.it=this.it.add(t))}}_t(e){let t=new Map;this.et.forEach((r,n)=>{let s=this.dt(n);if(s){if(r.current&&ep(s.target)){let i=new X(s.target.path);null!==this.nt.get(i)||this.gt(n,i)||this.ct(n,i,ec.newNoDocument(i,e))}r.K&&(t.set(n,r.W()),r.G())}});let r=ty();this.st.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.dt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))});let n=new tE(e,t,this.it,this.nt,r);return this.nt=tf,this.st=tb(),this.it=new tc(C),n}ot(e,t){if(!this.ht(e))return;let r=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,r),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,r){if(!this.ht(e))return;let n=this.ut(e);this.gt(e,t)?n.H(t,1):n.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),r&&(this.nt=this.nt.insert(t,r))}removeTarget(e){this.et.delete(e)}wt(e){let t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new tN,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new tc(C),this.st=this.st.insert(e,t)),t}ht(e){let t=null!==this.dt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}dt(e){let t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new tN),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function tb(){return new tl(X.comparator)}function t_(){return new tl(X.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD={asc:"ASCENDING",desc:"DESCENDING"},tk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tC{constructor(e,t){this.databaseId=e,this.D=t}}function tL(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tR(e,t){return e.D?t.toBase64():t.toUint8Array()}function tV(e){return e||E(),V.fromTimestamp(function(e){let t=z(e);return new R(t.seconds,t.nanos)}(e))}function tx(e,t){return new O(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function tM(e){let t=O.fromString(e);return tj(t)||E(),t}function tU(e,t){return tx(e.databaseId,t.path)}function tF(e,t){let r=tM(t);if(r.get(1)!==e.databaseId.projectId)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new X(tq(r))}function tO(e,t){return tx(e.databaseId,t)}function tP(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tq(e){return e.length>4&&"documents"===e.get(4)||E(),e.popFirst(5)}function tB(e,t,r){return{name:tU(e,t),fields:r.value.mapValue.fields}}function tK(e){return{before:e.before,values:e.position}}function t$(e){let t=!!e.before,r=e.values||[];return new eb(r,t)}function tz(e){return{fieldPath:e.canonicalString()}}function tG(e){return q.fromServerFormat(e.fieldPath)}function tj(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tQ(e){var t,r;let n="";for(let s=0;s<e.length;s++)n.length>0&&(n+="\x01\x01"),n=function(e,t){let r=t,n=e.length;for(let s=0;s<n;s++){let i=e.charAt(s);switch(i){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=i}}return r}(e.get(s),n);return n+"\x01\x01"}class tH{constructor(e,t,r){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=r}}tH.store="owner",tH.key="owner";class tW{constructor(e,t,r){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=r}}tW.store="mutationQueues",tW.keyPath="userId";class tY{constructor(e,t,r,n,s){this.userId=e,this.batchId=t,this.localWriteTimeMs=r,this.baseMutations=n,this.mutations=s}}tY.store="mutations",tY.keyPath="batchId",tY.userMutationsIndex="userMutationsIndex",tY.userMutationsKeyPath=["userId","batchId"];class tX{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,tQ(t)]}static key(e,t,r){return[e,tQ(t),r]}}tX.store="documentMutations",tX.PLACEHOLDER=new tX;class tJ{constructor(e,t,r,n,s,i){this.unknownDocument=e,this.noDocument=t,this.document=r,this.hasCommittedMutations=n,this.readTime=s,this.parentPath=i}}tJ.store="remoteDocuments",tJ.readTimeIndex="readTimeIndex",tJ.readTimeIndexPath="readTime",tJ.collectionReadTimeIndex="collectionReadTimeIndex",tJ.collectionReadTimeIndexPath=["parentPath","readTime"];class tZ{constructor(e){this.byteSize=e}}tZ.store="remoteDocumentGlobal",tZ.key="remoteDocumentGlobalKey";class t0{constructor(e,t,r,n,s,i,a){this.targetId=e,this.canonicalId=t,this.readTime=r,this.resumeToken=n,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=a}}t0.store="targets",t0.keyPath="targetId",t0.queryTargetsIndexName="queryTargetsIndex",t0.queryTargetsKeyPath=["canonicalId","targetId"];class t1{constructor(e,t,r){this.targetId=e,this.path=t,this.sequenceNumber=r}}t1.store="targetDocuments",t1.keyPath=["targetId","path"],t1.documentTargetsIndex="documentTargetsIndex",t1.documentTargetsKeyPath=["path","targetId"];class t2{constructor(e,t,r,n){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=r,this.targetCount=n}}t2.key="targetGlobalKey",t2.store="targetGlobal";class t3{constructor(e,t){this.collectionId=e,this.parent=t}}t3.store="collectionParents",t3.keyPath=["collectionId","parent"];class t4{constructor(e,t,r,n){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=r,this.inForeground=n}}t4.store="clientMetadata",t4.keyPath="clientId";class t6{constructor(e,t,r){this.bundleId=e,this.createTime=t,this.version=r}}t6.store="bundles",t6.keyPath="bundleId";class t8{constructor(e,t,r){this.name=e,this.readTime=t,this.bundledQuery=r}}t8.store="namedQueries",t8.keyPath="name",tW.store,tY.store,tX.store,tJ.store,t0.store,tH.store,t2.store,t1.store,t4.store,tZ.store,t3.store,t6.store,t8.store;class t5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new t9((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof t9?t:t9.resolve(t)}catch(r){return t9.reject(r)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):t9.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):t9.reject(t)}static resolve(e){return new t9((t,r)=>{t(e)})}static reject(e){return new t9((t,r)=>{r(e)})}static waitFor(e){return new t9((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=t9.resolve(!1);for(let r of e)t=t.next(e=>e?t9.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}}function t7(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){let s=this.mutations[n];if(s.key.isEqual(e.key)){var i;i=r[n],s instanceof e7?function(e,t,r){let n=e.value.clone(),s=tr(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(s,e,i):s instanceof te?function(e,t,r){if(!e4(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tr(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(tt(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,e,i):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e){for(let t of this.baseMutations)t.key.isEqual(e.key)&&e8(t,e,this.localWriteTime);for(let r of this.mutations)r.key.isEqual(e.key)&&e8(r,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{let r=e.get(t.key);this.applyToLocalView(r),r.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ty())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>e5(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>e5(e,t))}}class rt{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||E();let n=tg,s=e.mutations;for(let i=0;i<s.length;i++)n=n.insert(s[i].key,r[i].version);return new rt(e,t,r,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,r,n,s=V.min(),i=V.min(),a=K.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.Wt=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Gt=new ri}addToCollectionParentIndex(e,t){return this.Gt.add(t),t9.resolve()}getCollectionParents(e,t){return t9.resolve(this.Gt.getEntries(t))}}class ri{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new tc(O.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new tc(O.comparator)).toArray()}}class ra{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ra(e,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ra.DEFAULT_COLLECTION_PERCENTILE=10,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ra.DEFAULT=new ra(41943040,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ra.DISABLED=new ra(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ro(0)}static ie(){return new ro(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(e){if(e.code!==v.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[n,s]of r)if(this.equalsFn(n,e))return s}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0!==n){for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t])}else this.inner[r]=[[e,t]]}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),!0;return!1}forEach(e){M(this.inner,(t,r)=>{for(let[n,s]of r)e(n,s)})}isEmpty(){return U(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.changes=new ru(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){let t=this.changes.get(e);return t?t.readTime:V.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ec.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?t9.resolve(r.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,r){this.He=e,this.In=t,this.Ht=r}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Rn(e,t,r))}Rn(e,t,r){return this.He.getEntry(e,t).next(e=>{for(let t of r)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,r)=>{for(let n of t)n.applyToLocalView(r)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,r){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.Vn(e,t.path):null!==t.collectionGroup?this.Sn(e,t,r):this.Dn(e,t,r)}Vn(e,t){return this.An(e,new X(t)).next(e=>{let t=tm;return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,r){let n=t.collectionGroup,s=tm;return this.Ht.getCollectionParents(e,n).next(i=>t9.forEach(i,i=>{var a;let o=(a=i.child(n),new eL(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.Dn(e,o,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}Dn(e,t,r){let n;return this.He.getDocumentsMatchingQuery(e,t,r).next(r=>(n=r,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>this.Cn(e,t,n).next(e=>{for(let r of(n=e,t))for(let s of r.mutations){let i=s.key,a=n.get(i);null==a&&(a=ec.newInvalidDocument(i),n=n.insert(i,a)),e8(s,a,r.localWriteTime),a.isFoundDocument()||(n=n.remove(i))}})).next(()=>(n.forEach((e,r)=>{eB(t,r)||(n=n.remove(e))}),n))}Cn(e,t,r){let n=ty();for(let s of t)for(let i of s.mutations)i instanceof te&&null===r.get(i.key)&&(n=n.add(i.key));let a=r;return this.He.getEntries(e,n).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(a=a.insert(e,t))}),a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Nn=r,this.xn=n}static kn(e,t){let r=ty(),n=ty();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new rd(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,r,n){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())||r.isEqual(V.min())?this.Fn(e,t):this.On.Pn(e,n).next(s=>{let i=this.Mn(t,s);return(eR(t)||eV(t))&&this.Ln(t.limitType,i,n,r)?this.Fn(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),eq(t)),this.On.getDocumentsMatchingQuery(e,t,r).next(e=>(i.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let r=new tc(eK(e));return t.forEach((t,n)=>{eB(e,n)&&(r=r.add(n))}),r}Ln(e,t,r,n){if(r.size!==t.size)return!0;let s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Fn(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",eq(t)),this.On.getDocumentsMatchingQuery(e,t,V.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,n){this.persistence=e,this.Bn=t,this.N=n,this.Un=new tl(C),this.qn=new ru(e=>em(e),eg),this.Kn=V.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new rc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}async function rg(e,t){let r=e,n=r.In,s=r.Qn,i=await r.persistence.runTransaction("Handle user change","readonly",e=>{let i;return r.In.getAllMutationBatches(e).next(a=>(i=a,n=r.persistence.getMutationQueue(t),s=new rc(r.jn,n,r.persistence.getIndexManager()),n.getAllMutationBatches(e))).next(t=>{let r=[],n=[],a=ty();for(let o of i)for(let l of(r.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(n.push(u.batchId),u.mutations))a=a.add(h.key);return s.Pn(e,a).next(e=>({Wn:e,removedBatchIds:r,addedBatchIds:n}))})});return r.In=n,r.Qn=s,r.Bn.$n(r.Qn),i}function rp(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}async function ry(e,t,r){let n=e,s=n.Un.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,s))}catch(i){if(!t7(i))throw i;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${i}`)}n.Un=n.Un.remove(t),n.qn.delete(s.target)}function rw(e,t,r){let n=V.min(),s=ty();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,r){let n=e.qn.get(r);return void 0!==n?t9.resolve(e.Un.get(n)):e.ze.getTargetData(t,r)})(e,i,eF(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.ze.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.Bn.getDocumentsMatchingQuery(i,t,r?n:V.min(),r?s:ty())).next(e=>({documents:e,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return t9.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){return this.Yn.set(t.id,{id:t.id,version:t.version,createTime:tV(t.createTime)}),t9.resolve()}getNamedQuery(e,t){return t9.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:function(e){var t;let r=function(e){var t,r,n,s,i,a,o,l;let u,h=function(e){let t=tM(e);return 4===t.length?O.emptyPath():tq(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||E();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function e(t){return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tG(e.unaryFilter.field);return ey.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=tG(e.unaryFilter.field);return ey.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=tG(e.unaryFilter.field);return ey.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=tG(e.unaryFilter.field);return ey.create(s,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(t)]:void 0!==t.fieldFilter?[ey.create(tG(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):E():[]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eD(tG(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;c.limit&&(y=W(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let w=null;c.startAt&&(w=t$(c.startAt));let v=null;return c.endAt&&(v=t$(c.endAt)),r=h,n=f,s=p,i=g,a=y,o=w,l=v,new eL(r,n,s,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?(t=r.limit,new eL(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,"L",r.startAt,r.endAt)):r}(t.bundledQuery),readTime:tV(t.readTime)}),t9.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.Zn=new tc(rT.ts),this.es=new tc(rT.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){let r=new rT(e,t);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new rT(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){let t=new X(new O([])),r=new rT(t,e),n=new rT(t,e+1),s=[];return this.es.forEachInRange([r,n],e=>{this.rs(e),s.push(e.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){let t=new X(new O([])),r=new rT(t,e),n=new rT(t,e+1),s=ty();return this.es.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new rT(e,0),r=this.Zn.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rT{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return X.comparator(e.key,t.key)||C(e.ls,t.ls)}static ns(e,t){return C(e.ls,t.ls)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new tc(rT.ts)}checkEmpty(e){return t9.resolve(0===this.In.length)}addMutationBatch(e,t,r,n){let s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];let i=new re(s,t,r,n);for(let a of(this.In.push(i),n))this.ds=this.ds.add(new rT(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return t9.resolve(i)}lookupMutationBatch(e,t){return t9.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){let r=this._s(t+1),n=r<0?0:r;return t9.resolve(this.In.length>n?this.In[n]:null)}getHighestUnacknowledgedBatchId(){return t9.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return t9.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rT(t,0),n=new rT(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,n],e=>{let t=this.ws(e.ls);s.push(t)}),t9.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tc(C);return t.forEach(e=>{let t=new rT(e,0),n=new rT(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,n],e=>{r=r.add(e.ls)})}),t9.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;X.isDocumentKey(s)||(s=s.child(""));let i=new rT(new X(s),0),a=new tc(C);return this.ds.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.ls)),!0)},i),t9.resolve(this.gs(a))}gs(e){let t=[];return e.forEach(e=>{let r=this.ws(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.ys(t.batchId,"removed")||E(),this.In.shift();let r=this.ds;return t9.forEach(t.mutations,n=>{let s=new rT(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,t){let r=new rT(t,0),n=this.ds.firstAfterOrEqual(r);return t9.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.In.length,t9.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){let t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new tl(X.comparator),this.size=0}addEntry(e,t,r){let n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.ps(t);return this.docs=this.docs.insert(n,{document:t.clone(),size:a,readTime:r}),this.size+=a-i,this.Ht.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return t9.resolve(r?r.document.clone():ec.newInvalidDocument(t))}getEntries(e,t){let r=tf;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.clone():ec.newInvalidDocument(e))}),t9.resolve(r)}getDocumentsMatchingQuery(e,t,r){let n=tf,s=new X(t.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){let{key:a,value:{document:o,readTime:l}}=i.getNext();if(!t.path.isPrefixOf(a.path))break;0>=l.compareTo(r)||eB(t,o)&&(n=n.insert(o.key,o.clone()))}return t9.resolve(n)}Ts(e,t){return t9.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rN(this)}getSize(e){return t9.resolve(this.size)}}class rN extends rh{constructor(e){super(),this.Se=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.document.isValidDocument()?t.push(this.Se.addEntry(e,n.document,this.getReadTime(r))):this.Se.removeEntry(r)}),t9.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.persistence=e,this.Es=new ru(e=>em(e),eg),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Is=0,this.As=new rv,this.targetCount=0,this.Rs=ro.se()}forEachTarget(e,t){return this.Es.forEach((e,r)=>t(r)),t9.resolve()}getLastRemoteSnapshotVersion(e){return t9.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return t9.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),t9.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Is&&(this.Is=t),t9.resolve()}ce(e){this.Es.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Rs=new ro(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,t9.resolve()}updateTargetData(e,t){return this.ce(t),t9.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,t9.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.Es.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Es.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),t9.waitFor(s).next(()=>n)}getTargetCount(e){return t9.resolve(this.targetCount)}getTargetData(e,t){let r=this.Es.get(t)||null;return t9.resolve(r)}addMatchingKeys(e,t,r){return this.As.ss(t,r),t9.resolve()}removeMatchingKeys(e,t,r){this.As.os(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),t9.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),t9.resolve()}getMatchingKeysForTargetId(e,t){let r=this.As.hs(t);return t9.resolve(r)}containsKey(e,t){return t9.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){var r,n;this.bs={},this.Le=new D(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new rA(this),this.Ht=new rs,this.He=(r=this.Ht,n=e=>this.referenceDelegate.Ps(e),new rS(r,n)),this.N=new rn(t),this.Je=new rE(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new rI(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new r_(this.Le.next());return this.referenceDelegate.vs(),r(n).next(e=>this.referenceDelegate.Vs(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ss(e,t){return t9.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,t)))}}class r_ extends t5{constructor(e){super(),this.currentSequenceNumber=e}}class rD{constructor(e){this.persistence=e,this.Ds=new rv,this.Cs=null}static Ns(e){return new rD(e)}get xs(){if(this.Cs)return this.Cs;throw E()}addReference(e,t,r){return this.Ds.addReference(r,t),this.xs.delete(r.toString()),t9.resolve()}removeReference(e,t,r){return this.Ds.removeReference(r,t),this.xs.add(r.toString()),t9.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),t9.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return t9.forEach(this.xs,r=>{let n=X.fromPath(r);return this.ks(e,n).next(e=>{e||t.removeEntry(n)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return t9.or([()=>t9.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}class rk{constructor(){this.activeTargetIds=tw}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rC{constructor(){this.yi=new rk,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,r){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new rk,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.bi))e(0)}Ri(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.bi))e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,r,n){let s=this.Bi(e,t);g("RestConnection","Sending: ",s,r);let i={};return this.Ui(i,n),this.qi(e,s,i,r).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",r),t})}Ki(e,t,r,n){return this.Li(e,t,r,n)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(let r in t.authHeaders)t.authHeaders.hasOwnProperty(r)&&(e[r]=t.authHeaders[r])}Bi(e,t){let r=rV[e];return`${this.Fi}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,r,n){return new Promise((s,i)=>{let a=new u.JJ;a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(v.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let n=a.getResponseJson().error;if(n&&n.status&&n.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(t)>=0?t:v.UNKNOWN}(n.status);i(new T(o,n.message))}else i(new T(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(v.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(n);a.send(t,"POST",o,r,15)})}ji(e,t){let r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,u.UE)(),i=(0,u.FJ)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new u.zI({})),this.Ui(a.initMessageHeaders,t),(0,l.uI)()||(0,l.b$)()||(0,l.d)()||(0,l.w1)()||(0,l.Mn)()||(0,l.ru)()||(a.httpHeadersOverwriteParam="$httpHeaders");let o=r.join("");g("Connection","Creating WebChannel: "+o,a);let h=s.createWebChannel(o,a),c=!1,d=!1,f=new rx({vi:e=>{d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),h.open(),c=!0),g("Connection","WebChannel sending:",e),h.send(e))},Vi:()=>h.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.$i())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.$i(new T(v.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t;if(!d){let r=e.data[0];r||E();let s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){g("Connection","WebChannel received error:",s);let i=s.status,a=function(e){let t=n[e];if(void 0!==t)return to(t)}(i),o=s.message;void 0===a&&(a=v.INTERNAL,o="Unknown error status: "+i+" with message "+s.message),d=!0,f.$i(new T(a,o)),h.close()}else g("Connection","WebChannel received:",r),f.Oi(r)}}),m(i,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}function rU(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(e){return new tC(e,!0)}class rO{constructor(e,t,r=1e3,n=1.5,s=6e4){this.Oe=e,this.timerId=t,this.Qi=r,this.Wi=n,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();let t=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,n,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t,r,n,s,i,a){this.Oe=e,this.er=r,this.nr=n,this.sr=s,this.credentialsProvider=i,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new rO(e,t)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==e?this.ar.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===v.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;let e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(e=>{this.ir===t&&this.Er(e)},t=>{e(()=>{let e=new T(v.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ir(e)})})}Er(e){let t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.Ir(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rq extends rP{constructor(e,t,r,n,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s),this.N=n}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:E(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.D?(void 0===s||"string"==typeof s||E(),K.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||E(),K.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?v.UNKNOWN:to(e.code);return new T(t,e.message||"")}(l);r=new tS(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let h=t.documentChange;h.document,h.document.name,h.document.updateTime;let c=tF(e,h.document.name),d=tV(h.document.updateTime),f=new eh({mapValue:{fields:h.document.fields}}),m=ec.newFoundDocument(c,d,f),g=h.targetIds||[],p=h.removedTargetIds||[];r=new tT(g,p,m.key,m)}else if("documentDelete"in t){t.documentDelete;let y=t.documentDelete;y.document;let w=tF(e,y.document),I=y.readTime?tV(y.readTime):V.min(),S=ec.newNoDocument(w,I),N=y.removedTargetIds||[];r=new tT([],N,S.key,S)}else if("documentRemove"in t){t.documentRemove;let A=t.documentRemove;A.document;let b=tF(e,A.document),_=A.removedTargetIds||[];r=new tT([],_,b,null)}else{if(!("filter"in t))return E();{t.filter;let D=t.filter;D.targetId;let k=D.count||0,C=new ta(k),L=D.targetId;r=new tI(L,C)}}return r}(this.N,e),r=function(e){if(!("targetChange"in e))return V.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?tV(t.readTime):V.min()}(e);return this.listener.Rr(t,r)}br(e){let t={};t.database=tP(this.N),t.addTarget=function(e,t){let r;let n=t.target;return(r=ep(n)?{documents:{documents:[tO(e,n.path)]}}:{query:function(e,t){var r;let n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=tO(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tO(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);let i=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){if("=="===e.op){if(eo(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NAN"}};if(ea(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eo(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NOT_NAN"}};if(ea(e.value))return{unaryFilter:{field:tz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tz(e.field),op:tk[e.op],value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);let a=function(e){if(0!==e.length)return e.map(e=>({field:tz(e.field),direction:tD[e.dir]}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);let o=(r=t.limit,e.D||W(r)?r:{value:r});return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=tK(t.startAt)),t.endAt&&(n.structuredQuery.endAt=tK(t.endAt)),n}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?r.resumeToken=tR(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(r.readTime=tL(e,t.snapshotVersion.toTimestamp())),r}(this.N,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.N,e);r&&(t.labels=r),this.mr(t)}Pr(e){let t={};t.database=tP(this.N),t.removeTarget=e,this.mr(t)}}class rB extends rP{constructor(e,t,r,n,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s),this.N=n,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){var t,r;if(e.streamToken||E(),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||E(),t.map(e=>{let t;return(t=e.updateTime?tV(e.updateTime):tV(r)).isEqual(V.min())&&(t=tV(r)),new e2(t,e.transformResults||[])})):[]),s=tV(e.commitTime);return this.listener.Dr(s,n)}return e.writeResults&&0!==e.writeResults.length&&E(),this.vr=!0,this.listener.Cr()}Nr(){let e={};e.database=tP(this.N),this.mr(e)}Sr(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof e7)n={update:tB(e,t.key,t.value)};else if(t instanceof ts)n={delete:tU(e,t.key)};else if(t instanceof te)n={update:tB(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof ti))return E();n={verify:tU(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof eQ)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof eH)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof eY)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof eJ)return{fieldPath:t.field.canonicalString(),increment:r.C};throw E()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:tL(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:E()),n})(this.N,e))};this.mr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK extends class{}{constructor(e,t,r){super(),this.credentials=e,this.sr=t,this.N=r,this.kr=!1}$r(){if(this.kr)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,r){return this.$r(),this.credentials.getToken().then(n=>this.sr.Li(e,t,r,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new T(v.UNKNOWN,e.toString())})}Ki(e,t,r){return this.$r(),this.credentials.getToken().then(n=>this.sr.Ki(e,t,r,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new T(v.UNKNOWN,e.toString())})}terminate(){this.kr=!0}}class r${constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,"Online"===e&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(p(t),this.Mr=!1):g("OnlineStateTracker",t)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(e=>{r.enqueueAndForget(async()=>{rZ(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.Wr.add(4),await rj(e),e.Hr.set("Unknown"),e.Wr.delete(4),await rG(e)}(this))})}),this.Hr=new r$(r,n)}}async function rG(e){if(rZ(e))for(let t of e.Gr)await t(!0)}async function rj(e){for(let t of e.Gr)await t(!1)}function rQ(e,t){e.Qr.has(t.targetId)||(e.Qr.set(t.targetId,t),rJ(e)?rX(e):nn(e).hr()&&rW(e,t))}function rH(e,t){let r=nn(e);e.Qr.delete(t),r.hr()&&rY(e,t),0===e.Qr.size&&(r.hr()?r.wr():rZ(e)&&e.Hr.set("Unknown"))}function rW(e,t){e.Jr.Y(t.targetId),nn(e).br(t)}function rY(e,t){e.Jr.Y(t),nn(e).Pr(t)}function rX(e){e.Jr=new tA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.Qr.get(t)||null}),nn(e).start(),e.Hr.Lr()}function rJ(e){return rZ(e)&&!nn(e).ur()&&e.Qr.size>0}function rZ(e){return 0===e.Wr.size}async function r0(e){e.Qr.forEach((t,r)=>{rW(e,t)})}async function r1(e,t){e.Jr=void 0,rJ(e)?(e.Hr.qr(t),rX(e)):e.Hr.set("Unknown")}async function r2(e,t,r){if(e.Hr.set("Online"),t instanceof tS&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Qr.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Qr.delete(n),e.Jr.removeTarget(n))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await r3(e,n)}else if(t instanceof tT?e.Jr.rt(t):t instanceof tI?e.Jr.ft(t):e.Jr.at(t),!r.isEqual(V.min()))try{let s=await rp(e.localStore);r.compareTo(s)>=0&&await function(e,t){let r=e.Jr._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.Qr.get(n);s&&e.Qr.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.Qr.get(t);if(!r)return;e.Qr.set(t,r.withResumeToken(K.EMPTY_BYTE_STRING,r.snapshotVersion)),rY(e,t);let n=new rr(r.target,t,1,r.sequenceNumber);rW(e,n)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await r3(e,i)}}async function r3(e,t,r){if(!t7(t))throw t;e.Wr.add(1),await rj(e),e.Hr.set("Offline"),r||(r=()=>rp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.Wr.delete(1),await rG(e)})}function r4(e,t){return t().catch(r=>r3(e,r,t))}async function r6(e){let t=ns(e),r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;rZ(e)&&e.jr.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.In.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.jr.length&&t.wr();break}r=n.batchId,function(e,t){e.jr.push(t);let r=ns(e);r.hr()&&r.Vr&&r.Sr(t.mutations)}(e,n)}catch(s){await r3(e,s)}r8(e)&&r5(e)}function r8(e){return rZ(e)&&!ns(e).ur()&&e.jr.length>0}function r5(e){ns(e).start()}async function r9(e){ns(e).Nr()}async function r7(e){let t=ns(e);for(let r of e.jr)t.Sr(r.mutations)}async function ne(e,t,r){let n=e.jr.shift(),s=rt.from(n,t,r);await r4(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await r6(e)}async function nt(e,t){t&&ns(e).Vr&&await async function(e,t){var r;if(function(e){switch(e){default:return E();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}(r=t.code)&&r!==v.ABORTED){let n=e.jr.shift();ns(e).dr(),await r4(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await r6(e)}}(e,t),r8(e)&&r5(e)}async function nr(e,t){t?(e.Wr.delete(2),await rG(e)):t||(e.Wr.add(2),await rj(e),e.Hr.set("Unknown"))}function nn(e){var t,r,n;return e.Yr||(e.Yr=(t=e.datastore,r=e.asyncQueue,n={Si:r0.bind(null,e),Ci:r1.bind(null,e),Rr:r2.bind(null,e)},t.$r(),new rq(r,t.sr,t.credentials,t.N,n)),e.Gr.push(async t=>{t?(e.Yr.dr(),rJ(e)?rX(e):e.Hr.set("Unknown")):(await e.Yr.stop(),e.Jr=void 0)})),e.Yr}function ns(e){var t,r,n;return e.Xr||(e.Xr=(t=e.datastore,r=e.asyncQueue,n={Si:r9.bind(null,e),Ci:nt.bind(null,e),Cr:r7.bind(null,e),Dr:ne.bind(null,e)},t.$r(),new rB(r,t.sr,t.credentials,t.N,n)),e.Gr.push(async t=>{t?(e.Xr.dr(),await r6(e)):(await e.Xr.stop(),e.jr.length>0&&(g("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))})),e.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,s){let i=Date.now()+r,a=new ni(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function na(e,t){if(p("AsyncQueue",`${t}: ${e}`),t7(e))return new T(v.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=tm,this.sortedSet=new tl(this.comparator)}static emptySet(e){return new no(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let n=t.getNext().key,s=r.getNext().key;if(!n.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new no;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Zr=new tl(X.comparator)}track(e){let t=e.doc.key,r=this.Zr.get(t);r?0!==e.type&&3===r.type?this.Zr=this.Zr.insert(t,e):3===e.type&&1!==r.type?this.Zr=this.Zr.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Zr=this.Zr.remove(t):1===e.type&&2===r.type?this.Zr=this.Zr.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):E():this.Zr=this.Zr.insert(t,e)}eo(){let e=[];return this.Zr.inorderTraversal((t,r)=>{e.push(r)}),e}}class nu{constructor(e,t,r,n,s,i,a,o){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,r,n){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new nu(e,t,no.emptySet(t),s,r,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eO(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==r[n].type||!t[n].doc.isEqual(r[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.no=void 0,this.listeners=[]}}class nc{constructor(){this.queries=new ru(e=>eP(e),eO),this.onlineState="Unknown",this.so=new Set}}async function nd(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s||(n=!0,s=new nh),n)try{s.no=await e.onListen(r)}catch(a){let i=na(a,`Initialization of query '${eq(t.query)}' failed`);return void t.onError(i)}e.queries.set(r,s),s.listeners.push(t),t.io(e.onlineState),s.no&&t.ro(s.no)&&np(e)}async function nf(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s){let i=s.listeners.indexOf(t);i>=0&&(s.listeners.splice(i,1),n=0===s.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function nm(e,t){let r=!1;for(let n of t){let s=n.query,i=e.queries.get(s);if(i){for(let a of i.listeners)a.ro(n)&&(r=!0);i.no=n}}r&&np(e)}function ng(e,t,r){let n=e.queries.get(t);if(n)for(let s of n.listeners)s.onError(r);e.queries.delete(t)}function np(e){e.so.forEach(e=>{e.next()})}class ny{constructor(e,t,r){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){return!e.fromCache||(!this.options.fo||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}uo(e){if(e.docChanges.length>0)return!0;let t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}lo(e){e=nu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class nv{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=ty(),this.mutatedKeys=ty(),this.Io=eK(e),this.Ao=new no(this.Io)}get Ro(){return this.po}bo(e,t){let r=t?t.Po:new nl,n=t?t.Ao:this.Ao,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o=eR(this.query)&&n.size===this.query.limit?n.last():null,l=eV(this.query)&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=eB(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.vo(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.Io(h,o)>0||l&&0>this.Io(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),eR(this.query)||eV(this.query))for(;i.size>this.query.limit;){let u=eR(this.query)?i.last():i.first();i=i.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ao:i,Po:r,Ln:a,mutatedKeys:s}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;let s=e.Po.eo();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return r(e)-r(t)})(e.type,t.type)||this.Io(e.doc,t.doc)),this.Vo(r);let i=t?this.So():[],a=0===this.Eo.size&&this.current?1:0,o=a!==this.To;return(this.To=a,0!==s.length||o)?{snapshot:new nu(this.query,e.Ao,n,s,e.mutatedKeys,0===a,o,!1),Do:i}:{Do:i}}io(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new nl,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(e=>this.po=this.po.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.po=this.po.delete(e)),this.current=e.current)}So(){if(!this.current)return[];let e=this.Eo;this.Eo=ty(),this.Ao.forEach(e=>{this.Co(e.key)&&(this.Eo=this.Eo.add(e.key))});let t=[];return e.forEach(e=>{this.Eo.has(e)||t.push(new nE(e))}),this.Eo.forEach(r=>{e.has(r)||t.push(new nw(r))}),t}No(e){this.po=e.Gn,this.Eo=ty();let t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return nu.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class nT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nI{constructor(e){this.key=e,this.ko=!1}}class nS{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.$o={},this.Oo=new ru(e=>eP(e),eO),this.Fo=new Map,this.Mo=new Set,this.Lo=new tl(X.comparator),this.Bo=new Map,this.Uo=new rv,this.qo={},this.Ko=new Map,this.jo=ro.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function nN(e,t){let r,n;let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=nD.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nB.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nC.bind(null,t),t.$o.Rr=nm.bind(null,t.eventManager),t.$o.Go=ng.bind(null,t.eventManager),t}(e),i=s.Oo.get(t);if(i)r=i.targetId,s.sharedClientState.addLocalQueryTarget(r),n=i.view.xo();else{let a=await function(e,t){let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.ze.getTargetData(e,t).next(s=>s?(n=s,t9.resolve(n)):r.ze.allocateTargetId(e).next(s=>(n=new rr(t,s,0,e.currentSequenceNumber),r.ze.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Un.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Un=r.Un.insert(e.targetId,e),r.qn.set(t,e.targetId)),e})}(s.localStore,eF(t)),o=s.sharedClientState.addLocalQueryTarget(a.targetId);n=await nA(s,t,r=a.targetId,"current"===o),s.isPrimaryClient&&rQ(s.remoteStore,a)}return n}async function nA(e,t,r,n){e.Wo=(t,r,n)=>(async function(e,t,r,n){let s=t.view.bo(r);s.Ln&&(s=await rw(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return nF(e,t.targetId,a.Do),a.snapshot})(e,t,r,n);let s=await rw(e.localStore,t,!0),i=new nv(t,s.Gn),a=i.bo(s.documents),o=tv.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState),l=i.applyChanges(a,e.isPrimaryClient,o);nF(e,r,l.Do);let u=new nT(t,r,i);return e.Oo.set(t,u),e.Fo.has(r)?e.Fo.get(r).push(t):e.Fo.set(r,[t]),l.snapshot}async function nb(e,t){let r=e.Oo.get(t),n=e.Fo.get(r.targetId);if(n.length>1)return e.Fo.set(r.targetId,n.filter(e=>!eO(e,t))),void e.Oo.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ry(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),rH(e.remoteStore,r.targetId),nM(e,r.targetId)}).catch(rl)):(nM(e,r.targetId),await ry(e.localStore,r.targetId,!0))}async function n_(e,t,r){let n=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=nL.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,t),t}(e);try{var s,i;let a;let o=await function(e,t){let r;let n=R.now(),s=t.reduce((e,t)=>e.add(t.key),ty());return e.persistence.runTransaction("Locally write mutations","readwrite",i=>e.Qn.Pn(i,s).next(s=>{r=s;let a=[];for(let o of t){let l=function(e,t){let r=null;for(let n of e.fieldTransforms){let s=t.data.field(n.field),i=ej(n.transform,s||null);null!=i&&(null==r&&(r=eh.empty()),r.set(n.field,i))}return r||null}(o,r.get(o.key));null!=l&&a.push(new te(o.key,l,function e(t){let r=[];return M(t.fields,(t,n)=>{let s=new q([t]);if(el(n)){let i=e(n.mapValue).fields;if(0===i.length)r.push(s);else for(let a of i)r.push(s.child(a))}else r.push(s)}),new B(r)}(l.value.mapValue),e3.exists(!0)))}return e.In.addMutationBatch(i,n,a,t)})).then(e=>(e.applyToLocalDocumentSet(r),{batchId:e.batchId,changes:r}))}(n.localStore,t);n.sharedClientState.addPendingMutation(o.batchId),s=n,i=o.batchId,(a=s.qo[s.currentUser.toKey()])||(a=new tl(C)),a=a.insert(i,r),s.qo[s.currentUser.toKey()]=a,await nP(n,o.changes),await r6(n.remoteStore)}catch(u){let l=na(u,"Failed to persist write");r.reject(l)}}async function nD(e,t){try{let r=await function(e,t){let r=e,n=t.snapshotVersion,s=r.Un;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i,a;let o;let l=r.jn.newChangeBuffer({trackRemovals:!0});s=r.Un;let u=[];t.targetChanges.forEach((t,i)=>{let a=s.get(i);if(!a)return;u.push(r.ze.removeMatchingKeys(e,t.removedDocuments,i).next(()=>r.ze.addMatchingKeys(e,t.addedDocuments,i)));let o=t.resumeToken;if(o.approximateByteSize()>0){let l=a.withResumeToken(o,n).withSequenceNumber(e.currentSequenceNumber);s=s.insert(i,l),l.resumeToken.approximateByteSize()>0||E(),(0===a.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-a.snapshotVersion.toMicroseconds()>=3e8||t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size>0)&&u.push(r.ze.updateTargetData(e,l))}});let h=tf;if(t.documentUpdates.forEach((n,s)=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((i=t.documentUpdates,a=void 0,o=ty(),i.forEach(e=>o=o.add(e)),l.getEntries(e,o).next(e=>{let t=tf;return i.forEach((r,s)=>{let i=e.get(r),o=(null==a?void 0:a.get(r))||n;s.isNoDocument()&&s.version.isEqual(V.min())?(l.removeEntry(r,o),t=t.insert(r,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(s,o),t=t.insert(r,s)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",s.version)}),t})).next(e=>{h=e})),!n.isEqual(V.min())){let c=r.ze.getLastRemoteSnapshotVersion(e).next(t=>r.ze.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(c)}return t9.waitFor(u).next(()=>l.apply(e)).next(()=>r.Qn.vn(e,h)).next(()=>h)}).then(e=>(r.Un=s,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Bo.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||E(),t.addedDocuments.size>0?n.ko=!0:t.modifiedDocuments.size>0?n.ko||E():t.removedDocuments.size>0&&(n.ko||E(),n.ko=!1))}),await nP(e,r,t)}catch(n){await rl(n)}}function nk(e,t,r){let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let s=[];n.Oo.forEach((e,r)=>{let n=r.view.io(t);n.snapshot&&s.push(n.snapshot)}),function(e,t){let r=e;r.onlineState=t;let n=!1;r.queries.forEach((e,r)=>{for(let s of r.listeners)s.io(t)&&(n=!0)}),n&&np(r)}(n.eventManager,t),s.length&&n.$o.Rr(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function nC(e,t,r){let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let s=n.Bo.get(t),i=s&&s.key;if(i){let a=new tl(X.comparator);a=a.insert(i,ec.newNoDocument(i,V.min()));let o=ty().add(i),l=new tE(V.min(),new Map,new tc(C),a,o);await nD(n,l),n.Lo=n.Lo.remove(i),n.Bo.delete(t),nO(n)}else await ry(n.localStore,t,!1).then(()=>nM(n,t,r)).catch(rl)}async function nL(e,t){var r;let n=t.batch.batchId;try{let s=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),s=r.jn.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let s=r.batch,i=s.keys(),a=t9.resolve();return i.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let i=r.docVersions.get(e);null!==i||E(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,r),t.isValidDocument()&&n.addEntry(t,r.commitVersion))})}),a.next(()=>e.In.removeMutationBatch(t,s))})(r,e,t,s).next(()=>s.apply(e)).next(()=>r.In.performConsistencyCheck(e)).next(()=>r.Qn.Pn(e,n))});nx(e,n,null),nV(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await nP(e,s)}catch(i){await rl(i)}}async function nR(e,t,r){var n;try{let s=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.In.lookupMutationBatch(e,t).next(t=>(null!==t||E(),r=t.keys(),n.In.removeMutationBatch(e,t))).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,r))});nx(e,t,r),nV(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await nP(e,s)}catch(i){await rl(i)}}function nV(e,t){(e.Ko.get(t)||[]).forEach(e=>{e.resolve()}),e.Ko.delete(t)}function nx(e,t,r){let n=e,s=n.qo[n.currentUser.toKey()];if(s){let i=s.get(t);i&&(r?i.reject(r):i.resolve(),s=s.remove(t)),n.qo[n.currentUser.toKey()]=s}}function nM(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Fo.get(t)))e.Oo.delete(n),r&&e.$o.Go(n,r);e.Fo.delete(t),e.isPrimaryClient&&e.Uo.cs(t).forEach(t=>{e.Uo.containsKey(t)||nU(e,t)})}function nU(e,t){e.Mo.delete(t.path.canonicalString());let r=e.Lo.get(t);null!==r&&(rH(e.remoteStore,r),e.Lo=e.Lo.remove(t),e.Bo.delete(r),nO(e))}function nF(e,t,r){for(let n of r)n instanceof nw?(e.Uo.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Lo.get(r)||e.Mo.has(n)||(g("SyncEngine","New document in limbo: "+r),e.Mo.add(n),nO(e))}(e,n)):n instanceof nE?(g("SyncEngine","Document no longer in limbo: "+n.key),e.Uo.removeReference(n.key,t),e.Uo.containsKey(n.key)||nU(e,n.key)):E()}function nO(e){for(;e.Mo.size>0&&e.Lo.size<e.maxConcurrentLimboResolutions;){var t;let r=e.Mo.values().next().value;e.Mo.delete(r);let n=new X(O.fromString(r)),s=e.jo.next();e.Bo.set(s,new nI(n)),e.Lo=e.Lo.insert(n,s),rQ(e.remoteStore,new rr(eF((t=n.path,new eL(t))),s,2,D.T))}}async function nP(e,t,r){let n=[],s=[],i=[];e.Oo.isEmpty()||(e.Oo.forEach((a,o)=>{i.push(e.Wo(o,t,r).then(t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,t.fromCache?"not-current":"current"),n.push(t);let r=rd.kn(o.targetId,t);s.push(r)}}))}),await Promise.all(i),e.$o.Rr(n),await async function(e,t){let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>t9.forEach(t,t=>t9.forEach(t.Nn,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>t9.forEach(t.xn,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(n){if(!t7(n))throw n;g("LocalStore","Failed to update sequence numbers: "+n)}for(let s of t){let i=s.targetId;if(!s.fromCache){let a=r.Un.get(i),o=a.snapshotVersion,l=a.withLastLimboFreeSnapshotVersion(o);r.Un=r.Un.insert(i,l)}}}(e.localStore,s))}async function nq(e,t){let r=e;if(!r.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let n=await rg(r.localStore,t);r.currentUser=t,r.Ko.forEach(e=>{e.forEach(e=>{e.reject(new T(v.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.Ko.clear(),r.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await nP(r,n.Wn)}}function nB(e,t){let r=e.Bo.get(t);if(r&&r.ko)return ty().add(r.key);{let n=ty(),s=e.Fo.get(t);if(!s)return n;for(let i of s){let a=e.Oo.get(i);n=n.unionWith(a.view.Ro)}return n}}class nK{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=rF(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){var t,r,n,s;return t=this.persistence,r=new rf,n=e.initialUser,s=this.N,new rm(t,r,n,s)}Jo(e){return new rb(rD.Ns,this.N)}Ho(e){return new rC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class n${async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nk(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nq.bind(null,this.syncEngine),await nr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nc}createDatastore(e){var t,r;let n=rF(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new rM(t));return r=e.credentials,new rK(r,s,n)}createRemoteStore(e){var t,r,n,s,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,s=e=>nk(this.syncEngine,e,0),i=rR.bt()?new rR:new rL,new rz(t,r,n,s,i)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new nS(e,t,r,n,s,i);return a&&(o.Qo=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await rj(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(e,t,r){this.credentials=e,this.asyncQueue=t,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=k.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{g("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(r){let t=na(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nj(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rg(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nQ(e,t){e.asyncQueue.verifyOperationInProgress();let r=await nH(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>(async function(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=rZ(e);e.Wr.add(3),await rj(e),r&&e.Hr.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Wr.delete(3),await rG(e)})(t.remoteStore,e)),e.onlineComponents=t}async function nH(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await nj(e,new nK)),e.offlineComponents}async function nW(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await nQ(e,new n$)),e.onlineComponents}async function nY(e){let t=await nW(e),r=t.eventManager;return r.onListen=nN.bind(null,t.syncEngine),r.onUnlisten=nb.bind(null,t.syncEngine),r}class nX{constructor(e,t,r,n,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class nJ{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nJ&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nZ=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(e,t,r){if(!r)throw new T(v.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function n1(e){if(!X.isDocumentKey(e))throw new T(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function n2(e){if(X.isDocumentKey(e))throw new T(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function n3(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":E()}function n4(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=n3(e);throw new T(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new T(v.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n6({}),this._settingsFrozen=!1,e instanceof nJ?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nJ(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n6(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new N;switch(e.type){case"gapi":let t=e.client;return"object"==typeof t&&null!==t&&t.auth&&t.auth.getAuthHeaderValueForFirstParty||E(),new _(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(v.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nZ.get(e);t&&(g("ComponentProvider","Removing Datastore"),nZ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n7(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n5(this.firestore,e,this._key)}}class n9{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n9(this.firestore,e,this._query)}}class n7 extends n9{constructor(e,t,r){super(e,t,new eL(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new n5(this.firestore,null,new X(e))}withConverter(e){return new n7(this.firestore,e,this._path)}}function se(e,t,...r){if(e=(0,l.m9)(e),n0("collection","path",t),e instanceof n8){let n=O.fromString(t,...r);return n2(n),new n7(e,null,n)}{if(!(e instanceof n5||e instanceof n7))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(O.fromString(t,...r));return n2(s),new n7(e.firestore,null,s)}}function st(e,t,...r){if(e=(0,l.m9)(e),1==arguments.length&&(t=k.I()),n0("doc","path",t),e instanceof n8){let n=O.fromString(t,...r);return n1(n),new n5(e,null,new X(n))}{if(!(e instanceof n5||e instanceof n7))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(O.fromString(t,...r));return n1(s),new n5(e.firestore,e instanceof n7?e.converter:null,new X(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new rO(this,"async_queue_retry"),this.Rc=()=>{let e=rU();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ar.tr()};let e=rU();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;let t=rU();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});let t=new I;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!t7(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){let t=this._c.then(()=>(this.Ec=!0,e().catch(e=>{let t;this.Tc=e,this.Ec=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Ec=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);let n=ni.createAndSchedule(this,e,t,r,e=>this.Vc(e));return this.yc.push(n),n}bc(){this.Tc&&E()}verifyOperationInProgress(){}async Sc(){let e;do await (e=this._c);while(e!==this._c)}Dc(e){for(let t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{for(let t of(this.yc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.yc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){let t=this.yc.indexOf(e);this.yc.splice(t,1)}}function sn(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class ss extends n8{constructor(e,t){super(e,t),this.type="firestore",this._queue=new sr,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||so(this),this._firestoreClient.terminate()}}function si(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function sa(e){return e._firestoreClient||so(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function so(e){var t,r,n,s;let i=e._freezeSettings(),a=(r=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new nX(r,n,s,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new nG(e._credentials,e._queue,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this._byteString=e}static fromBase64String(e){try{return new su(K.fromBase64String(e))}catch(t){throw new T(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new su(K.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return C(this._lat,e._lat)||C(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd=/^__.*__$/;class sf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new te(e,this.data,this.fieldMask,t,this.fieldTransforms):new e7(e,this.data,t,this.fieldTransforms)}}class sm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new te(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class sp{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.N=r,this.ignoreUndefinedProperties=n,void 0===s&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.$c({path:r,Fc:!1});return n.Mc(e),n}Lc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.$c({path:r,Fc:!1});return n.xc(),n}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return sD(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(0===e.length)throw this.Uc("Document fields must not be empty");if(sg(this.kc)&&sd.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class sy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=r||rF(e)}jc(e,t,r,n=!1){return new sp({kc:e,methodName:t,Kc:r,path:q.emptyPath(),Fc:!1,qc:n},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function sw(e){let t=e._freezeSettings(),r=rF(e._databaseId);return new sy(e._databaseId,!!t.ignoreUndefinedProperties,r)}class sE extends sh{_toFieldTransform(e){if(2!==e.kc)throw 1===e.kc?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sE}}class sv extends sh{_toFieldTransform(e){return new e1(e.path,new eQ)}isEqual(e){return e instanceof sv}}function sT(e,t){if(sS(e=(0,l.m9)(e)))return sN("Unsupported field value:",t,e),sI(e,t);if(e instanceof sh)return function(e,t){if(!sg(t.kc))throw t.Uc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Uc(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.kc)throw t.Uc("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let s of e){let i=sT(s,t.Bc(n));null==i&&(i={nullValue:"NULL_VALUE"}),r.push(i),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,s;return r=t.N,"number"==typeof(s=n=e)&&Number.isInteger(s)&&!Y(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?ez(n):e$(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let i=R.fromDate(e);return{timestampValue:tL(t.N,i)}}if(e instanceof R){let a=new R(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tL(t.N,a)}}if(e instanceof sc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof su)return{bytesValue:tR(t.N,e._byteString)};if(e instanceof n5){let o=t.databaseId,u=e.firestore._databaseId;if(!u.isEqual(o))throw t.Uc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:tx(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Uc(`Unsupported field value: ${n3(e)}`)}(e,t)}function sI(e,t){let r={};return U(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):M(e,(e,n)=>{let s=sT(n,t.Oc(e));null!=s&&(r[e]=s)}),{mapValue:{fields:r}}}function sS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof R||e instanceof sc||e instanceof su||e instanceof n5||e instanceof sh)}function sN(e,t,r){if(!sS(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=n3(r);throw"an object"===n?t.Uc(e+" a custom object"):t.Uc(e+" "+n)}}function sA(e,t,r){if((t=(0,l.m9)(t))instanceof sl)return t._internalPath;if("string"==typeof t)return s_(e,t);throw sD("Field path arguments must be of type string or FieldPath.",e,!1,void 0,r)}let sb=RegExp("[~\\*/\\[\\]]");function s_(e,t,r){if(t.search(sb)>=0)throw sD(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new sl(...t.split("."))._internalPath}catch(n){throw sD(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function sD(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new T(v.INVALID_ARGUMENT,o+e+l)}function sk(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new n5(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sL extends sC{data(){return super.data()}}function sR(e,t){return"string"==typeof t?s_(e,t):t instanceof sl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sx extends sC{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class sM extends sx{data(e={}){return super.data(e)}}class sU{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new sV(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sM(this._firestore,this._userDataWriter,r.key,r,new sV(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let r=0;return e._snapshot.docChanges.map(t=>({type:"added",doc:new sM(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sV(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:r++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sM(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sV(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(i=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class sF{}function sO(e,...t){for(let r of t)e=r._apply(e);return e}class sP extends sF{constructor(e,t){super(),this.Gc=e,this.Jc=t,this.type="orderBy"}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new eD(t,r);return function(e,t){if(null===ex(e)){let r=eM(e);null!==r&&function(e,t,r){if(!r.isEqual(t))throw new T(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(0,r,t.field)}}(e,n),n}(e._query,this.Gc,this.Jc);return new n9(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new eL(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function sq(e,t="asc"){let r=sR("orderBy",e);return new sP(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{convertValue(e,t="none"){switch(J(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(j(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){let r={};return M(e.fields,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new sc(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return Q(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(H(e));default:return null}}convertTimestamp(e){let t=z(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=O.fromString(e);tj(r)||E();let n=new nJ(r.get(1),r.get(3)),s=new X(r.popFirst(5));return n.isEqual(t)||p(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class sK extends sB{constructor(e){super(),this.firestore=e}convertBytes(e){return new su(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new n5(this.firestore,null,t)}}function s$(e,t,r,...n){let s;e=n4(e,n5);let i=n4(e.firestore,ss),a=sw(i);return s="string"==typeof(t=(0,l.m9)(t))||t instanceof sl?function(e,t,r,n,s,i){let a=e.jc(1,t,r),o=[sA(t,n,r)],u=[s];if(i.length%2!=0)throw new T(v.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<i.length;h+=2)o.push(sA(t,i[h])),u.push(i[h+1]);let c=[],d=eh.empty();for(let f=o.length-1;f>=0;--f)if(!sk(c,o[f])){let m=o[f],g=u[f];g=(0,l.m9)(g);let p=a.Lc(m);if(g instanceof sE)c.push(m);else{let y=sT(g,p);null!=y&&(c.push(m),d.set(m,y))}}let w=new B(c);return new sm(d,w,a.fieldTransforms)}(a,"updateDoc",e._key,t,r,n):function(e,t,r,n){let s=e.jc(1,t,r);sN("Data must be an object, but it was:",s,n);let i=[],a=eh.empty();M(n,(e,n)=>{let o=s_(t,e,r);n=(0,l.m9)(n);let u=s.Lc(o);if(n instanceof sE)i.push(o);else{let h=sT(n,u);null!=h&&(i.push(o),a.set(o,h))}});let o=new B(i);return new sm(a,o,s.fieldTransforms)}(a,"updateDoc",e._key,t),sj(i,[s.toMutation(e._key,e3.exists(!0))])}function sz(e,t){var r,n;let s=n4(e.firestore,ss),i=st(e),a=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return sj(s,[(function(e,t,r,n,s,i={}){let a,o;let l=e.jc(i.merge||i.mergeFields?2:0,t,r,s);sN("Data must be an object, but it was:",l,n);let u=sI(n,l);if(i.merge)a=new B(l.fieldMask),o=l.fieldTransforms;else if(i.mergeFields){let h=[];for(let c of i.mergeFields){let d=sA(t,c,r);if(!l.contains(d))throw new T(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sk(h,d)||h.push(d)}a=new B(h),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sf(new eh(u),a,o)})(sw(e.firestore),"addDoc",i._key,a,null!==e.converter,{}).toMutation(i._key,e3.exists(!1))]).then(()=>i)}function sG(e,...t){var r,n,s,i;let a,o,u;e=(0,l.m9)(e);let h={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||sn(t[c])||(h=t[c],c++);let d={includeMetadataChanges:h.includeMetadataChanges};if(sn(t[c])){let f=t[c];t[c]=null===(r=f.next)||void 0===r?void 0:r.bind(f),t[c+1]=null===(n=f.error)||void 0===n?void 0:n.bind(f),t[c+2]=null===(s=f.complete)||void 0===s?void 0:s.bind(f)}if(e instanceof n5)o=n4(e.firestore,ss),i=e._key.path,u=new eL(i),a={next:r=>{t[c]&&t[c](function(e,t,r){let n=r.docs.get(t._key),s=new sK(e);return new sx(e,s,t._key,n,new sV(r.hasPendingWrites,r.fromCache),t.converter)}(o,e,r))},error:t[c+1],complete:t[c+2]};else{let m=n4(e,n9);o=n4(m.firestore,ss),u=m._query;let g=new sK(o);a={next:e=>{t[c]&&t[c](new sU(o,g,m,e))},error:t[c+1],complete:t[c+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(eV(e)&&0===e.explicitOrderBy.length)throw new T(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,r,n){let s=new nz(n),i=new ny(t,s,r);return e.asyncQueue.enqueueAndForget(async()=>nd(await nY(e),i)),()=>{s.ec(),e.asyncQueue.enqueueAndForget(async()=>nf(await nY(e),i))}}(sa(o),u,d,a)}function sj(e,t){return function(e,t){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>n_(await nW(e).then(e=>e.syncEngine),t,r)),r.promise}(sa(e),t)}function sQ(){return new sv("serverTimestamp")}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{options:r})=>{let n=e.getProvider("app").getImmediate(),s=new ss(n,new A(e.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC")),(0,i.KN)(h,"3.3.1",void 0),(0,i.KN)(h,"3.3.1","esm2017")}()}}]);