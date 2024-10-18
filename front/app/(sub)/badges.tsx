import { Dimensions, Pressable, Image, StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect } from 'expo-router'
import goal from '../(start)/goal'
const { width, height } = Dimensions.get('screen');
const badges = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.titleText}>Badges</Text>
            </View>
            <View style = {styles.goalContainer}>
                <Image source={require('../../assets/images/hive.png')}
                style={styles.goalImage} />
                <View style = {styles.goalTextContainer}>
                    <Text style = {styles.subtitleText}>Goal: </Text>
                    <Text style = {styles.goalText}>18 out of 360 days left</Text>
                </View>
            </View>
            <Link href="/(badges)/monthly-challenges" asChild>
                <Pressable onPress={() => {}}style = {styles.monthlyContainer}>
                    <Text style = {styles.subtitleText}>Monthly Challenges</Text>
                    <Image source={require('../../assets/images/hive.png')}
                    style={[styles.monthlyImage, {alignSelf: 'center'}]} />
                    <View style = {styles.smallImagesContainer}>
                        <Image source={require('../../assets/images/hive.png')}
                        style={[styles.smallImages, {left:0} , {bottom:-15}]} />
                        <Image source={require('../../assets/images/hive.png')}
                        style={[styles.smallImages, {left:25}, {bottom:-15}]} />
                        <Image source={require('../../assets/images/hive.png')}
                        style={[styles.smallImages, {left:50}, {bottom:-15}]} />
                        <Image source={require('../../assets/images/hive.png')}
                        style={[styles.smallImages, {left:75}, {bottom:-15}]} />
                        <Text style = {[styles.smallerText, {position:'absolute'}, {bottom:0}, {right:10}]}>+23 more</Text>
                    </View>
                </Pressable>
            </Link>
            <View style = {styles.timeContainer}>
                <Link href="/(badges)/weekly-challenges" asChild>
                    <Pressable style = {styles.weekContainer}>
                        <Text style = {styles.subtitleText}>Weekly</Text>
                        <Text style = {styles.subtitleText}>Challenges</Text>
                        <Image source={require('../../assets/images/hive.png')}
                        style={[styles.timeImages, {alignSelf: 'center'}]} />
                        <View style = {styles.smallImagesContainer}>
                            <Image source={require('../../assets/images/hive.png')}
                            style={[styles.smallImages, {left:0}, {bottom:0}]} />
                            <Image source={require('../../assets/images/hive.png')}
                            style={[styles.smallImages, {left:25}, {bottom:0}]} />
                            <Text style = {[styles.smallerText, {position:'absolute'}, {alignContent:'flex-end'}, {bottom:12}, {right:10}]}>+23 more</Text>
                        </View>
                    </Pressable>
                </Link>
                <Link href="/(badges)/daily-challenges" asChild>
                    <Pressable style = {styles.weekContainer}>
                        <Text style = {styles.subtitleText}>Daily</Text>
                        <Text style = {styles.subtitleText}>Challenges</Text>
                        <Image source={require('../../assets/images/react-logo.png')}
                        style={[styles.timeImages, {alignSelf: 'center'}]} />
                        <View style = {styles.smallImagesContainer}>
                            <Image source={require('../../assets/images/hive.png')}
                            style={[styles.smallImages,  {position:'absolute'}, {left:0}, {bottom:0}]} />
                            <Image source={require('../../assets/images/hive.png')}
                            style={[styles.smallImages,  {position:'absolute'}, {left:25}, {bottom:0}]} />
                        </View>
                        <Text style = {[styles.smallerText, {position:'absolute'}, {bottom:12}, {right:10}]}>+23 more</Text>
                    </Pressable>
                </Link>
            </View>

        </SafeAreaView>
    )
}

export default badges

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF7D3",
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    goalContainer:{
        marginHorizontal: 25,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#FDF8E1",
        flexDirection: "row",
    },
    subtitleText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    smallerText:{
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    goalImage:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    monthlyImage:{
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    goalTextContainer:{
        flexDirection: "column",
    },
    goalText:{
        marginLeft: 10,
    },
    timeContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        flex: 1,
        marginBottom: 20,
    },
    monthlyContainer:{  
        height: 300,
        marginHorizontal: 25,
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#FDF8E1",
    },
    weekContainer:{
        flex: 1,
        marginTop: 10,
        borderRadius: 10,
        marginRight: 5,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#FDF8E1",
    },
    dailyContainer: {
        flex: 1,
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 5,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#FDF8E1",
    },
    timeImages:{
        width: 250,
        height: 200,
        resizeMode: 'contain',
        //backgroundColor: "#000000",
    },
    smallImagesContainer:{
        flexDirection: 'row',
        flex: 1,
    },
    smallImages:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        position: 'absolute',
    },
});