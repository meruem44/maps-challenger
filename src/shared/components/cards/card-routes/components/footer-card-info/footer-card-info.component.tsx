import React from "react";

import { CarImageSvg } from "@assets/svgs";

import { ButtonPrimary } from "@buttons/button-primary/button-primary.component";
import { DefaultText } from "@texts/default-text/default-text.component";

import {
  Container,
  Content,
  ContentInfo,
  ContainerValues,
} from "./footer-card-info.styles";

const FooterCardInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <CarImageSvg />
        <ContentInfo>
          <ContainerValues>
            <DefaultText type="d1">Distance</DefaultText>
            <DefaultText type="h1">0.2 km</DefaultText>
          </ContainerValues>

          <ContainerValues>
            <DefaultText type="d1">Time</DefaultText>
            <DefaultText type="h1">2 min</DefaultText>
          </ContainerValues>

          <ContainerValues>
            <DefaultText type="d1">Price</DefaultText>
            <DefaultText type="h1">$25.00</DefaultText>
          </ContainerValues>
        </ContentInfo>
      </Content>
      <ButtonPrimary />
    </Container>
  );
};

export { FooterCardInfo };
