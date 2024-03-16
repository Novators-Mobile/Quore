import React, { useState } from 'react';
import {
  Title,
  Txt,
  Link,
  Input,
  Form,
  FullForm,
  emailXml,
  passwordXml,
  Button,
  LinkBtn,
  ButtonContainer,
} from './SignUpScreen';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import { Image, Text, View } from 'react-native';

const Container = styled.View`
  margin-top: 150px;
  justify-content: center;
  align-items: center;
`;

export const EmailSend = ({ onLayoutRootView, touchProps, navigation }) => {
  return (
    <Container onLayout={onLayoutRootView}>
      {/* <Title>Войти в аккаунт</Title> */}
      {/* <Title>{val}</Title> */}
      <View style={{ alignItems: 'center', gap: 15, marginBottom: 100 }}>
        <Image source={require('../assets/icons/SendEmail.png')} />
        <Title style={{ marginBottom: 0 }}>Подтверждение почты</Title>
        <Text style={{ color: '#C3C0C0', width: 250, textAlign: 'center' }}>
          Мы отправим на почту moyapochta@gmail.com письмо для подтверждения
          регистрации
        </Text>
      </View>
      <ButtonContainer>
        <Button
          style={{ backgroundColor: 'white', width: 250 }}
          //   onPress={() => {
          //     login(form);
          //   }}
          onPress={() => navigation.navigate('GeoConfirm')}
        >
          <Txt style={{ color: 'black', fontSize: 20 }}>Отправить письмо</Txt>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
