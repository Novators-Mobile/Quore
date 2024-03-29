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
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
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

const back = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_3503_355)">
<rect width="32" height="32" rx="16" fill="#232325" fill-opacity="0.3"/>
</g>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5999 22.5498L12.3999 15.7549L18.5999 8.95997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_b_3503_355" x="-10" y="-10" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3503_355"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3503_355" result="shape"/>
</filter>
</defs>
</svg>
`;

const like = `<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="42" cy="42" r="42" fill="#E98C8C"/>
<path d="M36.1213 28.1391C31.2613 28.1391 27.3213 32.0443 27.3213 36.8614C27.3213 45.5837 37.7213 53.5131 43.3213 55.3575C48.9213 53.5131 59.3213 45.5837 59.3213 36.8614C59.3213 32.0443 55.3813 28.1391 50.5213 28.1391C47.5453 28.1391 44.9133 29.6036 43.3213 31.8453C42.5098 30.6996 41.4318 29.7647 40.1785 29.1195C38.9252 28.4744 37.5335 28.1381 36.1213 28.1391Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const X = `<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="29" cy="29" r="29" fill="white"/>
<path d="M38.8335 22.885L31.9981 29.7203L38.8335 36.5557L36.5551 38.8341L29.7197 31.9988L22.8843 38.8341L20.6059 36.5557L27.4412 29.7203L20.6059 22.885L22.8843 20.6065L29.7197 27.4419L36.5551 20.6065L38.8335 22.885Z" fill="#232325"/>
</svg>
`;

const send = `<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3395_862)">
<g filter="url(#filter0_d_3395_862)">
<rect width="58" height="58" rx="4" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.0716 17.9283C40.2012 18.0579 40.2905 18.2223 40.3284 18.4016C40.3664 18.5809 40.3514 18.7674 40.2853 18.9383L30.8288 43.5253C30.7618 43.6992 30.645 43.8496 30.4929 43.9573C30.3408 44.0651 30.1602 44.1255 29.9739 44.1309C29.7875 44.1364 29.6038 44.0867 29.4456 43.988C29.2875 43.8893 29.162 43.7461 29.085 43.5763L25.1303 34.8763L30.9479 29.0568C31.1985 28.7879 31.3349 28.4322 31.3284 28.0648C31.3219 27.6973 31.1731 27.3466 30.9132 27.0868C30.6533 26.8269 30.3027 26.678 29.9352 26.6715C29.5677 26.665 29.212 26.8014 28.9431 27.052L23.1236 32.8697L14.4236 28.9168C14.2533 28.8399 14.1096 28.7143 14.0107 28.5558C13.9117 28.3973 13.862 28.2131 13.8676 28.0263C13.8733 27.8396 13.9341 27.6587 14.0425 27.5065C14.1509 27.3543 14.3019 27.2376 14.4766 27.1712L39.0635 17.7146C39.2342 17.649 39.4203 17.6342 39.5992 17.6721C39.7781 17.7101 39.9422 17.7991 40.0716 17.9283Z" fill="#232325"/>
</g>
<defs>
<filter id="filter0_d_3395_862" x="-4" y="0" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3395_862"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3395_862" result="shape"/>
</filter>
<clipPath id="clip0_3395_862">
<rect width="58" height="58" rx="29" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const oven = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1706 6.39075C18.5756 4.73587 19.971 4.03757 21.078 3.7712C21.6268 3.63915 22.0922 3.61624 22.4363 3.62752C22.6083 3.63316 22.7485 3.64729 22.8508 3.65989C22.8912 3.66487 22.9271 3.6698 22.9521 3.67325L22.9676 3.67537L22.9729 3.67609C23.7974 3.68558 24.7462 4.06328 25.4895 4.67611C26.2517 5.30458 26.875 6.2469 26.875 7.41884C26.875 8.42134 26.6987 9.33849 26.1918 10.1027C25.6789 10.876 24.8802 11.4143 23.7902 11.7566C23.4609 11.8601 23.1101 11.677 23.0067 11.3476C22.9032 11.0183 23.0863 10.6675 23.4156 10.5641C24.311 10.2828 24.8358 9.8857 25.1501 9.41182C25.4704 8.9289 25.625 8.28709 25.625 7.41884C25.625 6.72001 25.2556 6.10337 24.6943 5.64056C24.1236 5.17 23.4329 4.9259 22.9412 4.9259C22.8823 4.9259 22.8168 4.9165 22.8017 4.91433L22.7991 4.91396L22.7785 4.91115C22.7539 4.90776 22.7287 4.9043 22.6979 4.90051C22.6223 4.89119 22.5207 4.88096 22.3954 4.87685C22.1448 4.86864 21.7935 4.88471 21.3704 4.98651C20.5338 5.18782 19.3656 5.7367 18.1235 7.19974C17.2626 8.21377 16.6331 9.58168 16.2192 10.9237C15.8053 12.2658 15.625 13.5227 15.625 14.2783V26.75C15.625 27.0952 15.3452 27.375 15 27.375C14.6548 27.375 14.375 27.0952 14.375 26.75V14.25C14.375 13.4881 14.2039 12.2248 13.8124 10.8777C13.4206 9.5295 12.825 8.15676 12.012 7.14043C10.8395 5.6748 9.74227 5.13168 8.96694 4.93369C8.57424 4.83341 8.2489 4.81776 8.01787 4.82579C7.90223 4.82981 7.80849 4.83983 7.73858 4.84897C7.71005 4.8527 7.68685 4.85608 7.66365 4.85947L7.64396 4.86233L7.64227 4.86259C7.63005 4.86447 7.5619 4.875 7.5 4.875C7.05639 4.875 6.41619 5.11084 5.88032 5.57973C5.35626 6.03829 5 6.6592 5 7.375C5 8.25068 5.14727 8.90013 5.45187 9.3875C5.74853 9.86215 6.23921 10.2543 7.07264 10.5321C7.40011 10.6412 7.57708 10.9952 7.46793 11.3226C7.35877 11.6501 7.00482 11.8271 6.67736 11.7179C5.63579 11.3707 4.87647 10.8253 4.39188 10.05C3.91523 9.28737 3.75 8.37432 3.75 7.375C3.75 6.21579 4.33124 5.27421 5.05718 4.63901C5.76091 4.02325 6.66681 3.63638 7.46472 3.62525L9.27622 3.72256C10.3365 3.99331 11.6605 4.70019 12.988 6.35956C13.9419 7.55186 14.5963 9.09578 15.0128 10.5288C15.016 10.54 15.0193 10.5513 15.0225 10.5625C15.0232 10.5601 15.024 10.5577 15.0247 10.5553C15.4666 9.12251 16.1607 7.58035 17.1706 6.39075Z" fill="white" stroke="white" stroke-linecap="round"/>
</svg>
`;

const nav = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M7.82502 5.97909C7.82502 5.59923 7.66857 5.23492 7.39008 4.96632C7.11159 4.69772 6.73387 4.54682 6.34002 4.54682C5.94618 4.54682 5.56846 4.69772 5.28997 4.96632C5.01148 5.23492 4.85502 5.59923 4.85502 5.97909C4.85502 6.35895 5.01148 6.72326 5.28997 6.99186C5.56846 7.26046 5.94618 7.41136 6.34002 7.41136C6.73387 7.41136 7.11159 7.26046 7.39008 6.99186C7.66857 6.72326 7.82502 6.35895 7.82502 5.97909ZM12.28 5.97909C12.28 8.72332 9.21399 11.7235 7.48743 13.1958C7.17174 13.4678 6.76329 13.6181 6.34002 13.6181C5.91676 13.6181 5.50831 13.4678 5.19261 13.1958C3.46605 11.7235 0.400024 8.72332 0.400024 5.97909C0.400024 5.22674 0.553667 4.48175 0.85218 3.78666C1.15069 3.09158 1.58823 2.46001 2.13981 1.92801C2.69139 1.39602 3.34621 0.974015 4.06688 0.686101C4.78756 0.398187 5.55997 0.25 6.34002 0.25C7.12008 0.25 7.89249 0.398187 8.61316 0.686101C9.33384 0.974015 9.98866 1.39602 10.5402 1.92801C11.0918 2.46001 11.5294 3.09158 11.8279 3.78666C12.1264 4.48175 12.28 5.22674 12.28 5.97909ZM11.29 5.97909C11.29 4.71288 10.7685 3.49854 9.8402 2.60319C8.9119 1.70785 7.65285 1.20485 6.34002 1.20485C5.0272 1.20485 3.76815 1.70785 2.83985 2.60319C1.91154 3.49854 1.39002 4.71288 1.39002 5.97909C1.39002 7.03706 1.99887 8.26595 2.94432 9.4958C3.86898 10.697 5.01045 11.7655 5.84799 12.4807C5.98275 12.5985 6.15814 12.6637 6.34002 12.6637C6.52191 12.6637 6.6973 12.5985 6.83205 12.4807C7.66959 11.7655 8.81206 10.6979 9.73573 9.4958C10.6812 8.26595 11.29 7.03706 11.29 5.97909Z" fill="white"/>
</svg>`;

