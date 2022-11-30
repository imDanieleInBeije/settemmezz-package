"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _CrossButton = _interopRequireDefault(require("../ui/CrossButton/CrossButton"));
var _useResponsive = _interopRequireDefault(require("../hooks/useResponsive"));
var _commonStyles = require("../styles/commonStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Components

//Custom Hooks

//Styles

function Result(props) {
  var isDesktop = (0, _useResponsive.default)();
  function goToHome() {
    if (!!props.callbackHome) props.callbackHome();
  }
  function goToGame() {
    if (!!props.callbackGame) props.callbackGame();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_commonStyles.commonStyles.screenContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/bg-game.jpg"),
    style: styles.bg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/logo.png"),
    style: [styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/banana.png"),
    style: [styles.image, isDesktop ? styles.imageDesktop : styles.imageMobile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _commonStyles.commonStyles.paragraph
  }, "Ha vinto "), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Torna alla home",
    callbackPress: goToHome
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Gioca ancora",
    type: "primary",
    callbackPress: goToGame
  })), props.children));
}
var styles = _reactNative.StyleSheet.create({
  bg: {
    width: _reactNative.Dimensions.get("window").width,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: "100%"
  },
  logoMobile: {
    height: 50
  },
  logoDesktop: {
    height: 70
  },
  image: {
    width: "100%",
    height: "35%"
  },
  imageMobile: {},
  imageDesktop: {}
});
Result.propTypes = {
  callbackHome: _propTypes.default.func,
  callbackGame: _propTypes.default.func
};
var _default = Result;
exports.default = _default;