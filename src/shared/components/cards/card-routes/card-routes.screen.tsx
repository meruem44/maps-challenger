import React from "react";

import { HeaderCardRoutes } from "./components/header-card-routes/header-card-routes.component";
import { ContentCardInfo } from "./components/content-card-info/content-card-info.component";
import { FooterCardInfo } from "./components/footer-card-info/footer-card-info.component";

import { Container, Content } from "./card-routes.styles";

export const CONTAINER_ID = "container-id";
export const CONTENT_ID = "content-id";

const CardRoutes: React.FC = () => {
  return (
    <Container testID={CONTAINER_ID}>
      <HeaderCardRoutes />
      <Content testID={CONTENT_ID}>
        <ContentCardInfo />
        <FooterCardInfo />
      </Content>
    </Container>
  );
};

export { CardRoutes };
