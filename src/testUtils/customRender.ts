import { render, RenderOptions } from "@testing-library/react";
import WrapperWithProviders from "./wrappers/WrapperWithProviders";

const customRender = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(ui, { wrapper: WrapperWithProviders, ...renderOptions });
};

export default customRender;
