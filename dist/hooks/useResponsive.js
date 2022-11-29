"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactResponsive = require("react-responsive");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var useResponsive = function useResponsive() {
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 992
  });
  return isDesktop;
};
var _default = useResponsive;
exports.default = _default;