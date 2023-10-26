import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../Utils/Constants/Colors";
import { WP } from "../../Utils";
import AnySvg from "../../Assets/Images/svg";

import Profile from "../../Assets/Images/svg/Profile";
import AddIcon from "../../Assets/Images/svg/Add-Icon";
import UpDown from "../../Assets/Images/svg/up-down";
import IncomeGo from "../../Assets/Images/svg/Income-Go";
import ExpenseGo from "../../Assets/Images/svg/Expense-Go";
// import DropDown from '../../Assets/Images/svg/DropDown'
// import UpDown from '../../Assets/Images/svg/up-down'
import HistoryLogo from "../../Assets/Images/svg/History-Logo";
import BackBottomSheet from "../../Assets/Images/svg/Back-BottomSheet";
import DateLogo from "../../Assets/Images/svg/Date-Logo";

import DropDown from "../../Assets/Images/svg/DropDown";
import { Card } from "react-native-shadow-cards";
import ButtonPrimary from "../../Components/Common/ButtonPrimary/ButtonPrimary";
import RBSheet from "react-native-raw-bottom-sheet";

const NoExpense = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.mainContainerNoEpense}>
      <View style={{ marginHorizontal: WP(1) }}>
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
          <Text style={styles.BudgetText}>Add budget</Text>
          <AnySvg
            width={10.92}
            height={10.92}
            name={AddIcon}
            style={{ marginTop: 29 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.TextExpense}>Expense & Income</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
            }}
          >
            <Text style={styles.TextYear}>Yearly</Text>
            <AnySvg width={3.89} height={2.5} name={DropDown} />
          </View>
        </View>
        <View style={styles.expenseContainer}>
          <Card
            style={{
              width: WP(46.99),
              height: WP(25.68),
              borderRadius: 6,
              marginTop: 16,
              backgroundColor: "#D3D3D3",
            }}
          >
            <View
              style={{
                marginTop: 18,
                marginLeft: 15,
              }}
            >
              <Text style={styles.CommonText1}>Expense</Text>
              <Text style={styles.CommonText2}>$ 00</Text>
              <View style={{ flexDirection: "row" }}>
                <AnySvg width={2.73} height={2.73} name={ExpenseGo} />
                <Text style={styles.CommonText4}>
                  <Text style={{ color: colors.valueYellow }}>$637.39</Text>{" "}
                  extra this week
                </Text>
              </View>
            </View>
          </Card>
          <Card
            style={{
              width: WP(46.99),
              height: WP(25.68),
              borderRadius: 6,
              marginTop: 16,
              backgroundColor: "#D3D3D3",
            }}
          >
            <View style={{ marginTop: 18, marginLeft: 15 }}>
              <Text style={styles.CommonText1}>Income</Text>
              <Text style={styles.CommonText2}>$ 00</Text>
              <View style={{ flexDirection: "row" }}>
                <AnySvg
                  width={2.73}
                  height={6.73}
                  name={IncomeGo}
                  // style={{backgroundColor: 'red'}}
                />
                <Text style={styles.CommonText3}>
                  {" "}
                  <Text style={{ color: colors.valueGreen }}>$637.39</Text>{" "}
                  extra this week
                </Text>
              </View>
            </View>
          </Card>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.TextExpense}>History</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
            }}
          >
            <Text style={styles.TextYear}>Sort</Text>
            <AnySvg width={3} height={3} name={UpDown} />
          </View>
        </View>
        <View style={{ marginTop: 101, alignItems: "center" }}>
          <AnySvg width={15.84} height={15.84} name={HistoryLogo} />
          <Text style={styles.TextHistory}>No History Yet!</Text>
          <Text style={styles.HistoryDesc}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco labris
            nisi ut aliquip ex ea commodo aute irure consequat
          </Text>
        </View>
        <View style={{ paddingTop: WP(50),}}>
          <ButtonPrimary
            title={"Add Expense"}
            style={{ width: WP(100.55) }}
            buttonPress={() => refRBSheet.current.open()}
          />
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
            height={400}
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
              <View style={{ flexDirection: "row", }}>
                <AnySvg width={6.01} height={4.05} name={BackBottomSheet} />
                <Text style={styles.topTitle}>Add Expense</Text>
              </View>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.TextCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.horizontlLine}></View>
            <View>
              <Card
                style={{
                  width: WP(96.17),
                  height: WP(11.2),
                  alignSelf: "center",
                  marginTop: 59,
                }}
              >
                <Text style={styles.textCommon}>Facebook</Text>
              </Card>
            </View>
            <View>
              <Card
                style={{
                  width: WP(96.17),
                  height: WP(11.2),
                  alignSelf: "center",
                  marginTop: 18,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={styles.textCommon1}>Date</Text>
                  <AnySvg
                    width={4.37}
                    height={4.71}
                    name={DateLogo}
                    style={{ marginTop: 9 }}
                  />
                </View>
              </Card>
            </View>
            <View>
              <Card
                style={{
                  width: WP(96.17),
                  height: WP(11.2),
                  alignSelf: "center",
                  marginTop: 18,
                }}
              >
                <Text style={styles.textCommon}>Total Expense</Text>
              </Card>
            </View>
            <View>
              <ButtonPrimary
                title={"Save"}
                style={{ width: WP(106.55), marginTop: 70 }}
              />
            </View>
          </RBSheet>
        </View>
      </View>
    </View>
  );
};

export default NoExpense;

const styles = StyleSheet.create({
  mainContainerNoEpense: {
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
  TextYear: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    marginRight: 9,
  },
  TextExpense: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  CommonText1: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
  },
  CommonText2: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  CommonText3: {
    fontSize: 10,
    fontWeight: "500",
    marginTop: 5,
  },
  CommonText4: {
    fontSize: 10,
    fontWeight: "500",
  },
  TextYear1: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    marginTop: 12,
  },
  TextHistory: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 9,
  },
  HistoryDesc: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textDescription,
    width: WP(86.61),
    lineHeight: 20,
    alignSelf: "center",
  },
  topTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    marginLeft: 11,
  },
  horizontlLine: {
    width: WP(106.55),
    borderWidth: 0.1,
    backgroundColor: colors.textSecondary,
    alignSelf: "center",
    marginTop: 20,
  },
  textCommon: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    paddingTop: 10,
    paddingLeft: 10,
  },
  textCommon1: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
    paddingTop: 10,
  },
  TextCancel: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
  },
});
