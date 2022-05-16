import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text, 
    View,
    Dimensions,
    ScrollView, 
 } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

function clickBtnFunction(navigation){
    /* 코드 작성 */
    navigation.navigate('MainScreen');
  }

 export default function App({route, navigation}) {
    return (
        <View style={styles.body}>
            <StatusBar style="dark" />
            <View style={styles.Rectangle4723}>

            </View>

            <View style={styles.Rectangle4741}>
                <Text>달력</Text>

            </View>
            
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Rectangle4734}>
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame168}>
                            <Text >All</Text>
                        </View>
                        <View style={styles.Frame168}>
                            <Text>아침</Text>
                        </View>
                        <View style={styles.Frame168}>
                            <Text>점심</Text>
                        </View>
                        <View style={styles.Frame168}>
                            <Text>저녁</Text>
                        </View>
                        <View style={styles.Frame168}>
                            <Text>+</Text>
                        </View>
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
                        <View style={{flex: 1.2, backgroundColor: 'red'}}>
                            <Text style={{fontSize: 30}}>만두사진</Text>
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
                            <Text style={{fontSize: 30}}>돈카사진</Text>
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
        marginTop: 40,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/5,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 1,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        height: Dimensions.get('window').height/0.8,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: Dimensions.get('window').height/2,
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
        left: 10,
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
        marginLeft: 40,
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
        width: Dimensions.get('window').width/10,
        height: Dimensions.get('window').height/25,
        backgroundColor: 'red',
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
        marginLeft: 15,
        marginTop: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: 8,
        width: 6
        }
    },
});