import React from 'react'
import PropTypes from "prop-types"
//Components
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import CrossButton from '../ui/CrossButton/CrossButton'
import CrossInputBox from '../ui/CrossInputBox/CrossInputBox'
import useResponsive from '../hooks/useResponsive'
//Styles
import { commonStyles } from '../styles/commonStyles'
//Api
import { signInApi } from '../services/api/authApi'
//Storage
import {setInStorage} from '../utils/Storage'

function Login(props) {
    let isDesktop = useResponsive()
    let user = {
        email:'',
        psw:''
    }

    async function signinButtonPress(){
        let result = await signInApi(user.email,user.psw)
        console.log(result.data)
        setInStorage("userID", result?.data?.id)
        setInStorage("token", result?.data?.token)
        setInStorage("refreshToken", result?.data?.refreshToken)
        if(!!props.callbackLogin) props.callbackLogin()
    }

    function signupButtonPress() {
        if(!!props.callbackSignup) props.callbackSignup()
    }

    function getEmail(e){
        user={
            ...user,
            email: e
        }
    }

    function getPassword(e){
         user={
            ...user,
            psw: e
        }
    }

    return (
        <View style={commonStyles.screenContainer}>
           <ImageBackground source={isDesktop? require('../assets/images/bg-login-desktop.jpg') : require('../assets/images/bg-login-mobile.jpg')} resizeMode='cover' style={[styles.bg, isDesktop ? styles.bgDesktop : styles.bgMobile]}>
                <Image resizeMode='contain' source={require("../assets/images/login.png")} style={[styles.image, isDesktop ? styles.imageDesktop : styles.imageMobile]}/>

                <KeyboardAvoidingView behavior="padding">
                    <View>
                        <CrossInputBox callbackChange={getEmail} placeholder="Email" type={"mail"}/>
                        <CrossInputBox callbackChange={getPassword} placeholder="Password" type={"password"} isPassword={true}/>
                        <CrossButton label='Accedi' callbackPress={signinButtonPress} type="primary"/>
                    </View>
                </KeyboardAvoidingView>

                <CrossButton label='Registrati' callbackPress={signupButtonPress} size="small"/>
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
        width: Dimensions.get("window").width,
        justifyContent: "space-around",
        alignItems: "center"
    },
    bgMobile: {
        padding: 20
    },
    bgDesktop: {
        padding: 100
    },
    image: {
        width: "100%"
    },
    imageMobile: {
        height: "40%"
    },
    imageDesktop:{
        height:'50%'
    }
})

export default Login