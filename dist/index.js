"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withResposive = exports.withResposiveSimple = exports.Responsive = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 100%;\n    border: 1px solid #f5f5f5;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Responsible =
/*#__PURE__*/
function () {
  function Responsible() {
    _classCallCheck(this, Responsible);

    this.breakpointValues = this.setBreakpoints({
      xs: {
        min: '0em',
        width: '100%'
      },
      sm: {
        min: '48em',
        width: '49rem'
      },
      md: {
        min: '64em',
        width: '65rem'
      },
      lg: {
        min: '75em',
        width: '76rem'
      }
    });
  }

  _createClass(Responsible, [{
    key: "setBreakpoints",
    value: function setBreakpoints(breakpointValues) {
      Object.keys(breakpointValues).forEach(function (key) {
        return breakpointValues[key] = _objectSpread({}, breakpointValues[key], {
          id: key
        });
      });
      return this.breakpointValues = breakpointValues;
    }
  }, {
    key: "map",
    value: function map(func, breakpoints) {
      var out = '';
      breakpoints = breakpoints || this.breakpointValues;
      Object.keys(breakpoints).forEach(function (key) {
        var elem = breakpoints[key];
        out += "@media only screen and (min-width: ".concat(elem['min'], ") {\n                ").concat(func(elem), "\n            }\n            ");
      });
      return out;
    }
  }, {
    key: "withResposive",
    value: function withResposive(comp) {
      return (0, _styledComponents.default)(comp)(_templateObject(), function (props) {
        return Responsive.map(function (breakpoint) {
          if (props[breakpoint.id] !== undefined) {
            return "\n                        width: ".concat(Responsive.getWidth(props[breakpoint.id]), ";\n                    ");
          }

          return '';
        });
      });
    }
  }, {
    key: "withResponiveSimple",
    value: function withResponiveSimple(comp) {
      var _this = this;

      return (0, _styledComponents.default)(comp)(_templateObject2(), function (props) {
        return _this.map(function (breakpoint) {
          return "max-width: ".concat(breakpoint['width'], ";");
        }, props.brekpoints);
      });
    }
  }, {
    key: "getWidth",
    value: function getWidth(value) {
      if (typeof value === 'number') {
        if (value >= 0 && value <= 1) return (value * 100).toFixed(2) + '%';else return value + 'px';
      }

      var n = parseInt(value);
      if (n >= 1 && n <= 12) return 100 / (12 / value) + '%';
      return value;
    }
  }, {
    key: "anyToPixel",
    value: function anyToPixel(value) {
      if (typeof value === 'string' && value.indexOf('em') !== -1) value = parseFloat(value, 10) * 16;else value = parseFloat(value, 10);
      return value;
    }
  }, {
    key: "check",
    value: function check(width, points) {
      var _this2 = this;

      var visibles = [];
      var p = Object.keys(points).reduce(function (acc, key) {
        acc[key] = _objectSpread({}, points[key]);
        return acc;
      }, {});
      Object.keys(p).forEach(function (key) {
        p[key].isVisible = false;

        var min = _this2.anyToPixel(p[key].min);

        if (min < width) {
          visibles.push(p[key].id);
          p[key].isVisible = true;
        }
      });
      return {
        current: visibles.length > 0 ? visibles[visibles.length - 1] : null,
        visibles: visibles,
        breakpoints: p
      };
    }
  }]);

  return Responsible;
}();

var Responsive = new Responsible();
exports.Responsive = Responsive;
var withResposiveSimple = Responsive.withResposiveSimple;
exports.withResposiveSimple = withResposiveSimple;
var withResposive = Responsive.withResposive;
exports.withResposive = withResposive;
var StyledContainer = Responsive.withResponiveSimple(_styledComponents.default.div(_templateObject3()));

var Container =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Container, _React$PureComponent);

  function Container() {
    var _getPrototypeOf2;

    var _this3;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      data: {
        current: null,
        visibles: [],
        breakpoints: {}
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "updateDimensions", function () {
      var points = Responsive.check(window.innerWidth, Responsive.breakpointValues);

      _this3.setState({
        data: points
      });
    });

    return _this3;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.children.constructor === Function) {
        var points = Responsive.check(window.innerWidth, Responsive.breakpointValues);
        this.setState({
          data: points
        });
        window.addEventListener('resize', this.updateDimensions);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.children.constructor === Function) {
        window.removeEventListener('resize', this.updateDimensions);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var brekpoints = Responsive.breakpointValues;
      return _react.default.createElement(StyledContainer, _extends({}, this.props, {
        brekpoints: brekpoints
      }), this.props.children.constructor === Function ? this.props.children(this.state.data) : this.props.children);
    }
  }]);

  return Container;
}(_react.default.PureComponent);

exports.default = Container;