import { FlatList, Animated, Dimensions, StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Link } from 'expo-router'
import SwitchSelector from "react-native-switch-selector";
import { Image, ImageBackground, } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



interface ItemProps {
  userId: Number;
  amount: Number;
  company: string;
  //amountInvested: number
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
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [investmentsList, setInvestmentsList] = useState([]);  // New state for actual investments data

  //const [updateTotal, setUpdateTotal] = useState<boolean>(false); //use in dashboard dependency list to refresh total everytime the investment is rendered

   const getInvestment = async (userId: number) => {
    try {
        console.log('In getInvestment function');
        const response = await axios.get('https://f330-129-110-242-224.ngrok-free.app/api/investments', {params:{ userId }});
        //setUpdateInfo(!updateInfo);
        console.log('Investment total:', response.data);

        return response.data
    } catch (error) {
        // Check if error is an AxiosError
        if (axios.isAxiosError(error)) {
          console.error('From getInvestment: Error getting investment:', error.response ? error.response.request : error.message);
      } else {
          console.error('Unexpected error:', error);
      }
    }
  };
  // Fetch investments data from the database
  const getInvestmentsList = async () => {
    try {
      const response = await axios.get('https://f330-129-110-242-224.ngrok-free.app/api/investmentsList');
      setInvestmentsList(response.data);  // Update state with fetched investments
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
      getInvestmentsList().then((res) => {
        setInvestmentsList(res); // Update the state with the current total
      });
    }, [])
  );
  /*useEffect(() => {
    getInvestment(0)
      .then((res) => {
        setTotalInvestment(res); // Update state with API result
      });
  }, []);*/
  useFocusEffect(
    React.useCallback(() => {
      getInvestment(0).then((res) => {
        setTotalInvestment(res); // Update the state with the current total
      });
    }, [])
  );

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
            <Text style={styles.infoPerText}>${item.amount.toString()}</Text>
          </View>

          <View style={styles.infoCompanyContainer}>
            <Text style={styles.infoCompanyText}>{item.company}</Text>
          </View>

          <View style={styles.infoTagContainer}>
            <Text style={styles.infoTagText}>Tag 1</Text>
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
<ImageBackground 
      source={require('@/assets/images/graphBG.png')} 
      style={styles.background}
      resizeMode="contain" 
    >
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
     { totalInvestment === 0 ? (
      <Text style={styles.hiveText}>No Investments Yet. Grow as a Philanthro-Bee.</Text>
    ) : totalInvestment <= 100 && totalInvestment > 0 ? (
      <Image style={styles.hiveImage1} source={require('../../assets/images/tier1.png')} />
    ) : totalInvestment <= 500 && totalInvestment > 100 ? (
      <Image style={styles.hiveImage2} source={require('../../assets/images/tier2.png')} />
    ) : totalInvestment <= 750 && totalInvestment > 500 ? (
      <Image style={styles.hiveImage3} source={require('../../assets/images/tier3.png')} />
    ) : totalInvestment > 750 ? (
      <Image style={styles.hiveImage4} source={require('../../assets/images/tier4.png')} />
    ) : (
      <Text style={styles.hiveText}>No Investments Yet. Grow as a Philanthro-Bee.</Text>
    )}
  
  </View>
  )}
</View>

  <View style={styles.rowContainer}>
  <Link href="../(sub)/chatbot" asChild>
        <TouchableOpacity style={styles.chatbotButton}>
          <View style={styles.rowIcon}>
            <MaterialCommunityIcons name="bee" size={24} color="black" />
          </View>
          <Text style={styles.rowText}>Chat With Polli</Text>
        </TouchableOpacity>
      </Link>
    <View style={styles.totalContainer}>
      <Text>${totalInvestment}</Text>
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
      data={investmentsList}
      keyExtractor={(item) => item.userId.toString()}
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
  </ImageBackground>

</SafeAreaView>

  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 10,
    right: 0,
    left: 0,
    paddingTop: height / 20,
    width: width,
    bottom: 0,
    zIndex: -1,
  },
  rowIcon: {
    width: 26,
    height: 26,
    marginRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  rowText: {
    marginRight: 5,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
  },
  chart: {
    marginVertical: 0,
    paddingVertical: 2,
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
    width: width - 30,
    height: height / 3.532,
  },
  hiveChart: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingBottom: 20,
    width: width - 30,
    height: height/3.532,
    overflow: "hidden",
    borderRadius: 20,
  },
  hiveText: {
   fontSize: 12,
   justifyContent: "center",
   textAlign: "center",
  },
  hiveImage1: {
    width: width / 1.25,
    height: height / 1.25,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    resizeMode: "center",
    zIndex: 1,
  },
  hiveImage2: {
    width: width,
    height: height / 3,
    zIndex: 1,
    alignSelf: "center",
    resizeMode: "contain",
    aspectRatio: 1,
  },
  hiveImage3: {
    width: width,
    height: height,
    zIndex: 1,
    alignSelf: "center",
    resizeMode: "center",
  },
  hiveImage4: {
    width: width,
    height: height,
    zIndex: 1,
    alignSelf: "center",
    resizeMode: "center",
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
  chatbotButton: {
    justifyContent: 'center',
    alignItems: 'center',  // Center items vertically
    flexDirection: 'row',  // Align items horizontally
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "40%",
    borderRadius: 32,
    transform: [{ scale: 0.8 }],
    borderColor: "#FBD143",
    backgroundColor: "#FBD143",  // Correct background color
    zIndex: 2,
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
