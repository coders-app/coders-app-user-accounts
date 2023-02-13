import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__box {
      padding: 8px;
    }

    &__message {
      font-size: 0.75rem;
      align-self: flex-start;
    }
  }

  .button {
    padding: 8px;
    background-color: ${({ theme: { colors } }) => colors.brands.base};
    border: 0;
  }
`;

export default LoginFormStyled;