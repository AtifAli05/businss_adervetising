import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../../Utils/Constants/Colors";
import { WP } from "../../../Utils";
import PrimaryInput from "../../../Components/Common/InputPrimary/PrimaryInput";
import ButtonPrimary from "../../../Components/Common/ButtonPrimary/ButtonPrimary";
import AnySvg from "../../../Assets/Images/svg";
import EmailIcon from "../../../Assets/Images/svg/Email-Icon";
import PasswordSecure from "../../../Assets/Images/svg/Password-Secure";
import PasswordLock from "../../../Assets/Images/svg/Password-Secure";
const SignUp = ({ navigation }) => {
  return (
    <View style={styles.mainContainerLogin}>
      <Text style={styles.SignIn}>Sign Up</Text>

      <View
        style={{
          marginTop: 53,
          alignSelf: "center",
        }}
      >
        <View style={styles.InputEmail}>
          <PrimaryInput
            placeHolder="Enter Email"
            keyboardType="email-address"
            placeholderTextColor={colors.textSecondary}
            autoCapitalize="none"
            autoCorrect={false}
            styleText={{ marginLeft: 3 }}
            mainContainerStyle={{
              elevation: 11,
              backgroundColor: "#FFFFFF",
            }}
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
            // icon={
            // 	<EmailIcon
            // 		name='mail'
            // 		style={{ color: colors.buttonPrimary }}
            // 		size={20}
            // 	/>
            // }
            icon={<AnySvg width={3.82} height={5.46} name={EmailIcon} />}
          />
        </View>
        <View style={styles.InputPassword}>
          <PrimaryInput
            placeHolder="Password"
            keyboardType="password"
            placeholderTextColor={colors.textSecondary}
            autoCapitalize="none"
            styleText={{ marginLeft: 3 }}
            mainContainerStyle={{
              elevation: 11,
              backgroundColor: "#FFFFFF",
            }}
            secureTextEntry={true}
            icon={<AnySvg width={3.82} height={5.46} name={PasswordLock} />}
            icon2={<AnySvg width={3.82} height={5.46} name={PasswordSecure} />}
          />
        </View>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.ForgotText}>Forgot password?</Text>
      </TouchableOpacity> */}
      <View>
        <ButtonPrimary
          title={"Sign Up"}
          style={{
            width: WP(92.89),
            marginTop: 51,
            elevation: 14,
            backgroundColor: colors.buttonBackground,
          }}
          buttonPress={() => navigation.navigate("DashboardScreen")}
        />
      </View>
      <View>
        <Text style={styles.DontText}>
          Have an account?{" "}
          <Text
            style={{ color: colors.buttonBackground }}
            onPress={() => navigation.navigate("Login")}
          >
            LogIn
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainerLogin: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  SignIn: {
    fontSize: 27,
    // fontFamily = FontFamily(Font(R.font.sf pro display)),
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginTop: 84,
  },
  InputPassword: {
    marginTop: 17,
  },
  ForgotText: {
    fontSize: 14,
    // fontFamily = FontFamily(Font(R.font.sf pro display)),
    fontWeight: "400",
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 51,
  },
  DontText: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textPrimary,
    textAlign: "center",
    paddingTop: 240,
  },
});
