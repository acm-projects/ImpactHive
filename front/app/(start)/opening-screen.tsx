import { Dimensions, TouchableOpacity, Pressable, Image, StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, withDelay, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const OpeningScreen = () => {
    const { width, height } = Dimensions.get('screen');
    const opacity = useSharedValue(0);

    // Define the animated opacity style
    const animatedOpacityStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    useEffect(() => {
        // Trigger the opacity animation with a delay
        opacity.value = withDelay(2700, withTiming(1)); // Update to 1 for standard opacity value
    }, []);

    return (
        <View style={styles.homeContainer}>
            <LottieView 
                style={{ width: width, height: 300, alignSelf: 'center' }}
                source={require('@/assets/animations/ImpactHive Logo.json')} 
                autoPlay 
                loop={false}
                duration={3000}
            />
            <StatusBar style="dark" />

            {/* Outer wrapper with FadeIn layout animation */}
            <Animated.View entering={FadeIn.duration(3100)}>
                {/* Inner Animated.View with animated opacity */}
                <Animated.View style={animatedOpacityStyle}>
                    <Image source={require('@/assets/images/image 26.png')} style={{ width: width - 45, height: 70 }} />

                    <TouchableOpacity>
                        <Link href="/(start)/log-in" asChild>
                            <Pressable style={styles.Button}>
                                <Text style={styles.font}>Login</Text>
                            </Pressable>
                        </Link>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Link href="/(start)/sign-up" asChild>
                            <Pressable style={styles.Button2}>
                                <Text style={styles.font}>Sign Up</Text>
                            </Pressable>
                        </Link>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>

            <Link href="/(tabs)/home" style={styles.bottomText} replace>
                Go to Home Screen
            </Link>
        </View>
    );
};

export default OpeningScreen;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#FFF7D3",
        alignItems: "center",
        justifyContent: "center",
    },
    Button: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    Button2: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 142,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    font: {
        color: "black",
        fontSize: 20,
        fontFamily: "Trochi",
    },
    bottomText: {
        position: 'absolute', 
        bottom: 20, 
        left: 0,
        right: 0,
        textAlign: 'center', 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
