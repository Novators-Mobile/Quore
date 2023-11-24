import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Title, Txt, Img } from './SignUpScreen';

export const Recommendations = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [isPress, setIsPress] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'red', // <-- "backgroundColor" will be always overwritten by "underlayColor"
    source: isPress
      ? require('../assets/icons/dislike.png')
      : require('../assets/icons/pressed-dislike.png'),
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          style={{ width: 48, marginTop: 28, marginLeft: 5 }}
          onPress={() => navigation.openDrawer()}
        >
          <View style={{ gap: 4 }}>
            <Txt style={styles.text}></Txt>
            <Txt style={styles.text}></Txt>
            <Txt style={styles.shorterText}></Txt>
          </View>
        </TouchableHighlight>
        <Title style={{ fontSize: 24, marginTop: 20 }}>Рекомендации</Title>
        <TouchableHighlight
          style={{ width: 48, marginTop: 28, marginLeft: 10 }}
        >
          <Img
            source={require('../assets/icons/filter.png')}
            style={{ width: 27, height: 29 }}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.info}>
        <Img
          source={require('../assets/icons/avatar.png')}
          style={styles.image}
        />
        <Txt style={styles.name}>Хороший мальчик , 5</Txt>
        <Txt style={styles.descr}>Просто кот</Txt>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: -10,
            padding: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 10,
            top: 440,
            left: 280,
          }}
        >
          <Img source={require('../assets/icons/navigation.png')} style={{}} />
          <Txt>1 км</Txt>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 300,
          marginLeft: 15,
        }}
      >
        <TouchableHighlight>
          <Img {...touchProps} style={styles.estimateBtn} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Img
            source={require('../assets/icons/like.png')}
            style={styles.estimateBtn}
          />
        </TouchableHighlight>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 50,
          marginLeft: 20,
          marginTop: 60,
        }}
      >
        <TouchableHighlight>
          <Img
            source={require('../assets/icons/chats.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Img
            source={require('../assets/icons/Home-simple-door.png')}
            style={{ width: 40, height: 40, marginTop: -50 }}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Img
            source={require('../assets/icons/likes.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
      </View>

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
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
});
