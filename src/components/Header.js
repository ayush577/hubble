import styled from "styled-components";
import { Button } from "./styles/Button";
import { Container } from "./styles/Container.styled";
import { StyledHeader } from "./styles/Header.styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <img src="./logo.svg" height="40" alt="logo" />
          <Button>Try it free</Button>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
