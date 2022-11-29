"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _CrossButton = _interopRequireDefault(require("../ui/CrossButton/CrossButton"));
var _CrossInputBox = _interopRequireDefault(require("../ui/CrossInputBox/CrossInputBox"));
var _commonStyles = require("../styles/commonStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Login(props) {
  var user = {
    mail: '',
    psw: ''
  };
  function signinButtonPress() {
    if (!!props.callbackLogin) props.callbackLogin();
  }
  function signupButtonPress() {
    if (!!props.callbackSignup) props.callbackSignup();
  }
  function getEmail(e) {
    user = _objectSpread(_objectSpread({}, user), {}, {
      mail: e
    });
  }
  function getPassword(e) {
    user = _objectSpread(_objectSpread({}, user), {}, {
      psw: e
    });
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _commonStyles.commonStyles.screenContainer,
    className: "bg"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require('../assets/images/bg-login.png'),
    resizeMode: "cover",
    style: [styles.bg]
  }, /*#__PURE__*/_react.default.createElement(_CrossInputBox.default, {
    callbackChange: getEmail,
    placeholder: "Email"
  }), /*#__PURE__*/_react.default.createElement(_CrossInputBox.default, {
    callbackChange: getPassword,
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Accedi",
    callbackPress: signinButtonPress,
    type: "primary"
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Registrati",
    callbackPress: signupButtonPress
  })));
}
Login.propTypes = {
  callbackLogin: _propTypes.default.func,
  callbackSignup: _propTypes.default.func
};
var styles = _reactNative.StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
var _default = Login;
exports.default = _default;