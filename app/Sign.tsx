import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View style={style.view}>
      <Image
        source={require("@/assets/images/splashimage.png")}
        style={style.imgs}
      />

      <Text
        style={{
          fontSize: 40,
          fontWeight: "semibold",
          textAlign: "center",
          color: "#ffff",
          letterSpacing: 0,
          verticalAlign: "middle",
          marginVertical: 50,
        }}
      >
        Let’s get you in
      </Text>

      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: "#4B4B4B",
          width: 357,
          height: 50,
          marginHorizontal: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/assets/images/goggle.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "semibold",
            textAlign: "center",
            color: "#ffff",
          }}
        >
          {" "}
          Continue with Google
        </Text>
      </Pressable>

      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: "#4B4B4B",
          width: 357,
          height: 50,
          marginHorizontal: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{width: 24, height: 24}}>
          <Image
            source={require("@/assets/images/apple.png")}
            style={{ width: 15.7, height: 18 }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "semibold",
            textAlign: "center",
            color: "#ffff",
          }}
        >
          {" "}
          Continue with Apple
        </Text>
      </Pressable>

      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: "#4B4B4B",
          width: 357,
          height: 50,
          marginHorizontal: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/assets/images/facebook.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "semibold",
            textAlign: "center",
            color: "#ffff",
          }}
        >
          {" "}
          Continue with facebook
        </Text>
      </Pressable>
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
    marginTop: 177,
  },
});

export default SignUp;
