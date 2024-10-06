import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const { width } = Dimensions.get('window');

export default function CompanyPage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Arrow */}
      <View style={styles.backArrow}>
        <Feather name="arrow-left" size={35} color="black" />
      </View>

      {/* Company Name */}
      <Text style={styles.title}>Calvert Capital</Text>

      {/* Ticker, P/L, Tags */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ticker</Text>
        <Text style={styles.plText}>(+0.09%)</Text>
        <View style={[styles.tag, { borderColor: '#D4A373' }]}>
          <Text style={styles.tagText}>Tag1</Text>
        </View>
        <View style={[styles.tag, { borderColor: '#719ECE' }]}>
          <Text style={styles.tagText}>Tag2</Text>
        </View>
      </View>

      {/* Add to Watchlist Button */}
      <TouchableOpacity style={styles.watchlistButton}>
        <Text style={styles.buttonText}>Add to Watchlist</Text>
      </TouchableOpacity>

      {/* Empty Card */}
      <View style={styles.emptyCard}>
        <Text style={styles.emptyCardText}>Chart Placeholder</Text>
      </View>

      {/* Contact Info and News Cards */}
      <View style={styles.infoContainer}>
        {/* Contact Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Contact Info</Text>
          <Text>800-800-8000</Text>
          <Text>yup@yup.com</Text>
          <Text>Mailing Address</Text>
        </View>

        {/* News Card */}
        <View style={styles.newsCard}>
          <Text style={styles.infoTitle}>News</Text>
        </View>
      </View>

      {/* Buy and Sell Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backArrow: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
  },
  plText: {
    fontSize: 18,
    color: '#4CAF50',
  },
  tag: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  tagText: {
    fontSize: 16,
  },
  watchlistButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCard: {
    width: '100%',
    height: 200,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyCardText: {
    fontSize: 20,
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    width: '35%',
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  newsCard: {
    width: '55%',
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buyButton: {
    width: '45%',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sellButton: {
    width: '45%',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});
