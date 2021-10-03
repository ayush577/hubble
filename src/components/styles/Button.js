import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.bg || "transparent"};
  border: ${(props) => props.border || "1px solid hsl(322, 100%, 66%)"};
  color: ${(props) => props.color || "hsl(322, 100%, 66%)"};
  padding: ${(props) => props.paddingValue || "10px 20px"};

  box-shadow: ${(props) =>
    props.bs ? "0px 5px 10px rgba(0, 0, 0, 15%)" : "none"};

  font-weight: ${(props) => (props.fw ? "600" : "400")};

  border-radius: ${({ br }) => br || "50px"};
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.fw &&
    css`
      letter-spacing: 1px;

      &:hover {
        background-color: hsl(321, 100%, 78%);
        color: #fff;
      }
    `}

  ${(props) =>
    !props.bg &&
    css`
      &:hover {
        border: "1px solid hsl(321, 100%, 78%)";
        color: hsl(321, 100%, 78%);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 5%);
      }
    `}
`;
