import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon, Text } from "../components/";
import { COLORS } from "../constants/";
import hasNotch from "../utils/hasNotch";
import { getHeaderTitle, getHeaderButtons } from "../utils/helpers";

// import screens
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Calendar from "../screens/Calendar";
import Activity from "../screens/Activity";
import MyProfile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <Text center bold caption transform="uppercase">
          {getHeaderTitle(route)}
        </Text>
      ),
      ...getHeaderButtons({ navigation, route })
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;
          switch (route.name) {
            case "Home":
              return (
                <Icon name="feed" color={tintColor} resizeMode="contain" />
              );

            case "Chat":
              return (
                <Icon name="comment" color={tintColor} resizeMode="contain" />
              );

            case "Calendar":
              return (
                <Icon name="calendar" color={tintColor} resizeMode="contain" />
              );

            case "Activity":
              return (
                <Icon name="timeline" color={tintColor} resizeMode="contain" />
              );

            case "MyProfile":
              return (
                <Icon name="user" color={tintColor} resizeMode="contain" />
              );
          }
        }
      })}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: COLORS.primary,
        inactiveBackgroundColor: COLORS.lightGray,
        style: {
          // backgroundColor: COLORS.lightGray,
          height: hasNotch() ? 122 : 96,
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
          alignItems: "center",
          paddingTop: 25,
          // shadow
          shadowRadius: 5,
          shadowOpacity: 0.15,
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 0 },
          elevation: 6
        },
        tabStyle: {
          borderRadius: 12,
          maxHeight: 38,
          minHeight: 38,
          maxWidth: 38,
          marginHorizontal: 16
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ headerMode: "none" }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
