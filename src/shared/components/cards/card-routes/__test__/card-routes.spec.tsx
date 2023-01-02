import { render } from "@testing-library/react-native";

import { AppProvider } from "@providers/app-provider";
import { CardRoutes, CONTAINER_ID, CONTENT_ID } from "../card-routes.screen";

describe("button primary", () => {
  test("render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <CardRoutes />
      </AppProvider>
    );

    const element = findByTestId(CONTAINER_ID);

    expect(element).toBeTruthy();
  });

  test("render content component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <CardRoutes />
      </AppProvider>
    );

    const element = findByTestId(CONTENT_ID);

    expect(element).toBeTruthy();
  });
});
