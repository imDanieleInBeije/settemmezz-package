import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types"
//Components
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import useResponsive from "../hooks/useResponsive"
import CrossInputBox from '../ui/CrossInputBox/CrossInputBox'
import CrossButton from '../ui/CrossButton/CrossButton'

//API
import { getUserApi } from '../services/api/authApi'
//Storage
import { getFromStorage } from '../utils/Storage'
//Styles
import {commonStyles} from '../styles/commonStyles'

function Profile(props) {
    let isDesktop = useResponsive()

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        score:0,
        isDisabled: true
    })

    let user = {
        name: "",
        email: "",
        password: ""
    }
    
    useEffect(()=>{
        getUser()
    },[])

    async function getUser(){
        let id = await getFromStorage("userID")

        let result = await getUserApi(id)
        user.name = result?.data?.username
        user.email = result?.data?.email
        user.password = result?.data?.password
        
        setState({
            ...state,
            name: user.name,
            email: user.email,
            password: user.password,
            score: result?.data?.score
        })
        console.log(id, user)
    }

    function getName(e){
        setState({
            ...state,
            name: e,
            isDisabled: false
        })
    }
    function getEmail(e){
        setState({
            ...state,
            email: e,
            isDisabled: false
        })
    }
    function getPassword(e){
        setState({
            ...state,
            password: e,
            isDisabled: false
        })
    }

    function updateUser() {
        console.log("Update user API work in progress")
    }

  return (
    <View style={[commonStyles.screenContainer, styles.container]}>
        <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={[styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]}/>
        
        <View style={styles.pageContent}>
            <View>
                <Text style={styles.subtitle}>I MIEI DATI</Text>
                <CrossInputBox value={state.name} callbackChange={getName} addStyles={!isDesktop && styles.inputLarge}/>
                <CrossInputBox value={state.email} callbackChange={getEmail} addStyles={!isDesktop && styles.inputLarge}/>
                <CrossInputBox value={state.password} callbackChange={getPassword} isPassword={true} addStyles={!isDesktop && styles.inputLarge}/>
                <CrossButton label="Salva modifiche" type="primary" disabled={state.isDisabled} callbackPress={updateUser}/>
            </View>
            <Text style={styles.subtitle}>PARTITE VINTE: {state.score}</Text>
        </View>

        {props.children}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: "#FFF9E9",
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
        width: "100%",
    },
    logoMobile: {
        height: 50,
    },
    logoDesktop: {
        height: 70
    },
    pageContent: {
        flex: 1,
        justifyContent: 'space-around'
    },
    subtitle: {
        color: "#97080C",
        fontSize: 24,
        textTransform: "uppercase",
        alignSelf: "flex-start",
        padding: 5,
        paddingBottom: 10
    },
    inputLarge: {
        width: Dimensions.get("window").width - 40
    }
})

Profile.propTypes = {
    children: PropTypes.node,
}

export default Profile