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
        styles.button, isDesktop ? styles.buttonDesktop : styles.buttonMobile,
        props.type === "primary" ? {backgroundColor: "#97080C"} : {backgroundColor: "#FFF9E9"},
        props.disabled && {opacity: 0.5}
      ]}
      disabled={props.disabled}
      onPress={press}
    >
      <Text
        style={[
          styles.buttonLabel, isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile,
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
      paddingHorizontal: 20
    },
    buttonDesktop: {
      
    },
    buttonMobile: {
      
    },
    buttonLabel: {
    },
    buttonLabelMobile: {
      fontSize: 18
    },
    buttonLabelDesktop: {
      fontSize: 22
    }

})

CrossButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  callbackPress: PropTypes.func,
  disabled: PropTypes.bool
}

CrossButton.defaultProps = {
  label: "",
  type: "secondary",
  callbackPress: undefined,
  disabled: false
}

export default CrossButton