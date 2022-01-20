import React from "react";
import { Block } from "expo-ui-kit";

import theme from "../constants/theme";

export default ({
  children,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  style,
  row,
  flex,
  overflow,
  ...props
}) => {
  const rowFlex = row && { row, flex: 0 };
  const blockStyles = [
    style,
    width && { width },
    height && { height },
    minWidth && { minWidth },
    minHeight && { minHeight },
    maxWidth && { maxWidth },
    maxHeight && { maxHeight },
    overflow && { overflow }
  ];

  return (
    <Block
      {...props}
      flex={flex}
      {...rowFlex}
      theme={theme}
      style={blockStyles}
    >
      {children}
    </Block>
  );
};
