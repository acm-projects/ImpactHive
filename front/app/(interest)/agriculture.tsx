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
        name: 'Corteva',
        image: 'https://eu-images.contentstack.com/v3/assets/blte5a51c2d28bbcc9c/blt7e5c907dcd54a4eb/6487157973843f2dc875036b/CortevaLogo_HorizontalBlue.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
    },
    {
        key: '2',
        name: 'John Deere',
        image: 'https://i.pinimg.com/736x/7f/c5/bd/7fc5bd1b54decf903b6478061724b09a.jpg',
    },
    {
        key: '3',
        name: 'Bayer AG',
        image: 'https://vegetablegrowersnews.com/wp-content/uploads/2021/11/Bayer-Crop-Science-logo-e1674161171374.png',
    },
    {
        key: '4',
        name: 'Syngenta',
        image: 'https://www.nurserymag.com/fileuploads/image/2024/06/25/syngenta.jpg',
    },
    {
        key: '5',
        name: 'Trimble',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasSaXcZQavU_wE_HeDoAhtUsDYvCH0E1kzA&s',
    },
    {
        key: '6',
        name: 'Indigo AG',
        image: 'https://carbonherald.com/wp-content/uploads/2024/03/Indigo-AG-800x500.png',
    },
    {
        key: '7',
        name: 'Nutrien',
        image: 'https://mainstreamcorporatetraining.com/wp-content/uploads/2021/01/Nutrien.png',
    },
    {
        key: '8',
        name: 'Pivot Bio',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ki-tUtRAI3VEFwXKO9q5zzxxY6LzwPN76A&s',
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
        <Text style = {styles.nameText}>Agriculture</Text>
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
        width: 175,
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