import {StyleSheet, Button, SafeAreaView, View , Text, TextInput, Alert} from 'react-native'
import React, { useEffect, useState } from 'react';
import {FIREBASE_AUTH} from "../../FirebaseConfig"
import { signInWithEmailAndPassword} from 'firebase/auth';


const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)
  const auth = FIREBASE_AUTH
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Please enter both email and password');
      return;
    }
    
    // Handle login logic here, e.g., API call

    Alert.alert('Logged in!', `Email: ${email}\nPassword: ${password}`);
  };

 const signIn = async () =>{
    setLoading(true)
    try{
      const response = await signInWithEmailAndPassword(auth,email,password)
      console.log(response)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF7D3',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LoginScreen