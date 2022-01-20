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
  xlarge: 1.2,
  large: 1.1,
  normal: 1.05,
  small: 1.05,
  xsmall: 1.05
};
const CONTAINER_HEIGHT = (558 * 100) / SIZES.height / RATION[deviceSize];

const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validEmail, setValidEmail] = useState(false);

  const handleSignup = useCallback(() => {
    // register with name, email & password
    Alert.alert(
      "Thank you!",
      `Your information: ${name}, ${email} & ${password}`,
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
      extraScrollHeight={SIZES.height * 0.15}
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
          marginTop={-64}
          padding={[38, 28]}
          style={{ height: `${CONTAINER_HEIGHT}%` }}
        >
          <Text h2 bold>
            Create an account
          </Text>
          <Text gray medium marginTop={10} marginBottom={38}>
            Sign up to continue
          </Text>

          <Block noflex marginBottom={18}>
            <Text caption bold marginBottom={10}>
              NAME
            </Text>
            <Input
              style={styles.input}
              onChangeText={value => setName(value)}
            />
          </Block>
          <Block noflex marginBottom={18}>
            <Text caption bold marginBottom={10}>
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
          </Block>
          <Block noflex marginBottom={18}>
            <Text caption bold marginBottom={10}>
              PASSWORD
            </Text>
            <Input
              secureTextEntry
              style={styles.input}
              onChangeText={value => setPassword(value)}
            />
          </Block>

          <Button secondary onPress={() => handleSignup()}>
            <Text center bold>
              Create an account
            </Text>
          </Button>
          <Button transparent onPress={() => navigation.navigate("SignIn")}>
            <Text center gray>
              Already have an account? Login
            </Text>
          </Button>
        </Card>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

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
    fontWeight: "500"
  }
});
