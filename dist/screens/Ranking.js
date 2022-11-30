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
var mockArr = [{
  name: 'Daniele',
  points: 6
}, {
  name: 'Isabella',
  points: 2
}, {
  name: 'Marco',
  points: 3
}, {
  name: 'Giovanni',
  points: 1
}];
function Ranking(props) {
  var isDesktop = (0, _useResponsive.default)();
  var Item = function Item(_ref) {
    var name = _ref.name,
      points = _ref.points,
      index = _ref.index;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.item, isDesktop ? styles.itemDesktop : styles.itemMobile]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.text, isDesktop ? index === 0 ? styles.firstPlayerDesktop : index === 1 ? styles.secondPlayerDesktop : index === 2 ? styles.thirdPlayerDesktop : styles.genericPlayerDesktop : index === 0 ? styles.firstPlayerMobile : index === 1 ? styles.secondPlayerMobile : index === 2 ? styles.thirdPlayerMobile : styles.genericPlayerMobile]
    }, "".concat(name, " :")), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.text, isDesktop ? index === 0 ? styles.firstPlayerDesktop : index === 1 ? styles.secondPlayerDesktop : index === 2 ? styles.thirdPlayerDesktop : styles.genericPlayerDesktop : index === 0 ? styles.firstPlayerMobile : index === 1 ? styles.secondPlayerMobile : index === 2 ? styles.thirdPlayerMobile : styles.genericPlayerMobile]
    }, points));
  };
  var renderItem = function renderItem(_ref2) {
    var item = _ref2.item,
      index = _ref2.index;
    return /*#__PURE__*/_react.default.createElement(Item, {
      name: item.name,
      points: item.points,
      index: index
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_commonStyles.commonStyles.screenContainer, styles.container]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/logo.png"),
    style: [styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.list
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    showsHorizontalScrollIndicator: false,
    data: mockArr.sort(function (a, b) {
      return a.points > b.points ? -1 : 1;
    }),
    renderItem: renderItem
  })), props.children);
}
var styles = _reactNative.StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#FFF9E9",
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
  list: {
    maxHeight: "70%"
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 3
  },
  itemMobile: {
    width: _reactNative.Dimensions.get("window").width - 40
  },
  itemDesktop: {
    width: _reactNative.Dimensions.get("window").width / 3
  },
  text: {
    color: "#97080C"
  },
  firstPlayerMobile: {
    fontSize: 28
  },
  secondPlayerMobile: {
    fontSize: 24
  },
  thirdPlayerMobile: {
    fontSize: 20
  },
  genericPlayerMobile: {
    fontSize: 16
  },
  firstPlayerDesktop: {
    fontSize: 32
  },
  secondPlayerDesktop: {
    fontSize: 28
  },
  thirdPlayerDesktop: {
    fontSize: 24
  },
  genericPlayerDesktop: {
    fontSize: 20
  }
});
var _default = Ranking;
exports.default = _default;