import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";

import { Block, Text, Icon, Modal } from "../../components";
import { COLORS, SIZES } from "../../constants";

import Activities from "./Activities";
import Boards from "./Boards";
import FileManager from "./FileManager";

const MENUS = {
  Activities: "Activity",
  Boards: "Boards",
  FileManager: "File Manager"
};

const Stack = createStackNavigator();

const Activity = ({ navigation }) => {
  const [menu, setMenu] = React.useState("Activities");
  const [visible, setVisible] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Block>
      <Block noflex paddingTop={28}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Block row center marginBottom={18} marginHorizontal={28}>
            <Text h2 bold marginRight>
              {MENUS[menu]}
            </Text>
            <Icon name="arrowsVertical" color="black" width={10} />
          </Block>
        </TouchableOpacity>
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
              navigation.navigate(key);
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

      <Stack.Navigator initialRouteName="Activities" headerMode="none">
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Boards" component={Boards} />
        <Stack.Screen name="FileManager" component={FileManager} />
      </Stack.Navigator>
    </Block>
  );
};

export default Activity;
