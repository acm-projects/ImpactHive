import { TouchableOpacity,Pressable, Image, StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect } from 'expo-router'
import React from 'react'

const OpeningScreen = () => {
  return (
    <View style ={styles.homeContainer}>
        <Image source = {require('@/assets/images/logo.png')} style = {{width: 340, height: 290}}/>
        <StatusBar style="auto" />
        <TouchableOpacity>
            <Link href="/(start)/log-in" asChild>
                <Pressable style = {styles.Button}>
                    <Text>Log-In</Text>
                </Pressable>
            </Link>
        </TouchableOpacity>
        <Link href="/(start)/sign-up" asChild>
            <Pressable style = {styles.Button2}>
                <Text>Sign-Up</Text>
            </Pressable>
        </Link>
        <Link href="/(tabs)/home" style ={styles.bottomText}> Go to Home Screen </Link>
        {/* <Link href="/(tabs)/home" style ={styles.bottomText}> Go to Next Screen </Link> */}
    </View>
  )
}

export default OpeningScreen
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
        paddingHorizontal: 145,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    ButtonPress: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
        opacity: 0.5,
    },
    font: {
        color: "black",
        fontSize: 20,
        fontFamily: "SpaceMono",
        fontWeight: "bold",
    },
    bottomText: {
        position: 'absolute',  // Position the text absolutely within the View
        bottom: 20,  // Distance from the bottom of the screen
        left: 0,
        right: 0,
        textAlign: 'center',  // Center the text horizontally
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    
    });