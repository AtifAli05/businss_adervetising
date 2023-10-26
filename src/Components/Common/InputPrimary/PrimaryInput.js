import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {WP} from '../../../Utils';
import {colors} from '../../../Utils/Constants/Colors';
const PrimaryInput = ({
  placeHolder,
  autoCapitalize,
  autoFocus,
  placeholderTextColor,
  keyboardType,
  type,
  autoCorrect,
  mainContainerStyle,
  inputIcon,
  inputStyle,
  onChangeText,
  icon,
  onBlur,
  value,
  stylePrimaryInput,
  secureTextEntry,
  icon2,
  styleText,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      {icon}
      <TextInput
        keyboardType={keyboardType}
        textContentType={type}
        value={value}
        placeholder={placeHolder}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={[styles.inputStyleText, styleText]}
        secureTextEntry={secureTextEntry}
      />
      {icon2}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: WP(92.89),
    height: WP(12.56),
    borderColor: colors.InputBorderColor,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyleText: {
    width: WP(77.05),
    color: colors.performanceHeading,
  },
});
export default PrimaryInput;
