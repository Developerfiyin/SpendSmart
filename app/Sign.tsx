import { View,  Image , StyleSheet, Text, } from "react-native";

const SignUp = () => {
  return (
    <View style={style.view}>
      
      <Image source={require('@/assets/images/splashimage.png')}
      style={style.imgs} />
       
       <Text style={{fontSize: 20, }} > Let’s get you in</Text>


    </View>
  )
}

const style = StyleSheet.create({
    view: {
  flexDirection: "column",
  gap: 8,
    },
    imgs: {
  width: 59,
  height: 56.3,

    }
})

export default SignUp;