import React from "react";
import { TextProps } from "react-native";

import { Text, TEXT_TYPES } from "./default-text.styles";

type DefaultTextProps = TextProps & {
  type?: TEXT_TYPES;
};

export const TEST_ID = "default-text";

const DefaultText: React.FC<DefaultTextProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { DefaultText };
