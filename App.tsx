import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, Platform, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native-ui-lib';
import APIProvider from './src/api/APIProvider';
import {hydrateAuth, setI18nConfig} from './src/core';
import {RootNavigator} from './src/navigation';
import {ThemeProvider} from './src/ui';

LogBox.ignoreLogs(['new NativeEventEmitter()']);
setI18nConfig();
hydrateAuth();

const App = () => {
  return (
    <APIProvider>
      <ThemeProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
        {/* <RootNavigator /> */}
        <FlashMessage position="top" />
      </ThemeProvider>
    </APIProvider>
  );
};

export default App;
