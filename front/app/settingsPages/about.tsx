import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const { width, height } = Dimensions.get('window');

export default function Example() {
  const [form, setForm] = useState({
    emailNotifications: false,
    goalReminders: false,
    dailyReminders: false,
    quoteOfTheDay: false,
    newsAboutInterests: false,
  });

  return (
    <ImageBackground 
      source={require('@/assets/images/backgroundAccount.png')} 
      style={styles.background}
      resizeMode="cover" 
    > 
      <SafeAreaView>
        
        <Text style={styles.title}>About Us</Text>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            ImpactHive revolutionizes impact investing by allowing you to set meaningful goals 
            like education equity and carbon footprint reduction. Users are able to track 
            their progress with intuitive dashboards, discover and connect with impactful 
            organizations, and stay motivated through gamification elements. Invest with 
            impact and watch your positive influence grow!
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height, 
    position: 'absolute',         
  },
  title: {
    fontSize: 50,
    flexDirection: 'column',
    paddingLeft: 0,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', 
    marginTop: 200, 
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#C2C0B2',
    borderWidth: 3,
    padding: 15,
    marginTop: 20,
    alignSelf: 'center', 
  },
  cardText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    
  },
});