const percentage = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.77983 24.5C9.83183 23.8413 9.94883 23.148 10.1308 22.42C10.3128 21.692 10.5338 20.9857 10.7938 20.301C11.0625 19.6077 11.3528 18.962 11.6648 18.364C11.9855 17.7573 12.3018 17.2503 12.6138 16.843H8.46683V15.491H14.4858V16.687C14.1998 17.0077 13.8878 17.4453 13.5498 18C13.2118 18.5547 12.8912 19.183 12.5878 19.885C12.2845 20.5783 12.0202 21.3237 11.7948 22.121C11.5782 22.9183 11.4438 23.7113 11.3918 24.5H9.77983ZM18.8325 20.119C18.5812 20.119 18.3385 20.1407 18.1045 20.184C17.8705 20.2273 17.6582 20.2923 17.4675 20.379C17.4588 20.4483 17.4502 20.5263 17.4415 20.613C17.4415 20.691 17.4415 20.769 17.4415 20.847C17.4415 21.1937 17.4632 21.523 17.5065 21.835C17.5585 22.1383 17.6408 22.407 17.7535 22.641C17.8748 22.8663 18.0352 23.0483 18.2345 23.187C18.4425 23.317 18.6982 23.382 19.0015 23.382C19.2528 23.382 19.4652 23.33 19.6385 23.226C19.8205 23.122 19.9678 22.9877 20.0805 22.823C20.1932 22.6583 20.2755 22.4807 20.3275 22.29C20.3795 22.0907 20.4055 21.9 20.4055 21.718C20.4055 21.198 20.2798 20.8037 20.0285 20.535C19.7772 20.2577 19.3785 20.119 18.8325 20.119ZM19.0275 18.871C19.5648 18.871 20.0198 18.949 20.3925 19.105C20.7738 19.2523 21.0815 19.456 21.3155 19.716C21.5495 19.976 21.7185 20.2793 21.8225 20.626C21.9352 20.964 21.9915 21.3193 21.9915 21.692C21.9915 22.03 21.9308 22.3767 21.8095 22.732C21.6968 23.0873 21.5148 23.4123 21.2635 23.707C21.0208 23.993 20.7132 24.2313 20.3405 24.422C19.9678 24.604 19.5258 24.695 19.0145 24.695C17.9832 24.695 17.1945 24.357 16.6485 23.681C16.1112 22.9963 15.8425 22.056 15.8425 20.86C15.8425 19.9933 15.9682 19.2263 16.2195 18.559C16.4795 17.883 16.8435 17.3153 17.3115 16.856C17.7882 16.3967 18.3602 16.05 19.0275 15.816C19.7035 15.5733 20.4618 15.4477 21.3025 15.439L21.3935 16.739C20.9255 16.7477 20.4878 16.7997 20.0805 16.895C19.6732 16.9817 19.3092 17.1203 18.9885 17.311C18.6678 17.5017 18.3905 17.7487 18.1565 18.052C17.9312 18.3553 17.7578 18.728 17.6365 19.17C18.0612 18.9707 18.5248 18.871 19.0275 18.871ZM27.5342 17.753C27.5342 18.5417 27.3305 19.1483 26.9232 19.573C26.5245 19.9977 26.0002 20.21 25.3502 20.21C25.0295 20.21 24.7348 20.158 24.4662 20.054C24.1975 19.9413 23.9678 19.781 23.7772 19.573C23.5865 19.365 23.4348 19.1093 23.3222 18.806C23.2182 18.494 23.1662 18.143 23.1662 17.753C23.1662 16.9557 23.3655 16.349 23.7642 15.933C24.1715 15.5083 24.7002 15.296 25.3502 15.296C26.0002 15.296 26.5245 15.5083 26.9232 15.933C27.3305 16.349 27.5342 16.9557 27.5342 17.753ZM26.2992 17.753C26.2992 17.2937 26.2125 16.9513 26.0392 16.726C25.8745 16.492 25.6448 16.375 25.3502 16.375C25.0555 16.375 24.8258 16.492 24.6612 16.726C24.4965 16.9513 24.4142 17.2937 24.4142 17.753C24.4142 18.2123 24.4965 18.559 24.6612 18.793C24.8258 19.0183 25.0555 19.131 25.3502 19.131C25.6448 19.131 25.8745 19.0183 26.0392 18.793C26.2125 18.559 26.2992 18.2123 26.2992 17.753ZM30.1732 15.491H31.6682L26.5852 24.5H25.0902L30.1732 15.491ZM33.6052 22.251C33.6052 23.0397 33.4015 23.6463 32.9942 24.071C32.5955 24.4957 32.0712 24.708 31.4212 24.708C31.1005 24.708 30.8058 24.6517 30.5372 24.539C30.2685 24.435 30.0388 24.279 29.8482 24.071C29.6575 23.863 29.5058 23.6073 29.3932 23.304C29.2892 22.992 29.2372 22.641 29.2372 22.251C29.2372 21.4537 29.4365 20.847 29.8352 20.431C30.2425 20.0063 30.7712 19.794 31.4212 19.794C32.0712 19.794 32.5955 20.0063 32.9942 20.431C33.4015 20.847 33.6052 21.4537 33.6052 22.251ZM32.3702 22.251C32.3702 21.7917 32.2835 21.4493 32.1102 21.224C31.9455 20.99 31.7158 20.873 31.4212 20.873C31.1265 20.873 30.8968 20.99 30.7322 21.224C30.5675 21.4493 30.4852 21.7917 30.4852 22.251C30.4852 22.7103 30.5675 23.057 30.7322 23.291C30.8968 23.5163 31.1265 23.629 31.4212 23.629C31.7158 23.629 31.9455 23.5163 32.1102 23.291C32.2835 23.057 32.3702 22.7103 32.3702 22.251Z" fill="white"/>
<circle cx="20" cy="20" r="18.5" stroke="#6F6F6F" stroke-width="3"/>
<path d="M20 1.5C23.7578 1.5 26.8755 2.41225 30 4.5C33.1245 6.58775 35.5619 9.5282 37 13C38.4381 16.4718 38.7331 19.8144 38 23.5C37.2669 27.1856 35.6572 30.3428 33 33C30.3428 35.6572 27.1856 37.2669 23.5 38C19.8144 38.7331 16.4718 38.4381 13 37C9.52821 35.5619 6.58775 33.1245 4.5 30C2.41225 26.8755 1.5 23.7578 1.5 20" stroke="white" stroke-width="3" stroke-linecap="round"/>
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
  align-items: center;
  width: 90%;
