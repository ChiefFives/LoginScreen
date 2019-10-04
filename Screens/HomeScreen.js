import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.screen}>
                <Text>HOST-IT</Text>
                <View style={styles.title}>
                    <Button title='hostIT'></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10
    },
    title:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default HomeScreen;