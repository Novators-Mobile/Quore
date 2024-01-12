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

const Container = styled.View`
  margin-top: 150px;
  justify-content: center;
  align-items: center;
`;

export const SignInScreen = ({ onLayoutRootView, touchProps, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container onLayout={onLayoutRootView}>
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
      <ButtonContainer>
        <Button {...touchProps}>
          <Txt>Начать общение</Txt>
        </Button>

        <LinkBtn
          {...touchProps}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Link>Нужно создать новый аккаунт?</Link>
        </LinkBtn>
      </ButtonContainer>
    </Container>
  );
};
