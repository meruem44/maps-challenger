import styled from "styled-components/native";
import { RFValue } from "@shared/libs/font-sizes";
import { DefaultText } from "@shared/components/texts/default-text/default-text.component";

export const Container = styled.View`
  padding: ${RFValue(9)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.COLORS.BG_CARD};
  height: ${RFValue(68)}px;
  border-top-left-radius: ${RFValue(8)}px;
  border-top-right-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAvatar = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(25)}px;
`;

export const Avatar = styled.Image`
  flex: 1;
  border-radius: ${RFValue(25)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentInfo = styled.View`
  margin-left: ${RFValue(14)}px;
`;

export const ContentStars = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(3)}px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextStars = styled(DefaultText)`
  margin-left: ${RFValue(5)}px;
`;
