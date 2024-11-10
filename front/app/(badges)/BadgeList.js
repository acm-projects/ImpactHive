import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BadgeList = () => {
  const [badges, setBadges] = useState([]);

  

    const fetchBadges = async () => {
      try {
        // Use your actual local IP address here
        const response = await fetch('http://10.173.164.122:3002/api/badges'); // Use your local IP address and the correct port
        const data = await response.json();
        setBadges(data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };
    
    
  return (
    <View style={styles.container}>
      {badges.length > 0 ? (
        badges.map(badge => (
          <View key={badge._id} style={styles.badgeItem}>
            <Text style={styles.badgeName}>{badge.badgeName}</Text>
            <Text>Amount: ${badge.investmentAmount}</Text>
            <Text>Description: {badge.description}</Text>
          </View>
        ))
      ) : (
        <Text>No badges available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  badgeItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  badgeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BadgeList;