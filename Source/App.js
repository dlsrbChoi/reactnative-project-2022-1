import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, button, TouchableHighlight, Text, View } from 'react-native';
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

  button_1: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
  },
  button_2: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
  },
  button_3: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
  },
  button_4: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
  },
});

function clickBtnFunction(){
  /* 코드 작성 */
}

export default class AppView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#6C6EC9' }} />
          
        <View style={{ flex: 2, backgroundColor: 'gray' }}>
          
        </View>
        <View style={{ flex: .2, backgroundColor: 'white' }}>
          <Text>   식사를 기록해주세요.</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'white' }}>

          <View style={styles.container_2}>
            
            <View style={{flex: 1, backgroundColor: 'white'}}> 
              <TouchableHighlight 
                onPress={()=>{}}
                underlayColor="#DFDFF3"
                style={styles.button_1}>
                <Text>아침🍎</Text>
              </TouchableHighlight>
            </View>

            <View style={{flex: 1, backgroundColor: 'white'}}>
              <TouchableHighlight 
              onPress={()=>{}}
              underlayColor="#DFDFF3"
              style={styles.button_2}>
              <Text>점심🍲</Text>
          </TouchableHighlight>
            </View>

          </View>
          <View style={styles.container_3}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <TouchableHighlight 
                onPress={()=>{}}
                underlayColor="#DFDFF3"
                style={styles.button_3}>
                <Text>저녁🥗</Text>
              </TouchableHighlight>
            </View>
            
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <TouchableHighlight 
                onPress={()=>{}}
                underlayColor="#DFDFF3"
                style={styles.button_4}>
                <Text>간식🍓</Text>
              </TouchableHighlight>
            </View>
          </View>  
        </View>       
      </View>
    );
  }
}