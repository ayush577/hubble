import styled from "styled-components";

export const StyledHeader = styled.header`
  /* background-color: ${(props) => props.bg}; */

  //*Another way to do is distructuring like this
  /* background-color: ${({ bg }) => bg}; */

  //*Another way to do is global theming
  background-color: ${({ theme }) => theme.colors.header};

  padding: 40px 0;
`;
