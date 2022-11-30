"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _useResponsive = _interopRequireDefault(require("../../hooks/useResponsive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CrossInputBox(props) {
  var isDesktop = (0, _useResponsive.default)();
  function handleChange(e) {
    if (!!props.callbackChange) props.callbackChange(e);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    value: props.value,
    placeholder: props.placeholder,
    placeholderTextColor: "rgba(0,0,0,0.3)",
    onChangeText: handleChange,
    style: [styles.inputBox, isDesktop ? styles.inputBoxDesktop : styles.inputBoxMobile, props.addStyles],
    keyboardType: props.type,
    secureTextEntry: props.isPassword
  }));
}
var styles = _reactNative.StyleSheet.create({
  inputBox: {
    color: "#97080C",
    borderWidth: 1,
    borderColor: "#97080C",
    backgroundColor: "#FFF9E9",
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  inputBoxDesktop: {
    fontSize: 16,
    width: 300
  },
  inputBoxMobile: {
    fontSize: 12,
    width: 200
  }
});
CrossInputBox.propTypes = {
  placeholder: _propTypes.default.string,
  type: _propTypes.default.string,
  isPassword: _propTypes.default.bool
};
CrossInputBox.defaultProps = {
  placeholder: "",
  type: "default",
  isPassword: false
};
var _default = CrossInputBox;
exports.default = _default;