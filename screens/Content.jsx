import React from 'react';
import { Title, Txt, Button, ButtonContainer } from './SignUpScreen';

import { View, Text, StyleSheet } from 'react-native';
import { Form, Input } from './Profile';

export function Content({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={{ width: '90%', marginTop: 50, marginBottom: 10 }}>
        Напишите о своих предпочтениях
      </Title>
      <Text
        style={{ color: '#fff', width: '90%', fontSize: 20, marginBottom: 20 }}
      >
        Можно рассказать о любимой музыке, фильмах и книгах
      </Text>

      <Form style={{ width: '90%', height: '15%', marginBottom: 200 }}>
        <Input placeholderTextColor="#6F6F6F" keyboardType="email-address" />
      </Form>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Events')}>
          <Txt>Продолжить</Txt>
        </Button>
      </ButtonContainer>
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
