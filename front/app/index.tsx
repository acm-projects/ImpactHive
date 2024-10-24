import { Redirect, useRouter } from "expo-router";
import React, {useRef} from "react";
import { View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const Index = () => {
    const {width, height} = Dimensions.get('screen');
    const animationRef = useRef(null);
    const router = useRouter();
    const handleAnimationFinish = () => {
        router.replace({
            pathname:'/(start)/opening-screen',
            
        })
    };
    //return <Redirect href="/(start)/opening-screen" />;
    //return <Redirect href="/(tabs)/home" />;
    //return <Redirect href="/(sub)/badges" />;
    //return <Redirect href="/(start)/opening-interests" />;
    //return <Redirect href = "/(start)/goal" />;
    //return <Redirect href = "/(sub)/watch-list" />;
    //return <Redirect href = "/(sub)/interests" />;
    //return <Redirect href = "/(sub)/badges"/>;
    return (
        <View style = {{flex:1, alignItems:'center', margin:0, backgroundColor:'#FDF8E1', }}>
            <View style = {{flexDirection:'row'}}>
                <LottieView 
                style = {{width: width/2, height: height, position:'absolute', top:0, right:0,transform: [{scale: 1.5}]}}
                source = {require('@/assets/animations/rushing-bee.json')} 
                autoPlay 
                duration={1}
                loop = {false}
                //onAnimationFinish={handleAnimationFinish}
                />
                
                <LottieView 
                style = {{width: width/2, height: height, position:'absolute', top:0, left:-130, transform: [{rotateY: '180deg'}, {scale: 2}]}}
                source = {require('@/assets/animations/rushing-bee.json')} 
                autoPlay 
                loop = {false}
                onAnimationFinish={handleAnimationFinish}
                />
            </View>
            
            
        </View>
    )
    //return <Redirect href = "/(badges)/daily-challenges" />;
};
export default Index;