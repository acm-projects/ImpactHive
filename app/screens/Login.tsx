import { View, Text, StyleSheet, TextInput, ActivityIndicator,Button, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import {FIREBASE_AUTH} from '../../FirebaseConfig'
import{createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loading,setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () =>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.log(response);
        }catch(error: any){
            console.log(error);
            alert('sign in failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async () =>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('check your emails');
        }catch(error: any){
            console.log(error);
            alert('Registration failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }
  return (
    <View style = {style.container}>
        <KeyboardAvoidingView behavior = 'padding'>
      <TextInput value = {email} style = {style.input} placeholder = "Email" autoCapitalize= "none" onChangeText = {(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry = {true} value = {password} style = {style.input} placeholder = "Password" autoCapitalize= "none" onChangeText = {(text) => setPassword(text)}></TextInput>
    {loading ? (<ActivityIndicator size = "large" color = "#0000ff"/>
    ):(<>
    <Button title = "Login" onPress = {signIn}/>
    <Button title = "Sign up" onPress = {signUp}/>
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
    </>
    
  )}
  </KeyboardAvoidingView>
  </View>
  );
};

export default Login;

const style = StyleSheet.create({
     container:{
        marginHorizontal:20,
        flex:1,
        justifyContent: 'center',
     },
     input: {
        marginVertical: 4,
        height: 50,
        borderWidth:1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
     }
});
