import React from "react";

import MapView from "react-native-maps";

import { Container } from "./home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <MapView style={{ flex: 1 }} />
    </Container>
  );
};

export { Home };
