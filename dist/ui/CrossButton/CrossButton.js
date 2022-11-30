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
    style: [styles.button, props.size === "small" && styles.buttonSmall, props.type === "primary" ? {
      backgroundColor: "#97080C"
    } : {
      backgroundColor: "#FFF9E9"
    }, props.disabled && {
      opacity: 0.5
    }, props.addStyles],
    disabled: props.disabled,
    onPress: press
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonLabel, isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile, props.size === "small" && (isDesktop ? styles.buttonSmallLabelDesktop : styles.buttonSmallLabelMobile), props.type === "primary" ? {
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
    paddingHorizontal: 40,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSmall: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonLabel: {
    //Può servire per il font
  },
  buttonLabelMobile: {
    fontSize: 18
  },
  buttonLabelDesktop: {
    fontSize: 24
  },
  buttonSmallLabelMobile: {
    fontSize: 12
  },
  buttonSmallLabelDesktop: {
    fontSize: 16
  }
});
CrossButton.propTypes = {
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.string,
  callbackPress: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string
};
CrossButton.defaultProps = {
  label: "",
  type: "secondary",
  callbackPress: undefined,
  size: "default"
};
var _default = CrossButton;
exports.default = _default;