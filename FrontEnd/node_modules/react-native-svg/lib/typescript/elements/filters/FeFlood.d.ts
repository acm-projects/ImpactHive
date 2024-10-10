import { ColorValue } from 'react-native';
import { NumberProp } from '../../lib/extract/types';
import FilterPrimitive from './FilterPrimitive';
export interface FeFloodProps {
    in?: string;
    floodColor?: ColorValue;
    floodOpacity?: NumberProp;
}
export default class FeFlood extends FilterPrimitive<FeFloodProps> {
    static displayName: string;
    static defaultProps: {
        x?: NumberProp;
        y?: NumberProp;
        width?: NumberProp;
        height?: NumberProp;
        result?: string;
    };
    render(): null;
}
//# sourceMappingURL=FeFlood.d.ts.map