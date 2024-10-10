import { Animated, ViewStyle } from 'react-native';
export interface LiquidLikeProps {
    data: Array<Object>;
    scrollX: Animated.Value;
    scrollOffset: Animated.Value;
    containerStyle?: ViewStyle;
    dotSize?: number;
    marginHorizontal?: number;
    inActiveDotOpacity?: number;
    inActiveDotColor?: string;
    activeDotColor?: string;
    wormDot?: boolean;
    strokeWidth?: number;
    bigHead?: boolean;
    bigHeadScale?: number;
}
declare const LiquidLike: ({ scrollX, data, dotSize, marginHorizontal, inActiveDotOpacity, inActiveDotColor, activeDotColor, containerStyle, scrollOffset, wormDot, bigHead, strokeWidth, bigHeadScale, }: LiquidLikeProps) => JSX.Element;
export default LiquidLike;
