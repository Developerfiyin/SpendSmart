import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
    
       
      }}
    >
      <Text style={{textAlign: "left", fontSize: 15, fontWeight: 200,}}> Welcome,</Text>
      <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", gap: 8 }}>
        <Text style={{fontSize: 18, fontWeight: "black", textAlign: "left" }}> ARMY JONES</Text>
        {/* THE ICONS*/}
        <Pressable style={{flexDirection: "row", gap: 5}}>
          <Image source={require("@/assets/images/searchIcon.png")} />

          <Image source={require("@/assets/images/bellIcon.png")} />

        </Pressable>
      </View>
    </View>
  );
}
