import { FeColorMatrixProps as FeColorMatrixComponentProps } from '../../elements/filters/FeColorMatrix';
import { FeGaussianBlurProps as FeGaussianBlurComponentProps } from '../../elements/filters/FeGaussianBlur';
import { FeMergeProps as FeMergeComponentProps } from '../../elements/filters/FeMerge';
import { NativeProps as FeColorMatrixNativeProps } from '../../fabric/FeColorMatrixNativeComponent';
import { NativeProps as FeGaussianBlurNativeProps } from '../../fabric/FeGaussianBlurNativeComponent';
import { NativeProps as FeMergeNativeProps } from '../../fabric/FeMergeNativeComponent';
import { NumberProp } from './types';
interface FilterPrimitiveCommonProps {
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    result?: string;
}
export declare const extractFilter: (props: FilterPrimitiveCommonProps) => FilterPrimitiveCommonProps;
export declare const extractIn: (props: {
    in?: string;
}) => {
    in1: string;
} | {
    in1?: undefined;
};
export declare const extractFeColorMatrix: (props: FeColorMatrixComponentProps) => FeColorMatrixNativeProps;
export declare const extractFeGaussianBlur: (props: FeGaussianBlurComponentProps) => FeGaussianBlurNativeProps;
export declare const extractFeMerge: (props: FeMergeComponentProps, parent: unknown) => FeMergeNativeProps;
export {};
//# sourceMappingURL=extractFilter.d.ts.map