import React from 'react'
import {Dimensions, FlatList, View, StyleSheet, Text, Image} from "react-native"
import useResponsive from '../hooks/useResponsive'
import { commonStyles } from '../styles/commonStyles'

const mockArr=[
    {
    name:'Daniele',
    points:6
    },
    {
    name:'Isabella',
    points:2
    },
    {
    name:'Marco',
    points:3
    },
    {
    name:'Giovanni',
    points:1
    }
]
function Ranking(props) {
  let isDesktop=useResponsive();

  const Item = ({name, points, index}) => (
    <View style={[styles.item, isDesktop ? styles.itemDesktop : styles.itemMobile]}>
      <Text
        style={[
          styles.text, 
          isDesktop ? (
            index === 0 ? styles.firstPlayerDesktop :
            index === 1 ? styles.secondPlayerDesktop :
            index === 2 ? styles.thirdPlayerDesktop :
            styles.genericPlayerDesktop
          ) : (
            index === 0 ? styles.firstPlayerMobile :
            index === 1 ? styles.secondPlayerMobile :
            index === 2 ? styles.thirdPlayerMobile :
            styles.genericPlayerMobile
          )
        ]}
      >{`${name} :`}</Text>
      <Text
        style={[
          styles.text, 
          isDesktop ? (
            index === 0 ? styles.firstPlayerDesktop :
            index === 1 ? styles.secondPlayerDesktop :
            index === 2 ? styles.thirdPlayerDesktop :
            styles.genericPlayerDesktop
          ) : (
            index === 0 ? styles.firstPlayerMobile :
            index === 1 ? styles.secondPlayerMobile :
            index === 2 ? styles.thirdPlayerMobile :
            styles.genericPlayerMobile
          )
        ]}
      >{points}</Text>
    </View>
  )

  const renderItem = ({ item, index }) => {
    return <Item name={item.name} points={item.points} index={index} />
  }

  return (
    <View style={[commonStyles.screenContainer, styles.container]}>
        <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={[styles.logo, isDesktop ? styles.logoDesktop : styles.logoMobile]}/>
        <View style={styles.list}>
          <FlatList
              showsHorizontalScrollIndicator={false}
              data={mockArr.sort((a, b) => a.points > b.points ? -1 : 1)}
              renderItem={renderItem}
          />
        </View>
        {props.children}
    </View>
    )
}

const styles= StyleSheet.create({
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
  list: {
    maxHeight: "70%"
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:3
  },
  itemMobile: {
    width: Dimensions.get("window").width - 40
  },
  itemDesktop: {
    width: Dimensions.get("window").width / 3,
  },
  text: {
    color: "#97080C"
  },
  firstPlayerMobile: {
    fontSize: 28
  },
  secondPlayerMobile: {
    fontSize: 24
  },
  thirdPlayerMobile: {
    fontSize: 20
  },
  genericPlayerMobile: {
    fontSize: 16
  },
  firstPlayerDesktop: {
    fontSize: 32
  },
  secondPlayerDesktop: {
    fontSize: 28
  },
  thirdPlayerDesktop: {
    fontSize: 24
  },
  genericPlayerDesktop: {
    fontSize: 20
  }
})
export default Ranking