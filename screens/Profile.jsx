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

const veri = `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.971 11C19.0516 10.6314 19.2013 10.2813 19.4121 9.96833C19.6515 9.65895 19.8237 9.30299 19.9177 8.92324C20.0117 8.54349 20.0253 8.1483 19.9578 7.76296C19.783 7.40267 19.5342 7.08328 19.2276 6.82565C18.9211 6.56802 18.5636 6.37793 18.1786 6.26779C17.8461 6.15374 17.5352 5.9844 17.259 5.76691C17.1176 5.43017 17.0391 5.07038 17.0273 4.70534C17.0399 4.30751 16.9685 3.91149 16.8178 3.5431C16.6671 3.17471 16.4404 2.8422 16.1526 2.56724C15.8045 2.38011 15.4207 2.26871 15.0264 2.24037C14.6322 2.21202 14.2364 2.26737 13.865 2.40278C13.511 2.50608 13.1402 2.53909 12.7735 2.49996C12.4826 2.31759 12.2289 2.08167 12.026 1.80471C11.7991 1.46002 11.5008 1.16815 11.1512 0.948872C10.8017 0.729595 10.4091 0.588043 10 0.533813C9.59932 0.5877 9.21448 0.725395 8.87057 0.937928C8.52665 1.15046 8.23136 1.43307 8.00395 1.76733C7.80098 2.04429 7.5473 2.28021 7.25636 2.46258C6.88968 2.50171 6.51889 2.4687 6.16489 2.3654C5.79354 2.22999 5.39775 2.17465 5.0035 2.20299C4.60924 2.23134 4.22544 2.34273 3.87728 2.52987C3.58407 2.80217 3.35187 3.13349 3.19595 3.50201C3.04004 3.87053 2.96395 4.2679 2.9727 4.66796C2.96555 5.04562 2.88692 5.41852 2.74095 5.76691C2.46751 5.99764 2.15648 6.17971 1.82142 6.30517C1.43641 6.41531 1.07894 6.6054 0.772361 6.86303C0.465779 7.12066 0.216969 7.44004 0.0421685 7.80034C-0.0253397 8.18568 -0.0116703 8.58086 0.0823025 8.96062C0.176275 9.34037 0.348482 9.69633 0.587905 10.0057C0.794479 10.3074 0.943977 10.6444 1.02898 11C0.948365 11.3686 0.798706 11.7187 0.587905 12.0317C0.348482 12.3411 0.176275 12.697 0.0823025 13.0768C-0.0116703 13.4565 -0.0253397 13.8517 0.0421685 14.237C0.216969 14.5973 0.465779 14.9167 0.772361 15.1744C1.07894 15.432 1.43641 15.6221 1.82142 15.7322C2.15648 15.8577 2.46751 16.0397 2.74095 16.2705C2.88238 16.6072 2.96093 16.967 2.9727 17.332C2.96014 17.7299 3.03153 18.1259 3.18224 18.4943C3.33295 18.8627 3.55958 19.1952 3.84738 19.4701C4.19554 19.6573 4.57934 19.7687 4.97359 19.797C5.36784 19.8254 5.76363 19.77 6.13499 19.6346C6.48898 19.5313 6.85978 19.4983 7.22646 19.5374C7.5174 19.7198 7.77108 19.9557 7.97404 20.2327C8.20471 20.5704 8.50471 20.8551 8.85405 21.0678C9.20339 21.2805 9.59405 21.4163 10 21.4662C10.4007 21.4123 10.7855 21.2746 11.1294 21.0621C11.4734 20.8495 11.7686 20.5669 11.9961 20.2327C12.199 19.9557 12.4527 19.7198 12.7436 19.5374C13.1103 19.4983 13.4811 19.5313 13.8351 19.6346C14.2065 19.77 14.6023 19.8254 14.9965 19.797C15.3908 19.7687 15.7746 19.6573 16.1227 19.4701C16.4105 19.1952 16.6371 18.8627 16.7879 18.4943C16.9386 18.1259 17.01 17.7299 16.9974 17.332C17.0092 16.967 17.0877 16.6072 17.2291 16.2705C17.5026 16.0397 17.8136 15.8577 18.1487 15.7322C18.5337 15.6221 18.8912 15.432 19.1977 15.1744C19.5043 14.9167 19.7531 14.5973 19.9279 14.237C19.9954 13.8517 19.9818 13.4565 19.8878 13.0768C19.7938 12.697 19.6216 12.3411 19.3822 12.0317C19.1819 11.7165 19.0425 11.3665 18.971 11ZM18.1113 12.7643C18.2758 13.0633 18.5898 13.6091 18.5374 13.7735C18.4851 13.938 17.9244 14.2071 17.5656 14.3716C16.989 14.5818 16.4747 14.9341 16.0704 15.3958C15.7498 15.9294 15.5746 16.5377 15.562 17.1601C15.5172 17.5339 15.4499 18.1469 15.2929 18.2591C15.1359 18.3712 14.5453 18.2591 14.1865 18.1693C13.5833 17.9939 12.9457 17.9734 12.3325 18.1095C11.7633 18.3499 11.2662 18.7337 10.8896 19.2234C10.6205 19.5225 10.2093 19.971 10 19.971C9.79068 19.971 9.37951 19.5225 9.11037 19.2234C8.74003 18.7367 8.25096 18.3532 7.68996 18.1095C7.47166 18.0443 7.24496 18.0116 7.01714 18.0123C6.61934 18.0273 6.22385 18.0799 5.83595 18.1693C5.47711 18.2441 4.87157 18.3637 4.72953 18.2591C4.58748 18.1544 4.50525 17.5115 4.4604 17.1601C4.44785 16.5377 4.27258 15.9294 3.95204 15.3958C3.54773 14.9341 3.03347 14.5818 2.45687 14.3716C2.09803 14.2071 1.55229 13.9604 1.48501 13.7735C1.41772 13.5866 1.74666 13.0633 1.91113 12.7643C2.26148 12.2376 2.4724 11.6305 2.52415 11C2.46569 10.3675 2.24699 9.76025 1.8887 9.2357C1.72423 8.93667 1.41025 8.39093 1.46258 8.22646C1.51491 8.06199 2.0756 7.79286 2.43444 7.62839C3.01104 7.41819 3.5253 7.06593 3.92961 6.6042C4.25016 6.07056 4.42542 5.46229 4.43797 4.8399C4.48282 4.46611 4.55011 3.85309 4.7071 3.74095C4.86409 3.62881 5.45468 3.74095 5.81352 3.83066C6.41669 4.00606 7.05432 4.02663 7.66754 3.89047C8.23669 3.65014 8.73381 3.26635 9.11037 2.77657C9.37951 2.47753 9.79068 2.02898 10 2.02898C10.2093 2.02898 10.6205 2.47753 10.8896 2.77657C11.26 3.2633 11.749 3.64684 12.31 3.89047C12.9232 4.02663 13.5609 4.00606 14.164 3.83066C14.5216 3.71862 14.8996 3.68797 15.2705 3.74095C15.4275 3.85309 15.4947 4.48854 15.5396 4.8399C15.5522 5.46229 15.7274 6.07056 16.048 6.6042C16.4523 7.06593 16.9665 7.41819 17.5431 7.62839C17.902 7.79286 18.4477 8.03957 18.515 8.22646C18.5823 8.41336 18.2533 8.97405 18.0889 9.2357C17.7385 9.76245 17.5276 10.3695 17.4758 11C17.5343 11.6325 17.753 12.2398 18.1113 12.7643Z" fill="white"/>
<path d="M12.8331 8.22649L8.87839 12.1887L7.54022 10.843C7.47051 10.7733 7.38776 10.718 7.29669 10.6803C7.20562 10.6426 7.10801 10.6232 7.00943 10.6232C6.91086 10.6232 6.81325 10.6426 6.72217 10.6803C6.6311 10.718 6.54835 10.7733 6.47865 10.843C6.40894 10.9127 6.35365 10.9955 6.31593 11.0866C6.2782 11.1776 6.25879 11.2752 6.25879 11.3738C6.25879 11.4724 6.2782 11.57 6.31593 11.6611C6.35365 11.7522 6.40894 11.8349 6.47865 11.9046L8.34761 13.7736C8.41711 13.8436 8.49979 13.8993 8.59089 13.9372C8.68199 13.9752 8.7797 13.9947 8.87839 13.9947C8.97708 13.9947 9.0748 13.9752 9.1659 13.9372C9.257 13.8993 9.33968 13.8436 9.40918 13.7736L13.8947 9.28806C13.9644 9.21835 14.0197 9.1356 14.0574 9.04453C14.0951 8.95346 14.1145 8.85585 14.1145 8.75727C14.1145 8.6587 14.0951 8.56109 14.0574 8.47001C14.0197 8.37894 13.9644 8.29619 13.8947 8.22649C13.825 8.15678 13.7422 8.10149 13.6512 8.06377C13.5601 8.02605 13.4625 8.00663 13.3639 8.00663C13.2653 8.00663 13.1677 8.02605 13.0766 8.06377C12.9856 8.10149 12.9028 8.15678 12.8331 8.22649Z" fill="#D9D9D9"/>
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
            <SvgXml xml={veri} width="20px" height="20px" />
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
