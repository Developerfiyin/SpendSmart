import React from 'react'
import { View, StyleSheet, Image, Text,     } from 'react-native'
const home = () => {
  return (
    <View style={styles.view}>

   <Image source={require('@/assets/images/image 1.png')}   />
    <Text style={{fontSize: 30, color: "#ffffff",  }}> Track your expenses with SmartSpend</Text>
    </View>
  )
};
const styles = StyleSheet.create({
view: {
height: "100%",
backgroundColor: "#04091E",
 display: "flex",
 alignItems: "center",
 textAlign: "center",


    }
})

export default home