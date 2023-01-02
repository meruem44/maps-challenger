import styled from "styled-components/native";
import { RFValue } from "@libs/font-sizes";

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  height: ${RFValue(266)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-bottom-left-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
`;
