(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["npm.airy"],{

/***/ "6K13":
/*!******************************************!*\
  !*** ./node_modules/@airy/maleo/wrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/render/_wrap */ "a10N");


/***/ }),

/***/ "8wvk":
/*!*************************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/utils/dynamicImport.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "Avpf")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "EY6e")),_reactLoadable=_interopRequireDefault(__webpack_require__(/*! react-loadable */ "CnBM")),_default=function(e){var r=e.loading,t=void 0===r?function(){return null}:r,o=(0,_objectWithoutProperties2.default)(e,["loading"]);return(0,_reactLoadable.default)((0,_objectSpread2.default)({},o,{loading:t}))};exports.default=_default;
//# sourceMappingURL=dynamicImport.js.map


/***/ }),

/***/ "GF/Y":
/*!*******************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/client/client.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ensureReady=exports.hydrate=exports.init=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "ln6h")),_extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "htGi")),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "+oT+")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "q1tI")),_reactDom=_interopRequireDefault(__webpack_require__(/*! react-dom */ "i8i4")),_reactLoadable=_interopRequireDefault(__webpack_require__(/*! react-loadable */ "CnBM")),_loadInitialProps=__webpack_require__(/*! ../../lib/server/loadInitialProps */ "dCir"),_constants=__webpack_require__(/*! ../../lib/constants */ "of66"),_routeHandler=__webpack_require__(/*! ../../lib/server/routeHandler */ "jgB2"),_registerEntry=__webpack_require__(/*! ./registerEntry */ "eyzF"),init=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(){var r,t,a,n,o,u,i,s;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new _registerEntry.RegisterEntry,t=r.findRegister("routes"),a=r.findRegister("wrap"),n=r.findRegister("app"),e.next=7,ensureReady(t,location.pathname,{});case 7:return o=e.sent,u=o.data,e.next=11,(0,_loadInitialProps.loadComponentProps)(a);case 11:return i=e.sent,e.next=14,(0,_loadInitialProps.loadComponentProps)(n);case 14:s=e.sent,hydrate(function(){return _react.default.createElement(a,i,_react.default.createElement(n,(0,_extends2.default)({data:u,routes:t},s,i)))}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0);case 22:case"end":return e.stop()}},e,this,[[0,19]])}));return function(){return e.apply(this,arguments)}}();exports.init=init;var hydrate=function(e){_reactLoadable.default.preloadReady().then(function(){_reactDom.default.hydrate(_react.default.createElement(e,null),document.querySelector("#".concat(_constants.DIV_MALEO_ID)))})};exports.hydrate=hydrate;var ensureReady=function(){var a=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r,t,a){var n,o;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window[_constants.SERVER_INITIAL_DATA]){e.next=4;break}return o=(0,_routeHandler.matchingRoutes)(r,t),e.abrupt("return",(0,_loadInitialProps.loadInitialProps)(o,a));case 4:return e.abrupt("return",{data:n});case 5:case"end":return e.stop()}},e,this)}));return function(e,r,t){return a.apply(this,arguments)}}();exports.ensureReady=ensureReady;
//# sourceMappingURL=client.js.map


/***/ }),

/***/ "OQ+0":
/*!*********************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/default/_client.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _client=__webpack_require__(/*! ../client/client */ "GF/Y");if(true){var _require=__webpack_require__(/*! ../client/hmr/client-hmr */ "cXKB"),clientHMR=_require.clientHMR;clientHMR({})(_client.init)}else{}
//# sourceMappingURL=_client.js.map


/***/ }),

/***/ "a10N":
/*!******************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/render/_wrap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "/HRN")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "WaGi")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "ZDA2")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "/+P4")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "N9n2")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "q1tI")),_history=__webpack_require__(/*! history */ "LhCv"),_reactRouterDom=__webpack_require__(/*! react-router-dom */ "55Ip"),_Wrap=function(e){function t(e){var r;return(0,_classCallCheck2.default)(this,t),(r=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(t).call(this,e))).history=r.props.server?null:(0,_history.createBrowserHistory)(),r}return(0,_inherits2.default)(t,e),(0,_createClass2.default)(t,[{key:"render",value:function(){return this.props.server?_react.default.createElement(_reactRouterDom.StaticRouter,{location:this.props.location,context:this.props.context},_react.default.createElement(_reactRouterDom.Switch,null,this.props.children)):_react.default.createElement(_reactRouterDom.Router,{history:this.history},_react.default.createElement(_reactRouterDom.Switch,null,this.props.children))}}]),t}(_react.default.Component);exports.default=_Wrap;
//# sourceMappingURL=_wrap.js.map


/***/ }),

