import { Image, StyleSheet, Text, View, Pressable } from "react-native";

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

         <Pressable style={{ display: "flex", flexDirection: "row", gap: 5 , borderRadius: 90,  backgroundColor: "#4B4B4B",  }}> 
              <Image source={require("@/assets/images/goggle.png")} style={{width: 24, height: 24, }} />
              <Text> Continue with Google</Text>
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
