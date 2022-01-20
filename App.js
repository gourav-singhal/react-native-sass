import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import Tabs from "./navigation/tabs";
import BtnSearch from "./navigation/BtnSearch";
import BtnBack from "./navigation/BtnBack";
import BtnOptions from "./navigation/BtnOptions";
import BtnNotifications from "./navigation/BtnNotifications";

import { COLORS } from "./constants/";
import hasNotch from "./utils/hasNotch";
import { Button, Text, Icon } from "./components/";
import { SignIn, SignUp, ResetPassword } from "./screens/";

// extra screens
import Messages from "./screens/Chat/Messages";
import FileFolder from "./screens/Activity/FileFolder";
import Search from "./screens/Search";
import Notifications from "./screens/Notifications";
import Account from "./screens/Profile/Account";
import Contacts from "./screens/Profile/Contacts";
import User from "./screens/Profile/User";

const HEADER_HEIGHT = hasNotch() ? 128 : 80;
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.lightGray,
    border: "transparent",
    card: COLORS.white
  }
};

const authOptions = {
  headerShown: false,
  gestureEnabled: false,
  cardStyle: { backgroundColor: COLORS.white }
};

const screenOptions = {
  gestureEnabled: false,
  headerStyle: {
    height: HEADER_HEIGHT,
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6
  },
  headerTitle: ({ children }) => (
    <Text center bold caption transform="uppercase">
      {children}
    </Text>
  ),
  headerRight: () => <BtnOptions />
};

const tabsOptions = () => ({
  title: "Home",
  gestureEnabled: false,
  headerStyle: {
    height: HEADER_HEIGHT,
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6
  },
  headerTitle: ({ children }) => (
    <Text center bold caption transform="uppercase">
      {children}
    </Text>
  ),
  headerLeft: () => <BtnSearch />,
  headerRight: () => <BtnNotifications />
});

export default () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {/* auth screens */}
        <Stack.Screen name="SignIn" component={SignIn} options={authOptions} />
        <Stack.Screen name="SignUp" component={SignUp} options={authOptions} />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={authOptions}
        />
        {/* tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={props => tabsOptions(props)}
        />
        <Stack.Screen
          name="FileFolder"
          component={FileFolder}
          options={props => ({
            title: "File Manager",
            ...screenOptions,
            ...props
          })}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={props => ({
            ...props,
            ...screenOptions
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: null,
            gestureEnabled: false,
            animationEnabled: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: COLORS.primary },
            headerStyle: {
              height: HEADER_HEIGHT,
              backgroundColor: COLORS.primary
            },
            headerLeft: ({ onPress }) => {
              return (
                <Button
                  white
                  onPress={event => onPress(event)}
                  style={{ marginHorizontal: 28 }}
                  icon={
                    <Icon
                      size={16}
                      name="arrowLight"
                      color={COLORS.primary}
                      style={{ transform: [{ rotate: "90deg" }] }}
                    />
                  }
                />
              );
            }
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={props => ({
            headerLeft: ({ onPress }) => (
              <BtnBack onPress={event => onPress(event)} />
            ),
            ...screenOptions,
            ...props
          })}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: COLORS.primary
            },
            ...TransitionPresets.ModalTransition
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerStyle: {
              height: HEADER_HEIGHT,
              backgroundColor: COLORS.primary
            },
            headerLeft: ({ onPress }) => {
              return <BtnBack white onPress={event => onPress(event)} />;
            }
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={props => ({
            title: "Search",
            ...screenOptions,
            ...props,
            headerLeft: ({ onPress }) => (
              <BtnBack onPress={event => onPress(event)} />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
