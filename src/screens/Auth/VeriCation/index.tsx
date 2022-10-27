import {ButtonBase, TouchableOpacityBase} from '@components/base';
import {CodeInput} from '@components/base/fill-code-input';

import Header from '@components/base/header';
import Rectangle from '@components/base/rectangle';
import {Colors, FontFamily, ScaleSize, Spacing} from '@configs';
import {AuthStackParamList} from '@navigation/AuthNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ArrowRight, ArrowRotateLeft} from 'iconsax-react-native';
import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';

export const VeriCationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={['#EFEFF3', '#E8F0F8']}
      style={styles.linearGradient}>
      <View style={{height: Platform.OS === 'ios' ? 70 : 50}}>
        <Header title="Privacy Policy" />
      </View>

      <View flex padding-20>
        <View centerH centerV style={{zIndex: 99999, marginTop: Spacing(20)}}>
          <Image
            source={require('@assets/images/Saly-39.png')}
            style={{
              width: ScaleSize(200),
              height: ScaleSize(220),
            }}
          />
        </View>

        <View
          style={{position: 'absolute', top: Spacing(20), left: Spacing(10)}}
          marginL-100
          centerH>
          <Rectangle />
        </View>
        <View
          style={{position: 'absolute', top: Spacing(50), left: Spacing(20)}}
          centerH>
          <Rectangle colorB="#F2F4FA" colorT="#F2F4FA" />
        </View>
        <View style={styles.guide}>
          <Text style={styles.textTitle}>Enter the Verification Code</Text>
          <Text style={styles.textDecription}>
            {' Enter the 6 digit number that we send\n to (+1) 1-541-754-3010'}
          </Text>
        </View>
      </View>
      <CodeInput lengthInput={6} />
      <View centerH>
        <View style={styles.btn}>
          <ButtonBase
            isShadow
            label="Continue"
            iconRight={{
              IconName: ArrowRight,
              color: '#Ffff',
            }}
            onPress={() => {
              navigation.navigate('SignUp', {type: 'extra'});
            }}
          />
        </View>
      </View>
      <View centerH row style={styles.resend}>
        <Text
          style={{
            fontFamily: FontFamily.Medium,
            color: '#797979',
            fontSize: ScaleSize(20),
          }}>
          Didn't receive anything?{'  '}
        </Text>
        <TouchableOpacityBase row onPress={() => {}}>
          <ArrowRotateLeft color={Colors.blue_primary} />
          <Text
            style={{
              marginTop: 1,
              fontFamily: FontFamily.Medium,
              fontSize: ScaleSize(20),
              color: Colors.blue_primary,
            }}>
            {''}
            Resend
          </Text>
        </TouchableOpacityBase>
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
  btn: {
    width: '60%',

    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 40 : 30,
  },
  linearGradient: {
    flex: 1,
  },

  textIntro: {
    marginVertical: 20,
  },
  guide: {
    alignItems: 'center',
    marginTop: Spacing(20),
  },
  resend: {
    height: 100,
    textAlign: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: ScaleSize(22),
  },
  textDecription: {
    marginTop: Spacing(4),
    fontFamily: FontFamily.Light,
    fontSize: ScaleSize(20),
    textAlign: 'center',
  },
});
