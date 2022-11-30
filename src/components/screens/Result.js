import React from 'react'
import PropTypes from "prop-types"
//Components
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import CrossButton from '../ui/CrossButton/CrossButton'
//Custom Hooks
import useResponsive from '../hooks/useResponsive'
//Styles
import {commonStyles} from "../styles/commonStyles"

function Result(props) {
  let isDesktop = useResponsive()

  function goToHome(){
    if(!!props.callbackHome) props.callbackHome()
  }
  function goToGame(){
    if(!!props.callbackGame) props.callbackGame()
  }

  return (
    <View style={[commonStyles.screenContainer]}>
      <ImageBackground
        source={require("../assets/images/bg-game.jpg")}
        style={styles.bg}
      >
        <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={[styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]}/>
        <Image resizeMode="contain" source={require("../assets/images/banana.png")} style={[styles.image, isDesktop ? styles.imageDesktop : styles.imageMobile]}/>

        <Text style={commonStyles.paragraph}>Ha vinto </Text>

        <View>
            <CrossButton label="Torna alla home" callbackPress={goToHome}/>
            <CrossButton label="Gioca ancora" type="primary" callbackPress={goToGame}/>
        </View>
        {props.children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: Dimensions.get("window").width,
    flex: 1,
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
  image: {
    width: "100%",
    height: "35%"
  },
  imageMobile: {
  },
  imageDesktop:{
  }

})

Result.propTypes = {
    callbackHome: PropTypes.func,
    callbackGame: PropTypes.func,
  }

export default Result