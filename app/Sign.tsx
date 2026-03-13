import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { router } from "expo-router";
const SignUp = () => {


  const google = () => {
    Linking.openURL("https://accounts.google.com/");
  };

  const appleLogin = () => {
    Linking.openURL("https://appleid.apple.com/");
  };

  const facebookLogin = () => {
    Linking.openURL("https://www.facebook.com/login/");
  };
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
      onPress={google}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: "#4B4B4B",
          width: 357,
          height: 50,
          marginBottom: 15,
          marginHorizontal: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 24, height: 24 }}>
          <Image
            source={require("@/assets/images/goggle.png")}
            style={{ width: 20, height: 20.66 }}
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
          Continue with Google
        </Text>
      </Pressable>

      <Pressable
      onPress={appleLogin}
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
          marginBottom: 15,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 24, height: 24, marginRight: 10 }}>
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
          Continue with Apple
        </Text>
      </Pressable>

      <Pressable
      onPress={facebookLogin}
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
          marginBottom: 15,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 24, height: 24 }}>
          <Image
            source={require("@/assets/images/facebook.png")}
            style={{ width: 20.87, height: 21 }}
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
          Continue with facebook
        </Text>
      </Pressable>

    <View style={style.container}>
      <View style={style.line} />
      <Text style={style.text}>OR</Text>
      <View style={style.line} />
    </View>


     <Pressable style={style.circle} 
          onPress={() => router.push('/(tabs)')}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 500,
                textAlign: "center", }}
            > Get Started
            </Text>
          </Pressable>

 <View style={style.containers}>
      <Text style={style.texts}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={style.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
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

  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#fff",
  },

  circle: {
    backgroundColor: "#2144D1",
    paddingVertical: 11,
    textAlign: "center",
    
    borderRadius: 90,
  },

containers: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  texts: {
    fontSize: 14,
    color: "#555",
  },
  link: {
    fontSize: 14,
    color: "#007BFF",
    marginLeft: 5,
    fontWeight: "bold",
    
  },
  
});

export default SignUp;
