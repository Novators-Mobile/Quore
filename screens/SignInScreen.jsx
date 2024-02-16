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
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Container = styled.View`
  margin-top: 150px;
  justify-content: center;
  align-items: center;
`;

export const SignInScreen = ({ onLayoutRootView, touchProps, navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { login } = useContext(AuthContext);

  return (
    <Container onLayout={onLayoutRootView}>
      <Title>Войти в аккаунт</Title>
      {/* <Title>{val}</Title> */}
      <FullForm>
        <Form>
          <SvgXml xml={emailXml} width="20px" height="20px" />
          <Input
            placeholder="Ваша почта"
            placeholderTextColor="#ffffff"
            onChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            value={form.email}
            keyboardType="email-address"
          />
        </Form>
        <Form>
          <SvgXml xml={passwordXml} width="20px" height="20px" />
          <Input
            placeholder="Введите пароль"
            placeholderTextColor="#ffffff"
            onChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            value={form.password}
            keyboardType="visible-password"
          />
        </Form>
      </FullForm>
      <ButtonContainer>
        <Button
          {...touchProps}
          onPress={() => {
            login(form);
          }}
        >
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
