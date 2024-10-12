import React, { useState } from 'react';
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

const { width } = Dimensions.get('window'); 

export default function CompanyPage() {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [plValue, setPlValue] = useState(-0.09); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); 

  const handleWatchlistToggle = () => {
    setIsWatchlisted((prevStatus) => !prevStatus);
  };

  const handleBuySellPress = (type) => {
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

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Arrow */}
      <View style={styles.backArrow}>
        <Feather name="arrow-left" size={35} color="black" />
      </View>

      {/* Company Name */}
      <Text style={styles.title}>Calvert Capital</Text>

      {/* Ticker/P&L Group */}
      <View style={styles.infoRow}>
        <View style={styles.tickerContainer}>
          <Text style={styles.subtitle}>Ticker</Text>
          <Text style={[styles.plText, { color: plValue < 0 ? 'red' : '#4CAF50' }]}>
            {` ${plValue >= 0 ? '+' : ''}${plValue}%`}
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
          <Text style={styles.infoTitle}>Contact Info</Text>
          <View style={styles.infoRow}>
            <Feather name="phone" size={24} color="black" />
            <Text> Phone Number</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="mail" size={24} color="black" />
            <Text> Email</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="map-pin" size={24} color="black" />
            <Text> Mailing Address</Text>
          </View>
        </View>

        {/* News Card */}
        <View style={styles.newsCard}>
          <Text style={styles.infoTitle}>News</Text>
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
                <TouchableOpacity style={styles.confirmButton} onPress={closeModal}>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
