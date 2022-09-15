import {ScaleSize} from '@configs';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native-ui-lib';

interface RectangleProps {
  colorT?: string;
  colorB?: string;
}

const Rectangle = (props: RectangleProps) => {
  const {colorT = '#CEEDFA', colorB = '#E3EEF7'} = props;
  return (
    <View>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        colors={[colorB, colorT]}
        style={styles.linearGradient}
      />
    </View>
  );
};

export default Rectangle;

const styles = StyleSheet.create({
  linearGradient: {
    height: ScaleSize(170),
    width: ScaleSize(192),
    borderRadius: 38,
  },
});
