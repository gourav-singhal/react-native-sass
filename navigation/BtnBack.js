import React from "react";

import { COLORS } from "../constants/";
import { Button, Icon } from "../components/";

export default ({ white = false, ...props }) => {
  return (
    <Button
      white={white}
      primary={!white}
      style={{ marginHorizontal: 28 }}
      icon={
        <Icon
          size={16}
          name="arrowLight"
          color={COLORS[white ? "primary" : "white"]}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      }
      {...props}
    />
  );
};
