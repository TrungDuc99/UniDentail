import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Text, View, ViewProps} from 'react-native-ui-lib';
import {TouchableOpacityBase} from '@components/base';
import {avatar, Colors, FontFamily, ScaleSize, Spacing} from '@configs';

import {ShieldCross, TickCircle} from 'iconsax-react-native';

interface UserAvatarProps extends ViewProps {
  userName: string;
  email?: string;
  avatarImage?: any;
  position?: string;
  backgroundColor?: string;
  state?: string | number;
  onPressCard?: () => void;
}
const UserAvatar = ({
  userName,
  email,
  position,
  avatarImage,
  backgroundColor,
  onPressCard,
  state,
  ...rest
}: UserAvatarProps) => {
  return (
    <TouchableOpacityBase onPress={onPressCard}>
      <View {...rest} row padding-5 backgroundColor={backgroundColor} style={styles.container}>
        <View row marginB-5>
          <View width={ScaleSize(33)} height={ScaleSize(33)} style={styles.wrapAvatar}>
            {avatarImage ? (
              <Image
                source={avatarImage}
                style={{
                  borderRadius: ScaleSize(50),
                  width: ScaleSize(50),
                  height: ScaleSize(50),
                }}
              />
            ) : (
              <Text style={styles.txtAvatar} children={avatar.generateName(userName)} />
            )}
          </View>
          <View marginH-8>
            <Text style={styles.fullName}>{userName}</Text>
            {position ? (
              <>
                <Text style={styles.decriptionUser}>{`[${position}]`}</Text>
                <Text style={styles.decriptionUser}>{`${email}`}</Text>
              </>
            ) : (
              <Text style={styles.decriptionUser}>{`${email}`}</Text>
            )}
          </View>
        </View>
        {!state ? (
          <View></View>
        ) : state === 1 ? (
          <TickCircle size="25" color="#37d67a" variant="Bold" />
        ) : (
          <ShieldCross size="25" color="#37d67a" variant="Bold" />
        )}
      </View>
    </TouchableOpacityBase>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    //backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  txtAvatar: {
    fontFamily: FontFamily.Bold,
    fontSize: ScaleSize(7),
    color: Colors.successColor,
  },
  wrapAvatar: {
    borderRadius: 50,
    borderWidth: ScaleSize(4),
    borderColor: '#DBE1EE',
    // backgroundColor: Colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    fontFamily: FontFamily.Bold,
    color: '#ffff',

    fontSize: ScaleSize(13),
  },
  decriptionUser: {
    fontSize: ScaleSize(11),
    color: '#ffff',
  },
});
