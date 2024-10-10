import { Component } from 'react';
export default class FilterPrimitive extends Component {
  root = null;
  static defaultPrimitiveProps = {
    x: '0%',
    y: '0%',
    width: '100%',
    height: '100%'
  };
  refMethod = instance => {
    this.root = instance;
  };
  setNativeProps = props => {
    var _this$root;
    (_this$root = this.root) === null || _this$root === void 0 || _this$root.setNativeProps(props);
  };
}
//# sourceMappingURL=FilterPrimitive.js.map