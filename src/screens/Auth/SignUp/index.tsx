import {ButtonBase} from '@components/base';
import Header from '@components/base/header';
import {ScaleSize, Spacing} from '@configs';
import {useAuth} from '@core';
import {yupResolver} from '@hookform/resolvers/yup';
import {AuthStackParamList} from '@navigation/AuthNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Input} from '@ui/Input';

import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';

import * as yup from 'yup';

type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
};

const schema = yup.object().shape({
  // email: yup.string().required().email(),
  // password: yup.string().required().min(6),
  // firstName: yup.string().required(),
  // lastName: yup.string().required(),
  // phone: yup.string().required(),
  // date: yup.string().required(),
});

export const SignUpScreen = () => {
  const {signIn} = useAuth();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // signIn({access: 'access-token', refresh: 'refresh-token'});
    navigation.navigate('PrivacyPolicy');
  };
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={['#EFEFF3', '#E8F0F8']}
      style={styles.linearGradient}>
      <Header title="Sign Up" />
      <View style={styles.container}>
        <Input
          control={control}
          name="firstName"
          placeholder="Nhập tên"
          label="First Name"
        />
        <Input
          control={control}
          name="lastName"
          placeholder="Nhập "
          label="Last Name"
        />
        <Input
          control={control}
          name="email"
          placeholder="Nhập email"
          label="Email Address (optional)"
        />
        <Input
          control={control}
          name="phone"
          placeholder="Enter your phone number"
          label="Phone Number"
        />
        <Input
          control={control}
          name="date"
          label="Date"
          placeholder="mm/dd/yyyy"
          secureTextEntry={true}
        />

        <View style={{width: '70%', marginTop: 20}}>
          <ButtonBase
            isShadow
            label="Sign up"
            onPress={handleSubmit(onSubmit)}
          />
          <View style={{marginVertical: Spacing(3)}} />
          <Text style={{textAlign: 'center', marginBottom: 5}}>
            Already have an account?
          </Text>
          <ButtonBase
            boderRadius={8}
            btnType="cancel"
            label="Sign up"
            onPress={() => console.log('1231241')}
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
    padding: 20,
    minHeight: 55,
  },
  linearGradient: {
    flex: 1,
  },
  textIntro: {
    marginVertical: 20,
  },
});
