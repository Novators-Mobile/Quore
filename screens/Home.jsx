import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Txt } from './SignUpScreen';

export const Home = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [isPress, setIsPress] = useState(false);

  const [isClick, setIsClick] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#D9D9D9', // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.button,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {}, // <-- "onPress" is apparently required
  };

  const clickProps = {
    activeOpacity: 1,
    underlayColor: '#D9D9D9',
    style: isClick ? { color: '#313131' } : {},
    onHideUnderlay: () => setIsClick(false),
    onShowUnderlay: () => setIsClick(true),
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
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
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.mainTitle}>
        <Text style={styles.title}>QUORE</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.text}>
          Создайте новый аккаунт или войдите, чтобы продолжить.
        </Text>

        <TouchableHighlight
          {...clickProps}
          style={styles.button}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Txt {...clickProps}>Создать аккаунт</Txt>
        </TouchableHighlight>

        <TouchableHighlight
          {...clickProps}
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Txt {...clickProps}>Войти</Txt>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 30,
    alignItems: 'center',
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
    fontFamily: 'ubuntu-regular',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text: {
    width: 234,
    fontSize: 15,
    color: '#ffffff',
  },
  mainTitle: {
    marginBottom: 200,
  },
});
