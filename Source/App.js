//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.TopNavigation}>
            <Icon name="arrow-back" size={40} color="black" style={styles.arrowBack}/>
          </View>

          <Text style={styles.CameraView}>Camera View</Text>

          <View style={styles.BottomNavigation}>
            <Text>테스트</Text>
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
    backgroundColor: "red",
    width: Dimensions.get('window').width,
    
    justifyContent: "center",
  },
  arrowBack: {
    marginLeft: 10,
  },

  CameraView: {
    position: 'relative',
    flex: 5,
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  BottomNavigation: {
    position: 'relative',
    flex: 1,
    backgroundColor: "green",
    width: Dimensions.get('window').width,
    bottom: 0,
  }
});
