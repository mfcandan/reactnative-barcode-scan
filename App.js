import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './style'
import { TouchableOpacity, Text, View, } from 'react-native';

export default function App() {
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
    </>
  );
}


