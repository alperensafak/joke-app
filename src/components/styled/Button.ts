import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
    theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors?.grey};
 
  border-radius: 5px;
  border: none;
`;

export default Button;