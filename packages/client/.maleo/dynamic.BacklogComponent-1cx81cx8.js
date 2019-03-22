require("source-map-support").install();
exports.ids = ["dynamic.BacklogComponent-1cx81cx8"];
exports.modules = {

/***/ "+SFK":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "AUvm");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "wgeU");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "adOz");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "dl0q");
module.exports = __webpack_require__(/*! ../../modules/_core */ "WEpk").Symbol;


/***/ }),

/***/ "+plK":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "ApPD");
module.exports = __webpack_require__(/*! ../../modules/_core */ "WEpk").Object.getPrototypeOf;


/***/ }),

/***/ "2Nb0":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "FlQf");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "bBy9");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "zLkG").f('iterator');


/***/ }),

/***/ "3GJH":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "lCc8");
var $Object = __webpack_require__(/*! ../../modules/_core */ "WEpk").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "6tYh":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "93I4");
var anObject = __webpack_require__(/*! ./_an-object */ "5K7Z");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "2GTP")(Function.call, __webpack_require__(/*! ./_object-gopd */ "vwuL").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9BDd":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "GvbO");
module.exports = __webpack_require__(/*! ../../modules/_core */ "WEpk").Array.isArray;


/***/ }),

/***/ "ApPD":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "JB68");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "U+KD");

__webpack_require__(/*! ./_object-sap */ "zn7N")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "Bhuq":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "+plK");

/***/ }),

/***/ "FlQf":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "ccE7")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "MPFp")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "G0va":
/*!************************!*\
  !*** ./gql-context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var GraphQLClientContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (GraphQLClientContext);

/***/ }),

/***/ "GvbO":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "Y7ZC");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "kAMH") });


/***/ }),

/***/ "H1w3":
/*!************************!*\
  !*** ./gql-withgql.js ***!
  \************************/
/*! exports provided: withClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withClient", function() { return withClient; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "XVgq");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "Z7t5");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "Bhuq");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "SqZg");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "TRZx");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "p0XB");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hoist-non-react-statics */ "0TPh");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _gql_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gql-context */ "G0va");









function _typeof(obj) { if (typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default.a || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default.a ? _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default.a : function _getPrototypeOf(o) { return o.__proto__ || _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_5___default()(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default.a || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var withClient = function withClient(options) {
  return function (ComposedComponent) {
    var _options$query = options.query,
        query = _options$query === void 0 ? '' : _options$query,
        _options$variables = options.variables,
        variables = _options$variables === void 0 ? {} : _options$variables;
    var key = ComposedComponent.name;

    var GQLHoC =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(GQLHoC, _React$Component);

      function GQLHoC(props, context) {
        var _this;

        _classCallCheck(this, GQLHoC);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(GQLHoC).call(this, props, context));

        _this.refetch = function () {
          var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : key;
          return _this.context.setRefetch(k, true);
        };

        _this.doneRefetch = function () {
          var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : key;
          return _this.context.setRefetch(k, false);
        };

        _this.state = {
          data: null,
          loading: true,
          errors: null,
          refetch: _this.refetch,
          mutation: null
        };

        _this.query = function (_ref) {
          var query = _ref.query,
              variables = _ref.variables;

          _this.context.client.query({
            query: query,
            variables: variables
          }).then(function (result) {
            return _this.setState({
              data: result.data.data,
              errors: result.data.errors || null,
              loading: false
            });
          }).catch(function (error) {
            return _this.setState({
              errors: [error],
              loading: false
            });
          });
        };

        _this.mutate = function (_ref2) {
          var mutation = _ref2.mutation,
              variables = _ref2.variables,
              _ref2$refetch = _ref2.refetch,
              refetch = _ref2$refetch === void 0 ? false : _ref2$refetch;

          _this.context.client.mutate({
            mutation: mutation,
            variables: variables
          }).then(function (result) {
            _this.setState({
              mutation: {
                data: result.data.data,
                errors: result.data.errors || null,
                loading: false
              }
            }, function () {
              if (typeof refetch === 'boolean') {
                return refetch && _this.refetch();
              }

              if (typeof refetch === 'string') {
                return _this.refetch(refetch);
              }

              if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(refetch)) {
                return refetch.map(function (key) {
                  return _this.refetch(key);
                });
              }
            });
          }).catch(function (error) {
            return _this.setState({
              mutation: {
                errors: [error],
                loading: false
              }
            });
          });
        };

        _this.context.client.appendQuery(key, {
          query: query,
          variables: variables
        });

        return _this;
      }

      _createClass(GQLHoC, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.query(this.context.client.queries[key]);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextContext) {
          var isRefetch = nextContext.refetches[key];

          if (isRefetch) {
            this.query(this.context.client.queries[key]);
            this.doneRefetch();
          }
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            graphql: this.state,
            refetch: this.refetch,
            mutate: this.mutate
          }));
        }
      }]);

      return GQLHoC;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

    GQLHoC.contextType = _gql_context__WEBPACK_IMPORTED_MODULE_10__["default"];
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9___default()(GQLHoC, ComposedComponent);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (withClient);

