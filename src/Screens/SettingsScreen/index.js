import React, { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { WP } from "../../Utils";
import { colors } from "../../Utils/Constants/Colors";
import AnySvg from "../../Assets/Images/svg";
import Profile from "../../Assets/Images/svg/Profile";
import AddIcon from "../../Assets/Images/svg/Add-Icon";
import CurrencyLogo from "../../Assets/Images/svg/Currency-Logo";
import CurrencyGo from "../../Assets/Images/svg/Currency-Go";
import RateLogo from "../../Assets/Images/svg/Rate-Logo";
import ShareLogo from "../../Assets/Images/svg/Share-Logo";
import SignOutIcon from "../../Assets/Images/svg/SignOut-Icon";
import SearchLogo from "../../Assets/Images/svg/Search-Logo";
import SelectLanguage from "../../Assets/Images/svg/Select-Language";

import { Card } from "react-native-shadow-cards";
import PrimaryInput from "../../Components/Common/InputPrimary/PrimaryInput";
import RBSheet from "react-native-raw-bottom-sheet";

const SettingsScreen = ({ navigation }) => {
  const refRBSheet = useRef();

  return (
    <View style={styles.mainContainerSettings}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AnySvg
          width={10.92}
          height={10.92}
          name={Profile}
          style={{ alignSelf: "flex-start", marginTop: 29 }}
        />
        <Text style={styles.BudgetText}>Settings</Text>
        <AnySvg
          width={10.92}
          height={10.92}
          name={AddIcon}
          style={{ marginTop: 29 }}
          onPress={() => refRBSheet.current.open()}
        />
      </View>

      <Card
        style={{
          width: WP(96.17),
          height: WP(12.56),
          alignSelf: "center",
          borderRadius: 6,
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AnySvg
              width={6.28}
              height={6.28}
              name={CurrencyLogo}
              style={{ alignSelf: "flex-start" }}
            />
            <Text style={styles.TextCurrency}>Currency</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text onPress={() => refRBSheet.current.open()}>USD</Text>
            <AnySvg width={5} height={3} name={CurrencyGo} />
          </View>
        </View>
      </Card>
      <Card
        style={{
          width: WP(96.17),
          height: WP(25.13),
          alignSelf: "center",
          borderRadius: 6,
          marginTop: 6,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <AnySvg
              width={6.28}
              height={6.28}
              name={RateLogo}
              style={{ alignSelf: "flex-start" }}
            />
            <Text style={styles.TextCurrency}>Rate App</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <AnySvg
              width={6.28}
              height={6.28}
              name={ShareLogo}
              style={{ alignSelf: "flex-start" }}
            />
            <Text style={styles.TextCurrency}>Share App</Text>
          </View>
        </View>
      </Card>

      <Card
        style={{
          width: WP(96.17),
          height: WP(12.56),
          alignSelf: "center",
          borderRadius: 6,
          marginTop: 107,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingVertical: 12,
          }}
        >
          <AnySvg width={3.96} height={4.91} name={SignOutIcon} />
          <TouchableOpacity onPress={() => navigation.navigate("NoExpense")}>
            <Text style={styles.SignOut}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </Card>

      <View>
        <Text style={styles.AppText}>App Version 12.21</Text>
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 24,
        }}
      >
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={600}
          customStyles={{
            draggableIcon: {
              backgroundColor: colors.buttonPrimary,
            },
            container: {
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
            },
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.topTitle}>Available Languages</Text>
            </View>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Text style={styles.TextCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontlLine}></View>
          <View style={{ marginTop: 15, alignSelf: "center" }}>
            <PrimaryInput
              placeHolder={"Search Here"}
              placeholderTextColor={colors.textDescription}
              styleText={{ marginLeft: 12 }}
              mainContainerStyle={{
                borderRadius: 10,
                backgroundColor: colors.InputBackground,
                elevation: 5,
                width: WP(95.62),
                paddingHorizontal: 10,
              }}
              icon={<AnySvg width={5.46} height={5.46} name={SearchLogo} />}
            />
          </View>
          <View style={{ marginTop: 35, marginLeft: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.TextUsd}>USD</Text>
              <AnySvg
                width={4.37}
                height={4.37}
                name={SelectLanguage}
                style={{ marginRight: 15 }}
              />
            </View>
            <ScrollView>
              <Text style={styles.commonLanguage}>AED</Text>
              <Text style={styles.commonLanguage}>AFN</Text>
              <Text style={styles.commonLanguage}>ALL</Text>
              <Text style={styles.commonLanguage}>AMD</Text>
              <Text style={styles.commonLanguage}>ANG</Text>
              <Text style={styles.commonLanguage}>AOA</Text>
              <Text style={styles.commonLanguage}>ARS</Text>
              <Text style={styles.commonLanguage}>AUD</Text>
              <Text style={styles.commonLanguage}>AWG</Text>
              <Text style={styles.commonLanguage}>AZN</Text>
              <Text style={styles.commonLanguage}>BAM</Text>
              <Text style={styles.commonLanguage}>BBD</Text>
            </ScrollView>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  mainContainerSettings: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  BudgetText: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 41,
  },
  AppText: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 290,
  },
  TextCurrency: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.textPrimary,
    marginLeft: 7,
  },
  horizontalLine: {
    width: WP(90.16),
    borderWidth: 0.1,
    backgroundColor: colors.textSecondary,
    alignSelf: "center",
  },
  SignOut: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.CardValue,
    marginLeft: 8.5,
  },
  topTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    marginLeft: 11,
  },
  TextCancel: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
  },
  horizontlLine: {
    width: WP(106.55),
    borderWidth: 0.1,
    backgroundColor: colors.textSecondary,
    alignSelf: "center",
    marginTop: 20,
  },
  commonLanguage: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    marginTop: 20,
  },
  TextUsd: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textPrimary,
  },
});
