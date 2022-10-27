import {ButtonBase} from '@components/base';
import Header from '@components/base/header';
import {FontFamily, ScaleSize, Spacing} from '@configs';
import {AuthStackParamList} from '@navigation/AuthNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';

export const PrivacyPolicyScreen = () => {
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
      <ScrollView style={{}}>
        <View style={{padding: 20, height: '74%'}}>
          <Text style={styles.textTitle}>Terms of Service</Text>
          <View marginV-10 />
          <Text style={styles.textDecription}>
            Computers have become ubiquitous in almost every facet of our lives.
            At work, desk jockeys spend hours in front of their desktops, while
            delivery people scan bar codes with handhelds and workers in the
            field stay in touch with the central office via their notebooks. At
            home, we rely on our desktops and notebooks to do our shopping, to
            entertain us, and to keep us abreast of world events. We may not see
            our email servers, but we count on them to deliver our email
            whenever and wherever we want it. Our PDAs keep track of our hectic
            schedules, our to-do lists, our contact lists, Even though computer
            hardware is central to almost
          </Text>
          <View marginV-20 />
          <Text style={styles.textTitle}>Privacy Policy:</Text>
          <View marginV-10 />
          <Text style={styles.textDecription}>
            Computers have become ubiquitous in almost every facet of our lives.
            At work, desk jockeys spend hours in front of their desktops, while
            delivery people scan bar codes with handhelds and workers in the
            field stay in touch with the central office via their notebooks. At
            home, we rely on our desktops and notebooks to do our shopping, to
            entertain us, and to keep us
          </Text>
        </View>
      </ScrollView>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 0, y: 0}}
        colors={['#ffff', '#ffffff00']}
        style={styles.linearGradientChildren}>
        <View style={styles.btn}>
          <ButtonBase
            isShadow
            label="I accept"
            onPress={() => {
              navigation.navigate('VeriCation');
            }}
          />
        </View>

        <View style={styles.btn}>
          <ButtonBase
            boderRadius={8}
            btnType="cancel"
            label="I decline"
            onPress={() => console.log('1231241')}
          />
        </View>
      </LinearGradient>
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
  linearGradientChildren: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 30,
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  btn: {
    width: '45%',
    marginBottom: Platform.OS === 'ios' ? 40 : 30,
  },
  textIntro: {
    marginVertical: 20,
  },

  textTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: ScaleSize(25),
  },
  textDecription: {
    fontFamily: FontFamily.Light,
    fontSize: ScaleSize(20),
  },
});
