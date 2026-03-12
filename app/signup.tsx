import React from "react";
import { Image, StyleSheet, Text, TextInput, View, Pressable } from "react-native";

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
          placeholder="Email"
          placeholderTextColor="#A2A2A2"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#A2A2A2"
          secureTextEntry={true}
          style={styles.input}
        />


        <Pressable style={{borderRadius: 90, backgroundColor: "#2144D1",   }}>
  
          <Text style={{ 
             fontWeight: "semibold",
             color: "#fff",
             fontSize: 18,
             borderWidth: 1,
             borderColor: "#4B4B4B",
             textAlign: "center",
          }}> Sign up with Email</Text>
        </Pressable>


      </View>

    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
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
export default signup;
