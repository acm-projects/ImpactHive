import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect } from 'expo-router'

const badges = () => {
    return (
        <SafeAreaView style = {styles.container}>
            
        </SafeAreaView>
    )
}

export default badges

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF7D3",
    },
    goalContainer:{

    },
    monthlyContainer:{  
        
    },
    dailyContainer: {
    
    },
    button: {
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
    ButtonPress: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
    }
});