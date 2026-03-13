import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#04091E",
        height: "100%",
      }}
    >
      <Text style={{ textAlign: "left", color: "#fff", fontSize: 20, fontWeight: 400, marginHorizontal: 19 }}>
        Welcome,
      </Text>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "black", color: "#fff", textAlign: "left", marginHorizontal: 10 }}>
          AMY JONES
        </Text>
        {/* THE ICONS*/}
        <Pressable style={{ flexDirection: "row", gap: 9, right: 12 }}>
          <Image source={require("@/assets/images/searchIcon.png")} />
          <Image source={require("@/assets/images/bellIcon.png")} />
        </Pressable>
      </View>
    </View>
  );
}
