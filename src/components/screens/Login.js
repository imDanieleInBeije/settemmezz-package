import React from 'react'
import PropTypes from "prop-types"
import { ImageBackground, StyleSheet, View } from 'react-native'
import CrossButton from '../ui/CrossButton/CrossButton'
import CrossInputBox from '../ui/CrossInputBox/CrossInputBox'

import { commonStyles } from '../styles/commonStyles'

function Login(props) {
    let user={
        mail:'',
        psw:''
    }

    function signinButtonPress(){
        if(!!props.callbackLogin) props.callbackLogin()
    }

    function signupButtonPress() {
        if(!!props.callbackSignup) props.callbackSignup()
    }

    function getEmail(e){
        user={
            ...user,
            mail: e
        }
    }

    function getPassword(e){
         user={
            ...user,
            psw: e
        }
    }

    return (
        <View style={commonStyles.screenContainer} className="bg">
           <ImageBackground source={require('../assets/images/bg-login.png')} resizeMode='cover' style={[styles.bg]}>
                <CrossInputBox callbackChange={getEmail} placeholder="Email" />
                <CrossInputBox callbackChange={getPassword} placeholder="Password" />
                <CrossButton label='Accedi' callbackPress={signinButtonPress} type="primary"/>
                <CrossButton label='Registrati' callbackPress={signupButtonPress}/>
            </ImageBackground>
        </View>
    )
}

Login.propTypes = {
    callbackLogin: PropTypes.func,
    callbackSignup: PropTypes.func
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login