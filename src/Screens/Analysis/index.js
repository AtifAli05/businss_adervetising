import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP} from '../../Utils';
import PrimaryInput from '../../Components/Common/InputPrimary/PrimaryInput';
import {colors} from '../../Utils/Constants/Colors';
import AnySvg from '../../Assets/Images/svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LineChart} from 'react-native-gifted-charts';
import Profile from '../../Assets/Images/svg/Profile'
import DropDown from '../../Assets/Images/svg/DropDown'
import AddIcon from '../../Assets/Images/svg/Add-Icon'

const Analysis = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  const lineData = [
    {value: 0},
    {value: 10},
    {value: 8},
    {value: 58},
    {value: 56},
    {value: 78},
    {value: 74},
  ];

  return (
    <View style={styles.mainContainerAnalysis}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AnySvg
          width={10.92}
          height={10.92}
          name={Profile}
          style={{alignSelf: 'flex-start', marginTop: 29}}
        />
        <Text style={styles.BudgetText}>Analysis</Text>
        {/* <AnySvg
          width={10.92}
          height={10.92}
          name={AddIcon}
          onPress={() => refRBSheet.current.open()}
          style={{marginTop: 29}}
        /> */}
        <View></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 25,
        }}>
        <TouchableOpacity
          onPress={() => {
            setDelivery(true);
          }}>
          <View
            style={{
              ...styles.deliveryButton,
              backgroundColor: delivery
                ? colors.buttonBackground
                : colors.backgroundWhite,
              height: 30,
              width: WP(21.3),
              borderRadius: 4,
            }}>
            <Text style={styles.TextExpense}>Expenses</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDelivery(false);
          }}>
          <View
            style={{
              ...styles.deliveryButton,
              backgroundColor: delivery
                ? colors.backgroundWhite
                : colors.buttonBackground,
              height: 30,
              width: WP(20.3),
              borderRadius: 4,
            }}>
            <Text style={styles.TextExpense}>Income</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <View>
        <PrimaryInput
          placeHolder={'Last 7 days'}
          placeholderTextColor={colors.textSecondary}
          mainContainerStyle={{
            elevation: 10,
            backgroundColor: colors.backgroundWhite,
            borderRadius: 23,
            marginTop: 25,
            alignSelf: 'center',
            width: WP(96.17),
          }}
          icon2={<AnySvg width={3} height={3} name={DropDown} />}
        />
      </View>
      <View style={{alignSelf: 'center', marginTop: 45}}>
        <LineChart
          width={WP(94.8)}
          areaChart
          curved
          data={lineData}
          height={WP(106)}
          showVerticalLines
          spacing={44}
          initialSpacing={0}
          //   color1="skyblue"
          color1="#7B67ED"
          //   color2="orange"
          //   textColor1="green"
          hideDataPoints
          dataPointsColor1="blue"
          dataPointsColor2="red"
          startFillColor1="#7B67ED"
          startFillColor2="orange"
          startOpacity={0.8}
          endOpacity={0.3}
        />
      </View>
    </View>
  );
};

export default Analysis;

const styles = StyleSheet.create({
  mainContainerAnalysis: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  BudgetText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 41,
  },
  TextExpense: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'center',
    paddingTop: 3,
  },
});
