import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Switch,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { ReduceMotion } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function Example() {
  const [form, setForm] = useState({
    darkMode: false,
    boldText: false, 
    reducedMotion: false,
    allowDaily: false,
  });

  return (
    
    <ImageBackground 
      source={require('@/assets/images/backgroundAccount.png')} 
      style={styles.background}
      resizeMode="stretch" 
    > 
    
    <SafeAreaView>

      <Text style={styles.title}>Appearance</Text>

      <View style={styles.section}>
        {/* Allow Notifications Row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Bold Text</Text>
          <Switch
            onValueChange={value => setForm({ ...form, boldText: value })}
            value={form.boldText}
          />
        </View>

        {/* Allow Goal Reminders Row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Reduced Motion</Text>
          <Switch
            onValueChange={value => setForm({ ...form, reducedMotion: value })}
            value={form.reducedMotion}
          />
        </View>

        {/* Allow Daily Reminders Row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Allow Daily Reminders</Text>
          <Switch
            onValueChange={value => setForm({ ...form, allowDaily: value })}
            value={form.allowDaily}
          />
        </View>
        
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height, 
    },
  title: {
    fontSize: 50,
    flexDirection: 'column',
    paddingLeft: 0,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', 
    marginTop: 240, 
  },
  section: {
    padding: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    height: 50,
    backgroundColor: '#fdf8e1',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 20,
    padding: 0,
    fontWeight: '400',
  },
});
