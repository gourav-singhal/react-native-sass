import React, { useState } from "react";
import dayjs from "dayjs";
import { Utils } from "expo-ui-kit";
import {
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  InputAccessoryView
} from "react-native";

import { Button, Block, Card, Text, Input, Icon } from "../../components";
import { mock, COLORS } from "../../constants/";
import { useKeyboard } from "../../utils/hooks";

const Message = ({ item }) => {
  return (
    <Block marginBottom={28}>
      <Block row>
        <Block noflex center marginRight>
          <Image
            source={{ uri: item?.user.avatar }}
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              backgroundColor: COLORS.primary
            }}
          />
        </Block>
        <Block row center>
          <Text title bold marginRight>
            {item?.user.name}
          </Text>
          <Text small gray>
            {dayjs().diff(item?.timestamp, "minute")}min
          </Text>
        </Block>
      </Block>
      <Block marginLeft={26} marginTop>
        {item?.type === "text" && (
          <Text title gray>
            {item?.message}
          </Text>
        )}
        {item?.type === "file" && (
          <Card row center space="between">
            <Block row center>
              <Icon name={item?.message.type} color="none" size={28} />
              <Text title gray>
                {item?.message.file}
              </Text>
            </Block>
            <Block row center>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon
                  size={12}
                  margin={8}
                  name="download"
                  color={COLORS.gray}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="share" color={COLORS.gray} size={12} margin={8} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name="options" color={COLORS.gray} size={12} margin={8} />
              </TouchableOpacity>
            </Block>
          </Card>
        )}
        {item?.type === "image" && (
          <Block row>
            {item?.message?.map((img, index) => (
              <Image
                key={`img-${index}`}
                source={{ uri: img }}
                style={styles.image}
              />
            ))}
          </Block>
        )}
      </Block>
    </Block>
  );
};

const MessageInput = ({ value, ...props }) => (
  <Block primary padding={28} marginTop={-28} style={styles.inputContainer}>
    <Block row center white padding={10} radius={12} height={58}>
      <Button style={styles.inputButton} onPress={() => {}}>
        <Icon margin={12} name="plus" />
      </Button>
      <Input
        value={value}
        style={styles.input}
        marginHorizontal={15}
        placeholder="Enter your message..."
        placeholderTextColor={COLORS.gray}
        {...props}
      />
      <Button transparent style={styles.inputButton} onPress={() => {}}>
        <Icon name="emoji" color={COLORS.gray} />
      </Button>
    </Block>
  </Block>
);

const Messages = ({ route, navigation, list = mock.MESSAGES }) => {
  const { group } = route.params;
  const [keyboardHeight] = useKeyboard();
  const [message, setMessage] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: group.title,
      headerLeft: ({ onPress }) => {
        return (
          <Button
            primary
            onPress={event => onPress(event)}
            style={{ marginHorizontal: 28 }}
            icon={
              <Icon
                size={16}
                name="arrowLight"
                color={COLORS.white}
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            }
          />
        );
      }
    });
  }, [navigation, route]);

  return (
    <Block>
      <Block paddingHorizontal={28} marginBottom={keyboardHeight}>
        <FlatList
          data={list}
          snapToEnd
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item?.id}`}
          contentContainerStyle={{ paddingTop: 38 }}
          renderItem={({ item }) => <Message item={item} />}
        />
      </Block>

      <InputAccessoryView backgroundColor={COLORS.primary}>
        <MessageInput value={message} onChangeText={text => setMessage(text)} />
      </InputAccessoryView>
    </Block>
  );
};

export default Messages;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Utils.rgba(COLORS.gray, 0.2),
    borderRadius: 8,
    marginLeft: 10
  },
  image: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    height: 68,
    marginRight: 8,
    width: 68
  },
  input: {
    borderWidth: 0,
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: "600"
  },
  inputButton: {
    alignItems: "center",
    height: 38,
    justifyContent: "center",
    width: 38
  },
  inputContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  }
});
