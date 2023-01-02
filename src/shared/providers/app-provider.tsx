import React from "react";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "../styles";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export { AppProvider };
