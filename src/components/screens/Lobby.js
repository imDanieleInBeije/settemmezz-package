import React from 'react'
//Components
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
//Custom Hooks
import useResponsive from '../hooks/useResponsive'
//Styles
import {commonStyles} from "../styles/commonStyles"

const arr = [
  "user1", "user2", "user3"
]

function Lobby() {
  let isDesktop = useResponsive()
  return (
    <View style={[commonStyles.screenContainer]}>
      <ImageBackground
        source={require("../assets/images/bg-game.jpg")}
        style={styles.bg}
      >
        <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={[styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]}/>
        
        <View>
          <Text style={[commonStyles.paragraph, styles.text]}>In attesa di altri giocatori...</Text>
          <Text style={[commonStyles.paragraph, styles.text]}>mm:ss</Text>
        </View>

        <Image resizeMode="contain" source={require("../assets/images/profile.png")} style={[styles.myProfile]}/>

        <View style={styles.playersContainer}>
          {
            arr.map((element,key) => {
              return(
                <Image key={key} resizeMode="contain" source={require("../assets/images/profile.png")} style={[styles.playersIcon]}/>
              )
            })
          }
        </View>

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
  text: {
    textAlign: "center"
  },
  myProfile: {
    width: "100%",
    height: 150
  },
  playersContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },
  playersIcon: {
    height: 80,
    width: 80,
    padding: 20
  }
})

export default Lobby