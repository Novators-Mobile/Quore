import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const userXml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.5 15.38 14.93 16.28C13.5294 17.396 11.7909 18.0026 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.57618 13.4446 1.99967 11.7467 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.5 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.60218 9 9.22064 8.84196 8.93934 8.56066C8.65804 8.27936 8.5 7.89782 8.5 7.5C8.5 7.10218 8.65804 6.72064 8.93934 6.43934C9.22064 6.15804 9.60218 6 10 6C10.3978 6 10.7794 6.15804 11.0607 6.43934C11.342 6.72064 11.5 7.10218 11.5 7.5C11.5 7.89782 11.342 8.27936 11.0607 8.56066C10.7794 8.84196 10.3978 9 10 9Z" fill="white"/>
</svg>`;

export const emailXml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M13.3219 11.0397C13.3219 11.8282 13.5459 12.1427 14.1319 12.1427C15.4378 12.1427 16.2694 10.4765 16.2694 7.70557C16.2694 3.47027 13.1869 1.44274 9.33844 1.44274C5.37938 1.44274 1.77844 4.10106 1.77844 9.12484C1.77844 13.9233 4.92844 16.5366 9.76594 16.5366C11.4084 16.5366 12.5109 16.3564 14.1975 15.7932L14.5594 17.3016C12.8944 17.8432 11.115 18 9.74344 18C3.39844 18 0 14.5081 0 9.1239C0 3.69462 3.93844 0 9.36094 0C15.0084 0 18 3.37922 18 7.52441C18 11.0388 16.8984 13.7196 13.4334 13.7196C11.8575 13.7196 10.8234 13.0889 10.6884 11.6912C10.2834 13.2456 9.20344 13.7196 7.74 13.7196C5.7825 13.7196 4.14 12.2093 4.14 9.16896C4.14 6.10513 5.58094 4.21277 8.16844 4.21277C9.54094 4.21277 10.3959 4.75344 10.7766 5.60951L11.43 4.41552H13.32V11.0397H13.3219ZM10.5553 8.06602C10.5553 6.82791 9.63188 6.30882 8.86688 6.30882C8.03438 6.30882 7.11281 6.98373 7.11281 8.96715C7.11281 10.5441 7.81031 11.4227 8.86688 11.4227C9.60938 11.4227 10.5553 10.9496 10.5553 9.64299V8.06602Z" fill="white"/>
</svg>`;

export const passwordXml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
<path d="M17.5 11.1429H12.5V8.57143H11.0833C10.1667 10.6286 8.08333 12 5.83333 12C2.58333 12 0 9.34286 0 6C0 2.65714 2.58333 0 5.83333 0C8.08333 0 10.1667 1.37143 11.0833 3.42857H20V8.57143H17.5V11.1429ZM14.1667 9.42857H15.8333V6.85714H18.3333V5.14286H9.91667L9.75 4.54286C9.16667 2.82857 7.58333 1.71429 5.83333 1.71429C3.5 1.71429 1.66667 3.6 1.66667 6C1.66667 8.4 3.5 10.2857 5.83333 10.2857C7.58333 10.2857 9.16667 9.17143 9.75 7.45714L9.91667 6.85714H14.1667V9.42857ZM5.83333 8.57143C4.41667 8.57143 3.33333 7.45714 3.33333 6C3.33333 4.54286 4.41667 3.42857 5.83333 3.42857C7.25 3.42857 8.33333 4.54286 8.33333 6C8.33333 7.45714 7.25 8.57143 5.83333 8.57143ZM5.83333 5.14286C5.33333 5.14286 5 5.48571 5 6C5 6.51429 5.33333 6.85714 5.83333 6.85714C6.33333 6.85714 6.66667 6.51429 6.66667 6C6.66667 5.48571 6.33333 5.14286 5.83333 5.14286Z" fill="white"/>
</svg>`;

const Container = styled.View`
  margin-top: 120px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableHighlight`
  font-size: 15px;
  color: #ffffff;
  background-color: #deded61a;
  width: 378px;
  border-radius: 28px;
  padding-bottom: 12px;
  padding-top: 12px;
  border-width: 4px;
  border-color: #313131;
`;

export const LinkBtn = styled.TouchableHighlight`
  font-size: 15px;
  color: #ffffff;
  width: 378px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

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
  gap: 14px;
`;

export const ButtonContainer = styled.View`
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
  // const [email, setEmail] = useState('bebra@gmail.com');
  // const [password, setPassword] = useState('123qwe123qwe');
  const [form, setForm] = useState({
    profile: {
      name: 'bebrik1234',
      birth: '1997-10-10',
      sex: 'female',
    },
    auth: {
      email: '',
      password: '',
    },
  });

  const { register } = useContext(AuthContext);

  return (
    <Container onLayout={onLayoutRootView}>
      <Title>Создание аккаунта</Title>
      <FullForm>
        <Form>
          <SvgXml xml={emailXml} width="20px" height="20px" />
          <Input
            placeholder="Ваша почта"
            placeholderTextColor="#ffffff"
            value={form.auth.email}
            onChangeText={(e) => {
              setForm({ ...form, auth: { ...form.auth, email: e } });
            }}
            keyboardType="email-address"
          />
        </Form>
        <Form>
          <SvgXml xml={passwordXml} width="20px" height="20px" />
          <Input
            placeholder="Придумайте пароль"
            placeholderTextColor="#ffffff"
            value={form.auth.password}
            onChangeText={(e) => {
              setForm({
                ...form,
                auth: { ...form.auth, password: e },
              });
            }}
            secureTextEntry
          />
        </Form>
      </FullForm>
      <ButtonContainer>
        <Button
          {...touchProps}
          // onPress={() => {
          //   register(form);
          // }}
          onPress={() => navigation.navigate('EmailSend')}
        >
          <Txt>Зарегистрироваться</Txt>
        </Button>

        <LinkBtn
          {...touchProps}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Link>У Вас уже есть аккаунт?</Link>
        </LinkBtn>
      </ButtonContainer>
    </Container>
  );
};
