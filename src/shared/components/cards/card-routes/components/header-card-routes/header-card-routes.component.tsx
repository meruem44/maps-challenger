import React from "react";
import { RFValue } from "@libs/font-sizes";

import { StarsSvg, CallSvg, MessageSvg } from "@assets/svgs";

import { DefaultText } from "@texts/default-text/default-text.component";

import {
  Container,
  Avatar,
  ContainerAvatar,
  ContainerButtons,
  ContentInfo,
  ContentStars,
  Content,
  TextStars,
} from "./header-card-routes.styles";

export const AVATAR_ID = "avatar-id";
export const STARS_SVG_ID = "svg-stars";
export const TEXT_STARS_ID = "test-stars-id";
export const MESSAGE_SVG_ID = "svg-message";
export const PHONE_SVG_ID = "svg-phone";
export const CONTAINER_ID = "container-id";

const HeaderCardRoutes: React.FC = () => {
  return (
    <Container testID={CONTAINER_ID}>
      <Content>
        <ContainerAvatar testID="container-avatar-id">
          <Avatar
            testID="avatar-id"
            source={{
              uri: "https://avatars.githubusercontent.com/u/48477073?v=4",
            }}
          />
        </ContainerAvatar>

        <ContentInfo>
          <DefaultText testID={AVATAR_ID} type="h1">
            Paulo Leandro
          </DefaultText>
          <ContentStars>
            <StarsSvg testID={STARS_SVG_ID} />
            <TextStars testID={TEXT_STARS_ID} type="d2">
              4.9
            </TextStars>
          </ContentStars>
        </ContentInfo>
      </Content>

      <ContainerButtons>
        <MessageSvg testID={MESSAGE_SVG_ID} />
        <CallSvg style={{ marginLeft: RFValue(22) }} testID={PHONE_SVG_ID} />
      </ContainerButtons>
    </Container>
  );
};

export { HeaderCardRoutes };
