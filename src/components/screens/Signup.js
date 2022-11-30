import React from 'react'
import PropTypes from "prop-types"
//Components
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import CrossButton from '../ui/CrossButton/CrossButton'
import CrossInputBox from '../ui/CrossInputBox/CrossInputBox'
import useResponsive from '../hooks/useResponsive'
//API
import { signUpApi } from '../services/api/authApi'
//Styles
import { commonStyles } from '../styles/commonStyles'

function Signup(props) {
    let isDesktop = useResponsive()
    let user={
        email:'',
        password:'',
        username:''
    }

    function signinButtonPress() {
        if(!!props.callbackLogin) props.callbackLogin()
    }

    async function signupButtonPress() {
        let result= await signUpApi(user.email, user.password, user.username)
        console.log(result)
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
            password: e
        }
    }

    function getUsername(e){
        user={
            ...user,
            username:e
        }
    }

    return (
        <View style={commonStyles.screenContainer}>
           <ImageBackground source={isDesktop? require('../assets/images/bg-login-desktop.jpg'):require('../assets/images/bg-login-mobile.jpg')} resizeMode='cover' style={[styles.bg, isDesktop ? styles.bgDesktop : styles.bgMobile]}>
                <Image resizeMode='contain' source={require("../assets/images/signup.png")} style={[styles.image, isDesktop ? styles.imageDesktop : styles.imageMobile]}/>

                <View>
                    <CrossInputBox callbackChange={getUsername} placeholder="Username"/>
                    <CrossInputBox callbackChange={getEmail} placeholder="Email" type={"mail"}/>
                    <CrossInputBox callbackChange={getPassword} placeholder="Password" type={"password"} isPassword={true}/>
                    <CrossButton label='Registrati' callbackPress={signupButtonPress} type="primary"/>
                </View>

                <CrossButton label='Accedi' callbackPress={signinButtonPress} size="small"/>
            </ImageBackground>
        </View>
    )
}

Signup.propTypes = {
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
    },
})

export default Signup