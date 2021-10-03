import styled from "styled-components";
import { Container } from "../styles/Container.styled";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BigStates = styled.h2`
  font-size: 80px;
  font-weight: 700;
  margin: 0;
`;

const Statistics = () => {
  return (
    <Container>
      <FlexWrapper>
        <div className="states">
          <img src="./icon-communities.svg" width="40" alt="communities" />
          <BigStates>1.4k+</BigStates>
          <p>Communities Formed</p>
        </div>
        <div className="states">
          <img src="./icon-messages.svg" width="40" alt="communities" />
          <BigStates>2.7m+</BigStates>
          <p>Messages Sent</p>
        </div>
      </FlexWrapper>
    </Container>
  );
};

export { Statistics };
