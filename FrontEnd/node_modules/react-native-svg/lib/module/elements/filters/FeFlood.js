import { warnUnimplementedFilter } from '../../lib/util';
import FilterPrimitive from './FilterPrimitive';
export default class FeFlood extends FilterPrimitive {
  static displayName = 'FeFlood';
  static defaultProps = {
    ...this.defaultPrimitiveProps
  };
  render() {
    warnUnimplementedFilter();
    return null;
  }
}
//# sourceMappingURL=FeFlood.js.map