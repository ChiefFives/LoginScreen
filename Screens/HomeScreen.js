import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                <Text>Welcome!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;