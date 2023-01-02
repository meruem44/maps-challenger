import styled from "styled-components/native";
import { RFValue } from "../../../libs/font-sizes";

export const Container = styled.View`
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(8)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;
