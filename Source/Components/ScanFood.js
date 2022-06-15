import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Camera } from 'expo-camera';

const dialogFontSize = Dimensions.get('window').height*0.03;
const dialogFontSize_width = Dimensions.get('window').width*0.03;

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);   //카메라 권한
  const [type, setType] = useState(Camera.Constants.Type.back); //카메라 방향, 지금은 미사용
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setHasPermission(null);
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    });
  },[]);

  const snap = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      navigation.navigate('ScanResults',{image:`data:image/jpeg;base64,${data.base64}`});
    }
  };

  

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.TopNavigation}>
          <View style={styles.Frame1691}>
            <Icon name="arrow-back" size={40} color="black" style={styles.arrowBack} onPress={()=>navigation.goBack()}/>
          </View>
            <Text style={styles.Top_Text}>식사 촬영</Text>
          </View>

          <View style={styles.CameraView}>
            <View style={styles.CameraViewDialog}>
              <Text style={{fontSize: dialogFontSize-1, marginTop: dialogFontSize-5, color:'white', fontWeight: 'bold'}}>AI 카메라가 음식을 인식 중입니다...</Text>
              <Text style={{fontSize: dialogFontSize-5, marginTop: dialogFontSize-3, color:'white'}}>음식을 정중앙에 맞추어 촬영해보세요</Text>
              <Text style={{fontSize: dialogFontSize-5, marginTop: 5, color:'white'}}>화면 밖으로 나가지 않았다면, 완벽해요!</Text>
              {/* <View style={styles.CameraFocus}></View> */}
            </View>
            {hasPermission === null ? <Text>카메라 권한을 허용해주세요...</Text> : null}
            {hasPermission ? 
              <Camera style={ styles.CameraModule } type={type} ref={ref => {setCamera(ref)}}></Camera>
            
            : <Text style={{marginTop: 250}}>카메라 권한이 거부되었습니다...</Text>}

          </View>

          <View style={styles.BottomNavigation}>

            <View style={styles.GalleryButton}>
              <Icon name="insert-photo" size={40} color="black"/>
            </View>
              <View style={styles.SnapshotButton}>
                <TouchableOpacity onPress={() => {snap()}}>
                  <View style={styles.SnapshotButtonWhite} />
                </TouchableOpacity>
              </View>
            <View style={styles.Dummy}></View>
          </View>
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
    height: Dimensions.get('window').height/12,
    backgroundColor: "white",
    width: Dimensions.get('window').width,    
    justifyContent: "center",
    marginTop: Dimensions.get('window').height/22,

  },
  Top_Text:{
    position:"absolute",
    left:55,
    marginRight:5, 
    fontSize: 22,
  },
  arrowBack: {
    marginLeft: 10
  },
  CameraView: {
    position: 'relative',
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  CameraModule: {
    width: Dimensions.get('window').width,
    flex: 5,
  },
  CameraViewDialog: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 15,
    width: Dimensions.get('window').width*0.91,
    height: Dimensions.get('window').height*0.175,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
  },

  CameraFocus: {  //Camera Angle View. 여기는 카메라 기능 구현 후, 나중에 구현할 것
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
    width: 40,
    height: 40,
    left: 15,
  },
  SnapshotButton: {
    width: dialogFontSize_width+68,
    height: dialogFontSize_width+68,
    backgroundColor: '#0d1a8a',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SnapshotButtonWhite: {
    width:dialogFontSize_width+50,
    height:dialogFontSize_width+50,
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