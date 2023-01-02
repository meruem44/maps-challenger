import React from "react";

import { CardRoutes } from "../../shared/components/cards/card-routes/card-routes.screen";

import { Container, Maps, SafeArea, ContainerCards } from "./home.styles";

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
