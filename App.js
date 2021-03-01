import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Styles from './style'
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text>React Barcode Scan</Text>
      <Text>SCAN ME!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


