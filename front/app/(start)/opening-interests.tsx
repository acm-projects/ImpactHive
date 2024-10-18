import { Dimensions, Pressable, TouchableOpacity, Image, StyleSheet, Button, SafeAreaView, View, Text } from 'react-native'
import React, {useState} from 'react'
import { Link } from 'expo-router'
import Checkbox from 'expo-checkbox';

const {width, height} = Dimensions.get('screen');

const OpeningInterests = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isChecked, setChecked] = useState(false);
return (
    <SafeAreaView style = {styles.container}>
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

        <Text style = {styles.titleContainer}>Pick Your Interests</Text>
        <View style = {styles.interestContainer}>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Climate</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Rainforests</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Agriculture</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Equality</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Poverty</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Education</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Water</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Healthcare</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Energy</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <View style = {styles.interestButton}>
                <Text style = {styles.interestButtonText}>Recycling</Text>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={setChecked}/>
            </View>
            <Pressable>
                <TouchableOpacity>
                    <Link href="/(start)/goal" asChild>
                        <Pressable onPress={() => {}} style = {styles.doneButton}>
                            <Text style = {styles.doneButtonText}>Done</Text>
                        </Pressable>
                    </Link>
                </TouchableOpacity>
            </Pressable>
        </View>
        

    </SafeAreaView>
)
}

export default OpeningInterests

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#FFF7D3",
},
titleContainer:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginTop: 50,
    marginHorizontal: 20,
},
interestContainer:{  
    marginTop: 50,
    width:width,
    height: height-300,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',

},
interestButton:{
    backgroundColor: "#FFFFFF",
    width: 150,
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 15,
    justifyContent: 'space-between',
    alignContent: 'center',
    borderColor: "black",
    borderWidth: 2,
},
interestButtonText:{
    color: "black",
    fontSize: 15,
    alignSelf: 'center',
},
checkBox:{
    width: 15,
    height: 15,
    borderRadius: 10,
    marginTop: 16,
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
    marginTop: 50,
},
doneButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
},
image:{
    width: 340,
    height: 290,
    resizeMode: 'contain',
},


});