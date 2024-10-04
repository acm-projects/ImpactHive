import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable} from 'react-native'
import { auth } from '../firebase'

const index = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Click to Go to Home Screen!</Text>
      </Pressable>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7D3",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF', // Change to any color you want
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16,
  },
});

export default index;
