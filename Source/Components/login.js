import 'react-native-gesture-handler';
import  React, {useState,Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView, Dimensions, ScrollView, TouchableOpacity,TextInput,Keyboard,
  KeyboardAvoidingView,} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import mainIcon from '../image/main_icon.png';
import kakao from '../image/kakao_login_medium_narrow.png';
import naver from '../image/btnG.png';
import face from '../image/face.png';
import goo from '../image/gooo.png';
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function LoginScreen({route, navigation }){
  
  const [isSelected, setSelection] = useState(false);

 
  return (
    
    <View style={styles.body1}>
      <StatusBar style="dark" />
      <View style={styles.body2}>
        <Image
                source={mainIcon} style={{}}
        />
        
        <Text style={styles.logo}>SW_식단관리</Text>
      </View>
      <View style={styles.body3}>
        <TextInput style={styles.search} placeholder = "아이디" />
        <TextInput secureTextEntry={true} style={styles.search} placeholder = "비밀번호" />
        <Text style={styles.littel_word}>아이디/비밀번호 찾기</Text>
      </View> 
      
      <TouchableOpacity style={styles.little_word3} onPress={() => {navigation.navigate('MainScreen');}} ><Text style={styles.little_text3}>로그인</Text></TouchableOpacity>
      
      {/* <View style={styles.body4}>
      <View style={styles.body41}>
      <View style={styles.Imagebox}>
      <Image source={kakao}  resizeMode="stretch" style={styles.naver}/>
      </View>
      <View style={styles.Imagebox}>
      <Image source={naver} resizeMode="stretch" style={styles.naver}/>
      </View>
      </View>
      <View style={styles.body42}>
      <View style={styles.Imagebox}>
      <Image source={face}  resizeMode="stretch" style={styles.naver}/>
      </View>
      <View style={styles.Imagebox}>
      <Image source={goo}  resizeMode="stretch" style={styles.naver}/>
      </View>
      </View>         
      </View>      */}
      <TouchableOpacity style={styles.little_word4} onPress={() => {navigation.navigate('MainScreen');}} >
        <Text style={{...styles.little_text3,fontWeight: 'normal'}}>계정이 없으신가요?    가입하기</Text></TouchableOpacity>
    </View>
    
  );
  }


const styles = StyleSheet.create({
 body1:{
   flex:1,
   backgroundColor: "#F7F7FB",
   
 },
 body2:{
  flex:0.4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F7F7FB',
  marginBottom:-20,
  marginTop:-35
 },
 logo:{
   fontSize:35,
   textAlign:"center"
 },
 body3:{
   flex:0.3,
   backgroundColor:"#F7F7FB",
   marginBottom:-20,
   marginTop:-50,
 },
 search: {
  
  marginTop: 10,
  marginBottom: 10,
  marginLeft:35,
  marginRight: 35,
  paddingHorizontal: 20,
  height: SCREEN_HEIGHT/15,
  borderRadius: 15,
  borderColor: 'gray',
  borderWidth: 1,
  backgroundColor: "#F7F7FB"
},
littel_word:{
  fontSize:14,
  color:"green",
  textAlign:"right",
  marginRight:35,
  marginTop:5,
  marginBottom:-20,
},
little_word3:{
  
  justifyContent: 'center',
  alignContent:"center",
  borderRadius : 15,
  marginBottom: 10,
  marginLeft: 35,
  marginRight: 35,
  marginTop:-50,
  backgroundColor: '#6366ED',
  borderStyle: 'solid',
  borderColor: '#6366ED',
  borderWidth: 1,
  height: SCREEN_HEIGHT/15,
},
little_word4:{
  justifyContent: 'center',
  alignContent:"center",
  position: "absolute",
  bottom: 0,
  backgroundColor: '#6366FF',
  borderStyle: 'solid',
  borderColor: '#6366FF',
  borderWidth: 1,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT/12,
},
little_text3:{
  textAlign:'center',
  fontSize:18,
  fontWeight: 'bold',
  color:"#FFFFFF"
},
checkbox: {
  alignSelf: "center",
},
checkboxContainer: {
  flexDirection: "row",
  marginBottom: 10,
},
body4:{
  
  flex:0.3,
  backgroundColor:"#F7F7FB"
},
body41:{
  flex:0.5,
  flexDirection: 'row',
  marginBottom:-20,
},
body42:{
  flex:0.5,
  flexDirection: 'row',
  marginBottom: 20
},
Imagebox:{
  flex:1,
  height:Dimensions.get('window').height/10.5,
  width:Dimensions.get('window').width/2.4,
  marginLeft:20,
  marginTop:30,
  
},
naver:{
  flex:0.5,
  position: "absolute",
  height:Dimensions.get('window').height/10,
  width:Dimensions.get('window').width/2.4,
  
  
}

});