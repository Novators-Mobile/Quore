import React from 'react';
import {
  Title,
  Txt,
  Input,
  Form,
  FullForm,
  Button,
  ButtonContainer,
} from './SignUpScreen';
import { SvgXml } from 'react-native-svg';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const finder = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1659_13)">
<path d="M23.6935 17.9925L19.1596 13.4586C20.2511 12.0054 20.8404 10.2367 20.8384 8.4192C20.8384 3.77688 17.0615 0 12.4192 0C7.77688 0 4 3.77688 4 8.4192C4 13.0615 7.77688 16.8384 12.4192 16.8384C14.2367 16.8404 16.0054 16.2511 17.4586 15.1596L21.9925 19.6935C22.222 19.8986 22.5213 20.0081 22.829 19.9995C23.1367 19.9909 23.4295 19.8648 23.6472 19.6472C23.8648 19.4295 23.9909 19.1367 23.9995 18.829C24.0081 18.5213 23.8986 18.222 23.6935 17.9925ZM6.40549 8.4192C6.40549 7.2298 6.75818 6.06711 7.41898 5.07816C8.07977 4.08921 9.01899 3.31842 10.1179 2.86325C11.2167 2.40809 12.4259 2.289 13.5924 2.52104C14.759 2.75308 15.8305 3.32583 16.6715 4.16686C17.5126 5.00789 18.0853 6.07944 18.3174 7.24598C18.5494 8.41253 18.4303 9.62169 17.9751 10.7205C17.52 11.8194 16.7492 12.7586 15.7602 13.4194C14.7713 14.0802 13.6086 14.4329 12.4192 14.4329C10.8249 14.431 9.29635 13.7968 8.16897 12.6694C7.0416 11.5421 6.4074 10.0135 6.40549 8.4192Z" fill="#6E6E6E"/>
</g>
<defs>
<filter id="filter0_d_1659_13" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1659_13"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1659_13" result="shape"/>
</filter>
</defs>
</svg>
`;

export function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={{ width: '90%', marginTop: 50, marginBottom: 0 }}>
        Ваши увлечения
      </Title>
      <Text style={{ color: '#fff', width: '90%', fontSize: 20 }}>
        Можно выбрать до 15 вариантов
      </Text>
      <FullForm>
        <Form>
          <SvgXml
            style={{ marginTop: '3%' }}
            xml={finder}
            width="30px"
            height="30px"
          />
          <Input
            placeholder="Поиск"
            placeholderTextColor="#6F6F6F"
            keyboardType="email-address"
          />
        </Form>
      </FullForm>
      <Text style={{ color: '#fff', width: '90%', fontSize: 17 }}>
        Выберите интересующую категорию
      </Text>

      <FlatList
        style={{
          width: '100%',
          height: '30%',
          marginLeft: 0,
          marginBottom: 20,
        }}
        data={[
          { key: 'Спорт' },
          { key: 'Компьютер' },
          { key: 'Музыка' },
          { key: 'Книги' },
          { key: 'Саморазвитие' },
          { key: 'Игры' },
          { key: 'Фильмы' },
        ]}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => (
          <Text
            style={{
              color: '#fff',
              borderColor: '#fff',
              borderWidth: 2,
              paddingHorizontal: '5%',
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
      <Text style={{ color: '#fff', width: '90%', fontSize: 17 }}>
        Выбранные увлечения
      </Text>
      <FlatList
        numColumns={2}
        style={{ width: '100%', marginLeft: 0 }}
        data={[{ key: 'Рыбалка' }, { key: 'Йога' }]}
        renderItem={({ item }) => (
          <Text
            style={{
              color: '#000',
              borderColor: '#fff',
              borderWidth: 2,
              paddingHorizontal: '5%',
              paddingVertical: '2%',
              margin: '3%',
              borderRadius: 100,
              fontSize: 15,
              backgroundColor: '#fff',
            }}
          >
            {item.key}
          </Text>
        )}
      />
      <ButtonContainer style={{ marginBottom: 100 }}>
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
