import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../Screens/DashboardScreen';
import AddCampaign from '../../Screens/AddCampaign';
import Analysis from '../../Screens/Analysis';
import SettingsScreen from '../../Screens/SettingsScreen';
import AnySvg  from '../../Assets/Images/svg';
import  HomeBottom  from '../../Assets/Images/svg/Home-Bottom';
import  HomeBottomActive  from '../../Assets/Images/svg/Home-Bottom-Active';
import  DocumentBottom  from '../../Assets/Images/svg/Document-Bottom';
import  DocumentBottomActive  from '../../Assets/Images/svg/Document-Bottom-Active';
import  PerformanceBottom  from '../../Assets/Images/svg/Performance-Bottom';
import  PerformanceBottomActive  from '../../Assets/Images/svg/Performance-Bottom-Active';
import  SettingBottom  from '../../Assets/Images/svg/Setting-Bottom';
import  SettingBottomActive  from '../../Assets/Images/svg/Setting-Bottom-Active';

import {useNavigation} from '@react-navigation/native';
import {colors} from '../../Utils/Constants/Colors';
import {WP} from '../../Utils';

const BottomTabRN = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: '500',
          },
          tabBarIcon: ({color, focused}) => (
            <AnySvg
              width={6.01}
              height={6.01}
              name={focused ? HomeBottomActive : HomeBottom}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Document"
        component={AddCampaign}
        options={{
          tabBarLabel: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: '500',
          },
          tabBarIcon: ({color, focused}) => (
            <AnySvg
              width={4.91}
              height={5.46}
              name={focused ? DocumentBottomActive : DocumentBottom}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Performance"
        component={Analysis}
        options={{
          tabBarLabel: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: '500',
          },
          tabBarIcon: ({color, focused}) => (
            <AnySvg
              width={5.46}
              height={5.46}
              name={focused ? PerformanceBottomActive : PerformanceBottom}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: '500',
            backgroundColor: 'red',
            width: 20,
            height: 10,
            borderBottomWidth: 2,
            borderColor: 'green',
          },
          tabBarIcon: ({color, focused}) => (
            <AnySvg
              width={5.79}
              height={5.46}
              name={focused ? SettingBottomActive : SettingBottom}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabRN;

const CustomTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {navigate} = useNavigation();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.tabContainer}>
      {state?.routes?.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options?.title ?? route?.name;
        const isFocused = state?.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({type: 'tabLongPress', target: route.key});
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}>
            {options?.tabBarIcon &&
              options?.tabBarIcon({
                focused: isFocused,
                color: colors.backgroundScreen,
                size: 24,
              })}
            <Text style={[styles.tabLabel, {color: colors.bottomTabLabel}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    width: WP(102.18),
    height: WP(17.21),
    paddingBottom: '.01%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    elevation: 2,
    paddingVertical: '3%',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 8,
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: '0%',
  },
});
