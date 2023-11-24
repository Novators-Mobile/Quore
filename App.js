import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';

import * as Font from 'expo-font';

import { Navigation } from './screens/Navigation';
import { Recommendations } from './screens/Recommendations';
import { Chats } from './screens/Chats';
import { Events } from './screens/Events';
import { Likes } from './screens/Likes';
import { Notifications } from './screens/Notifications';
import { Settings } from './screens/Settings';
import { Profile } from './screens/Profile';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
          // 'source-serif-medium-italic': require('./assets/fonts/SourceSerif4-MediumItalic.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } //finally {
      //   // Tell the application to render
      //   setAppIsReady(true);
      // }
    }

    prepare();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 100,
                  width: '100%',
                  justifyContent: 'center',
                  paddingLeft: 23,
                  borderBottomColor: '#f4f4f4',
                  borderBottomWidth: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 6,
                    // fontFamily: 'source-serif-medium-italic',
                    color: '#fff',
                  }}
                >
                  QUORE
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#232325',
            width: 250,
          },

          drawerLabelStyle: {
            color: '#6E6E6E',
          },
          drawerActiveTintColor: '#fff',
        }}
        initialRouteName="Recommendations"
      >
        <Drawer.Screen
          name="Recommendations"
          options={{
            headerShown: false,
            drawerLabel: 'Рекомендации',
            title: 'Рекомендации',
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
          }}
          component={Recommendations}
        />
        <Drawer.Screen
          name="Chats"
          options={{
            drawerLabel: 'Чаты',
            title: 'Чаты',
            drawerIcon: () => (
              <MaterialIcons name="chat" size={20} color="#808080" />
            ),
          }}
          component={Chats}
        />
        <Drawer.Screen
          name="Likes"
          options={{
            drawerLabel: 'Лайки',
            title: 'Лайки',
            drawerIcon: () => (
              <FontAwesome name="heart" size={20} color="#808080" />
            ),
          }}
          component={Likes}
        />
        <Drawer.Screen
          name="Events"
          options={{
            drawerLabel: 'Мои мероприятия',
            title: 'Мои мероприятия',
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="calendar"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Events}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            headerShown: false,
            drawerLabel: 'Профиль',
            title: 'Профиль',
            drawerIcon: () => (
              <FontAwesome name="user" size={20} color="#808080" />
            ),
          }}
          component={Profile}
        />
        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: 'Уведомления',
            title: 'Уведомления',
            drawerIcon: () => (
              <MaterialIcons name="notifications" size={20} color="#808080" />
            ),
          }}
          component={Notifications}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: 'Настройки',
            title: 'Настройки',
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            ),
          }}
          component={Settings}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
