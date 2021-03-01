import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import styles from './style'
import { TouchableOpacity, Text, View, } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  onPress = () => {
    setCount(count+1);
  };

  return (
    <>
      <View style={styles.containerWelcome}>
        <Text style={styles.buttonText}>Welcome to QR Signature</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
        ><Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {onPress()}}
        >
          <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


