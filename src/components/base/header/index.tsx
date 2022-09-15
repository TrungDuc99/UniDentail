import {Colors, FontFamily, ScaleSize, Spacing} from '@configs';
import {useNavigation} from '@react-navigation/native';
import {ArrowCircleLeft, ArrowLeft} from 'iconsax-react-native';
import React from 'react';
import {Image, Platform, StatusBar, StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Text, View, ViewProps} from 'react-native-ui-lib';
import TouchableOpacityBase from '../touchable-opacity-base';
interface BackTopBarProps extends ViewProps {
  title?: string;
}

const Header = ({title}: BackTopBarProps) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    btnBackNavigator: {
      padding: 10,

      position: 'absolute',
      top:
        Platform.OS === 'ios' && isIphoneX()
          ? ScaleSize(45)
          : Platform.OS === 'android'
          ? ScaleSize(15)
          : ScaleSize(35),
      left: 15,
      zIndex: 99,
      alignItems: 'flex-end',
    },
    container: {
      flex: 1,
      position: 'absolute',
      top:
        Platform.OS === 'ios' && isIphoneX()
          ? ScaleSize(40)
          : Platform.OS === 'android'
          ? ScaleSize(10)
          : ScaleSize(30),
      left: 5,
      zIndex: 99,
    },
    title: {
      fontSize: Platform.OS === 'ios' ? ScaleSize(18) : ScaleSize(20),
      fontFamily: FontFamily.Bold,
      color: Colors.textColor,
      textAlign: 'center',
      top: 10,

      zIndex: 99,
    },
  });
  // const IconBack =
  //   Platform.select({
  //     ios: require('@assets/icons/coolicon.png'),
  //     android: ArrowLeft,
  //   }) || ArrowLeft;

  const handlePressBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <>
      {!title ? (
        <TouchableOpacityBase
          style={styles.btnBackNavigator}
          onPress={handlePressBack}>
          <Image
            source={require('@assets/icons/coolicon.png')}
            style={{
              width: ScaleSize(20),
              height: ScaleSize(15),
            }}
          />
          {/* <IconBack
            color={Colors.primaryColor}
            size={ScaleSize(35)}
            style={{marginRight: 5}}
          /> */}
        </TouchableOpacityBase>
      ) : (
        <View row style={styles.container}>
          <TouchableOpacityBase onPress={handlePressBack}>
            <View padding-15>
              <Image
                source={require('@assets/icons/coolicon.png')}
                style={{
                  width: ScaleSize(20),
                  height: ScaleSize(15),
                }}
              />
              {/* <IconBack
                color={Colors.textColor}
                size={ScaleSize(35)}
                style={{marginRight: 5}}
              /> */}
            </View>
          </TouchableOpacityBase>
          <Text style={styles.title} children={title} />
        </View>
      )}
    </>
  );
};

export default Header;
