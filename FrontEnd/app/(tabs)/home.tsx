import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router'
const home = () => {
  return (
    <SafeAreaView style = {styles.homeContainer}>
      <Text style = {styles.hello}>Hi, User!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#FFF7D3",
  },
  hello: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 30,
  },
  tip:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 30,
  },
  invest:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 30,
  },
  tag:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 30,
  }


});