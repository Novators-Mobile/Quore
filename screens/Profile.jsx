import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { Title, Txt, Img } from './SignUpScreen';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form } from './SignUpScreen';
import { PaperProvider } from 'react-native-paper';

export function Profile({ navigation }) {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          style={{ width: 48, marginTop: 28, marginLeft: 8 }}
          onPress={() => navigation.openDrawer()}
        >
          <View style={{ gap: 4 }}>
            <Txt style={styles.text}></Txt>
            <Txt style={styles.text}></Txt>
            <Txt style={styles.shorterText}></Txt>
          </View>
        </TouchableHighlight>
        <Txt style={{ paddingTop: 30, paddingRight: 30, color: '#C3C0C0' }}>
          Изменить
        </Txt>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          gap: 6,
        }}
      >
        <Img
          source={require('../assets/icons/profile-pic.png')}
          style={{ width: 132, height: 132 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Счастливый пользователь , 6
        </Text>
        <Text style={{ color: '#C3C0C0', width: 182, textAlign: 'center' }}>
          Свердловская область , Екатеринбург
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 40,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#C3C0C0' }}>Информация</Text>
        <Text style={{ color: '#C3C0C0' }}>Галерея</Text>
      </View>

      {/* <View style={{ marginBottom: 0 }}>
        <PaperProvider>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#D9D9D9',
              borderRadius: 12,
              width: 380,
              height: 160,
            }}
            onChangeText={onChangeText}
            value={text}
          />
        </PaperProvider>
      </View> */}
      <View style={{ marginTop: 50 }}>
        <View style={styles.labelContainer}>
          <Text style={{ color: '#fff', paddingLeft: 10, paddingRight: 10 }}>
            О себе
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#D9D9D9',
            borderRadius: 12,
            width: 380,
            height: 160,
          }}
        >
          <TextInput
            onChangeText={onChangeText}
            value={text}
            style={{ color: 'white' }}
          />
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ color: '#fff', fontSize: 24, marginRight: 200 }}>
          Увлечения
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 300,
            gap: 40,
            marginTop: 15,
          }}
        >
          <TouchableHighlight
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10,
              width: 142,
              height: 42,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>Музеи</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10,
              width: 142,
              height: 42,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>Языки</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 231,
  },
  image: {
    width: 355,
    height: 490,
    marginLeft: 15,
    borderRadius: 25,
    shadowOpacity: 0.5,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    backgroundColor: '#313131',
    width: 306,
    borderRadius: 28,
    paddingBottom: 12,
    paddingTop: 12,
  },
  btnPress: {
    fontSize: 16,
    fontFamily: 'ubuntu-regular',
    color: '#000000',
    backgroundColor: '#313131',
    width: 306,
    borderRadius: 28,
    paddingBottom: 12,
    paddingTop: 12,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'ubuntu-regular',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text: {
    height: 1,
    backgroundColor: 'white',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 2,
  },
  shorterText: {
    height: 1,
    width: 38,
    backgroundColor: 'white',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 2,
  },
  mainTitle: {
    marginBottom: 200,
  },
  info: {
    position: 'relative',
    paddingBottom: 16,
  },
  name: {
    position: 'absolute',
    fontFamily: 'ubuntu-regular',
    fontSize: 24,
    top: 400,
    left: 30,
  },
  descr: {
    position: 'absolute',
    fontFamily: 'ubuntu-regular',
    color: '#C3C0C0',
    fontSize: 15,
    top: 440,
    left: 30,
  },
  estimateBtn: {
    width: 37,
    height: 34,
  },
  labelContainer: {
    backgroundColor: '#232325', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    borderRadius: 10,
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 12, // Not needed. Just make it look nicer.
    padding: 8, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
  },
});
