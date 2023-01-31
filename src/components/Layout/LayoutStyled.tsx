import styled from "styled-components";

const LayoutStyled = styled.div`
  padding: ${({
    theme: {
      paddings: { layoutPadding },
    },
  }) => layoutPadding};
`;

export default LayoutStyled;
