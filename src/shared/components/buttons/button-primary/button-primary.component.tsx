import React from "react";

import { Container, TextButton } from "./button-primary.styles";

export const BUTTON_PRIMARY_ID = "button-primary";

const ButtonPrimary: React.FC = () => {
  return (
    <Container testID={BUTTON_PRIMARY_ID}>
      <TextButton>Cancel Request</TextButton>
    </Container>
  );
};

export { ButtonPrimary };
