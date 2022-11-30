import React, {useState} from "react"
import PropTypes from "prop-types"
import { Animated, Image, Modal, Pressable , StyleSheet, View } from "react-native"

function CrossModal(props) {
  const [modalVisible, setModalVisible] = useState(false);

  function closeModal() {
    if(!!props.callbackClose) props.callbackClose()
  }

  return(
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={props.isOpen}
        onRequestClose={() => {
          setModalVisible(!props.isOpen);
        }}>
        <View style={styles.centeredViewInner}>
          <Animated.View style={[
            styles.modalView,
            {opacity: props.fadeAnim}
          ]}>
            <Pressable style={styles.closeButtonContainer} onPress={closeModal}>
              <Image resizeMode='contain' source={require("../../assets/images/x.png")} style={styles.closeButton}/>
            </Pressable>
            {props.children}
          </Animated.View>
        </View>
      </Modal>
    </View>
  )
}

CrossModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  fadeAnim: PropTypes.object
}

CrossModal.defaultProps = {
  children: null,
  isOpen: false,
}

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  centeredViewInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFF9E9",
    borderColor: "#97080C",
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButtonContainer: {
    backgroundColor: "#FFF9E9",
    borderColor: "#97080C",
    borderWidth: 2,
    borderRadius: 40,
    padding: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    marginBottom: 10,
    marginRight: -10
  },
  closeButton: {    
    height: 16,
    width: 16
  }
})

export default CrossModal