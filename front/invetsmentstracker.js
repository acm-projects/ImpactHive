import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const InvestmentTracker = ({ userId }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState('');
  
  // Fetch total investments from backend
  useEffect(() => {
    fetch(`http://localhost:3002/api/investments/${userId}`)
      .then((response) => response.json())
      .then((data) => setTotalAmount(data.totalAmount))
      .catch((error) => console.error('Error fetching investments:', error));
  }, [userId]);

  // Function to add investment
  const addInvestment = () => {
    if (!amountToAdd || isNaN(amountToAdd)) {
      alert("Please enter a valid number");
      return;
    }

    fetch(`http://localhost:3002/api/investments/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: parseFloat(amountToAdd) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalAmount(data.updatedTotal);  // Update the total amount
        setAmountToAdd('');                 // Reset input field
      })
      .catch((error) => console.error('Error adding investment:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Investments: ${totalAmount}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount to add"
        keyboardType="numeric"
        value={amountToAdd}
        onChangeText={setAmountToAdd}
      />

      <Button title="Add Investment" onPress={addInvestment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default InvestmentTracker;
