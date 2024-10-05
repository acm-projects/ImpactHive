import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'



const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: "#FFD60A",
      tabBarInactiveTintColor: "#ffffff",
      tabBarStyle: {
        backgroundColor: "#000000",
        borderTopColor: "#000000",
        borderTopWidth: 2,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold",
      },
    }}>
        <Tabs.Screen
        name="home"
        options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" size={size} color={color}/>
            ),
        }}
        />
        <Tabs.Screen
        name="dashboard"
        options={{
            title: "Dashboard",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="stats-chart" size={size} color={color}/>
            ),
        }}
        />
    </Tabs>
  )
}

export default TabsLayout