import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const signup = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("@/assets/images/splashimage.png")}
        style={styles.imgs}
      />
      <Text style={styles.text}>Create an account </Text>

      <View style={styles.container}>
        <TextInput
          placeholder="Email:"
          placeholderTextColor="#A2A2A2"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password:"
          placeholderTextColor="#A2A2A2"
          secureTextEntry={true}
          style={styles.input}
        />

        <Pressable
          style={{
            borderRadius: 90,
            paddingHorizontal: 13,
            width: 357,
            height: 50,
            alignItems: "center",
            backgroundColor: "#2144D1",
          }}
        >
          <Text
            style={{
              fontWeight: "semibold",
              color: "#fff",
              fontSize: 18,
              marginVertical: "auto",
              textAlign: "center",
            }}
          >
            {" "}
            Sign up with Email
          </Text>
        </Pressable>
      </View>

      <View style={styles.containers}>
        <View style={styles.line} />
        <Text style={styles.texts}>OR</Text>
        <View style={styles.line} />
      </View>

      <View style={{ flexDirection: "row", gap: 9 }}>
        <View style={styles.viewss}>
          <Image source={require('@/assets/images/apple.png')} 
          
          style={styles.image}
          />
        </View>
      </View>
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
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign: "left",
    marginLeft: 20,
    marginTop: 9,
    fontWeight: "semibold",
  },
  container: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#A2A2A2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: "#ffff",
  },
  containers: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  texts: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#fff",
  },
  viewss: {
    width: 85,
    height: 67,
    left: 52,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4B4B4B",
  },
  image : {
    marginHorizontal: "auto",
    marginVertical: "auto",
  }
});
export default signup;
