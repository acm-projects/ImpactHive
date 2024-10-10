import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()



const SubLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded&&!error) return null;
    return (
        <Stack
            screenOptions={{headerShown:false}}>
                <Stack.Screen
                name = "badges"
                options = {{
                    headerShown:false,
                    title: 'Badges'}}/>
                <Stack.Screen
                name = "interests"
                options = {{
                    headerShown:false,
                    title: 'Interests'}}/>
                <Stack.Screen
                name = "watch-list"
                options = {{
                    headerShown:false,
                    title: 'Watch List'}}/>
        </Stack>
    )
}

export default SubLayout