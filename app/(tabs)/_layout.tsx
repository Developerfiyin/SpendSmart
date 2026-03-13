import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: {
          backgroundColor: "white",
          height: 110,
          paddingBottom: 20,
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Feather name="home" size={30} color="#04091E" />
            ) : (
              <AntDesign name="home" size={30} color="#2144D1" />
            );
          },
          tabBarLabelStyle: { fontSize: 15, color: "#ccc", paddingTop: 9 },
        }}
      />
    </Tabs>
  );
}
