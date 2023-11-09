import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { SignUpScreen } from './SignUpScreen';
import { SignInScreen } from './SignInScreen';
import React from 'react';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: '#232325',
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
