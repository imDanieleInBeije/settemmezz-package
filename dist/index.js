"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Game", {
  enumerable: true,
  get: function get() {
    return _Game.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function get() {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Lobby", {
  enumerable: true,
  get: function get() {
    return _Lobby.default;
  }
});
Object.defineProperty(exports, "Login", {
  enumerable: true,
  get: function get() {
    return _Login.default;
  }
});
Object.defineProperty(exports, "Profile", {
  enumerable: true,
  get: function get() {
    return _Profile.default;
  }
});
Object.defineProperty(exports, "Ranking", {
  enumerable: true,
  get: function get() {
    return _Ranking.default;
  }
});
Object.defineProperty(exports, "Result", {
  enumerable: true,
  get: function get() {
    return _Result.default;
  }
});
Object.defineProperty(exports, "Signup", {
  enumerable: true,
  get: function get() {
    return _Signup.default;
  }
});
Object.defineProperty(exports, "userDuck", {
  enumerable: true,
  get: function get() {
    return _userDuck.default;
  }
});
var _Login = _interopRequireDefault(require("./screens/Login"));
var _Signup = _interopRequireDefault(require("./screens/Signup"));
var _userDuck = _interopRequireDefault(require("./redux/ducks/userDuck"));
var _Game = _interopRequireDefault(require("./screens/Game"));
var _Home = _interopRequireDefault(require("./screens/Home"));
var _Header = _interopRequireDefault(require("./ui/Header/Header"));
var _Ranking = _interopRequireDefault(require("./screens/Ranking"));
var _Profile = _interopRequireDefault(require("./screens/Profile"));
var _Lobby = _interopRequireDefault(require("./screens/Lobby"));
var _Result = _interopRequireDefault(require("./screens/Result"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }