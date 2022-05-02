import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, button, TouchableOpacity, Text, View } from 'react-native';
import { Alert } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_2:{
    flex: 1,
    flexDirection:'row'
  },
  container_3: {
    flex: 1,
    flexDirection:'row'
  },
  box:{
    flex: 1,
  },
  button_1: {
    marginTop: 50,
    alignSelf: 'center',
    left: -57,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#F7F7FB",
  },
  button_2: {
    marginTop: 50,
    alignSelf: 'center',
    right: -57,
    top: -107,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#F7F7FB",
  },
  button_3: {
    marginTop: 50,
    alignSelf: 'center',
    left: -57,
    top: -100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#DFDFF3",
  },
  button_4: {
    marginTop: 50,
    alignSelf: 'center',
    right:-57,
    top: -207,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#F7F7FB",
  },

});

function clickBtnFunction(){
  Alert.alert(button)
}
export default class AppView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#6C6EC9' }} />

        <View style={{ flex: 3, backgroundColor: 'black' }} />

        <View style={{ flex: 2, backgroundColor: 'white' }}>
          <View style={styles.container_2}>
            <View style={{flex: 1, backgroundColor: 'white'}}/>
            <View style={{flex: 1, backgroundColor: 'pink'}}/>
          </View>
          <View style={styles.container_3}>
            <View style={{flex: 1, backgroundColor: 'cyan'}}/>
            <View style={{flex: 1, backgroundColor: 'yellow'}}/>
          </View>
            {/* <View style={{flex: 1, backgroundColor: 'yellow'}}> */}

              {/* <View style={styles.container_3}> */}
                
              {/* </View> */}
            {/* </View> */}

            {/* <View style={{flex: 1, backgroundColor: 'cyan'}}>
                <View style={styles.container_3}>
                  <View style={{flex: 1, backgroundColor: 'blue'}}/>
                  <View style={{flex: 1, backgroundColor: 'red'}}/>
                </View>
            </View> */}
        </View>

          
      </View>
    );
  }
}