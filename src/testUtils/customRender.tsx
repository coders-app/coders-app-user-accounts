import { render, RenderOptions } from "@testing-library/react";
import WrapperWithProviders from "./wrappers/WrapperWithProviders";

const customRender = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  return {
    ...render(ui, {
      wrapper: (props) => <WrapperWithProviders {...props} />,
      ...renderOptions,
    }),
  };
};

export default customRender;
