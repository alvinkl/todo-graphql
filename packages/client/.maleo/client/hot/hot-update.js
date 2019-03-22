webpackHotUpdate_name_("dynamic.BacklogComponent-1cx81cx8",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
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

/***/ })

})
//# sourceMappingURL=hot-update.js.map