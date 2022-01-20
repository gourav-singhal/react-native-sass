import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "expo-ui-kit";

import theme from "../constants/theme";

export default ({ children, icon, ...props }) => {
  const content = icon || children;
  const btnStyle = StyleSheet.flatten([
    styles.button,
    icon && styles.icon,
    props.style
  ]);

  return (
    <Button {...props} theme={theme} style={btnStyle}>
      {content}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.SIZES.radius,
    height: theme.SIZES.base * 7.25
  },
  icon: {
    alignItems: "center",
    height: theme.SIZES.base * 4.75,
    justifyContent: "center",
    width: theme.SIZES.base * 4.75
  }
});
