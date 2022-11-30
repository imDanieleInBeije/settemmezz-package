import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput } from "react-native";
import useResponsive from "../../hooks/useResponsive";

function CrossInputBox(props) {
  let isDesktop = useResponsive()

  function handleChange(e) {
    if (!!props.callbackChange) props.callbackChange(e);
  }

  return (
    <>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={"rgba(0,0,0,0.3)"}
        onChangeText={handleChange}
        style={[styles.inputBox, isDesktop ? styles.inputBoxDesktop : styles.inputBoxMobile, props.addStyles]}
        keyboardType={props.type}
        secureTextEntry={props.isPassword}
      />
    </>
  );
}

const styles= StyleSheet.create({
    inputBox:{
        color: "#97080C",
        borderWidth: 1,
        borderColor: "#97080C",
        backgroundColor: "#FFF9E9",
        padding: 10,
        margin: 5,
        borderRadius: 10
    },
    inputBoxDesktop:{
        fontSize: 16,
        width: 300
    },
    inputBoxMobile:{
        fontSize: 12,
        width: 200
    }
})

CrossInputBox.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isPassword: PropTypes.bool
};

CrossInputBox.defaultProps = {
  placeholder: "",
  type: "default",
  isPassword: false
};

export default CrossInputBox;
