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

export const NotificationScreen = ({
  onLayoutRootView,
  touchProps,
  navigation,
}) => {
  return (
    <Container onLayout={onLayoutRootView}>
      {/* <Title>Войти в аккаунт</Title> */}
      {/* <Title>{val}</Title> */}
      <View style={{ alignItems: 'center', gap: 15, marginBottom: 100 }}>
        <Image source={require('../assets/icons/Notification.png')} />
        <Title style={{ marginBottom: 0 }}>Узнавайте о событиях</Title>
        <Text style={{ color: '#C3C0C0', width: 250, textAlign: 'center' }}>
          Включите уведомления о новых сообщениях и отметках “нравится”
        </Text>
      </View>
      <ButtonContainer>
        <Button
          style={{ backgroundColor: 'white', width: 300 }}
          //   onPress={() => {
          //     login(form);
          //   }}
        >
          <Txt style={{ color: 'black', fontSize: 20 }}>
            Включить уведомления
          </Txt>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
