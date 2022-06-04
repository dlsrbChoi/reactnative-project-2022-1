import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  View,
  Dimensions,
  ScrollView, 
  TouchableOpacity,
  Image,
  Button,
  Switch,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function App({route, navigation}) {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  
  const [howManyEat, setHowManyEat] = React.useState(1);
  const [aftereatStatus, setAftereatStatus] = React.useState({
    "양호해요": true,
    "입맛이없어요" : false,
    "구내염" : false,
    "조기포만감" : false,
    "연하곤란/삼킴곤란" : false,
    "소화불량" : false,
    "복부불편감" : false,
    "잠시후에입력할게요" : false
  });

  const [test,setTest] = React.useState(0);
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
  });

  const setAfterEat = (key) => {
    let a = aftereatStatus;
    if (a[key]) {
      a[key] = false;
    } else {
      a[key] = true;
    }
    setAftereatStatus(a);
    setTest(Date.now());    //이거 없으면 ui 새로고침이 안됨. 원인이 뭐지?
  }


  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Rectangle4730}>
        <View style={styles.Frame1691}>
          <AntDesign name="arrowleft" size={40} color="black" style={styles.arrowmagin} onPress={()=>navigation.goBack()}/>
        </View>
        <Text style={styles.Text001}>식사 기록</Text>
        <Text onPress={() => {navigation.navigate('ScanResults2',{image:route.params.image}); }} style={styles.Text002}>완료</Text>          
      </View>
      
      <View style={styles.Rectangle4734}>
        <View style={styles.Frame145}>
        <Button title={selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'} onPress={showDatePicker} />
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isDarkModeEnabled
        />
        </View>

        <View style={styles.body3}>
          <View style={styles.Imagebox}>
            <Image
                source={{uri:route.params.image}} style={styles.image}
            />
          </View>
          <View style={styles.Imagebox}>
            <TouchableOpacity>
              <AntDesign name="plus" size={36} color="#888888" />
            </TouchableOpacity>
            
          </View>
        </View>


        <Text style={styles.Text003}>전체 섭취량</Text>
        <View style={styles.Nutrition}>
          <AnimatedCircularProgress
            size={120}
            width={6}
            backgroundWidth={6}
            fill={60}
            tintColor="#6C6EC9"
            backgroundColor="#DFDFF3"
            arcSweepAngle={260}
            rotation={230}
            lineCap="round"
            style={{marginLeft:10}}>
              {
                ()=>
                <View>
                  <Text style={styles.Text005}>480</Text>
                  <Text style={styles.Text006}>칼로리</Text>
                </View>
              }
          </AnimatedCircularProgress>
          
          <View style={styles.fact}>
            <Text style={styles.Text007}>탄수화물 17%</Text>
            <Text style={styles.Text007}>단백질 8%</Text>
            <Text style={styles.Text007}>지방 12%</Text>
          </View>
          <View style={styles.fact}>
            <ProgressBar progress={0.35} color="#6C6EC9" style={styles.bar}/>
            <ProgressBar progress={0.4} color="#6C6EC9" style={styles.bar}/>
            <ProgressBar progress={0.2} color="#6C6EC9" style={styles.bar}/>
          </View>
            
          
          
          
        </View>
      </View> 
      <View style={styles.Rectangle4767}>
        <Text style={styles.Text003}>얼마나 드셨나요?</Text>
          <View style={styles.body3}>
            <TouchableOpacity onPress={() => setHowManyEat(1)}>
              <View style={{...styles.Frame169, backgroundColor: howManyEat===1 ? "#DFDFF3" : "white"}}>
                <Text style={{color: howManyEat===1 ? "#6C6EC9" : "black"}}>다 먹었어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHowManyEat(2)}>
            <View style={{...styles.Frame169, backgroundColor: howManyEat===2 ? "#DFDFF3" : "white"}}>
              <Text style={{color: howManyEat===2 ? "#6C6EC9" : "black"}}>3/4 먹었어요.</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHowManyEat(3)}>
              <View style={{...styles.Frame169, backgroundColor: howManyEat===3 ? "#DFDFF3" : "white"}}>
                <Text style={{color: howManyEat===3 ? "#6C6EC9" : "black"}}>1/2 먹었어요.</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
          <TouchableOpacity onPress={() => setHowManyEat(4)}>
              <View style={{...styles.Frame169, backgroundColor: howManyEat===4 ? "#DFDFF3" : "white"}}>
                <Text style={{color: howManyEat===4 ? "#6C6EC9" : "black"}}>1/4 먹었어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHowManyEat(5)}>
              <View style={{...styles.Frame169, backgroundColor: howManyEat===5 ? "#DFDFF3" : "white"}}>
                <Text style={{color: howManyEat===5 ? "#6C6EC9" : "black"}}>거의 남겼어요.</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.Text003}>식후 상태는 어떠신가요?<Text style={styles.Text004}> (중복 선택 가능)</Text></Text>
          <View style={styles.body3}>
            <TouchableOpacity onPress={() => setAfterEat("양호해요")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.양호해요 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.양호해요 ? "#6C6EC9" : "black"}}>양호해요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAfterEat("입맛이없어요")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.입맛이없어요 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.입맛이없어요 ? "#6C6EC9" : "black"}}>입맛이 없어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAfterEat("구내염")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.구내염 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.구내염 ? "#6C6EC9" : "black"}}>구내염</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
          <TouchableOpacity onPress={() => setAfterEat("조기포만감")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.조기포만감 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.조기포만감 ? "#6C6EC9" : "black"}}>조기포만감</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAfterEat("연하곤란/삼킴곤란")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus['연하곤란/삼킴곤란'] ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus['연하곤란/삼킴곤란'] ? "#6C6EC9" : "black"}}>연하곤란/삼킴곤란</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
          <TouchableOpacity onPress={() => setAfterEat("소화불량")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.소화불량 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.소화불량 ? "#6C6EC9" : "black"}}>소화불량   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAfterEat("복부불편감")}>
              <View style={{...styles.Frame169, backgroundColor: aftereatStatus.복부불편감 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.복부불편감 ? "#6C6EC9" : "black"}}>복부 불편감   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
            <TouchableOpacity onPress={() => setAfterEat("잠시후에입력할게요")}>
              <View style={{...styles.Frame164, backgroundColor: aftereatStatus.잠시후에입력할게요 ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereatStatus.잠시후에입력할게요 ? "#6C6EC9" : "black"}}>잠시 후에 입력할게요.   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
              </View>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
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
    marginLeft: 10,
  },
  Text001: {
    position:"absolute",
    left:55,
    marginRight:5, 
    fontSize: 22,
  },
  Text002: {
    position:"absolute",
    right:0,
    marginRight:15, 
    marginBottom: 30,
    fontSize: 22,
    color:"#051898"
  },
  body3: {
    flexDirection: 'row',
  },
  body4: {
    flexDirection: 'column',
  },
  Rectangle4767: {
    width: Dimensions.get('window').width,
    height: 450,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderWidth: 1,
    borderRadius: 1,
  },
  Text003: {
    fontSize: 20,
    color: '#6f6d7e',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 10,
  },
  Text004: {
    fontSize: 15,
    color: '#6f6d7e',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 10,
  },
  Frame169: {
    width: Dimensions.get('window').width/3.7,
    height: 40,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
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
  Frame164: {
    width: Dimensions.get('window').width/2.8,
    height: 40,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  Rectangle4734: {
    marginTop: 15,
    marginBottom: 15,
    width: Dimensions.get('window').width,
    height: 500,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderWidth: 1,
    borderRadius: 1,
  },
  Frame145: {
    width: Dimensions.get('window').width/1.1,
    height: 40,
    backgroundColor: '#f7f7fb',
    borderStyle: 'solid',
    borderColor: '#f7f7fb',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 15,
  },
  Imagebox: {
    width: 200,
    height: 200,
    backgroundColor: '#f7f7fb',
    borderStyle: 'solid',
    borderColor: '#f7f7fb',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  Text005: {
    color: "#6c6ec9",
    fontSize: 30,
    textAlign: 'center',
    marginTop: -10,
    fontWeight:'bold'
  },
  Text006: {
    color: "#6f6d7e",
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  Text007: {
    color: "#6f6d7e",
    fontSize: 17,
    marginTop: Dimensions.get('window').height/50,
    top:-10
  },
  bar: {
    width: Dimensions.get('window').width/3.2,
    height: 6,
    marginTop: Dimensions.get('window').height/25,
    marginRight: 10,
    borderRadius:50,
    top:-18

  },
  Nutrition: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
  },
  fact: {
    flexDirection: 'column',
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
    left:55,
    marginRight:5, 
    fontSize: 22,
  },
});