"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractIn = exports.extractFilter = exports.extractFeMerge = exports.extractFeGaussianBlur = exports.extractFeColorMatrix = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const spaceReg = /\s+/;
const extractFilter = props => {
  const {
    x,
    y,
    width,
    height,
    result
  } = props;
  const extracted = {
    x,
    y,
    width,
    height,
    result
  };
  return extracted;
};
exports.extractFilter = extractFilter;
const extractIn = props => {
  if (props.in) {
    return {
      in1: props.in
    };
  }
  return {};
};
exports.extractIn = extractIn;
const extractFeColorMatrix = props => {
  const extracted = {};
  if (props.values !== undefined) {
    if (Array.isArray(props.values)) {
      extracted.values = props.values.map(num => typeof num === 'number' ? num : parseFloat(num));
    } else if (typeof props.values === 'number') {
      extracted.values = [props.values];
    } else if (typeof props.values === 'string') {
      extracted.values = props.values.split(spaceReg).map(parseFloat).filter(el => !isNaN(el));
    } else {
      console.warn('Invalid value for FeColorMatrix `values` prop');
    }
  }
  if (props.type) {
    extracted.type = props.type;
  }
  return extracted;
};
exports.extractFeColorMatrix = extractFeColorMatrix;
const extractFeGaussianBlur = props => {
  const extracted = {};
  if (Array.isArray(props.stdDeviation)) {
    extracted.stdDeviationX = Number(props.stdDeviation[0]) || 0;
    extracted.stdDeviationY = Number(props.stdDeviation[1]) || 0;
  } else if (typeof props.stdDeviation === 'string' && props.stdDeviation.match(spaceReg)) {
    const stdDeviation = props.stdDeviation.split(spaceReg);
    extracted.stdDeviationX = Number(stdDeviation[0]) || 0;
    extracted.stdDeviationY = Number(stdDeviation[1]) || 0;
  } else if (typeof props.stdDeviation === 'number' || typeof props.stdDeviation === 'string' && !props.stdDeviation.match(spaceReg)) {
    extracted.stdDeviationX = Number(props.stdDeviation) || 0;
    extracted.stdDeviationY = Number(props.stdDeviation) || 0;
  }
  if (props.edgeMode) {
    extracted.edgeMode = props.edgeMode;
  }
  return extracted;
};
exports.extractFeGaussianBlur = extractFeGaussianBlur;
const extractFeMerge = (props, parent) => {
  const nodes = [];
  const childArray = props.children ? _react.default.Children.map(props.children, child => /*#__PURE__*/_react.default.cloneElement(child, {
    parent
  })) : [];
  const l = childArray.length;
  for (let i = 0; i < l; i++) {
    const {
      props: {
        in: in1
      }
    } = childArray[i];
    nodes.push(in1 || '');
  }
  return {
    nodes
  };
};
exports.extractFeMerge = extractFeMerge;
//# sourceMappingURL=extractFilter.js.map