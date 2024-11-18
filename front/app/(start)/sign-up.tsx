import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {FIREBASE_AUTH} from "../../FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';




const SignUpScreen: React.FC = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [loading,setLoading] = useState(false)
 const auth = FIREBASE_AUTH
 const router = useRouter();


 const signUp = async () =>{
   setLoading(true)
   try{
     if (name === '' || email === '' || password === '' || confirmPassword === '') {
       Alert.alert('Please fill in all fields');
       return;
     }
    
     if (password !== confirmPassword) {
       Alert.alert('Passwords do not match');
       return;
     }
     const response = await createUserWithEmailAndPassword(auth,email,password)
     console.log(response)
     Alert.alert('Signed Up!', `Welcome, ${name}!`)
     signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
   }catch(error:any){
     console.log(error)
     alert('Sign up Failed: ' + error.message)
   }finally{
     setLoading(false)
   }
 }


 return (
   <View style={styles.container}>
     <Text style={styles.title}>Sign Up</Text>
     <TextInput
       style={styles.input}
       placeholder="Name"
       value={name}
       onChangeText={setName}
     />
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
     <TextInput
       style={styles.input}
       placeholder="Confirm Password"
       value={confirmPassword}
       onChangeText={setConfirmPassword}
       secureTextEntry
     />
     <Button
 title={"Sign Up" }
 onPress={() => {
   signUp();  // Your existing signIn function
   router.replace('/opening-interests');  // Navigate to the home screen
 }}
/>
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
   borderRadius: 5,
   paddingHorizontal: 10,
 },
});


export default SignUpScreen;
