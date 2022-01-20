import React from "react";

import { COLORS } from "../constants/";
import { Button, Icon } from "../components/";

export default props => {
  return (
    <Button
      success
      style={{ marginHorizontal: 28 }}
      icon={<Icon name="plus" size={16} color={COLORS.white} />}
      {...props}
    />
  );
};
