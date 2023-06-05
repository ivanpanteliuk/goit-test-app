import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background: var(--accent-gradient);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  color: var(--black-color);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  background-color: var(--secondary-color);
  text-shadow: 0 6px 10px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  &:hover {
    color: var(--white-color);
    transform: translateY(-5px);
    text-shadow: 0 6px 10px rgba(0, 0, 0);
  }

  &.active {
    color: var(--white-color);
    text-shadow: 0 6px 10px rgba(0, 0, 0);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    background-color: var(--button-active-color);
  }

  &.active:hover {
    color: var(--black-color);
    text-shadow: 0 6px 10px rgba(71, 28, 169);
  }
`;
