import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {FontFamily, ScaleSize} from '@configs';

import {AuthStackParamList} from '@navigation/AuthNavigator';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';

import * as yup from 'yup';
import {ButtonBase} from '@components/base';
import {useAuth} from '@core';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});
//AuthStackParamList
export const Login = () => {
  const {signIn} = useAuth();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    signIn({access: 'access-token', refresh: 'refresh-token'});
  };
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={['#EFEFF3', '#E8F0F8']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Image
          source={require('@assets/images/group_intro.png')}
          style={{
            width: ScaleSize(350),
            height: ScaleSize(370),
          }}
        />

        <View style={styles.textIntro}>
          <Text
            style={{fontFamily: FontFamily.Regular, fontSize: ScaleSize(25)}}>
            The future of
          </Text>
          <View row>
            <Text
              style={{fontFamily: FontFamily.Bold, fontSize: ScaleSize(25)}}>
              Banking
            </Text>
            <Text
              style={{fontFamily: FontFamily.Regular, fontSize: ScaleSize(25)}}>
              {' '}
              is here
            </Text>
          </View>
        </View>
        <View style={{width: '70%'}}>
          <ButtonBase
            isShadow
            label="Sign  up"
            onPress={() => {
              navigation.navigate('SignUp', {type: 'extra'});
            }}
          />
          <View marginV-20 />
          <ButtonBase
            boderRadius={8}
            btnType="cancel"
            label="Sign  in"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    minHeight: 55,
  },
  linearGradient: {
    flex: 1,
  },
  textIntro: {
    marginVertical: 20,
  },
});
