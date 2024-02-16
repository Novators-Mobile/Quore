import React from 'react';

import { FlatList, Image, View, ImageBackground } from 'react-native';

import { styled } from 'styled-components';

import SideButton from '../components/SideButton';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  height: 10%;
`;

const Container = styled.View`
  align-items: center;
  background-color: #232325;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.Pressable`
  margin-top: 28px;
`;

const Change = styled.Text`
  margin-top: 30px;
  color: #c3c0c0;
  text-align: center;
`;

const Main = styled.View`
  margin-top: 20px;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const Img = styled.Image`
  width: 25%;
  height: 25%;
  resize-mode: stretch;
  align-items: center;
`;

const ImgBlock = styled.View`
  width: 100%;
  height: 60%;
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
  margin-bottom: 30px;
`;

export const LabelContainer = styled.View`
  background-color: #232325;
  margin-start: 10px;
  z-index: 1;
  elevation: 1;
  border-radius: 10px;
  position: absolute;
  top: -12px;
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

const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};

export function Gallery({ navigation }) {
  return (
    <Container>
      <ImageBackground
        style={styles.container}
        source={require('../assets/icons/profile-background.png')}
      >
        <Header>
          <SideButton onPressed={() => navigation.openDrawer()} />
          <Change>Добавить фото</Change>
        </Header>
        <Main>
          <Info>
            <Button onPress={() => navigation.navigate('Profile')}>
              <Txt>Информация</Txt>
            </Button>
            <Button>
              <Txt style={{ color: 'white' }}>Галерея</Txt>
            </Button>
          </Info>

          <FlatList
            data={itemData}
            numColumns={2}
            renderItem={Item}
            keyExtractor={(item) => item.alt}
          />
          {/* <ImgBlock>
          <Img source={require('../assets/icons/cat1.png')} />
          <Img source={require('../assets/icons/cat2.png')} />
          <Img source={require('../assets/icons/cat3.png')} />
          <Img source={require('../assets/icons/cat1.png')} />
          <Img source={require('../assets/icons/cat2.png')} />
          <Img source={require('../assets/icons/cat1.png')} />
        </ImgBlock> */}
        </Main>
      </ImageBackground>
    </Container>
  );
}

const itemData = [
  {
    icon: (
      <Image
        style={{ width: '95%', height: '95%' }}
        source={require('../assets/icons/cat1.png')}
      />
    ),
  },
  {
    icon: (
      <Image
        style={{ width: '95%', height: '95%' }}
        source={require('../assets/icons/cat2.png')}
      />
    ),
  },
  {
    icon: (
      <Image
        style={{ width: '95%', height: '95%' }}
        source={require('../assets/icons/cat3.png')}
      />
    ),
  },
];

const styles = {
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    width: 600,
    justifyContent: 'space-between',
  },
  item: {
    width: 160,
    height: 160,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
};
