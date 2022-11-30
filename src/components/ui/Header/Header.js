import React from 'react'
import PropTypes from "prop-types"
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import useResponsive from '../../hooks/useResponsive'

function Header(props) {
  let isDesktop = useResponsive()

  function goToHome() {
    if(!!props.callbackHome) props.callbackHome()
  }
  function goToRanking() {
    if(!!props.callbackRanking) props.callbackRanking()
  }
  function goToProfile() {
    if(!!props.callbackProfile) props.callbackProfile()
  }

  return (
    <View style={[styles.header, isDesktop ? styles.headerDesktop : styles.headerMobile]}>
        <Pressable style={[styles.navItem]} onPress={goToHome}>
            <Image resizeMode='contain' style={[styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile]} source={require("../../assets/images/home.png")} />
            <Text style={[styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]}>Home</Text>
        </Pressable>
        <Pressable style={[styles.navItem]} onPress={goToRanking}>
            <Image resizeMode='contain' style={[styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile]} source={require("../../assets/images/ranking.png")} />
            <Text style={[styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]}>Ranking</Text>
        </Pressable>
        <Pressable style={[styles.navItem]} onPress={goToProfile}>
            <Image resizeMode='contain' style={[styles.icon, isDesktop ? styles.iconDesktop : styles.iconMobile]} source={require("../../assets/images/profile.png")} />
            <Text style={[styles.navLabel, isDesktop ? styles.navLabelDesktop : styles.navLabelMobile]}>Profile</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FD758F",
        borderWidth: 3,
        borderColor: "#97080C",
        borderRadius: 20,
        padding: 15,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: 20,
        width: Dimensions.get("window").width - 40
    },
    headerMobile: {
    },
    headerDesktop: {
        width: Dimensions.get("window").width / 3,
    },
    navItem: {
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        marginBottom: 3
    },
    iconMobile: {
        height: 26,
        width: 26,
    },
    iconDesktop: {
        height: 28,
        width: 28
    },
    navLabel: {
        color: "#FFF9E9"
    },
    navLabelMobile: {
        fontSize: 12,
    },
    navLabelDesktop: {
        fontSize: 18
    }

})

Header.propTypes = {
    callbackHome: PropTypes.func,
    callbackRanking: PropTypes.func,
    callbackProfile: PropTypes.func,
}

export default Header