import {
  Pressable,
  FlatList,
  RefreshControl,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Svg, { SvgXml } from 'react-native-svg';
import axios from 'axios';
import { User } from '../components/User';
import { msg, home, people, Nav } from './Recommendations';
import SideButton from '../components/SideButton';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styled } from 'styled-components';
import { Button } from 'react-native-paper';

export const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
</svg>`;

const Container = styled.View`
  align-items: center;
  background-color: #232325;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.View`
  width: 100%;
  margin-bottom: 5%;
  margin-left: 25px;
`;

const Main = styled.View`
  width: 100%;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  font-family: ubuntu-regular;
`;

const ItemsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 320px;
  padding: 10px 15px;
`;

export function Likes({ navigation }) {
  const [items, setItems] = React.useState();
  const [refreshing, setRefreshing] = React.useState(true);

  const fetchUsers = () => {
    setRefreshing(true);

    axios
      .get('https://65467497fe036a2fa955b804.mockapi.io/users')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при получении статей');
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  React.useEffect(fetchUsers, []);

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
          <Title style={{ textAlign: 'center' }}>Лайки</Title>
        </View>
        <View style={{ flex: 2 }}></View>
      </Header>
      <Main style={{ alignItems: 'center', flex: 5 }}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchUsers} />
          }
          data={items}
          renderItem={({ item }) => (
            <ItemsView>
              <User
                name={item.name}
                imageUrl={item.avatar}
                description={item.description}
              />
              <User
                name={item.name}
                imageUrl={item.avatar}
                description={item.description}
              />
            </ItemsView>
          )}
        />
      </Main>
      <View style={{ flex: 1, marginTop: '10%' }}>
        <Nav
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Pressable style={{ flex: 1 }}>
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

// import {
//   View,
//   StyleSheet,
//   StatusBar,
//   Pressable,
//   FlatList,
//   RefreshControl,
// } from 'react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { Txt, Img } from './SignUpScreen';
// import { SvgXml } from 'react-native-svg';
// import axios from 'axios';
// import { User } from '../components/User';

// const filter = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
// <path d="M5.3125 2.1276C5.03071 2.1276 4.76046 2.23955 4.5612 2.4388C4.36194 2.63806 4.25 2.90831 4.25 3.1901C4.25 3.4719 4.36194 3.74215 4.5612 3.9414C4.76046 4.14066 5.03071 4.2526 5.3125 4.2526C5.59429 4.2526 5.86454 4.14066 6.0638 3.9414C6.26306 3.74215 6.375 3.4719 6.375 3.1901C6.375 2.90831 6.26306 2.63806 6.0638 2.4388C5.86454 2.23955 5.59429 2.1276 5.3125 2.1276ZM2.30562 2.1276C2.52514 1.50547 2.93222 0.966752 3.47076 0.585692C4.0093 0.204633 4.65278 0 5.3125 0C5.97222 0 6.6157 0.204633 7.15424 0.585692C7.69278 0.966752 8.09986 1.50547 8.31938 2.1276H15.9375C16.2193 2.1276 16.4895 2.23955 16.6888 2.4388C16.8881 2.63806 17 2.90831 17 3.1901C17 3.4719 16.8881 3.74215 16.6888 3.9414C16.4895 4.14066 16.2193 4.2526 15.9375 4.2526H8.31938C8.09986 4.87473 7.69278 5.41346 7.15424 5.79452C6.6157 6.17557 5.97222 6.38021 5.3125 6.38021C4.65278 6.38021 4.0093 6.17557 3.47076 5.79452C2.93222 5.41346 2.52514 4.87473 2.30562 4.2526H1.0625C0.780707 4.2526 0.510457 4.14066 0.311199 3.9414C0.111942 3.74215 0 3.4719 0 3.1901C0 2.90831 0.111942 2.63806 0.311199 2.4388C0.510457 2.23955 0.780707 2.1276 1.0625 2.1276H2.30562ZM11.6875 8.5026C11.4057 8.5026 11.1355 8.61454 10.9362 8.8138C10.7369 9.01306 10.625 9.28331 10.625 9.5651C10.625 9.8469 10.7369 10.1171 10.9362 10.3164C11.1355 10.5157 11.4057 10.6276 11.6875 10.6276C11.9693 10.6276 12.2395 10.5157 12.4388 10.3164C12.6381 10.1171 12.75 9.8469 12.75 9.5651C12.75 9.28331 12.6381 9.01306 12.4388 8.8138C12.2395 8.61454 11.9693 8.5026 11.6875 8.5026ZM8.68062 8.5026C8.90014 7.88048 9.30722 7.34175 9.84576 6.96069C10.3843 6.57963 11.0278 6.375 11.6875 6.375C12.3472 6.375 12.9907 6.57963 13.5292 6.96069C14.0678 7.34175 14.4749 7.88048 14.6944 8.5026H15.9375C16.2193 8.5026 16.4895 8.61454 16.6888 8.8138C16.8881 9.01306 17 9.28331 17 9.5651C17 9.8469 16.8881 10.1171 16.6888 10.3164C16.4895 10.5157 16.2193 10.6276 15.9375 10.6276H14.6944C14.4749 11.2497 14.0678 11.7885 13.5292 12.1695C12.9907 12.5506 12.3472 12.7552 11.6875 12.7552C11.0278 12.7552 10.3843 12.5506 9.84576 12.1695C9.30722 11.7885 8.90014 11.2497 8.68062 10.6276H1.0625C0.780707 10.6276 0.510457 10.5157 0.311199 10.3164C0.111942 10.1171 0 9.8469 0 9.5651C0 9.28331 0.111942 9.01306 0.311199 8.8138C0.510457 8.61454 0.780707 8.5026 1.0625 8.5026H8.68062ZM5.3125 14.8776C5.03071 14.8776 4.76046 14.9895 4.5612 15.1888C4.36194 15.3881 4.25 15.6583 4.25 15.9401C4.25 16.2219 4.36194 16.4921 4.5612 16.6914C4.76046 16.8907 5.03071 17.0026 5.3125 17.0026C5.59429 17.0026 5.86454 16.8907 6.0638 16.6914C6.26306 16.4921 6.375 16.2219 6.375 15.9401C6.375 15.6583 6.26306 15.3881 6.0638 15.1888C5.86454 14.9895 5.59429 14.8776 5.3125 14.8776ZM2.30562 14.8776C2.52514 14.2555 2.93222 13.7168 3.47076 13.3357C4.0093 12.9546 4.65278 12.75 5.3125 12.75C5.97222 12.75 6.6157 12.9546 7.15424 13.3357C7.69278 13.7168 8.09986 14.2555 8.31938 14.8776H15.9375C16.2193 14.8776 16.4895 14.9895 16.6888 15.1888C16.8881 15.3881 17 15.6583 17 15.9401C17 16.2219 16.8881 16.4921 16.6888 16.6914C16.4895 16.8907 16.2193 17.0026 15.9375 17.0026H8.31938C8.09986 17.6247 7.69278 18.1635 7.15424 18.5445C6.6157 18.9256 5.97222 19.1302 5.3125 19.1302C4.65278 19.1302 4.0093 18.9256 3.47076 18.5445C2.93222 18.1635 2.52514 17.6247 2.30562 17.0026H1.0625C0.780707 17.0026 0.510457 16.8907 0.311199 16.6914C0.111942 16.4921 0 16.2219 0 15.9401C0 15.6583 0.111942 15.3881 0.311199 15.1888C0.510457 14.9895 0.780707 14.8776 1.0625 14.8776H2.30562Z" fill="white"/>
// </svg>`;

// export const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
// <path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
// </svg>`;

// const like = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
// <path d="M10.0445 1.14608C6.45491 0.513132 3.0362 2.88442 2.40884 6.44236C1.27288 12.8847 7.92169 20.0959 11.8177 22.1874C16.1941 21.5545 24.9083 17.0523 26.0442 10.6099C26.6716 7.05198 24.2701 3.65443 20.6805 3.02148C18.4824 2.6339 16.3476 3.37285 14.8798 4.82119C14.4297 3.86934 13.7552 3.03838 12.9135 2.39865C12.0719 1.75892 11.0877 1.32927 10.0445 1.14608Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;

// const dislike = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
// <path d="M24.7815 6.49972C24.1485 2.91009 20.7253 0.513117 17.1357 1.14606C14.9376 1.53365 13.186 2.96779 12.3047 4.84556C11.5548 4.09753 10.6357 3.54121 9.62525 3.22369C8.61479 2.90617 7.54269 2.8368 6.49973 3.02147C2.91011 3.65441 0.513131 7.07765 1.14608 10.6673C2.29216 17.167 11.0155 21.7214 15.3941 22.3665C16.0582 22.0075 16.8021 21.4992 17.5733 20.8697M20.2728 12.1688L25.2225 16.4747M24.3369 11.4522L21.1584 17.1913" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;

// const msg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
// <g clip-path="url(#clip0_126_187)">
//   <path d="M1 18.0211L2.3 14.1211C1.17644 12.4594 0.769993 10.4915 1.15622 8.58338C1.54244 6.67527 2.69506 4.95675 4.39977 3.74735C6.10447 2.53795 8.24526 1.91997 10.4241 2.00832C12.6029 2.09666 14.6715 2.88531 16.2453 4.22764C17.819 5.56996 18.7909 7.37462 18.9801 9.30606C19.1693 11.2375 18.563 13.1643 17.2739 14.7282C15.9848 16.2921 14.1007 17.3867 11.9718 17.8084C9.84293 18.2302 7.6142 17.9504 5.7 17.0211L1 18.0211Z" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <defs>
//   <clipPath id="clip0_126_187">
//     <rect width="20" height="20" fill="white"/>
//   </clipPath>
// </defs>
// </svg>`;

// const home = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 2.23145C9.23857 2.23145 8.49174 2.44007 7.84058 2.83466L3.67392 5.35966C3.0612 5.73095 2.55456 6.25397 2.20295 6.87819C1.85133 7.50241 1.66661 8.20675 1.66663 8.92318V14.1665C1.66663 15.2716 2.10561 16.3314 2.88701 17.1128C3.66842 17.8942 4.72822 18.3332 5.83329 18.3332H14.1666C15.2717 18.3332 16.3315 17.8942 17.1129 17.1128C17.8943 16.3314 18.3333 15.2716 18.3333 14.1665V8.92235C18.3331 8.20608 18.1483 7.50176 17.7967 6.87774C17.4451 6.25372 16.9386 5.73087 16.326 5.35966L12.1593 2.83466C11.5082 2.44008 10.7613 2.23145 9.99996 2.23145ZM8.70434 4.26003C9.09504 4.02328 9.54313 3.89811 9.99996 3.89811C10.4568 3.89811 10.9049 4.02328 11.2956 4.26003L15.4622 6.78503C15.8298 7.00776 16.1337 7.32147 16.3447 7.69589C16.5556 8.07025 16.6665 8.49266 16.6666 8.92235V14.1665C16.6666 14.8296 16.4032 15.4654 15.9344 15.9343C15.4655 16.4031 14.8297 16.6665 14.1666 16.6665H13.3333V14.1665C13.3333 13.2825 12.9821 12.4346 12.357 11.8095C11.7319 11.1844 10.884 10.8332 9.99996 10.8332C9.1159 10.8332 8.26806 11.1844 7.64294 11.8095C7.01781 12.4346 6.66663 13.2825 6.66663 14.1665V16.6665H5.83329C5.17025 16.6665 4.53437 16.4031 4.06553 15.9343C3.59668 15.4654 3.33329 14.8296 3.33329 14.1665V8.92318C3.33328 8.49332 3.44412 8.07069 3.65509 7.69616C3.86605 7.32163 4.17003 7.00782 4.53767 6.78504L8.70434 4.26003ZM11.1785 12.988C11.491 13.3006 11.6666 13.7245 11.6666 14.1665V16.6665H8.33329V14.1665C8.33329 13.7245 8.50889 13.3006 8.82145 12.988C9.13401 12.6754 9.55793 12.4999 9.99996 12.4999C10.442 12.4999 10.8659 12.6754 11.1785 12.988Z" fill="white"/>
// </svg>`;

// const people = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none">
// <path d="M6.13333 0C3.60333 0 1.53333 2.1 1.53333 4.66667C1.53333 6.20978 2.28237 7.58333 3.42623 8.43422C1.40453 9.45156 0 11.5609 0 14H1.53333C1.53333 11.4147 3.58493 9.33333 6.13333 9.33333C8.68173 9.33333 10.7333 11.4147 10.7333 14H12.2667C12.2667 11.4147 14.3183 9.33333 16.8667 9.33333C19.4151 9.33333 21.4667 11.4147 21.4667 14H23C23 11.5601 21.5955 9.45156 19.5738 8.43422C20.1591 8.00151 20.6356 7.43482 20.9645 6.78018C21.2934 6.12555 21.4655 5.40143 21.4667 4.66667C21.4667 2.1 19.3967 0 16.8667 0C14.3367 0 12.2667 2.1 12.2667 4.66667C12.2667 6.20978 13.0157 7.58333 14.1596 8.43422C13.0394 8.99294 12.1122 9.88258 11.5 10.9861C10.8878 9.88258 9.96059 8.99294 8.84043 8.43422C9.42579 8.00151 9.90227 7.43482 10.2312 6.78018C10.5601 6.12555 10.7321 5.40143 10.7333 4.66667C10.7333 2.1 8.66333 0 6.13333 0ZM6.13333 1.55556C7.83763 1.55556 9.2 2.93767 9.2 4.66667C9.2 6.39567 7.83763 7.77778 6.13333 7.77778C4.42903 7.77778 3.06667 6.39567 3.06667 4.66667C3.06667 2.93767 4.42903 1.55556 6.13333 1.55556ZM16.8667 1.55556C18.571 1.55556 19.9333 2.93767 19.9333 4.66667C19.9333 6.39567 18.571 7.77778 16.8667 7.77778C15.1624 7.77778 13.8 6.39567 13.8 4.66667C13.8 2.93767 15.1624 1.55556 16.8667 1.55556Z" fill="#6F6F6F"/>
// </svg>`;

// export const navBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14" fill="none">
// <path d="M0 1.4C0 1.0287 0.1475 0.672602 0.41005 0.410051C0.672601 0.1475 1.0287 0 1.4 0H26.6C26.9713 0 27.3274 0.1475 27.59 0.410051C27.8525 0.672602 28 1.0287 28 1.4C28 1.7713 27.8525 2.1274 27.59 2.38995C27.3274 2.6525 26.9713 2.8 26.6 2.8H1.4C1.0287 2.8 0.672601 2.6525 0.41005 2.38995C0.1475 2.1274 0 1.7713 0 1.4ZM0 7C0 6.6287 0.1475 6.2726 0.41005 6.01005C0.672601 5.7475 1.0287 5.6 1.4 5.6H26.6C26.9713 5.6 27.3274 5.7475 27.59 6.01005C27.8525 6.2726 28 6.6287 28 7C28 7.3713 27.8525 7.7274 27.59 7.98995C27.3274 8.2525 26.9713 8.4 26.6 8.4H1.4C1.0287 8.4 0.672601 8.2525 0.41005 7.98995C0.1475 7.7274 0 7.3713 0 7ZM1.4 11.2C1.0287 11.2 0.672601 11.3475 0.41005 11.6101C0.1475 11.8726 0 12.2287 0 12.6C0 12.9713 0.1475 13.3274 0.41005 13.59C0.672601 13.8525 1.0287 14 1.4 14H18.2C18.5713 14 18.9274 13.8525 19.1899 13.59C19.4525 13.3274 19.6 12.9713 19.6 12.6C19.6 12.2287 19.4525 11.8726 19.1899 11.6101C18.9274 11.3475 18.5713 11.2 18.2 11.2H1.4Z" fill="white"/>
// </svg>`;

// export const Likes = ({ navigation }) => {
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [items, setItems] = React.useState();
//   const [refreshing, setRefreshing] = React.useState(true);

//   const fetchUsers = () => {
//     setRefreshing(true);

//     axios
//       .get('https://65467497fe036a2fa955b804.mockapi.io/users')
//       .then(({ data }) => {
//         setItems(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         alert('Ошибка при получении статей');
//       })
//       .finally(() => {
//         setRefreshing(false);
//       });
//   };

