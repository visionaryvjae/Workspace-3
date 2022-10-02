import { useState } from "react";
import Profile1 from "./screens/Profile1";
import SearchResults from "./screens/SearchResults";
import SearchTab from "./screens/SearchTab";
import Favourites from "./screens/Favourites";
import Notifications from "./screens/Notifications";
import FontAwesomeIcons from "./components/FontAwesomeIcons";
import VectorIcon1 from "./components/VectorIcon1";
import FontAwesomeIcons4 from "./components/FontAwesomeIcons4";
import VectorIcon from "./components/VectorIcon";
import FontAwesomeIcons3 from "./components/FontAwesomeIcons3";
import FontAwesomeIcons2 from "./components/FontAwesomeIcons2";
import FontAwesomeIcons1 from "./components/FontAwesomeIcons1";

import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./utils/AppStack";


const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = useState([
    <FontAwesomeIcons />,
    <FontAwesomeIcons4 />,
    <FontAwesomeIcons3 />,
    <FontAwesomeIcons1 />,
  ]);
  const [bottomTabItemsActive] = useState([
    <FontAwesomeIcons />,
    <VectorIcon1 />,
    <VectorIcon />,
    <FontAwesomeIcons2 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              height: 72.59619140625,
              width: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile1"
        component={Profile1}
        options={{ headerShown: false }}
      />
       <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return(
    <AppStack/>
  )
};
export default App;
