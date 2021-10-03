import styled, { css } from "styled-components";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Background = styled.section`
  position: relative;
  background-color: ${(props) =>
    props.bg ? "hsl(192, 100%, 9%)" : "transparent"};
  margin-top: 250px;
  height: 500px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.curves &&
    css`
      &::before {
        content: "";
        background: url("./bg-footer-top-desktop.svg") no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 200px;
        top: -200px;
        z-index: -1;
      }
    `}
`;

const Flexwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contentwrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin-top: ${margin};
    `}
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  margin-top: 30px;
  line-height: 160%;

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin-top: ${noMargin === true ? "0" : noMargin};
    `}
`;

const Contactdetails = styled.span`
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  line-height: 160%;
  margin-left: 15px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 13px;
  margin-right: 10px;
  background: #fff;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #222;
  }
  &:focus {
    outline: none;
  }
`;

export default function Footer() {
  return (
    <Background bg curves>
      <Container>
        <Flexwrapper>
          <Contentwrapper>
            <img src="../logo-white.svg" alt="logo" />
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem
            </Paragraph>
            <Contentwrapper row>
              <img src="icon-phone.svg" alt="phone" />
              <Contactdetails>Phone: +1-543-123-4567</Contactdetails>
            </Contentwrapper>
            <Contentwrapper row>
              <img src="icon-email.svg" alt="email" />
              <Contactdetails>example@huddle.com</Contactdetails>
            </Contentwrapper>
            <Contentwrapper row margin="50px">
              <AiFillFacebook
                color="#fff"
                size="40"
                style={{ marginRight: "20px" }}
              />
              <AiOutlineInstagram
                color="#fff"
                size="40"
                style={{ marginRight: "20px" }}
              />
              <AiOutlineTwitter color="#fff" size="40" />
            </Contentwrapper>
          </Contentwrapper>
          <Contentwrapper>
            <span
              style={{
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "1px",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Newsletter
            </span>
            <Paragraph noMargin="20px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              ipsa nam debitis nostrum deleniti omnis!
            </Paragraph>
            <Contentwrapper row>
              <Input type="email" name="newletter" />
              <Button
                paddingValue="15px 30px"
                border="0"
                br="5px"
                bg="hsl(322, 100%, 66%)"
                color="#fff"
                bs
                fw
              >
                Subscribe
              </Button>
            </Contentwrapper>
          </Contentwrapper>
        </Flexwrapper>
      </Container>
    </Background>
  );
}
