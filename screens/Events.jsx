import React from 'react';
import { Title, Txt, Button, ButtonContainer } from './SignUpScreen';

import { View, Text, StyleSheet, FlatList } from 'react-native';

export function Events({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={{ width: '90%', marginTop: 50, marginBottom: 0 }}>
        Выберите любимые мероприятия
      </Title>

      <FlatList
        style={{ width: '100%', marginLeft: 0 }}
        data={[
          { key: 'Мюзикл' },
          { key: 'Опера' },
          { key: 'Балет' },

          { key: 'Спектакль' },
          { key: 'Концерт' },
          { key: 'Кино' },
          { key: 'Живопись' },
          { key: 'Скульптура' },
          { key: 'Лекции' },
          { key: 'Книги' },

          { key: 'Выставки' },
          { key: 'Клубы/Бары' },
        ]}
        numColumns={3}
        columnWrapperStyle={{}}
        renderItem={({ item }) => (
          <Text
            style={{
              color: '#fff',
              borderColor: '#fff',
              borderWidth: 2,
              paddingHorizontal: '4%',
              paddingVertical: '2%',
              margin: '3%',
              borderRadius: 100,
              fontSize: 15,
            }}
          >
            {item.key}
          </Text>
        )}
      />

      <ButtonContainer style={{ marginBottom: 100 }}>
        <Button onPress={() => navigation.navigate('Question')}>
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
