import { warnUnimplementedFilter } from '../../lib/util';
import FilterPrimitive from './FilterPrimitive';
export default class FeBlend extends FilterPrimitive {
  static displayName = 'FeBlend';
  static defaultProps = {
    ...this.defaultPrimitiveProps
  };
  render() {
    warnUnimplementedFilter();
    return null;
  }
}
//# sourceMappingURL=FeBlend.js.map