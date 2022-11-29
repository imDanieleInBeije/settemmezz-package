import { Dimensions, StyleSheet } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

export const commonStyles = StyleSheet.create({
    screenContainer: {
        height: ScreenHeight,
        flex: 1
    }
})