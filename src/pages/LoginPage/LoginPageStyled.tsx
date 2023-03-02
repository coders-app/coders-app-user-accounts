import styled from "styled-components";

const LoginPageStyled = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.block};
  display: flex;
  flex-direction: column;
  .login {
    &__link {
      padding: 8px;
      color: #2daae1;
      border: 0.1rem solid #2daae1;
      margin: 20px 0;
      width: max-content;
    }
  }
`;

export default LoginPageStyled;
