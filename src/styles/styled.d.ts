import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brands: {
        base: string;
      };
      neutrals: {
        dark: string;
        light: string;
        base: string;
      };
      feedback: {
        success: string;
        warning: string;
        alert: string;
      };
    };
    paddings: {
      layoutPadding: string;
    };
  }
}
