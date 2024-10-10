"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _util = require("../../lib/util");
var _FilterPrimitive = _interopRequireDefault(require("./FilterPrimitive"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class FeBlend extends _FilterPrimitive.default {
  static displayName = 'FeBlend';
  static defaultProps = {
    ...this.defaultPrimitiveProps
  };
  render() {
    (0, _util.warnUnimplementedFilter)();
    return null;
  }
}
exports.default = FeBlend;
//# sourceMappingURL=FeBlend.js.map