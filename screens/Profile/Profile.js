import React, { useState } from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import { Utils } from "expo-ui-kit";
import dayjs from "dayjs";

import { Activity } from "../Activity/Activities";

import { Block, Text, Icon, Modal } from "../../components";
import { mock, SIZES, COLORS } from "../../constants/";

const Activities = ({ user }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      coverScreen={false}
      propagateSwipe
      onSwipeComplete={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      headerStyle={{ backgroundColor: COLORS.lightGray }}
    >
      <Block
        paddingHorizontal={28}
        color={COLORS.lightGray}
        style={{ maxHeight: 180 }}
      >
        <Text bold marginBottom={28}>
          My Recent Activities
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

const MyProfile = ({ navigation, route, user = mock.USER }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <Block noflex>
            <Image
              source={user.avatar}
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

  return (
    <Block primary paddingTop={64}>
      <Block center noflex>
        <Text h1 bold white marginBottom={8} marginTop={18}>
          {user.name}
        </Text>
        <Text medium white>
          {user.position}
        </Text>
        <Block
          white
          noflex
          marginVertical={28}
          width={SIZES.width / 1.315}
          height={StyleSheet.hairlineWidth}
        />
      </Block>
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
              {user.location}
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
              {dayjs(user.time).format("HH:mm A")}
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
              {user.email}
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
              {user.phone}
            </Text>
          </Block>
        </Block>
      </Block>
      <Activities user={user} />
    </Block>
  );
};

export default MyProfile;
