import React, { useEffect, useState } from 'react';
//import { addInvestment, getTotalInvestment } from '../../backend/investments.js';
import axios from 'axios';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  TextInput,
  Animated,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const { GoogleGenerativeAI } = require("@google/generative-ai");
let company = 'Netflix';

const { width } = Dimensions.get('window'); 

export default function CompanyPage() {
    const [GeminiTicker, setGeminiTicker] = useState("NFLX"); // State for storing API result
    const [GeminiNews, setGeminiNews] = useState(""); // State for storing API result
    const [price, setPrice] = useState(null);
    const [change, setChange] = useState(0);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(0);
    const [volume, setVolume] = useState(0); 
  //Gemini Pulls

  let API_KEY = "AIzaSyCe-lC-7bdox199fwrE3IEZEFasSZYJYUM"

  async function runNews() {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `In 100 characters or less, tell me a news headline or piece of information that would be useful for those investing in ${company} specifically`;
    const result = await model.generateContent(prompt);
    const text = await result.response.text(); // Await text extraction
    console.log("News text updated in state: ", text); // Optional log    
    return text;
  } catch (error) {
    console.error("Error:", error); // Log any errors
  }
}

  async function runTicker() {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Give the ticker of stock of ${company}, only the ticker as an answer, it does not have to be real time. If you cannot find it, just respond with Not Found`;
      const result = await model.generateContent(prompt);
      const text = await result.response.text(); // Await text extraction
      console.log("Ticker updated in state: ", text); // Optional log    
      return text;
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  }

//Yahoo Finance Pulls

let PolygonAPI_KEY = 'EY5HzreFOYpsDaJJx8A1kox2O42IKosm';  // Replace with your Polygon API key

  async function runCurrentPrice(ticker: string) {
    try {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=EY5HzreFOYpsDaJJx8A1kox2O42IKosm`;
            const response = await fetch(url);
            
            // Check if the response is OK (status 200)
            if (!response.ok) {
              console.error(`HTTP error! Status: ${response.status}`);
              return;
            }
        
            const data = await response.json();
            console.log("API response data:", data); // Log the entire response
        
            if (data && data.results && data.results.length > 0) {
              const text = data.results[0].c; // Accessing the volume-weighted average price
              console.log("Fetched low:", text); // Log the fetched price
              return text;
            } else {
              console.log('Could not retrieve low data at this time');
            }
          } catch (error) {
            console.error('Error fetching stock data at this time:', error);
          }
  }
  async function runHigh(ticker: string) {
    try {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=EY5HzreFOYpsDaJJx8A1kox2O42IKosm`;
            const response = await fetch(url);
            
            // Check if the response is OK (status 200)
            if (!response.ok) {
              console.error(`HTTP error! Status: ${response.status}`);
              return;
            }
        
            const data = await response.json();
            console.log("API response data:", data); // Log the entire response
        
            if (data && data.results && data.results.length > 0) {
              const text = data.results[0].h; // Accessing the volume-weighted average price
              console.log("Fetched high:", text); // Log the fetched price
              return text;
            } else {
              console.log('Could not retrieve high data at this time');
            }
          } catch (error) {
            console.error('Error fetching stock data at this time:', error);
          }
  }
  async function runLow(ticker: string) {
    try {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=EY5HzreFOYpsDaJJx8A1kox2O42IKosm`;
            const response = await fetch(url);
            
            // Check if the response is OK (status 200)
            if (!response.ok) {
              console.error(`HTTP error! Status: ${response.status}`);
              return;
            }
        
            const data = await response.json();
            console.log("API response data:", data); // Log the entire response
        
            if (data && data.results && data.results.length > 0) {
              const text = data.results[0].l; // Accessing the volume-weighted average price
              console.log("Fetched price:", text); // Log the fetched price
              return text;
            } else {
              console.log('Could not retrieve price data at this time');
            }
          } catch (error) {
            console.error('Error fetching stock data at this time:', error);
          }
  }
  async function runVolume(ticker: string) {
    try {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=EY5HzreFOYpsDaJJx8A1kox2O42IKosm`;
            const response = await fetch(url);
            
            // Check if the response is OK (status 200)
            if (!response.ok) {
              console.error(`HTTP error! Status: ${response.status}`);
              return;
            }
        
            const data = await response.json();
            console.log("API response data:", data); // Log the entire response
        
            if (data && data.results && data.results.length > 0) {
              const text = data.results[0].v; // Accessing the volume-weighted average price
              console.log("Fetched volume:", text); // Log the fetched price
              return text;
            } else {
              console.log('Could not retrieve volume data at this time');
            }
          } catch (error) {
            console.error('Error fetching stock data at this time:', error);
          }
  }
  async function runPercentChange(ticker: string) {
    try {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=EY5HzreFOYpsDaJJx8A1kox2O42IKosm`;
            const response = await fetch(url);
            
            // Check if the response is OK (status 200)
            if (!response.ok) {
              console.error(`HTTP error! Status: ${response.status}`);
              return;
            }
        
            const data = await response.json();
            console.log("API response data:", data); // Log the entire response
        
            if (data && data.results && data.results.length > 0) {
              const currentPrice = data.results[0].c; // Current price
              const lastClosePrice = data.results[0].l; // Last close price
              const text = ((currentPrice - lastClosePrice) / lastClosePrice) * 100;
              console.log("Fetched change:", text.toFixed(2)); // Log the fetched price
              return text.toFixed(2);;
            } else {
              console.log('Could not retrieve change data at this time');
            }
          } catch (error) {
            console.error('Error fetching stock data at this time:', error);
          }
  }
 
