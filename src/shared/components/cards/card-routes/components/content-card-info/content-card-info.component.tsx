import React from "react";

import { SmallMarkerSvg, LineSvg } from "@assets/svgs";
import { RFValue } from "@libs/font-sizes";

import {
  Container,
  Content,
  TextAddress,
  ContentIcons,
  BorderWrapper,
  Border,
} from "./content-card-info.styles";

export const CONTAINER_ID = "container-content-card-info";
export const ICONS_ADDRESS_ID = "icons_routes";
export const TEXTS_ADDRESS_ID = "text-address";

const ContentCardInfo: React.FC = () => {
  return (
    <Container testID={CONTAINER_ID}>
      <ContentIcons testID={ICONS_ADDRESS_ID}>
        <SmallMarkerSvg height={RFValue(24)} width={RFValue(18)} />
        <LineSvg height={RFValue(32)} />
        <SmallMarkerSvg height={RFValue(24)} width={RFValue(18)} />
      </ContentIcons>

      <Content testID={TEXTS_ADDRESS_ID}>
        <TextAddress type="h2">7958 Swift Village</TextAddress>
        <BorderWrapper>
          <Border />
        </BorderWrapper>
        <TextAddress type="h2">105 William St, Chicago, US</TextAddress>
      </Content>
    </Container>
  );
};

export { ContentCardInfo };
