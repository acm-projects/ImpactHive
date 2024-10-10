import React from 'react';
const spaceReg = /\s+/;
export const extractFilter = props => {
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
export const extractIn = props => {
  if (props.in) {
    return {
      in1: props.in
    };
  }
  return {};
};
export const extractFeColorMatrix = props => {
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
export const extractFeGaussianBlur = props => {
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
export const extractFeMerge = (props, parent) => {
  const nodes = [];
  const childArray = props.children ? React.Children.map(props.children, child => /*#__PURE__*/React.cloneElement(child, {
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
//# sourceMappingURL=extractFilter.js.map