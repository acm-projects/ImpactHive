import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf')
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded&&!error) return null;

    return (
        <Stack
        screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen 
            name = "index" 
            options = {{
                headerShown:false,
                
                title: 'index'}}/>
        </Stack>
    )
}

export default RootLayout