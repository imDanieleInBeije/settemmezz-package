import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CrossButton from "../ui/CrossButton/CrossButton";
import useResponsive from "../hooks/useResponsive"
import { commonStyles } from "../styles/commonStyles";

function Game() {
  let isDesktop = useResponsive()

  return (
    <View style={[commonStyles.screenContainer, styles.container]}>
      <ImageBackground
        source={require("../assets/images/bg-game.jpg")}
        style={styles.bg}
      >
        <View style={styles.gameContainer}>
          <View style={styles.gameRowCenter}>
            <View style={styles.cardsContainerTop}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/card.png")}
                style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.topCard, isDesktop ? styles.topCardDesktop : styles.topCardMobile]}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/card.png")}
                style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.topCard, isDesktop ? styles.topCardDesktop : styles.topCardMobile, styles.topCardImage]}
              />
            </View>
            <Text style={[styles.points, styles.pointsVertical]}>3</Text>
          </View>

          <View style={[styles.gameRowDek, isDesktop ? styles.gameRowDekDesktop : styles.gameRowDekMobile]}>
            <View style={[styles.sectionPlayer, styles.sectionPlayerLeft]}>
              <View style={styles.cardsContainerLeft}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/card.png")}
                  style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.leftCard]}
                />
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/card.png")}
                  style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.leftCard, isDesktop ? styles.leftCardImageDesktop : styles.leftCardImageMobile]}
                />
              </View>
              <View>
                <Text style={[styles.points, styles.pointsHorizontal, {paddingLeft: 30}]}>6</Text>
              </View>
            </View>
            <Image
              resizeMode="contain"
              source={require("../assets/images/deck.png")}
              style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.centerCard]}
            />
            <View style={[styles.sectionPlayer, styles.sectionPlayerRight]}>
              <View >
                <Text style={[styles.points, styles.pointsHorizontal, {paddingRight: 30}]}>10</Text>
              </View>
              <View style={styles.cardsContainerRight}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/card.png")}
                  style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.rightCard]}
                />
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/card.png")}
                  style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.rightCard, isDesktop ? styles.rightCardImageDesktop : styles.rightCardImageMobile]}
                />
              </View>
            </View>
          </View>

          <View style={styles.gameRowCenter}>
            <Text style={commonStyles.paragraph}>È il tuo turno</Text>
          </View>

          <View style={styles.gameRowCenter}>
            <Text style={[styles.points, styles.pointsVertical]}>7½</Text>
            <View style={styles.cardsContainerBottom}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/card.png")}
                style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard]}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/card.png")}
                style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard, styles.bottomCardImage]}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/card.png")}
                style={[styles.card, isDesktop ? styles.cardDesktop : styles.cardMobile, styles.bottomCard, styles.bottomCardImage]}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <CrossButton label="Resta" />
          <CrossButton label="Carta" type="primary" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
  gameContainer: {
    justifyContent: "space-between",
    flex: 5,
    overflow: "hidden",
    paddingBottom: 80,
  },
  gameRowCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  gameRowDek: {
    flexDirection: "row",
    alignItems: "center",
  },
  gameRowDekMobile: {
    justifyContent: "space-between",
  },
  gameRowDekDesktop: {
    justifyContent: "center",
  },

  sectionPlayer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionPlayerRight: {
    marginLeft: 50,
  },
  sectionPlayerLeft: {
    marginRight: 50,
  },

  cardsContainerTop: {
    flexDirection: "row-reverse",
  },
  cardsContainerLeft: {
    flexDirection: "column",
  },
  cardsContainerRight: {
    flexDirection: "column-reverse",
  },
  cardsContainerBottom: {
    flexDirection: "row",
  },

  card: {

  },
  cardMobile: {
    height: 107,
    width: 76,
  },
  cardDesktop: {
    height: 124,
    width: 87,
  },
  topCard: {
    transform: [{ rotate: "180deg" }],
  },
  topCardMobile: {
    marginTop: -30,
  },
  topCardDesktop: {
    marginTop: 20
  },
  rightCard: {
    transform: [{ rotate: "-90deg" }],
    marginRight: -20,
    paddingLeft: 30,
  },
  leftCard: {
    transform: [{ rotate: "90deg" }],
    marginLeft: -20,
    paddingRight: 30,
  },
  bottomCard: {},
  points: {
    color: "#FFF9E9"
  },

  topCardImage: {
    marginRight: -56
  },
  bottomCardImage: {
    marginLeft: -56
  },
  leftCardImageMobile: {
    marginTop: -87
  },
  leftCardImageDesktop: {
    marginTop: -93
  },
  rightCardImageMobile: {
    marginBottom: -87
  },
  rightCardImageDesktop: {
    marginBottom: -93
  },

  pointsHorizontal: {
    // width: 19,
  },
  pointsVertical: {
    paddingVertical: 10,
  },
  
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Game;
