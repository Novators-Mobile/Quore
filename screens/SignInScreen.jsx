import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Title, Txt, Link, Input, Form, FullForm, Img } from './SignUpScreen';

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [appIsReady, setAppIsReady] = useState(false);

  const [isPress, setIsPress] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'grey', // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {}, // <-- "onPress" is apparently required
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
      <Title>Войти в аккаунт</Title>
      <FullForm>
        <Form>
          <Img
            source={{
              uri: 'https://i.ibb.co/jynh385/Vector.png',
            }}
          />
          <Input
            placeholder="Ваша почта"
            placeholderTextColor="#ffffff"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </Form>
        <Form>
          <Img
            source={{
              uri: 'https://i.ibb.co/mRw4zj4/Key.png',
            }}
          />
          <Input
            placeholder="Введите пароль"
            placeholderTextColor="#ffffff"
            onChangeText={setPassword}
            value={password}
            keyboardType="visible-password"
          />
        </Form>
      </FullForm>
      <View style={styles.buttonContainer}>
        <TouchableHighlight {...touchProps} style={styles.button}>
          <Txt>Начать общение</Txt>
        </TouchableHighlight>

        <TouchableHighlight
          {...touchProps}
          style={styles.linkButton}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Link>Нужно создать новый аккаунт?</Link>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    gap: 20,
    marginTop: 235,
    alignItems: 'center',
  },
  button: {
    fontSize: 15,
    color: '#ffffff',
    backgroundColor: '#DEDED61A',
    width: 378,
    borderRadius: 28,
    paddingBottom: 12,
    paddingTop: 12,
    borderWidth: 4,
    borderColor: '#313131',
  },
  linkButton: {
    fontSize: 15,
    color: '#ffffff',
    width: 378,
    paddingBottom: 12,
    paddingTop: 12,
  },
  btnNormal: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
});
