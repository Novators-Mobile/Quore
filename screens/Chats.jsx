import { Pressable, View, StyleSheet } from 'react-native';
import React from 'react';

import Svg, { SvgXml } from 'react-native-svg';

import { people, Nav } from './Recommendations';

import { Txt } from './SignUpScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styled } from 'styled-components';
import SideButton from '../components/SideButton';

export const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
</svg>`;

const msg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_132_51)">
  <path d="M1 18.0211L2.3 14.1211C1.17644 12.4594 0.769993 10.4915 1.15622 8.58338C1.54244 6.67527 2.69506 4.95675 4.39977 3.74735C6.10447 2.53795 8.24526 1.91997 10.4241 2.00832C12.6029 2.09666 14.6715 2.88531 16.2453 4.22764C17.819 5.56996 18.7909 7.37462 18.9801 9.30606C19.1693 11.2375 18.563 13.1643 17.2739 14.7282C15.9848 16.2921 14.1007 17.3867 11.9718 17.8084C9.84293 18.2302 7.6142 17.9504 5.7 17.0211L1 18.0211Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_132_51">
    <rect width="20" height="20" fill="white"/>
  </clipPath>
</defs>
</svg>`;

export const home = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 2.23145C9.23857 2.23145 8.49174 2.44007 7.84058 2.83466L3.67392 5.35966C3.0612 5.73095 2.55456 6.25397 2.20295 6.87819C1.85133 7.50241 1.66661 8.20675 1.66663 8.92318V14.1665C1.66663 15.2716 2.10561 16.3314 2.88701 17.1128C3.66842 17.8942 4.72822 18.3332 5.83329 18.3332H14.1666C15.2717 18.3332 16.3315 17.8942 17.1129 17.1128C17.8943 16.3314 18.3333 15.2716 18.3333 14.1665V8.92235C18.3331 8.20608 18.1483 7.50176 17.7967 6.87774C17.4451 6.25372 16.9386 5.73087 16.326 5.35966L12.1593 2.83466C11.5082 2.44008 10.7613 2.23145 9.99996 2.23145ZM8.70434 4.26003C9.09504 4.02328 9.54313 3.89811 9.99996 3.89811C10.4568 3.89811 10.9049 4.02328 11.2956 4.26003L15.4622 6.78503C15.8298 7.00776 16.1337 7.32147 16.3447 7.69589C16.5556 8.07025 16.6665 8.49266 16.6666 8.92235V14.1665C16.6666 14.8296 16.4032 15.4654 15.9344 15.9343C15.4655 16.4031 14.8297 16.6665 14.1666 16.6665H13.3333V14.1665C13.3333 13.2825 12.9821 12.4346 12.357 11.8095C11.7319 11.1844 10.884 10.8332 9.99996 10.8332C9.1159 10.8332 8.26806 11.1844 7.64294 11.8095C7.01781 12.4346 6.66663 13.2825 6.66663 14.1665V16.6665H5.83329C5.17025 16.6665 4.53437 16.4031 4.06553 15.9343C3.59668 15.4654 3.33329 14.8296 3.33329 14.1665V8.92318C3.33328 8.49332 3.44412 8.07069 3.65509 7.69616C3.86605 7.32163 4.17003 7.00782 4.53767 6.78504L8.70434 4.26003ZM11.1785 12.988C11.491 13.3006 11.6666 13.7245 11.6666 14.1665V16.6665H8.33329V14.1665C8.33329 13.7245 8.50889 13.3006 8.82145 12.988C9.13401 12.6754 9.55793 12.4999 9.99996 12.4999C10.442 12.4999 10.8659 12.6754 11.1785 12.988Z" fill="#6F6F6F"/>
</svg>`;

const Header = styled.View`
  width: 100%;
  margin-bottom: 5%;
  margin-left: 25px;
`;

const Button = styled.Pressable`
  margin-top: 28px;
`;

const Main = styled.View`
  width: 100%;
`;

const Avatar = styled.Image`
  width: 60px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-family: ubuntu-regular;
  font-size: 24px;
`;

export function Chats({ navigation }) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Header
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View style={{ flex: 2 }}>
          <SideButton onPressed={() => navigation.openDrawer()} />
        </View>
        <View style={{ flex: 4 }}>
          <Title style={{ textAlign: 'center' }}>Чаты</Title>
        </View>
        <View style={{ flex: 2 }}></View>
      </Header>
      <Main
        style={{
          alignItems: 'center',
          flex: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      ></Main>
      <View style={{ flex: 1, paddingLeft: '15%' }}>
        <Nav
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <Pressable style={{ marginTop: -50, flex: 1 }}>
            <Svg height="70%" width="70%" viewBox="0 0 100 100">
              <SvgXml xml={msg} width="70px" height="70px" />
            </Svg>
          </Pressable>
          <Pressable style={{ flex: 1 }}>
            <Svg height="70%" width="70%" viewBox="0 0 100 100">
              <SvgXml xml={home} width="65px" height="70px" />
            </Svg>
          </Pressable>
          <Pressable style={{ flex: 1 }}>
            <Svg height="70%" width="70%" viewBox="0 0 100 100">
              <SvgXml xml={people} width="70px" height="70px" />
            </Svg>
          </Pressable>
        </Nav>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
