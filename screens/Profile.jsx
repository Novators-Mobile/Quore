// import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
// import { Txt, Img } from './SignUpScreen';
// import React from 'react';
// import { navBtn } from './Recommendations';
// import { SvgXml } from 'react-native-svg';

// export function Profile({ navigation }) {
//   const [text, onChangeText] = React.useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Pressable
//           style={{ width: 48, marginTop: 28, marginLeft: 8 }}
//           onPress={() => navigation.openDrawer()}
//         >
//           <SvgXml xml={navBtn} width="48px" height="30px" />
//         </Pressable>
//         <Txt style={{ paddingTop: 30, paddingRight: 30, color: '#C3C0C0' }}>
//           Изменить
//         </Txt>
//       </View>
//       <View
//         style={{
//           marginTop: 20,
//           alignItems: 'center',
//           gap: 6,
//         }}
//       >
//         <Img
//           source={require('../assets/icons/profile-pic.png')}
//           style={{ width: 132, height: 132 }}
//         />
//         <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
//           Счастливый пользователь , 6
//         </Text>
//         <Text style={{ color: '#C3C0C0', width: 182, textAlign: 'center' }}>
//           Свердловская область , Екатеринбург
//         </Text>
//       </View>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 40,
//           marginTop: 20,
//         }}
//       >
//         <Text style={{ color: '#C3C0C0' }}>Информация</Text>
//         <Text style={{ color: '#C3C0C0' }}>Галерея</Text>
//       </View>

//       <View style={{ marginTop: 50 }}>
//         <View style={styles.labelContainer}>
//           <Text style={{ color: '#fff', paddingLeft: 10, paddingRight: 10 }}>
//             О себе
//           </Text>
//         </View>
//         <View
//           style={{
//             borderWidth: 2,
//             borderColor: '#D9D9D9',
//             borderRadius: 12,
//             width: 380,
//             height: 160,
//           }}
//         >
//           <TextInput
//             onChangeText={onChangeText}
//             value={text}
//             style={{ color: 'white' }}
//           />
//         </View>
//       </View>
//       <View style={{ marginTop: 15 }}>
//         <Text style={{ color: '#fff', fontSize: 24, marginRight: 200 }}>
//           Увлечения
//         </Text>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             width: 300,
//             gap: 40,
//             marginTop: 15,
//           }}
//         >
//           <Pressable
//             style={{
//               borderWidth: 1,
//               borderColor: '#fff',
//               borderRadius: 10,
//               width: 142,
//               height: 42,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ color: '#fff', fontSize: 16 }}>Музеи</Text>
//           </Pressable>
//           <Pressable
//             style={{
//               borderWidth: 1,
//               borderColor: '#fff',
//               borderRadius: 10,
//               width: 142,
//               height: 42,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ color: '#fff', fontSize: 16 }}>Языки</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#232325',
//     height: '100%',
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: 231,
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
//   labelContainer: {
//     backgroundColor: '#232325', // Same color as background
//     alignSelf: 'flex-start', // Have View be same width as Text inside
//     paddingHorizontal: 3, // Amount of spacing between border and first/last letter
//     marginStart: 10, // How far right do you want the label to start
//     zIndex: 1, // Label must overlap border
//     elevation: 1, // Needed for android
//     borderRadius: 10,
//     position: 'absolute', // Needed to be able to precisely overlap label with border
//     top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
//   },
//   inputContainer: {
//     borderWidth: 1, // Create border
//     borderRadius: 12, // Not needed. Just make it look nicer.
//     padding: 8, // Also used to make it look nicer
//     zIndex: 0, // Ensure border has z-index of 0
//   },
// });

import React from 'react';

import SideButton from '../components/SideButton';
import { styled } from 'styled-components';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Button = styled.Pressable`
  margin-top: 28px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  height: 10%;
`;

const Change = styled.Text`
  margin-top: 30px;
  color: #c3c0c0;
  text-align: center;
`;

const Main = styled.View`
  margin-top: 20px;
  align-items: center;
  gap: 6px;
  width: 90%;
  height: 50%;
`;

const Img = styled.Image`
  margin-right: 15px;
  width: 25%;
  height: 25%;
  resize-mode: stretch;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Location = styled.Text`
  color: #c3c0c0;
  width: 182px;
  text-align: center;
`;

const Txt = styled.Text`
  color: #c3c0c0;
`;

const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 20px;
`;

export const AboutMe = styled.Text`
  color: #fff;
  padding: 0 10px;
`;

export const LabelContainer = styled.View`
  margin-start: 10px;
  border-radius: 10px;
  position: absolute;
  top: -20px;
`;

export const FullForm = styled.View`
  margin-top: 50px;
  width: 90%;
  height: 30%;
`;

export const Form = styled.View`
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #ffffff;
`;

const EntertainmentsContainer = styled.View`
  margin-top: 25px;
  height: 20%;
  justify-content: center;
`;

const Entertainments = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const EntertainmentButton = styled.Pressable`
  border: 1px solid #fff;
  border-radius: 10px;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const EntertainmentText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 80%;
  gap: 40px;
  margin-top: 15px;
`;

export function Profile({ navigation }) {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/icons/profile-background.png')}
      >
        <Header>
          <SideButton onPressed={() => navigation.openDrawer()} />
          <Button
            style={{ marginTop: 0 }}
            onPress={() => navigation.navigate('ProfileEdit')}
          >
            <Change>Изменить</Change>
          </Button>
        </Header>
        <Main>
          <Img source={require('../assets/icons/profile-pic.png')} />
          <Name>Счастливый пользователь , 6</Name>
          <Location>Свердловская область , Екатеринбург</Location>

          <Info>
            <Button>
              <Txt style={{ color: 'white' }}>Информация</Txt>
            </Button>
            <Button onPress={() => navigation.navigate('Gallery')}>
              <Txt>Галерея</Txt>
            </Button>
          </Info>
          <FullForm>
            <LabelContainer>
              <AboutMe>О себе</AboutMe>
            </LabelContainer>
            <Form>
              <Input onChangeText={onChangeText} value={text} />
            </Form>
          </FullForm>
          <EntertainmentsContainer>
            <Entertainments>Увлечения</Entertainments>
            <ButtonContainer>
              <EntertainmentButton>
                <EntertainmentText>Музеи</EntertainmentText>
              </EntertainmentButton>
              <EntertainmentButton>
                <EntertainmentText>Языки</EntertainmentText>
              </EntertainmentButton>
            </ButtonContainer>
          </EntertainmentsContainer>
        </Main>
      </ImageBackground>
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
    justifyContent: 'start',
  },
});
