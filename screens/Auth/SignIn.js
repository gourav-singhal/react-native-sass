import React, { useCallback, useState } from "react";
import { StyleSheet, Image, ImageBackground, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Utils } from "expo-ui-kit";

import { Block, Card, Text, Input, Button } from "../../components";
import { icons, images, COLORS, SIZES } from "../../constants/";

import deviceSize from "../../utils/deviceSize";
// Custom RATION
export const RATION = {
  xlarge: 2.5,
  large: 1.8,
  normal: 1.4,
  small: 1,
  xsmall: 1
};

const CONTAINER_HEIGHT = (558 * 100) / SIZES.height / RATION[deviceSize];

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleLogin = useCallback(() => {
    // login with email & password
    navigation.navigate("Home", { screen: "Dashboard" });
  });

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      extraScrollHeight={SIZES.height * 0.12}
    >
      <Block>
        <StatusBar barStyle="light-content" />
        <ImageBackground style={styles.header} source={images.login}>
          <Block center middle color={Utils.rgba(COLORS.black, 0.5)}>
            <Image style={{ width: 110, height: 48 }} source={icons.logo} />
          </Block>
        </ImageBackground>

        <Card
          noflex
          radius={32}
          marginTop={-64}
          padding={[38, 28]}
          style={{ height: `${CONTAINER_HEIGHT}%` }}
        >
          <Text h2 bold>
            Welcome Back!
          </Text>
          <Text gray medium marginTop={10} marginBottom={38}>
            Login to continue
          </Text>

          <Block noflex marginBottom={18}>
            <Text caption bold marginBottom={10}>
              EMAIL
            </Text>
            <Input
              value={email}
              style={styles.input}
              validation={validEmail}
              keyboardType="email-address"
              onChangeText={value => setEmail(value)}
              onValidation={isValid => setValidEmail(isValid)}
              pattern='^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$'
            />
          </Block>
          <Block noflex marginBottom={18}>
            <Text caption bold marginBottom={10}>
              PASSWORD
            </Text>
            <Input
              secureTextEntry
              value={password}
              style={styles.input}
              onChangeText={value => setPassword(value)}
            />
          </Block>

          <Button onPress={() => handleLogin()}>
            <Text center bold white>
              Login
            </Text>
          </Button>
          <Button
            transparent
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text center gray>
              Forgot Password?
            </Text>
          </Button>
          <Button
            outlined
            style={styles.button}
            color={Utils.rgba(COLORS.gray, 0.2)}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text center bold>
              Create an account
            </Text>
          </Button>
        </Card>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  header: {
    flex: 0.7,
    height: "100%",
    width: "100%"
  },
  input: {
    borderColor: Utils.rgba(COLORS.gray, 0.2),
    borderRadius: 4,
    borderWidth: 2,
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: "500"
  }
});
