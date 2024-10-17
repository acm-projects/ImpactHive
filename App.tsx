import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import  List from './app/screens/List';
import {User, onAuthStateChanged} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import {GoogleSignin ,GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';
import { AppRegistry } from 'react-native';


AppRegistry.registerComponent('main',() => App);
const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();
const [error,setError] = useState();
const[userInfo,setUserInfo] = useState();

useEffect(()=>{
  GoogleSignin.configure({
    webClientId: "1025960550121-q7u210ca3ffok43psbsq6b7dle0vnd6k.apps.googleusercontent.com"
  });
  
},[]);


const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    // Handle the signed-in user information here
  } catch (error) {
    
  }
};


function InsideLayout(){
return(
  <InsideStack.Navigator>
    <InsideStack.Screen name = "my todos" component ={List}/>
    <InsideStack.Screen name = "details" component ={List}/>

  </InsideStack.Navigator>
);
}

export default function App() {
  const [user,setUser] = useState <User | null>(null);
  
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user) => {
      console.log('user',user);
      setUser(user);
    });
  },[]);
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
           <Stack.Screen name = 'Inside' component = {InsideLayout} options ={{headerShown:false}}/>
           
        ) : (
          <Stack.Screen name = 'Login' component = {Login} options ={{headerShown:false}}/>
          
        )}
       
      </Stack.Navigator>

    </NavigationContainer>
  );
}
