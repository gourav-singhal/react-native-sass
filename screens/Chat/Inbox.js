import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Utils } from "expo-ui-kit";
import {
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert
} from "react-native";

import { Block, Card, Text, Icon, Modal } from "../../components";
import { COLORS } from "../../constants";

const MESSAGES = [
  {
    id: 1,
    user: {
      name: "Billy Green",
      email: "billy.green@ui8.net",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    files: [{ type: "powerpoint", name: "5 Tips" }],
    isRead: false,
    date: dayjs(),
    subject: "5 Tips For Offshore Software Development",
    message:
      "Today, many people rely on computers to do homework, work, and create or store useful information. Therefore, it's a good deal..."
  },
  {
    id: 2,
    user: {
      name: "Isabelle Luna",
      email: "isabelle.luna@ui8.net",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    files: [
      { type: "excel", name: "Analytics_report" },
      { type: "powerpoint", name: "Presentation" },
      { type: "word", name: "Draft" }
    ],
    isRead: true,
    date: dayjs().subtract(1, "d"),
    subject: "Help Finding Information Online",
    message:
      "They often claim that they do this to find leaks in the security of a network. The term cracker has never been associated with something positive this refers to someone how intentionally access."
  },
  {
    id: 3,
    user: {
      name: "Cammy Hedling",
      email: "cammy.hedling@ui8.net",
      avatar:
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    files: null,
    isRead: true,
    date: dayjs().subtract(2, "d"),
    subject: "How To Excel In A Technical Job Interview",
    message:
      "A cybercrime is known as illegal acts based on the internet and is one of the FBI’s top priorities. There are several distinct categories for people."
  },
  {
    id: 4,
    user: {
      name: "Gunther Ackner",
      email: "gunther.ackner@ui8.net",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    files: [
      { type: "excel", name: "Tehnical_report" },
      { type: "powerpoint", name: "Presentation" }
    ],
    isRead: true,
    date: dayjs().subtract(3, "d"),
    subject: "Dealing With Technical Support 10 Useful Tips",
    message:
      "They would usually send a company a very threatening email stating that they will release some confidential information, exploit a security leak, or launch."
  }
];

const Message = ({ item, onPress }) => {
  // mock date/time
  const dayTime = dayjs(item.date);
  const time = dayTime.format("HH:mmA");

  const isUnread = !item.isRead;
  const isOld = dayjs().diff(dayTime, "day", true) > 2;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onPress()}>
      <Card
        padding={18}
        space="between"
        marginBottom={18}
        color={isUnread && COLORS.primary}
        style={isOld && { borderWidth: 2, borderColor: COLORS.success }}
      >
        <Block row center space="between" marginBottom={18}>
          <Block row center>
            <Image
              source={{ uri: item.user.avatar }}
              style={{ height: 38, width: 38, borderRadius: 12 }}
            />
            <Text gray={!isUnread} white={isUnread} medium marginLeft>
              {item.user.name}
            </Text>
          </Block>
          <Block row center>
            {item?.files && (
              <Icon
                name="attachments"
                resizeMode="contain"
                color={isUnread ? COLORS.white : COLORS.gray}
              />
            )}
            <Text gray={!isUnread} white={isUnread} small marginLeft>
              {time}
            </Text>
          </Block>
        </Block>
        <Text title bold white={isUnread} marginBottom={8}>
          {item.subject}
        </Text>
        <Text
          small
          gray={!isUnread}
          white={isUnread}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {item.message}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const Inbox = ({ messages = MESSAGES }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    StatusBar.setBarStyle(`${visible ? "light" : "dark"}-content`);
  }, [visible]);

  return (
    <Block>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        ListEmptyComponent={
          <Card padding={18}>
            <Text title bold>
              0 messages
            </Text>
          </Card>
        }
        style={{
          flex: 1,
          marginTop: 28,
          marginHorizontal: 28
        }}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Message
            item={item}
            onPress={() => {
              setVisible(true);
              setMessage(item);
            }}
          />
        )}
      />
      <Modal
        isVisible={visible}
        backdropOpacity={1}
        propagateSwipe
        style={{ minHeight: "80%" }}
        backdropColor={COLORS.primary}
        onSwipeComplete={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
      >
        <Block safe row white height="80%">
          {message && (
            <Block white paddingHorizontal={28}>
              <Block row space="between">
                <Text bold gray>
                  {message.date.format("HH:mm A")}
                </Text>
                <Block row>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Icon
                      name="share"
                      color={COLORS.gray}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        "Delete message",
                        "Are you sure to delete this message?",
                        [
                          {
                            text: "Cancel",
                            style: "cancel"
                          },
                          {
                            text: "Yes",
                            style: "destructive",
                            onPress: () => setVisible(false)
                          }
                        ],
                        { cancelable: false }
                      );
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Icon name="bin" color={COLORS.gray} resizeMode="contain" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Icon
                      name="options"
                      color={COLORS.gray}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </Block>
              </Block>
              <Block
                maxHeight={1}
                marginVertical={18}
                color={Utils.rgba(COLORS.gray, 0.2)}
              />
              <Block row center marginBottom={28}>
                <Image
                  source={{ uri: message.user.avatar }}
                  style={{ height: 28, width: 28, borderRadius: 8 }}
                />
                <Block marginLeft>
                  <Text medium>{message.user.name}</Text>
                  <Text medium gray>
                    {message.user.email}
                  </Text>
                </Block>
              </Block>
              <Text h3 bold marginBottom={28}>
                {message.subject}
              </Text>
              <Block row wrap>
                {message?.files?.map(file => (
                  <Block
                    key={`file-${file.name}.${file.type}`}
                    row
                    center
                    marginRight={28}
                    marginBottom={18}
                  >
                    <Icon
                      size={28}
                      color="none"
                      name={file?.type}
                      resizeMode="contain"
                    />
                    <Text gray marginLeft>
                      {file?.name}
                    </Text>
                  </Block>
                ))}
              </Block>
              <Text body gray height={22}>
                {message.message}
              </Text>
            </Block>
          )}
        </Block>
      </Modal>
    </Block>
  );
};

export default Inbox;
