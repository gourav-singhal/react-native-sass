import React from "react";
import { Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Utils } from "expo-ui-kit";
import dayjs from "dayjs";

import { Button, Block, Icon, Text } from "../../components";
import { mock, COLORS } from "../../constants";

export const Activity = ({ type, user, file, channel, timestamp, content }) => {
  const totalUsers = channel?.users?.length;

  return (
    <Block row paddingBottom={18}>
      <Block noflex center marginRight>
        <Button
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: Utils.rgba(COLORS.success, 0.2)
          }}
        >
          <Icon name={type} size={12} color={COLORS.success} />
        </Button>
        <Block
          marginTop
          width={1}
          height="100%"
          color={Utils.rgba(COLORS.gray, 0.2)}
        />
      </Block>
      <Block>
        <Block row center space="between">
          <Text semibold>{user.name}</Text>
          <Text small gray>
            {dayjs(timestamp).format("HH:mm A")}
          </Text>
        </Block>
        <Text gray marginTop>
          {content}
        </Text>
        {type === "upload" && (
          <Block white row center marginTop padding radius={12}>
            <Icon name={file.type} size={28} color="none" />
            <Text gray marginLeft>
              {file.name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon size={12} margin={8} name="download" color={COLORS.gray} />
            </TouchableOpacity>
          </Block>
        )}
        {type === "comment" && (
          <Block row center marginTop>
            <Block>
              <Text bold marginBottom>
                {channel.name}
              </Text>
              <Block row center overflow="hidden">
                {channel?.users?.splice(0, 3).map((avatar, index) => (
                  <Image
                    key={`avatar-${index}-${avatar}`}
                    source={{ uri: avatar }}
                    style={{
                      height: 18,
                      width: 18,
                      zIndex: -index,
                      borderRadius: 4,
                      marginLeft: index ? -1 : 0,
                      backgroundColor: COLORS.secondary
                    }}
                  />
                ))}
                {totalUsers - 3 > 0 && (
                  <Block
                    noflex
                    secondary
                    center
                    middle
                    style={{
                      height: 18,
                      width: 18,
                      zIndex: -999,
                      borderRadius: 4,
                      marginLeft: -1
                    }}
                  >
                    <Text white bold size={8}>
                      +{totalUsers - 3}
                    </Text>
                  </Block>
                )}
              </Block>
            </Block>
            <Block row center marginTop={20}>
              <Block
                row
                center
                primary
                radius={4}
                marginRight={10}
                padding={[8, 10]}
              >
                <Icon name="check" color={COLORS.white} size={12} />
                <Text white marginLeft={4}>
                  Accept
                </Text>
              </Block>
              <Block
                row
                center
                radius={4}
                padding={[8, 10]}
                color={Utils.rgba(COLORS.gray, 0.2)}
              >
                <Icon name="close" color={COLORS.gray} size={9} />
                <Text gray marginLeft={4}>
                  Ignore
                </Text>
              </Block>
            </Block>
          </Block>
        )}
      </Block>
    </Block>
  );
};

const Activities = ({ items = mock.ACTIVITIES }) => {
  return (
    <Block marginHorizontal={28}>
      <Text h3 gray bold marginBottom={28}>
        Today
      </Text>
      <FlatList
        data={items}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Activity {...item} />}
      />
    </Block>
  );
};

export default Activities;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Utils.rgba(COLORS.gray, 0.2),
    borderRadius: 8,
    marginLeft: 10
  }
});
