import {Button, Pressable, TouchableOpacity, Image, StyleSheet, Dimensions, SafeAreaView, View , Text, TextInput, Alert} from 'react-native'
import React, { useEffect, useState } from 'react';
import {FIREBASE_AUTH} from "../../FirebaseConfig"
import { User,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useRouter } from 'expo-router';




const LoginScreen: React.FC = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loading,setLoading] = useState(false)
 const auth = FIREBASE_AUTH
 const router = useRouter();

const {width, height} = Dimensions.get('screen');

const signIn = async () =>{
  
setLoading(true)
  try{
    const response = await signInWithEmailAndPassword(auth,email,password)
    console.log(response)
    router.replace('/home');
  }catch(error:any){
    console.log(error)
    alert('Sign in failed : ' + error.message);
  }finally{
    setLoading(false)
  }
}


return (
  <SafeAreaView style={styles.container}>
    <Image
            style = {[styles.image, {top: -95}, {left: -45}, {position: 'absolute'}, {transform: [{ rotate: '63.19deg' }]}]}
            source = {require('../../assets/images/hive.png')}
    />
    <Image
        style = {[styles.image, {top: -95}, {left: -173}, {position: 'absolute'}, {transform: [{ rotate: '60deg' }]}]}
        source = {require('../../assets/images/hive.png')}
    />
    <Image
        style = {[styles.image, {bottom: -150}, {right: 0}, {position: 'absolute'}, {transform: [{ rotate: '60deg' }]}]}
        source = {require('../../assets/images/hive.png')}
    />
    <Image
        style = {[styles.image, {bottom: -150}, {right: -130}, {position: 'absolute'}, {transform: [{ rotate: '60deg' }]}]}
        source = {require('../../assets/images/hive.png')}
    />
    <View style={styles.inputContainer}>
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
      <View style={{backgroundColor:'#FBD143',marginTop:25,alignSelf:'center',width:width-50,height:4,borderRadius:2}}></View>
      <Pressable>
        <TouchableOpacity>
            <Pressable onPress={() => {signIn();}} style = {styles.doneButton}>
                <Text style = {styles.doneButtonText}>Login</Text>
            </Pressable>
        </TouchableOpacity>
      </Pressable>
    </View>
  </SafeAreaView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D3',
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontFamily: 'Trocchi',
    alignSelf: 'center',
  },
  inputContainer:{
  flex: 2,
  alignContent: 'center',
  justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  image:{
    width: 340,
    height: 290,
    resizeMode: 'contain',
  },
  doneButton:{
    backgroundColor: "#FBD143",
    width: 150,
    height: 50,
    borderColor: "black",
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderBlockColor: '#DDB839',
    borderEndColor: '#DDB839',
    borderStartColor: '#DDB839',
    alignSelf: 'center',
    marginTop:40,
  },
  doneButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
},
});


export default LoginScreen
