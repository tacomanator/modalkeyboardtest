import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import ModalScreen from "../screens/ModalScreen";
import { RectButton } from "react-native-gesture-handler";
import { Text } from "react-native";

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const InnerStack = createStackNavigator();
const ModalStack = createStackNavigator();

const INITIAL_ROUTE_NAME = "Home";

function InnerNavigator() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </InnerStack.Navigator>
  );
}

function ModalNavigator() {
  return (
    <ModalStack.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: null,
        headerRight: () => (
          <RectButton onPress={navigation.goBack} style={{ marginRight: 10 }}>
            <Text>Done</Text>
          </RectButton>
        )
      })}
    >
      <ModalStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ title: "Modal" }}
        sceneContainerStyle
      />
    </ModalStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Home"
        component={InnerNavigator}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Modal"
        component={ModalNavigator}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator
      mode="modal"
      headerMode="screen"
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          )
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
