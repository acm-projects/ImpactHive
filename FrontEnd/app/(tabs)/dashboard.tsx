import { FlatList, Animated, Dimensions, StyleSheet, SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import PieChart from 'react-native-pie-chart'

interface ItemProps {
  key: string;
  title: string;
  tag: string;
}

const SLIDER_DATA = [
  {
    key: '1',
    title: 'Company 1',
    tag: 'tag 1',
  },
  {
    key: '2',
    title: 'Company 2',
    tag: 'tag 1',
  },
  {
    key: '3',
    title: 'Company 3',
    tag: 'tag 1',
  },
  {
    key: '4',
    title: 'Company 4',
    tag: 'tag 1',
  },
  {
    key: '5',
    title: 'Company 5',
    tag: 'tag 1',
  },
  {
    key: '6',
    title: 'Company 6',
    tag: 'tag 1',
  },
  {
    key: '7',
    title: 'Company 7',
    tag: 'tag 1',
  },
  {
    key: '8',
    title: 'Company 8',
    tag: 'tag 1',
  },
];

const {width, height} = Dimensions.get('screen');


const dashboard = () => {
  const series = [1, 1, 1, 1, 2]
  const sliceColor = ['#FFD60A', '#000814', '#001D3D', '#003566', '#FFC300']

  const scrollX = React.useRef(new Animated.Value(0)).current; 
  const renderItem = React.useCallback(
  ({item}: {item: ItemProps}) => {
    return (
      <View style = {styles.infoBoxContainer}>
        <View style = {styles.infoPerContainer}>
          <Text style = {styles.infoPerText}>{item.key}</Text>
        </View>

        <View style = {styles.infoCompanyContainer}>
          <Text style = {styles.infoCompanyText}>{item.title}</Text>
        </View>

        <View style = {styles.infoTagContainer}>
          <Text style = {styles.infoTagText}>{item.tag}</Text>
          <Text style = {styles.infoTagText}>Tag 2</Text>
          <Text style = {styles.infoTagText}>Tag 3</Text>
        </View>
      </View>
    );
  }, [width],
  );
  const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.pieChart}>
        <PieChart
          widthAndHeight={250}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.8}
          />
      </View>
      <View style = {styles.totalContainer}>
        <Text>$1000</Text>
      </View>

      <View style = {styles.infoContainer}>
      <FlatList
        data={SLIDER_DATA}
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
        


      </View>
      
    </SafeAreaView>
  )
}

export default dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
  },
  pieChart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalContainer: {
    backgroundColor: "#FDF8E1",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  infoContainer:{
    backgroundColor: "#FFF4BD",
    alignContent: 'space-between',
    height: height-455,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    
  },
  infoBoxContainer: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#FDF8E1",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    
  },
  infoPerContainer: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: "#FBD143",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  }, 
  infoPerText: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  infoCompanyContainer: {
    margin: 10,
    alignSelf: 'center',
  },
  infoCompanyText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
  infoTagContainer:{
    margin: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    maxWidth: 100,
  },
  infoTagText:{
    fontSize: 10,
    color: 'black',
    margin: 10,
  },
  flatList: {
    flex: 1,
  },
});