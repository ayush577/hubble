import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button";

const Wrapper = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

const Subheading = styled.p`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  margin-bottom: ${(props) => props.mb || "20px"};
`;

const ImgContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Build The Community Your Fans Will Love</Heading>
        <Subheading>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Subheading>
        <Button
          paddingValue="20px 70px"
          border="0"
          bg="hsl(322, 100%, 66%)"
          color="#fff"
          bs
          fw
        >
          Get started for free
        </Button>
        <ImgContainer>
          <img src="./screen-mockups.svg" alt="mockups" />
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};

export { Hero };
