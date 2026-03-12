import React from "react";
import { View , Image, StyleSheet} from "react-native";

const signup = () => {
  return (
    <View style={ styles.view}>
      <Image
        source={require("@/assets/images/splashimage.png")}
        style={styles.imgs}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
    flexDirection: "column",
    gap: 2,
    backgroundColor: "#04091E",
    height: "100%",
  }, 
  imgs: {
    width: 59,
    height: 56.3,
    marginHorizontal: "auto",
    marginTop: 177,
  },
})
export default signup;
