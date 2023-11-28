import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import {
  Title,
  Txt,
  Link,
  Input,
  Form,
  FullForm,
  emailXml,
  passwordXml,
} from './SignUpScreen';
import { SvgXml } from 'react-native-svg';

export const SignInScreen = ({ onLayoutRootView, touchProps, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Title>Войти в аккаунт</Title>
      <FullForm>
        <Form>
          <SvgXml xml={emailXml} width="20px" height="20px" />
          <Input
            placeholder="Ваша почта"
            placeholderTextColor="#ffffff"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </Form>
        <Form>
          <SvgXml xml={passwordXml} width="20px" height="20px" />
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
