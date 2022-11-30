import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"
import { Animated, Image, StyleSheet, View } from 'react-native'
import {commonStyles} from '../styles/commonStyles'
import useResponsive from '../hooks/useResponsive'
import CrossButton from '../ui/CrossButton/CrossButton'
import CrossModal from "../ui/CrossModal/CrossModal"

import { fadeIn, fadeOut } from "../utils/animations"

function Home(props) {
  const [state, setState] = useState({
    isOpen: false
  })

  const fadeAnim = useRef(new Animated.Value(0)).current;

    let isDesktop = useResponsive()

    function openModal() {
      fadeIn(fadeAnim)

      setState({
        ...state,
        isOpen: true
      })
    }
    function closeModal() {
      fadeOut(fadeAnim)

      setState({
        ...state,
        isOpen: false
      })
    }

    function newGame() {
      fadeOut(fadeAnim)
      setState({
        ...state,
        isOpen: false
      })
      if(!!props.callbackNewGame) props.callbackNewGame()
    }

    function newLobby() {
      fadeOut(fadeAnim)
      setState({
        ...state,
        isOpen: false
      })
      if(!!props.callbackNewLobby) props.callbackNewLobby()
    }

    return (
      <View style={[commonStyles.screenContainer, styles.container]}>
        <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={[styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]}/>
        <Image resizeMode="contain" source={require("../assets/images/pizza.png")} style={[styles.image, isDesktop ? styles.imageDesktop : styles.imageMobile]}/>
        <CrossButton label={"Nuova partita"} type="primary" callbackPress={openModal}/>
        {props.children}
        <CrossModal isOpen={state.isOpen} callbackClose={closeModal}>
          <CrossButton label="Partita veloce" type="primary" callbackPress={newGame}/>
          <CrossButton label="Crea partita" addStyles={{borderWidth: 2, borderColor: "#97080C"}} callbackPress={newLobby}/>
        </CrossModal>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
  image: {
    width: "100%",
    height: "35%"
  },
  imageMobile: {
  },
  imageDesktop:{
  }
})

Home.propTypes = {
  children: PropTypes.node,
  callbackNewGame: PropTypes.func,
  callbackNewLobby: PropTypes.func,
}

export default Home