/***/ "cXKB":
/*!***************************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/client/hmr/client-hmr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function clientHMR(e){window.EventSource=window.EventSource||__webpack_require__(/*! eventsource */ "JLUw");return connect("/__webpack_hmr"),function(e){"function"==typeof e&&e()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.clientHMR=clientHMR;var isFirstCompilation=!0,mostRecentCompilationHash=null,hasCompileErrors=!1,hadRuntimeError=!1;function connect(e){console.info("[HMR] Connecting..."),attachListener(new window.EventSource(e))}function attachListener(n){n.onopen=function(e){console.info("[HMR] Connected")},n.onerror=function(e){console.error("[HMR] Disconnected"),n.close(),console.info("[HMR] Trying to reconnect in 10 seconds, or refresh to reconnect immediately"),setTimeout(function(){return connect(n.url)},1e4)},n.onmessage=function(e){try{hmrMessageHandler(JSON.parse(e.data))}catch(e){return}}}function hmrMessageHandler(e){var n=e.action,o=e.name,t=e.hash;switch(n){case"building":console.info("[HMR] bundle "+(o?"'".concat(o,"' "):"")+"rebuilding"),isFirstCompilation=!1;break;case"built":case"sync":clearOutdatedErrors(),handleAvailableHash(t),handleSuccess()}}function clearOutdatedErrors(){"undefined"!=typeof console&&"function"==typeof console.clear&&hasCompileErrors&&console.clear()}function handleSuccess(){clearOutdatedErrors();var e=!isFirstCompilation;hasCompileErrors=isFirstCompilation=!1,e&&(console.log("[HMR] Applying update"),tryApplyUpdates(function(){window.location.reload()}))}function isUpdateAvailable(){return mostRecentCompilationHash!==__webpack_require__.h()}function canApplyUpdates(){return"idle"===module.hot.status()}function handleAvailableHash(e){mostRecentCompilationHash=e}function tryApplyUpdates(o){if(true){if(isUpdateAvailable()&&canApplyUpdates()){var e=module.hot.check(!0,n);e&&e.then&&e.then(function(e){n(null,e)},function(e){n(e,null)})}}else {}function n(e,n){e||!n||hadRuntimeError?window.location.reload():("function"==typeof o&&o(),isUpdateAvailable()&&tryApplyUpdates(o))}}
//# sourceMappingURL=client-hmr.js.map


/***/ }),

/***/ "dCir":
/*!*****************************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/server/loadInitialProps.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadComponentProps=exports.loadInitialProps=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "ln6h")),_defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "xHqa")),_objectSpread3=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "Avpf")),_getIterator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "XXOK")),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "+oT+")),loadInitialProps=function(){var t=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r,t){var n,a,o,i,u,s,p,c,l,f,d,b;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},r.length){e.next=3;break}return e.abrupt("return",{data:n});case 3:o=!(a=!0),i=void 0,e.prev=6,u=(0,_getIterator2.default)(r);case 8:if(a=(s=u.next()).done){e.next=19;break}if(p=s.value,c=p.route,l=c.component,f=c.key,d=p.match,checkHasGetInitialProps(l))return e.next=14,loadComponentProps(l,(0,_objectSpread3.default)({match:d},t));e.next=16;break;case 14:b=e.sent,n=(0,_objectSpread3.default)({},n,(0,_defineProperty2.default)({},f,b));case 16:a=!0,e.next=8;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(6),o=!0,i=e.t0;case 25:e.prev=25,e.prev=26,a||null==u.return||u.return();case 28:if(e.prev=28,o)throw i;e.next=31;break;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",{branch:r[0],data:n});case 34:case"end":return e.stop()}},e,this,[[6,21,25,33],[26,,28,32]])}));return function(e,r){return t.apply(this,arguments)}}();exports.loadInitialProps=loadInitialProps;var checkHasGetInitialProps=function(e){return"getInitialProps"in e&&"function"==typeof e.getInitialProps},loadComponentProps=function(){var r=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r){var t,n,a=arguments;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=1<a.length&&void 0!==a[1]?a[1]:{},checkHasGetInitialProps(r))return e.next=4,r.getInitialProps(t);e.next=6;break;case 4:return n=e.sent,e.abrupt("return",n);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(e){return r.apply(this,arguments)}}();exports.loadComponentProps=loadComponentProps;
//# sourceMappingURL=loadInitialProps.js.map


/***/ }),

