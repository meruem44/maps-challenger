import styled from "styled-components/native";
import MapView from "react-native-maps";
import { RFValue } from "../../shared/libs/font-sizes";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Maps = styled(MapView)`
  flex: 1;
  justify-content: flex-end;
  padding: 0px ${RFValue(16)}px;
  padding-bottom: ${RFValue(20)}px;
`;

export const ContainerCards = styled.View`
  width: 100%;
  position: absolute;
  z-index: 999;
  bottom: ${RFValue(20)}px;
  padding: 0px ${RFValue(16)}px;
`;
