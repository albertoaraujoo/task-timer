import "styled-components";
import { defaultTheme } from "../styles/themes/dafault";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultThme extends ThemeType {}
}
