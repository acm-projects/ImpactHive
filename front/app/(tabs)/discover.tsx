import React from 'react';
import { Dimensions, ScrollView, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const { height,width } = Dimensions.get('screen');
export default function DiscoverPage() {
  return (


    <SafeAreaView style={styles.container}> 
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchInput}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput style={styles.searchTextInput} />
        </View>
      </View>
      <View style={{backgroundColor:'black',width:width,height:2}}></View>

      <ScrollView> 
        {/* Watchlist Row */}
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Watchlist:</Text>
          <ScrollView horizontal>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Organization Name</Text>
              
              <Text style={styles.cardLocation}>Location, Location</Text>


            </View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        {/* Interests Row */}
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Based on your interests:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        {/* Tags Row */}
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Tag 1:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Tag 2:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Tag 3:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Tag 4:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Tag 5:</Text>
          <ScrollView horizontal>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </ScrollView>
        </View>  

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFF7D3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#FFF7D3',
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    color: 'black',
  },
  searchInput: {
    padding: 5,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10, 
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTextInput: {
    marginHorizontal: 10,
    width: width -75,
  },
  rowContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 10,
  },
  card: {
    width: 200,
    height: 120,
    backgroundColor: '#FDF8E1',
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#C2C0B2",
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardLocation: {
    alignItems: 'baseline',
    textAlign: 'center',
    verticalAlign: 'bottom',
    
  },
});
