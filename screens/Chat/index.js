import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Block, Text, Icon, Modal } from "../../components";
import { COLORS, SIZES } from "../../constants";
import ChatList from "./ChatList";
import Inbox from "./Inbox";

const MENUS = {
  chat: "Chat",
  inbox: "Inbox"
};

const MenuSections = ({ type }) => {
  switch (type) {
    case "inbox":
      return <Inbox />;
    default:
      return <ChatList />;
  }
};

const Chat = () => {
  const [menu, setMenu] = React.useState("chat");
  const [visible, setVisible] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Block>
      <Block paddingTop={28}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Block row center marginBottom={18} marginHorizontal={28}>
            <Text h2 bold marginRight>
              {MENUS[menu]}
            </Text>
            <Icon name="arrowsVertical" color="black" width={10} />
          </Block>
        </TouchableOpacity>
        <MenuSections type={menu} />
      </Block>
      <Modal
        isVisible={visible}
        propagateSwipe
        onSwipeComplete={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
      >
        {Object.entries(MENUS).map(([key, value]) => (
          <TouchableOpacity
            activeOpacity={1}
            key={`menu-${key}`}
            onPress={() => {
              setMenu(key);
              setVisible(false);
            }}
          >
            <Block safe row white>
              <Block
                row
                center
                padding={20}
                space="between"
                marginHorizontal={28}
                radius={SIZES.radius}
                width={SIZES.width - (20 + 28)}
                color={key === menu ? COLORS.lightGray : null}
              >
                <Text h2 bold gray={key !== menu}>
                  {value}
                </Text>
                {key === menu && (
                  <Icon
                    name="arrowsVertical"
                    color={COLORS.primary}
                    width={10}
                  />
                )}
              </Block>
            </Block>
          </TouchableOpacity>
        ))}
      </Modal>
    </Block>
  );
};

export default Chat;
