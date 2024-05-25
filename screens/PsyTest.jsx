import React from 'react';
import { Title, Txt, Button, ButtonContainer } from './SignUpScreen';

import { View, Text, StyleSheet } from 'react-native';
import { Form, Input } from './Profile';

export function PsyTest({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={{ width: '90%', marginTop: 50, marginBottom: 20 }}>
        Тест на совместимость
      </Title>

      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ color: '#C0C0C0', width: '90%', fontSize: 15 }}>
          Данный тест является необязательным к прохождению, на его основе будет
          рассчитана ваша совместимость с другими пользователями. Ответы строго
          конфиденциальны и не будут отображаться в Вашем профиле.
        </Text>

        <ButtonContainer>
          <Button onPress={() => navigation.navigate('Events')}>
            <Txt>Начать тест</Txt>
          </Button>
          <Text style={{ color: '#B0B0B0' }}>Назад</Text>
        </ButtonContainer>
      </View>
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
  },
});
