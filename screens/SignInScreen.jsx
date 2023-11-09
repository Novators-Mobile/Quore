import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  font-family: ubuntu-regular;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  width: 378px;
  color: #ffffff;
`;

const Form = styled.View`
  flex-direction: row;
  align-items: center;
  width: 378px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 25px;
  color: #ffffff;
  padding: 14px;
  margin-bottom: 16px;
  position: relative;
`;

const ButtonContainer = styled.View`
  gap: 20px;
  margin-top: 190px;
  align-items: center;
`;

const FullForm = styled.View`
  margin-top: 130px;
`;

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
    <View
      onLayout={onLayoutRootView}
      style={{ marginTop: 150, justifyContent: 'center', alignItems: 'center' }}
    >
      <Title>Войти в аккаунт</Title>
      <FullForm>
        <Form>
          <Image
            source={{
              uri: 'https://i.ibb.co/jynh385/Vector.png',
            }}
            style={{
              padding: 10,
              marginRight: 15,
              height: 25,
              width: 25,
              resizeMode: 'stretch',
              alignItems: 'center',
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
          <Image
            source={{
              uri: 'https://i.ibb.co/mRw4zj4/Key.png',
            }}
            style={{
              marginRight: 15,
              height: 15,
              width: 25,
              resizeMode: 'stretch',
              alignItems: 'center',
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
      <ButtonContainer>
        <TouchableHighlight
          {...touchProps}
          style={{
            fontSize: 15,
            color: '#ffffff',
            backgroundColor: '#DEDED61A',
            width: 378,
            borderRadius: 28,
            paddingBottom: 12,
            paddingTop: 12,
            borderWidth: 4,
            borderColor: '#313131',
          }}
        >
          <Text style={{ textAlign: 'center', color: '#ffffff' }}>
            Начать общение
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          {...touchProps}
          style={{
            fontSize: 15,
            color: '#ffffff',
            width: 378,
            paddingBottom: 12,
            paddingTop: 12,
          }}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text
            style={{ textAlign: 'center', color: '#ffffff', marginTop: 20 }}
          >
            Нужно создать новый аккаунт?
          </Text>
        </TouchableHighlight>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    color: '#ffffff',
    backgroundColor: '#313131',
    width: 306,
    borderRadius: 28,
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
  title: {
    color: '#ffffff',
    fontFamily: 'ubuntu-regular',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
