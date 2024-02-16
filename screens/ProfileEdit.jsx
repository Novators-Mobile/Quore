import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Svg, { SvgXml } from 'react-native-svg';

import { RadioButton } from 'react-native-paper';

import { FullForm, Form, Input, AboutMe } from './Profile';

import { Title } from './Likes';

import { styled } from 'styled-components';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
</svg>`;

export const home = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 2.23145C9.23857 2.23145 8.49174 2.44007 7.84058 2.83466L3.67392 5.35966C3.0612 5.73095 2.55456 6.25397 2.20295 6.87819C1.85133 7.50241 1.66661 8.20675 1.66663 8.92318V14.1665C1.66663 15.2716 2.10561 16.3314 2.88701 17.1128C3.66842 17.8942 4.72822 18.3332 5.83329 18.3332H14.1666C15.2717 18.3332 16.3315 17.8942 17.1129 17.1128C17.8943 16.3314 18.3333 15.2716 18.3333 14.1665V8.92235C18.3331 8.20608 18.1483 7.50176 17.7967 6.87774C17.4451 6.25372 16.9386 5.73087 16.326 5.35966L12.1593 2.83466C11.5082 2.44008 10.7613 2.23145 9.99996 2.23145ZM8.70434 4.26003C9.09504 4.02328 9.54313 3.89811 9.99996 3.89811C10.4568 3.89811 10.9049 4.02328 11.2956 4.26003L15.4622 6.78503C15.8298 7.00776 16.1337 7.32147 16.3447 7.69589C16.5556 8.07025 16.6665 8.49266 16.6666 8.92235V14.1665C16.6666 14.8296 16.4032 15.4654 15.9344 15.9343C15.4655 16.4031 14.8297 16.6665 14.1666 16.6665H13.3333V14.1665C13.3333 13.2825 12.9821 12.4346 12.357 11.8095C11.7319 11.1844 10.884 10.8332 9.99996 10.8332C9.1159 10.8332 8.26806 11.1844 7.64294 11.8095C7.01781 12.4346 6.66663 13.2825 6.66663 14.1665V16.6665H5.83329C5.17025 16.6665 4.53437 16.4031 4.06553 15.9343C3.59668 15.4654 3.33329 14.8296 3.33329 14.1665V8.92318C3.33328 8.49332 3.44412 8.07069 3.65509 7.69616C3.86605 7.32163 4.17003 7.00782 4.53767 6.78504L8.70434 4.26003ZM11.1785 12.988C11.491 13.3006 11.6666 13.7245 11.6666 14.1665V16.6665H8.33329V14.1665C8.33329 13.7245 8.50889 13.3006 8.82145 12.988C9.13401 12.6754 9.55793 12.4999 9.99996 12.4999C10.442 12.4999 10.8659 12.6754 11.1785 12.988Z" fill="#6F6F6F"/>
</svg>`;

const calendar = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.6 1.04762C6.6 0.469035 6.10751 0 5.5 0C4.89249 0 4.4 0.469035 4.4 1.04762V2.09524H3.3C2.42479 2.09524 1.58542 2.42636 0.966548 3.01576C0.347677 3.60516 0 4.40456 0 5.2381V18.8571C0 19.6907 0.347678 20.4901 0.966548 21.0795C1.58542 21.6689 2.42479 22 3.3 22H18.7C19.5752 22 20.4146 21.6689 21.0335 21.0795C21.6523 20.4901 22 19.6907 22 18.8571V5.2381C22 4.40456 21.6523 3.60516 21.0335 3.01576C20.4146 2.42636 19.5752 2.09524 18.7 2.09524H18.15C17.5425 2.09524 17.05 2.56427 17.05 3.14286C17.05 3.72144 17.5425 4.19048 18.15 4.19048H18.7C18.9917 4.19048 19.2715 4.30085 19.4778 4.49732C19.6841 4.69378 19.8 4.96025 19.8 5.2381V8.38095H2.2V5.2381C2.2 4.96025 2.31589 4.69378 2.52218 4.49732C2.72847 4.30085 3.00826 4.19048 3.3 4.19048H4.4V5.2381C4.4 5.81668 4.89249 6.28571 5.5 6.28571C6.10751 6.28571 6.6 5.81668 6.6 5.2381V1.04762ZM2.52218 19.5979C2.31589 19.4015 2.2 19.135 2.2 18.8571V10.4762H19.8V18.8571C19.8 19.135 19.6841 19.4015 19.4778 19.5979C19.2715 19.7944 18.9917 19.9048 18.7 19.9048H3.3C3.00826 19.9048 2.72847 19.7944 2.52218 19.5979Z" fill="white"/>
<path d="M15.4 1.04762C15.4 0.469035 14.9075 0 14.3 0C13.6925 0 13.2 0.469035 13.2 1.04762V2.09524H9.35C8.74249 2.09524 8.25 2.56427 8.25 3.14286C8.25 3.72144 8.74249 4.19048 9.35 4.19048H13.2V5.2381C13.2 5.81668 13.6925 6.28571 14.3 6.28571C14.9075 6.28571 15.4 5.81668 15.4 5.2381V1.04762Z" fill="white"/>
</svg>`;

const Button = styled.Pressable`
  background-color: #6f6f6f;
  margin-top: 40px;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;

