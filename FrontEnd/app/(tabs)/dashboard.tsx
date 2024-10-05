import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <SafeAreaView style = {styles.homeContainer}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard
const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: "#FFF7D3",
    },

});