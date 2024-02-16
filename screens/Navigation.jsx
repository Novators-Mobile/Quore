import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { SignUpScreen } from './SignUpScreen';
import { SignInScreen } from './SignInScreen';
import React from 'react';
import { StatusBar } from 'react-native';
import { ProfileEdit } from './ProfileEdit';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Recommendations } from './Recommendations';
import SideBar from '../components/SideBar';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: '#232325',
  },
};

export const Navigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        {userInfo.access_token ? (
          <Stack.Screen name="SideBar" component={SideBar} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
