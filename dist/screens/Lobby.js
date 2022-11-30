"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useResponsive = _interopRequireDefault(require("../hooks/useResponsive"));
var _commonStyles = require("../styles/commonStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Components

//Custom Hooks

//Styles

var arr = ["user1", "user2", "user3"];
function Lobby() {
  var isDesktop = (0, _useResponsive.default)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_commonStyles.commonStyles.screenContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/bg-game.jpg"),
    style: styles.bg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/logo.png"),
    style: [styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyles.commonStyles.paragraph, styles.text]
  }, "In attesa di altri giocatori..."), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyles.commonStyles.paragraph, styles.text]
  }, "mm:ss")), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/profile.png"),
    style: [styles.myProfile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.playersContainer
  }, arr.map(function (element, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      key: key,
      resizeMode: "contain",
      source: require("../assets/images/profile.png"),
      style: [styles.playersIcon]
    });
  }))));
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
  text: {
    textAlign: "center"
  },
  myProfile: {
    width: "100%",
    height: 150
  },
  playersContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },
  playersIcon: {
    height: 80,
    width: 80,
    padding: 20
  }
});
var _default = Lobby;
exports.default = _default;