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
function Header(props) {
  var isDesktop = (0, _useResponsive.default)();
  function goToHome() {
    if (!!props.callbackHome) props.callbackHome();
  }
  function goToRanking() {
    if (!!props.callbackRanking) props.callbackRanking();
  }
  function goToProfile() {
    if (!!props.callbackProfile) props.callbackProfile();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.header, isDesktop ? styles.headerDesktop : styles.headerMobile]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.navItem],
    onPress: goToHome
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    style: [styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile],
    source: require("../../assets/images/home.png")
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]
  }, "Home")), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.navItem],
    onPress: goToRanking
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    style: [styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile],
    source: require("../../assets/images/ranking.png")
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]
  }, "Ranking")), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.navItem],
    onPress: goToProfile
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    style: [styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile],
    source: require("../../assets/images/profile.png")
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]
  }, "Profile")));
}
var styles = _reactNative.StyleSheet.create({
  header: {
    backgroundColor: "#FD758F",
    borderWidth: 3,
    borderColor: "#97080C",
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 20,
    width: _reactNative.Dimensions.get("window").width - 40
  },
  headerMobile: {},
  headerDesktop: {
    width: _reactNative.Dimensions.get("window").width / 3
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    marginBottom: 3
  },
  iconMobile: {
    height: 26,
    width: 26
  },
  iconDesktop: {
    height: 28,
    width: 28
  },
  navLabel: {
    color: "#FFF9E9"
  },
  navLabelMobile: {
    fontSize: 12
  },
  navLabelDesktop: {
    fontSize: 18
  }
});
Header.propTypes = {
  callbackHome: _propTypes.default.func,
  callbackRanking: _propTypes.default.func,
  callbackProfile: _propTypes.default.func
};
var _default = Header;
exports.default = _default;