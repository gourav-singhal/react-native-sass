import React from "react";
import { Image, TouchableOpacity, ScrollView } from "react-native";
import { Utils } from "expo-ui-kit";

import { Block, Text, Icon } from "../../components";
import { mock, COLORS } from "../../constants/";

const Settings = ({ navigation, route, user = mock.USER }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      headerTitle: () => {
        return (
          <Block row center>
            <Block row marginLeft={28}>
              <Image
                source={user.avatar}
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 12,
                  backgroundColor: COLORS.success
                }}
              />
              <Block
                gray={!user.online}
                success={user.online}
                style={{
                  top: -2,
                  right: -2,
                  borderWidth: 2,
                  borderRadius: 6,
                  width: 12,
                  height: 12,
                  borderColor: COLORS.primary,
                  position: "absolute"
                }}
              />
            </Block>

            <Text white medium marginLeft>
              {user.name}
            </Text>
          </Block>
        );
      }
    });
  }, [navigation, route, user]);

  return (
    <Block primary padding={28}>
      <Text h2 bold white marginBottom={28}>
        Settings
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="user" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  My Account
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contacts")}>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="phone" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  My Contacts
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="notification" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  Notifications
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="lock" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  Security & Privacy
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="camera" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  Messages & Media
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="customize" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  Theme Customization
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block row center marginBottom={28}>
            <Block
              center
              middle
              success
              radius={12}
              height={38}
              maxWidth={38}
              marginRight={9}
              color={Utils.rgba(COLORS.white, 0.2)}
            >
              <Icon name="help" white />
            </Block>
            <Block>
              <Block row center marginLeft={18} space="between">
                <Text white bold title>
                  Help
                </Text>
                <Icon
                  white
                  size={12}
                  name="arrowLight"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
      </ScrollView>
    </Block>
  );
};

export default Settings;
