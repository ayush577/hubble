import styled from "styled-components";

import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button";

const StyledHeading = styled.h4`
  font-size: 30px;
  font-weight: 800;
`;

const FlexWrapper = styled.section`
  margin: 150px auto;
  height: 400px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const BuildCommunities = () => {
  return (
    <FlexWrapper>
      <Container>
        <StyledHeading>Ready to Build Your Community ?</StyledHeading>
        <Button
          paddingValue="20px 70px"
          border="0"
          bg="hsl(322, 100%, 66%)"
          color="#fff"
          bs
          fw
        >
          Get Started For Free
        </Button>
      </Container>
    </FlexWrapper>
  );
};

export { BuildCommunities };
