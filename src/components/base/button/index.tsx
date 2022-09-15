import {FontFamily} from '@configs';
import TouchableOpacityBase from '@ui/touchableOpacity';
import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native-ui-lib';

interface ButtonBaseProps {
  label: string;
  btnType?: 'confirm' | 'cancel' | 'warning' | 'danger';
  boderRadius?: number;
  isShadow?: boolean;
  iconRight?: {
    color?: string;
    size?: number;
    IconName: any;
  };
  onPress?: () => void;
}
const ButtonBase = (props: ButtonBaseProps) => {
  const {
    label,
    iconRight,
    onPress,
    btnType,
    boderRadius,
    isShadow = false,
  } = props;
  const Icon = iconRight?.IconName;
  const [press, setPress] = useState(false);
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 55,
    },
    linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: boderRadius ? boderRadius : 20,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: FontFamily.Bold,
      textAlign: 'center',
      margin: 10,
      color:
        btnType === 'cancel'
          ? '#00A4E4'
          : btnType === 'danger'
          ? '#fff'
          : btnType === 'warning'
          ? '#fff'
          : '#fff',
      backgroundColor: 'transparent',
    },
  });

  return (
    <TouchableOpacityBase
      onPress={onPress}
      style={
        isShadow
          ? {
              width: '100%',
              shadowColor:
                btnType === 'cancel'
                  ? '#e5e9f5'
                  : btnType === 'danger'
                  ? '#FFA8A7'
                  : btnType === 'warning'
                  ? 'rgb(255,181,59)'
                  : '#aed8ea',
              shadowOffset: {
                width: 0,
                height: 30,
              },
              shadowOpacity: 0.5,
              shadowRadius: 10.51,

              elevation: 15,
            }
          : {}
      }>
      <LinearGradient
        colors={
          btnType === 'cancel'
            ? ['#e5e9f5', '#e5e9f5']
            : btnType === 'danger'
            ? ['#fff', '#fff']
            : btnType === 'warning'
            ? ['#fff', '#fff']
            : ['#50bdeb', '#28A4E4']
        }
        style={styles.linearGradient}>
        <View row style={styles.container}>
          <Text style={styles.buttonText}>{label}</Text>
          {iconRight && (
            <Icon
              color={iconRight?.color ? iconRight.color : 'white'}
              size={iconRight?.size ? iconRight.size : 25}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacityBase>
  );
};

export default ButtonBase;
