import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

const { width, height } = Dimensions.get('window');

export default function AccountSettings() {
  const [emailVisible, setEmailVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSubmit = () => {
    console.log('Email submitted:', email);
  };

  const handlePasswordSubmit = () => {
    console.log('Password submitted:', password);
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/backgroundAccount.png')} 
      style={styles.background}
      resizeMode="cover" 
    >

      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Account</Text>
        </View>

        {/* Email Dropdown */}
        <View style={styles.dropdown}>
          <TouchableOpacity 
            style={styles.dropdownToggle} 
            onPress={() => setEmailVisible(!emailVisible)}
          >
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>
                Email:{'\n'}
                <Text style={styles.exampleEmail}>{email || 'examples@gmail.com'}</Text>
              </Text>
              <Feather 
                name={emailVisible ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="black" 
                style={styles.chevron} 
              />
            </View>
          </TouchableOpacity>
        </View>
        
        {emailVisible && (
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter new email" 
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity onPress={handleEmailSubmit} style={styles.button}>
              <Feather name="arrow-right-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}

        {/* Password Dropdown */}
        <View style={styles.dropdown}>
          <TouchableOpacity 
            style={styles.dropdownToggle} 
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>Password</Text>
              <Feather 
                name={passwordVisible ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="black" 
                style={styles.chevron} 
              />
            </View>
          </TouchableOpacity>
        </View>
        
        {passwordVisible && (
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter new password" 
              secureTextEntry 
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handlePasswordSubmit} style={styles.button}>
              <Feather name="arrow-right-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height, 
    backgroundColor: "#FFF7D3"    
  },
  container: {
    flex: 1,  
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  titleContainer: {
    marginTop: 240, 
    alignItems: 'center', 
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Trocchi',
  },
  dropdown: {
    backgroundColor: '#fdf8e1',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    width: '80%', 
    marginBottom: 10,
    elevation: 3, 
  },
  dropdownToggle: {
    padding: 15,
  },
  dropdownContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  dropdownText: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: 'black',
    flex: 1, 
  },
  exampleEmail: {
    color: 'gray', 
    fontWeight: 'normal', 
    opacity: 0.7, 
    width: 'auto',
    height: 'auto',
    flexWrap : 'wrap',
  },
  chevron: {
    position: 'absolute', 
    right: 15, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%', 
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1, 
    marginRight: 10, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
