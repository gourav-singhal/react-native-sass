import React, { useCallback, useState } from "react";
import { Utils } from "expo-ui-kit";
import {
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Alert
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Block, Card, Text, Input, Button } from "../../components";
import { images, icons, COLORS, SIZES } from "../../constants";

import deviceSize from "../../utils/deviceSize";
// Custom RATION
export const RATION = {
  xlarge: 1.4,
  large: 1.45,
  normal: 1.5,
  small: 1.5,
  xsmall: 1.5
};
const CONTAINER_HEIGHT = (558 * 100) / SIZES.height / RATION[deviceSize];

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [validEmail, setValidEmail] = useState(false);

  const handleReset = useCallback(() => {
    // reset with email
    Alert.alert(
      "Thank you!",
      `Your email: ${email}`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("SignIn") }
      ],
      { cancelable: false }
    );
  });

  return (
    <KeyboardAwareScrollView
      scrollToOverflowEnabled={false}
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={SIZES.height * 0.1}
    >
      <Block>
        <StatusBar barStyle="light-content" />
        <ImageBackground style={styles.header} source={images.login}>
          <Block
            center
            middle
            marginBottom="2x"
            color={Utils.rgba(COLORS.black, 0.5)}
          >
            <Image style={{ width: 110, height: 48 }} source={icons.logo} />
          </Block>
        </ImageBackground>

        <Card
          noflex
          radius={32}
          padding={[38, 28]}
          marginTop={-64}
          style={{ height: `${CONTAINER_HEIGHT}%` }}
        >
          <Text h2 bold>
            Password Recovery
          </Text>
          <Text gray medium marginTop={10}>
            Enter your email to recover your password
          </Text>

          <Text caption bold marginBottom={10} marginTop={28}>
            EMAIL
          </Text>
          <Input
            style={styles.input}
            validation={validEmail}
            keyboardType="email-address"
            onChangeText={value => setEmail(value)}
            onValidation={isValid => setValidEmail(isValid)}
            pattern='^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$'
          />

          <Button success onPress={() => handleReset()}>
            <Text center bold white>
              Send email
            </Text>
          </Button>
          <Button transparent onPress={() => navigation.navigate("SignIn")}>
            <Text center gray>
              Go back to Login
            </Text>
          </Button>
        </Card>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  input: {
    borderColor: Utils.rgba(COLORS.gray, 0.2),
    borderRadius: 4,
    borderWidth: 2,
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 18
  }
});
