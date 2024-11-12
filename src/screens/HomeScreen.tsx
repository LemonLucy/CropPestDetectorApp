// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage Crops</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pest Status</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Robot Control</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    width: 150, // 정사각형 모양
    height: 150,
    borderRadius: 20, // 모서리 둥글게
    backgroundColor: '#5A9', // 원하는 색상으로 변경
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 5, // 그림자 효과 (Android)
    shadowColor: '#000', // 그림자 색상 (iOS)
    shadowOffset: { width: 0, height: 5 }, // 그림자 오프셋 (iOS)
    shadowOpacity: 0.2, // 그림자 불투명도 (iOS)
    shadowRadius: 5, // 그림자 반경 (iOS)
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;