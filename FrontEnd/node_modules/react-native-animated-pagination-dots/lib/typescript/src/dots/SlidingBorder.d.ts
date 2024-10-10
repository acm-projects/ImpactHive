import { Animated, ViewStyle } from 'react-native';
export interface SlidingBorderProps {
    data: Array<Object>;
    scrollX: Animated.Value;
    dotSize?: number;
    borderPadding?: number;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    dotContainerStyle?: ViewStyle;
    slidingIndicatorStyle?: ViewStyle;
}
declare const SlidingBorder: ({ scrollX, data, dotSize, containerStyle, dotStyle, dotContainerStyle, slidingIndicatorStyle, borderPadding, }: SlidingBorderProps) => JSX.Element;
export default SlidingBorder;
