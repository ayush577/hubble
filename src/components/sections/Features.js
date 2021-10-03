import styled, { css } from "styled-components";
import { Container } from "../styles/Container.styled";

const Background = styled.section`
  position: relative;
  background-color: ${(props) =>
    props.bg ? "hsl(207, 100%, 98%)" : "transparent"};
  margin: 250px auto;
  height: 400px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.curves &&
    css`
      &::before {
        content: "";
        background: url("./bg-section-top-desktop-1.svg") no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 200px;
        top: -200px;
        z-index: -1;
      }

      &::after {
        content: "";
        background: url("./bg-section-bottom-desktop-1.svg") no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 200px;
        bottom: -200px;
        z-index: -1;
      }
    `}
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StylePara = styled.p`
  width: 400px;
  font-size: 16px;
  color: #333333;
`;

const GrowTogether = () => {
  return (
    <Background bg curves>
      <Container>
        <FlexWrapper>
          <div className="content">
            <h3>Grow Together</h3>
            <StylePara>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </StylePara>
          </div>
          <div className="illustration">
            <img
              src="illustration-grow-together.svg"
              width="400px"
              alt="Grow Together"
            />
          </div>
        </FlexWrapper>
      </Container>
    </Background>
  );
};

const FlowConversations = () => {
  return (
    <Background>
      <Container>
        <FlexWrapper>
          <div className="illustration">
            <img
              src="illustration-flowing-conversation.svg"
              width="400px"
              alt="Flowing Conversation"
            />
          </div>
          <div className="content">
            <h3>Flow Conversations</h3>
            <StylePara>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </StylePara>
          </div>
        </FlexWrapper>
      </Container>
    </Background>
  );
};

const YourUsers = () => {
  return (
    <Background bg curves>
      <Container>
        <FlexWrapper>
          <div className="content">
            <h3>Your Users</h3>
            <StylePara>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </StylePara>
          </div>
          <div className="illustration">
            <img
              src="illustration-your-users.svg"
              width="400px"
              alt="Your Users"
            />
          </div>
        </FlexWrapper>
      </Container>
    </Background>
  );
};

export { GrowTogether, FlowConversations, YourUsers };
