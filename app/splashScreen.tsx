import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return(
    <View style={styles.view}>
        <Image
        source={require('../assets/images/splashimage.png')}
       />
      <Text style={{fontSize: 29,color: "#ffffff", fontWeight: 400 }}>SpendSmart </Text>
    </View>
  )};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    textAlign: 'center',
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#04091E",
  }, 
})
