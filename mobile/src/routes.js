import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (isSignedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
          Profile,
        }),
      },
      /*{
        initialRouteName: isSignedIn ? 'App' : 'Sign',
      },*/
      {
        tabBarOptions: {
          KeyboardHidesTabBar: true,
          activeTintColor: '#FFF',
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          style: {
            backgroundColor: '#8d41a8',
          },
        },
      },
    ),
  );
