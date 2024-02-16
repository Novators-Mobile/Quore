import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  font-family: ubuntu-regular;
  margin-bottom: 100px;
`;

export const Txt = styled.Text`
  text-align: center;
  color: #ffffff;
`;

export const Link = styled.Text`
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  width: 378px;
  color: #ffffff;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  width: 378px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 25px;
  color: #ffffff;
  padding: 14px;
  margin-bottom: 12px;
  position: relative;
`;

const ButtonContainer = styled.View`
  gap: 20px;
  margin-top: 135px;
  align-items: center;
`;

export const FullForm = styled.View`
  margin-top: 30px;
`;

export const Img = styled.Image`
  margin-right: 15px;
  height: 15px;
  width: 15px;
  resize-mode: stretch;
  align-items: center;
`;

export const SignUpScreen = ({ onLayoutRootView, touchProps, navigation }) => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Title>Создание аккаунта</Title>
      <FullForm>
        <Form>
          <Img
            source={{
              uri: 'https://i.ibb.co/RNShL8t/User.png',
            }}
          />
          <Input
            placeholder="Имя"
            placeholderTextColor="#ffffff"
            onChangeText={setName}
            value={name}
            keyboardType="ascii-capable"
          />
        </Form>
        <Form>
          <Img
            source={{
              uri: 'https://i.ibb.co/RNShL8t/User.png',
            }}
          />
          <Input
            placeholder="Фамилия"
            placeholderTextColor="#ffffff"
            onChangeText={setSurName}
            value={surName}
            keyboardType="ascii-capable"
          />
        </Form>
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
            placeholder="Придумайте пароль"
            placeholderTextColor="#ffffff"
            onChangeText={setPassword}
            value={password}
            keyboardType="visible-password"
          />
        </Form>
      </FullForm>
      <ButtonContainer>
        <TouchableHighlight {...touchProps} style={styles.button}>
          <Txt>Зарегистрироваться</Txt>
        </TouchableHighlight>

        <TouchableHighlight
          {...touchProps}
          style={styles.linkButton}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Link>У Вас уже есть аккаунт?</Link>
        </TouchableHighlight>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    justifyContent: 'center',
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
