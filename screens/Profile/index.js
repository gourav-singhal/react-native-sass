import React from "react";
import { Utils } from "expo-ui-kit";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";

import { Button, Icon } from "../../components";
import { COLORS } from "../../constants";
import hasNotch from "../../utils/hasNotch";

import Profile from "./Profile";
import Settings from "./Settings";

const Stack = createStackNavigator();

export default () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("light-content");
    }, [])
  );

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={({ navigation, route }) => {
        const isProfile = route.name === "Profile";

        return {
          gestureEnabled: false,
          cardStyle: { backgroundColor: "transparent" },
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: hasNotch() ? 128 : 80
          },
          headerTitle: () => null,
          headerLeft: () => (
            <Button
              white
              style={{ marginHorizontal: 28 }}
              onPress={() => {
                !isProfile && navigation.goBack();
                isProfile && navigation.navigate("Settings");
              }}
              icon={
                <Icon
                  size={16}
                  color={COLORS.primary}
                  name={!isProfile ? "arrowLight" : "settings"}
                  style={!isProfile && { transform: [{ rotate: "90deg" }] }}
                />
              }
            />
          ),
          headerRight: () =>
            isProfile && (
              <Button
                white
                style={{
                  marginHorizontal: 28,
                  backgroundColor: "transparent",
                  borderWidth: 2,
                  borderColor: Utils.rgba(COLORS.white, 0.2)
                }}
                onPress={() => navigation.navigate("Account")}
                icon={<Icon size={16} name="pencil" color={COLORS.white} />}
              />
            )
        };
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
