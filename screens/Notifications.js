import React from "react";
import { Image, FlatList, StyleSheet, StatusBar } from "react-native";
import dayjs from "dayjs";
import { Utils } from "expo-ui-kit";
import { useFocusEffect } from "@react-navigation/native";

import { Block, Text, Icon } from "../components/";
import { mock, COLORS } from "../constants/";

const Notification = ({ notifications = mock.NOTIFICATIONS }) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("light-content");
    }, [])
  );

  const renderNotification = item => {
    return (
      <Block row marginBottom={28}>
        <Block tertiary radius={8} maxWidth={8} height={8} marginTop />
        <Image style={styles.avatar} source={{ uri: item.user.avatar }} />
        <Block middle>
          <Block row center>
            <Text white bold>
              {item.user.name}
            </Text>
            <Text white caption paddingLeft={10}>
              {dayjs().diff(item.time, "minute")}min
            </Text>
          </Block>
          <Text white height={22}>
            {item.action}
          </Text>
          {item.type === "comment" && (
            <Block row center marginTop={20}>
              <Block row center success padding radius={4} marginRight={15}>
                <Icon name="check" color={COLORS.white} size={12} />
                <Text white bold marginLeft={4}>
                  Accept
                </Text>
              </Block>
              <Block
                row
                center
                padding
                radius={4}
                color={Utils.rgba(COLORS.black, 0.2)}
              >
                <Icon name="close" color={COLORS.white} size={9} />
                <Text white bold marginLeft={4}>
                  Ignore
                </Text>
              </Block>
            </Block>
          )}
        </Block>
        <Block
          noflex
          black
          center
          middle
          padding
          radius={12}
          height={38}
          width={38}
          color={Utils.rgba(COLORS.white, 0.2)}
        >
          <Icon name={item.type} size={16} />
        </Block>
      </Block>
    );
  };

  return (
    <Block padding={28} primary>
      <Text h2 bold white marginBottom={28}>
        Notifications
      </Text>
      <FlatList
        data={notifications}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => renderNotification(item)}
      />
    </Block>
  );
};

export default Notification;

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    height: 28,
    marginHorizontal: 10,
    width: 28
  }
});
