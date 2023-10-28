import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../Utils/Constants/Colors';
import {WP} from '../../Utils';
import AnySvg from '../../Assets/Images/svg';
 import  Profile  from '../../Assets/Images/svg/Profile';
 import  AddIcon  from '../../Assets/Images/svg/Add-Icon';
 import  DropDown  from '../../Assets/Images/svg/DropDown';
 import  ExpenseGo  from '../../Assets/Images/svg/Expense-Go';
 import  IncomeGo  from '../../Assets/Images/svg/Income-Go';
 import  UpDown  from '../../Assets/Images/svg/up-down';
 import  FacebookLogo  from '../../Assets/Images/svg/Facebook-Logo';
 import  GraphFb  from '../../Assets/Images/svg/Graph-Fb';
 import  AdsenseLogo  from '../../Assets/Images/svg/Adsense-Logo';
 import  GraphAds  from '../../Assets/Images/svg/Graph-Ads';
 import  TwitterLogo  from '../../Assets/Images/svg/Twitter-Logo';
 import  GraphTiktok  from '../../Assets/Images/svg/Graph-TikTok';
 import  BackBottomSheet  from '../../Assets/Images/svg/Back-BottomSheet';
 import  DateLogo  from '../../Assets/Images/svg/Date-Logo';
 import  TikTok  from '../../Assets/Images/svg/TikTok-Logo';



import {Card} from 'react-native-shadow-cards';
import DashboardCard from '../../Components/Common/DashboardCard/DashboardCard';
import ButtonPrimary from '../../Components/Common/ButtonPrimary/ButtonPrimary';
import RBSheet from 'react-native-raw-bottom-sheet';
// import {LineChart} from 'react-native-chart-kit';
import {LineChart} from 'react-native-gifted-charts';

