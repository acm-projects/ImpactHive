import { StyleSheet, Animated, Image, Dimensions, FlatList, View, SafeAreaView, Text } from 'react-native'
import React from 'react'

interface ItemProps {
    key: string;
    name: string;
    image: string; //badge
    date: string;
    description: string;
}

const BADGE_DATA = [
    {
        key: '1',
        name: 'First Step',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest $1 into poverty reduction',
    },
    {
        key: '2',
        name: 'Second Step',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest $2 into education',
    },
    {
        key: '3',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
    {
        key: '4',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
    {
        key: '5',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
    {
        key: '6',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
    {
        key: '7',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
    {
        key: '8',
        name: 'Company 1',
        image: 'https://reactjs.org/logo-og.png',
        date: '9/10/21',
        description: 'Invest 20,000 dollars',
    },
];

const {width, height} = Dimensions.get('screen');

const WatchList = () => {
const scrollX = React.useRef(new Animated.Value(0)).current; 
const renderItem = React.useCallback(({item}: {item: ItemProps}) => {
    return (
        <View style = {styles.badgeContainer}>
            <Image source={{uri: item.image}} 
            style={{width: 88, height: 88}} />
            <View style = {styles.badgeTextContainer}>
                <Text style = {styles.badgeName}>{item.name}</Text> 
                <Text style = {styles.badgeDescription}>Earned on: {item.date}</Text>
                <Text style = {styles.badgeDescription}>{item.description}</Text>
            </View>
        </View>
    );
}, [width],
);
const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);

return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.nameText}>Monthly</Text>
        <Text style = {styles.nameText}>Challenges</Text>
        <FlatList
        data = {BADGE_DATA}
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
        
        {/* <View style = {styles.divider}></View> */}

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
    badgeContainer: {
        flexDirection: 'row',
        width: width,
        height: 90,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#FDF8E1',
    },
    badgeTextContainer: {
        flex: 1,
        flexDirection: 'column',
        width: width,
    },
    badgeName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    badgeDescription:{
        fontSize: 15,
        color: 'black',
        marginLeft: 5,
    },
    divider:{
        height: 1,
        width: width,
        backgroundColor: 'black',
    },
    flatList: {
        flex: 1,
    },
});
