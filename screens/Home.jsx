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
  padding-bottom: 16px;
  width: 100%;
  height: 100%;
`;

export const Home = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [isPress, setIsPress] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#D9D9D9',
    style: isPress ? styles.btnPress : styles.button,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
          'source-serif-italic': require('../assets/fonts/SourceSerif4-Italic.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Info style={{ flex: 5, alignItems: 'center', marginTop: '10%' }}>
        <Image source={require('../assets/icons/background.png')} />
        <View style={styles.mainTitle}>
          <Text style={styles.title}>QUORE</Text>

          <Text style={styles.text}>
            Создайте новый аккаунт или войдите, чтобы продолжить.
          </Text>
        </View>
      </Info>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          {...touchProps}
          style={styles.button}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Txt>Создать аккаунт</Txt>
        </TouchableHighlight>

        <TouchableHighlight
          {...touchProps}
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Txt>Войти</Txt>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 20,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    backgroundColor: '#313131',
    width: 306,
    borderRadius: 28,
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
    height: '50%',
    top: '35%',
    justifyContent: 'space-between',
  },
});
