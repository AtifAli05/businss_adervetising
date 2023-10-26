import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../Utils/Constants/Colors';
import {WP} from '../../../Utils';
import AnySvg from '../../../Assets/Images/svg';

const DashboardCard = ({
  title,
  bagDetail,
  imgOrder,
  styleOrder,
  onPress,
  imgCard1,
  zone,
  subZone,
  statusOrder,
  channelName,
  disabled = false,
  styleinprocess,
  stylelogo,
}) => {
  return (
    <TouchableOpacity
      style={[styles.OrderCardContainer, styleOrder]}
      onPress={onPress}
      disabled={disabled}>
      <View style={{flexDirection: 'row'}}>
        <AnySvg width={6.28} height={6.28} name={imgOrder} style={stylelogo} />
        <View style={styles.CardTextContainer}>
          <Text style={styles.orderTitle}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.orderDetail}>{zone}</Text>
            <Text style={styles.orderDetail}> {subZone}</Text>
            <Text style={[styles.orderDetail, styleinprocess]}>
              {' '}
              {statusOrder}
            </Text>
          </View>
          <Text style={styles.TimeOrder}>{channelName}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          right: 5,
        }}>
        <AnySvg width={20.21} height={9.01} name={imgCard1} />

        <View style={{width: WP(20), alignItems: 'flex-end'}}>
          <Text style={styles.bagNo}>{bagDetail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  DashboardContainerCenter: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: WP(71.6),
    height: WP(46.3),
    marginTop: 22,
  },
  TextDashboardIcons: {
    marginTop: 20,
  },
  OrderCardContainer: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: WP(13.11),
    height: WP(13.11),
  },
  CardTextContainer: {
    left: 10,
    width: WP(45),
    marginTop: 20,
  },
  TimeOrder: {
    marginTop: 6,
    color: colors.dashboardDate,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 16,
    color: colors.orderBag,
  },
  bagNo: {
    color: colors.CardValue,
    fontWeight: '400',
    fontSize: 12,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  orderDetail: {
    fontWeight: '400',
    fontSize: 11,
    color: colors.textSecondary,
  },
});