/***/ }),

/***/ "Hfiw":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "Y7ZC");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "6tYh").set });


/***/ }),

/***/ "Hv9C":
/*!**********************************!*\
  !*** ./src/BacklogComponent.jsx ***!
  \**********************************/
/*! exports provided: BacklogComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogComponent", function() { return BacklogComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "XVgq");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "Z7t5");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "Bhuq");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "SqZg");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "TRZx");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoList */ "KkKk");
/* harmony import */ var _gql_withgql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gql-withgql */ "H1w3");







var _list;

function _typeof(obj) { if (typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default.a ? _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default.a : function _getPrototypeOf(o) { return o.__proto__ || _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default()(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default.a || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var style = {
  wrap: {
    width: '100%'
  },
  list: (_list = {
    padding: 0,
    margin: 5
  }, _defineProperty(_list, "padding", 5), _defineProperty(_list, "textAlign", 'center'), _defineProperty(_list, "border", '1px solid black'), _list),
  formWrap: {
    width: '98%',
    border: '1px solid black',
    margin: 5,
    padding: 5,
    textAlign: 'center'
  },
  input: {
    margin: 5
  }
};
var BacklogComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BacklogComponent, _React$Component);

  function BacklogComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BacklogComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BacklogComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userId: 0,
      description: ''
    };

    _this.handleChange = function (key, event) {
      _this.setState(_defineProperty({}, key, event.target.value));
    };

    _this.submitBacklog = function () {
      var _this$state = _this.state,
          userId = _this$state.userId,
          description = _this$state.description;

      _this.props.mutate({
        mutation: mutation,
        variables: {
          userId: userId,
          description: description
        },
        refetch: true
      });
    };

    _this.renderFormComponent = function () {
      var _this$state2 = _this.state,
          userId = _this$state2.userId,
          description = _this$state2.description;
      var users = _this.props.graphql.data.users;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.formWrap
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: style.input
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "description"
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: _this.handleChange.bind(null, 'description'),
        value: description
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: style.input
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "description"
      }, "Assign to"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        onChange: _this.handleChange.bind(null, 'userId'),
        value: userId
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0"
      }, "Unassigned"), users.map(function (u) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: u.id,
          value: u.id
        }, u.name);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: style.input
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: _this.submitBacklog
      }, "Add")));
    };

    _this.renderTodo = function () {
      var data = _this.props.graphql.data;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data.backlogs,
        wrapperStyle: style.list,
        mutateRefetch: "BacklogComponent"
      });
    };

    return _this;
  }

  _createClass(BacklogComponent, [{
    key: "render",
    value: function render() {
      var loading = this.props.graphql.loading;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Loading Backlogs...");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.wrap
      }, this.renderTodo(), this.renderFormComponent());
    }
  }]);

  return BacklogComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
var query = "\n  {\n    backlogs {\n      id\n      description\n      status\n      user {\n        name\n      }\n    }\n\n    users {\n      name\n      id\n    }\n  }\n";
var mutation = "\n  mutation addBacklog($userId: ID!, $description: String!) {\n    addBacklog(userId: $userId, description: $description) {\n      id\n      description\n      status\n      user {\n        name\n      }\n    }\n  }\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_gql_withgql__WEBPACK_IMPORTED_MODULE_8__["default"])({
  query: query
})(BacklogComponent));

/***/ }),

/***/ "JbBM":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "Hfiw");
module.exports = __webpack_require__(/*! ../../modules/_core */ "WEpk").Object.setPrototypeOf;


/***/ }),

/***/ "KkKk":
/*!**************************!*\
  !*** ./src/TodoList.jsx ***!
  \**************************/
/*! exports provided: ListTodoList, TodoList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTodoList", function() { return ListTodoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return TodoList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gql_withgql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gql-withgql */ "H1w3");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var generateStyle = function generateStyle(status) {
  var style = {
    listStyleType: 'none',
    border: '1px solid',
    margin: '5px'
  };

  if (status === 'BACKLOG') {
    style = _objectSpread({}, style, {
      color: 'blue',
      borderColor: 'blue'
    });
  }

  if (status === 'DONE') {
    style = _objectSpread({}, style, {
      color: 'green',
      borderColor: 'green'
    });
  }

  if (status === 'ON_PROGRESS') {
    style = _objectSpread({}, style, {
      color: 'lightblue',
      borderColor: 'lightblue'
    });
  }

  return style;
};

