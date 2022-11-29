"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useResponsive = _interopRequireDefault(require("../../hooks/useResponsive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CrossButton(props) {
  var isDesktop = (0, _useResponsive.default)();
  function press() {
    if (!!props.callbackPress) props.callbackPress();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.button, isDesktop ? styles.buttonDesktop : styles.buttonMobile, props.type === "primary" ? {
      backgroundColor: "#97080C"
    } : {
      backgroundColor: "#FFF9E9"
    }, props.disabled && {
      opacity: 0.5
    }],
    disabled: props.disabled,
    onPress: press
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonLabel, isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile, props.type === "primary" ? {
      color: "#FFF9E9"
    } : {
      color: "#97080C"
    }]
  }, props.label));
}
var styles = _reactNative.StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttonDesktop: {},
  buttonMobile: {},
  buttonLabel: {},
  buttonLabelMobile: {
    fontSize: 18
  },
  buttonLabelDesktop: {
    fontSize: 22
  }
});
CrossButton.propTypes = {
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.string,
  callbackPress: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
CrossButton.defaultProps = {
  label: "",
  type: "secondary",
  callbackPress: undefined,
  disabled: false
};
var _default = CrossButton;
exports.default = _default;