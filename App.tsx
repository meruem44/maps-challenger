import React from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import {
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
} from "@expo-google-fonts/source-sans-pro";
import { MyAplication } from "./src";

// impedindo que a splash screen desapareca por padrao

SplashScreen.preventAutoHideAsync();

export default function App() {
  // Caregando as fontes do projetos
  const [isFontLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
  });

  if (isFontLoaded) {
    SplashScreen.hideAsync();
    return <MyAplication />;
  }
}
