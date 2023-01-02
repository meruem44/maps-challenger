import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/font-sizes";

export type TEXT_TYPES = "h1" | "h2" | "d1" | "d2";

type TextProps = {
  type?: TEXT_TYPES;
};

export const Text = styled.Text<TextProps>`
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  ${({ type }) =>
    type === "h1" &&
    css`
      font-size: ${RFValue(17)}px;
      line-height: ${RFValue(21)}px;
      font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
    `}

  ${({ type }) =>
    type === "h2" &&
    css`
      font-size: ${RFValue(17)}px;
      line-height: ${RFValue(21)}px;
      font-family: ${({ theme }) => theme.FONTS.REGULAR};
    `}

    ${({ type }) =>
    type === "d1" &&
    css`
      font-size: ${RFValue(13)}px;
      line-height: ${RFValue(16)}px;
      font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
    `}

    ${({ type }) =>
    type === "d2" &&
    css`
      font-size: ${RFValue(15)}px;
      line-height: ${RFValue(18)}px;
      font-family: ${({ theme }) => theme.FONTS.REGULAR};
    `}
`;
