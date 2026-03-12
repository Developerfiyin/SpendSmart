import { Image, StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View style={style.view}>
      <Image
        source={require("@/assets/images/splashimage.png")}
        style={style.imgs}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "semibold",
          textAlign: "center",
          color: "#ffff",
          
        }}
      >
        {" "}
        Let’s get you in
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
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
    marginVertical: 177,

  },
});

export default SignUp;
