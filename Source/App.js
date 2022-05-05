import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//각 화면 파일 불러오기
import ScanFood from './Components/ScanFood';
import ScanResults from './Components/ScanResult';


const Stack = createStackNavigator();

//각 화면 구성
export default function App() {  //initialRouteName 나중에 main으로 바꿔줘야함!!!!!!
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScanFood'>
        
        <Stack.Screen name='ScanFood' component={ScanFood} options={{headerShown:false}}/>
        <Stack.Screen name='ScanResults' component={ScanResults} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
