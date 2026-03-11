import { Tabs } from "expo-router";
export default function RootLayout() {
  return (
     <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 110,
          paddingBottom: 20,
          paddingTop: 15,
        },
      }}
    ></Tabs>
  );
}
