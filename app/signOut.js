import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

export default function SignOutScreen() {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    Alert.alert(
      "Confirm Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Sign Out", 
          onPress: async () => {
            try {
              await signOut(auth);
              console.log('User signed out successfully');
              Alert.alert('Success', 'You have been signed out', [
                { text: 'OK', onPress: () => navigation.navigate('Login') }
              ]);
            } catch (error) {
              console.error('Error signing out: ', error);
              Alert.alert('Error', 'Failed to sign out. Please try again.');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.subtitle}>Are you sure you want to sign out?</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Sign Out" 
          onPress={handleSignOut} 
          color="#FF6347" // Tomato color
        />
      </View>
      <Button 
        title="Cancel" 
        onPress={() => navigation.goBack()} 
        color="#4682B4" // Steel Blue color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
});