`;

const Img = styled.Image`
  margin-right: 15px;
  width: 25%;
  height: 25%;
  resize-mode: stretch;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 90%;
`;

const Location = styled.Text`
  color: #c3c0c0;
  width: 90%;
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
  height: 1%;
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
  height: 100%;
  gap: 40px;
  margin-top: 15px;
`;

export function FullProfile({ navigation }) {
  const [text, onChangeText] = React.useState('');

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <ImageBackground
    //     source={require('../assets/icons/image3.png')}
    //     style={{
    //       width: '100%',
    //       height: '55%',
    //     }}
    //   >
    //     <Header></Header>
    //   </ImageBackground>

    //   <Main
    //     style={[
    //       styles.container,
    //       {
    //         borderTopRightRadius: 20,
    //         borderTopLeftRadius: 20,
    //         zIndex: 1,
    //         position: 'absolute',
    //         top: 200,
    //       },
    //     ]}
    //   >
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         gap: 20,
    //         position: 'absolute',
    //         top: '-5%',
    //       }}
    //     >
    //       <SvgXml xml={X} width="60px" height="60px" />
    //       <SvgXml xml={like} width="80px" height="80px" />
    //       <SvgXml xml={send} width="60px" height="60px" />
    //     </View>
    //     <Name>Счастливый пользователь , 6</Name>
    //     <View style={{ flexDirection: 'row', gap: 20 }}>
    //       <View style={{ flexDirection: 'row', gap: 10 }}>
    //         <SvgXml xml={rak} width="20px" height="20px" />
    //         <Txt style={{ color: 'white' }}>Рак</Txt>
    //       </View>
    //       <View style={{ flexDirection: 'row', gap: 10 }}>
    //         <SvgXml xml={icon} width="20px" height="20px" />
    //         <Txt style={{ color: 'white' }}>Дружба</Txt>
    //       </View>
    //     </View>

    //     <Location>Свердловская область , Екатеринбург</Location>

    //     <Info>
    //       <Button>
    //         <Txt style={{ color: 'white' }}>Информация</Txt>
    //       </Button>
    //       <Button onPress={() => navigation.navigate('Gallery')}>
    //         <Txt>Галерея</Txt>
    //       </Button>
    //     </Info>
    //     <FullForm>
    //       <LabelContainer>
    //         <AboutMe>О себе</AboutMe>
    //       </LabelContainer>
    //       <Form>
    //         <Input onChangeText={onChangeText} value={text} />
    //       </Form>
    //     </FullForm>
    //     <EntertainmentsContainer>
    //       <Entertainments>Увлечения</Entertainments>
    //       <ButtonContainer>
    //         <EntertainmentButton>
    //           <EntertainmentText>Музеи</EntertainmentText>
    //         </EntertainmentButton>
    //         <EntertainmentButton>
    //           <EntertainmentText>Языки</EntertainmentText>
    //         </EntertainmentButton>
    //       </ButtonContainer>

    //       <Entertainments>Предпочтения</Entertainments>
    //       <ButtonContainer style={{ width: '80%' }}>
    //         <Txt>
    //           Любимый фильм - "Звездные войны: Эпизод VI - Возвращение джедая".
    //           Обожаю слушать музыку, любимый альбом - "Dark Side of the Moon"
    //           Pink Floyd.
    //         </Txt>
    //       </ButtonContainer>
    //     </EntertainmentsContainer>
    //   </Main>
    // </ScrollView>
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        backgroundColor: '#232325',
        width: '100%',
        height: '1000%',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <ImageBackground
        source={require('../assets/icons/image3.png')}
        style={{
          width: '100%',
          height: '15%',
        }}
      >
        <Header>
          <SvgXml
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
            }}
            xml={back}
            width="40px"
            height="40px"
          />
        </Header>
      </ImageBackground>
      <Main
        style={[
          styles.container,
          {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            zIndex: 1,
            position: 'absolute',
            top: 180,
            paddingTop: 50,
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            position: 'absolute',
            top: -50,
          }}
        >
          <SvgXml xml={X} width="60px" height="60px" />
          <SvgXml xml={like} width="80px" height="80px" />
          <SvgXml xml={send} width="60px" height="60px" />
        </View>
        <Name>Самый чудесный , 3</Name>

        <Location>В чём секрет кота Бориса?</Location>

        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            marginTop: 20,
            width: '90%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <SvgXml xml={oven} width="20px" height="20px" />
            <Txt style={{ color: 'white' }}>Овен</Txt>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <SvgXml xml={icon} width="20px" height="20px" />
            <Txt style={{ color: 'white' }}>Дружба</Txt>
          </View>
        </View>

        <Info style={{ width: '90%' }}>
          <Txt style={{ color: 'white' }}>
            Свердловская область, Екатеринбург
          </Txt>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <SvgXml xml={nav} width="20px" height="20px" />
            <Txt style={{ color: 'white' }}>1 км</Txt>
          </View>
        </Info>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            alignItems: 'center',
            gap: 20,
          }}
        >
          <SvgXml xml={percentage} width="50px" height="50px" />
          <Txt style={{ color: 'white' }}>Совместимость</Txt>
        </View>

        <EntertainmentsContainer style={{ marginTop: 500, gap: 100 }}>
          <ButtonContainer
            style={{ width: '80%', flexDirection: 'column', gap: 15 }}
          >
            <Entertainments style={{ textAlign: 'center' }}>
              О себе
            </Entertainments>
            <Txt>
              Кошка или Домашняя кошка (лат. Félis silvéstris cátus) — домашнее
              животное, млекопитающее семейства кошачьих отряда хищных...
            </Txt>
            <View>
              <Txt>Читать больше</Txt>
            </View>
          </ButtonContainer>

          <View style={{ gap: 20 }}>
            <Entertainments style={{ textAlign: 'center' }}>
              Галерея
            </Entertainments>
            <Image source={require('../assets/icons/bigpic.png')} />
          </View>

          <View>
            <Entertainments style={{ textAlign: 'center' }}>
              Увлечения
            </Entertainments>
            <View style={{ height: '100%', gap: -60 }}>
              <ButtonContainer>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Музей</Txt>
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Языки</Txt>
                </View>
              </ButtonContainer>
            </View>
          </View>
          <View>
            <Entertainments style={{ textAlign: 'center' }}>
              Любимые мероприятия
            </Entertainments>
            <View style={{ height: '100%', gap: -60 }}>
              <ButtonContainer>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Кино</Txt>
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Музыка</Txt>
                </View>
              </ButtonContainer>
              <ButtonContainer>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Опера</Txt>
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 60,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Балет</Txt>
                </View>
              </ButtonContainer>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Entertainments style={{ textAlign: 'center', width: 300 }}>
              Главные аспекты в отношениях
            </Entertainments>
            <View style={{ height: '100%', gap: -60, width: 390 }}>
              <ButtonContainer>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 50,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Юмор</Txt>
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 50,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>
                    Искренность
                  </Txt>
                </View>
              </ButtonContainer>
              <ButtonContainer>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                    paddingHorizontal: 50,
                    height: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt style={{ width: '100%', color: 'white' }}>Поддержка</Txt>
                </View>
              </ButtonContainer>
            </View>
          </View>
        </EntertainmentsContainer>
      </Main>
      <Text style={{ fontSize: 96 }}>Scrolling down</Text>
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Text style={{ fontSize: 96 }}>What's the best</Text>
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Text style={{ fontSize: 96 }}>Framework around?</Text>
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Image source={require('../assets/icons/image3.png')} />
      <Text style={{ fontSize: 80 }}>React Native</Text>
    </ScrollView>
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
