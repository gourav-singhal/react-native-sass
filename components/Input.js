import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input, Block } from "expo-ui-kit";

import Icon from "./Icon";
import { theme, COLORS } from "../constants";

const TogglePassword = ({ value, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{ position: "absolute", right: 15, top: 15 }}
    >
      <Icon name="eye" size={18} color={value ? COLORS.gray : COLORS.error} />
    </TouchableOpacity>
  );
};

const Valid = () => {
  return (
    <Icon
      size={18}
      name="checkCircle"
      color={COLORS.success}
      style={{ position: "absolute", right: 15, top: 15 }}
    />
  );
};

export default ({ flex = 1, children, style, ...props }) => {
  const [showPassword, setShowPassword] = useState(
    Boolean(props.secureTextEntry)
  );
  const hasSpecialProps = Object.keys(props)
    .map(p => ["secureTextEntry", "validation"].indexOf(p) > -1)
    .filter(Boolean);

  const inputStyles = [
    { height: 48 },
    hasSpecialProps && { paddingRight: 30 },
    style
  ];

  return (
    <Block flex={flex}>
      <Input
        theme={theme}
        {...props}
        style={inputStyles}
        secureTextEntry={showPassword}
      >
        {children}
      </Input>
      {props.secureTextEntry && (
        <TogglePassword
          value={showPassword}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
      {props.validation && <Valid />}
    </Block>
  );
};
