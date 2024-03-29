import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Txt } from './SignUpScreen';
import styled from 'styled-components/native';

const Info = styled.View`
  width: 100%;
  height: 100%;
`;

const Img = styled.Image`
  position: absolute;
  top: 5%;
  left: 35%;
  width: 230px;
  height: 290px;
`;

export function Match({ navigation }) {
  return (
    <View style={styles.container}>
      <Info style={{ flex: 5, alignItems: 'center' }}>
        <ImageBackground
          source={require('../assets/icons/decor.png')}
          style={{
            height: '85%',
            width: '100%',
            paddingTop: 40,
          }}
        >
          <Img source={require('../assets/icons/match2.png')} />
          <Image
            style={{
              position: 'absolute',
              left: '10%',
              top: '20%',
              width: 230,
              height: 290,
            }}
            source={require('../assets/icons/match.png')}
          />
          <Image
            style={{
              position: 'absolute',
              left: '23%',
              top: '67%',
            }}
            source={require('../assets/icons/like1.png')}
          />
          <Image
            style={{
              position: 'absolute',
              left: '80%',
              top: '11%',
            }}
            source={require('../assets/icons/like2.png')}
          />
        </ImageBackground>

        <View style={styles.mainTitle}>
          <Image
            style={{ width: '100%' }}
            source={require('../assets/icons/hands.png')}
          />

          <Text style={{ fontSize: 40, color: 'white' }}>Это взаимно!</Text>
          <Text style={{ color: '#C1C1C1', fontSize: 15 }}>
            Начните общение с [Имя профиля] уже сейчас
          </Text>
        </View>
      </Info>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[
            styles.button,
            {
              backgroundColor: 'white',
            },
          ]}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Txt style={{ color: '#232325', fontSize: 15 }}>Открыть чат</Txt>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Txt>Посмотреть мероприятия</Txt>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 20,
    alignItems: 'center',
    flex: 1,
    marginBottom: 100,
  },
  button: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    backgroundColor: '#313131',
    justifyContent: 'center',
    width: 286,
    height: 70,
    borderRadius: 50,
    paddingBottom: 12,
    paddingTop: 12,
  },
  btnPress: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    color: '#000000',
    backgroundColor: '#313131',
    width: 306,
    borderRadius: 28,
    paddingBottom: 12,
    paddingTop: 12,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'source-serif-italic',
    textAlign: 'center',
    fontSize: 80,
  },
  text: {
    width: 240,
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  mainTitle: {
    position: 'absolute',
    width: '100%',
    top: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
});
