import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../Utils/Constants/Colors';
import {WP} from '../../../Utils';
const ButtonPrimary = ({
  title,
  buttonPress,
  style,
  stylebtntxt,
  style2 = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={buttonPress}
      style={[
        style2 == true
          ? styles.mainContainerButtonStyle2
          : styles.mainContainerButtonStyle,
        style,
      ]}
      disabled={disabled}>
      <View style={{alignSelf: 'center'}}>
        <Text style={[styles.ButtonText, stylebtntxt]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainerButtonStyle: {

    width: WP(47.54),
    height: WP(13.66),
    borderRadius: 10,
    backgroundColor: colors.buttonBackground,
    alignSelf: 'center',
    marginVertical: WP(5),
  justifyContent:'center'
  },
  ButtonText: {

    color: colors.backgroundWhite,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default ButtonPrimary;
