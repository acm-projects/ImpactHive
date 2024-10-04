import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Example() {
  return (
    <SafeAreaView style={{ flex:1 ,backgroundColor: '#FFF7D3' }}>
      
      <View style={styles.backArrow}>
      <Feather name="arrow-left" size={45} color="black" />

        <Text style={styles.title}>Settings</Text>
      </View>
      
      <View style={styles.profile}>
          <View style={styles.profileAvatarWrapper}>
          <Image
          source={require('@/assets/images/profileIcon.png')}
            />
          </View>

        
      </View>

        <View style={styles.section}>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}>
            <View style={styles.rowIcon}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            </View>
            <Text style={styles.rowLabel}>Account</Text>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}>
            <View style={styles.rowIcon}>
            <Feather name="bell" size={24} color="black" />
            </View>
            
            <Text style={styles.rowLabel}>Notifications</Text>

            <View style={styles.rowSpacer} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}

            style={styles.row}>
            <View style={styles.rowIcon}>
            <Feather name="eye" size={24} color="black" />
            </View>

            <Text style={styles.rowLabel}>Appearance</Text>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}>
            <View style={styles.rowIcon}>
            <Feather name="shield" size={24} color="black" />
            </View>

            <Text style={styles.rowLabel}>Privacy and Security</Text>

            <View style={styles.rowSpacer} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}>
            <View style={styles.rowIcon}>
            <Feather name="alert-circle" size={24} color="black" />
            </View>

            <Text style={styles.rowLabel}>About</Text>
            <View style={styles.rowArrow}>
            <Feather name="chevron-right" size={24} color="black" />
            </View>
            <View style={styles.rowSpacerFinal} />
            

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.logOut}>
            <Text style={styles.logLabel}>Log Out</Text>

          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    paddingLeft: 20,
    flexDirection: 'row',
    paddingRight: 30,   
    },
  /** Profile */
  title: {
        fontSize: 67,
        flexDirection: 'column',
        paddingLeft: 28,
        alignItems: 'center',
        color: 'black',
        
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 28,
  },
  profileAvatarWrapper: {
    position: 'static',
    flex: 10,
    alignItems: 'center',
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },

  /** Section */
  section: {
    padding: 25,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#fdf8e1',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 12,
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
    padding: 0,
    fontWeight: '400',
  },
  rowArrow: {
    alignItems: 'flex-end',
    opacity: 30,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowSpacerFinal: {
    marginTop: 10,
  },
  logOut: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#fdf8e1',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 12,
    marginTop: 30,
    marginHorizontal: 20,
  },
  logLabel: {
    fontSize: 25,
    paddingVertical: 7,
    fontWeight: '400',
    color: 'red',
    
  },
});