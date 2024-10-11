import { TouchableOpacity, Pressable, Image, StyleSheet, TextInput, SafeAreaView, View, Text } from 'react-native'
import React, {useState} from 'react'
import { Link } from 'expo-router'
import Slider, {MarkerProps, SliderProps} from '@react-native-community/slider';

const goal = (props: SliderProps) => {
const [text, onChangeText] = React.useState('Useless Text');
const [number, onChangeNumber] = React.useState('');
const [value, setValue] = useState(props.value ?? 0);



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
        <View style = {styles.titleContainer}>
            <Text style = {styles.titleText}>Investment</Text>
            <Text style = {styles.titleText}>Goals</Text>
        </View>
        <Text style = {styles.subText}>Enter a Total Goal:</Text>
        <View style = {styles.inputContainer}>
            <Text style = {styles.$}>$</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Dollar Amount"
            keyboardType="numeric"
            />
        </View>
        <Text style = {styles.subText}>Dedicate a Number of Days:</Text>
        <View style = {styles.dayContainer}>
            <View style = {styles.dayTextContainer}>
                <Text style = {styles.subText}>{value} Days</Text>
            </View>
            
            <Slider
                style={styles.slider}
                minimumValue={0}
                step = {1}
                maximumValue={360}
                minimumTrackTintColor="#FFD60A"
                maximumTrackTintColor="#000000"
                value={value}
                onValueChange={setValue}
            />
        </View>
        <Pressable>
            <TouchableOpacity>
                <Link href="/(tabs)/home" asChild>
                    <Pressable onPress={() => {}} style = {styles.doneButton}>
                        <Text style = {styles.doneButtonText}>Done</Text>
                    </Pressable>
                </Link>
            </TouchableOpacity>
        </Pressable>

    </SafeAreaView>
)
}

export default goal

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF7D3",
    },
    titleContainer:{
        flexWrap: 'wrap',
        marginTop: 100,
        marginHorizontal: 15,
        alignContent: 'center',
    },
    titleText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    subText:{
        fontSize: 20,
        marginHorizontal: 30,
        marginTop: 25,
        color: 'black',
    },
    inputContainer:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    $:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        height: 40,
        padding: 10,
    },
    dayContainer:{
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        marginTop: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    slider:{
        marginHorizontal: 25,
    },
    dayTextContainer:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText:{
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

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
        marginTop: 50,
    },
    doneButtonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});