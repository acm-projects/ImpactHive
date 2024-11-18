import { Dimensions, Animated, FlatList, StyleSheet, SafeAreaView, View , Text } from 'react-native'
import * as React from 'react'
import { StatusBar } from "expo-status-bar";
import { SlidingDot } from "react-native-animated-pagination-dots";
import * as Progress from 'react-native-progress';
import { LineChart } from "react-native-chart-kit";


interface ItemProps {
  key: string;
  tag: string;
  invested: number;
}

const SLIDER_DATA = [
  {
    key: '1',
    tag: 'Tag 1',
    invested: 200,
  },
  {
    key: '2',
    tag: 'Tag 2',
    invested: 400,
  },
  {
    key: '3',
    tag: 'Tag 3',
    invested: 300,
  },
  {
    key: '4',
    tag: 'Tag 4',
    invested: 100,
  },
];

const {width, height} = Dimensions.get('screen');

const home = () => {

const scrollX = React.useRef(new Animated.Value(0)).current; 
const renderItem = React.useCallback(
  ({item}: {item: ItemProps}) => {
    return (
      <View style = {styles.tagContainer}>
        <View style={styles.tagTextContainer}>
          <Text style = {styles.investText2}>{item.tag}</Text>
          <Text style = {[styles.investText2, {fontFamily:'Trocchi-Bold'}]}>${item.invested}</Text>
        </View>
        <View>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  1,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ]
              }
            ]
          }}
          width={width-50}
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#FDF8E1",
            backgroundGradientFrom: "#FDF8E1",
            backgroundGradientTo: "#FDF8E1",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "0",
              strokeWidth: "1",
              stroke: "#FFFFFF"
            }
          }}
          //bezier
          style={{
            marginVertical: 8,
          }}
        />
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
      <StatusBar style="dark" />
      
      <View style = {styles.tipContainer}>
        <Text style = {{fontFamily: "Trocchi",}}>Invest in yourself, it's the best investment you can make! </Text>
      </View>

      <View style = {styles.investContainer}>
        <Text style ={styles.investText}>Goal Investments:</Text>  
          <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style = {styles.investText2}>$1000</Text>
            <Text style = {[styles.investText2, {fontFamily:'Trocchi-Bold'} ,  {alignSelf:"flex-end"}]}>$3000</Text>
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
    paddingTop: 25,
  },
  hello: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 30,
    fontFamily: "Trocchi-Bold",
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
    fontFamily: "Trocchi",
    fontWeight: 'bold',
    color: 'black',
  },
  investText2:{
    fontSize: 20,
    fontFamily: "Trocchi",
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
  tagTextContainer:{
    fontFamily: "Trocchi",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  text: {
    fontFamily: "Trocchi",
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