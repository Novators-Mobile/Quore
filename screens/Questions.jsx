import React from 'react';
import { Title, Txt, Button, ButtonContainer } from './SignUpScreen';

import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Form, Input } from './Profile';

export function Questions({ navigation }) {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Title style={{ marginBottom: 20 }}>1 вопрос</Title>
        <Text style={{ color: '#B0B0B0' }}>Выйти</Text>
      </View>

      <Text style={{ color: '#fff', width: '90%', fontSize: 15 }}>
        Сколько времени вам нужно чтобы остыть после ссоры и обсудить проблему?
      </Text>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          height: '75%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View style={{ width: '90%' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
              }}
              color="#fff"
            />
            <Text style={{ color: '#fff' }}>Сразу же</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
              }}
              color="#fff"
            />
            <Text style={{ color: '#fff' }}>1–3 часа</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third');
              }}
              color="#fff"
            />
            <Text style={{ color: '#fff' }}>3–12 часов</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <RadioButton
              value="fourth"
              status={checked === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('fourth');
              }}
              color="#fff"
            />
            <Text style={{ color: '#fff' }}>Больше 12 часов</Text>
          </View>
        </View>

        <ButtonContainer>
          <Text style={{ color: '#B0B0B0' }}>Предыдущий вопрос</Text>
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