/***/ "eh46":
/*!*****************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/render/_app.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.App=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "ln6h")),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "+oT+")),_classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "/HRN")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "WaGi")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "ZDA2")),_getPrototypeOf3=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "/+P4")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "N9n2")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "q1tI")),_reactRouterDom=__webpack_require__(/*! react-router-dom */ "55Ip"),_routes=__webpack_require__(/*! ../../lib/routes/routes */ "q/kR"),_App=function(e){function u(){var e,t;(0,_classCallCheck2.default)(this,u);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=(0,_possibleConstructorReturn2.default)(this,(e=(0,_getPrototypeOf3.default)(u)).call.apply(e,[this].concat(o)))).prefetchCache={},t.state={data:t.props.data,previousLocation:null},t.componentWillReceiveProps=function(e){if(e.location!==t.props.location){var r=t.props.location;window.scrollTo(0,0),t.setState({data:void 0,previousLocation:r}),t.setState({previousLocation:null})}},t}return(0,_inherits2.default)(u,e),(0,_createClass2.default)(u,[{key:"render",value:function(){var e=this.state,r=e.data,t=e.previousLocation,o=this.props,a=o.routes,u=o.location,i=this.prefetchCache[u.pathname]||r;return(0,_routes.renderRoutes)(a,{initialData:i,location:t||u})}}]),u}(_react.default.PureComponent);_App.getInitialProps=function(){var r=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r){return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r);case 1:case"end":return e.stop()}},e,this)}));return function(e){return r.apply(this,arguments)}}();var App=(0,_reactRouterDom.withRouter)(_App),_default=exports.App=App;exports.default=_default;
//# sourceMappingURL=_app.js.map


/***/ }),

/***/ "eyzF":
/*!**************************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/client/registerEntry.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.RegisterEntry=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "8+Nu")),_classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "/HRN")),_constants=__webpack_require__(/*! ../../lib/constants */ "of66"),RegisterEntry=function e(){var i=this;(0,_classCallCheck2.default)(this,e),this.registerCache={},this.register=function(e){var r=(0,_slicedToArray2.default)(e,2),t=r[0],s=r[1];i.registerCache[t]=s()},this.findRegister=function(e){return i.registerCache[e]},window[_constants.REGISTERS.WINDOW_VAR_NAME]&&window[_constants.REGISTERS.WINDOW_VAR_NAME].map(this.register),window[_constants.REGISTERS.WINDOW_VAR_NAME]=[],window[_constants.REGISTERS.WINDOW_VAR_NAME].push=this.register},_default=exports.RegisterEntry=RegisterEntry;exports.default=_default;
//# sourceMappingURL=registerEntry.js.map


/***/ }),

/***/ "jgB2":
/*!*************************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/server/routeHandler.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.matchingRoutes=void 0;var _reactRouterConfig=__webpack_require__(/*! react-router-config */ "V/vL"),matchingRoutes=function(e,t){return(0,_reactRouterConfig.matchRoutes)(e,t)};exports.matchingRoutes=matchingRoutes;
//# sourceMappingURL=routeHandler.js.map


/***/ }),

/***/ "l5oE":
/*!*********************************************!*\
  !*** ./node_modules/@airy/maleo/dynamic.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/utils/dynamicImport */ "8wvk");


/***/ }),

