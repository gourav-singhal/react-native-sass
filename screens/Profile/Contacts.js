import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Block, Button, Text, Icon, Modal } from "../../components";
import { mock, COLORS } from "../../constants";

const Contact = ({ user }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("User", { user })}>
      <Block
        row
        white
        noflex
        radius={12}
        padding={18}
        marginBottom
        space="between"
      >
        <Block noflex marginRight>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
        </Block>
        <Block space="between">
          <Text body semibold>
            {user.name}
          </Text>
          <Text small gray>
            {user.position}
          </Text>
        </Block>
        <Block noflex>
          <Button success style={styles.button}>
            <Icon name="message" center size={12} />
          </Button>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const Online = ({ users }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      propagateSwipe
      thumbColor={COLORS.white}
      headerStyle={{ backgroundColor: COLORS.primary }}
      onSwipeComplete={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
    >
      <Block primary paddingHorizontal={28} style={{ maxHeight: 254 }}>
        <Text white bold marginBottom={28}>
          Online Now
        </Text>
        <FlatList
          data={users}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Block row center space="between" marginBottom={18}>
              <Block row center>
                <Block noflex marginRight>
                  <Image style={styles.avatar} source={{ uri: item.avatar }} />
                </Block>
                <Text white semibold>
                  {item.name}
                </Text>
              </Block>
              <Block success radius={8} height={8} maxWidth={8} />
            </Block>
          )}
        />
      </Block>
    </Modal>
  );
};

export default ({ items = mock.CONTACTS }) => {
  StatusBar.setBarStyle("dark-content");
  return (
    <Block paddingHorizontal={28}>
      <Text h1 bold marginVertical={28}>
        Contacts
      </Text>

      <FlatList
        data={items}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Contact user={item} />}
      />

      <Online users={items.filter(item => item.online)} />
    </Block>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    height: 38,
    width: 38
  },
  button: {
    alignItems: "center",
    borderRadius: 8,
    height: 28,
    width: 28
  }
});
