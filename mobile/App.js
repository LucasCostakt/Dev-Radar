import React from 'react';
import Routes from './src/routes';
import {StatusBar, YellowBox,TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" backgroundColor = "#7D40E7"></StatusBar>
      <Routes/>
    </>
  );
}
const styles = StyleSheet.create({
  loadButton:{
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15 }
})


