import React from 'react'
import { StyleSheet, Text, Image, View, StatusBar, TextInput, Button } from 'react-native';

export default class SignupContainers extends React.Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
        <View style={styles.view}>
            <Image style={styles.logo}source={require('./logo.png')}></Image>
            <Text style={styles.slogan}>Wego Rego-Enjoy life in Korea with trustful supporters</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Your Phone number"/>
                <TextInput style={styles.input} placeholder="Your Password" secureTextEntry={true}/>
            </View>
            <Button
                style={styles.button}
                title="Log in"
                color="#F26C4F"
                onPress={() => this.props.navigation.navigate('Map')}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        margin: 30,
        width: 300,
        height: 62,
    },
    view: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    },
    inputView:{
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10 
    },
    content: {
        fontSize: 16,
        padding: 5 
    },
    slogan: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    input: {
        padding: 10,
        margin: 10,
        height: 40,
        borderRadius: 10,
        borderColor: '#F26C4F',
        borderWidth: 1
    },
    button: {
    }
});