const Header = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`;

const Main = styled.View`
  width: 100%;
  height: 55%;
  align-items: center;
  justify-content: space-between;
`;

const Sample = styled.Image`
  width: 50%;
  height: 31%;
  border-radius: 10px;
`;

const ContinueButton = styled.Pressable`
  border-radius: 25px;
  background: rgba(222, 222, 214, 0.1);
  width: 90%;
  align-items: center;
  margin-top: 40px;
  padding: 15px 0;
  border: 3px solid #6f6f6f;
`;

const LabelContainer = styled.View`
  background-color: #232325;
  margin-start: 10px;
  z-index: 1;
  elevation: 1;
  border-radius: 10px;
  position: absolute;
  top: -12px;
`;

export function ProfileEdit({ navigation }) {
  const [checked, setChecked] = React.useState('first');
  const [form, setForm] = React.useState({
    profile: {
      name: '',
      birth: '',
      sex: '',
    },
  });

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Header>
        <Title>Создание профиля</Title>
      </Header>
      <Main>
        <Sample source={require('../assets/icons/sample.png')} />
        <FullForm style={{ height: '13%', width: '90%' }}>
          <LabelContainer>
            <AboutMe>Имя</AboutMe>
          </LabelContainer>
          <Form style={{ height: '100%', width: '100%' }}>
            <Input
              onChangeText={(e) => {
                setForm({ ...form, profile: { ...form.profile, name: e } });
              }}
              value={form.profile.name}
            />
          </Form>
          <Form style={{ height: '100%', width: '100%' }}>
            <Input
              onChangeText={(e) => {
                setForm({ ...form, profile: { ...form.profile, birth: e } });
              }}
              value={form.profile.birth}
            />
          </Form>
        </FullForm>
        {/* <Button>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '60%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Svg height="60%" width="60%" viewBox="0 0 50 50">
              <SvgXml xml={calendar} width="50px" height="50px" />
            </Svg>
            <Text style={{ color: '#fff' }}>Укажите дату рождения</Text>
          </View>
        </Button> */}

        <FullForm style={{ height: '13%', width: '90%' }}>
          <LabelContainer>
            <AboutMe>Пол</AboutMe>
          </LabelContainer>
          <Form
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
                height: '100%',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('first');
                    setForm({
                      ...form,
                      profile: { ...form.profile, sex: 'мужской' },
                    });
                  }}
                />
                <Text style={{ color: '#39393B' }}>Мужской</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('second');
                    setForm({
                      ...form,
                      profile: { ...form.profile, sex: 'женский' },
                    });
                  }}
                  style={{ width: 10 }}
                />
                <Text style={{ color: '#39393B' }}>Женский</Text>
              </View>
            </View>
          </Form>
        </FullForm>
        <ContinueButton
          onPress={() => {
            register();
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Продолжить</Text>
        </ContinueButton>
      </Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'start',
  },
});
