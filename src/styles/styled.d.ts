import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brands: {
        baseColor: string;
      };
      neutrals: {
        darkColor: string;
        lightColor: string;
        baseColor: string;
      };
      feedback: {
        successColor: string;
        warningColor: string;
        alertColor: string;
      };
    };
    paddings: {
      layoutPadding: string;
    };
  }
}
