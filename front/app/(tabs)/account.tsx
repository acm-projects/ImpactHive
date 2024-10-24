import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import {
  Link
} from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF7D3' }}>
      <View style = {{flexDirection: 'row', marginTop: -10, justifyContent:'center'}}>
        <Image
          source={require('@/assets/images/badgePlaceholder.png')}
          style={styles.badges}
          resizeMode="contain" 
        />
        <Link href="../settingsPages/user-settings" asChild>
        <TouchableOpacity style={styles.settingIcon}>
          <Ionicons name="settings-sharp" size={38} color="black" />
        </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.section}>
        {/* Account Row */}
        <Link href="../(sub)/badges" asChild>
        <TouchableOpacity
            style={styles.row}
        >
          <View style={styles.rowIcon}>
          <Image
            source={require('@/assets/images/badgeIcon.png')}
            style={styles.image} 
          />
          </View>
          <Text style={styles.rowLabel}>Badges</Text>
          <Feather name="chevron-right" size={24} color="black" style={styles.rowArrow} />
        </TouchableOpacity>
        </Link>


        {/* Notifications Row */}
        <Link href="../(sub)/watch-list" asChild>
        <TouchableOpacity
          style={styles.row}
        >
          <View style={styles.rowIcon}>
          <MaterialIcons name="bookmark" size={36} color="black" />
          </View>
          <Text style={styles.rowLabel}>Watch List</Text>
          <Feather name="chevron-right" size={24} color="black" style={styles.rowArrow} />
        </TouchableOpacity>
        </Link>

        {/* Appearance Row */}
        <Link href="../(sub)/interests" asChild>
        <TouchableOpacity
          style={styles.row}
        >
          <View style={styles.rowIcon}>
          <AntDesign name="star" size={34} color="black" />
          </View>
          <Text style={styles.rowLabel}>Interests</Text>
          <Feather name="chevron-right" size={24} color="black" style={styles.rowArrow} />
        </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Total Invested</Text>
          <Text style={styles.infoTitle}>Tier: 3</Text>
          <Text style={styles.totalCount}>$N/A</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitleCentered}>Companies Invested Into</Text>
          <Text style={styles.totalCount}>N/A</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  settingIcon: {
    position: 'absolute',
    right: 20,
    top: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  badges: {
    width: '100%', 
    height: 180,  
    alignSelf: 'center',
    marginTop: 60,
  },
  section: {
    padding: 25,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    height: 80,
    backgroundColor: '#fdf8e1',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 14,
    paddingHorizontal: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 25,
    paddingBottom: 2,
    fontWeight: '400',
  },
  rowArrow: {
    marginLeft: 'auto',
  },
  logLabel: {
    fontSize: 25,
    paddingVertical: 7,
    fontWeight: '400',
    color: 'red',
  },
  image: {
    width: 32, 
    height: 32,
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: -10,
  },
  infoCard: {
    width: '47%',
    height: '150%',
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 5,
    justifyContent: 'flex-start', 
  },
  infoTitle: {
    fontSize: 16,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  infoTitleCentered: {
    fontSize: 16,
    textAlign: 'center', 
    alignSelf: 'center', 
  },
  totalCount: {
    paddingTop: 30,
    fontSize: 20,
    alignSelf: 'center',
    flexWrap : 'wrap',
  },
});
