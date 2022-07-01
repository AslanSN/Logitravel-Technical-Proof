import styled from "styled-components";

export const SecondaryButtonStyled = styled.button`
  font-size: calc(10px + 2vmin);
  padding: 0.5vmin 1.5vmin 0.5vmin 1.5vmin;
  color: #324bff;
  border: 1.5px solid #324bff;
  border-radius: 3vmin;
  background-color: #fff;
  transition: background-color 0.15s ease-in-out;

  :hover,
  :focus {
    background-color: #324bff;
    color: #fff;
  }
`;