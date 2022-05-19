import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text, 
    View,
    Dimensions,
    ScrollView,
    Image,
    SafeAreaView
 } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function clickBtnFunction(navigation){
    /* 코드 작성 */
    navigation.navigate('MainScreen');
  }

 export default function App({route, navigation}) {

    const [mealtime, setMealtime] = React.useState(0);

    return (
        <View style={styles.body}>
            <StatusBar style="dark" />
            <SafeAreaView>
            <View style={styles.Rectangle4723}>
                <View style={styles.bodyrow}>
                    <View style={{flex:1.2}}>
                        <View style={styles.Frame112}>

                        </View>
                    </View>
                    <View style={{flex: 2.8}}>
                        <Text style={{color: "#FFFFFF", fontSize: 24, marginTop: 40}}>Linda Kim</Text>
                    </View>
                    <View style={{flex: 0.7}}>
                        <View style={styles.Frame111}>
                            <Feather name="bell" size={20} color="#FFFFFF" />
                        </View>
                    </View>
                </View>
                <View style={styles.Frame113}>
                    <Text style={{color: "#FFFFFF", fontSize: 20}}>내 건강정보 입력</Text>
                </View>
            </View>
            </SafeAreaView>
            <View style={styles.Rectangle4741}>
                <Text>달력</Text>

            </View>
            
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Rectangle4734}>
                    <View style={styles.bodyrow}>
                        <TouchableOpacity onPress={() => setMealtime(1)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: 20, color: mealtime===1 ? "#6C6EC9" : "#888888"}}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: 20, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(2)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: 20, color: mealtime===2 ? "#6C6EC9" : "#888888"}}>아침</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: 20, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(3)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: 20, color: mealtime===3 ? "#6C6EC9" : "#888888"}}>점심</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: 20, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(4)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: 20, color: mealtime===4 ? "#6C6EC9" : "#888888"}}>저녁</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: 20, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(5)}>
                            <View style={styles.Frame168}>
                                <AntDesign name="plus" size={20} style={{color: mealtime===5 ? "#6C6EC9" : "#888888"}} />
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
                        <View style={{flex: 1.2}}>
                            <Image source={"../image/Flatdumpling.JPG"} style={{width: "100%", height: "100%"}} />
                        </View>
                        <View style={{flex: 2.3, backgroundColor: '#FFFFFF'}}>
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
                    <View style={{...styles.Rectangle4750, marginTop: 30}}>
                        <View style={{flex: 1.2, backgroundColor: 'red'}}>
                            <Image source={"../image/porkcutletcurry.jpeg"} style={{width: "100%", height: "100%"}} />
                        </View>
                        <View style={{flex: 2.3}}>
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
            </ScrollView>
            </View>

            <View style={styles.footer}>
                <Icon name="home" size={50} color="blue" style={styles.home} />
                <Icon3 name="pluscircleo" size={50} color="blue" style={styles.home} onPress={()=>{clickBtnFunction(navigation)}} />
                <Icon2 name="user-circle" size={50} color="blue" style={styles.home} />
            </View>
        </View>
    );
 }

 const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    Rectangle4723 : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/4.3,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 1,
        borderBottomRightRadius: 30,      
        backgroundColor: '#6C6EC9',
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
        height: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: Dimensions.get('window').height/2,
        alignItems: 'center',
    },
    footer:{
        flex: 0.55,
        backgroundColor: "#ffffff",
        borderTopRightRadius: 30,
        flexDirection: 'row',
        position: 'absolute',
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
    home:{
        marginLeft:45,
        marginTop:15,
        flex:1
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
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 70,
        marginLeft: 20,
        marginTop: 30,
    },
    Frame113: {
        width: 160,
        height: 50,
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
});