import { Animated, ViewStyle } from 'react-native';
export interface SlidingDotProps {
    data: Array<Object>;
    scrollX: Animated.Value;
    dotSize?: number;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    dotContainerStyle?: ViewStyle;
    slidingIndicatorStyle?: ViewStyle;
    marginHorizontal?: number;
}
declare const SlidingDot: ({ scrollX, data, dotSize, containerStyle, dotStyle, slidingIndicatorStyle, marginHorizontal, }: SlidingDotProps) => JSX.Element;
export default SlidingDot;
