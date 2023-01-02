import { render } from "@testing-library/react-native";

import { AppProvider } from "@providers/app-provider";
import { DefaultText, TEST_ID } from "../default-text.component";

const TEXT = "I LOVE YOU";

describe("default text", () => {
  test("render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <DefaultText>{TEXT}</DefaultText>
      </AppProvider>
    );

    const element = findByTestId(TEST_ID);

    expect(element).toBeTruthy();
  });

  test("render component with props type", () => {
    const { findByTestId } = render(
      <AppProvider>
        <DefaultText type="h1">{TEXT}</DefaultText>
      </AppProvider>
    );

    const element = findByTestId(TEST_ID);

    expect(element).toBeTruthy();
  });
});
