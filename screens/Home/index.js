import React from "react";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Block, Text, Icon, Modal } from "../../components";
import { mock, COLORS, SIZES } from "../../constants";

import Dashboard from "./Dashboard";
import Realtime from "./Realtime";
import Audience from "./Audience";
import Traffic from "./Traffic";

const MENUS = {
  dashboard: "Dashboard",
  realtime: "Realtime",
  audience: "Audience",
  traffic: "Traffic Source"
};

const MenuSections = ({ type }) => {
  switch (type) {
    case "dashboard":
      return <Dashboard items={mock.HIGHLIGHTS} />;
    case "realtime":
      return <Realtime />;
    case "audience":
      return <Audience items={mock.AUDIENCE} />;
    case "traffic":
      return <Traffic />;
    default:
      return null;
  }
};

export default () => {
  const [menu, setMenu] = React.useState("dashboard");
  const [visible, setVisible] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block paddingVertical={28}>
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
    </ScrollView>
  );
};
