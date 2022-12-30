import "styled-components";
import { Metrics } from "./metrics/metrics";

declare module "styled-components" {
  type ThemeType = {
    COLORS: THEME;
    METRICS: Metrics;
    FONTS: Fonts;
  };

  export interface DefaultTheme extends ThemeType {}
}
