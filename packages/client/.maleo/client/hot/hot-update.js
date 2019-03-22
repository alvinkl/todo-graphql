webpackHotUpdate_name_("dynamic.TodoComponent-iys7piys7p",{

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
      selectStatus = _ref.selectStatus;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    style: _objectSpread({}, generateStyle(data.status), liStyle)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, data.description)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: data.status
  }, data.status), selectStatus.map(function (d) {
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
      gqlData = props.graphql.data;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    style: _objectSpread({
      margin: 0,
      padding: 0
    }, wrapperStyle)
  }, data.map(function (d) {
    return ListTodoList({
      data: d,
      liStyle: liStyle,
      selectStatus: gqlData ? gqlData.status : []
    });
  }));
};
var query = "\n  {\n    status {\n      key\n      value\n    }\n  }\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_gql_withgql__WEBPACK_IMPORTED_MODULE_5__["default"])({
  query: query
})(TodoList));

/***/ })

})
//# sourceMappingURL=hot-update.js.map