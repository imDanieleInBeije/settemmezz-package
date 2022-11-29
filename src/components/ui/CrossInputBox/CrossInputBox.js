import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput } from "react-native";

function CrossInputBox(props) {
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
        style={styles.inputBox}
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
        padding: 10
    },
    inputBoxDesktop:{
        
    },
    inputBoxMobile:{
        
    }
})

CrossInputBox.propTypes = {
  placeholder: PropTypes.string,
};

CrossInputBox.defaultProps = {
  placeholder: "",
};

export default CrossInputBox;
