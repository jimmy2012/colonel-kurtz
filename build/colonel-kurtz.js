module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t};n(31);var o=r(n(16));t.exports=o},function(t){t.exports=require("react")},function(t,e,n){"use strict";var r=n(12).tag;t.exports=r({append:function(t,e){return{type:t,parent:e}},create:function(t,e,n){return{type:t,position:e,parent:n}},destroy:function(t){return t},update:function(t,e){return{id:t,content:e}}})},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},i=r(n(1)),s=r(n(33)),u=i.createClass({displayName:"Button",getDefaultProps:function(){return{className:"col-btn",tagName:"button",type:"button"}},render:function(){var t=this.props,e=t.children,n=t.tagName,r=o(t,["children","tagName"]);return i.createElement(n,r,[i.createElement(s,{key:"__ink__"}),e])}});t.exports=u},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=function(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0})},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=r(n(2)),u=r(n(10)),a=r(n(24)),c=r(n(7)),l=r(n(25)),p=r(n(26)),f=function(){var t={serialize:a,deserialize:p,getInitialState:function(){return[]},toString:function(){return"blocks"}};return o(t,s.append,function(t,e){return t.concat(new u(e))}),o(t,s.create,function(t,e){var n=e.type,r=e.parent,o=e.position,i=void 0===o?0:o,s=new u({parent:r,type:n});return i instanceof u&&(i=t.indexOf(i)+1),l(t,s,i)}),o(t,s.destroy,function(t,e){return t.filter(function(t){for(var n=t;n;n=n.parent)if(n.id==e)return!1;return!0})}),o(t,s.update,function(t,e){var n=c(t,e.id,"id");return n.content=i({},n.content,e.content),t}),t}();t.exports=f},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(23)),i=r(n(22)),s={getInitialState:function(){return i.blockTypes},deserialize:function(t){return o(t.concat(i.blockTypes))},toString:function(){return"blockTypes"}};t.exports=s},,function(t){"use strict";t.exports=function(t,e){var n=void 0===arguments[2]?"id":arguments[2],r=t.filter(function(t){return t[n]==e});if(r.length)return r[0];throw new Error("Unable to find record with "+n+" of "+e)}},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(1)),i=r(n(21)),s=r(n(11)),u=o.createClass({displayName:"Block",propTypes:{block:o.PropTypes.object.isRequired,blockType:o.PropTypes.object.isRequired,onDestroy:o.PropTypes.func,onUpdate:o.PropTypes.func},render:function(){var t=this.props,e=t.block,n=t.blockType,r=t.children,u=t.onDestroy,a=n.component;return o.createElement("div",{className:s("col-block","col-block-"+e.type)},o.createElement(a,{ref:"block",content:e.content,onChange:this._onUpdate},r),o.createElement(i,{block:e,onDestroy:u}))},_onUpdate:function(t){this.props.onUpdate(this.props.block.id,t)}});t.exports=u},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(2)),i=r(n(5)),s=r(n(3)),u=r(n(1)),a=r(n(11)),c=u.createClass({displayName:"BlockMenu",getInitialState:function(){return{open:!1}},componentWillReceiveProps:function(){this.setState({open:!1})},getToggle:function(){return u.createElement(s,{className:"col-menu-toggle",onClick:this._onToggle},"+")},getButton:function(t){var e=t.id,n=t.label,r=this.props,i=r.parent,a=r.position,c=r.flux,l=function(){return c.send(o.create,e,a,i)};return u.createElement(s,{key:e,className:"col-menu-btn",onClick:l},n)},render:function(){var t=this.props.forceOpen||this.state.open,e=this.props.flux.get(i).filter(function(t){return!t["private"]}),n=a("col-menu",{"col-menu-open":t});return u.createElement("nav",{className:n,role:"navigation"},t?null:this.getToggle(),t?e.map(this.getButton):null)},_onToggle:function(){this.setState({open:!0})}});t.exports=c},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=n(27),s=function(){function t(e){o(this,t),this.id=i(),this.content=e.content,this.parent=e.parent,this.type=e.type}return r(t,{valueOf:{value:function(){return this.id}}}),t}();t.exports=s},function(t){function e(){for(var t,n="",r=0;r<arguments.length;r++)if(t=arguments[r])if("string"==typeof t||"number"==typeof t)n+=" "+t;else if("[object Array]"===Object.prototype.toString.call(t))n+=" "+e.apply(null,t);else if("object"==typeof t)for(var o in t)t.hasOwnProperty(o)&&t[o]&&(n+=" "+o);return n.substr(1)}"undefined"!=typeof t&&t.exports&&(t.exports=e)},function(t){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";e.__esModule=!0;var r=n(7);e.tag=r,e["default"]=n(2)},function(t){"use strict";var e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(){e(this,t),this._callbacks=[]}return t.prototype.ignore=function(t){this._callbacks=this._callbacks.filter(function(e){return e!==t})},t.prototype.listen=function(t){this._callbacks=this._callbacks.concat(t)},t.prototype.pump=function(){for(var t=0;t<this._callbacks.length;t++)this._callbacks[t].call(this)},t}();t.exports=n},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=r(n(1)),u=r(n(3)),a=r(n(4)),c=r(n(5)),l=r(n(8)),p=r(n(6)),f=function(t){function e(){i(this,e),t.call(this),this._stores=[],this._state=this.getInitialState()}return o(e,t),e.prototype.getInitialState=function(){return{}},e.prototype.shouldUpdate=function(t,e){return 0==l(t,e)},e.prototype.seed=function(t){this.swap(this.deserialize(t))},e.prototype.has=function(){for(var t=this,e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];return n.some(function(e){return t._stores.some(function(t){return""+e==""+t})})},e.prototype.get=function(t){return this._state[t]},e.prototype.swap=function(t){this.shouldUpdate(this._state,t)&&(this._state=t,this.pump())},e.prototype.merge=function(t){this.swap(c(this._state,t))},e.prototype.prepare=function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];return(e=this.send).bind.apply(e,[this,t].concat(r))},e.prototype.send=function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];var i=t.apply(this,r);return i instanceof Promise?i.then(function(n){return e.dispatch(t,n)}):this.dispatch(t,i)},e.prototype.dispatch=function(t,e){var n=this,r=this._stores.filter(function(e){return t in e}),o=p(r,function(r){return r[t](n.get(r),e)});return this.merge(o),e},e.prototype.addStore=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e.map(function(t){return c(u,t)});a(!this.has(r),'A toString method within "'+e+'" is not unique'),this._stores=this._stores.concat(r),this.merge(p(r,function(t){return t.getInitialState()}))},e.prototype.serialize=function(){var t=this;return p(this._stores,function(e){return e.serialize(t.get(e))})},e.prototype.deserialize=function(){var t=void 0===arguments[0]?{}:arguments[0];return p(this._stores,function(e){return e.deserialize(t[e])})},e.prototype.toJSON=function(){return this.serialize()},e}(s);t.exports=f},function(t){"use strict";t.exports={getInitialState:function(){return void 0},serialize:function(t){return t},deserialize:function(){var t=void 0===arguments[0]?this.getInitialState():arguments[0];return t},toString:function(){throw new Error("Stores must implement a toString() method")}}},function(t){"use strict";function e(t,e){if(!t){var n=new Error(e);throw n.framesToPop=1,n}}t.exports=e},function(t){"use strict";function e(t,e){return n({},t,e)}var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};t.exports=e},function(t){"use strict";function e(t,e){return t.reduce(function(t,n){return t[n]=e(n),t},{})}t.exports=e},function(t){"use strict";var e=0,n=function(t){return"function"==typeof t},r=function(t,n){var r=t.bind(null),o="_"+n+"_"+e++;return r.toString=function(){return o},r};t.exports=function(t){var e=Object.keys(t);return e.reduce(function(e,o){var i=t[o];return e[o]=n(i)?r(i,o):i,e},{})}},function(t,e,n){/*!
		 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
		 *
		 * Copyright (c) 2015, Jon Schlinkert.
		 * Licensed under the MIT License.
		 */
"use strict";var r=n(9);t.exports=function(t,e){if(!t&&!e)return!0;if(!t&&e||t&&!e)return!1;for(var n in e)if(!r(e[n])||!t.hasOwnProperty(n)||t[n]!==e[n])return!1;return!0}},function(t){/*!
		 * is-primitive <https://github.com/jonschlinkert/is-primitive>
		 *
		 * Copyright (c) 2014 Jon Schlinkert, contributors.
		 * Licensed under the MIT License
		 */
"use strict";t.exports=function(t){switch(typeof t){case"string":case"number":case"boolean":case"symbol":return!0}return null==t}}])},,,,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function d(t,e,n){var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:d(o,e,n)}if("value"in r&&r.writable)return r.value;var i=r.get;return void 0===i?void 0:i.call(n)},s=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=r(n(17)),c=r(n(5)),l=r(n(4)),p=r(n(12)),f=r(n(1)),h=function(t){function e(t){var n=t.el,r=t.seed;u(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.addStore(l),this.addStore(c),this.seed(r),this.el=n}return s(e,t),o(e,{render:{value:function(){return f.render(f.createElement(a,{flux:this}),this.el),this}},toJSON:{value:function(){return this.serialize().blocks}}}),e}(p);t.exports=h},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(2)),i=r(n(5)),s=r(n(4)),u=r(n(3)),a=r(n(20)),c=r(n(1)),l=c.createClass({displayName:"App",propTypes:{flux:c.PropTypes.object.isRequired},getInitialState:function(){return this.getState()},getState:function(){return{blocks:this.props.flux.get(s),blockTypes:this.props.flux.get(i)}},componentDidMount:function(){var t=this;this.props.flux.listen(function(){return t.setState(t.getState())})},getSection:function(t,e,n){var r=this.state,o=r.blocks,i=r.blockTypes,s=this.props.flux;return c.createElement(a,{key:t.id,block:t,blocks:o,blockTypes:i,last:e===n.length-1,flux:s})},render:function(){var t=this,e=this.state.blocks.filter(function(t){return!t.parent}),n=function(){return t.props.flux.send(o.create,"section",0,null)};return c.createElement("div",{className:"colonel"},c.createElement(u,{className:"col-btn-fab",onClick:n},"+"),e.map(this.getSection))}});t.exports=l},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(1)),i=o.createClass({displayName:"Section",render:function(){return o.createElement("div",null,this.props.children)}});t.exports=i},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(2)),i=r(n(8)),s=r(n(9)),u=r(n(5)),a=r(n(4)),c=r(n(1)),l=r(n(7)),p=c.createClass({displayName:"EditorBlock",propTypes:{block:c.PropTypes.object.isRequired,flux:c.PropTypes.object.isRequired},getBlockMenu:function(){var t=this.props,e=t.block,n=t.flux;return c.createElement(s,{key:"block_menu",parent:e.parent,position:e,flux:n})},render:function(){var t=this.props,e=t.block,n=t.flux,r=(n.get(a).filter(function(t){return t.parent===e}),l(n.get(u),e.type));return c.createElement("div",null,c.createElement(i,{block:e,blockType:r,onUpdate:this._onUpdate,onDestroy:this._onDestroy}),this.getBlockMenu(e))},_onUpdate:function(t,e){this.props.flux.send(o.update,t,e)},_onDestroy:function(t){this.props.flux.send(o.destroy,t)}});t.exports=p},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(2)),i=r(n(8)),s=r(n(9)),u=(r(n(4)),r(n(3))),a=r(n(19)),c=r(n(1)),l=r(n(7)),p=c.createClass({displayName:"Section",propTypes:{block:c.PropTypes.object.isRequired,blocks:c.PropTypes.array.isRequired,blockTypes:c.PropTypes.array.isRequired,flux:c.PropTypes.object.isRequired},getBlock:function(t){var e=this.props,n=e.flux,r=e.blocks,o=e.blockTypes;return c.createElement(a,{key:t.id,block:t,blocks:r,blockTypes:o,flux:n})},render:function(){var t=this.props,e=t.block,n=t.blocks,r=t.blockTypes,a=t.flux,p=t.last,f=n.filter(function(t){return t.parent===e}),h=l(r,e.type),d=f.length||!p;return c.createElement("div",null,c.createElement(i,{block:e,blockType:h,onDestroy:a.send(o.destroy)},c.createElement(s,{parent:e,position:0,flux:a,forceOpen:!f.length}),c.createElement("div",null,f.map(this.getBlock))),d&&c.createElement(u,{className:"col-btn-fab",onClick:this._onAdd},"+"))},_onAdd:function(){var t=this.props,e=t.block,n=t.flux;n.send(o.create,e.type,e,null)}});t.exports=p},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(n(3)),i=r(n(1)),s=r(n(32)),u=i.createClass({displayName:"Toolbar",propTypes:{block:i.PropTypes.object.isRequired,onDestroy:i.PropTypes.func.isRequired},render:function(){return i.createElement("div",{className:"col-toolbar"},i.createElement("span",{className:"col-toolbar-handle",dangerouslySetInnerHTML:{__html:s}}),i.createElement("nav",{role:"navigation",className:"col-toolbar-menu"},i.createElement(o,{className:"col-toolbar-menu-item",onClick:this._onDestroy},"Remove")))},_onDestroy:function(t){t.preventDefault(),this.props.onDestroy(this.props.block.id)}});t.exports=u},function(t,e,n){"use strict";t.exports={blockTypes:[{id:"section",label:"Create a new section",component:n(18),"private":!0}]}},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=r(n(1));t.exports=function(){var t=void 0===arguments[0]?[]:arguments[0];return t.map(function(t){var e=t.component;return"object"==typeof e&&(e=i.createClass(e)),o({},t,{component:e})})}},function(t){"use strict";t.exports=function(){var t=void 0===arguments[0]?[]:arguments[0],e=t.filter(function(t){return!t.parent}),n=function(e){var r=t.filter(function(t){return t.parent===e});return{content:e.content,type:e.type,blocks:r.map(n)}};return e.map(n)}},function(t){"use strict";t.exports=function(t,e){var n=void 0===arguments[2]?t.length:arguments[2];return function(){var r=t.slice(0,n),o=t.slice(n);return r.concat(e,o)}()}},function(t,e,n){"use strict";function r(t,e){return t.reduce(function(t,n){var o=new s(i({},n,{parent:e})),u=r(n.blocks,o);return t.concat(o,u)},[])}var o=function(t){return t&&t.__esModule?t["default"]:t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};t.exports=r;var s=o(n(10))},function(t){"use strict";var e=0,n=function(){return"c"+(e+=1)};t.exports=n},,,,function(){},function(t){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>'},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(4),i=0,s=n(5),u=n(8),a=n(2),c=n(7),l=u.PropTypes,p=2*Math.PI,f=n(1),h=n(6),d=u.createClass({displayName:"Ink",shouldComponentUpdate:h,propTypes:{background:l.bool,duration:l.number,opacity:l.number,radius:l.number,recenter:l.bool},getDefaultProps:function(){return{background:!0,duration:1e3,opacity:.25,radius:150,recenter:!0}},getInitialState:function(){return{store:c(this.tick),touchEvents:this.touchEvents()}},touchEvents:function(){return o?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease,onTouchLeave:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},tick:function(){var t=this.state.ctx,e=this.state.color,n=this.state.density,r=this.state.height,o=this.state.width,i=this.state.store;t.save(),t.scale(n,n),t.clearRect(0,0,o,r),t.fillStyle=e,this.props.background&&(t.globalAlpha=i.getTotalOpacity(this.props.opacity),t.fillRect(0,0,o,r)),i.each(this.makeBlot,this),t.restore()},makeBlot:function(t){var e=this.state.ctx,n=this.state.height,r=this.state.width,o=t.x,i=t.y,s=t.radius;if(e.globalAlpha=f.getBlotOpacity(t,this.props.opacity),e.beginPath(),this.props.recenter){var u=Math.max(n,r);o+=f.getBlotShiftX(t,u,r),i+=f.getBlotShiftY(t,u,n)}e.arc(o,i,s*f.getBlotScale(t),0,p),e.closePath(),e.fill()},componentWillUnmount:function(){this.state.store.stop()},pushBlot:function(t,e,n){var r=this,o=this.getDOMNode(),i=o.getBoundingClientRect(),u=i.top,a=i.bottom,c=i.left,l=i.right,p=window.getComputedStyle(o),h=p.color,d=this.state.ctx||o.getContext("2d"),v=this.state.density||s(d),g=a-u,y=l-c,m=f.getMaxRadius(g,y,this.props.radius);this.setState({color:h,ctx:d,density:v,height:g,width:y},function(){r.state.store.add({duration:r.props.duration,mouseDown:t,mouseUp:0,radius:m,x:e-c,y:n-u})})},render:function(){var t=this.state.density,e=this.state.height,n=this.state.width,o=this.state.touchEvents;return u.createElement("canvas",r({className:"ink",style:r({},a,this.props.style),height:e*t,width:n*t,onDragOver:this._onRelease},o))},_onPress:function(t){var e=t.button,n=t.ctrlKey,r=t.clientX,o=t.clientY,s=t.changedTouches,u=Date.now();if(s)for(var a=0;a<s.length;a++){var c=s[a].clientX,l=s[a].clientY;this.pushBlot(u,c,l)}else e!==i||n||this.pushBlot(u,r,o)},_onRelease:function(){this.state.store.release(Date.now())}});t.exports=d},function(t,e,n){"use strict";function r(t){return l(t.duration,Date.now()-t.mouseDown)}function o(t){return t.mouseUp>0?Date.now()-t.mouseUp:0}function i(t){var e=t.duration,n=t.radius,i=.85*s(r(t),0,n,e),u=.15*s(o(t),0,n,e),l=.02*n*a(Date.now()/e);return c(0,i+u+l)}var s=n(3),u=Math.sqrt(2),a=Math.cos,c=Math.max,l=Math.min;t.exports={getMaxRadius:function(t,e,n){return l(.5*c(t,e),n)},getBlotOpacity:function(t,e){return s(o(t),e,-e,t.duration)},getBlotOuterOpacity:function(t,e){return l(this.getBlotOpacity(t,e),s(r(t),0,.3,3*t.duration))},getBlotShiftX:function(t,e,n){return l(1,i(t)/e*2/u)*(n/2-t.x)},getBlotShiftY:function(t,e,n){return l(1,i(t)/e*2/u)*(n/2-t.y)},getBlotScale:function(t){return i(t)/t.radius}}},function(t){"use strict";t.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"}},function(t){"use strict";t.exports=function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}},function(t){"use strict";var e=!1;"undefined"!=typeof window&&(e="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),t.exports=e},function(t){"use strict";t.exports=function(t){var e=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/n}},function(t){"use strict";function e(t,e){for(var n in t)if(this.props[n]!==t[n])return!0;for(var r in e)if(this.state[r]!==e[r])return!0;return!1}t.exports=e},function(t,e,n){"use strict";var r=n(1),o=function(t){var e=t.mouseUp,n=t.duration;return!e||Date.now()-e<n};t.exports=function(t){var e=[],n=!1,i=void 0,s={each:function(t,n){for(var r=0,o=e.length;o>r;r++)t.call(n,e[r])},play:function(){n||(n=!0,s.update())},stop:function(){n=!1,cancelAnimationFrame(i)},getTotalOpacity:function(t){for(var n=0,o=0,i=e.length;i>o;o++)n+=r.getBlotOuterOpacity(e[o],t);return n},update:function(){e=e.filter(o),e.length?(i=requestAnimationFrame(s.update),t()):s.stop()},add:function(t){e.push(t),s.play()},release:function(t){for(var n=e.length-1;n>=0;n--)if(!e[n].mouseUp)return e[n].mouseUp=t}};return s}},function(t){t.exports=n(1)}])}]);
//# sourceMappingURL=colonel-kurtz.js.map