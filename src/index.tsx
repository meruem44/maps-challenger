import React from "react";

import { AppProvider } from "./shared/providers/app-provider";

import { Home } from "./pages/home/home.screen";

const MyAplication: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export { MyAplication };
