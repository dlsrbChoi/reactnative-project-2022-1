import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    button, 
    TouchableHighlight, 
    Text, 
    View,
    ScrollView,
    Dimensions,
    Image,
    } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/EvilIcons'
import Icon5 from 'react-native-vector-icons/Entypo'
import { Alert } from 'react-native-web';
import { useState } from 'react/cjs/react.production.min';

import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profilepicture from "../image/Profilepicture.png";
import Flatdumpling from "../image/flatdumpling.png";
import Porkcutletcurry from "../image/Porkcutletcurry.png";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  container_2:{
    flex: 1,
    flexDirection:'row',
    marginBottom: -150
  },
  container_3: {
    flex: 1,
    flexDirection:'row',
    marginBottom: -30
  },
  container_4:{
    flex: 1,
  },
  button_1: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    bottom: Dimensions.get('window').width*0.1,
    width: Dimensions.get('window').width*0.28,
    right: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",

  },
  button_2: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 28,
    bottom: Dimensions.get('window').width*0.1,
    width: Dimensions.get('window').width*0.28,
    left: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",

  },
  button_3: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    bottom: Dimensions.get('window').width*0.01,
    width: Dimensions.get('window').width*0.28,
    right: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",

  },
  button_4: {
    alignSelf: 'center',
    borderWidth: 1,
    bottom: Dimensions.get('window').width*0.01,
    width: Dimensions.get('window').width*0.28,
    left: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    borderRadius: 10,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",

  },
  user:{
    marginRight:30,
    flex:1,
    
  },
  middle:{
    marginLeft:35,
    marginTop:15,
    flex:1,
  },

//MainPage CSS
    body: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    Rectangle4723 : {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/4.3,
        borderStyle: 'solid',
        borderColor: '#6C6EC9',
        borderWidth: 1,
        borderRadius: 1,
        borderBottomRightRadius: 30,      
        backgroundColor: '#6C6EC9',
        marginTop: Dimensions.get('window').height/22,
    },
    Rectangle4741: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#f7f7fb',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    Rectangle4734: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*1,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderRadius: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    footer:{
        backgroundColor: "#ffffff",
        borderTopRightRadius: 30,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent:'space-around',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/8,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: -5,
        width: 0
        }
    },
    Text003: {
        fontSize: 20,
        color: '#6f6d7e',
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 10,
    },
    circlebar: {
        top: 15,
    },
    Text005: {
        color: "#6c6ec9",
        fontSize: 30,
        textAlign: 'center',
        marginTop: -10,
    },
    Text006: {
        color: "#6f6d7e",
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    bodyrow: {
        flexDirection: 'row',
    },
    bodycolumn: {
        flexDirection: 'column',
    },
    Frame111: {
        width: 40,
        height: 40,
        backgroundColor: '#051898',
        borderStyle: 'solid',
        borderColor: '#051898',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    Frame112: {
        width: 70,
        height: 70,
        backgroundColor: '#6C6EC9',
        borderStyle: 'solid',
        borderColor: '#6C6EC9',
        borderWidth: 1,
        borderRadius: 70,
        marginLeft: 20,
        marginTop: 30,
    },
    Frame113: {
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').height/18,
        backgroundColor: '#4A52B9',
        borderStyle: 'solid',
        borderColor: '#4A52B9',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20,
    },
    Frame147: {
        width: Dimensions.get('window').width/1.8,
        height: Dimensions.get('window').height/9,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: 8,
        width: 6
        }
    },
    bar: {
        width: Dimensions.get('window').width/4,
    },
    Frame168: {
        width: Dimensions.get('window').width/12,
        height: Dimensions.get('window').height/25,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width/30,
        marginTop: 20,
        marginBottom: 5,
    },
    Frame1681: {
        width: Dimensions.get('window').width/30,
        height: Dimensions.get('window').height/25,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width/30,
        marginTop: 20,
        marginBottom: 5,
    },
    Frame169: {
        width: Dimensions.get('window').width/3.5,
        height: Dimensions.get('window').height/14,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    Frame170: {
        width: Dimensions.get('window').width/3.5,
        height: Dimensions.get('window').height/14,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 5,
    },
    Rectangle4750: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: 8,
        width: 6,
        }
    },
    Rectangle47501: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
    },
    Rectangle47502: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    image_1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    cal:{
        //position: 'relative',
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: 'yellow',
        borderStyle: 'solid',
        borderColor: 'pink',
        marginLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginTop:20,
        marginBottom:14,
    },
    calrow:{
        
        position: 'relative',
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        marginLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginTop:20,
        marginBottom:14,
    },
    calTitle:{
        //backgroundColor:"#FFFFFF",
        flex:0.35,
        flexDirection:"row",
        
    },
    calTitleText:{
        position:"absolute",
        marginTop:10,
        marginLeft:13,
        marginRight:-10,
        textAlign:"left",
        fontSize:20,
        color:"#6F6D7E",
        fontWeight: "bold"
    },
    calMiddle:{
        //backgroundColor:"#FFFFFF",
        flex:0.65,
        flexDirection:"row",
        marginTop:5
       
    },
    caldate:{
        flex:0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FFFFFF"
    },
    caltext:{
        fontSize:15,
        color:"#888888"
    },
    caltext2:{
        fontSize:15,
        color:"#888888"
    },
    caltext4:{
        fontSize:15,
        color:"#888888",
        opacity:0
    },
    calTitleText2:{
        position:"absolute",
        color:"#707070",
        marginTop:12,
        marginLeft:Dimensions.get('window').width/3.7,
    },
    calTitlerow:{
        flexDirection:"row"
    },
    button:{
        backgroundColor: "#fe5746",
        justifyContent: "center",
        alignItems: "center"
    },
    bhome:{
        right: Dimensions.get('window').width*0.13,
        top: Dimensions.get('window').width*0.17,
        color:"#051898",
    },
    bprofile:{
        right: Dimensions.get('window').width*0.167,
        top: Dimensions.get('window').width*0.17,
        color:"black",
    },
    식사: {
        top:Dimensions.get('window').width*0.03,
        right: Dimensions.get('window').width*0.12,
    },
    home:{
        marginTop:15,
        width: 50,
        height: 80,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        textAlign:'center',
    },
    home_1:{
        marginTop:15,
        width: 70,
        height: 70,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
    },
    home_2:{
        marginTop:15,
        width: 50,
        height: 70,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        textAlign:'center',
    },
   
});

