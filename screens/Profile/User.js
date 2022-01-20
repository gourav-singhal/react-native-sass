import React, { useState } from "react";
import { Image, StyleSheet, FlatList, ScrollView } from "react-native";
import { Utils } from "expo-ui-kit";
import dayjs from "dayjs";

import { Block, Button, Text, Icon, Modal } from "../../components";
import { SIZES, COLORS } from "../../constants/";

import { Activity } from "../Activity/Activities";

const Activities = ({ user }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      propagateSwipe
      onSwipeComplete={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      headerStyle={{ backgroundColor: COLORS.lightGray }}
    >
      <Block
        paddingHorizontal={28}
        color={COLORS.lightGray}
        style={{ maxHeight: 280 }}
      >
        <Text bold marginBottom={28}>
          {user?.name?.split(" ")?.[0]}'s Recent Activities
        </Text>
        <FlatList
          scrollEnabled
          nestedScrollEnabled
          data={user?.activities}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Activity {...item} user={user} />}
        />
      </Block>
    </Modal>
  );
};

export default ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <Block safe noflex>
            <Image
              source={{ uri: user?.avatar }}
              style={{
                height: 108,
                width: 108,
                borderRadius: 36,
                marginTop: 72,
                backgroundColor: COLORS.success
              }}
            />
            <Block
              success
              style={{
                top: 64,
                right: -4,
                borderWidth: 6,
                borderRadius: 34,
                width: 34,
                height: 34,
                borderColor: COLORS.primary,
                position: "absolute"
              }}
            />
          </Block>
        );
      }
    });
  }, [navigation, route, user]);

  const { user } = route.params;

  return (
    <Block primary paddingTop={54}>
      <Block center noflex>
        <Text h1 bold white marginBottom={8} marginTop={18}>
          {user?.name}
        </Text>
        <Text medium white>
          {user?.position}
        </Text>

        <Block row center middle marginTop={38} marginHorizontal={28}>
          <Button success style={[styles.button, { flex: 1 }]}>
            <Block row center middle>
              <Icon name="message" />
              <Text title white bold marginLeft={10}>
                Message
              </Text>
            </Block>
          </Button>
          <Button
            color={Utils.rgba(COLORS.white, 0.2)}
            style={[styles.button, { marginHorizontal: 10 }]}
          >
            <Icon name="star" />
          </Button>
          <Button
            outlined
            style={styles.button}
            color={Utils.rgba(COLORS.white, 0.2)}
          >
            <Icon name="options" />
          </Button>
        </Block>
        <Block
          noflex
          height={1}
          marginRight={28}
          marginVertical={28}
          width={SIZES.width - 28 * 3}
          color={Utils.rgba(COLORS.white, 0.2)}
        />
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block marginHorizontal={28}>
          <Block row center marginBottom={38}>
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
              <Icon name="pin" white />
            </Block>
            <Block>
              <Text white bold caption>
                LOCATION
              </Text>
              <Text white semibold>
                {user?.location}
              </Text>
            </Block>
          </Block>
          <Block row center marginBottom={38}>
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
              <Icon name="clock" white />
            </Block>
            <Block>
              <Text white bold caption>
                LOCAL TIME
              </Text>
              <Text white semibold>
                {dayjs(user?.time).format("HH:mm A")}
              </Text>
            </Block>
          </Block>

          <Block row center marginBottom={38}>
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
              <Icon name="message" white />
            </Block>
            <Block>
              <Text white bold caption>
                EMAIL
              </Text>
              <Text white semibold>
                {user?.email}
              </Text>
            </Block>
          </Block>
          <Block row center marginBottom={38}>
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
              <Icon name="cellphone" white />
            </Block>
            <Block>
              <Text white bold caption>
                PHONE
              </Text>
              <Text white semibold>
                {user?.phone}
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>

      <Activities user={user} />
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 12,
    height: 58,
    width: 58
  }
});
