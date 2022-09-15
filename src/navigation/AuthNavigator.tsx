import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Login} from '@screens';
import {PrivacyPolicyScreen} from '@screens/Auth/PrivacyPolicy';
import {SignUpScreen} from '@screens/Auth/SignUp';
import {VeriCationScreen} from '@screens/Auth/VeriCation';
import * as React from 'react';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: {
    type: 'main' | 'extra';
  };
  PrivacyPolicy: undefined;
  VeriCation: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        // options={{headerShown: false}}

        name="Login"
        component={Login}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="VeriCation" component={VeriCationScreen} />
    </Stack.Navigator>
  );
};
