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
            animation:'slide_from_right'}}>
            <Stack.Screen 
            name = "agriculture" 
            options = {{
                headerShown:false,
                title: 'Agriculture'}}/>
            <Stack.Screen
            name = "climate"
            options = {{
                headerShown:false,
                title: 'Climate'}}/>
            <Stack.Screen
            name = "education"
            options = {{
                headerShown:false,
                title: 'Education'}}/>
            <Stack.Screen
            name = "energy"
            options = {{
                headerShown:false,
                title: 'Energy'}}/>
            <Stack.Screen
            name = "equality"
            options = {{
                headerShown:false,
                title: 'Equality'}}/>
            <Stack.Screen
            name = "healthcare"
            options = {{
                headerShown:false,
                title: 'Healthcare'}}/>
            <Stack.Screen
            name = "poverty"
            options = {{
                headerShown:false,
                title: 'Poverty'}}/>
            <Stack.Screen
            name = "rainforests"
            options = {{
                headerShown:false,
                title: 'Rainforests'}}/>
            <Stack.Screen
            name = "recycling"
            options = {{
                headerShown:false,
                title: 'Recycling'}}/>
            <Stack.Screen
            name = "water"
            options = {{
                headerShown:false,
                title: 'Water'}}/>
        </Stack>
)

}


export default InterestLayout