const DashboardScreen = ({navigation}) => {
  const refRBSheet = useRef();

  const lineData = [
    {value: 0},
    {value: 10},
    {value: 8},
    {value: 58},
    {value: 56},
    {value: 78},
    {value: 74},
    {value: 98},
  ];

  return (
    <View style={styles.mainContainerDashboard}>
    <View style={{marginHorizontal:WP(1)}}>
      <ScrollView showsVerticalScrollIndicator={false}>

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
          <Text style={styles.BudgetText}>Ads budget</Text>
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
            justifyContent: 'space-between',
            marginTop: 35,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.TextExpense}>Expense & Income</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
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
              backgroundColor: '#D3D3D3',
            }}>
            <View style={{marginTop: 18, marginLeft: 15}}>
              <Text style={styles.CommonText1}>Expense</Text>
              <Text style={styles.CommonText2}>$ 248, 260.10</Text>
              <View style={{flexDirection: 'row'}}>
                <AnySvg width={2.73} height={2.73} name={ExpenseGo} />
                <Text style={styles.CommonText4}>
                  <Text style={{color: colors.valueYellow}}>$637.39</Text> extra
                  this week
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
              backgroundColor: '#D3D3D3',
            }}>
            <View style={{marginTop: 18, marginLeft: 15}}>
              <Text style={styles.CommonText1}>Income</Text>
              <Text style={styles.CommonText2}>$ 248, 260.10</Text>
              <View style={{flexDirection: 'row'}}>
                <AnySvg width={2.73} height={6.73} name={IncomeGo} />
                <Text style={styles.CommonText3}>
                  {' '}
                  <Text style={{color: colors.valueGreen}}>$637.39</Text> extra
                  this week
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{alignSelf: 'center', marginTop: 45}}>
          <LineChart
            width={WP(94.8)}
            areaChart
            curved
            data={lineData}
            height={WP(55)}
            showVerticalLines
            spacing={44}
            initialSpacing={0}
            color1="#7B67ED"
            // color2="orange"
            textColor1="green"
            hideDataPoints
            // dataPointsColor1="red"
            // dataPointsColor2="red"
            startFillColor1="#7B67ED"
            // startFillColor2="orange"
            startOpacity={0.9}
            endOpacity={0.5}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 35,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.TextExpense}>
              Expense <Text style={{color: colors.textSecondary}}>Income</Text>{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.TextYear}>Sort</Text>
            <AnySvg width={3} height={3} name={UpDown} />
          </View>
        </View>

        <View style={{marginTop: 29, marginLeft: 10}}>
          <Text style={styles.TextOngoing}>Ongoing Campaigns</Text>
        </View>

        <Card
          style={{
            width: WP(96.17),
            height: WP(18.3),
            alignSelf: 'center',
            marginTop: 14,
          }}>
          <DashboardCard
            title={'Facebook'}
            imgOrder={FacebookLogo}
            zone={'Till: Jul 29, 2023 - (12:30pm)'}
            bagDetail={'$105.63'}
            imgCard1={GraphFb}
          />
        </Card>
        <Card
          style={{
            width: WP(96.17),
            height: WP(18.3),
            alignSelf: 'center',
            marginTop: 14,
          }}>
          <DashboardCard
            title={'Google'}
            imgOrder={AdsenseLogo}
            zone={'Till: Jul 29, 2023 - (12:30pm)'}
            bagDetail={'$105.63'}
            imgCard1={GraphTiktok}
          />
        </Card>
        <Card
          style={{
            width: WP(96.17),
            height: WP(18.3),
            alignSelf: 'center',
            marginTop: 14,
          }}>
          <DashboardCard
            title={'Twitter'}
            imgOrder={TwitterLogo}
            zone={'Till: Jul 29, 2023 - (12:30pm)'}
            bagDetail={'$105.63'}
            imgCard1={GraphAds}
          />
        </Card>
      </ScrollView>

      <View
        style={{
          flex: 1,
          borderRadius: 24,
        }}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={525}
          customStyles={{
            draggableIcon: {
              backgroundColor: colors.buttonPrimary,
            },
            container: {
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
            },
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              {/* <AnySvg width={6.01} height={4.05} name={BackBottomSheet} /> */}
              <Text style={styles.topTitle}>Create Campaign</Text>
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
                alignSelf: 'center',
                marginTop: 59,
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <AnySvg width={6.28} height={6.28} name={TikTok} />
                  <Text style={styles.textCommon4}>TikTok</Text>
                </View>
                <AnySvg
                  width={4.37}
                  height={4.71}
                  name={DropDown}
                  style={{marginTop: 9}}
                />
              </View>
            </Card>
          </View>
          <View>
            <Card
              style={{
                width: WP(96.17),
                height: WP(11.2),
                alignSelf: 'center',
                marginTop: 18,
                elevation: 5,
              }}>
              <Text style={styles.textCommon}>Campaign</Text>
            </Card>
          </View>
          <View>
            <Card
              style={{
                width: WP(96.17),
                height: WP(11.2),
                alignSelf: 'center',
                marginTop: 18,
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.textCommon1}>Start & End Date</Text>
                <AnySvg
                  width={4.37}
                  height={4.71}
                  name={DateLogo}
                  style={{marginTop: 9}}
                />
              </View>
            </Card>
          </View>
          <View>
            <Card
              style={{
                width: WP(96.17),
                height: WP(11.2),
                alignSelf: 'center',
                marginTop: 18,
                elevation: 5,
              }}>
              <Text style={styles.textCommon}>Total Expense</Text>
            </Card>
          </View>
          <View>
            <Card
              style={{
                width: WP(96.17),
                height: WP(11.2),
                alignSelf: 'center',
                marginTop: 18,
                elevation: 5,
              }}>
              <Text style={styles.textCommon}>Income</Text>
            </Card>
          </View>
          <View>
            <ButtonPrimary
              title={'Save'}
              style={{width: WP(106.55), position: 'absolute',marginTop:WP(15)}}
            />
          </View>
        </RBSheet>
      </View>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  mainContainerDashboard: {
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
  TextYear: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    marginRight: 9,
  },
  TextExpense: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  expenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  CommonText1: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  CommonText2: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  CommonText3: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 5,
  },
  CommonText4: {
    fontSize: 10,
    fontWeight: '500',
  },
  TextOngoing: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  topTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    marginLeft: 11,
  },
  horizontlLine: {
    width: WP(106.55),
    borderWidth: 0.1,
    backgroundColor: colors.textSecondary,
    alignSelf: 'center',
    marginTop: 20,
  },
  textCommon: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    paddingTop: 10,
    paddingLeft: 10,
  },
  textCommon1: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    paddingTop: 10,
  },
  TextCancel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  textCommon4: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textPrimary,
    marginLeft: 5,
  },
});
