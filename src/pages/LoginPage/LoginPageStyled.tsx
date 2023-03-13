import styled from "styled-components";

const LoginPageStyled = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.block};
  display: flex;
  flex-direction: column;

  .login {
    &__link {
      font-size: 0.9rem;
      margin-top: 20px;
    }
  }
`;

export default LoginPageStyled;
