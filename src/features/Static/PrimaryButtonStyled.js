import styled from "styled-components";

export const PrimaryButtonStyled = styled.button`
  font-size: calc(10px + 2vmin);
  padding: 0.5vmin 1.5vmin 0.5vmin 1.5vmin;
  color: #fff;
  border: 1.5px solid #324bff;
  border-radius: 3vmin;
  background-color: #324bff;
  transition: 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: #003399;
    transform: scale(1.1);
  }
`;