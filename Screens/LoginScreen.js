import React,{Component} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Card from '../components/Card';
import Input from '../components/Input';

class LoginScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
  const {navigate} = this.props.navigation;
  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <Text>Login</Text>
        <Input
        style={styles.input}
        blurOnSubmit autoCapitalize='none'
        autoCorrect={false}/>
        <Input
        style={styles.input}
        blurOnSubmit autoCapitalize='none'
        autoCorrect={false}/>
        <Button title='Login' onPress={()=>navigate('Home')}/>
      </Card>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    paddingStart: 5,
    paddingEnd: 5,
    marginTop: 10
  }
});

export default LoginScreen;