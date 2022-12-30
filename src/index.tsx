import React from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "./shared/styles";

import { Home } from "./pages/home/home.screen";

const MyAplication: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
};

export { MyAplication };
