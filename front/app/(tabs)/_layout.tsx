import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


const TabsLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    'Trocchi': require('../../assets/fonts/Trocchi-Regular.ttf')
})
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
        <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="search1" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user-circle-o" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout