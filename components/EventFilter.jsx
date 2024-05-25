import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Txt } from '../screens/SignUpScreen';
import { SvgXml } from 'react-native-svg';

import { GestureDetector } from 'react-native-gesture-handler';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import * as Location from 'expo-location';

import Animated, {
  SlideInDown,
  SlideOutDown,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

import { FullForm, Form, LabelContainer, AboutMe } from '../screens/Profile';
import styled from 'styled-components/native';

const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
</svg>`;

const polygon = `<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.11 11L8 6L1.11 1" stroke="white"/>
</svg>`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-bottom: 5%;
  margin-left: 25px;
`;

const Main = styled.View`
  align-items: center;
  width: 100%;
  height: 65%;
  margin-bottom: 100px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-family: ubuntu-regular;
  font-size: 24px;
`;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

enableScroll = () => (this.setState = { scrollEnabled: true });
disableScroll = () => (this.setState = { scrollEnabled: false });

export function EventFilter({ toggleSheet, pan, translateY }) {
  const [value, setValue] = useState({ values: [0, 2000] });
  const multiSliderValuesChange = (values) => {
    setValue({
      values,
    });
  };

  const left = (value.values[0] * (1080 - 60)) / 100 - 1;
  const right = 1080 - ((value.values[1] * (1080 - 60)) / 100 - 1);

  return (
    <>
      <AnimatedPressable
        style={styles.backdrop}
        onPress={toggleSheet}
        entering={FadeIn}
        exiting={FadeOut}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, translateY]}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown}
        >
          <Header
            style={{
              width: '90%',
              paddingLeft: 40,
              alignItems: 'center',
            }}
          >
            <View></View>
            <Title style={{ marginTop: 0 }}>Фильтры</Title>
            <Txt style={{ color: '#ccc' }}>Сбросить</Txt>
          </Header>
          <Main>
            <View style={{ width: '100%', gap: 20, alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}
              >
                <Title style={{ fontSize: 16 }}>Тип мероприятия</Title>
                <SvgXml xml={polygon} width="10px" height="10px" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}
              >
                <Title style={{ fontSize: 16 }}>Город</Title>
                <SvgXml xml={polygon} width="10px" height="10px" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}
              >
                <Title style={{ fontSize: 16 }}>Возрастной ценз</Title>
                <SvgXml xml={polygon} width="10px" height="10px" />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}
              >
                <Title style={{ fontSize: 16 }}>Цена</Title>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}
              >
                <Title style={{ color: '#fff' }}>{value.values[0]}</Title>

                <Title style={{ color: '#fff' }}>{value.values[1]}</Title>
              </View>

              <MultiSlider
                values={[value.values[0], value.values[1]]}
                selectedStyle={{ backgroundColor: '#fff' }}
                containerStyle={{
                  alignSelf: 'center',
                  marginTop: -10,
                }}
                onValuesChange={multiSliderValuesChange}
                markerStyle={{
                  ...Platform.select({
                    android: {
                      height: 23,
                      width: 23,
                      borderRadius: 50,
                      backgroundColor: '#fff',
                    },
                  }),
                }}
                min={0}
                max={2000}
                step={100}
              />
            </View>
          </Main>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#232325',
    padding: 16,
    height: '60%',
    width: '100%',
    position: 'absolute',
    bottom: -20 * 1.1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  },
  backdrop: {
    aspectRatio: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
});
