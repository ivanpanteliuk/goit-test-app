import styled from "@emotion/styled";
import { Button } from "../../components/TweetCard/TweetCard.styles";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 110px) / 3);
`;

export const LoadMoreBtn = styled(Button)`
  background: var(--secondary-color);

  &:hover {
    color: var(--black-color);
  }
`;

export const GoBackBtn = styled(Link)`
  position: fixed;
  top: 130px;
  left: 200px;
  // display: block;
  padding: 14px 28px;
  // margin-bottom: 26px;
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

  background: var(--secondary-color);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover {
    color: var(--black-color);
    transform: scale(1.05);
    text-shadow: 0 6px 10px rgba(0, 0, 0);
    background: var(--button-active-color);
  }
`;
