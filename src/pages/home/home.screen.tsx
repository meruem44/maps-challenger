import React from "react";

import { CardRoutes } from "../../shared/components/cards/card-routes/card-routes.screen";
import { Maps } from "./components/maps/maps.components";

import { Container, SafeArea, ContainerCards } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Maps />
        <ContainerCards>
          <CardRoutes />
        </ContainerCards>
      </Container>
    </SafeArea>
  );
};

export { Home };
