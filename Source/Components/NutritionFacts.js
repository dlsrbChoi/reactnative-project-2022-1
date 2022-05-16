import React, {useState, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { 
  StyleSheet, 
  Text,
  View, 
  Dimensions, 
  ScrollView, 
  TouchableOpacity,
  FlatList,
  Pressable,
  Button
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar, Colors } from 'react-native-paper';


export default function App({route, navigation}) {
  
  const [eating, setEating] = useState(1);
  const eatall = () => setEating(1);
  const eat34 = () => setEating(2);
  const eat12 = () => setEating(3);
  const eat14 = () => setEating(4);
  const eatalmost = () => setEating(5);

  const [aftereat, setAftereat] = useState(1);
  const aftereat1 = () => setAftereat(1);
  const aftereat2 = () => setAftereat(2);
  const aftereat3 = () => setAftereat(3);
  const aftereat4 = () => setAftereat(4);
  const aftereat5 = () => setAftereat(5);
  const aftereat6 = () => setAftereat(6);
  const aftereat7 = () => setAftereat(7);
  const aftereat8 = () => setAftereat(8);

  const [startDate, setStartDate] = useState(new Date());


  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.Rectangle4730}>
        <AntDesign name="arrowleft" size={42} color="black" style={styles.arrowmagin} onPress={()=>navigation.goBack()} />
        <Text style={styles.Text001}>식사 기록</Text>
        <Text style={styles.Text002}>완료</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Rectangle4734}>
        <View style={styles.Frame145}>
          
        
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
        <Text style={styles.Text003}>전체 섭취량</Text>
        <View style={styles.body3}>
          <AnimatedCircularProgress
            size={130}
            width={7}
            backgroundWidth={7}
            fill={60}
            tintColor="#6C6EC9"
            backgroundColor="#DFDFF3"
            arcSweepAngle={240}
            rotation={240}
            lineCap="round"
            style={styles.circlebar}>
              {
                ()=>
                <View>
                  <Text style={styles.Text005}>480</Text>
                  <Text style={styles.Text006}>칼로리</Text>
                </View>
              }
          </AnimatedCircularProgress>
          <View style={styles.body4}>
            <View style={styles.body3}>
              <Text style={styles.Text007}>탄수화물 17%</Text>
              <ProgressBar progress={0.35} color="#6C6EC9" style={styles.bar}/>
              
            </View>
            <Text> </Text>
            <View style={styles.body3}>
              <Text style={styles.Text007}>단백질 8%</Text>
              <ProgressBar progress={0.4} color="#6C6EC9" style={styles.bar}/>
            </View>
            <Text> </Text>
            <View style={styles.body3}>
              <Text style={styles.Text007}>지방 12%</Text>
              <ProgressBar progress={0.2} color="#6C6EC9" style={styles.bar}/>
            </View>
          </View>
        </View>
      </View> 
      <View style={styles.Rectangle4767}>
        <Text style={styles.Text003}>얼마나 드셨나요?</Text>
          <View style={styles.body3}>
            <TouchableOpacity onPress={eatall}>
              <View style={{...styles.Frame169, backgroundColor: eating ? "#DFDFF3" : "white"}}>
                <Text style={{color: eating ? "#6C6EC9" : "black"}}>다 먹었어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={eat34}>
            <View style={{...styles.Frame169, backgroundColor: !eating ? "#DFDFF3" : "white"}}>
              <Text style={{color: !eating ? "#6C6EC9" : "black"}}>3/4 먹었어요.</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={eat12}>
              <View style={{...styles.Frame169, backgroundColor: !eating ? "#DFDFF3" : "white"}}>
                <Text style={{color: !eating ? "#6C6EC9" : "black"}}>1/2 먹었어요.</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
          <TouchableOpacity onPress={eat14}>
              <View style={{...styles.Frame169, backgroundColor: !eating ? "#DFDFF3" : "white"}}>
                <Text style={{color: !eating ? "#6C6EC9" : "black"}}>1/4 먹었어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={eatalmost}>
              <View style={{...styles.Frame169, backgroundColor: !eating ? "#DFDFF3" : "white"}}>
                <Text style={{color: !eating ? "#6C6EC9" : "black"}}>거의 남겼어요.</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.Text003}>식후 상태는 어떠신가요?<Text style={styles.Text004}> (중복 선택 가능)</Text></Text>
          <View style={styles.body3}>
            <TouchableOpacity onPress={aftereat1}>
              <View style={{...styles.Frame169, backgroundColor: aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: aftereat ? "#6C6EC9" : "black"}}>양호해요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>입맛이 없어요.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>구내염</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>조기포만감</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>연하곤란/삼킴곤란</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>소화불량   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame169, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>복부 불편감   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body3}>
            <TouchableOpacity onPress={aftereat2}>
              <View style={{...styles.Frame164, backgroundColor: !aftereat ? "#DFDFF3" : "white"}}>
                <Text style={{color: !aftereat ? "#6C6EC9" : "black"}}>잠시 후에 입력할게요.   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
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
    marginTop: 40,
    width: Dimensions.get('window').width,
    height: 70,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowmagin: {
    flex: 1,
    marginLeft: 10,
  },
  Text001: {
    flex: 5,
    fontSize: 20,
  },
  Text002: {
    flex: 1,
    fontSize: 20,
    color: '#051898',
    textAlign: 'right',
    marginRight: 30,
  },
  body3: {
    flexDirection: 'row',
  },
  body4: {
    flexDirection: 'column',
  },
  Rectangle4767: {
    marginTop: 15,
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
  Frame164: {
    width: 180,
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
  },
  Text006: {
    color: "#6f6d7e",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  Text007: {
    color: "#6f6d7e",
    fontSize: 15,
    width: Dimensions.get('window').width/4.8,
    left: 30,
    marginTop: 10,
  },
  bar: {
    width: Dimensions.get('window').width/3,
    left: 40,
    top: 8,
    marginTop: 10,
  },
  circlebar: {
    left: 10,
    top: 15,
  }

});