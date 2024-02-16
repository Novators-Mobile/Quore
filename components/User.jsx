import { SvgXml } from 'react-native-svg';
import { styled } from 'styled-components';

const fullLikeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
<path d="M9.04663 3.6982C5.95614 3.6982 3.45068 6.17949 3.45068 9.24016C3.45068 14.7821 10.0641 19.8203 13.6251 20.9922C17.1862 19.8203 23.7996 14.7821 23.7996 9.24016C23.7996 6.17949 21.2941 3.6982 18.2036 3.6982C16.3112 3.6982 14.6375 4.62874 13.6251 6.05303C13.1091 5.32512 12.4236 4.73106 11.6266 4.32116C10.8297 3.91125 9.94468 3.69757 9.04663 3.6982Z" fill="#E98C8C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ellipse = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<ellipse cx="20.8015" cy="21.043" rx="20.7053" ry="20.6882" fill="white"/>
</svg>`;

const fullDislikeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<ellipse cx="14.3611" cy="13.8602" rx="13.4305" ry="13.4194" fill="white"/>
<path d="M18.9153 11.0307L15.7497 14.1936L18.9153 17.3566L17.8601 18.4109L14.6945 15.248L11.5289 18.4109L10.4737 17.3566L13.6393 14.1936L10.4737 11.0307L11.5289 9.97634L14.6945 13.1393L17.8601 9.97634L18.9153 11.0307Z" fill="#232325"/>
</svg>`;

const UserCard = styled.View`
  border: 1px solid white;
  position: relative;
  border-radius: 25px;
  width: 47%;
`;

const Img = styled.Image`
  resize-mode: stretch;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const Name = styled.Text`
  position: absolute;
  font-family: ubuntu-regular;
  font-size: 24px;
  top: 85%;
  left: 5%;
  color: white;
`;

export const User = ({ name, imageUrl, description }) => {
  return (
    <UserCard>
      <Img
        source={{
          uri: imageUrl,
        }}
      />
      <Name>{name}, 6</Name>
      <SvgXml
        style={{ position: 'absolute', top: 0, left: -5, zIndex: 1 }}
        xml={fullLikeIcon}
        width="50px"
        height="50px"
      />
      <SvgXml
        style={{ position: 'absolute', top: -10, left: -10 }}
        xml={ellipse}
        width="62px"
        height="62px"
      />
      <SvgXml
        style={{ position: 'absolute', top: 60, left: 5 }}
        xml={fullDislikeIcon}
        width="40px"
        height="40px"
      />
    </UserCard>
  );
};
