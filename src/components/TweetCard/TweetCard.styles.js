import styled from "@emotion/styled";
import cardBackground from "../../images/card-background.png";
import cardLogo from "../../images/card-logo.png";

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;

  background: url(${cardLogo}) no-repeat 20px 20px, var(--accent-gradient);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 380px;
    height: 8px;
    top: 214px;
    left: 0;

    background: var(--secondary-color);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const BgWrapper = styled.div`
  width: 308px;
  height: 168px;
  background: center url(${cardBackground}) no-repeat;
  margin-bottom: 72px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 178px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--accent-gradient);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  border: 8px solid var(--secondary-color);
  z-index: 1;
`;

export const CardText = styled.p`
  margin-top: 16px;
  text-transform: uppercase;
  text-align: center;

  color: var(--secondary-color);
`;

export const Button = styled.button`
  display: block;
  padding: 14px 28px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  width: 196px;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: var(--button-text-color);
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;

  background: ${(props) => props.bgColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover {
    color: ${(props) => props.hoverColor};
    transform: scale(1.05);
    text-shadow: 0 6px 10px rgba(0, 0, 0);
    background: var(--button-active-color);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;
