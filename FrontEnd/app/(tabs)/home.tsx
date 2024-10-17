import { Dimensions , Animated, FlatList, StyleSheet, SafeAreaView, View , Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import {SlidingDot} from "react-native-animated-pagination-dots";
import * as Progress from 'react-native-progress';


interface ItemProps {
  key: string;
  title: string;
  description: string;
}

const SLIDER_DATA = [
  {
    key: '1',
    title: 'Tag 1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    key: '2',
    title: 'Tag 2',
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
  {
    key: '3',
    title: 'Tag 3',
    description:
      "THis is a test for another screen ",
  },
  {
    key: '4',
    title: 'Tag 4',
    description:
      "This is the first tag",
  },
];

const {width, height} = Dimensions.get('screen');

const home = () => {

const scrollX = React.useRef(new Animated.Value(0)).current; 
const renderItem = React.useCallback(
  ({item}: {item: ItemProps}) => {
    return (
      <View style = {styles.tagContainer}>
        <View style={styles.tag}>
          <Text style = {styles.investText2}>{item.title}</Text>
            <Progress.Bar 
            progress={.5}
            width={width-85}
            height={20}
            borderRadius={10}
            borderWidth={2}
            borderColor='black'
            color = "#FFD60A" />
          {/* <Animated.Text>{item.description}</Animated.Text> */}
        </View>
          <View style={styles.tag}>
            <Text style = {styles.investText2}>{item.title}</Text>
              <Progress.Bar 
              progress={.4}
              width={width-85}
              height={20}
              borderRadius={10}
              borderWidth={2}
              borderColor='black'
              color = "#FFD60A" />
          </View>
        <View style={styles.tag}>
          <Text style = {styles.investText2}>{item.title}</Text>
            <Progress.Bar 
            progress={1}
            width={width-85}
            height={20}
            borderRadius={10}
            borderWidth={2}
            borderColor='black'
            color = "#FFD60A" />
        </View>
      </View>
    );
  },
  [width],
);
const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);
  return (
    <SafeAreaView style = {styles.homeContainer}>

      <Text style = {styles.hello}>Hi, User!</Text>
      <StatusBar style="auto" />
      
      <View style = {styles.tipContainer}>
        <Text>Invest in yourself, it's the best investment you can make! </Text>
      </View>

      <View style = {styles.investContainer}>
        <Text style ={styles.investText}>Goal Investments:</Text>  
          <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style = {styles.investText2}>$1000</Text>
            <Text style = {[styles.investText2, {fontWeight: "bold"} ,  {alignSelf:"flex-start"}]}>$3000</Text>
      </View>
        <Progress.Bar 
        progress={1000/3000}
        width={width-85}
        height={20}
        borderRadius={10}
        borderColor='black'
        borderWidth={2}
        color = "#FFD60A" />
      </View>

      <FlatList
        data={SLIDER_DATA}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        style={styles.flatList}
        pagingEnabled
        horizontal
        bounces={false}
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      <View style={styles.text}>
        <View style={styles.dotContainer}>
          <SlidingDot
            marginHorizontal={3}
            containerStyle={styles.constainerStyles}
            data={SLIDER_DATA}
            scrollX={scrollX}
            dotSize={10}
            dotStyle={styles.dotStyle}
            slidingIndicatorStyle={{backgroundColor: '#FFD60A'}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#FFF7D3",
  },
  hello: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 30,
  },
  tipContainer:{
    backgroundColor: "#FDF8E1",
    marginTop: 25,
    marginHorizontal: 25,
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  dotContainer: {
    bottom: -5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  investContainer:{
    backgroundColor: "#FDF8E1",
    width: "auto",
    height: "auto",
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 25,
    marginHorizontal: 25,
    borderColor: "black",
    borderWidth: 2,
  },
  investText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  investText2:{
    fontSize: 20,
    color: 'black',
  },
  tagContainer:{
    flex: 1,
    backgroundColor: '#FDF8E1',
    width: width-45,
    height: "auto",
    borderRadius: 10,
    marginTop: 25,
    margin: 22.5,
    paddingTop: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: 'space-evenly',
  },
  tag:{
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: width-80,
    fontSize: 20, 
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  text: {
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
  },
  dotStyle: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {
    bottom:10,
  },

});