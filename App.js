import SideBar from './components/SideBar';
import { useEffect, useCallback, useState } from 'react';
import * as Font from 'expo-font';
import { Navigation } from './screens/Navigation';

import { useContext } from 'react';

import { AuthProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // const { userInfo } = useContext(AuthContext);
  // console.log(userInfo);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      {/* {userInfo !== null ? <SideBar /> : <Navigation />} */}
      <Navigation />
      {/* <SignUpScreen style={{ backgroundColor: '#000' }}></SignUpScreen> */}
    </AuthProvider>
    // <SideBar />
  );
}
