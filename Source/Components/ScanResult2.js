import React, {useState, setState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { 
  StyleSheet, 
  Text, View, 
  Dimensions, 
  ScrollView, 
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';


const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT} = Dimensions.get("window");
export default function ScanResults2({route, navigation}) {

  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <View style={styles.Rectangle4730}>
        <View style={styles.Frame1691}>
            <AntDesign name="arrowleft" size={40} color="black" style={styles.arrowmagin} onPress={() => navigation.goBack()}/>
        </View>
        <Text style={styles.Text001}>태그 편집</Text>
      </View>
      <View style={styles.body2}>
      <View style={styles.serchline}>
      <TextInput style={styles.search} placeholder = "3000여종의 음식 DB에서 찾아보기" />
      <Icon name="search1" size={35}  style={styles.search1} />
      </View>
      <View style={styles.body3}>
      <View style={styles.Imagebox}>
       <Image
                source={{uri:route.params.image}} style={styles.image}
            />     
      </View>
      <View style={styles.Imagebox}>

      </View>      
        
      </View>
      <View style={styles.scrollpart}>
      <ScrollView horizontal style={styles.word1}>
            <View style={styles.little_word}><Text style={styles.little_text}>치아바타</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>호밀빵 샌드위치</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>햄 샐러드</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>목살구이</Text></View>
            
      </ScrollView>  
      <ScrollView horizontal style={styles.word2}>
            <View style={styles.little_word}><Text style={styles.little_text}>봉구스 밥버거</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>태그추가+</Text></View>
      </ScrollView>  
      </View>
      </View>

      <View style={styles.body4}>
        
          <Text style={styles.body4Text} > <Icon name="warning" size={18}  style={styles.warning} /> 오늘의 한끼를 표현할 마땅한 태그가 없다면</Text>
          <View style={styles.body4re}>
          <View style={styles.little_word2}><Text style={styles.little_text2}>다시 촬영</Text></View>
          <View style={styles.little_word2}><Text style={styles.little_text2}>직접 입력</Text></View>
          </View>
          <View style={styles.little_word3}><Text style={styles.little_text3}>저장</Text></View>
        

      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  Rectangle4730: {
    position: 'relative',
    height: Dimensions.get('window').height/12,
    backgroundColor: "white",
    width: Dimensions.get('window').width,    
    justifyContent: "center",
    marginTop: Dimensions.get('window').height/22,
  },
  arrowmagin: {
    flex: 1,
    marginLeft: 10,
  },
  Text001: {
    position:"absolute",
    left:55,
    marginRight:5, 
    fontSize: 22,
  },
  search: {
    flex:0.8,
    marginTop: 20,
    marginBottom: 10,
    marginLeft:20,
    marginRight: 30,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "#F7F7FB"
  },
  serchline:{
  
    flexDirection: 'row'
  },
  search1:{
    marginTop: 25,
    marginBottom: 10,
    marginRight: -40,
    marginLeft: -10
  },
  body2:{
   borderTopLeftRadius:10,
   marginTop:15,
   flex:0.65,
   backgroundColor:"#FFFFFF"
  },
  body3:{
    
    flexDirection: 'row',
  },
  Imagebox: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').width/2,
    //backgroundColor: '#f7f7fb',
    backgroundColor:"black",
    borderStyle: 'solid',
    borderColor: '#f7f7fb',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
  },
  word1:{
    marginTop:20,
    
    backgroundColor: "#FFFFFF",
    height: SCREEN_HEIGHT/12,
    //flexGrow:1,
  },
  word2:{
    marginTop:5,
    backgroundColor: "#FFFFFF",
    height: SCREEN_HEIGHT/12,
    //flexGrow:1,
  },
  little_word:{
    flex:0.5,
    justifyContent: 'center',
    alignContent:"center",
    borderRadius : 40,
    width: SCREEN_WIDTH/5,
    height: SCREEN_HEIGHT/18,
    backgroundColor: "rgba(108, 110, 201, 0.8)",
    marginLeft: 5,
    marginRight: 5,
    
  },
  little_text:{
    textAlign:'center',
    fontSize:15,
    color:"white"
  },
  body4:{
    borderTopLeftRadius:10,
    marginTop:15,
    flex:0.35,
    backgroundColor:"#FFFFFF",
  },
  body4Text:{
    fontSize: 18,
    textAlign: "center",
    color: "#3D3B4C",
    fontWeight: "600",
    marginTop:20,
  },
  body4re:{
    flexDirection: 'row',
    marginTop: 10,
    flex: 0.3
  },
  little_word2:{
    justifyContent: 'center',
    alignContent:"center",
    borderRadius : 8,
    flex:0.5,
    height: 40,
    marginLeft:5,
    marginRight:5,
    backgroundColor:"#FFFFFF",
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: 1,
  },
  little_text2:{
    textAlign:'center',
    fontSize:16,
    color:"#888888"
  },
  little_word3:{
    flex:0.4,
    justifyContent: 'center',
    alignContent:"center",
    borderRadius : 8,
    marginBottom:-20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 65,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#6366ED',
    borderWidth: 1,
  },
  little_text3:{
    textAlign:'center',
    fontSize:16,
    color:"#6366ED"
  },
  warning:{
    color:"blue",
    
   },
   image:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8
   },
   scrollpart:{
     flex:1,
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