function clickBtnFunction(navigation){
  /* 코드 작성 */
  navigation.navigate('ScanFood');
}

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','May','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','May','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

export default function AppView ({route, navigation}){
    
    const [isShowTest, setIsShowTest] = React.useState(false);
    const [mealtime, setMealtime] = React.useState(0);

    const [isBackgroundShow, setIsBackgroundShow] =React.useState(false);
    const 함수 = () => {
        isShowTest=== false ? setIsShowTest(true) : setIsShowTest(false);
        isBackgroundShow === false ? setIsBackgroundShow(true) : setIsBackgroundShow(false);
    }
    
    const dateToStr = () => {
        var now=new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
      
        return year+'년 '+month+'월'
      }

      const DayView = (day=1,date=30) => {
        
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        var dayName = week[day]; // 월

        return dayName
      }    

      const DayDay = () => {
        var now=new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        var date = now.getDate();

        return date%32
      }

      const DayDay2 = (day2=1) => {
        var now=new Date();
        var day = day2%7;
        var date1="dd"
        

        if(day==0){
            date1="화"
        }else if(day==1){
            date1="수"
        }else if(day==2){
            date1="목"
        }else if(day==3){
            date1="금"
        }else if(day==4){
            date1="토"
        }else if(day==5){
            date1="일"
        }else if(day==6){
            date1="월"
        }

        return date1
      }

    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView showsVerticalScrollIndicator={false}>
       
            <View style={styles.Rectangle4723}>
                <View style={styles.bodyrow}>
                    <View style={{flex:1.2}}>
                        <View style={styles.Frame112}>
                            <Image source={Profilepicture} style={styles.image_1} />
                        </View>
                    </View>
                    <View style={{flex: 2.8}}>
                        <Text style={{color: "#FFFFFF", fontSize: Dimensions.get("window").width/20, marginTop: 40}}>Linda Kim</Text>
                    </View>
                    <View style={{flex: 0.7}}>
                        <View style={styles.Frame111}>
                            <Feather name="bell" size={Dimensions.get("window").width/20} color="#FFFFFF" />
                        </View>
                    </View>
                </View>
                <View style={styles.Frame113}>
                    <Text style={{color: "#FFFFFF", fontSize: 17}}>내 건강정보 입력</Text>
                </View>
            </View>
            


                <View style={styles.calrow}>
                <View style={styles.calTitle}><Text style={styles.calTitleText}>{dateToStr()} </Text><Icon4 name="chevron-down" size={30} style={styles.calTitleText2} /></View>
                <View style={styles.calMiddle}>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()-3)  }</Text><Text style={styles.caltext2}>{DayDay()-3 }</Text><Text style={styles.caltext4} ><Icon5 name="dot-single" size={30} /></Text></View> 
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()-2)  }</Text><Text style={styles.caltext2}>{DayDay()-2}</Text><Text style={styles.caltext}><Icon5 name="dots-two-horizontal" size={30} /></Text></View>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()-1)  }</Text><Text style={styles.caltext2}>{DayDay()-1}</Text><Text style={styles.caltext}><Icon5 name="dot-single" size={30} /></Text></View>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay())  }</Text><Text style={styles.caltext2}>{DayDay()}</Text><Text style={styles.caltext}><Icon5 name="dots-two-horizontal" size={30} /></Text></View>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()+1)  }</Text><Text style={styles.caltext2}>{DayDay()+1}</Text><Text style={styles.caltext4}><Icon5 name="dot-single" size={30} /></Text></View>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()+2)  }</Text><Text style={styles.caltext2}>{DayDay()+2}</Text><Text style={styles.caltext4}><Icon5 name="dot-single" size={30} /></Text></View>
                    <View style={styles.caldate}><Text style={styles.caltext}>{DayDay2(DayDay()+3)  }</Text><Text style={styles.caltext2}>{DayDay()+3}</Text><Text style={styles.caltext4}><Icon5 name="dot-single" size={30} /></Text></View>
                </View>
                </View>
            
            <View>
            
                <View style={styles.Rectangle4734}>
                    <View style={styles.bodyrow}>
                        <TouchableOpacity onPress={() => setMealtime(1)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize:Dimensions.get("window").width/24, color: mealtime===1 ? "#6C6EC9" : "#888888"}}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(2)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize:Dimensions.get("window").width/24, color: mealtime===2 ? "#6C6EC9" : "#888888"}}>아침</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(3)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: Dimensions.get("window").width/24, color: mealtime===3 ? "#6C6EC9" : "#888888"}}>점심</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(4)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: Dimensions.get("window").width/24, color: mealtime===4 ? "#6C6EC9" : "#888888"}}>저녁</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(5)}>
                            <View style={styles.Frame168}>
                                <AntDesign name="plus" size={Dimensions.get("window").width/24} style={{color: mealtime===5 ? "#6C6EC9" : "#888888"}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyrow}>
                        <AnimatedCircularProgress
                            size={130}
                            width={7}
                            backgroundWidth={7}
                            fill={65}
                            tintColor="#6C6EC9"
                            backgroundColor="#DFDFF3"
                            arcSweepAngle={240}
                            rotation={240}
                            lineCap="round"
                            style={styles.circlebar}>
                            {
                                ()=>
                                <View>
                                <Text style={styles.Text005}>1216</Text>
                                <Text style={styles.Text006}>잔여 칼로리</Text>
                                </View>
                            }
                        </AnimatedCircularProgress>
                        <View style={styles.Frame147}>
                            <View style={styles.bodycolumn}>
                                <Text style={{fontSize: 16, color:'#6F6D7E', fontWeight:'bold'}}>오늘의 AI피드백</Text>
                                <Text style={{fontSize: 16, color:'#6F6D7E', marginTop: 10}}>탄수화물, 지방 섭취는 적당하{"\n"}지만 단백질 섭취가 부족해요!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.52} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>탄수화물 52%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.6} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>단백질 60%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.25} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>지방 25%</Text>
                        </View>
                    </View>
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.8} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>나트륨 80%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.9} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>당 90%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.5} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>섬유질 50%</Text>
                        </View>
                    </View>
                    <View style={styles.Rectangle4750}>
                        <View style={{...styles.Rectangle47501, flex: 1.2}}>
                            <Image source={Flatdumpling} style={styles.image} />
                        </View>
                        <View style={{...styles.Rectangle47502, flex: 2.3}}>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: '#3D3B4C', marginLeft: 15}}>납작 만두</Text>
                                <Text style={{fontSize: 15, color: '#888888', marginLeft: 10}}>오전 8:47</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 15}}>식사량</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 15}}>2/3개</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 10}}>식후상태</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 10}}>양호해요</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.5, flexDirection: 'row'}}>
                                <Text style={{fontSize: 15, color: '#888888'}}>수정 </Text>
                                <MaterialIcons name="keyboard-arrow-right" size={15} color="#888888" />
                        </View>
                    </View>
                    
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.17} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>탄수화물 17%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.3} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>단백질 30%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.12} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>지방 12%</Text>
                        </View>
                    </View>

                    <View style={{...styles.Rectangle4750}}>
                        <View style={{...styles.Rectangle47501, flex: 1.2}}>
                            <Image source={Porkcutletcurry} style={styles.image} />
                        </View>
                        <View style={{...styles.Rectangle47502, flex: 2.3}}>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: '#3D3B4C', marginLeft: 15}}>돈까스 카레</Text>
                                <Text style={{fontSize: 15, color: '#888888', marginLeft: 10}}>오후 12:05</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 15}}>식사량</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 15}}>1개</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 10}}>식후상태</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 10}}>양호해요</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.5, flexDirection: 'row'}}>
                                <Text style={{fontSize: 15, color: '#888888'}}>수정 </Text>
                                <MaterialIcons name="keyboard-arrow-right" size={15} color="#888888" />
                        </View>
                    </View>         

                    <View style={styles.bodyrow}>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.35} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>탄수화물 35%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.3} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>단백질 30%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.13} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>지방 13%</Text>
                        </View>
                    </View>
                </View>
                
            
        </View>
        </ScrollView>
        {isBackgroundShow && <View style={{backgroundColor:'rgba( 0, 0, 0, 0.5 )', position: "absolute", 
            width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
            {isShowTest && <View style={{position:'absolute', alignItems: 'center',
            borderRadius: 15, marginLeft: 40,
            backgroundColor: 'white',            
            bottom:Dimensions.get('window').width*0.3,
            width: Dimensions.get('window').width*0.65,
            height: Dimensions.get('window').height*0.33,
            left: Dimensions.get('window').width*0.07 }}>
            <View style={styles.식사}><Text style={{ fontWeight: 'bold'}}>식사를 기록해 주세요.</Text></View>
            
            <View style={styles.container_2}>
                <TouchableHighlight  
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_1}>
                    <Text style={{fontWeight: 'bold'}}>아침🍎</Text>
                    
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_2}>
                    <Text style={{fontWeight: 'bold'}}>점심🍲</Text>
            </TouchableHighlight>
            
            </View>

            <View style={styles.container_3}>
            
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_3}>
                    <Text style={{fontWeight: 'bold'}}>저녁🥗</Text>
                        
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_4}>
                    <Text style={{fontWeight: 'bold'}}>간식🍓</Text>
                </TouchableHighlight>
            </View>  
            </View>
            
            }
        </View>}
        
        <View style={styles.footer}>

           <Icon name="home" size={40} color="#051898" style={styles.home} ><Text style={{fontSize:14}}>홈</Text></Icon>
           
           <Icon3 name="pluscircleo" size={58} color="#051898" style={styles.home_1} 
            onPress={() => 함수()}
            />
           <Icon2 name="user-circle" size={40} color="#333333" style={styles.home_2}><Text style={{fontSize:14}}>MY</Text></Icon2>
           

        </View>
        
      </View>

    );
  }