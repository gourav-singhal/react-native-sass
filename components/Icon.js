import React from "react";
import { Image, StyleSheet } from "react-native";
import { icons, COLORS } from "../constants/";

export default ({
  name,
  size,
  height,
  width,
  color = COLORS.white,
  resizeMode = "contain",
  style,
  ...props
}) => {
  const iconStyles = [
    styles.icon,
    size && {
      width: size,
      height: size
    },
    width && { width },
    height && { height },
    color !== "none" && { tintColor: color },
    style
  ];
  return (
    <Image
      source={icons[name]}
      resizeMode={resizeMode}
      style={iconStyles}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18
  }
});
