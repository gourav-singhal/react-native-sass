import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Block, Card, Dropdown, Text, Icon } from "../../components";
import { mock, COLORS } from "../../constants";

const FileManager = ({ navigation, folders = mock.LIBRARY }) => {
  return (
    <Block marginHorizontal={28}>
      <Block row center space="between" marginBottom={28}>
        <Text h3 gray bold>
          Main Library
        </Text>
        <Dropdown label="Name" />
      </Block>
      <FlatList
        data={folders}
        ListEmptyComponent={
          <Card padding={18}>
            <Text title bold>
              No folders on Library
            </Text>
          </Card>
        }
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card padding={18} marginBottom={18}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("FileFolder", { folder: item })
              }
            >
              <Block row center space="between">
                <Block row center>
                  <Icon
                    size={28}
                    color={COLORS.secondary}
                    name={`${item.shared ? "sharedFolder" : "folder"}`}
                  />
                  <Text medium marginLeft>
                    {item.name}
                  </Text>
                </Block>
                <TouchableOpacity>
                  <Icon name="options" size={18} color={COLORS.gray} />
                </TouchableOpacity>
              </Block>
            </TouchableOpacity>
          </Card>
        )}
      />
    </Block>
  );
};

export default FileManager;
