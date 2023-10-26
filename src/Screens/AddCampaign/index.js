import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../Utils/Constants/Colors';
import AnySvg from '../../Assets/Images/svg';
import Profile from '../../Assets/Images/svg/Profile'
import AddIcon from '../../Assets/Images/svg/Add-Icon'
import UpDown from '../../Assets/Images/svg/up-down'
import FacebookLogo from '../../Assets/Images/svg/Facebook-Logo'
import AdsenseLogo from '../../Assets/Images/svg/Adsense-Logo'
import TwitterLogo from '../../Assets/Images/svg/Twitter-Logo'
import GraphFb from '../../Assets/Images/svg/Graph-Fb'
import GraphAds from '../../Assets/Images/svg/Graph-Ads'
import GraphTiktok from '../../Assets/Images/svg/Graph-TikTok'
import InstaLogo from '../../Assets/Images/svg/Insta-Logo'
import TikTok from '../../Assets/Images/svg/TikTok-Logo'
import AdsLogo from '../../Assets/Images/svg/Adsense-Logo'
import DropDown from '../../Assets/Images/svg/DropDown'


import PrimaryInput from '../../Components/Common/InputPrimary/PrimaryInput';
import {Card} from 'react-native-shadow-cards';
import DashboardCard from '../../Components/Common/DashboardCard/DashboardCard';
import {WP} from '../../Utils';

const AddCampaign = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainContainerCompaign}>
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
          <Text style={styles.BudgetText}>Add budget</Text>
          <AnySvg
            width={10.92}
            height={10.92}
            name={AddIcon}
            style={{marginTop: 29}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
            paddingHorizontal: 2,
          }}>
          <PrimaryInput
            placeHolder={'All ads accounts'}
            placeholderTextColor={colors.textSecondary}
            mainContainerStyle={{
              // width: WP(81.14),
              width: WP(84.14),
              borderRadius: 23,
              elevation: 11,
              backgroundColor: '#FFFFFF',
            }}
            icon2={<AnySvg width={3} height={3} name={DropDown} />}
          />
          <Text style={styles.TextYear}>Sort</Text>
          <AnySvg
            width={3}
            height={3}
            name={UpDown}
            style={{alignSelf: 'flex-start'}}
          />
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
            onPress={() => navigation.navigate('NoExpense')}

            imgOrder={TwitterLogo}
            zone={'Till: Jul 29, 2023 - (12:30pm)'}
            bagDetail={'$105.63'}
            imgCard1={GraphAds}
          />
        </Card>
        <View style={{marginTop: 29, marginLeft: 10}}>
          <Text style={styles.TextOngoing}>Complete Campaigns</Text>
        </View>

        <Card
          style={{
            width: WP(96.17),
            height: WP(18.3),
            alignSelf: 'center',
            marginTop: 14,
          }}>
          <DashboardCard
            title={'Instagram Ads'}
            imgOrder={InstaLogo}
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
            title={'TikTok Ads'}
            imgOrder={TikTok}
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
            title={'Google Ads'}
            imgOrder={AdsLogo}
            zone={'Till: Jul 29, 2023 - (12:30pm)'}
            bagDetail={'$105.63'}
            imgCard1={GraphAds}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default AddCampaign;

const styles = StyleSheet.create({
  mainContainerCompaign: {
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
  TextOngoing: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  TextYear: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    marginTop: 12,
  },
});
