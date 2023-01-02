import { render } from "@testing-library/react-native";
import { AppProvider } from "../../../../../../providers/app-provider";

import {
  ContentCardInfo,
  CONTAINER_ID,
  ICONS_ADDRESS_ID,
  TEXTS_ADDRESS_ID,
} from "../content-card-info.component";

describe("header card", () => {
  test("render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <ContentCardInfo />
      </AppProvider>
    );

    const element = findByTestId(CONTAINER_ID);

    expect(element).toBeTruthy();
  });

  test("render icons address", () => {
    const { findByTestId } = render(
      <AppProvider>
        <ContentCardInfo />
      </AppProvider>
    );

    const element = findByTestId(ICONS_ADDRESS_ID);

    expect(element).toBeTruthy();
  });

  test("render texts address", () => {
    const { findByTestId } = render(
      <AppProvider>
        <ContentCardInfo />
      </AppProvider>
    );

    const element = findByTestId(TEXTS_ADDRESS_ID);

    expect(element).toBeTruthy();
  });
});
