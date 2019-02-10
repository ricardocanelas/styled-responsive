"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.responsive = void 0;

var responsive = function responsive(property, sufix) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var props = args[0];
    var theme = args[0].theme;

    if (theme && theme.hasOwnProperty('breakpoints')) {
      var out = '';
      Object.keys(theme.breakpoints).forEach(function (label) {
        var propName = sufix ? "".concat(label, "-").concat(sufix) : "".concat(label);
        var value = props[propName];

        if (theme.breakpoints.hasOwnProperty(label) && value) {
          out += "@media (min-width: ".concat(theme.breakpoints[label], ") {\n          ").concat(property, ": ").concat(value, ";\n        }");
        }
      });
      return out;
    }
  };
};

exports.responsive = responsive;

var media = function media(breakpoint) {
  return function (css) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var theme = args[0].theme;
      var out = '';

      if (theme && theme.hasOwnProperty('breakpoints')) {
        Object.keys(theme.breakpoints).forEach(function (label) {
          if (label === breakpoint) {
            out += "@media (min-width: ".concat(theme.breakpoints[label], ") {");
            out += css;
            out += '}';
          }
        });
      }

      return out;
    };
  };
};

exports.media = media;