import { Dimensions, StyleSheet } from "react-native";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export const commonStyles = StyleSheet.create({
    screenContainer: {
        height: ScreenHeight,
        width: ScreenWidth,
        flex: 1,
    },
    paragraph: {
        color: "#FFF9E9",
        fontSize: 22
    }
})