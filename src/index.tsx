import React from "react";
import { LogBox } from "react-native";

import { AppProvider } from "./shared/providers/app-provider";

import { Home } from "./pages/home/home.screen";

LogBox.ignoreAllLogs();

const MyAplication: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export { MyAplication };
