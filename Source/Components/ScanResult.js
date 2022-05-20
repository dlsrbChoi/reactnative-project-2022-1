import 'react-native-gesture-handler';
import  React, {Component} from 'react';

//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, SafeAreaView, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function UserScreen({route, navigation }){
  
    

    
    //console.log(route.params.image);
    //console.log("array:"+array[0].image);
    
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.TopNavigation}>
            <View style={styles.Frame1691}>
              <Icon name="arrow-back" size={40} color="black" style={styles.arrowBack} onPress={()=>navigation.goBack()}/>
            </View>
            <Text style={styles.Top_Text2}>식사 촬영</Text>
            
            <Text onPress={() => {navigation.navigate('NutritionFacts',{image:route.params.image}); }} style={styles.Top_Text}>다음</Text>
          
          </View>
          <View style={styles.CameraView}>
          <View style={styles.OnMiddle_camera}>
          <Text style={styles.middle_text1}>음식인식 완료!</Text>
          <Text style={styles.middle_text2}>음식이름이 다르다면, 보기에서 골라보아요 </Text>
          </View>
          <View style={styles.middle_camera}>
          <Image
            source={{uri:route.params.image}} style={styles.image}
          />
          </View>

          <ScrollView  showsHorizontalScrollIndicator={false} horizontal style={styles.word}>
            <View style={styles.little_word}><Text style={styles.little_text}>치아바타</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>호밀빵 샌드위치</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>햄 샐러드</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>목살구이</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>봉구스 밥버거</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>물고기 샌드위치</Text></View>
          </ScrollView>    
            
          </View>
        

          <View style={styles.BottomNavigation}>

            <View style={styles.GalleryButton}>
              <Icon name="insert-photo" size={50} color="black"/>
            </View>
              <View style={styles.SnapshotButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('ScanFood')}}>
                  <View style={styles.SnapshotButtonWhite}>
                    {<Icon name="refresh" size={36} color="#0d1a8a"/> }
                  </View>
                </TouchableOpacity>
              </View>
            <View style={styles.Dummy}></View>
          </View>
      </SafeAreaView>
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  TopNavigation: {
    position: 'relative',
    height: 70,
    backgroundColor: "white",
    width: Dimensions.get('window').width,
    justifyContent: "center",
  },
  Top_Text:{
    position:"absolute",
    right:0,
    marginRight:15, 
    marginBottom: 30,
    fontSize: 22,
    color:"#051898"
  },
  Top_Text2:{
    position:"absolute",
    left:55,
    marginRight:5, 
    fontSize: 22,
  },
  arrowBack: {
    marginLeft: 10,
  },

  CameraView: {
    position: 'relative',
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#323232',
  },

  BottomNavigation: {
    position: 'relative',
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get('window').width,
    bottom: 0,
    
  },

  middle_camera:{
    marginTop:-10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "pink",
    flex: 0.7,
    position: 'relative',
    borderRadius : 8
  },
  middle_text1:{
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
    color:"white"
  },
  middle_text2:{
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    color:"white"
  },
  OnMiddle_camera:{
    
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#000000",
    flex: 0.2,
    position: 'relative',
    borderRadius : 8
  },
  word:{
    backgroundColor: "#323232",
    flexGrow:0,
    marginBottom:10 
  },
  little_word:{
    justifyContent: 'center',
    alignContent:"center",
    borderRadius : 40,
    width: SCREEN_WIDTH/5,
    height: 40,
    backgroundColor: "rgba(108, 110, 201, 0.8)",
    marginLeft: 5,
    marginRight: 5
  },
  little_text:{
    textAlign:'center',
    fontSize:15,
    color:"white"
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8
    
  },
  BottomNavigation: {
    position: 'relative',
    flex: 1.3,
    backgroundColor: "white",
    width: Dimensions.get('window').width,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  GalleryButton: {
    width: 50,
    height: 50,
    left:20,
  },
  SnapshotButton: {
    width: 95,
    height: 95,
    backgroundColor: '#0d1a8a',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SnapshotButtonWhite: {
    width:76,
    height:76,
    backgroundColor:"white",
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotateY: '180deg'}],
  },
  Dummy: {
    width: 50,
    height: 50,
  },
  Frame1691: {
    width: 50,
    height: 40,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
