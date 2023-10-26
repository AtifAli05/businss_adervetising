import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import Campaigns from '../Screens/Campaigns';
import Analysis from '../Screens/Analysis';
import SettingsScreen from '../Screens/SettingsScreen';
import AddCampaign from '../Screens/AddCampaign';
import AddExpense from '../Screens/AddExpense';
import NoExpense from '../Screens/NoExpense';
import DashboardScreen from '../Screens/DashboardScreen';
import BottomTabRN from './TabNavigators/BottomNavigationBelow';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <>
      <NavigationContainer initialRouteName="Splash">
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
         <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
       <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="DashboardScreen"
            component={BottomTabRN}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="Campaigns"
            component={Campaigns}
            options={{
              headerShown: false,
            }}
          />
         <Stack.Screen
            name="Analysis"
            component={Analysis}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AddCampaign"
            component={AddCampaign}
            options={{
              headerShown: false,
            }}
          />
         <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="NoExpense"
            component={NoExpense}
            options={{
              headerShown: false,
            }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigations;
