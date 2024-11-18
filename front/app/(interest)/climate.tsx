import { StyleSheet, Animated, Image, Dimensions, FlatList, View, SafeAreaView, Text } from 'react-native'
import React from 'react'


interface ItemProps {
key: string;
name: string;
image: string;
}


const COMPANY_DATA = [
{
    key: '1',
    name: 'Tesla',
    image: 'https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg',
},
{
    key: '2',
    name: 'NextEra Energy',
    image: 'https://www.nexteraenergy.com/content/nee/us/en/about-us/our-history/growth/_jcr_content/root/responsivegrid/neecontainer_copy_co_2073985023/pfcontainer/pfcontainer_1066833829/image_copy.coreimg.jpeg/1709734453632/growth-nextera-energy-logo-600x340.jpeg',
},
{
    key: '3',
    name: 'Brookfield Renewable',
    image: 'https://pbs.twimg.com/media/GJ2FpGJW8AAsrcN?format=jpg&name=small',
},
{
    key: '4',
    name: 'Enphase Energy',
    image: 'https://logovectordl.com/wp-content/uploads/2019/11/enphase-energy-inc-logo-vector.png',
},
{
    key: '5',
    name: 'Constellation Energy',
    image: 'https://www.constellationenergy.com/content/dam/constellationenergy/logos/960x540_constellation_logo.gif',
},
{
    key: '6',
    name: 'Fluence Energy',
    image: 'https://fluenceenergy.com/wp-content/uploads/2017/12/Fluence-square.png',
},
{
    key: '7',
    name: 'Form Energy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs05RnXyqIh4JEd0nUAIIkxGc6vvw-uqFJdA&s',
},
{
    key: '8',
    name: 'North Volt',
    image: 'https://yt3.googleusercontent.com/h-SCY7HJiPUhltyrxPyNgYT-WadUB3PqHDIfHenMVRNrq6SVHSj0ItLOcn2HnG3AtB18gT3LJw=s900-c-k-c0x00ffffff-no-rj',
},
];


const {width, height} = Dimensions.get('screen');


const WatchList = () => {
const scrollX = React.useRef(new Animated.Value(0)).current;
const renderItem = React.useCallback(({item}: {item: ItemProps}) => {
return (
    <View style = {styles.companyContainer}>
        <Image source={{uri: item.image}}
            style={styles.imageContainer} />
        <View style = {styles.newsAndInfoContainer}>
            <View style = {styles.infoContainer}>
                <View style = {styles.companyNameContainer}>
                    <Text style = {styles.companyNameText}>{item.name}</Text>
                </View>
            </View>
        </View>
    </View>
);
}, [width],
);
const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);


return (
<SafeAreaView style = {styles.container}>
    <Text style = {styles.nameText}>Climate</Text>
    <FlatList
    data = {COMPANY_DATA}
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
    height: 50,
    width: 300,
},
companyNameText:{
    fontSize: 20,
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
