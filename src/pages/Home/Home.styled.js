import styled from "@emotion/styled";

import sms from "../../images/sms.png";

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;
  width: 1280px;
  height: 550px;
  text-align: center;

  background-image: url(${sms});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 900px 500px;
`;

export const HeroText = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;

  font-weight: 900;
  font-size: 30px;
  line-height: 1.6153;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const HeroSubText = styled.p`
  position: absolute;
  max-width: 350px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  right: 200px;
  top: 280px;
`;
