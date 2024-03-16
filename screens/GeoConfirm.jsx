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

export const GeoConfirm = ({ onLayoutRootView, touchProps, navigation }) => {
  return (
    <Container onLayout={onLayoutRootView}>
      {/* <Title>Войти в аккаунт</Title> */}
      {/* <Title>{val}</Title> */}
      <View style={{ alignItems: 'center', gap: 15, marginBottom: 100 }}>
        <Image source={require('../assets/icons/Geoloc.png')} />
        <Title style={{ marginBottom: 0 }}>Сделайте поиск удобнее</Title>
        <Text style={{ color: '#C3C0C0', width: 300, textAlign: 'center' }}>
          Разрешите доступ к вашей геолокации для повышения качества
          рекомендаций
        </Text>
      </View>
      <ButtonContainer>
        <Button
          style={{ backgroundColor: 'white', width: 350 }}
          //   onPress={() => {
          //     login(form);
          //   }}
          onPress={() => navigation.navigate('NotificationScreen')}
        >
          <Txt style={{ color: 'black', fontSize: 20 }}>
            Разрешить доступ к геолокации
          </Txt>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
