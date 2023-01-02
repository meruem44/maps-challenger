import styled from "styled-components/native";
import { RFValue } from "../../../../../libs/font-sizes";
import { DefaultText } from "../../../../texts/default-text/default-text.component";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: ${RFValue(1)}px;
  padding: ${RFValue(20)}px ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Content = styled.View`
  margin-left: ${RFValue(14)}px;
  flex: 1;
`;

export const TextAddress = styled(DefaultText)``;

export const BorderWrapper = styled.View`
  justify-content: center;
  height: ${RFValue(40)}px;
`;

export const Border = styled.View`
  width: 100%;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const ContentIcons = styled.View`
  align-items: center;
`;
