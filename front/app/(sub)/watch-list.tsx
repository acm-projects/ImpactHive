import { StyleSheet, Animated, Image, Dimensions, FlatList, View, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
require('dotenv').config();



interface ItemProps {
    //key: string;
    //name: string;
    //image: string;
    //tags: string;
    //newsTitle: string;
    //newsBody: string;
    company: String;
}

const COMPANY_DATA = [
    {
        company: 'Company 1',
    },
    {
        company: 'Company 2',
    },
    {
        company: 'Company 3',
    },
    {
        company: 'Company 4',
    },
    {
        company: 'Company 5',
    },
    {
        company: 'Company 6',
    },
    {
        company: 'Company 7',
    },
    {
        company: 'Company 8',
    },
];

const {width, height} = Dimensions.get('screen');

const WatchList = () => {
const [watchlistList, setWatchlistList] = useState([]);  // New state for actual watchlist data
let ngrok_key = process.env.NGROK_KEY || "";

// Fetch watchlist data from the database
const getWatchlistList = async () => {
    try {
      const response = await axios.get('https://' + ngrok_key + '.ngrok-free.app/api/watchlistList');
      setWatchlistList(response.data);  // Update state with fetched watchlist items
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching investments list:', error.response ? error.response.data : error.message);
      } else {
        console.error('Unexpected error for investments list:', error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getWatchlistList().then((res) => {
        setWatchlistList(res); // Update the state with the current total
      });
    }, [])
  );

const scrollX = React.useRef(new Animated.Value(0)).current; 
const renderItem = React.useCallback(({item}: {item: ItemProps}) => {
    return (
        <View style = {styles.companyContainer}>
        <Image source={{uri: 'https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg'}}
            style={styles.imageContainer} />
        <View style = {styles.newsAndInfoContainer}>
            <View style = {styles.infoContainer}>
                <View style = {styles.companyNameContainer}>
                    <Text style = {styles.companyNameText}>{item.company}</Text>
                </View>
            </View>
        </View>
    </View>
    );
}, [width],
);
const keyExtractor = React.useCallback((item: ItemProps) => item.company, []);

return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.nameText}>Watch List</Text>
        <FlatList
        data = {watchlistList}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollX}}}],
        {
            useNativeDriver: false,
        },
        )}
        style={styles.flatList}
        bounces={false}
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />

    </SafeAreaView>
)
}

export default WatchList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF7D3",
    },
    nameContainer:{
        flexWrap: 'wrap',
        marginTop: 100,
        marginHorizontal: 15,
        alignContent: 'center',
    },
    nameText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    companyContainer:{
        backgroundColor: '#FFFFFF',
        marginHorizontal: 35,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "black",
    },
    imageContainer:{
        backgroundColor: '#FFFFFF',
        width: width-70,
        height: 150,
        paddingBottom: 50,
        alignSelf: 'center', 
        borderRadius: 10,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        borderColor: "black",
        resizeMode: 'cover',
    },
    newsAndInfoContainer:{
        flexDirection: 'row',
        backgroundColor: '#757575',
        width: width-70,
        borderRadius: 8,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        borderWidth: 2,
        flex: 1,
    },
    infoContainer:{
        alignContent: 'space-between',
        height: 50,
        borderRadius: 8,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        flexWrap: 'wrap',
    },
    companyNameContainer:{
        height: 20,
        width: 175,
    },
    companyNameText:{
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
        color: 'white',
    },
    tagContainer:{
        height: 30,
        width: 175,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    tagText:{
        fontSize: 10,
        color: 'white',
    },
    newsContainer:{
        width: 175,
        height: 50,
    },
    newsTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    newsText:{
        fontSize: 10,
        flexWrap: 'wrap',
        color: 'white',
    },
    flatList: {
        flex: 1,
    },
});