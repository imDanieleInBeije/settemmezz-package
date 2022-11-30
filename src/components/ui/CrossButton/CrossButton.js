import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import PropTypes from "prop-types"
import useResponsive from '../../hooks/useResponsive'

function CrossButton(props) {
  let isDesktop = useResponsive()

  function press(){
    if(!!props.callbackPress) props.callbackPress()
  }

  return (
    <Pressable
      style={[
        styles.button,
        props.size === "small" && styles.buttonSmall,
        props.type === "primary" ? {backgroundColor: "#97080C"} : {backgroundColor: "#FFF9E9"},
        props.disabled && {opacity: 0.5},
        props.addStyles
      ]}
      disabled={props.disabled}
      onPress={press}
    >
      <Text
        style={[
          styles.buttonLabel,
          isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile,
          props.size === "small" && (isDesktop ? styles.buttonSmallLabelDesktop : styles.buttonSmallLabelMobile), 
          props.type === "primary" ? {color: "#FFF9E9"} : {color: "#97080C"}
        ]}
      >{props.label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 40,
      margin: 5,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonSmall: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5
    },
    buttonLabel: {
      //Può servire per il font
    },
    buttonLabelMobile: {
      fontSize: 18
    },
    buttonLabelDesktop: {
      fontSize: 24
    },
    buttonSmallLabelMobile: {
      fontSize: 12
    },
    buttonSmallLabelDesktop: {
      fontSize: 16
    }

})

CrossButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  callbackPress: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string
}

CrossButton.defaultProps = {
  label: "",
  type: "secondary",
  callbackPress: undefined,
  size: "default"
}

export default CrossButton