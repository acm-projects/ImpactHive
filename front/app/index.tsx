import { Redirect, useRouter } from "expo-router";
import React, {useRef} from "react";
import { View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const Index = () => {
    const {width, height} = Dimensions.get('screen');
    const animationRef = useRef(null);
    const router = useRouter();
    const handleAnimationFinish = () => {
        //return <Redirect href="/(start)/opening-screen" />
        router.replace({
            pathname:'/(start)/opening-screen',
            
        })
    };
    return <Redirect href="/(start)/opening-screen" />;
    //return <Redirect href="/(tabs)/home" />;
    //return <Redirect href="/(sub)/badges" />;
    //return <Redirect href="/(start)/opening-interests" />;
    //return <Redirect href = "/(start)/goal" />;
    //return <Redirect href = "/(sub)/watch-list" />;
    //return <Redirect href = "/(sub)/interests" />;
    //return <Redirect href = "/(sub)/badges"/>;
    //return <Redirect href = "/(badges)/daily-challenges" />;
};
export default Index;