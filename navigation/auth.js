import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp, ResetPassword } from "../screens/";

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </>
  );
};