/***/ "of66":
/*!*********************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/constants/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname, process) {var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.STATIC_ENTRIES=exports.REGISTERS=exports.CUSTOM_WRAP_PATH=exports.CUSTOM_DOCUMENT_PATH=exports.AUTODLL_PATH=exports.PROJECT_ROOT_NODE_MODULES=exports.MALEO_PROJECT_ROOT_NODE_MODULES=exports.MALEO_PROJECT_ROOT=exports.DIV_MALEO_ID=exports.SERVER_INITIAL_DATA=exports.SERVER_ASSETS_ROUTE=exports.RUNTIME_CHUNK_FILE=exports.BUILD_DIR=exports.APP_ENTRY_NAME=exports.WRAP_ENTRY_NAME=exports.DOCUMENT_ENTRY_NAME=exports.ROUTES_ENTRY_NAME=exports.CLIENT_ENTRY_NAME=exports.SERVER_ENTRY_NAME=exports.USER_CUSTOM_CONFIG=exports.REACT_LOADABLE_MANIFEST=void 0;var _path=_interopRequireDefault(__webpack_require__(/*! path */ "33yf")),REACT_LOADABLE_MANIFEST="react-loadable-manifest.json";exports.REACT_LOADABLE_MANIFEST=REACT_LOADABLE_MANIFEST;var USER_CUSTOM_CONFIG="maleo.config.js";exports.USER_CUSTOM_CONFIG=USER_CUSTOM_CONFIG;var SERVER_ENTRY_NAME="server.js";exports.SERVER_ENTRY_NAME=SERVER_ENTRY_NAME;var CLIENT_ENTRY_NAME="client.js";exports.CLIENT_ENTRY_NAME=CLIENT_ENTRY_NAME;var ROUTES_ENTRY_NAME="routes.json";exports.ROUTES_ENTRY_NAME=ROUTES_ENTRY_NAME;var DOCUMENT_ENTRY_NAME="_document.jsx";exports.DOCUMENT_ENTRY_NAME=DOCUMENT_ENTRY_NAME;var WRAP_ENTRY_NAME="_wrap.jsx";exports.WRAP_ENTRY_NAME=WRAP_ENTRY_NAME;var APP_ENTRY_NAME="_app.jsx";exports.APP_ENTRY_NAME=APP_ENTRY_NAME;var BUILD_DIR=".maleo";exports.BUILD_DIR=BUILD_DIR;var RUNTIME_CHUNK_FILE="static/runtime/webpack.js";exports.RUNTIME_CHUNK_FILE=RUNTIME_CHUNK_FILE;var SERVER_ASSETS_ROUTE="/_assets/";exports.SERVER_ASSETS_ROUTE=SERVER_ASSETS_ROUTE;var SERVER_INITIAL_DATA="__MALEO_INITIAL_DATA__";exports.SERVER_INITIAL_DATA=SERVER_INITIAL_DATA;var DIV_MALEO_ID="_maleo_";exports.DIV_MALEO_ID=DIV_MALEO_ID;var MALEO_PROJECT_ROOT=_path.default.join(__dirname,"..","..","..");exports.MALEO_PROJECT_ROOT=MALEO_PROJECT_ROOT;var MALEO_PROJECT_ROOT_NODE_MODULES=_path.default.join(MALEO_PROJECT_ROOT,"node_modules");exports.MALEO_PROJECT_ROOT_NODE_MODULES=MALEO_PROJECT_ROOT_NODE_MODULES;var PROJECT_ROOT_NODE_MODULES=_path.default.join(process.cwd(),"node_modules");exports.PROJECT_ROOT_NODE_MODULES=PROJECT_ROOT_NODE_MODULES;var AUTODLL_PATH="./static/dll";exports.AUTODLL_PATH=AUTODLL_PATH;var CUSTOM_DOCUMENT_PATH=_path.default.join(process.cwd(),"document.js");exports.CUSTOM_DOCUMENT_PATH=CUSTOM_DOCUMENT_PATH;var CUSTOM_WRAP_PATH=_path.default.join(process.cwd(),"wrap.js");exports.CUSTOM_WRAP_PATH=CUSTOM_WRAP_PATH;var REGISTERS={WINDOW_VAR_NAME:"__REGISTERS__",ROUTES:"__MALEO__ROUTES__",WRAP:"__MALEO__WRAP__",APP:"__MALE_APP__"};exports.REGISTERS=REGISTERS;var STATIC_ENTRIES=["document","wrap","app","routes"];exports.STATIC_ENTRIES=STATIC_ENTRIES;
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../../../../process/browser.js */ "8oxB")))

/***/ }),

/***/ "q/kR":
/*!*******************************************************!*\
  !*** ./node_modules/@airy/maleo/lib/routes/routes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "KI45");Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertRoutes=exports.renderRoutes=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "Avpf")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "EY6e")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "q1tI")),_reactRouterDom=__webpack_require__(/*! react-router-dom */ "55Ip"),renderRoutes=function o(e,a){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};void 0===a&&(a={}),void 0===c&&(c={});var t=a,n=t.location,r=t.initialData,u=void 0===r?{}:r,i=(0,_objectWithoutProperties2.default)(t,["location","initialData"]);return e?_react.default.createElement(_reactRouterDom.Switch,c,e.map(function(r,e){if(!r.path)return _react.default.createElement(r.component,(0,_objectSpread2.default)({},a,{route:r,key:r.key||"wrapper-".concat(r.component.displayName,"-").concat(e)}),!!r.routes&&o(r.routes,a,c));return _react.default.createElement(_reactRouterDom.Route,{key:r.key||"route-".concat(r.path,"-").concat(e),path:r.path,exact:r.exact,location:a.location,strict:r.strict,render:function(e){var t=!!r.routes&&o(r.routes,a,c);return r.render?r.render((0,_objectSpread2.default)({},e,a,{route:r,children:t})):_react.default.createElement(r.component,(0,_objectSpread2.default)({},e,i,{location:n},u[r.key]||{},{route:r}),t)}})})):null};exports.renderRoutes=renderRoutes;var convertRoutes=function r(e,o){return e.map(function(e){var t="";return"function"==typeof e.path?{path:t=e.path(o||"").replace("//","/"),component:e.component,exact:e.exact,routes:e.routes?r(e.routes,t):[]}:{path:t="".concat(o).concat(e.path),component:e.component,exact:e.exact,routes:e.routes?r(e.routes,t):[]}})};exports.convertRoutes=convertRoutes;
//# sourceMappingURL=routes.js.map


/***/ })

}]);
//# sourceMappingURL=npm.airy.js.map