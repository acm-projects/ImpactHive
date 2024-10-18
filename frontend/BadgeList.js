// BadgeList.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const BadgeList = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await fetch('http://<YOUR_SERVER_IP>:5000/api/badges'); // Replace with your server's IP address or localhost
        const data = await response.json();
        setBadges(data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  return (
    <View>
      {badges.map(badge => (
        <View key={badge._id}>
          <Text>{badge.badgeName}</Text>
          <Text>{badge.investmentAmount}</Text>
          <Text>{badge.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default BadgeList;
