"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonStyles = void 0;
var _reactNative = require("react-native");
var ScreenHeight = _reactNative.Dimensions.get("window").height;
var ScreenWidth = _reactNative.Dimensions.get("window").width;
var commonStyles = _reactNative.StyleSheet.create({
  screenContainer: {
    height: ScreenHeight,
    width: ScreenWidth,
    flex: 1
  },
  paragraph: {
    color: "#FFF9E9",
    fontSize: 22
  }
});
exports.commonStyles = commonStyles;