//   React.useEffect(fetchUsers, []);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({
//           'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
//           'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
//           'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
//         });
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View onLayout={onLayoutRootView} style={styles.container}>
//       <View style={styles.header}>
//         <Pressable
//           style={{ width: 48, marginTop: 28, marginLeft: 8 }}
//           onPress={() => navigation.openDrawer()}
//         >
//           <SvgXml xml={navBtn} width="48px" height="30px" />
//         </Pressable>
//         <Txt style={{ fontSize: 24, marginTop: 20 }}>Рекомендации</Txt>
//         <Pressable style={{ width: 48, marginTop: 18, marginLeft: 10 }}>
//           <SvgXml xml={filter} width="40px" height="40px" />
//         </Pressable>
//       </View>

//       <View style={styles.info}>
//         {/* <Img
//           source={require('../assets/icons/avatar.png')}
//           style={styles.image}
//         />
//         <Txt style={styles.name}>Хороший мальчик , 5</Txt>
//         <Txt style={styles.descr}>Просто кот</Txt> */}
//         <View>
//           <FlatList
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={fetchUsers} />
//             }
//             data={items}
//             renderItem={({ item }) => (
//               <User
//                 name={item.name}
//                 imageUrl={item.avatar}
//                 description={item.description}
//               />
//             )}
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 300,
//         }}
//       >
//         <Pressable>
//           <SvgXml xml={dislike} width="40px" height="40px" />
//         </Pressable>
//         <Pressable>
//           <SvgXml xml={like} width="40px" height="40px" />
//         </Pressable>
//       </View>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 50,
//           marginTop: 60,
//         }}
//       >
//         <Pressable>
//           <SvgXml xml={msg} width="30px" height="30px" />
//         </Pressable>
//         <Pressable style={{ marginTop: -50 }}>
//           <SvgXml xml={home} width="40px" height="40px" />
//         </Pressable>
//         <Pressable>
//           <SvgXml xml={people} width="35px" height="35px" />
//         </Pressable>
//       </View>

//       <StatusBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#232325',
//     height: '100%',
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: 45,
//     justifyContent: 'center',
//     marginBottom: 60,
//   },
//   image: {
//     width: 355,
//     height: 490,
//     marginLeft: 15,
//     borderRadius: 25,
//     shadowOpacity: 0.5,
//   },
//   buttonContainer: {
//     gap: 20,
//     marginTop: 30,
//     alignItems: 'center',
//   },
//   button: {
//     fontSize: 16,
//     fontFamily: 'ubuntu-regular',
//     backgroundColor: '#313131',
//     width: 306,
//     borderRadius: 28,
//     paddingBottom: 12,
//     paddingTop: 12,
//   },
//   btnPress: {
//     fontSize: 16,
//     fontFamily: 'ubuntu-regular',
//     color: '#000000',
//     backgroundColor: '#313131',
//     width: 306,
//     borderRadius: 28,
//     paddingBottom: 12,
//     paddingTop: 12,
//   },
//   title: {
//     color: '#ffffff',
//     fontFamily: 'ubuntu-regular',
//     fontWeight: 500,
//     textAlign: 'center',
//     fontSize: 80,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//   },
//   text: {
//     height: 1,
//     backgroundColor: 'white',
//     color: '#ffffff',
//     borderWidth: 2,
//     borderColor: 'white',
//     borderRadius: 2,
//   },
//   shorterText: {
//     height: 1,
//     width: 38,
//     backgroundColor: 'white',
//     color: '#ffffff',
//     borderWidth: 2,
//     borderColor: 'white',
//     borderRadius: 2,
//   },
//   mainTitle: {
//     marginBottom: 200,
//   },
//   info: {
//     position: 'relative',
//     paddingBottom: 16,
//   },
//   name: {
//     position: 'absolute',
//     fontFamily: 'ubuntu-regular',
//     fontSize: 24,
//     top: 400,
//     left: 30,
//   },
//   descr: {
//     position: 'absolute',
//     fontFamily: 'ubuntu-regular',
//     color: '#C3C0C0',
//     fontSize: 15,
//     top: 440,
//     left: 30,
//   },
//   estimateBtn: {
//     width: 37,
//     height: 34,
//   },
// });