var ListTodoList = function ListTodoList(_ref) {
  var data = _ref.data,
      _ref$liStyle = _ref.liStyle,
      liStyle = _ref$liStyle === void 0 ? {} : _ref$liStyle,
      selectStatus = _ref.selectStatus,
      updateStatus = _ref.updateStatus;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    key: data.id,
    style: _objectSpread({}, generateStyle(data.status), liStyle)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, data.description)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
    onChange: function onChange(e) {
      return updateStatus({
        id: data.id,
        status: e.target.value
      });
    },
    value: data.status
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", null), selectStatus.map(function (d) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
      key: d.key,
      value: d.value
    }, d.value);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, data.user.name));
};
var TodoList = function TodoList(props) {
  var data = props.data,
      _props$wrapperStyle = props.wrapperStyle,
      wrapperStyle = _props$wrapperStyle === void 0 ? {} : _props$wrapperStyle,
      _props$liStyle = props.liStyle,
      liStyle = _props$liStyle === void 0 ? {} : _props$liStyle,
      gqlData = props.graphql.data,
      mutate = props.mutate,
      mutateRefetch = props.mutateRefetch;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    style: _objectSpread({
      margin: 0,
      padding: 0
    }, wrapperStyle)
  }, data.map(function (d) {
    return ListTodoList({
      data: d,
      liStyle: liStyle,
      selectStatus: gqlData ? gqlData.status : [],
      updateStatus: function updateStatus(_ref2) {
        var id = _ref2.id,
            status = _ref2.status;
        return mutate({
          mutation: mutation,
          variables: {
            id: id,
            status: status
          },
          refetch: mutateRefetch
        });
      }
    });
  }));
};
var query = "\n  {\n    status {\n      key\n      value\n    }\n  }\n";
var mutation = "\n  mutation ($id: ID!, $status: TodoStatusEnum!) {\n    updateStatus(id: $id, status: $status) {\n      id,\n      description,\n      status,\n      user {\n        name\n      }\n    }\n  }\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_gql_withgql__WEBPACK_IMPORTED_MODULE_5__["default"])({
  query: query
})(TodoList));

/***/ }),

/***/ "MPFp":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "uOPS");
var $export = __webpack_require__(/*! ./_export */ "Y7ZC");
var redefine = __webpack_require__(/*! ./_redefine */ "kTiW");
var hide = __webpack_require__(/*! ./_hide */ "NegM");
var Iterators = __webpack_require__(/*! ./_iterators */ "SBuE");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "j2DC");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "RfKB");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "U+KD");
var ITERATOR = __webpack_require__(/*! ./_wks */ "UWiX")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "SBuE":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "SqZg":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "3GJH");

/***/ }),

/***/ "TRZx":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "JbBM");

/***/ }),

/***/ "U+KD":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "B+OT");
var toObject = __webpack_require__(/*! ./_to-object */ "JB68");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "VVlx")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "UO39":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "UXZV":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "UbbE");

/***/ }),

/***/ "UbbE":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "o8NH");
module.exports = __webpack_require__(/*! ../../modules/_core */ "WEpk").Object.assign;


/***/ }),

/***/ "XVgq":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "2Nb0");

/***/ }),

/***/ "Z7t5":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "+SFK");

/***/ }),

/***/ "adOz":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "Zxgi")('asyncIterator');


/***/ }),

/***/ "bBy9":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "w2d+");
var global = __webpack_require__(/*! ./_global */ "5T2Y");
var hide = __webpack_require__(/*! ./_hide */ "NegM");
var Iterators = __webpack_require__(/*! ./_iterators */ "SBuE");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "UWiX")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "ccE7":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "Ojgd");
var defined = __webpack_require__(/*! ./_defined */ "Jes0");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "dl0q":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "Zxgi")('observable');


/***/ }),

/***/ "hDam":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "j2DC":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "oVml");
var descriptor = __webpack_require__(/*! ./_property-desc */ "rr1i");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "RfKB");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "NegM")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "UWiX")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "kwZ1":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "w6GO");
var gOPS = __webpack_require__(/*! ./_object-gops */ "mqlF");
var pIE = __webpack_require__(/*! ./_object-pie */ "NV0k");
var toObject = __webpack_require__(/*! ./_to-object */ "JB68");
var IObject = __webpack_require__(/*! ./_iobject */ "M1xp");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "KUxP")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "lCc8":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "Y7ZC");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "oVml") });


/***/ }),

/***/ "o8NH":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "Y7ZC");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "kwZ1") });


/***/ }),

/***/ "p0XB":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "9BDd");

/***/ }),

/***/ "w2d+":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "hDam");
var step = __webpack_require__(/*! ./_iter-step */ "UO39");
var Iterators = __webpack_require__(/*! ./_iterators */ "SBuE");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "NsO/");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "MPFp")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "wgeU":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=dynamic.BacklogComponent-1cx81cx8.js.map