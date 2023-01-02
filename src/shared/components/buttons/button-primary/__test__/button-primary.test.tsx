import { render } from "@testing-library/react-native";

import { AppProvider } from "../../../../providers/app-provider";
import { BUTTON_PRIMARY_ID, ButtonPrimary } from "../button-primary.component";

describe("button primary", () => {
  test("render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <ButtonPrimary />
      </AppProvider>
    );

    const element = findByTestId(BUTTON_PRIMARY_ID);

    expect(element).toBeTruthy();
  });
});
