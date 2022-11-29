"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonStyles = void 0;
var _reactNative = require("react-native");
var ScreenHeight = _reactNative.Dimensions.get("window").height;
var commonStyles = _reactNative.StyleSheet.create({
  screenContainer: {
    height: ScreenHeight,
    flex: 1
  }
});
exports.commonStyles = commonStyles;