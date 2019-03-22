(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["dynamic.TodoComponent-iys7piys7p"],{

/***/ "G0va":
/*!************************!*\
  !*** ./gql-context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var GraphQLClientContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (GraphQLClientContext);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "2mql");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _gql_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gql-context */ "G0va");








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
                refetch && _this.refetch();
              }

              if (typeof refetch === 'string') {
                _this.refetch(refetch);
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
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            graphql: this.state,
            refetch: this.refetch,
            mutate: this.mutate
          }));
        }
      }]);

      return GQLHoC;
    }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

    GQLHoC.contextType = _gql_context__WEBPACK_IMPORTED_MODULE_9__["default"];
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(GQLHoC, ComposedComponent);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (withClient);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
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
      mutate = props.mutate;
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
          refetch: true
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

/***/ "wl0N":
/*!*******************************!*\
  !*** ./src/TodoComponent.jsx ***!
  \*******************************/
/*! exports provided: TodoComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "XVgq");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "Z7t5");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "Bhuq");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "SqZg");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "TRZx");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoList */ "KkKk");
/* harmony import */ var _gql_withgql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gql-withgql */ "H1w3");







function _typeof(obj) { if (typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default.a ? _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default.a : function _getPrototypeOf(o) { return o.__proto__ || _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_4___default()(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default.a || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var style = {
  wrap: {
    display: 'flex'
  },
  boardList: {
    display: 'inline-block',
    width: (100 - 5) / 3 + '%',
    height: 500,
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
    margin: 5
  }
};
var TodoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoComponent, _React$Component);

  function TodoComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TodoComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TodoComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderTodo = function () {
      var todos = _this.props.graphql.data.todos;
      var data = todos.filter(function (t) {
        return t.status === 'TODO';
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data
      });
    };

    _this.renderOnProgress = function () {
      var todos = _this.props.graphql.data.todos;
      var data = todos.filter(function (t) {
        return t.status === 'ON_PROGRESS';
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data
      });
    };

    _this.renderDone = function () {
      var todos = _this.props.graphql.data.todos;
      var data = todos.filter(function (t) {
        return t.status === 'DONE';
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data
      });
    };

    return _this;
  }

  _createClass(TodoComponent, [{
    key: "render",
    value: function render() {
      var loading = this.props.graphql.loading;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Loading Todo ...");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.wrap
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.boardList
      }, this.renderTodo()), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.boardList
      }, this.renderOnProgress()), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style.boardList
      }, this.renderDone()));
    }
  }]);

  return TodoComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(_gql_withgql__WEBPACK_IMPORTED_MODULE_8__["default"])({
  query: "\n    {\n      todos {\n        id\n        description\n        status\n        user {\n          name\n          id\n        }\n      }\n    }\n  "
})(TodoComponent));

/***/ })

}]);
//# sourceMappingURL=dynamic.TodoComponent-iys7piys7p.js.map