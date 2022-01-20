import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Block, Text, Icon, Modal } from "../../components";
import { COLORS, SIZES } from "../../constants";

import Calendar from "./Calendar";
import Appointments from "./Appointments";

const MENUS = {
  calendar: "Calendar",
  appointments: "Appointments"
};

const MenuSections = ({ type }) => {
  switch (type) {
    case "appointments":
      return <Appointments />;
    default:
      return <Calendar />;
  }
};

export default () => {
  const [menu, setMenu] = React.useState("calendar");
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
                width="100%"
                space="between"
                marginHorizontal={28}
                radius={SIZES.radius}
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
