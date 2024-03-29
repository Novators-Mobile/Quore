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
import { SvgXml } from 'react-native-svg';

const rak = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5.5C8.125 5.5 2.5 9.975 2.5 15.5C2.5 18.15 4.5625 20.3375 7.2 20.5H7.5C8.82608 20.5 10.0979 19.9732 11.0355 19.0355C11.9732 18.0979 12.5 16.8261 12.5 15.5C12.5 14.1739 11.9732 12.9021 11.0355 11.9645C10.0979 11.0268 8.82608 10.5 7.5 10.5H7.2C9.30484 8.51399 12.1068 7.43631 15 7.5C17.2125 7.475 19.375 8.0875 21.25 9.25L22.8125 7.6875C20.4726 6.22282 17.7603 5.46336 15 5.5ZM7.5 13C8.16304 13 8.79893 13.2634 9.26777 13.7322C9.73661 14.2011 10 14.837 10 15.5C10 16.8875 8.85 18 7.5 18C6.87808 18.0031 6.27733 17.7743 5.81506 17.3583C5.35279 16.9422 5.06218 16.3688 5 15.75V15.25C5.06218 14.6312 5.35279 14.0578 5.81506 13.6417C6.27733 13.2257 6.87808 12.9969 7.5 13ZM22.8 10.5H22.5C21.1739 10.5 19.9021 11.0268 18.9645 11.9645C18.0268 12.9021 17.5 14.1739 17.5 15.5C17.5 16.8261 18.0268 18.0979 18.9645 19.0355C19.9021 19.9732 21.1739 20.5 22.5 20.5H22.8C20.6952 22.486 17.8932 23.5637 15 23.5C12.7875 23.525 10.625 22.9125 8.75 21.75L7.2 23.3C9.5375 24.7625 12.2375 25.5 15 25.5C21.875 25.5 27.5 21.025 27.5 15.5C27.5 12.85 25.4375 10.6625 22.8 10.5ZM22.5 18C21.837 18 21.2011 17.7366 20.7322 17.2678C20.2634 16.7989 20 16.163 20 15.5C20 14.1125 21.15 13 22.5 13C23.1219 12.9969 23.7227 13.2257 24.1849 13.6417C24.6472 14.0578 24.9378 14.6312 25 15.25V15.75C24.9378 16.3688 24.6472 16.9422 24.1849 17.3583C23.7227 17.7743 23.1219 18.0031 22.5 18Z" fill="white"/>
</svg>
`;

const icon = `<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.03977 12.9655C2.13693 14.3205 1.6552 15.9123 1.65527 17.5405V19C1.65527 19.1989 1.57626 19.3897 1.4356 19.5303C1.29495 19.671 1.10419 19.75 0.905273 19.75C0.706361 19.75 0.515596 19.671 0.374943 19.5303C0.234291 19.3897 0.155273 19.1989 0.155273 19V17.542C0.15573 15.6167 0.726204 13.7346 1.79477 12.133L1.95677 11.89C2.01144 11.8081 2.0817 11.7377 2.16356 11.6829C2.24543 11.6281 2.33728 11.59 2.43387 11.5707C2.53047 11.5514 2.62992 11.5513 2.72654 11.5705C2.82317 11.5896 2.91508 11.6276 2.99702 11.6822C3.07897 11.7369 3.14934 11.8072 3.20413 11.889C3.25892 11.9709 3.29705 12.0627 3.31634 12.1593C3.33563 12.2559 3.33571 12.3554 3.31657 12.452C3.29742 12.5486 3.25944 12.6406 3.20477 12.7225L3.03977 12.9655Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26958 10.5475C5.63458 10.5475 4.10908 11.3635 3.20308 12.7225L1.95508 11.8915C2.53823 11.0168 3.32826 10.2996 4.25507 9.8035C5.18189 9.30738 6.21683 9.0477 7.26808 9.0475H7.59808C7.79699 9.0475 7.98776 9.12652 8.12841 9.26717C8.26906 9.40782 8.34808 9.59859 8.34808 9.7975C8.34808 9.99641 8.26906 10.1872 8.12841 10.3278C7.98776 10.4685 7.79699 10.5475 7.59808 10.5475H7.26958ZM11.8866 12.9475C12.5916 14.0065 12.9681 15.2485 12.9681 16.5205H14.4681C14.4684 14.953 14.0044 13.4205 13.1346 12.1165L12.9846 11.8915C12.9314 11.8064 12.8618 11.7328 12.7797 11.6751C12.6976 11.6174 12.6047 11.5768 12.5067 11.5556C12.4086 11.5344 12.3072 11.5331 12.2086 11.5518C12.1101 11.5705 12.0162 11.6088 11.9327 11.6644C11.8492 11.72 11.7777 11.7918 11.7224 11.8756C11.6671 11.9593 11.6292 12.0533 11.611 12.152C11.5927 12.2507 11.5944 12.352 11.6159 12.45C11.6375 12.548 11.6785 12.6406 11.7366 12.7225L11.8866 12.9475Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.6718 10.5475C9.3053 10.5475 10.8308 11.3635 11.7368 12.7225L12.9848 11.8915C12.4016 11.0168 11.6116 10.2996 10.6848 9.8035C9.75799 9.30738 8.72304 9.0477 7.6718 9.0475H7.3418C7.24331 9.0475 7.14578 9.0669 7.05478 9.10459C6.96379 9.14228 6.88111 9.19753 6.81147 9.26717C6.74182 9.33681 6.68658 9.41949 6.64889 9.51049C6.6112 9.60148 6.5918 9.69901 6.5918 9.7975C6.5918 9.89599 6.6112 9.99352 6.64889 10.0845C6.68658 10.1755 6.74182 10.2582 6.81147 10.3278C6.88111 10.3975 6.96379 10.4527 7.05478 10.4904C7.14578 10.5281 7.24331 10.5475 7.3418 10.5475H7.6718Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 8.875C7.81821 8.875 8.25708 8.7877 8.66656 8.61809C9.07603 8.44848 9.44809 8.19988 9.76149 7.88649C10.0749 7.57309 10.3235 7.20103 10.4931 6.79156C10.6627 6.38208 10.75 5.94321 10.75 5.5C10.75 5.05679 10.6627 4.61792 10.4931 4.20844C10.3235 3.79897 10.0749 3.42691 9.76149 3.11351C9.44809 2.80012 9.07603 2.55152 8.66656 2.38191C8.25708 2.2123 7.81821 2.125 7.375 2.125C6.47989 2.125 5.62145 2.48058 4.98851 3.11351C4.35558 3.74645 4 4.60489 4 5.5C4 6.39511 4.35558 7.25355 4.98851 7.88649C5.62145 8.51942 6.47989 8.875 7.375 8.875ZM7.375 10.375C8.66793 10.375 9.90791 9.86139 10.8221 8.94715C11.7364 8.03291 12.25 6.79293 12.25 5.5C12.25 4.20707 11.7364 2.96709 10.8221 2.05285C9.90791 1.13861 8.66793 0.625 7.375 0.625C6.08207 0.625 4.84209 1.13861 3.92785 2.05285C3.01361 2.96709 2.5 4.20707 2.5 5.5C2.5 6.79293 3.01361 8.03291 3.92785 8.94715C4.84209 9.86139 6.08207 10.375 7.375 10.375ZM13.7635 17.779C12.8598 19.1342 12.3776 20.7266 12.3775 22.3555V23.9065C12.3775 24.1054 12.2985 24.2962 12.1578 24.4368C12.0172 24.5775 11.8264 24.6565 11.6275 24.6565C11.4286 24.6565 11.2378 24.5775 11.0972 24.4368C10.9565 24.2962 10.8775 24.1054 10.8775 23.9065V22.3555C10.8774 20.431 11.4468 18.5495 12.514 16.948L12.7135 16.648C12.8241 16.4825 12.9959 16.3677 13.1911 16.3289C13.3864 16.2901 13.589 16.3304 13.7545 16.441C13.92 16.5516 14.0348 16.7234 14.0736 16.9186C14.1124 17.1139 14.0721 17.3165 13.9615 17.482L13.7635 17.779Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1299 15.25C17.3048 15.2499 16.4924 15.4536 15.7649 15.8429C15.0374 16.2323 14.4174 16.7953 13.9599 17.482L12.7134 16.6495C13.3078 15.7577 14.1132 15.0264 15.0581 14.5206C16.003 14.0148 17.0581 13.7501 18.1299 13.75H18.4659C18.6648 13.75 18.8556 13.829 18.9962 13.9697C19.1369 14.1103 19.2159 14.3011 19.2159 14.5C19.2159 14.6989 19.1369 14.8897 18.9962 15.0303C18.8556 15.171 18.6648 15.25 18.4659 15.25H18.1299ZM22.9104 17.779C23.814 19.1342 24.2963 20.7266 24.2964 22.3555V23.9065C24.2964 24.1054 24.3754 24.2962 24.516 24.4368C24.6567 24.5775 24.8475 24.6565 25.0464 24.6565C25.2453 24.6565 25.4361 24.5775 25.5767 24.4368C25.7174 24.2962 25.7964 24.1054 25.7964 23.9065V22.3555C25.7961 20.4308 25.2261 18.5493 24.1584 16.948L23.9589 16.648C23.8483 16.4825 23.6765 16.3677 23.4813 16.3289C23.286 16.2901 23.0834 16.3304 22.9179 16.441C22.7524 16.5516 22.6376 16.7234 22.5988 16.9186C22.56 17.1139 22.6003 17.3165 22.7109 17.482L22.9104 17.779Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5421 15.25C19.3672 15.2499 20.1796 15.4536 20.9071 15.8429C21.6345 16.2323 22.2546 16.7953 22.7121 17.482L23.9601 16.6495C23.3655 15.7575 22.5599 15.0261 21.6147 14.5202C20.6696 14.0144 19.6141 13.7498 18.5421 13.75H18.2046C18.0057 13.75 17.8149 13.829 17.6743 13.9697C17.5336 14.1103 17.4546 14.3011 17.4546 14.5C17.4546 14.6989 17.5336 14.8897 17.6743 15.0303C17.8149 15.171 18.0057 15.25 18.2046 15.25H18.5421Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 13.75C18.6932 13.75 19.1321 13.6627 19.5416 13.4931C19.951 13.3235 20.3231 13.0749 20.6365 12.7615C20.9499 12.4481 21.1985 12.076 21.3681 11.6666C21.5377 11.2571 21.625 10.8182 21.625 10.375C21.625 9.93179 21.5377 9.49292 21.3681 9.08344C21.1985 8.67397 20.9499 8.30191 20.6365 7.98851C20.3231 7.67512 19.951 7.42652 19.5416 7.25691C19.1321 7.0873 18.6932 7 18.25 7C17.3549 7 16.4965 7.35558 15.8635 7.98851C15.2306 8.62145 14.875 9.47989 14.875 10.375C14.875 11.2701 15.2306 12.1286 15.8635 12.7615C16.4965 13.3944 17.3549 13.75 18.25 13.75ZM18.25 15.25C19.5429 15.25 20.7829 14.7364 21.6971 13.8221C22.6114 12.9079 23.125 11.6679 23.125 10.375C23.125 9.08207 22.6114 7.84209 21.6971 6.92785C20.7829 6.01361 19.5429 5.5 18.25 5.5C16.9571 5.5 15.7171 6.01361 14.8029 6.92785C13.8886 7.84209 13.375 9.08207 13.375 10.375C13.375 11.6679 13.8886 12.9079 14.8029 13.8221C15.7171 14.7364 16.9571 15.25 18.25 15.25Z" fill="white"/>
</svg>
`;

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
  margin-top: 125px;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const Entertainments = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const EntertainmentButton = styled.Pressable`
  border: 1px solid #fff;
  border-radius: 50px;
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
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <SvgXml xml={rak} width="20px" height="20px" />
              <Txt style={{ color: 'white' }}>Рак</Txt>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <SvgXml xml={icon} width="20px" height="20px" />
              <Txt style={{ color: 'white' }}>Дружба</Txt>
            </View>
          </View>

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

            <Entertainments>Предпочтения</Entertainments>
            <ButtonContainer style={{ width: '80%' }}>
              <Txt>
                Любимый фильм - "Звездные войны: Эпизод VI - Возвращение
                джедая". Обожаю слушать музыку, любимый альбом - "Dark Side of
                the Moon" Pink Floyd.
              </Txt>
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
