"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CrossButton = _interopRequireDefault(require("../ui/CrossButton/CrossButton"));
var _useResponsive = _interopRequireDefault(require("../hooks/useResponsive"));
var _commonStyles = require("../styles/commonStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Game() {
  var isDesktop = (0, _useResponsive.default)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_commonStyles.commonStyles.screenContainer, styles.container]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/bg-game.jpg"),
    style: styles.bg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameRowCenter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardsContainerTop
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.topCard, isDesktop ? styles.topCardDesktop : styles.topCardMobile]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.topCard, isDesktop ? styles.topCardDesktop : styles.topCardMobile, styles.topCardImage]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.points, styles.pointsVertical]
  }, "3")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.gameRowDek, isDesktop ? styles.gameRowDekDesktop : styles.gameRowDekMobile]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.sectionPlayer, styles.sectionPlayerLeft]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardsContainerLeft
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.leftCard]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.leftCard, isDesktop ? styles.leftCardImageDesktop : styles.leftCardImageMobile]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.points, styles.pointsHorizontal, {
      paddingLeft: 30
    }]
  }, "6"))), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/deck.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.centerCard]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.sectionPlayer, styles.sectionPlayerRight]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.points, styles.pointsHorizontal, {
      paddingRight: 30
    }]
  }, "10")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardsContainerRight
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.rightCard]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.rightCard, isDesktop ? styles.rightCardImageDesktop : styles.rightCardImageMobile]
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameRowCenter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _commonStyles.commonStyles.paragraph
  }, "\xC8 il tuo turno")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameRowCenter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.points, styles.pointsVertical]
  }, "7\xBD"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardsContainerBottom
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard, styles.bottomCardImage]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    source: require("../assets/images/card.png"),
    style: [styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard, styles.bottomCardImage]
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonsContainer
  }, /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Resta"
  }), /*#__PURE__*/_react.default.createElement(_CrossButton.default, {
    label: "Carta",
    type: "primary"
  }))));
}
var styles = _reactNative.StyleSheet.create({
  bg: {
    width: _reactNative.Dimensions.get("window").width,
    flex: 1
  },
  gameContainer: {
    justifyContent: "space-between",
    flex: 5,
    overflow: "hidden",
    paddingBottom: 80
  },
  gameRowCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  gameRowDek: {
    flexDirection: "row",
    alignItems: "center"
  },
  gameRowDekMobile: {
    justifyContent: "space-between"
  },
  gameRowDekDesktop: {
    justifyContent: "center"
  },
  sectionPlayer: {
    flexDirection: "row",
    alignItems: "center"
  },
  sectionPlayerRight: {
    marginLeft: 50
  },
  sectionPlayerLeft: {
    marginRight: 50
  },
  cardsContainerTop: {
    flexDirection: "row-reverse"
  },
  cardsContainerLeft: {
    flexDirection: "column"
  },
  cardsContainerRight: {
    flexDirection: "column-reverse"
  },
  cardsContainerBottom: {
    flexDirection: "row"
  },
  card: {},
  cardMobile: {
    height: 107,
    width: 76
  },
  cardDesktop: {
    height: 124,
    width: 87
  },
  topCard: {
    transform: [{
      rotate: "180deg"
    }]
  },
  topCardMobile: {
    marginTop: -30
  },
  topCardDesktop: {
    marginTop: 20
  },
  rightCard: {
    transform: [{
      rotate: "-90deg"
    }],
    marginRight: -20,
    paddingLeft: 30
  },
  leftCard: {
    transform: [{
      rotate: "90deg"
    }],
    marginLeft: -20,
    paddingRight: 30
  },
  bottomCard: {},
  points: {
    color: "#FFF9E9"
  },
  topCardImage: {
    marginRight: -56
  },
  bottomCardImage: {
    marginLeft: -56
  },
  leftCardImageMobile: {
    marginTop: -87
  },
  leftCardImageDesktop: {
    marginTop: -93
  },
  rightCardImageMobile: {
    marginBottom: -87
  },
  rightCardImageDesktop: {
    marginBottom: -93
  },
  pointsHorizontal: {
    // width: 19,
  },
  pointsVertical: {
    paddingVertical: 10
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});
var _default = Game;
exports.default = _default;