// All useEffect functions
useEffect(() => {
  runTicker()
    .then((text) => {
      let tickerValue = text; // Convert API result to float
      setGeminiTicker(tickerValue); // Update state with float value
    });
}, []);

useEffect(() => {
runNews()
  .then((text) => {
    setGeminiNews(text); // Update state with API result
  });
}, []);

useEffect(() => {
  runLow(GeminiTicker)
    .then((text) => {
      setLow(text); // Update state with API result
    });
}, []);
useEffect(() => {
  runHigh(GeminiTicker)
    .then((text) => {
      setHigh(text); // Update state with API result
    });
}, []);
useEffect(() => {
  console.log(GeminiTicker)
  runVolume(GeminiTicker)
    .then((text) => {
      setVolume(text); // Update state with API result
    });
}, []);
useEffect(() => {
  runCurrentPrice(GeminiTicker)
    .then((text) => {
      setPrice(text); // Update state with API result
    });
}, []);
useEffect(() => {
    runPercentChange(GeminiTicker)
      .then((text) => {
        let floatChange = parseFloat(text || '0'); // Convert the string to a float
        setChange(floatChange); // Update state with the float result
      });
  }, []);


  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); 

  const handleWatchlistToggle = () => {
    setIsWatchlisted((prevStatus) => !prevStatus);
  };

  const handleBuySellPress = (type:string) => {
    setModalType(type);
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setInputValue('');
    });
  };

  const handleInputChange = (value:string) => {
    setInputValue(value);
  };

  const addInvestment = async (amount: number) => {
    try {
        console.log(amount);
        const response = await axios.post('https://f330-129-110-242-224.ngrok-free.app/api/investments', { amount });
        console.log('Investment added:', response.data);
    } catch (error) {
        // Check if error is an AxiosError
        if (axios.isAxiosError(error)) {
          console.error('From addInvestment: Error adding investment:', error.response ? error.response.request : error.message);
          console.error('Axios error details:');
            console.error('Message:', error.message); // Detailed message about the error
            console.error('Config:', error.config); // Axios config used for the request
            console.error('Response:', error.response); // Response from the server (if any)
            console.error('Request:', error.request); // Request that was sent (if any)
      } else {
          console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Arrow */}
      <View style={styles.backArrow}>
        <Feather name="arrow-left" size={35} color="black" />
      </View>

      {/* Company Name */}
      <Text style={styles.title}>{company}</Text>

      {/* Ticker/P&L Group */}
      <View style={styles.infoRow}>
        <View style={styles.tickerContainer}>
          <Text style={styles.subtitle}>{GeminiTicker}</Text>
          <Text style={[styles.plText, { color: change <= 0 ? 'red' : '#4CAF50' }]}>
          {change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`}
          </Text>
        </View>

        {/* Scrollable Tags Group */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.tagsContentContainer} 
        >
          <View style={styles.tagsContainer}>
            <View style={[styles.tag, { borderColor: '#D4A373' }]}>
              <Text style={styles.tagText}>Tag1</Text>
            </View>
            <View style={[styles.tag, { borderColor: '#719ECE' }]}>
              <Text style={styles.tagText}>Tag2</Text>
            </View>
            <View style={[styles.tag, { borderColor: '#D4A373' }]}>
              <Text style={styles.tagText}>Tag3</Text>
            </View>
            <View style={[styles.tag, { borderColor: '#719ECE' }]}>
              <Text style={styles.tagText}>Tag4</Text>
            </View>
            <View style={[styles.tag, { borderColor: '#719ECE' }]}>
              <Text style={styles.tagText}>Tag5</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Add to Watchlist Button */}
      <TouchableOpacity
        style={[
          styles.watchlistButton,
          {
            backgroundColor: isWatchlisted ? '#FFD700' : '#D3D3D3',
            borderColor: isWatchlisted ? '#DDB839' : 'black',
          },
        ]}
        onPress={handleWatchlistToggle}
      >
        <View style={styles.icon}>
          <Feather name="bookmark" size={12} color="black" />
        </View>
        <Text style={styles.smallButtonText}>
          {isWatchlisted ? ' Watchlisted' : ' Watchlist'}
        </Text>
      </TouchableOpacity>

      {/* Chart Card */}
      <View style={styles.chartCard}>
        <Text>Chart Placeholder</Text>
      </View>

      {/* Contact Info and News Cards */}
      <View style={styles.infoContainer}>
        {/* Contact Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Details</Text>
          <View style={[styles.infoRow, {padding: 0 }]}>
            <Text>ID:  {GeminiTicker}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>High: {high}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Low: {low}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Volume: {volume}</Text>
          </View>
        </View>

        {/* News Card */}
        <View style={styles.newsCard}>
          <Text style={styles.infoTitle}>{GeminiNews}</Text>
          <View style={styles.shareIconContainer}>
            <Feather name="share" size={24} color="black" />
          </View>
        </View>
      </View>

      {/* Buy and Sell Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => handleBuySellPress('buy')}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sellButton}
          onPress={() => handleBuySellPress('sell')}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>


      {/* Modal for Buy/Sell */}
      {modalVisible && (
        <Modal transparent visible={modalVisible} animationType="none">
          <Animated.View style={[styles.modalBackground, { opacity: fadeAnim }]}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {modalType === 'buy' ? 'Buy:' : 'Sell:'}
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={`Enter ${modalType === 'buy' ? 'cost or shares' : 'shares'}...`}
                value={inputValue}
                onChangeText={handleInputChange}
              />
              {/* Button Container */}
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton} onPress={() => {addInvestment(parseFloat(inputValue)); closeModal}}>
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </Modal>
      )}
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
  },
  backArrow: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
  },
  subtitle: {
    fontSize: 18,
    alignItems: 'center',
    color: 'black',
  },
  plText: {
    fontSize: 18,
  },
  scrollView: {
    maxWidth: width * 0.45,
    marginLeft: 20,
  },
  tagsContentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagsContainer: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  tag: {
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    marginLeft: 5,
  },
  tagText: {
    fontSize: 16,
  },
  watchlistButton: {
    paddingBottom: 1,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'flex-start',
    marginLeft: 45,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    marginTop: 2,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  smallButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chartCard: {
    height: '32%',
    marginHorizontal: 20,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    width: '40%',
    height: 175,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
  },
  newsCard: {
    width: '55%',
    height: 175,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    position: 'relative',
  },
  shareIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buyButton: {
    width: '40%',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#DDB839',
    alignItems: 'center',
    marginLeft: 20,
  },
  sellButton: {
    width: '40%',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#DDB839',
    marginRight: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
  },

  modalContent: {
    backgroundColor: '#FDF8E1',
    padding: 20,
    flexDirection: 'column',
    borderRadius: 10,
    width: '80%',
    borderWidth: 3,
    borderColor: "#C2C0B2",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 3,
    borderColor: '#C2C0B2',
    borderRadius: 10,
    padding: 10,
    marginHorizontal:10,
    width: '90%',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#FDF8E1',
    width: '43%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#C2C0B2',
  },
  confirmButton: {
    backgroundColor: '#FDF8E1',
    width: '43%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    marginRight: 10,
    borderColor: '#C2C0B2',
  },
  modalButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});