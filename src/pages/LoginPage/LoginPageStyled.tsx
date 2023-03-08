import styled from "styled-components";

const LoginPageStyled = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.block};
  display: flex;
  flex-direction: column;
  .login {
    &__link {
      padding: 8px;
      color: ${({ theme: { colors } }) => colors.brands.base};
      border: 0.1rem solid ${({ theme: { colors } }) => colors.brands.base};
      margin: 20px 0;
      width: max-content;
    }
  }
`;

export default LoginPageStyled;
