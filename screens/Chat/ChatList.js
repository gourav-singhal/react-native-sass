import React, { useState } from "react";
import { TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Block, Card, Text } from "../../components";

const TABS = {
  started: "STARTED",
  channels: "CHANNELS",
  direct: "DIRECT MESSAGES"
};

const CHANNELS = [
  {
    id: "announcements",
    title: "# Announcements",
    new: 1
  },
  {
    id: "sales",
    title: "# Sales",
    new: 0
  },
  {
    id: "marketing",
    title: "# Marketing",
    new: 3
  },
  {
    id: "analytics",
    title: "# Analytics",
    new: 0
  },
  {
    id: "accounting",
    title: "# Accounting",
    new: 2
  },
  {
    id: "design",
    title: "# Design",
    new: 2
  },
  {
    id: "development",
    title: "# Development",
    new: 5
  }
];

const ChatEntry = ({ item }) => {
  const hasNewMessages = Boolean(item.new);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Messages", { group: item })}
    >
      <Card row center padding={18} marginBottom={18} space="between">
        <Text
          gray={!hasNewMessages}
          medium={!hasNewMessages}
          bold={hasNewMessages}
        >
          {item.title}
        </Text>
        {hasNewMessages && (
          <Block
            center
            middle
            error
            radius={6}
            height={18}
            width={18}
            maxWidth={18}
          >
            <Text bold size={8} white>
              {item.new}
            </Text>
          </Block>
        )}
      </Card>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  const [tab, setTab] = useState("channels");
  return (
    <ScrollView
      horizontal
      style={{ height: 38, marginBottom: 38 }}
      showsHorizontalScrollIndicator={false}
    >
      {Object.entries(TABS).map(([key, value]) => {
        const isSelected = key === tab;
        const isFirst = key === "started";

        return (
          <TouchableOpacity key={`tab-${key}`} onPress={() => setTab(key)}>
            <Block noflex center marginRight={28} marginLeft={isFirst ? 28 : 0}>
              <Text title bold gray={!isSelected}>
                {value}
              </Text>
              {isSelected && (
                <Block black radius={5} width={5} marginTop={6} minHeight={5} />
              )}
            </Block>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const ChatList = ({ channels = CHANNELS }) => {
  return (
    <Block marginTop={18}>
      <Tabs />
      <FlatList
        data={channels}
        ListEmptyComponent={
          <Card padding={18}>
            <Text title bold>
              Sorry no messages
            </Text>
          </Card>
        }
        keyExtractor={item => item.id}
        style={{ marginHorizontal: 28 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ChatEntry item={item} />}
      />
    </Block>
  );
};

export default ChatList;
