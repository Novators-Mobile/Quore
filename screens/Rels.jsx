import React from 'react';
import { Title, Txt, Button, ButtonContainer } from './SignUpScreen';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export function Rels({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={{ width: '90%', marginTop: 50, marginBottom: 0 }}>
        Выберите выберите главные аспекты в отношениях
      </Title>

      <FlatList
        style={{ width: '100%', marginLeft: 0 }}
        data={[
          { key: 'Юмор' },
          { key: 'Физическая близость' },
          { key: 'Платоническая близость' },
          { key: 'Искренность' },
          { key: 'Поддержка' },
          { key: 'Легкость' },
          { key: 'Понимание' },
          { key: 'Совместный рост' },
          { key: 'Комфорт' },
        ]}
        numColumns={2}
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
