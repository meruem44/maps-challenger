import styled from "styled-components/native";
import { RFValue } from "../../../../../libs/font-sizes";

export const Container = styled.View`
  padding: ${RFValue(19)}px ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(24)}px;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: ${RFValue(34)}px;
`;

export const ContainerValues = styled.View``;
