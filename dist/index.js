!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(1);var r=n(2),u=n(3),i=o(u),s=n(11),l=o(s),c=n(14),f=o(c),a=n(17),p=o(a),d=n(20),m=o(d);e.exports={Card:i.default,CardNumber:p.default,CardExpiry:l.default,CardCvc:f.default,PostalCode:m.default,baseStyle:r.baseStyle,get instance(){return r.Stripe.instance},get createToken(){return r.Stripe.createToken}}},function(e,t){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u])}return n}),e.exports=Object.assign},function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===("undefined"==typeof e?"undefined":u(e))&&"function"==typeof e.elements&&(i.instance=e),void 0===window.Stripe&&null===i.instance?console.error("Stripe V3 library not loaded!"):null===i.instance&&(i.instance=window.Stripe(e)),i.instance.elements?null===i.elements&&(i.elements=i.instance.elements(t)):console.error("Stripe V3 library not loaded!")}function o(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(t,o.elements||{}),o.style=Object.assign(s,o.style||{});var r=i.elements.create(e,o);return i.createToken=function(e){return i.instance.createToken(r,e)},r}function r(){i.instance=null,i.elements=null,i.createToken=null}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.create=o,t.destroy=r;var i=t.Stripe={instance:null,createToken:null,elements:null},s=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){var o=n(4)(n(5),n(10),null,null);e.exports=o.exports},function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,u=e.default);var s="function"==typeof u?u.options:u;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var l=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];l[e]=function(){return t}})}return{esModule:r,exports:u,options:s}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}}},function(e,t,n){var o=n(4)(n(8),n(9),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(2);t.default={props:Object.assign({type:{type:String,required:!0}},u.default),beforeMount:function(){var e=this;this._element=(0,i.create)(this.type,this.stripe,this.options),this._element.on("blur",function(t){return e.$emit("blur")}),this._element.on("focus",function(t){return e.$emit("focus")}),this._element.on("change",function(t){return e.$emit("change",t)})},mounted:function(){var e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy:function(){this._element.unmount(),this._element.destroy(),(0,i.destroy)()},methods:{blur:function(){this._element.blur()},focus:function(){this._element.focus()},update:function(){this._element.update()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(12),n(13),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(15),n(16),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(18),n(19),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(21),n(22),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},empty:function(t){e.$emit("empty")},complete:function(t){e.$emit("complete")},change:function(t){e.$emit("change",t)},brand:function(t){e.$emit("brand",t)},error:function(t){e.$emit("error",t)},value:function(t){e.$emit("value",t)}}})},staticRenderFns:[]}}])});