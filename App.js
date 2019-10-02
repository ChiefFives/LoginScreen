import React,{Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}