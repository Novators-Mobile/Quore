import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  font-family: ubuntu-regular;
  margin-left: 20px;
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
  margin-bottom: 12px;
  position: relative;
`;

const ButtonContainer = styled.View`
  gap: 20px;
  margin-top: 237px;
  align-items: center;
`;

export const SignUpScreen = ({ func, touchProps }) => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View onLayout={func}>
      <Title>Создание аккаунта</Title>
      <View>
        <Form>
          <Image
            source={{
              uri: 'https://i.ibb.co/RNShL8t/User.png',
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
            placeholder="Имя"
            placeholderTextColor="#ffffff"
            onChangeText={setName}
            value={name}
            keyboardType="ascii-capable"
          />
        </Form>
        <Form>
          <Image
            source={{
              uri: 'https://i.ibb.co/RNShL8t/User.png',
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
            placeholder="Фамилия"
            placeholderTextColor="#ffffff"
            onChangeText={setSurName}
            value={surName}
            keyboardType="ascii-capable"
          />
        </Form>
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
            placeholder="Придумайте пароль"
            placeholderTextColor="#ffffff"
            onChangeText={setPassword}
            value={password}
            keyboardType="visible-password"
          />
        </Form>
      </View>
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
            Зарегистрироваться
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
        >
          <Text
            style={{ textAlign: 'center', color: '#ffffff', marginTop: 20 }}
          >
            У Вас уже есть аккаунт?
          </Text>
        </TouchableHighlight>
      </ButtonContainer>
    </View>
  );
};
