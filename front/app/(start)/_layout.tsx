import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const StartLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    'Trocchi': require('../../assets/fonts/Trocchi-Regular.ttf')
  })
  
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  
  if (!fontsLoaded&&!error) return null;
  return(
    <Stack
        screenOptions={{
          headerShown:true,
          animation:'slide_from_right'
          }}>
            <Stack.Screen 
            name = "opening-screen" 
            options = {{
                headerShown:false,
                title: 'OpeningScreen'}}/>
            <Stack.Screen
            name = "log-in"
            options = {{
                headerShown:false,
                title: 'LogIn'}}/>
            <Stack.Screen
            name = "sign-up"
            options = {{
                headerShown:false,
                title: 'SignUp'}}/>
            <Stack.Screen
            name = "goal"
            options = {{
                headerShown:false,
                title: 'Goal'}}/>
            <Stack.Screen
            name = "opening-interests"
            options = {{
                headerShown:false,
                title: 'Opening Interests'}}/>
        </Stack>
  )
  
}


export default StartLayout