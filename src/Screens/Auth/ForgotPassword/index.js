import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../Utils/Constants/Colors';
import AnySvg from '../../../Assets/Images/svg';
import PrimaryInput from '../../../Components/Common/InputPrimary/PrimaryInput';
import ButtonPrimary from '../../../Components/Common/ButtonPrimary/ButtonPrimary';
import {WP} from '../../../Utils';
import SVGComponent from '../../../Assets/Images/svg/Img-Forgot-Back'
const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.mainContainerForgot}>
      <AnySvg
        width={6.55}
        height={6.55}
        name={SVGComponent}
        style={{alignSelf: 'flex-start', marginTop: 45, marginLeft: 25}}
        onPress={() => navigation.goBack()}
      />
      <View style={{marginTop: 47, alignSelf: 'center'}}>
        <Text style={styles.ForgotText1}>Forgot Password</Text>
        <Text style={styles.ForgotDescription}>
          Enter the email associated with your account and we'll send an email
          with instruction to rset your password
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <PrimaryInput
          placeHolder={'Email'}
          placeholderTextColor={colors.textSecondary}
          mainContainerStyle={{
            elevation: 11,
            backgroundColor: '#FFFFFF',
          }}
        />
      </View>
      <ButtonPrimary
        title={'Send'}
        style={{
          width: WP(92.89),
          marginTop: 30,
          elevation: 14,
          backgroundColor: colors.buttonBackground,
        }}
      />
      <View>
        <Text style={styles.DontText}>
          Don't have an account?{' '}
          <Text style={{color: colors.buttonBackground}}>Sign Up</Text>{' '}
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainerForgot: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  ForgotText1: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  ForgotDescription: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.textDescription,
    marginTop: 20,
  },
  DontText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textPrimary,
    textAlign: 'center',
    paddingTop: 320,
  },
});
