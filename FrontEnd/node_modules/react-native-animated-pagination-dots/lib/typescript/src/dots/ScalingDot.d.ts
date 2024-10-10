import { Animated, ViewStyle } from 'react-native';
export interface ScalingDotProps {
    data: Array<Object>;
    scrollX: Animated.Value;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    inActiveDotOpacity?: number;
    inActiveDotColor?: string;
    activeDotScale?: number;
    activeDotColor?: string;
}
declare const ScalingDot: ({ scrollX, data, dotStyle, containerStyle, inActiveDotOpacity, inActiveDotColor, activeDotScale, activeDotColor, }: ScalingDotProps) => JSX.Element;
export default ScalingDot;
