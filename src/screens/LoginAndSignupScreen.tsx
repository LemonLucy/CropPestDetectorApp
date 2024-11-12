// src/screens/LoginAndSignupScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigation';

const LoginAndSignupScreen: React.FC = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(true);
  const translateX = useSharedValue(0);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const toggleFocus = (focusOnLogin: boolean) => {
    setIsLoginFocused(focusOnLogin);
    translateX.value = withTiming(focusOnLogin ? 0 : -320, { duration: 500 });
  };

  const animatedLoginStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: withTiming(isLoginFocused ? 1 : 0.5, { duration: 500 }),
    zIndex: isLoginFocused ? 1 : 0,
  }));

  const animatedSignupStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value + 320 }],
    opacity: withTiming(isLoginFocused ? 0.5 : 1, { duration: 500 }),
    zIndex: isLoginFocused ? 0 : 1,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.formContainer, animatedLoginStyle]}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Sign In" onPress={() => {console.log('Signing in'); navigation.navigate('Home');}} color="#4CAF50" />
        <Pressable onPress={() => {
          toggleFocus(false);
        }}>
          <Text style={!isLoginFocused ? styles.activeButton : styles.inactiveButton}>Don't have an account? Sign Up</Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={[styles.formContainer, animatedSignupStyle]}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
        <Button title="Sign Up" onPress={() => console.log('Signing up')} color="#4CAF50" />
        <Pressable onPress={() => toggleFocus(true)}>
          <Text style={isLoginFocused ? styles.activeButton : styles.inactiveButton}>Already have an account? Sign In</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8f5 e9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  activeButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  inactiveButton: {
    fontSize: 16,
    color: '#81C784',
  },
  formContainer: {
    position: 'absolute',
    width: 320,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    borderColor: '#81C784',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
  },
  input: {
    height: 40,
    borderColor: '#66BB6A',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f1f8e9',
  },
});

export default LoginAndSignupScreen;
