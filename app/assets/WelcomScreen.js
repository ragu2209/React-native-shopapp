import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomScreen(props) {
    return (
        <ImageBackground
            style={styles}
            source={require("./assets/background.jpg")}>
            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",

    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    }
})
export default WelcomScreen;