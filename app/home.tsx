import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const home = () => {
  return (
    <View style={styles.view}>
      <Image source={require("@/assets/images/image 1.png")} />
      <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: 500 }}>
        {" "}
        Track your expenses with SmartSpend
      </Text>

      <View>
        <View
          style={{
            backgroundColor: "#C5C6CF",
            width: 6,
            height: 6,
            borderRadius: 100,
          }}
        ></View>
        <View 
        style={{ 
               width: 6,
            height: 6,
            borderRadius: 100,  
            backgroundColor: "#4C4F5E"

        }} ></View>
        <View></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#04091E",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  circle: {},
});

export default home;
