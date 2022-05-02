import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      <View style={styles.Rectangle4730}>
        <AntDesign name="arrowleft" size={42} color="black" style={styles.arrowmagin} />
        <Text style={styles.Text001}>식사 기록</Text>
        <Text style={styles.Text002}>완료</Text>
      </View> 
      <View style={styles.Rectangle4767}>
        <Text style={styles.Text003}>얼마나 드셨나요?</Text>
          <View style={styles.body3}>
            <View style={styles.Frame169}>
              <Text>다 먹었어요.</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>3/4 먹었어요.</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>1/2 먹었어요.</Text>
            </View>
          </View>
          <View style={styles.body3}>
            <View style={styles.Frame169}>
              <Text>1/4 먹었어요.</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>거의 남겼어요.</Text>
            </View>
          </View>
          <Text style={styles.Text003}>식후 상태는 어떠신가요?(중복선택가능)</Text>
          <View style={styles.body3}>
            <View style={styles.Frame169}>
              <Text>양호해요.</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>입맛이없어요.</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>구내염</Text>
            </View>
          </View>
          <View style={styles.body3}>
            <View style={styles.Frame169}>
              <Text>조기포만감</Text>
            </View>
            <View style={styles.Frame169}>
              <Text>연하곤란/삼킴곤란</Text>
            </View>
          </View>
          <View style={styles.body3}>
            <View style={styles.Frame169}>
              <Text>소화불량   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
            </View>
            <View style={styles.Frame169}>
              <Text>복부 불편감   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
            </View>
          </View>
          <View style={styles.body3}>
            <View style={styles.Frame164}>
              <Text>잠시 후에 입력할게요.   </Text><MaterialIcons name="keyboard-arrow-right" size={10} color="black" />
            </View>
          </View>
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
  Rectangle4767: {
    marginTop: 40,
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
  firstline: {

  },

});
