import { render } from "@testing-library/react-native";
import { AppProvider } from "@providers/app-provider";

import {
  HeaderCardRoutes,
  AVATAR_ID,
  CONTAINER_ID,
  MESSAGE_SVG_ID,
  PHONE_SVG_ID,
  STARS_SVG_ID,
  TEXT_STARS_ID,
} from "../header-card-routes.component";

describe("header card", () => {
  test("render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <HeaderCardRoutes />
      </AppProvider>
    );

    const element = findByTestId(CONTAINER_ID);

    expect(element).toBeTruthy();
  });

  test("render avatar user", () => {
    const { findByTestId } = render(
      <AppProvider>
        <HeaderCardRoutes />
      </AppProvider>
    );

    const element = findByTestId(AVATAR_ID);

    expect(element).toBeTruthy();
  });

  test("render stars info", () => {
    const { findByTestId } = render(
      <AppProvider>
        <HeaderCardRoutes />
      </AppProvider>
    );

    const svgStars = findByTestId(STARS_SVG_ID);
    const starsText = findByTestId(TEXT_STARS_ID);

    expect(svgStars).toBeTruthy();
    expect(starsText).toBeTruthy();
  });

  test("render svgs call and message", () => {
    const { findByTestId } = render(
      <AppProvider>
        <HeaderCardRoutes />
      </AppProvider>
    );

    const svgMessage = findByTestId(MESSAGE_SVG_ID);
    const svgPhone = findByTestId(PHONE_SVG_ID);

    expect(svgMessage).toBeTruthy();
    expect(svgPhone).toBeTruthy();
  });
});
