import { render, RenderOptions } from "@testing-library/react";
import { WrapperWithProvidersProps } from "./types";
import WrapperWithProviders from "./wrappers/WrapperWithProviders";

const customRender = (
  ui: React.ReactElement,
  wrapperOptions?: WrapperWithProvidersProps,
  renderOptions?: RenderOptions
) => {
  return {
    ...render(ui, {
      wrapper: (props) => (
        <WrapperWithProviders {...props} {...wrapperOptions} />
      ),
      ...renderOptions,
    }),
  };
};

export default customRender;
