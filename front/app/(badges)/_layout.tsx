import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const InterestLayout = () => {
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
            headerShown:false,
            animation:'slide_from_right'
        }}>
            <Stack.Screen 
            name = "daily-challenges" 
            options = {{
                headerShown:false,
                title: 'Daily Challenges'}}/>
            <Stack.Screen
            name = "monthly-challenges"
            options = {{
                headerShown:false,
                title: 'Monthly Chellenges'}}/>
            <Stack.Screen
            name = "weekly-challenges"
            options = {{
                headerShown:false,
                title: 'Weekly Chellenges'}}/>
        </Stack>
)

}


export default InterestLayout