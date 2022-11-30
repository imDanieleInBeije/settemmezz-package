"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CrossModal(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalVisible = _useState2[0],
    setModalVisible = _useState2[1];
  function closeModal() {
    if (!!props.callbackClose) props.callbackClose();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.centeredView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "none",
    transparent: true,
    visible: props.isOpen,
    onRequestClose: function onRequestClose() {
      setModalVisible(!props.isOpen);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.centeredViewInner
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.modalView, {
      opacity: props.fadeAnim
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: styles.closeButtonContainer,
    onPress: closeModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../../assets/images/x.png"),
    style: styles.closeButton
  })), props.children))));
}
CrossModal.propTypes = {
  children: _propTypes.default.node.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  fadeAnim: _propTypes.default.object
};
CrossModal.defaultProps = {
  children: null,
  isOpen: false
};
var styles = _reactNative.StyleSheet.create({
  centeredView: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  centeredViewInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFF9E9",
    borderColor: "#97080C",
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5
  },
  closeButtonContainer: {
    backgroundColor: "#FFF9E9",
    borderColor: "#97080C",
    borderWidth: 2,
    borderRadius: 40,
    padding: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    marginBottom: 10,
    marginRight: -10
  },
  closeButton: {
    height: 16,
    width: 16
  }
});
var _default = CrossModal;
exports.default = _default;