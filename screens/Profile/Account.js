import React, { useState } from "react";
import { Utils } from "expo-ui-kit";
import { Image, StyleSheet, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Block, Button, Icon, Text, Input } from "../../components";
import { mock, SIZES, COLORS } from "../../constants/";
import hasNotch from "../../utils/hasNotch";

const STATUS_HEIGHT = StatusBar.currentHeight || hasNotch() ? 44 : 20;

const Account = ({ user = mock.USER, navigation }) => {
  const [email, setEmail] = useState(user.email);
  const [fname, setFirstName] = useState(user.first_name);
  const [lname, setLastName] = useState(user.last_name);
  const [validEmail, setValidEmail] = useState(false);

  return (
    <Block paddingTop={STATUS_HEIGHT}>
      <StatusBar barStyle="light-content" />
      <Block>
        <Block white center flex={0} style={styles.header}>
          <Block
            flex={0}
            radius={5}
            width={38}
            marginTop={22}
            style={{ minHeight: 5 }}
            color={Utils.rgba(COLORS.black, 0.4)}
          />
        </Block>
        <Block white paddingHorizontal={28}>
          <KeyboardAwareScrollView
            scrollToOverflowEnabled={false}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={SIZES.height * 0.15}
            contentContainerStyle={{ paddingBottom: 28 }}
          >
            <Text gray title bold>
              Account Informations
            </Text>
            <Block row center middle marginVertical={38}>
              <Button success style={styles.button}>
                <Icon name="camera" center />
              </Button>
              <Block noflex marginHorizontal={28}>
                <Image style={styles.avatar} source={user.avatar} />
              </Block>
              <Button
                outlined
                style={styles.button}
                color={Utils.rgba(COLORS.gray, 0.5)}
              >
                <Icon name="bin" color={COLORS.black} />
              </Button>
            </Block>
            <Block>
              <Text gray title bold>
                Basic Information
              </Text>
              <Block noflex height={78} marginVertical={28}>
                <Text flex caption bold marginBottom={10}>
                  FIRST NAME
                </Text>
                <Block
                  middle
                  radius={4}
                  paddingLeft={15}
                  color={COLORS.lightGray}
                >
                  <Input
                    value={fname}
                    style={styles.input}
                    onChangeText={value => setFirstName(value)}
                  />
                </Block>
              </Block>
              <Block noflex height={78}>
                <Text flex caption bold marginBottom={10}>
                  LAST NAME
                </Text>
                <Block
                  middle
                  radius={4}
                  paddingLeft={15}
                  color={COLORS.lightGray}
                >
                  <Input
                    value={lname}
                    style={styles.input}
                    onChangeText={value => setLastName(value)}
                  />
                </Block>
              </Block>
              <Block noflex height={78} marginVertical={28}>
                <Text flex caption bold marginBottom={10}>
                  EMAIL
                </Text>
                <Block
                  middle
                  radius={4}
                  paddingLeft={15}
                  color={COLORS.lightGray}
                >
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
              </Block>
              <Button success onPress={() => navigation.goBack()}>
                <Text white bold center>
                  Save Changes
                </Text>
              </Button>
            </Block>
          </KeyboardAwareScrollView>
        </Block>
      </Block>
    </Block>
  );
};

export default Account;

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: COLORS.secondary,
    borderRadius: 28,
    height: 108,
    width: 108
  },
  button: {
    alignItems: "center",
    height: 38,
    width: 38
  },
  header: {
    borderTopLeftRadius: SIZES.radius * 2.66,
    borderTopRightRadius: SIZES.radius * 2.66,
    flex: 0,
    height: 68,
    marginBottom: -2
  },
  input: {
    borderWidth: 0,
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: "500"
  }
});
