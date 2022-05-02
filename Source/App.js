//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.TopNavigation}>
            <Icon name="arrow-back" size={40} color="black" style={styles.arrowBack}/>
            <Text>WILL Recycle Component</Text>
          </View>

          <View style={styles.CameraView}>
            <View style={styles.CameraViewDialog}>
              <Text style={{fontSize: 24, marginTop: 18, color:'white', fontWeight: 'bold'}}>AI 카메라가 음식을 인식 중입니다...</Text>
              <Text style={{fontSize: 19, marginTop: 30, color:'white'}}>음식을 정중앙에 맞추어 촬영해보세요</Text>
              <Text style={{fontSize: 19, marginTop: 5, color:'white'}}>화면 밖으로 나가지 않았다면, 완벽해요!</Text>
              {/* <View style={styles.CameraFocus}></View> */}
            </View>

          </View>

          <View style={styles.BottomNavigation}>

          <View style={styles.GalleryButton}></View>
            <View style={styles.SnapshotButton}>
              <View style={styles.SnapshotButtonWhite}>
                {/* <Icon name="refresh" size={36} color="#0d1a8a"/> */}
              </View>
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
    backgroundColor: "white",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  TopNavigation: {
    position: 'relative',
    height: 70,
    backgroundColor: "white",
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    
    justifyContent: "center",
  },
  arrowBack: {
    marginLeft: 10,
  },

  CameraView: {
    position: 'relative',
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  CameraViewDialog: {
    marginTop: 25,
    width: Dimensions.get('window').width*0.91,
    height: 150,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
  },

  CameraFocus: {  //여기는 카메라 기능 구현 후, 나중에 구현할 것
    position: 'absolute',
    width: 44.38,
    height: 44.38,
    left: 270,
    top: 280,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 16,
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
    borderRadius: 50,
    backgroundColor: "green",
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
  }
});
