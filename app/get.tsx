import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const get = () => {
  return (
    <View style={styles.view}>
      <Image source={require("@/assets/images/image 1.png")} />
      <Text style={{fontSize: 30, marginBottom: -10, marginTop: 39,  color: "#ffffff", fontWeight: 500,  }}>
        Track your expenses with
      </Text>
      
      <Text style={{fontSize: 30, color: "#ffffff", fontWeight: 500 }}>
        SmartSpend
      </Text>
      <View style={{flexDirection: "row", gap: 6 , marginTop: 40, }}>
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
            backgroundColor: "#4C4F5E",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#898B958A",
            width: 6,
            height: 6,
            borderRadius: 100,
          }}
        ></View>
      </View>

      <Pressable style={styles.circle}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center", }}
        > Next
        </Text>
      </Pressable>
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
    gap: 10,
    alignItems: "center",
    textAlign: "center",
  },
  circle: {
    backgroundColor: "#2144D1",
    paddingVertical: 15,
    textAlign: "center",
    marginTop: 67,
    paddingHorizontal: 130,
    borderRadius: 90,
  },
});

export default get;
