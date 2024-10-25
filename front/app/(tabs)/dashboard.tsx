import { FlatList, Animated, Dimensions, StyleSheet, SafeAreaView, View, Text } from 'react-native'
import React, { useState } from 'react'
import { LineChart, PieChart } from 'react-native-chart-kit';
import SwitchSelector from "react-native-switch-selector";
import { Image } from 'react-native';

interface ItemProps {
  key: string;
  title: string;
  tag: string;
  amountInvested: number
}

const SLIDER_DATA = [
  {
    key: '1',
    title: 'Company 1',
    tag: 'tag 1',
    amountInvested: 200,
  },
  {
    key: '2', 
    title: 'Company 2',
    tag: 'tag 1',
    amountInvested: 50,
  },
  {
    key: '3',
    title: 'Company 3',
    tag: 'tag 1',
    amountInvested: 70,
  },
  {
    key: '4',
    title: 'Company 4',
    tag: 'tag 1',
    amountInvested: 80,
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

const { width, height } = Dimensions.get('screen');

const Dashboard = () => {
  const [infoContainerHeight, setInfoContainerHeight] = useState(0);
  const [selectedChart, setSelectedChart] = useState('Line');


  const data = [
    {
      name: "Investment 1",
      amountInvested: 20,
      color: "#FFD60A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Investment 2",
      amountInvested: 30,
      color: "#000814",
      legendFontColor: "#7F7F7F",
    },
    {
      name: "Investment 3",
      amountInvested: 25,
      color: "#001D3D",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Investment 4",
      amountInvested: 15,
      color: "#003566",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Investment 5",
      amountInvested: 10,
      color: "#FFC300",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const scrollX = React.useRef(new Animated.Value(0)).current; 

  const renderItem = React.useCallback(
    ({ item }: { item: ItemProps }) => {
      return (
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoPerContainer}>
            <Text style={styles.infoPerText}>{item.key}</Text>
          </View>

          <View style={styles.infoCompanyContainer}>
            <Text style={styles.infoCompanyText}>{item.title}</Text>
          </View>

          <View style={styles.infoTagContainer}>
            <Text style={styles.infoTagText}>{item.tag}</Text>
            <Text style={styles.infoTagText}>Tag 2</Text>
            <Text style={styles.infoTagText}>Tag 3</Text>
          </View>
        </View>
      );
    },
    [width],
  );

  const chartOptions = [
    { value: "Line", customIcon: (
        <Image 
          source={require('../../assets/images/lineChart.png')} 
          style={{ marginHorizontal: 10 }} 
        />
      )
    },
  
    { value: "Donut", customIcon: (
        <Image 
          source={require('../../assets/images/donutChart.png')} 
          style={{ marginHorizontal: 10 }} 
        />
      )
    },
  
    { value: "Hive", customIcon: (
        <Image 
          source={require('../../assets/images/hiveChart.png')} 
          style={{ marginHorizontal: 10 }} 
        />
      )
    },
  ];
  

  const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);

  return (
<SafeAreaView style={styles.container}>
<View style={styles.chart}>
  {selectedChart === 'Line' && (
    <LineChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={width - 30}
      height={height/3.75}
      yAxisLabel="$"
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: "#FDF8E1",
        backgroundGradientFrom: "#FDF8E1",
        backgroundGradientTo: "#FDF8E1",
        decimalPlaces: 2,
        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#FFFFFF",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
      }}
    />
  )}
  {selectedChart === 'Donut' && (
    <PieChart style={styles.pieChart}
      data={data}
      width={width - 30}
      height={height/3.75}
      
      chartConfig={{
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      }}
      accessor={"amountInvested"}
      backgroundColor={"none"}
      center={[width/4, 0]}
      
      
      hasLegend={false} 
    />
  )}
  {selectedChart === 'Hive' && (
    <View style={styles.hiveChart}>
    <Image 
    source={require('../../assets/images/hiveChart.png')} 

    
  />
  </View>
  )}
</View>

  <View style={styles.rowContainer}>
    <View style={styles.totalContainer}>
      <Text>$1000</Text>
    </View>
    <View style={styles.switchSelector}>
      <SwitchSelector
        options={chartOptions}
        initial={0}
        onPress={value => setSelectedChart(value)} 
        backgroundColor="#FBD143"
        buttonColor="rgba(175, 133, 0, 70)"
      />
    </View>
  </View>

  <View 
    style={styles.infoContainer}
    onLayout={event => {
      const { height } = event.nativeEvent.layout;
      setInfoContainerHeight(height);
    }}
  >      
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
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

  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
  },
  chart: {
    marginVertical: 0,
    paddingVertical: 10,
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF8E1',
    borderWidth: 2,
    borderRadius: 20,
  },
  pieChart: {
    alignSelf: 'center',
    verticalAlign: 'middle',
    paddingVertical: 20,
    justifyContent: 'center',
    
  },
  hiveChart: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingBottom: 20,
    width: width - 30,
    height: height/3.75,
  },
  rowContainer: {
    position: 'absolute',
    bottom: height / 2.13,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  totalContainer: {
    backgroundColor: "#FDF8E1",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    zIndex: 2,
    alignSelf: 'center',
  },
  switchSelector: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: "35%",
    marginRight: 10,
    marginLeft: 20, 
    borderWidth: 4,
    borderRadius: 32,
    transform: [{ scale: 0.8 }],
    borderColor: "#FBD143",
    zIndex: 2,
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: "#FFF4BD",
    position: 'absolute',
    bottom: 0,
    height: height / 2,
    width: '100%',
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 35,
    zIndex: 0,
  },
  infoBoxContainer: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#FDF8E1",
    margin: 5,
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
  infoTagContainer: {
    margin: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    maxWidth: 100,
  },
  infoTagText: {
    fontSize: 10,
    color: 'black',
    margin: 10,
  },
  flatList: {
    flex: 1,
  },
});
